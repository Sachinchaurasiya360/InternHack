export type UserRole = "STUDENT" | "ADMIN";

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
  // Added for GSSoC '26: Track when the project was built
  builtAt?: string;
}

export interface User {
  id: number;
  profileSlug?: string | null;
  name: string;
  email: string;
  role: UserRole;
  isVerified?: boolean;
  contactNo?: string;
  profilePic?: string;
  coverImage?: string;
  resumes?: string[];
  company?: string;
  designation?: string;
  bio?: string;
  college?: string;
  graduationYear?: number;
  skills?: string[];
  location?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  portfolioUrl?: string;
  leetcodeUrl?: string;
  projects?: ProjectItem[];
  createdAt?: string;
  subscriptionPlan?: "FREE" | "MONTHLY" | "YEARLY";
  subscriptionStatus?: "ACTIVE" | "EXPIRED" | "CANCELLED";
  subscriptionEndDate?: string;
}

// Admin Dashboard
export type AdminTier = "SUPER_ADMIN" | "ADMIN" | "MODERATOR";

export interface AdminUser {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  isActive: boolean;
  company?: string;
  designation?: string;
  contactNo?: string;
  createdAt: string;
  _count: { applications: number; postedJobs: number };
}

export interface ErrorLog {
  id: number;
  method: string;
  path: string;
  statusCode: number;
  message: string;
  rawError: string | null;
  userId: number | null;
  ipAddress: string | null;
  userAgent: string | null;
  requestBody: Record<string, unknown> | null;
  createdAt: string;
}

// GitHub Import
export interface GitHubImportData {
  name: string | null;
  bio: string | null;
  avatar: string | null;
  portfolioUrl: string | null;
  location: string | null;
  languages: string[];
  projects: {
    title: string;
    description: string;
    techStack: string[];
    repoUrl: string;
    liveUrl?: string;
  }[];
}
