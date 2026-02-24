import { Github, Linkedin, Instagram, ArrowUp } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const socialIconMap: Record<string, typeof Github> = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
};

const FooterSection = () => {
  const { contact } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border/50 mt-20">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.03] to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 py-12 relative">
        {/* Top row: branding + back to top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-10">
          <a
            href="#home"
            className="text-xl font-bold tracking-tight hover:text-primary transition-colors"
          >
            Aaditya<span className="text-primary">_</span>Kasbekar
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors"
          >
            Back to top
            <span className="inline-flex items-center justify-center h-8 w-8 rounded-full border border-border group-hover:border-primary group-hover:bg-primary/10 transition-all">
              <ArrowUp className="h-4 w-4" />
            </span>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-foreground/60 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Divider */}
        <div className="h-px w-full bg-border/50 mb-10" />

        {/* Bottom row: copyright + socials */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-foreground/50">
            © {currentYear} Aaditya Kasbekar. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            {contact.socials.map((social, index) => {
              const Icon = socialIconMap[social.platform] || Github;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.platform}
                  className="h-9 w-9 rounded-full border border-border/50 flex items-center justify-center text-foreground/50 hover:text-primary hover:border-primary hover:bg-primary/10 transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
