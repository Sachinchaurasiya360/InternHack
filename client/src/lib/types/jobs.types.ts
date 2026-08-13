import type { UserRole, User } from "./user.types";

export type JobStatus = "DRAFT" | "PUBLISHED" | "CLOSED" | "ARCHIVED";
export type ApplicationStatus = "APPLIED" | "IN_PROGRESS" | "SHORTLISTED" | "REJECTED" | "HIRED" | "WITHDRAWN";
export type RoundStatus = "PENDING" | "IN_PROGRESS" | "COMPLETED" | "SKIPPED";
export type FieldType = "TEXT" | "TEXTAREA" | "DROPDOWN" | "MULTI_SELECT" | "FILE_UPLOAD" | "BOOLEAN" | "NUMERIC" | "DATE" | "EMAIL" | "URL";

export interface CustomFieldDefinition {
  id: string;
  label: string;
  fieldType: FieldType;
  required: boolean;
  placeholder?: string;
  options?: string[];
  validation?: {
    min?: number;
    max?: number;
    maxLength?: number;
    maxFileSize?: number;
    allowedTypes?: string[];
  };
}

export interface EvaluationCriterion {
  id: string;
  criterion: string;
  maxScore: number;
  weight?: number;
}

export interface AssessmentQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
  points: number;
}

export interface Round {
  id: number;
  jobId: number;
  name: string;
  description?: string;
  orderIndex: number;
  instructions?: string;
  customFields: CustomFieldDefinition[];
  evaluationCriteria: EvaluationCriterion[];
  assessmentQuestions?: AssessmentQuestion[];
  timeLimitSecs?: number | null;
  autoGrade?: boolean;
  activateAt?: string | null;
  _count?: { roundSubmissions: number };
  createdAt: string;
  updatedAt: string;
}

export interface Job {
  id: number;
  title: string;
  description: string;
  location: string;
  salary: string;
  company: string;
  status: JobStatus;
  customFields: CustomFieldDefinition[];
  deadline?: string;
  tags: string[];
  recruiterId: number;
  recruiter?: { id: number; name: string; company?: string; designation?: string };
  rounds?: Round[];
  _count?: { applications: number; rounds: number };
  createdAt: string;
  updatedAt: string;
}

export interface RoundSubmission {
  id: number;
  applicationId: number;
  roundId: number;
  status: RoundStatus;
  fieldAnswers: Record<string, unknown>;
  attachments: string[];
  evaluationScores?: Record<string, { score: number; comment?: string }>;
  recruiterNotes?: string;
  submittedAt?: string;
  evaluatedAt?: string;
  round?: Round;
  application?: Application;
  createdAt: string;
  updatedAt: string;
}

export interface Application {
  id: number;
  jobId: number;
  studentId: number;
  status: ApplicationStatus;
  currentRoundId?: number;
  customFieldAnswers: Record<string, unknown>;
  resumeUrl?: string;
  coverLetter?: string;
  job?: Job;
  student?: User;
  roundSubmissions?: RoundSubmission[];
  _count?: { roundSubmissions: number };
  createdAt: string;
  updatedAt: string;
}
export type OpportunityType = "JOB" | "EXTERNAL_JOB";

export interface CalendarOpportunity {
  id: string;
  type: OpportunityType;
  title: string;
  subtitle: string | null;
  deadline: string;
  status: string | null;
  url: string | null;
}
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

export type TrackedApplicationStatus =
  | "SAVED"
  | "APPLIED"
  | "OA"
  | "PHONE_SCREEN"
  | "INTERVIEW"
  | "OFFER"
  | "REJECTED"
  | "WITHDRAWN"
  | "GHOSTED";

export type TrackedApplicationSource =
  | "INTERNHACK_ADMIN"
  | "SCRAPED"
  | "JOB_INDEX"
  | "EXTENSION"
  | "MANUAL";

// Unified application record returned by GET /application-tracker. Merges the
// new trackedJobApplication table (recordType "TRACKED") with the legacy
// externalJobApplication table (recordType "LEGACY_EXTERNAL"), so `id` is a
// composite string ("tracked-1" / "legacy-1") and `numericId` is the row id.
export interface TrackedApplication {
  id: string;
  numericId: number;
  recordType: "TRACKED" | "LEGACY_EXTERNAL";
  sourceType: TrackedApplicationSource;
  sourceId: number | null;
  adminJobId: number | null;
  company: string;
  role: string;
  location: string | null;
  jobUrl: string | null;
  applicationUrl: string | null;
  jobDescription: string | null;
  status: TrackedApplicationStatus;
  appliedAt: string | null;
  deadline: string | null;
  nextFollowUpAt: string | null;
  resumeUrl: string | null;
  coverLetterId: number | null;
  notes: string;
  contacts: unknown[];
  events: unknown[];
  extensionMetadata: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
}

export interface ApplicationTrackerStats {
  total: number;
  saved: number;
  applied: number;
  interviews: number;
  offers: number;
  rejections: number;
  ghosted: number;
  applicationsThisWeek: number;
  responseRate: number;
  byStatus: Record<string, number>;
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
