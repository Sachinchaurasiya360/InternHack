import { Flame, CheckCircle2, Target } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import api from "../../../../lib/axios";
import { queryKeys } from "../../../../lib/query-keys";
import type { DsaStreak } from "../../../../lib/types";

function StreakCalendar({ activeDays }: { activeDays: string[] }) {
  const today = new Date();
  const dayStrings: string[] = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    dayStrings.push(d.toISOString().slice(0, 10));
  }

  const activeSet = new Set(activeDays);

  return (
    <div className="flex items-center gap-1">
      {dayStrings.map((dayStr) => {
        const isActive = activeSet.has(dayStr);
        const dayNum = new Date(dayStr + "T00:00:00Z").toLocaleDateString(
          "en",
          { weekday: "short" },
        );
        return (
          <div
            key={dayStr}
            className="flex flex-col items-center gap-0.5"
            title={`${dayNum} ${dayStr}${isActive ? " — solved" : ""}`}
          >
            <div
              className={`w-5 h-5 rounded-sm text-xs font-mono flex items-center justify-center ${
                isActive
                  ? "bg-orange-500 text-white"
                  : "bg-stone-100 dark:bg-stone-800 text-stone-300 dark:text-stone-600"
              }`}
            >
              {isActive ? <CheckCircle2 className="w-3 h-3" /> : null}
            </div>
            <span className="text-xs font-mono text-stone-400">
              {dayNum.charAt(0)}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export function DsaStreakWidget() {
  const { data: streak, isLoading } = useQuery<DsaStreak>({
    queryKey: queryKeys.dsa.streak(),
    queryFn: () => api.get("/dsa/streak").then((r) => r.data),
    staleTime: 60 * 1000,
  });

  if (isLoading || !streak) return null;

  const milestone =
    streak.currentStreak >= 100
      ? "100-day streak!"
      : streak.currentStreak >= 30
        ? "30-day streak!"
        : streak.currentStreak >= 7
          ? "7-day streak!"
          : null;

  return (
    <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-4">
      <div className="flex items-center justify-between gap-4 mb-3">
        <div className="flex items-center gap-2">
          <Flame
            className={`w-5 h-5 ${streak.currentStreak > 0 ? "text-orange-500" : "text-stone-300"}`}
          />
          <span className="text-lg font-bold tabular-nums text-stone-900 dark:text-white">
            {streak.currentStreak}
          </span>
          <span className="text-xs text-stone-500 dark:text-stone-400">
            day streak
          </span>
          {milestone && (
            <span className="text-xs font-mono text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 px-1.5 py-0.5 rounded-sm">
              {milestone}
            </span>
          )}
        </div>
        <div className="text-xs text-stone-500 dark:text-stone-400 font-mono">
          Best: {streak.longestStreak}d
        </div>
      </div>

      <StreakCalendar activeDays={streak.activeDays} />

      <div className="flex items-center gap-2 mt-3 text-xs text-stone-500 dark:text-stone-400">
        <Target className="w-3.5 h-3.5" />
        <span>
          {streak.solvedToday
            ? "Solved today"
            : "Solve a problem to start your streak"}
        </span>
      </div>
    </div>
  );
}
