import { z } from "zod";

export const createEmployeeSchema = z.object({
  userId: z.number().int().positive().nullable().optional(),
  employeeCode: z.string().min(1, "Employee code is required").max(20),
  firstName: z.string().min(1, "First name is required").max(100),
  lastName: z.string().min(1, "Last name is required").max(100),
  email: z.string().email("Valid email is required"),
  phone: z.string().max(20).optional(),
  dateOfBirth: z.string().datetime().optional(),
  gender: z.string().max(20).optional(),
  bloodGroup: z.string().max(10).optional(),
  departmentId: z.number().int().positive("Department is required"),
  designation: z.string().min(1, "Designation is required").max(100),
  employmentType: z.enum(["FULL_TIME", "PART_TIME", "CONTRACT", "INTERN", "FREELANCER"]).default("FULL_TIME"),
  joiningDate: z.string().datetime(),
  reportingManagerId: z.number().int().positive().nullable().optional(),
  address: z.object({
    line1: z.string().optional(),
    line2: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    zip: z.string().optional(),
    country: z.string().optional(),
  }).optional(),
  emergencyContact: z.object({
    name: z.string().optional(),
    relation: z.string().optional(),
    phone: z.string().optional(),
  }).optional(),
  bankDetails: z.object({
    bankName: z.string().optional(),
    accountNo: z.string().optional(),
    ifsc: z.string().optional(),
  }).optional(),
  currentSalary: z.object({
    basic: z.number().min(0).optional(),
    hra: z.number().min(0).optional(),
    da: z.number().min(0).optional(),
    special: z.number().min(0).optional(),
    gross: z.number().min(0).optional(),
    net: z.number().min(0).optional(),
  }).optional(),
});

export const updateEmployeeSchema = createEmployeeSchema.partial().omit({ employeeCode: true });

export const updateStatusSchema = z.object({
  status: z.enum(["ONBOARDING", "ACTIVE", "ON_LEAVE", "ON_PROBATION", "NOTICE_PERIOD", "EXITED", "ALUMNI"]),
  exitDate: z.string().datetime().optional(),
  confirmationDate: z.string().datetime().optional(),
});

export const employeeQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(20),
  search: z.string().optional(),
  departmentId: z.coerce.number().int().positive().optional(),
  status: z.enum(["ONBOARDING", "ACTIVE", "ON_LEAVE", "ON_PROBATION", "NOTICE_PERIOD", "EXITED", "ALUMNI"]).optional(),
  employmentType: z.enum(["FULL_TIME", "PART_TIME", "CONTRACT", "INTERN", "FREELANCER"]).optional(),
});
