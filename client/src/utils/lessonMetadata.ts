import type { FlaskLesson } from "../module/student/flask/data/types";

function calcReadingMinutes(text: string): number {
  const trimmed = text.trim();
  if (!trimmed) return 0;
  const words = trimmed.split(/\s+/).length;
  return Math.ceil(words / 200);
}

export function getReadingTime(text: string): string {
  const minutes = calcReadingMinutes(text);
  if (!minutes) return "~0 min read";
  return `~${minutes} min read`;
}

export function getReadingMinutes(text: string): number {
  return calcReadingMinutes(text);
}

export function countCodeBlocks(lesson: FlaskLesson): number {
  const examples = lesson?.content?.codeExamples ?? [];
  return examples.length;
}

export function hasExercises(lesson: FlaskLesson): boolean {
  return Array.isArray(lesson?.exercises) && lesson.exercises.length > 0;
}
