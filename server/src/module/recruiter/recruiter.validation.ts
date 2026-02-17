import { z } from "zod";

const customFieldDefinitionSchema = z.object({
  id: z.string(),
  label: z.string(),
  fieldType: z.enum(["TEXT", "TEXTAREA", "DROPDOWN", "MULTI_SELECT", "FILE_UPLOAD", "BOOLEAN", "NUMERIC", "DATE", "EMAIL", "URL"]),
  required: z.boolean(),
  placeholder: z.string().optional(),
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
  maxScore: z.number().positive(),
  weight: z.number().positive().optional(),
});

export const createRoundSchema = z.object({
  name: z.string().min(1, "Round name is required"),
  description: z.string().optional(),
  orderIndex: z.number().int().min(0),
  instructions: z.string().optional(),
  customFields: z.array(customFieldDefinitionSchema).default([]),
  evaluationCriteria: z.array(evaluationCriterionSchema).default([]),
});

export const updateRoundSchema = z.object({
  name: z.string().min(1).optional(),
  description: z.string().nullable().optional(),
  instructions: z.string().nullable().optional(),
  customFields: z.array(customFieldDefinitionSchema).optional(),
  evaluationCriteria: z.array(evaluationCriterionSchema).optional(),
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
