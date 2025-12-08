'use client';

import { useEffect, useState } from 'react';
import SidebarLayout from '@/components/SidebarLayout';
import EventCounterCards from '@/components/EventCounterCards';
import StatusCodeDonut from '@/components/StatusCodeDonut';
import EnvironmentDonut from '@/components/EnvironmentDonut';
import DA_Multi_metric from '@/components/DA_Multi-metric';
import SO_WorldMap from '@/components/SO_WorldMap';
import { Activity, Shield, AlertTriangle, Server, Clock, TrendingUp } from 'lucide-react';

interface SystemHealth {
  status: 'healthy' | 'warning' | 'critical';
  uptime: string;
  lastIncident: string;
  activeAlerts: number;
}

export default function HomeDashboard() {
  const [systemHealth, setSystemHealth] = useState<SystemHealth>({
    status: 'healthy',
    uptime: '99.9%',
    lastIncident: '2 days ago',
    activeAlerts: 3
  });

  const healthColors = {
    healthy: 'text-green-600 bg-green-100',
    warning: 'text-yellow-600 bg-yellow-100',
    critical: 'text-red-600 bg-red-100'
  };

  const healthIcons = {
    healthy: <Shield className="w-5 h-5" />,
    warning: <AlertTriangle className="w-5 h-5" />,
    critical: <AlertTriangle className="w-5 h-5" />
  };

  return (
    <SidebarLayout>
      <div className="space-y-4 sm:space-y-6 animate-fade-in">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 sm:p-6 text-white">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="min-w-0 flex-1">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">SOC Dashboard Overview</h1>
              <p className="text-blue-100 text-sm sm:text-base lg:text-lg">
                Comprehensive security operations monitoring and threat intelligence
              </p>
            </div>
            <div className="hidden lg:flex items-center space-x-4">
              <div className={`flex items-center space-x-2 px-3 py-2 rounded-lg ${healthColors[systemHealth.status]}`}>
                {healthIcons[systemHealth.status]}
                <span className="font-semibold capitalize text-sm">{systemHealth.status}</span>
              </div>
              <div className="text-right">
                <p className="text-blue-100 text-xs sm:text-sm">System Uptime</p>
                <p className="text-white font-semibold text-lg sm:text-xl">{systemHealth.uptime}</p>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-blue-200 flex-shrink-0" />
                <div>
                  <p className="text-blue-100 text-xs sm:text-sm">Last Incident</p>
                  <p className="text-white font-semibold text-sm sm:text-base">{systemHealth.lastIncident}</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-200 flex-shrink-0" />
                <div>
                  <p className="text-blue-100 text-xs sm:text-sm">Active Alerts</p>
                  <p className="text-white font-semibold text-sm sm:text-base">{systemHealth.activeAlerts}</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-green-200 flex-shrink-0" />
                <div>
                  <p className="text-blue-100 text-xs sm:text-sm">Threat Level</p>
                  <p className="text-white font-semibold text-sm sm:text-base">Low</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* System Overview Cards */}
        <EventCounterCards />

        {/* Main Analytics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Left Column - Charts */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {/* Event Timeline */}
            <div className="h-80 sm:h-96 lg:h-[450px]">
              <DA_Multi_metric />
            </div>

            {/* Status Distribution & Environment */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="h-64 sm:h-72 lg:h-[350px]">
                <StatusCodeDonut />
              </div>
              <div className="h-64 sm:h-72 lg:h-[350px]">
                <EnvironmentDonut />
              </div>
            </div>
          </div>

          {/* Right Column - World Map */}
          <div className="h-80 sm:h-96 lg:h-[450px]">
            <SO_WorldMap />
          </div>
        </div>

        {/* Recent Activity Footer */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">Recent Security Events</h3>
            <button className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm font-medium">
              View All Events →
            </button>
          </div>

          <div className="space-y-3">
            {[
              { time: '2 minutes ago', event: 'Suspicious login attempt detected', severity: 'high', source: '192.168.1.100' },
              { time: '5 minutes ago', event: 'Firewall rule violation', severity: 'medium', source: '10.0.0.15' },
              { time: '12 minutes ago', event: 'DDoS attack pattern detected', severity: 'critical', source: 'External' },
              { time: '18 minutes ago', event: 'Successful authentication', severity: 'low', source: '192.168.1.50' },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg flex-wrap gap-2">
                <div className="flex items-center space-x-3 min-w-0 flex-1">
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                    item.severity === 'critical' ? 'bg-red-500' :
                    item.severity === 'high' ? 'bg-orange-500' :
                    item.severity === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                  }`} />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-900 truncate">{item.event}</p>
                    <p className="text-xs text-gray-600 hidden sm:block">Source: {item.source}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500 flex-shrink-0">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
}
