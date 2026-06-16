export default function TechnicalBackground() {
  return (
    <section id="technical-background">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">
          Technical Background
        </h2>
        <p className="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
          This section presents the hardware and software requirements necessary for the development,
          deployment, and use of the AURORA system. These specifications ensure the system can be built
          efficiently and accessed reliably by all stakeholders.
        </p>

        {/* Hardware & Software cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Developer Hardware */}
          <div className="group bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5 border border-slate-200 dark:border-slate-600 hover:shadow-md hover:border-royal dark:hover:border-blue-400 transition-all duration-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="text-royal dark:text-blue-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-base text-slate-900 dark:text-white">
                Developer Hardware
              </h3>
            </div>
            <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
              <li><strong className="text-slate-900 dark:text-white">Processor:</strong> Intel Core i5 (10th gen) or higher</li>
              <li><strong className="text-slate-900 dark:text-white">RAM:</strong> 16 GB DDR4 or higher</li>
              <li><strong className="text-slate-900 dark:text-white">Storage:</strong> 256 GB SSD or higher</li>
              <li><strong className="text-slate-900 dark:text-white">Display:</strong> 14″ 1920×1080 resolution or higher</li>
              <li><strong className="text-slate-900 dark:text-white">Network:</strong> 100 Mbps or higher</li>
            </ul>
          </div>

          {/* User Hardware */}
          <div className="group bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5 border border-slate-200 dark:border-slate-600 hover:shadow-md hover:border-royal dark:hover:border-blue-400 transition-all duration-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="text-royal dark:text-blue-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-base text-slate-900 dark:text-white">
                User Hardware (by Role)
              </h3>
            </div>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li>
                <strong className="text-slate-900 dark:text-white">Students:</strong> Desktop / Laptop / Tablet; modern browser; 8 GB RAM
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">Panelists / Advisers:</strong> Desktop / Laptop; 14″+ display recommended for split‑screen
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">Coordinators / Admins:</strong> Desktop / Laptop; modern browser; 8 GB RAM; stable internet
              </li>
            </ul>
          </div>

          {/* Developer Software Stack */}
          <div className="group bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5 border border-slate-200 dark:border-slate-600 hover:shadow-md hover:border-royal dark:hover:border-blue-400 transition-all duration-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="text-royal dark:text-blue-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-semibold text-base text-slate-900 dark:text-white">
                Developer Software Stack
              </h3>
            </div>
            <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
              <li><strong className="text-slate-900 dark:text-white">Frontend:</strong> React.js 18.x</li>
              <li><strong className="text-slate-900 dark:text-white">Backend:</strong> Node.js + Express 20.x</li>
              <li><strong className="text-slate-900 dark:text-white">Database:</strong> PostgreSQL 15.x (ACID, JSON)</li>
              <li><strong className="text-slate-900 dark:text-white">Version Control:</strong> Git + GitHub</li>
              <li><strong className="text-slate-900 dark:text-white">IDE:</strong> Visual Studio Code</li>
              <li><strong className="text-slate-900 dark:text-white">API Testing:</strong> Postman</li>
            </ul>
          </div>

          {/* User Software Requirements */}
          <div className="group bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5 border border-slate-200 dark:border-slate-600 hover:shadow-md hover:border-royal dark:hover:border-blue-400 transition-all duration-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="text-royal dark:text-blue-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="font-semibold text-base text-slate-900 dark:text-white">
                User Software Requirements
              </h3>
            </div>
            <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
              <li><strong className="text-slate-900 dark:text-white">Browser:</strong> Chrome, Firefox, Edge (latest two versions)</li>
              <li><strong className="text-slate-900 dark:text-white">Internet:</strong> Stable; 5 Mbps down / 2 Mbps up</li>
              <li><strong className="text-slate-900 dark:text-white">PDF Viewer:</strong> Browser‑native (no plugin required)</li>
              <li><strong className="text-slate-900 dark:text-white">Authentication:</strong> University email / SSO credentials</li>
            </ul>
          </div>
        </div>

        {/* Conclusion – unchanged */}
        <p className="leading-relaxed text-slate-600 dark:text-slate-300">
          The system is designed to operate entirely in a paperless digital environment, ensuring that all
          academic evaluation activities—from submission to grading—are conducted online without physical
          documents. This technical foundation guarantees scalability, maintainability, and accessibility for
          the university community.
        </p>
      </div>
    </section>
  );
}