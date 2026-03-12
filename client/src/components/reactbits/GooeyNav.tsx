import { useRef, useState, useEffect, useCallback } from "react";

type GooeyNavItem = {
  label: string;
  href: string;
};

type GooeyNavProps = {
  items: GooeyNavItem[];
  animationTime?: number;
  particleCount?: number;
  particleDistances?: [number, number];
  particleR?: number;
  timeVariance?: number;
  colors?: number[];
  initialActiveIndex?: number;
  onItemClick?: (href: string, index: number) => void;
  className?: string;
};

export default function GooeyNav({
  items,
  animationTime = 600,
  particleCount = 15,
  particleDistances = [90, 10],
  particleR = 100,
  timeVariance = 300,
  colors = [1, 2, 3, 1, 2, 3, 1, 4],
  initialActiveIndex = 0,
  onItemClick,
  className = "",
}: GooeyNavProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
  const [pillStyle, setPillStyle] = useState<{ left: number; width: number }>({
    left: 0,
    width: 0,
  });
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const updatePill = useCallback(
    (index: number) => {
      const btn = itemRefs.current[index];
      const container = containerRef.current;
      if (!btn || !container) return;
      const containerRect = container.getBoundingClientRect();
      const btnRect = btn.getBoundingClientRect();
      setPillStyle({
        left: btnRect.left - containerRect.left,
        width: btnRect.width,
      });
    },
    []
  );

  useEffect(() => {
    updatePill(activeIndex);
  }, [activeIndex, updatePill]);

  useEffect(() => {
    const handleResize = () => updatePill(activeIndex);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex, updatePill]);

  const createParticle = (
    x: number,
    y: number,
    container: HTMLDivElement
  ) => {
    for (let i = 0; i < particleCount; i++) {
      const span = document.createElement("span");
      const angle = Math.random() * Math.PI * 2;
      const dist =
        particleDistances[1] +
        Math.random() * (particleDistances[0] - particleDistances[1]);
      const tx = Math.cos(angle) * dist;
      const ty = Math.sin(angle) * dist;
      const colorIndex = colors[i % colors.length];
      const delay = Math.random() * timeVariance;

      span.className = "gooey-particle";
      span.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: ${particleR / 10}px;
        height: ${particleR / 10}px;
        border-radius: 50%;
        pointer-events: none;
        background: var(--gooey-color-${colorIndex}, #fff);
        animation: gooey-particle-anim ${animationTime}ms ease forwards;
        animation-delay: ${delay}ms;
        --tx: ${tx}px;
        --ty: ${ty}px;
        opacity: 0;
      `;
      container.appendChild(span);
      setTimeout(() => {
        span.remove();
      }, animationTime + delay + 100);
    }
  };

  const handleClick = (index: number, e: React.MouseEvent) => {
    setActiveIndex(index);

    const container = containerRef.current;
    if (container) {
      const rect = container.getBoundingClientRect();
      createParticle(
        e.clientX - rect.left,
        e.clientY - rect.top,
        container
      );
    }

    onItemClick?.(items[index].href, index);
  };

  return (
    <>
      <style>{`
        @keyframes gooey-particle-anim {
          0% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(var(--tx), var(--ty)) scale(0);
          }
        }
      `}</style>
      <div
        ref={containerRef}
        className={`relative flex items-center gap-0.5 ${className}`}
      >
        {/* Active pill background */}
        <div
          className="absolute top-0 h-full rounded-lg bg-gray-950/10 dark:bg-white/15 transition-all duration-300 ease-out"
          style={{
            left: pillStyle.left,
            width: pillStyle.width,
          }}
        />

        {items.map((item, i) => (
          <button
            key={item.href}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            onClick={(e) => handleClick(i, e)}
            className={`relative z-10 px-3 py-1.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
              activeIndex === i
                ? "text-gray-950 dark:text-white"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-950 dark:hover:text-gray-200"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </>
  );
}
