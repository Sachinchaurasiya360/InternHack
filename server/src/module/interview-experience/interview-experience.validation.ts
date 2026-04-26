import { z } from "zod";

const questionSchema = z.object({
  prompt: z.string().trim().min(3).max(1000),
  topic: z.string().trim().max(60).optional(),
  difficulty: z.enum(["EASY", "MEDIUM", "HARD"]).optional(),
});

const roundSchema = z.object({
  name: z.string().trim().min(1).max(120),
  type: z
    .enum(["TECHNICAL", "CODING", "DSA", "SYSTEM_DESIGN", "HR", "MANAGERIAL", "BEHAVIORAL", "APTITUDE", "GD", "OTHER"])
    .default("TECHNICAL"),
  durationMins: z.coerce.number().int().min(1).max(480).optional(),
  questions: z.array(questionSchema).max(30).default([]),
  notes: z.string().trim().max(2000).optional(),
});

const prepResourceSchema = z.object({
  type: z.enum(["article", "book", "course", "video", "other"]).default("article"),
  title: z.string().trim().min(1).max(200),
  url: z.string().trim().url().max(500).optional(),
});

export const createExperienceSchema = z.object({
  companyId: z.coerce.number().int().positive(),
  role: z.string().trim().min(2).max(120),
  experienceYears: z.coerce.number().int().min(0).max(30).optional(),
  interviewYear: z.coerce.number().int().min(2000).max(2100),
  interviewMonth: z.coerce.number().int().min(1).max(12).optional(),
  source: z.enum(["ON_CAMPUS", "OFF_CAMPUS", "REFERRAL", "LINKEDIN", "PORTAL", "OTHER"]).default("ON_CAMPUS"),
  difficulty: z.enum(["EASY", "MEDIUM", "HARD"]).default("MEDIUM"),
  outcome: z.enum(["SELECTED", "REJECTED", "WITHDRAWN", "PENDING", "GHOSTED"]).default("PENDING"),
  offered: z.boolean().default(false),
  ctcLpa: z.coerce.number().min(0).max(500).optional(),
  totalRounds: z.coerce.number().int().min(1).max(20),
  overallRating: z.coerce.number().int().min(1).max(5),
  rounds: z.array(roundSchema).min(1).max(20),
  tips: z.string().trim().max(4000).optional(),
  prepResources: z.array(prepResourceSchema).max(20).default([]),
  isAnonymous: z.boolean().default(false),
});

export const updateExperienceSchema = createExperienceSchema.partial().extend({
  status: z.enum(["PENDING", "APPROVED", "REJECTED"]).optional(),
});

export const listExperiencesSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(50).default(12),
  companyId: z.coerce.number().int().positive().optional(),
  companySlug: z.string().trim().min(1).max(120).optional(),
  role: z.string().trim().min(1).max(120).optional(),
  outcome: z.enum(["SELECTED", "REJECTED", "WITHDRAWN", "PENDING", "GHOSTED"]).optional(),
  difficulty: z.enum(["EASY", "MEDIUM", "HARD"]).optional(),
  year: z.coerce.number().int().min(2000).max(2100).optional(),
  status: z.enum(["PENDING", "APPROVED", "REJECTED", "ALL"]).default("APPROVED"),
  sort: z.enum(["recent", "upvotes"]).default("recent"),
  search: z.string().trim().min(1).max(120).optional(),
});

export const listCompaniesSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(50).default(24),
  search: z.string().trim().min(1).max(120).optional(),
});

export type CreateExperienceInput = z.infer<typeof createExperienceSchema>;
export type UpdateExperienceInput = z.infer<typeof updateExperienceSchema>;
export type ListExperiencesQuery = z.infer<typeof listExperiencesSchema>;
export type ListCompaniesQuery = z.infer<typeof listCompaniesSchema>;
