import { useState } from "react";
import { motion } from "framer-motion";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Settings, Bookmark } from "lucide-react";
import { useAuthStore } from "../../../lib/auth.store";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { JobFeedMatch, JobFeedStats, JobPreferences, Pagination } from "../../../lib/types";
import { JobFeedCard } from "./JobFeedCard";
import { JobPreferencesModal } from "./JobPreferencesModal";
import { PremiumUpgradeCTA } from "../../../components/PremiumUpgradeCTA";

export default function JobFeedPage() {
  const { user } = useAuthStore();
  const isPremium =
    (user?.subscriptionPlan === "MONTHLY" || user?.subscriptionPlan === "YEARLY") &&
    user?.subscriptionStatus === "ACTIVE";

  const qc = useQueryClient();
  const [page, setPage] = useState(1);
  const [prefOpen, setPrefOpen] = useState(false);

  const { data: feedData, isLoading } = useQuery({
    queryKey: queryKeys.jobFeed.feed(page),
    queryFn: async () => {
      const res = await api.get(`/job-feed?page=${page}&limit=12`);
      return res.data as { matches: JobFeedMatch[]; pagination: Pagination };
    },
    enabled: isPremium,
  });

  const { data: stats } = useQuery({
    queryKey: queryKeys.jobFeed.stats(),
    queryFn: async () => {
      const res = await api.get("/job-feed/stats");
      return res.data as JobFeedStats;
    },
  });

  const { data: preferences } = useQuery({
    queryKey: queryKeys.jobFeed.preferences(),
    queryFn: async () => {
      const res = await api.get("/job-feed/preferences");
      return res.data as JobPreferences | null;
    },
    enabled: isPremium,
  });

  const dismissMut = useMutation({
    mutationFn: (matchId: number) => api.post(`/job-feed/${matchId}/dismiss`),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["job-feed"] });
    },
  });

  const saveMut = useMutation({
    mutationFn: (matchId: number) => api.post(`/job-feed/${matchId}/save`),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["job-feed"] });
    },
  });

  if (!isPremium) {
    return <PremiumUpgradeCTA feature="Smart Job Feed" />;
  }

  const matches = feedData?.matches ?? [];
  const pagination = feedData?.pagination;

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-6 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-950 dark:text-white">Your Job Feed</h1>
            {stats && (
              <p className="text-sm text-gray-500 mt-1">
                {stats.total} matches &middot; {stats.unseen} new &middot; {stats.saved} saved
              </p>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPrefOpen(true)}
              className="p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
              title="Preferences"
            >
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Feed */}
      {isLoading ? (
        <div className="text-center py-16 text-gray-500">Loading your personalized feed...</div>
      ) : matches.length === 0 ? (
        <div className="text-center py-16">
          <Bookmark className="w-10 h-10 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">No matches yet</h3>
          <p className="text-sm text-gray-500 mb-6">Set your preferences to get personalized recommendations</p>
          <button
            onClick={() => setPrefOpen(true)}
            className="px-5 py-2.5 bg-gray-950 dark:bg-white text-white dark:text-gray-950 text-sm font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            Set Preferences
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {matches.map((match, i) => (
              <JobFeedCard
                key={match.matchId}
                match={match}
                index={i}
                onDismiss={(id) => dismissMut.mutate(id)}
                onSave={(id) => saveMut.mutate(id)}
              />
            ))}
          </div>

          {pagination && pagination.totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 mt-10">
              <button
                onClick={() => setPage(Math.max(1, page - 1))}
                disabled={page === 1}
                className="px-5 py-2.5 text-sm font-medium bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl disabled:opacity-30 hover:border-gray-300 dark:hover:border-gray-600 transition-colors dark:text-gray-300 shadow-sm"
              >
                Previous
              </button>
              <span className="text-sm text-gray-500">
                Page {page} of {pagination.totalPages}
              </span>
              <button
                onClick={() => setPage(Math.min(pagination.totalPages, page + 1))}
                disabled={page === pagination.totalPages}
                className="px-5 py-2.5 text-sm font-medium bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl disabled:opacity-30 hover:border-gray-300 dark:hover:border-gray-600 transition-colors dark:text-gray-300 shadow-sm"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}

      <JobPreferencesModal
        open={prefOpen}
        onClose={() => setPrefOpen(false)}
        current={preferences ?? null}
      />
    </div>
  );
}
