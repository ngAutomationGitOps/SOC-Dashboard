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
        <div className="animate-fade-in">
          <EventCounterCards />
        </div>

        {/* Global Event Map - Full Width */}
        <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="dashboard-card h-[500px] lg:h-[550px] xl:h-[600px]">
            <EventMap />
          </div>
        </div>

        {/* Charts Section - 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Status Code Donut */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <StatusCodeDonut />
          </div>

          {/* Environment Donut */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <EnvironmentDonut />
          </div>

          {/* Target User Bar */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <TargetUserBar />
          </div>

          {/* Source IP Bar */}
          <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <SourceIpBar />
          </div>
        </div>

        {/* Data Tables Section - Full Width */}
        <div className="space-y-6">
          {/* Impacted Servers Table */}
          <div className="dashboard-card animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <ImpactedServersTable />
          </div>

          {/* Recent Logs Table */}
          <div className="dashboard-card animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <RecentLogsTable />
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
}
