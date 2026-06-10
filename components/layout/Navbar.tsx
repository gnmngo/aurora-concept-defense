"use client";

import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Navbar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="sticky top-0 z-30 h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur border-b border-border">
      <div className="max-w-[1340px] mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            className="lg:hidden p-2 -ml-2 text-text-secondary hover:bg-gray-100 dark:hover:bg-slate-800 rounded-md"
            onClick={onMenuClick}
            aria-label="Open sidebar"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <span className="text-lg font-bold text-royal dark:text-royal-soft">AURORA</span>
          <span className="hidden sm:block text-sm text-text-secondary">Concept Defense</span>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}