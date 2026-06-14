export function formatDate(
  date: string | Date,
  format: "short" | "full" | "relative" = "short"
): string {
  const d = typeof date === "string" ? new Date(date) : date;

  if (format === "short")
    return d.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  if (format === "full")
    return d.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  // relative
  const diff = Math.floor((Date.now() - d.getTime()) / 1000);

  if (diff < 0) {
    const ahead = Math.abs(diff);
    if (ahead < 60) return "in a few seconds";
    if (ahead < 3600) return `in ${Math.floor(ahead / 60)} minutes`;
    if (ahead < 86400) return `in ${Math.floor(ahead / 3600)} hours`;
    if (ahead < 2592000) return `in ${Math.floor(ahead / 86400)} days`;
  }

  if (diff < 60) return "just now";
  if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
  if (diff < 2592000) return `${Math.floor(diff / 86400)} days ago`;

  return d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}