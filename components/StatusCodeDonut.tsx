'use client';

import { useEffect, useState } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Custom label inside the pie slices
const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  if (percent < 0.08) return null; // Don't show labels for very small slices

  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#ffffff"
      textAnchor="middle"
      dominantBaseline="central"
      className="font-semibold text-xs"
      style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const COLORS = ['#10b981', '#f59e0b', '#f97316', '#ef4444'];

export default function StatusCodeDonut() {
  const [data, setData] = useState<{ name: string; value: number }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/events-by-status`);
        const apiData = await res.json();

        if (apiData?.data) {
          // Map API data into { name, value } format and exclude 'total'
          const formatted = apiData.data
            .filter((item: Record<string, number>) => !('total' in item))
            .map((item: Record<string, number>) => {
              const [name, value] = Object.entries(item)[0];
              return { name, value };
            });
          setData(formatted);
        }
      } catch (err) {
        console.error('Error fetching events-by-status:', err);
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
            Event Status Distribution
          </h3>
          <p className="text-sm text-gray-600">
            HTTP response codes and event status breakdown
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
              <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius="80%"
            innerRadius="45%"
            paddingAngle={4}
            label={renderCustomLabel}
            animationBegin={0}
            animationDuration={800}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                stroke="#ffffff"
                strokeWidth={3}
              />
            ))}
          </Pie>

          <Tooltip
            contentStyle={{
              borderRadius: '8px',
              fontSize: '13px',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            }}
            formatter={(value: number, name: string) => [
              `${value} events`,
              name,
            ]}
          />

          <Legend
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            iconType="circle"
            wrapperStyle={{
              fontSize: '11px',
              lineHeight: '18px',
              paddingTop: '12px',
              marginBottom: '8px',
            }}
          />
            </PieChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
}
