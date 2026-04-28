import type { CSSProperties } from "react";
import type { Variants } from "framer-motion";

export const SD = "#84cc16";
export const SD_SOFT = "rgba(132,204,22,0.10)";
export const SD_BORDER = "rgba(132,204,22,0.35)";

export const MONO = '"JetBrains Mono", Menlo, Consolas, monospace';

export const sectionTitle: CSSProperties = {
  fontFamily: "var(--eng-font)",
  fontWeight: 700,
  fontSize: "1.15rem",
  color: "var(--eng-text)",
  margin: "0 0 12px",
};

export const sectionDesc: CSSProperties = {
  fontFamily: "var(--eng-font)",
  fontSize: "0.92rem",
  color: "var(--eng-text-muted)",
  margin: "0 0 20px",
  lineHeight: 1.65,
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
};

export const cardEntrance: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 280, damping: 26 },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 320, damping: 28 },
  },
};

export const cardHover = {
  y: -3,
  transition: { type: "spring" as const, stiffness: 320, damping: 22 },
};
