import React from "react";

interface CircularProgressProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
  /** Tailwind class applied to the progress arc, e.g. "stroke-indigo-500". */
  progressClassName?: string;
  /** Tailwind class applied when progress === 100. Falls back to progressClassName. */
  completeClassName?: string;
  /** Tailwind class applied to the track (background) circle. */
  trackClassName?: string;
  /** Tailwind class applied to the % label. */
  labelClassName?: string;
}

/**
 * Shared circular progress ring. Clamps progress to [0, 100] so callers can
 * pass raw ratios without worrying about overflow.
 */
export const CircularProgress = React.memo(function CircularProgress({
  progress,
  size = 52,
  strokeWidth = 4,
  progressClassName = "stroke-indigo-500",
  completeClassName = "stroke-emerald-500",
  trackClassName = "stroke-gray-100 dark:stroke-gray-800",
  labelClassName = "text-xs font-bold text-gray-700 dark:text-gray-300",
}: CircularProgressProps) {
  const clamped = Math.min(100, Math.max(0, progress));
  const r = (size - strokeWidth - 2) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (clamped / 100) * circ;
  const arcClass = clamped === 100 ? completeClassName : progressClassName;

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }} aria-hidden>
      <svg className="-rotate-90" width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" className={trackClassName} strokeWidth={strokeWidth} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          className={arcClass}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={`${circ}`}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.6s ease" }}
        />
      </svg>
      <span className={`absolute inset-0 flex items-center justify-center ${labelClassName}`}>
        {Math.round(clamped)}%
      </span>
    </div>
  );
});
