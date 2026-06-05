import { z } from "zod";

export const professorListQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(50).default(24),
  search: z.string().max(100).optional(),
  college: z.string().max(100).optional(),
  department: z.string().max(100).optional(),
});
