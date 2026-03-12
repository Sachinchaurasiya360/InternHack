import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.enum(["STUDENT", "RECRUITER"]).default("STUDENT"),
  company: z.string().optional(),
  designation: z.string().optional(),
  contactNo: z.string().optional(),
});

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
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
  skills: z.array(z.string()).max(20).optional(),
  location: z.string().optional(),
  linkedinUrl: z.string().url().or(z.literal("")).optional(),
  githubUrl: z.string().url().or(z.literal("")).optional(),
  portfolioUrl: z.string().url().or(z.literal("")).optional(),
  jobStatus: z.enum(["NO_OFFER", "LOOKING", "OPEN_TO_OFFER"]).nullable().optional(),
  projects: z.array(z.object({
    id: z.string(),
    title: z.string().min(1).max(100),
    description: z.string().max(500),
    techStack: z.array(z.string()).max(10),
    liveUrl: z.string().url().or(z.literal("")).optional(),
    repoUrl: z.string().url().or(z.literal("")).optional(),
  })).max(10).optional(),
  achievements: z.array(z.object({
    id: z.string(),
    title: z.string().min(1).max(100),
    description: z.string().max(300),
    date: z.string().max(20).optional(),
  })).max(10).optional(),
});
