import { z } from "zod";

export const createInterviewSchema = z.object({
  applicationId: z.number().int().positive(),
  type: z.enum(["PHONE", "VIDEO", "IN_PERSON", "PANEL", "TECHNICAL", "HR"]).default("VIDEO"),
  scheduledAt: z.string().datetime(),
  durationMinutes: z.number().int().positive().default(60),
  meetingLink: z.string().url().optional(),
  location: z.string().max(200).optional(),
  interviewerIds: z.array(z.number().int().positive()).default([]),
  candidateNotes: z.string().max(1000).optional(),
});

export const updateInterviewSchema = z.object({
  scheduledAt: z.string().datetime().optional(),
  durationMinutes: z.number().int().positive().optional(),
  meetingLink: z.string().url().optional(),
  location: z.string().max(200).optional(),
  status: z.enum(["SCHEDULED", "CONFIRMED", "COMPLETED", "CANCELLED", "NO_SHOW", "RESCHEDULED"]).optional(),
  interviewerIds: z.array(z.number().int().positive()).optional(),
  candidateNotes: z.string().max(1000).optional(),
  cancelReason: z.string().max(500).optional(),
});

export const interviewFeedbackSchema = z.object({
  interviewerId: z.number().int().positive(),
  rating: z.number().min(1).max(5),
  strengths: z.string().max(1000).optional(),
  weaknesses: z.string().max(1000).optional(),
  notes: z.string().max(2000).optional(),
  recommendation: z.enum(["STRONG_YES", "YES", "NEUTRAL", "NO", "STRONG_NO"]),
});

export const interviewQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(20),
  status: z.enum(["SCHEDULED", "CONFIRMED", "COMPLETED", "CANCELLED", "NO_SHOW", "RESCHEDULED"]).optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
});
