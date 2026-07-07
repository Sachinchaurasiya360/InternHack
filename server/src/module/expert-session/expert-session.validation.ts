import { z } from "zod";

export const bookExpertSessionSchema = z.object({
  scheduledAt: z.string().datetime(),
  targetRole: z.string().trim().max(120).optional(),
  experienceLevel: z.enum(["STUDENT", "FRESHER", "0_2_YEARS", "2_PLUS_YEARS"]).optional(),
  focusAreas: z.array(z.string().trim().max(60)).max(10).default([]),
  notes: z.string().trim().max(1000).optional(),
});

export const availabilityBlockSchema = z.object({
  date: z.string().date(),
  startTime: z
    .string()
    .regex(/^([01]\d|2[0-3]):[0-5]\d$/, "startTime must be HH:mm")
    .optional(),
  endTime: z
    .string()
    .regex(/^([01]\d|2[0-3]):[0-5]\d$/, "endTime must be HH:mm")
    .optional(),
  reason: z.string().trim().max(200).optional(),
});
