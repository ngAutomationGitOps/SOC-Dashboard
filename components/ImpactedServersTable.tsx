'use client';

import React, { useEffect, useState } from 'react';

type Server = {
  Hostname: string;
  Ip_Address: string;
  Server_Name: string;
  status: string;
  owner: string | null;
  environment: string | null;
  count: number;
};

const statusColors: Record<string, string> = {
  Online: 'bg-green-500',
  Offline: 'bg-red-500',
  Maintenance: 'bg-yellow-400',
};

export default function ImpactedServersTable() {
  const [servers, setServers] = useState<Server[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE}/impacted-servers`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.data) {
          setServers(data.data);
        }
      })
      .catch((err) => console.error('Error fetching servers:', err))
      .finally(() => setLoading(false));
  }, []);

  const mapStatus = (status: string) => {
    if (status.toLowerCase() === 'active') return 'Online';
    if (status.toLowerCase() === 'disconnected') return 'Offline';
    return status;
  };

  if (loading) {
    return <div className="p-4">Loading impacted servers...</div>;
  }

  return (
    <div className="relative">
      {/* Chart Container with Gradient Background */}
      <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg border border-gray-100">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            Impacted Servers
          </h3>
          <p className="text-sm text-gray-600">
            Servers affected by security events and incidents
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex flex-col items-center justify-center h-120 space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="text-gray-500 font-medium">Loading server data...</p>
          </div>
        ) : servers.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-120 space-y-4">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            <p className="text-gray-500 font-medium">No impacted servers found</p>
          </div>
        ) : (
          <div className="h-120 overflow-hidden">
            {/* Responsive wrapper */}
            <div className="overflow-x-auto overflow-y-auto h-full">
              <table className="min-w-[800px] w-full text-sm text-left border-collapse">
                <thead className="sticky top-0 z-10">
                  <tr className="bg-slate-50/80 backdrop-blur-sm border-b border-slate-200">
                    <th className="p-3 font-semibold text-slate-700 text-left">Hostname</th>
                    <th className="p-3 font-semibold text-slate-700 text-left">Server Name</th>
                    <th className="p-3 font-semibold text-slate-700 text-left">IP Address</th>
                    <th className="p-3 font-semibold text-slate-700 text-left">Status</th>
                    <th className="p-3 font-semibold text-slate-700 text-left">Department</th>
                    <th className="p-3 font-semibold text-slate-700 text-left">Environment</th>
                    <th className="p-3 font-semibold text-slate-700 text-left">Events</th>
                  </tr>
                </thead>
                <tbody>
                  {servers.map((server) => {
                    const statusLabel = mapStatus(server.status);
                    return (
                      <tr key={server.Hostname} className="hover:bg-slate-50/50 transition-colors duration-150 border-b border-slate-100">
                        <td className="p-3 text-slate-700 font-medium">{server.Hostname}</td>
                        <td className="p-3 text-slate-600">{server.Server_Name}</td>
                        <td className="p-3 text-slate-600 font-mono text-sm">{server.Ip_Address}</td>
                        <td className="p-3">
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                            statusLabel === 'Online' ? 'bg-green-100 text-green-800' :
                            statusLabel === 'Offline' ? 'bg-red-100 text-red-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {statusLabel}
                          </span>
                        </td>
                        <td className="p-3 text-slate-600">{server.owner || '-'}</td>
                        <td className="p-3 text-slate-600">{server.environment || '-'}</td>
                        <td className="p-3 text-slate-700 font-semibold">{server.count}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
