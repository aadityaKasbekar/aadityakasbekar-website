import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div className="order-2 md:order-1">
        <span className="px-3 py-1 border border-primary text-primary rounded-full text-sm mb-4 inline-block animate-fade-in">
          Hello, I'm
        </span>
        <h1 className="font-bold mb-4 animate-slide-in-left">
          <span className="block">Aaditya Kasbekar</span>
          <span className="text-primary">Software Engineer</span>
        </h1>
        <p
          className="text-xl text-foreground/80 mb-8 max-w-md animate-slide-in-left"
          style={{ animationDelay: "200ms" }}
        >
          I craft elegant solutions with code. Specializing in full stack
          software development with a passion for creating intuitive website
          designs.
        </p>
        <div
          className="flex flex-wrap gap-4 animate-slide-in-left"
          style={{ animationDelay: "400ms" }}
        >
          <a href="#contact" className="btn btn-lg btn-primary">
            Contact Me <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a href="#projects" className="btn btn-lg btn-outline">
            View Projects
          </a>
        </div>
      </div>
      <div className="relative order-1 md:order-2 animate-slide-in-right">
        <div className="aspect-square rounded-2xl overflow-hidden border border-border relative z-10">
          <img
            src="/lovable-uploads/b9c70356-8154-414e-bc27-64270d2c45d6.png"
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
  );
};

export default HeroSection;
