'use client';

import SidebarLayout from '@/components/SidebarLayout';
import AgentCounterCards from '@/components/Agent_CounterCards';
import AgentServerEnvironmentPie from '@/components/Agent_ServerEnvironmentPie';
import AgentDepartmentEnvironmentPie from '@/components/Agent_DepartmentEnvironmentPie'
import AgentSeverityBar from '@/components/Agent_SeverityBar';
import AgentCveDetailsTable from '@/components/Agent_CveDetailsTable';

export default function DashboardPage() {

  return (
    <SidebarLayout>
      <div className="space-y-8 animate-fade-in px-4 py-6">
        {/* Modern Header with Gradient */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 p-8 text-white shadow-2xl">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h1 className="text-3xl lg:text-4xl font-bold mb-3 tracking-tight">
              Agent Management Dashboard
            </h1>
            <p className="text-cyan-100 text-lg lg:text-xl opacity-90">
              Comprehensive agent deployment and monitoring across your infrastructure
            </p>
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        </div>

        {/* Counter Cards */}
        <AgentCounterCards />

        {/* Charts Row - Responsive */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
          <div className="dashboard-card h-[500px] lg:h-[550px]">
            <AgentDepartmentEnvironmentPie />
          </div>
          <div className="dashboard-card h-[500px] lg:h-[550px]">
            <AgentSeverityBar />
          </div>
          <div className="dashboard-card h-[500px] lg:h-[550px]">
            <AgentServerEnvironmentPie />
          </div>
        </div>

        {/* CVE Details Table - Full Width */}
        <div className="dashboard-card">
          <AgentCveDetailsTable />
        </div>
      </div>
    </SidebarLayout>
  );
}

