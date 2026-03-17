export interface SolvedExample {
  problem: string;
  solution: string;
  answer: string;
}

export interface Formula {
  name: string;
  formula: string;
  description?: string;
}

export interface Method {
  name: string;
  steps: string[];
}

export interface TopicTheory {
  slug: string;
  categorySlug: string;
  introduction: string;
  concepts?: string[];
  formulas?: Formula[];
  methods?: Method[];
  rules?: string[];
  quickTricks?: string[];
  solvedExamples: SolvedExample[];
  commonMistakes?: string[];
  keyTakeaways: string[];
}
