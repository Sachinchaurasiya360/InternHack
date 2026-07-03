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

export const proposeTimeSchema = z.object({
  proposedTime: z.string().datetime().transform((val) => new Date(val)),
});

export const acceptTimeSchema = z.object({
  // Restrict to http(s): z.string().url() also accepts javascript:/data: URLs,
  // and the meeting link is rendered as an <a href> in the UI and emails, so an
  // unrestricted scheme is a stored-XSS / phishing vector for the matched peer.
  meetingLink: z
    .string()
    .url()
    .max(500)
    .refine(
      (url) => /^https?:\/\//i.test(url),
      "Meeting link must start with http:// or https://",
    )
    .optional(),
});
