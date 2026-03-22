import { useState, useEffect, useCallback } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft, ExternalLink, CheckCircle2, Circle,
  Bookmark, BookmarkCheck, ChevronDown,
  Building2, Tag, BarChart3, Lightbulb, StickyNote, Link2, ArrowRight,
  History, Terminal, Lock, Crown, Code2,
} from "lucide-react";
import toast from "react-hot-toast";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { DsaProblemDetail, DsaLanguage, DsaExecutionResult, DsaSubmissionSummary } from "../../../lib/types";
import { useAuthStore } from "../../../lib/auth.store";
import { SEO } from "../../../components/SEO";
import { LoadingScreen } from "../../../components/LoadingScreen";
import { DsaCodeEditor } from "./components/DsaCodeEditor";
import { DsaTestResults } from "./components/DsaTestResults";
import { DsaSubmissionHistory } from "./components/DsaSubmissionHistory";
import { DsaConsoleOutput } from "./components/DsaConsoleOutput";

const DIFF_COLORS: Record<string, string> = {
  Easy: "text-emerald-600 dark:text-emerald-400",
  Medium: "text-amber-600 dark:text-amber-400",
  Hard: "text-red-600 dark:text-red-400",
};

const DIFF_BG: Record<string, string> = {
  Easy: "bg-emerald-500/10 border-emerald-500/20",
  Medium: "bg-amber-500/10 border-amber-500/20",
  Hard: "bg-red-500/10 border-red-500/20",
};

const DEFAULT_CODE: Record<DsaLanguage, string> = {
  python: `import sys
from typing import List, Optional

class Solution:
    def solve(self):
        # Read input from stdin
        # Example: n = int(input()); arr = list(map(int, input().split()))
        pass

# --- Do not modify below ---
Solution().solve()
`,
  cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    void solve() {
        // Read input from stdin
        // Example: int n; cin >> n;

    }
};

// --- Do not modify below ---
int main() {
    Solution().solve();
    return 0;
}
`,
  java: `import java.util.*;

public class Main {
    public void solve() {
        Scanner sc = new Scanner(System.in);
        // Read input from stdin
        // Example: int n = sc.nextInt();

    }

    // --- Do not modify below ---
    public static void main(String[] args) {
        new Main().solve();
    }
}
`,
};

export default function DsaProblemDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { user } = useAuthStore();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const isPremium =
    (user?.subscriptionPlan === "MONTHLY" || user?.subscriptionPlan === "YEARLY") &&
    user?.subscriptionStatus === "ACTIVE";

  // Problem state
  const [showAllCompanies, setShowAllCompanies] = useState(false);
  const [expandedHint, setExpandedHint] = useState<number | null>(null);
  const [showNotes, setShowNotes] = useState(false);
  const [noteValue, setNoteValue] = useState("");

  // Code editor state
  const [activeTab, setActiveTab] = useState<"problem" | "code">("problem");
  const [rightTab, setRightTab] = useState<"results" | "history" | "output">("results");
  const [language, setLanguage] = useState<DsaLanguage>("python");
  const [codeMap, setCodeMap] = useState<Record<DsaLanguage, string>>({
    python: DEFAULT_CODE.python,
    cpp: DEFAULT_CODE.cpp,
    java: DEFAULT_CODE.java,
  });

  // Load saved code from localStorage
  useEffect(() => {
    if (!slug) return;
    for (const lang of ["python", "cpp", "java"] as DsaLanguage[]) {
      const saved = localStorage.getItem(`dsa-code-${slug}-${lang}`);
      if (saved) setCodeMap((prev) => ({ ...prev, [lang]: saved }));
    }
  }, [slug]);

  const handleCodeChange = useCallback((val: string) => {
    setCodeMap((prev) => ({ ...prev, [language]: val }));
    if (slug) {
      try { localStorage.setItem(`dsa-code-${slug}-${language}`, val); } catch { /* quota */ }
    }
  }, [language, slug]);

  const handleLoadSubmission = useCallback((code: string, lang: DsaLanguage) => {
    setLanguage(lang);
    setCodeMap((prev) => ({ ...prev, [lang]: code }));
    setRightTab("results");
    if (slug) {
      try { localStorage.setItem(`dsa-code-${slug}-${lang}`, code); } catch { /* quota */ }
    }
  }, [slug]);

  // Queries
  const { data: problem, isLoading } = useQuery({
    queryKey: queryKeys.dsa.problem(slug!),
    queryFn: () => api.get<DsaProblemDetail>(`/dsa/problems/${slug}`).then((r) => r.data),
    enabled: !!slug,
    staleTime: 15 * 24 * 60 * 60 * 1000,
  });

  const { data: submissions } = useQuery({
    queryKey: queryKeys.dsa.submissions(problem?.id ?? 0),
    queryFn: () => api.get<DsaSubmissionSummary[]>(`/dsa/problems/${problem!.id}/submissions`).then((r) => r.data),
    enabled: !!user && !!problem && isPremium,
    staleTime: 60 * 1000,
  });

  // Mutations
  const toggleMutation = useMutation({
    mutationFn: (problemId: number) => api.post(`/dsa/problems/${problemId}/toggle`).then((r) => r.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.dsa.problem(slug!) });
      queryClient.invalidateQueries({ queryKey: queryKeys.dsa.progress() });
    },
    onError: () => toast.error("Failed to update"),
  });

  const bookmarkMutation = useMutation({
    mutationFn: (problemId: number) => api.post(`/dsa/problems/${problemId}/bookmark`).then((r) => r.data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKeys.dsa.problem(slug!) }),
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

  const executeMutation = useMutation({
    mutationFn: ({ problemId, lang, code }: { problemId: number; lang: string; code: string }) =>
      api.post<DsaExecutionResult>(`/dsa/problems/${problemId}/execute`, { language: lang, code }).then((r) => r.data),
    onSuccess: (data) => {
      setRightTab("results");
      if (data.allPassed) {
        toast.success("All test cases passed!");
        queryClient.invalidateQueries({ queryKey: queryKeys.dsa.problem(slug!) });
        queryClient.invalidateQueries({ queryKey: queryKeys.dsa.progress() });
      }
      queryClient.invalidateQueries({ queryKey: queryKeys.dsa.submissions(problem!.id) });
    },
    onError: (err: any) => {
      if (err?.response?.status === 429) {
        toast.error(err.response.data?.message ?? "Daily limit reached");
      } else {
        toast.error(err?.response?.data?.message ?? "Execution failed");
      }
    },
  });

  const handleRun = useCallback(() => {
    if (!problem || !user || !isPremium) return;
    executeMutation.mutate({ problemId: problem.id, lang: language, code: codeMap[language] });
  }, [problem, user, isPremium, language, codeMap, executeMutation]);

  if (isLoading) return <LoadingScreen />;
  if (!problem) return <div className="p-8 text-center text-gray-500">Problem not found</div>;

  const visibleCompanies = showAllCompanies ? problem.companies : problem.companies.slice(0, 20);

  return (
    <>
      <SEO title={`${problem.title} - DSA Practice`} description={problem.description?.slice(0, 160)} />

      <div className="h-[calc(100vh-64px)] flex flex-col bg-white dark:bg-gray-950">
        {/* ── Top bar ── */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 dark:border-gray-800/80 bg-white dark:bg-gray-950 shrink-0">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate(-1)} className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div className="h-4 w-px bg-gray-200 dark:bg-gray-800" />
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-md border ${DIFF_BG[problem.difficulty]} ${DIFF_COLORS[problem.difficulty]}`}>
              {problem.difficulty}
            </span>
            <h1 className="text-sm font-semibold text-gray-900 dark:text-white truncate max-w-xs sm:max-w-lg">
              {problem.leetcodeId && <span className="text-gray-400 dark:text-gray-500 mr-1.5">#{problem.leetcodeId}</span>}
              {problem.title}
            </h1>
          </div>

          <div className="flex items-center gap-1">
            {user && (
              <>
                <button
                  onClick={() => toggleMutation.mutate(problem.id)}
                  className={`p-2 rounded-lg transition-all ${problem.solved
                    ? "text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
                    : "text-gray-400 hover:text-emerald-500 hover:bg-gray-100 dark:hover:bg-gray-800"}`}
                  title={problem.solved ? "Mark unsolved" : "Mark solved"}
                >
                  {problem.solved ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => bookmarkMutation.mutate(problem.id)}
                  className={`p-2 rounded-lg transition-all ${problem.bookmarked
                    ? "text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                    : "text-gray-400 hover:text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-800"}`}
                  title={problem.bookmarked ? "Remove bookmark" : "Bookmark"}
                >
                  {problem.bookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                </button>
              </>
            )}
            {problem.leetcodeUrl && (
              <a
                href={problem.leetcodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-white rounded-lg transition-colors text-xs font-semibold"
              >
                <ExternalLink className="w-3 h-3" /> LeetCode
              </a>
            )}
          </div>
        </div>

        {/* ── Mobile tab bar ── */}
        <div className="lg:hidden flex border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shrink-0">
          {(["problem", "code"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2.5 text-sm font-medium transition-colors relative ${activeTab === tab ? "text-blue-600 dark:text-blue-400" : "text-gray-500"}`}
            >
              {tab === "problem" ? "Problem" : "Code"}
              {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400" />}
            </button>
          ))}
        </div>

        {/* ── Split pane ── */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-[45fr_55fr] min-h-0">
          {/* LEFT: Problem details */}
          <div className={`overflow-y-auto border-r border-gray-200 dark:border-gray-800/80 bg-white dark:bg-gray-950 ${activeTab !== "problem" ? "hidden lg:block" : ""}`}>
            <div className="p-5 space-y-4">
              {/* Acceptance + stats */}
              <div className="flex flex-wrap items-center gap-3">
                {problem.acceptanceRate && (
                  <span className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                    <BarChart3 className="w-3.5 h-3.5" /> {problem.acceptanceRate} acceptance
                  </span>
                )}
                {problem.totalSubmissions && (
                  <span className="text-xs text-gray-400 dark:text-gray-500">
                    {(problem.totalAccepted ?? 0).toLocaleString()} / {problem.totalSubmissions.toLocaleString()}
                  </span>
                )}
              </div>

              {/* Tags */}
              {problem.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {problem.tags.map((t) => (
                    <Link key={t} to={`/learn/dsa/${t}`} className="px-2 py-0.5 text-xs font-medium bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-md hover:bg-blue-100 dark:hover:bg-blue-500/20 transition-colors capitalize">
                      {t.replace(/-/g, " ")}
                    </Link>
                  ))}
                </div>
              )}

              {/* Companies */}
              {problem.companies.length > 0 && (
                <div className="rounded-xl border border-gray-100 dark:border-gray-800/80 p-3 bg-gray-50/50 dark:bg-gray-900/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="w-3.5 h-3.5 text-gray-400" />
                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                      Asked by {problem.companies.length} {problem.companies.length === 1 ? "company" : "companies"}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {visibleCompanies.map((c) => (
                      <span key={c} className="px-2 py-0.5 text-xs bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-md border border-gray-100 dark:border-gray-700/50 capitalize">
                        {c.replace(/-/g, " ")}
                      </span>
                    ))}
                    {problem.companies.length > 20 && (
                      <button onClick={() => setShowAllCompanies(!showAllCompanies)} className="px-2 py-0.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                        {showAllCompanies ? "Less" : `+${problem.companies.length - 20}`}
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Description */}
              {problem.description && !problem.isPremium && (
                <div
                  className="prose dark:prose-invert max-w-none text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{ __html: formatDescription(problem.description) }}
                />
              )}

              {problem.isPremium && (
                <div className="rounded-xl p-4 bg-amber-50 dark:bg-amber-500/5 border border-amber-200 dark:border-amber-500/20 text-center">
                  <p className="text-amber-700 dark:text-amber-400 font-semibold text-sm">LeetCode Premium problem</p>
                  <p className="text-amber-600/70 dark:text-amber-400/60 text-xs mt-1">Visit LeetCode to view the full description.</p>
                </div>
              )}

              {/* Constraints */}
              {problem.constraints && (
                <div className="rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800/80 p-3">
                  <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">Constraints</h3>
                  <div
                    className="text-sm text-gray-600 dark:text-gray-400 whitespace-pre-wrap leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: formatDescription(problem.constraints) }}
                  />
                </div>
              )}

              {/* Hints */}
              {problem.hints.length > 0 && (
                <div className="rounded-xl border border-gray-100 dark:border-gray-800/80 overflow-hidden">
                  <div className="flex items-center gap-2 px-3 pt-3 pb-2">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                    <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                      {problem.hints.length} {problem.hints.length === 1 ? "Hint" : "Hints"}
                    </h3>
                  </div>
                  <div className="divide-y divide-gray-100 dark:divide-gray-800/80">
                    {problem.hints.map((hint, i) => (
                      <div key={i}>
                        <button
                          onClick={() => setExpandedHint(expandedHint === i ? null : i)}
                          className="w-full flex items-center justify-between px-3 py-2.5 text-xs font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors"
                        >
                          <span>Hint {i + 1}</span>
                          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${expandedHint === i ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {expandedHint === i && (
                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                              <div className="px-3 pb-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed" dangerouslySetInnerHTML={{ __html: cleanHint(hint) }} />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Notes */}
              {user && (
                <div className="rounded-xl border border-gray-100 dark:border-gray-800/80 overflow-hidden">
                  <button
                    onClick={() => { setShowNotes(!showNotes); if (!showNotes) setNoteValue(problem.notes ?? ""); }}
                    className="w-full flex items-center justify-between px-3 py-3 hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <StickyNote className="w-3.5 h-3.5 text-blue-500" />
                      <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">My Notes</span>
                      {problem.notes && !showNotes && <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />}
                    </div>
                    <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${showNotes ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {showNotes && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                        <div className="px-3 pb-3">
                          <textarea
                            value={noteValue}
                            onChange={(e) => setNoteValue(e.target.value)}
                            className="w-full h-28 p-2.5 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-sm resize-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 focus:outline-none transition-shadow"
                            placeholder="Write your approach, key observations..."
                          />
                          <div className="flex justify-end mt-2">
                            <button
                              onClick={() => notesMutation.mutate({ problemId: problem.id, notes: noteValue })}
                              disabled={notesMutation.isPending}
                              className="px-3 py-1.5 bg-blue-600 text-white text-xs font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
                            >
                              {notesMutation.isPending ? "Saving..." : "Save"}
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {/* Similar Questions */}
              {problem.similarQuestions && problem.similarQuestions.length > 0 && (
                <div className="rounded-xl border border-gray-100 dark:border-gray-800/80 overflow-hidden">
                  <div className="px-3 pt-3 pb-2">
                    <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400">Similar Questions</h3>
                  </div>
                  <div className="divide-y divide-gray-100 dark:divide-gray-800/80">
                    {problem.similarQuestions.slice(0, 8).map((sq) => (
                      <Link key={sq.slug} to={`/learn/dsa/problem/${sq.slug}`} className="flex items-center justify-between px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800/40 group transition-colors">
                        <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{sq.title}</span>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className={`text-xs font-semibold ${DIFF_COLORS[sq.difficulty]}`}>{sq.difficulty}</span>
                          <ArrowRight className="w-3 h-3 text-gray-300 dark:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* External links */}
              {(problem.gfgUrl || problem.hackerrankUrl || problem.codechefUrl || problem.articleUrl || problem.videoUrl) && (
                <div className="rounded-xl border border-gray-100 dark:border-gray-800/80 p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Link2 className="w-3.5 h-3.5 text-gray-400" />
                    <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400">Practice Elsewhere</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {problem.gfgUrl && <ExtLink href={problem.gfgUrl} label="GFG" />}
                    {problem.hackerrankUrl && <ExtLink href={problem.hackerrankUrl} label="HackerRank" />}
                    {problem.codechefUrl && <ExtLink href={problem.codechefUrl} label="CodeChef" />}
                    {problem.articleUrl && <ExtLink href={problem.articleUrl} label="Article" />}
                    {problem.videoUrl && <ExtLink href={problem.videoUrl} label="Video" />}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ── RIGHT: Code editor + results ── */}
          <div className={`flex flex-col min-h-0 bg-gray-50 dark:bg-gray-900/50 ${activeTab !== "code" ? "hidden lg:flex" : "flex"}`}>
            {isPremium ? (
              <>
                {/* Editor */}
                <div className="h-[55%] min-h-0 border-b border-gray-200 dark:border-gray-800/80">
                  <DsaCodeEditor
                    value={codeMap[language]}
                    onChange={handleCodeChange}
                    onRun={handleRun}
                    language={language}
                    onLanguageChange={setLanguage}
                    isRunning={executeMutation.isPending}
                  />
                </div>

                {/* Results / Output / History tabs */}
                <div className="flex-1 min-h-0 flex flex-col">
                  <div className="flex items-center border-b border-gray-200 dark:border-gray-800/80 bg-white dark:bg-gray-950 shrink-0">
                    {([
                      { key: "results" as const, label: "Test Results", icon: null },
                      { key: "output" as const, label: "Output", icon: Terminal },
                      { key: "history" as const, label: "History", icon: History },
                    ]).map(({ key, label, icon: Icon }) => (
                      <button
                        key={key}
                        onClick={() => setRightTab(key)}
                        className={`px-4 py-2 text-xs font-medium transition-colors flex items-center gap-1.5 relative ${rightTab === key ? "text-blue-600 dark:text-blue-400" : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"}`}
                      >
                        {Icon && <Icon className="w-3.5 h-3.5" />}
                        {label}
                        {key === "history" && submissions && submissions.length > 0 && (
                          <span className="text-[10px] bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-1.5 py-px rounded-md font-semibold">{submissions.length}</span>
                        )}
                        {rightTab === key && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400" />}
                      </button>
                    ))}
                  </div>

                  <div className="flex-1 overflow-y-auto bg-white dark:bg-gray-950">
                    {rightTab === "results" ? (
                      <DsaTestResults result={executeMutation.data ?? null} isRunning={executeMutation.isPending} />
                    ) : rightTab === "output" ? (
                      <DsaConsoleOutput result={executeMutation.data ?? null} isRunning={executeMutation.isPending} />
                    ) : (
                      <DsaSubmissionHistory submissions={submissions ?? []} onLoadCode={handleLoadSubmission} />
                    )}
                  </div>
                </div>
              </>
            ) : (
              /* ── Premium lock overlay with blurred editor bg ── */
              <div className="relative flex-1 min-h-0 overflow-hidden">
                {/* Blurred fake editor background */}
                <div className="absolute inset-0 blur-sm opacity-60 pointer-events-none select-none">
                  <div className="h-full bg-gray-900 p-4 font-mono text-xs leading-relaxed text-gray-400">
                    <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-700">
                      <span className="px-2 py-1 bg-gray-800 rounded text-gray-300 text-xs">Python 3</span>
                      <span className="ml-auto px-3 py-1 bg-emerald-600 rounded text-white text-xs">Run</span>
                    </div>
                    <p><span className="text-purple-400">import</span> sys</p>
                    <p><span className="text-purple-400">from</span> typing <span className="text-purple-400">import</span> List</p>
                    <p className="mt-2"><span className="text-blue-400">class</span> <span className="text-yellow-300">Solution</span>:</p>
                    <p className="pl-6"><span className="text-blue-400">def</span> <span className="text-green-300">solve</span>(self):</p>
                    <p className="pl-12 text-gray-500"># Read input from stdin</p>
                    <p className="pl-12"><span className="text-gray-500">n = </span><span className="text-blue-300">int</span>(<span className="text-blue-300">input</span>())</p>
                    <p className="pl-12"><span className="text-gray-500">arr = </span><span className="text-blue-300">list</span>(<span className="text-blue-300">map</span>(<span className="text-blue-300">int</span>, <span className="text-blue-300">input</span>().split()))</p>
                    <p className="mt-2 pl-12 text-gray-500"># Write your solution here</p>
                    <p className="pl-12"><span className="text-blue-300">print</span>(result)</p>
                    <p className="mt-4 text-gray-600"># --- Do not modify below ---</p>
                    <p><span className="text-yellow-300">Solution</span>().solve()</p>
                    <div className="mt-6 pt-3 border-t border-gray-700">
                      <p className="text-gray-500">Test Results</p>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-emerald-500/40" />
                        <span>Test Case 1: Passed</span>
                      </div>
                      <div className="mt-1 flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-emerald-500/40" />
                        <span>Test Case 2: Passed</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lock overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-950/40 backdrop-blur-xs z-10">
                  <div className="text-center max-w-sm px-6">
                    <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto mb-4">
                      <Lock className="w-6 h-6 text-amber-500" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {user ? "Upgrade to Premium" : "Sign in to continue"}
                    </h3>
                    <p className="text-sm text-gray-400 mb-5 leading-relaxed">
                      {user
                        ? "Run code, test your solutions against test cases, and track your submission history."
                        : "Sign in and upgrade to Premium to access the built-in code editor."}
                    </p>
                    <div className="flex flex-col gap-2">
                      {user ? (
                        <Link
                          to="/student/checkout"
                          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded-xl transition-colors"
                        >
                          <Crown className="w-4 h-4" /> Upgrade Now
                        </Link>
                      ) : (
                        <Link
                          to="/login"
                          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-colors"
                        >
                          Sign In
                        </Link>
                      )}
                    </div>
                    <div className="mt-4 flex items-center justify-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1"><Code2 className="w-3 h-3" /> Python, C++, Java</span>
                      <span className="flex items-center gap-1"><Terminal className="w-3 h-3" /> 50 runs/day</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function ExtLink({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium border border-gray-200 dark:border-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 text-gray-500 dark:text-gray-400 transition-colors">
      <ExternalLink className="w-3 h-3" /> {label}
    </a>
  );
}

function cleanHint(html: string): string {
  return html
    .replace(/<div[^>]*>/gi, "")
    .replace(/<\/div>/gi, "")
    .replace(/<code>/gi, "<code class='px-1.5 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-sm font-mono'>");
}

function formatDescription(md: string): string {
  return md
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/`(.*?)`/g, "<code class='px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-sm font-mono'>$1</code>")
    .replace(/_([^_]+)_/g, "<em>$1</em>")
    .replace(/\n/g, "<br />");
}
