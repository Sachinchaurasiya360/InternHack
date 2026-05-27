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

/**
 * Express `req.query` value for optional annual INR filters.
 * Omits empty input; rejects partial numbers like `"12abc"`. Allows non-negative integers only.
 *
 * @param field - Used in validation error paths/messages (`salaryMin` / `salaryMax`).
 */
function annualInrQueryField(field: "salaryMin" | "salaryMax") {
  const msg = `${field} must be a non-negative integer (digits only)`;
  return z.preprocess(
    (v) => {
      if (v === undefined || v === null || v === "") return undefined;
      if (typeof v === "string" && v.trim() === "") return undefined;
      if (typeof v === "number") {
        if (!Number.isFinite(v) || !Number.isInteger(v) || v < 0) return "__invalid__";
        return String(Math.min(v, Number.MAX_SAFE_INTEGER));
      }
      return String(v).trim();
    },
    z
      .union([
        z.undefined(),
        z.literal("__invalid__").refine(() => false, { message: msg }),
        z
          .string()
          .regex(/^\d{1,20}$/, { message: msg })
          .transform((s) => Number.parseInt(s, 10))
          .pipe(z.number().int().min(0).max(Number.MAX_SAFE_INTEGER)),
      ])
      .optional(),
  );
}

/** Parsed `GET /jobs`-style listing query (digits-only salary bounds optional). */
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
    salaryMin: annualInrQueryField("salaryMin"),
    salaryMax: annualInrQueryField("salaryMax"),
  })
  .superRefine((data, ctx) => {
    if (
      data.salaryMin !== undefined &&
      data.salaryMax !== undefined &&
      data.salaryMin > data.salaryMax
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "salaryMin must be <= salaryMax",
        path: ["salaryMin"],
      });
    }
  });
