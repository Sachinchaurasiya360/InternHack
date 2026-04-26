import api from "../../../lib/axios";
import type {
  FundingSignal,
  FundingSignalListResponse,
  FundingSignalSource,
} from "../../../lib/types";

export type SignalKind = "funding" | "hiring" | "all";

export interface SignalsQuery {
  page: number;
  limit: number;
  sort?: "recent" | "amount";
  search?: string;
  source?: string;
  kind?: SignalKind;
  hiringOnly?: boolean;
  status?: "ACTIVE" | "STALE" | "ARCHIVED" | "ALL";
}

export async function querySignals(q: SignalsQuery): Promise<FundingSignalListResponse> {
  const params: Record<string, string | number | boolean> = {
    page: q.page,
    limit: q.limit,
    sort: q.sort ?? "recent",
  };
  if (q.search) params["search"] = q.search;
  if (q.source) params["source"] = q.source;
  if (q.kind && q.kind !== "all") params["kind"] = q.kind;
  if (q.hiringOnly) params["hiringOnly"] = true;
  if (q.status) params["status"] = q.status;

  const { data } = await api.get<FundingSignalListResponse>("/signals", { params });
  return data;
}

export async function getSignalById(id: number): Promise<FundingSignal> {
  const { data } = await api.get<{ signal: FundingSignal }>(`/signals/${id}`);
  return data.signal;
}

export async function getSignalSources(): Promise<{ sources: FundingSignalSource[] }> {
  const { data } = await api.get<{ sources: FundingSignalSource[] }>("/signals/sources");
  return data;
}

// Admin-only ------------------------------------------------------------

export interface SignalCreatePayload {
  companyName: string;
  sourceUrl: string;
  companyWebsite?: string | null;
  logoUrl?: string | null;
  fundingRound?: string | null;
  fundingAmount?: string | null;
  amountUsd?: string | null;
  announcedAt?: string;
  hqLocation?: string | null;
  industry?: string | null;
  description?: string | null;
  investors?: string[];
  tags?: string[];
  careersUrl?: string | null;
  hiringSignal?: boolean;
}

export interface SignalUpdatePayload extends Partial<SignalCreatePayload> {
  status?: "ACTIVE" | "STALE" | "ARCHIVED";
}

export async function createSignal(payload: SignalCreatePayload): Promise<FundingSignal> {
  const { data } = await api.post<{ signal: FundingSignal }>("/signals", payload);
  return data.signal;
}

export async function updateSignal(
  id: number,
  payload: SignalUpdatePayload,
): Promise<FundingSignal> {
  const { data } = await api.patch<{ signal: FundingSignal }>(`/signals/${id}`, payload);
  return data.signal;
}

export async function deleteSignal(id: number): Promise<void> {
  await api.delete(`/signals/${id}`);
}

export async function triggerIngest(): Promise<{
  message: string;
  results: Array<{
    source: string;
    signalsFound: number;
    signalsCreated: number;
    signalsUpdated: number;
    error?: string;
    duration: number;
  }>;
}> {
  const { data } = await api.post("/signals/trigger");
  return data as never;
}

export async function cleanupNoise(): Promise<{ removed: number }> {
  const { data } = await api.post<{ removed: number }>("/signals/cleanup");
  return data;
}

export interface SignalLog {
  id: number;
  source: string;
  status: string;
  signalsFound: number;
  signalsCreated: number;
  signalsUpdated: number;
  error: string | null;
  duration: number;
  createdAt: string;
}

export async function getIngestLogs(): Promise<{ logs: SignalLog[] }> {
  const { data } = await api.get<{ logs: SignalLog[] }>("/signals/logs");
  return data;
}
