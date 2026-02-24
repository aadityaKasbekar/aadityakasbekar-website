import { useState, useEffect, useRef, useCallback } from "react";

const SCROLL_IDLE_TIMEOUT_MS = 1000;

interface ScrollProgressState {
  scrollProgress: number;
  isScrolling: boolean;
}

export function useScrollProgress(): ScrollProgressState {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef = useRef<number | null>(null);

  const calculateProgress = useCallback(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const maxScroll = scrollHeight - clientHeight;
    if (maxScroll <= 0) {
      setScrollProgress(0);
      return;
    }
    const progress = (scrollTop / maxScroll) * 100;
    setScrollProgress(Math.min(100, Math.max(0, progress)));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);

      // Reset idle timer
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }
      idleTimerRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, SCROLL_IDLE_TIMEOUT_MS);

      // Throttle progress calculation with rAF
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(calculateProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Calculate initial position
    calculateProgress();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [calculateProgress]);

  return { scrollProgress, isScrolling };
}
