import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { QueryKey } from "@tanstack/react-query";
import api from "../lib/axios";
import { queryKeys } from "../lib/query-keys";
import toast from "../components/ui/toast";

interface UseSaveJobOptions {
  extraInvalidations?: QueryKey[];
  successToast?: string;
}

export function useSaveJob(opts?: UseSaveJobOptions) {
  const qc = useQueryClient();

  const { mutate: toggleSave, isPending } = useMutation({
    mutationFn: async ({ jobId, isSaved }: { jobId: number; isSaved: boolean }) => {
      if (isSaved) {
        await api.delete(`/student/jobs/${jobId}/save`);
      } else {
        await api.post(`/student/jobs/${jobId}/save`);
      }
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: queryKeys.savedJobs.all });
      opts?.extraInvalidations?.forEach((key) => {
        qc.invalidateQueries({ queryKey: key });
      });
      if (opts?.successToast) toast.success(opts.successToast);
    },
    onError: (error) => {
      toast.error(error instanceof Error ? error.message : "Failed to save job");
    },
  });

  return { toggleSave, isPending };
}
