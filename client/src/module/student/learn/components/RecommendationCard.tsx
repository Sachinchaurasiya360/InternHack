import { Brain, Target, FileText, Map, BookOpen } from "lucide-react";
import { memo } from "react";
import { motion } from "framer-motion";

export interface WeakArea {
  type: "dsa" | "aptitude" | "skill" | "ats" | "roadmap";
  topic: string;
  topicSlug?: string;
  reason: string;
  score?: number;
}

const TYPE_CONFIG = {
  dsa: {
    label: "DSA",
    icon: Brain,
    color: "text-violet-600 dark:text-violet-400",
    scoreCls: "text-violet-600 dark:text-violet-400",
  },
  aptitude: {
    label: "Aptitude",
    icon: Target,
    color: "text-amber-600 dark:text-amber-400",
    scoreCls: "text-amber-600 dark:text-amber-400",
  },
  skill: {
    label: "Skill",
    icon: BookOpen,
    color: "text-rose-600 dark:text-rose-400",
    scoreCls: "text-rose-600 dark:text-rose-400",
  },
  ats: {
    label: "Resume",
    icon: FileText,
    color: "text-blue-600 dark:text-blue-400",
    scoreCls: "text-blue-600 dark:text-blue-400",
  },
  roadmap: {
    label: "Roadmap",
    icon: Map,
    color: "text-lime-600 dark:text-lime-400",
    scoreCls: "text-lime-600 dark:text-lime-400",
  },
};

interface Props {
  area: WeakArea;
  index: number;
}

export const RecommendationCard = memo(function RecommendationCard({
  area,
  index,
}: Props) {
  const config = TYPE_CONFIG[area.type];
  const Icon = config.icon;
  const delay = 0.05 + Math.min(index, 6) * 0.04;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
      className="flex items-start gap-3 p-4 rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900"
    >
      <div className="w-9 h-9 shrink-0 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center">
        <Icon className={`w-4 h-4 ${config.color}`} />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
            {config.label}
          </span>
          {area.score !== undefined && (
            <span
              className={`text-[10px] font-mono uppercase tracking-widest tabular-nums font-bold ${config.scoreCls}`}
            >
              {area.score}%
            </span>
          )}
        </div>
        <p className="mt-1 text-sm font-bold text-stone-900 dark:text-stone-50 truncate">
          {area.topic}
        </p>
        <p className="mt-0.5 text-xs text-stone-500 dark:text-stone-400 leading-snug">
          {area.reason}
        </p>
      </div>
    </motion.div>
  );
});
