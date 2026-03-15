import { z } from "zod";

export const runPayrollSchema = z.object({
  month: z.number().int().min(1).max(12),
  year: z.number().int().min(2020).max(2100),
  employeeIds: z.array(z.number().int().positive()).optional(),
});

export const approvePayrollSchema = z.object({
  ids: z.array(z.number().int().positive()).min(1),
});

export const payrollQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(20),
  month: z.coerce.number().int().min(1).max(12).optional(),
  year: z.coerce.number().int().optional(),
  status: z.enum(["DRAFT", "PROCESSING", "APPROVED", "PAID", "CANCELLED"]).optional(),
  employeeId: z.coerce.number().int().positive().optional(),
});

export const contractorPaymentSchema = z.object({
  employeeId: z.number().int().positive(),
  invoiceNumber: z.string().max(50).optional(),
  amount: z.number().positive(),
  currency: z.string().max(10).default("INR"),
  description: z.string().min(1).max(500),
  periodStart: z.string().datetime(),
  periodEnd: z.string().datetime(),
  invoiceUrl: z.string().url().optional(),
});
