import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.enum(["STUDENT"]).default("STUDENT"),
  company: z.string().optional(),
  designation: z.string().optional(),
  contactNo: z.string().optional(),
});

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

export const updateProfileSchema = z.object({
  name: z.string().min(2).optional(),
  contactNo: z.string().optional(),
  company: z.string().optional(),
  designation: z.string().optional(),
  bio: z.string().max(500).optional(),
  college: z.string().optional(),
  graduationYear: z.coerce.number().int().min(1990).max(2040).optional().nullable(),
  skills: z.array(z.string()).max(20).optional(),
  location: z.string().optional(),
  linkedinUrl: z.string().url().or(z.literal("")).optional(),
  githubUrl: z.string().url().or(z.literal("")).optional(),
  portfolioUrl: z.string().url().or(z.literal("")).optional(),
});
