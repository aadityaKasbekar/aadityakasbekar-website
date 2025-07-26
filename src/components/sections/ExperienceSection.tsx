import Timeline from "@/components/Timeline";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  image: string;
  skills: string[];
}

const ExperienceSection = () => {
  // Sample data
  const experienceData: ExperienceItem[] = [
    {
      title: "Associate Software Engineer",
      company: "Tata Consultancy Services",
      location: "Mumbai, MH",
      period: "Nov 2021 - Aug 2023",
      description: [
        "Optimized a legacy inventory system using Java Spring Boot, MySQL, and Redis, reducing query response times by 40% and improving scalability",
        "Built an automated CI/CD pipeline with Jenkins & Docker, cutting deployment time by 50%, and integrated CloudWatch for real-time monitoring",
        "Enhanced ReactJS frontend UI and microservices architecture, resolving memory leaks and ensuring seamless performance during high-traffic sales events",
      ],
      image: "/lovable-uploads/TCS1.jpeg",
      skills: [
        "Java",
        "JavaScript",
        "Java Spring",
        "ReactJS",
        "Tailwind",
        "MySQL",
        "AWS",
        "CI/CD",
        "Jenkins",
        "Docker",
      ],
    },
    {
      title: "Software Developer Intern",
      company: "Hexaware Tecnologies",
      location: "Chennai, TL",
      period: "Dec 2020 - Mar 2021",
      description: [
        "Developed a Canteen Management Web App using Node.js, RESTful APIs, and MySQL, improving inventory efficiency by 40% through real-time tracking",
        "Architected scalable backend services with SOA principles on AWS EC2, optimizing queries to cut latency by 35% and enhance data consistency",
        "Enhanced security & reliability by implementing MFA, resolved sync issues (25% reduction), and optimized API performance with caching",
      ],
      image: "/lovable-uploads/Hexaware1.jpeg",
      skills: [
        "JavaScript",
        "ExpressJS",
        "ReactJS",
        "Tailwind CSS",
        "MySQL",
        "AWS",
        "CI/CD",
        "Github Actions",
      ],
    },
  ];

  return (
    <div className="container mx-auto">
      <h2 className="section-title">Work Experience</h2>
      <p className="max-w-2xl mb-8 text-foreground/80">
        My professional journey has equipped me with a diverse skill set and the
        ability to adapt to different work environments. Here's a snapshot of my
        career path:
      </p>
      <Timeline items={experienceData} />
    </div>
  );
};

export default ExperienceSection;
