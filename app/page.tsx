import Hero from "@/components/sections/Hero";
import ProjectConcept from "@/components/sections/ProjectConcept";
import ProblemSetting from "@/components/sections/ProblemSetting";
import ProposedSolution from "@/components/sections/ProposedSolution";
import TechnicalBackground from "@/components/sections/TechnicalBackground";

export default function ConceptDefensePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Hero />
      <ProjectConcept />
      <ProblemSetting />
      <ProposedSolution />
      <TechnicalBackground />
    </div>
  );
}