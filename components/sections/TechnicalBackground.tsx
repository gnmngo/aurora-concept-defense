export default function TechnicalBackground() {
  const stack = [
    { title: "Next.js", category: "Frontend Framework", description: "React‑based framework for building fast, scalable web applications with server‑side rendering." },
    { title: "Tailwind CSS", category: "Styling System", description: "Utility‑first CSS framework for responsive and clean UI without custom styles." },
    { title: "API‑Driven Architecture", category: "Backend Design", description: "Modular web application with RESTful API workflows for seamless data exchange." },
    { title: "PostgreSQL + PostGIS", category: "Database", description: "Relational database with spatial extensions for storing manuscripts, feedback, and user data." },
    { title: "Vercel", category: "Deployment & Hosting", description: "Cloud platform for continuous deployment, edge functions, and reliable global access." },
    { title: "WebSockets", category: "Real‑Time Communication", description: "Real‑time feedback delivery and live collaboration features for reviewers." },
  ];

  return (
    <section id="technical-background">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">
          Technical Background
        </h2>
        <p className="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
          AURORA is built using modern web technologies to support a scalable and fully paperless academic system. The architecture is modular, maintainable, and optimised for high performance.
        </p>

        {/* Tech cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {stack.map((tech) => (
            <div
              key={tech.title}
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <span className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wide">
                {tech.category}
              </span>
              <h4 className="font-semibold text-base mt-1 mb-1 text-slate-900 dark:text-white group-hover:text-royal dark:group-hover:text-blue-300 transition-colors">
                {tech.title}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {tech.description}
              </p>
            </div>
          ))}
        </div>

        <p className="leading-relaxed text-slate-600 dark:text-slate-300">
          The system is designed to operate entirely in a paperless digital environment, ensuring that all academic evaluation activities—from submission to grading—are conducted online without physical documents. This technical foundation guarantees scalability, maintainability, and accessibility for the university community.
        </p>
      </div>
    </section>
  );
}