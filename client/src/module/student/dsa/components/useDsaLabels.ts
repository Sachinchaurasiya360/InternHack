import { useCallback, useMemo } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "@/components/ui/toast";
import api from "../../../../lib/axios";
import { queryKeys } from "../../../../lib/query-keys";
import type {
  DsaMyLabelsResponse,
  DsaLabelMutationResponse,
} from "../../../../lib/types";

/**
 * Centralizes the DSA custom-label data layer:
 *  - one cached query for the student's full label set (problemId → labels),
 *  - optimistic add/remove mutations that patch that cache instantly,
 *  - small helpers the UI uses to read labels for a single problem.
 *
 * Both DsaBookmarksPage and DsaTopicDetailPage consume this so the label state
 * stays consistent across the app regardless of which page mutates it.
 */
export function useDsaLabels(enabled = true) {
  const queryClient = useQueryClient();
  const key = queryKeys.dsa.labels();

  const { data, isLoading } = useQuery({
    queryKey: key,
    queryFn: () =>
      api.get<DsaMyLabelsResponse>("/dsa/labels").then((r) => r.data),
    enabled,
    staleTime: 5 * 60 * 1000,
  });

  const byProblem = useMemo(() => data?.byProblem ?? {}, [data]);
  const allLabels = useMemo(() => data?.allLabels ?? [], [data]);

  const patchCache = useCallback(
    (problemId: number, labels: string[]) => {
      queryClient.setQueryData<DsaMyLabelsResponse>(key, (prev) => {
        const nextByProblem: Record<number, string[]> = {
          ...(prev?.byProblem ?? {}),
        };
        if (labels.length > 0) nextByProblem[problemId] = labels;
        else delete nextByProblem[problemId];

        const distinct = new Set<string>();
        for (const list of Object.values(nextByProblem)) {
          for (const l of list) distinct.add(l);
        }
        return {
          byProblem: nextByProblem,
          allLabels: Array.from(distinct).sort(),
        };
      });
    },
    [queryClient, key],
  );

  // Snapshot the labels cache, then optimistically apply a transform to a single
  // problem's label set derived from the live snapshot (not stale render state).
  // The returned context lets onError roll back to the snapshot.
  const optimisticPatch = useCallback(
    async (
      problemId: number,
      transform: (current: string[]) => string[],
    ) => {
      await queryClient.cancelQueries({ queryKey: key });
      const prev = queryClient.getQueryData<DsaMyLabelsResponse>(key);
      const current = prev?.byProblem?.[problemId] ?? [];
      patchCache(problemId, transform(current));
      return { prev };
    },
    [queryClient, key, patchCache],
  );

  const rollback = useCallback(
    (context: { prev: DsaMyLabelsResponse | undefined } | undefined) => {
      if (context?.prev) queryClient.setQueryData(key, context.prev);
    },
    [queryClient, key],
  );

  const addMutation = useMutation({
    mutationFn: ({ problemId, label }: { problemId: number; label: string }) =>
      api
        .post<DsaLabelMutationResponse>(`/dsa/problems/${problemId}/labels`, {
          label,
        })
        .then((r) => r.data),
    // Instant UI: append the label to the cache before the request resolves.
    onMutate: ({ problemId, label }) =>
      optimisticPatch(problemId, (current) =>
        current.includes(label) ? current : [...current, label],
      ),
    // Reconcile with the server's authoritative label set (handles normalization).
    onSuccess: (res) => patchCache(res.problemId, res.labels),
    onError: (err: unknown, _vars, context) => {
      rollback(context);
      const msg =
        err instanceof AxiosError
          ? (err.response?.data as { message?: string } | undefined)?.message
          : undefined;
      toast.error(msg ?? "Failed to add label");
    },
  });

  const removeMutation = useMutation({
    mutationFn: ({ problemId, label }: { problemId: number; label: string }) =>
      api
        .delete<DsaLabelMutationResponse>(`/dsa/problems/${problemId}/labels`, {
          data: { label },
        })
        .then((r) => r.data),
    // Instant UI: drop the label from the cache before the request resolves.
    onMutate: ({ problemId, label }) =>
      optimisticPatch(problemId, (current) =>
        current.filter((l) => l !== label),
      ),
    onSuccess: (res) => patchCache(res.problemId, res.labels),
    onError: (_err, _vars, context) => {
      rollback(context);
      toast.error("Failed to remove label");
    },
  });

  const getLabels = useCallback(
    (problemId: number): string[] => byProblem[problemId] ?? [],
    [byProblem],
  );

  return {
    isLoading,
    byProblem,
    allLabels,
    getLabels,
    addLabel: (problemId: number, label: string) =>
      addMutation.mutate({ problemId, label }),
    removeLabel: (problemId: number, label: string) =>
      removeMutation.mutate({ problemId, label }),
    isMutating: addMutation.isPending || removeMutation.isPending,
  };
}
