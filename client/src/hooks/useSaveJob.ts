import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../lib/axios";
import { queryKeys } from "../lib/query-keys";

/**
 * useSaveJob — eliminates the repeated save/unsave mutation pattern that was
 * duplicated across JobBrowsePage, JobDetailPage, and SavedJobsPage.
 *
 * Usage:
 *   const { save, unsave, toggle } = useSaveJob(jobId);
 *
 *   // Save a job
 *   save.mutate();
 *
 *   // Unsave a job
 *   unsave.mutate();
 *
 *   // Toggle based on current saved state
 *   toggle(isSaved);
 *
 * Both mutations invalidate queryKeys.savedJobs.all on success, keeping
 * the saved-jobs list and per-job check queries in sync automatically.
 */
export function useSaveJob(jobId: number | string) {
  const queryClient = useQueryClient();

  const invalidate = () =>
    queryClient.invalidateQueries({ queryKey: queryKeys.savedJobs.all });

  const save = useMutation({
    mutationFn: () => api.post(`/student/jobs/${jobId}/save`),
    onSuccess: invalidate,
  });

  const unsave = useMutation({
    mutationFn: () => api.delete(`/student/jobs/${jobId}/save`),
    onSuccess: invalidate,
  });

  /** Convenience: toggles based on current saved state. */
  const toggle = (currentlySaved: boolean) => {
    if (currentlySaved) {
      unsave.mutate();
    } else {
      save.mutate();
    }
  };

  return { save, unsave, toggle };
}
