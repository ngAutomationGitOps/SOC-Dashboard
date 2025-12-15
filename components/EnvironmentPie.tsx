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

type DataItem = {
  name: string;
  value: number;
};

const COLORS = [
  '#14B8A6', '#3366CC', '#FF9900', '#DC3912', '#990099',
  '#0099C6', '#109618', '#FF6600', '#00544d', '#6366f1', '#dc2626'
];

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

export default function EnvironmentPie() {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/vuln-by-department`);
        const json = await res.json();

        if (json?.percentages) {
          const formatted: DataItem[] = Object.entries(json.percentages).map(
            ([name, value]) => ({
              name,
              value: Number(value),
            })
          );
          setData(formatted);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center p-6">Loading...</div>;
  }

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
