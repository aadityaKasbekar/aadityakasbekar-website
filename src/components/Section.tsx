
import { useEffect, useRef, useState } from "react";

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "down" | "none";
  delay?: number;
}

const Section = ({
  id,
  className = "",
  children,
  direction = "up",
  delay = 0,
}: SectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`section ${className}`}
    >
      <div
        className={`reveal ${isVisible ? "active" : ""}`}
        data-direction={direction !== "none" ? direction : undefined}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
