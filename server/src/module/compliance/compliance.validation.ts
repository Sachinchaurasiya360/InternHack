import { z } from "zod";

export const createComplianceDocSchema = z.object({
  name: z.string().min(1).max(200),
  category: z.string().min(1).max(100),
  description: z.string().max(1000).optional(),
  documentUrl: z.string().url().optional(),
  expiryDate: z.string().datetime().optional(),
  isRequired: z.boolean().default(true),
  assignedTo: z.array(z.number().int().positive()).default([]),
});

export const updateComplianceDocSchema = z.object({
  name: z.string().min(1).max(200).optional(),
  category: z.string().min(1).max(100).optional(),
  description: z.string().max(1000).optional(),
  documentUrl: z.string().url().optional(),
  expiryDate: z.string().datetime().nullable().optional(),
  isRequired: z.boolean().optional(),
  assignedTo: z.array(z.number().int().positive()).optional(),
});

export const complianceQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(20),
  category: z.string().optional(),
  isRequired: z.coerce.boolean().optional(),
});
