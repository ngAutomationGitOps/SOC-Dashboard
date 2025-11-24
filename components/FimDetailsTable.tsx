// 'use client';

// import { useEffect, useState } from 'react';

// interface FimEvent {
//   agent_name: string;
//   department: string;
//   server_owner: string;
//   description: string;
//   path: string;
//   detected_at: string;
// }

// export default function FimDetailsTable() {
//   const [data, setData] = useState<FimEvent[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   const [currentPage, setCurrentPage] = useState(1);
//   const pageSize = 50;

//   // Fetch function extracted so it can be reused for polling
//   const fetchData = async () => {
//     try {
//       const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/fim-events`);
//       if (!res.ok) throw new Error('Failed to fetch data');
//       const result = await res.json();
//       setData(result.data);
//       setError(null);
//     } catch (err: any) {
//       setError(err.message || 'An error occurred');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData(); // Initial load

//     // Poll every 10 minutes (600,000 ms)
//     const interval = setInterval(() => {
//       fetchData();
//     }, 600_000);

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);

//   const paginatedData = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);
//   const totalPages = Math.ceil(data.length / pageSize);

//   const handlePrevious = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };

//   const handleNext = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };

//   return (
//     <div className="bg-white rounded-xl shadow p-4 overflow-x-auto border">
//       <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center">Detailed Events</h2>

//       {loading && <p className="text-center text-gray-500">Loading...</p>}
//       {error && <p className="text-center text-red-500">{error}</p>}

//       {!loading && !error && (
//         <>
//           <table className="min-w-full text-sm">
//             <thead>
//               <tr className="text-left bg-gray-100">
//                 <th className="p-2">Agent Name</th>
//                 <th className="p-2">Environment</th>
//                 <th className="p-2">Level</th>
//                 <th className="p-2">Department</th>
//                 <th className="p-2">Rule Description</th>
//                 <th className="p-2">Detected At (UTC)</th>
//                 <th className="p-2">Path</th>
//               </tr>
//             </thead>
//             <tbody>
//               {paginatedData.map((row, idx) => (
//                 <tr key={idx} className="border-t">
//                   <td className="p-2">{row.agent_name}</td>
//                   <td className="p-2">{row.department}</td>
//                   <td className="p-2">-</td>
//                   <td className="p-2">{row.server_owner}</td>
//                   <td className="p-2">{row.description}</td>
//                   <td className="p-2">
//                     {new Date(row.detected_at).toLocaleString('en-US', {
//                       dateStyle: 'medium',
//                       timeStyle: 'short',
//                       hour12: true,
//                       timeZone: 'UTC',
//                     })}{' '}
//                     UTC
//                   </td>
//                   <td className="p-2">{row.path}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {/* Pagination Controls */}
//           <div className="flex justify-center items-center mt-4 space-x-4">
//             <button
//               onClick={handlePrevious}
//               disabled={currentPage === 1}
//               className="px-3 py-1 rounded border text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
//             >
//               Previous
//             </button>
//             <span className="text-sm text-gray-700">
//               Page {currentPage} of {totalPages}
//             </span>
//             <button
//               onClick={handleNext}
//               disabled={currentPage === totalPages}
//               className="px-3 py-1 rounded border text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
//             >
//               Next
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }


// 'use client';

// import { useEffect, useState } from 'react';

// interface FimEvent {
//   agent_name: string;
//   department: string;
//   server_owner: string;
//   description: string;
//   path: string;
//   detected_at: string;
// }

// export default function FimDetailsTable() {
//   const [data, setData] = useState<FimEvent[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchTerm, setSearchTerm] = useState('');
//   const pageSize = 50;

//   // Fetch function extracted so it can be reused for polling
//   const fetchData = async () => {
//     try {
//       const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/  `);
//       if (!res.ok) throw new Error('Failed to fetch data');
//       const result = await res.json();
//       setData(result.data);
//       setError(null);
//     } catch (err: any) {
//       setError(err.message || 'An error occurred');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData(); // Initial load

//     // Poll every 10 minutes (600,000 ms)
//     const interval = setInterval(() => {
//       fetchData();
//     }, 600_000);

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);

//   // ✅ Filtered data by agent_name
//   const filteredData = data.filter((row) =>
//     row.agent_name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const paginatedData = filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize);
//   const totalPages = Math.ceil(filteredData.length / pageSize);

//   const handlePrevious = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };

//   const handleNext = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };

//   return (
//     <div className="bg-white rounded-xl shadow p-4 overflow-x-auto border">
//       <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center">Detailed Events</h2>

//       {loading && <p className="text-center text-gray-500">Loading...</p>}
//       {error && <p className="text-center text-red-500">{error}</p>}

//       {!loading && !error && (
//         <>
//           {/* 🔍 Filter by Agent Name */}
//           <div className="mb-4 flex justify-between items-center">
//             <input
//               type="text"
//               placeholder="Filter by Agent Name..."
//               value={searchTerm}
//               onChange={(e) => {
//                 setSearchTerm(e.target.value);
//                 setCurrentPage(1); // reset pagination when filter changes
//               }}
//               className="border px-3 py-2 rounded w-1/2"
//             />
//           </div>

//           <table className="min-w-full text-sm">
//             <thead>
//               <tr className="text-left bg-gray-100">
//                 <th className="p-2">Agent Name</th>
//                 <th className="p-2">Environment</th>
//                 <th className="p-2">Level</th>
//                 <th className="p-2">Department</th>
//                 <th className="p-2">Rule Description</th>
//                 <th className="p-2">Detected At (UTC)</th>
//                 <th className="p-2">Path</th>
//               </tr>
//             </thead>
//             <tbody>
//               {paginatedData.length > 0 ? (
//                 paginatedData.map((row, idx) => (
//                   <tr key={idx} className="border-t">
//                     <td className="p-2">{row.agent_name}</td>
//                     <td className="p-2">{row.department}</td>
//                     <td className="p-2">-</td>
//                     <td className="p-2">{row.server_owner}</td>
//                     <td className="p-2">{row.description}</td>
//                     <td className="p-2">
//                       {new Date(row.detected_at).toLocaleString('en-US', {
//                         dateStyle: 'medium',
//                         timeStyle: 'short',
//                         hour12: true,
//                         timeZone: 'UTC',
//                       })}{' '}
//                       UTC
//                     </td>
//                     <td className="p-2">{row.path}</td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan={7} className="text-center py-4 text-gray-500">
//                     No events found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>

//           {/* Pagination Controls */}
//           {totalPages > 1 && (
//             <div className="flex justify-center items-center mt-4 space-x-4">
//               <button
//                 onClick={handlePrevious}
//                 disabled={currentPage === 1}
//                 className="px-3 py-1 rounded border text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
//               >
//                 Previous
//               </button>
//               <span className="text-sm text-gray-700">
//                 Page {currentPage} of {totalPages}
//               </span>
//               <button
//                 onClick={handleNext}
//                 disabled={currentPage === totalPages}
//                 className="px-3 py-1 rounded border text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
//               >
//                 Next
//               </button>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }


// 'use client';

// import { useEffect, useState } from 'react';

// interface FimEvent {
//   agent_name: string;
//   department: string;
//   server_owner: string;
//   description: string;
//   path: string;
//   detected_at: string;
// }

// export default function FimDetailsTable() {
//   const [data, setData] = useState<FimEvent[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchTerm, setSearchTerm] = useState('');
//   const pageSize = 50;

//   // ✅ Deduplicate by agent+path, keeping the latest detected_at
//   const deduplicateAndKeepLatest = (events: FimEvent[]) => {
//     const map = new Map<string, FimEvent>();

//     events.forEach((event) => {
//       const key = `${event.agent_name}-${event.path}`;
//       const existing = map.get(key);

//       if (!existing) {
//         map.set(key, event);
//       } else {
//         // Compare timestamps → keep the latest one
//         const existingTime = new Date(existing.detected_at).getTime();
//         const newTime = new Date(event.detected_at).getTime();
//         if (newTime > existingTime) {
//           map.set(key, event);
//         }
//       }
//     });

//     return Array.from(map.values());
//   };

//   const fetchData = async () => {
//     try {
//       const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/fim-events`);
//       if (!res.ok) throw new Error('Failed to fetch data');
//       const result = await res.json();

//       const uniqueLatestData = deduplicateAndKeepLatest(result.data);
//       setData(uniqueLatestData);
//       setError(null);
//     } catch (err: any) {
//       setError(err.message || 'An error occurred');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();

//     const interval = setInterval(() => {
//       fetchData();
//     }, 600_000); // 10 minutes

//     return () => clearInterval(interval);
//   }, []);   

//   // ✅ Filter by agent_name
//   const filteredData = data.filter((row) =>
//     row.agent_name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const paginatedData = filteredData.slice(
//     (currentPage - 1) * pageSize,
//     currentPage * pageSize
//   );
//   const totalPages = Math.ceil(filteredData.length / pageSize);

//   const handlePrevious = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };

//   const handleNext = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };

//   return (
//     <div className="bg-white rounded-xl shadow p-4 overflow-x-auto border">
//       <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center">
//         Detailed Events
//       </h2>

//       {loading && <p className="text-center text-gray-500">Loading...</p>}
//       {error && <p className="text-center text-red-500">{error}</p>}

//       {!loading && !error && (
//         <>
//           {/* 🔍 Filter by Agent Name */}
//           <div className="mb-4 flex justify-between items-center">
//             <input
//               type="text"
//               placeholder="Filter by Agent Name..."
//               value={searchTerm}
//               onChange={(e) => {
//                 setSearchTerm(e.target.value);
//                 setCurrentPage(1);
//               }}
//               className="border px-3 py-2 rounded w-1/2"
//             />
//           </div>

//           <table className="min-w-full text-sm">
//             <thead>
//               <tr className="text-left bg-gray-100">
//                 <th className="p-2">Agent Name</th>
//                 <th className="p-2">Environment</th>
//                 <th className="p-2">Level</th>
//                 <th className="p-2">Department</th>
//                 <th className="p-2">Rule Description</th>
//                 <th className="p-2">Detected At (UTC)</th>
//                 <th className="p-2">Path</th>
//               </tr>
//             </thead>
//             <tbody>
//               {paginatedData.length > 0 ? (
//                 paginatedData.map((row, idx) => (
//                   <tr key={idx} className="border-t">
//                     <td className="p-2">{row.agent_name}</td>
//                     <td className="p-2">{row.department}</td>
//                     <td className="p-2">-</td>
//                     <td className="p-2">{row.server_owner}</td>
//                     <td className="p-2">{row.description}</td>
//                     <td className="p-2">
//                       {new Date(row.detected_at).toLocaleString('en-US', {
//                         dateStyle: 'medium',
//                         timeStyle: 'short',
//                         hour12: true,
//                         timeZone: 'UTC',
//                       })}{' '}
//                       UTC
//                     </td>
//                     <td className="p-2">{row.path}</td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan={7} className="text-center py-4 text-gray-500">
//                     No events found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>

//           {/* Pagination */}
//           {totalPages > 1 && (
//             <div className="flex justify-center items-center mt-4 space-x-4">
//               <button
//                 onClick={handlePrevious}
//                 disabled={currentPage === 1}
//                 className="px-3 py-1 rounded border text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
//               >
//                 Previous
//               </button>
//               <span className="text-sm text-gray-700">
//                 Page {currentPage} of {totalPages}
//               </span>
//               <button
//                 onClick={handleNext}
//                 disabled={currentPage === totalPages}
//                 className="px-3 py-1 rounded border text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
//               >
//                 Next
//               </button>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }


// 'use client';

// export default function FimDetailsTableUI() {
//   // Dummy table data
//   const dummyData = [
//     {
//       timestamp: "2025-07-25T16:42:18.432Z",
//       agent_name: "187",
//       event: "modified",
//       severity: "Critical",
//       department: "IT",
//       environment: "Prod",
//       rule_description: "File with known malware hash detected",
//       path: "/etc/systemd/system/sockets.target.wants/mde_netfilter_v2.socket"
//     },
//     {
//       timestamp: "2025-07-25T16:42:18.479Z",
//       agent_name: "187",
//       event: "modified",
//       severity: "Critical",
//       department: "Finance",
//       environment: "QA",
//       rule_description: "File with known malware hash detected",
//       path: "/etc/systemd/system/multi-user.target.wants/mdatp.service"
//     },
//     {
//       timestamp: "2025-07-25T16:44:47.663Z",
//       agent_name: "011",
//       event: "modified",
//       severity: "Critical",
//       department: "HR",
//       environment: "Prod",
//       rule_description: "File with known malware hash detected",
//       path: "/usr/bin/mdatp"
//     },
//     {
//       timestamp: "2025-07-25T16:42:06.585Z",
//       agent_name: "007",
//       event: "modified",
//       severity: "Critical",
//       department: "Ops",
//       environment: "Dev",
//       rule_description: "File with known malware hash detected",
//       path: "/etc/opt/omi/conf/omsconfig/inventory_lock"
//     }
//   ];

//   return (
//     <div className="bg-white rounded-xl shadow p-4 border overflow-x-auto">
//       {/* Top Filters */}
//       <div className="flex justify-between items-center mb-4">
//         {/* Tabs */}
//         <div className="flex space-x-2">
//           <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md">
//             Application Issue
//           </button>
//           <button className="px-6 py-2 bg-blue-200 text-gray-800 font-semibold rounded-md">
//             OS Issue
//           </button>
//         </div>

//         {/* Dropdowns */}
//         <div className="flex space-x-3">
//           <select className="border px-3 py-2 rounded">
//             <option>Severity</option>
//           </select>
//           <select className="border px-3 py-2 rounded">
//             <option>Server Name</option>
//           </select>
//           <select className="border px-3 py-2 rounded">
//             <option>Environment</option>
//           </select>
//           <select className="border px-3 py-2 rounded">
//             <option>Department</option>
//           </select>
//         </div>
//       </div>

//       {/* Table */}
//       <table className="min-w-full text-sm border border-gray-300">
//         <thead>
//           <tr className="bg-blue-600 text-white text-left">
//             <th className="p-2">Timestamp</th>
//             <th className="p-2">Agent Name</th>
//             <th className="p-2">Event</th>
//             <th className="p-2">Severity</th>
//             <th className="p-2">Department</th>
//             <th className="p-2">Environment</th>
//             <th className="p-2">Rule Description</th>
//             <th className="p-2">Syscheck Path</th>
//           </tr>
//         </thead>
//         <tbody>
//           {dummyData.map((row, idx) => (
//             <tr key={idx} className={idx % 2 === 0 ? "bg-white border-t" : "bg-gray-50 border-t"}>
//               <td className="p-2">{row.timestamp}</td>
//               <td className="p-2">{row.agent_name}</td>
//               <td className="p-2">{row.event}</td>
//               <td className="p-2 text-red-600 font-semibold">{row.severity}</td>
//               <td className="p-2">{row.department}</td>
//               <td className="p-2">{row.environment}</td>
//               <td className="p-2">{row.rule_description}</td>
//               <td className="p-2">{row.path}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }


// 'use client';

// export default function FimDetailsTableUI() {
//   // Dummy table data
//   const dummyData = [
//     {
//       timestamp: "2025-07-25T16:42:18.432Z",
//       agent_name: "187",
//       event: "modified",
//       severity: "Critical",
//       department: "IT",
//       environment: "Prod",
//       rule_description: "File with known malware hash detected",
//       path: "/etc/systemd/system/sockets.target.wants/mde_netfilter_v2.socket"
//     },
//     {
//       timestamp: "2025-07-25T16:42:18.479Z",
//       agent_name: "187",
//       event: "modified",
//       severity: "Critical",
//       department: "Finance",
//       environment: "QA",
//       rule_description: "File with known malware hash detected",
//       path: "/etc/systemd/system/multi-user.target.wants/mdatp.service"
//     },
//     {
//       timestamp: "2025-07-25T16:44:47.663Z",
//       agent_name: "011",
//       event: "modified",
//       severity: "Critical",
//       department: "HR",
//       environment: "Prod",
//       rule_description: "File with known malware hash detected",
//       path: "/usr/bin/mdatp"
//     },
//     {
//       timestamp: "2025-07-25T16:42:06.585Z",
//       agent_name: "007",
//       event: "modified",
//       severity: "Critical",
//       department: "Ops",
//       environment: "Dev",
//       rule_description: "File with known malware hash detected",
//       path: "/etc/opt/omi/conf/omsconfig/inventory_lock"
//     }
//   ];

//   return (
//     <div className="bg-white rounded-xl shadow p-4 border overflow-x-auto">
//       {/* Top Filters */}
//       <div className="flex justify-between items-center mb-4">
//         {/* Tabs */}
//         <div className="flex space-x-2">
//           <button className="px-6 py-2 bg-gray-800 text-white font-semibold rounded-md">
//             Application Issue
//           </button>
//           <button className="px-6 py-2 bg-gray-200 text-gray-800 font-semibold rounded-md">
//             OS Issue
//           </button>
//         </div>

//         {/* Dropdowns */}
//         <div className="flex space-x-3">
//           <select className="border px-3 py-2 rounded bg-gray-100 text-gray-700">
//             <option>Severity</option>
//           </select>
//           <select className="border px-3 py-2 rounded bg-gray-100 text-gray-700">
//             <option>Server Name</option>
//           </select>
//           <select className="border px-3 py-2 rounded bg-gray-100 text-gray-700">
//             <option>Environment</option>
//           </select>
//           <select className="border px-3 py-2 rounded bg-gray-100 text-gray-700">
//             <option>Department</option>
//           </select>
//         </div>
//       </div>

//       {/* Table */}
//       <table className="min-w-full text-sm border border-gray-300">
//         <thead>
//           <tr className="bg-gray-300 text-gray-800 text-left">
//             <th className="p-2">Timestamp</th>
//             <th className="p-2">Agent Name</th>
//             <th className="p-2">Event</th>
//             <th className="p-2">Severity</th>
//             <th className="p-2">Department</th>
//             <th className="p-2">Environment</th>
//             <th className="p-2">Rule Description</th>
//             <th className="p-2">Syscheck Path</th>
//           </tr>
//         </thead>
//         <tbody>
//           {dummyData.map((row, idx) => (
//             <tr
//               key={idx}
//               className={idx % 2 === 0 ? "bg-white border-t" : "bg-gray-50 border-t"}
//             >
//               <td className="p-2">{row.timestamp}</td>
//               <td className="p-2">{row.agent_name}</td>
//               <td className="p-2">{row.event}</td>
//               <td className="p-2 text-red-600 font-semibold">{row.severity}</td>
//               <td className="p-2">{row.department}</td>
//               <td className="p-2">{row.environment}</td>
//               <td className="p-2">{row.rule_description}</td>
//               <td className="p-2">{row.path}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }


// 'use client';

// export default function FimDetailsTableUI() {
//   // Dummy table data
//   const dummyData = [
//     {
//       timestamp: "2025-07-25T16:42:18.432Z",
//       agent_name: "187",
//       event: "modified",
//       severity: "Critical",
//       department: "IT",
//       environment: "Prod",
//       rule_description: "File with known malware hash detected",
//       path: "/etc/systemd/system/sockets.target.wants/mde_netfilter_v2.socket"
//     },
//     {
//       timestamp: "2025-07-25T16:42:18.479Z",
//       agent_name: "187",
//       event: "modified",
//       severity: "Critical",
//       department: "Finance",
//       environment: "QA",
//       rule_description: "File with known malware hash detected",
//       path: "/etc/systemd/system/multi-user.target.wants/mdatp.service"
//     },
//     {
//       timestamp: "2025-07-25T16:44:47.663Z",
//       agent_name: "011",
//       event: "modified",
//       severity: "Critical",
//       department: "HR",
//       environment: "Prod",
//       rule_description: "File with known malware hash detected",
//       path: "/usr/bin/mdatp"
//     },
//     {
//       timestamp: "2025-07-25T16:42:06.585Z",
//       agent_name: "007",
//       event: "modified",
//       severity: "Critical",
//       department: "Ops",
//       environment: "Dev",
//       rule_description: "File with known malware hash detected",
//       path: "/etc/opt/omi/conf/omsconfig/inventory_lock"
//     }
//   ];

//   return (
//     <div className="bg-white rounded-xl shadow p-4 border overflow-x-auto">
//       {/* Top Filters */}
//       <div className="flex justify-between items-center mb-4">
//         {/* Tabs */}
//         <div className="flex space-x-2">
//           <button
//             className="px-6 py-2 font-semibold rounded-md text-white"
//             style={{ backgroundColor: "rgb(59, 130, 246)" }}
//           >
//             Application Issue
//           </button>
//           <button className="px-6 py-2 bg-gray-200 text-gray-800 font-semibold rounded-md">
//             OS Issue
//           </button>
//         </div>

//         {/* Dropdowns */}
//         <div className="flex space-x-3">
//           <select className="border px-3 py-2 rounded bg-gray-100 text-gray-700">
//             <option>Severity</option>
//           </select>
//           <select className="border px-3 py-2 rounded bg-gray-100 text-gray-700">
//             <option>Server Name</option>
//           </select>
//           <select className="border px-3 py-2 rounded bg-gray-100 text-gray-700">
//             <option>Environment</option>
//           </select>
//           <select className="border px-3 py-2 rounded bg-gray-100 text-gray-700">
//             <option>Department</option>
//           </select>
//         </div>
//       </div>

//       {/* Table */}
//       <table className="min-w-full text-sm border border-gray-300">
//         <thead>
//           <tr className="bg-gray-300 text-gray-800 text-left">
//             <th className="p-2">Timestamp</th>
//             <th className="p-2">Agent Name</th>
//             <th className="p-2">Event</th>
//             <th className="p-2">Severity</th>
//             <th className="p-2">Department</th>
//             <th className="p-2">Environment</th>
//             <th className="p-2">Rule Description</th>
//             <th className="p-2">Syscheck Path</th>
//           </tr>
//         </thead>
//         <tbody>
//           {dummyData.map((row, idx) => (
//             <tr
//               key={idx}
//               className={idx % 2 === 0 ? "bg-white border-t" : "bg-gray-50 border-t"}
//             >
//               <td className="p-2">{row.timestamp}</td>
//               <td className="p-2">{row.agent_name}</td>
//               <td className="p-2">{row.event}</td>
//               <td className="p-2 text-red-600 font-semibold">{row.severity}</td>
//               <td className="p-2">{row.department}</td>
//               <td className="p-2">{row.environment}</td>
//               <td className="p-2">{row.rule_description}</td>
//               <td className="p-2">{row.path}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }


// 'use client';
// import { useState } from "react";

// export default function FimDetailsTableUI() {
//   // Dummy table data with issue_type
//   const dummyData = [
//     {
//       timestamp: "2025-07-25T16:42:18.432Z",
//       agent_name: "187",
//       event: "modified",
//       severity: "Critical",
//       department: "IT",
//       environment: "Prod",
//       rule_description: "File with known malware hash detected",
//       path: "/etc/systemd/system/sockets.target.wants/mde_netfilter_v2.socket",
//       issue_type: "Application",
//     },
//     {
//       timestamp: "2025-07-25T16:42:18.479Z",
//       agent_name: "187",
//       event: "modified",
//       severity: "Critical",
//       department: "Finance",
//       environment: "QA",
//       rule_description: "File with known malware hash detected",
//       path: "/etc/systemd/system/multi-user.target.wants/mdatp.service",
//       issue_type: "OS",
//     },
//     {
//       timestamp: "2025-07-25T16:44:47.663Z",
//       agent_name: "011",
//       event: "modified",
//       severity: "Critical",
//       department: "HR",
//       environment: "Prod",
//       rule_description: "File with known malware hash detected",
//       path: "/usr/bin/mdatp",
//       issue_type: "Application",
//     },
//     {
//       timestamp: "2025-07-25T16:42:06.585Z",
//       agent_name: "007",
//       event: "modified",
//       severity: "Critical",
//       department: "Ops",
//       environment: "Dev",
//       rule_description: "File with known malware hash detected",
//       path: "/etc/opt/omi/conf/omsconfig/inventory_lock",
//       issue_type: "OS",
//     }
//   ];

//   // State for active tab
//   const [activeTab, setActiveTab] = useState<"Application" | "OS">("Application");

//   // Filter data based on tab
//   const filteredData = dummyData.filter(row => row.issue_type === activeTab);

//   return (
//     <div className="bg-white rounded-xl shadow p-4 border overflow-x-auto">
//       {/* Top Filters */}
//       <div className="flex justify-between items-center mb-4">
//         {/* Tabs */}
//         <div className="flex space-x-2">
//           <button
//             onClick={() => setActiveTab("Application")}
//             className={`px-6 py-2 font-semibold rounded-md text-white ${
//               activeTab === "Application" ? "" : "opacity-60"
//             }`}
//             style={{ backgroundColor: "rgb(59, 130, 246)" }}
//           >
//             Application Issue
//           </button>
//           <button
//             onClick={() => setActiveTab("OS")}
//             className={`px-6 py-2 font-semibold rounded-md text-white ${
//               activeTab === "OS" ? "" : "opacity-60"
//             }`}
//             style={{ backgroundColor: "rgb(59, 130, 246)" }}
//           >
//             OS Issue
//           </button>
//         </div>

//         {/* Dropdowns */}
//         <div className="flex space-x-3">
//           <select className="border px-3 py-2 rounded bg-gray-100 text-gray-700">
//             <option>Severity</option>
//           </select>
//           <select className="border px-3 py-2 rounded bg-gray-100 text-gray-700">
//             <option>Server Name</option>
//           </select>
//           <select className="border px-3 py-2 rounded bg-gray-100 text-gray-700">
//             <option>Environment</option>
//           </select>
//           <select className="border px-3 py-2 rounded bg-gray-100 text-gray-700">
//             <option>Department</option>
//           </select>
//         </div>
//       </div>

//       {/* Table */}
//       <table className="min-w-full text-sm border border-gray-300">
//         <thead>
//           <tr className="bg-gray-300 text-gray-800 text-left">
//             <th className="p-2">Timestamp</th>
//             <th className="p-2">Agent Name</th>
//             <th className="p-2">Event</th>
//             <th className="p-2">Severity</th>
//             <th className="p-2">Department</th>
//             <th className="p-2">Environment</th>
//             <th className="p-2">Rule Description</th>
//             <th className="p-2">Syscheck Path</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData.length > 0 ? (
//             filteredData.map((row, idx) => (
//               <tr
//                 key={idx}
//                 className={idx % 2 === 0 ? "bg-white border-t" : "bg-gray-50 border-t"}
//               >
//                 <td className="p-2">{row.timestamp}</td>
//                 <td className="p-2">{row.agent_name}</td>
//                 <td className="p-2">{row.event}</td>
//                 <td className="p-2 text-red-600 font-semibold">{row.severity}</td>
//                 <td className="p-2">{row.department}</td>
//                 <td className="p-2">{row.environment}</td>
//                 <td className="p-2">{row.rule_description}</td>
//                 <td className="p-2">{row.path}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={8} className="text-center p-4 text-gray-500">
//                 No {activeTab} Issues Found
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }


// 'use client';
// import { useState } from "react";

// export default function FimDetailsTableUI() {
//   // Dummy table data with issue_type
//   const dummyData = [
//     {
//       timestamp: "2025-07-25T16:42:18.432Z",
//       agent_name: "187",
//       event: "modified",
//       severity: "Critical",
//       department: "IT",
//       environment: "Prod",
//       rule_description: "File with known malware hash detected",
//       path: "/etc/systemd/system/sockets.target.wants/mde_netfilter_v2.socket",
//       issue_type: "Application",
//     },
//     {
//       timestamp: "2025-07-25T16:42:18.479Z",
//       agent_name: "187",
//       event: "modified",
//       severity: "Critical",
//       department: "Finance",
//       environment: "QA",
//       rule_description: "File with known malware hash detected",
//       path: "/etc/systemd/system/multi-user.target.wants/mdatp.service",
//       issue_type: "OS",
//     },
//     {
//       timestamp: "2025-07-25T16:44:47.663Z",
//       agent_name: "011",
//       event: "modified",
//       severity: "Critical",
//       department: "HR",
//       environment: "Prod",
//       rule_description: "File with known malware hash detected",
//       path: "/usr/bin/mdatp",
//       issue_type: "Application",
//     },
//     {
//       timestamp: "2025-07-25T16:42:06.585Z",
//       agent_name: "007",
//       event: "modified",
//       severity: "Critical",
//       department: "Ops",
//       environment: "Dev",
//       rule_description: "File with known malware hash detected",
//       path: "/etc/opt/omi/conf/omsconfig/inventory_lock",
//       issue_type: "OS",
//     }
//   ];

//   // State for active tab
//   const [activeTab, setActiveTab] = useState<"Application" | "OS">("Application");

//   // Filter data based on tab
//   const filteredData = dummyData.filter(row => row.issue_type === activeTab);

//   return (
//     <div className="bg-white rounded-xl shadow p-4 border overflow-x-auto">
//       {/* Top Filters */}
//       <div className="flex justify-between items-center mb-4">
//         {/* Tabs */}
//         <div className="flex space-x-2">
//           <button
//             onClick={() => setActiveTab("Application")}
//             className={`px-6 py-2 font-semibold rounded-md text-white cursor-pointer ${
//               activeTab === "Application" ? "" : "opacity-60"
//             }`}
//             style={{ backgroundColor: "rgb(59, 130, 246)" }}
//           >
//             Application Issue
//           </button>
//           <button
//             onClick={() => setActiveTab("OS")}
//             className={`px-6 py-2 font-semibold rounded-md text-white cursor-pointer ${
//               activeTab === "OS" ? "" : "opacity-60"
//             }`}
//             style={{ backgroundColor: "rgb(59, 130, 246)" }}
//           >
//             OS Issue
//           </button>
//         </div>

//         {/* Dropdowns */}
//         <div className="flex space-x-3">
//           <select className="border px-3 py-2 rounded bg-gray-100 text-gray-700 cursor-pointer">
//             <option>Severity</option>
//           </select>
//           <select className="border px-3 py-2 rounded bg-gray-100 text-gray-700 cursor-pointer">
//             <option>Server Name</option>
//           </select>
//           <select className="border px-3 py-2 rounded bg-gray-100 text-gray-700 cursor-pointer">
//             <option>Environment</option>
//           </select>
//           <select className="border px-3 py-2 rounded bg-gray-100 text-gray-700 cursor-pointer">
//             <option>Department</option>
//           </select>
//         </div>
//       </div>

//       {/* Table */}
//       <table className="min-w-full text-sm border border-gray-300">
//         <thead>
//           <tr className="bg-gray-300 text-gray-800 text-left">
//             <th className="p-2">Timestamp</th>
//             <th className="p-2">Agent Name</th>
//             <th className="p-2">Event</th>
//             <th className="p-2">Severity</th>
//             <th className="p-2">Department</th>
//             <th className="p-2">Environment</th>
//             <th className="p-2">Rule Description</th>
//             <th className="p-2">Syscheck Path</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData.length > 0 ? (
//             filteredData.map((row, idx) => (
//               <tr
//                 key={idx}
//                 className={idx % 2 === 0 ? "bg-white border-t" : "bg-gray-50 border-t"}
//               >
//                 <td className="p-2">{row.timestamp}</td>
//                 <td className="p-2">{row.agent_name}</td>
//                 <td className="p-2">{row.event}</td>
//                 <td className="p-2 text-red-600 font-semibold">{row.severity}</td>
//                 <td className="p-2">{row.department}</td>
//                 <td className="p-2">{row.environment}</td>
//                 <td className="p-2">{row.rule_description}</td>
//                 <td className="p-2">{row.path}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={8} className="text-center p-4 text-gray-500">
//                 No {activeTab} Issues Found
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }


// 'use client';
// import { useState, useEffect } from "react";

// export default function FimDetailsTableUI() {
//   const [data, setData] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [activeTab, setActiveTab] = useState<"Application Issue" | "OS Issue">(
//     "Application Issue"
//   );

//   // Fetch API data
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const res = await fetch("http://128.2.99.235/fim-events");
//         const json = await res.json();
//         setData(json.data || []);
//       } catch (error) {
//         console.error("Error fetching FIM events:", error);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchData();
//   }, []);

//   // Filter data based on active tab
//   const filteredData = data.filter(
//     (row) => row.category === activeTab
//   );

//   return (
//     <div className="bg-white rounded-xl shadow p-4 border overflow-x-auto">
//       {/* Top Filters */}
//       <div className="flex justify-between items-center mb-4">
//         {/* Tabs */}
//         <div className="flex space-x-2">
//           <button
//             onClick={() => setActiveTab("Application Issue")}
//             className={`px-6 py-2 font-semibold rounded-md text-white cursor-pointer ${
//               activeTab === "Application Issue" ? "" : "opacity-60"
//             }`}
//             style={{ backgroundColor: "rgb(59, 130, 246)" }}
//           >
//             Application Issue
//           </button>
//           <button
//             onClick={() => setActiveTab("OS Issue")}
//             className={`px-6 py-2 font-semibold rounded-md text-white cursor-pointer ${
//               activeTab === "OS Issue" ? "" : "opacity-60"
//             }`}
//             style={{ backgroundColor: "rgb(59, 130, 246)" }}
//           >
//             OS Issue
//           </button>
//         </div>

//         {/* Dropdowns */}
//         <div className="flex space-x-3">
//           <select className="border px-3 py-2 rounded bg-gray-100 text-gray-700 cursor-pointer">
//             <option>Severity</option>
//           </select>
//           <select className="border px-3 py-2 rounded bg-gray-100 text-gray-700 cursor-pointer">
//             <option>Server Name</option>
//           </select>
//           <select className="border px-3 py-2 rounded bg-gray-100 text-gray-700 cursor-pointer">
//             <option>Environment</option>
//           </select>
//           <select className="border px-3 py-2 rounded bg-gray-100 text-gray-700 cursor-pointer">
//             <option>Department</option>
//           </select>
//         </div>
//       </div>

//       {/* Table */}
//       {loading ? (
//         <div className="text-center p-6 text-gray-500">Loading events...</div>
//       ) : (
//         <table className="min-w-full text-sm border border-gray-300">
//           <thead>
//             <tr className="bg-gray-300 text-gray-800 text-left">
//               <th className="p-2">Timestamp</th>
//               <th className="p-2">Agent Name</th>
//               <th className="p-2">Event</th>
//               <th className="p-2">Severity</th>
//               <th className="p-2">Department</th>
//               <th className="p-2">Environment</th>
//               <th className="p-2">Rule Description</th>
//               <th className="p-2">Syscheck Path</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredData.length > 0 ? (
//               filteredData.map((row, idx) => (
//                 <tr
//                   key={idx}
//                   className={
//                     idx % 2 === 0 ? "bg-white border-t" : "bg-gray-50 border-t"
//                   }
//                 >
//                   <td className="p-2">{row.detected_at}</td>
//                   <td className="p-2">{row.agent_name}</td>
//                   <td className="p-2">{row.event}</td>
//                   <td className="p-2 text-red-600 font-semibold">
//                     {row.severity}
//                   </td>
//                   <td className="p-2">{row.department}</td>
//                   <td className="p-2">{row.environment}</td>
//                   <td className="p-2">{row.description}</td>
//                   <td className="p-2">{row.path}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={8} className="text-center p-4 text-gray-500">
//                   No {activeTab} Issues Found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }


// 'use client';
// import { useState, useEffect } from "react";

// export default function FimDetailsTableUI() {
//   const [data, setData] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [activeTab, setActiveTab] = useState<"Application Issue" | "OS Issue">(
//     "Application Issue"
//   );

//   // Fetch API data
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const res = await fetch("http://128.2.99.235/fim-events");
//         const json = await res.json();
//         let events = json.data || [];

//         // Deduplicate by agent_name + path, keep latest detected_at
//         const deduped: Record<string, any> = {};
//         for (const ev of events) {
//           const key = `${ev.agent_name}-${ev.path}`;
//           if (!deduped[key]) {
//             deduped[key] = ev;
//           } else {
//             // Compare timestamps, keep latest
//             const oldTime = new Date(deduped[key].detected_at).getTime();
//             const newTime = new Date(ev.detected_at).getTime();
//             if (newTime > oldTime) {
//               deduped[key] = ev;
//             }
//           }
//         }

//         setData(Object.values(deduped));
//       } catch (error) {
//         console.error("Error fetching FIM events:", error);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchData();
//   }, []);

//   // Filter data based on active tab
//   const filteredData = data.filter(
//     (row) => row.category === activeTab
//   );

//   return (
//     <div className="bg-white rounded-xl shadow p-4 border overflow-x-auto">
//       {/* Top Filters */}
//       <div className="flex justify-between items-center mb-4">
//         {/* Tabs */}
//         <div className="flex space-x-2">
//           <button
//             onClick={() => setActiveTab("Application Issue")}
//             className={`px-6 py-2 font-semibold rounded-md text-white cursor-pointer ${
//               activeTab === "Application Issue" ? "" : "opacity-60"
//             }`}
//             style={{ backgroundColor: "rgb(59, 130, 246)" }}
//           >
//             Application Issue
//           </button>
//           <button
//             onClick={() => setActiveTab("OS Issue")}
//             className={`px-6 py-2 font-semibold rounded-md text-white cursor-pointer ${
//               activeTab === "OS Issue" ? "" : "opacity-60"
//             }`}
//             style={{ backgroundColor: "rgb(59, 130, 246)" }}
//           >
//             OS Issue
//           </button>
//         </div>

//         {/* Dropdowns */}
//         <div className="flex space-x-3">
//           <select className="border px-3 py-2 rounded bg-gray-100 text-gray-700 cursor-pointer">
//             <option>Severity</option>
//           </select>
//           <select className="border px-3 py-2 rounded bg-gray-100 text-gray-700 cursor-pointer">
//             <option>Server Name</option>
//           </select>
//           <select className="border px-3 py-2 rounded bg-gray-100 text-gray-700 cursor-pointer">
//             <option>Environment</option>
//           </select>
//           <select className="border px-3 py-2 rounded bg-gray-100 text-gray-700 cursor-pointer">
//             <option>Department</option>
//           </select>
//         </div>
//       </div>

//       {/* Table */}
//       {loading ? (
//         <div className="text-center p-6 text-gray-500">Loading events...</div>
//       ) : (
//         <table className="min-w-full text-sm border border-gray-300">
//           <thead>
//             <tr className="bg-gray-300 text-gray-800 text-left">
//               <th className="p-2">Timestamp</th>
//               <th className="p-2">Agent Name</th>
//               <th className="p-2">Event</th>
//               <th className="p-2">Severity</th>
//               <th className="p-2">Department</th>
//               <th className="p-2">Environment</th>
//               <th className="p-2">Rule Description</th>
//               <th className="p-2">Syscheck Path</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredData.length > 0 ? (
//               filteredData.map((row, idx) => (
//                 <tr
//                   key={idx}
//                   className={
//                     idx % 2 === 0 ? "bg-white border-t" : "bg-gray-50 border-t"
//                   }
//                 >
//                   <td className="p-2">{row.detected_at}</td>
//                   <td className="p-2">{row.agent_name}</td>
//                   <td className="p-2">{row.event}</td>
//                   <td className="p-2 text-red-600 font-semibold">
//                     {row.severity}
//                   </td>
//                   <td className="p-2">{row.department}</td>
//                   <td className="p-2">{row.environment}</td>
//                   <td className="p-2">{row.description}</td>
//                   <td className="p-2">{row.path}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={8} className="text-center p-4 text-gray-500">
//                   No {activeTab} Issues Found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }


// 'use client';
// import { useState, useEffect, useMemo } from "react";

// export default function FimDetailsTableUI() {
//   const [data, setData] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [activeTab, setActiveTab] = useState<"Application Issue" | "OS Issue">(
//     "Application Issue"
//   );

//   const [pageApp, setPageApp] = useState(1);
//   const [pageOs, setPageOs] = useState(1);
//   const ITEMS_PER_PAGE = 15;

//   // Fetch API data
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const res = await fetch("http://128.2.99.235/fim-events");
//         const json = await res.json();
//         let events = json.data || [];

//         // Deduplicate by agent_name + path, keep latest detected_at
//         const deduped: Record<string, any> = {};
//         for (const ev of events) {
//           const key = `${ev.agent_name}-${ev.path}`;
//           if (!deduped[key]) {
//             deduped[key] = ev;
//           } else {
//             const oldTime = new Date(deduped[key].detected_at).getTime();
//             const newTime = new Date(ev.detected_at).getTime();
//             if (newTime > oldTime) {
//               deduped[key] = ev;
//             }
//           }
//         }

//         // Sort latest first
//         const sorted = Object.values(deduped).sort(
//           (a: any, b: any) =>
//             new Date(b.detected_at).getTime() -
//             new Date(a.detected_at).getTime()
//         );

//         setData(sorted);
//       } catch (error) {
//         console.error("Error fetching FIM events:", error);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchData();
//   }, []);

//   // Filter data based on active tab
//   const filteredData = useMemo(() => {
//     return data.filter((row) => row.category === activeTab);
//   }, [data, activeTab]);

//   // Pagination logic
//   const totalPagesApp = Math.ceil(
//     data.filter((row) => row.category === "Application Issue").length /
//       ITEMS_PER_PAGE
//   );
//   const totalPagesOs = Math.ceil(
//     data.filter((row) => row.category === "OS Issue").length / ITEMS_PER_PAGE
//   );

//   const paginatedData = useMemo(() => {
//     if (activeTab === "Application Issue") {
//       return filteredData.slice(
//         (pageApp - 1) * ITEMS_PER_PAGE,
//         pageApp * ITEMS_PER_PAGE
//       );
//     } else {
//       return filteredData.slice(
//         (pageOs - 1) * ITEMS_PER_PAGE,
//         pageOs * ITEMS_PER_PAGE
//       );
//     }
//   }, [filteredData, activeTab, pageApp, pageOs]);

//   return (
//     <div className="bg-white rounded-xl shadow p-4 border overflow-x-auto">
//       {/* Top Filters */}
//       <div className="flex justify-between items-center mb-4">
//         {/* Tabs */}
//         <div className="flex space-x-2">
//           <button
//             onClick={() => setActiveTab("Application Issue")}
//             className={`px-6 py-2 font-semibold rounded-md text-white cursor-pointer ${
//               activeTab === "Application Issue" ? "" : "opacity-60"
//             }`}
//             style={{ backgroundColor: "rgb(59, 130, 246)" }}
//           >
//             Application Issue
//           </button>
//           <button
//             onClick={() => setActiveTab("OS Issue")}
//             className={`px-6 py-2 font-semibold rounded-md text-white cursor-pointer ${
//               activeTab === "OS Issue" ? "" : "opacity-60"
//             }`}
//             style={{ backgroundColor: "rgb(59, 130, 246)" }}
//           >
//             OS Issue
//           </button>
//         </div>

//         {/* Dropdowns */}
//         <div className="flex space-x-3">
//           <select className="border px-3 py-2 rounded bg-gray-100 text-gray-700 cursor-pointer">
//             <option>Severity</option>
//           </select>
//           <select className="border px-3 py-2 rounded bg-gray-100 text-gray-700 cursor-pointer">
//             <option>Server Name</option>
//           </select>
//           <select className="border px-3 py-2 rounded bg-gray-100 text-gray-700 cursor-pointer">
//             <option>Environment</option>
//           </select>
//           <select className="border px-3 py-2 rounded bg-gray-100 text-gray-700 cursor-pointer">
//             <option>Department</option>
//           </select>
//         </div>
//       </div>

//       {/* Table */}
//       {loading ? (
//         <div className="text-center p-6 text-gray-500">Loading events...</div>
//       ) : (
//         <>
//           <table className="min-w-full text-sm border border-gray-300">
//             <thead>
//               <tr className="bg-gray-300 text-gray-800 text-left">
//                 <th className="p-2">Timestamp</th>
//                 <th className="p-2">Agent Name</th>
//                 <th className="p-2">Event</th>
//                 <th className="p-2">Severity</th>
//                 <th className="p-2">Department</th>
//                 <th className="p-2">Environment</th>
//                 <th className="p-2">Rule Description</th>
//                 <th className="p-2">Syscheck Path</th>
//               </tr>
//             </thead>
//             <tbody>
//               {paginatedData.length > 0 ? (
//                 paginatedData.map((row, idx) => (
//                   <tr
//                     key={idx}
//                     className={
//                       idx % 2 === 0
//                         ? "bg-white border-t"
//                         : "bg-gray-50 border-t"
//                     }
//                   >
//                     <td className="p-2">{row.detected_at}</td>
//                     <td className="p-2">{row.agent_name}</td>
//                     <td className="p-2">{row.event}</td>
//                     <td className="p-2 text-red-600 font-semibold">
//                       {row.severity}
//                     </td>
//                     <td className="p-2">{row.department}</td>
//                     <td className="p-2">{row.environment}</td>
//                     <td className="p-2">{row.description}</td>
//                     <td className="p-2">{row.path}</td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan={8} className="text-center p-4 text-gray-500">
//                     No {activeTab} Issues Found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>

//           {/* Pagination Controls */}
//           <div className="flex justify-between items-center mt-4">
//             <button
//               onClick={() =>
//                 activeTab === "Application Issue"
//                   ? setPageApp((p) => Math.max(p - 1, 1))
//                   : setPageOs((p) => Math.max(p - 1, 1))
//               }
//               disabled={
//                 activeTab === "Application Issue" ? pageApp === 1 : pageOs === 1
//               }
//               className="px-4 py-2 bg-gray-200 rounded cursor-pointer disabled:opacity-50"
//             >
//               Previous
//             </button>
//             <span>
//               Page{" "}
//               {activeTab === "Application Issue" ? pageApp : pageOs} of{" "}
//               {activeTab === "Application Issue"
//                 ? totalPagesApp || 1
//                 : totalPagesOs || 1}
//             </span>
//             <button
//               onClick={() =>
//                 activeTab === "Application Issue"
//                   ? setPageApp((p) =>
//                       Math.min(p + 1, totalPagesApp || 1)
//                     )
//                   : setPageOs((p) => Math.min(p + 1, totalPagesOs || 1))
//               }
//               disabled={
//                 activeTab === "Application Issue"
//                   ? pageApp === totalPagesApp || totalPagesApp === 0
//                   : pageOs === totalPagesOs || totalPagesOs === 0
//               }
//               className="px-4 py-2 bg-gray-200 rounded cursor-pointer disabled:opacity-50"
//             >
//               Next
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }


// 'use client';
// import { useState, useEffect, useMemo } from "react";

// export default function FimDetailsTableUI() {
//   const [data, setData] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [activeTab, setActiveTab] = useState<"Application Issue" | "OS Issue">(
//     "Application Issue"
//   );

//   const [pageApp, setPageApp] = useState(1);
//   const [pageOs, setPageOs] = useState(1);
//   const ITEMS_PER_PAGE = 15;

//   // Fetch API data
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const res = await fetch("http://128.2.99.235/fim-events");
//         const json = await res.json();
//         let events = json.data || [];

//         // Deduplicate by agent_name + path, keep latest detected_at
//         const deduped: Record<string, any> = {};
//         for (const ev of events) {
//           const key = `${ev.agent_name}-${ev.path}`;
//           if (!deduped[key]) {
//             deduped[key] = ev;
//           } else {
//             const oldTime = new Date(deduped[key].detected_at).getTime();
//             const newTime = new Date(ev.detected_at).getTime();
//             if (newTime > oldTime) {
//               deduped[key] = ev;
//             }
//           }
//         }

//         // Sort latest first
//         const sorted = Object.values(deduped).sort(
//           (a: any, b: any) =>
//             new Date(b.detected_at).getTime() -
//             new Date(a.detected_at).getTime()
//         );

//         setData(sorted);
//       } catch (error) {
//         console.error("Error fetching FIM events:", error);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchData();
//   }, []);

//   // Filter data based on active tab
//   const filteredData = useMemo(() => {
//     return data.filter((row) => row.category === activeTab);
//   }, [data, activeTab]);

//   // Pagination logic
//   const totalPagesApp = Math.ceil(
//     data.filter((row) => row.category === "Application Issue").length /
//       ITEMS_PER_PAGE
//   );
//   const totalPagesOs = Math.ceil(
//     data.filter((row) => row.category === "OS Issue").length / ITEMS_PER_PAGE
//   );

//   const paginatedData = useMemo(() => {
//     if (activeTab === "Application Issue") {
//       return filteredData.slice(
//         (pageApp - 1) * ITEMS_PER_PAGE,
//         pageApp * ITEMS_PER_PAGE
//       );
//     } else {
//       return filteredData.slice(
//         (pageOs - 1) * ITEMS_PER_PAGE,
//         pageOs * ITEMS_PER_PAGE
//       );
//     }
//   }, [filteredData, activeTab, pageApp, pageOs]);

//   return (
//     <div className="bg-white rounded-xl shadow p-4 border overflow-x-auto">
//       {/* Top Filters */}
//       <div className="flex justify-between items-center mb-4">
//         {/* Tabs */}
//         <div className="flex space-x-2">
//           <button
//             onClick={() => setActiveTab("Application Issue")}
//             className={`px-6 py-2 font-semibold rounded-md text-white cursor-pointer ${
//               activeTab === "Application Issue" ? "" : "opacity-60"
//             }`}
//             style={{ backgroundColor: "rgb(59, 130, 246)" }}
//           >
//             Application Issue
//           </button>
//           <button
//             onClick={() => setActiveTab("OS Issue")}
//             className={`px-6 py-2 font-semibold rounded-md text-white cursor-pointer ${
//               activeTab === "OS Issue" ? "" : "opacity-60"
//             }`}
//             style={{ backgroundColor: "rgb(59, 130, 246)" }}
//           >
//             OS Issue
//           </button>
//         </div>

//         {/* Dropdowns */}
//         <div className="flex space-x-3">
//           <select className="border px-3 py-2 rounded bg-gray-100 text-gray-700 cursor-pointer">
//             <option>Severity</option>
//           </select>
//           <select className="border px-3 py-2 rounded bg-gray-100 text-gray-700 cursor-pointer">
//             <option>Server</option>
//           </select>
//           <select className="border px-3 py-2 rounded bg-gray-100 text-gray-700 cursor-pointer">
//             <option>Environment</option>
//           </select>
//           <select className="border px-3 py-2 rounded bg-gray-100 text-gray-700 cursor-pointer">
//             <option>Department</option>
//           </select>
//         </div>
//       </div>

//       {/* Table */}
//       {loading ? (
//         <div className="text-center p-6 text-gray-500">Loading events...</div>
//       ) : (
//         <>
//           <table className="min-w-full text-sm border border-gray-300">
//             <thead>
//               <tr className="bg-gray-300 text-gray-800 text-left">
//                 <th className="p-2">Timestamp</th>
//                 <th className="p-2">Agent Name</th>
//                 <th className="p-2">Server</th>
//                 <th className="p-2">Event</th>
//                 <th className="p-2">Severity</th>
//                 <th className="p-2">Department</th>
//                 <th className="p-2">Environment</th>
//                 <th className="p-2">Rule Description</th>
//                 <th className="p-2">Syscheck Path</th>
//               </tr>
//             </thead>
//             <tbody>
//               {paginatedData.length > 0 ? (
//                 paginatedData.map((row, idx) => (
//                   <tr
//                     key={idx}
//                     className={
//                       idx % 2 === 0
//                         ? "bg-white border-t"
//                         : "bg-gray-50 border-t"
//                     }
//                   >
//                     <td className="p-2">{row.detected_at}</td>
//                     <td className="p-2">{row.agent_name}</td>
//                     <td className="p-2">{row.server_owner}</td>
//                     <td className="p-2">{row.event}</td>
//                     <td className="p-2 text-red-600 font-semibold">
//                       {row.severity}
//                     </td>
//                     <td className="p-2">{row.department}</td>
//                     <td className="p-2">{row.environment}</td>
//                     <td className="p-2">{row.description}</td>
//                     <td className="p-2">{row.path}</td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan={9} className="text-center p-4 text-gray-500">
//                     No {activeTab} Issues Found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>

//           {/* Pagination Controls */}
//           <div className="flex justify-between items-center mt-4">
//             <button
//               onClick={() =>
//                 activeTab === "Application Issue"
//                   ? setPageApp((p) => Math.max(p - 1, 1))
//                   : setPageOs((p) => Math.max(p - 1, 1))
//               }
//               disabled={
//                 activeTab === "Application Issue" ? pageApp === 1 : pageOs === 1
//               }
//               className="px-4 py-2 bg-gray-200 rounded cursor-pointer disabled:opacity-50"
//             >
//               Previous
//             </button>
//             <span>
//               Page{" "}
//               {activeTab === "Application Issue" ? pageApp : pageOs} of{" "}
//               {activeTab === "Application Issue"
//                 ? totalPagesApp || 1
//                 : totalPagesOs || 1}
//             </span>
//             <button
//               onClick={() =>
//                 activeTab === "Application Issue"
//                   ? setPageApp((p) => Math.min(p + 1, totalPagesApp || 1))
//                   : setPageOs((p) => Math.min(p + 1, totalPagesOs || 1))
//               }
//               disabled={
//                 activeTab === "Application Issue"
//                   ? pageApp === totalPagesApp || totalPagesApp === 0
//                   : pageOs === totalPagesOs || totalPagesOs === 0
//               }
//               className="px-4 py-2 bg-gray-200 rounded cursor-pointer disabled:opacity-50"
//             >
//               Next
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }



// 'use client';
// import { useState, useEffect, useMemo } from "react";

// export default function FimDetailsTableUI() {
//   const [data, setData] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [activeTab, setActiveTab] = useState<"Application Issue" | "OS Issue">(
//     "Application Issue"
//   );

//   const [filters, setFilters] = useState({
//     severity: "",
//     server_owner: "",
//     environment: "",
//     department: "",
//   });

//   const [pageApp, setPageApp] = useState(1);
//   const [pageOs, setPageOs] = useState(1);
//   const ITEMS_PER_PAGE = 15;

//   // Fetch API data
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const res = await fetch("http://128.2.99.235/fim-events");
//         const json = await res.json();
//         let events = json.data || [];

//         // Deduplicate by agent_name + path, keep latest detected_at
//         const deduped: Record<string, any> = {};
//         for (const ev of events) {
//           const key = `${ev.agent_name}-${ev.path}`;
//           if (!deduped[key]) {
//             deduped[key] = ev;
//           } else {
//             const oldTime = new Date(deduped[key].detected_at).getTime();
//             const newTime = new Date(ev.detected_at).getTime();
//             if (newTime > oldTime) {
//               deduped[key] = ev;
//             }
//           }
//         }

//         // Sort latest first
//         const sorted = Object.values(deduped).sort(
//           (a: any, b: any) =>
//             new Date(b.detected_at).getTime() -
//             new Date(a.detected_at).getTime()
//         );

//         setData(sorted);
//       } catch (error) {
//         console.error("Error fetching FIM events:", error);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchData();
//   }, []);

//   // Apply filters + tab
//   const filteredData = useMemo(() => {
//     return data
//       .filter((row) => row.category === activeTab)
//       .filter((row) =>
//         filters.severity ? row.severity === filters.severity : true
//       )
//       .filter((row) =>
//         filters.server_owner ? row.server_owner === filters.server_owner : true
//       )
//       .filter((row) =>
//         filters.environment ? row.environment === filters.environment : true
//       )
//       .filter((row) =>
//         filters.department ? row.department === filters.department : true
//       );
//   }, [data, activeTab, filters]);

//   // Collect unique dropdown options from API
//   const severities = [...new Set(data.map((d) => d.severity))];
//   const serverOwners = [...new Set(data.map((d) => d.server_owner))];
//   const environments = [...new Set(data.map((d) => d.environment))];
//   const departments = [...new Set(data.map((d) => d.department))];

//   // Pagination logic
//   const totalPagesApp = Math.ceil(
//     data.filter((row) => row.category === "Application Issue").length /
//       ITEMS_PER_PAGE
//   );
//   const totalPagesOs = Math.ceil(
//     data.filter((row) => row.category === "OS Issue").length / ITEMS_PER_PAGE
//   );

//   const paginatedData = useMemo(() => {
//     if (activeTab === "Application Issue") {
//       return filteredData.slice(
//         (pageApp - 1) * ITEMS_PER_PAGE,
//         pageApp * ITEMS_PER_PAGE
//       );
//     } else {
//       return filteredData.slice(
//         (pageOs - 1) * ITEMS_PER_PAGE,
//         pageOs * ITEMS_PER_PAGE
//       );
//     }
//   }, [filteredData, activeTab, pageApp, pageOs]);

//   return (
//     <div className="bg-white rounded-xl shadow p-4 border overflow-x-auto">
//       {/* Top Filters */}
//       <div className="flex justify-between items-center mb-4">
//         {/* Tabs */}
//         <div className="flex space-x-2">
//           <button
//             onClick={() => setActiveTab("Application Issue")}
//             className={`px-6 py-2 font-semibold rounded-md text-white cursor-pointer ${
//               activeTab === "Application Issue" ? "" : "opacity-60"
//             }`}
//             style={{ backgroundColor: "rgb(59, 130, 246)" }}
//           >
//             Application Issue
//           </button>
//           <button
//             onClick={() => setActiveTab("OS Issue")}
//             className={`px-6 py-2 font-semibold rounded-md text-white cursor-pointer ${
//               activeTab === "OS Issue" ? "" : "opacity-60"
//             }`}
//             style={{ backgroundColor: "rgb(59, 130, 246)" }}
//           >
//             OS Issue
//           </button>
//         </div>

//         {/* Dropdown Filters */}
//         <div className="flex space-x-3">
//           <select
//             value={filters.severity}
//             onChange={(e) =>
//               setFilters((f) => ({ ...f, severity: e.target.value }))
//             }
//             className="border px-3 py-2 rounded bg-gray-100 text-gray-700 cursor-pointer"
//           >
//             <option value="">Severity</option>
//             {severities.map((s) => (
//               <option key={s}>{s}</option>
//             ))}
//           </select>
//           <select
//             value={filters.server_owner}
//             onChange={(e) =>
//               setFilters((f) => ({ ...f, server_owner: e.target.value }))
//             }
//             className="border px-3 py-2 rounded bg-gray-100 text-gray-700 cursor-pointer"
//           >
//             <option value="">Server Owner</option>
//             {serverOwners.map((s) => (
//               <option key={s}>{s}</option>
//             ))}
//           </select>
//           <select
//             value={filters.environment}
//             onChange={(e) =>
//               setFilters((f) => ({ ...f, environment: e.target.value }))
//             }
//             className="border px-3 py-2 rounded bg-gray-100 text-gray-700 cursor-pointer"
//           >
//             <option value="">Environment</option>
//             {environments.map((s) => (
//               <option key={s}>{s}</option>
//             ))}
//           </select>
//           <select
//             value={filters.department}
//             onChange={(e) =>
//               setFilters((f) => ({ ...f, department: e.target.value }))
//             }
//             className="border px-3 py-2 rounded bg-gray-100 text-gray-700 cursor-pointer"
//           >
//             <option value="">Department</option>
//             {departments.map((s) => (
//               <option key={s}>{s}</option>
//             ))}
//           </select>
//         </div>
//       </div>

//       {/* Table */}
//       {loading ? (
//         <div className="text-center p-6 text-gray-500">Loading events...</div>
//       ) : (
//         <>
//           <table className="min-w-full text-sm border border-gray-300">
//             <thead>
//               <tr className="bg-gray-300 text-gray-800 text-left">
//                 <th className="p-2">Timestamp</th>
//                 <th className="p-2">Agent Name</th>
//                 <th className="p-2">Server Owner</th>
//                 <th className="p-2">Event</th>
//                 <th className="p-2">Severity</th>
//                 <th className="p-2">Department</th>
//                 <th className="p-2">Environment</th>
//                 <th className="p-2">Rule Description</th>
//                 <th className="p-2">Syscheck Path</th>
//               </tr>
//             </thead>
//             <tbody>
//               {paginatedData.length > 0 ? (
//                 paginatedData.map((row, idx) => (
//                   <tr
//                     key={idx}
//                     className={
//                       idx % 2 === 0
//                         ? "bg-white border-t"
//                         : "bg-gray-50 border-t"
//                     }
//                   >
//                     <td className="p-2">{row.detected_at}</td>
//                     <td className="p-2">{row.agent_name}</td>
//                     <td className="p-2">{row.server_owner}</td>
//                     <td className="p-2">{row.event}</td>
//                     <td className="p-2 text-red-600 font-semibold">
//                       {row.severity}
//                     </td>
//                     <td className="p-2">{row.department}</td>
//                     <td className="p-2">{row.environment}</td>
//                     <td className="p-2">{row.description}</td>
//                     <td className="p-2">{row.path}</td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan={9} className="text-center p-4 text-gray-500">
//                     No {activeTab} Issues Found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>

//           {/* Pagination Controls */}
//           <div className="flex justify-between items-center mt-4">
//             <button
//               onClick={() =>
//                 activeTab === "Application Issue"
//                   ? setPageApp((p) => Math.max(p - 1, 1))
//                   : setPageOs((p) => Math.max(p - 1, 1))
//               }
//               disabled={
//                 activeTab === "Application Issue" ? pageApp === 1 : pageOs === 1
//               }
//               className="px-4 py-2 bg-gray-200 rounded cursor-pointer disabled:opacity-50"
//             >
//               Previous
//             </button>
//             <span>
//               Page{" "}
//               {activeTab === "Application Issue" ? pageApp : pageOs} of{" "}
//               {activeTab === "Application Issue"
//                 ? totalPagesApp || 1
//                 : totalPagesOs || 1}
//             </span>
//             <button
//               onClick={() =>
//                 activeTab === "Application Issue"
//                   ? setPageApp((p) =>
//                       Math.min(p + 1, totalPagesApp || 1)
//                     )
//                   : setPageOs((p) => Math.min(p + 1, totalPagesOs || 1))
//               }
//               disabled={
//                 activeTab === "Application Issue"
//                   ? pageApp === totalPagesApp || totalPagesApp === 0
//                   : pageOs === totalPagesOs || totalPagesOs === 0
//               }
//               className="px-4 py-2 bg-gray-200 rounded cursor-pointer disabled:opacity-50"
//             >
//               Next
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }



'use client';
import { useState, useEffect } from "react";

export default function FimDetailsTableUI() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"Application Issue" | "OS Issue">(
    "Application Issue"
  );
  const [filters, setFilters] = useState({
    severity: "",
    server: "",
    environment: "",
    department: "",
    // owner: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 15;

  // Severity color map
  const severityColors: Record<string, string> = {
    Critical: "#ee3e32",
    High: "#f68838",
    Medium: "#fbb021",
    Low: "#1b8a5a",
    Default: "#9ca3af",
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://128.2.99.235/fim-events");
        const json = await res.json();
        let events = json.data || [];

        // Deduplicate by agent_name + path, keep latest detected_at
        const deduped: Record<string, any> = {};
        for (const ev of events) {
          const key = `${ev.agent_name}-${ev.path}`;
          if (!deduped[key]) {
            deduped[key] = ev;
          } else {
            const oldTime = new Date(deduped[key].detected_at).getTime();
            const newTime = new Date(ev.detected_at).getTime();
            if (newTime > oldTime) {
              deduped[key] = ev;
            }
          }
        }

        setData(Object.values(deduped));
      } catch (error) {
        console.error("Error fetching FIM events:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Apply filters + active tab
  const filteredData = data.filter(
    (row) =>
      row.category === activeTab &&
      (filters.severity ? row.severity === filters.severity : true) &&
      (filters.server ? row.agent_name === filters.server : true) &&
      (filters.environment ? row.environment === filters.environment : true) &&
      (filters.department ? row.department === filters.department : true) 
      // (filters.owner ? row.server_owner === filters.owner : true)
  );

  // Pagination
  const totalPages = Math.ceil(filteredData.length / pageSize);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="card card-hover p-4 lg:p-6">
      {/* Tabs */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => {
              setActiveTab("Application Issue");
              setCurrentPage(1);
            }}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-200 ${
              activeTab === "Application Issue"
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Application Issue
          </button>
          <button
            onClick={() => {
              setActiveTab("OS Issue");
              setCurrentPage(1);
            }}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-200 ${
              activeTab === "OS Issue"
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            style={{ backgroundColor: "rgb(59, 130, 246)" }}
          >
            OS Issue
          </button>
        </div>

        {/* Dropdown Filters */}
        <div className="flex space-x-3">
          <select
            value={filters.severity}
            onChange={(e) =>
              setFilters({ ...filters, severity: e.target.value })
            }
            className="border px-3 py-2 rounded bg-gray-100 text-gray-700 cursor-pointer"
          >
            <option value="">Severity</option>
            {[...new Set(data.map((d) => d.severity))].map((sev) => (
              <option key={sev} value={sev}>
                {sev}
              </option>
            ))}
          </select>

          {/* <select
            value={filters.server}
            onChange={(e) => setFilters({ ...filters, server: e.target.value })}
            className="border px-3 py-2 rounded bg-gray-100 text-gray-700 cursor-pointer"
          >
            <option value="">Server</option>
            {[...new Set(data.map((d) => d.agent_name))].map((srv) => (
              <option key={srv} value={srv}>
                {srv}
              </option>
            ))}
          </select> */}

          <select
            value={filters.environment}
            onChange={(e) =>
              setFilters({ ...filters, environment: e.target.value })
            }
            className="border px-3 py-2 rounded-lg bg-gray-50 text-gray-700 cursor-pointer focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-sm"
          >
            <option value="">Environment</option>
            {[...new Set(data.map((d) => d.environment))].map((env) => (
              <option key={env} value={env}>
                {env}
              </option>
            ))}
          </select>

          <select
            value={filters.department}
            onChange={(e) =>
              setFilters({ ...filters, department: e.target.value })
            }
            className="border px-3 py-2 rounded-lg bg-gray-50 text-gray-700 cursor-pointer focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-sm"
          >
            <option value="">Department</option>
            {[...new Set(data.map((d) => d.department))].map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>

          {/* <select
            value={filters.owner}
            onChange={(e) => setFilters({ ...filters, owner: e.target.value })}
            className="border px-3 py-2 rounded bg-gray-100 text-gray-700 cursor-pointer"
          >
            <option value="">Server</option>
            {[...new Set(data.map((d) => d.server_owner))].map((own) => (
              <option key={own} value={own}>
                {own}
              </option>
            ))}
          </select> */}
        </div>
      </div>

      {/* Table */}
      {loading ? (
        <div className="text-center p-6 text-gray-500 animate-pulse">Loading events...</div>
      ) : (
        <>
          <div className="mobile-scroll">
            <table className="min-w-full text-xs lg:text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-50 text-gray-700 border-b border-gray-200">
                  <th className="p-3 text-left font-semibold mobile-text-sm">Timestamp</th>
                  <th className="p-3 text-left font-semibold mobile-text-sm">Agent</th>
                  <th className="p-3 text-left font-semibold mobile-text-sm">Event</th>
                  <th className="p-3 text-left font-semibold mobile-text-sm">Severity</th>
                  <th className="p-3 text-left font-semibold mobile-text-sm hidden sm:table-cell">Dept</th>
                  <th className="p-3 text-left font-semibold mobile-text-sm hidden md:table-cell">Server</th>
                  <th className="p-3 text-left font-semibold mobile-text-sm hidden lg:table-cell">Env</th>
                  <th className="p-3 text-left font-semibold mobile-text-sm">Description</th>
                  <th className="p-3 text-left font-semibold mobile-text-sm hidden xl:table-cell">Path</th>
                </tr>
              </thead>
            <tbody>
              {paginatedData.length > 0 ? (
                paginatedData.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`hover:bg-gray-50 transition-colors duration-150 ${
                      idx % 2 === 0 ? "bg-white" : "bg-gray-25"
                    } border-b border-gray-100`}
                  >
                    <td className="p-3 text-gray-600 mobile-text-sm">
                      {new Date(row.detected_at).toLocaleString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: false
                      })}
                    </td>
                    <td className="p-3 font-medium text-gray-900 mobile-text-sm">{row.agent_name}</td>
                    <td className="p-3 mobile-text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        row.event === 'modified' ? 'bg-yellow-100 text-yellow-800' :
                        row.event === 'added' ? 'bg-green-100 text-green-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {row.event}
                      </span>
                    </td>
                    <td className="p-3">
                      <span
                        className="px-2 py-1 rounded-full text-xs font-semibold text-white"
                        style={{
                          backgroundColor:
                            severityColors[row.severity] ||
                            severityColors.Default,
                        }}
                      >
                        {row.severity}
                      </span>
                    </td>
                    <td className="p-3 hidden sm:table-cell mobile-text-sm text-gray-600">{row.department}</td>
                    <td className="p-3 hidden md:table-cell mobile-text-sm text-gray-600">{row.server_owner}</td>
                    <td className="p-3 hidden lg:table-cell mobile-text-sm text-gray-600">{row.environment}</td>
                    <td className="p-3 mobile-text-sm text-gray-700 max-w-xs truncate" title={row.description}>
                      {row.description}
                    </td>
                    <td className="p-3 hidden xl:table-cell mobile-text-sm text-gray-600 font-mono text-xs max-w-xs truncate" title={row.path}>
                      {row.path}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={9} className="text-center p-4 text-gray-500">
                    No {activeTab} Issues Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() =>
                setCurrentPage((p) => Math.min(p + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
