import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, FileText, Clock } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { AtsScore } from "../../../lib/types";

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

  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/student/ats" className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500 hover:text-black dark:hover:text-white mb-6 no-underline">
        <ArrowLeft className="w-4 h-4" /> Back to ATS Score
      </Link>

      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Score History</h1>
      <p className="text-sm text-gray-500 dark:text-gray-500 mb-6">Your past resume ATS analyses</p>

      {loading ? (
        <div className="text-center py-16 text-gray-500 dark:text-gray-500">Loading...</div>
      ) : scores.length === 0 ? (
        <div className="text-center py-16">
          <FileText className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
          <p className="text-gray-500 dark:text-gray-500 mb-2">No ATS scores yet</p>
          <Link to="/student/ats" className="text-sm text-black dark:text-white font-medium hover:underline">Score your first resume</Link>
        </div>
      ) : (
        <div className="space-y-3">
          {scores.map((score, i) => (
            <motion.div key={score.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
              <Link to={`/student/ats/history/${String(score.id)}`}
                className="flex items-center gap-4 bg-white dark:bg-gray-900 p-5 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow no-underline">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center font-bold text-lg ${getScoreColor(score.overallScore)}`}>
                  {score.overallScore}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                    {score.jobTitle || "General ATS Score"}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 truncate mt-0.5">
                    {score.resumeUrl.split("/").pop()}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500 shrink-0">
                  <Clock className="w-3 h-3" />
                  {new Date(score.createdAt).toLocaleDateString()}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
