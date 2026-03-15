import { z } from "zod";

export const createOnboardingSchema = z.object({
  employeeId: z.number().int().positive(),
  targetDate: z.string().datetime(),
  items: z.array(z.object({
    title: z.string().min(1).max(200),
    description: z.string().max(500).optional(),
    assignedTo: z.string().max(100).optional(),
    dueDate: z.string().datetime().optional(),
  })).min(1),
});

export const updateOnboardingItemSchema = z.object({
  itemIndex: z.number().int().min(0),
  completed: z.boolean(),
  note: z.string().max(500).optional(),
});

export const onboardingQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(20),
  status: z.enum(["NOT_STARTED", "IN_PROGRESS", "COMPLETED", "OVERDUE"]).optional(),
});
