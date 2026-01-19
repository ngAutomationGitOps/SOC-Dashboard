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

const COLORS = ['#ef4444', '#3b82f6', '#10b981', '#f59e0b'];

// export default function EnvironmentDonut() {
//   const [data, setData] = useState<{ name: string; value: number }[]>([]);

//   useEffect(() => {
//     fetch(`${process.env.NEXT_PUBLIC_API_BASE}/events-by-dept`)
//       .then(res => res.json())
//       .then(apiData => {
//         if (apiData?.data) {
//           // Convert API format { "PROD": 215 } -> { name: "PROD", value: 215 }
//           const formatted = apiData.data.map((item: Record<string, number>) => {
//             const [name, value] = Object.entries(item)[0];
//             return { name, value };
//           });

//           // Filter out TOTAL row
//           const cleaned = formatted.filter(d => d.name.toUpperCase() !== 'TOTAL');

//           setData(cleaned);
//         }
//       })
//       .catch(err => console.error('Error fetching events-by-dept:', err));
//   }, []);

type DataItem = { name: string; value: number };

export default function EnvironmentDonut() {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/events-by-dept`);
        const apiData = await res.json();

        if (apiData?.data) {
          // Convert API format { "PROD": 215 } -> { name: "PROD", value: 215 }
          const formatted: DataItem[] = apiData.data.map(
            (item: Record<string, number>) => {
              const [name, value] = Object.entries(item)[0];
              return { name, value };
            }
          );

          // ✅ TS now knows d: DataItem
          const cleaned = formatted.filter(
            (d: DataItem) => d.name.toUpperCase() !== 'TOTAL'
          );

          setData(cleaned);
        }
      } catch (err) {
        console.error('Error fetching events-by-dept:', err);
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
            Environment Distribution
          </h3>
          <p className="text-sm text-gray-600">
            Events by environment type
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
              outerRadius="70%"
              innerRadius="40%"
              paddingAngle={4}
              label={({ percent }) => percent > 0.05 ? `${(percent * 100).toFixed(0)}%` : ''}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  stroke="#ffffff"
                  strokeWidth={2}
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
                name
              ]}
            />
            <Legend
              verticalAlign="bottom"
              align="center"
              iconType="circle"
              wrapperStyle={{
                fontSize: '12px',
                color: '#6b7280',
                paddingTop: '12px',
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
