/** Returns true when the current date falls in October 2026 (Hacktoberfest season). */
export function isHacktoberfestMode(date: Date = new Date()): boolean {
  return date.getFullYear() === 2026 && date.getMonth() === 9;
}
