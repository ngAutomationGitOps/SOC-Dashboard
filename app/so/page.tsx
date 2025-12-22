'use client';

import SO_SummaryCards from '@/components/SO_SummaryCards';
import SO_WorldMap from '@/components/SO_WorldMap';
import SO_SeverityDonut from '@/components/SO_SeverityDonut';
import SO_RuleTagsDonut from '@/components/SO_RuleTagsDonut';
import SO_AlertRulesTable from '@/components/SO_AlertRulesTable';
import SO_SeverityBar from '@/components/SO_SeverityBar';
import SO_ConnectionsTable from '@/components/SO_ConnectionsTable';
import SidebarLayout from '@/components/SidebarLayout';

export default function SODashboard() {
  return (
    <SidebarLayout>
      <div className="space-y-8 animate-fade-in px-4 py-6">
        {/* Modern Header with Gradient */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-green-600 via-teal-600 to-cyan-700 p-8 text-white shadow-2xl">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h1 className="text-3xl lg:text-4xl font-bold mb-3 tracking-tight">
              Security Operations
            </h1>
            <p className="text-green-100 text-lg lg:text-xl opacity-90">
              Advanced threat detection and incident response monitoring
            </p>
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        </div>

        {/* Summary Cards */}
        <SO_SummaryCards />

        {/* Primary Charts Row - Balanced Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
          {/* Severity Donut - Takes 1 column */}
          <div className="dashboard-card h-[400px] lg:h-[450px]">
            <SO_SeverityDonut />
          </div>

          {/* World Map - Takes 1 column */}
          <div className="dashboard-card h-[400px] lg:h-[450px]">
            <SO_WorldMap />
          </div>
        </div>

        {/* Data Tables Section - Full Width */}
        <div className="space-y-6">
          {/* Alert Rules Table */}
          <div className="dashboard-card">
            <SO_AlertRulesTable />
          </div>

          {/* Connections Table */}
          <div className="dashboard-card">
            <SO_ConnectionsTable />
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
}
