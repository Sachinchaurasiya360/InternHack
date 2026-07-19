import type { ExtensionProfile, JobContext } from "./types";

const TOKEN_KEY = "internhack_extension_token";
const API_BASE_KEY = "internhack_api_base";
// Fallback when the extension has not yet learned the API base from a handoff.
const DEFAULT_API_BASE = "https://api.internhack.xyz/api";

async function getToken(): Promise<string | null> {
  const result = await chrome.storage.local.get(TOKEN_KEY);
  return typeof result[TOKEN_KEY] === "string" ? result[TOKEN_KEY] : null;
}

async function getApiBase(): Promise<string> {
  const result = await chrome.storage.local.get(API_BASE_KEY);
  const value = result[API_BASE_KEY];
  return typeof value === "string" && value ? value : DEFAULT_API_BASE;
}

// The web app hands off a session token (and the API base it is talking to) via
// the site bridge content script, so the extension authenticates automatically
// while the user is signed in to InternHack. No manual token entry.
export async function setSession(token: string, apiBase?: string) {
  const data: Record<string, string> = { [TOKEN_KEY]: token };
  if (apiBase) data[API_BASE_KEY] = apiBase;
  await chrome.storage.local.set(data);
}

export async function clearSession() {
  await chrome.storage.local.remove([TOKEN_KEY, API_BASE_KEY]);
}

async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  const [token, apiBase] = await Promise.all([getToken(), getApiBase()]);
  if (!token) {
    throw new Error("Not connected. Open InternHack while signed in to connect.");
  }
  const headers = new Headers(init.headers);
  headers.set("Content-Type", "application/json");
  headers.set("Authorization", `Bearer ${token}`);
  const res = await fetch(`${apiBase}${path}`, { ...init, headers });
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

