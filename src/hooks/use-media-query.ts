import { useState, useEffect } from "react";

/**
 * General-purpose hook that evaluates a CSS media query and
 * returns a live boolean that updates when the viewport changes.
 *
 * Usage: const isNarrow = useMediaQuery("(max-width: 1504px)");
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);

    // Set initial value
    setMatches(mql.matches);

    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}
