import { z } from "zod";

export const professorListQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(50).default(24),
  search: z.string().optional(),
  college: z.string().optional(),
  department: z.string().optional(),
});
