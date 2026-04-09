import { motion } from "framer-motion";
import { Flame, Zap, Trophy } from "lucide-react";
import { useLearnStore, xpToNextLevel } from "../../lib/learn-gamification";

export function StreakWidget() {
  const xp = useLearnStore((s) => s.xp);
  const level = useLearnStore((s) => s.level);
  const streak = useLearnStore((s) => s.streakDays);
  const completed = useLearnStore((s) => Object.keys(s.lessonsCompleted).length);
  const { into, req, pct } = xpToNextLevel(xp, level);

  const cards = [
    {
      label: "Day Streak",
      value: streak,
      icon: Flame,
      color: "text-orange-500",
      chip: "bg-orange-50 dark:bg-orange-900/30",
      suffix: streak === 1 ? "day" : "days",
    },
    {
      label: "Total XP",
      value: xp,
      icon: Zap,
      color: "text-indigo-500",
      chip: "bg-indigo-50 dark:bg-indigo-900/30",
      suffix: "XP",
    },
    {
      label: "Lessons Done",
      value: completed,
      icon: Trophy,
      color: "text-emerald-500",
      chip: "bg-emerald-50 dark:bg-emerald-900/30",
      suffix: "",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
      {cards.map((c, i) => (
        <motion.div
          key={c.label}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08 }}
          className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-4"
        >
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl ${c.chip} flex items-center justify-center`}>
              <c.icon className={`w-5 h-5 ${c.color}`} />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">{c.label}</p>
              <p className="text-xl font-bold text-gray-950 dark:text-white tabular-nums">
                {c.value}
                <span className="text-xs font-medium text-gray-400 ml-1">{c.suffix}</span>
              </p>
            </div>
          </div>
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.24 }}
        className="sm:col-span-3 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 py-3"
      >
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-indigo-500 text-white text-[10px] font-bold flex items-center justify-center">
              {level}
            </span>
            <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Level {level}</span>
          </div>
          <span className="text-[11px] text-gray-500 tabular-nums">{into} / {req} XP</span>
        </div>
        <div className="h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-indigo-500"
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>
      </motion.div>
    </div>
  );
}
