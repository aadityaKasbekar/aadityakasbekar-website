
import ProjectCard from "@/components/ProjectCard";
import { ArrowRight } from "lucide-react";

interface ProjectItem {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
}

const ProjectsSection = () => {
  // Sample data
  const projectsData: ProjectItem[] = [
    {
      title: "E-commerce Platform",
      description: "A fully responsive e-commerce platform with product filtering, cart functionality, and secure checkout.",
      image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      repoUrl: "#",
    },
    {
      title: "Task Management App",
      description: "A productivity app that helps users organize tasks, set priorities, and track progress.",
      image: "https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      liveUrl: "#",
      repoUrl: "#",
    },
    {
      title: "Weather Dashboard",
      description: "An interactive weather dashboard providing real-time forecasts and historical data visualization.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      technologies: ["JavaScript", "OpenWeather API", "Chart.js"],
      liveUrl: "#",
      repoUrl: "#",
    },
  ];

  return (
    <div className="container mx-auto">
      <h2 className="section-title">Featured Projects</h2>
      <p className="max-w-2xl mb-8 text-foreground/80">
        Here are some of my recent projects that showcase my skills and expertise. Each project
        represents a unique challenge and solution:
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
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
