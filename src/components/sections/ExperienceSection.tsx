
import Timeline from "@/components/Timeline";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const ExperienceSection = () => {
  // Sample data
  const experienceData: ExperienceItem[] = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      period: "2021 - Present",
      description: [
        "Led the development of the company's flagship product using React and TypeScript",
        "Implemented a design system that improved development efficiency by 40%",
        "Mentored junior developers and conducted code reviews",
      ],
    },
    {
      title: "Frontend Developer",
      company: "WebSolutions LLC",
      location: "New York, NY",
      period: "2018 - 2021",
      description: [
        "Developed responsive web applications with React and Redux",
        "Collaborated with designers to implement pixel-perfect UI components",
        "Optimized application performance resulting in 30% faster load times",
      ],
    },
    {
      title: "Web Developer Intern",
      company: "StartupHub",
      location: "Boston, MA",
      period: "2017 - 2018",
      description: [
        "Assisted in developing websites for various startup clients",
        "Gained hands-on experience with JavaScript, HTML and CSS",
        "Participated in daily standups and sprint planning sessions",
      ],
    },
  ];

  return (
    <div className="container mx-auto">
      <h2 className="section-title">Work Experience</h2>
      <p className="max-w-2xl mb-8 text-foreground/80">
        My professional journey has equipped me with a diverse skill set and the ability
        to adapt to different work environments. Here's a snapshot of my career path:
      </p>
      <Timeline items={experienceData} />
    </div>
  );
};

export default ExperienceSection;
