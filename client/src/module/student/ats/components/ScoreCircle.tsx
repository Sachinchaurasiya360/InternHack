import { motion } from "framer-motion";

export interface ScoreTier {
  min: number;
  label: string;
  stroke: string;
  text: string;
  bar: string;
}

export const SCORE_TIERS: ScoreTier[] = [
  {
    min: 70,
    label: "Excellent",
    stroke: "#a3e635", // lime-400
    text: "text-lime-600 dark:text-lime-400",
    bar: "bg-lime-400",
  },
  {
    min: 40,
    label: "Needs Work",
    stroke: "#eab308",
    text: "text-yellow-600 dark:text-yellow-400",
    bar: "bg-yellow-500",
  },
  {
    min: 0,
    label: "Poor",
    stroke: "#ef4444",
    text: "text-red-600 dark:text-red-400",
    bar: "bg-red-500",
  },
];

export const getScoreTier = (score: number): ScoreTier =>
  SCORE_TIERS.find((t) => score >= t.min) ?? SCORE_TIERS[SCORE_TIERS.length - 1]!;

export function ScoreCircle({
  score,
  size = "lg",
}: {
  score: number;
  size?: "lg" | "sm";
}) {
  const isLg = size === "lg";
  const radius = isLg ? 62 : 36;
  const viewBox = isLg ? "0 0 160 160" : "0 0 88 88";
  const cx = isLg ? 80 : 44;
  const sw = isLg ? 10 : 6;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  const tier = getScoreTier(score);
  const { stroke: strokeColor, text: textColor } = tier;

  return (
    <div className="flex items-center shrink-0">
      <div className={isLg ? "relative w-40 h-40" : "relative w-20 h-20"}>
        <svg className="w-full h-full -rotate-90" viewBox={viewBox}>
          <circle
            cx={cx}
            cy={cx}
            r={radius}
            fill="none"
            stroke="#e7e5e4"
            strokeWidth={sw}
            className="dark:stroke-white/10"
          />
          <motion.circle
            cx={cx}
            cy={cx}
            r={radius}
            fill="none"
            stroke={strokeColor}
            strokeWidth={sw}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.3, ease: "easeOut", delay: 0.2 }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
            className={`${isLg ? "text-5xl" : "text-xl"} font-bold tracking-tight ${textColor} leading-none tabular-nums`}
          >
            {score}
          </motion.span>
          {isLg && (
            <span className="text-stone-400 dark:text-stone-600 text-[10px] mt-1 font-mono uppercase tracking-widest">
              / 100
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
