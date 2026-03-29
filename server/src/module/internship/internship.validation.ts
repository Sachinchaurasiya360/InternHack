import { z } from "zod";

export const internshipListQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(50).default(24),
  search: z.string().optional(),
  category: z.string().optional(),
});
