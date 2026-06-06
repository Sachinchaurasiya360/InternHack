import type { Lesson } from "../module/student/flask/data/types";

export function getReadingTime(text: string): string {
  const trimmed = text.trim();
  if (!trimmed) return "~0 min read";
  const words = trimmed.split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `~${minutes} min read`;
}

export function getReadingMinutes(text: string): number {
  const trimmed = text.trim();
  if (!trimmed) return 0;
  const words = trimmed.split(/\s+/).length;
  return Math.ceil(words / 200);
}

export function countCodeBlocks(lesson: Lesson): number {
  const examples = lesson?.content?.codeExamples ?? [];
  return examples.length;
}

export function hasExercises(lesson: Lesson): boolean {
  return Array.isArray(lesson?.exercises) && lesson.exercises.length > 0;
}
