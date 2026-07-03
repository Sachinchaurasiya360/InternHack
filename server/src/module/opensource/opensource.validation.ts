import { z } from "zod";

const opensourceSortFields = ["stars", "forks", "name", "createdAt", "openIssues", "lastUpdated"] as const;

export const opensourceListQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  search: z.string().optional(),
  language: z
    .union([z.string().min(1), z.array(z.string().min(1))])
    .optional()
    .transform((val) => {
      if (val === undefined) return undefined;
      return Array.isArray(val) ? val : [val];
    }),
  difficulty: z.string().optional(),
  domain: z.string().optional(),
  sort: z.enum(opensourceSortFields).optional(),
  sortBy: z.enum(opensourceSortFields).optional(),
  sortOrder: z.enum(["asc", "desc"]).default("desc"),
  trending: z.enum(["true", "false"]).optional(),
  hacktoberfest: z.enum(["true", "false"]).optional(),
  highlyActive: z.enum(["true", "false"]).optional(),
  ids: z.string().regex(/^\d+(,\d+)*$/, "Must be a comma-separated list of numeric IDs").optional(), // Comma-separated string of numeric IDs
}).transform(({ sort, ...query }) => ({
  ...query,
  sortBy: sort ?? query.sortBy ?? "stars",
}));

export const repoIdSchema = z.object({
  id: z.coerce.number().int().positive("Invalid repo ID"),
});

export const repoOwnerNameSchema = z.object({
  owner: z.string().min(1).max(200),
  name: z.string().min(1).max(300),
});

export const submitRepoRequestSchema = z.object({
  name: z.string().min(1, "Repository name is required").max(300),
  owner: z.string().min(1, "Owner/org name is required").max(200),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(2000),
  language: z.string().min(1, "Primary language is required").max(100),
  url: z.string().url("Must be a valid URL"),
  domain: z
    .enum([
      "AI",
      "WEB",
      "DEVOPS",
      "MOBILE",
      "BLOCKCHAIN",
      "DATA",
      "SECURITY",
      "CLOUD",
      "GAMING",
      "OTHER",
    ])
    .default("WEB"),
  difficulty: z
    .enum(["BEGINNER", "INTERMEDIATE", "ADVANCED"])
    .default("BEGINNER"),
  techStack: z.array(z.string()).default([]),
  tags: z.array(z.string()).default([]),
  reason: z
    .string()
    .min(10, "Please explain why this repo should be listed")
    .max(1000),
});

export const gsocOrgsQuerySchema = z.object({
  page: z.coerce.number().int().positive().optional().default(1),
  limit: z.coerce.number().int().positive().max(100).optional().default(20),
  search: z.string().min(1).max(200).optional(),
  category: z.string().min(1).max(100).optional(),
  technology: z.string().min(1).max(100).optional(),
  year: z.coerce.number().int().optional(),
});

export const rejectRequestSchema = z.object({
  adminNote: z.string().max(2000).optional(),
});

export const approveRequestOverrideSchema = z.object({
  adminNote: z.string().max(2000).optional(),
  name: z.string().min(1, "Repository name is required").max(300).optional(),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(2000)
    .optional(),
  domain: z
    .enum([
      "AI",
      "WEB",
      "DEVOPS",
      "MOBILE",
      "BLOCKCHAIN",
      "DATA",
      "SECURITY",
      "CLOUD",
      "GAMING",
      "OTHER",
    ])
    .optional(),
  difficulty: z.enum(["BEGINNER", "INTERMEDIATE", "ADVANCED"]).optional(),
  tags: z.array(z.string()).optional(),
});

export const firstPrProgressUpdateSchema = z.object({
  stepId: z.string().min(1, "Step ID is required").max(200),
  completed: z.boolean(),
});

export const guideProgressUpdateSchema = z.object({
  completedStepIds: z.array(
    z.string().min(1).max(200),
  ).max(500).transform((arr) => [...new Set(arr)]),
});

export const guideFeedbackSchema = z.object({
  guideId: z.string().min(1, "Guide ID is required"),
  stepId: z.string().min(1, "Step ID is required"),
  rating: z.enum(["up", "down"]),
  reason: z.string().optional(),
});

export const bookmarkBodySchema = z.object({
  repoId: z.number().int().positive("repoId must be a positive integer"),
});

const dateStringRegex = /^\d{4}-\d{2}-\d{2}$/;
export const contributionTrendQuerySchema = z.object({
  startDate: z.string().regex(dateStringRegex, "startDate must be YYYY-MM-DD").optional(),
  endDate: z.string().regex(dateStringRegex, "endDate must be YYYY-MM-DD").optional(),
});

export const bulkMigrateBookmarksSchema = z.object({
  repoIds: z
    .array(z.number().int().positive())
    .min(1, "At least one repoId is required")
    .max(500, "Cannot migrate more than 500 bookmarks at once"),
});

export const issueCertificateSchema = z.object({
  guideName: z.string().min(1, "guideName is required"),
});
