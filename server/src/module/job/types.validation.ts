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

export const createJobSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  location: z.string(),
  salary: z.string(),
  company: z.string(),
  status: z.enum(["DRAFT", "PUBLISHED", "CLOSED", "ARCHIVED"]).default("DRAFT"),
  customFields: z.array(customFieldDefinitionSchema).default([]),
  deadline: z.string().datetime().optional(),
  tags: z.array(z.string()).default([]),
});

export const updateJobSchema = z.object({
  title: z.string().min(3).optional(),
  description: z.string().min(10).optional(),
  location: z.string().optional(),
  salary: z.string().optional(),
  company: z.string().optional(),
  customFields: z.array(customFieldDefinitionSchema).optional(),
  deadline: z.string().datetime().nullable().optional(),
  tags: z.array(z.string()).optional(),
});

export const updateJobStatusSchema = z.object({
  status: z.enum(["DRAFT", "PUBLISHED", "CLOSED", "ARCHIVED"]),
});

export const jobQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(10),
  search: z.string().optional(),
  location: z.string().optional(),
  company: z.string().optional(),
  status: z.enum(["DRAFT", "PUBLISHED", "CLOSED", "ARCHIVED"]).optional(),
  tags: z.string().optional(),
});
