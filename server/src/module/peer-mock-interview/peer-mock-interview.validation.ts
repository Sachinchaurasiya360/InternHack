import { z } from "zod";

export const mockInterviewPreferenceSchema = z
  .object({
    topic: z.enum(["DSA", "SYSTEM_DESIGN", "FRONTEND", "BACKEND", "BEHAVIORAL", "DEVOPS", "DATA_SCIENCE", "OTHER"]),
    // Free-text topic, only meaningful (and required) when topic = OTHER
    customTopic: z.string().trim().min(1).max(60).optional(),
    availability: z.array(z.enum(["WEEKDAYS_MORNING", "WEEKDAYS_AFTERNOON", "WEEKDAYS_EVENING", "WEEKENDS"])).default([]),
    enabled: z.boolean().default(true),
    targetRole: z.string().trim().max(120).optional(),
    experienceLevel: z.enum(["STUDENT", "FRESHER", "0_2_YEARS", "2_PLUS_YEARS"]).optional(),
    focusAreas: z.array(z.string().trim().max(60)).max(10).default([]),
  })
  .refine((data) => data.topic !== "OTHER" || !!data.customTopic, {
    message: "Enter your interview topic",
    path: ["customTopic"],
  })
  .transform((data) => ({
    ...data,
    customTopic: data.topic === "OTHER" ? data.customTopic : undefined,
  }));

export const selectMatchSchema = z.object({
  candidateUserId: z.number().int().positive(),
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
