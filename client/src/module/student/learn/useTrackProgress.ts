import { useQuery } from "@tanstack/react-query";
import api from "../../../lib/axios";

export interface TrackProgress {
  completed: number;
  total: number;
  label: string;
}

export function useTrackProgress() {
  const dsa = useQuery({
    queryKey: ["dsa-progress-summary"],
    queryFn: () => api.get("/dsa/my-progress").then((r) => r.data),
    staleTime: 60_000,
    retry: false,
  });

  const aptitude = useQuery({
    queryKey: ["aptitude-progress-summary"],
    queryFn: () => api.get("/aptitude/progress").then((r) => r.data),
    staleTime: 60_000,
    retry: false,
  });

  const interview = useQuery({
    queryKey: ["interview-progress-summary"],
    queryFn: () => api.get("/learn/interview/progress").then((r) => r.data),
    staleTime: 60_000,
    retry: false,
  });

  const roadmaps = useQuery({
    queryKey: ["roadmap-enrollments-summary"],
    queryFn: () => api.get("/roadmaps/me/enrollments").then((r) => r.data),
    staleTime: 60_000,
    retry: false,
  });

  const sql = useQuery({
    queryKey: ["sql-progress-summary"],
    queryFn: () => api.get("/sql/progress").then((r) => r.data),
    staleTime: 60_000,
    retry: false,
  });

  const progressMap: Record<string, TrackProgress | null> = {
    interview: interview.data
      ? { completed: interview.data.completedIds?.length ?? 0, total: 300, label: "questions answered" }
      : null,
    "dsa-foundations": dsa.data
      ? { completed: dsa.data.totalSolved ?? 0, total: dsa.data.totalProblems ?? 2500, label: "problems solved" }
      : null,
    aptitude: aptitude.data
      ? { completed: aptitude.data.totalAnswered ?? 0, total: aptitude.data.totalQuestions ?? 500, label: "questions answered" }
      : null,
    sql: sql.data
      ? { completed: sql.data.length ?? 0, total: 188, label: "exercises done" }
      : null,
    roadmaps: roadmaps.data?.enrollments
      ? { completed: roadmaps.data.enrollments.length, total: 0, label: "roadmaps enrolled" }
      : null,
  };

  return { progressMap, isLoading: dsa.isLoading || aptitude.isLoading || interview.isLoading || roadmaps.isLoading };
}
