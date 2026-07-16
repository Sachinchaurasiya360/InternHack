import { z } from "zod";

const jsonObjectSchema = z.record(z.string(), z.unknown()).default({});
const jsonArraySchema = z.array(z.unknown()).default([]);

export const updateApplicationProfileSchema = z.object({
  preferredName: z.string().max(120).optional().nullable(),
  legalName: z.string().max(160).optional().nullable(),
  phoneCountryCode: z.string().max(8).optional().nullable(),
  address: jsonObjectSchema.optional(),
  education: jsonArraySchema.optional(),
  experience: jsonArraySchema.optional(),
  workAuthorization: jsonObjectSchema.optional(),
  demographics: jsonObjectSchema.optional(),
  availability: jsonObjectSchema.optional(),
  salaryExpectations: jsonObjectSchema.optional(),
  links: jsonObjectSchema.optional(),
  customFields: jsonObjectSchema.optional(),
  autofillSettings: jsonObjectSchema.optional(),
  privacySettings: jsonObjectSchema.optional(),
});

export const updateAutofillSettingsSchema = z.object({
  autofillSettings: jsonObjectSchema,
  privacySettings: jsonObjectSchema.optional(),
});

export const questionQuerySchema = z.object({
  search: z.string().max(200).optional(),
  category: z.string().max(80).optional(),
});

export const createQuestionAnswerSchema = z.object({
  questionText: z.string().min(2).max(2000),
  answer: z.string().min(1).max(8000),
  category: z.string().max(80).optional().nullable(),
  source: z.string().max(40).optional(),
});

export const matchQuestionSchema = z.object({
  questionText: z.string().min(2).max(2000),
  jobContext: z.object({
    title: z.string().optional().nullable(),
    company: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
  }).optional(),
});

export const generateQuestionAnswerSchema = z.object({
  questionText: z.string().min(2).max(2000),
  jobContext: z.object({
    title: z.string().max(200).optional().nullable(),
    company: z.string().max(200).optional().nullable(),
    description: z.string().max(12000).optional().nullable(),
  }).optional(),
});

