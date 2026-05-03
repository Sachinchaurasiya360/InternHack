import api from "../../../lib/axios";
import type {
  InterviewExperience,
  InterviewListResponse,
  InterviewCompanyListResponse,
  InterviewCompanySummary,
  InterviewTopQuestion,
  InterviewRound,
  InterviewPrepResource,
  InterviewOutcome,
  InterviewDifficulty,
} from "../../../lib/types";

export interface ListExperiencesQuery {
  page?: number;
  limit?: number;
  companyId?: number;
  companySlug?: string;
  role?: string;
  outcome?: InterviewOutcome;
  difficulty?: InterviewDifficulty;
  year?: number;
  status?: "PENDING" | "APPROVED" | "REJECTED" | "ALL";
  sort?: "recent" | "upvotes";
  search?: string;
}

export interface CreateExperiencePayload {
  companyId?: number;
  companyName?: string;
  role: string;
  experienceYears?: number;
  totalRounds: number;
  rounds: InterviewRound[];
  tips?: string;
  prepResources?: InterviewPrepResource[];
  isAnonymous: boolean;
}

export type UpdateExperiencePayload = Partial<CreateExperiencePayload> & {
  status?: "PENDING" | "APPROVED" | "REJECTED";
};

export async function listExperiences(
  q: ListExperiencesQuery = {},
): Promise<InterviewListResponse> {
  const params: Record<string, string | number> = {
    page: q.page ?? 1,
    limit: q.limit ?? 12,
    sort: q.sort ?? "recent",
    status: q.status ?? "APPROVED",
  };
  if (q.companyId) params["companyId"] = q.companyId;
  if (q.companySlug) params["companySlug"] = q.companySlug;
  if (q.role) params["role"] = q.role;
  if (q.outcome) params["outcome"] = q.outcome;
  if (q.difficulty) params["difficulty"] = q.difficulty;
  if (q.year) params["year"] = q.year;
  if (q.search) params["search"] = q.search;

  const { data } = await api.get<InterviewListResponse>("/interviews", { params });
  return data;
}

export async function getExperience(id: number): Promise<InterviewExperience> {
  const { data } = await api.get<{ experience: InterviewExperience }>(`/interviews/${String(id)}`);
  return data.experience;
}

export async function createExperience(
  payload: CreateExperiencePayload,
): Promise<InterviewExperience> {
  const { data } = await api.post<{ experience: InterviewExperience }>("/interviews", payload);
  return data.experience;
}

export async function updateExperience(
  id: number,
  payload: UpdateExperiencePayload,
): Promise<InterviewExperience> {
  const { data } = await api.patch<{ experience: InterviewExperience }>(
    `/interviews/${String(id)}`,
    payload,
  );
  return data.experience;
}

export async function deleteExperience(id: number): Promise<void> {
  await api.delete(`/interviews/${String(id)}`);
}

export async function toggleUpvote(id: number): Promise<{ upvoted: boolean }> {
  const { data } = await api.post<{ upvoted: boolean }>(`/interviews/${String(id)}/upvote`);
  return data;
}

export async function listInterviewCompanies(
  q: { page?: number; limit?: number; search?: string } = {},
): Promise<InterviewCompanyListResponse> {
  const params: Record<string, string | number> = {
    page: q.page ?? 1,
    limit: q.limit ?? 24,
  };
  if (q.search) params["search"] = q.search;
  const { data } = await api.get<InterviewCompanyListResponse>("/interviews/companies", {
    params,
  });
  return data;
}

export async function getCompanyInterviewSummary(
  slug: string,
): Promise<InterviewCompanySummary> {
  const { data } = await api.get<InterviewCompanySummary>(
    `/interviews/companies/${slug}/summary`,
  );
  return data;
}

export async function getCompanyTopQuestions(
  slug: string,
  limit = 20,
): Promise<{ questions: InterviewTopQuestion[] }> {
  const { data } = await api.get<{ questions: InterviewTopQuestion[] }>(
    `/interviews/companies/${slug}/top-questions`,
    { params: { limit } },
  );
  return data;
}
