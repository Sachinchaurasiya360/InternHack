/**
 * Canonical application-status → Tailwind-class mappings.
 *
 * Every surface that renders a status badge (student cards, recruiter tables,
 * progress pages) should import from here so colours stay consistent.
 *
 * Two variants are exported:
 *   • `getStatusColor`       – filled-background badges (recruiter tables, progress pages)
 *   • `getStatusBorderColor` – bordered badges (student application cards)
 */

/** Filled-background variant (e.g. `<span class="rounded-full ${getStatusColor(s)}">`) */
export function getStatusColor(status: string): string {
  switch (status) {
    case "APPLIED":
      return "bg-stone-100 text-stone-700 dark:bg-stone-800 dark:text-stone-300";
    case "IN_PROGRESS":
      return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400";
    case "SHORTLISTED":
      return "bg-lime-100 text-lime-700 dark:bg-lime-900/30 dark:text-lime-400";
    case "HIRED":
      return "bg-lime-100 text-lime-700 dark:bg-lime-900/30 dark:text-lime-400";
    case "REJECTED":
      return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
    case "WITHDRAWN":
      return "bg-stone-100 text-stone-500 dark:bg-stone-800 dark:text-stone-400";
    default:
      return "bg-stone-100 text-stone-500 dark:bg-stone-800 dark:text-stone-400";
  }
}

/** Bordered variant (e.g. `<span class="border rounded-md ${getStatusBorderColor(s)}">`) */
export function getStatusBorderColor(status: string): string {
  switch (status) {
    case "APPLIED":
      return "text-stone-900 dark:text-stone-50 border-stone-300 dark:border-white/20";
    case "IN_PROGRESS":
      return "text-amber-700 dark:text-amber-400 border-amber-300 dark:border-amber-900/60";
    case "SHORTLISTED":
      return "text-lime-700 dark:text-lime-400 border-lime-400";
    case "HIRED":
      return "text-lime-700 dark:text-lime-400 border-lime-400 bg-lime-50 dark:bg-lime-950/40";
    case "REJECTED":
      return "text-red-600 dark:text-red-400 border-red-300 dark:border-red-900/60";
    case "WITHDRAWN":
      return "text-stone-400 border-stone-200 dark:border-white/10";
    default:
      return "text-stone-500 border-stone-200 dark:border-white/10";
  }
}
