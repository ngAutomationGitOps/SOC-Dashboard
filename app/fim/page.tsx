
'use client';

import SidebarLayout from '@/components/SidebarLayout';
import FimCounterCard from '@/components/FimCounterCard';
import FimEventBar from '@/components/FimEventBar';
import FimEnvironmentDonut from '@/components/FimEnvironmentDonut';
import FimEventDonut from '@/components/FimEventDonut';
import FimDetailsTable from '@/components/FimDetailsTable';

export default function FimPage() {
  return (
    <SidebarLayout>
      <div className="space-y-8 animate-fade-in px-4 py-6">

        {/* Modern Header with Gradient */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 p-8 text-white shadow-2xl">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h1 className="text-3xl lg:text-4xl font-bold mb-3 tracking-tight">
              File Integrity Monitoring
            </h1>
            <p className="text-emerald-100 text-lg lg:text-xl opacity-90">
              Real-time file system monitoring and integrity verification
            </p>
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        </div>

        {/* Counter Cards */}
        <FimCounterCard />

        {/* Main Charts Row - Balanced Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Column: Event Bar Chart */}
          <div className="dashboard-card h-[400px] lg:h-[450px]">
            <FimEventBar />
          </div>

          {/* Middle Column: Environment Donut */}
          <div className="dashboard-card h-[400px] lg:h-[450px]">
            <FimEnvironmentDonut />
          </div>

          {/* Right Column: Event Donut */}
          <div className="dashboard-card h-[400px] lg:h-[450px]">
            <FimEventDonut />
          </div>
        </div>

        {/* Data Tables Section - Full Width */}
        <div className="dashboard-card">
          <FimDetailsTable />
        </div>

      </div>
    </SidebarLayout>
  );
}
