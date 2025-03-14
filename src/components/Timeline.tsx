
import { CalendarDays, MapPin } from "lucide-react";

interface TimelineItemProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  isLast?: boolean;
}

const TimelineItem = ({
  title,
  company,
  location,
  period,
  description,
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
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="font-medium text-lg text-foreground/90 mb-2">{company}</div>
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
        <ul className="list-disc pl-5 space-y-2">
          {description.map((item, index) => (
            <li key={index} className="text-foreground/80">
              {item}
            </li>
          ))}
        </ul>
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
