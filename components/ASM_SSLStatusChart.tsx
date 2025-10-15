// "use client";
// import React from "react";
// import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

// const data = [
//   { name: "Valid", value: 7 },
//   { name: "Expired", value: 2 },
//   { name: "Error", value: 1 },
//   { name: "Untrusted", value: 2 },
// ];

// const COLORS = ["#1d4ed8", "#f87171", "#22c55e", "#facc15"];

// export default function SSLStatusChart() {
//   return (
//     <div className="bg-white p-4 rounded-xl shadow h-72">
//       <h3 className="font-bold mb-2">SSL Status</h3>
//       <ResponsiveContainer width="100%" height="90%">
//         <PieChart>
//           <Pie data={data} cx="50%" cy="50%" labelLine={false} outerRadius={90} dataKey="value">
//             {data.map((_, i) => (
//               <Cell key={i} fill={COLORS[i % COLORS.length]} />
//             ))}
//           </Pie>
//           <Tooltip />
//         </PieChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }


"use client";
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Valid", value: 7 },
  { name: "Expired", value: 2 },
  { name: "Error", value: 1 },
  { name: "Untrusted", value: 2 },
];

const COLORS: Record<string, string> = {
  Valid: "#1d4ed8",      // Dark Blue
  Expired: "#f97316",    // Orange-Red
  Error: "#16a34a",      // Green
  Untrusted: "#0ea5e9",  // Light Blue
};

export default function SSLStatusChart() {
  return (
    <div className="bg-white p-4 rounded-xl shadow h-72">
      <h3 className="font-bold mb-2 text-center">SSL Status</h3>
      <ResponsiveContainer width="100%" height="90%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={90}
            dataKey="value"
            label={({ value }) => value} // show numbers inside slices
          >
            {data.map((entry, i) => (
              <Cell key={i} fill={COLORS[entry.name]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
