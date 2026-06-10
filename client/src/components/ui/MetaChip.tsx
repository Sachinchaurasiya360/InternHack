import type { ReactNode } from "react";

interface MetaChipProps {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

export function MetaChip({ children, icon, className = "" }: MetaChipProps) {
  const defaultColors = "text-stone-600 dark:text-stone-400 border-stone-200 dark:border-white/10";
  
  const finalClass = `inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-mono uppercase tracking-wider border rounded-md ${
    className || defaultColors
  }`;

  return (
    <span className={finalClass}>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
}
