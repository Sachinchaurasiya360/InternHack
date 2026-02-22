import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, AlertCircle } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { AtsScore } from "../../../lib/types";

const CATEGORY_LABELS: Record<string, string> = {
  formatting: "Formatting",
  keywords: "Keywords",
  experience: "Experience",
  skills: "Skills",
  education: "Education",
  impact: "Impact",
};

function ScoreCircle({ score }: { score: number }) {
  const color = score >= 70 ? "text-green-500" : score >= 40 ? "text-yellow-500" : "text-red-500";
  const bgColor = score >= 70 ? "bg-green-50" : score >= 40 ? "bg-yellow-50" : "bg-red-50";
  const ringColor = score >= 70 ? "ring-green-200" : score >= 40 ? "ring-yellow-200" : "ring-red-200";

  return (
    <div className={`w-36 h-36 rounded-full ${bgColor} ring-4 ${ringColor} flex flex-col items-center justify-center mx-auto`}>
      <span className={`text-4xl font-bold ${color}`}>{score}</span>
      <span className="text-xs text-gray-500 mt-1">out of 100</span>
    </div>
  );
}

function CategoryBar({ label, score }: { label: string; score: number }) {
  const color = score >= 70 ? "bg-green-500" : score >= 40 ? "bg-yellow-500" : "bg-red-500";

  return (
    <div className="flex items-center gap-3">
      <span className="w-28 text-sm text-gray-600 shrink-0">{label}</span>
      <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${String(score)}%` }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`h-full rounded-full ${color}`}
        />
      </div>
      <span className="w-10 text-sm font-semibold text-gray-700 text-right">{score}</span>
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

  if (isLoading) return <div className="text-center py-16 text-gray-500">Loading...</div>;
  if (!score) return <div className="text-center py-16 text-gray-500">Score not found</div>;

  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/student/ats/history" className="flex items-center gap-2 text-sm text-gray-500 hover:text-black mb-6 no-underline">
        <ArrowLeft className="w-4 h-4" /> Back to History
      </Link>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        {/* Header */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-xl font-bold text-gray-900">{score.jobTitle || "General ATS Score"}</h1>
              <p className="text-xs text-gray-500 mt-1">
                Scored on {new Date(score.createdAt).toLocaleString()} &bull; {score.resumeUrl.split("/").pop()}
              </p>
            </div>
          </div>
        </div>

        {/* Overall Score */}
        <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm text-center">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Overall Score</h2>
          <ScoreCircle score={score.overallScore} />
        </div>

        {/* Category Breakdown */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Category Breakdown</h2>
          <div className="space-y-3">
            {Object.entries(score.categoryScores).map(([key, val]) => (
              <CategoryBar key={key} label={CATEGORY_LABELS[key] ?? key} score={val} />
            ))}
          </div>
        </div>

        {/* Suggestions */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Suggestions</h2>
          <ol className="list-decimal list-inside space-y-2">
            {score.suggestions.map((s, i) => (
              <li key={i} className="text-sm text-gray-600 leading-relaxed">{s}</li>
            ))}
          </ol>
        </div>

        {/* Keywords */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Keyword Analysis</h2>
          {score.keywordAnalysis.found.length > 0 && (
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-500" /> Keywords Found
              </p>
              <div className="flex flex-wrap gap-2">
                {score.keywordAnalysis.found.map((kw) => (
                  <span key={kw} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium">{kw}</span>
                ))}
              </div>
            </div>
          )}
          {score.keywordAnalysis.missing.length > 0 && (
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                <AlertCircle className="w-4 h-4 text-orange-500" /> Missing Keywords
              </p>
              <div className="flex flex-wrap gap-2">
                {score.keywordAnalysis.missing.map((kw) => (
                  <span key={kw} className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-xs font-medium">{kw}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
