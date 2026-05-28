import { useMemo } from "react";

const WORDS_PER_MINUTE = 200;

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, "");
}

function calculateReadingTime(
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

export function useReadingTime(
  content: string
) {
  const readingTime = useMemo(
    () => calculateReadingTime(content),
    [content]
  );

  return readingTime;
}