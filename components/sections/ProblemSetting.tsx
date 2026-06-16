export default function ProblemSetting() {
  const issues = [
    {
      title: "Delayed Feedback Cycles",
      description:
        "Students wait days or weeks for panelist comments, limiting timely revision and iterative learning.",
    },
    {
      title: "Inconsistent Evaluation Standards",
      description:
        "Without a centralised rubric‑based tool, panelists may apply varying criteria, reducing fairness.",
    },
    {
      title: "Limited Revision Transparency",
      description:
        "Tracking changes across multiple printed versions is difficult, making it hard to show how feedback was addressed.",
    },
    {
      title: "Disconnected Communication",
      description:
        "Feedback shared via paper or separate emails is not integrated with the workflow, causing confusion.",
    },
    {
      title: "High Cognitive Load for Reviewers",
      description:
        "Panelists constantly switch between manuscripts, forms, and rubrics, increasing mental effort and reducing review quality.",
    },
    {
      title: "Manual Workflow Coordination",
      description:
        "Coordinators manually schedule defenses, assign panelists, and track revisions — tasks that are time‑consuming and error‑prone.",
    },
    {
      title: "Document Management & Risk of Loss",
      description:
        "Printed manuscripts and evaluation forms are susceptible to loss, damage, or misfiling, compromising academic records.",
    },
    {
      title: "Lack of Audit Trail",
      description:
        "Without centralised logging of submissions and evaluations, institutions cannot demonstrate accountability required for accreditation.",
    },
    {
      title: "Unsustainable Paper Consumption & Storage",
      description:
        "The paper‑based process leads to significant paper waste and physical storage burdens, contradicting sustainability goals.",
    },
  ];

  return (
    <section id="problem-setting">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">
          Problem Setting
        </h2>
        <p className="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
          The current paper‑based capstone defense system at Partido State University suffers from serious
          educational, administrative, and environmental limitations. Existing tools address only isolated
          tasks, leaving the full defense lifecycle fragmented and inefficient.
        </p>

        {/* Issues grid */}
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
          These interconnected problems create an urgent need for a paperless, centralised, and integrated
          defense management system — exactly the solution AURORA provides.
        </p>
      </div>
    </section>
  );
}