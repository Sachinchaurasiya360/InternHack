import { motion } from "framer-motion";
import {
  BarChart2,
  Search,
  Award,
  Zap,
  FileText,
  TrendingUp,
  AlignLeft,
} from "lucide-react";
import type { AtsCategoryScores } from "../../../../lib/types";
import { getScoreTier } from "./ScoreCircle";

const CATEGORY_LABELS: Record<string, string> = {
  formatting: "Formatting",
  keywords: "Keywords",
  experience: "Experience",
  skills: "Skills",
  education: "Education",
  impact: "Impact",
};

const CATEGORY_ICONS: Record<string, typeof BarChart2> = {
  formatting: AlignLeft,
  keywords: Search,
  experience: Award,
  skills: Zap,
  education: FileText,
  impact: TrendingUp,
};

export function ScoreBreakdownPanel({
  categoryScores,
}: {
  categoryScores: AtsCategoryScores;
}) {
  return (
    <motion.div
      key="breakdown"
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 8 }}
      transition={{ duration: 0.18 }}
      className="space-y-2.5"
    >
      {Object.entries(categoryScores).map(([key, score]) => {
        const Icon = CATEGORY_ICONS[key] ?? BarChart2;
        const tier = getScoreTier(score);
        return (
          <div
            key={key}
            className="flex items-center gap-3 p-3.5 bg-stone-50/60 dark:bg-stone-950/40 border border-stone-200 dark:border-white/10 rounded-md"
          >
            <div className="w-9 h-9 rounded-md flex items-center justify-center shrink-0 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10">
              <Icon className="w-4 h-4 text-stone-600 dark:text-stone-400" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-sm font-bold text-stone-900 dark:text-stone-50">
                  {CATEGORY_LABELS[key] ?? key}
                </span>
                <span
                  className={`text-sm font-bold tabular-nums ${tier.text}`}
                >
                  {score}
                  <span className="text-stone-400 dark:text-stone-600 text-xs font-normal">
                    /100
                  </span>
                </span>
              </div>
              <div className="h-1.5 bg-stone-200 dark:bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${String(score)}%` }}
                  transition={{
                    duration: 0.9,
                    delay: 0.1,
                    ease: "easeOut",
                  }}
                  className={`h-full rounded-full ${tier.bar}`}
                />
              </div>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}
