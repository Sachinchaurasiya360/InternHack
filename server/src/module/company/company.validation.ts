import { z } from "zod";

export const listCompaniesSchema = z.object({
  city: z.string().optional(),
  industry: z.string().optional(),
  size: z.enum(["STARTUP", "SMALL", "MEDIUM", "LARGE", "ENTERPRISE"]).optional(),
  hiring: z.string().optional(),
  minRating: z.string().optional(),
  search: z.string().optional(),
  page: z.string().optional(),
  limit: z.string().optional(),
});

export const submitReviewSchema = z.object({
  rating: z.number().int().min(1).max(5),
  title: z.string().min(1).max(200),
  content: z.string().min(10).max(5000),
  pros: z.string().max(2000).optional(),
  cons: z.string().max(2000).optional(),
  interviewExperience: z.string().max(3000).optional(),
  workCulture: z.string().max(2000).optional(),
  salaryInsights: z.string().max(1000).optional(),
});

export const contributeCompanySchema = z.object({
  name: z.string().min(1).max(200),
  description: z.string().min(10).max(5000),
  mission: z.string().max(2000).optional(),
  industry: z.string().min(1).max(100),
  size: z.enum(["STARTUP", "SMALL", "MEDIUM", "LARGE", "ENTERPRISE"]),
  city: z.string().min(1).max(100),
  state: z.string().max(100).optional(),
  address: z.string().max(500).optional(),
  website: z.string().url().optional().or(z.literal("")),
  technologies: z.array(z.string()).optional(),
  hiringStatus: z.boolean().optional(),
  foundedYear: z.number().int().min(1800).max(2030).optional(),
  logo: z.string().optional(),
});

export const suggestEditSchema = z.object({
  changes: z.record(z.string(), z.unknown()),
  reason: z.string().min(1).max(1000),
});

export const addContactSchema = z.object({
  name: z.string().min(1).max(200),
  designation: z.string().min(1).max(100),
  email: z.string().email().optional().or(z.literal("")),
  phone: z.string().max(20).optional(),
  linkedinUrl: z.string().url().optional().or(z.literal("")),
});
