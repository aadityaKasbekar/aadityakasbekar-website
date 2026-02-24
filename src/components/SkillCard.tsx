import { useState } from "react";
import { TechnologyData } from "@/types";

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  technologies: TechnologyData[];
}

const SkillCard = ({
  icon,
  title,
  description,
  technologies,
}: SkillCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="h-[280px] perspective-1000 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front of card */}
        <div className="glass-card p-6 absolute w-full h-full backface-hidden flex flex-col justify-center items-center">
          <div className="text-primary mb-4 transition-transform duration-300">
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
          <p className="text-foreground/70 text-center">{description}</p>
        </div>

        {/* Back of card */}
        <div className="glass-card p-6 absolute w-full h-full backface-hidden rotate-y-180 bg-card/90 flex flex-col justify-center">
          <h3 className="text-xl font-semibold mb-4 text-center">
            Technologies
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-1"
              >
                <div className="text-primary">
                  <img
                    src={tech.iconUrl}
                    alt={tech.iconAlt}
                    className="h-5 w-5"
                  />
                </div>
                <span className="text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
