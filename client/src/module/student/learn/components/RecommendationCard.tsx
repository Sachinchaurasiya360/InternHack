import { Brain, Target, FileText, Map, BookOpen } from "lucide-react";
import { memo } from "react";

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
    color: "text-violet-500",
    bg: "bg-violet-50 dark:bg-violet-900/20",
  },
  aptitude: {
    label: "Aptitude",
    icon: Target,
    color: "text-amber-500",
    bg: "bg-amber-50 dark:bg-amber-900/20",
  },
  skill: {
    label: "Skill",
    icon: BookOpen,
    color: "text-rose-500",
    bg: "bg-rose-50 dark:bg-rose-900/20",
  },
  ats: {
    label: "Resume",
    icon: FileText,
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-900/20",
  },
  roadmap: {
    label: "Roadmap",
    icon: Map,
    color: "text-lime-500",
    bg: "bg-lime-50 dark:bg-lime-900/20",
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

  return (
    <div
      className={`flex items-start gap-3 p-4 rounded-md border border-stone-200 dark:border-white/10 ${config.bg}`}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className={`mt-0.5 shrink-0 ${config.color}`}>
        <Icon className="w-4 h-4" />
      </div>
      <div className="min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
            {config.label}
          </span>
          {area.score !== undefined && (
            <span className={`text-xs font-bold tabular-nums ${config.color}`}>
              {area.score}%
            </span>
          )}
        </div>
        <p className="mt-0.5 text-sm font-semibold text-stone-900 dark:text-stone-50 truncate">
          {area.topic}
        </p>
        <p className="mt-0.5 text-xs text-stone-500 leading-snug">
          {area.reason}
        </p>
      </div>
    </div>
  );
});
