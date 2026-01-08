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
    <div className="h-full flex flex-col p-4">
      <h3 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4 text-center">
        Ports Summary
      </h3>
      <div className="flex-1 overflow-auto">
        <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>DOMAIN</th>
            <th style={styles.th}>DEFAULT</th>
            <th style={styles.th}>CUSTOM</th>
            <th style={styles.th}>TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} style={styles.tr}>
              <td style={styles.td}>{row.domain}</td>
              <td style={styles.td}>{renderPorts(row.defaultPorts)}</td>
              <td style={styles.td}>{renderPorts(row.customPorts)}</td>
              <td style={{ ...styles.td, textAlign: 'center', fontWeight: 'bold' }}>
                {row.total}
              </td>
            </tr>
          ))}
        </tbody>
        </table>
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
