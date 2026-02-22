import { z } from "zod";

// ==================== ADMIN AUTH & MANAGEMENT ====================

export const adminLoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

export const createAdminSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Admin password must be at least 8 characters"),
  tier: z.enum(["SUPER_ADMIN", "ADMIN", "MODERATOR"]).default("ADMIN"),
});

export const userQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(20),
  search: z.string().optional(),
  role: z.enum(["STUDENT", "RECRUITER", "ADMIN"]).optional(),
  sortBy: z.enum(["createdAt", "name", "email"]).default("createdAt"),
  sortOrder: z.enum(["asc", "desc"]).default("desc"),
});

export const updateUserStatusSchema = z.object({
  isActive: z.boolean(),
  reason: z.string().optional(),
});

export const adminJobQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(20),
  search: z.string().optional(),
  status: z.enum(["DRAFT", "PUBLISHED", "CLOSED", "ARCHIVED"]).optional(),
  recruiterId: z.coerce.number().int().optional(),
  sortBy: z.enum(["createdAt", "title", "company"]).default("createdAt"),
  sortOrder: z.enum(["asc", "desc"]).default("desc"),
});

export const adminUpdateJobStatusSchema = z.object({
  status: z.enum(["DRAFT", "PUBLISHED", "CLOSED", "ARCHIVED"]),
  reason: z.string().optional(),
});

export const activityLogQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(20),
  adminId: z.coerce.number().int().optional(),
  action: z.string().optional(),
  targetType: z.string().optional(),
});

// ==================== COMPANY MANAGEMENT ====================

export const createCompanySchema = z.object({
  name: z.string().min(1).max(200),
  description: z.string().min(10).max(5000),
  mission: z.string().max(2000).optional(),
  industry: z.string().min(1).max(100),
  size: z.enum(["STARTUP", "SMALL", "MEDIUM", "LARGE", "ENTERPRISE"]),
  city: z.string().min(1).max(100),
  state: z.string().max(100).optional(),
  address: z.string().max(500).optional(),
  website: z.string().url().optional().or(z.literal("")),
  socialLinks: z.record(z.string(), z.string()).optional(),
  technologies: z.array(z.string()).optional(),
  hiringStatus: z.boolean().optional(),
  foundedYear: z.number().int().min(1800).max(2030).optional(),
  logo: z.string().optional(),
  photos: z.array(z.string()).optional(),
});

export const updateCompanySchema = createCompanySchema.partial();

export const updateReviewStatusSchema = z.object({
  status: z.enum(["APPROVED", "REJECTED"]),
});

export const updateContributionStatusSchema = z.object({
  status: z.enum(["APPROVED", "REJECTED"]),
  adminNotes: z.string().max(1000).optional(),
});

export const addContactAdminSchema = z.object({
  name: z.string().min(1).max(200),
  designation: z.string().min(1).max(100),
  email: z.string().email().optional().or(z.literal("")),
  phone: z.string().max(20).optional(),
  linkedinUrl: z.string().url().optional().or(z.literal("")),
  isPublic: z.boolean().optional(),
});

export const updateContactSchema = addContactAdminSchema.partial();

// ==================== CAREER MANAGEMENT ====================

const careerSkillSchema = z.object({
  name: z.string().min(1).max(200),
  level: z.enum(["BEGINNER", "INTERMEDIATE", "ADVANCED"]).default("BEGINNER"),
});

const careerResourceSchema = z.object({
  title: z.string().min(1).max(300),
  url: z.string().url(),
  type: z.enum(["ARTICLE", "VIDEO", "COURSE", "BOOK", "DOCUMENTATION", "TUTORIAL"]).default("ARTICLE"),
  free: z.boolean().default(true),
});

const careerToolSchema = z.object({
  name: z.string().min(1).max(200),
  url: z.string().url().optional().or(z.literal("")),
  category: z.string().max(100).optional(),
});

const careerPhaseSchema = z.object({
  title: z.string().min(1).max(300),
  description: z.string().max(2000).optional(),
  orderIndex: z.number().int().min(0),
  durationWeeks: z.number().int().min(1).max(52).optional(),
  skills: z.array(careerSkillSchema).default([]),
  resources: z.array(careerResourceSchema).default([]),
  tools: z.array(careerToolSchema).default([]),
});

export const createCareerSchema = z.object({
  title: z.string().min(1).max(300),
  description: z.string().min(10).max(5000),
  category: z.enum(["ENGINEERING", "DESIGN", "DATA", "PRODUCT", "MARKETING", "DEVOPS", "SECURITY", "OTHER"]),
  difficulty: z.enum(["BEGINNER", "INTERMEDIATE", "ADVANCED"]),
  avgSalary: z.string().max(100).optional(),
  demandLevel: z.string().max(100).optional(),
  phases: z.array(careerPhaseSchema).default([]),
});

export const updateCareerSchema = createCareerSchema.partial();
