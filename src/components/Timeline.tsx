import TimelineItem, { TimelineItemProps } from "./TimelineItem";

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
