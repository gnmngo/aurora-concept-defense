"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex max-w-[1340px] mx-auto px-4 gap-6">
        {/* Desktop sidebar */}
        <div className="hidden lg:block w-[280px] flex-shrink-0">
          <Sidebar />
        </div>

        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <div
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              onClick={() => setSidebarOpen(false)}
            />
            <div className="relative z-50 bg-white dark:bg-slate-900 h-full w-72 p-6">
              <Sidebar onNavigate={() => setSidebarOpen(false)} />
            </div>
          </div>
        )}

        <main className="flex-1 py-8 min-w-0">{children}</main>
      </div>
    </>
  );
}