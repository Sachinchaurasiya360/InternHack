import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import toast from "../../../components/ui/toast";
import api from "../../../lib/axios";
import { useAuthStore } from "../../../lib/auth.store";
import type { InterviewProgress } from "./data/types";

const LEGACY_PROGRESS_KEY = "interview-progress";
const LEGACY_COMPLETED_KEY = "interview_completed";
const LEGACY_BOOKMARKS_KEY = "interview_bookmarks";
const LEGACY_LAST_VISITED_KEY = "interview_last_visited";
const MIGRATION_KEY = "interview_progress_migrated_v1";
const VISIT_DEBOUNCE_MS = 1200;

export interface InterviewServerProgress {
  completedIds: string[];
  bookmarkedIds: string[];
  lastVisitedId: string | null;
  lastVisitedAt: string | null;
}

function parseJson<T>(value: string | null, fallback: T): T {
  if (!value) return fallback;
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

function uniqueIds(ids: string[]) {
  return Array.from(new Set(ids.map((id) => id.trim()).filter(Boolean))).slice(0, 1000);
}

function readStringArray(key: string) {
  const value = parseJson<unknown>(localStorage.getItem(key), []);
  return Array.isArray(value) ? uniqueIds(value.filter((id): id is string => typeof id === "string")) : [];
}

function normalizeServerProgress(progress: Partial<InterviewServerProgress> | null): InterviewServerProgress {
  return {
    completedIds: Array.isArray(progress?.completedIds) ? uniqueIds(progress.completedIds) : [],
    bookmarkedIds: Array.isArray(progress?.bookmarkedIds) ? uniqueIds(progress.bookmarkedIds) : [],
    lastVisitedId: progress?.lastVisitedId || null,
    lastVisitedAt: progress?.lastVisitedAt || null,
  };
}

function readLegacyProgress(): InterviewServerProgress {
  const objectProgress = parseJson<unknown>(
    localStorage.getItem(LEGACY_PROGRESS_KEY),
    {},
  );
  const safeObjectProgress =
    objectProgress && typeof objectProgress === "object" && !Array.isArray(objectProgress)
      ? (objectProgress as Record<string, { completed?: unknown }>)
      : {};
  const objectCompleted = Object.entries(safeObjectProgress)
    .filter(([, value]) => value && typeof value === "object" && value.completed === true)
    .map(([id]) => id);

  const completedIds = uniqueIds([
    ...objectCompleted,
    ...readStringArray(LEGACY_COMPLETED_KEY),
  ]);
  const bookmarkedIds = readStringArray(LEGACY_BOOKMARKS_KEY);
  const lastVisitedId = localStorage.getItem(LEGACY_LAST_VISITED_KEY) || null;

  return {
    completedIds,
    bookmarkedIds,
    lastVisitedId,
    lastVisitedAt: null,
  };
}

function progressCacheKey(userId?: number) {
  return userId ? `${LEGACY_PROGRESS_KEY}:${userId}` : LEGACY_PROGRESS_KEY;
}

function readStoredProgress(userId?: number): InterviewServerProgress {
  if (!userId) return readLegacyProgress();

  const raw = parseJson<Partial<InterviewServerProgress> | null>(
    localStorage.getItem(progressCacheKey(userId)),
    null,
  );

  return normalizeServerProgress(raw);
}

function hasLegacyProgress(progress: InterviewServerProgress) {
  return progress.completedIds.length > 0 || progress.bookmarkedIds.length > 0 || !!progress.lastVisitedId;
}

function toProgressMap(progress: InterviewServerProgress): InterviewProgress {
  return progress.completedIds.reduce<InterviewProgress>((acc, id) => {
    acc[id] = { completed: true };
    return acc;
  }, {});
}

function mergeProgress(
  server: InterviewServerProgress,
  legacy: InterviewServerProgress,
): InterviewServerProgress {
  return {
    completedIds: uniqueIds([...server.completedIds, ...legacy.completedIds]),
    bookmarkedIds: uniqueIds([...server.bookmarkedIds, ...legacy.bookmarkedIds]),
    lastVisitedId: server.lastVisitedId ?? legacy.lastVisitedId,
    lastVisitedAt: server.lastVisitedAt,
  };
}

function writeStoredProgress(progress: InterviewServerProgress, userId?: number) {
  if (userId) {
    localStorage.setItem(progressCacheKey(userId), JSON.stringify(progress));
    return;
  }

  localStorage.setItem(LEGACY_PROGRESS_KEY, JSON.stringify(toProgressMap(progress)));
  localStorage.setItem(LEGACY_COMPLETED_KEY, JSON.stringify(progress.completedIds));
  localStorage.setItem(LEGACY_BOOKMARKS_KEY, JSON.stringify(progress.bookmarkedIds));
  if (progress.lastVisitedId) localStorage.setItem(LEGACY_LAST_VISITED_KEY, progress.lastVisitedId);
}

async function fetchServerProgress() {
  const { data } = await api.get<InterviewServerProgress>("/learn/interview/progress");
  return data;
}

export function useInterviewProgress() {
  const user = useAuthStore((s) => s.user);
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const userId = user?.id;
  const [progress, setProgress] = useState<InterviewServerProgress>(() => readStoredProgress(userId));
  const [isLoading, setIsLoading] = useState(isAuthenticated);
  const progressRef = useRef(progress);
  const visitTimerRef = useRef<number | null>(null);
  const lastVisitRef = useRef<string | null>(null);

  const migrationKey = userId ? `${MIGRATION_KEY}:${userId}` : MIGRATION_KEY;

  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  const hydrate = useCallback(async () => {
    if (!isAuthenticated) {
      const legacyProgress = readStoredProgress();
      progressRef.current = legacyProgress;
      setProgress(legacyProgress);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    try {
      const serverProgress = await fetchServerProgress();
      const legacyProgress = readLegacyProgress();
      const shouldMigrate = !localStorage.getItem(migrationKey) && hasLegacyProgress(legacyProgress);

      if (shouldMigrate) {
        const { data } = await api.post<InterviewServerProgress>(
          "/learn/interview/progress/bulk-migrate",
          {
            completedIds: legacyProgress.completedIds,
            bookmarkedIds: legacyProgress.bookmarkedIds,
            lastVisitedId: legacyProgress.lastVisitedId,
          },
        );
        const merged = mergeProgress(data, legacyProgress);
        progressRef.current = merged;
        setProgress(merged);
        writeStoredProgress(merged, userId);
      } else {
        progressRef.current = serverProgress;
        setProgress(serverProgress);
        writeStoredProgress(serverProgress, userId);
      }

      localStorage.setItem(migrationKey, "1");
    } catch {
      const cachedProgress = readStoredProgress(userId);
      progressRef.current = cachedProgress;
      setProgress(cachedProgress);
    } finally {
      setIsLoading(false);
    }
  }, [isAuthenticated, migrationKey, userId]);

  useEffect(() => {
    void hydrate();

    const onStorage = (event: StorageEvent) => {
      if (!isAuthenticated && (event.key === LEGACY_PROGRESS_KEY || event.key === null)) {
        setProgress(readLegacyProgress());
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [hydrate, isAuthenticated]);

  const progressMap = useMemo(() => toProgressMap(progress), [progress]);

  const updateProgress = useCallback(
    async (questionId: string, action: "complete" | "uncomplete" | "bookmark" | "unbookmark" | "visit") => {
      const progress = progressRef.current;
      const previous = progress;
      const next: InterviewServerProgress = {
        ...progress,
        completedIds:
          action === "complete"
            ? uniqueIds([...progress.completedIds, questionId])
            : action === "uncomplete"
              ? progress.completedIds.filter((id) => id !== questionId)
              : progress.completedIds,
        bookmarkedIds:
          action === "bookmark"
            ? uniqueIds([...progress.bookmarkedIds, questionId])
            : action === "unbookmark"
              ? progress.bookmarkedIds.filter((id) => id !== questionId)
              : progress.bookmarkedIds,
        lastVisitedId: action === "visit" ? questionId : progress.lastVisitedId,
        lastVisitedAt: action === "visit" ? new Date().toISOString() : progress.lastVisitedAt,
      };

      setProgress(next);
      progressRef.current = next;
      writeStoredProgress(next, userId);

      if (!isAuthenticated) return next;

      try {
        const { data } = await api.post<InterviewServerProgress>(
          `/learn/interview/progress/${encodeURIComponent(questionId)}`,
          { action },
        );
        progressRef.current = data;
        setProgress(data);
        writeStoredProgress(data, userId);
        return data;
      } catch (error) {
        progressRef.current = previous;
        setProgress(previous);
        writeStoredProgress(previous, userId);
        if (action !== "visit") toast.error("Could not save progress. Check your connection.");
        throw error;
      }
    },
    [isAuthenticated, userId],
  );

  const toggleComplete = useCallback(
    async (questionId: string) => {
      const isComplete = progressRef.current.completedIds.includes(questionId);
      const next = await updateProgress(questionId, isComplete ? "uncomplete" : "complete");
      return next.completedIds.includes(questionId);
    },
    [updateProgress],
  );

  const recordVisit = useCallback(
    (questionId: string) => {
      lastVisitRef.current = questionId;
      if (visitTimerRef.current) window.clearTimeout(visitTimerRef.current);
      visitTimerRef.current = window.setTimeout(() => {
        const id = lastVisitRef.current;
        lastVisitRef.current = null;
        if (id) void updateProgress(id, "visit").catch(() => {});
      }, VISIT_DEBOUNCE_MS);
    },
    [updateProgress],
  );

  useEffect(() => {
    return () => {
      if (visitTimerRef.current) window.clearTimeout(visitTimerRef.current);
      const id = lastVisitRef.current;
      if (!id) return;

      const nextProgress = {
        ...progressRef.current,
        lastVisitedId: id,
        lastVisitedAt: new Date().toISOString(),
      };
      writeStoredProgress(nextProgress, userId);

      if (isAuthenticated) {
        void api
          .post<InterviewServerProgress>(`/learn/interview/progress/${encodeURIComponent(id)}`, { action: "visit" })
          .then(({ data }) => writeStoredProgress(data, userId))
          .catch(() => {});
      }
    };
  }, [isAuthenticated, userId]);

  return {
    progress: progressMap,
    serverProgress: progress,
    isLoading,
    refreshProgress: hydrate,
    toggleComplete,
    recordVisit,
  };
}
