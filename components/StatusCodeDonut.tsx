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
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%" minHeight={320}>
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
              `${value}%`,
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
  );
}
