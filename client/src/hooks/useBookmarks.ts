/**
 * useBookmarks — server-backed bookmark hook for OSS repos.
 *
 * On first mount (authenticated student only):
 *   1. Reads `oss_bookmarks` from localStorage (array of numeric repoIds).
 *   2. POSTs them to /api/opensource/bookmarks/migrate to persist server-side.
 *   3. Removes the localStorage key so migration never runs twice.
 *
 * After migration (or when no localStorage key exists):
 *   • `repoIds`      — current list of bookmarked repoIds from the server.
 *   • `toggleBookmark(repoId)` — optimistic add/remove with server sync.
 *   • `isBookmarked(repoId)`   — quick set-based lookup.
 */
import { useEffect, useCallback } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../lib/axios";
import { queryKeys } from "../lib/query-keys";
import { useAuthStore } from "../lib/auth.store";

const LOCAL_KEY = "oss_bookmarks";
const BASE = "/opensource/bookmarks";

// ─── API helpers ─────────────────────────────────────────────────

async function fetchBookmarks(): Promise<number[]> {
  const res = await api.get<{ repoIds: number[] }>(BASE);
  return res.data.repoIds;
}

async function postBookmark(repoId: number): Promise<void> {
  await api.post(BASE, { repoId });
}

async function deleteBookmark(repoId: number): Promise<void> {
  await api.delete(`${BASE}/${repoId}`);
}

async function migrateBookmarks(repoIds: number[]): Promise<number[]> {
  const res = await api.post<{ repoIds: number[] }>(`${BASE}/migrate`, { repoIds });
  return res.data.repoIds;
}

// ─── Hook ────────────────────────────────────────────────────────

export function useBookmarks() {
  const { isAuthenticated, user } = useAuthStore();
  const isStudent = isAuthenticated && user?.role === "STUDENT";
  const qc = useQueryClient();
  const queryKey = queryKeys.opensource.bookmarks();

  // ── Fetch bookmarks (only for authenticated students) ─────────
  const {
    data: repoIds = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey,
    queryFn: fetchBookmarks,
    enabled: isStudent,
    staleTime: 5 * 60 * 1000, // 5 min
  });

  // ── localStorage migration on mount ──────────────────────────
  useEffect(() => {
    if (!isStudent) return;

    const raw = localStorage.getItem(LOCAL_KEY);
    if (!raw) return;

    let legacyIds: number[] = [];
    try {
      const parsed = JSON.parse(raw) as unknown;
      if (Array.isArray(parsed)) {
        legacyIds = parsed.filter((v): v is number => typeof v === "number" && Number.isInteger(v) && v > 0);
      }
    } catch {
      /* malformed — just drop it */
    }

    if (legacyIds.length === 0) {
      localStorage.removeItem(LOCAL_KEY);
      return;
    }

    migrateBookmarks(legacyIds)
      .then((serverIds) => {
        localStorage.removeItem(LOCAL_KEY);
        qc.setQueryData<number[]>(queryKey, serverIds);
      })
      .catch(() => {
        /* migration failure is non-fatal — keep localStorage key for next attempt */
      });
    // Only run once per mount; isStudent is stable after initial auth resolve.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isStudent]);

  // ── Add mutation ──────────────────────────────────────────────
  const addMutation = useMutation({
    mutationFn: postBookmark,
    onMutate: async (repoId: number) => {
      await qc.cancelQueries({ queryKey });
      const prev = qc.getQueryData<number[]>(queryKey) ?? [];
      if (!prev.includes(repoId)) {
        qc.setQueryData<number[]>(queryKey, [...prev, repoId]);
      }
      return { prev };
    },
    onError: (_err, _repoId, ctx) => {
      if (ctx?.prev !== undefined) qc.setQueryData<number[]>(queryKey, ctx.prev);
    },
    onSettled: () => qc.invalidateQueries({ queryKey }),
  });

  // ── Remove mutation ───────────────────────────────────────────
  const removeMutation = useMutation({
    mutationFn: deleteBookmark,
    onMutate: async (repoId: number) => {
      await qc.cancelQueries({ queryKey });
      const prev = qc.getQueryData<number[]>(queryKey) ?? [];
      qc.setQueryData<number[]>(queryKey, prev.filter((id) => id !== repoId));
      return { prev };
    },
    onError: (_err, _repoId, ctx) => {
      if (ctx?.prev !== undefined) qc.setQueryData<number[]>(queryKey, ctx.prev);
    },
    onSettled: () => qc.invalidateQueries({ queryKey }),
  });

  // ── Public API ────────────────────────────────────────────────
  const bookmarkSet = new Set(repoIds);

  const isBookmarked = useCallback(
    (repoId: number) => bookmarkSet.has(repoId),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [repoIds],
  );

  const toggleBookmark = useCallback(
    (repoId: number) => {
      if (!isStudent) return;
      if (bookmarkSet.has(repoId)) {
        removeMutation.mutate(repoId);
      } else {
        addMutation.mutate(repoId);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isStudent, repoIds],
  );

  return {
    repoIds,
    isLoading,
    isError,
    isBookmarked,
    toggleBookmark,
  };
}
