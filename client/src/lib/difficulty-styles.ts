export const DIFFICULTY_STYLE: Record<string, string> = {
  // Interview prep (bordered chips)
  Beginner:     "text-green-700 dark:text-green-400 border-green-300 dark:border-green-900/60",
  Intermediate: "text-amber-700 dark:text-amber-400 border-amber-300 dark:border-amber-900/60",
  Advanced:     "text-red-700 dark:text-red-400 border-red-300 dark:border-red-900/60",
  // DSA (text-only)
  Easy:   "text-emerald-600 dark:text-emerald-400",
  Medium: "text-amber-600 dark:text-amber-400",
  Hard:   "text-rose-600 dark:text-rose-400",
};

// Backward-compatible alias used by DSA pages
export const DIFF_COLOR = DIFFICULTY_STYLE;