// "use client";
// import React from "react";
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// const data = [
//   { name: "Critical", value: 3 },
//   { name: "High", value: 5 },
//   { name: "Medium", value: 10 },
//   { name: "Low", value: 7 },
// ];

// export default function VulnerabilitiesChart() {
//   return (
//     <div className="bg-white p-4 rounded-xl shadow h-72">
//       <h3 className="font-bold mb-2">Vulnerabilities by Severity</h3>
//       <ResponsiveContainer width="100%" height="90%">
//         <BarChart data={data}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Bar dataKey="value" fill="#f87171" />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }


// "use client";
// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   Cell,
// } from "recharts";

// const data = [
//   { name: "Critical", value: 3 },
//   { name: "High", value: 5 },
//   { name: "Medium", value: 10 },
//   { name: "Low", value: 7 },
// ];

// const COLORS: Record<string, string> = {
//   Critical: "#dc2626", // Red
//   High: "#ef4444",     // Bright Red
//   Medium: "#f59e0b",   // Amber
//   Low: "#22c55e",      // Green
// };

// export default function VulnerabilitiesChart() {
//   return (
//     <div className="bg-white p-4 rounded-xl shadow h-72">
//       <h3 className="font-bold mb-2">Vulnerabilities by Severity</h3>
//       <ResponsiveContainer width="100%" height="90%">
//         <BarChart data={data}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Bar dataKey="value">
//             {data.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
//             ))}
//           </Bar>
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }


"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { name: "Critical", value: 3 },
  { name: "High", value: 5 },
  { name: "Medium", value: 10 },
  { name: "Low", value: 7 },
];

const COLORS: Record<string, string> = {
  Critical:'#ee3e32', // Red
  High: '#f68838',     // Bright Red
  Medium: '#fbb021',   // Amber
  Low: '#1b8a5a',      // Green
};

export default function VulnerabilitiesChart() {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
        Vulnerabilities by Severity
      </h3>

      <div className="w-full max-w-4xl mx-auto" style={{ height: "400px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              contentStyle={{
                borderRadius: "10px",
                fontSize: "14px",
                backgroundColor: "#f9fafb",
                border: "1px solid #e5e7eb",
              }}
            />
            <Bar dataKey="value" radius={[8, 8, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
