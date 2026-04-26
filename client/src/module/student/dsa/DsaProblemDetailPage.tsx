import { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import {
  ExternalLink, CheckCircle2, Circle,
  Bookmark, BookmarkCheck, ChevronDown,
  Building2, BarChart3, Lightbulb, StickyNote, Link2, ArrowUpRight,
  History, Terminal, Lock, Crown, Code2,
} from "lucide-react";
import toast from "@/components/ui/toast";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { DsaProblemDetail, DsaLanguage, DsaExecutionResult, DsaSubmissionSummary } from "../../../lib/types";
import { useAuthStore } from "../../../lib/auth.store";
import { SEO } from "../../../components/SEO";
import { canonicalUrl, SITE_URL } from "../../../lib/seo.utils";
import { breadcrumbSchema } from "../../../lib/structured-data";
import { LoadingScreen } from "../../../components/LoadingScreen";
import { DsaCodeEditor } from "./components/DsaCodeEditor";
import { DsaTestResults } from "./components/DsaTestResults";
import { DsaSubmissionHistory } from "./components/DsaSubmissionHistory";
import { DsaConsoleOutput } from "./components/DsaConsoleOutput";

const DIFF_STYLE: Record<string, string> = {
  Easy:   "text-green-700 dark:text-green-400 border-green-300 dark:border-green-900/60",
  Medium: "text-amber-700 dark:text-amber-400 border-amber-300 dark:border-amber-900/60",
  Hard:   "text-red-700 dark:text-red-400 border-red-300 dark:border-red-900/60",
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

function MetaChip({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider border rounded-md ${className || "text-stone-600 dark:text-stone-400 border-stone-200 dark:border-white/10"}`}>
      {children}
    </span>
  );
}

function SectionLabel({ dot = "bg-lime-400", children }: { dot?: string; children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
      <span className={`h-1 w-1 ${dot}`} />
      {children}
    </div>
  );
}

export default function DsaProblemDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { user } = useAuthStore();
  const queryClient = useQueryClient();

  const isPremium =
    (user?.subscriptionPlan === "MONTHLY" || user?.subscriptionPlan === "YEARLY") &&
    user?.subscriptionStatus === "ACTIVE";

  const [showAllCompanies, setShowAllCompanies] = useState(false);
  const [expandedHint, setExpandedHint] = useState<number | null>(null);
  const [showNotes, setShowNotes] = useState(false);
  const [noteValue, setNoteValue] = useState("");

  const [activeTab, setActiveTab] = useState<"problem" | "code">("problem");
  const [rightTab, setRightTab] = useState<"results" | "history" | "output">("results");
  const [language, setLanguage] = useState<DsaLanguage>("python");
  const [codeMap, setCodeMap] = useState<Record<DsaLanguage, string>>({
    python: DEFAULT_CODE.python,
    cpp: DEFAULT_CODE.cpp,
    java: DEFAULT_CODE.java,
  });

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
  if (!problem) {
    return (
      <div className="relative max-w-4xl mx-auto py-20 text-center">
        <p className="text-sm text-stone-600 dark:text-stone-400">Problem not found.</p>
        <Link
          to="/learn/dsa"
          className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono uppercase tracking-widest text-stone-900 dark:text-stone-50 border border-stone-300 dark:border-white/15 rounded-md hover:bg-lime-400 hover:border-lime-400 hover:text-stone-900 transition-colors no-underline"
        >
          back to dsa <ArrowUpRight className="w-3 h-3" />
        </Link>
      </div>
    );
  }

  const visibleCompanies = showAllCompanies ? problem.companies : problem.companies.slice(0, 20);

  return (
    <>
      <SEO
        title={`${problem.title} - DSA Practice`}
        description={problem.description?.slice(0, 160)}
        canonicalUrl={canonicalUrl(`/learn/dsa/problem/${problem.slug || problem.id}`)}
        structuredData={[
          breadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Learn", url: `${SITE_URL}/learn` },
            { name: "DSA", url: `${SITE_URL}/learn/dsa` },
            { name: problem.title, url: `${SITE_URL}/learn/dsa/problem/${problem.slug || problem.id}` },
          ]),
        ]}
      />

      <div className="h-[calc(100vh-64px)] flex flex-col text-stone-900 dark:text-stone-50 bg-white dark:bg-stone-950">
        {/* ── Top bar ── */}
        <div className="flex flex-wrap items-center gap-3 px-4 py-3 border-b border-stone-200 dark:border-white/10 shrink-0">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <MetaChip className={DIFF_STYLE[problem.difficulty]}>{problem.difficulty}</MetaChip>
            <div className="min-w-0">
              <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
                <span className="h-1 w-1 bg-lime-400" />
                learn / dsa / problem
              </div>
              <h1 className="mt-0.5 text-sm sm:text-base font-bold tracking-tight text-stone-900 dark:text-stone-50 truncate">
                {problem.leetcodeId && (
                  <span className="text-stone-400 dark:text-stone-600 font-mono mr-1.5 tabular-nums">
                    #{problem.leetcodeId}
                  </span>
                )}
                {problem.title}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-1 shrink-0">
            {user && (
              <>
                <button
                  onClick={() => toggleMutation.mutate(problem.id)}
                  title={problem.solved ? "Mark unsolved" : "Mark solved"}
                  className={`w-9 h-9 inline-flex items-center justify-center border rounded-md transition-colors ${
                    problem.solved
                      ? "text-lime-600 dark:text-lime-400 border-lime-300 dark:border-lime-900/60 bg-lime-50 dark:bg-lime-900/10"
                      : "text-stone-500 border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30"
                  }`}
                >
                  {problem.solved ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => bookmarkMutation.mutate(problem.id)}
                  title={problem.bookmarked ? "Remove bookmark" : "Bookmark"}
                  className={`w-9 h-9 inline-flex items-center justify-center border rounded-md transition-colors ${
                    problem.bookmarked
                      ? "text-stone-900 dark:text-stone-50 border-stone-900 dark:border-stone-50"
                      : "text-stone-500 border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30"
                  }`}
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
                className="ml-1 inline-flex items-center gap-1.5 px-3 py-2 border border-stone-300 dark:border-white/15 rounded-md text-[10px] font-mono uppercase tracking-widest text-stone-900 dark:text-stone-50 hover:bg-lime-400 hover:border-lime-400 hover:text-stone-900 transition-colors no-underline"
              >
                <ExternalLink className="w-3 h-3" /> leetcode
              </a>
            )}
          </div>
        </div>

        {/* ── Mobile tab bar ── */}
        <div className="lg:hidden flex border-b border-stone-200 dark:border-white/10 shrink-0">
          {(["problem", "code"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 relative py-3 text-[10px] font-mono uppercase tracking-widest transition-colors ${
                activeTab === tab
                  ? "text-stone-900 dark:text-stone-50"
                  : "text-stone-500 hover:text-stone-900 dark:hover:text-stone-50"
              }`}
            >
              {tab}
              {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-lime-400" />}
            </button>
          ))}
        </div>

        {/* ── Split pane ── */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-[45fr_55fr] min-h-0">
          {/* LEFT: Problem details */}
          <div
            className={`overflow-y-auto border-r border-stone-200 dark:border-white/10 ${
              activeTab !== "problem" ? "hidden lg:block" : ""
            }`}
          >
            <div className="p-5 space-y-5">
              {/* Stats row */}
              {(problem.acceptanceRate || problem.totalSubmissions) && (
                <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-stone-500 tabular-nums">
                  {problem.acceptanceRate && (
                    <span className="inline-flex items-center gap-1.5">
                      <BarChart3 className="w-3 h-3" /> {problem.acceptanceRate} acceptance
                    </span>
                  )}
                  {problem.totalSubmissions && (
                    <span>
                      {(problem.totalAccepted ?? 0).toLocaleString()} / {problem.totalSubmissions.toLocaleString()}
                    </span>
                  )}
                </div>
              )}

              {/* Tags */}
              {problem.tags.length > 0 && (
                <div>
                  <SectionLabel>tags</SectionLabel>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {problem.tags.map((t) => (
                      <Link
                        key={t}
                        to={`/learn/dsa/${t}`}
                        className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider border border-stone-200 dark:border-white/10 rounded-md text-stone-600 dark:text-stone-400 hover:border-stone-400 dark:hover:border-white/30 hover:text-stone-900 dark:hover:text-stone-50 transition-colors no-underline"
                      >
                        {t.replace(/-/g, " ")}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Companies */}
              {problem.companies.length > 0 && (
                <div>
                  <SectionLabel>
                    <Building2 className="w-3 h-3" /> asked by {problem.companies.length}{" "}
                    {problem.companies.length === 1 ? "company" : "companies"}
                  </SectionLabel>
                  <div className="mt-2 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-3">
                    <div className="flex flex-wrap gap-1.5">
                      {visibleCompanies.map((c) => (
                        <MetaChip key={c}>{c.replace(/-/g, " ")}</MetaChip>
                      ))}
                      {problem.companies.length > 20 && (
                        <button
                          onClick={() => setShowAllCompanies(!showAllCompanies)}
                          className="inline-flex items-center px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-stone-900 dark:text-stone-50 border border-stone-300 dark:border-white/15 rounded-md hover:border-stone-900 dark:hover:border-stone-50 transition-colors"
                        >
                          {showAllCompanies ? "less" : `+${problem.companies.length - 20}`}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Description */}
              {problem.description && !problem.isPremium && (
                <div>
                  <SectionLabel>description</SectionLabel>
                  <div className="mt-2 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-4">
                    <div
                      className="prose dark:prose-invert max-w-none text-sm text-stone-700 dark:text-stone-300 leading-relaxed whitespace-pre-wrap"
                      dangerouslySetInnerHTML={{ __html: formatDescription(problem.description) }}
                    />
                  </div>
                </div>
              )}

              {problem.isPremium && (
                <div className="bg-white dark:bg-stone-900 border border-amber-300 dark:border-amber-900/60 rounded-md p-4 text-center">
                  <p className="text-sm font-bold text-amber-700 dark:text-amber-400">LeetCode Premium problem</p>
                  <p className="text-xs text-stone-500 mt-1">Visit LeetCode to view the full description.</p>
                </div>
              )}

              {/* Constraints */}
              {problem.constraints && (
                <div>
                  <SectionLabel>constraints</SectionLabel>
                  <div className="mt-2 bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-4">
                    <div
                      className="text-sm text-stone-700 dark:text-stone-300 whitespace-pre-wrap leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: formatDescription(problem.constraints) }}
                    />
                  </div>
                </div>
              )}

              {/* Hints */}
              {problem.hints.length > 0 && (
                <div>
                  <SectionLabel dot="bg-amber-400">
                    <Lightbulb className="w-3 h-3 text-amber-500" /> {problem.hints.length}{" "}
                    {problem.hints.length === 1 ? "hint" : "hints"}
                  </SectionLabel>
                  <div className="mt-2 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md divide-y divide-stone-100 dark:divide-white/5 overflow-hidden">
                    {problem.hints.map((hint, i) => (
                      <div key={i}>
                        <button
                          onClick={() => setExpandedHint(expandedHint === i ? null : i)}
                          className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left hover:bg-stone-50 dark:hover:bg-stone-800/40 transition-colors"
                        >
                          <span className="inline-flex items-center gap-3">
                            <span className="text-[10px] font-mono font-bold tabular-nums text-amber-600 dark:text-amber-400">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="text-[11px] font-mono uppercase tracking-widest text-stone-600 dark:text-stone-400">
                              hint {i + 1}
                            </span>
                          </span>
                          <ChevronDown
                            className={`w-3.5 h-3.5 text-stone-400 transition-transform duration-200 ${
                              expandedHint === i ? "rotate-180" : ""
                            }`}
                          />
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
                                className="px-4 pb-4 pl-11 text-sm text-stone-700 dark:text-stone-300 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: cleanHint(hint) }}
                              />
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
                <div>
                  <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden">
                    <button
                      onClick={() => {
                        setShowNotes(!showNotes);
                        if (!showNotes) setNoteValue(problem.notes ?? "");
                      }}
                      className="w-full flex items-center justify-between gap-3 px-4 py-3 hover:bg-stone-50 dark:hover:bg-stone-800/40 transition-colors"
                    >
                      <span className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-stone-600 dark:text-stone-400">
                        <StickyNote className="w-3 h-3 text-stone-500" /> my notes
                        {problem.notes && !showNotes && <span className="h-1 w-1 bg-lime-400" />}
                      </span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-stone-400 transition-transform duration-200 ${
                          showNotes ? "rotate-180" : ""
                        }`}
                      />
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
                          <div className="px-4 pb-4">
                            <textarea
                              value={noteValue}
                              onChange={(e) => setNoteValue(e.target.value)}
                              className="w-full h-28 p-3 border border-stone-200 dark:border-white/10 rounded-md bg-white dark:bg-stone-950 text-sm text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600 resize-none focus:outline-none focus:border-lime-400 transition-colors"
                              placeholder="Write your approach, key observations..."
                            />
                            <div className="flex justify-end mt-2">
                              <button
                                onClick={() => notesMutation.mutate({ problemId: problem.id, notes: noteValue })}
                                disabled={notesMutation.isPending}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest bg-stone-900 dark:bg-stone-50 border border-stone-900 dark:border-stone-50 text-stone-50 dark:text-stone-900 rounded-md hover:bg-lime-400 hover:border-lime-400 hover:text-stone-900 dark:hover:text-stone-900 transition-colors disabled:opacity-50"
                              >
                                {notesMutation.isPending ? "saving" : "save"}
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              )}

              {/* Similar questions */}
              {problem.similarQuestions && problem.similarQuestions.length > 0 && (
                <div>
                  <SectionLabel>similar questions</SectionLabel>
                  <div className="mt-2 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md divide-y divide-stone-100 dark:divide-white/5 overflow-hidden">
                    {problem.similarQuestions.slice(0, 8).map((sq) => (
                      <Link
                        key={sq.slug}
                        to={`/learn/dsa/problem/${sq.slug}`}
                        className="group flex items-center justify-between gap-3 px-4 py-3 hover:bg-stone-50 dark:hover:bg-stone-800/40 transition-colors no-underline"
                      >
                        <span className="text-sm text-stone-700 dark:text-stone-300 group-hover:text-lime-700 dark:group-hover:text-lime-400 transition-colors truncate">
                          {sq.title}
                        </span>
                        <div className="flex items-center gap-2 shrink-0">
                          <MetaChip className={DIFF_STYLE[sq.difficulty]}>{sq.difficulty}</MetaChip>
                          <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-lime-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* External links */}
              {(problem.gfgUrl || problem.hackerrankUrl || problem.codechefUrl || problem.articleUrl || problem.videoUrl) && (
                <div>
                  <SectionLabel>
                    <Link2 className="w-3 h-3" /> practice elsewhere
                  </SectionLabel>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {problem.gfgUrl && <ExtLink href={problem.gfgUrl} label="gfg" />}
                    {problem.hackerrankUrl && <ExtLink href={problem.hackerrankUrl} label="hackerrank" />}
                    {problem.codechefUrl && <ExtLink href={problem.codechefUrl} label="codechef" />}
                    {problem.articleUrl && <ExtLink href={problem.articleUrl} label="article" />}
                    {problem.videoUrl && <ExtLink href={problem.videoUrl} label="video" />}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ── RIGHT: Code editor + results ── */}
          <div
            className={`flex flex-col min-h-0 bg-stone-50 dark:bg-stone-900/50 ${
              activeTab !== "code" ? "hidden lg:flex" : "flex"
            }`}
          >
            {isPremium ? (
              <>
                {/* Editor */}
                <div className="h-[55%] min-h-0 border-b border-stone-200 dark:border-white/10">
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
                  <div className="flex items-center border-b border-stone-200 dark:border-white/10 bg-white dark:bg-stone-950 shrink-0">
                    {([
                      { key: "results" as const, label: "test results", icon: null },
                      { key: "output" as const, label: "output", icon: Terminal },
                      { key: "history" as const, label: "history", icon: History },
                    ]).map(({ key, label, icon: Icon }) => (
                      <button
                        key={key}
                        onClick={() => setRightTab(key)}
                        className={`relative inline-flex items-center gap-1.5 px-4 py-2.5 text-[10px] font-mono uppercase tracking-widest transition-colors ${
                          rightTab === key
                            ? "text-stone-900 dark:text-stone-50"
                            : "text-stone-500 hover:text-stone-900 dark:hover:text-stone-50"
                        }`}
                      >
                        {Icon && <Icon className="w-3 h-3" />}
                        {label}
                        {key === "history" && submissions && submissions.length > 0 && (
                          <span className="text-[10px] font-mono tabular-nums bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 px-1.5 rounded-sm">
                            {submissions.length}
                          </span>
                        )}
                        {rightTab === key && (
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-lime-400" />
                        )}
                      </button>
                    ))}
                  </div>

                  <div className="flex-1 overflow-y-auto bg-white dark:bg-stone-950">
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
                <div className="absolute inset-0 blur-sm opacity-60 pointer-events-none select-none">
                  <div className="h-full bg-stone-950 p-4 font-mono text-xs leading-relaxed text-stone-400">
                    <div className="flex items-center gap-2 mb-3 pb-2 border-b border-stone-800">
                      <span className="px-2 py-1 bg-stone-800 rounded-md text-stone-300 text-xs">Python 3</span>
                      <span className="ml-auto px-3 py-1 bg-lime-400 rounded-md text-stone-950 text-xs font-bold">Run</span>
                    </div>
                    <p><span className="text-purple-400">import</span> sys</p>
                    <p><span className="text-purple-400">from</span> typing <span className="text-purple-400">import</span> List</p>
                    <p className="mt-2"><span className="text-blue-400">class</span> <span className="text-yellow-300">Solution</span>:</p>
                    <p className="pl-6"><span className="text-blue-400">def</span> <span className="text-lime-300">solve</span>(self):</p>
                    <p className="pl-12 text-stone-500"># Read input from stdin</p>
                    <p className="pl-12"><span className="text-stone-500">n = </span><span className="text-blue-300">int</span>(<span className="text-blue-300">input</span>())</p>
                    <p className="pl-12"><span className="text-stone-500">arr = </span><span className="text-blue-300">list</span>(<span className="text-blue-300">map</span>(<span className="text-blue-300">int</span>, <span className="text-blue-300">input</span>().split()))</p>
                    <p className="mt-2 pl-12 text-stone-500"># Write your solution here</p>
                    <p className="pl-12"><span className="text-blue-300">print</span>(result)</p>
                    <p className="mt-4 text-stone-600"># --- Do not modify below ---</p>
                    <p><span className="text-yellow-300">Solution</span>().solve()</p>
                    <div className="mt-6 pt-3 border-t border-stone-800">
                      <p className="text-stone-500">Test Results</p>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="h-2 w-2 bg-lime-500/60" />
                        <span>Test Case 1: Passed</span>
                      </div>
                      <div className="mt-1 flex items-center gap-2">
                        <span className="h-2 w-2 bg-lime-500/60" />
                        <span>Test Case 2: Passed</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lock overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-stone-950/50 backdrop-blur-xs z-10">
                  <div className="text-center max-w-sm px-6 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-6">
                    <div className="w-12 h-12 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center mx-auto mb-4">
                      <Lock className="w-5 h-5 text-amber-500" />
                    </div>
                    <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">
                      <span className="h-1 w-1 bg-lime-400" />
                      {user ? "premium required" : "sign in required"}
                    </div>
                    <h3 className="text-xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-2">
                      {user ? "Upgrade to run code." : "Sign in to continue."}
                    </h3>
                    <p className="text-sm text-stone-600 dark:text-stone-400 mb-5 leading-relaxed">
                      {user
                        ? "Run code, test solutions against test cases, and track your submission history."
                        : "Sign in and upgrade to Premium to access the built-in code editor."}
                    </p>
                    {user ? (
                      <Link
                        to="/student/checkout"
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-stone-900 dark:bg-stone-50 border border-stone-900 dark:border-stone-50 text-stone-50 dark:text-stone-900 rounded-md text-xs font-mono uppercase tracking-widest hover:bg-lime-400 hover:border-lime-400 hover:text-stone-900 dark:hover:text-stone-900 transition-colors no-underline"
                      >
                        <Crown className="w-3.5 h-3.5" /> upgrade now
                      </Link>
                    ) : (
                      <Link
                        to="/login"
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-stone-900 dark:bg-stone-50 border border-stone-900 dark:border-stone-50 text-stone-50 dark:text-stone-900 rounded-md text-xs font-mono uppercase tracking-widest hover:bg-lime-400 hover:border-lime-400 hover:text-stone-900 dark:hover:text-stone-900 transition-colors no-underline"
                      >
                        sign in
                      </Link>
                    )}
                    <div className="mt-4 flex items-center justify-center gap-4 text-[10px] font-mono uppercase tracking-widest text-stone-500">
                      <span className="inline-flex items-center gap-1.5">
                        <Code2 className="w-3 h-3" /> python / cpp / java
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Terminal className="w-3 h-3" /> 50 runs/day
                      </span>
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
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider border border-stone-200 dark:border-white/10 rounded-md text-stone-600 dark:text-stone-400 hover:border-stone-400 dark:hover:border-white/30 hover:text-stone-900 dark:hover:text-stone-50 transition-colors no-underline"
    >
      <ExternalLink className="w-3 h-3" /> {label}
    </a>
  );
}

function cleanHint(html: string): string {
  return html
    .replace(/<div[^>]*>/gi, "")
    .replace(/<\/div>/gi, "")
    .replace(/<code>/gi, "<code class='px-1.5 py-0.5 bg-stone-100 dark:bg-stone-800 rounded-sm text-sm font-mono'>");
}

function formatDescription(md: string): string {
  return md
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/`(.*?)`/g, "<code class='px-1.5 py-0.5 bg-stone-100 dark:bg-stone-800 rounded-sm text-sm font-mono'>$1</code>")
    .replace(/_([^_]+)_/g, "<em>$1</em>")
    .replace(/\n/g, "<br />");
}
