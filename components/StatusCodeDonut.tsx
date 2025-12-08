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

const COLORS = ['#10b981', '#f59e0b', '#f97316', '#ef4444'];

export default function StatusCodeDonut() {
  const [data, setData] = useState<{ name: string; value: number }[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE}/events-by-status`)
      .then(res => res.json())
      .then(apiData => {
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
      })
      .catch(err => console.error('Error fetching events-by-status:', err));
  }, []);

  return (
    <div className="h-full flex flex-col p-4 lg:p-6">
      {/* Modern Header */}
      <div className="flex items-center space-x-3 mb-4 lg:mb-6 flex-shrink-0">
        <div className="p-2 lg:p-3 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl shadow-lg flex-shrink-0">
          <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
          </svg>
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-lg lg:text-xl font-bold text-gray-900 tracking-tight">Status Distribution</h3>
          <p className="text-sm text-gray-600 font-medium">HTTP Response Codes</p>
        </div>
      </div>

      {/* Chart Container */}
      <div className="flex-1 min-h-0 flex flex-col">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius="clamp(60px, 25vw, 80px)"
              innerRadius="clamp(30px, 12vw, 40px)"
              paddingAngle={3}
              label={typeof window !== 'undefined' && window.innerWidth >= 768}
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth={1}
                />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number, name: string) => [
                `${value} (${data.length > 0 ? ((value / data.reduce((sum, item) => sum + item.value, 0)) * 100).toFixed(1) : 0}%)`,
                name
              ]}
              contentStyle={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(0, 0, 0, 0.1)",
                borderRadius: "12px",
                color: "#1e293b",
                fontSize: "clamp(12px, 2.5vw, 14px)",
                fontWeight: "600",
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                padding: "clamp(10px, 2vw, 14px)",
              }}
            />
            <Legend
              verticalAlign="bottom"
              height={40}
              iconType="circle"
              wrapperStyle={{
                fontSize: "clamp(12px, 2.5vw, 14px)",
                fontWeight: "500",
                color: '#374151',
                paddingTop: "clamp(12px, 2vw, 16px)",
              }}
            />
          </PieChart>
        </ResponsiveContainer>

        {/* Enhanced Status Summary */}
        {data.length > 0 && (
          <div className="mt-4 lg:mt-6 grid grid-cols-2 gap-2 lg:gap-3 flex-shrink-0">
            {data.slice(0, 4).map((item, index) => (
              <div key={item.name} className="flex items-center space-x-2 p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <div
                  className="w-3 h-3 lg:w-4 lg:h-4 rounded-full flex-shrink-0 shadow-sm"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                ></div>
                <span className="text-sm font-medium text-gray-700 truncate">
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
