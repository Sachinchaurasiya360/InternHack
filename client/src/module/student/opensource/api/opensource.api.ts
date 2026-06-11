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