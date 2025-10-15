// 'use client';

// import { useEffect, useState } from 'react';

// type CVE = {
//   cve_id: string;
//   severity: string;
//   count: number;
// };

// const severityColors: Record<string, string> = {
//   High: 'bg-red-500 text-white',
//   Medium: 'bg-yellow-400 text-black',
//   Info: 'bg-blue-500 text-white',
//   Default: 'bg-gray-300 text-black',
// };

// export default function CveSummaryTable() {
//   const [data, setData] = useState<CVE[]>([]);

//   useEffect(() => {
//     fetch(`${process.env.NEXT_PUBLIC_API_BASE}/cve-ids`)
//       .then((res) => res.json())
//       .then((resData) => {
//         if (resData?.data) {
//           const top3 = resData.data
//             .filter((item: CVE) => item.severity.toLowerCase() === 'high')
//             .sort((a: CVE, b: CVE) => b.count - a.count)
//             .slice(0, 3);
//           setData(top3);
//         }
//       })
//       .catch((err) => console.error('Error fetching CVE data:', err));
//   }, []);

//   return (
//     <div className="bg-white rounded-lg shadow p-6 border">
//       {/* <h2 className="text-xl font-bold text-center mb-4 text-gray-800">
//         Top CVE IDs (High Severity)
//       </h2> */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full text-sm text-left border">
//           <thead className="bg-gray-100 font-semibold text-gray-700">
//             <tr>
//               <th className="px-4 py-2 border">CVE ID</th>
//               <th className="px-4 py-2 border">Severity</th>
//               <th className="px-4 py-2 border">Count</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item, index) => (
//               <tr key={index} className="border-b hover:bg-gray-50">
//                 <td className="px-4 py-2 border font-mono">{item.cve_id}</td>
//                 <td className="px-4 py-2 border text-sm capitalize">
//                   <span
//                     className={`inline-block px-2 py-1 rounded ${
//                       severityColors[item.severity] || severityColors.Default
//                     }`}
//                   >
//                     {item.severity}
//                   </span>
//                 </td>
//                 <td className="px-4 py-2 border font-semibold">{item.count}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }


// 'use client';

// import { useEffect, useState } from 'react';

// type CVE = {
//   cve_id: string;
//   severity: string;
//   count: number;
// };

// const severityColors: Record<string, string> = {
//   High: 'bg-red-500 text-white',
//   Medium: 'bg-yellow-400 text-black',
//   Info: 'bg-blue-500 text-white',
//   Default: 'bg-gray-300 text-black',
// };

// export default function CveSummaryTable() {
//   const [data, setData] = useState<CVE[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5; // show 5 CVEs per page

//   useEffect(() => {
//     fetch(`${process.env.NEXT_PUBLIC_API_BASE}/cve-ids`)
//       .then((res) => res.json())
//       .then((resData) => {
//         if (resData?.data) {
//           // sort CVEs by count (highest first)
//           const allCves = resData.data.sort((a: CVE, b: CVE) => b.count - a.count);
//           setData(allCves);
//         }
//       })
//       .catch((err) => console.error('Error fetching CVE data:', err));
//   }, []);

//   // Pagination logic
//   const totalPages = Math.ceil(data.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

//   return (
//     <div className="bg-white rounded-lg shadow p-6 border">
//       {/* <h2 className="text-lg font-bold text-gray-800 mb-2">All CVEs</h2> */}

//       <div className="overflow-x-auto">
//         <table className="min-w-full text-sm text-left border">
//           <thead className="bg-gray-100 font-semibold text-gray-700">
//             <tr>
//               <th className="px-4 py-2 border">CVE ID</th>
//               <th className="px-4 py-2 border">Severity</th>
//               <th className="px-4 py-2 border">Count</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentItems.map((item, index) => (
//               <tr key={index} className="border-b hover:bg-gray-50">
//                 <td className="px-4 py-2 border font-mono">{item.cve_id}</td>
//                 <td className="px-4 py-2 border text-sm capitalize">
//                   <span
//                     className={`inline-block px-2 py-1 rounded ${
//                       severityColors[item.severity] || severityColors.Default
//                     }`}
//                   >
//                     {item.severity}
//                   </span>
//                 </td>
//                 <td className="px-4 py-2 border font-semibold">{item.count}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination Controls */}
//       <div className="flex justify-center items-center mt-4 gap-2">
//         <button
//           onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
//           disabled={currentPage === 1}
//           className="px-3 py-1 border rounded disabled:opacity-50"
//         >
//           Prev
//         </button>
//         <span className="px-3 py-1">
//           Page {currentPage} of {totalPages}
//         </span>
//         <button
//           onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
//           disabled={currentPage === totalPages}
//           className="px-3 py-1 border rounded disabled:opacity-50"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }



// 'use client';

// import { useEffect, useState } from 'react';

// type CVE = {
//   cve_id: string;
//   severity: string;
//   count: number;
// };

// const severityColors: Record<string, string> = {
//   High: 'bg-red-500 text-white',
//   Medium: 'bg-yellow-400 text-black',
//   Info: 'bg-blue-500 text-white',
//   Default: 'bg-gray-300 text-black',
// };

// export default function CveSummaryTable() {
//   const [data, setData] = useState<CVE[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchTerm, setSearchTerm] = useState('');
//   const itemsPerPage = 5;

//   useEffect(() => {
//     fetch(`${process.env.NEXT_PUBLIC_API_BASE}/cve-ids`)
//       .then((res) => res.json())
//       .then((resData) => {
//         if (resData?.data) {
//           const allCves = resData.data.sort((a: CVE, b: CVE) => b.count - a.count);
//           setData(allCves);
//         }
//       })
//       .catch((err) => console.error('Error fetching CVE data:', err));
//   }, []);

//   // ✅ Filter CVEs by search term
//   const filteredData = data.filter((item) =>
//     item.cve_id.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // ✅ Pagination logic (applies on filtered data)
//   const totalPages = Math.ceil(filteredData.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const currentItems = filteredData.slice(startIndex, startIndex + itemsPerPage);

//   return (
//     <div className="bg-white rounded-lg shadow p-6 border">
//       {/* 🔍 Search / Filter */}
//       <div className="mb-4 flex justify-between items-center">
//         <input
//           type="text"
//           placeholder="Filter by CVE ID..."
//           value={searchTerm}
//           onChange={(e) => {
//             setSearchTerm(e.target.value);
//             setCurrentPage(1); // reset to first page when filtering
//           }}
//           className="border px-3 py-2 rounded w-1/2"
//         />
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full text-sm text-left border">
//           <thead className="bg-gray-100 font-semibold text-gray-700">
//             <tr>
//               <th className="px-4 py-2 border">CVE ID</th>
//               <th className="px-4 py-2 border">Severity</th>
//               <th className="px-4 py-2 border">Count</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentItems.length > 0 ? (
//               currentItems.map((item, index) => (
//                 <tr key={index} className="border-b hover:bg-gray-50">
//                   <td className="px-4 py-2 border font-mono">{item.cve_id}</td>
//                   <td className="px-4 py-2 border text-sm capitalize">
//                     <span
//                       className={`inline-block px-2 py-1 rounded ${
//                         severityColors[item.severity] || severityColors.Default
//                       }`}
//                     >
//                       {item.severity}
//                     </span>
//                   </td>
//                   <td className="px-4 py-2 border font-semibold">{item.count}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={3} className="text-center py-4 text-gray-500">
//                   No CVEs found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination Controls */}
//       {totalPages > 1 && (
//         <div className="flex justify-center items-center mt-4 gap-2">
//           <button
//             onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
//             disabled={currentPage === 1}
//             style={{
//               padding: '8px 16px',
//               margin: '0 4px',
//               border: 'none',
//               borderRadius: '6px',
//               backgroundColor: currentPage === 1 ? '#9ca3af' : '#3b82f6', // gray if disabled
//               color: 'white',
//               cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
//               fontWeight: 'bold',
//             }}
//           >
//             Prev
//           </button>
//           <span className="px-3 py-1">
//             Page {currentPage} of {totalPages}
//           </span>
//           <button
//             onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
//             disabled={currentPage === totalPages}
//             style={{
//               padding: '8px 16px',
//               margin: '0 4px',
//               border: 'none',
//               borderRadius: '6px',
//               backgroundColor: currentPage === totalPages ? '#9ca3af' : '#3b82f6',
//               color: 'white',
//               cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
//               fontWeight: 'bold',
//             }}
//           >
//             Next
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }


// 'use client';

// import { useEffect, useState } from 'react';

// type CVE = {
//   cve_id: string;
//   severity: string;
//   count: number;
// };

// const severityColors: Record<string, string> = {
//   High: 'bg-red-500 text-white',
//   Medium: 'bg-yellow-400 text-black',
//   Low: 'bg-green-500 text-white',
//   Info: 'bg-blue-500 text-white',
//   Default: 'bg-gray-300 text-black',
// };

// export default function CveSummaryTable() {
//   const [data, setData] = useState<CVE[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [severityFilter, setSeverityFilter] = useState('All');
//   const itemsPerPage = 5;

//   useEffect(() => {
//     fetch(`${process.env.NEXT_PUBLIC_API_BASE}/cve-ids`)
//       .then((res) => res.json())
//       .then((resData) => {
//         if (resData?.data) {
//           const allCves = resData.data.sort((a: CVE, b: CVE) => b.count - a.count);
//           setData(allCves);
//         }
//       })
//       .catch((err) => console.error('Error fetching CVE data:', err));
//   }, []);

//   // ✅ Apply both search & severity filter
//   const filteredData = data.filter((item) => {
//     const matchesSearch = item.cve_id.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesSeverity =
//       severityFilter === 'All' ? true : item.severity.toLowerCase() === severityFilter.toLowerCase();
//     return matchesSearch && matchesSeverity;
//   });

//   // ✅ Pagination logic
//   const totalPages = Math.ceil(filteredData.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const currentItems = filteredData.slice(startIndex, startIndex + itemsPerPage);

//   return (
//     <div className="bg-white rounded-lg shadow p-6 border">
//       {/* 🔍 Search + Severity Filter */}
//       <div className="mb-4 flex justify-between items-center gap-4">
//         <input
//           type="text"
//           placeholder="Filter by CVE ID..."
//           value={searchTerm}
//           onChange={(e) => {
//             setSearchTerm(e.target.value);
//             setCurrentPage(1); // reset page on filter
//           }}
//           className="border px-3 py-2 rounded w-1/2"
//         />

//         <select
//           value={severityFilter}
//           onChange={(e) => {
//             setSeverityFilter(e.target.value);
//             setCurrentPage(1); // reset page on filter
//           }}
//           className="border px-3 py-2 rounded"
//         >
//           <option value="All">All Severities</option>
//           <option value="High">High</option>
//           <option value="Medium">Medium</option>
//           <option value="Low">Low</option>
//           <option value="Info">Info</option>
//         </select>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full text-sm text-left border">
//           <thead className="bg-gray-100 font-semibold text-gray-700">
//             <tr>
//               <th className="px-4 py-2 border">CVE ID</th>
//               <th className="px-4 py-2 border">Severity</th>
//               <th className="px-4 py-2 border">Count</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentItems.length > 0 ? (
//               currentItems.map((item, index) => (
//                 <tr key={index} className="border-b hover:bg-gray-50">
//                   <td className="px-4 py-2 border font-mono">{item.cve_id}</td>
//                   <td className="px-4 py-2 border text-sm capitalize">
//                     <span
//                       className={`inline-block px-2 py-1 rounded ${
//                         severityColors[item.severity] || severityColors.Default
//                       }`}
//                     >
//                       {item.severity}
//                     </span>
//                   </td>
//                   <td className="px-4 py-2 border font-semibold">{item.count}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={3} className="text-center py-4 text-gray-500">
//                   No CVEs found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination Controls */}
//       {totalPages > 1 && (
//         <div className="flex justify-center items-center mt-4 gap-2">
//           <button
//             onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
//             disabled={currentPage === 1}
//             style={{
//               padding: '8px 16px',
//               margin: '0 4px',
//               border: 'none',
//               borderRadius: '6px',
//               backgroundColor: currentPage === 1 ? '#9ca3af' : '#3b82f6',
//               color: 'white',
//               cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
//               fontWeight: 'bold',
//             }}
//           >
//             Prev
//           </button>
//           <span className="px-3 py-1">
//             Page {currentPage} of {totalPages}
//           </span>
//           <button
//             onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
//             disabled={currentPage === totalPages}
//             style={{
//               padding: '8px 16px',
//               margin: '0 4px',
//               border: 'none',
//               borderRadius: '6px',
//               backgroundColor: currentPage === totalPages ? '#9ca3af' : '#3b82f6',
//               color: 'white',
//               cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
//               fontWeight: 'bold',
//             }}
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

type CVE = {
  cve_id: string;
  severity: string;
  count: number;
};

// ✅ Custom severity colors (flat hex values)
const severityColors: Record<string, string> = {
  Critical: '#ee3e32',
  High: '#f68838',
  Medium: '#fbb021',
  Low: '#1b8a5a',
  Default: '#9ca3af',
};

export default function CveSummaryTable() {
  const [data, setData] = useState<CVE[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [severityFilter, setSeverityFilter] = useState('All');
  const itemsPerPage = 5;

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE}/cve-ids`)
      .then((res) => res.json())
      .then((resData) => {
        if (resData?.data) {
          const allCves = resData.data.sort((a: CVE, b: CVE) => b.count - a.count);
          setData(allCves);
        }
      })
      .catch((err) => console.error('Error fetching CVE data:', err));
  }, []);

  // ✅ Apply both search & severity filter
  const filteredData = data.filter((item) => {
    const matchesSearch = item.cve_id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSeverity =
      severityFilter === 'All' ? true : item.severity.toLowerCase() === severityFilter.toLowerCase();
    return matchesSearch && matchesSeverity;
  });

  // ✅ Pagination logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bg-white rounded-lg shadow p-6 border">
      {/* 🔍 Search + Severity Filter */}
      <div className="mb-4 flex justify-between items-center gap-4">
        <input
          type="text"
          placeholder="Filter by CVE ID..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="border px-3 py-2 rounded w-1/2"
        />

        <select
          value={severityFilter}
          onChange={(e) => {
            setSeverityFilter(e.target.value);
            setCurrentPage(1);
          }}
          className="border px-3 py-2 rounded"
        >
          <option value="All">All Severities</option>
          <option value="Critical">Critical</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left border">
          <thead className="bg-gray-100 font-semibold text-gray-700">
            <tr>
              <th className="px-4 py-2 border">CVE ID</th>
              <th className="px-4 py-2 border">Severity</th>
              <th className="px-4 py-2 border">Count</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2 border font-mono">{item.cve_id}</td>
                  <td className="px-4 py-2 border text-sm capitalize">
                    <span
                      className="inline-block px-2 py-1 rounded text-white font-semibold"
                      style={{
                        backgroundColor:
                          severityColors[item.severity] || severityColors.Default,
                      }}
                    >
                      {item.severity}
                    </span>
                  </td>
                  <td className="px-4 py-2 border font-semibold">{item.count}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="text-center py-4 text-gray-500">
                  No CVEs found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-4 gap-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            style={{
              padding: '8px 16px',
              margin: '0 4px',
              border: 'none',
              borderRadius: '6px',
              backgroundColor: currentPage === 1 ? '#9ca3af' : '#3b82f6',
              color: 'white',
              cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
              fontWeight: 'bold',
            }}
          >
            Prev
          </button>
          <span className="px-3 py-1">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            style={{
              padding: '8px 16px',
              margin: '0 4px',
              border: 'none',
              borderRadius: '6px',
              backgroundColor: currentPage === totalPages ? '#9ca3af' : '#3b82f6',
              color: 'white',
              cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
              fontWeight: 'bold',
            }}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
