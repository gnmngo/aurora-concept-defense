export default function Workflow() {
  const steps = [
    {
      number: 1,
      title: "Submit Manuscript",
      description:
        "Student uploads the digital manuscript through the AURORA platform.",
    },
    {
      number: 2,
      title: "Panel Assignment",
      description:
        "Coordinator assigns panelists and schedules the defense session.",
    },
    {
      number: 3,
      title: "Split‑Screen Review",
      description:
        "Panelists review the manuscript while simultaneously completing evaluations.",
    },
    {
      number: 4,
      title: "Real‑Time Annotation",
      description:
        "Panelists provide inline feedback and threaded comments on the document.",
    },
    {
      number: 5,
      title: "Rubric‑Based Scoring",
      description:
        "Panelists complete standardised rubrics; scores are auto‑calculated.",
    },
    {
      number: 6,
      title: "Revisions & Version Control",
      description:
        "Student views feedback, revises, and resubmits with full version tracking.",
    },
    {
      number: 7,
      title: "Final Approval & Archive",
      description:
        "Coordinator finalises the evaluation, and records are digitally archived.",
    },
  ];

  return (
    <section id="workflow">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-white">
          How AURORA Works
        </h2>

        {/* Horizontal stepper (desktop) */}
        <div className="hidden md:flex items-start justify-between">
          {steps.map((step, idx) => (
            <div key={step.number} className="flex items-center flex-1">
              {/* Step circle + text */}
              <div className="flex flex-col items-center text-center group cursor-default">
                <div
                  className="
                    w-12 h-12 rounded-full
                    flex items-center justify-center
                    text-white font-bold text-lg
                    bg-royal
                    group-hover:bg-royal-dark
                    ring-4 ring-royal/20 group-hover:ring-royal/40
                    transition-all duration-200
                    mb-3
                  "
                >
                  {step.number}
                </div>
                <h3 className="font-semibold text-sm text-slate-900 dark:text-white mb-1 group-hover:text-royal dark:group-hover:text-blue-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-[120px]">
                  {step.description}
                </p>
              </div>

              {/* Connecting line (except after last step) */}
              {idx < steps.length - 1 && (
                <div className="flex-1 mx-2 mt-6">
                  <div className="h-0.5 bg-slate-300 dark:bg-slate-600 group-hover:bg-royal transition-colors" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Vertical stepper (mobile) */}
        <div className="md:hidden space-y-6">
          {steps.map((step, idx) => (
            <div key={step.number} className="flex gap-4">
              {/* Left: circle + vertical line */}
              <div className="flex flex-col items-center">
                <div
                  className="
                    w-10 h-10 rounded-full
                    flex items-center justify-center
                    text-white font-bold text-sm
                    bg-royal
                    ring-4 ring-royal/20
                    transition-all duration-200
                    hover:bg-royal-dark hover:ring-royal/40
                    mb-1
                  "
                >
                  {step.number}
                </div>
                {idx < steps.length - 1 && (
                  <div className="w-0.5 h-full bg-slate-300 dark:bg-slate-600 flex-1" />
                )}
              </div>

              {/* Right: content */}
              <div className="pb-6">
                <h3 className="font-semibold text-base text-slate-900 dark:text-white mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}