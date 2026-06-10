export default function ProposedSolution() {
  const features = [
    { title: "Paperless Manuscript Submission", description: "Upload and store thesis manuscripts entirely online — no printed copies needed." },
    { title: "Real‑Time Digital Annotation", description: "Reviewers annotate directly on the digital manuscript, replacing handwritten comments." },
    { title: "Online Grading & Rubric System", description: "Standardised evaluation using customisable rubrics and scoring tools." },
    { title: "Structured Defense Workflow", description: "Supports all stages from Concept Defense to Final Defense in one unified system." },
    { title: "Version Control & Tracking", description: "Every revision is automatically tracked, eliminating multiple printed drafts." },
    { title: "Instant Feedback Delivery", description: "Feedback reaches candidates immediately — no physical document exchange required." },
  ];

  return (
    <section id="proposed-solution">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">
          Proposed Solution
        </h2>

        {/* Core Innovation (accent line) */}
        <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5 md:p-6 border border-slate-200 dark:border-slate-600 relative overflow-hidden mb-6">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-royal rounded-l-xl" />
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
              Core Innovation: Unified Paperless Split‑Screen Evaluation
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-3 leading-relaxed">
              AURORA introduces a split‑screen academic evaluation concept that redefines how thesis and capstone defenses are conducted in a paperless environment.
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-3 leading-relaxed">
              Instead of separating document viewing and evaluation into different tools or printed workflows, AURORA conceptualizes a unified interface where:
            </p>
            <ul className="list-disc ml-6 mb-3 text-slate-600 dark:text-slate-300 space-y-2">
              <li><strong className="text-slate-900 dark:text-white">One side</strong> presents the digital manuscript for continuous reading.</li>
              <li><strong className="text-slate-900 dark:text-white">The other side</strong> provides structured evaluation context such as feedback, insights, and system‑guided review elements.</li>
            </ul>
            <p className="text-slate-600 dark:text-slate-300 mb-3 leading-relaxed">
              This design concept aims to improve reviewer efficiency by reducing cognitive switching between documents and evaluation forms, allowing a more focused and continuous review process.
            </p>
            <p className="text-slate-700 dark:text-slate-200 font-medium">
              The split‑screen approach represents AURORA’s key innovation in achieving a fully paperless and integrated academic defense workflow.
            </p>
          </div>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {features.map((feature) => (
            <div
              key={feature.title}
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
              <div className="text-royal dark:text-blue-400 mb-2 group-hover:text-royal-dark dark:group-hover:text-blue-300 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="font-semibold text-base mb-1 text-slate-900 dark:text-white group-hover:text-royal dark:group-hover:text-blue-300 transition-colors">
                {feature.title}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <p className="leading-relaxed text-slate-600 dark:text-slate-300">
          By removing the dependency on printed documents and fragmented evaluation tools, AURORA ensures a faster, more organized, and environmentally responsible academic evaluation process.
        </p>
      </div>
    </section>
  );
}