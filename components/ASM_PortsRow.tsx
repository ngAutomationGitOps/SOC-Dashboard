// "use client";
// import React from "react";

// const ports = [
//   { name: "FTP - 21", count: 9, color: "#e57373" },
//   { name: "SMTP - 25", count: 2, color: "#7986cb" },
//   { name: "DNS - 53", count: 9, color: "#ba68c8" },
//   { name: "HTTP - 80", count: 3, color: "#64b5f6" },
//   { name: "POP3 - 110", count: 11, color: "#f06292" },
//   { name: "SFTP - 115", count: 2, color: "#ab47bc" },
//   { name: "IMAP - 143", count: 11, color: "#ffb74d" },
//   { name: "HTTPS - 443", count: 3, color: "#4db6ac" },
//   { name: "SMTPS - 465", count: 2, color: "#81c784" },
//   { name: "IMAPS - 993", count: 11, color: "#aed581" },
//   { name: "POP3S - 995", count: 11, color: "#4fc3f7" },
//   { name: "Custom - 27", count: 2, color: "#ef5350" },
//   { name: "Custom - 160", count: 2, color: "#d32f2f" },
// ];

// export default function PortsRow() {
//   return (
//     <div className="bg-white rounded-xl shadow p-4 mb-4">
//       {/* Header */}
//       <div className="flex">
//         {ports.map((p, i) => (
//           <div
//             key={i}
//             className="flex-1 text-center text-xs font-semibold text-white py-1 border"
//             style={{ backgroundColor: p.color }}
//           >
//             {p.name}
//           </div>
//         ))}
//       </div>
//       {/* Counts */}
//       <div className="flex">
//         {ports.map((p, i) => (
//           <div
//             key={i}
//             className="flex-1 text-center text-sm font-bold border py-1"
//           >
//             {p.count}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// "use client";
// import React from "react";

// const ports = [
//   { name: "FTP - 21", count: 9, gradient: "from-red-400 to-red-600" },
//   { name: "SMTP - 25", count: 2, gradient: "from-indigo-400 to-indigo-600" },
//   { name: "DNS - 53", count: 9, gradient: "from-purple-400 to-purple-600" },
//   { name: "HTTP - 80", count: 3, gradient: "from-sky-400 to-sky-600" },
//   { name: "POP3 - 110", count: 11, gradient: "from-pink-400 to-pink-600" },
//   { name: "SFTP - 115", count: 2, gradient: "from-fuchsia-400 to-fuchsia-600" },
//   { name: "IMAP - 143", count: 11, gradient: "from-amber-400 to-amber-600" },
//   { name: "HTTPS - 443", count: 3, gradient: "from-teal-400 to-teal-600" },
//   { name: "SMTPS - 465", count: 2, gradient: "from-green-400 to-green-600" },
//   { name: "IMAPS - 993", count: 11, gradient: "from-lime-400 to-lime-600" },
//   { name: "POP3S - 995", count: 11, gradient: "from-cyan-400 to-cyan-600" },
//   { name: "Custom - 27", count: 2, gradient: "from-red-400 to-red-700" },
//   { name: "Custom - 160", count: 2, gradient: "from-red-500 to-red-800" },
// ];

// export default function PortsRow() {
//   return (
//     <div className="bg-white rounded-xl shadow p-4 mb-4">
//       {/* Header Row */}
//       <div className="flex">
//         {ports.map((p, i) => (
//           <div
//             key={i}
//             className={`flex-1 text-center text-xs font-semibold text-white py-1 border bg-gradient-to-r ${p.gradient}`}
//           >
//             {p.name}
//           </div>
//         ))}
//       </div>

//       {/* Counts Row */}
//       <div className="flex">
//         {ports.map((p, i) => (
//           <div
//             key={i}
//             className="flex-1 text-center text-sm font-bold border py-1"
//           >
//             {p.count}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// "use client";
// import React from "react";

// const ports = [
//   { name: "FTP - 21", count: 9, gradient: "from-red-400 to-red-600" },
//   { name: "SMTP - 25", count: 2, gradient: "from-indigo-400 to-indigo-600" },
//   { name: "DNS - 53", count: 9, gradient: "from-purple-400 to-purple-600" },
//   { name: "HTTP - 80", count: 3, gradient: "from-sky-400 to-sky-600" },
//   { name: "POP3 - 110", count: 11, gradient: "from-pink-400 to-pink-600" },
//   { name: "SFTP - 115", count: 2, gradient: "from-fuchsia-400 to-fuchsia-600" },
//   { name: "IMAP - 143", count: 11, gradient: "from-amber-400 to-amber-600" },
//   { name: "HTTPS - 443", count: 3, gradient: "from-teal-400 to-teal-600" },
//   { name: "SMTPS - 465", count: 2, gradient: "from-green-400 to-green-600" },
//   { name: "IMAPS - 993", count: 11, gradient: "from-lime-400 to-lime-600" },
//   { name: "POP3S - 995", count: 11, gradient: "from-cyan-400 to-cyan-600" },
//   { name: "Custom - 27", count: 2, gradient: "from-red-400 to-red-700" },
//   { name: "Custom - 160", count: 2, gradient: "from-red-500 to-red-800" },
// ];

// export default function PortsRow() {
//   return (
//     <div className="bg-white rounded-xl shadow p-4 mb-4">
//       {/* Container with first column fixed */}
//       <div className="flex">
//         {/* First column: PORTS / COUNT */}
//         <div className="flex flex-col text-center border w-20">
//           <div className="bg-gray-600 text-white text-xs font-bold py-1">
//             PORTS
//           </div>
//           <div className="bg-gray-400 text-white text-xs font-bold py-1">
//             COUNT
//           </div>
//         </div>

//         {/* Rest of ports */}
//         <div className="flex-1">
//           {/* Header Row */}
//           <div className="flex">
//             {ports.map((p, i) => (
//               <div
//                 key={i}
//                 className={`flex-1 text-center text-xs font-semibold text-white py-1 border bg-gradient-to-r ${p.gradient}`}
//               >
//                 {p.name}
//               </div>
//             ))}
//           </div>

//           {/* Counts Row */}
//           <div className="flex">
//             {ports.map((p, i) => (
//               <div
//                 key={i}
//                 className="flex-1 text-center text-sm font-bold border py-1"
//               >
//                 {p.count}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import React from "react";

const ports = [
  { name: "FTP - 21", count: 9, color: "#ef5350" },
  { name: "SMTP - 25", count: 2, color: "#5c6bc0" },
  { name: "DNS - 53", count: 9, color: "#ab47bc" },
  { name: "HTTP - 80", count: 3, color: "#29b6f6" },
  { name: "POP3 - 110", count: 11, color: "#ec407a" },
  { name: "SFTP - 115", count: 2, color: "#ba68c8" },
  { name: "IMAP - 143", count: 11, color: "#ffb300" },
  { name: "HTTPS - 443", count: 3, color: "#26a69a" },
  { name: "SMTPS - 465", count: 2, color: "#66bb6a" },
  { name: "IMAPS - 993", count: 11, color: "#9ccc65" },
  { name: "POP3S - 995", count: 11, color: "#26c6da" },
  { name: "Custom - 27", count: 2, color: "#ef5350" },
  { name: "Custom - 160", count: 2, color: "#d32f2f" },
];

export default function PortsRow() {
  return (
    <div className="h-full flex flex-col p-4 lg:p-6">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-3 lg:mb-4 flex-shrink-0">
        <div className="p-2 lg:p-3 bg-gradient-to-br from-sky-500 to-indigo-600 rounded-xl shadow-lg flex-shrink-0">
          <svg
            className="w-4 h-4 lg:w-5 lg:h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 7h16M4 12h16M4 17h16"
            />
          </svg>
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-lg lg:text-xl font-bold text-gray-900 tracking-tight">
            Open Ports Overview
          </h3>
          <p className="text-sm text-gray-600 font-medium">
            Distribution of monitored service ports and counts
          </p>
        </div>
      </div>

      {/* Ports Matrix */}
      <div className="flex-1 overflow-x-auto px-1 lg:px-2">
        <div className="inline-flex min-w-full rounded-lg border border-gray-200 bg-white overflow-hidden">
          {/* Fixed first column */}
          <div className="flex flex-col text-center min-w-[80px] border-r border-gray-200">
            <div className="bg-gray-800 text-white text-[11px] lg:text-xs font-semibold py-2 border-b border-gray-700">
              PORTS
            </div>
            <div className="bg-gray-600 text-white text-[11px] lg:text-xs font-semibold py-2">
              COUNT
            </div>
          </div>

          {/* Dynamic ports */}
          <div className="flex-1">
            {/* Header Row */}
            <div className="flex divide-x divide-white/10">
              {ports.map((p, i) => (
                <div
                  key={i}
                  className="flex-1 text-center text-[13px] font-semibold text-white py-2 px-1"
                  style={{ backgroundColor: p.color }}
                >
                  <span className="inline-block leading-snug">{p.name}</span>
                </div>
              ))}
            </div>

            {/* Counts Row */}
            <div className="flex border-t border-gray-200 bg-gray-50 divide-x divide-gray-200">
              {ports.map((p, i) => (
                <div
                  key={i}
                  className="flex-1 text-center text-xs lg:text-sm font-semibold text-gray-900 py-2 px-1"
                >
                  {p.count}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
