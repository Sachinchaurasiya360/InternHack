import type { ExtensionProfile, JobContext } from "./types";

const API_BASE = "http://localhost:3000/api";
const TOKEN_KEY = "internhack_extension_token";

async function getToken(): Promise<string | null> {
  const result = await chrome.storage.local.get(TOKEN_KEY);
  return typeof result[TOKEN_KEY] === "string" ? result[TOKEN_KEY] : null;
}

export async function setToken(token: string) {
  await chrome.storage.local.set({ [TOKEN_KEY]: token });
}

export async function clearToken() {
  await chrome.storage.local.remove(TOKEN_KEY);
}

async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  const token = await getToken();
  const headers = new Headers(init.headers);
  headers.set("Content-Type", "application/json");
  if (token) headers.set("Authorization", `Bearer ${token}`);
  const res = await fetch(`${API_BASE}${path}`, { ...init, headers });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.message || body.error || `Request failed: ${res.status}`);
  }
  return res.json() as Promise<T>;
}

export function getProfile() {
  return request<ExtensionProfile>("/extension/profile");
}

export function logEvent(input: Record<string, unknown>) {
  return request("/extension/autofill-event", {
    method: "POST",
    body: JSON.stringify(input),
  });
}

export function detectPage(input: Record<string, unknown>) {
  return request("/extension/detect", {
    method: "POST",
    body: JSON.stringify(input),
  });
}

export function trackApplication(context: JobContext, submitted: boolean) {
  return request("/extension/track-application", {
    method: "POST",
    body: JSON.stringify({
      company: context.company,
      role: context.role,
      location: context.location,
      jobUrl: context.jobUrl,
      applicationUrl: context.applicationUrl,
      jobDescription: context.jobDescription,
      status: submitted ? "APPLIED" : "SAVED",
      submitted,
      extensionMetadata: {
        host: context.host,
        siteType: context.siteType,
      },
    }),
  });
}

export function supportRequest(context: JobContext, message?: string) {
  return request("/extension/support-request", {
    method: "POST",
    body: JSON.stringify({
      host: context.host,
      url: context.applicationUrl,
      siteType: context.siteType,
      message,
      metadata: context,
    }),
  });
}

