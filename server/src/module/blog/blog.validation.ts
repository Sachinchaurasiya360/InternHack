import { z } from "zod";

const BLOG_CATEGORIES = ["CAREER_ADVICE", "INTERVIEW_TIPS", "SALARY_GUIDE", "INDUSTRY_INSIGHTS", "RESUME_TIPS", "TECH_TRENDS"] as const;

export const createPostSchema = z.object({
  title: z.string().min(5).max(200),
  content: z.string().min(50),
  excerpt: z.string().max(300).optional(),
  category: z.enum(BLOG_CATEGORIES),
  tags: z.array(z.string()).max(10).optional(),
  featuredImage: z.string().url().optional(),
  status: z.enum(["DRAFT", "PUBLISHED"]).optional(),
});

export const updatePostSchema = createPostSchema.partial();

export const listPostsQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().min(1).max(50).default(10),
  search: z.string().optional(),
  category: z.enum(BLOG_CATEGORIES).optional(),
  tag: z.string().optional(),
  status: z.enum(["DRAFT", "PUBLISHED"]).optional(),
});
