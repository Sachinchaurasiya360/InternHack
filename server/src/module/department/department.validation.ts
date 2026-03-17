import { z } from "zod";

export const createDepartmentSchema = z.object({
  name: z.string().min(1, "Department name is required").max(100),
  description: z.string().max(500).optional(),
  parentId: z.number().int().positive().nullable().optional(),
  headId: z.number().int().positive().nullable().optional(),
});

export const updateDepartmentSchema = z.object({
  name: z.string().min(1).max(100).optional(),
  description: z.string().max(500).optional(),
  parentId: z.number().int().positive().nullable().optional(),
  headId: z.number().int().positive().nullable().optional(),
  isActive: z.boolean().optional(),
});

export const departmentQuerySchema = z.object({
  includeInactive: z.coerce.boolean().default(false),
});
