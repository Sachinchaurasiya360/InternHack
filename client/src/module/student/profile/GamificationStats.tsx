import React from "react";
import { User } from "../../../lib/types";
import { Flame, Medal, Calendar } from "lucide-react";

interface Props {
  user: User;
}

export function GamificationStats({ user }: Props) {
  const currentStreak = user.currentStreak || 0;
  const longestStreak = user.longestStreak || 0;

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 mt-4 group">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
        <Flame className="w-5 h-5 text-orange-500 mr-2" />
        Learning Streaks
      </h3>
      <div className="flex gap-4 items-center justify-around">
        <div className="flex flex-col items-center">
          <div className="h-14 w-14 rounded-full bg-orange-100 dark:bg-orange-500/10 flex items-center justify-center mb-2 shadow-sm group-hover:scale-105 transition-transform">
            <Flame className="w-7 h-7 text-orange-500" />
          </div>
          <span className="text-2xl font-bold text-gray-900 dark:text-white">{currentStreak}</span>
          <span className="text-xs text-gray-500 dark:text-gray-400 capitalize">Current Streak</span>
        </div>
        <div className="h-10 w-px bg-gray-200 dark:bg-gray-800"></div>
        <div className="flex flex-col items-center">
          <div className="h-14 w-14 rounded-full bg-amber-100 dark:bg-amber-500/10 flex items-center justify-center mb-2 shadow-sm group-hover:scale-105 transition-transform">
            <Medal className="w-7 h-7 text-amber-500" />
          </div>
          <span className="text-2xl font-bold text-gray-900 dark:text-white">{longestStreak}</span>
          <span className="text-xs text-gray-500 dark:text-gray-400 capitalize">Best Streak</span>
        </div>
      </div>
    </div>
  );
}
