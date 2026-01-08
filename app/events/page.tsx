'use client';

import SidebarLayout from '@/components/SidebarLayout';
import EventCounterCards from '@/components/EventCounterCards';
import StatusCodeDonut from '@/components/StatusCodeDonut';
import EnvironmentDonut from '@/components/EnvironmentDonut';
import TargetUserBar from '@/components/TargetUserBar';
import SourceIpBar from '@/components/SourceIpBar';
import ImpactedServersTable from '@/components/ImpactedServersTable';
import RecentLogsTable from '@/components/RecentLogsTable';
import EventMap from '@/components/EventMap';

export default function EventPage() {
  return (
    <SidebarLayout>
      <div className="space-y-8 animate-fade-in px-4 py-6">

        {/* Modern Header with Gradient */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 p-8 text-white shadow-2xl">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h1 className="text-3xl lg:text-4xl font-bold mb-3 tracking-tight">
              Event Monitoring Dashboard
            </h1>
            <p className="text-blue-100 text-lg lg:text-xl opacity-90">
              Real-time event tracking and security incident monitoring
            </p>
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        </div>

        {/* Counter Cards */}
        <EventCounterCards />

        {/* Primary Charts Row - Balanced Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
          {/* Event Map - Takes 1 column */}
          <div className="dashboard-card h-[400px] lg:h-[450px]">
            <EventMap />
          </div>

          {/* Status Code Donut - Takes 1 column */}
          <div className="dashboard-card h-[400px] lg:h-[450px]">
            <StatusCodeDonut />
          </div>
        </div>

        {/* Secondary Charts Grid - Perfect Balance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Target User Bar */}
          <div className="dashboard-card h-[320px] lg:h-[360px]">
            <TargetUserBar />
          </div>

          {/* Environment Donut */}
          <div className="dashboard-card h-[320px] lg:h-[360px]">
            <EnvironmentDonut />
          </div>

          {/* Source IP Bar */}
          <div className="dashboard-card h-[320px] lg:h-[360px]">
            <SourceIpBar />
          </div>
        </div>

        {/* Data Tables Section - Full Width */}
        <div className="space-y-6">
          {/* Impacted Servers Table */}
          <div className="dashboard-card">
            <ImpactedServersTable />
          </div>

          {/* Recent Logs Table */}
          <div className="dashboard-card">
            <RecentLogsTable />
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
}
