import { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  Shield,
  Eye,
  EyeOff,
  User,
  Users,
  Info,
  Save,
  RefreshCw,
  Trophy,
  Code2,
} from "lucide-react";
import { SEO } from "../../../components/SEO";
import { Button } from "../../../components/ui/button";
import {
  useMyRank,
  useUpdateLeaderboardPrivacy,
  useRefreshMyScore,
} from "../../../lib/api/leaderboard.api";
import { formatScore } from "../../../lib/leaderboard.utils";

export default function LeaderboardSettingsPage() {
  const { data: myRank, isLoading } = useMyRank();
  const updatePrivacy = useUpdateLeaderboardPrivacy();
  const refreshScore = useRefreshMyScore();

  const [isPublic, setIsPublic] = useState(true);
  const [showRealName, setShowRealName] = useState(true);
  const [hasChanges, setHasChanges] = useState(false);

  // Initialize state from data
  useEffect(() => {
    if (myRank?.privacy) {
      setIsPublic(myRank.privacy.isPublic);
      setShowRealName(myRank.privacy.showRealName);
    }
  }, [myRank]);

  // Track changes
  useEffect(() => {
    if (myRank?.privacy) {
      const changed =
        isPublic !== myRank.privacy.isPublic ||
        showRealName !== myRank.privacy.showRealName;
      setHasChanges(changed);
    }
  }, [isPublic, showRealName, myRank]);

  const handleSave = async () => {
    await updatePrivacy.mutateAsync({ isPublic, showRealName });
    setHasChanges(false);
  };

  const handleRefresh = async () => {
    await refreshScore.mutateAsync();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-4 border-lime-600 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-stone-600 dark:text-stone-400 text-sm">Loading settings...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="Leaderboard Settings"
        description="Manage your leaderboard privacy settings and visibility."
        noIndex
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
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all border bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-white/10 hover:border-lime-300 dark:hover:border-lime-700 no-underline"
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
                learning / open source / leaderboard / settings
              </span>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-lime-100 dark:bg-lime-900/20 rounded-lg">
                <Shield className="w-6 h-6 text-lime-600 dark:text-lime-400" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-50 mb-1">
                  Leaderboard Settings
                </h1>
                <p className="text-sm text-stone-600 dark:text-stone-400">
                  Control your visibility and privacy preferences
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="grid gap-6 max-w-4xl">
            {/* Current Stats */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-white/10 p-6"
            >
              <h2 className="text-base font-bold text-stone-900 dark:text-stone-50 mb-4">
                Your Current Stats
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-1">
                    Global Rank
                  </p>
                  <p className="text-2xl font-bold text-stone-900 dark:text-stone-50">
                    {myRank?.rank.global ? `#${myRank.rank.global}` : "—"}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-1">
                    Total Score
                  </p>
                  <p className="text-2xl font-bold text-stone-900 dark:text-stone-50">
                    {myRank?.scores.total ? formatScore(myRank.scores.total) : "—"}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-1">
                    Current Streak
                  </p>
                  <p className="text-2xl font-bold text-stone-900 dark:text-stone-50">
                    {myRank?.metrics.currentStreak ?? 0}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-1">
                    Contributions
                  </p>
                  <p className="text-2xl font-bold text-stone-900 dark:text-stone-50">
                    {(myRank?.metrics.guidesCompleted ?? 0) +
                      (myRank?.metrics.reposSuggestedApproved ?? 0)}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-stone-200 dark:border-white/10">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={handleRefresh}
                  disabled={refreshScore.isPending}
                  className="w-full sm:w-auto"
                >
                  {refreshScore.isPending ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      Refreshing...
                    </>
                  ) : (
                    <>
                      <RefreshCw className="w-4 h-4" />
                      Refresh Score
                    </>
                  )}
                </Button>
                {refreshScore.isSuccess && (
                  <p className="text-xs text-lime-600 dark:text-lime-400 mt-2">
                    ✓ Score refreshed successfully!
                  </p>
                )}
              </div>
            </motion.div>

            {/* Privacy Settings */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-white/10 p-6"
            >
              <h2 className="text-base font-bold text-stone-900 dark:text-stone-50 mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-lime-600 dark:text-lime-400" />
                Privacy Settings
              </h2>

              <div className="space-y-6">
                {/* Public Visibility */}
                <div>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        {isPublic ? (
                          <Eye className="w-4 h-4 text-lime-600" />
                        ) : (
                          <EyeOff className="w-4 h-4 text-stone-600" />
                        )}
                        <label className="font-semibold text-sm text-stone-900 dark:text-stone-50">
                          Public Visibility
                        </label>
                      </div>
                      <p className="text-xs text-stone-600 dark:text-stone-400">
                        Show your profile on public leaderboards. When disabled, you
                        won't appear on any leaderboard view.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsPublic(!isPublic)}
                      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 ml-4 ${
                        isPublic ? "bg-lime-600" : "bg-stone-200 dark:bg-stone-700"
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                          isPublic ? "translate-x-5" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>

                  {!isPublic && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-3 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg"
                    >
                      <div className="flex gap-2">
                        <Info className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                        <p className="text-xs text-amber-800 dark:text-amber-200">
                          You won't appear on any leaderboard, but you can still view
                          your own rank and scores.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Name Display */}
                <div>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        {showRealName ? (
                          <User className="w-4 h-4 text-lime-600" />
                        ) : (
                          <Users className="w-4 h-4 text-stone-600" />
                        )}
                        <label className="font-semibold text-sm text-stone-900 dark:text-stone-50">
                          Show Real Name
                        </label>
                      </div>
                      <p className="text-xs text-stone-600 dark:text-stone-400">
                        Display your real name on leaderboards. When disabled, you'll
                        appear as "User{myRank?.user.name ? myRank.user.name.slice(0, 3) : "XXX"}".
                      </p>
                    </div>
                    <button
                      onClick={() => setShowRealName(!showRealName)}
                      disabled={!isPublic}
                      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 ml-4 ${
                        showRealName && isPublic
                          ? "bg-lime-600"
                          : "bg-stone-200 dark:bg-stone-700"
                      } ${!isPublic ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                          showRealName ? "translate-x-5" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>

                  {!showRealName && isPublic && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-3 p-3 bg-lime-50 dark:bg-lime-900/20 border border-lime-200 dark:border-lime-800 rounded-lg"
                    >
                      <div className="flex gap-2">
                        <Info className="w-4 h-4 text-lime-600 dark:text-lime-400 shrink-0 mt-0.5" />
                        <p className="text-xs text-lime-800 dark:text-lime-200">
                          You'll be shown with a pseudonym, but your achievements and
                          scores will still be visible.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Save Button */}
              <div className="mt-6 pt-6 border-t border-stone-200 dark:border-white/10">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-stone-600 dark:text-stone-400">
                    {hasChanges
                      ? "You have unsaved changes"
                      : "All changes saved"}
                  </p>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={handleSave}
                    disabled={!hasChanges || updatePrivacy.isPending}
                  >
                    {updatePrivacy.isPending ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save className="w-4 h-4" />
                        Save Changes
                      </>
                    )}
                  </Button>
                </div>

                {updatePrivacy.isSuccess && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xs text-lime-600 dark:text-lime-400 mt-2 text-right"
                  >
                    ✓ Settings saved successfully!
                  </motion.p>
                )}

                {updatePrivacy.isError && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xs text-red-600 dark:text-red-400 mt-2 text-right"
                  >
                    ✗ Failed to save settings. Please try again.
                  </motion.p>
                )}
              </div>
            </motion.div>

            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-lime-50 dark:bg-lime-900/20 border border-lime-200 dark:border-lime-800 rounded-lg p-6"
            >
              <div className="flex gap-3">
                <Info className="w-5 h-5 text-lime-600 dark:text-lime-400 shrink-0 mt-0.5" />
                <div className="text-xs text-lime-900 dark:text-lime-100">
                  <p className="font-semibold mb-2">About Leaderboard Privacy</p>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>Your own rank and scores are always visible to you</li>
                    <li>Privacy settings take effect immediately</li>
                    <li>
                      You can change these settings at any time
                    </li>
                    <li>Your activity metrics are never shared publicly</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
