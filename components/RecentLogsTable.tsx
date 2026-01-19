'use client';

import React, { useEffect, useState } from 'react';

type LogItem = {
  TimeStamp: string;
  Message: string;
  severity?: string;
};

const severityColors: Record<string, string> = {
  High: 'bg-red-500',
  Medium: 'bg-yellow-400',
  Info: 'bg-blue-500',
};

export default function RecentLogsTable() {
  const [logs, setLogs] = useState<LogItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE}/recent-events`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.data) {
          const processed = data.data.map((item: LogItem) => {
            return {
              ...item,
              severity: 'High', // 🔥 Hardcoded to High
            };
          });
          setLogs(processed);
        }
      })
      .catch((err) => console.error('Error fetching logs:', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="relative">
      {/* Chart Container with Gradient Background */}
      <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg border border-gray-100">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            Recent Security Events
          </h3>
          <p className="text-sm text-gray-600">
            Latest security events and incident logs
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex flex-col items-center justify-center h-120 space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="text-gray-500 font-medium">Loading event logs...</p>
          </div>
        ) : logs.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-120 space-y-4">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <p className="text-gray-500 font-medium">No security events found</p>
          </div>
        ) : (
          <div className="h-120 overflow-hidden">
            {/* Responsive wrapper */}
            <div className="overflow-x-auto overflow-y-auto h-full">
              <table className="min-w-[600px] w-full text-sm text-left border-collapse">
                <thead className="sticky top-0 z-10">
                  <tr className="bg-slate-50/80 backdrop-blur-sm border-b border-slate-200">
                    <th className="p-3 font-semibold text-slate-700 text-left">Timestamp</th>
                    <th className="p-3 font-semibold text-slate-700 text-left">Event Message</th>
                    <th className="p-3 font-semibold text-slate-700 text-left">Severity</th>
                  </tr>
                </thead>
                <tbody>
                  {logs.map((log, index) => (
                    <tr key={index} className="hover:bg-slate-50/50 transition-colors duration-150 border-b border-slate-100">
                      <td className="p-3 text-slate-600 whitespace-nowrap">
                        {new Date(log.TimeStamp).toLocaleString()}
                      </td>
                      <td className="p-3 text-slate-700 break-words max-w-xs md:max-w-md lg:max-w-lg">
                        {log.Message}
                      </td>
                      <td className="p-3">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                          log.severity === 'High' ? 'bg-red-100 text-red-800' :
                          log.severity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {log.severity || 'High'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
