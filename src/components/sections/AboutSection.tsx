import { Download } from "lucide-react";
import { portfolioData } from "../../data/portfolio";
import { Button } from "../ui/button";

const AboutSection = () => {
  const { about } = portfolioData;

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/latest_profile_info/Aaditya_Kasbekar_Resume.pdf';
    link.download = 'Aaditya_Kasbekar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
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
          {/* Quote positioned absolutely on desktop, hidden on mobile */}
          <div className="glass-card p-4 absolute -bottom-6 right-8 max-w-xs hidden xl:block">
            <blockquote className="text-foreground/80 italic">
              "{about.quote.text}"
            </blockquote>
            <p className="text-right mt-2 text-sm">— {about.quote.author}</p>
          </div>
          {/* Quote positioned below image on mobile, hidden on desktop */}
          <div className="glass-card p-4 mt-6 xl:hidden">
            <blockquote className="text-foreground/80 italic">
              "{about.quote.text}"
            </blockquote>
            <p className="text-right mt-2 text-sm">— {about.quote.author}</p>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            {about.headline}
          </h3>
          {about.description.map((paragraph, index) => (
            <p key={index} className="mb-4 text-foreground/80">
              {paragraph}
            </p>
          ))}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-12 mb-6">
            <div>
              <h4 className="font-semibold mb-2">Email</h4>
              <p className="text-foreground/80">{about.email}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Location</h4>
              <p className="text-foreground/80">{about.location}</p>
            </div>
          </div>
          <Button variant="outline" onClick={handleDownloadCV}>
            Download CV <Download className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
