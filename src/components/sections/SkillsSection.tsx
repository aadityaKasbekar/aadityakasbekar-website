import SkillCard from "@/components/SkillCard";
import { portfolioData } from "@/data/portfolio";
import {
  CodeXml,
  Server,
  Database,
  Cloud,
  Globe,
  FileCode,
  type LucideIcon,
} from "lucide-react";

// Adapter: maps serializable string keys → Lucide icon components
const LUCIDE_ICON_MAP: Record<string, LucideIcon> = {
  Cloud,
  Server,
  CodeXml,
  Database,
  FileCode,
  Globe,
};

const SkillsSection = () => {
  const { skills } = portfolioData;

  return (
    <div className="container mx-auto">
      <h2 className="section-title">My Skills</h2>
      <p className="max-w-2xl mb-8 text-foreground/80">
        I've cultivated a diverse set of skills throughout my career. My
        technical expertise spans various aspects of software development:
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => {
          const IconComponent = LUCIDE_ICON_MAP[skill.lucideIcon];
          return (
            <SkillCard
              key={index}
              icon={
                IconComponent ? (
                  <IconComponent className="h-10 w-10" />
                ) : null
              }
              title={skill.title}
              description={skill.description}
              technologies={skill.technologies}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SkillsSection;
