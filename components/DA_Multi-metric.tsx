"use client";
import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Activity, TrendingUp, AlertTriangle } from 'lucide-react';

// Enhanced data structure for monitoring metrics
interface MetricData {
  time: string;
  host: number;
  network: number;
  security: number;
  system: number;
  application: number;
}

const initialData: MetricData[] = [
  { time: "00:00", host: 20, network: 15, security: 8, system: 12, application: 10 },
  { time: "04:00", host: 25, network: 18, security: 10, system: 15, application: 12 },
  { time: "08:00", host: 30, network: 20, security: 15, system: 18, application: 16 },
  { time: "12:00", host: 40, network: 28, security: 20, system: 25, application: 22 },
  { time: "16:00", host: 45, network: 30, security: 25, system: 30, application: 25 },
  { time: "20:00", host: 35, network: 25, security: 20, system: 20, application: 18 },
];

const metricColors = {
  host: { stroke: '#3b82f6', fill: '#3b82f6' }, // Blue
  network: { stroke: '#10b981', fill: '#10b981' }, // Green
  security: { stroke: '#f59e0b', fill: '#f59e0b' }, // Yellow/Orange
  system: { stroke: '#ef4444', fill: '#ef4444' }, // Red
  application: { stroke: '#8b5cf6', fill: '#8b5cf6' }, // Purple
};

const metricLabels = {
  host: 'Host Events',
  network: 'Network Events',
  security: 'Security Events',
  system: 'System Events',
  application: 'Application Events',
};

export default function EventsOverTimeChart() {
  const [data, setData] = useState<MetricData[]>(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Simulate real-time data updates for monitoring dashboard
  useEffect(() => {
    const interval = setInterval(() => {
      setData(currentData => {
        const newData = [...currentData];
        // Add some realistic variation to simulate live monitoring
        const lastEntry = newData[newData.length - 1];
        const newEntry: MetricData = {
          time: new Date().toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit'
          }),
          host: Math.max(0, lastEntry.host + (Math.random() - 0.5) * 10),
          network: Math.max(0, lastEntry.network + (Math.random() - 0.5) * 8),
          security: Math.max(0, lastEntry.security + (Math.random() - 0.5) * 6),
          system: Math.max(0, lastEntry.system + (Math.random() - 0.5) * 12),
          application: Math.max(0, lastEntry.application + (Math.random() - 0.5) * 8),
        };

        // Keep only last 12 data points for better visualization
        if (newData.length >= 12) {
          newData.shift();
        }
        newData.push(newEntry);
        return newData;
      });
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full flex flex-col p-4 lg:p-6">
      {/* Modern Header */}
      <div className="flex items-center justify-between mb-4 lg:mb-6 flex-shrink-0">
        <div className="flex items-center space-x-3">
          <div className="p-2 lg:p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl shadow-lg flex-shrink-0">
            <Activity className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-lg lg:text-xl font-bold text-gray-900 tracking-tight">Event Timeline</h3>
            <p className="text-sm text-gray-600 font-medium">Real-time Security Metrics</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-emerald-600 flex-shrink-0">
          <div className="w-2 h-2 lg:w-3 lg:h-3 bg-emerald-500 rounded-full animate-pulse shadow-sm"></div>
          <span className="text-sm font-semibold hidden lg:inline">Live Monitoring</span>
        </div>
      </div>

      {/* Error Display */}
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-3 flex-shrink-0">
          <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0" />
          <span className="text-sm font-medium text-red-700">{error}</span>
        </div>
      )}

      {/* Chart Container */}
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 20
            }}
          >
            <defs>
              {Object.entries(metricColors).map(([key, colors]) => (
                <linearGradient key={key} id={`gradient${key}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={colors.fill} stopOpacity={0.4}/>
                  <stop offset="50%" stopColor={colors.fill} stopOpacity={0.2}/>
                  <stop offset="100%" stopColor={colors.fill} stopOpacity={0.05}/>
                </linearGradient>
              ))}
            </defs>

            <CartesianGrid
              strokeDasharray="2 4"
              stroke="#e2e8f0"
              strokeOpacity={0.5}
              vertical={false}
            />
            <XAxis
              dataKey="time"
              stroke="#6b7280"
              tick={{
                fill: "#6b7280",
                fontSize: "clamp(11px, 2vw, 13px)",
                fontWeight: "500"
              }}
              axisLine={{ stroke: "#d1d5db" }}
              tickLine={{ stroke: "#d1d5db" }}
              interval="preserveStartEnd"
            />
            <YAxis
              stroke="#6b7280"
              tick={{
                fill: "#6b7280",
                fontSize: "clamp(11px, 2vw, 13px)",
                fontWeight: "500"
              }}
              axisLine={{ stroke: "#d1d5db" }}
              tickLine={{ stroke: "#d1d5db" }}
              width={50}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(0, 0, 0, 0.1)",
                borderRadius: "12px",
                fontSize: "clamp(12px, 2.5vw, 14px)",
                fontWeight: "600",
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                padding: "clamp(10px, 2vw, 14px)",
              }}
              labelStyle={{ color: '#374151', fontWeight: '700' }}
            />

            <Legend
              wrapperStyle={{
                paddingTop: "clamp(16px, 3vw, 20px)",
                fontSize: "clamp(12px, 2.5vw, 14px)",
                fontWeight: "500",
                color: "#374151",
              }}
              iconType="rect"
            />

            {Object.entries(metricColors).map(([key, colors]) => (
              <Area
                key={key}
                type="monotone"
                dataKey={key}
                stackId="1"
                stroke={colors.stroke}
                fill={`url(#gradient${key})`}
                strokeWidth={2}
                name={metricLabels[key as keyof typeof metricLabels]}
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
