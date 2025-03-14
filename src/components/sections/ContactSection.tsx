
import { Mail, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <div className="container mx-auto">
      <h2 className="section-title">Get In Touch</h2>
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <p className="mb-8 text-foreground/80 max-w-md">
            I'm always open to discussing new projects, creative ideas, or opportunities to be
            part of your vision. Feel free to reach out through the form or via my social media.
          </p>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Email</h4>
                <a href="mailto:hello@johndev.com" className="text-foreground/80 hover:text-primary transition-colors">
                  hello@johndev.com
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-foreground/80">San Francisco, California</p>
              </div>
            </div>
            <div className="pt-4">
              <h4 className="font-semibold mb-4">Social Profiles</h4>
              <div className="flex space-x-4">
                <a href="#" className="h-10 w-10 rounded-full bg-foreground/5 hover:bg-primary/10 flex items-center justify-center transition-colors">
                  <Github className="h-5 w-5 text-foreground hover:text-primary transition-colors" />
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-foreground/5 hover:bg-primary/10 flex items-center justify-center transition-colors">
                  <Linkedin className="h-5 w-5 text-foreground hover:text-primary transition-colors" />
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-foreground/5 hover:bg-primary/10 flex items-center justify-center transition-colors">
                  <Twitter className="h-5 w-5 text-foreground hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="glass-card p-8">
          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-2 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-2 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="How can I help you?"
                className="w-full px-4 py-2 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-all"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Your message here..."
                className="w-full px-4 py-2 rounded-md bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-all resize-none"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message <Send className="ml-2 h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
