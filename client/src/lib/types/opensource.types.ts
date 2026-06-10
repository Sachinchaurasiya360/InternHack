// Open Source Repos
export type RepoDifficulty = "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
export type RepoDomain = "AI" | "WEB" | "DEVOPS" | "MOBILE" | "BLOCKCHAIN" | "DATA" | "SECURITY" | "CLOUD" | "GAMING" | "OTHER";

export interface OpenSourceRepo {
  id: number;
  name: string;
  owner: string;
  description: string;
  language: string;
  techStack: string[];
  difficulty: RepoDifficulty;
  domain: RepoDomain;
  issueTypes: string[];
  stars: number;
  forks: number;
  openIssues: number;
  url: string;
  logo?: string;
  tags: string[];
  highlights: string[];
  trending: boolean;
  hacktoberfest: boolean;
  lastUpdated: string;
  createdAt: string;
  updatedAt: string;
  healthScore: number;
  // Phase 3: AI-powered recommendation metadata
  matchReason?: string;
  aiRanked?: boolean;
  matchedSkills?: string[];
}

// Repo Requests
export type RepoRequestStatus = "PENDING" | "APPROVED" | "REJECTED";

export interface RepoRequest {
  id: number;
  name: string;
  owner: string;
  description: string;
  language: string;
  url: string;
  domain: RepoDomain;
  difficulty: RepoDifficulty;
  techStack: string[];
  tags: string[];
  reason: string;
  status: RepoRequestStatus;
  adminNote?: string | null;
  userId: number;
  user?: { id: number; name: string; email: string; profilePic?: string | null };
  repoId?: number | null;
  createdAt: string;
  updatedAt: string;
}

export interface OpenSourceContributionTrendPoint {
  month: string;
  label: string;
  count: number;
}

export interface OpenSourceContributionTrendResponse {
  trend: OpenSourceContributionTrendPoint[];
  total: number;
  domains: { domain: string; count: number }[];
}

export interface HacktoberfestProgressNode {
  id: number;
  label: string;
  description: string;
  completed: boolean;
}

export interface HacktoberfestProgressResponse {
  completed: number;
  goal: number;
  percent: number;
  nodes: HacktoberfestProgressNode[];
  stats: {
    approvedContributions: number;
    repoSuggestions: number;
    firstPrStepsCompleted: number;
    firstPrTotalSteps: number;
  };
}

// GSoC Organizations
export interface GSoCOrganization {
  id: number;
  name: string;
  slug: string;
  url: string;
  imageUrl?: string;
  imageBgColor?: string;
  description: string;
  category: string;
  topics: string[];
  technologies: string[];
  yearsParticipated: number[];
  totalProjects: number;
  projectsData?: Record<string, {
    projects_url: string;
    num_projects: number;
    projects: {
      title: string;
      short_description: string;
      description: string;
      student_name: string;
      code_url: string;
      project_url: string;
    }[];
  }>;
  contactEmail?: string;
  mailingList?: string;
  ideasUrl?: string;
  guideUrl?: string;
}

export interface OpenSourceStreak {
  id: number;
  userId: number;
  currentStreak: number;
  longestStreak: number;
  lastActivityAt: string | null;
  totalDays: number;
  createdAt: string;
  updatedAt: string;
}

export interface GSoCStats {
  total: number;
  categories: { name: string; count: number }[];
  years: { year: number; count: number }[];
  technologies: { name: string; count: number }[];
  topics: { name: string; count: number }[];
}

// ─── Leaderboard Types ─────────────────────────────────────────

export type LeaderboardView = "global" | "weekly" | "monthly" | "university" | "domain";

export interface LeaderboardMetrics {
  guidesCompleted: number;
  reposSuggestedApproved: number;
  githubPRsMerged: number;
  currentStreak: number;
  certificatesEarned: number;
}

export interface LeaderboardEntry {
  rank: number;
  userId: number;
  name: string;
  profilePic?: string;
  profileSlug?: string;
  college?: string;
  score: number;
  metrics: LeaderboardMetrics;
  isCurrentUser: boolean;
}

export interface LeaderboardResponse {
  success: boolean;
  entries: LeaderboardEntry[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
  view: LeaderboardView;
  domain?: string | null;
}

export interface LeaderboardStats {
  totalParticipants: number;
  topScore: number;
  averageScore: number;
  activeThisWeek: number;
}

export interface LeaderboardStatsResponse {
  success: boolean;
  stats: LeaderboardStats;
}

export interface MyRankMetrics extends LeaderboardMetrics {
  reposSuggestedPending: number;
  longestStreak: number;
  lastActivityDate?: string;
}

export interface MyRankResponse {
  success: boolean;
  rank: {
    global?: number;
    weekly?: number;
    monthly?: number;
    university?: number;
    domain: Record<string, number>; // e.g., { "WEB": 5, "AI": 12 }
  };
  scores: {
    total: number;
    weekly: number;
    monthly: number;
  };
  metrics: MyRankMetrics;
  privacy: {
    isPublic: boolean;
    showRealName: boolean;
  };
  user: {
    name: string;
    profilePic?: string;
    college?: string;
    profileSlug?: string;
  };
}

export interface LeaderboardPrivacyUpdate {
  isPublic?: boolean;
  showRealName?: boolean;
}

export interface LeaderboardPrivacyResponse {
  success: boolean;
  message: string;
  privacy: {
    isPublic: boolean;
    showRealName: boolean;
  };
}

export interface LeaderboardRefreshResponse {
  success: boolean;
  message: string;
  scores: {
    total: number;
    weekly: number;
    monthly: number;
  };
}

export interface LeaderboardQueryParams {
  view?: LeaderboardView;
  domain?: string;
  limit?: number;
  page?: number;
}
