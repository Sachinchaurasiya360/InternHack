export interface PythonSection {
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

export interface PracticeExercise {
  id: string;
  title: string;
  description: string;
  starterCode: string;
  solution: string;
  expectedOutput: string;
  hints: string[];
  difficulty: "Easy" | "Medium" | "Hard";
}

export interface PythonLesson {
  id: string;
  sectionId: string;
  orderIndex: number;
  title: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  isInterviewQuestion: boolean;
  concepts: string[];
  content: {
    explanation: string;
    codeExamples: CodeExample[];
    notes: string[];
    commonPitfalls?: string[];
    interviewTips?: string[];
  };
  exercises?: PracticeExercise[];
}

export type PythonProgress = Record<string, {
  completed: boolean;
  exercisesSolved?: Record<string, boolean>;
}>;
