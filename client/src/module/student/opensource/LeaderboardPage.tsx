import { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  TrendingUp,
  Calendar,
  Building2,
  Code2,
  Medal,
  ChevronDown,
  Flame,
  Crown,
  Settings,
} from "lucide-react";
import { SEO } from "../../../components/SEO";
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
import { markLearningPathMilestone } from "./learning-paths.data";

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
      <div className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-white/10 p-6 animate-pulse">
        <div className="h-6 bg-stone-200 dark:bg-stone-800 rounded w-32 mb-4"></div>
        <div className="h-20 bg-stone-200 dark:bg-stone-800 rounded"></div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-stone-900 rounded-lg border border-lime-200 dark:border-lime-900/30 p-6 shadow-sm"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-bold text-stone-900 dark:text-stone-50 flex items-center gap-2">
          <Crown className="w-5 h-5 text-lime-600 dark:text-lime-400" />
          Your Rank
        </h3>
        <Link to="/student/opensource/leaderboard/settings">
          <Button variant="ghost" mode="icon">
            <Settings className="w-4 h-4" />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
        <div>
          <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-1">Global</p>
          <p className="text-2xl font-bold text-stone-900 dark:text-stone-50">
            {data.rank.global ? `#${data.rank.global}` : "—"}
          </p>
        </div>
        <div>
          <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-1">Weekly</p>
          <p className="text-2xl font-bold text-stone-900 dark:text-stone-50">
            {data.rank.weekly ? `#${data.rank.weekly}` : "—"}
          </p>
        </div>
        <div>
          <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-1">Monthly</p>
          <p className="text-2xl font-bold text-stone-900 dark:text-stone-50">
            {data.rank.monthly ? `#${data.rank.monthly}` : "—"}
          </p>
        </div>
        <div>
          <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-1">University</p>
          <p className="text-2xl font-bold text-stone-900 dark:text-stone-50">
            {data.rank.university ? `#${data.rank.university}` : "—"}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-stone-200 dark:border-white/10">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{getStreakEmoji(data.metrics.currentStreak)}</span>
          <div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">Current Streak</p>
            <p className="font-semibold text-stone-900 dark:text-stone-50">
              {formatStreak(data.metrics.currentStreak)}
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">Total Score</p>
          <p className="text-2xl font-bold text-lime-600 dark:text-lime-400">
            {formatScore(data.scores.total)}
          </p>
        </div>
      </div>

      <p className="mt-3 text-xs text-stone-600 dark:text-stone-400 text-center">
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
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.02 }}
      className={`rounded-lg border p-4 ${bgClass} ${
        entry.isCurrentUser ? "ring-2 ring-lime-500 shadow-lg" : ""
      }`}
    >
      <div className="flex items-center gap-4">
        {/* Rank */}
        <div className="shrink-0 w-12 text-center">
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
            className="w-12 h-12 rounded-full border-2 border-white dark:border-stone-800 shadow-sm shrink-0"
          />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-stone-900 dark:text-stone-50 truncate">
                {entry.name}
              </h3>
              {entry.isCurrentUser && (
                <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest bg-lime-500 text-white rounded-full shrink-0">
                  You
                </span>
              )}
            </div>
            {entry.college && (
              <p className="text-sm text-stone-600 dark:text-stone-400 truncate">
                {entry.college}
              </p>
            )}
          </div>
        </div>

        {/* Score */}
        <div className="text-right shrink-0">
          <p className="text-2xl font-bold text-stone-900 dark:text-stone-50">
            {formatScore(entry.score)}
          </p>
          <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">points</p>
        </div>
      </div>

      {/* Metrics */}
      <div className="mt-4 pt-4 border-t border-stone-200 dark:border-white/10 grid grid-cols-3 sm:grid-cols-5 gap-3 text-center">
        <div>
          <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">Guides</p>
          <p className="font-semibold text-stone-900 dark:text-stone-50">
            {entry.metrics.guidesCompleted}
          </p>
        </div>
        <div>
          <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">Repos</p>
          <p className="font-semibold text-stone-900 dark:text-stone-50">
            {entry.metrics.reposSuggestedApproved}
          </p>
        </div>
        <div>
          <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">PRs</p>
          <p className="font-semibold text-stone-900 dark:text-stone-50">
            {entry.metrics.githubPRsMerged}
          </p>
        </div>
        <div>
          <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">Streak</p>
          <p className="font-semibold text-stone-900 dark:text-stone-50 flex items-center justify-center gap-1">
            <Flame className="w-3 h-3 text-orange-500" />
            {entry.metrics.currentStreak}
          </p>
        </div>
        <div>
          <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">Badges</p>
          <p className="font-semibold text-stone-900 dark:text-stone-50">
            {entry.metrics.certificatesEarned}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Component ────────────────────────────────────────────

export default function LeaderboardPage() {
  const [view, setView] = useState<LeaderboardView>("global");
  const [selectedDomain, setSelectedDomain] = useState<RepoDomain | "">("");
  const [page, setPage] = useState(1);
  const limit = 50;

  useEffect(() => {
    markLearningPathMilestone("leaderboard");
  }, []);

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

      <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8">
          {/* Navigation Tabs */}
          <div className="mb-6 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <Link
              to="/student/opensource"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all border bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-white/10 hover:border-lime-300 dark:hover:border-lime-700 no-underline"
            >
              <Code2 className="w-4 h-4" />
              Discover Repos
            </Link>
            <Link
              to="/student/opensource/leaderboard"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all border bg-lime-600 text-white border-lime-600 shadow-sm no-underline"
            >
              <Trophy className="w-4 h-4" />
              Leaderboard
            </Link>
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-1 w-1 bg-lime-400"></div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                learning / open source / leaderboard
              </span>
            </div>
            <div className="flex items-start justify-between gap-4 flex-wrap mb-6">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-1.5 leading-tight">
                  Leaderboard
                </h1>
                <p className="text-sm text-stone-600 dark:text-stone-400">
                  Compete with peers and climb the ranks
                </p>
              </div>
              {stats && (
                <div className="flex items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                  <span>
                    <span className="text-stone-900 dark:text-stone-50">{stats.stats.totalParticipants.toLocaleString()}</span> contributors
                  </span>
                  <span className="h-1 w-1 bg-stone-300 dark:bg-stone-700" />
                  <span>
                    <span className="text-lime-600 dark:text-lime-400">{stats.stats.activeThisWeek.toLocaleString()}</span> active
                  </span>
                  <span className="h-1 w-1 bg-stone-300 dark:bg-stone-700" />
                  <span>
                    <span className="text-stone-900 dark:text-stone-50">{formatScore(stats.stats.topScore)}</span> top
                  </span>
                </div>
              )}
            </div>

            {/* My Rank Card */}
            <MyRankCard />
          </div>

          {/* View Tabs */}
          <div className="mb-6">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {VIEWS.map(({ value, icon: Icon, label }) => (
                <button
                  key={value}
                  onClick={() => handleViewChange(value)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all border ${
                    view === value
                      ? "bg-lime-600 text-white border-lime-600 shadow-sm"
                      : "bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-white/10 hover:border-lime-300 dark:hover:border-lime-700"
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
                  <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-2">
                    Select Domain
                  </label>
                  <div className="relative">
                    <select
                      value={selectedDomain}
                      onChange={(e) => handleDomainChange(e.target.value as RepoDomain)}
                      className="w-full sm:w-64 px-4 py-2.5 pr-10 rounded-lg border border-stone-300 dark:border-white/10 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 text-sm appearance-none focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                    >
                      <option value="">Select a domain...</option>
                      {domains.map((domain) => (
                        <option key={domain.value} value={domain.value}>
                          {domain.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400 pointer-events-none" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Description */}
            <p className="mt-3 text-xs text-stone-600 dark:text-stone-400">
              {getViewDescription(view, selectedDomain || undefined)}
            </p>
          </div>

          {/* Leaderboard Entries */}
          {isLoading ? (
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-32 bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-white/10 animate-pulse" />
              ))}
            </div>
          ) : error ? (
            <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-6 text-center">
              <p className="text-red-600 dark:text-red-400 text-sm">
                Failed to load leaderboard. Please try again.
              </p>
            </div>
          ) : view === "domain" && !selectedDomain ? (
            <div className="bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-lg p-8 text-center">
              <Code2 className="w-12 h-12 text-stone-400 mx-auto mb-4" />
              <p className="text-stone-600 dark:text-stone-400 text-sm">
                Select a domain to view the leaderboard
              </p>
            </div>
          ) : !data?.entries.length ? (
            <div className="bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-lg p-8 text-center">
              <Medal className="w-12 h-12 text-stone-400 mx-auto mb-4" />
              <p className="text-stone-600 dark:text-stone-400 text-sm">
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
                    size="sm"
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                  >
                    Previous
                  </Button>
                  <span className="px-4 py-2 text-xs text-stone-600 dark:text-stone-400 font-mono">
                    Page {page} of {data.pagination.totalPages}
                  </span>
                  <Button
                    variant="secondary"
                    size="sm"
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
