import { z } from "zod";

const metadataSchema = z.record(z.string(), z.unknown()).default({});

export const detectExtensionPageSchema = z.object({
  host: z.string().min(1).max(300),
  url: z.string().max(2000).optional(),
  title: z.string().max(500).optional(),
  formCount: z.number().int().min(0).max(100).optional(),
  markers: z.array(z.string().max(100)).default([]),
});

export const autofillEventSchema = z.object({
  applicationId: z.number().int().positive().optional().nullable(),
  host: z.string().min(1).max(300),
  siteType: z.string().max(80).optional().nullable(),
  url: z.string().max(2000).optional().nullable(),
  urlHash: z.string().max(128).optional().nullable(),
  eventType: z.enum(["DETECTED", "AUTOFILLED", "FIELD_FAILED", "QUESTION_GENERATED", "TRACKED", "SUPPORT_REQUESTED"]),
  fieldCount: z.number().int().min(0).max(1000).default(0),
  filledCount: z.number().int().min(0).max(1000).default(0),
  failedCount: z.number().int().min(0).max(1000).default(0),
  metadata: metadataSchema.optional(),
});

export const trackApplicationFromExtensionSchema = z.object({
  company: z.string().min(1).max(200),
  role: z.string().min(1).max(200),
  location: z.string().max(200).optional().nullable(),
  jobUrl: z.string().url().max(2000).optional().nullable(),
  applicationUrl: z.string().url().max(2000).optional().nullable(),
  jobDescription: z.string().max(20000).optional().nullable(),
  status: z.enum(["SAVED", "APPLIED"]).default("SAVED"),
  submitted: z.boolean().default(false),
  resumeUrl: z.string().max(2000).optional().nullable(),
  notes: z.string().max(8000).optional(),
  extensionMetadata: metadataSchema.optional(),
});

export const supportRequestSchema = z.object({
  host: z.string().min(1).max(300),
  url: z.string().max(2000).optional().nullable(),
  siteType: z.string().max(80).optional().nullable(),
  message: z.string().max(2000).optional().nullable(),
  metadata: metadataSchema.optional(),
});

