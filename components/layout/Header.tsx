"use client";

import ThemeToggle from "../ui/ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-[1340px] mx-auto px-4 h-full flex items-center justify-between">
        <span className="text-lg font-bold text-royal dark:text-blue-300 font-display">
          Aurora - Concept Defense
        </span>
        <ThemeToggle />
      </div>
    </header>
  );
}