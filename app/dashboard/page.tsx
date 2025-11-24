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


'use client';

import DA_Multi_metric from '@/components/DA_Multi-metric';
import SO_WorldMap from '@/components/SO_WorldMap';
import StatusCodeDonut from '@/components/StatusCodeDonut';
import DA_GeoPairsBarChart from '@/components/DA_GeoPairsBarChart';
import SO_AlertRulesTable from '@/components/SO_AlertRulesTable';
import SO_SeverityBar from '@/components/SO_SeverityBar';
import SO_ConnectionsTable from '@/components/SO_ConnectionsTable';
import SidebarLayout from '@/components/SidebarLayout';

export default function SODashboard() {
  return (
    <SidebarLayout>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div className="card card-hover">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
            Security Operations Dashboard
          </h1>
          <p className="text-gray-600 text-sm lg:text-base">
            Comprehensive view of your security operations and threat landscape
          </p>
        </div>

        {/* Main Charts Row - Responsive */}
        <div className="grid-responsive-2 section-spacing">
          <div className="card card-hover">
            <DA_Multi_metric />
          </div>
          <div className="card card-hover">
            <SO_WorldMap />
          </div>
        </div>

        {/* Metrics Cards - Fully Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 section-spacing">
          <div className="card card-hover">
            <StatusCodeDonut />
          </div>
          <div className="card card-hover">
            <StatusCodeDonut />
          </div>
          <div className="card card-hover">
            <StatusCodeDonut />
          </div>
          <div className="card card-hover">
            <StatusCodeDonut />
          </div>
          <div className="card card-hover">
            <DA_GeoPairsBarChart />
          </div>
        </div>

        {/* Tables Section - Full Width */}
        <div className="space-y-4">
          {/* Future: SO_ConnectionsTable can go here */}
        </div>
      </div>
    </SidebarLayout>
  );
}
