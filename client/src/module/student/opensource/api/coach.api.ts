import api from "../../../../lib/axios";

export type CoachTrigger =
  | "FIRST_PR_COMPLETE"
  | "REPO_BOOKMARKED"
  | "GITHUB_CONNECTED"
  | "INACTIVITY"
  | "MANUAL";

export interface CoachSuggestPayload {
  trigger: CoachTrigger;
  context: {
    completedGuides?: string[];
    skills?: string[];
    bookmarkedRepos?: { name: string; language?: string; domain?: string }[];
    githubUsername?: string;
    lastActiveGuide?: string;
    daysSinceLastActivity?: number;
  };
}

export interface SavedAdvice {
  id: number;
  userId: number;
  trigger: string;
  title: string;
  content: string;
  createdAt: string;
}

export async function fetchCoachSuggestion(
  payload: CoachSuggestPayload,
): Promise<string> {
  const { data } = await api.post<{ advice: string }>(
    "/coach/suggest",
    payload,
  );
  return data.advice;
}

export async function saveCoachAdvice(body: {
  content: string;
  trigger: string;
  title?: string;
}): Promise<SavedAdvice> {
  const { data } = await api.post<SavedAdvice>("/coach/save", body);
  return data;
}

export async function fetchSavedAdvice(): Promise<SavedAdvice[]> {
  const { data } = await api.get<{ advice: SavedAdvice[] }>("/coach/saved");
  return data.advice;
}

export async function deleteCoachAdvice(id: number): Promise<void> {
  await api.delete(`/coach/saved/${id}`);
}
