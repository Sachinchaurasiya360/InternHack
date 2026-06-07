import { z } from "zod";

const questionIdSchema = z.string().trim().min(1).max(160);
const idArraySchema = z.array(questionIdSchema).max(1000);

export const interviewProgressActionSchema = z.object({
  action: z.enum(["complete", "uncomplete", "bookmark", "unbookmark", "visit"]),
});

export const bulkInterviewProgressSchema = z.object({
  completedIds: idArraySchema.default([]),
  bookmarkedIds: idArraySchema.default([]),
  lastVisitedId: questionIdSchema.nullish(),
});

export type InterviewProgressAction = z.infer<typeof interviewProgressActionSchema>["action"];
export type BulkInterviewProgressInput = z.infer<typeof bulkInterviewProgressSchema>;
