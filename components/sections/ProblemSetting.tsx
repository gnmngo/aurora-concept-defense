export default function ProblemSetting() {
  const issues = [
    { title: "Excessive Printed Documents", description: "Every defense stage requires multiple printed manuscript copies, creating a heavy paper burden." },
    { title: "High Printing Costs", description: "Students bear significant financial costs for printing and binding multiple copies." },
    { title: "Environmental Waste", description: "Large‑scale paper consumption contributes directly to environmental degradation and waste." },
    { title: "Delayed Feedback", description: "Physical manuscript circulation slows the review cycle, causing long waiting periods for feedback." },
    { title: "Revision Tracking Difficulty", description: "Manually comparing multiple printed versions makes it hard to track changes and revisions." },
    { title: "Lost or Damaged Sheets", description: "Physical evaluation sheets are at risk of being misplaced, damaged, or lost." },
    { title: "Manual Grading Procedures", description: "Time‑consuming manual grading and calculation increase workload and error risk." },
    { title: "No Centralized Records", description: "Lack of a permanent digital repository makes record‑keeping fragmented and unreliable." },
  ];

  return (
    <section id="problem-setting">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">
          Problem Setting
        </h2>
        <p className="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
          The existing thesis and capstone defense process heavily depends on printed manuscripts, resulting in an inefficient and unsustainable workflow. The key issues include:
        </p>

        {/* Issues grid — soft cards inside the section card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {issues.map((issue) => (
            <div
              key={issue.title}
              className="
                group
                bg-slate-50 dark:bg-slate-700/50
                rounded-xl p-4
                border border-slate-200 dark:border-slate-600
                hover:shadow-md hover:scale-[1.01]
                hover:border-royal dark:hover:border-blue-400
                hover:bg-blue-50/30 dark:hover:bg-slate-600/50
                transition-all duration-200 ease-out
                cursor-default
              "
            >
              <div className="text-amber-600 dark:text-amber-400 mb-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01M10.29 3.86l-8.6 14.86A1 1 0 002.56 20h18.88a1 1 0 00.86-1.28l-8.6-14.86a1 1 0 00-1.72 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-base mb-1 text-slate-900 dark:text-white group-hover:text-royal dark:group-hover:text-blue-300 transition-colors">
                {issue.title}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {issue.description}
              </p>
            </div>
          ))}
        </div>

        <p className="leading-relaxed text-slate-600 dark:text-slate-300">
          These challenges highlight the urgent need for a paperless, centralized, and digital defense management system that improves efficiency while supporting sustainability initiatives.
        </p>
      </div>
    </section>
  );
}