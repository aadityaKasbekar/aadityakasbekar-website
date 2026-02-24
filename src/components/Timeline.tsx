import { CalendarDays, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import { ExperienceItem } from "@/types";

interface TimelineItemProps extends ExperienceItem {
  isLast?: boolean;
}

const TimelineItem = ({
  title,
  company,
  location,
  period,
  description,
  image,
  skills,
  isLast = false,
}: TimelineItemProps) => {
  return (
    <div className="relative pl-8 pb-12">
      {!isLast && (
        <div className="absolute top-0 left-3 h-full w-px bg-primary/30"></div>
      )}
      <div className="absolute top-0 left-0 h-6 w-6 rounded-full border-2 border-primary bg-background flex items-center justify-center">
        <div className="h-2 w-2 rounded-full bg-primary"></div>
      </div>
      <div className="glass-card p-6">
        <div className="flex flex-col md:flex-row gap-6 mb-4">
          <div className="md:w-1/4 flex-shrink-0">
            <div className="aspect-square rounded-lg overflow-hidden border border-border">
              <img
                src={image}
                alt={company}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold">{title}</h3>
            <div className="font-medium text-lg text-foreground/90 mb-2">
              {company}
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center text-sm text-foreground/70 mb-4 gap-2 sm:gap-4">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {location}
              </div>
              <div className="flex items-center">
                <CalendarDays className="h-4 w-4 mr-1" />
                {period}
              </div>
            </div>
            <p className="text-foreground/80 mb-4 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-primary/10 text-primary hover:bg-primary/20"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface TimelineProps {
  items: TimelineItemProps[];
}

const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className="mt-12">
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          {...item}
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  );
};

export default Timeline;
