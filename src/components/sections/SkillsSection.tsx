
import SkillCard from "@/components/SkillCard";
import { Code, Database, Layers, Globe, Paintbrush, Server } from "lucide-react";

const SkillsSection = () => {
  return (
    <div className="container mx-auto">
      <h2 className="section-title">My Skills</h2>
      <p className="max-w-2xl mb-8 text-foreground/80">
        I've cultivated a diverse set of skills throughout my career. My technical expertise
        spans various aspects of software development:
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <SkillCard
          icon={<Code className="h-10 w-10" />}
          title="Frontend Development"
          description="Expert in React, TypeScript, and modern CSS frameworks like Tailwind. I build responsive, accessible, and performant user interfaces."
        />
        <SkillCard
          icon={<Server className="h-10 w-10" />}
          title="Backend Development"
          description="Experienced with Node.js, Express, and RESTful API design. I create scalable server-side solutions."
        />
        <SkillCard
          icon={<Database className="h-10 w-10" />}
          title="Database Management"
          description="Proficient in both SQL and NoSQL databases, including PostgreSQL, MongoDB, and Firebase."
        />
        <SkillCard
          icon={<Paintbrush className="h-10 w-10" />}
          title="UI/UX Design"
          description="Strong design sensibilities with experience in creating intuitive user experiences and visually appealing interfaces."
        />
        <SkillCard
          icon={<Layers className="h-10 w-10" />}
          title="DevOps"
          description="Familiar with CI/CD pipelines, Docker, and deployment strategies that ensure smooth product delivery."
        />
        <SkillCard
          icon={<Globe className="h-10 w-10" />}
          title="Web Performance"
          description="Specialized in optimizing web applications for speed, accessibility, and search engine visibility."
        />
      </div>
    </div>
  );
};

export default SkillsSection;
