// 'use client';

// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   ResponsiveContainer,
//   Legend,
// } from 'recharts';

// const data = [
//   { name: 'PROD', value: 240 },
//   { name: 'Dev', value: 4810 },
//   { name: 'VDI', value: 150 },
//   { name: 'UAT', value: 60 },
//   { name: 'Production', value: 290 },
//   { name: 'DevOps', value: 120 },
// ];

// const COLORS = ['#3b82f6', '#22c55e', '#f59e0b', '#ef4444', '#6366f1', '#a855f7'];

// export default function DA_StatusPieCharts() {
//   return (
//     <div className="bg-white p-4 rounded-xl shadow" style={{ height: '500px' }}>
//       {/* Optional title */}
//       {/* <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center">
//         Environment Breakdown
//       </h2> */}

//       <ResponsiveContainer width="100%" height="100%">
//         <PieChart>
//           <Pie
//             data={data}
//             dataKey="value"
//             nameKey="name"
//             cx="50%"
//             cy="50%"
//             innerRadius={80}
//             outerRadius={140}
//             stroke="none"
//             labelLine={true}
//             // label={({ name, percent, x, y, cx }) => {
//             //   const textAnchor = x > cx ? 'start' : 'end';
//             //   return (
//             //     <text
//             //       x={x}
//             //       y={y}
//             //       textAnchor={textAnchor}
//             //       dominantBaseline="central"
//             //       fill="#374151"
//             //       fontSize={14}
//             //     >
//             //       {`${name} (${(percent * 100).toFixed(0)}%)`}
//             //     </text>
//             //   );
//             // }}

//             label={({ name, percent = 0, x, y, cx }) => {
//   const textAnchor = x > cx ? 'start' : 'end';
//   return (
//     <text
//       x={x}
//       y={y}
//       textAnchor={textAnchor}
//       dominantBaseline="central"
//       fill="#374151"
//       fontSize={14}
//     >
//       {`${name} (${(percent * 100).toFixed(0)}%)`}
//     </text>
//   );
// }}

//             paddingAngle={2}
//           >
//             {data.map((entry, idx) => (
//               <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
//             ))}
//           </Pie>
//           <Tooltip />
//           <Legend
//             verticalAlign="bottom"
//             iconType="circle"
//             wrapperStyle={{ fontSize: 14 }}
//           />
//         </PieChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }


// "use client";
// import React from "react";
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// // Dummy data — replace with API data
// const data = [
//   { time: "00:00", host: 20, ping: 15, sync: 8, cpu: 12, dns: 10 },
//   { time: "01:00", host: 25, ping: 18, sync: 10, cpu: 15, dns: 12 },
//   { time: "02:00", host: 30, ping: 20, sync: 15, cpu: 18, dns: 16 },
//   { time: "03:00", host: 40, ping: 28, sync: 20, cpu: 25, dns: 22 },
//   { time: "04:00", host: 45, ping: 30, sync: 25, cpu: 30, dns: 25 },
//   { time: "05:00", host: 35, ping: 25, sync: 20, cpu: 20, dns: 18 },
//   { time: "06:00", host: 25, ping: 18, sync: 12, cpu: 15, dns: 10 },
// ];

// export default function EventsOverTimeChart() {
//   return (
//     <div
//       className="rounded-xl border border-gray-300 p-3 shadow-sm"
//       style={{
//         backgroundColor: "#fff",
//         color: "#000",
//         height: "250px", // reduced height
//       }}
//     >
//       <h2
//         className="text-xs font-semibold mb-2 uppercase tracking-wide"
//         style={{ color: "#6b7280" }}
//       >
//         Events Over Time
//       </h2>

//       <ResponsiveContainer width="100%" height="85%">
//         <AreaChart data={data}>
//           <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
//           <XAxis
//             dataKey="time"
//             stroke="#555"
//             tick={{ fill: "#555", fontSize: 10 }}
//             axisLine={{ stroke: "#ccc" }}
//             tickLine={{ stroke: "#ccc" }}
//           />
//           <YAxis
//             stroke="#555"
//             tick={{ fill: "#555", fontSize: 10 }}
//             axisLine={{ stroke: "#ccc" }}
//             tickLine={{ stroke: "#ccc" }}
//           />
//           <Tooltip
//             contentStyle={{
//               backgroundColor: "#f9fafb",
//               border: "1px solid #ddd",
//               color: "#000",
//               fontSize: "12px",
//             }}
//             labelStyle={{ color: "#000" }}
//           />
//           <Legend
//             wrapperStyle={{
//               paddingTop: 6,
//               color: "#333",
//               fontSize: 10,
//             }}
//           />

//           <Area
//             type="monotone"
//             dataKey="host"
//             stackId="1"
//             stroke="#1d4877"
//             fill="#1d4877"
//             fillOpacity={0.5}
//           />
//           <Area
//             type="monotone"
//             dataKey="ping"
//             stackId="1"
//             stroke="#1b8a5a"
//             fill="#1b8a5a"
//             fillOpacity={0.5}
//           />
//           <Area
//             type="monotone"
//             dataKey="sync"
//             stackId="1"
//             stroke="#fbb021"
//             fill="#fbb021"
//             fillOpacity={0.5}
//           />
//           <Area
//             type="monotone"
//             dataKey="cpu"
//             stackId="1"
//             stroke="#f68838"
//             fill="#f68838"
//             fillOpacity={0.5}
//           />
//           <Area
//             type="monotone"
//             dataKey="dns"
//             stackId="1"
//             stroke="#ee3e32"
//             fill="#ee3e32"
//             fillOpacity={0.5}
//           />
//         </AreaChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }


"use client";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Dummy data — replace with API data
const data = [
  { time: "00:00", host: 20, ping: 15, sync: 8, cpu: 12, dns: 10 },
  { time: "01:00", host: 25, ping: 18, sync: 10, cpu: 15, dns: 12 },
  { time: "02:00", host: 30, ping: 20, sync: 15, cpu: 18, dns: 16 },
  { time: "03:00", host: 40, ping: 28, sync: 20, cpu: 25, dns: 22 },
  { time: "04:00", host: 45, ping: 30, sync: 25, cpu: 30, dns: 25 },
  { time: "05:00", host: 35, ping: 25, sync: 20, cpu: 20, dns: 18 },
  { time: "06:00", host: 25, ping: 18, sync: 12, cpu: 15, dns: 10 },
];

export default function EventsOverTimeChart() {
  return (
    <div
      className="rounded-xl border border-gray-300 p-5 shadow-md"
      style={{
        backgroundColor: "#ffffff",
        color: "#000000",
        height: "600px", // ⬆️ increased height
      }}
    >
      <h2
        className="text-sm font-semibold mb-4 uppercase tracking-wide"
        style={{ color: "#4b5563" }}
      >
        Events Over Time
      </h2>

      <ResponsiveContainer width="100%" height="88%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis
            dataKey="time"
            stroke="#555"
            tick={{ fill: "#555", fontSize: 11 }}
            axisLine={{ stroke: "#ccc" }}
            tickLine={{ stroke: "#ccc" }}
          />
          <YAxis
            stroke="#555"
            tick={{ fill: "#555", fontSize: 11 }}
            axisLine={{ stroke: "#ccc" }}
            tickLine={{ stroke: "#ccc" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#f9fafb",
              border: "1px solid #ddd",
              color: "#000",
              fontSize: "13px",
            }}
            labelStyle={{ color: "#000" }}
          />
          <Legend
            wrapperStyle={{
              paddingTop: 8,
              color: "#333",
              fontSize: 12,
            }}
          />

          <Area
            type="monotone"
            dataKey="host"
            stackId="1"
            stroke="#1d4877"
            fill="#1d4877"
            fillOpacity={0.5}
          />
          <Area
            type="monotone"
            dataKey="ping"
            stackId="1"
            stroke="#1b8a5a"
            fill="#1b8a5a"
            fillOpacity={0.5}
          />
          <Area
            type="monotone"
            dataKey="sync"
            stackId="1"
            stroke="#fbb021"
            fill="#fbb021"
            fillOpacity={0.5}
          />
          <Area
            type="monotone"
            dataKey="cpu"
            stackId="1"
            stroke="#f68838"
            fill="#f68838"
            fillOpacity={0.5}
          />
          <Area
            type="monotone"
            dataKey="dns"
            stackId="1"
            stroke="#ee3e32"
            fill="#ee3e32"
            fillOpacity={0.5}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
