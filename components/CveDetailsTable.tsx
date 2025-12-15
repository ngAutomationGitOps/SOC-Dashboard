// 'use client';

// import React, { useEffect, useState } from 'react';

// type CVEItem = {
//   cve_id: string;
//   description: string;
//   remediation: string;
// };

// const ITEMS_PER_PAGE = 10;

// export default function CveDetailsTable() {
//   const [cveList, setCveList] = useState<CVEItem[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [expandedRows, setExpandedRows] = useState<number[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     fetch(`${process.env.NEXT_PUBLIC_API_BASE}/vuln_desc`)
//       .then(res => res.json())
//       .then(data => {
//         if (data?.data) {
//           const mapped = data.data.map((item: any) => ({
//             cve_id: item.cve_id,
//             description: item.Description,
//             remediation: item.Remediation,
//           }));
//           setCveList(mapped);
//         }
//       })
//       .catch(err => console.error('Error fetching CVE details:', err))
//       .finally(() => setLoading(false));
//   }, []);

//   const totalPages = Math.ceil(cveList.length / ITEMS_PER_PAGE);

//   // Calculate which items to show on the current page
//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const visibleList = cveList.slice(startIndex, startIndex + ITEMS_PER_PAGE);

//   const toggleRow = (index: number) => {
//     setExpandedRows(prev =>
//       prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
//     );
//   };

//   const isExpanded = (index: number) => expandedRows.includes(index);

//   const goToPrevious = () => {
//     setCurrentPage(page => Math.max(page - 1, 1));
//   };

//   const goToNext = () => {
//     setCurrentPage(page => Math.min(page + 1, totalPages));
//   };

//   return (
//     <div style={styles.card}>
//       {/* <h2 style={styles.title}>CVE ID Description and Remediation</h2> */}

//       {loading ? (
//         <p style={{ textAlign: 'center' }}>Loading...</p>
//       ) : cveList.length === 0 ? (
//         <p style={{ textAlign: 'center' }}>No data available</p>
//       ) : (
//         <>
//           <div style={{ overflowX: 'auto' }}>
//             {/* Table header */}
//             <table style={styles.table}>
//               <thead>
//                 <tr>
//                   <th style={{ ...styles.th, width: '180px' }}>CVE ID</th>
//                   <th style={styles.th}>Description</th>
//                   <th style={styles.th}>Remediation</th>
//                 </tr>
//               </thead>
//             </table>

//             {/* Scrollable tbody container */}
//             <div style={styles.tbodyContainer}>
//               <table style={{ ...styles.table, marginBottom: 0 }}>
//                 <tbody>
//                   {visibleList.map((item, index) => (
//                     <tr
//                       key={startIndex + index}
//                       style={{
//                         backgroundColor: index % 2 === 0 ? '#f9fafb' : '#fff',
//                         cursor: 'pointer',
//                       }}
//                       onClick={() => toggleRow(startIndex + index)}
//                     >
//                       <td style={{ ...styles.td, width: '180px' }}>{item.cve_id}</td>
//                       <td style={styles.td}>
//                         <div
//                           style={{
//                             whiteSpace: 'pre-wrap',
//                             overflow: 'hidden',
//                             display: '-webkit-box',
//                             WebkitLineClamp: isExpanded(startIndex + index) ? 'unset' : 2,
//                             WebkitBoxOrient: 'vertical',
//                           }}
//                         >
//                           {item.description}
//                         </div>
//                         <div style={styles.more}>
//                           {isExpanded(startIndex + index) ? '▲ Show Less' : '▼ Show More'}
//                         </div>
//                       </td>
//                       <td style={styles.td}>
//                         <div
//                           style={{
//                             whiteSpace: 'pre-wrap',
//                             overflow: 'hidden',
//                             display: '-webkit-box',
//                             WebkitLineClamp: isExpanded(startIndex + index) ? 'unset' : 2,
//                             WebkitBoxOrient: 'vertical',
//                           }}
//                         >
//                           {item.remediation}
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           {/* Pagination Controls */}
//           <div style={styles.pagination}>
//             <button
//               style={styles.pageButton}
//               onClick={goToPrevious}
//               disabled={currentPage === 1}
//             >
//               Previous
//             </button>
//             <span style={{ margin: '0 12px' }}>
//               Page {currentPage} of {totalPages}
//             </span>
//             <button
//               style={styles.pageButton}
//               onClick={goToNext}
//               disabled={currentPage === totalPages}
//             >
//               Next
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// const styles: { [key: string]: React.CSSProperties } = {
//   card: {
//     backgroundColor: '#fff',
//     border: '1px solid #e5e7eb',
//     borderRadius: '12px',
//     boxShadow: '0 1px 4px rgba(0, 0, 0, 0.1)',
//     padding: '20px',
//     marginTop: '24px',
//   },
//   title: {
//     fontSize: '18px',
//     fontWeight: 600,
//     textAlign: 'center',
//     marginBottom: '16px',
//     color: '#374151',
//   },
//   table: {
//     width: '100%',
//     minWidth: '800px',
//     borderCollapse: 'collapse',
//   },
//   th: {
//     border: '1px solid #ccc',
//     padding: '10px',
//     backgroundColor: '#f9fafb',
//     textAlign: 'left',
//     fontWeight: 'bold',
//     position: 'sticky',
//     top: 0,
//     zIndex: 1,
//   },
//   td: {
//     border: '1px solid #ddd',
//     padding: '10px',
//     verticalAlign: 'top',
//     fontSize: '14px',
//   },
//   more: {
//     marginTop: 6,
//     fontSize: '12px',
//     color: '#3b82f6',
//     cursor: 'pointer',
//   },
//   pagination: {
//     marginTop: 16,
//     textAlign: 'center',
//   },
//   pageButton: {
//     padding: '8px 16px',
//     margin: '0 4px',
//     border: 'none',
//     borderRadius: '6px',
//     backgroundColor: '#3b82f6',
//     color: 'white',
//     cursor: 'pointer',
//     fontWeight: 'bold',
//   },
//   tbodyContainer: {
//     maxHeight: '400px', // fixed height for scroll area
//     overflowY: 'auto',
//     border: '1px solid #e5e7eb',
//     borderTop: 'none',
//   },
// };


// 'use client';

// import React, { useEffect, useState } from 'react';

// type CVEItem = {
//   cve_id: string;
//   description: string;
//   remediation: string;
// };

// const ITEMS_PER_PAGE = 10;

// export default function CveDetailsTable() {
//   const [cveList, setCveList] = useState<CVEItem[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [expandedRows, setExpandedRows] = useState<number[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [filterText, setFilterText] = useState(''); // ✅ new state for filter

//   useEffect(() => {
//     fetch(`${process.env.NEXT_PUBLIC_API_BASE}/vuln_desc`)
//       .then(res => res.json())
//       .then(data => {
//         if (data?.data) {
//           const mapped = data.data.map((item: any) => ({
//             cve_id: item.cve_id,
//             description: item.Description,
//             remediation: item.Remediation,
//           }));
//           setCveList(mapped);
//         }
//       })
//       .catch(err => console.error('Error fetching CVE details:', err))
//       .finally(() => setLoading(false));
//   }, []);

//   // ✅ Filter CVEs by CVE ID
//   const filteredList = cveList.filter(item =>
//     item.cve_id.toLowerCase().includes(filterText.toLowerCase())
//   );

//   const totalPages = Math.ceil(filteredList.length / ITEMS_PER_PAGE);

//   // Pagination logic
//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const visibleList = filteredList.slice(startIndex, startIndex + ITEMS_PER_PAGE);

//   const toggleRow = (index: number) => {
//     setExpandedRows(prev =>
//       prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
//     );
//   };

//   const isExpanded = (index: number) => expandedRows.includes(index);

//   const goToPrevious = () => setCurrentPage(page => Math.max(page - 1, 1));
//   const goToNext = () => setCurrentPage(page => Math.min(page + 1, totalPages));

//   return (
//     <div style={styles.card}>
//       {loading ? (
//         <p style={{ textAlign: 'center' }}>Loading...</p>
//       ) : cveList.length === 0 ? (
//         <p style={{ textAlign: 'center' }}>No data available</p>
//       ) : (
//         <>
//           {/* ✅ Filter Input */}
//           <div style={styles.filterBox}>
//             <input
//               type="text"
//               placeholder="Filter by CVE ID (e.g. CVE-2023-1234)"
//               value={filterText}
//               onChange={e => {
//                 setFilterText(e.target.value);
//                 setCurrentPage(1); // reset to page 1 when filtering
//               }}
//               style={styles.filterInput}
//             />
//           </div>

//           <div style={{ overflowX: 'auto' }}>
//             {/* Table header */}
//             <table style={styles.table}>
//               <thead>
//                 <tr>
//                   <th style={{ ...styles.th, width: '180px' }}>CVE ID</th>
//                   <th style={styles.th}>Description</th>
//                   <th style={styles.th}>Remediation</th>
//                 </tr>
//               </thead>
//             </table>

//             {/* Scrollable tbody container */}
//             <div style={styles.tbodyContainer}>
//               <table style={{ ...styles.table, marginBottom: 0 }}>
//                 <tbody>
//                   {visibleList.length === 0 ? (
//                     <tr>
//                       <td colSpan={3} style={{ textAlign: 'center', padding: '12px' }}>
//                         No CVEs found
//                       </td>
//                     </tr>
//                   ) : (
//                     visibleList.map((item, index) => (
//                       <tr
//                         key={startIndex + index}
//                         style={{
//                           backgroundColor: index % 2 === 0 ? '#f9fafb' : '#fff',
//                           cursor: 'pointer',
//                         }}
//                         onClick={() => toggleRow(startIndex + index)}
//                       >
//                         <td style={{ ...styles.td, width: '180px' }}>{item.cve_id}</td>
//                         <td style={styles.td}>
//                           <div
//                             style={{
//                               whiteSpace: 'pre-wrap',
//                               overflow: 'hidden',
//                               display: '-webkit-box',
//                               WebkitLineClamp: isExpanded(startIndex + index) ? 'unset' : 2,
//                               WebkitBoxOrient: 'vertical',
//                             }}
//                           >
//                             {item.description}
//                           </div>
//                           <div style={styles.more}>
//                             {isExpanded(startIndex + index)
//                               ? '▲ Show Less'
//                               : '▼ Show More'}
//                           </div>
//                         </td>
//                         <td style={styles.td}>
//                           <div
//                             style={{
//                               whiteSpace: 'pre-wrap',
//                               overflow: 'hidden',
//                               display: '-webkit-box',
//                               WebkitLineClamp: isExpanded(startIndex + index) ? 'unset' : 2,
//                               WebkitBoxOrient: 'vertical',
//                             }}
//                           >
//                             {item.remediation}
//                           </div>
//                         </td>
//                       </tr>
//                     ))
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           {/* Pagination Controls */}
//           {totalPages > 1 && (
//             <div style={styles.pagination}>
//               <button
//                 style={styles.pageButton}
//                 onClick={goToPrevious}
//                 disabled={currentPage === 1}
//               >
//                 Previous
//               </button>
//               <span style={{ margin: '0 12px' }}>
//                 Page {currentPage} of {totalPages}
//               </span>
//               <button
//                 style={styles.pageButton}
//                 onClick={goToNext}
//                 disabled={currentPage === totalPages}
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

// const styles: { [key: string]: React.CSSProperties } = {
//   card: {
//     backgroundColor: '#fff',
//     border: '1px solid #e5e7eb',
//     borderRadius: '12px',
//     boxShadow: '0 1px 4px rgba(0, 0, 0, 0.1)',
//     padding: '20px',
//     marginTop: '24px',
//   },
//   table: {
//     width: '100%',
//     minWidth: '800px',
//     borderCollapse: 'collapse',
//   },
//   th: {
//     border: '1px solid #ccc',
//     padding: '10px',
//     backgroundColor: '#f9fafb',
//     textAlign: 'left',
//     fontWeight: 'bold',
//     position: 'sticky',
//     top: 0,
//     zIndex: 1,
//   },
//   td: {
//     border: '1px solid #ddd',
//     padding: '10px',
//     verticalAlign: 'top',
//     fontSize: '14px',
//   },
//   more: {
//     marginTop: 6,
//     fontSize: '12px',
//     color: '#3b82f6',
//     cursor: 'pointer',
//   },
//   pagination: {
//     marginTop: 16,
//     textAlign: 'center',
//   },
//   pageButton: {
//     padding: '8px 16px',
//     margin: '0 4px',
//     border: 'none',
//     borderRadius: '6px',
//     backgroundColor: '#3b82f6',
//     color: 'white',
//     cursor: 'pointer',
//     fontWeight: 'bold',
//   },
//   tbodyContainer: {
//     maxHeight: '400px',
//     overflowY: 'auto',
//     border: '1px solid #e5e7eb',
//     borderTop: 'none',
//   },
//   filterBox: {
//     marginBottom: '12px',
//     textAlign: 'left',
//   },
//   filterInput: {
//     padding: '8px 12px',
//     borderRadius: '6px',
//     border: '1px solid #ccc',
//     width: '280px',
//     fontSize: '14px',
//   },
// };


'use client';

import React, { useEffect, useState } from 'react';

type CVEItem = {
  cve_id: string;
  description: string;
  remediation: string;
};

const ITEMS_PER_PAGE = 10;

export default function CveDetailsTable() {
  const [cveList, setCveList] = useState<CVEItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedRows, setExpandedRows] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE}/vuln_desc`)
      .then(res => res.json())
      .then(data => {
        if (data?.data) {
          const mapped = data.data.map((item: any) => ({
            cve_id: item.cve_id,
            description: item.Description,
            remediation: item.Remediation,
          }));
          setCveList(mapped);
        }
      })
      .catch(err => console.error('Error fetching CVE details:', err))
      .finally(() => setLoading(false));
  }, []);

  const filteredList = cveList.filter(item =>
    item.cve_id.toLowerCase().includes(filterText.toLowerCase())
  );

  const totalPages = Math.ceil(filteredList.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleList = filteredList.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const toggleRow = (index: number) => {
    setExpandedRows(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const isExpanded = (index: number) => expandedRows.includes(index);

  const goToPrevious = () => setCurrentPage(page => Math.max(page - 1, 1));
  const goToNext = () => setCurrentPage(page => Math.min(page + 1, totalPages));

  return (
    <div className="w-full h-full flex flex-col">
      {loading ? (
        <div className="flex items-center justify-center h-32">
          <div className="text-gray-500">Loading...</div>
        </div>
      ) : cveList.length === 0 ? (
        <div className="flex items-center justify-center h-32">
          <div className="text-gray-500">No data available</div>
        </div>
      ) : (
        <>
          {/* Filter Input */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Filter by CVE ID (e.g. CVE-2023-1234)"
              value={filterText}
              onChange={e => {
                setFilterText(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex-1 overflow-auto">
            <table style={{ ...styles.table, width: '100%' }}>
              <thead>
                <tr>
                  <th style={{ ...styles.th, width: '180px', backgroundColor: '#f3f4f6' }}>
                    CVE ID
                  </th>
                  <th style={{ ...styles.th, backgroundColor: '#f3f4f6' }}>Description</th>
                  <th style={{ ...styles.th, backgroundColor: '#f3f4f6' }}>Remediation</th>
                </tr>
              </thead>
              <tbody>
                  {visibleList.length === 0 ? (
                    <tr>
                      <td colSpan={3} style={{ textAlign: 'center', padding: '12px' }}>
                        No CVEs found
                      </td>
                    </tr>
                  ) : (
                    visibleList.map((item, index) => (
                      <tr
                        key={startIndex + index}
                        style={{
                          backgroundColor: index % 2 === 0 ? '#f9fafb' : '#fff',
                          cursor: 'pointer',
                        }}
                        onClick={() => toggleRow(startIndex + index)}
                      >
                        <td style={{ ...styles.td, width: '180px' }}>{item.cve_id}</td>
                        <td style={styles.td}>
                          <div
                            style={{
                              whiteSpace: 'pre-wrap',
                              overflow: 'hidden',
                              display: '-webkit-box',
                              WebkitLineClamp: isExpanded(startIndex + index) ? 'unset' : 2,
                              WebkitBoxOrient: 'vertical',
                            }}
                          >
                            {item.description}
                          </div>
                          <div style={styles.more}>
                            {isExpanded(startIndex + index)
                              ? '▲ Show Less'
                              : '▼ Show More'}
                          </div>
                        </td>
                        <td style={styles.td}>
                          <div
                            style={{
                              whiteSpace: 'pre-wrap',
                              overflow: 'hidden',
                              display: '-webkit-box',
                              WebkitLineClamp: isExpanded(startIndex + index) ? 'unset' : 2,
                              WebkitBoxOrient: 'vertical',
                            }}
                          >
                            {item.remediation}
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div style={styles.pagination}>
              <button
                style={styles.pageButton}
                onClick={goToPrevious}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span style={{ margin: '0 12px' }}>
                Page {currentPage} of {totalPages}
              </span>
              <button
                style={styles.pageButton}
                onClick={goToNext}
                disabled={currentPage === totalPages}
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

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    backgroundColor: '#fff',
    border: '1px solid #e5e7eb',
    borderRadius: '12px',
    boxShadow: '0 1px 4px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    marginTop: '24px',
  },
  table: {
    width: '100%',
    minWidth: '800px',
    borderCollapse: 'collapse',
  },
  th: {
    border: '1px solid #ccc',
    padding: '10px',
    backgroundColor: '#f3f4f6', // ✅ Light gray background for headers
    textAlign: 'left',
    fontWeight: 'bold',
    position: 'sticky',
    top: 0,
    zIndex: 1,
    color: '#374151',
  },
  td: {
    border: '1px solid #ddd',
    padding: '10px',
    verticalAlign: 'top',
    fontSize: '14px',
  },
  more: {
    marginTop: 6,
    fontSize: '12px',
    color: '#3b82f6',
    cursor: 'pointer',
  },
  pagination: {
    marginTop: 16,
    textAlign: 'center',
  },
  pageButton: {
    padding: '8px 16px',
    margin: '0 4px',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#3b82f6',
    color: 'white',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  filterBox: {
    marginBottom: '12px',
    textAlign: 'left',
  },
  filterInput: {
    padding: '8px 12px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    width: '280px',
    fontSize: '14px',
  },
};
