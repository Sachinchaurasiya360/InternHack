import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  BarChart2,
  Clock,
  FileText,
  Lightbulb,
  Tag,
  ScanSearch,
  PenTool,
  Code2,
  Mail,
  ChevronRight,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import AtsToolsNav from "./AtsToolsNav";
import type { AtsScore } from "../../../lib/types";
import { LoadingScreen } from "../../../components/LoadingScreen";

const CATEGORY_LABELS: Record<string, string> = {
  formatting: "Formatting",
  keywords: "Keywords",
  experience: "Experience",
  skills: "Skills",
  education: "Education",
  impact: "Impact",
};

// Tool nav handled by shared AtsToolsNav

function ScoreCircle({ score }: { score: number }) {
  const color = score >= 70 ? "text-green-600 dark:text-green-400" : score >= 40 ? "text-yellow-600 dark:text-yellow-400" : "text-red-600 dark:text-red-400";
  const ringColor = score >= 70 ? "border-green-200 dark:border-green-800" : score >= 40 ? "border-yellow-200 dark:border-yellow-800" : "border-red-200 dark:border-red-800";
  const bgColor = score >= 70 ? "bg-green-50 dark:bg-green-900/20" : score >= 40 ? "bg-yellow-50 dark:bg-yellow-900/20" : "bg-red-50 dark:bg-red-900/20";

  return (
    <div className={`w-32 h-32 rounded-full ${bgColor} border-4 ${ringColor} flex flex-col items-center justify-center`}>
      <span className={`text-4xl font-bold ${color}`}>{score}</span>
      <span className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5">out of 100</span>
    </div>
  );
}

function CategoryBar({ label, score, delay }: { label: string; score: number; delay: number }) {
  const color = score >= 70 ? "bg-green-500" : score >= 40 ? "bg-yellow-500" : "bg-red-500";
  const textColor = score >= 70 ? "text-green-600 dark:text-green-400" : score >= 40 ? "text-yellow-600 dark:text-yellow-400" : "text-red-600 dark:text-red-400";

  return (
    <div className="flex items-center gap-3">
      <span className="w-24 text-sm text-gray-600 dark:text-gray-400 shrink-0 font-medium">{label}</span>
      <div className="flex-1 h-2.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${String(score)}%` }}
          transition={{ duration: 0.8, delay }}
          className={`h-full rounded-full ${color}`}
        />
      </div>
      <span className={`w-8 text-sm font-bold ${textColor} text-right`}>{score}</span>
    </div>
  );
}

export default function AtsScoreDetailPage() {
  const { scoreId } = useParams();

  const { data: score, isLoading } = useQuery({
    queryKey: queryKeys.ats.detail(scoreId!),
    queryFn: () => api.get(`/ats/history/${scoreId}`).then((res) => res.data.score as AtsScore),
    enabled: !!scoreId,
  });

  if (isLoading) return <LoadingScreen />;

  if (!score)
    return (
      <div className="flex flex-col items-center justify-center text-center py-20">
        <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
          <BarChart2 className="w-7 h-7 text-gray-400" />
        </div>
        <h3 className="font-display text-lg font-bold text-gray-950 dark:text-white mb-2">Score not found</h3>
        <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">This ATS score may have been deleted.</p>
        <Link to="/student/ats/history" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-950 dark:bg-white text-white dark:text-gray-950 text-sm font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors no-underline">
          <ArrowLeft className="w-4 h-4" /> Back to History
        </Link>
      </div>
    );

  const scoreColor = score.overallScore >= 70 ? "text-green-600 dark:text-green-400" : score.overallScore >= 40 ? "text-yellow-600 dark:text-yellow-400" : "text-red-600 dark:text-red-400";
  const scoreLabel = score.overallScore >= 70 ? "Great" : score.overallScore >= 40 ? "Average" : "Needs Work";

  return (
    <div className="relative max-w-5xl mx-auto pb-12">
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
        className="text-center mb-8 mt-6"
      >
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-gray-950 dark:text-white mb-3">
          ATS <span className="text-gradient-accent">Score Detail</span>
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-500 max-w-xl mx-auto">
          {score.jobTitle || "General ATS Score"} &bull; scored on {new Date(score.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
        </p>
      </motion.div>

      <AtsToolsNav />

      {/* Back link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="mb-6"
      >
        <Link
          to="/student/ats/history"
          className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white transition-colors no-underline"
        >
          <ArrowLeft className="w-4 h-4" /> Back to History
        </Link>
      </motion.div>

      {/* Score Overview Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden mb-4"
      >
        <div className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <ScoreCircle score={score.overallScore} />
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-xl font-bold text-gray-950 dark:text-white mb-1">
                {score.jobTitle || "General ATS Score"}
              </h2>
              <p className="text-sm text-gray-400 dark:text-gray-500 mb-3">
                <FileText className="w-3.5 h-3.5 inline mr-1" />
                {score.resumeUrl.split("/").pop()}
                <span className="mx-2">&bull;</span>
                <Clock className="w-3.5 h-3.5 inline mr-1" />
                {new Date(score.createdAt).toLocaleString("en-IN", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })}
              </p>
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold ${scoreColor} ${
                score.overallScore >= 70 ? "bg-green-50 dark:bg-green-900/20" : score.overallScore >= 40 ? "bg-yellow-50 dark:bg-yellow-900/20" : "bg-red-50 dark:bg-red-900/20"
              }`}>
                {scoreLabel}
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Category Breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden mb-4"
      >
        <div className="px-6 py-4 border-b border-gray-50 dark:border-gray-800">
          <h2 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <BarChart2 className="w-4 h-4 text-indigo-500" />
            Category Breakdown
          </h2>
        </div>
        <div className="p-6 space-y-3.5">
          {Object.entries(score.categoryScores).map(([key, val], i) => (
            <CategoryBar key={key} label={CATEGORY_LABELS[key] ?? key} score={val} delay={0.3 + i * 0.08} />
          ))}
        </div>
      </motion.div>

      {/* Suggestions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden mb-4"
      >
        <div className="px-6 py-4 border-b border-gray-50 dark:border-gray-800">
          <h2 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-amber-500" />
            Suggestions
          </h2>
        </div>
        <div className="p-6">
          <div className="space-y-3">
            {score.suggestions.map((s, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0 text-xs font-bold text-gray-500 dark:text-gray-400">
                  {i + 1}
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Keyword Analysis */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden"
      >
        <div className="px-6 py-4 border-b border-gray-50 dark:border-gray-800">
          <h2 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <Tag className="w-4 h-4 text-violet-500" />
            Keyword Analysis
          </h2>
        </div>
        <div className="p-6 space-y-5">
          {score.keywordAnalysis.found.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2.5 flex items-center gap-1.5 uppercase tracking-wide">
                <CheckCircle className="w-3.5 h-3.5 text-green-500" /> Found
              </p>
              <div className="flex flex-wrap gap-2">
                {score.keywordAnalysis.found.map((kw) => (
                  <span key={kw} className="px-3 py-1.5 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-xl text-xs font-medium">
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          )}
          {score.keywordAnalysis.missing.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2.5 flex items-center gap-1.5 uppercase tracking-wide">
                <AlertCircle className="w-3.5 h-3.5 text-orange-500" /> Missing
              </p>
              <div className="flex flex-wrap gap-2">
                {score.keywordAnalysis.missing.map((kw) => (
                  <span key={kw} className="px-3 py-1.5 bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400 rounded-xl text-xs font-medium">
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
