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
    <div style={styles.wrapper}>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>DOMAIN</th>
            <th style={styles.th}>IP</th>
            <th style={styles.th}>ISSUE</th>
            <th style={styles.th}>SEVERITY</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} style={styles.tr}>
              <td style={styles.td}>{row.domain}</td>
              <td style={styles.td}>{row.ip}</td>
              <td style={styles.td}>{row.issue}</td>
              <td style={styles.td}>
                <span style={getSeverityStyle(row.severity)}>{row.severity}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
