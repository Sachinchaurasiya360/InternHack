import { z, type ZodSchema } from "zod";
import type { Request, Response, NextFunction } from "express";

// ---------------------------------------------------------------------------
// Reusable route-level validation middleware
// ---------------------------------------------------------------------------

/**
 * Express middleware that validates `req.body` against a Zod schema.
 * On failure it returns a 400 with the same `{ message, errors }` shape used
 * by the existing controller-level validation so the client contract is
 * backward-compatible.
 */
export const validateBody = <T>(schema: ZodSchema<T>) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({
        message: "Validation failed",
        errors: result.error.flatten(),
      });
      return;
    }
    // Replace raw body with the parsed (and possibly coerced/defaulted) data
    req.body = result.data;
    next();
  };

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

export const PERSONAL_EMAIL_DOMAINS = [
  "gmail.com", "yahoo.com", "yahoo.in", "hotmail.com", "outlook.com",
  "live.com", "aol.com", "icloud.com", "mail.com", "protonmail.com",
  "zoho.com", "yandex.com", "gmx.com", "rediffmail.com",
];

export const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .max(128, "Password must be at most 128 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[\W_]/, "Password must contain at least one special character"),
  role: z.enum(["STUDENT", "RECRUITER"]).default("STUDENT"),
  company: z.string().optional(),
  designation: z.string().optional(),
  contactNo: z.string().optional(),
  ref: z.string().optional(),
}).superRefine((data, ctx) => {
  if (data.role === "RECRUITER") {
    const domain = data.email.split("@")[1]?.toLowerCase();
    if (domain && PERSONAL_EMAIL_DOMAINS.includes(domain)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please use your company email. Personal email addresses (Gmail, Yahoo, etc.) are not allowed for recruiter accounts.",
        path: ["email"],
      });
    }
  }
});

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

export const deleteAccountSchema = z.object({
  password: z.string().min(1, "Password is required to confirm account deletion"),
});

export const importGitHubSchema = z.object({
  username: z.string().min(1).max(39).regex(/^[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,38}$/, "Invalid GitHub username"),
});

export const updateProfileSchema = z.object({
  name: z.string().min(2).optional(),
  contactNo: z.string().optional(),
  company: z.string().optional(),
  designation: z.string().optional(),
  bio: z.string().max(500).optional(),
  college: z.string().optional(),
  graduationYear: z.coerce.number().int().min(1990).max(2040).optional().nullable(),
  skills: z.array(z.string().min(1).max(50, "Skill name too long")).max(20).optional(),
  location: z.string().optional(),
  linkedinUrl: z.string().url().or(z.literal("")).optional(),
  githubUrl: z.string().url().or(z.literal("")).optional(),
  portfolioUrl: z.string().url().or(z.literal("")).optional(),
  leetcodeUrl: z.string().url().or(z.literal("")).optional(),
  jobStatus: z.enum(["NO_OFFER", "LOOKING", "OPEN_TO_OFFER"]).nullable().optional(),
  projects: z.array(z.object({
    id: z.string(),
    title: z.string().min(1).max(100),
    description: z.string().max(500),
    techStack: z.array(z.string()).max(10),
    liveUrl: z.string().url().or(z.literal("")).optional(),
    repoUrl: z.string().url().or(z.literal("")).optional(),
    // Featured Projects (GSSoC '26): YYYY-MM or ISO-8601, normalized in the service
    builtAt: z.string().optional(),
  })).max(10).optional(),
  achievements: z.array(z.object({
    id: z.string(),
    title: z.string().min(1).max(100),
    description: z.string().max(300),
    date: z.string().max(20).optional(),
  })).max(10).optional(),
  isProfilePublic: z.boolean().optional(),
});

// ---------------------------------------------------------------------------
// Recovery & verification schemas
// ---------------------------------------------------------------------------

export const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export const resetPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
  otp: z.string().min(1, "OTP is required"),
  newPassword: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(128, "Password must not exceed 128 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[\W_]/, "Password must contain at least one special character"),
});

export const verifyEmailSchema = z.object({
  email: z.string().email("Invalid email address"),
  otp: z.string().min(1, "OTP is required"),
});

export const resendOtpSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export const googleAuthSchema = z.object({
  credential: z.string().optional(),
  accessToken: z.string().optional(),
  role: z.enum(["STUDENT", "RECRUITER"]).default("STUDENT"),
}).superRefine((data, ctx) => {
  if (!data.credential && !data.accessToken) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Either credential or accessToken must be provided",
      path: ["credential"],
    });
  }
});
