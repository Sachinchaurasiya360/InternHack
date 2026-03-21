import { useState } from "react";
import { useParams, Link } from "react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, ExternalLink, CheckCircle2, Circle,
  Bookmark, BookmarkCheck, ChevronDown,
  Building2, Tag, BarChart3, Lightbulb, StickyNote, Link2, ArrowRight,
} from "lucide-react";
import toast from "react-hot-toast";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { DsaProblemDetail } from "../../../lib/types";
import { useAuthStore } from "../../../lib/auth.store";
import { SEO } from "../../../components/SEO";
import { LoadingScreen } from "../../../components/LoadingScreen";

const DIFF_COLORS: Record<string, string> = {
  Easy: "text-green-600 dark:text-green-400",
  Medium: "text-yellow-600 dark:text-yellow-400",
  Hard: "text-red-600 dark:text-red-400",
};

const DIFF_BG: Record<string, string> = {
  Easy: "bg-green-100 dark:bg-green-900/30",
  Medium: "bg-yellow-100 dark:bg-yellow-900/30",
  Hard: "bg-red-100 dark:bg-red-900/30",
};

const DIFF_BORDER: Record<string, string> = {
  Easy: "border-green-200 dark:border-green-800",
  Medium: "border-yellow-200 dark:border-yellow-800",
  Hard: "border-red-200 dark:border-red-800",
};

export default function DsaProblemDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { user } = useAuthStore();
  const queryClient = useQueryClient();
  const [showAllCompanies, setShowAllCompanies] = useState(false);
  const [expandedHint, setExpandedHint] = useState<number | null>(null);
  const [showNotes, setShowNotes] = useState(false);
  const [noteValue, setNoteValue] = useState("");

  const { data: problem, isLoading } = useQuery({
    queryKey: queryKeys.dsa.problem(slug!),
    queryFn: () => api.get<DsaProblemDetail>(`/dsa/problems/${slug}`).then((r) => r.data),
    enabled: !!slug,
    staleTime: 15 * 24 * 60 * 60 * 1000,
  });

  const toggleMutation = useMutation({
    mutationFn: (problemId: number) =>
      api.post(`/dsa/problems/${problemId}/toggle`).then((r) => r.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.dsa.problem(slug!) });
      queryClient.invalidateQueries({ queryKey: queryKeys.dsa.progress() });
    },
    onError: () => toast.error("Failed to update"),
  });

  const bookmarkMutation = useMutation({
    mutationFn: (problemId: number) =>
      api.post(`/dsa/problems/${problemId}/bookmark`).then((r) => r.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.dsa.problem(slug!) });
    },
    onError: () => toast.error("Failed to bookmark"),
  });

  const notesMutation = useMutation({
    mutationFn: ({ problemId, notes }: { problemId: number; notes: string }) =>
      api.put(`/dsa/problems/${problemId}/notes`, { notes }).then((r) => r.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.dsa.problem(slug!) });
      toast.success("Notes saved");
    },
  });

  if (isLoading) return <LoadingScreen />;
  if (!problem) return <div className="p-8 text-center text-gray-500">Problem not found</div>;

  const visibleCompanies = showAllCompanies ? problem.companies : problem.companies.slice(0, 20);

  return (
    <>
      <SEO title={`${problem.title} - DSA Practice`} description={problem.description?.slice(0, 160)} />

      <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* Back */}
        <Link
          to="/learn/dsa"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to DSA
        </Link>

        {/* Header card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-xl border ${DIFF_BORDER[problem.difficulty]} bg-white dark:bg-gray-900 p-6 shadow-sm`}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight">
                {problem.leetcodeId && (
                  <span className="text-gray-400 dark:text-gray-500 mr-2 font-mono text-xl">#{problem.leetcodeId}</span>
                )}
                {problem.title}
              </h1>

              <div className="flex flex-wrap items-center gap-3 mt-3">
                <span className={`text-sm font-semibold px-3 py-1 rounded-lg border ${DIFF_BG[problem.difficulty]} ${DIFF_COLORS[problem.difficulty]} ${DIFF_BORDER[problem.difficulty]}`}>
                  {problem.difficulty}
                </span>
                {problem.acceptanceRate && (
                  <span className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                    <BarChart3 className="w-4 h-4" />
                    {problem.acceptanceRate} acceptance
                  </span>
                )}
                {problem.totalSubmissions && (
                  <span className="text-sm text-gray-400 dark:text-gray-500">
                    {(problem.totalAccepted ?? 0).toLocaleString()} / {problem.totalSubmissions.toLocaleString()} accepted
                  </span>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 shrink-0">
              {user && (
                <>
                  <button
                    onClick={() => toggleMutation.mutate(problem.id)}
                    className={`p-2.5 rounded-xl border transition-all ${problem.solved
                      ? "bg-green-50 border-green-200 text-green-600 dark:bg-green-900/20 dark:border-green-800 shadow-sm"
                      : "border-gray-200 text-gray-400 hover:text-green-600 hover:border-green-300 dark:border-gray-700 dark:hover:border-green-700"}`}
                    title={problem.solved ? "Mark unsolved" : "Mark solved"}
                  >
                    {problem.solved ? <CheckCircle2 className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
                  </button>
                  <button
                    onClick={() => bookmarkMutation.mutate(problem.id)}
                    className={`p-2.5 rounded-xl border transition-all ${problem.bookmarked
                      ? "bg-blue-50 border-blue-200 text-blue-600 dark:bg-blue-900/20 dark:border-blue-800 shadow-sm"
                      : "border-gray-200 text-gray-400 hover:text-blue-600 hover:border-blue-300 dark:border-gray-700 dark:hover:border-blue-700"}`}
                    title={problem.bookmarked ? "Remove bookmark" : "Bookmark"}
                  >
                    {problem.bookmarked ? <BookmarkCheck className="w-5 h-5" /> : <Bookmark className="w-5 h-5" />}
                  </button>
                </>
              )}
              {problem.leetcodeUrl && (
                <a
                  href={problem.leetcodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors text-sm font-semibold shadow-sm"
                >
                  <ExternalLink className="w-4 h-4" /> Solve on LeetCode
                </a>
              )}
            </div>
          </div>

          {/* Tags row inside header card */}
          {problem.tags.length > 0 && (
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
              <Tag className="w-4 h-4 text-gray-400 shrink-0" />
              <div className="flex flex-wrap gap-1.5">
                {problem.tags.map((t) => (
                  <Link
                    key={t}
                    to={`/learn/dsa/${t}`}
                    className="px-2.5 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors capitalize"
                  >
                    {t.replace(/-/g, " ")}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Companies */}
        {problem.companies.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-3">
              <Building2 className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Asked by {problem.companies.length} {problem.companies.length === 1 ? "company" : "companies"}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {visibleCompanies.map((c) => (
                <Link
                  key={c}
                  to={`/learn/dsa/companies/${c}`}
                  className="px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors capitalize"
                >
                  {c.replace(/-/g, " ")}
                </Link>
              ))}
              {problem.companies.length > 20 && (
                <button
                  onClick={() => setShowAllCompanies(!showAllCompanies)}
                  className="px-2.5 py-1 text-xs font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  {showAllCompanies ? "Show less" : `+${problem.companies.length - 20} more`}
                </button>
              )}
            </div>
          </motion.div>
        )}

        {/* Description */}
        {problem.description && !problem.isPremium && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm"
          >
            <div
              className="prose dark:prose-invert max-w-none text-gray-800 dark:text-gray-200 leading-relaxed whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ __html: formatDescription(problem.description) }}
            />
          </motion.div>
        )}

        {problem.isPremium && (
          <div className="rounded-xl p-6 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 text-center">
            <p className="text-amber-700 dark:text-amber-300 font-semibold">This is a LeetCode Premium problem.</p>
            <p className="text-amber-600 dark:text-amber-400 text-sm mt-1">Visit LeetCode to view the full description.</p>
          </div>
        )}

        {/* Constraints */}
        {problem.constraints && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 p-5 shadow-sm"
          >
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Constraints</h3>
            <div
              className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap leading-relaxed"
              dangerouslySetInnerHTML={{ __html: formatDescription(problem.constraints) }}
            />
          </motion.div>
        )}

        {/* Hints */}
        {problem.hints.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm overflow-hidden"
          >
            <div className="flex items-center gap-2 px-5 pt-5 pb-3">
              <Lightbulb className="w-4 h-4 text-amber-500" />
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                {problem.hints.length} {problem.hints.length === 1 ? "Hint" : "Hints"}
              </h3>
            </div>
            <div className="divide-y divide-gray-100 dark:divide-gray-800">
              {problem.hints.map((hint, i) => (
                <div key={i}>
                  <button
                    onClick={() => setExpandedHint(expandedHint === i ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-3.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <span>Hint {i + 1}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${expandedHint === i ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {expandedHint === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div
                          className="px-5 pb-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: cleanHint(hint) }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Notes */}
        {user && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm overflow-hidden"
          >
            <button
              onClick={() => { setShowNotes(!showNotes); if (!showNotes) setNoteValue(problem.notes ?? ""); }}
              className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
            >
              <div className="flex items-center gap-2">
                <StickyNote className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">My Notes</span>
                {problem.notes && !showNotes && (
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                )}
              </div>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${showNotes ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {showNotes && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5">
                    <textarea
                      value={noteValue}
                      onChange={(e) => setNoteValue(e.target.value)}
                      className="w-full h-36 p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-200 resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-shadow placeholder:text-gray-400"
                      placeholder="Write your approach, key observations, or time complexity notes..."
                    />
                    <div className="flex justify-end mt-2">
                      <button
                        onClick={() => notesMutation.mutate({ problemId: problem.id, notes: noteValue })}
                        disabled={notesMutation.isPending}
                        className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
                      >
                        {notesMutation.isPending ? "Saving..." : "Save Notes"}
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Similar Questions */}
        {problem.similarQuestions && problem.similarQuestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm overflow-hidden"
          >
            <div className="px-5 pt-5 pb-3">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Similar Questions</h3>
            </div>
            <div className="divide-y divide-gray-100 dark:divide-gray-800">
              {problem.similarQuestions.slice(0, 10).map((sq) => (
                <Link
                  key={sq.slug}
                  to={`/learn/dsa/problem/${sq.slug}`}
                  className="flex items-center justify-between px-5 py-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group"
                >
                  <span className="text-sm text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {sq.title}
                  </span>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className={`text-xs font-semibold ${DIFF_COLORS[sq.difficulty]}`}>{sq.difficulty}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-300 dark:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}

        {/* External links */}
        {(problem.gfgUrl || problem.hackerrankUrl || problem.codechefUrl || problem.articleUrl || problem.videoUrl) && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 }}
            className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-3">
              <Link2 className="w-4 h-4 text-gray-500" />
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Practice Elsewhere</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {problem.gfgUrl && (
                <ExternalLinkButton href={problem.gfgUrl} label="GeeksForGeeks" />
              )}
              {problem.hackerrankUrl && (
                <ExternalLinkButton href={problem.hackerrankUrl} label="HackerRank" />
              )}
              {problem.codechefUrl && (
                <ExternalLinkButton href={problem.codechefUrl} label="CodeChef" />
              )}
              {problem.articleUrl && (
                <ExternalLinkButton href={problem.articleUrl} label="Article" />
              )}
              {problem.videoUrl && (
                <ExternalLinkButton href={problem.videoUrl} label="Video" />
              )}
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
}

function ExternalLinkButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-all text-gray-600 dark:text-gray-400"
    >
      <ExternalLink className="w-3.5 h-3.5" /> {label}
    </a>
  );
}

/** Strip LeetCode wrapper divs and style code tags for our UI */
function cleanHint(html: string): string {
  return html
    .replace(/<div[^>]*>/gi, "")
    .replace(/<\/div>/gi, "")
    .replace(/<code>/gi, "<code class='px-1.5 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-sm font-mono'>");
}

function formatDescription(md: string): string {
  return md
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/`(.*?)`/g, "<code class='px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-sm font-mono'>$1</code>")
    .replace(/_([^_]+)_/g, "<em>$1</em>")
    .replace(/\n/g, "<br />");
}
