// 'use client';

// import { useState, useEffect } from 'react';

// const Table = ({ children, className }: React.HTMLAttributes<HTMLTableElement>) => (
//   <table className={`w-full text-sm text-left border-collapse ${className}`}>{children}</table>
// );

// const TableHeader = ({ children }: { children: React.ReactNode }) => (
//   <thead className="bg-gray-100 text-gray-700">{children}</thead>
// );

// const TableBody = ({ children }: { children: React.ReactNode }) => (
//   <tbody className="divide-y divide-gray-200">{children}</tbody>
// );

// const TableRow = ({ children }: { children: React.ReactNode }) => (
//   <tr className="hover:bg-gray-50">{children}</tr>
// );

// const TableHead = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
//   <th className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider ${className}`}>{children}</th>
// );

// const TableCell = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
//   <td className={`px-4 py-2 whitespace-nowrap ${className}`}>{children}</td>
// );

// type ServerItem = {
//   server_environment: string;
//   agent_name: string;
//   ip_address: string;
//   server_owner: string;
//   client_name: string | null;
//   cs_owner: string | null;
//   wazuh_status: string;
//   wazuh_last_update?: string;
//   so_status?: string;
//   so_last_update?: string;
// };

// export default function ServerTable() {
//   const [data, setData] = useState<ServerItem[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const rowsPerPage = 15;
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchServers = async () => {
//       try {
//         const res = await fetch('http://128.2.99.235/agents-info');
//         const json = await res.json();

//         // normalize keys to match our type
//         const normalized: ServerItem[] = json.data.map((item: any) => ({
//           server_environment: item.Server_Environment || '',
//           agent_name: item.Agent_Name || '',
//           ip_address: item.Ip_Address || '',
//           server_owner: item.Server_Owner || '',
//           client_name: item.client_name || '',
//           cs_owner: item.cs_owner || '',
//           wazuh_status: item.wazuh_status || '',
//           wazuh_last_update: item.wazuh_last_update || '-',
//           so_status: item.so_status || '-',
//           so_last_update: item.so_last_update || '-',
//         }));

//         setData(normalized);
//       } catch (err) {
//         console.error('Failed to fetch server data:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchServers();
//   }, []);

//   const totalPages = Math.ceil(data.length / rowsPerPage);
//   const startIndex = (currentPage - 1) * rowsPerPage;
//   const currentData = data.slice(startIndex, startIndex + rowsPerPage);

//   const handlePrev = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };

//   const handleNext = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };

//   return (
//     <div className="w-full bg-white p-4 rounded-2xl shadow border border-gray-200">
//       <h2 className="text-lg font-semibold mb-4 text-gray-800">Servers Table</h2>

//       {loading ? (
//         <p className="text-gray-600">Loading...</p>
//       ) : (
//         <>
//           <div className="overflow-x-auto w-full">
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Server Env</TableHead>
//                   <TableHead>Agent Name</TableHead>
//                   <TableHead>IP Address</TableHead>
//                   <TableHead>Server Owner</TableHead>
//                   <TableHead>Client Name</TableHead>
//                   <TableHead>CS Owner</TableHead>
//                   <TableHead>Wazuh Status</TableHead>
//                   <TableHead>Wazuh Last Update</TableHead>
//                   <TableHead>SO Status</TableHead>
//                   <TableHead>SO Last Update</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {currentData.map((row, idx) => (
//                   <TableRow key={idx}>
//                     <TableCell>{row.server_environment}</TableCell>
//                     <TableCell>{row.agent_name}</TableCell>
//                     <TableCell>{row.ip_address}</TableCell>
//                     <TableCell>{row.server_owner}</TableCell>
//                     <TableCell>{row.client_name || '-'}</TableCell>
//                     <TableCell>{row.cs_owner || '-'}</TableCell>
//                     <TableCell className={row.wazuh_status === 'active' ? 'text-green-600 font-medium' : 'text-red-600'}>
//                       {row.wazuh_status}
//                     </TableCell>
//                     <TableCell>{row.wazuh_last_update}</TableCell>
//                     <TableCell className={row.so_status === 'active' ? 'text-green-600 font-medium' : 'text-red-600'}>
//                       {row.so_status}
//                     </TableCell>
//                     <TableCell>{row.so_last_update}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </div>

//           {/* Pagination */}
//           <div className="flex justify-between items-center mt-4">
//             <button
//               onClick={handlePrev}
//               disabled={currentPage === 1}
//               className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
//             >
//               Prev
//             </button>
//             <span className="text-sm text-gray-600">
//               Page {currentPage} of {totalPages || 1}
//             </span>
//             <button
//               onClick={handleNext}
//               disabled={currentPage === totalPages || totalPages === 0}
//               className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
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

// import { useState, useEffect } from 'react';

// const Table = ({ children, className }: React.HTMLAttributes<HTMLTableElement>) => (
//   <table className={`w-full text-sm text-left border-collapse ${className}`}>{children}</table>
// );

// const TableHeader = ({ children }: { children: React.ReactNode }) => (
//   <thead className="bg-gray-100 text-gray-700">{children}</thead>
// );

// const TableBody = ({ children }: { children: React.ReactNode }) => (
//   <tbody className="divide-y divide-gray-200">{children}</tbody>
// );

// const TableRow = ({ children }: { children: React.ReactNode }) => (
//   <tr className="hover:bg-gray-50">{children}</tr>
// );

// const TableHead = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
//   <th className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider ${className}`}>{children}</th>
// );

// const TableCell = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
//   <td className={`px-4 py-2 whitespace-nowrap ${className}`}>{children}</td>
// );

// type ServerItem = {
//   server_environment: string;
//   agent_name: string;
//   ip_address: string;
//   server_owner: string;
//   client_name: string | null;
//   cs_owner: string | null;
//   wazuh_status: string;
//   wazuh_last_update?: string;
//   so_status?: string;
//   so_last_update?: string;
// };

// export default function ServerTable() {
//   const [data, setData] = useState<ServerItem[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const rowsPerPage = 15;
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const fetchServers = async () => {
//       try {
//         const res = await fetch('http://128.2.99.235/agents-info');
//         const json = await res.json();

//         // normalize keys to match our type
//         const normalized: ServerItem[] = json.data.map((item: any) => ({
//           server_environment: item.Server_Environment || '',
//           agent_name: item.Agent_Name || '',
//           ip_address: item.Ip_Address || '',
//           server_owner: item.Server_Owner || '',
//           client_name: item.client_name || '',
//           cs_owner: item.cs_owner || '',
//           wazuh_status: item.wazuh_status || '',
//           wazuh_last_update: item.wazuh_last_update || '-',
//           so_status: item.so_status || '-',
//           so_last_update: item.so_last_update || '-',
//         }));

//         setData(normalized);
//       } catch (err) {
//         console.error('Failed to fetch server data:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchServers();
//   }, []);

//   // ✅ Filter by server environment
//   const filteredData = data.filter((row) =>
//     row.server_environment.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const totalPages = Math.ceil(filteredData.length / rowsPerPage);
//   const startIndex = (currentPage - 1) * rowsPerPage;
//   const currentData = filteredData.slice(startIndex, startIndex + rowsPerPage);

//   const handlePrev = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };

//   const handleNext = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };

//   return (
//     <div className="w-full bg-white p-4 rounded-2xl shadow border border-gray-200">
//       <h2 className="text-lg font-semibold mb-4 text-gray-800">Servers Table</h2>

//       {loading ? (
//         <p className="text-gray-600">Loading...</p>
//       ) : (
//         <>
//           {/* 🔍 Filter by Server Environment */}
//           <div className="mb-4 flex items-center">
//             <input
//               type="text"
//               placeholder="Filter by Server Environment..."
//               value={searchTerm}
//               onChange={(e) => {
//                 setSearchTerm(e.target.value);
//                 setCurrentPage(1); // reset pagination
//               }}
//               className="border px-3 py-2 rounded w-1/3"
//             />
//           </div>

//           <div className="overflow-x-auto w-full">
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Server Env</TableHead>
//                   <TableHead>Agent Name</TableHead>
//                   <TableHead>IP Address</TableHead>
//                   <TableHead>Server Owner</TableHead>
//                   <TableHead>Client Name</TableHead>
//                   <TableHead>CS Owner</TableHead>
//                   <TableHead>Wazuh Status</TableHead>
//                   <TableHead>Wazuh Last Update</TableHead>
//                   <TableHead>SO Status</TableHead>
//                   <TableHead>SO Last Update</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {currentData.length > 0 ? (
//                   currentData.map((row, idx) => (
//                     <TableRow key={idx}>
//                       <TableCell>{row.server_environment}</TableCell>
//                       <TableCell>{row.agent_name}</TableCell>
//                       <TableCell>{row.ip_address}</TableCell>
//                       <TableCell>{row.server_owner}</TableCell>
//                       <TableCell>{row.client_name || '-'}</TableCell>
//                       <TableCell>{row.cs_owner || '-'}</TableCell>
//                       <TableCell className={row.wazuh_status === 'active' ? 'text-green-600 font-medium' : 'text-red-600'}>
//                         {row.wazuh_status}
//                       </TableCell>
//                       <TableCell>{row.wazuh_last_update}</TableCell>
//                       <TableCell className={row.so_status === 'active' ? 'text-green-600 font-medium' : 'text-red-600'}>
//                         {row.so_status}
//                       </TableCell>
//                       <TableCell>{row.so_last_update}</TableCell>
//                     </TableRow>
//                   ))
//                 ) : (
//                   <TableRow>
//                     <TableCell colSpan={10} className="text-center py-4 text-gray-500">
//                       No servers found
//                     </TableCell>
//                   </TableRow>
//                 )}
//               </TableBody>
//             </Table>
//           </div>

//           {/* Pagination */}
//           {totalPages > 1 && (
//             <div className="flex justify-between items-center mt-4">
//               <button
//                 onClick={handlePrev}
//                 disabled={currentPage === 1}
//                 className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
//               >
//                 Prev
//               </button>
//               <span className="text-sm text-gray-600">
//                 Page {currentPage} of {totalPages || 1}
//               </span>
//               <button
//                 onClick={handleNext}
//                 disabled={currentPage === totalPages || totalPages === 0}
//                 className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
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

// import { useState, useEffect } from 'react';

// const Table = ({ children, className }: React.HTMLAttributes<HTMLTableElement>) => (
//   <table className={`w-full text-sm text-left border-collapse ${className}`}>{children}</table>
// );

// const TableHeader = ({ children }: { children: React.ReactNode }) => (
//   <thead className="bg-gray-100 text-gray-700">{children}</thead>
// );

// const TableBody = ({ children }: { children: React.ReactNode }) => (
//   <tbody className="divide-y divide-gray-200">{children}</tbody>
// );

// const TableRow = ({ children }: { children: React.ReactNode }) => (
//   <tr className="hover:bg-gray-50">{children}</tr>
// );

// const TableHead = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
//   <th className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider ${className}`}>{children}</th>
// );

// const TableCell = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
//   <td className={`px-4 py-2 whitespace-nowrap ${className}`}>{children}</td>
// );

// // ✅ Badge component for status
// const StatusBadge = ({ status }: { status: string }) => {
//   let style = 'bg-gray-300 text-gray-800';

//   if (status.toLowerCase() === 'active') {
//     style = 'bg-green-500 text-white';
//   } else if (status.toLowerCase() === 'inactive') {
//     style = 'bg-red-500 text-white';
//   } else if (status.toLowerCase() === 'medium') {
//     style = 'bg-yellow-500 text-black';
//   } else if (status.toLowerCase() === 'high') {
//     style = 'bg-red-600 text-white';
//   }

//   return (
//     <span className={`px-2 py-1 rounded text-xs font-semibold ${style}`}>
//       {status}
//     </span>
//   );
// };

// type ServerItem = {
//   server_environment: string;
//   agent_name: string;
//   ip_address: string;
//   server_owner: string;
//   client_name: string | null;
//   cs_owner: string | null;
//   wazuh_status: string;
//   wazuh_last_update?: string;
//   so_status?: string;
//   so_last_update?: string;
// };

// export default function ServerTable() {
//   const [data, setData] = useState<ServerItem[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const rowsPerPage = 15;
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const fetchServers = async () => {
//       try {
//         const res = await fetch('http://128.2.99.235/agents-info');
//         const json = await res.json();

//         // normalize keys
//         const normalized: ServerItem[] = json.data.map((item: any) => ({
//           server_environment: item.Server_Environment || '',
//           agent_name: item.Agent_Name || '',
//           ip_address: item.Ip_Address || '',
//           server_owner: item.Server_Owner || '',
//           client_name: item.client_name || '',
//           cs_owner: item.cs_owner || '',
//           wazuh_status: item.wazuh_status || '',
//           wazuh_last_update: item.wazuh_last_update || '-',
//           so_status: item.so_status || '-',
//           so_last_update: item.so_last_update || '-',
//         }));

//         setData(normalized);
//       } catch (err) {
//         console.error('Failed to fetch server data:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchServers();
//   }, []);

//   // ✅ Filter by server environment
//   const filteredData = data.filter((row) =>
//     row.server_environment.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const totalPages = Math.ceil(filteredData.length / rowsPerPage);
//   const startIndex = (currentPage - 1) * rowsPerPage;
//   const currentData = filteredData.slice(startIndex, startIndex + rowsPerPage);

//   const handlePrev = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };

//   const handleNext = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };

//   return (
//     <div className="w-full bg-white p-4 rounded-2xl shadow border border-gray-200">
//       <h2 className="text-lg font-semibold mb-4 text-gray-800">Servers Table</h2>

//       {loading ? (
//         <p className="text-gray-600">Loading...</p>
//       ) : (
//         <>
//           {/* 🔍 Filter by Server Environment */}
//           <div className="mb-4 flex items-center">
//             <input
//               type="text"
//               placeholder="Filter by Server Environment..."
//               value={searchTerm}
//               onChange={(e) => {
//                 setSearchTerm(e.target.value);
//                 setCurrentPage(1);
//               }}
//               className="border px-3 py-2 rounded w-1/3"
//             />
//           </div>

//           <div className="overflow-x-auto w-full">
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Server Env</TableHead>
//                   <TableHead>Agent Name</TableHead>
//                   <TableHead>IP Address</TableHead>
//                   <TableHead>Server Owner</TableHead>
//                   <TableHead>Client Name</TableHead>
//                   <TableHead>CS Owner</TableHead>
//                   <TableHead>Wazuh Status</TableHead>
//                   <TableHead>Wazuh Last Update</TableHead>
//                   <TableHead>SO Status</TableHead>
//                   <TableHead>SO Last Update</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {currentData.length > 0 ? (
//                   currentData.map((row, idx) => (
//                     <TableRow key={idx}>
//                       <TableCell>{row.server_environment}</TableCell>
//                       <TableCell>{row.agent_name}</TableCell>
//                       <TableCell>{row.ip_address}</TableCell>
//                       <TableCell>{row.server_owner}</TableCell>
//                       <TableCell>{row.client_name || '-'}</TableCell>
//                       <TableCell>{row.cs_owner || '-'}</TableCell>
                      
//                       {/* ✅ Styled Wazuh Status */}
//                       <TableCell>
//                         <StatusBadge status={row.wazuh_status} />
//                       </TableCell>

//                       <TableCell>{row.wazuh_last_update}</TableCell>

//                       {/* ✅ Styled SO Status */}
//                       <TableCell>
//                         <StatusBadge status={row.so_status || '-'} />
//                       </TableCell>

//                       <TableCell>{row.so_last_update}</TableCell>
//                     </TableRow>
//                   ))
//                 ) : (
//                   <TableRow>
//                     <TableCell colSpan={10} className="text-center py-4 text-gray-500">
//                       No servers found
//                     </TableCell>
//                   </TableRow>
//                 )}
//               </TableBody>
//             </Table>
//           </div>

//           {/* Pagination */}
//           {totalPages > 1 && (
//             <div className="flex justify-between items-center mt-4">
//               <button
//                 onClick={handlePrev}
//                 disabled={currentPage === 1}
//                 className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
//               >
//                 Prev
//               </button>
//               <span className="text-sm text-gray-600">
//                 Page {currentPage} of {totalPages || 1}
//               </span>
//               <button
//                 onClick={handleNext}
//                 disabled={currentPage === totalPages || totalPages === 0}
//                 className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
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

// import { useState, useEffect } from 'react';

// const Table = ({ children, className }: React.HTMLAttributes<HTMLTableElement>) => (
//   <table className={`w-full text-sm text-left border-collapse ${className}`}>{children}</table>
// );

// const TableHeader = ({ children }: { children: React.ReactNode }) => (
//   <thead className="bg-gray-100 text-gray-700">{children}</thead>
// );

// const TableBody = ({ children }: { children: React.ReactNode }) => (
//   <tbody className="divide-y divide-gray-200">{children}</tbody>
// );

// const TableRow = ({ children }: { children: React.ReactNode }) => (
//   <tr className="hover:bg-gray-50">{children}</tr>
// );

// const TableHead = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
//   <th className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider ${className}`}>{children}</th>
// );

// const TableCell = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
//   <td className={`px-4 py-2 whitespace-nowrap ${className}`}>{children}</td>
// );

// // ✅ Badge component for Wazuh & SO status
// // const StatusBadge = ({ status }: { status: string }) => {
// //   const normalized = status?.toLowerCase() || '';
// //   let style = 'bg-gray-300 text-gray-800';

// //   if (normalized === 'running') {
// //     style = 'bg-green-500 text-white';
// //   } else if (normalized === 'disconnected' || normalized === 'decommissioned') {
// //     style = 'bg-red-500 text-white';
// //   }

// //   return (
// //     <span className={`px-2 py-1 rounded text-xs font-semibold ${style}`}>
// //       {status || '-'}
// //     </span>
// //   );
// // };


// // ✅ Badge component for status
// const StatusBadge = ({ status }: { status: string }) => {
//   let style = 'bg-gray-300 text-gray-800'; // default gray

//   if (status.toLowerCase() === 'active') {
//     style = 'bg-green-500 text-white'; // 🟢 green
//   } else if (
//     status.toLowerCase() === 'disconnected' ||
//     status.toLowerCase() === 'decommissioned'
//   ) {
//     style = 'bg-red-500 text-white'; // 🔴 red
//   }

//   return (
//     <span className={`px-2 py-1 rounded text-xs font-semibold ${style}`}>
//       {status}
//     </span>
//   );
// };


// type ServerItem = {
//   server_environment: string;
//   agent_name: string;
//   ip_address: string;
//   server_owner: string;
//   client_name: string | null;
//   cs_owner: string | null;
//   wazuh_status: string;
//   wazuh_last_update?: string;
//   so_status?: string;
//   so_last_update?: string;
// };

// export default function ServerTable() {
//   const [data, setData] = useState<ServerItem[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const rowsPerPage = 15;
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const fetchServers = async () => {
//       try {
//         const res = await fetch('http://128.2.99.235/agents-info');
//         const json = await res.json();

//         // normalize keys
//         const normalized: ServerItem[] = json.data.map((item: any) => ({
//           server_environment: item.Server_Environment || '',
//           agent_name: item.Agent_Name || '',
//           ip_address: item.Ip_Address || '',
//           server_owner: item.Server_Owner || '',
//           client_name: item.client_name || '',
//           cs_owner: item.cs_owner || '',
//           wazuh_status: item.wazuh_status || '',
//           wazuh_last_update: item.wazuh_last_update || '-',
//           so_status: item.so_status || '-',
//           so_last_update: item.so_last_update || '-',
//         }));

//         setData(normalized);
//       } catch (err) {
//         console.error('Failed to fetch server data:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchServers();
//   }, []);

//   // ✅ Filter by server environment
//   const filteredData = data.filter((row) =>
//     row.server_environment.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const totalPages = Math.ceil(filteredData.length / rowsPerPage);
//   const startIndex = (currentPage - 1) * rowsPerPage;
//   const currentData = filteredData.slice(startIndex, startIndex + rowsPerPage);

//   const handlePrev = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };

//   const handleNext = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };

//   return (
//     <div className="w-full bg-white p-4 rounded-2xl shadow border border-gray-200">
//       <h2 className="text-lg font-semibold mb-4 text-gray-800">Servers Table</h2>

//       {loading ? (
//         <p className="text-gray-600">Loading...</p>
//       ) : (
//         <>
//           {/* 🔍 Filter by Server Environment */}
//           <div className="mb-4 flex items-center">
//             <input
//               type="text"
//               placeholder="Filter by Server Environment..."
//               value={searchTerm}
//               onChange={(e) => {
//                 setSearchTerm(e.target.value);
//                 setCurrentPage(1);
//               }}
//               className="border px-3 py-2 rounded w-1/3"
//             />
//           </div>

//           <div className="overflow-x-auto w-full">
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Server Env</TableHead>
//                   <TableHead>Agent Name</TableHead>
//                   <TableHead>IP Address</TableHead>
//                   <TableHead>Server Owner</TableHead>
//                   <TableHead>Client Name</TableHead>
//                   <TableHead>CS Owner</TableHead>
//                   <TableHead>Wazuh Status</TableHead>
//                   <TableHead>Wazuh Last Update</TableHead>
//                   <TableHead>SO Status</TableHead>
//                   <TableHead>SO Last Update</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {currentData.length > 0 ? (
//                   currentData.map((row, idx) => (
//                     <TableRow key={idx}>
//                       <TableCell>{row.server_environment}</TableCell>
//                       <TableCell>{row.agent_name}</TableCell>
//                       <TableCell>{row.ip_address}</TableCell>
//                       <TableCell>{row.server_owner}</TableCell>
//                       <TableCell>{row.client_name || '-'}</TableCell>
//                       <TableCell>{row.cs_owner || '-'}</TableCell>

//                       {/* ✅ Styled Wazuh Status */}
//                       <TableCell>
//                         <StatusBadge status={row.wazuh_status} />
//                       </TableCell>

//                       <TableCell>{row.wazuh_last_update}</TableCell>

//                       {/* ✅ Styled SO Status */}
//                       <TableCell>
//                         <StatusBadge status={row.so_status || '-'} />
//                       </TableCell>

//                       <TableCell>{row.so_last_update}</TableCell>
//                     </TableRow>
//                   ))
//                 ) : (
//                   <TableRow>
//                     <TableCell colSpan={10} className="text-center py-4 text-gray-500">
//                       No servers found
//                     </TableCell>
//                   </TableRow>
//                 )}
//               </TableBody>
//             </Table>
//           </div>

//           {/* Pagination */}
//           {totalPages > 1 && (
//             <div className="flex justify-between items-center mt-4">
//               <button
//                 onClick={handlePrev}
//                 disabled={currentPage === 1}
//                 className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
//               >
//                 Prev
//               </button>
//               <span className="text-sm text-gray-600">
//                 Page {currentPage} of {totalPages || 1}
//               </span>
//               <button
//                 onClick={handleNext}
//                 disabled={currentPage === totalPages || totalPages === 0}
//                 className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
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

// import { useState, useEffect } from 'react';

// // === Table Components ===
// const Table = ({ children, className = '', ...rest }: React.HTMLAttributes<HTMLTableElement>) => (
//   <table {...rest} className={`w-full text-sm text-left border-collapse ${className}`}>
//     {children}
//   </table>
// );

// const TableHeader = ({ children }: { children: React.ReactNode }) => (
//   <thead className="bg-gray-100 text-gray-700">{children}</thead>
// );

// const TableBody = ({ children }: { children: React.ReactNode }) => (
//   <tbody className="divide-y divide-gray-200">{children}</tbody>
// );

// const TableRow = ({ children }: { children: React.ReactNode }) => (
//   <tr className="hover:bg-gray-50">{children}</tr>
// );

// const TableHead = ({
//   children,
//   className = '',
//   ...rest
// }: React.ThHTMLAttributes<HTMLTableHeaderCellElement>) => (
//   <th {...rest} className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider ${className}`}>
//     {children}
//   </th>
// );

// const TableCell = ({
//   children,
//   className = '',
//   ...rest
// }: React.TdHTMLAttributes<HTMLTableCellElement>) => (
//   <td {...rest} className={`px-4 py-2 whitespace-nowrap ${className}`}>
//     {children}
//   </td>
// );

// // === Badge component for status
// const StatusBadge = ({ status }: { status: string }) => {
//   let style = 'bg-gray-300 text-gray-800'; // default gray

//   if (status?.toLowerCase() === 'active') {
//     style = 'bg-green-500 text-white'; // 🟢 green
//   } else if (
//     status?.toLowerCase() === 'disconnected' ||
//     status?.toLowerCase() === 'decommissioned'
//   ) {
//     style = 'bg-red-500 text-white'; // 🔴 red
//   }

//   return (
//     <span className={`px-2 py-1 rounded text-xs font-semibold ${style}`}>
//       {status || '-'}
//     </span>
//   );
// };

// // === Types ===
// type ServerItem = {
//   server_environment: string;
//   agent_name: string;
//   ip_address: string;
//   server_owner: string;
//   client_name: string | null;
//   cs_owner: string | null;
//   wazuh_status: string;
//   wazuh_last_update?: string;
//   so_status?: string;
//   so_last_update?: string;
// };

// // === Main Component ===
// export default function ServerTable() {
//   const [data, setData] = useState<ServerItem[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const rowsPerPage = 15;
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const fetchServers = async () => {
//       try {
//         const res = await  fetch(`${process.env.NEXT_PUBLIC_API_BASE}/agents-info`);
//         const json = await res.json();

//         const normalized: ServerItem[] = json.data.map((item: any) => ({
//           server_environment: item.Server_Environment || '',
//           agent_name: item.Agent_Name || '',
//           ip_address: item.Ip_Address || '',
//           server_owner: item.Server_Owner || '',
//           client_name: item.client_name || '',
//           cs_owner: item.cs_owner || '',
//           wazuh_status: item.wazuh_status || '',
//           wazuh_last_update: item.wazuh_last_update || '-',
//           so_status: item.so_status || '-',
//           so_last_update: item.so_last_update || '-',
//         }));

//         setData(normalized);
//       } catch (err) {
//         console.error('Failed to fetch server data:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchServers();
//   }, []);

//   // ✅ Filter by server environment
//   const filteredData = data.filter((row) =>
//     row.server_environment.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const totalPages = Math.ceil(filteredData.length / rowsPerPage);
//   const startIndex = (currentPage - 1) * rowsPerPage;
//   const currentData = filteredData.slice(startIndex, startIndex + rowsPerPage);

//   return (
//     <div className="w-full bg-white p-4 rounded-2xl shadow border border-gray-200">
//       <h2 className="text-lg font-semibold mb-4 text-gray-800">Servers Table</h2>

//       {loading ? (
//         <p className="text-gray-600">Loading...</p>
//       ) : (
//         <>
//           {/* 🔍 Filter by Server Environment */}
//           <div className="mb-4 flex items-center">
//             <input
//               type="text"
//               placeholder="Filter by Server Environment..."
//               value={searchTerm}
//               onChange={(e) => {
//                 setSearchTerm(e.target.value);
//                 setCurrentPage(1);
//               }}
//               className="border px-3 py-2 rounded w-1/3"
//             />
//           </div>

//           <div className="overflow-x-auto w-full">
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Server Env</TableHead>
//                   <TableHead>Agent Name</TableHead>
//                   <TableHead>IP Address</TableHead>
//                   <TableHead>Server Owner</TableHead>
//                   <TableHead>Client Name</TableHead>
//                   <TableHead>CS Owner</TableHead>
//                   <TableHead>Wazuh Status</TableHead>
//                   <TableHead>Wazuh Last Update</TableHead>
//                   <TableHead>SO Status</TableHead>
//                   <TableHead>SO Last Update</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {currentData.length > 0 ? (
//                   currentData.map((row, idx) => (
//                     <TableRow key={idx}>
//                       <TableCell>{row.server_environment}</TableCell>
//                       <TableCell>{row.agent_name}</TableCell>
//                       <TableCell>{row.ip_address}</TableCell>
//                       <TableCell>{row.server_owner}</TableCell>
//                       <TableCell>{row.client_name || '-'}</TableCell>
//                       <TableCell>{row.cs_owner || '-'}</TableCell>

//                       <TableCell>
//                         <StatusBadge status={row.wazuh_status} />
//                       </TableCell>

//                       <TableCell>{row.wazuh_last_update}</TableCell>

//                       <TableCell>
//                         <StatusBadge status={row.so_status || '-'} />
//                       </TableCell>

//                       <TableCell>{row.so_last_update}</TableCell>
//                     </TableRow>
//                   ))
//                 ) : (
//                   <TableRow>
//                     <TableCell colSpan={10} className="text-center py-4 text-gray-500">
//                       No servers found
//                     </TableCell>
//                   </TableRow>
//                 )}
//               </TableBody>
//             </Table>
//           </div>

//           {/* Pagination */}
//           {totalPages > 1 && (
//             <div className="flex justify-between items-center mt-4">
//               <button
//                 onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
//                 disabled={currentPage === 1}
//                 className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
//               >
//                 Prev
//               </button>
//               <span className="text-sm text-gray-600">
//                 Page {currentPage} of {totalPages || 1}
//               </span>
//               <button
//                 onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
//                 disabled={currentPage === totalPages || totalPages === 0}
//                 className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
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

// import { useState, useEffect } from 'react';

// // ================= TABLE COMPONENTS =================
// const Table = ({ children, className = '', ...rest }: React.HTMLAttributes<HTMLTableElement>) => (
//   <table {...rest} className={`w-full text-sm text-left border-collapse ${className}`}>
//     {children}
//   </table>
// );

// const TableHeader = ({ children }: { children: React.ReactNode }) => (
//   <thead className="bg-gray-100 text-gray-700 sticky top-0 z-10">{children}</thead>
// );

// const TableBody = ({ children }: { children: React.ReactNode }) => (
//   <tbody className="divide-y divide-gray-200">{children}</tbody>
// );

// const TableRow = ({ children }: { children: React.ReactNode }) => (
//   <tr className="hover:bg-gray-50">{children}</tr>
// );

// const TableHead = ({
//   children,
//   className = '',
//   ...rest
// }: React.ThHTMLAttributes<HTMLTableHeaderCellElement>) => (
//   <th {...rest} className="px-4 py-2 text-xs font-semibold uppercase tracking-wider">
//     {children}
//   </th>
// );

// const TableCell = ({
//   children,
//   className = '',
//   ...rest
// }: React.TdHTMLAttributes<HTMLTableCellElement>) => (
//   <td {...rest} className={`px-4 py-2 whitespace-nowrap ${className}`}>
//     {children}
//   </td>
// );

// // ================= STATUS BADGE =================
// const StatusBadge = ({ status }: { status: string }) => {
//   let style = 'bg-gray-300 text-gray-800';

//   if (status?.toLowerCase() === 'active') {
//     style = 'bg-green-500 text-white';
//   } else if (
//     status?.toLowerCase() === 'disconnected' ||
//     status?.toLowerCase() === 'decommissioned'
//   ) {
//     style = 'bg-red-500 text-white';
//   }

//   return (
//     <span className={`px-2 py-1 rounded text-xs font-semibold ${style}`}>
//       {status || '-'}
//     </span>
//   );
// };

// // ================= EOL UTILITIES =================
// const getDaysDiff = (dateString?: string | null) => {
//   if (!dateString || dateString === '-') return null;

//   const today = new Date();
//   today.setHours(0, 0, 0, 0);

//   const target = new Date(dateString);
//   const diffTime = target.getTime() - today.getTime();
//   return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
// };

// const getEolMeta = (dateString?: string | null) => {
//   const diff = getDaysDiff(dateString);

//   if (diff === null) return null;

//   if (diff < 0) {
//     return {
//       priority: 1,
//       className: 'bg-red-500 text-white',
//       label: `${dateString} (Expired)`,
//       tooltip: `Expired ${Math.abs(diff)} days ago`,
//     };
//   }

//   if (diff <= 30) {
//     return {
//       priority: 2,
//       className: 'bg-orange-500 text-white',
//       label: `${dateString}`,
//       tooltip: `Expiring in ${diff} days`,
//     };
//   }

//   if (diff <= 90) {
//     return {
//       priority: 3,
//       className: 'bg-yellow-400 text-black',
//       label: `${dateString}`,
//       tooltip: `Expiring in ${diff} days`,
//     };
//   }

//   return {
//     priority: 4,
//     className: '',
//     label: dateString,
//     tooltip: `Valid for ${diff} days`,
//   };
// };

// // ================= TYPES =================
// type ServerItem = {
//   server_environment: string;
//   agent_name: string;
//   ip_address: string;
//   server_owner: string;
//   client_name: string | null;
//   cs_owner: string | null;
//   wazuh_status: string;
//   end_of_life: string | null;
//   extended_support_end_date: string | null;
// };

// // ================= MAIN COMPONENT =================
// export default function ServerTable() {
//   const [data, setData] = useState<ServerItem[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const rowsPerPage = 15;
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const fetchServers = async () => {
//       try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/agents-info`);
//         const json = await res.json();

//         const normalized: ServerItem[] = json.data.map((item: any) => ({
//           server_environment: item.Server_Environment || '',
//           agent_name: item.Agent_Name || '',
//           ip_address: item.Ip_Address || '',
//           server_owner: item.Server_Owner || '',
//           client_name: item.client_name || '-',
//           cs_owner: item.cs_owner || '-',
//           wazuh_status: item.wazuh_status || '-',
//           end_of_life: item.end_of_life || '-',
//           extended_support_end_date: item.extended_support_end_date || '-',
//         }));

//         setData(normalized);
//       } catch (err) {
//         console.error('Failed to fetch server data:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchServers();
//   }, []);

//   // ================= FILTER + SORT =================
//   const filteredData = data
//     .filter((row) =>
//       row.server_environment.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//     .sort((a, b) => {
//       const aMeta = getEolMeta(a.end_of_life);
//       const bMeta = getEolMeta(b.end_of_life);

//       return (aMeta?.priority ?? 5) - (bMeta?.priority ?? 5);
//     });

//   const totalPages = Math.ceil(filteredData.length / rowsPerPage);
//   const startIndex = (currentPage - 1) * rowsPerPage;
//   const currentData = filteredData.slice(startIndex, startIndex + rowsPerPage);

//   return (
//     <div className="w-full bg-white p-4 rounded-2xl shadow border border-gray-200">
//       <h2 className="text-lg font-semibold mb-4 text-gray-800">Servers Table</h2>

//       {loading ? (
//         <p className="text-gray-600">Loading...</p>
//       ) : (
//         <>
//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Filter by Server Environment..."
//               value={searchTerm}
//               onChange={(e) => {
//                 setSearchTerm(e.target.value);
//                 setCurrentPage(1);
//               }}
//               className="border px-3 py-2 rounded w-1/3"
//             />
//           </div>

//           <div className="overflow-x-auto w-full max-h-[600px] overflow-y-auto">
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Server Env</TableHead>
//                   <TableHead>Agent Name</TableHead>
//                   <TableHead>IP Address</TableHead>
//                   <TableHead>Server Owner</TableHead>
//                   <TableHead>Client Name</TableHead>
//                   <TableHead>CS Owner</TableHead>
//                   <TableHead>Wazuh Status</TableHead>
//                   <TableHead>End of Life</TableHead>
//                   <TableHead>Extended Support</TableHead>
//                 </TableRow>
//               </TableHeader>

//               <TableBody>
//                 {currentData.map((row, idx) => {
//                   const eol = getEolMeta(row.end_of_life);

//                   return (
//                     <TableRow key={idx}>
//                       <TableCell>{row.server_environment}</TableCell>
//                       <TableCell>{row.agent_name}</TableCell>
//                       <TableCell>{row.ip_address}</TableCell>
//                       <TableCell>{row.server_owner}</TableCell>
//                       <TableCell>{row.client_name}</TableCell>
//                       <TableCell>{row.cs_owner}</TableCell>
//                       <TableCell>
//                         <StatusBadge status={row.wazuh_status} />
//                       </TableCell>

//                       <TableCell title={eol?.tooltip}>
//                         {eol?.className ? (
//                           <span className={`px-2 py-1 rounded text-xs font-semibold ${eol.className}`}>
//                             {eol.label}
//                           </span>
//                         ) : (
//                           row.end_of_life
//                         )}
//                       </TableCell>

//                       <TableCell>{row.extended_support_end_date}</TableCell>
//                     </TableRow>
//                   );
//                 })}
//               </TableBody>
//             </Table>
//           </div>

//           {totalPages > 1 && (
//             <div className="flex justify-between items-center mt-4">
//               <button
//                 onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
//                 disabled={currentPage === 1}
//                 className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
//               >
//                 Prev
//               </button>

//               <span className="text-sm text-gray-600">
//                 Page {currentPage} of {totalPages}
//               </span>

//               <button
//                 onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
//                 disabled={currentPage === totalPages}
//                 className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
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

// /* ================= TABLE UI ================= */
// const Table = ({ children }: { children: React.ReactNode }) => (
//   <table className="w-full text-sm text-left border-collapse">{children}</table>
// );

// const TableHeader = ({ children }: { children: React.ReactNode }) => (
//   <thead className="bg-gray-100 sticky top-0 z-10">{children}</thead>
// );

// const TableBody = ({ children }: { children: React.ReactNode }) => (
//   <tbody className="divide-y divide-gray-200">{children}</tbody>
// );

// const TableRow = ({ children }: { children: React.ReactNode }) => (
//   <tr className="hover:bg-gray-50">{children}</tr>
// );

// const TableHead = ({ children }: { children: React.ReactNode }) => (
//   <th className="px-4 py-2 text-xs font-semibold uppercase tracking-wider">
//     {children}
//   </th>
// );

// const TableCell = ({ children }: { children: React.ReactNode }) => (
//   <td className="px-4 py-2 whitespace-nowrap">{children}</td>
// );

// /* ================= STATUS BADGE ================= */
// // const StatusBadge = ({ status }: { status: string }) => {
// //   let cls = 'bg-gray-300 text-gray-800';

// //   if (status?.toLowerCase() === 'active') cls = 'bg-green-500 text-white';
// //   if (status?.toLowerCase() === 'disconnected')
// //     cls = 'bg-red-500 text-white';

// //   return (
// //     <span className={`px-2 py-1 rounded text-xs font-semibold ${cls}`}>
// //       {status || '-'}
// //     </span>
// //   );
// // };


// const StatusBadge = ({ status }: { status: string }) => {
//   let cls = 'bg-gray-300 text-gray-800';

//   if (status?.toLowerCase() === 'active') {
//     cls = 'bg-green-500 text-white';
//   } else if (status?.toLowerCase() === 'disconnected') {
//     cls = 'bg-blue-500 text-white';   // 🔵 DISCONNECTED = BLUE
//   } else if (status?.toLowerCase() === 'decommissioned') {
//     cls = 'bg-red-500 text-white';
//   }

//   return (
//     <span className={`px-2 py-1 rounded text-xs font-semibold ${cls}`}>
//       {status || '-'}
//     </span>
//   );
// };

// /* ================= EOL LOGIC ================= */
// const daysDiff = (date?: string | null) => {
//   if (!date || date === '-') return null;

//   const today = new Date();
//   today.setHours(0, 0, 0, 0);
//   const target = new Date(date);

//   return Math.ceil((target.getTime() - today.getTime()) / 86400000);
// };

// const getEolMeta = (date?: string | null) => {
//   const diff = daysDiff(date);
//   if (diff === null) return null;

//   if (diff < 0)
//     return {
//       priority: 1,
//       className: 'bg-red-600 text-white',
//       label: `${date} (Expired)`,
//       tooltip: `Expired ${Math.abs(diff)} days ago`,
//     };

//   if (diff <= 30)
//     return {
//       priority: 2,
//       className: 'bg-orange-500 text-white',
//       label: date,
//       tooltip: `Expiring in ${diff} days`,
//     };

//   if (diff <= 90)
//     return {
//       priority: 3,
//       className: 'bg-yellow-400 text-black',
//       label: date,
//       tooltip: `Expiring in ${diff} days`,
//     };

//   return {
//     priority: 4,
//     className: '',
//     label: date,
//     tooltip: `Valid for ${diff} days`,
//   };
// };

// /* ================= TYPES ================= */
// type ServerItem = {
//   server_environment: string;
//   agent_name: string;
//   ip_address: string;
//   os_name: string;
//   server_owner: string;
//   client_name: string;
//   cs_owner: string;
//   wazuh_status: string;
//   end_of_life: string;
//   extended_support_end_date: string;
// };

// /* ================= MAIN ================= */
// export default function ServerTable() {
//   const [data, setData] = useState<ServerItem[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState('');
//   const [page, setPage] = useState(1);
//   const rowsPerPage = 15;

//   useEffect(() => {
//     fetch(`${process.env.NEXT_PUBLIC_API_BASE}/agents-info`)
//       .then((res) => res.json())
//       .then((json) => {
//         const normalized = json.data.map((item: any) => ({
//           server_environment: item.Server_Environment || '-',
//           agent_name: item.Agent_Name || '-',
//           ip_address: item.Ip_Address || '-',
//           os_name: item.Os || '-',               // ✅ OS NAME ADDED
//           server_owner: item.Server_Owner || '-',
//           client_name: item.client_name || '-',
//           cs_owner: item.cs_owner || '-',
//           wazuh_status: item.wazuh_status || '-',
//           end_of_life: item.end_of_life || '-',
//           extended_support_end_date:
//             item.extended_support_end_date || '-',
//         }));
//         setData(normalized);
//       })
//       .finally(() => setLoading(false));
//   }, []);

//   const filtered = data
//     .filter((r) =>
//       r.server_environment.toLowerCase().includes(search.toLowerCase())
//     )
//     .sort(
//       (a, b) =>
//         (getEolMeta(a.end_of_life)?.priority ?? 5) -
//         (getEolMeta(b.end_of_life)?.priority ?? 5)
//     );

//   const start = (page - 1) * rowsPerPage;
//   const pageData = filtered.slice(start, start + rowsPerPage);
//   const totalPages = Math.ceil(filtered.length / rowsPerPage);

//   return (
//     <div className="bg-white p-4 rounded-2xl shadow border">
//       <h2 className="text-lg font-semibold mb-3">Agents Lifecycle Status</h2>

//       <input
//         className="border px-3 py-2 rounded mb-4 w-1/3"
//         placeholder="Filter by Server Environment"
//         onChange={(e) => {
//           setSearch(e.target.value);
//           setPage(1);
//         }}
//       />

//       <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead>Env</TableHead>
//               <TableHead>Agent</TableHead>
//               <TableHead>IP</TableHead>
//               <TableHead>Wazuh</TableHead>

//               {/* <TableHead>OS Name</TableHead> */}
//               {/* <TableHead>Owner</TableHead> */}
//               <TableHead>Client</TableHead>
//               <TableHead>CS Owner</TableHead>
//               <TableHead>OS Name</TableHead>
//               {/* <TableHead>Wazuh</TableHead> */}
//               <TableHead>End of Life</TableHead>
//               <TableHead>Extended Support</TableHead>
//             </TableRow>
//           </TableHeader>

//           <TableBody>
//             {pageData.map((row, i) => {
//               const eol = getEolMeta(row.end_of_life);

//               return (
//                 <TableRow key={i}>
//                   <TableCell>{row.server_environment}</TableCell>
//                   <TableCell>{row.agent_name}</TableCell>
//                   <TableCell>{row.ip_address}</TableCell>
//                   {/* <TableCell>{row.os_name}</TableCell> */}
//                   <TableCell>
//                     <StatusBadge status={row.wazuh_status} />
//                   </TableCell>
//                   {/* <TableCell>{row.server_owner}</TableCell> */}
//                   <TableCell>{row.client_name}</TableCell>
//                   <TableCell>{row.cs_owner}</TableCell>
//                   {/* <TableCell>
//                     <StatusBadge status={row.wazuh_status} />
//                   </TableCell> */}
//                   <TableCell>{row.os_name}</TableCell>
//                   <TableCell title={eol?.tooltip}>
//                     {eol?.className ? (
//                       <span
//                         className={`px-2 py-1 rounded text-xs font-semibold ${eol.className}`}
//                       >
//                         {eol.label}
//                       </span>
//                     ) : (
//                       row.end_of_life
//                     )}
//                   </TableCell>
//                   <TableCell>{row.extended_support_end_date}</TableCell>
//                 </TableRow>
//               );
//             })}
//           </TableBody>
//         </Table>
//       </div>

//       {totalPages > 1 && (
//         <div className="flex justify-between mt-4">
//           <button
//             disabled={page === 1}
//             onClick={() => setPage((p) => p - 1)}
//             className="px-3 py-1 bg-gray-200 rounded"
//           >
//             Prev
//           </button>
//           <span className="text-sm text-gray-600">
//             Page {page} / {totalPages}
//           </span>
//           <button
//             disabled={page === totalPages}
//             onClick={() => setPage((p) => p + 1)}
//             className="px-3 py-1 bg-gray-200 rounded"
//           >
//             Next
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }




'use client';

import { useEffect, useState } from 'react';

/* ================= TABLE UI ================= */
const Table = ({ children }: { children: React.ReactNode }) => (
  <table className="w-full text-sm text-left border-collapse">{children}</table>
);

const TableHeader = ({ children }: { children: React.ReactNode }) => (
  <thead className="bg-gray-100 sticky top-0 z-10">{children}</thead>
);

const TableBody = ({ children }: { children: React.ReactNode }) => (
  <tbody className="divide-y divide-gray-200">{children}</tbody>
);

const TableRow = ({ children }: { children: React.ReactNode }) => (
  <tr className="hover:bg-gray-50">{children}</tr>
);

const TableHead = ({ children }: { children: React.ReactNode }) => (
  <th className="px-4 py-2 text-xs font-semibold uppercase tracking-wider">
    {children}
  </th>
);

/* ✅ FIXED: allows title, colSpan, etc */
const TableCell = ({
  children,
  className = '',
  ...rest
}: React.TdHTMLAttributes<HTMLTableCellElement>) => (
  <td {...rest} className={`px-4 py-2 whitespace-nowrap ${className}`}>
    {children}
  </td>
);

/* ================= STATUS BADGE ================= */
const StatusBadge = ({ status }: { status: string }) => {
  let cls = 'bg-gray-300 text-gray-800';

  if (status?.toLowerCase() === 'active') {
    cls = 'bg-green-500 text-white';
  } else if (status?.toLowerCase() === 'disconnected') {
    cls = 'bg-blue-500 text-white'; // 🔵 disconnected
  } else if (status?.toLowerCase() === 'decommissioned') {
    cls = 'bg-red-500 text-white';
  }

  return (
    <span className={`px-2 py-1 rounded text-xs font-semibold ${cls}`}>
      {status || '-'}
    </span>
  );
};

/* ================= EOL LOGIC ================= */
const daysDiff = (date?: string | null) => {
  if (!date || date === '-') return null;

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(date);

  return Math.ceil((target.getTime() - today.getTime()) / 86400000);
};

const getEolMeta = (date?: string | null) => {
  const diff = daysDiff(date);
  if (diff === null) return null;

  if (diff < 0)
    return {
      priority: 1,
      className: 'bg-red-600 text-white',
      label: `${date} (Expired)`,
      tooltip: `Expired ${Math.abs(diff)} days ago`,
    };

  if (diff <= 30)
    return {
      priority: 2,
      className: 'bg-orange-500 text-white',
      label: date,
      tooltip: `Expiring in ${diff} days`,
    };

  if (diff <= 90)
    return {
      priority: 3,
      className: 'bg-yellow-400 text-black',
      label: date,
      tooltip: `Expiring in ${diff} days`,
    };

  return {
    priority: 4,
    className: '',
    label: date,
    tooltip: `Valid for ${diff} days`,
  };
};

/* ================= TYPES ================= */
type ServerItem = {
  server_environment: string;
  agent_name: string;
  ip_address: string;
  os_name: string;
  server_owner: string;
  client_name: string;
  cs_owner: string;
  wazuh_status: string;
  end_of_life: string;
  extended_support_end_date: string;
};

/* ================= MAIN COMPONENT ================= */
export default function ServerTable() {
  const [data, setData] = useState<ServerItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const rowsPerPage = 15;

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE}/agents-info`)
      .then((res) => res.json())
      .then((json) => {
        const normalized: ServerItem[] = json.data.map((item: any) => ({
          server_environment: item.Server_Environment || '-',
          agent_name: item.Agent_Name || '-',
          ip_address: item.Ip_Address || '-',
          os_name: item.Os || '-', // ✅ OS name
          server_owner: item.Server_Owner || '-',
          client_name: item.client_name || '-',
          cs_owner: item.cs_owner || '-',
          wazuh_status: item.wazuh_status || '-',
          end_of_life: item.end_of_life || '-',
          extended_support_end_date:
            item.extended_support_end_date || '-',
        }));
        setData(normalized);
      })
      .finally(() => setLoading(false));
  }, []);

  /* filter + sort (expired first) */
  const filtered = data
    .filter((r) =>
      r.server_environment.toLowerCase().includes(search.toLowerCase())
    )
    .sort(
      (a, b) =>
        (getEolMeta(a.end_of_life)?.priority ?? 5) -
        (getEolMeta(b.end_of_life)?.priority ?? 5)
    );

  const start = (page - 1) * rowsPerPage;
  const pageData = filtered.slice(start, start + rowsPerPage);
  const totalPages = Math.ceil(filtered.length / rowsPerPage);

  return (
    <div className="bg-white p-4 rounded-2xl shadow border">
      <h2 className="text-lg font-semibold mb-3">
        Agents Lifecycle Status
      </h2>

      <input
        className="border px-3 py-2 rounded mb-4 w-1/3"
        placeholder="Filter by Server Environment"
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
      />

      <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Env</TableHead>
              <TableHead>Agent</TableHead>
              <TableHead>IP</TableHead>
              <TableHead>Wazuh</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>CS Owner</TableHead>
              <TableHead>OS Name</TableHead>
              <TableHead>End of Life</TableHead>
              <TableHead>Extended Support</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={9} className="text-center py-6 text-gray-500">
                  Loading...
                </TableCell>
              </TableRow>
            ) : (
              pageData.map((row, i) => {
                const eol = getEolMeta(row.end_of_life);

                return (
                  <TableRow key={i}>
                    <TableCell>{row.server_environment}</TableCell>
                    <TableCell>{row.agent_name}</TableCell>
                    <TableCell>{row.ip_address}</TableCell>

                    <TableCell>
                      <StatusBadge status={row.wazuh_status} />
                    </TableCell>

                    <TableCell>{row.client_name}</TableCell>
                    <TableCell>{row.cs_owner}</TableCell>
                    <TableCell>{row.os_name}</TableCell>

                    <TableCell title={eol?.tooltip}>
                      {eol?.className ? (
                        <span
                          className={`px-2 py-1 rounded text-xs font-semibold ${eol.className}`}
                        >
                          {eol.label}
                        </span>
                      ) : (
                        row.end_of_life
                      )}
                    </TableCell>

                    <TableCell>{row.extended_support_end_date}</TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>

      {totalPages > 1 && (
        <div className="flex justify-between mt-4">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Prev
          </button>
          <span className="text-sm text-gray-600">
            Page {page} / {totalPages}
          </span>
          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
