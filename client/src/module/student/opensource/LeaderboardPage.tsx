import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  TrendingUp,
  Calendar,
  Building2,
  Code2,
  Medal,
  Users,
  ChevronDown,
  Flame,
  ArrowLeft,
  Crown,
  Award,
  Sparkles,
} from "lucide-react";
import { SEO } from "../../../components/SEO";
import { LoadingScreen } from "../../../components/LoadingScreen";
import { Button } from "../../../components/ui/button";
import {
  useLeaderboard,
  useLeaderboardStats,
  useMyRank,
} from "../../../lib/api/leaderboard.api";
import {
  formatScore,
  getRankBadge,
  getViewDescription,
  getRankBgClass,
  getRankColorClass,
  formatStreak,
  getStreakEmoji,
  getAvailableDomains,
  getContributionLevel,
} from "../../../lib/leaderboard.utils";
import type {
  LeaderboardView,
  LeaderboardEntry,
  RepoDomain,
} from "../../../lib/types/opensource.types";

// ─── Constants ─────────────────────────────────────────────────

const VIEWS: { value: LeaderboardView; icon: React.ElementType; label: string }[] = [
  { value: "global", icon: Trophy, label: "All Time" },
  { value: "weekly", icon: TrendingUp, label: "This Week" },
  { value: "monthly", icon: Calendar, label: "This Month" },
  { value: "university", icon: Building2, label: "My University" },
  { value: "domain", icon: Code2, label: "By Domain" },
];

// ─── Components ────────────────────────────────────────────────

function MyRankCard() {
  const { data, isLoading } = useMyRank();

  if (isLoading) {
    return (
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-800 p-6 animate-pulse">
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-32 mb-4"></div>
        <div className="h-20 bg-gray-300 dark:bg-gray-700 rounded"></div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-800 p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <Crown className="w-5 h-5 text-blue-600" />
          Your Rank
        </h3>
        <Link to="/student/opensource/leaderboard/settings">
          <Button variant="ghost" mode="icon">
            <span className="text-xs">⚙️</span>
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
        <div>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Global</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {data.rank.global ? `#${data.rank.global}` : "—"}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Weekly</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {data.rank.weekly ? `#${data.rank.weekly}` : "—"}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Monthly</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {data.rank.monthly ? `#${data.rank.monthly}` : "—"}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">University</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {data.rank.university ? `#${data.rank.university}` : "—"}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-blue-200 dark:border-blue-800">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{getStreakEmoji(data.metrics.currentStreak)}</span>
          <div>
            <p className="text-xs text-gray-600 dark:text-gray-400">Current Streak</p>
            <p className="font-semibold text-gray-900 dark:text-white">
              {formatStreak(data.metrics.currentStreak)}
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-600 dark:text-gray-400">Total Score</p>
          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {formatScore(data.scores.total)}
          </p>
        </div>
      </div>

      <p className="mt-3 text-xs text-gray-600 dark:text-gray-400 text-center">
        {getContributionLevel(data.scores.total)}
      </p>
    </motion.div>
  );
}

function LeaderboardEntryCard({ entry, index }: { entry: LeaderboardEntry; index: number }) {
  const badge = getRankBadge(entry.rank);
  const bgClass = getRankBgClass(entry.rank);
  const rankColorClass = getRankColorClass(entry.rank);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03 }}
      className={`rounded-lg border p-4 ${bgClass} ${
        entry.isCurrentUser ? "ring-2 ring-blue-500 shadow-lg" : ""
      }`}
    >
      <div className="flex items-center gap-4">
        {/* Rank */}
        <div className="flex-shrink-0 w-12 text-center">
          {badge ? (
            <span className="text-3xl">{badge}</span>
          ) : (
            <span className={`text-2xl font-bold ${rankColorClass}`}>
              #{entry.rank}
            </span>
          )}
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <img
            src={entry.profilePic || "/default-avatar.png"}
            alt={entry.name}
            className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-800 shadow-sm flex-shrink-0"
          />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-gray-900 dark:text-white truncate">
                {entry.name}
              </h3>
              {entry.isCurrentUser && (
                <span className="px-2 py-0.5 text-xs font-medium bg-blue-500 text-white rounded-full flex-shrink-0">
                  You
                </span>
              )}
            </div>
            {entry.college && (
              <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                {entry.college}
              </p>
            )}
          </div>
        </div>

        {/* Score */}
        <div className="text-right flex-shrink-0">
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {formatScore(entry.score)}
          </p>
          <p className="text-xs text-gray-600 dark:text-gray-400">points</p>
        </div>
      </div>

      {/* Metrics */}
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 grid grid-cols-3 sm:grid-cols-5 gap-3 text-center">
        <div>
          <p className="text-xs text-gray-600 dark:text-gray-400">Guides</p>
          <p className="font-semibold text-gray-900 dark:text-white">
            {entry.metrics.guidesCompleted}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-600 dark:text-gray-400">Repos</p>
          <p className="font-semibold text-gray-900 dark:text-white">
            {entry.metrics.reposSuggestedApproved}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-600 dark:text-gray-400">PRs</p>
          <p className="font-semibold text-gray-900 dark:text-white">
            {entry.metrics.githubPRsMerged}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-600 dark:text-gray-400">Streak</p>
          <p className="font-semibold text-gray-900 dark:text-white flex items-center justify-center gap-1">
            <Flame className="w-3 h-3 text-orange-500" />
            {entry.metrics.currentStreak}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-600 dark:text-gray-400">Badges</p>
          <p className="font-semibold text-gray-900 dark:text-white">
            {entry.metrics.certificatesEarned}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Component ────────────────────────────────────────────

export function LeaderboardPage() {
  const [view, setView] = useState<LeaderboardView>("global");
  const [selectedDomain, setSelectedDomain] = useState<RepoDomain | "">("");
  const [page, setPage] = useState(1);
  const limit = 50;

  // Queries
  const { data: stats } = useLeaderboardStats();
  const { data, isLoading, error } = useLeaderboard({
    view,
    domain: view === "domain" && selectedDomain ? selectedDomain : undefined,
    limit,
    page,
  });

  // Handle view change
  const handleViewChange = (newView: LeaderboardView) => {
    setView(newView);
    setPage(1);
    if (newView !== "domain") {
      setSelectedDomain("");
    }
  };

  // Handle domain change
  const handleDomainChange = (domain: RepoDomain) => {
    setSelectedDomain(domain);
    setPage(1);
  };

  const domains = getAvailableDomains();

  return (
    <>
      <SEO
        title="Open Source Leaderboard"
        description="Compete with peers, track your progress, and climb the ranks in open source contributions."
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 py-12">
            <Link
              to="/student/opensource"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Open Source
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                <Trophy className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-2">Leaderboard</h1>
                <p className="text-white/80 text-lg">
                  Compete with peers and climb the ranks
                </p>
              </div>
            </div>

            {/* Stats Row */}
            {stats && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Users className="w-4 h-4" />
                    <p className="text-xs text-white/80">Total</p>
                  </div>
                  <p className="text-2xl font-bold">
                    {stats.stats.totalParticipants.toLocaleString()}
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Crown className="w-4 h-4" />
                    <p className="text-xs text-white/80">Top Score</p>
                  </div>
                  <p className="text-2xl font-bold">
                    {formatScore(stats.stats.topScore)}
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Award className="w-4 h-4" />
                    <p className="text-xs text-white/80">Average</p>
                  </div>
                  <p className="text-2xl font-bold">
                    {formatScore(stats.stats.averageScore)}
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-4 h-4" />
                    <p className="text-xs text-white/80">Active</p>
                  </div>
                  <p className="text-2xl font-bold">
                    {stats.stats.activeThisWeek.toLocaleString()}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-8">
          {/* My Rank Card */}
          <div className="mb-8">
            <MyRankCard />
          </div>

          {/* View Tabs */}
          <div className="mb-6">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {VIEWS.map(({ value, icon: Icon, label }) => (
                <button
                  key={value}
                  onClick={() => handleViewChange(value)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium whitespace-nowrap transition-all ${
                    view === value
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              ))}
            </div>

            {/* Domain Selector */}
            <AnimatePresence>
              {view === "domain" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4"
                >
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Select Domain
                  </label>
                  <div className="relative">
                    <select
                      value={selectedDomain}
                      onChange={(e) => handleDomainChange(e.target.value as RepoDomain)}
                      className="w-full sm:w-64 px-4 py-2.5 pr-10 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white appearance-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a domain...</option>
                      {domains.map((domain) => (
                        <option key={domain.value} value={domain.value}>
                          {domain.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Description */}
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              {getViewDescription(view, selectedDomain || undefined)}
            </p>
          </div>

          {/* Leaderboard Entries */}
          {isLoading ? (
            <LoadingScreen />
          ) : error ? (
            <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-6 text-center">
              <p className="text-red-600 dark:text-red-400">
                Failed to load leaderboard. Please try again.
              </p>
            </div>
          ) : view === "domain" && !selectedDomain ? (
            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-8 text-center">
              <Code2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400">
                Select a domain to view the leaderboard
              </p>
            </div>
          ) : !data?.entries.length ? (
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-8 text-center">
              <Medal className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400">
                No entries found for this view
              </p>
            </div>
          ) : (
            <>
              <div className="space-y-3">
                {data.entries.map((entry, index) => (
                  <LeaderboardEntryCard key={entry.userId} entry={entry} index={index} />
                ))}
              </div>

              {/* Pagination */}
              {data.pagination.totalPages > 1 && (
                <div className="mt-8 flex items-center justify-center gap-2">
                  <Button
                    variant="secondary"
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                  >
                    Previous
                  </Button>
                  <span className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400">
                    Page {page} of {data.pagination.totalPages}
                  </span>
                  <Button
                    variant="secondary"
                    onClick={() => setPage((p) => Math.min(data.pagination.totalPages, p + 1))}
                    disabled={page === data.pagination.totalPages}
                  >
                    Next
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
