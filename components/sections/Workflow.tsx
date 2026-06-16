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
          {/* Scenario Toggle */}
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

        {/* Flowchart container with scroll on narrow screens */}
        <div className="overflow-x-auto overflow-y-visible">
          <svg
            viewBox="-50 0 1100 400"
            className="w-full min-w-[700px] h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="10"
                refY="3.5"
                orient="auto"
              >
                <polygon
                  points="0 0, 10 3.5, 0 7"
                  className="fill-slate-400 dark:fill-slate-500"
                />
              </marker>
              <marker
                id="arrowhead-active"
                markerWidth="10"
                markerHeight="7"
                refX="10"
                refY="3.5"
                orient="auto"
              >
                <polygon
                  points="0 0, 10 3.5, 0 7"
                  className="fill-royal dark:fill-blue-400"
                />
              </marker>
            </defs>

            {/* ---------- Connecting lines ---------- */}
            <line
              x1="140" y1="100" x2="270" y2="100"
              className={
                "stroke-[2] " +
                (isApproved ? "stroke-royal dark:stroke-blue-400 flow-line-active" : "stroke-slate-300 dark:stroke-slate-600")
              }
              markerEnd="url(#arrowhead)"
            />
            <line
              x1="370" y1="100" x2="500" y2="100"
              className={
                "stroke-[2] " +
                (isApproved ? "stroke-royal dark:stroke-blue-400 flow-line-active" : "stroke-slate-300 dark:stroke-slate-600")
              }
              markerEnd="url(#arrowhead)"
            />
            <line
              x1="600" y1="100" x2="730" y2="100"
              className={
                "stroke-[2] " +
                (isApproved ? "stroke-royal dark:stroke-blue-400 flow-line-active" : "stroke-slate-300 dark:stroke-slate-600")
              }
              markerEnd="url(#arrowhead)"
            />
            <line
              x1="830" y1="100" x2="900" y2="100"
              className={
                "stroke-[2] " +
                (isApproved ? "stroke-royal dark:stroke-blue-400 flow-line-active" : "stroke-slate-300 dark:stroke-slate-600")
              }
              markerEnd="url(#arrowhead)"
            />

            {/* Decision to Approved (upper branch) */}
            <path
              d="M 950 95 Q 980 50 1020 50 L 1040 50"
              fill="none"
              strokeWidth="2"
              className={
                isApproved
                  ? "stroke-royal dark:stroke-blue-400 flow-line-active"
                  : "stroke-slate-300 dark:stroke-slate-600 opacity-30"
              }
              markerEnd={isApproved ? "url(#arrowhead-active)" : "url(#arrowhead)"}
            />

            {/* Decision to Revision (lower branch) */}
            <path
              d="M 950 105 Q 980 150 1020 150 L 1040 150"
              fill="none"
              strokeWidth="2"
              className={
                isRevision
                  ? "stroke-royal dark:stroke-blue-400 flow-line-active"
                  : "stroke-slate-300 dark:stroke-slate-600 opacity-30"
              }
              markerEnd={isRevision ? "url(#arrowhead-active)" : "url(#arrowhead)"}
            />

            {/* Loop back from Revision to Coordinator */}
            <path
              d="M 1040 190 Q 1050 260 700 290 Q 320 320 270 150"
              fill="none"
              strokeWidth="2"
              className={
                isRevision
                  ? "stroke-royal dark:stroke-blue-400 flow-line-active"
                  : "stroke-slate-300 dark:stroke-slate-600 opacity-30"
              }
              markerEnd={isRevision ? "url(#arrowhead-active)" : "url(#arrowhead)"}
              strokeDasharray={isRevision ? "10,6" : "5,3"}
            />

            {/* ---------- NODES ---------- */}
            {/* Node 1: Student Submission */}
            <g>
              <rect
                x="40" y="80" width="100" height="40" rx="6"
                className="fill-slate-100 dark:fill-slate-700 stroke-slate-300 dark:stroke-slate-600"
                strokeWidth="1.5"
              />
              <text
                x="90" y="100" textAnchor="middle" dominantBaseline="middle"
                className="fill-slate-900 dark:fill-white text-xs font-semibold"
                fontSize="11"
              >
                Student
              </text>
              <text
                x="90" y="114" textAnchor="middle" dominantBaseline="middle"
                className="fill-slate-500 dark:fill-slate-400 text-[10px]"
                fontSize="9"
              >
                Submission
              </text>
            </g>

            {/* Node 2: Coordinator */}
            <g>
              <rect
                x="270" y="80" width="100" height="40" rx="6"
                className="fill-slate-100 dark:fill-slate-700 stroke-slate-300 dark:stroke-slate-600"
                strokeWidth="1.5"
              />
              <text
                x="320" y="100" textAnchor="middle" dominantBaseline="middle"
                className="fill-slate-900 dark:fill-white text-xs font-semibold"
                fontSize="11"
              >
                Coordinator
              </text>
              <text
                x="320" y="114" textAnchor="middle" dominantBaseline="middle"
                className="fill-slate-500 dark:fill-slate-400 text-[10px]"
                fontSize="9"
              >
                Review &amp; Assign
              </text>
            </g>

            {/* Node 3: Panel Assignment */}
            <g>
              <rect
                x="500" y="80" width="100" height="40" rx="6"
                className="fill-slate-100 dark:fill-slate-700 stroke-slate-300 dark:stroke-slate-600"
                strokeWidth="1.5"
              />
              <text
                x="550" y="100" textAnchor="middle" dominantBaseline="middle"
                className="fill-slate-900 dark:fill-white text-xs font-semibold"
                fontSize="11"
              >
                Panelists
              </text>
              <text
                x="550" y="114" textAnchor="middle" dominantBaseline="middle"
                className="fill-slate-500 dark:fill-slate-400 text-[10px]"
                fontSize="9"
              >
                Assigned
              </text>
            </g>

            {/* Node 4: Split-Screen Evaluation */}
            <g>
              <rect
                x="730" y="80" width="100" height="40" rx="6"
                className="fill-slate-100 dark:fill-slate-700 stroke-slate-300 dark:stroke-slate-600"
                strokeWidth="1.5"
              />
              <text
                x="780" y="100" textAnchor="middle" dominantBaseline="middle"
                className="fill-slate-900 dark:fill-white text-xs font-semibold"
                fontSize="11"
              >
                Split-Screen
              </text>
              <text
                x="780" y="114" textAnchor="middle" dominantBaseline="middle"
                className="fill-slate-500 dark:fill-slate-400 text-[10px]"
                fontSize="9"
              >
                Evaluation
              </text>
            </g>

            {/* Node 5: Decision Diamond */}
            <g>
              <polygon
                points="900,90 930,100 900,110 870,100"
                className="fill-yellow-50 dark:fill-yellow-900/30 stroke-yellow-500 dark:stroke-yellow-400"
                strokeWidth="1.5"
              />
              <text
                x="900" y="100" textAnchor="middle" dominantBaseline="middle"
                className="fill-yellow-800 dark:fill-yellow-300 text-[10px] font-semibold"
                fontSize="9"
              >
                Decision
              </text>
            </g>

            {/* Node 6a: Final Approval */}
            <g opacity={isApproved ? 1 : 0.3}>
              <rect
                x="1040" y="30" width="100" height="40" rx="6"
                className="fill-green-50 dark:fill-green-900/20 stroke-green-400 dark:stroke-green-500"
                strokeWidth="1.5"
              />
              <text
                x="1090" y="50" textAnchor="middle" dominantBaseline="middle"
                className="fill-green-800 dark:fill-green-300 text-xs font-semibold"
                fontSize="11"
              >
                Final Approval
              </text>
            </g>

            {/* Node 6b: Revision Needed */}
            <g opacity={isRevision ? 1 : 0.3}>
              <rect
                x="1040" y="130" width="100" height="40" rx="6"
                className="fill-red-50 dark:fill-red-900/20 stroke-red-400 dark:stroke-red-500"
                strokeWidth="1.5"
              />
              <text
                x="1090" y="150" textAnchor="middle" dominantBaseline="middle"
                className="fill-red-800 dark:fill-red-300 text-xs font-semibold"
                fontSize="11"
              >
                Revision Needed
              </text>
            </g>

            {/* Node 7: Archive & Close (only visible on Approved path, now within view) */}
            {isApproved && (
              <g>
                <rect
                  x="1040" y="-20" width="100" height="30" rx="6"
                  className="fill-slate-100 dark:fill-slate-700 stroke-slate-400 dark:stroke-slate-500"
                  strokeWidth="1"
                />
                <text
                  x="1090" y="-5" textAnchor="middle" dominantBaseline="middle"
                  className="fill-slate-600 dark:fill-slate-300 text-[10px]"
                  fontSize="9"
                >
                  Archive &amp; Close
                </text>
                <line
                  x1="1090" y1="10" x2="1090" y2="30"
                  strokeWidth="2"
                  className="stroke-royal dark:stroke-blue-400 flow-line-active"
                  markerEnd="url(#arrowhead-active)"
                />
              </g>
            )}
          </svg>
        </div>
        <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
          Toggle the buttons above to see the path for an approved defense vs. one requiring revisions.
          Active branches glow and animate, while inactive branches are faded.
        </p>
      </div>
    </section>
  );
}