interface FeatureCardProps {
  title: string;
  description: string;
}

export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div
      className="
        group
        bg-white dark:bg-slate-800
        rounded-2xl p-5
        shadow-sm
        border border-slate-200 dark:border-slate-700

        /* –– Hover effects –– */
        hover:shadow-lg hover:scale-[1.02]
        hover:border-royal dark:hover:border-blue-400

        /* Light mode hover bg – subtle blue tint */
        hover:bg-blue-50/50
        /* Dark mode hover bg – distinctly lighter slate */
        dark:hover:bg-slate-700

        /* Royal‑blue ring glow on hover (both modes) */
        hover:ring-2 hover:ring-royal/30 dark:hover:ring-blue-400/40

        transition-all duration-200 ease-out
        cursor-default
      "
    >
      {/* Icon */}
      <div
        className="
          text-royal dark:text-blue-400 mb-3
          group-hover:text-royal-dark dark:group-hover:text-blue-300
          transition-colors
        "
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      </div>

      {/* Title */}
      <h3
        className="
          font-semibold text-base mb-1
          text-slate-900 dark:text-white
          group-hover:text-royal dark:group-hover:text-blue-300
          transition-colors
        "
      >
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-slate-600 dark:text-slate-300">
        {description}
      </p>
    </div>
  );
}