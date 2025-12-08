'use client';

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'US', value: 60 },
  { name: 'IN', value: 45 },
  { name: 'PK', value: 35 },
  { name: 'CN', value: 25 },
  { name: 'BR', value: 20 },
  { name: 'DE', value: 18 },
  { name: 'FR', value: 15 },
  { name: 'CA', value: 14 },
  { name: 'UK', value: 12 },
  { name: 'AU', value: 10 },
  { name: 'Others', value: 8 },
];

export default function SO_GeoPairsBarChart() {
  return (
    <div className="h-full flex flex-col p-4 lg:p-6">
      {/* Modern Header */}
      <div className="flex items-center space-x-3 mb-4 lg:mb-6 flex-shrink-0">
        <div className="p-2 lg:p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg flex-shrink-0">
          <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
          </svg>
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-lg lg:text-xl font-bold text-gray-900 tracking-tight">Geographic Distribution</h3>
          <p className="text-sm text-gray-600 font-medium">Top Countries by Activity</p>
        </div>
      </div>

      {/* Chart Container */}
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
            barCategoryGap="20%"
          >
            <XAxis
              dataKey="name"
              tick={{
                fill: '#6b7280',
                fontSize: 'clamp(11px, 2vw, 13px)',
                fontWeight: '500'
              }}
              axisLine={{ stroke: '#e5e7eb' }}
              tickLine={{ stroke: '#e5e7eb' }}
            />
            <YAxis
              tick={{
                fill: '#6b7280',
                fontSize: 'clamp(11px, 2vw, 13px)',
                fontWeight: '500'
              }}
              axisLine={{ stroke: '#e5e7eb' }}
              tickLine={{ stroke: '#e5e7eb' }}
            />
            <Tooltip
              cursor={{ fill: 'rgba(59, 130, 246, 0.1)' }}
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
            <Bar
              dataKey="value"
              fill="url(#barGradient)"
              radius={[4, 4, 0, 0]}
              barSize="clamp(16px, 4vw, 24px)"
            >
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#1d4ed8" stopOpacity={0.9} />
                </linearGradient>
              </defs>
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
