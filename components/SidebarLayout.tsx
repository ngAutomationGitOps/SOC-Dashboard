'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode, useState } from 'react';
import Image from 'next/image';

const menuItems = [
  { title: 'Dashboard', href: '/dashboard' }, 
  { title: 'Vulnerability', href: '/vulnerability' },
  { title: 'SO', href: '/so' },
  { title: 'Event', href: '/events' },
  { title: 'Fim', href: '/fim' },
  { title: 'Agent', href: '/agent' },
  { title: 'ASM', href: '/asm' },
  { title: 'Settings', href: '/settings' },
];

export default function SidebarLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 text-white flex flex-col transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-center p-4 border-b border-gray-700">
          <Image
            src="/logo/logo-light.png"
            alt="Dashboard Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-2 py-4 overflow-y-auto">
          {menuItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className={`block px-4 py-3 mx-2 my-1 rounded-lg text-sm font-medium transition-colors duration-200 ${
                pathname === item.href
                  ? 'bg-gray-700 text-white shadow-sm'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
              onClick={() => setSidebarOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-700">
          <p className="text-xs text-gray-400 text-center">
          © 2025 Centralized Security
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile Header */}
        <header className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between shadow-sm">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Open menu"
          >
            <span className="text-xl font-bold text-gray-600">☰</span>
          </button>
          <h1 className="text-lg font-semibold text-gray-800">SOC Dashboard</h1>
          <div className="w-10" /> {/* Spacer for centering */}
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto p-4 lg:p-6 bg-gray-50">
        {children}
      </main>
      </div>
    </div>
  );
}
