'use client';

import { useEffect, useState } from 'react';
import SidebarLayout from '@/components/SidebarLayout';
import AgentCounterCards from '@/components/Agent_CounterCards';
import AgentServerEnvironmentPie from '@/components/Agent_ServerEnvironmentPie';
import AgentDepartmentEnvironmentPie from '@/components/Agent_DepartmentEnvironmentPie'
import AgentSeverityBar from '@/components/Agent_SeverityBar';
import AgentCveDetailsTable from '@/components/Agent_CveDetailsTable';

export default function DashboardPage() {
  const [data, setData] = useState({
    cve_count: 0,
    vulnerability_count: 0,
    server_count: 0,
  });

  return (
    <SidebarLayout>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div className="card card-hover">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
            Agent Dashboard
          </h1>
          <p className="text-gray-600 text-sm lg:text-base">
            Agent deployment and monitoring across your infrastructure
          </p>
        </div>

        {/* Counter Cards */}
        <AgentCounterCards />

        {/* Charts Row - Responsive */}
        <div className="grid-responsive-3 section-spacing">
          <div className="card card-hover">
            <AgentDepartmentEnvironmentPie />
          </div>
          <div className="card card-hover">
            <AgentSeverityBar />
          </div>
          <div className="card card-hover">
            <AgentServerEnvironmentPie />
          </div>
        </div>

        {/* CVE Details Table - Full Width */}
        <div className="card card-hover">
          <div className="mobile-scroll">
            <AgentCveDetailsTable />
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
    gridTemplateColumns: '1fr 1fr 1fr',
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
