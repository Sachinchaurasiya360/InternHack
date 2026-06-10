export function getStatusColor(status: string): string {
  switch (status) {
    case "APPLIED":     return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
    case "IN_PROGRESS": return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
    case "SHORTLISTED": return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
    case "REJECTED":    return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
    case "HIRED":       return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400";
    case "WITHDRAWN":   return "bg-stone-100 text-stone-700 dark:bg-stone-800 dark:text-stone-300";
    default:            return "bg-stone-100 text-stone-700 dark:bg-stone-800 dark:text-stone-300";
  }
}
