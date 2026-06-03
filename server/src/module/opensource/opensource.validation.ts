import { z } from "zod";

const opensourceSortFields = ["stars", "forks", "name", "createdAt", "openIssues", "lastUpdated"] as const;

export const opensourceListQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  search: z.string().optional(),
  language: z.string().optional(),
  difficulty: z.string().optional(),
  domain: z.string().optional(),
  sort: z.enum(opensourceSortFields).optional(),
  sortBy: z.enum(opensourceSortFields).optional(),
  sortOrder: z.enum(["asc", "desc"]).default("desc"),
  trending: z.enum(["true", "false"]).optional(),
}).transform(({ sort, ...query }) => ({
  ...query,
  sortBy: sort ?? query.sortBy ?? "stars",
}));

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

export const bulkRepoRequestSchema = z.object({
  ids: z.array(z.number().int().positive("Invalid ID in request list")).min(1, "At least one ID must be specified"),
  action: z.enum(["approve", "reject"], { message: "Action must be either 'approve' or 'reject'" }),
  adminNote: z.string().max(1000).optional(),
});

export const gsocOrgsQuerySchema = z.object({
  page: z.coerce.number().int().positive().optional().default(1),
  limit: z.coerce.number().int().positive().max(100).optional().default(20),
  search: z.string().optional(),
  category: z.string().optional(),
  technology: z.string().optional(),
  year: z.coerce.number().int().optional(),
});

export const approveRequestOverrideSchema = z.object({
  adminNote: z.string().max(2000).optional(),
  name: z.string().min(1, "Repository name is required").max(300).optional(),
  description: z.string().min(10, "Description must be at least 10 characters").max(2000).optional(),
  domain: z.enum(["AI", "WEB", "DEVOPS", "MOBILE", "BLOCKCHAIN", "DATA", "SECURITY", "CLOUD", "GAMING", "OTHER"]).optional(),
  difficulty: z.enum(["BEGINNER", "INTERMEDIATE", "ADVANCED"]).optional(),
  tags: z.array(z.string()).optional(),
});
