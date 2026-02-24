import { useState, useRef, useEffect } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ExpandableTextProps {
  text: string;
  maxLines?: number;
  /** Text-styling classes (color, leading, etc.) — applied to the <p> */
  className?: string;
  /** Spacing/layout classes (mb-4, etc.) — applied to the outer wrapper */
  wrapperClassName?: string;
}

const COMPACT_BREAKPOINT = "(max-width: 1504px)";

const ExpandableText = ({
  text,
  maxLines = 3,
  className = "",
  wrapperClassName = "",
}: ExpandableTextProps) => {
  const isCompact = useMediaQuery(COMPACT_BREAKPOINT);
  const [expanded, setExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  // Detect whether the text actually overflows the clamp limit
  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    if (isCompact && !expanded) {
      // Compare the full scrollHeight against the clamped clientHeight
      setIsOverflowing(el.scrollHeight > el.clientHeight + 1);
    } else {
      setIsOverflowing(false);
    }
  }, [isCompact, expanded, text, maxLines]);

  // Reset expanded state when switching to wide screen
  useEffect(() => {
    if (!isCompact) setExpanded(false);
  }, [isCompact]);

  const shouldClamp = isCompact && !expanded;

  return (
    <div className={wrapperClassName}>
      <p
        ref={textRef}
        className={`${className} transition-all duration-300 ease-in-out`}
        style={
          shouldClamp
            ? {
              display: "-webkit-box",
              WebkitLineClamp: maxLines,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }
            : undefined
        }
      >
        {text}
      </p>
      {isCompact && (isOverflowing || expanded) && (
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-1 text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-1 focus:outline-none"
        >
          {expanded ? (
            <>
              Show less <ChevronUp className="h-3.5 w-3.5" />
            </>
          ) : (
            <>
              Show more <ChevronDown className="h-3.5 w-3.5" />
            </>
          )}
        </button>
      )}
    </div>
  );
};

export default ExpandableText;
