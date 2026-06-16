import { z } from "zod";

export const evaluateStarSchema = z.object({
  question: z.string().min(5, "Question is required").max(500),
  situation: z.string().min(10, "Situation must be at least 10 characters").max(2000),
  task: z.string().min(5, "Task must be at least 5 characters").max(1000),
  action: z.string().min(10, "Action must be at least 10 characters").max(3000),
  result: z.string().min(5, "Result must be at least 5 characters").max(1000),
});

export type EvaluateStarInput = z.infer<typeof evaluateStarSchema>;

export interface SectionEvaluation {
  addressed: boolean;
  specificity: string;
  feedback: string;
}

export interface StarEvaluationResult {
  situation: SectionEvaluation;
  task: SectionEvaluation;
  action: SectionEvaluation;
  result: SectionEvaluation;
  overallScore: number;
  estimatedSpeakingTime: string;
  modelAnswer: string;
  overallFeedback: string;
}
