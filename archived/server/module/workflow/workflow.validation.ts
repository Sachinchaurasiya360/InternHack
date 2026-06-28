import { z } from "zod";

const workflowStepSchema = z.object({
  name: z.string().min(1).max(100),
  type: z.enum(["APPROVAL", "NOTIFICATION", "TASK", "CONDITION"]),
  assignedRole: z.string().max(50).optional(),
  assignedUserId: z.number().int().positive().optional(),
  config: z.record(z.string(), z.unknown()).default({}),
});

export const createWorkflowSchema = z.object({
  name: z.string().min(1).max(200),
  description: z.string().max(1000).optional(),
  triggerEvent: z.string().min(1).max(100),
  steps: z.array(workflowStepSchema).min(1),
  isActive: z.boolean().default(true),
});

export const updateWorkflowSchema = z.object({
  name: z.string().min(1).max(200).optional(),
  description: z.string().max(1000).optional(),
  triggerEvent: z.string().min(1).max(100).optional(),
  steps: z.array(workflowStepSchema).min(1).optional(),
  isActive: z.boolean().optional(),
});

export const triggerWorkflowSchema = z.object({
  workflowName: z.string().min(1),
  entityType: z.string().min(1).max(50),
  entityId: z.number().int().positive(),
});

export const advanceWorkflowSchema = z.object({
  action: z.enum(["APPROVE", "REJECT", "SKIP"]),
  note: z.string().max(500).optional(),
});

export const workflowQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(20),
  status: z.enum(["ACTIVE", "COMPLETED", "CANCELLED"]).optional(),
  entityType: z.string().optional(),
});
