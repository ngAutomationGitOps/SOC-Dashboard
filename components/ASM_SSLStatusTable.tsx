// 'use client';
// import React from 'react';

// export default function SSLStatusTable() {
//   const data = [
//     {
//       domain: 'centegytechnologies.com',
//       ip: '110.93.216.182',
//       issue: 'TLS1.0 Enabled',
//       severity: 'High',
//     },
//     {
//       domain: 'mail.centegytechnologies.com',
//       ip: '69.174.114.243',
//       issue: 'Expired SSL',
//       severity: 'Critical',
//     },
//   ];

//   const getSeverityStyle = (severity: string): React.CSSProperties => {
//     const baseStyle: React.CSSProperties = {
//       padding: '4px 12px',
//       borderRadius: '12px',
//       color: 'white',
//       fontWeight: 'bold',
//       textAlign: 'center',
//       display: 'inline-block',
//       fontSize: '14px',
//       minWidth: '70px',
//     };

//     if (severity === 'High') {
//       return { ...baseStyle, backgroundColor: '#e31b0c' }; // Red
//     } else if (severity === 'Critical') {
//       return { ...baseStyle, backgroundColor: '#b80000' }; // Darker red
//     }
//     return baseStyle;
//   };

//   return (
//     <div style={styles.container}>
//       <table style={styles.table}>
//         <thead>
//           <tr style={styles.headerRow}>
//             <th style={styles.th}>DOMAIN</th>
//             <th style={styles.th}>IP</th>
//             <th style={styles.th}>ISSUE</th>
//             <th style={styles.th}>SEVERITY</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row, index) => (
//             <tr key={index} style={styles.row}>
//               <td style={styles.td}>{row.domain}</td>
//               <td style={styles.td}>{row.ip}</td>
//               <td style={styles.td}>{row.issue}</td>
//               <td style={styles.td}>
//                 <span style={getSeverityStyle(row.severity)}>{row.severity}</span>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// const styles: { [key: string]: React.CSSProperties } = {
//   container: {
//     border: '1px solid #ccc',
//     borderRadius: '8px',
//     overflow: 'hidden',
//     width: '100%',
//     backgroundColor: '#fff',
//   },
//   table: {
//     width: '100%',
//     borderCollapse: 'collapse',
//     fontFamily: 'Arial, sans-serif',
//   },
//   headerRow: {
//     backgroundColor: '#e5e7eb',
//   },
//   th: {
//     padding: '10px',
//     textAlign: 'left',
//     fontWeight: 'bold',
//     fontSize: '14px',
//     color: '#333',
//     borderBottom: '1px solid #ccc',
//   },
//   row: {
//     borderBottom: '1px solid #ddd',
//   },
//   td: {
//     padding: '10px',
//     fontSize: '14px',
//     color: '#333',
//   },
// };


'use client';
import React from 'react';

export default function SSLStatusTable() {
  const data = [
    {
      domain: 'centegytechnologies.com',
      ip: '110.93.216.182',
      issue: 'TLS1.0 Enabled',
      severity: 'High',
    },
    {
      domain: 'mail.centegytechnologies.com',
      ip: '69.174.114.243',
      issue: 'Expired SSL',
      severity: 'Critical',
    },
  ];

  const getSeverityStyle = (severity: string): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      padding: '4px 12px',
      borderRadius: '8px',
      color: 'white',
      fontWeight: 600,
      textAlign: 'center',
      display: 'inline-block',
      fontSize: '13px',
      minWidth: '70px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
    };

    if (severity === 'High') {
      return { ...baseStyle, backgroundColor: '#f68838' };
    } else if (severity === 'Critical') {
      return { ...baseStyle, backgroundColor: '#ee3e32' };
    } else {
      return { ...baseStyle, backgroundColor: '#888' };
    }
  };

  return (
    <div className="h-full flex flex-col p-4 lg:p-6">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-4 lg:mb-6 flex-shrink-0">
        <div className="p-2 lg:p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl shadow-lg flex-shrink-0">
          <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-lg lg:text-xl font-bold text-gray-900 tracking-tight">SSL Status Overview</h3>
          <p className="text-sm text-gray-600 font-medium">SSL certificate monitoring and alerts</p>
        </div>
      </div>

      {/* Table Container */}
      <div className="flex-1 overflow-auto px-2">
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <table className="min-w-full table-auto text-sm">
            <thead className="bg-gray-50">
          <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200 w-48">DOMAIN</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200 w-32">IP</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200">ISSUE</th>
                <th className="px-4 py-3 text-center font-semibold text-gray-700 border-b border-gray-200 w-24">SEVERITY</th>
          </tr>
        </thead>
        <tbody>
              {data.map((row, index) => (
                <tr key={index} className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50 text-sm">
                  <td className="px-4 py-3 font-medium text-gray-900">{row.domain}</td>
                  <td className="px-4 py-3 font-mono text-gray-700">{row.ip}</td>
                  <td className="px-4 py-3 text-gray-700">{row.issue}</td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`px-3 py-1 rounded-md text-xs font-semibold ${
                        row.severity === 'Critical'
                          ? 'bg-red-600 text-white'
                          : row.severity === 'High'
                          ? 'bg-orange-500 text-white'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {row.severity}
                    </span>
              </td>
            </tr>
          ))}

              {data.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center py-8 text-gray-400">
                    No SSL issues found
                  </td>
                </tr>
              )}
        </tbody>
      </table>
        </div>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    border: '1px solid #bfbfbf',
    borderRadius: '6px',
    overflow: 'hidden',
    width: '100%',
    backgroundColor: '#fff',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px',
  },
  th: {
    backgroundColor: '#e5e5e5',
    border: '1px solid #bfbfbf',
    padding: '10px 12px',
    textAlign: 'left',
    fontWeight: 700,
    color: '#333',
  },
  tr: {
    borderBottom: '1px solid #d9d9d9',
  },
  td: {
    border: '1px solid #d9d9d9',
    padding: '10px 12px',
    color: '#333',
    verticalAlign: 'middle',
  },
};
