'use client';

import { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

// Define a reusable type
type SourceIPEvent = {
  ip: string;
  events: number;
};

export default function SourceIPBar() {
  const [data, setData] = useState<SourceIPEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/events-by-source-ip`);
        const apiData = await res.json();

        if (apiData?.data) {
          const formatted: SourceIPEvent[] = apiData.data.map(
            (item: Record<string, number>) => {
              const [ip, events] = Object.entries(item)[0];
              return { ip, events };
            }
          );

          // Sort by events (descending) and take top 5
          const topFive: SourceIPEvent[] = formatted
            .sort((a: SourceIPEvent, b: SourceIPEvent) => b.events - a.events)
            .slice(0, 5);

          setData(topFive);
        }
      } catch (err) {
        console.error('Error fetching events-by-source-ip:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="relative">
      {/* Chart Container with Gradient Background */}
      <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg border border-gray-100">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            Top Source IPs
          </h3>
          <p className="text-sm text-gray-600">
            Most active source IP addresses
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex flex-col items-center justify-center h-120 space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="text-gray-500 font-medium">Loading chart data...</p>
          </div>
        ) : data.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-120 space-y-4">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <p className="text-gray-500 font-medium">No data available</p>
          </div>
        ) : (
          <div className="h-120">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 10, right: 30, left: 50, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis type="number" tick={{ fontSize: 12, fill: '#6b7280' }} />
            <YAxis type="category" dataKey="ip" tick={{ fontSize: 12, fill: '#6b7280' }} width={60} />
            <Tooltip
              contentStyle={{
                borderRadius: '8px',
                fontSize: '13px',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              }}
            />
            <Bar dataKey="events" fill="#f59e0b" radius={[0, 4, 4, 0]} />
            </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
}
