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

export interface HiringSignalResult {
  hiringScore: number;
  hiringRank: string;
  categoryScores: {
    technicalDepth: number;
    projectPortfolio: number;
    documentationQuality: number;
    contributionActivity: number;
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

export async function fetchHiringSignal(forceRefresh = false): Promise<HiringSignalResult> {
  const { data } = await api.get<HiringSignalResult>(
    `/student/hiring-signal${forceRefresh ? "?refresh=true" : ""}`
  );
  return data;
}

export interface DeveloperGrowthResult {
  growthScore: number;
  growthRank: string;
  trend: { month: string; score: number }[];
  milestones: { title: string; date: string; category: string; description: string }[];
  monthlyReport: {
    summary: string;
    achievements: string[];
    focusAreas: string[];
  };
  lastUpdated: string;
}

export async function fetchDeveloperGrowth(forceRefresh = false): Promise<DeveloperGrowthResult> {
  const { data } = await api.get<DeveloperGrowthResult>(
    `/student/growth${forceRefresh ? "?refresh=true" : ""}`
  );
  return data;
}

export interface CoachRecommendation {
  repoId: number;
  name: string;
  owner: string;
  url: string;
  description: string;
  language: string;
  difficulty: string;
  stars: number;
  matchPercentage: number;
  matchReason: string;
  starterIssueAreas: string[];
}

export interface CoachRoadmap {
  repoName: string;
  repoUrl: string;
  steps: { title: string; description: string; resources: string[] }[];
  prChecklist: string[];
}

export interface CoachFeedback {
  strengths: string[];
  issues: string[];
  improvedCode?: string;
  suggestions: string[];
}

export async function fetchCoachRecommendations(): Promise<CoachRecommendation[]> {
  const { data } = await api.get<CoachRecommendation[]>("/student/coach/recommendations");
  return data;
}

export async function generateCoachRoadmap(repoId: number): Promise<CoachRoadmap> {
  const { data } = await api.post<CoachRoadmap>("/student/coach/roadmap", { repoId });
  return data;
}

export async function fetchCoachFeedback(repoId: number, codePatch: string): Promise<CoachFeedback> {
  const { data } = await api.post<CoachFeedback>("/student/coach/feedback", { repoId, codePatch });
  return data;
}

export interface ProjectRecommendationResult {
  title: string;
  description: string;
  targetRole: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  portfolioImpact: number;
  resumeImpact: number;
  skills: string[];
  milestones: { title: string; description: string }[];
}

export async function fetchProjectRecommendations(forceRefresh = false): Promise<ProjectRecommendationResult[]> {
  const { data } = await api.get<ProjectRecommendationResult[]>(
    `/student/project-recommendations${forceRefresh ? "?refresh=true" : ""}`
  );
  return data;
}

export interface TargetRoleMatch {
  roleName: string;
  matchPercentage: number;
  isTarget: boolean;
}

export interface SkillGap {
  skillName: string;
  status: "Missing" | "Weak" | "Strong";
  importance: "High" | "Medium" | "Low";
}

export interface LearningPriority {
  technology: string;
  priority: "High" | "Medium" | "Low";
  timeframe: string;
  reason: string;
}

export interface GapAnalysisResult {
  targetRoles: TargetRoleMatch[];
  skillGaps: SkillGap[];
  missingTechnologies: string[];
  learningPriorities: LearningPriority[];
  careerRecommendations: string[];
  lastUpdated: string;
}

export async function fetchGapAnalysis(forceRefresh = false, targetRole?: string): Promise<GapAnalysisResult> {
  const params = new URLSearchParams();
  if (forceRefresh) params.append("refresh", "true");
  if (targetRole) params.append("targetRole", targetRole);
  const queryString = params.toString() ? `?${params.toString()}` : "";

  const { data } = await api.get<GapAnalysisResult>(`/student/gap-analysis${queryString}`);
  return data;
}