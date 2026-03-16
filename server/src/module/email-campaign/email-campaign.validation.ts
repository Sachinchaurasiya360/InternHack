import { z } from "zod";

export const chatMessageSchema = z.object({
  message: z.string().min(1).max(2000),
  history: z.array(z.object({
    role: z.enum(["user", "assistant"]),
    content: z.string(),
  })).max(30).default([]),
  contactType: z.enum(["PROFESSOR", "HR"]),
});

export const createCampaignSchema = z.object({
  name: z.string().min(1).max(100),
  chatHistory: z.array(z.object({
    role: z.enum(["user", "assistant"]),
    content: z.string(),
  })).min(2),
  emailSubject: z.string().min(1).max(200),
  emailTemplate: z.string().min(1).max(5000),
  contactType: z.enum(["PROFESSOR", "HR"]),
  filters: z.object({
    college: z.string().optional(),
    department: z.string().optional(),
    company: z.string().optional(),
    search: z.string().optional(),
  }).default({}),
  intervalSeconds: z.number().int().min(30).max(600).default(60),
});

export const previewSchema = z.object({
  emailTemplate: z.string().min(1).max(5000),
  emailSubject: z.string().min(1).max(200),
  contactType: z.enum(["PROFESSOR", "HR"]),
  filters: z.object({
    college: z.string().optional(),
    department: z.string().optional(),
    company: z.string().optional(),
    search: z.string().optional(),
  }).default({}),
  count: z.number().int().min(1).max(5).default(3),
});
