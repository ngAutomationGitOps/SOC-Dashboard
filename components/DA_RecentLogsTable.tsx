
// 'use client';

// import { useEffect, useState } from 'react';

// type ApiItem = {
//   Alert_rule_name: string;
//   Rule_category: string;
//   Rule_confidence: 'Low' | 'Medium' | 'High' | 'Critical' | null;
//   Reference: string;
//   Count: number;
// };

// type AlertRule = {
//   category: string;
//   count: number;
//   severity: 'Low' | 'Medium' | 'High' | 'Critical';
// };

// const severityStyles: Record<string, string> = {
//   Low: 'bg-green-100 text-green-800',
//   Medium: 'bg-yellow-400 text-yellow-900',
//   High: 'bg-orange-500 text-white',
//   Critical: 'bg-red-600 text-white',
// };

// export default function SO_AlertRulesTable() {
//   const [data, setData] = useState<AlertRule[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch('http://10.0.20.235/alert-rules');
//         const json = await res.json();

//         const grouped: Record<string, AlertRule> = {};

//         (json.data as ApiItem[]).forEach((item) => {
//           const category = item.Rule_category || 'Others';
//           const severity =
//             item.Rule_confidence === 'Critical'
//               ? 'Critical'
//               : item.Rule_confidence === 'High'
//               ? 'High'
//               : item.Rule_confidence === 'Medium'
//               ? 'Medium'
//               : 'Low';

//           if (!grouped[category]) {
//             grouped[category] = {
//               category,
//               count: 0,
//               severity,
//             };
//           }

//           grouped[category].count += item.Count;
//         });

//         // Convert to array, sort by count desc, take top 5
//         const formattedData = Object.values(grouped)
//           .sort((a, b) => b.count - a.count)
//           .slice(0, 5);

//         setData(formattedData);
//       } catch (error) {
//         console.error('Failed to fetch alert rules', error);
//       }
//     };

//     fetchData();
//   }, []);

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
//               <th className="text-left px-4 py-3">Timestamp</th>
//               <th className="text-center px-4 py-3 w-28">Message</th>
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

//                 <td className="px-4 py-3 text-center font-semibold">
//                   {rule.count.toLocaleString()}
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

//             {data.length === 0 && (
//               <tr>
//                 <td colSpan={3} className="text-center py-6 text-gray-400">
//                   No data available
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//     </div>
//   );
// }


'use client';

import { useEffect, useState } from 'react';

type EventItem = {
  TimeStamp: string;
  Message: string;
};

type EventRow = {
  timestamp: string;
  message: string;
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
};

const severityStyles: Record<string, string> = {
  Low: 'bg-green-100 text-green-800',
  Medium: 'bg-yellow-400 text-yellow-900',
  High: 'bg-orange-500 text-white',
  Critical: 'bg-red-600 text-white',
};

// Function to infer severity from message
const getSeverity = (message: string): EventRow['severity'] => {
  if (message.toLowerCase().includes('error') || message.toLowerCase().includes('powershell')) return 'High';
  if (message.toLowerCase().includes('full')) return 'Critical';
  if (message.toLowerCase().includes('sysmon')) return 'Low';
  return 'Low';
};

export default function SO_AlertRulesTable() {
  const [data, setData] = useState<EventRow[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://10.0.20.235/recent-events');
        const json = await res.json();

        const events: EventRow[] = (json.data as EventItem[]).map((item) => ({
          timestamp: item.TimeStamp,
          message: item.Message,
          severity: getSeverity(item.Message),
        }));

        setData(events);
      } catch (error) {
        console.error('Failed to fetch recent events', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full h-full flex flex-col">
      {/* ===== Title ===== */}
      <h2 className="text-lg font-semibold mb-3 text-gray-700">
        Recent High/Critical Alerts{' '}
        <span className="text-sm text-blue-600 font-medium">(SO Alert)</span>
      </h2>

      {/* ===== Table ===== */}
      <div className="border rounded-xl overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-700 text-white text-sm">
              <th className="text-left px-4 py-3">Timestamp</th>
              <th className="text-left px-4 py-3">Message</th>
              <th className="text-center px-4 py-3 w-28">Severity</th>
            </tr>
          </thead>

          <tbody>
            {data.map((event, index) => (
              <tr
                key={index}
                className="border-b last:border-b-0 hover:bg-gray-50 text-sm"
              >
                <td className="px-4 py-3">{event.timestamp}</td>

                <td className="px-4 py-3">{event.message}</td>

                <td className="px-4 py-3 text-center">
                  <span
                    className={`px-3 py-1 rounded-md text-xs font-semibold ${severityStyles[event.severity]}`}
                  >
                    {event.severity}
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
