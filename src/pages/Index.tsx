import { useEffect, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import Navigation from "@/components/Navigation";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Section from "@/components/Section";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen relative">
      <Navigation />
      <ScrollProgressBar />

      {/* Hero Section */}
      <Section
        id="home"
        className="min-h-screen flex items-center justify-center"
        direction="none"
      >
        <HeroSection />
      </Section>

      {/* About Section */}
      <Section id="about" direction="up">
        <AboutSection />
      </Section>

      {/* Experience Section */}
      <Section id="experience" direction="up" delay={100}>
        <ExperienceSection />
      </Section>

      {/* Projects Section */}
      <Section id="projects" direction="up" delay={200}>
        <ProjectsSection />
      </Section>

      {/* Skills Section */}
      <Section id="skills" direction="up" delay={300}>
        <SkillsSection />
      </Section>

      {/* Contact Section */}
      <Section id="contact" direction="up" delay={400}>
        <ContactSection />
      </Section>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default Index;
