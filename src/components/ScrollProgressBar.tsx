import { useScrollProgress } from "@/hooks/useScrollProgress";

const ScrollProgressBar = () => {
  const { scrollProgress, isScrolling } = useScrollProgress();

  return (
    <div
      className={`fixed top-16 left-0 w-full z-40 pointer-events-none transition-opacity duration-300 ${isScrolling ? "opacity-100" : "opacity-0"
        }`}
      role="progressbar"
      aria-valuenow={Math.round(scrollProgress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    >
      <div
        className="h-[3px] bg-primary transition-[width] duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgressBar;
