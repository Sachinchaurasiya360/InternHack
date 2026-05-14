import { z } from "zod";

export const generateCoverLetterSchema = z.object({
  jobDescription: z.string().min(50, "Job description must be at least 50 characters"),
  jobTitle: z.string().optional(),
  companyName: z.string().optional(),
  keySkills: z.string().optional(),
  tone: z.enum(["professional", "friendly", "enthusiastic", "technical", "creative", "formal", "concise", "startup"]),
  useProfile: z.boolean().optional(),
});

export type GenerateCoverLetterInput = z.infer<typeof generateCoverLetterSchema>;

export interface UserProfile {
  name: string;
  bio?: string | null;
  college?: string | null;
  graduationYear?: number | null;
  skills: string[];
  location?: string | null;
  company?: string | null;
  designation?: string | null;
  projects: { title: string; description: string; techStack: string[] }[];
  achievements: { title: string; description: string; date?: string }[];
}
