import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Trophy, Medal, TrendingUp, Lightbulb, Crown } from "lucide-react";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { DsaLeaderboardResponse } from "../../../lib/types";
import { SEO } from "../../../components/SEO";
import { LoadingScreen } from "../../../components/LoadingScreen";

const RANK_ICONS: Record<number, React.ReactNode> = {
  1: <Crown className="w-4 h-4 text-amber-500" />,
  2: <Medal className="w-4 h-4 text-stone-400" />,
  3: <Medal className="w-4 h-4 text-amber-700" />,
};

export default function DsaLeaderboardPage() {
  const { data, isLoading } = useQuery({
    queryKey: queryKeys.dsa.leaderboard(50),
    queryFn: () =>
      api.get<DsaLeaderboardResponse>("/dsa/leaderboard?limit=50").then((r) => r.data),
    staleTime: 5 * 60 * 1000,
  });

  const { data: aiTips, isLoading: tipsLoading } = useQuery({
    queryKey: queryKeys.dsa.leaderboardAiTips(),
    queryFn: () =>
      api.get<{ tips: string[] }>("/dsa/leaderboard/ai-tips").then((r) => r.data),
    staleTime: 10 * 60 * 1000,
  });

  const leaderboard = data?.leaderboard ?? [];
  const myRank = data?.myRank;

  return (
    <div className="bg-stone-50 dark:bg-stone-950 min-h-[calc(100vh-4rem)]">
      <SEO title="Leaderboard" noIndex />

      <div className="max-w-5xl mx-auto px-3 sm:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="h-1 w-1 bg-lime-400" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
              dsa / leaderboard
            </span>
          </div>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div className="min-w-0 flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-1.5">
                Top performers.
              </h1>
              <p className="text-sm text-stone-600 dark:text-stone-400 max-w-2xl">
                Students ranked by problems solved. Consistency beats intensity.
              </p>
            </div>
            {myRank !== null && (
              <div className="flex items-center gap-2 px-3 py-2 bg-lime-400/10 border border-lime-400/30 rounded-md">
                <TrendingUp className="w-4 h-4 text-lime-500" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-lime-600 dark:text-lime-400">
                  your rank: #{myRank}
                </span>
              </div>
            )}
          </div>
        </motion.div>

        {/* AI tips */}
        {aiTips?.tips && aiTips.tips.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="mb-8 p-4 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50 rounded-md"
          >
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="w-4 h-4 text-blue-500" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400">
                ai tips
              </span>
            </div>
            <ul className="space-y-1">
              {aiTips.tips.map((tip, i) => (
                <li key={i} className="text-sm text-stone-700 dark:text-stone-300 flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5">•</span>
                  {tip}
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Leaderboard table */}
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <div className="border border-stone-200 dark:border-white/10 rounded-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-stone-100 dark:bg-stone-900 text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                    <th className="text-left px-4 py-3 w-12">rank</th>
                    <th className="text-left px-4 py-3">student</th>
                    <th className="text-center px-3 py-3">solved</th>
                    <th className="text-center px-3 py-3 hidden sm:table-cell">easy</th>
                    <th className="text-center px-3 py-3 hidden sm:table-cell">medium</th>
                    <th className="text-center px-3 py-3 hidden sm:table-cell">hard</th>
                    <th className="text-center px-3 py-3 hidden md:table-cell">college</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 dark:divide-white/5">
                  {leaderboard.map((entry) => (
                    <tr
                      key={entry.userId}
                      className={`hover:bg-stone-100 dark:hover:bg-stone-900/50 transition-colors ${
                        entry.rank === myRank
                          ? "bg-lime-400/5 dark:bg-lime-400/5"
                          : ""
                      }`}
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1.5">
                          {RANK_ICONS[entry.rank] ?? (
                            <span className="text-[10px] font-mono text-stone-400 dark:text-stone-500 w-4 text-center">
                              {entry.rank}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2.5">
                          {entry.profilePic ? (
                            <img
                              src={entry.profilePic}
                              alt=""
                              className="w-7 h-7 rounded-full object-cover bg-stone-200 dark:bg-stone-800"
                            />
                          ) : (
                            <div className="w-7 h-7 rounded-full bg-stone-200 dark:bg-stone-800 flex items-center justify-center text-[10px] font-medium text-stone-500 dark:text-stone-400 uppercase">
                              {entry.name.charAt(0)}
                            </div>
                          )}
                          <span className="font-medium text-stone-900 dark:text-stone-50 truncate max-w-[160px] sm:max-w-[240px]">
                            {entry.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-3 py-3 text-center">
                        <span className="font-mono tabular-nums text-stone-900 dark:text-stone-50">
                          {entry.totalSolved}
                        </span>
                      </td>
                      <td className="px-3 py-3 text-center hidden sm:table-cell">
                        <span className="font-mono tabular-nums text-green-600 dark:text-green-400">
                          {entry.byDifficulty.easy}
                        </span>
                      </td>
                      <td className="px-3 py-3 text-center hidden sm:table-cell">
                        <span className="font-mono tabular-nums text-amber-600 dark:text-amber-400">
                          {entry.byDifficulty.medium}
                        </span>
                      </td>
                      <td className="px-3 py-3 text-center hidden sm:table-cell">
                        <span className="font-mono tabular-nums text-red-600 dark:text-red-400">
                          {entry.byDifficulty.hard}
                        </span>
                      </td>
                      <td className="px-3 py-3 text-center hidden md:table-cell">
                        <span className="text-stone-500 dark:text-stone-400 text-xs truncate max-w-[120px] block mx-auto">
                          {entry.college ?? "—"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {leaderboard.length === 0 && (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <Trophy className="w-10 h-10 text-stone-300 dark:text-stone-600 mb-3" />
                <p className="text-sm text-stone-500 dark:text-stone-400">
                  No leaderboard data yet. Start solving problems to compete!
                </p>
              </div>
            )}
          </div>
        )}

        {data && (
          <p className="mt-3 text-[10px] font-mono text-stone-400 dark:text-stone-500 text-center">
            {data.totalParticipants} student{data.totalParticipants !== 1 ? "s" : ""} participating
          </p>
        )}
      </div>
    </div>
  );
}
