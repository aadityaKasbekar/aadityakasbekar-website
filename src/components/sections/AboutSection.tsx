import { Download } from "lucide-react";

const AboutSection = () => {
  return (
    <div className="container mx-auto">
      <h2 className="section-title">About Me</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="aspect-video rounded-2xl overflow-hidden border border-border">
            <img
              src="/lovable-uploads/AadityaPhoto2.jpg"
              alt="About Me Aaditya Kasbekar"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="glass-card p-4 absolute -bottom-6 right-8 max-w-xs">
            <blockquote className="text-foreground/80 italic">
              "Many ideas grow better when transplanted into another mind than
              the one where they sprang up."
            </blockquote>
            <p className="text-right mt-2 text-sm">— Oliver Wendell Holmes</p>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            I'm a Software Developer passionate about creating cloud based
            software solutions
          </h3>
          <p className="mb-4 text-foreground/80">
            With 2+ years of experience in web development, I've worked on a
            variety of projects ranging from small business websites to complex
            enterprise applications. My approach combines technical expertise
            with problem solving skills for building scalable and maintainable
            software.
          </p>
          <p className="mb-6 text-foreground/80">
            I believe that great software is not just about writing code, but
            about solving real problems for real people. That's why I also focus
            on creating intuitive interfaces that make complex tasks feel
            simple.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h4 className="font-semibold mb-2">Name</h4>
              <p className="text-foreground/80">Aaditya Kasbekar</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Email</h4>
              <p className="text-foreground/80">kasbekar.a@northeastern.edu</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Location</h4>
              <p className="text-foreground/80">Boston, MA</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Availability</h4>
              <p className="text-foreground/80">
                From <strong>12th May 2025</strong> for full time opportunities
              </p>
            </div>
          </div>
          <a href="#" className="btn btn-outline">
            Download CV <Download className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
