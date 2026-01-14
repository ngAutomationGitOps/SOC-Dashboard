// 'use client';

// type AlertRule = {
//   category: string;
//   count: number;
//   severity: 'Low' | 'Medium' | 'High' | 'Critical';
// };

// const data: AlertRule[] = [
//   { category: 'Web Application Attack', count: 205, severity: 'Medium' },
//   { category: 'Potentially Bad Traffic', count: 46, severity: 'Medium' },
//   { category: 'Attempted Information Leak', count: 12, severity: 'Medium' },
//   { category: 'Attempted Administrator Privilege Gain', count: 10, severity: 'Medium' },
//   { category: 'Misc Attack', count: 4, severity: 'Medium' },
// ];

// const severityStyles: Record<string, string> = {
//   Low: 'bg-green-100 text-green-800',
//   Medium: 'bg-yellow-400 text-yellow-900',
//   High: 'bg-orange-500 text-white',
//   Critical: 'bg-red-600 text-white',
// };

// export default function SO_AlertRulesTable() {
//   return (
//     <div className="w-full h-full flex flex-col">

//       {/* ===== Title ===== */}
//       <h2 className="text-lg font-semibold mb-3 text-gray-700">
//         Top Alert Rules{' '}
//         <span className="text-sm text-blue-600 font-medium">(SO Alert)</span>
//       </h2>

//       {/* ===== Table ===== */}
//       <div className="border rounded-xl overflow-hidden">
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-700 text-white text-sm">
//               <th className="text-left px-4 py-3">Rule Category</th>
//               <th className="text-center px-4 py-3 w-24">Count</th>
//               <th className="text-center px-4 py-3 w-28">Severity</th>
//             </tr>
//           </thead>

//           <tbody>
//             {data.map((rule, index) => (
//               <tr
//                 key={index}
//                 className="border-b last:border-b-0 hover:bg-gray-50 text-sm"
//               >
//                 <td className="px-4 py-3">{rule.category}</td>

//                 <td className="px-4 py-3 text-center font-medium">
//                   {rule.count}
//                 </td>

//                 <td className="px-4 py-3 text-center">
//                   <span
//                     className={`px-3 py-1 rounded-md text-xs font-semibold ${severityStyles[rule.severity]}`}
//                   >
//                     {rule.severity}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//     </div>
//   );
// }


'use client';

import { useEffect, useState } from 'react';

type ApiItem = {
  Alert_rule_name: string;
  Rule_category: string;
  Rule_confidence: 'Low' | 'Medium' | 'High' | 'Critical' | null;
  Reference: string;
  Count: number;
};

type AlertRule = {
  category: string;
  count: number;
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
};

const severityStyles: Record<string, string> = {
  Low: 'bg-green-100 text-green-800',
  Medium: 'bg-yellow-400 text-yellow-900',
  High: 'bg-orange-500 text-white',
  Critical: 'bg-red-600 text-white',
};

export default function SO_AlertRulesTable() {
  const [data, setData] = useState<AlertRule[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://10.0.20.235/alert-rules');
        const json = await res.json();

        const grouped: Record<string, AlertRule> = {};

        (json.data as ApiItem[]).forEach((item) => {
          const category = item.Rule_category || 'Others';
          const severity =
            item.Rule_confidence === 'Critical'
              ? 'Critical'
              : item.Rule_confidence === 'High'
              ? 'High'
              : item.Rule_confidence === 'Medium'
              ? 'Medium'
              : 'Low';

          if (!grouped[category]) {
            grouped[category] = {
              category,
              count: 0,
              severity,
            };
          }

          grouped[category].count += item.Count;
        });

        // Convert to array, sort by count desc, take top 5
        const formattedData = Object.values(grouped)
          .sort((a, b) => b.count - a.count)
          .slice(0, 5);

        setData(formattedData);
      } catch (error) {
        console.error('Failed to fetch alert rules', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 overflow-auto">
        <table className="min-w-full table-auto text-sm">
          <thead className="bg-gray-50 sticky top-0">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Rule Category</th>
              <th className="px-4 py-3 text-center font-semibold text-gray-700 w-24">Count</th>
              <th className="px-4 py-3 text-center font-semibold text-gray-700 w-28">Severity</th>
            </tr>
          </thead>

          <tbody>
            {data.map((rule, index) => (
              <tr
                key={index}
                className="border-b last:border-b-0 hover:bg-gray-50 text-sm"
              >
                <td className="px-4 py-3">{rule.category}</td>

                <td className="px-4 py-3 text-center font-semibold">
                  {rule.count.toLocaleString()}
                </td>

                <td className="px-4 py-3 text-center">
                  <span
                    className={`px-3 py-1 rounded-md text-xs font-semibold ${severityStyles[rule.severity]}`}
                  >
                    {rule.severity}
                  </span>
                </td>
              </tr>
            ))}

            {data.length === 0 && (
              <tr>
                <td colSpan={3} className="text-center py-6 text-gray-400">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
