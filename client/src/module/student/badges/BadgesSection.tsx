import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Award } from "lucide-react";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { StudentBadge } from "../../../lib/types";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4 },
  }),
};

const categoryColors: Record<string, string> = {
  CAREER: "bg-indigo-500",
  QUIZ: "bg-amber-500",
  SKILL: "bg-emerald-500",
  CONTRIBUTION: "bg-purple-500",
  MILESTONE: "bg-rose-500",
};

const categoryLabels: Record<string, string> = {
  CAREER: "Career",
  QUIZ: "Quiz",
  SKILL: "Skill",
  CONTRIBUTION: "Contribution",
  MILESTONE: "Milestone",
};

interface BadgesSectionProps {
  studentId?: number;
  showTitle?: boolean;
}

export function BadgesSection({ studentId, showTitle = true }: BadgesSectionProps) {
  const { data, isLoading } = useQuery({
    queryKey: studentId
      ? queryKeys.badges.student(studentId)
      : queryKeys.badges.my(),
    queryFn: async () => {
      const url = studentId ? `/badges/student/${studentId}` : "/badges/my";
      const res = await api.get(url);
      return res.data as { badges: StudentBadge[] };
    },
  });

  const badges = data?.badges ?? [];

  if (isLoading) {
    return (
      <div>
        {showTitle && (
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-indigo-500" />
            Badges
          </h2>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-32 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  if (badges.length === 0) {
    return (
      <div>
        {showTitle && (
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-indigo-500" />
            Badges
          </h2>
        )}
        <div className="text-center py-12 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800">
          <Award className="w-10 h-10 mx-auto text-gray-300 dark:text-gray-600 mb-3" />
          <p className="text-gray-500 text-sm">No badges earned yet</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {showTitle && (
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <Award className="w-5 h-5 text-indigo-500" />
          Badges
          <span className="text-sm font-normal text-gray-400 ml-1">({badges.length})</span>
        </h2>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {badges.map((sb, i) => (
          <motion.div
            key={sb.id}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm text-center"
          >
            {/* Badge icon placeholder */}
            <div className={`w-12 h-12 rounded-xl ${categoryColors[sb.badge.category] || "bg-gray-500"} flex items-center justify-center mx-auto mb-3 text-white text-lg font-bold`}>
              {sb.badge.name.charAt(0)}
            </div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1 line-clamp-1">
              {sb.badge.name}
            </h3>
            <span className="text-xs text-gray-500 block mb-2">
              {categoryLabels[sb.badge.category] || sb.badge.category}
            </span>
            <span className="text-xs text-gray-400">
              {new Date(sb.earnedAt).toLocaleDateString()}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
