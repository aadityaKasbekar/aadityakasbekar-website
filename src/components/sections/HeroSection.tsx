import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        <div className="order-2 md:order-1">
          <span className="px-3 py-1 border border-primary text-primary rounded-full text-sm mb-4 inline-block animate-fade-in">
            Hello, I'm
          </span>
          <h1 className="font-bold mb-4 animate-slide-in-left">
            <span className="block">Aaditya Kasbekar</span>
            <span className="text-primary">Software Developer</span>
          </h1>
          <p
            className="text-xl text-foreground/80 mb-8 max-w-md animate-slide-in-left"
            style={{ animationDelay: "200ms" }}
          >
            I'm a software developer skilled in full-stack development, cloud
            computing, and DevOps. I design scalable, high-performance solutions
            using Java, React, and AWS, driven by innovation and continuous
            learning.
          </p>
          <div
            className="flex flex-wrap gap-4 animate-slide-in-left"
            style={{ animationDelay: "400ms" }}
          >
            <Button 
              size="lg" 
              onClick={() => scrollToSection("contact")}
              className="btn-primary"
            >
              Contact Me <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
            </Button>
          </div>
        </div>
        <div className="relative order-1 md:order-2 animate-slide-in-right">
          <div className="aspect-square rounded-2xl overflow-hidden border border-border relative z-10">
            <img
              src="/lovable-uploads/AadityaPhoto1.jpg"
              alt="Aaditya Kasbekar"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div
            className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border border-primary z-0"
            aria-hidden="true"
          ></div>
          <div
            className="absolute -top-4 -left-4 w-full h-full rounded-2xl bg-gradient-to-br from-primary/30 to-transparent z-0"
            aria-hidden="true"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
