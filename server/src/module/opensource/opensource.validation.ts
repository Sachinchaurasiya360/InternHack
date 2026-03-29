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
