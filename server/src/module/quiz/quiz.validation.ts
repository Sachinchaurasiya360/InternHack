import { z } from "zod";

export const submitAttemptSchema = z.object({
  answers: z.array(z.object({
    questionId: z.number().int(),
    selectedIndex: z.number().int().min(0).max(3),
  })).min(1),
});

export const createQuizSchema = z.object({
  skillId: z.number().int(),
  title: z.string().min(1),
  description: z.string().optional(),
  passThreshold: z.number().int().min(1).max(100).default(70),
  timeLimitSecs: z.number().int().positive().optional(),
});

export const createQuestionSchema = z.object({
  question: z.string().min(1),
  options: z.array(z.string().min(1)).length(4),
  correctIndex: z.number().int().min(0).max(3),
  explanation: z.string().optional(),
});

export const addQuestionsSchema = z.object({
  questions: z.array(createQuestionSchema).min(1),
});
