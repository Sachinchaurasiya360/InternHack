import type { ReactNode } from "react";

interface ChildrenProps {
  children: ReactNode;
  className?: string;
}

export function SectionEyebrow({ children }: ChildrenProps) {
  return (
    <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
      <span className="h-1 w-1 bg-lime-400" />
      {children}
    </div>
  );
}

export function SectionTitle({ children }: ChildrenProps) {
  return (
    <h2 className="mt-2 text-xl sm:text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
      {children}
    </h2>
  );
}

export function SubHeading({ children }: ChildrenProps) {
  return (
    <h3 className="text-base font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-2">
      {children}
    </h3>
  );
}

export function Lede({ children }: ChildrenProps) {
  return (
    <p className="mt-2 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
      {children}
    </p>
  );
}

interface CardProps extends ChildrenProps {
  padded?: boolean;
}

export function Card({ children, className = "", padded = true }: CardProps) {
  return (
    <div
      className={`bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md ${padded ? "p-5" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

export function Callout({ children, className = "" }: ChildrenProps) {
  return (
    <div
      className={`bg-stone-50 dark:bg-stone-900/60 border border-stone-200 dark:border-white/10 rounded-md px-4 py-3 text-sm text-stone-700 dark:text-stone-300 leading-relaxed ${className}`}
    >
      {children}
    </div>
  );
}

interface PillButtonProps {
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
  title?: string;
}

export function PillButton({ children, active, onClick, title }: PillButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className={`px-3 py-1.5 rounded-md text-xs font-medium border transition-colors cursor-pointer ${
        active
          ? "bg-lime-400/15 text-lime-700 dark:text-lime-300 border-lime-400"
          : "bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 border-stone-300 dark:border-white/10 hover:border-stone-500 dark:hover:border-white/30 hover:text-stone-900 dark:hover:text-stone-50"
      }`}
    >
      {children}
    </button>
  );
}

interface CodeBlockProps {
  children: ReactNode;
  className?: string;
}

export function CodeBlock({ children, className = "" }: CodeBlockProps) {
  return (
    <pre
      className={`bg-stone-950 dark:bg-black text-stone-100 px-4 py-3 rounded-md text-xs font-mono leading-relaxed overflow-x-auto border border-stone-800 ${className}`}
    >
      {children}
    </pre>
  );
}

export function InlineCode({ children }: ChildrenProps) {
  return (
    <code className="font-mono text-[0.85em] bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100 px-1.5 py-0.5 rounded">
      {children}
    </code>
  );
}

/**
 * Theme tokens for inline-styled elements (SVG charts, dynamic colors).
 * Prefer Tailwind classes wherever possible; use these only for runtime style props.
 */
export const THEME = {
  accent: "#a3e635", // lime-400
  accentSoft: "#ecfccb", // lime-100
  accentDark: "#65a30d", // lime-600
  text: "#1c1917", // stone-900
  textSecondary: "#44403c", // stone-700
  textMuted: "#78716c", // stone-500
  bg: "#fafaf9", // stone-50
  bgPanel: "#ffffff",
  border: "#e7e5e4", // stone-200
  borderLight: "#f5f5f4", // stone-100
  success: "#65a30d",
  successSoft: "#dcfce7",
  successDark: "#365314",
  danger: "#dc2626",
  dangerSoft: "#fee2e2",
  dangerDark: "#7f1d1d",
  mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
  heading: "ui-sans-serif, system-ui, sans-serif",
} as const;
