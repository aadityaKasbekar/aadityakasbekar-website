
import { useState, useRef } from "react";
import ProjectCard from "@/components/ProjectCard";
import { ArrowRight } from "lucide-react";

import { portfolioData } from "@/data/portfolio";

const INITIAL_COUNT = 3;

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { projects } = portfolioData;
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);

  const handleToggle = () => {
    if (showAll) {
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setShowAll(!showAll);
  };

  return (
    <div className="container mx-auto" ref={sectionRef}>
      <h2 className="section-title">Featured Projects</h2>
      <p className="max-w-2xl mb-8 text-foreground/80">
        Here are some of my recent projects that showcase my skills and expertise. Each project
        represents a unique challenge and solution:
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className={`h-full ${index >= INITIAL_COUNT ? "project-card-reveal" : ""}`}
            style={
              index >= INITIAL_COUNT
                ? { animationDelay: `${(index - INITIAL_COUNT) * 100}ms` }
                : undefined
            }
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <button
          className="btn btn-sm btn-outline group/projects-btn transition-all duration-300 hover:scale-105"
          onClick={handleToggle}
        >
          {showAll ? "View Less Projects" : "View All Projects"}
          <ArrowRight
            className={`ml-2 h-4 w-4 transition-transform duration-300 ${showAll ? "rotate-90" : "group-hover/projects-btn:translate-x-1"
              }`}
          />
        </button>
      </div>
    </div>
  );
};

export default ProjectsSection;

