import { z } from "zod";

export const createReimbursementSchema = z.object({
  employeeId: z.number().int().positive(),
  category: z.string().min(1).max(100),
  amount: z.number().positive(),
  currency: z.string().max(10).default("INR"),
  description: z.string().min(1).max(1000),
  receiptUrls: z.array(z.string().url()).default([]),
});

export const updateReimbursementSchema = z.object({
  category: z.string().min(1).max(100).optional(),
  amount: z.number().positive().optional(),
  description: z.string().min(1).max(1000).optional(),
  receiptUrls: z.array(z.string().url()).optional(),
});

export const approveReimbursementSchema = z.object({
  approverNote: z.string().max(500).optional(),
});

export const reimbursementQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(20),
  status: z.enum(["DRAFT", "SUBMITTED", "MANAGER_APPROVED", "FINANCE_APPROVED", "REJECTED", "PAID"]).optional(),
  employeeId: z.coerce.number().int().positive().optional(),
  category: z.string().optional(),
});
