"use client";

import { useState } from "react";

export default function Workflow() {
  const [scenario, setScenario] = useState<"approved" | "revision">("approved");

  const isApproved = scenario === "approved";
  const isRevision = scenario === "revision";

  return (
    <section id="workflow">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
            AURORA Workflow
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => setScenario("approved")}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                isApproved
                  ? "bg-royal text-white shadow-md"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
              }`}
            >
              Approved Path
            </button>
            <button
              onClick={() => setScenario("revision")}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                isRevision
                  ? "bg-royal text-white shadow-md"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
              }`}
            >
              Revision Path
            </button>
          </div>
        </div>

        {/* Flowchart container: no min-width, scales to fit */}
        <div className="hidden md:block w-full">
          <svg
            viewBox="0 0 1000 320"
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" className="fill-slate-400 dark:fill-slate-500" />
              </marker>
              <marker id="arrowhead-active" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" className="fill-royal dark:fill-blue-400" />
              </marker>
            </defs>

            {/* ---- Connecting lines ---- */}
            {/* Student → Coordinator */}
            <line x1="130" y1="140" x2="230" y2="140"
              className={isApproved ? "stroke-royal dark:stroke-blue-400 flow-line-active stroke-[2]" : "stroke-slate-300 dark:stroke-slate-600 stroke-[2]"}
              markerEnd="url(#arrowhead)" />
            {/* Coordinator → Panel */}
            <line x1="330" y1="140" x2="430" y2="140"
              className={isApproved ? "stroke-royal dark:stroke-blue-400 flow-line-active stroke-[2]" : "stroke-slate-300 dark:stroke-slate-600 stroke-[2]"}
              markerEnd="url(#arrowhead)" />
            {/* Panel → SplitScreen */}
            <line x1="530" y1="140" x2="630" y2="140"
              className={isApproved ? "stroke-royal dark:stroke-blue-400 flow-line-active stroke-[2]" : "stroke-slate-300 dark:stroke-slate-600 stroke-[2]"}
              markerEnd="url(#arrowhead)" />
            {/* SplitScreen → Decision */}
            <line x1="730" y1="140" x2="790" y2="140"
              className={isApproved ? "stroke-royal dark:stroke-blue-400 flow-line-active stroke-[2]" : "stroke-slate-300 dark:stroke-slate-600 stroke-[2]"}
              markerEnd="url(#arrowhead)" />

            {/* Decision to Approved (upper branch) */}
            <path d="M 820 135 Q 840 90 870 90 L 900 90"
              fill="none" strokeWidth="2"
              className={isApproved ? "stroke-royal dark:stroke-blue-400 flow-line-active" : "stroke-slate-300 dark:stroke-slate-600 opacity-30"}
              markerEnd={isApproved ? "url(#arrowhead-active)" : "url(#arrowhead)"} />
            {/* Decision to Revision (lower branch) */}
            <path d="M 820 145 Q 840 190 870 190 L 900 190"
              fill="none" strokeWidth="2"
              className={isRevision ? "stroke-royal dark:stroke-blue-400 flow-line-active" : "stroke-slate-300 dark:stroke-slate-600 opacity-30"}
              markerEnd={isRevision ? "url(#arrowhead-active)" : "url(#arrowhead)"} />

            {/* Revision loopback to Coordinator */}
            <path d="M 900 230 Q 910 280 650 290 Q 380 310 230 200"
              fill="none" strokeWidth="2"
              className={isRevision ? "stroke-royal dark:stroke-blue-400 flow-line-active" : "stroke-slate-300 dark:stroke-slate-600 opacity-30"}
              markerEnd={isRevision ? "url(#arrowhead-active)" : "url(#arrowhead)"}
              strokeDasharray={isRevision ? "10,6" : "5,3"} />

            {/* ---- NODES ---- */}
            {/* Student Submission */}
            <g>
              <rect x="30" y="120" width="100" height="40" rx="6" className="fill-slate-100 dark:fill-slate-700 stroke-slate-300 dark:stroke-slate-600" strokeWidth="1.5" />
              <text x="80" y="140" textAnchor="middle" dominantBaseline="middle" className="fill-slate-900 dark:fill-white text-xs font-semibold" fontSize="11">Student</text>
              <text x="80" y="154" textAnchor="middle" dominantBaseline="middle" className="fill-slate-500 dark:fill-slate-400 text-[10px]" fontSize="9">Submission</text>
            </g>

            {/* Coordinator */}
            <g>
              <rect x="230" y="120" width="100" height="40" rx="6" className="fill-slate-100 dark:fill-slate-700 stroke-slate-300 dark:stroke-slate-600" strokeWidth="1.5" />
              <text x="280" y="140" textAnchor="middle" dominantBaseline="middle" className="fill-slate-900 dark:fill-white text-xs font-semibold" fontSize="11">Coordinator</text>
              <text x="280" y="154" textAnchor="middle" dominantBaseline="middle" className="fill-slate-500 dark:fill-slate-400 text-[10px]" fontSize="9">Review &amp; Assign</text>
            </g>

            {/* Panel Assignment */}
            <g>
              <rect x="430" y="120" width="100" height="40" rx="6" className="fill-slate-100 dark:fill-slate-700 stroke-slate-300 dark:stroke-slate-600" strokeWidth="1.5" />
              <text x="480" y="140" textAnchor="middle" dominantBaseline="middle" className="fill-slate-900 dark:fill-white text-xs font-semibold" fontSize="11">Panelists</text>
              <text x="480" y="154" textAnchor="middle" dominantBaseline="middle" className="fill-slate-500 dark:fill-slate-400 text-[10px]" fontSize="9">Assigned</text>
            </g>

            {/* Split-Screen Evaluation */}
            <g>
              <rect x="630" y="120" width="100" height="40" rx="6" className="fill-slate-100 dark:fill-slate-700 stroke-slate-300 dark:stroke-slate-600" strokeWidth="1.5" />
              <text x="680" y="140" textAnchor="middle" dominantBaseline="middle" className="fill-slate-900 dark:fill-white text-xs font-semibold" fontSize="11">Split-Screen</text>
              <text x="680" y="154" textAnchor="middle" dominantBaseline="middle" className="fill-slate-500 dark:fill-slate-400 text-[10px]" fontSize="9">Evaluation</text>
            </g>

            {/* Decision Diamond */}
            <g>
              <polygon points="790,130 820,140 790,150 760,140" className="fill-yellow-50 dark:fill-yellow-900/30 stroke-yellow-500 dark:stroke-yellow-400" strokeWidth="1.5" />
              <text x="790" y="140" textAnchor="middle" dominantBaseline="middle" className="fill-yellow-800 dark:fill-yellow-300 text-[10px] font-semibold" fontSize="9">Decision</text>
            </g>

            {/* Final Approval (upper) */}
            <g opacity={isApproved ? 1 : 0.3}>
              <rect x="900" y="70" width="100" height="40" rx="6" className="fill-green-50 dark:fill-green-900/20 stroke-green-400 dark:stroke-green-500" strokeWidth="1.5" />
              <text x="950" y="90" textAnchor="middle" dominantBaseline="middle" className="fill-green-800 dark:fill-green-300 text-xs font-semibold" fontSize="11">Final Approval</text>
            </g>

            {/* Revision Needed (lower) */}
            <g opacity={isRevision ? 1 : 0.3}>
              <rect x="900" y="170" width="100" height="40" rx="6" className="fill-red-50 dark:fill-red-900/20 stroke-red-400 dark:stroke-red-500" strokeWidth="1.5" />
              <text x="950" y="190" textAnchor="middle" dominantBaseline="middle" className="fill-red-800 dark:fill-red-300 text-xs font-semibold" fontSize="11">Revision Needed</text>
            </g>

            {/* Archive & Close (only on approved path, placed above Final Approval) */}
            {isApproved && (
              <g>
                <rect x="900" y="20" width="100" height="30" rx="6" className="fill-slate-100 dark:fill-slate-700 stroke-slate-400 dark:stroke-slate-500" strokeWidth="1" />
                <text x="950" y="35" textAnchor="middle" dominantBaseline="middle" className="fill-slate-600 dark:fill-slate-300 text-[10px]" fontSize="9">Archive &amp; Close</text>
                <line x1="950" y1="50" x2="950" y2="70" strokeWidth="2" className="stroke-royal dark:stroke-blue-400 flow-line-active" markerEnd="url(#arrowhead-active)" />
              </g>
            )}
          </svg>
        </div>

        {/* Mobile vertical stepper */}
        <div className="md:hidden space-y-6">
          {[
            { title: "Student Submission", desc: "Student uploads the digital manuscript through the AURORA platform." },
            { title: "Coordinator Review & Assign", desc: "Coordinator reviews the submission and assigns panelists." },
            { title: "Panelists Assigned", desc: "Panelists receive notification and access the manuscript." },
            { title: "Split‑Screen Evaluation", desc: "Panelists review the manuscript while completing evaluations simultaneously." },
            { title: "Decision", desc: "Panelists decide: Approved or Revision Needed." },
            { title: scenario === "approved" ? "Final Approval" : "Revision Needed", desc: scenario === "approved" ? "The defense is approved and archived." : "Student revises and resubmits the manuscript." },
          ].map((step, idx, arr) => (
            <div key={step.title} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-royal text-white flex items-center justify-center text-sm font-bold">{idx + 1}</div>
                {idx < arr.length - 1 && <div className="w-0.5 h-full bg-slate-300 dark:bg-slate-600 flex-1" />}
              </div>
              <div className="pb-6">
                <h3 className="font-semibold text-sm text-slate-900 dark:text-white">{step.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
          Toggle the buttons above to see the path for an approved defense vs. one requiring revisions. Active branches glow and animate.
        </p>
      </div>
    </section>
  );
}