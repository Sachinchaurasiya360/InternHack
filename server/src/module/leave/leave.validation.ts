import { z } from "zod";

export const createLeaveRequestSchema = z.object({
  leaveType: z.enum(["CASUAL", "SICK", "EARNED", "MATERNITY", "PATERNITY", "COMPENSATORY", "UNPAID", "BEREAVEMENT"]),
  startDate: z.string().datetime(),
  endDate: z.string().datetime(),
  totalDays: z.number().positive(),
  reason: z.string().min(1, "Reason is required").max(500),
});

export const approveLeaveSchema = z.object({
  approverNote: z.string().max(500).optional(),
});

export const rejectLeaveSchema = z.object({
  approverNote: z.string().min(1, "Rejection reason is required").max(500),
});

export const createLeavePolicySchema = z.object({
  leaveType: z.enum(["CASUAL", "SICK", "EARNED", "MATERNITY", "PATERNITY", "COMPENSATORY", "UNPAID", "BEREAVEMENT"]),
  name: z.string().min(1).max(100),
  annualAllocation: z.number().int().min(0),
  maxCarryForward: z.number().int().min(0).default(0),
  minConsecutiveDays: z.number().int().min(1).default(1),
  maxConsecutiveDays: z.number().int().positive().nullable().optional(),
  requiresApproval: z.boolean().default(true),
});

export const updateLeavePolicySchema = createLeavePolicySchema.partial().omit({ leaveType: true });

export const leaveQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(20),
  status: z.enum(["PENDING", "APPROVED", "REJECTED", "CANCELLED"]).optional(),
  leaveType: z.enum(["CASUAL", "SICK", "EARNED", "MATERNITY", "PATERNITY", "COMPENSATORY", "UNPAID", "BEREAVEMENT"]).optional(),
  employeeId: z.coerce.number().int().positive().optional(),
});

export const allocateBalanceSchema = z.object({
  employeeIds: z.array(z.number().int().positive()).min(1),
  leaveType: z.enum(["CASUAL", "SICK", "EARNED", "MATERNITY", "PATERNITY", "COMPENSATORY", "UNPAID", "BEREAVEMENT"]),
  year: z.number().int().min(2020).max(2100),
  allocated: z.number().int().min(0),
});

export const createHolidaySchema = z.object({
  name: z.string().min(1).max(100),
  date: z.string().datetime(),
  isOptional: z.boolean().default(false),
  location: z.string().max(100).nullable().optional(),
  year: z.number().int().min(2020).max(2100),
});
