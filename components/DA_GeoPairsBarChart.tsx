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
    <div className="bg-white p-4 rounded-xl shadow border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-600 mb-3">GEO PAIRS</h2>
      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 20, left: 0, bottom: 20 }}
          >
            <XAxis dataKey="name" tick={{ fill: '#555' }} />
            <YAxis tick={{ fill: '#555' }} />
            <Tooltip
              cursor={{ fill: 'rgba(0,0,0,0.05)' }}
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #ddd',
                borderRadius: '8px',
              }}
            />
            <Bar dataKey="value" barSize={16} fill="#1d4877" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
