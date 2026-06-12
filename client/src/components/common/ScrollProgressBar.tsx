import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const onScroll = () => {
      const el = document.documentElement;
      const percent = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setScrollPercent(Math.min(percent, 100));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-[9999] h-[3px] bg-lime-500 transition-none"
      style={{ width: `${scrollPercent}%` }}
    />
  );
}
