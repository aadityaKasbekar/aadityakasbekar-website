import Timeline from "@/components/Timeline";

import { portfolioData } from "@/data/portfolio";

const ExperienceSection = () => {
  const { experience } = portfolioData;

  return (
    <div className="container mx-auto">
      <h2 className="section-title">Work Experience</h2>
      <p className="max-w-2xl mb-8 text-foreground/80">
        My professional journey has equipped me with a diverse skill set and the
        ability to adapt to different work environments. Here's a snapshot of my
        career path:
      </p>
      <Timeline items={experience} />
    </div>
  );
};

export default ExperienceSection;
