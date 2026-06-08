import { z } from "zod";

const questionIdSchema = z.string().trim().min(1).max(160).regex(/^[a-zA-Z0-9-]+$/, "Question ID must be alphanumeric with dashes only");
const idArraySchema = z.array(questionIdSchema).max(1000);

export const interviewProgressActionSchema = z.object({
  action: z.enum(["complete", "uncomplete", "bookmark", "unbookmark", "visit"]),
});

export const bulkInterviewProgressSchema = z.object({
  completedIds: idArraySchema.default([]),
  bookmarkedIds: idArraySchema.default([]),
  lastVisitedId: questionIdSchema.nullish(),
});

export const executeCodeSchema = z.object({
  language: z.enum(["python", "cpp", "java", "javascript", "typescript", "go", "rust", "ruby", "swift", "kotlin", "php", "csharp", "scala", "r"]),
  code: z.string().min(1, "Code is required").max(50000, "Code too long"),
  stdin: z.string().max(10000).optional().default(""),
});

export type InterviewProgressAction = z.infer<typeof interviewProgressActionSchema>["action"];
export type BulkInterviewProgressInput = z.infer<typeof bulkInterviewProgressSchema>;
export type ExecuteCodeInput = z.infer<typeof executeCodeSchema>;
