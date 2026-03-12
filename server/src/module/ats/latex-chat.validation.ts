import { z } from "zod";

const chatMessageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string().max(5000),
});

export const latexChatSchema = z.object({
  latexCode: z.string().min(10, "LaTeX code is required").max(50000),
  message: z.string().min(1, "Message is required").max(2000),
  history: z.array(chatMessageSchema).max(20).optional().default([]),
});

export const latexJDOptimizeSchema = z.object({
  latexCode: z.string().min(10, "LaTeX code is required").max(50000),
  jobDescription: z
    .string()
    .min(50, "Job description must be at least 50 characters")
    .max(5000),
});

export type LatexChatInput = z.infer<typeof latexChatSchema>;
export type LatexJDOptimizeInput = z.infer<typeof latexJDOptimizeSchema>;
