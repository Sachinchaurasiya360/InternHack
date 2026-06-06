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
  lastUpdated: string;
  createdAt: string;
  updatedAt: string;
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

export interface GSoCStats {
  total: number;
  categories: { name: string; count: number }[];
  years: { year: number; count: number }[];
  technologies: { name: string; count: number }[];
  topics: { name: string; count: number }[];
}
