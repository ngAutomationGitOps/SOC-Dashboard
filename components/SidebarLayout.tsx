'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode, useState } from 'react';
import Image from 'next/image';
import {
  LayoutDashboard,
  Shield,
  Activity,
  AlertTriangle,
  FileText,
  Server,
  Settings,
  Bug,
  Menu,
  X
} from 'lucide-react';

const menuItems = [
  { title: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { title: 'Vulnerability', href: '/vulnerability', icon: Shield },
  { title: 'SO', href: '/so', icon: Activity },
  { title: 'Events', href: '/events', icon: AlertTriangle },
  { title: 'FIM', href: '/fim', icon: FileText },
  { title: 'Agent', href: '/agent', icon: Server },
  { title: 'ASM', href: '/asm', icon: Bug },
  { title: 'Settings', href: '/settings', icon: Settings },
];

export default function SidebarLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex flex-col transform transition-all duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } ${
          isHovered ? 'lg:w-64' : 'lg:w-20'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Sidebar Background with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 shadow-2xl"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20"></div>

        {/* Logo Section */}
        <div className={`relative z-10 flex items-center justify-center p-4 border-b border-slate-700/50 transition-all duration-300 ${
          isHovered ? 'px-6' : 'px-4'
        }`}>
          <div className={`transition-all duration-300 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <Image
              src="/logo/logo-light.png"
              alt="Dashboard Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </div>
          {!isHovered && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                <Shield className="w-5 h-5 text-white" />
              </div>
            </div>
          )}
        </div>

        {/* Navigation Links */}
        <nav className="relative z-10 flex-1 px-3 py-6 space-y-2">
          {menuItems.map((item, idx) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={idx}
                href={item.href}
                className={`group relative flex items-center justify-center rounded-xl transition-all duration-300 ease-in-out ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                    : 'text-slate-300 hover:bg-slate-700/50 hover:text-white hover:shadow-md'
                } ${
                  isHovered ? 'px-4 py-3 justify-start' : 'px-3 py-3 justify-center'
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                {/* Active Indicator */}
                {/* {isActive && (
                  <div className={`absolute top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-400 rounded-r-full transition-all duration-300 ${
                    isHovered ? 'left-0' : 'left-1/2 -translate-x-1/2'
                  }`}></div>
                )} */}

                {/* Icon - Always centered */}
                <div className={`flex items-center justify-center transition-all duration-300 relative z-10 ${
                  isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'
                } ${isHovered ? 'mr-3' : 'mr-0'}`}>
                  <Icon className="w-5 h-5" />
                </div>

                {/* Text Label - Absolutely positioned */}
                <span className={`absolute left-14 font-medium text-sm transition-all duration-300 whitespace-nowrap overflow-hidden z-10 ${
                  isActive ? 'text-white' : 'text-slate-300'
                } ${
                  isHovered
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-2 pointer-events-none'
                }`}>
                  {item.title}
                </span>

                {/* Expanded background for text */}
                <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                  isHovered ? 'bg-slate-700/30' : 'bg-transparent'
                }`}></div>

                {/* Hover Effect Background */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className={`relative z-10 p-4 border-t border-slate-700/50 transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-60'
        }`}>
          <p className={`text-xs text-slate-400 text-center transition-all duration-300 ${
            isHovered ? 'block' : 'hidden lg:block'
          }`}>
            © 2025 SOC Dashboard
          </p>
          {!isHovered && (
            <div className="lg:hidden text-center">
              <span className="text-xs text-slate-500">SOC</span>
            </div>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 lg:ml-20">
        {/* Mobile Header */}
        <header className="lg:hidden bg-white/80 backdrop-blur-md border-b border-gray-200/50 px-4 py-3 flex items-center justify-between shadow-sm">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-lg bg-white/50 hover:bg-white/80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5 text-gray-700" />
          </button>
          <h1 className="text-lg font-semibold text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            SOC Dashboard
          </h1>
          <div className="w-10" /> {/* Spacer for centering */}
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto bg-gradient-to-br from-slate-50 to-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
}
