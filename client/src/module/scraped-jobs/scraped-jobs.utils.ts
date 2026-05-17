import type { ScrapedJobSource } from "../../lib/types";

export function getSourceBadgeColor(src: string): string {
  switch (src) {
    case "remotive":
      return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400";
    case "arbeitnow":
      return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
    case "adzuna":
      return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
    case "linkedin":
      return "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400";
    default:
      return "bg-stone-100 text-stone-700 dark:bg-stone-800 dark:text-stone-300";
  }
}

export function getSourceLabel(src: string, sources: ScrapedJobSource[]): string {
  const found = sources.find((s) => s.id === src);
  return found ? found.name : src;
}
