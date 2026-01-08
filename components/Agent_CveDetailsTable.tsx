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





'use client';

import { useState, useEffect } from 'react';

// === Table Components ===
const Table = ({ children, className = '', ...rest }: React.HTMLAttributes<HTMLTableElement>) => (
  <table {...rest} className={`w-full text-sm text-left border-collapse ${className}`}>
    {children}
  </table>
);

const TableHeader = ({ children }: { children: React.ReactNode }) => (
  <thead className="bg-gray-100 text-gray-700">{children}</thead>
);

const TableBody = ({ children }: { children: React.ReactNode }) => (
  <tbody className="divide-y divide-gray-200">{children}</tbody>
);

const TableRow = ({ children }: { children: React.ReactNode }) => (
  <tr className="hover:bg-gray-50">{children}</tr>
);

const TableHead = ({
  children,
  className = '',
  ...rest
}: React.ThHTMLAttributes<HTMLTableHeaderCellElement>) => (
  <th {...rest} className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider ${className}`}>
    {children}
  </th>
);

const TableCell = ({
  children,
  className = '',
  ...rest
}: React.TdHTMLAttributes<HTMLTableCellElement>) => (
  <td {...rest} className={`px-4 py-2 whitespace-nowrap ${className}`}>
    {children}
  </td>
);

// === Badge component for status
const StatusBadge = ({ status }: { status: string }) => {
  let style = 'bg-gray-300 text-gray-800'; // default gray

  if (status?.toLowerCase() === 'active') {
    style = 'bg-green-500 text-white'; // 🟢 green
  } else if (
    status?.toLowerCase() === 'disconnected' ||
    status?.toLowerCase() === 'decommissioned'
  ) {
    style = 'bg-red-500 text-white'; // 🔴 red
  }

  return (
    <span className={`px-2 py-1 rounded text-xs font-semibold ${style}`}>
      {status || '-'}
    </span>
  );
};

// === Types ===
type ServerItem = {
  server_environment: string;
  agent_name: string;
  ip_address: string;
  server_owner: string;
  client_name: string | null;
  cs_owner: string | null;
  wazuh_status: string;
  wazuh_last_update?: string;
  so_status?: string;
  so_last_update?: string;
};

// === Main Component ===
export default function ServerTable() {
  const [data, setData] = useState<ServerItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 15;
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchServers = async () => {
      try {
        const res = await  fetch(`${process.env.NEXT_PUBLIC_API_BASE}/agents-info`);
        const json = await res.json();

        const normalized: ServerItem[] = json.data.map((item: any) => ({
          server_environment: item.Server_Environment || '',
          agent_name: item.Agent_Name || '',
          ip_address: item.Ip_Address || '',
          server_owner: item.Server_Owner || '',
          client_name: item.client_name || '',
          cs_owner: item.cs_owner || '',
          wazuh_status: item.wazuh_status || '',
          wazuh_last_update: item.wazuh_last_update || '-',
          so_status: item.so_status || '-',
          so_last_update: item.so_last_update || '-',
        }));

        setData(normalized);
      } catch (err) {
        console.error('Failed to fetch server data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchServers();
  }, []);

  // ✅ Filter by server environment
  const filteredData = data.filter((row) =>
    row.server_environment.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = filteredData.slice(startIndex, startIndex + rowsPerPage);

  return (
    <div className="w-full bg-white p-4 rounded-2xl shadow border border-gray-200">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">Servers Table</h2>

      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : (
        <>
          {/* 🔍 Filter by Server Environment */}
          <div className="mb-4 flex items-center">
            <input
              type="text"
              placeholder="Filter by Server Environment..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="border px-3 py-2 rounded w-1/3"
            />
          </div>

          <div className="overflow-x-auto w-full">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Server Env</TableHead>
                  <TableHead>Agent Name</TableHead>
                  <TableHead>IP Address</TableHead>
                  <TableHead>Server Owner</TableHead>
                  <TableHead>Client Name</TableHead>
                  <TableHead>CS Owner</TableHead>
                  <TableHead>Wazuh Status</TableHead>
                  <TableHead>Wazuh Last Update</TableHead>
                  <TableHead>SO Status</TableHead>
                  <TableHead>SO Last Update</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentData.length > 0 ? (
                  currentData.map((row, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{row.server_environment}</TableCell>
                      <TableCell>{row.agent_name}</TableCell>
                      <TableCell>{row.ip_address}</TableCell>
                      <TableCell>{row.server_owner}</TableCell>
                      <TableCell>{row.client_name || '-'}</TableCell>
                      <TableCell>{row.cs_owner || '-'}</TableCell>

                      <TableCell>
                        <StatusBadge status={row.wazuh_status} />
                      </TableCell>

                      <TableCell>{row.wazuh_last_update}</TableCell>

                      <TableCell>
                        <StatusBadge status={row.so_status || '-'} />
                      </TableCell>

                      <TableCell>{row.so_last_update}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={10} className="text-center py-4 text-gray-500">
                      No servers found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
              >
                Prev
              </button>
              <span className="text-sm text-gray-600">
                Page {currentPage} of {totalPages || 1}
              </span>
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages || totalPages === 0}
                className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
