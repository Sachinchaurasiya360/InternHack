import { z } from "zod";

export const professorListQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(50).default(24),
  search: z.string().optional(),
  college: z.string().optional(),
  department: z.string().optional(),
});

export const createProfessorSchema = z.object({
  collegeName: z.string().min(1, "College name is required"),
  collegeType: z.string().min(1, "College type is required"),
  department: z.string().min(1, "Department is required"),
  name: z.string().min(1, "Professor name is required"),
  areaOfInterest: z.string().optional().or(z.literal("")),
  email: z.string().email("Invalid email format").optional().or(z.literal("")),
});

export const updateProfessorSchema = createProfessorSchema.partial();

export type CreateProfessorInput = z.infer<typeof createProfessorSchema>;
export type UpdateProfessorInput = z.infer<typeof updateProfessorSchema>;
