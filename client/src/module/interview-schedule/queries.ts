import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { scheduleInterview, getInterviews, updateInterview, cancelInterview } from "./api";

export const interviewKeys = {
  all: ["interview-schedules"] as const,
  lists: () => [...interviewKeys.all, "list"] as const,
  list: (filters: string) => [...interviewKeys.lists(), { filters }] as const,
};

export const useInterviews = (params: {
  page?: number;
  limit?: number;
  status?: string;
  upcoming?: boolean;
}) => {
  return useQuery({
    queryKey: interviewKeys.list(JSON.stringify(params)),
    queryFn: () => getInterviews(params),
  });
};

export const useScheduleInterview = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: scheduleInterview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: interviewKeys.all });
    },
  });
};

export const useUpdateInterview = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: Parameters<typeof updateInterview>[1] }) =>
      updateInterview(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: interviewKeys.all });
    },
  });
};

export const useCancelInterview = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: cancelInterview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: interviewKeys.all });
    },
  });
};
