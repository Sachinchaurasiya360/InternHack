import { z } from "zod";

export const createDriveSchema = z.object({
  title: z.string().min(1, "Title is required").max(200, "Title must be at most 200 characters"),
  description: z.string().min(1, "Description is required"),
  company: z.string().min(1, "Company is required"),
  targetColleges: z.array(z.string()).default([]),
  eligibleBranches: z.array(z.string()).default([]),
  minCGPA: z.number().min(0).max(10).optional(),
  eligibleGraduationYears: z.array(z.number().int()).default([]),
  registrationDeadline: z.coerce.date(),
  driveDate: z.coerce.date().optional(),
  jobIds: z.array(z.number().int()).default([]),
});

export const updateDriveSchema = z.object({
  title: z.string().min(1).max(200).optional(),
  description: z.string().min(1).optional(),
  company: z.string().min(1).optional(),
  targetColleges: z.array(z.string()).optional(),
  eligibleBranches: z.array(z.string()).optional(),
  minCGPA: z.number().min(0).max(10).optional().nullable(),
  eligibleGraduationYears: z.array(z.number().int()).optional(),
  registrationDeadline: z.coerce.date().optional(),
  driveDate: z.coerce.date().optional().nullable(),
  jobIds: z.array(z.number().int()).optional(),
});

export const updateDriveStatusSchema = z.object({
  status: z.enum(["DRAFT", "OPEN", "CLOSED", "COMPLETED"]),
});

export const updateRegistrationStatusSchema = z.object({
  status: z.enum(["REGISTERED", "SHORTLISTED", "REJECTED"]),
});
