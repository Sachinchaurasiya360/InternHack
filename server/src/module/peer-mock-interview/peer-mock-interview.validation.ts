import { z } from "zod";

export const mockInterviewPreferenceSchema = z.object({
  topic: z.enum(["DSA", "SYSTEM_DESIGN", "FRONTEND"]),
  availability: z.array(z.enum(["WEEKDAYS_MORNING", "WEEKDAYS_AFTERNOON", "WEEKDAYS_EVENING", "WEEKENDS"])).default([]),
  enabled: z.boolean().default(true),
});

export const mockInterviewFeedbackSchema = z.object({
  rating: z.number().int().min(1).max(5),
  feedback: z.string().trim().max(1000).optional(),
});
