'use client';

import React, { useEffect, useState } from 'react';
import { Activity, Server, Users, AlertCircle } from 'lucide-react';

interface CounterData {
  title: string;
  value: number;
  color: string;
  icon: React.ReactNode;
  change?: number;
  loading: boolean;
  error?: string;
}

export default function EventCounterCards() {
  const [counters, setCounters] = useState<CounterData[]>([
    {
      title: 'Total Events',
      value: 0,
      color: 'text-blue-600',
      icon: <Activity className="w-6 h-6" />,
      loading: true
    },
    {
      title: 'Active Servers',
      value: 0,
      color: 'text-green-600',
      icon: <Server className="w-6 h-6" />,
      loading: true
    },
    {
      title: 'Active Users',
      value: 0,
      color: 'text-purple-600',
      icon: <Users className="w-6 h-6" />,
      loading: true
    },
  ]);

  const animateCount = (start: number, end: number, duration: number = 1500): Promise<number> => {
    return new Promise((resolve) => {
      let startTime: number | null = null;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const currentValue = Math.floor(progress * (end - start) + start);

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          resolve(end);
        }

        return currentValue;
      };

      requestAnimationFrame(step);
    });
  };

  const fetchCounterData = async () => {
    try {
      const [serverRes, eventRes, userRes] = await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_API_BASE}/get-Agents`),
        fetch(`${process.env.NEXT_PUBLIC_API_BASE}/event-count`),
        fetch(`${process.env.NEXT_PUBLIC_API_BASE}/user-count`),
      ]);

      const [serverData, eventData, userData] = await Promise.all([
        serverRes.json(),
        eventRes.json(),
        userRes.json(),
      ]);

      // Update counters with fetched data
      setCounters(prevCounters => {
        const newCounters = [...prevCounters];

        // Events counter
        if (eventData?.count !== undefined) {
          newCounters[0] = {
            ...newCounters[0],
            loading: false,
          };
          animateCount(0, eventData.count).then(finalValue => {
            setCounters(current => current.map((counter, idx) =>
              idx === 0 ? { ...counter, value: finalValue, loading: false } : counter
            ));
          });
        }

        // Servers counter
        if (serverData?.count !== undefined) {
          newCounters[1] = {
            ...newCounters[1],
            loading: false,
          };
          animateCount(0, serverData.count).then(finalValue => {
            setCounters(current => current.map((counter, idx) =>
              idx === 1 ? { ...counter, value: finalValue, loading: false } : counter
            ));
          });
        }

        // Users counter
        if (userData?.count !== undefined) {
          newCounters[2] = {
            ...newCounters[2],
            loading: false,
          };
          animateCount(0, userData.count).then(finalValue => {
            setCounters(current => current.map((counter, idx) =>
              idx === 2 ? { ...counter, value: finalValue, loading: false } : counter
            ));
          });
        }

        return newCounters;
      });
    } catch (error) {
      console.error('Error fetching counter data:', error);
      setCounters(prevCounters =>
        prevCounters.map(counter => ({
          ...counter,
          loading: false,
          error: 'Failed to load data'
        }))
      );
    }
  };

  useEffect(() => {
    fetchCounterData();

    // Auto-refresh every 30 seconds for monitoring dashboard
    const interval = setInterval(fetchCounterData, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {counters.map((counter, index) => (
        <div
          key={counter.title}
          className="card card-hover p-6 text-center flex flex-col items-center justify-center"
        >
          <div className="flex items-center justify-center mb-4">
            <div className={`p-3 rounded-lg bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm border border-white/20 ${counter.color.replace('text-', 'text-')} shadow-sm`}>
              {counter.icon}
            </div>
            {counter.loading && (
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse ml-2"></div>
            )}
          </div>

          <div className="space-y-2">
            <p className="text-sm lg:text-base text-gray-600 font-medium">{counter.title}</p>
            <div className="flex flex-col items-center space-y-1">
              <span className={`text-2xl lg:text-3xl font-bold ${counter.color}`}>
                {counter.loading ? '...' : counter.value.toLocaleString()}
              </span>
              {counter.change !== undefined && (
                <span className={`text-sm ${counter.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {counter.change >= 0 ? '+' : ''}{counter.change}%
                </span>
              )}
            </div>
            {counter.error && (
              <div className="flex items-center text-red-600 text-xs mt-2">
                <AlertCircle className="w-3 h-3 mr-1" />
                {counter.error}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
