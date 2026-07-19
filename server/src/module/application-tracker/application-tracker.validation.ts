import { z } from "zod";

export const applicationStatusSchema = z.enum([
  "SAVED",
  "APPLIED",
  "OA",
  "PHONE_SCREEN",
  "INTERVIEW",
  "OFFER",
  "REJECTED",
  "WITHDRAWN",
  "GHOSTED",
]);

export const applicationSourceSchema = z.enum([
  "INTERNHACK_ADMIN",
  "SCRAPED",
  "JOB_INDEX",
  "EXTENSION",
  "MANUAL",
]);

const jsonArraySchema = z.array(z.unknown()).default([]);
const jsonObjectSchema = z.record(z.string(), z.unknown()).default({});

export const trackerQuerySchema = z.object({
  status: applicationStatusSchema.optional(),
  sourceType: applicationSourceSchema.optional(),
  search: z.string().max(200).optional(),
  savedOnly: z.coerce.boolean().optional(),
});

export const createTrackedApplicationSchema = z.object({
  sourceType: applicationSourceSchema.default("MANUAL"),
  sourceId: z.number().int().positive().optional().nullable(),
  jobIndexId: z.number().int().positive().optional().nullable(),
  adminJobId: z.number().int().positive().optional().nullable(),
  scrapedJobId: z.number().int().positive().optional().nullable(),
  company: z.string().min(1).max(200),
  role: z.string().min(1).max(200),
  location: z.string().max(200).optional().nullable(),
  jobUrl: z.string().url().max(2000).optional().nullable(),
  applicationUrl: z.string().url().max(2000).optional().nullable(),
  jobDescription: z.string().max(20000).optional().nullable(),
  status: applicationStatusSchema.default("SAVED"),
  appliedAt: z.string().datetime().optional().nullable(),
  deadline: z.string().datetime().optional().nullable(),
  nextFollowUpAt: z.string().datetime().optional().nullable(),
  resumeUrl: z.string().max(2000).optional().nullable(),
  coverLetterId: z.number().int().positive().optional().nullable(),
  notes: z.string().max(8000).optional(),
  contacts: jsonArraySchema.optional(),
  events: jsonArraySchema.optional(),
  extensionMetadata: jsonObjectSchema.optional(),
});

export const updateTrackedApplicationSchema = createTrackedApplicationSchema.partial().extend({
  status: applicationStatusSchema.optional(),
});

export const addApplicationEventSchema = z.object({
  type: z.string().min(1).max(80),
  label: z.string().min(1).max(200),
  metadata: jsonObjectSchema.optional(),
});

