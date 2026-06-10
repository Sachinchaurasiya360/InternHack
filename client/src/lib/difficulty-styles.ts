export type Difficulty = "Easy" | "Medium" | "Hard" | "Beginner" | "Intermediate" | "Advanced";

export const DIFFICULTY_STYLE: Record<string, string> = {
  Beginner: "border border-emerald-500 text-emerald-600 dark:text-emerald-400",
  Intermediate: "border border-amber-500 text-amber-500 dark:text-amber-400",
  Advanced: "border border-rose-500 text-rose-500 dark:text-rose-400",
  Easy: "text-emerald-600 dark:text-emerald-400",
  Medium: "text-amber-500 dark:text-amber-400",
  Hard: "text-rose-500 dark:text-rose-400",
};

export const DIFF_COLOR = DIFFICULTY_STYLE;
