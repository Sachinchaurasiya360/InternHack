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
