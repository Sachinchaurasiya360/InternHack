import { motion } from "framer-motion";

interface ProgressBarProps {
  value: number;
  max: number;
  label?: string;
  animated?: boolean;
  height?: "thin" | "normal";
  activeColor?: string;
}

export function ProgressBar({
  value,
  max,
  label,
  animated = true,
  height = "normal",
  activeColor = "bg-lime-400",
}: ProgressBarProps) {
  const pct = max > 0 ? Math.round((value / max) * 100) : 0;
  const trackHeight = height === "thin" ? "h-0.5" : "h-1";

  if (height === "thin") {
    return (
      <div className={`w-full ${trackHeight} bg-stone-200 dark:bg-white/10 overflow-hidden`}>
        {animated ? (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className={`h-full ${activeColor}`}
          />
        ) : (
          <div className={`h-full ${activeColor}`} style={{ width: `${pct}%` }} />
        )}
      </div>
    );
  }

  return (
    <div className="px-5 py-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md">
      <div className="flex items-center justify-between gap-4 mb-2">
        {label && (
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
            {label}
          </span>
        )}
        <span className="text-xs font-mono uppercase tracking-widest text-stone-900 dark:text-stone-50 tabular-nums ml-auto">
          {value} / {max}
        </span>
      </div>
      <div className={`w-full ${trackHeight} bg-stone-100 dark:bg-stone-800 overflow-hidden rounded-sm`}>
        {animated ? (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`h-full ${activeColor}`}
          />
        ) : (
          <div className={`h-full ${activeColor}`} style={{ width: `${pct}%` }} />
        )}
      </div>
    </div>
  );
}