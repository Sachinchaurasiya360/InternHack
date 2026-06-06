import { z } from "zod";

export const trackContentSchema = z.object({
  contentType: z.enum(["LESSON", "DSA", "INTERVIEW_QUESTION"]),
  contentId: z.union([z.string(), z.number()]).transform(val => String(val)),
  timeSpentMs: z.number().int().min(0).max(2147483647),
  completed: z.boolean().default(false),
});
