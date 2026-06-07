import { z } from "zod";

export const executeCodeSchema = z.object({
  language: z.enum(["python", "cpp", "java"]),
  code: z.string().min(1, "Code is required").max(50000, "Code too long"),
});

export const codeReviewResponseSchema = z.object({
  timeComplexity: z.string(),
  spaceComplexity: z.string(),
  readability: z.object({
    score: z.number().min(1).max(10),
    feedback: z.string(),
  }),
  edgeCases: z.array(z.string()),
  suggestions: z.array(z.string()),
});

export type CodeReviewResponse = z.infer<typeof codeReviewResponseSchema>;
