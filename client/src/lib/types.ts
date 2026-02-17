export type UserRole = "STUDENT" | "RECRUITER";
export type JobStatus = "DRAFT" | "PUBLISHED" | "CLOSED" | "ARCHIVED";
export type ApplicationStatus = "APPLIED" | "IN_PROGRESS" | "SHORTLISTED" | "REJECTED" | "HIRED" | "WITHDRAWN";
export type RoundStatus = "PENDING" | "IN_PROGRESS" | "COMPLETED" | "SKIPPED";
export type FieldType = "TEXT" | "TEXTAREA" | "DROPDOWN" | "MULTI_SELECT" | "FILE_UPLOAD" | "BOOLEAN" | "NUMERIC" | "DATE" | "EMAIL" | "URL";

export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  contactNo?: string;
  profilePic?: string;
  resume?: string;
  company?: string;
  designation?: string;
  createdAt?: string;
}

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

export interface Round {
  id: number;
  jobId: number;
  name: string;
  description?: string;
  orderIndex: number;
  instructions?: string;
  customFields: CustomFieldDefinition[];
  evaluationCriteria: EvaluationCriterion[];
  _count?: { roundSubmissions: number };
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

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
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
