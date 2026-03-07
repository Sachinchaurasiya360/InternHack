import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import { ArrowLeft, Building2, CheckCircle2, ChevronRight, ChevronDown, Lightbulb } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { DsaCompany, DsaCompanyProblem } from "../../../lib/types";
import { useAuthStore } from "../../../lib/auth.store";
import { SEO } from "../../../components/SEO";

const DIFF_BADGE: Record<string, string> = {
  Easy: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400",
  Medium: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400",
  Hard: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400",
};

export default function DsaCompaniesPage() {
  const { user } = useAuthStore();
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const { data: companies, isLoading } = useQuery({
    queryKey: queryKeys.dsa.companies(),
    queryFn: () => api.get<DsaCompany[]>("/dsa/companies").then((r) => r.data),
  });

  const { data: problems } = useQuery({
    queryKey: queryKeys.dsa.company(selectedCompany!),
    queryFn: () => api.get<DsaCompanyProblem[]>(`/dsa/companies/${selectedCompany}`).then((r) => r.data),
    enabled: !!selectedCompany,
  });

  return (
    <div className="max-w-5xl mx-auto">
      <SEO title="Company-wise DSA Problems" noIndex />

      <div className="mb-6">
        <Link to="/student/dsa" className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-3">
          <ArrowLeft className="w-4 h-4" />
          Back to DSA
        </Link>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center">
            <Building2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Company-wise Problems</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Practice problems asked by top companies</p>
          </div>
        </div>
      </div>

      {!selectedCompany ? (
        // Company list
        isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="h-20 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {companies?.map((company) => (
              <button
                key={company.name}
                onClick={() => setSelectedCompany(company.name)}
                className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-sm transition-all text-left group"
              >
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white capitalize group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {company.name}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    {company.count} problems
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 dark:text-gray-600" />
              </button>
            ))}
          </div>
        )
      ) : (
        // Problem list for selected company
        <div>
          <button
            onClick={() => { setSelectedCompany(null); setExpandedId(null); }}
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            All Companies
          </button>

          <h2 className="text-lg font-bold text-gray-900 dark:text-white capitalize mb-4">
            {selectedCompany} ({problems?.length ?? 0} problems)
          </h2>

          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden divide-y divide-gray-100 dark:divide-gray-800">
            {problems?.map((p) => (
              <div key={p.id}>
                <div
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer"
                  onClick={() => setExpandedId(expandedId === p.id ? null : p.id)}
                >
                  {user && (
                    <div className="shrink-0">
                      {p.solved ? (
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-600" />
                      )}
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    <span className={`text-sm font-medium ${p.solved ? "text-gray-400 dark:text-gray-500 line-through" : "text-gray-900 dark:text-white"}`}>
                      {p.title}
                    </span>
                    <div className="flex items-center gap-2 mt-0.5">
                      <Link
                        to={`/student/dsa/${p.topicSlug}`}
                        onClick={(e) => e.stopPropagation()}
                        className="text-[11px] text-indigo-500 hover:text-indigo-600 dark:text-indigo-400"
                      >
                        {p.topicName}
                      </Link>
                      {p.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full shrink-0 ${DIFF_BADGE[p.difficulty] || "bg-gray-100 text-gray-600"}`}>
                    {p.difficulty}
                  </span>

                  {p.leetcodeUrl && (
                    <a href={p.leetcodeUrl} target="_blank" rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-7 h-7 rounded-md bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 dark:text-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900/40 transition-colors shrink-0"
                      title="LeetCode"
                    >
                      <span className="text-xs font-bold">LC</span>
                    </a>
                  )}

                  <ChevronDown className={`w-4 h-4 text-gray-400 dark:text-gray-500 shrink-0 transition-transform ${expandedId === p.id ? "rotate-180" : ""}`} />
                </div>

                {/* Expandable hint/explanation dropdown */}
                <AnimatePresence>
                  {expandedId === p.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 pt-1 ml-8">
                        {p.hints ? (
                          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 rounded-lg p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                              <span className="text-xs font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wide">Hint & Approach</span>
                            </div>
                            <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed whitespace-pre-line">{p.hints}</p>
                          </div>
                        ) : (
                          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                            <p className="text-sm text-gray-500 dark:text-gray-400 italic">No hints available for this problem yet.</p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {problems?.length === 0 && (
              <div className="text-center py-12 text-gray-400 dark:text-gray-500">
                No problems found for this company
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
