import { z } from "zod";

export const scheduleInterviewSchema = z.object({
  body: z.object({
    studentId: z.number().int().positive(),
    scheduledAt: z.string().datetime(),
    durationMinutes: z.number().int().positive().default(60),
    meetingLink: z.string().url().optional(),
    notes: z.string().optional(),
  }),
});

export const updateInterviewSchema = z.object({
  body: z.object({
    scheduledAt: z.string().datetime().optional(),
    durationMinutes: z.number().int().positive().optional(),
    meetingLink: z.string().url().optional(),
    notes: z.string().optional(),
  }),
});

export const getInterviewsSchema = z.object({
  query: z.object({
    page: z.string().optional(),
    limit: z.string().optional(),
    role: z.enum(["RECRUITER", "STUDENT"]).optional(),
    status: z.enum(["SCHEDULED", "COMPLETED", "CANCELLED"]).optional(),
    upcoming: z.string().optional(), // "true" or "false"
  }),
});
