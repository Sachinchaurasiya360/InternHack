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
export type PeerMockInterviewStatus = "PENDING_SCHEDULE" | "SCHEDULED" | "COMPLETED" | "CANCELLED";

export interface PeerMockInterview {
  id: number;
  topic: string;
  customTopic?: string | null;
  studentAId: number | null;
  studentBId: number | null;
  assignedProblemId: number | null;
  status: PeerMockInterviewStatus;
  sharedAvailability: string[];
  proposedTime: string | null;
  proposedById: number | null;
  scheduledAt: string | null;
  schedulingConfirmed: boolean;
  meetingLink: string | null;
  ratingAForB: number | null;
  feedbackAForB: string | null;
  ratingBForA: number | null;
  feedbackBForA: string | null;
  completedAt: string | null;
  createdAt: string;
  updatedAt: string;
  studentA: { id: number; name: string; email: string; college: string | null; linkedinUrl: string | null } | null;
  studentB: { id: number; name: string; email: string; college: string | null; linkedinUrl: string | null } | null;
  assignedProblem: { id: number; title: string; slug: string; difficulty: string } | null;
  preparationMaterial?: MockInterviewPreparationMaterial | null;
}

export interface MockInterviewPreparationMaterial {
  type: string;
  dsaProblem?: { id: number; title: string; slug: string; difficulty: string } | null;
  generic?: {
    prompt: string;
    requirements?: string[];
    objectives?: string[];
    followUpQuestions?: string[];
  };
  /** True when the viewer is the interviewee for this round: the exact question list is withheld so the interview stays live. */
  redacted?: boolean;
  note?: string;
}

// Live peer matching
export type PeerMatchStrength = "STRONG" | "GOOD" | "FAIR";

export interface PeerMatchCandidate {
  userId: number;
  name: string;
  college: string | null;
  profilePic: string | null;
  matchPercent: number;
  matchStrength: PeerMatchStrength;
  customTopic?: string | null;
  sharedAvailability: string[];
  hasRoadmapMatch: boolean;
  verifiedSkills: { skillName: string; score: number }[];
}

// Locked entries carry no identifying data; the server only sends an initial
// and the strength band for the blurred premium-upsell cards.
export interface PeerLockedMatch {
  nameInitial: string;
  matchStrength: PeerMatchStrength;
}

export interface PeerMatchListResponse {
  optedIn: boolean;
  activePairing: boolean;
  tier: "FREE" | "PREMIUM";
  topic?: string;
  customTopic?: string | null;
  matches: PeerMatchCandidate[];
  lockedMatches: PeerLockedMatch[];
  totalCandidates: number;
}
