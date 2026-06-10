"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "AURORA" },
  { id: "project-concept", label: "Project Concept" },
  { id: "problem-setting", label: "Problem Setting" },
  { id: "proposed-solution", label: "Proposed Solution" },
  { id: "technical-background", label: "Technical Background" },
];

export default function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-10% 0px -70% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
    // Close mobile sidebar after clicking a link
    if (onNavigate) onNavigate();
  };

  return (
    <nav
      className="hidden lg:block sticky top-24 self-start w-[280px] flex-shrink-0"
      style={{ height: "fit-content" }}
    >
      <div className="py-6">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4 ml-3">
          Contents
        </h3>
        <ul className="space-y-0">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => handleClick(section.id)}
                className="
                  w-full text-left px-3 py-2.5 text-sm rounded-lg
                  transition-all duration-200
                  hover:bg-slate-100 dark:hover:bg-slate-700/80
                  hover:text-royal dark:hover:text-blue-300
                  border-l-[3px] border-transparent
                  hover:border-slate-300 dark:hover:border-slate-600
                  active:scale-[0.99]
                "
                style={{
                  color:
                    activeId === section.id
                      ? "var(--color-royal)"
                      : undefined,
                  fontWeight: activeId === section.id ? 500 : 400,
                  backgroundColor:
                    activeId === section.id
                      ? "var(--color-royal-light)"
                      : undefined,
                  borderLeftColor:
                    activeId === section.id
                      ? "var(--color-royal)"
                      : undefined,
                }}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}