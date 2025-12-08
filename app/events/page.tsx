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
      <div className="w-full px-4 py-6 space-y-6 bg-gray-100 min-h-screen overflow-x-hidden">

        {/* ✅ Navbar */}
        <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
          <h1 className="text-2xl font-bold text-gray-800">Event Dashboard</h1>
        </div>

        {/* 🔳 Main Content Grid - Responsive layout with consistent heights */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_2fr] gap-4 sm:gap-6">
          {/* Left Section: Counter Cards + Event Map */}
          <div className="space-y-4 sm:space-y-6">
            <EventCounterCards />
            <div className="h-80 sm:h-96 lg:h-[500px]">
              <EventMap />
            </div>
          </div>

          {/* Right Section: Four Charts in responsive grid with equal heights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="h-80 sm:h-96 lg:h-[400px]">
              <StatusCodeDonut />
            </div>
            <div className="h-80 sm:h-96 lg:h-[400px]">
              <TargetUserBar />
            </div>
            <div className="h-80 sm:h-96 lg:h-[400px]">
              <EnvironmentDonut />
            </div>
            <div className="h-80 sm:h-96 lg:h-[400px]">
              <SourceIpBar />
            </div>
          </div>
        </div>

        {/* 📋 Tables */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-6">
          <div className="overflow-x-auto">
            <ImpactedServersTable />
          </div>
          <div className="overflow-x-auto">
            <RecentLogsTable />
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
}
