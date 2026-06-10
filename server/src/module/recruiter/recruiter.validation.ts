import { z } from "zod";

// sanitization function
const sanitizeText = (value: string) => value.replace(/<[^>]*>?/gm, "").trim();
const MAX_EVALUATION_CRITERION_SCORE = 100;

const customFieldDefinitionSchema = z.object({
  id: z.string(),
  label: z
    .string()
    .transform((value) => sanitizeText(value))
    .refine((value) => value.length > 0, { message: "Label is required" }),
  fieldType: z.enum(["TEXT", "TEXTAREA", "DROPDOWN", "MULTI_SELECT", "FILE_UPLOAD", "BOOLEAN", "NUMERIC", "DATE", "EMAIL", "URL"]),
  required: z.boolean(),
  placeholder: z.string().optional().transform((value) => value ? sanitizeText(value) : value),
  options: z.array(z.string()).optional(),
  validation: z.object({
    min: z.number().optional(),
    max: z.number().optional(),
    maxLength: z.number().optional(),
    maxFileSize: z.number().optional(),
    allowedTypes: z.array(z.string()).optional(),
  }).optional(),
});

const evaluationCriterionSchema = z.object({
  id: z.string(),
  criterion: z.string(),
  maxScore: z
    .number()
    .positive("Maximum score must be greater than 0")
    .max(MAX_EVALUATION_CRITERION_SCORE, `Maximum score cannot exceed ${MAX_EVALUATION_CRITERION_SCORE}`),
  weight: z.number().positive().optional(),
});

export const createRoundSchema = z.object({
  name: z.string().min(1, "Round name is required"),
  description: z.string().optional(),
  orderIndex: z.number().int().min(0),
  instructions: z.string().optional(),
  customFields: z.array(customFieldDefinitionSchema).default([]),
  evaluationCriteria: z.array(evaluationCriterionSchema).default([]),
  assessmentQuestions: z.array(z.object({
    question: z.string().min(1),
    options: z.array(z.string().min(1)).min(2).max(6),
    correctIndex: z.number().int().min(0),
    explanation: z.string().optional(),
    points: z.number().positive().default(1),
  })).default([]),
  timeLimitSecs: z.number().int().positive().nullable().optional(),
  autoGrade: z.boolean().default(false),
  activateAt: z
  .string()
  .datetime()
  .refine((dateString) => new Date(dateString) > new Date(), {
    message: "Activation date must be in the future",
  })
  .nullable()
  .optional(),
});

export const updateRoundSchema = z.object({
  name: z.string().min(1).optional(),
  description: z.string().nullable().optional(),
  instructions: z.string().nullable().optional(),
  customFields: z.array(customFieldDefinitionSchema).optional(),
  evaluationCriteria: z.array(evaluationCriterionSchema).optional(),
  assessmentQuestions: z.array(z.object({
    question: z.string().min(1),
    options: z.array(z.string().min(1)).min(2).max(6),
    correctIndex: z.number().int().min(0),
    explanation: z.string().optional(),
    points: z.number().positive().default(1),
  })).optional(),
  timeLimitSecs: z.number().int().positive().nullable().optional(),
  autoGrade: z.boolean().optional(),
  activateAt: z
  .string()
  .datetime()
  .refine((dateString) => new Date(dateString) > new Date(), {
    message: "Activation date must be in the future",
  })
  .nullable()
  .optional(),
});

export const reorderRoundsSchema = z.object({
  rounds: z.array(z.object({
    roundId: z.number().int(),
    orderIndex: z.number().int().min(0),
  })),
});

export const updateApplicationStatusSchema = z.object({
  status: z.enum(["APPLIED", "IN_PROGRESS", "SHORTLISTED", "REJECTED", "HIRED", "WITHDRAWN"]),
});

export const evaluateSubmissionSchema = z.object({
  evaluationScores: z.record(z.string(), z.object({
    score: z.number().min(0),
    comment: z.string().optional(),
  })),
  recruiterNotes: z.string().optional(),
});

export const applicationFilterSchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(10),
  status: z.enum(["APPLIED", "IN_PROGRESS", "SHORTLISTED", "REJECTED", "HIRED", "WITHDRAWN"]).optional(),
  roundId: z.coerce.number().int().optional(),
  search: z.string().optional(),
});

export const talentSearchSchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(50).default(12),
  skills: z.string().optional(),
  verifiedSkills: z.string().optional(),
  college: z.string().optional(),
  graduationYearMin: z.coerce.number().int().optional(),
  graduationYearMax: z.coerce.number().int().optional(),
  minAtsScore: z.coerce.number().int().min(0).max(100).optional(),
  location: z.string().optional(),
  search: z.string().optional(),
  jobStatus: z.string().optional(),
  ossTier: z.string().optional(),
});

// ==================== SAVED CANDIDATES ====================

export const saveCandidateSchema = z.object({
  notes: z.string().max(500).optional(),
});
