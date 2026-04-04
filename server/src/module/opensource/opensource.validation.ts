import { z } from "zod";

export const opensourceListQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  search: z.string().optional(),
  language: z.string().optional(),
  difficulty: z.string().optional(),
  domain: z.string().optional(),
  sortBy: z.enum(["stars", "forks", "name", "createdAt", "openIssues"]).default("stars"),
  sortOrder: z.enum(["asc", "desc"]).default("desc"),
});

export const repoIdSchema = z.object({
  id: z.coerce.number().int().positive("Invalid repo ID"),
});

export const submitRepoRequestSchema = z.object({
  name: z.string().min(1, "Repository name is required").max(300),
  owner: z.string().min(1, "Owner/org name is required").max(200),
  description: z.string().min(10, "Description must be at least 10 characters").max(2000),
  language: z.string().min(1, "Primary language is required").max(100),
  url: z.string().url("Must be a valid URL"),
  domain: z.enum(["AI", "WEB", "DEVOPS", "MOBILE", "BLOCKCHAIN", "DATA", "SECURITY", "CLOUD", "GAMING", "OTHER"]).default("WEB"),
  difficulty: z.enum(["BEGINNER", "INTERMEDIATE", "ADVANCED"]).default("BEGINNER"),
  techStack: z.array(z.string()).default([]),
  tags: z.array(z.string()).default([]),
  reason: z.string().min(10, "Please explain why this repo should be listed").max(1000),
});
