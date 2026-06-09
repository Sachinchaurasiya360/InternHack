import { useQuery } from "@tanstack/react-query";
import { Users, GitPullRequest, Bookmark } from "lucide-react";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { CommunityFeedResponse, CommunityFeedEventType } from "../../../lib/types";

const FEED_ICONS: Record<CommunityFeedEventType, typeof Users> = {
  repo_contribution: GitPullRequest,
  repo_bookmarked: Bookmark,
};

export function CommunityFeed() {
  const { data, isLoading } = useQuery<CommunityFeedResponse>({
    queryKey: ["opensource", "community-feed"],
    queryFn: () =>
      api.get("/opensource/community-feed", { params: { limit: 10 } }).then((r) => r.data),
    staleTime: 60_000,
    refetchInterval: 60_000,
  });

  const events = data?.events ?? [];

  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-3">
        <Users className="w-3.5 h-3.5 text-stone-400" />
        <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
          Community Contributions
        </span>
      </div>

      {isLoading ? (
        <div className="space-y-2.5">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-10 rounded-md bg-stone-100 dark:bg-stone-900 animate-pulse"
            />
          ))}
        </div>
      ) : events.length > 0 ? (
        <div className="space-y-1.5">
          {events.map((event, i) => {
            const Icon = FEED_ICONS[event.type];
            return (
              <div
                key={`${event.type}-${i}`}
                className="flex items-start gap-2.5 px-3 py-2 rounded-md bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10"
              >
                <Icon className="w-3.5 h-3.5 mt-0.5 text-stone-400 shrink-0" />
                <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                  {event.message}
                </p>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="rounded-md border border-dashed border-stone-200 dark:border-white/10 bg-white/60 dark:bg-stone-900/50 px-4 py-3">
          <p className="text-sm font-medium text-stone-700 dark:text-stone-200">
            No community activity yet.
          </p>
          <p className="mt-1 text-xs text-stone-500 dark:text-stone-400">
            Be the first to contribute to a repo!
          </p>
        </div>
      )}
    </div>
  );
}
