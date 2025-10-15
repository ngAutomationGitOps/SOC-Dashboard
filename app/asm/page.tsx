// 'use client';

// import React from 'react';
// import CounterCards from '@/components/ASM_CounterCards';
// import PortsRow from '@/components/ASM_IssuesTable';
// import VulnerabilityScoreTable from '@/components/ASM_VulnerabilityScoreTable';
// import VulnerabilitiesChart from '@/components/ASM_VulnerabilitiesChart';
// import SSLStatusChart from '@/components/ASM_SSLStatusChart';
// import IssuesTable from '@/components/ASM_IssuesTable';
// import PortsSummaryTable from '@/components/ASM_PortsSummaryTable';

// export default function AttackSurfacePage() {
//   return (
//     <div style={styles.page}>
//       <div style={styles.navbar}>
//         <h1 style={styles.title}>Attack Surface Dashboard</h1>
//       </div>

//       <CounterCards />
//       <PortsRow />

//       <div style={styles.grid}>
//         <VulnerabilitiesChart />
//         <SSLStatusChart />
//         <VulnerabilityScoreTable />
//       </div>

//       <div style={styles.grid}>
//         <IssuesTable />
//         <PortsSummaryTable />
//       </div>
//     </div>
//   );
// }

// const styles: { [key: string]: React.CSSProperties } = {
//   page: {
//     padding: '24px',
//     backgroundColor: '#f3f4f6',
//     minHeight: '100vh',
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '24px',
//   },
//   navbar: {
//     backgroundColor: '#ffffff',
//     padding: '16px 24px',
//     borderRadius: '12px',
//     boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//     border: '1px solid #e5e7eb',
//   },
//   title: { fontSize: '26px', fontWeight: 700, margin: 0 },
//   grid: {
//     display: 'grid',
//     gridTemplateColumns: '1fr 1fr 1fr',
//     gap: '24px',
//   },
// };






// import React from 'react';
// import SidebarLayout from '@/components/SidebarLayout';
// import CounterCards from '@/components/ASM_CounterCards';
// import PortsRow from '@/components/ASM_PortsRow';
// import VulnerabilityScoreTable from '@/components/ASM_VulnerabilityScoreTable';
// import VulnerabilitiesChart from '@/components/ASM_VulnerabilitiesChart';
// import SSLStatusChart from '@/components/ASM_SSLStatusChart';
// import IssuesTable from '@/components/ASM_IssuesTable';
// import PortsSummaryTable from '@/components/ASM_PortsSummaryTable';

// export default function Page() {
//   return (
//         <SidebarLayout>
    
//     {/* <div className="p-6 bg-gray-100 min-h-screen"> */}
//       <h1 className="text-2xl font-bold mb-6">Attack Surface Management</h1>

      

//       <CounterCards />
//       <PortsRow />

//       <div className="grid grid-cols-3 gap-4 mb-4">
//         <div className="col-span-1">
//           <VulnerabilityScoreTable />
//         </div>
//         <div className="col-span-1">
//           <VulnerabilitiesChart />
//         </div>
//         <div className="col-span-1">
//           <SSLStatusChart />
//         </div>
//       </div>

//       <div className="grid grid-cols-2 gap-4">
//         <IssuesTable />
//         <PortsSummaryTable />

//       </div>
//     {/* </div> */}
//     </SidebarLayout>
    
//   );
// }



// 'use client';

// import { useEffect, useState } from 'react';
// import SidebarLayout from '@/components/SidebarLayout';
// import CounterCards from '@/components/ASM_CounterCards';
// import PortsRow from '@/components/ASM_PortsRow';
// import VulnerabilityScoreTable from '@/components/ASM_VulnerabilityScoreTable';
// import VulnerabilitiesChart from '@/components/ASM_VulnerabilitiesChart';
// import AgentSeverityBar from '@/components/Agent_SeverityBar';
// import SSLStatusChart from '@/components/ASM_SSLStatusChart';
// import AgentCveDetailsTable from '@/components/Agent_CveDetailsTable';
// import AgentServerEnvironmentPie from '@/components/Agent_ServerEnvironmentPie';




// export default function DashboardPage() {
//   const [data, setData] = useState({
//     cve_count: 0,
//     vulnerability_count: 0,
//     server_count: 0,
//   });

//   return (
//     <SidebarLayout>
//       <div style={styles.page}>
//         <div style={styles.navbar}>
//           <h1 style={styles.title}>Attack Surface Management</h1>
//         </div>

//         {/* ✅ CounterCards full-width */}
//         <div style={{ width: '100%' }}>
//           <CounterCards/>
//           <PortsRow/>
//         </div>

//         {/* ✅ One row with EnvironmentPie, SeverityBar, EnvironmentPie */}
//         <div style={styles.threeGrid}>
//           <div style={styles.card}>
//             <VulnerabilityScoreTable />
//           </div>
//           <div style={styles.card}>
//             <VulnerabilitiesChart />
//           </div>
//           <div style={styles.card}>
//             {/* < SSLStatusChart/> */}
//                <AgentServerEnvironmentPie />
//           </div>
//         </div>

//         {/* ✅ CVE Details Table full width */}
//         {/* <div style={{ ...styles.card, overflowX: 'auto', width: '100%' }}>
//           <div style={{ minWidth: '100%', overflowX: 'auto' }}>
//             <AgentCveDetailsTable />
//           </div>
//         </div> */}
//          <div style={styles.twoGrid}>
//           <div style={styles.card}>
//             <VulnerabilityScoreTable />
//           </div>
//           <div style={styles.card}>
//             <VulnerabilitiesChart />
//           </div>
//         </div>

//       </div>
//     </SidebarLayout>
//   );
// }

// const styles: { [key: string]: React.CSSProperties } = {
//   page: {
//     padding: '24px',
//     backgroundColor: '#f3f4f6',
//     minHeight: '100vh',
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '24px',
//   },
//   navbar: {
//     backgroundColor: '#ffffff',
//     padding: '16px 24px',
//     borderRadius: '12px',
//     boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//     border: '1px solid #e5e7eb',
//     textAlign: 'left',
//   },
//   title: {
//     fontSize: '26px',
//     fontWeight: 700,
//     color: '#1f2937',
//     margin: 0,
//   },
//   threeGrid: {
//     display: 'grid',
//     gridTemplateColumns: '1fr 1fr 1fr',
//     gap: '24px',
//   },
//   card: {
//     backgroundColor: '#ffffff',
//     borderRadius: '12px',
//     boxShadow: '0 1px 4px rgba(0, 0, 0, 0.1)',
//     border: '1px solid #e5e7eb',
//     padding: '20px',
//     marginBottom: '24px',
//   },
// };


'use client';

import { useEffect, useState } from 'react';
import SidebarLayout from '@/components/SidebarLayout';
import CounterCards from '@/components/ASM_CounterCards';
import PortsRow from '@/components/ASM_PortsRow';
import VulnerabilityScoreTable from '@/components/ASM_VulnerabilityScoreTable';
import VulnerabilitiesChart from '@/components/ASM_VulnerabilitiesChart';
import PortsSummary from '@/components/ASM_PortsSummary';
import SSLStatusTable from '@/components/ASM_SSLStatusTable';
import AgentServerEnvironmentPie from '@/components/Agent_ServerEnvironmentPie';

export default function DashboardPage() {
  const [data, setData] = useState({
    cve_count: 0,
    vulnerability_count: 0,
    server_count: 0,
  });

  return (
    <SidebarLayout>
      <div style={styles.page}>
        {/* Navbar */}
        <div style={styles.navbar}>
          <h1 style={styles.title}>Attack Surface Management</h1>
        </div>

        {/* ✅ CounterCards and Ports Row */}
        <div style={{ width: '100%' }}>
          <CounterCards />
          <PortsRow />
        </div>

        {/* ✅ 3-Grid Row */}
        <div style={styles.threeGrid}>
          <div style={styles.card}>
            <VulnerabilityScoreTable />
          </div>
          <div style={styles.card}>
            <VulnerabilitiesChart />
          </div>
          <div style={styles.card}>
            <AgentServerEnvironmentPie />
          </div>
        </div>

        {/* ✅ 2-Grid Row */}
        <div style={styles.twoGrid}>
          <div style={styles.card}>
            <SSLStatusTable />
          </div>
          <div style={styles.card}>
            <PortsSummary />
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    padding: '24px',
    backgroundColor: '#f3f4f6',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  navbar: {
    backgroundColor: '#ffffff',
    padding: '16px 24px',
    borderRadius: '12px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    border: '1px solid #e5e7eb',
    textAlign: 'left',
  },
  title: {
    fontSize: '26px',
    fontWeight: 700,
    color: '#1f2937',
    margin: 0,
  },
  threeGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
  },
  twoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '24px',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 1px 4px rgba(0, 0, 0, 0.1)',
    border: '1px solid #e5e7eb',
    padding: '20px',
    marginBottom: '24px',
  },
};
