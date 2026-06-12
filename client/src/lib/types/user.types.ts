export type UserRole = "STUDENT" | "RECRUITER" | "ADMIN";
export type StudentJobStatus = "NO_OFFER" | "LOOKING" | "OPEN_TO_OFFER";

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

export interface AchievementItem {
  id: string;
  title: string;
  description: string;
  date?: string;
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
  jobStatus?: StudentJobStatus | null;
  isProfilePublic?: boolean;
  projects?: ProjectItem[];
  achievements?: AchievementItem[];
  createdAt?: string;
  subscriptionPlan?: "FREE" | "MONTHLY" | "YEARLY";
  subscriptionStatus?: "ACTIVE" | "EXPIRED";
  subscriptionEndDate?: string;
  ossTier?: string;
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

// Talent Search
export interface TalentSearchResult {
  id: number;
  name: string;
  email: string;
  profilePic?: string;
  bio?: string;
  college?: string;
  graduationYear?: number;
  skills: string[];
  location?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  portfolioUrl?: string;
  leetcodeUrl?: string;
  resumes: string[];
  jobStatus?: string | null;
  bestAtsScore: number | null;
  verifiedSkillCount: number;
  verifiedSkills: string[];
  ossTier?: string;
}

// Saved Candidates
export interface SavedCandidate {
  id: number;
  recruiterId: number;
  studentId: number;
  notes: string | null;
  createdAt: string;
  student: {
    id: number;
    name: string;
    email: string;
    college: string | null;
    graduationYear: number | null;
    location: string | null;
    skills: string[];
    profilePic: string | null;
    bio: string | null;
    linkedinUrl: string | null;
    githubUrl: string | null;
    portfolioUrl: string | null;
  };
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
