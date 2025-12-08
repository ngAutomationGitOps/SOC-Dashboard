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

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE}/events-by-dept`)
      .then(res => res.json())
      .then(apiData => {
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
      })
      .catch(err => console.error('Error fetching events-by-dept:', err));
  }, []);


  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 sm:p-6 h-full flex flex-col min-h-0">
      <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6 flex-shrink-0">
        <div className="p-1.5 sm:p-2 bg-red-100 rounded-lg flex-shrink-0">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
          </svg>
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 truncate">Environment Breakdown</h3>
          <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">Events by department</p>
        </div>
      </div>

      <div className="flex-1 min-h-0 flex flex-col">
        <ResponsiveContainer width="100%" height="100%" minHeight={200}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={typeof window !== 'undefined' && window.innerWidth < 640 ? 50 : 70}
              innerRadius={typeof window !== 'undefined' && window.innerWidth < 640 ? 25 : 35}
              paddingAngle={2}
              label={typeof window !== 'undefined' && window.innerWidth >= 640}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number, name: string) => [
                `${value} (${data.length > 0 ? ((value / data.reduce((sum, item) => sum + item.value, 0)) * 100).toFixed(1) : 0}%)`,
                name
              ]}
              contentStyle={{
                backgroundColor: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "6px",
                color: "#1e293b",
                fontSize: typeof window !== 'undefined' && window.innerWidth < 640 ? "12px" : "14px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                padding: typeof window !== 'undefined' && window.innerWidth < 640 ? "8px" : "12px",
              }}
            />
            <Legend
              verticalAlign="bottom"
              height={typeof window !== 'undefined' && window.innerWidth < 640 ? 30 : 36}
              iconType="circle"
              wrapperStyle={{
                fontSize: typeof window !== 'undefined' && window.innerWidth < 640 ? 12 : 14,
                color: '#475569',
                paddingTop: typeof window !== 'undefined' && window.innerWidth < 640 ? 8 : 12,
              }}
            />
          </PieChart>
        </ResponsiveContainer>

        {/* Environment summary - only show on larger screens */}
        {typeof window !== 'undefined' && window.innerWidth >= 640 && data.length > 0 && (
          <div className="mt-4 grid grid-cols-2 gap-3 flex-shrink-0">
            {data.slice(0, 4).map((item, index) => (
              <div key={item.name} className="flex items-center space-x-2">
                <div
                  className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                ></div>
                <span className="text-xs sm:text-sm text-gray-600 truncate">
                  {item.name}: {item.value}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
