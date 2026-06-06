const WORDS_PER_MINUTE = 200;

export function stripHtml(
  html: string
): string {
  return html.replace(/<[^>]*>/g, "");
}

export function calculateReadingTime(
  content: string
): number {
  if (!content) return 1;

  const cleanText = stripHtml(content);

  const words = cleanText
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  return Math.max(
    1,
    Math.ceil(words.length / WORDS_PER_MINUTE)
  );
}