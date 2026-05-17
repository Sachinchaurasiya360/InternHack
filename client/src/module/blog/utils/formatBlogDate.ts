export function formatBlogDate(
  date: string,
  options?: Intl.DateTimeFormatOptions
): string {
  if (!date) return "";

  return new Date(date).toLocaleDateString(
    "en-US",
    options ?? {
      month: "short",
      day: "numeric",
      year: "numeric",
    }
  );
}