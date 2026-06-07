import { z } from "zod";

export const ycListQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(50).default(24),
  search: z.string().optional(),
  batch: z.string().optional(),
  industry: z.string().optional(),
  status: z.string().optional(),
  isHiring: z.enum(["true", "false"]).optional(),
  topCompany: z.enum(["true", "false"]).optional(),
});

export const ycSlugSchema = z.object({
  slug: z.string().min(1, "Company slug is required"),
});
