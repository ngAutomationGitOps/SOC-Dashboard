// 'use client';

// import { useEffect, useState } from 'react';
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   ResponsiveContainer,
//   Legend,
// } from 'recharts';

// const COLORS = [
//   '#4CAF50', '#1E3A8A', '#FBBF24', '#EF4444', '#8B5CF6',
//   '#10B981', '#F97316', '#3B82F6', '#EAB308', '#06B6D4', '#DC2626',
// ];

// export default function SO_SeverityDonut() {
//   const [chartData, setChartData] = useState<{ name: string; value: number }[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/so-events-by-rule`);
//         const json = await res.json();

//         if (json?.data) {
//           const formatted = Object.entries(json.data)
//             .map(([name, value]) => ({
//               name,
//               value: Number(value),
//             }))
//             .filter(item => item.value > 0);
//           setChartData(formatted);
//         }
//       } catch (err) {
//         console.error('Error fetching severity data:', err);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchData();
//   }, []);

//   const total = chartData.reduce((sum, d) => sum + d.value, 0);

//   // Custom legend renderer with arrow
//   const renderLegend = (props: any) => {
//     const { payload } = props;
//     return (
//       <div style={{
//         display: 'flex',
//         flexWrap: 'wrap',
//         justifyContent: 'center',
//         gap: '12px',
//         paddingTop: '10px'
//       }}>
//         {payload.map((entry: any, index: number) => (
//           <div key={`legend-${index}`} style={{ display: 'flex', alignItems: 'center', fontSize: 13 }}>
//             <span style={{ color: entry.color, marginRight: 4 }}>➤</span>
//             <span>{entry.value}</span>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div
//       className="bg-white p-4 rounded-xl shadow"
//       style={{ height: '550px', width: '100%' }}
//     >
//       <ResponsiveContainer width="100%" height="100%">
//         <PieChart>
//           <Pie
//             data={chartData.length > 0 ? chartData : [{ name: '', value: 1 }]}
//             dataKey="value"
//             nameKey="name"
//             cx="50%"
//             cy="40%"
//             innerRadius={80}
//             outerRadius={120}
//             stroke="none"
//           >
//             {chartData.map((_, idx) => (
//               <Cell
//                 key={`cell-${idx}`}
//                 fill={COLORS[idx % COLORS.length]}
//               />
//             ))}
//           </Pie>

//           {/* Center Text */}
//           <text
//             x="50%"
//             y="40%"
//             textAnchor="middle"
//             dominantBaseline="middle"
//             fontSize="14"
//             fill="#888"
//           >
//             {loading ? "Loading..." : chartData.length === 0 ? "No data" : ""}
//           </text>

//           <Tooltip
//             formatter={(value: number, name: string) =>
//               [`${value} (${((value / total) * 100).toFixed(1)}%)`, name]
//             }
//           />

//           {/* Custom legend with arrow */}
//           <Legend
//             content={renderLegend}
//             layout="horizontal"
//             align="center"
//             verticalAlign="bottom"
//           />
//         </PieChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }


'use client';

import { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';

// Modern color palette with gradients
const COLORS = [
  '#3B82F6', // Blue
  '#EF4444', // Red
  '#F59E0B', // Amber
  '#10B981', // Emerald
  '#8B5CF6', // Purple
  '#F97316', // Orange
  '#06B6D4', // Cyan
  '#84CC16', // Lime
  '#EC4899', // Pink
  '#6B7280', // Gray
];

// Custom gradient definitions
const GRADIENTS = [
  { id: 'blueGradient', start: '#3B82F6', end: '#1D4ED8' },
  { id: 'redGradient', start: '#EF4444', end: '#DC2626' },
  { id: 'amberGradient', start: '#F59E0B', end: '#D97706' },
  { id: 'emeraldGradient', start: '#10B981', end: '#059669' },
  { id: 'purpleGradient', start: '#8B5CF6', end: '#7C3AED' },
  { id: 'orangeGradient', start: '#F97316', end: '#EA580C' },
  { id: 'cyanGradient', start: '#06B6D4', end: '#0891B2' },
  { id: 'limeGradient', start: '#84CC16', end: '#65A30D' },
  { id: 'pinkGradient', start: '#EC4899', end: '#DB2777' },
  { id: 'grayGradient', start: '#6B7280', end: '#4B5563' },
];

// Custom tooltip component
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0];
    const total = payload[0].payload.total || data.value; // Assuming total is passed in data
    const percentage = total > 0 ? ((data.value / total) * 100).toFixed(1) : '0.0';

    return (
      <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
        <p className="font-semibold text-gray-900 mb-2">{label}</p>
        <div className="flex items-center gap-2">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: data.color }}
          />
          <span className="text-sm text-gray-600">
            Count: <span className="font-semibold text-gray-900">{data.value}</span>
          </span>
        </div>
        <div className="text-xs text-gray-500 mt-1">
          {percentage}% of total
        </div>
      </div>
    );
  }
  return null;
};

export default function SO_SeverityBarVertical() {
  const [chartData, setChartData] = useState<{ name: string; value: number; total?: number }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/so-events-by-rule`);
        const json = await res.json();

        if (json?.data) {
          const formatted = Object.entries(json.data)
            .map(([name, value]) => ({
              name,
              value: Number(value),
            }))
            .filter(item => item.value > 0)
            .sort((a, b) => b.value - a.value); // Sort by value descending

          const total = formatted.reduce((sum, item) => sum + item.value, 0);
          const dataWithTotal = formatted.map(item => ({ ...item, total }));

          setChartData(dataWithTotal);
        }
      } catch (err) {
        console.error('Error fetching severity data:', err);
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
            Events by Rule Distribution
          </h3>
          <p className="text-sm text-gray-600">
            Security events categorized by rule type
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex flex-col items-center justify-center h-80 space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="text-gray-500 font-medium">Loading chart data...</p>
          </div>
        ) : chartData.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-80 space-y-4">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <p className="text-gray-500 font-medium">No data available</p>
          </div>
        ) : (
          <div className="h-120">
            {/* SVG Definitions for Gradients */}
            <svg width="0" height="0">
              <defs>
                {GRADIENTS.map((gradient) => (
                  <linearGradient key={gradient.id} id={gradient.id} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor={gradient.start} />
                    <stop offset="100%" stopColor={gradient.end} />
                  </linearGradient>
                ))}
              </defs>
            </svg>

            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{ top: 20, right: 30, left: 20, bottom: 100 }}
                barCategoryGap="25%"
              >
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#6B7280' }}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                  interval={0}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#6B7280' }}
                  width={60}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar
                  dataKey="value"
                  radius={[6, 6, 0, 0]}
                  maxBarSize={60}
                >
                  {chartData.map((_, idx) => (
                    <Cell
                      key={`cell-${idx}`}
                      fill={`url(#${GRADIENTS[idx % GRADIENTS.length].id})`}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Footer Stats */}
        {/* {!loading && chartData.length > 0 && (
          <div className="mt-6 pt-4 border-t border-gray-100">
            <div className="flex justify-between items-center text-sm text-gray-600">
              <span>Total Events: <span className="font-semibold text-gray-900">{chartData.reduce((sum, item) => sum + item.value, 0).toLocaleString()}</span></span>
              <span>Categories: <span className="font-semibold text-gray-900">{chartData.length}</span></span>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
}
