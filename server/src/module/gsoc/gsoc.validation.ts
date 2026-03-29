import { z } from "zod";

export const gsocListQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(50).default(20),
  search: z.string().optional(),
  category: z.string().optional(),
  technology: z.string().optional(),
  year: z.coerce.number().int().min(2005).max(2030).optional(),
  topic: z.string().optional(),
  sortBy: z.enum(["totalProjects", "name", "createdAt"]).default("totalProjects"),
  sortOrder: z.enum(["asc", "desc"]).default("desc"),
});

export const gsocSlugSchema = z.object({
  slug: z.string().min(1, "Organization slug is required"),
});
