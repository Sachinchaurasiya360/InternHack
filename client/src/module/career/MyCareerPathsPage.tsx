import { Link } from "react-router";
import { motion } from "framer-motion";
import { Compass, ArrowRight, TrendingUp, Zap, CheckCircle2, Clock } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import api from "../../lib/axios";
import { queryKeys } from "../../lib/query-keys";
import type { StudentCareerEnrollment } from "../../lib/types";

const CATEGORY_ACCENT: Record<string, string> = {
  ENGINEERING: "border-l-blue-400",
  DATA:        "border-l-purple-400",
  DESIGN:      "border-l-pink-400",
  PRODUCT:     "border-l-orange-400",
  MARKETING:   "border-l-green-400",
  DEVOPS:      "border-l-cyan-400",
  SECURITY:    "border-l-red-400",
  OTHER:       "border-l-gray-300",
};

const CATEGORY_RING: Record<string, string> = {
  ENGINEERING: "stroke-blue-500",
  DATA:        "stroke-purple-500",
  DESIGN:      "stroke-pink-500",
  PRODUCT:     "stroke-orange-500",
  MARKETING:   "stroke-green-500",
  DEVOPS:      "stroke-cyan-500",
  SECURITY:    "stroke-red-500",
  OTHER:       "stroke-gray-400",
};

function CircularProgress({ progress, category }: { progress: number; category: string }) {
  const r = 28;
  const circ = 2 * Math.PI * r;
  const offset = circ - (progress / 100) * circ;
  const ringClass = CATEGORY_RING[category] ?? "stroke-gray-400";

  return (
    <div className="relative w-16 h-16 shrink-0">
      <svg className="w-16 h-16 -rotate-90" viewBox="0 0 64 64">
        <circle cx="32" cy="32" r={r} fill="none" stroke="#f3f4f6" strokeWidth="5" />
        <circle
          cx="32" cy="32" r={r}
          fill="none"
          className={ringClass}
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={`${circ}`}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.6s ease" }}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-gray-800">
        {progress}%
      </span>
    </div>
  );
}

export default function MyCareerPathsPage() {
  const { data: paths = [], isLoading: loading } = useQuery({
    queryKey: queryKeys.careers.myPaths(),
    queryFn: () => api.get("/careers/my-paths").then((res) => res.data.paths as StudentCareerEnrollment[]),
  });

  const completed = paths.filter((p) => p.progress === 100).length;
  const inProgress = paths.filter((p) => p.progress > 0 && p.progress < 100).length;

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-100 p-5 animate-pulse flex gap-4">
            <div className="w-16 h-16 bg-gray-100 rounded-full shrink-0" />
            <div className="flex-1 space-y-2 pt-1">
              <div className="h-4 bg-gray-100 rounded w-1/2" />
              <div className="h-3 bg-gray-100 rounded w-1/3" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Career Paths</h1>
          <p className="text-sm text-gray-500 mt-1">Track your learning journey</p>
        </div>
        <Link
          to="/careers"
          className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-xl hover:bg-gray-700 transition-colors no-underline"
        >
          <Compass className="w-4 h-4" /> Explore More
        </Link>
      </div>

      {/* Summary stats */}
      {paths.length > 0 && (
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { icon: <Zap className="w-4 h-4 text-gray-600" />, value: paths.length, label: "Enrolled" },
            { icon: <TrendingUp className="w-4 h-4 text-amber-500" />, value: inProgress, label: "In Progress" },
            { icon: <CheckCircle2 className="w-4 h-4 text-green-500" />, value: completed, label: "Completed" },
          ].map(({ icon, value, label }) => (
            <div key={label} className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
              <div className="flex justify-center mb-1">{icon}</div>
              <div className="text-2xl font-bold text-gray-900">{value}</div>
              <div className="text-xs text-gray-500">{label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Path list */}
      {paths.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
          <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Compass className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-700 mb-1">No paths yet</h3>
          <p className="text-sm text-gray-400 mb-4">Start a career path to track your progress here.</p>
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-xl hover:bg-gray-700 transition-colors no-underline"
          >
            <Compass className="w-4 h-4" /> Explore Career Paths
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {paths.map((path, i) => {
            const accent = CATEGORY_ACCENT[path.career.category] ?? CATEGORY_ACCENT["OTHER"];
            const isCompleted = path.progress === 100;

            return (
              <motion.div
                key={path.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={`/student/careers/${path.career.slug}`}
                  className={`group flex items-center gap-4 bg-white px-5 py-4 rounded-xl border border-gray-100 border-l-4 ${accent} shadow-sm hover:shadow-md transition-all no-underline`}
                >
                  <CircularProgress progress={path.progress} category={path.career.category} />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-0.5">
                      <h3 className="text-sm font-semibold text-gray-900 truncate">
                        {path.career.title}
                      </h3>
                      {isCompleted && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-green-50 text-green-600 border border-green-100 shrink-0">
                          Complete
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-gray-500 mb-2">
                      {path.completedSkills} / {path.totalSkills} skills
                    </p>

                    {/* Progress bar */}
                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${path.progress}%` }}
                        transition={{ duration: 0.6, delay: i * 0.05 }}
                        className={`h-full rounded-full ${
                          isCompleted ? "bg-green-500" : path.progress > 0 ? "bg-amber-400" : "bg-gray-200"
                        }`}
                      />
                    </div>

                    <div className="flex items-center gap-3 mt-2 text-[10px] text-gray-400 font-medium uppercase tracking-wide">
                      <span>{path.career.category}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-200" />
                      <span>{path.career.difficulty}</span>
                      {path.career._count && (
                        <>
                          <span className="w-1 h-1 rounded-full bg-gray-200" />
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {path.career._count.phases} phases
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-gray-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
