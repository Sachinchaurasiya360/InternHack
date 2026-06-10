import { Link } from "react-router";
import { Trophy, TrendingUp, ExternalLink, Crown } from "lucide-react";
import { useLeaderboard, useMyRank } from "../../../../lib/api/leaderboard.api";
import { formatScore, getRankBadge } from "../../../../lib/leaderboard.utils";

/**
 * Compact leaderboard widget for sidebar
 * Shows top 5 users and current user's rank
 */
export function LeaderboardWidget() {
  const { data: leaderboard, isLoading } = useLeaderboard({ view: "weekly", limit: 5 });
  const { data: myRank } = useMyRank();

  if (isLoading) {
    return (
      <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-yellow-500" />
            <h3 className="font-semibold text-sm text-gray-900 dark:text-white">
              Top Contributors
            </h3>
          </div>
          <TrendingUp className="w-4 h-4 text-green-500" />
        </div>
        <div className="space-y-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-12 bg-gray-100 dark:bg-gray-800 rounded animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-yellow-500" />
          <h3 className="font-semibold text-sm text-gray-900 dark:text-white">
            Weekly Top 5
          </h3>
        </div>
        <Link
          to="/student/opensource/leaderboard"
          className="text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
        >
          View All
          <ExternalLink className="w-3 h-3" />
        </Link>
      </div>

      {/* Top 5 List */}
      <div className="space-y-2 mb-4">
        {leaderboard?.entries.map((entry) => {
          const badge = getRankBadge(entry.rank);
          
          return (
            <div
              key={entry.userId}
              className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${
                entry.isCurrentUser
                  ? "bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800"
                  : "hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
            >
              {/* Rank */}
              <div className="w-6 text-center flex-shrink-0">
                {badge ? (
                  <span className="text-lg">{badge}</span>
                ) : (
                  <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">
                    #{entry.rank}
                  </span>
                )}
              </div>

              {/* Avatar */}
              <img
                src={entry.profilePic || "/default-avatar.png"}
                alt={entry.name}
                className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700 flex-shrink-0"
              />

              {/* Name & Score */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  {entry.name}
                  {entry.isCurrentUser && (
                    <span className="ml-1 text-xs text-blue-600 dark:text-blue-400">(You)</span>
                  )}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {formatScore(entry.score)} pts
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* My Rank Card (if not in top 5) */}
      {myRank && myRank.rank.weekly && myRank.rank.weekly > 5 && (
        <div className="pt-3 border-t border-gray-200 dark:border-gray-800">
          <Link
            to="/student/opensource/leaderboard"
            className="flex items-center gap-2 p-2 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-800 hover:shadow-md transition-all"
          >
            <div className="w-6 text-center flex-shrink-0">
              <Crown className="w-4 h-4 text-blue-600 dark:text-blue-400 mx-auto" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-600 dark:text-gray-400">Your Rank</p>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                #{myRank.rank.weekly} • {formatScore(myRank.scores.weekly)} pts
              </p>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400" />
          </Link>
        </div>
      )}
    </div>
  );
}
