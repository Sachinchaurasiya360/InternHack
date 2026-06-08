import { z } from "zod";

export const submitReviewSchema = z.object({
  title: z.string().max(200).optional().default("Untitled Review"),
  language: z.enum(["python", "cpp", "java", "javascript", "typescript", "go", "rust", "swift", "kotlin"]).optional().default("python"),
  code: z.string().min(1, "Code is required").max(50000, "Code too long"),
  problemContext: z.string().max(2000).optional(),
});

export const reviewResponseSchema = z.object({
  timeComplexity: z.string(),
  spaceComplexity: z.string(),
  readability: z.object({
    score: z.number().min(1).max(10),
    feedback: z.string(),
  }),
  edgeCases: z.array(z.string()),
  suggestions: z.array(z.string()),
});

export type ReviewResponse = z.infer<typeof reviewResponseSchema>;
