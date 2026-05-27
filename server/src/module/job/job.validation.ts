import { z } from "zod";

const customFieldDefinitionSchema = z.object({
  id: z.string(),
  label: z.string(),
  fieldType: z.enum([
    "TEXT",
    "TEXTAREA",
    "DROPDOWN",
    "MULTI_SELECT",
    "FILE_UPLOAD",
    "BOOLEAN",
    "NUMERIC",
    "DATE",
    "EMAIL",
    "URL",
  ]),
  required: z.boolean(),
  placeholder: z.string().optional(),
  options: z.array(z.string()).optional(),
  validation:
    z
      .object({
        min: z.number().optional(),
        max: z.number().optional(),
        maxLength: z.number().optional(),
        maxFileSize: z.number().optional(),
        allowedTypes: z.array(z.string()).optional(),
      })
      .optional(),
});

const coerceBoolean = z.preprocess((value) => {
  if (typeof value === "string") {
    const normalized = value.trim().toLowerCase();
    if (normalized === "true" || normalized === "1") return true;
    if (normalized === "false" || normalized === "0") return false;
  }
  return value;
}, z.boolean());

/**
 * Strict optional annual INR for JSON bodies (reject `12abc`; never use parseInt alone on free text).
 * Example: `z.union([z.string().regex(/^\d+$/).transform((s) => Number.parseInt(s, 10)), z.number().int().nonnegative()]).optional()`
 */
function queryParamDigitsOnlyToInt(fieldLabel: string) {
  return z.preprocess((val: unknown) => {
    if (val === undefined || val === null) return undefined;
    const raw = Array.isArray(val) ? val[0] : val;
    if (typeof raw !== "string") return undefined;
    const t = raw.trim();
    return t === "" ? undefined : t;
  }, z.union([z.undefined(), z.string().regex(/^\d+$/, `${fieldLabel} must be digits only`).transform((s) => Number.parseInt(s, 10))]));
}

export const createJobSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  location: z.string(),
  salary: z.string(),
  company: z.string(),
  status: z.enum(["DRAFT", "PUBLISHED", "CLOSED", "ARCHIVED"]).default("DRAFT"),
  customFields: z.array(customFieldDefinitionSchema).default([]),
  deadline: z.iso.datetime().optional(),
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

export const jobQuerySchema = z
  .object({
    page: z.coerce.number().int().positive().default(1),
    limit: z.coerce.number().int().positive().max(100).default(10),
    search: z.string().optional(),
    location: z.string().optional(),
    company: z.string().optional(),
    status: z.enum(["DRAFT", "PUBLISHED", "CLOSED", "ARCHIVED"]).optional(),
    tags: z.string().optional(),
    includeExpired: coerceBoolean.default(false),
    salaryMin: queryParamDigitsOnlyToInt("salaryMin"),
    salaryMax: queryParamDigitsOnlyToInt("salaryMax"),
  })
  .superRefine((data, ctx) => {
    if (
      data.salaryMin !== undefined &&
      data.salaryMax !== undefined &&
      data.salaryMin > data.salaryMax
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "salaryMin must be less than or equal to salaryMax",
        path: ["salaryMin"],
      });
    }
  });
