
import ProjectCard from "@/components/ProjectCard";
import { ArrowRight } from "lucide-react";

import { portfolioData } from "@/data/portfolio";

const ProjectsSection = () => {
  const { projects } = portfolioData;

  return (
    <div className="container mx-auto">
      <h2 className="section-title">Featured Projects</h2>
      <p className="max-w-2xl mb-8 text-foreground/80">
        Here are some of my recent projects that showcase my skills and expertise. Each project
        represents a unique challenge and solution:
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <div className="mt-12 text-center">
        <a href="#" className="btn btn-outline">
          View All Projects <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default ProjectsSection;
