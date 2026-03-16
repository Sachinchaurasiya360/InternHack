export interface InterviewSection {
  id: string;
  title: string;
  description: string;
  orderIndex: number;
  level: "Beginner" | "Intermediate" | "Advanced";
}

export interface CodeExample {
  title: string;
  code: string;
  output?: string;
  explanation?: string;
}

export interface InterviewQuestion {
  id: string;
  sectionId: string;
  orderIndex: number;
  title: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  type: "Theory" | "Coding" | "Situational" | "Concept" | "Experience";
  concepts: string[];
  content: {
    question: string;
    answer: string;
    codeExamples?: CodeExample[];
    notes?: string[];
    followUps?: string[];
    interviewTips?: string[];
  };
}

export type InterviewProgress = Record<string, {
  completed: boolean;
}>;
