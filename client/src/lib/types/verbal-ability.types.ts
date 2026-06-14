export type VerbalSubtopicSlug =
  | "reading-comprehension"
  | "sentence-correction"
  | "para-jumbles"
  | "error-spotting"
  | "synonyms-antonyms"
  | "cloze-test"
  | "one-word-substitution";

export interface VerbalQuestion {
  id: number;
  questionText: string;
  options: string[]; // 4 options
  correctOptionIndex: number; // 0 to 3
  explanation: string;
  difficulty: "Easy" | "Medium" | "Hard";
}

export interface ReadingComprehensionPassage {
  id: number; 
  title: string;
  paragraphs: string[]; // multi-paragraph blocks
  questions: VerbalQuestion[];
  companies: string[];
}

export interface VerbalQuestionItem {
  id: number;
  questionText: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
  difficulty: "Easy" | "Medium" | "Hard";
  companies: string[];
}

export interface SubtopicInfo {
  name: string;
  slug: VerbalSubtopicSlug;
  description: string;
  companies: string[];
  completionPercentage: number;
}

