export type InterviewSource =
  | "ON_CAMPUS"
  | "OFF_CAMPUS"
  | "REFERRAL"
  | "LINKEDIN"
  | "PORTAL"
  | "OTHER";

export type InterviewDifficulty = "EASY" | "MEDIUM" | "HARD";

export type InterviewOutcome =
  | "SELECTED"
  | "REJECTED"
  | "WITHDRAWN"
  | "PENDING"
  | "GHOSTED";

export type InterviewRoundType =
  | "TECHNICAL"
  | "CODING"
  | "DSA"
  | "SYSTEM_DESIGN"
  | "HR"
  | "MANAGERIAL"
  | "BEHAVIORAL"
  | "APTITUDE"
  | "GD"
  | "OTHER";

export interface InterviewQuestion {
  prompt: string;
  topic?: string;
  difficulty?: InterviewDifficulty;
}

export interface InterviewRound {
  name?: string;
  type: InterviewRoundType;
  durationMins?: number;
  questions: InterviewQuestion[];
  notes?: string;
}

export interface InterviewPrepResource {
  type: "article" | "book" | "course" | "video" | "other";
  title: string;
  url?: string;
}

export interface InterviewExperienceAuthor {
  id: number;
  name: string;
  profilePic: string | null;
  college: string | null;
}

export interface InterviewExperienceCompany {
  id: number;
  name: string;
  slug: string;
  logo: string | null;
  city: string;
  industry: string;
}

export interface InterviewExperience {
  id: number;
  companyId: number | null;
  companyName: string | null;
  userId: number;
  role: string;
  experienceYears: number | null;
  interviewYear: number;
  interviewMonth: number | null;
  source: InterviewSource;
  difficulty: InterviewDifficulty;
  outcome: InterviewOutcome;
  offered: boolean;
  ctcLpa: number | null;
  totalRounds: number;
  overallRating: number;
  rounds: InterviewRound[];
  tips: string | null;
  prepResources: InterviewPrepResource[];
  isAnonymous: boolean;
  status: "PENDING" | "APPROVED" | "REJECTED";
  upvotes: number;
  views: number;
  createdAt: string;
  updatedAt: string;
  company: InterviewExperienceCompany | null;
  user: InterviewExperienceAuthor | null;
  hasUpvoted?: boolean;
}

export interface InterviewCompanyListItem extends InterviewExperienceCompany {
  experienceCount: number;
  latestAt: string;
  avgRating: number;
  reviewCount: number;
}

export interface InterviewCompanySummary {
  company: { id: number; name: string; slug: string; logo: string | null };
  total: number;
  selectionRate: number | null;
  avgRounds: number | null;
  byDifficulty: { difficulty: InterviewDifficulty; count: number }[];
  byOutcome: { outcome: InterviewOutcome; count: number }[];
}

export interface InterviewTopQuestion {
  prompt: string;
  count: number;
  topic: string | null;
  difficulty: string | null;
}

export interface InterviewListResponse {
  experiences: InterviewExperience[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface InterviewCompanyListResponse {
  companies: InterviewCompanyListItem[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Mock Interview
export interface MockInterviewTranscriptEntry {
  question: string;
  answer: string;
}

export interface MockInterviewFeedback {
  communication: string;
  technicalAccuracy: string;
  areasToImprove: string[];
  strengths: string[];
  overallRating: number;
}

export interface MockInterviewFeedbackResponse {
  feedback: MockInterviewFeedback;
  fallbackUsed: boolean;
}
