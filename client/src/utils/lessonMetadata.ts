// Utility functions for lesson metadata

export function getReadingTime(text: string): string {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `~${minutes} min read`;
}

export function countCodeBlocks(lesson: any): number {
  const examples = lesson?.content?.codeExamples ?? [];
  return examples.length;
}

export function hasExercises(lesson: any): boolean {
  return Array.isArray(lesson?.exercises) && lesson.exercises.length > 0;
}

export function getDifficultyColor(difficulty: string): string {
  switch (difficulty?.toLowerCase()) {
    case "beginner": return "text-green-600 bg-green-50 border-green-200";
    case "intermediate": return "text-yellow-600 bg-yellow-50 border-yellow-200";
    case "advanced": return "text-red-600 bg-red-50 border-red-200";
    default: return "text-gray-600 bg-gray-50 border-gray-200";
  }
}