// 'use client';

// import DA_SummaryCards from '@/components/DA_SummaryCards';
// import DA_StatusPieCharts from '@/components/DA_StatusPieCharts';
// import DA_EventMap from '@/components/DA_EventMap';
// import DA_VerticalsBars from '@/components/DA_VerticalsBars';
// import DA_ConnectionsTable from '@/components/DA_ConnectionsTable';
// import SidebarLayout from '@/components/SidebarLayout';

// export default function DADashboardPage() {
//   return (
//     <SidebarLayout>
//       <div className="p-4 space-y-6">
//         {/* Top Summary Cards */}
//         <DA_SummaryCards />

//         {/* Middle Section with Responsive Layout */}
//         <div className="flex flex-col lg:flex-row gap-4">
//           <div className="flex-1 min-w-[300px]">
//             <DA_EventMap />
//           </div>
//           <div className="flex-1 min-w-[300px]">
//             <DA_StatusPieCharts />
//           </div>
//           <div className="flex-1 min-w-[300px]">
//             <DA_VerticalsBars />
//           </div>
//         </div>

//         {/* Bottom Table */}
//         <DA_ConnectionsTable />
//       </div>
//     </SidebarLayout>
//   );
// }


// 'use client';

// import DA_Multi_metric from '@/components/DA_Multi-metric';
// import SO_WorldMap from '@/components/SO_WorldMap';
// import StatusCodeDonut from '@/components/StatusCodeDonut';
// import SO_RuleTagsDonut from '@/components/SO_RuleTagsDonut';
// import SO_AlertRulesTable from '@/components/SO_AlertRulesTable';
// import SO_SeverityBar from '@/components/SO_SeverityBar';
// import SO_ConnectionsTable from '@/components/SO_ConnectionsTable';
// import SidebarLayout from '@/components/SidebarLayout';

// export default function SODashboard() {
//   return (
//     <SidebarLayout>
//       <main className="p-6 bg-gray-100 min-h-screen space-y-6">
//         {/* 🔳 Navbar */}
//         <div className="bg-white p-4 rounded-xl shadow border border-gray-200">
//           <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
//         </div>
//  {/* <SO_SummaryCards /> */}
//         {/* Row 1: Summary Cards + World Map + Severity Donut */}

//         <div className="grid grid-cols-12 gap-4">
//   {/* Make Pie Chart wider */}
//   <div className="col-span-7">
//     <DA_Multi_metric/>
//   </div>

//   {/* Make World Map smaller */}
//   <div className="col-span-5">
//     <SO_WorldMap />
//   </div>
// </div>


//          <div className="w-full">
//             {/* <SO_AlertRulesTable /> */}
//             <StatusCodeDonut/>
//             <StatusCodeDonut/>
//             <StatusCodeDonut/>
//             <StatusCodeDonut/>
//           </div>

//         {/* Row 3: Connections Table (Full Width) */}
//         <div className="w-full">
//           {/* <SO_ConnectionsTable /> */}
//         </div>
//       </main>
//     </SidebarLayout>
//   );
// }


// 'use client';

// import DA_Multi_metric from '@/components/DA_Multi-metric';
// import SO_WorldMap from '@/components/SO_WorldMap';
// import StatusCodeDonut from '@/components/StatusCodeDonut';
// import DA_GeoPairsBarChart from '@/components/DA_GeoPairsBarChart';
// import SO_AlertRulesTable from '@/components/SO_AlertRulesTable';
// import SO_SeverityBar from '@/components/SO_SeverityBar';
// import SO_ConnectionsTable from '@/components/SO_ConnectionsTable';
// import SidebarLayout from '@/components/SidebarLayout';

// export default function SODashboard() {
//   return (
//     <SidebarLayout>
//       <div className="space-y-8 animate-fade-in px-4 py-6">
//         {/* Modern Header with Gradient */}
//         <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 p-8 text-white shadow-2xl">
//           <div className="absolute inset-0 bg-black/10"></div>
//           <div className="relative z-10">
//             <h1 className="text-3xl lg:text-4xl font-bold mb-3 tracking-tight">
//               Security Operations Center
//             </h1>
//             <p className="text-blue-100 text-lg lg:text-xl opacity-90">
//               Real-time monitoring and threat intelligence dashboard
//             </p>
//           </div>
//           <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
//           <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
//         </div>

//         {/* Primary Metrics Row - Balanced Layout */}
//         <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
//           {/* Multi-Metric Chart - Takes 2 columns on XL */}
//           {/* <div className="xl:col-span-2">
//             <div className="dashboard-card h-[400px] lg:h-[450px]">
//               <DA_Multi_metric />
//             </div>
//           </div> */}

//  <div className="xl:col-span-1">
//             <div className="dashboard-card h-[400px] lg:h-[450px]">
//               <SO_WorldMap />
//             </div>
//           </div>

//           {/* World Map - Takes 1 column on XL */}
//           <div className="xl:col-span-1">
//             <div className="dashboard-card h-[400px] lg:h-[450px]">
//               <SO_WorldMap />
//             </div>
//           </div>
//         </div>

//         {/* Secondary Metrics Grid - Perfect Balance */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
//           {/* Three Status Donuts - Each takes 1 column */}
//           <div className="dashboard-card h-[320px] lg:h-[360px]">
//             <StatusCodeDonut />
//           </div>
//           <div className="dashboard-card h-[320px] lg:h-[360px]">
//             <StatusCodeDonut />
//           </div>
//           <div className="dashboard-card h-[320px] lg:h-[360px]">
//             <StatusCodeDonut />
//           </div>

//           {/* Geo Pairs Bar Chart - Takes 2 columns on XL */}
//           <div className="md:col-span-2 lg:col-span-2 xl:col-span-2">
//             <div className="dashboard-card h-[320px] lg:h-[360px]">
//               <DA_GeoPairsBarChart />
//             </div>
//           </div>
//         </div>

//         {/* Data Tables Section - Full Width */}
//         <div className="space-y-6">
//           {/* Future: Add data tables here if needed */}
//         </div>
//       </div>
//     </SidebarLayout>
//   );
// }


// 'use client';

// import DA_Multi_metric from '@/components/DA_Multi-metric';
// import SO_WorldMap from '@/components/SO_WorldMap';
// import StatusCodeDonut from '@/components/StatusCodeDonut';
// import DA_GeoPairsBarChart from '@/components/DA_GeoPairsBarChart';
// import SidebarLayout from '@/components/SidebarLayout';
// import DA_VulnerabilityHeatmap from '@/components/DA_VulnerabilityHeatmap';


// export default function SODashboard() {
//   return (
//     <SidebarLayout>
//       <div className="space-y-8 animate-fade-in px-4 py-6">

//         {/* ================= HEADER ================= */}
//         <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 p-8 text-white shadow-2xl">
//           <div className="absolute inset-0 bg-black/10"></div>

//           <div className="relative z-10">
//             <h1 className="text-3xl lg:text-4xl font-bold mb-3 tracking-tight">
//               Security Operations Center
//             </h1>
//             <p className="text-blue-100 text-lg lg:text-xl opacity-90">
//               Real-time monitoring and threat intelligence dashboard
//             </p>
//           </div>
//         </div>

//         {/* ================= WORLD MAPS (50 / 50) ================= */}
//         <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">

//           <div className="dashboard-card h-[400px] lg:h-[450px]">
//             <SO_WorldMap />
//           </div>

//           <div className="dashboard-card h-[400px] lg:h-[450px]">
//             <DA_VulnerabilityHeatmap />
//           </div>

//         </div>

//         {/* ================= SECONDARY METRICS ================= */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">

//           <div className="dashboard-card h-[320px] lg:h-[360px]">
//             <StatusCodeDonut />
//           </div>

//           <div className="dashboard-card h-[320px] lg:h-[360px]">
//             <StatusCodeDonut />
//           </div>

//           <div className="dashboard-card h-[320px] lg:h-[360px]">
//             <StatusCodeDonut />
//           </div>

//           {/* <div className="md:col-span-2 lg:col-span-2 xl:col-span-2">
//             <div className="dashboard-card h-[320px] lg:h-[360px]">
//               <DA_GeoPairsBarChart />
//             </div>
//           </div> */}

//         </div>

//       </div>
//     </SidebarLayout>
//   );
// }


'use client';

import DA_Multi_metric from '@/components/DA_Multi-metric';
import SO_WorldMap from '@/components/SO_WorldMap';
import StatusCodeTable from '@/components/StatusCodeTable';
import StatusCodeTable2 from '@/components/StatusCodeTable2';
import SidebarLayout from '@/components/SidebarLayout';
import DA_VulnerabilityHeatmap from '@/components/DA_VulnerabilityHeatmap';
import DA_AlertRulesTable from '@/components/DA_AlertRulesTable';
import DA_RecentLogsTable from '@/components/DA_RecentLogsTable';
import DA_Disconnectedagent from '@/components/DA_Disconnectedagent';
import DA_VulnerabilityScoreTable from '@/components/DA_VulnerabilityScoreTable';






export default function SODashboard() {
  return (
    <SidebarLayout>
      <div className="space-y-8 animate-fade-in px-4 py-6">

        {/* ================= HEADER ================= */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 p-8 text-white shadow-2xl">
          <div className="absolute inset-0 bg-black/10"></div>

          <div className="relative z-10">
            <h1 className="text-3xl lg:text-4xl font-bold mb-3 tracking-tight">
              Security Operations Center
            </h1>
            <p className="text-blue-100 text-lg lg:text-xl opacity-90">
              Real-time monitoring and threat intelligence dashboard
            </p>
          </div>
        </div>

        {/* ================= PRIMARY ROW (50 / 50) ================= */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">

          <div className="dashboard-card h-[400px] lg:h-[450px]">
            <SO_WorldMap />
          </div>

          <div className="dashboard-card h-[400px] lg:h-[450px]">
            <DA_VulnerabilityHeatmap />
          </div>

        </div>

        {/* ================= TABLES SECTION ================= */}
        <div className="grid gap-6" style={{ gridTemplateColumns: '1fr 1fr' }}>
          {/* Left Column - Alert Rules + Recent Logs */}
          <div className="flex flex-col gap-8">
            <div className="dashboard-card min-h-[350px]">
              <h2 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4 text-center pt-4">
                Top Alert Rules
              </h2>
              <div className="px-4 pb-4 h-64 overflow-y-auto">
                <DA_AlertRulesTable />
              </div>
            </div>
            <div className="dashboard-card min-h-[350px] -mt-2">
              <h2 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4 text-center pt-4">
                Recent Logs Summary
              </h2>
              <div className="px-4 pb-4 h-64 overflow-y-auto">
                <DA_RecentLogsTable />
              </div>
            </div>
            <div className="dashboard-card min-h-[250px] -mt-2">
              <h2 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4 text-center pt-4">
                HTTP Response Analysis
              </h2>
              <div className="px-4 pb-4 h-64 overflow-y-auto">
                <StatusCodeTable2 />
              </div>
            </div>
          </div>

          {/* Right Column - Vulnerability Score + Status Code + Disconnected Agents */}
          <div className="flex flex-col gap-8">
            <div className="dashboard-card min-h-[350px]">
              <h2 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4 text-center pt-4">
                Vulnerability Score Overview
              </h2>
              <div className="px-4 pb-4 h-64 overflow-y-auto">
                <DA_VulnerabilityScoreTable />
              </div>
            </div>
            <div className="dashboard-card min-h-[350px] -mt-2">
              <h2 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4 text-center pt-4">
                Disconnected Wazuh Agents
              </h2>
              <div className="px-4 pb-4 h-64 overflow-y-auto">
                <DA_Disconnectedagent />
              </div>
            </div>
            <div className="dashboard-card min-h-[250px] -mt-2">
              <h2 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4 text-center pt-4">
                Status Code Distribution
              </h2>
              <div className="px-4 pb-4 h-64 overflow-y-auto">
                <StatusCodeTable />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </SidebarLayout>
  );
}
