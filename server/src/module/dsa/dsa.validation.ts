import { z } from "zod";

// Code now executes in the student's own browser (Web Worker for JS, Pyodide
// for Python) — the server never sees the runtime, only the outcome each test
// case produced, which it compares against the stored expected output.
export const executeCodeSchema = z.object({
  language: z.enum(["python", "javascript"]),
  code: z.string().min(1, "Code is required").max(50000, "Code too long"),
  results: z
    .array(
      z.object({
        testCaseId: z.number().int().positive(),
        actual: z.string().max(20000, "Output too long"),
        timeMs: z.number().min(0).max(30000),
        error: z.string().max(4000).optional(),
      }),
    )
    .min(1, "No results provided")
    .max(50, "Too many test case results"),
});

export const syncLeetCodeSchema = z.object({
  leetcodeUsername: z.string().min(1, "LeetCode username is required").max(100),
});

export const addLabelSchema = z.object({
  label: z
    .string()
    .trim()
    .min(1, "Label cannot be empty")
    .max(40, "Label too long"),
});
export type AddLabelInput = z.infer<typeof addLabelSchema>;

export const removeLabelSchema = z.object({
  label: z.string().trim().min(1, "Label cannot be empty").max(40),
});
export type RemoveLabelInput = z.infer<typeof removeLabelSchema>;

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
