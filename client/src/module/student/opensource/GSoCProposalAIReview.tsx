import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  ChevronDown,
  ChevronUp,
  Loader2,
  CheckCircle2,
  AlertTriangle,
  Clock,
  User,
  Building2,
  AlignLeft,
  Trophy,
  BarChart3,
  Lightbulb,
  Lock,
  RefreshCw,
} from "lucide-react";
import { Button } from "../../../components/ui/button";
import {
  reviewGSoCProposal,
  type GsocReviewResult,
  type GsocReviewUsage,
} from "./api/opensource.api";

// ── Types ─────────────────────────────────────────────────────────────────────

type TabKey = "all" | "timeline" | "deliverables" | "aboutMe" | "orgAlignment";

const TABS: { key: TabKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "timeline", label: "Timeline" },
  { key: "deliverables", label: "Deliverables" },
  { key: "aboutMe", label: "About Me" },
  { key: "orgAlignment", label: "Org Fit" },
];

const CATEGORY_TO_TAB: Record<string, TabKey> = {
  "Timeline Clarity": "timeline",
  "Deliverables": "deliverables",
  "About Me": "aboutMe",
  "Organization Alignment": "orgAlignment",
  "Structure & Length": "all",
};

// ── Score helpers ─────────────────────────────────────────────────────────────

function scoreColor(score: number): string {
  if (score >= 8) return "text-emerald-600 dark:text-emerald-400";
  if (score >= 5) return "text-amber-600 dark:text-amber-400";
  return "text-red-600 dark:text-red-400";
}

function scoreBg(score: number): string {
  if (score >= 8) return "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800";
  if (score >= 5) return "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800";
  return "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800";
}

function ScoreRing({ score, label }: { score: number; label: string }) {
  const pct = (score / 10) * 100;
  const color = score >= 8 ? "#10b981" : score >= 5 ? "#f59e0b" : "#ef4444";
  const r = 26;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;

  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="relative w-16 h-16">
        <svg className="rotate-[-90deg]" viewBox="0 0 64 64" width="64" height="64">
          <circle cx="32" cy="32" r={r} fill="none" stroke="currentColor" strokeWidth="5" className="text-stone-100 dark:text-stone-800" />
          <circle
            cx="32" cy="32" r={r}
            fill="none"
            stroke={color}
            strokeWidth="5"
            strokeDasharray={`${dash} ${circ}`}
            strokeLinecap="round"
            style={{ transition: "stroke-dasharray 0.6s ease" }}
          />
        </svg>
        <span className={`absolute inset-0 flex items-center justify-center text-lg font-bold ${scoreColor(score)}`}>
          {score}
        </span>
      </div>
      <span className="text-[10px] font-medium text-stone-500 dark:text-stone-400 text-center leading-tight max-w-14">{label}</span>
    </div>
  );
}

// ── Skeleton ──────────────────────────────────────────────────────────────────

function ReviewSkeleton() {
  return (
    <div className="space-y-5 animate-pulse">
      <div className="flex gap-4 justify-center">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-stone-200 dark:bg-stone-700" />
            <div className="w-14 h-3 rounded bg-stone-200 dark:bg-stone-700" />
          </div>
        ))}
      </div>
      {[...Array(3)].map((_, i) => (
        <div key={i} className="rounded-md border border-stone-200 dark:border-stone-700 p-4 space-y-2">
          <div className="w-32 h-4 rounded bg-stone-200 dark:bg-stone-700" />
          <div className="w-full h-3 rounded bg-stone-200 dark:bg-stone-700" />
          <div className="w-4/5 h-3 rounded bg-stone-200 dark:bg-stone-700" />
        </div>
      ))}
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function GSoCProposalAIReview() {
  const [isOpen, setIsOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [targetOrg, setTargetOrg] = useState("");
  const [targetStack, setTargetStack] = useState("");
  const [activeTab, setActiveTab] = useState<TabKey>("all");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GsocReviewResult | null>(null);
  const [usage, setUsage] = useState<GsocReviewUsage | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPremiumGated, setIsPremiumGated] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const MAX_CHARS = 8000;
  const charCount = draft.length;
  const charPct = charCount / MAX_CHARS;

  async function handleReview() {
    if (draft.trim().length < 50) return;
    setLoading(true);
    setError(null);
    setResult(null);
    setIsPremiumGated(false);

    try {
      const resp = await reviewGSoCProposal({
        draft: draft.trim(),
        targetOrg: targetOrg.trim() || undefined,
        targetStack: targetStack.trim() || undefined,
      });
      setResult(resp.review);
      if (resp.usage) setUsage(resp.usage);
      setActiveTab("all");
    } catch (err: unknown) {
      const e = err as { response?: { status?: number; data?: { message?: string } } };
      if (e?.response?.status === 429) {
        setIsPremiumGated(true);
      } else if (e?.response?.status === 403) {
        setIsPremiumGated(true);
      } else {
        setError(e?.response?.data?.message ?? "Review failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }

  function handleReset() {
    setResult(null);
    setError(null);
    setIsPremiumGated(false);
    setActiveTab("all");
    setTimeout(() => textareaRef.current?.focus(), 100);
  }

  // Filter suggestions by active tab
  const visibleSuggestions = result?.suggestions.filter((s) => {
    if (activeTab === "all") return true;
    return CATEGORY_TO_TAB[s.category] === activeTab;
  }) ?? [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="mt-8"
    >
      {/* Collapsible header */}
      <button
        id="gsoc-ai-review-toggle"
        onClick={() => setIsOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-3 bg-white dark:bg-stone-900 rounded-md border border-stone-100 dark:border-stone-800 px-5 py-4 hover:border-stone-200 dark:hover:border-stone-700 hover:shadow-lg transition-all duration-300 group"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-md bg-lime-400 flex items-center justify-center shrink-0">
            <Bot className="w-4 h-4 text-white" />
          </div>
          <div className="text-left">
            <p className="text-sm font-bold text-stone-950 dark:text-white">AI Proposal Reviewer</p>
            <p className="text-xs text-stone-400 dark:text-stone-500">
              Paste your draft · get section scores + targeted suggestions
            </p>
          </div>
          {usage && (
            <span className="ml-2 text-[10px] font-semibold px-2 py-0.5 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400">
              {usage.used}/{usage.limit} used
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-lime-100 dark:bg-lime-900/30 text-lime-600 dark:text-lime-400">
            FREE · 3/mo
          </span>
          {isOpen ? (
            <ChevronUp className="w-4 h-4 text-stone-400 dark:text-stone-500 group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors" />
          ) : (
            <ChevronDown className="w-4 h-4 text-stone-400 dark:text-stone-500 group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors" />
          )}
        </div>
      </button>

      {/* Expanded panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="review-panel"
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 12 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="bg-white dark:bg-stone-900 rounded-md border border-stone-100 dark:border-stone-800 overflow-hidden">

              {/* Input section */}
              {!result && !loading && !isPremiumGated && (
                <div className="p-5 space-y-4">
                  {/* Context fields */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="gsoc-target-org" className="block text-xs font-semibold text-stone-500 dark:text-stone-400 mb-1.5">
                        Target Organization <span className="font-normal text-stone-400">(optional)</span>
                      </label>
                      <input
                        id="gsoc-target-org"
                        type="text"
                        value={targetOrg}
                        onChange={(e) => setTargetOrg(e.target.value)}
                        placeholder="e.g. Python Software Foundation"
                        maxLength={200}
                        className="w-full text-sm px-3 py-2 rounded-md border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white placeholder-stone-400 dark:placeholder-stone-500 focus:outline-none focus:border-lime-400 dark:focus:border-lime-600 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="gsoc-target-stack" className="block text-xs font-semibold text-stone-500 dark:text-stone-400 mb-1.5">
                        Target Tech Stack <span className="font-normal text-stone-400">(optional)</span>
                      </label>
                      <input
                        id="gsoc-target-stack"
                        type="text"
                        value={targetStack}
                        onChange={(e) => setTargetStack(e.target.value)}
                        placeholder="e.g. Python, Django, NumPy"
                        maxLength={200}
                        className="w-full text-sm px-3 py-2 rounded-md border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white placeholder-stone-400 dark:placeholder-stone-500 focus:outline-none focus:border-lime-400 dark:focus:border-lime-600 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Draft textarea */}
                  <div>
                    <label htmlFor="gsoc-draft-input" className="block text-xs font-semibold text-stone-500 dark:text-stone-400 mb-1.5">
                      Paste your proposal section or full draft
                    </label>
                    <textarea
                      id="gsoc-draft-input"
                      ref={textareaRef}
                      value={draft}
                      onChange={(e) => setDraft(e.target.value.slice(0, MAX_CHARS))}
                      rows={8}
                      placeholder={`Paste your GSoC proposal draft here...\n\nFor best results, include:\n• Your timeline / milestone section\n• Deliverables with acceptance criteria\n• About me / past contributions\n• Why this org / project`}
                      className="w-full text-sm px-4 py-3 rounded-md border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white placeholder-stone-400 dark:placeholder-stone-500 focus:outline-none focus:border-lime-400 dark:focus:border-lime-600 transition-colors resize-none font-mono leading-relaxed"
                    />
                    <div className="flex items-center justify-between mt-1.5 px-0.5">
                      <span className="text-[10px] text-stone-400 dark:text-stone-500">Min 50 chars · evaluates timeline, deliverables, about me, org fit</span>
                      <span className={`text-[10px] font-mono ${charPct > 0.9 ? "text-red-500" : "text-stone-400 dark:text-stone-500"}`}>
                        {charCount.toLocaleString()} / {MAX_CHARS.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {error && (
                    <div className="flex items-center gap-2 p-3 rounded-md bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                      <AlertTriangle className="w-4 h-4 text-red-500 shrink-0" />
                      <p className="text-sm text-red-700 dark:text-red-300">{error}</p>
                    </div>
                  )}

                  <Button
                    id="gsoc-review-submit"
                    variant="primary"
                    size="md"
                    onClick={handleReview}
                    disabled={draft.trim().length < 50}
                    className="w-full"
                  >
                    <Bot className="w-4 h-4" />
                    Analyse My Draft
                  </Button>
                </div>
              )}

              {/* Loading state */}
              {loading && (
                <div className="p-5 space-y-4">
                  <div className="flex items-center gap-3 py-3">
                    <Loader2 className="w-5 h-5 text-lime-500 animate-spin" />
                    <div>
                      <p className="text-sm font-semibold text-stone-900 dark:text-white">Analysing your proposal…</p>
                      <p className="text-xs text-stone-400 dark:text-stone-500">Gemini is scoring 5 dimensions</p>
                    </div>
                  </div>
                  <ReviewSkeleton />
                </div>
              )}

              {/* Premium gate */}
              {isPremiumGated && !loading && (
                <div className="p-8 flex flex-col items-center text-center gap-4">
                  <div className="w-14 h-14 rounded-md bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                    <Lock className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-stone-950 dark:text-white mb-1">Monthly limit reached</p>
                    <p className="text-sm text-stone-500 dark:text-stone-400 max-w-xs">
                      Free accounts get 3 AI reviews per month. Upgrade to Premium for unlimited reviews.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="primary" size="sm" asChild>
                      <a href="/student/checkout">Upgrade to Premium</a>
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => setIsPremiumGated(false)}>
                      Back
                    </Button>
                  </div>
                </div>
              )}

              {/* Results */}
              {result && !loading && (
                <div className="divide-y divide-stone-100 dark:divide-stone-800">

                  {/* Score header */}
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-sm font-bold text-stone-950 dark:text-white">Proposal Score</p>
                        <p className="text-xs text-stone-400 dark:text-stone-500">Based on 5 evaluation dimensions</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-sm font-bold ${scoreBg(result.overallScore)}`}>
                          <BarChart3 className={`w-3.5 h-3.5 ${scoreColor(result.overallScore)}`} />
                          <span className={scoreColor(result.overallScore)}>{result.overallScore}/10</span>
                        </div>
                        <Button variant="ghost" mode="icon" aria-label="New review" size="sm" onClick={handleReset} title="New review">
                          <RefreshCw className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Score rings */}
                    <div className="flex items-end justify-around gap-2 flex-wrap">
                      <ScoreRing score={result.scores.timelineClarity.score} label="Timeline" />
                      <ScoreRing score={result.scores.deliverables.score} label="Deliverables" />
                      <ScoreRing score={result.scores.aboutMe.score} label="About Me" />
                      <ScoreRing score={result.scores.orgAlignment.score} label="Org Fit" />
                      <ScoreRing score={result.scores.structureLength.score} label="Structure" />
                    </div>

                    {result.fallbackUsed && (
                      <div className="mt-3 flex items-center gap-2 p-2.5 rounded-md bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <p className="text-xs text-amber-700 dark:text-amber-300">Scores estimated from static analysis, AI review unavailable</p>
                      </div>
                    )}
                  </div>

                  {/* Tab bar */}
                  <div className="px-5 py-3">
                    <div className="flex gap-1 flex-wrap">
                      {TABS.map((tab) => (
                        <button
                          key={tab.key}
                          id={`gsoc-review-tab-${tab.key}`}
                          onClick={() => setActiveTab(tab.key)}
                          className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-all ${
                            activeTab === tab.key
                              ? "bg-lime-100 dark:bg-lime-900/30 text-lime-700 dark:text-lime-300"
                              : "text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800"
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Score detail labels */}
                  {activeTab === "all" && (
                    <div className="px-5 py-4 space-y-2.5">
                      {(
                        [
                          { key: "timelineClarity", icon: Clock, label: "Timeline Clarity" },
                          { key: "deliverables",    icon: CheckCircle2, label: "Deliverables" },
                          { key: "aboutMe",         icon: User, label: "About Me" },
                          { key: "orgAlignment",    icon: Building2, label: "Organization Fit" },
                          { key: "structureLength", icon: AlignLeft, label: "Structure & Length" },
                        ] as const
                      ).map(({ key, icon: Icon, label }) => {
                        const dim = result.scores[key];
                        return (
                          <div key={key} className={`flex items-center gap-3 px-3.5 py-2.5 rounded-md border ${scoreBg(dim.score)}`}>
                            <Icon className={`w-4 h-4 shrink-0 ${scoreColor(dim.score)}`} />
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-semibold text-stone-700 dark:text-stone-300">{label}</p>
                              <p className="text-xs text-stone-500 dark:text-stone-400 truncate">{dim.label}</p>
                            </div>
                            <span className={`text-sm font-bold shrink-0 ${scoreColor(dim.score)}`}>{dim.score}/10</span>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Suggestions */}
                  {visibleSuggestions.length > 0 && (
                    <div className="px-5 py-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Lightbulb className="w-4 h-4 text-stone-400 dark:text-stone-500" />
                        <p className="text-xs font-bold text-stone-700 dark:text-stone-300 uppercase tracking-wider">
                          Improvement Suggestions
                        </p>
                      </div>
                      <div className="space-y-3">
                        {visibleSuggestions.map((s, i) => (
                          <div key={i} className="rounded-md border border-stone-200 dark:border-stone-700 overflow-hidden">
                            <div className="flex items-center gap-2 px-4 py-2.5 bg-stone-50 dark:bg-stone-800/60">
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400">
                                {s.category}
                              </span>
                            </div>
                            <div className="p-4 space-y-3">
                              <div>
                                <p className="text-xs font-semibold text-red-600 dark:text-red-400 mb-1">⚠ Issue</p>
                                <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">{s.critique}</p>
                              </div>
                              <div className="border-t border-stone-100 dark:border-stone-700 pt-3">
                                <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-1">✓ Example Fix</p>
                                <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed whitespace-pre-wrap font-mono text-xs">{s.fix}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab !== "all" && visibleSuggestions.length === 0 && (
                    <div className="px-5 py-6 text-center">
                      <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-stone-700 dark:text-stone-300">No issues in this category</p>
                      <p className="text-xs text-stone-400 dark:text-stone-500 mt-1">Focus on other sections</p>
                    </div>
                  )}

                  {/* Benchmark */}
                  <div className="px-5 py-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Trophy className="w-4 h-4 text-amber-500" />
                      <p className="text-xs font-bold text-stone-700 dark:text-stone-300 uppercase tracking-wider">
                        Benchmark Comparison
                      </p>
                    </div>
                    <div className="space-y-3">
                      <div className="p-3.5 rounded-md bg-stone-50 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700">
                        <p className="text-xs font-semibold text-stone-600 dark:text-stone-300 mb-1">Current Status</p>
                        <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">{result.benchmark.status}</p>
                      </div>
                      <div className="p-3.5 rounded-md bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
                        <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">What Winning Proposals Include</p>
                        <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">{result.benchmark.winningTemplate}</p>
                      </div>
                    </div>
                  </div>

                  {/* Usage footer */}
                  {usage && (
                    <div className="px-5 py-3 flex items-center justify-between bg-stone-50 dark:bg-stone-800/30">
                      <p className="text-xs text-stone-400 dark:text-stone-500">
                        {usage.tier === "PREMIUM"
                          ? "Unlimited reviews (Premium)"
                          : `${usage.used} of ${usage.limit} monthly reviews used`}
                      </p>
                      <Button variant="ghost" size="sm" onClick={handleReset}>
                        <RefreshCw className="w-3.5 h-3.5" />
                        New review
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
