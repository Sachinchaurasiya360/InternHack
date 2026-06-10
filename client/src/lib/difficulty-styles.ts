export type Difficulty = "Easy" | "Medium" | "Hard";

export const DIFF_COLOR: Record<Difficulty, string> = {
  Easy: "text-emerald-600 dark:text-emerald-400",
  Medium: "text-amber-500 dark:text-amber-400",
  Hard: "text-rose-500 dark:text-rose-400",
};
