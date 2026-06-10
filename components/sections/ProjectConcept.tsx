import { content } from "@/utils/content";

// Helper to parse **bold** markers into <strong> JSX
function renderWithBold(text: string) {
  const parts = text.split("**");
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i} className="font-semibold text-slate-900 dark:text-white">{part}</strong> : part
  );
}

export default function ProjectConcept() {
  return (
    <section id="project-concept">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">
          Project Concept
        </h2>
        {content.projectConcept.map((para, idx) => (
          <p
            key={idx}
            className="mb-4 leading-relaxed text-slate-600 dark:text-slate-300 last:mb-0"
          >
            {renderWithBold(para)}
          </p>
        ))}
      </div>
    </section>
  );
}