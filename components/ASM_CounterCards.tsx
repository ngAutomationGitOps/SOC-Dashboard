// "use client";
// import React from "react";

// const counters = [
//   { label: "Total Domains", value: 12 },
//   { label: "Total IPs", value: 25 },
//   { label: "SSL Issues", value: 5 },
//   { label: "Critical Vulnerabilities", value: 3 },
//   { label: "Open Ports", value: 48 },
//   { label: "Outdated Tech", value: 4 },
// ];

// export default function CounterCards() {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 mb-4">
//       {counters.map((c, i) => (
//         <div
//           key={i}
//           className="rounded-xl bg-white shadow p-6 text-center border border-black hover:shadow-md transition"
//         >
//           {/* Value */}
//           <h2 className="text-2xl font-bold text-gray-800">{c.value}</h2>
//           {/* Label */}
//           <p className="text-sm font-medium text-gray-600 mt-1">{c.label}</p>
//         </div>
//       ))}
//     </div>
//   );
// }


// "use client";
// import { useEffect, useState } from "react";

// function Counter({ value }: { value: number }) {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 0;
//     const duration = 1500; // animation duration (ms)
//     const startTime = performance.now();

//     function animate(currentTime: number) {
//       const elapsed = currentTime - startTime;
//       const progress = Math.min(elapsed / duration, 1);
//       const current = Math.floor(progress * value);
//       setCount(current);
//       if (progress < 1) requestAnimationFrame(animate);
//     }

//     requestAnimationFrame(animate);
//   }, [value]);

//   return <>{count.toLocaleString()}</>;
// }

// export default function CounterCards() {
//   const counters = [
//     { label: "Total Domains", value: 12 },
//     { label: "Total IPs", value: 25 },
//     { label: "SSL Issues", value: 5 },
//     { label: "Critical Vulnerabilities", value: 3 },
//     { label: "Open Ports", value: 48 },
//     { label: "Outdated Tech", value: 4 },
//   ];

//   return (
//     <div className="w-full px-4">
//       <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(180px,1fr))]">
//         {counters.map((item, idx) => (
//           <div
//             key={idx}
//             className="bg-white rounded-xl shadow p-6 text-center border border-black hover:shadow-lg transition"
//           >
//             <h3 className="text-sm text-gray-500 font-semibold mb-2">
//               {item.label}
//             </h3>
//             <p className="text-3xl font-bold text-gray-800">
//               <Counter value={item.value} />
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


"use client";
import { useEffect, useState } from "react";

function Counter({ value }: { value: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1500;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * value);
      setCount(current);
      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [value]);

  return <>{count.toLocaleString()}</>;
}

export default function CounterCards() {
  const counters = [
    { label: "Total Domains", value: 12, color: "text-red-500" },
    { label: "Total IPs", value: 25, color: "text-blue-700" },
    { label: "SSL Issues", value: 5, color: "text-yellow-500" },
    { label: "Critical Vulnerabilities", value: 3, color: "text-red-500" },
    { label: "Open Ports", value: 48, color: "text-orange-500" },
    { label: "Outdated Tech", value: 4, color: "text-blue-700" },
  ];

  return (
    <div className="w-full">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {counters.map((item, idx) => (
          <div
            key={idx}
            className="card card-hover p-6 text-center flex flex-col items-center justify-center"
          >
            <h3 className="text-sm lg:text-base text-gray-600 font-medium mb-4">
              {item.label}
            </h3>
            <p className={`text-2xl lg:text-3xl font-bold ${item.color}`}>
              <Counter value={item.value} />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
