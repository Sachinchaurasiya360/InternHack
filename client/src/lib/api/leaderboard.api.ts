import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../axios";
import { queryKeys } from "../query-keys";
import type {
  LeaderboardQueryParams,
  LeaderboardResponse,
  LeaderboardStatsResponse,
  MyRankResponse,
  LeaderboardPrivacyUpdate,
  LeaderboardPrivacyResponse,
  LeaderboardRefreshResponse,
} from "../types/opensource.types";

// ─── API Functions ─────────────────────────────────────────────

/**
 * Fetch leaderboard entries with filters and pagination
 */
export async function fetchLeaderboard(
  params: LeaderboardQueryParams = {},
): Promise<LeaderboardResponse> {
  const { data } = await api.get<LeaderboardResponse>("/opensource/leaderboard", { params });
  return data;
}

/**
 * Fetch global leaderboard statistics
 */
export async function fetchLeaderboardStats(): Promise<LeaderboardStatsResponse> {
  const { data } = await api.get<LeaderboardStatsResponse>("/opensource/leaderboard/stats");
  return data;
}

/**
 * Fetch current user's rank across all views
 */
export async function fetchMyRank(): Promise<MyRankResponse> {
  const { data } = await api.get<MyRankResponse>("/opensource/leaderboard/my-rank");
  return data;
}

/**
 * Update privacy settings for current user
 */
export async function updateLeaderboardPrivacy(
  privacy: LeaderboardPrivacyUpdate,
): Promise<LeaderboardPrivacyResponse> {
  const { data } = await api.patch<LeaderboardPrivacyResponse>("/opensource/leaderboard/privacy", privacy);
  return data;
}

/**
 * Manually refresh current user's score
 */
export async function refreshMyScore(): Promise<LeaderboardRefreshResponse> {
  const { data } = await api.post<LeaderboardRefreshResponse>("/opensource/leaderboard/refresh");
  return data;
}

// ─── React Query Hooks ─────────────────────────────────────────

/**
 * Hook to fetch leaderboard with filters
 * @example
 * const { data, isLoading } = useLeaderboard({ view: "weekly", limit: 50 });
 */
export function useLeaderboard(params: LeaderboardQueryParams = {}) {
  return useQuery({
    queryKey: queryKeys.opensource.leaderboard(params as Record<string, string | number>),
    queryFn: () => fetchLeaderboard(params),
    staleTime: 5 * 60 * 1000, // 5 minutes - leaderboard doesn't change frequently
  });
}

/**
 * Hook to fetch global leaderboard statistics
 * @example
 * const { data } = useLeaderboardStats();
 */
export function useLeaderboardStats() {
  return useQuery({
    queryKey: queryKeys.opensource.leaderboardStats(),
    queryFn: fetchLeaderboardStats,
    staleTime: 10 * 60 * 1000, // 10 minutes - stats change even less frequently
  });
}

/**
 * Hook to fetch current user's rank card
 * @example
 * const { data, isLoading } = useMyRank();
 */
export function useMyRank() {
  return useQuery({
    queryKey: queryKeys.opensource.myRank(),
    queryFn: fetchMyRank,
    staleTime: 2 * 60 * 1000, // 2 minutes - user's own rank can be refreshed more often
  });
}

/**
 * Mutation hook to update privacy settings
 * @example
 * const mutation = useUpdateLeaderboardPrivacy();
 * mutation.mutate({ isPublic: false });
 */
export function useUpdateLeaderboardPrivacy() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateLeaderboardPrivacy,
    onSuccess: () => {
      // Invalidate my rank to show updated privacy settings
      queryClient.invalidateQueries({ queryKey: queryKeys.opensource.myRank() });
    },
  });
}

/**
 * Mutation hook to manually refresh score
 * @example
 * const mutation = useRefreshMyScore();
 * mutation.mutate();
 */
export function useRefreshMyScore() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: refreshMyScore,
    onSuccess: () => {
      // Invalidate my rank and leaderboard to show updated scores
      queryClient.invalidateQueries({ queryKey: queryKeys.opensource.myRank() });
      queryClient.invalidateQueries({ queryKey: ["opensource", "leaderboard"] });
    },
  });
}

// ─── Utility Hooks ─────────────────────────────────────────────

/**
 * Hook to prefetch leaderboard data
 * Useful for preloading data on hover or navigation
 * @example
 * const prefetchLeaderboard = usePrefetchLeaderboard();
 * prefetchLeaderboard({ view: "weekly" });
 */
export function usePrefetchLeaderboard() {
  const queryClient = useQueryClient();

  return (params: LeaderboardQueryParams = {}) => {
    queryClient.prefetchQuery({
      queryKey: queryKeys.opensource.leaderboard(params as Record<string, string | number>),
      queryFn: () => fetchLeaderboard(params),
      staleTime: 5 * 60 * 1000,
    });
  };
}

/**
 * Hook to check if current user is in top N
 * @example
 * const { isInTopTen, rank } = useIsInTopN(10);
 */
export function useIsInTopN(n: number = 10) {
  const { data: myRank } = useMyRank();

  const globalRank = myRank?.rank.global;
  const isInTopN = globalRank !== undefined && globalRank !== null && globalRank <= n;

  return {
    isInTopN,
    rank: globalRank,
    isLoading: !myRank,
  };
}
