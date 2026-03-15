import { z } from "zod";

export const HR_PERMISSIONS = [
  "HR_READ",
  "HR_WRITE",
  "HR_ADMIN",
  "EMPLOYEE_READ",
  "EMPLOYEE_WRITE",
  "LEAVE_APPROVE",
  "LEAVE_ADMIN",
  "PAYROLL_VIEW",
  "PAYROLL_MANAGE",
  "PERFORMANCE_VIEW",
  "PERFORMANCE_MANAGE",
  "ATTENDANCE_VIEW",
  "ATTENDANCE_MANAGE",
  "COMPLIANCE_VIEW",
  "COMPLIANCE_MANAGE",
  "ANALYTICS_VIEW",
  "ANALYTICS_ADMIN",
  "RBAC_MANAGE",
  "TASK_VIEW",
  "TASK_MANAGE",
  "ONBOARDING_MANAGE",
  "REIMBURSEMENT_APPROVE",
  "WORKFLOW_MANAGE",
] as const;

export const createRoleSchema = z.object({
  name: z.string().min(1, "Role name is required").max(100),
  description: z.string().max(500).optional(),
  permissions: z.array(z.string()).min(1, "At least one permission is required"),
});

export const updateRoleSchema = z.object({
  name: z.string().min(1).max(100).optional(),
  description: z.string().max(500).optional(),
  permissions: z.array(z.string()).optional(),
});

export const assignRoleSchema = z.object({
  userId: z.number().int().positive(),
  roleId: z.number().int().positive(),
});

export const revokeRoleSchema = z.object({
  userId: z.number().int().positive(),
  roleId: z.number().int().positive(),
});
