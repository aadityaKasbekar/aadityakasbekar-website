import SkillCard from "@/components/SkillCard";
import {
  CodeXml,
  Server,
  Database,
  Cloud,
  Globe,
  FileCode,
} from "lucide-react";

interface Technology {
  name: string;
  icon: React.ReactNode;
}

interface SkillItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  technologies: Technology[];
}

const SkillsSection = () => {
  // Function to create SVG icon component from URL
  const createSvgIcon = (
    alternatName: string,
    url: string,
    size: string = "h-5 w-5"
  ) => <img src={url} alt={alternatName} className={size} />;

  // Sample data with detailed technologies using SVG icon URLs
  const skillsData: SkillItem[] = [
    {
      title: "Cloud",
      description:
        "Strong design sensibilities with experience in creating intuitive user experiences and visually appealing interfaces.",
      icon: <Cloud className="h-10 w-10" />,
      technologies: [
        {
          name: "Amazon Web Services",
          icon: createSvgIcon(
            "AWS",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
          ),
        },
        {
          name: "Google Cloud Platform",
          icon: createSvgIcon(
            "Google Cloud Platform",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg"
          ),
        },
        {
          name: "Vercel",
          icon: createSvgIcon(
            "Vercel",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg"
          ),
        },
        {
          name: "Cloudflare",
          icon: createSvgIcon(
            "Cloudflare",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg"
          ),
        },
      ],
    },
    {
      title: "Backend Development",
      description:
        "Experienced with Node.js, Express, and RESTful API design. I create scalable server-side solutions.",
      icon: <Server className="h-10 w-10" />,
      technologies: [
        {
          name: "Java",
          icon: createSvgIcon(
            "Java",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
          ),
        },
        {
          name: "Spring",
          icon: createSvgIcon(
            "Spring",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
          ),
        },
        {
          name: "Node.js",
          icon: createSvgIcon(
            "Node.js",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          ),
        },
        {
          name: "Express.js",
          icon: createSvgIcon(
            "Express.js",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
          ),
        },
        {
          name: "Python",
          icon: createSvgIcon(
            "Python",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
          ),
        },
        {
          name: "Flask",
          icon: createSvgIcon(
            "Flask",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg"
          ),
        },
        {
          name: "Maven",
          icon: createSvgIcon(
            "Maven",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg"
          ),
        },
        {
          name: "NPM",
          icon: createSvgIcon(
            "NPM",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg"
          ),
        },
      ],
    },
    {
      title: "Frontend Development",
      description:
        "Expert in React, TypeScript, and modern CSS frameworks like Tailwind. I build responsive, accessible, and performant user interfaces.",
      icon: <CodeXml className="h-10 w-10" />,
      technologies: [
        {
          name: "JavaScript",
          icon: createSvgIcon(
            "JavaScript",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          ),
        },
        {
          name: "TypeScript",
          icon: createSvgIcon(
            "TypeScript",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          ),
        },
        {
          name: "React",
          icon: createSvgIcon(
            "React",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          ),
        },
        {
          name: "Next.js",
          icon: createSvgIcon(
            "Next.js",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
          ),
        },
        {
          name: "Tailwind CSS",
          icon: createSvgIcon(
            "Tailwind CSS",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
          ),
        },
        {
          name: "HTML5",
          icon: createSvgIcon(
            "HTML5",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          ),
        },
        {
          name: "CSS3",
          icon: createSvgIcon(
            "CSS3",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          ),
        },
        {
          name: "SASS",
          icon: createSvgIcon(
            "SASS",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
          ),
        },
      ],
    },
    {
      title: "Database Management",
      description:
        "Proficient in both SQL and NoSQL databases, including PostgreSQL, MongoDB, and Firebase.",
      icon: <Database className="h-10 w-10" />,
      technologies: [
        {
          name: "MySQL",
          icon: createSvgIcon(
            "MySQL",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
          ),
        },
        {
          name: "MSSQL",
          icon: createSvgIcon(
            "MSSQL",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg"
          ),
        },
        {
          name: "MongoDB",
          icon: createSvgIcon(
            "MongoDB",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
          ),
        },
        {
          name: "DynamoDB",
          icon: createSvgIcon(
            "DynamoDB",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dynamodb/dynamodb-original.svg"
          ),
        },
        {
          name: "Redis",
          icon: createSvgIcon(
            "Redis",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg"
          ),
        },
        {
          name: "Hibernate",
          icon: createSvgIcon(
            "Hibernate",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original.svg"
          ),
        },
      ],
    },
    {
      title: "DevOps",
      description:
        "Familiar with CI/CD pipelines, Docker, and deployment strategies that ensure smooth product delivery.",
      icon: <FileCode className="h-10 w-10" />,
      technologies: [
        {
          name: "Jenkins",
          icon: createSvgIcon(
            "Jenkins",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg"
          ),
        },
        {
          name: "Docker",
          icon: createSvgIcon(
            "Docker",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
          ),
        },
        {
          name: "Github Actions",
          icon: createSvgIcon(
            "Github Actions",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg"
          ),
        },
        {
          name: "Github",
          icon: createSvgIcon(
            "Github",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
          ),
        },
        {
          name: "Terraform",
          icon: createSvgIcon(
            "Terraform",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg"
          ),
        },
        {
          name: "Packer",
          icon: createSvgIcon(
            "Packer",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/packer/packer-original.svg"
          ),
        },
      ],
    },
    {
      title: "Web Performance",
      description:
        "Specialized in optimizing web applications for speed, accessibility, and search engine visibility.",
      icon: <Globe className="h-10 w-10" />,
      technologies: [
        {
          name: "Lighthouse",
          icon: createSvgIcon(
            "Lighthouse",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg"
          ),
        },
        {
          name: "SEO",
          icon: createSvgIcon(
            "SEO",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
          ),
        },
        {
          name: "Lazy Loading",
          icon: createSvgIcon(
            "Lazy Loading",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg"
          ),
        },
        {
          name: "Caching",
          icon: createSvgIcon(
            "Caching",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg"
          ),
        },
        {
          name: "Bundle Analysis",
          icon: createSvgIcon(
            "Bundle Analysis",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg"
          ),
        },
        {
          name: "Web Vitals",
          icon: createSvgIcon(
            "Web Vitals",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg"
          ),
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto">
      <h2 className="section-title">My Skills</h2>
      <p className="max-w-2xl mb-8 text-foreground/80">
        I've cultivated a diverse set of skills throughout my career. My
        technical expertise spans various aspects of software development:
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((skill, index) => (
          <SkillCard
            key={index}
            icon={skill.icon}
            title={skill.title}
            description={skill.description}
            technologies={skill.technologies}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
