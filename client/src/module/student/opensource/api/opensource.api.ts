import api from "../../../../lib/axios";

export interface FirstPRProgressResponse {
  completedStepIds: string[];
}

export interface FirstPRProgressUpdateBody {
  stepId: string;
  completed: boolean;
}

const EMPTY_PROGRESS: string[] = [];

function getCompletedStepIds(data: unknown): string[] {
  if (
    typeof data === "object" &&
    data !== null &&
    "completedStepIds" in data &&
    Array.isArray((data as FirstPRProgressResponse).completedStepIds) &&
    (data as FirstPRProgressResponse).completedStepIds.every((stepId) => typeof stepId === "string")
  ) {
    return (data as FirstPRProgressResponse).completedStepIds;
  }

  return EMPTY_PROGRESS;
}

export async function fetchFirstPRProgress(): Promise<string[]> {
  const { data } = await api.get<FirstPRProgressResponse>("/opensource/first-pr/progress");
  return getCompletedStepIds(data);
}

export async function patchFirstPRProgress(stepId: string, completed: boolean): Promise<string[]> {
  const body: FirstPRProgressUpdateBody = {
    stepId,
    completed,
  };

  const { data } = await api.patch<FirstPRProgressResponse>("/opensource/first-pr/progress", body);
  return getCompletedStepIds(data);
}

export interface RepositoryContribution {
  id: number;
  name: string;
  url: string;
}

export interface StudentBadgeData {
  id: number;
  studentId: number;
  badgeId: number;
  earnedAt: string;
  badge: {
    id: number;
    name: string;
    slug: string;
    description: string;
    iconUrl: string | null;
    category: string;
  };
}

export interface ContributionsDashboardResponse {
  totalPRs: number;
  mergedPRs: number;
  openPRs: number;
  issuesSolved: number;
  repositoriesContributed: RepositoryContribution[];
  firstPrProgress: string[];
  badges: StudentBadgeData[];
}

export async function fetchContributionsDashboard(): Promise<ContributionsDashboardResponse> {
  const { data } = await api.get<ContributionsDashboardResponse>("/student/open-source/contributions");
  return data;
}

export interface GitHubAnalyticsResult {
  developerScore: number;
  developerRank: string;
  projectDiversityScore: number;
  documentationQualityScore: number;
  repositoryActivityScore: number;
  techStackBreakdown: { name: string; percentage: number }[];
  recommendations: string[];
  totalStars: number;
  totalForks: number;
  publicRepos: number;
}

export async function fetchGithubAnalytics(): Promise<GitHubAnalyticsResult> {
  const { data } = await api.get<GitHubAnalyticsResult>("/student/github-analytics");
  return data;
}

export interface InternshipReadinessResult {
  readinessScore: number;
  readinessRank: string;
  categoryScores: {
    resumeQuality: number;
    githubPresence: number;
    verifiedSkills: number;
    openSourceContributions: number;
  };
  strengths: string[];
  weaknesses: string[];
  recommendations: {
    area: string;
    text: string;
    priority: "High" | "Medium" | "Low";
  }[];
  lastUpdated: string;
}

export async function fetchInternshipReadiness(forceRefresh = false): Promise<InternshipReadinessResult> {
  const { data } = await api.get<InternshipReadinessResult>(
    `/student/readiness${forceRefresh ? "?refresh=true" : ""}`
  );
  return data;
}