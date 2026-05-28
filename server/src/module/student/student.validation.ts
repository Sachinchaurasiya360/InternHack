import { z } from "zod";

export const applyToJobSchema = z.object({
  customFieldAnswers: z.record(z.string(), z.union([z.string(), z.number(), z.boolean(), z.array(z.string())])).default({}),
  resumeUrl: z.string().optional(),
  coverLetter: z.string().optional(),
});

export const submitRoundSchema = z.object({
  fieldAnswers: z.record(z.string(), z.union([z.string(), z.number(), z.boolean(), z.array(z.string())])).default({}),
  attachments: z.array(z.string()).default([]),
});

export const mockInterviewTranscriptSchema = z.object({
  question: z.string().min(1),
  answer: z.string().min(1),
});

export const mockInterviewFeedbackSchema = z.object({
  topic: z.string().min(1),
  transcript: z.array(mockInterviewTranscriptSchema).min(1),
});

export const getActivityLogsSchema = z.object({
  page: z.coerce.number().int().min(1).optional().default(1),
  limit: z.coerce.number().int().min(1).max(100).optional().default(20),
  type: z.enum([
    "APPLICATION_SUBMITTED",
    "APPLICATION_STATUS_UPDATED",
    "MOCK_INTERVIEW_COMPLETED",
    "SKILL_VERIFIED",
    "BADGE_EARNED",
    "ROADMAP_ENROLLED",
    "COURSE_COMPLETED"
  ]).optional()
});
