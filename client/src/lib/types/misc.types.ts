// Pagination
export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

// ── Email Campaign ──
export type EmailCampaignStatus = "DRAFT" | "QUEUED" | "SENDING" | "PAUSED" | "COMPLETED" | "FAILED";
export type EmailLogStatus = "PENDING" | "SENT" | "FAILED";

export interface EmailCampaign {
  id: number;
  name: string;
  contactType: string;
  status: EmailCampaignStatus;
  totalEmails: number;
  sentCount: number;
  failedCount: number;
  intervalSeconds: number;
  startedAt: string | null;
  completedAt: string | null;
  createdAt: string;
}

export interface EmailLog {
  id: number;
  recipientName: string;
  recipientEmail: string;
  subject: string;
  status: EmailLogStatus;
  sentAt: string | null;
  errorMessage: string | null;
}

export interface EmailCampaignDetail extends EmailCampaign {
  chatHistory: { role: "user" | "assistant"; content: string }[];
  emailSubject: string | null;
  emailTemplate: string | null;
  filters: Record<string, string>;
  emailLogs: EmailLog[];
}

// ── Blog ──
export type BlogCategory = "CAREER_ADVICE" | "INTERVIEW_TIPS" | "SALARY_GUIDE" | "INDUSTRY_INSIGHTS" | "RESUME_TIPS" | "TECH_TRENDS";
export type BlogStatus = "DRAFT" | "PUBLISHED";

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  category: BlogCategory;
  tags: string[];
  author: { id: number; name: string; profilePic?: string };
  status: BlogStatus;
  featuredImage?: string;
  readingTime: number;
  viewCount: number;
  isFeatured: boolean;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
  bookmarked?: boolean;
  likes?: number;
  relatedPosts?: BlogPost[];
}

// ── InternHack AI / Job Agent ──
export interface JobFeedMatch {
  matchId: number;
  score: number;
  skillMatch: number;
  locationMatch: number;
  salaryMatch: number;
  saved: boolean;
  seen: boolean;
  job: {
    id: number;
    title: string;
    company: string;
    location: string;
    salary: string | null;
    skills: string[];
    workMode: string | null;
    experienceLevel: string | null;
    applicationUrl: string | null;
    tags: string[];
    createdAt: string;
  };
}

export interface JobPreferences {
  desiredRoles: string[];
  desiredSkills: string[];
  desiredLocations: string[];
  minSalary: number | null;
  workMode: string[];
  experienceLevel: string[];
  domains: string[];
}

export interface JobAgentMessage {
  id?: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
  jobCount?: number;
  jobIds?: number[];
  jobs?: JobFeedMatch["job"][];
}

export interface JobAgentResponse {
  reply: string;
  jobs: JobFeedMatch["job"][];
  preferencesUpdated: boolean;
}

export interface JobFeedStats {
  total: number;
  unseen: number;
  saved: number;
}

// ── Funding Signals ──
export type FundingSignalStatus = "ACTIVE" | "STALE" | "ARCHIVED";

export interface FundingSignal {
  id: number;
  companyName: string;
  companyWebsite: string | null;
  logoUrl: string | null;
  fundingRound: string | null;
  fundingAmount: string | null;
  amountUsd: string | null;
  announcedAt: string;
  hqLocation: string | null;
  industry: string | null;
  description: string | null;
  sourceUrl: string;
  source: string;
  sourceId: string;
  investors: string[];
  tags: string[];
  careersUrl: string | null;
  hiringSignal: boolean;
  status: FundingSignalStatus;
  scrapedAt: string;
  lastSeenAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface FundingSignalListResponse {
  signals: FundingSignal[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface FundingSignalSource {
  id: string;
  name: string;
}
