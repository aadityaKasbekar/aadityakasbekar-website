export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  image: string;
  skills: string[];
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'instagram';
  url: string;
}

export interface ContactInfo {
  email: string;
  location: string;
  socials: SocialLink[];
}

export interface AboutInfo {
  quote: {
    text: string;
    author: string;
  };
  headline: string;
  description: string[];
  email: string;
  location: string;
}

export interface TechnologyData {
  name: string;
  iconUrl: string;
  iconAlt: string;
}

export interface SkillCategoryData {
  title: string;
  description: string;
  lucideIcon: string;
  technologies: TechnologyData[];
}

export interface PortfolioData {
  projects: ProjectItem[];
  experience: ExperienceItem[];
  contact: ContactInfo;
  about: AboutInfo;
  skills: SkillCategoryData[];
}
