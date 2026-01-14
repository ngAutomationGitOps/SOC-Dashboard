// 'use client';

// import { useEffect, useState } from 'react';

// type AgentItem = {
//   Server_Environment: string | null;
//   Agent_Name: string;
//   Ip_Address: string;
//   wazuh_status: string;
// };

// type AgentRow = {
//   environment: string;
//   agentName: string;
//   ipAddress: string;
//   status: 'Low' | 'Medium' | 'High' | 'Critical';
//   rawStatus: string;
// };

// const severityStyles: Record<string, string> = {
//   Low: 'bg-green-100 text-green-800',       // Active
//   Medium: 'bg-yellow-400 text-yellow-900',  // Decommissioned
//   High: 'bg-orange-500 text-white',         // Disconnected
//   Critical: 'bg-red-600 text-white',        // Not used here
// };

// // Map wazuh_status to severity
// const getStatusSeverity = (status: string): AgentRow['status'] => {
//   switch (status.toLowerCase()) {
//     case 'active':
//       return 'Low';
//     case 'decommissioned':
//       return 'Medium';
//     case 'disconnected':
//       return 'High';
//     default:
//       return 'Low';
//   }
// };

// export default function AgentsTable() {
//   const [data, setData] = useState<AgentRow[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch('http://10.0.20.235/agents-info');
//         const json = await res.json();

//         const agents: AgentRow[] = (json.data as AgentItem[]).map((item) => ({
//           environment: item.Server_Environment || 'N/A',
//           agentName: item.Agent_Name,
//           ipAddress: item.Ip_Address,
//           status: getStatusSeverity(item.wazuh_status),
//           rawStatus: item.wazuh_status,
//         }));

//         setData(agents);
//       } catch (error) {
//         console.error('Failed to fetch agents info', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="w-full h-full flex flex-col">
//       {/* ===== Title ===== */}
//       <h2 className="text-lg font-semibold mb-3 text-gray-700">
//         Wazuh Agents Status{' '}
//         <span className="text-sm text-blue-600 font-medium">(SO Alert)</span>
//       </h2>

//       {/* ===== Table ===== */}
//       <div className="border rounded-xl overflow-hidden">
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-700 text-white text-sm">
//               <th className="text-left px-4 py-3">Environment</th>
//               <th className="text-left px-4 py-3">Agent Name</th>
//               <th className="text-center px-4 py-3 w-28">IP Address</th>
//               <th className="text-center px-4 py-3 w-28">Status</th>
//             </tr>
//           </thead>

//           <tbody>
//             {data.map((agent, index) => (
//               <tr
//                 key={index}
//                 className="border-b last:border-b-0 hover:bg-gray-50 text-sm"
//               >
//                 <td className="px-4 py-3">{agent.environment}</td>
//                 <td className="px-4 py-3">{agent.agentName}</td>
//                 <td className="px-4 py-3 text-center">{agent.ipAddress}</td>
//                 <td className="px-4 py-3 text-center">
//                   <span
//                     className={`px-3 py-1 rounded-md text-xs font-semibold ${severityStyles[agent.status]}`}
//                   >
//                     {agent.rawStatus}
//                   </span>
//                 </td>
//               </tr>
//             ))}

//             {data.length === 0 && (
//               <tr>
//                 <td colSpan={4} className="text-center py-6 text-gray-400">
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

type AgentItem = {
  Server_Environment: string | null;
  Agent_Name: string;
  Ip_Address: string;
  wazuh_status: string;
};

export default function DA_Disconnectedagent() {
  const [agents, setAgents] = useState<AgentItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const res = await fetch('http://10.0.20.235/agents-info');
        const json = await res.json();

        // Keep only disconnected agents
        const disconnectedAgents = (json.data as AgentItem[]).filter(
          (agent) => agent.wazuh_status === 'disconnected'
        );

        setAgents(disconnectedAgents);
      } catch (error) {
        console.error('Failed to fetch agents info', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAgents();
  }, []);

  if (loading) {
    return <div className="text-gray-500 p-4">Loading disconnected agents...</div>;
  }

  if (agents.length === 0) {
    return <div className="text-gray-500 p-4">No disconnected agents found.</div>;
  }

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 overflow-auto">
        <table className="min-w-full table-auto text-sm">
          <thead className="bg-gray-50 sticky top-0">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Environment</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Agent Name</th>
              <th className="px-4 py-3 text-center font-semibold text-gray-700 w-28">IP Address</th>
              <th className="px-4 py-3 text-center font-semibold text-gray-700 w-28">Status</th>
            </tr>
          </thead>

          <tbody>
            {agents.map((agent, index) => (
              <tr
                key={index}
                className="border-b last:border-b-0 hover:bg-gray-50"
              >
                <td className="px-4 py-3">{agent.Server_Environment || 'N/A'}</td>
                <td className="px-4 py-3">{agent.Agent_Name}</td>
                <td className="px-4 py-3 text-center">{agent.Ip_Address}</td>
                <td className="px-4 py-3 text-center">
                  <span className="px-2 py-1 rounded-md bg-orange-500 text-white text-xs font-semibold">
                    {agent.wazuh_status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
