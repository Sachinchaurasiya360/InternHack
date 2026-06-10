import { useCallback, useMemo } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../lib/query-keys";
import { useAuthStore } from "../../../lib/auth.store";
import type { NoteContentType, StudyNote } from "../../../lib/types";
import { deleteNote, fetchNotes, upsertNote } from "./notes-api";

/**
 * Aggregate notes query for the current student. `search` is forwarded to the
 * server for text filtering; when omitted the full list is cached under a
 * stable key so per-content widgets can read from it without extra requests.
 */
export function useNotes(search?: string) {
  const { isAuthenticated, user } = useAuthStore();
  const isStudent = isAuthenticated && user?.role === "STUDENT";
  const trimmed = search?.trim() || undefined;

  const query = useQuery({
    queryKey: queryKeys.notes.list(trimmed),
    queryFn: () => fetchNotes(trimmed),
    enabled: isStudent,
    staleTime: 60 * 1000,
  });

  return {
    notes: query.data ?? [],
    isLoading: query.isLoading,
    isError: query.isError,
    isStudent,
  };
}

/**
 * Per-content note hook used by the floating NotesWidget. Reads the single note
 * for (contentType, contentId) from the cached aggregate list and exposes
 * save/remove mutations that keep every notes query in sync.
 */
export function useContentNote(
  contentType: NoteContentType,
  contentId: string,
) {
  const queryClient = useQueryClient();
  const { isAuthenticated, user } = useAuthStore();
  const isStudent = isAuthenticated && user?.role === "STUDENT";

  const query = useQuery({
    queryKey: queryKeys.notes.list(),
    queryFn: () => fetchNotes(),
    enabled: isStudent,
    staleTime: 60 * 1000,
  });

  const note: StudyNote | null = useMemo(() => {
    return (
      query.data?.find(
        (n) => n.contentType === contentType && n.contentId === contentId,
      ) ?? null
    );
  }, [query.data, contentType, contentId]);

  const invalidate = useCallback(() => {
    queryClient.invalidateQueries({ queryKey: queryKeys.notes.all });
  }, [queryClient]);

  const saveMutation = useMutation({
    mutationFn: (text: string) =>
      upsertNote({ contentType, contentId, note: text }),
    onSuccess: invalidate,
  });

  const deleteMutation = useMutation({
    mutationFn: () => deleteNote({ contentType, contentId }),
    onSuccess: invalidate,
  });

  return {
    note,
    isStudent,
    isLoading: query.isLoading,
    save: saveMutation.mutateAsync,
    remove: deleteMutation.mutateAsync,
    isSaving: saveMutation.isPending,
    isDeleting: deleteMutation.isPending,
  };
}
