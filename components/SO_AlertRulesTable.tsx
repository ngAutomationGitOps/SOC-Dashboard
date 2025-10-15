// 'use client';

// import { useEffect, useState } from 'react';

// type AlertRule = {
//   Alert_rule_name: string;
//   Rule_category: string;
//   Rule_confidence: string | null;
//   Reference: string;
//   Count: number;
// };

// export default function SO_AlertRulesTable() {
//   const [alertRules, setAlertRules] = useState<AlertRule[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchAlertRules() {
//       try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/alert-rules`);
//         const json = await res.json();
//         setAlertRules(json.data || []);
//       } catch (err) {
//         console.error('Failed to fetch alert rules', err);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchAlertRules();
//   }, []);

//   const totalCount = alertRules.reduce((sum, rule) => sum + (rule.Count || 0), 0);

//   if (loading) {
//     return <div className="p-4">Loading alert rules...</div>;
//   }

//   return (
//     <div className="bg-white p-4 rounded-2xl shadow border border-gray-200 overflow-hidden">
//       <h2 className="text-lg font-semibold mb-4 text-gray-800">Alert Rules</h2>

//       {/* Scrollable container */}
//       <div className="overflow-y-auto max-h-[420px]">
//         <table className="min-w-full table-auto text-sm text-left text-gray-700">
//           <thead className="bg-gray-100 text-gray-600 uppercase text-xs sticky top-0 z-10">
//             <tr>
//               <th className="px-4 py-2">Alert Rule Name</th>
//               <th className="px-4 py-2">Rule Category</th>
//               <th className="px-4 py-2">Rule Confidence</th>
//               <th className="px-4 py-2">Reference URL</th>
//               <th className="px-4 py-2 text-right">Count</th>
//             </tr>
//           </thead>
//           <tbody>
//             {alertRules.map((rule, idx) => (
//               <tr key={idx} className="border-b hover:bg-gray-50">
//                 <td className="px-4 py-2">{rule.Alert_rule_name}</td>
//                 <td className="px-4 py-2">{rule.Rule_category || '-'}</td>
//                 <td className="px-4 py-2">{rule.Rule_confidence || '-'}</td>
//                 <td className="px-4 py-2">
//                   <a
//                     href={rule.Reference}
//                     className="text-blue-600 underline"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     {rule.Reference}
//                   </a>
//                 </td>
//                 <td className="px-4 py-2 text-right">{rule.Count}</td>
//               </tr>
//             ))}
//             <tr className="font-semibold bg-gray-50 sticky bottom-0">
//               <td colSpan={4} className="px-4 py-2 text-right">Total</td>
//               <td className="px-4 py-2 text-right">{totalCount}</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }


// 'use client';

// import { useEffect, useState } from 'react';

// type AlertRule = {
//   Alert_rule_name: string;
//   Rule_category: string;
//   Rule_confidence: string | null;
//   Reference: string;
//   Count: number;
// };

// export default function SO_AlertRulesTable() {
//   const [alertRules, setAlertRules] = useState<AlertRule[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [filterText, setFilterText] = useState('');

//   useEffect(() => {
//     async function fetchAlertRules() {
//       try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/alert-rules`);
//         const json = await res.json();
//         setAlertRules(json.data || []);
//       } catch (err) {
//         console.error('Failed to fetch alert rules', err);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchAlertRules();
//   }, []);

//   // Apply filter by Alert Rule Name
//   const filteredRules = alertRules.filter(rule =>
//     rule.Alert_rule_name.toLowerCase().includes(filterText.toLowerCase())
//   );

//   const totalCount = filteredRules.reduce((sum, rule) => sum + (rule.Count || 0), 0);

//   if (loading) {
//     return <div className="p-4">Loading alert rules...</div>;
//   }

//   return (
//     <div className="bg-white p-4 rounded-2xl shadow border border-gray-200 overflow-hidden">
//       <h2 className="text-lg font-semibold mb-4 text-gray-800">Alert Rules</h2>

//       {/* Filter box */}
//       <div className="mb-3">
//         <input
//           type="text"
//           placeholder="Filter by alert rule name..."
//           value={filterText}
//           onChange={e => setFilterText(e.target.value)}
//           className="w-full md:w-1/3 px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring focus:border-blue-300"
//         />
//         <p className="text-xs text-gray-500 mt-1">
//           Showing {filteredRules.length} of {alertRules.length} rules
//         </p>
//       </div>

//       {/* Scrollable container */}
//       <div className="overflow-y-auto max-h-[420px]">
//         <table className="min-w-full table-auto text-sm text-left text-gray-700">
//           <thead className="bg-gray-100 text-gray-600 uppercase text-xs sticky top-0 z-10">
//             <tr>
//               <th className="px-4 py-2">Alert Rule Name</th>
//               <th className="px-4 py-2">Rule Category</th>
//               <th className="px-4 py-2">Rule Confidence</th>
//               <th className="px-4 py-2">Reference URL</th>
//               <th className="px-4 py-2 text-right">Count</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredRules.map((rule, idx) => (
//               <tr key={idx} className="border-b hover:bg-gray-50">
//                 <td className="px-4 py-2">{rule.Alert_rule_name}</td>
//                 <td className="px-4 py-2">{rule.Rule_category || '-'}</td>
//                 <td className="px-4 py-2">{rule.Rule_confidence || '-'}</td>
//                 <td className="px-4 py-2">
//                   <a
//                     href={rule.Reference}
//                     className="text-blue-600 underline"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     {rule.Reference}
//                   </a>
//                 </td>
//                 <td className="px-4 py-2 text-right">{rule.Count}</td>
//               </tr>
//             ))}
//             <tr className="font-semibold bg-gray-50 sticky bottom-0">
//               <td colSpan={4} className="px-4 py-2 text-right">Total</td>
//               <td className="px-4 py-2 text-right">{totalCount}</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }


'use client';

import { useEffect, useState } from 'react';

type AlertRule = {
  Alert_rule_name: string;
  Rule_category: string;
  Rule_confidence: string | null;
  Reference: string;
  Count: number;
};

export default function SO_AlertRulesTable() {
  const [alertRules, setAlertRules] = useState<AlertRule[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    async function fetchAlertRules() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/alert-rules`);
        const json = await res.json();
        setAlertRules(json.data || []);
      } catch (err) {
        console.error('Failed to fetch alert rules', err);
      } finally {
        setLoading(false);
      }
    }
    fetchAlertRules();
  }, []);

  // Apply filter by Alert Rule Name
  const filteredRules = alertRules.filter(rule =>
    rule.Alert_rule_name.toLowerCase().includes(filterText.toLowerCase())
  );

  const totalCount = filteredRules.reduce((sum, rule) => sum + (rule.Count || 0), 0);

  const getConfidenceClass = (confidence: string | null) => {
    switch (confidence?.toLowerCase()) {
      case 'high':
        return 'bg-red-500 text-white px-2 py-1 rounded text-xs font-medium';
      case 'medium':
        return 'bg-yellow-400 text-black px-2 py-1 rounded text-xs font-medium';
      case 'info':
        return 'bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium';
      default:
        return 'bg-gray-300 text-black px-2 py-1 rounded text-xs font-medium';
    }
  };

  if (loading) {
    return <div className="p-4">Loading alert rules...</div>;
  }

  return (
    <div className="bg-white p-4 rounded-2xl shadow border border-gray-200 overflow-hidden">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">Alert Rules</h2>

      {/* Filter box */}
      <div className="mb-3">
        <input
          type="text"
          placeholder="Filter by alert rule name..."
          value={filterText}
          onChange={e => setFilterText(e.target.value)}
          className="w-full md:w-1/3 px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring focus:border-blue-300"
        />
        <p className="text-xs text-gray-500 mt-1">
          Showing {filteredRules.length} of {alertRules.length} rules
        </p>
      </div>

      {/* Scrollable container */}
      <div className="overflow-y-auto max-h-[420px]">
        <table className="min-w-full table-auto text-sm text-left text-gray-700">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs sticky top-0 z-10">
            <tr>
              <th className="px-4 py-2">Alert Rule Name</th>
              <th className="px-4 py-2">Rule Category</th>
              <th className="px-4 py-2">Rule Confidence</th>
              <th className="px-4 py-2">Reference URL</th>
              <th className="px-4 py-2 text-right">Count</th>
            </tr>
          </thead>
          <tbody>
            {filteredRules.map((rule, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{rule.Alert_rule_name}</td>
                <td className="px-4 py-2">{rule.Rule_category || '-'}</td>
                <td className="px-4 py-2">
                  <span className={getConfidenceClass(rule.Rule_confidence)}>
                    {rule.Rule_confidence || '-'}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <a
                    href={rule.Reference}
                    className="text-blue-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {rule.Reference}
                  </a>
                </td>
                <td className="px-4 py-2 text-right">{rule.Count}</td>
              </tr>
            ))}
            <tr className="font-semibold bg-gray-50 sticky bottom-0">
              <td colSpan={4} className="px-4 py-2 text-right">Total</td>
              <td className="px-4 py-2 text-right">{totalCount}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
