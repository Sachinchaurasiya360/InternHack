import { z } from "zod";

export const ycListQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(50).default(24),
  search: z.string().max(200).optional(),
  batch: z.string().max(100).optional(),
  industry: z.string().max(100).optional(),
  status: z.string().max(100).optional(),
  isHiring: z.enum(["true", "false"]).optional(),
  topCompany: z.enum(["true", "false"]).optional(),
});

export const ycSlugSchema = z.object({
  slug: z.string().min(1, "Company slug is required"),
});
