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

export async function fetchGuideProgress(guideSlug: string): Promise<string[]> {
  const { data } = await api.get<{ completedStepIds: string[] }>(`/opensource/guide-progress/${guideSlug}`);
  return data.completedStepIds || [];
}

export async function patchGuideProgress(guideSlug: string, completedStepIds: string[]): Promise<string[]> {
  const { data } = await api.patch<{ completedStepIds: string[] }>(`/opensource/guide-progress/${guideSlug}`, { completedStepIds });
  return data.completedStepIds || [];
}

export interface Certificate {
  token: string;
  studentName: string;
  guideName: string;
  issuedAt: string;
}

export async function issueCertificate(guideName: string): Promise<Certificate> {
  const { data } = await api.post<{ certificate: Certificate }>("/opensource/certificate/issue", { guideName });
  return data.certificate;
}

export async function fetchCertificate(token: string): Promise<Certificate> {
  const { data } = await api.get<{ certificate: Certificate }>(`/opensource/certificate/${token}`);
  return data.certificate;
}

// ── GSoC Proposal AI Review ───────────────────────────────────────────────────

export interface ScoreDimension {
  score: number;
  label: string;
}

export interface ReviewSuggestion {
  category: "Timeline Clarity" | "Deliverables" | "About Me" | "Organization Alignment" | "Structure & Length";
  critique: string;
  fix: string;
}

export interface GsocReviewResult {
  scores: {
    timelineClarity: ScoreDimension;
    deliverables: ScoreDimension;
    aboutMe: ScoreDimension;
    orgAlignment: ScoreDimension;
    structureLength: ScoreDimension;
  };
  overallScore: number;
  suggestions: ReviewSuggestion[];
  benchmark: {
    status: string;
    winningTemplate: string;
  };
  fallbackUsed: boolean;
}

export interface GsocReviewUsage {
  used: number;
  limit: number;
  tier: string;
}

export interface GsocReviewResponse {
  review: GsocReviewResult;
  usage?: GsocReviewUsage;
}

export async function reviewGSoCProposal(body: {
  draft: string;
  targetOrg?: string;
  targetStack?: string;
}): Promise<GsocReviewResponse> {
  const { data } = await api.post<GsocReviewResponse>("/gsoc/proposal-review", body);
  return data;
}