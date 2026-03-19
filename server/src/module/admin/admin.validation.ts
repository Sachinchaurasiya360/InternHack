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

export const errorLogQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(20),
  statusGroup: z.enum(["4xx", "5xx"]).optional(),
  method: z.enum(["GET", "POST", "PUT", "PATCH", "DELETE"]).optional(),
  path: z.string().optional(),
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

// ==================== OPEN SOURCE REPO MANAGEMENT ====================

export const createRepoSchema = z.object({
  name: z.string().min(1).max(300),
  owner: z.string().min(1).max(200),
  description: z.string().min(10).max(5000),
  language: z.string().min(1).max(100),
  techStack: z.array(z.string()).default([]),
  difficulty: z.enum(["BEGINNER", "INTERMEDIATE", "ADVANCED"]).default("BEGINNER"),
  domain: z.enum(["AI", "WEB", "DEVOPS", "MOBILE", "BLOCKCHAIN", "DATA", "SECURITY", "CLOUD", "GAMING", "OTHER"]).default("WEB"),
  issueTypes: z.array(z.string()).default([]),
  stars: z.number().int().min(0).default(0),
  forks: z.number().int().min(0).default(0),
  openIssues: z.number().int().min(0).default(0),
  url: z.string().url(),
  logo: z.string().optional(),
  tags: z.array(z.string()).default([]),
  highlights: z.array(z.string()).default([]),
  trending: z.boolean().default(false),
});

export const updateRepoSchema = createRepoSchema.partial();

export const repoQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(20),
  search: z.string().optional(),
  language: z.string().optional(),
  difficulty: z.enum(["BEGINNER", "INTERMEDIATE", "ADVANCED"]).optional(),
  domain: z.enum(["AI", "WEB", "DEVOPS", "MOBILE", "BLOCKCHAIN", "DATA", "SECURITY", "CLOUD", "GAMING", "OTHER"]).optional(),
  sortBy: z.enum(["createdAt", "stars", "forks", "lastUpdated", "name"]).default("createdAt"),
  sortOrder: z.enum(["asc", "desc"]).default("desc"),
});

// ==================== DSA MANAGEMENT ====================

export const dsaTopicQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(50),
  search: z.string().optional(),
});

const dsaProblemInputSchema = z.object({
  title: z.string().min(1).max(300),
  difficulty: z.string().default("Easy"),
  leetcodeUrl: z.string().optional().or(z.literal("")),
  gfgUrl: z.string().optional().or(z.literal("")),
  articleUrl: z.string().optional().or(z.literal("")),
  videoUrl: z.string().optional().or(z.literal("")),
  hackerrankUrl: z.string().optional().or(z.literal("")),
  codechefUrl: z.string().optional().or(z.literal("")),
  tags: z.array(z.string()).default([]),
  companies: z.array(z.string()).default([]),
  hints: z.string().optional(),
  sheets: z.array(z.string()).default([]),
  orderIndex: z.number().int().min(0),
});

const dsaSubTopicInputSchema = z.object({
  name: z.string().min(1).max(200),
  orderIndex: z.number().int().min(0),
  problems: z.array(dsaProblemInputSchema).default([]),
});

export const createDsaTopicSchema = z.object({
  name: z.string().min(1).max(200),
  description: z.string().max(2000).optional(),
  orderIndex: z.number().int().min(0),
  subTopics: z.array(dsaSubTopicInputSchema).default([]),
});

export const updateDsaTopicSchema = createDsaTopicSchema.partial();

export const createDsaProblemSchema = dsaProblemInputSchema.extend({
  subTopicId: z.number().int().positive(),
});

export const updateDsaProblemSchema = createDsaProblemSchema.partial();

export const createDsaSubTopicSchema = z.object({
  name: z.string().min(1).max(200),
  orderIndex: z.number().int().min(0),
  topicId: z.number().int().positive(),
});

export const updateDsaSubTopicSchema = createDsaSubTopicSchema.partial();

// ==================== APTITUDE MANAGEMENT ====================

export const aptitudeCategoryQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(50),
  search: z.string().optional(),
});

export const createAptitudeCategorySchema = z.object({
  name: z.string().min(1).max(200),
  description: z.string().max(2000).optional(),
  orderIndex: z.number().int().min(0).default(0),
});

export const updateAptitudeCategorySchema = createAptitudeCategorySchema.partial();

export const createAptitudeTopicSchema = z.object({
  name: z.string().min(1).max(200),
  description: z.string().max(2000).optional(),
  orderIndex: z.number().int().min(0).default(0),
  sourceUrl: z.string().optional().or(z.literal("")),
  categoryId: z.number().int().positive(),
});

export const updateAptitudeTopicSchema = createAptitudeTopicSchema.partial();

export const aptitudeQuestionQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(20),
  topicId: z.coerce.number().int().optional(),
  difficulty: z.enum(["EASY", "MEDIUM", "HARD"]).optional(),
  search: z.string().optional(),
});

export const createAptitudeQuestionSchema = z.object({
  question: z.string().min(1),
  optionA: z.string().min(1),
  optionB: z.string().min(1),
  optionC: z.string().min(1),
  optionD: z.string().min(1),
  optionE: z.string().optional(),
  correctAnswer: z.string().min(1),
  explanation: z.string().optional(),
  difficulty: z.string().default("MEDIUM"),
  companies: z.array(z.string()).default([]),
  sourceUrl: z.string().optional().or(z.literal("")),
  topicId: z.number().int().positive(),
});

export const updateAptitudeQuestionSchema = createAptitudeQuestionSchema.partial();

// ==================== SKILL TEST MANAGEMENT ====================

export const adminSkillTestQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(20),
  search: z.string().optional(),
  difficulty: z.enum(["BEGINNER", "INTERMEDIATE", "ADVANCED"]).optional(),
  isActive: z.enum(["true", "false"]).optional(),
});

const skillTestQuestionInputSchema = z.object({
  question: z.string().min(1),
  options: z.array(z.string().min(1)).length(4),
  correctIndex: z.number().int().min(0).max(3),
  explanation: z.string().optional(),
  orderIndex: z.number().int().min(0),
});

export const createSkillTestAdminSchema = z.object({
  skillName: z.string().min(1).max(200),
  title: z.string().min(1).max(300),
  description: z.string().max(2000).optional(),
  difficulty: z.enum(["BEGINNER", "INTERMEDIATE", "ADVANCED"]).default("INTERMEDIATE"),
  timeLimitSecs: z.number().int().positive().default(1800),
  passThreshold: z.number().int().min(1).max(100).default(70),
  isActive: z.boolean().default(true),
  questions: z.array(skillTestQuestionInputSchema).default([]),
});

export const updateSkillTestAdminSchema = createSkillTestAdminSchema.partial();

// ==================== HACKATHON MANAGEMENT ====================

export const hackathonQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(20),
  search: z.string().optional(),
  status: z.enum(["upcoming", "ongoing", "past"]).optional(),
  locationType: z.enum(["virtual", "in-person", "hybrid"]).optional(),
  sortBy: z.enum(["createdAt", "name", "startDate", "endDate"]).default("createdAt"),
  sortOrder: z.enum(["asc", "desc"]).default("desc"),
});

export const createHackathonSchema = z.object({
  name: z.string().min(1).max(300),
  organizer: z.string().min(1).max(200),
  logo: z.string().optional().or(z.literal("")),
  description: z.string().min(10).max(5000),
  prizePool: z.string().max(100),
  startDate: z.string().min(1),
  endDate: z.string().min(1),
  location: z.string().max(300),
  locationType: z.enum(["virtual", "in-person", "hybrid"]),
  website: z.string().url().optional().or(z.literal("")),
  tags: z.array(z.string()).default([]),
  tracks: z.array(z.string()).default([]),
  eligibility: z.string().max(2000).optional().or(z.literal("")),
  status: z.enum(["upcoming", "ongoing", "past"]).default("upcoming"),
  ecosystem: z.string().max(200),
  highlights: z.array(z.string()).default([]),
});

export const updateHackathonSchema = createHackathonSchema.partial();

// ==================== ADMIN EXTERNAL JOBS ====================

export const createAdminJobSchema = z.object({
  company: z.string().max(200).optional(),
  role: z.string().max(200).optional(),
  description: z.string().max(5000).optional(),
  salary: z.string().max(100).optional(),
  location: z.string().max(200).optional(),
  applyLink: z.string().url().optional().or(z.literal("")),
  tags: z.array(z.string()).default([]),
});

export const updateAdminJobSchema = createAdminJobSchema.partial().extend({
  isActive: z.boolean().optional(),
});

export const adminExternalJobQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(20),
  search: z.string().optional(),
});

// ==================== AI PROVIDER MANAGEMENT ====================

export const switchAIProviderSchema = z.object({
  service: z.enum(["ATS_SCORE", "COVER_LETTER", "RESUME_GEN", "LATEX_CHAT"]),
  provider: z.enum(["GEMINI", "GROQ", "OPENROUTER", "CODESTRAL"]),
  modelName: z.string().min(1, "Model name is required"),
});
