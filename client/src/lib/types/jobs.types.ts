import type { UserRole } from "./user.types";

export interface AdminDashboardData {
  totalStudents: number;
  totalJobs: number;
  activeJobs: number;
  totalApplications: number;
  recentUsers: { id: number; name: string; email: string; role: UserRole; isActive: boolean; createdAt: string }[];
  recentJobs: {
    id: number;
    company: string | null;
    role: string | null;
    isActive: boolean;
    expiresAt: string;
    createdAt: string;
    _count: { applications: number };
  }[];
}

export interface ExternalJob {
  id: number;
  slug: string | null;
  company: string | null;
  role: string | null;
  description: string | null;
  salary: string | null;
  currency: string | null;
  location: string | null;
  applyLink: string | null;
  tags: string[];
  expiresAt?: string;
  createdAt?: string;
}

export interface ExternalApplication {
  id: number;
  studentId: number;
  adminJobId: number;
  studentNotes: string | null;
  createdAt: string;
  updatedAt: string;
  adminJob: {
    id: number;
    slug: string | null;
    company: string | null;
    role: string | null;
    location: string | null;
    salary: string | null;
    tags: string[];
    applyLink: string | null;
  };
}

// Scraped Jobs
export type ScrapedJobStatus = "ACTIVE" | "EXPIRED" | "REMOVED";

export interface ScrapedJob {
  id: number;
  title: string;
  description: string;
  company: string;
  location: string;
  salary?: string;
  tags: string[];
  applicationUrl: string;
  source: string;
  sourceId: string;
  sourceUrl?: string;
  status: ScrapedJobStatus;
  scrapedAt: string;
  lastSeenAt: string;
  metadata: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
}

export interface ScrapedJobSource {
  id: string;
  name: string;
}

// Trends
export interface TrendsOverview {
  totalJobs: number;
  totalScrapedJobs: number;
  topCity: string;
  topSkill: string;
}

export interface TrendSkill {
  name: string;
  demandCount: number;
  supplyCount: number;
}

export interface TrendLocation {
  city: string;
  jobCount: number;
}

export interface TrendSalary {
  range: string;
  count: number;
}

export interface TrendTimeline {
  month: string;
  jobCount: number;
  scrapedCount: number;
}

export interface TrendSupply {
  name: string;
  userCount: number;
}
