import { content } from "@/utils/content";
import FeatureCard from "@/components/ui/FeatureCard";

export default function Hero() {
  return (
    <section id="hero" className="pt-8 pb-12">
      {/* Professional white banner – blue left accent */}
      <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        {/* Left blue accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-royal rounded-l-2xl" />

        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">
            {content.hero.title}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
            {content.hero.subtitle}
          </p>
          <p className="text-slate-700 dark:text-slate-200 mb-6 font-medium">
            {content.hero.coreMessage}
          </p>
          <div className="flex flex-wrap gap-3">
            {/* Badge 1 – Paperless */}
            <span className="
              inline-flex items-center px-4 py-2 rounded-full
              bg-blue-50 dark:bg-blue-900/30
              text-blue-700 dark:text-blue-200
              text-sm font-medium
              border border-blue-100 dark:border-blue-800/50
              hover:shadow-md hover:scale-105
              hover:bg-blue-100 dark:hover:bg-blue-800/50
              transition-all duration-200 cursor-default
            ">
              Fully Paperless Academic Defense System
            </span>

            {/* Badge 2 – Zero Printing */}
            <span className="
              inline-flex items-center px-4 py-2 rounded-full
              bg-green-50 dark:bg-green-900/30
              text-green-700 dark:text-green-200
              text-sm font-medium
              border border-green-100 dark:border-green-800/50
              hover:shadow-md hover:scale-105
              hover:bg-green-100 dark:hover:bg-green-800/50
              transition-all duration-200 cursor-default
            ">
              Zero Printing Required
            </span>

            {/* Badge 3 – Eco‑friendly */}
            <span className="
              inline-flex items-center px-4 py-2 rounded-full
              bg-slate-100 dark:bg-slate-700
              text-slate-600 dark:text-slate-300
              text-sm font-medium
              border border-slate-200 dark:border-slate-600
              hover:shadow-md hover:scale-105
              hover:bg-slate-200 dark:hover:bg-slate-600
              transition-all duration-200 cursor-default
            ">
              Eco‑friendly Academic System
            </span>
          </div>
        </div>
      </div>

      {/* Feature cards grid – these already have hover from FeatureCard */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {content.features.map((feat) => (
          <FeatureCard key={feat.title} title={feat.title} description={feat.description} />
        ))}
      </div>
    </section>
  );
}