import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  Clock,
  ScanSearch,
  PenTool,
  Mail,
  ChevronRight,
  BarChart2,
  Sparkles,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { LoadingScreen } from "../../../components/LoadingScreen";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { AtsScore } from "../../../lib/types";

const TOOLS = [
  { icon: ScanSearch, title: "ATS Score", desc: "Analyze your resume", to: "/student/ats/score" },
  { icon: Sparkles, title: "AI Resume", desc: "Generate with AI", to: "/student/ats/resume-generator" },
  { icon: PenTool, title: "Resume Builder", desc: "Build with templates", to: "/student/ats/templates" },
  { icon: Mail, title: "Cover Letter", desc: "AI-generated letters", to: "/student/ats/cover-letter" },
];

export default function AtsHistoryPage() {
  const { data: scores = [], isLoading: loading } = useQuery({
    queryKey: queryKeys.ats.history(),
    queryFn: () => api.get("/ats/history").then((res) => res.data.scores as AtsScore[]),
  });

  const getScoreColor = (score: number) => {
    if (score >= 70) return "text-green-600 bg-green-50 dark:bg-green-900/30 dark:text-green-400";
    if (score >= 40) return "text-yellow-600 bg-yellow-50 dark:bg-yellow-900/30 dark:text-yellow-400";
    return "text-red-600 bg-red-50 dark:bg-red-900/30 dark:text-red-400";
  };

  const getScoreBorder = (score: number) => {
    if (score >= 70) return "hover:border-green-200 dark:hover:border-green-800";
    if (score >= 40) return "hover:border-yellow-200 dark:hover:border-yellow-800";
    return "hover:border-red-200 dark:hover:border-red-800";
  };

  return (
    <div className="relative max-w-6xl mx-auto pb-12">
      {/* Atmospheric background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-150 h-150 bg-linear-to-br from-indigo-100 to-violet-100 dark:from-indigo-900/20 dark:to-violet-900/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-linear-to-tr from-slate-100 to-blue-100 dark:from-slate-900/20 dark:to-blue-900/20 rounded-full blur-3xl opacity-40" />
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-8"
      >
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-gray-950 dark:text-white mb-3">
          Your <span className="text-gradient-accent">ATS History</span>
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-500 max-w-xl mx-auto">
          Track your resume improvements over time
        </p>
      </motion.div>

      {/* Tool Cards Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10"
      >
        {TOOLS.map((tool, i) => (
          <motion.div
            key={tool.to}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
          >
            <Link
              to={tool.to}
              className="group flex items-center gap-3 p-4 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all duration-300 no-underline"
            >
              <div className="w-10 h-10 rounded-xl bg-gray-950 dark:bg-white flex items-center justify-center shrink-0">
                <tool.icon className="w-4.5 h-4.5 text-white dark:text-gray-950" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-950 dark:text-white truncate">{tool.title}</p>
                <p className="text-[11px] text-gray-400 dark:text-gray-500 truncate">{tool.desc}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-400 transition-colors shrink-0" />
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {loading ? (
          <LoadingScreen compact />
        ) : scores.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center p-14 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/80 dark:border-gray-800 shadow-sm">
            <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center mb-5">
              <BarChart2 className="w-9 h-9 text-indigo-400" />
            </div>
            <h3 className="text-gray-800 dark:text-gray-200 font-bold text-lg mb-2">No Scores Yet</h3>
            <p className="text-gray-400 dark:text-gray-500 text-sm max-w-xs leading-relaxed mx-auto mb-6">
              Analyze your first resume to start tracking your ATS scores over time
            </p>
            <Link
              to="/student/ats/score"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-950 dark:bg-white text-white dark:text-gray-950 text-sm font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors no-underline"
            >
              <ScanSearch className="w-4 h-4" />
              Score Your Resume
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {scores.map((score, i) => (
              <motion.div
                key={score.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04, duration: 0.35 }}
              >
                <Link
                  to={`/student/ats/history/${String(score.id)}`}
                  className={`group flex items-center gap-4 bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all no-underline ${getScoreBorder(score.overallScore)}`}
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center font-bold text-lg shrink-0 ${getScoreColor(score.overallScore)}`}>
                    {score.overallScore}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                      {score.jobTitle || "General ATS Score"}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 truncate mt-0.5">
                      {score.resumeUrl.split("/").pop()}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 shrink-0">
                    <Clock className="w-3 h-3" />
                    {new Date(score.createdAt).toLocaleDateString()}
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-400 transition-colors shrink-0" />
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
