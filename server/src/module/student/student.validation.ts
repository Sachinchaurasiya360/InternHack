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

export const updateApplicationNotesSchema = z.object({
  notes: z.string().max(4000),
});
