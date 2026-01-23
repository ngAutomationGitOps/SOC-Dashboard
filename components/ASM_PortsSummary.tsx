// 'use client';
// import React from 'react';

// export default function PortsSummaryTable() {
//   const data = [
//     {
//       domain: 'tw1.centegytechnologies.com',
//       defaultPorts: [25, 80, 110, 115, 143, 443, 465, 993, 995],
//       customPorts: [27, 160],
//       total: 11,
//     },
//     {
//       domain: 'webmail.centegytechnologies.com',
//       defaultPorts: [25, 80, 110, 115, 143, 443, 465, 993, 995],
//       customPorts: [27, 160],
//       total: 11,
//     },
//   ];

//   // 🎨 Color list for port pills
//   const colors = [
//     '#7e57c2', // Purple
//     '#039be5', // Blue
//     '#d32f2f', // Red
//     '#43a047', // Green
//     '#ff9800', // Orange
//     '#8e24aa', // Violet
//     '#009688', // Teal
//     '#c62828', // Dark Red
//     '#1976d2', // Deep Blue
//   ];

//   const renderPorts = (ports: number[]) => (
//     <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
//       {ports.map((port, i) => (
//         <span
//           key={i}
//           style={{
//             backgroundColor: colors[i % colors.length],
//             color: '#fff',
//             borderRadius: '8px',
//             padding: '3px 8px',
//             fontSize: '13px',
//             fontWeight: 600,
//             display: 'inline-block',
//             minWidth: '30px',
//             textAlign: 'center',
//           }}
//         >
//           {port}
//         </span>
//       ))}
//     </div>
//   );

//   return (
//     <div style={styles.container}>
//       <table style={styles.table}>
//         <thead>
//           <tr>
//             <th style={styles.th}>DOMAIN</th>
//             <th style={styles.th}>DEFAULT</th>
//             <th style={styles.th}>CUSTOM</th>
//             <th style={styles.th}>TOTAL</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row, i) => (
//             <tr key={i} style={styles.tr}>
//               <td style={styles.td}>{row.domain}</td>
//               <td style={styles.td}>{renderPorts(row.defaultPorts)}</td>
//               <td style={styles.td}>{renderPorts(row.customPorts)}</td>
//               <td style={{ ...styles.td, textAlign: 'center', fontWeight: 'bold' }}>
//                 {row.total}
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
//     border: '1px solid #bfbfbf',
//     borderRadius: '6px',
//     overflow: 'hidden',
//     width: '100%',
//     backgroundColor: '#fff',
//   },
//   table: {
//     width: '100%',
//     borderCollapse: 'collapse',
//     fontFamily: 'Arial, sans-serif',
//     fontSize: '14px',
//   },
//   th: {
//     backgroundColor: '#e5e5e5',
//     border: '1px solid #bfbfbf',
//     padding: '10px 12px',
//     textAlign: 'left',
//     fontWeight: 700,
//     color: '#333',
//   },
//   tr: {
//     borderBottom: '1px solid #d9d9d9',
//   },
//   td: {
//     border: '1px solid #d9d9d9',
//     padding: '10px 12px',
//     color: '#333',
//     verticalAlign: 'middle',
//   },
// };


'use client';
import React from 'react';

export default function PortsSummaryTable() {
  const data = [
    {
      domain: 'tw1.centegytechnologies.com',
      defaultPorts: [25, 80, 110, 115, 143, 443, 465, 993, 995],
      customPorts: [27, 160],
      total: 11,
    },
    {
      domain: 'webmail.centegytechnologies.com',
      defaultPorts: [25, 80, 110, 115, 143, 443, 465, 993, 995],
      customPorts: [27, 160],
      total: 11,
    },
  ];

  // 🎨 Simple solid color mapping for ports
  const portColors: Record<number, string> = {
    21: '#ef5350', // FTP - red
    25: '#5c6bc0', // SMTP - indigo
    53: '#ab47bc', // DNS - purple
    80: '#29b6f6', // HTTP - blue
    110: '#ec407a', // POP3 - pink
    115: '#ba68c8', // SFTP - violet
    143: '#ffb300', // IMAP - amber
    443: '#26a69a', // HTTPS - teal
    465: '#66bb6a', // SMTPS - green
    993: '#9ccc65', // IMAPS - lime
    995: '#26c6da', // POP3S - cyan
    27: '#ef5350', // Custom - red
    160: '#d32f2f', // Custom - dark red
  };

  const renderPorts = (ports: number[]) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
      {ports.map((port, i) => (
        <span
          key={i}
          style={{
            backgroundColor: portColors[port] || '#757575',
            color: '#fff',
            borderRadius: '8px',
            padding: '3px 8px',
            fontSize: '13px',
            fontWeight: 600,
            display: 'inline-block',
            minWidth: '30px',
            textAlign: 'center',
          }}
        >
          {port}
        </span>
      ))}
    </div>
  );

  return (
    <div className="h-full flex flex-col p-4 lg:p-6">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-4 lg:mb-6 flex-shrink-0">
        <div className="p-2 lg:p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg flex-shrink-0">
          <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
          </svg>
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-lg lg:text-xl font-bold text-gray-900 tracking-tight">Ports Summary</h3>
          <p className="text-sm text-gray-600 font-medium">Open ports analysis by domain</p>
        </div>
      </div>

      {/* Table Container */}
      <div className="flex-1 overflow-auto px-2">
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <table className="min-w-full table-auto text-sm">
            <thead className="bg-gray-50">
          <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200 w-48">DOMAIN</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200">DEFAULT</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200">CUSTOM</th>
                <th className="px-4 py-3 text-center font-semibold text-gray-700 border-b border-gray-200 w-20">TOTAL</th>
          </tr>
        </thead>
        <tbody>
              {data.map((row, index) => (
                <tr key={index} className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50 text-sm">
                  <td className="px-4 py-3 font-medium text-gray-900">{row.domain}</td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-2">
                      {row.defaultPorts.map((port, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 rounded-md text-xs font-semibold text-white"
                          style={{ backgroundColor: portColors[port] || '#757575' }}
                        >
                          {port}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-2">
                      {row.customPorts.map((port, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 rounded-md text-xs font-semibold text-white"
                          style={{ backgroundColor: portColors[port] || '#757575' }}
                        >
                          {port}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center font-bold text-gray-900">
                {row.total}
              </td>
            </tr>
          ))}

              {data.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center py-8 text-gray-400">
                    No port data available
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
  container: {
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
