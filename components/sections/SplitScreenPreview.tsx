export default function SplitScreenPreview() {
  return (
    <div className="mb-6 rounded-xl border border-slate-200 dark:border-slate-600 overflow-hidden shadow-sm bg-white dark:bg-slate-800">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-5 py-3 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-600">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-600" />
          <span className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-600" />
          <span className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-600" />
        </div>
        <span className="ml-3 text-xs font-medium text-slate-500 dark:text-slate-400">
          AURORA · Concept Defense Evaluation
        </span>
      </div>

      {/* Split panels */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-700">
        {/* ––––––––––– LEFT: Digital Manuscript ––––––––––– */}
        <div className="p-5 space-y-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-royal dark:text-blue-400 mb-1">
            📄 Digital Manuscript
          </p>

          {/* Project title */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white leading-snug">
              AURORA: Academic Unified Review, Observation, Rating, and Assessment System
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Gene Mañago · Bachelor of Science in Information Technology
            </p>
          </div>

          {/* Abstract */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200">Abstract</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              This study presents AURORA, a fully paperless web‑based defense management platform that
              digitizes thesis and capstone evaluation workflows. The system enables online manuscript
              submission, real‑time annotation, rubric‑based grading, and automated revision tracking…
            </p>
          </div>

          {/* Annotated block */}
          <div className="p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/10 border-l-4 border-yellow-500 text-sm text-slate-700 dark:text-slate-300">
            <span className="font-semibold text-yellow-700 dark:text-yellow-400">Reviewer Note:</span>{" "}
            “The system architecture is well‑defined. However, the feasibility assessment should include
            a more detailed campus Wi‑Fi coverage analysis.”
          </div>

          {/* More manuscript text */}
          <div className="space-y-2">
            <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded w-full" />
            <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded w-4/5" />
            <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded w-3/4" />
          </div>
        </div>

        {/* ––––––––––– RIGHT: Evaluation Panel ––––––––––– */}
        <div className="p-5 space-y-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-royal dark:text-blue-400 mb-1">
            📋 Evaluation Panel
          </p>

          {/* Rubric scores */}
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm font-medium mb-1">
                <span className="text-slate-700 dark:text-slate-300">Relevance</span>
                <span className="text-royal dark:text-blue-400">4 / 5</span>
              </div>
              <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full w-[80%] bg-royal dark:bg-blue-500 rounded-full" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm font-medium mb-1">
                <span className="text-slate-700 dark:text-slate-300">Feasibility</span>
                <span className="text-royal dark:text-blue-400">5 / 5</span>
              </div>
              <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full w-full bg-green-500 dark:bg-green-400 rounded-full" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm font-medium mb-1">
                <span className="text-slate-700 dark:text-slate-300">Technical Approach</span>
                <span className="text-royal dark:text-blue-400">4 / 5</span>
              </div>
              <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full w-[80%] bg-royal dark:bg-blue-500 rounded-full" />
              </div>
            </div>
          </div>

          {/* Written comment */}
          <div>
            <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">
              Reviewer Comments
            </h4>
            <div className="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-600 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              “The proposed paperless system addresses a real need at the university. Minor revision needed
              on the Wi‑Fi feasibility section. Ready for Title Defense.”
            </div>
          </div>

          {/* Status badges */}
          <div className="flex gap-2 pt-1">
            <span className="text-xs px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 font-medium">
              Concept Approved
            </span>
            <span className="text-xs px-3 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 font-medium">
              Minor Revision
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}