// Nice
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import ExpandableText from "@/components/ExpandableText";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  repoUrl,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="glass-card overflow-hidden group relative h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <ExpandableText text={description} maxLines={2} className="text-foreground/70" wrapperClassName="mb-4" />
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-primary"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Live Demo
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline"
            >
              <Github className="h-4 w-4 mr-2" />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
