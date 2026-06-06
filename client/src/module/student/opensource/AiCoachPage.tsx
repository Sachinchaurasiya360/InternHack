import React, { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  Sparkles,
  Award,
  Layers,
  FileText,
  Github,
  BadgeAlert,
  BadgeCheck,
  RefreshCw,
  CheckCircle2,
  XCircle,
  FolderCode,
  TrendingUp,
  AlertTriangle,
  ChevronRight,
  BookOpen,
  Send,
  Loader2,
  ExternalLink,
  GitPullRequest,
} from "lucide-react";
import {
  fetchCoachRecommendations,
  generateCoachRoadmap,
  fetchCoachFeedback,
  CoachRecommendation,
  CoachRoadmap,
  CoachFeedback,
} from "./api/opensource.api";
import { Button } from "../../../components/ui/button";
import { SEO } from "../../../components/SEO";
import { Card, CardHeader, CardTitle, CardContent } from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";

export default function AiCoachPage() {
  const [activeTab, setActiveTab] = useState<"recommendations" | "roadmap" | "review">("recommendations");
  const [selectedRepo, setSelectedRepo] = useState<CoachRecommendation | null>(null);
  const [roadmap, setRoadmap] = useState<CoachRoadmap | null>(null);
  const [codePatch, setCodePatch] = useState("");
  const [feedback, setFeedback] = useState<CoachFeedback | null>(null);
  const [checklistState, setChecklistState] = useState<Record<string, boolean>>({});

  // 1. Fetch suggestions matching user skills
  const { data: recommendations, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["opensource", "coach-recommendations"],
    queryFn: fetchCoachRecommendations,
    staleTime: 10 * 60 * 1000,
  });

  // 2. Generate roadmap steps
  const roadmapMutation = useMutation({
    mutationFn: (repoId: number) => generateCoachRoadmap(repoId),
    onSuccess: (data) => {
      setRoadmap(data);
      // Reset checklist
      const initial: Record<string, boolean> = {};
      data.prChecklist.forEach((item) => {
        initial[item] = false;
      });
      setChecklistState(initial);
      setActiveTab("roadmap");
    },
  });

  // 3. Request PR review feedback
  const feedbackMutation = useMutation({
    mutationFn: (args: { repoId: number; patch: string }) => fetchCoachFeedback(args.repoId, args.patch),
    onSuccess: (data) => {
      setFeedback(data);
    },
  });

  const handleSelectRepo = (repo: CoachRecommendation) => {
    setSelectedRepo(repo);
    roadmapMutation.mutate(repo.repoId);
  };

  const handleToggleChecklist = (item: string) => {
    setChecklistState((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedRepo || !codePatch.trim()) return;
    feedbackMutation.mutate({ repoId: selectedRepo.repoId, patch: codePatch });
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <div className="relative">
          <div className="w-12 h-12 border-4 border-lime-400/20 border-t-lime-400 rounded-full animate-spin" />
          <Sparkles className="w-5 h-5 text-lime-400 absolute inset-0 m-auto animate-pulse" />
        </div>
        <p className="text-sm font-mono text-stone-500 uppercase tracking-widest animate-pulse">
          Consulting AI Open Source Coach...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="max-w-md mx-auto text-center py-16 space-y-6">
        <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/25 flex items-center justify-center text-red-500 mx-auto">
          <AlertTriangle className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-stone-900 dark:text-stone-50">Coach is offline</h3>
        <p className="text-sm text-stone-500 dark:text-stone-400">
          {error instanceof Error ? error.message : "Failed to load matching suggestions."}
        </p>
        <Button onClick={() => refetch()}>Retry Connection</Button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 space-y-8">
      <SEO title="AI Open Source Coach" noIndex />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-1.5 mb-1">
            <span className="h-1.5 w-1.5 bg-lime-400 rounded-full" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              artificial intelligence mentor
            </span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-stone-900 dark:text-stone-50">
            AI Open Source Coach
          </h1>
        </div>
        <div className="flex items-center gap-2">
          {selectedRepo && (
            <Badge variant="secondary" className="font-mono text-[10px] py-1 px-3 bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-white/10 text-stone-700 dark:text-stone-300">
              ACTIVE REPO: {selectedRepo.name.toUpperCase()}
            </Badge>
          )}
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-stone-200 dark:border-white/10 gap-6">
        {[
          { id: "recommendations", label: "Matched Suggestions", icon: Award },
          { id: "roadmap", label: "Contribution Roadmap", icon: FolderCode, disabled: !roadmap },
          { id: "review", label: "Code Review Assistant", icon: GitPullRequest, disabled: !selectedRepo },
        ].map((tab) => (
          <button
            key={tab.id}
            disabled={tab.disabled}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 pb-4 text-sm font-semibold transition-colors relative ${
              tab.disabled
                ? "text-stone-400 cursor-not-allowed opacity-50"
                : activeTab === tab.id
                ? "text-lime-500"
                : "text-stone-500 hover:text-stone-850 dark:hover:text-stone-100"
            }`}
          >
            <tab.icon className="w-4.5 h-4.5" />
            {tab.label}
            {activeTab === tab.id && (
              <motion.span
                layoutId="activeCoachTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-lime-500"
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Contents */}
      <div className="space-y-6">
        {activeTab === "recommendations" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendations?.map((repo) => (
              <Card
                key={repo.repoId}
                className="border-stone-200 dark:border-white/10 flex flex-col justify-between hover:border-lime-500/20 transition-all group bg-linear-to-b from-white to-stone-50/20 dark:from-stone-900/40 dark:to-stone-900/10"
              >
                <CardHeader className="space-y-2.5">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400">
                      {repo.language}
                    </span>
                    <Badge className="bg-lime-500/10 text-lime-500 border border-lime-500/20 text-[9px] font-mono font-bold">
                      {repo.matchPercentage}% MATCH
                    </Badge>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-stone-900 dark:text-stone-50 group-hover:text-lime-400 transition-colors">
                      {repo.name}
                    </h3>
                    <p className="text-[10px] text-stone-500 font-mono">by @{repo.owner}</p>
                  </div>
                  <p className="text-xs text-stone-500 dark:text-stone-400 line-clamp-3 leading-relaxed">
                    {repo.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-5 pt-0">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 font-bold block">
                      AI Match Analysis
                    </span>
                    <p className="text-[11px] text-stone-600 dark:text-stone-300 leading-relaxed bg-stone-50 dark:bg-stone-950 p-2.5 rounded-lg border border-stone-100 dark:border-white/5">
                      {repo.matchReason}
                    </p>
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 font-bold block">
                      Starter Areas
                    </span>
                    <ul className="space-y-1 pl-3 list-disc">
                      {repo.starterIssueAreas.map((area, i) => (
                        <li key={i} className="text-[10px] text-stone-500 leading-normal">
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex gap-2.5 pt-2">
                    <Button
                      onClick={() => handleSelectRepo(repo)}
                      disabled={roadmapMutation.isPending && selectedRepo?.repoId === repo.repoId}
                      className="w-full text-xs font-semibold font-mono"
                    >
                      {roadmapMutation.isPending && selectedRepo?.repoId === repo.repoId ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 mr-1.5 animate-spin" />
                          COACHING...
                        </>
                      ) : (
                        "BUILD ROADMAP"
                      )}
                    </Button>
                    <Button asChild variant="secondary" className="p-2 border border-stone-200 dark:border-white/10">
                      <a href={repo.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "roadmap" && roadmap && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Roadmap Timeline */}
            <Card className="lg:col-span-2 border-stone-200 dark:border-white/10">
              <CardHeader>
                <CardTitle className="text-sm font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                  <FolderCode className="w-4 h-4 text-lime-400" />
                  Roadmap: {roadmap.repoName} Contribution Journey
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8 pt-2 pl-6">
                <div className="relative pl-6 border-l border-stone-200 dark:border-stone-800 space-y-8">
                  {roadmap.steps.map((step, idx) => (
                    <div key={idx} className="relative">
                      <span className="absolute -left-[30px] top-0.5 w-4.5 h-4.5 rounded-full bg-stone-900 border border-stone-800 text-lime-400 flex items-center justify-center font-mono text-[9px] font-bold">
                        {idx + 1}
                      </span>
                      <div className="space-y-2">
                        <h4 className="text-xs font-bold text-stone-900 dark:text-stone-50">
                          {step.title}
                        </h4>
                        <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
                          {step.description}
                        </p>
                        {step.resources.length > 0 && (
                          <div className="flex gap-2 flex-wrap pt-1">
                            {step.resources.map((res, i) => (
                              <a
                                key={i}
                                href={res}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-[10px] font-mono text-lime-500 hover:underline"
                              >
                                Resource {i + 1} <ExternalLink className="w-2.5 h-2.5" />
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Checklist */}
            <Card className="border-stone-200 dark:border-white/10 flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="text-sm font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                  <BadgeCheck className="w-4.5 h-4.5 text-lime-400" />
                  PR Readiness Checklist
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-[11px] text-stone-500 leading-normal">
                  Complete these checks to verify your branch is production-ready before opening the Pull Request.
                </p>
                <div className="space-y-3">
                  {roadmap.prChecklist.map((item, i) => (
                    <div
                      key={i}
                      onClick={() => handleToggleChecklist(item)}
                      className="flex gap-3 p-3.5 rounded-xl border border-stone-100 dark:border-white/5 hover:border-lime-500/20 transition-all bg-white dark:bg-stone-900/30 cursor-pointer items-start"
                    >
                      <span className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        checklistState[item]
                          ? "bg-lime-400 border-lime-400 text-stone-950"
                          : "border-stone-300 dark:border-white/15"
                      }`}>
                        {checklistState[item] && <CheckCircle2 className="w-3 h-3 text-stone-950 fill-stone-950" />}
                      </span>
                      <p className={`text-xs leading-relaxed transition-colors ${
                        checklistState[item] ? "line-through text-stone-400" : "text-stone-700 dark:text-stone-300"
                      }`}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="pt-4">
                  <Button
                    onClick={() => setActiveTab("review")}
                    className="w-full text-xs font-semibold font-mono"
                  >
                    GO TO REVIEW ASSISTANT
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "review" && selectedRepo && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Input area */}
            <Card className="lg:col-span-1 border-stone-200 dark:border-white/10">
              <CardHeader>
                <CardTitle className="text-sm font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                  <GitPullRequest className="w-4 h-4 text-lime-400" />
                  Code Submission
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-stone-400 font-bold">
                      Target Repository
                    </label>
                    <div className="p-3 rounded-lg bg-stone-50 dark:bg-stone-950 border border-stone-100 dark:border-white/5 text-xs text-stone-700 dark:text-stone-300 font-semibold font-mono">
                      {selectedRepo.name} ({selectedRepo.language})
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-stone-400 font-bold">
                      Paste Diff / Code Patch
                    </label>
                    <textarea
                      value={codePatch}
                      onChange={(e) => setCodePatch(e.target.value)}
                      placeholder="Paste your git diff or implementation code here..."
                      className="w-full min-h-[180px] p-3 rounded-lg border border-stone-200 dark:border-white/10 bg-transparent text-xs font-mono text-stone-800 dark:text-stone-100 focus:outline-none focus:border-lime-500 resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={feedbackMutation.isPending || !codePatch.trim()}
                    className="w-full font-semibold font-mono text-xs gap-1.5"
                  >
                    {feedbackMutation.isPending ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        REVIEWING...
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        SUBMIT FOR REVIEW
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Review feedback output */}
            <Card className="lg:col-span-2 border-stone-200 dark:border-white/10">
              <CardHeader>
                <CardTitle className="text-sm font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-lime-400" />
                  Maintainer Feedback & Suggestions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 pt-2">
                {!feedback ? (
                  <div className="flex flex-col items-center justify-center py-16 text-stone-400 space-y-2">
                    <BookOpen className="w-8 h-8 opacity-40 animate-pulse" />
                    <p className="text-xs italic">Submit your code patch on the left to receive AI maintainer feedback.</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Strengths */}
                      <div className="space-y-3 p-4 rounded-xl border border-emerald-500/15 bg-emerald-500/[0.01]">
                        <h4 className="text-xs font-bold text-emerald-500 uppercase tracking-wider flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4" />
                          Code Strengths
                        </h4>
                        <ul className="space-y-2.5">
                          {feedback.strengths.map((str, i) => (
                            <li key={i} className="flex gap-2 items-start">
                              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full shrink-0 mt-1.5" />
                              <span className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">{str}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Issues */}
                      <div className="space-y-3 p-4 rounded-xl border border-rose-500/15 bg-rose-500/[0.01]">
                        <h4 className="text-xs font-bold text-rose-500 uppercase tracking-wider flex items-center gap-1.5">
                          <BadgeAlert className="w-4 h-4" />
                          Review Concerns
                        </h4>
                        <ul className="space-y-2.5">
                          {feedback.issues.map((iss, i) => (
                            <li key={i} className="flex gap-2 items-start">
                              <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                              <span className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">{iss}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {feedback.improvedCode && (
                      <div className="space-y-2">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 font-bold block">
                          Suggested Improvements Code
                        </span>
                        <pre className="p-4 rounded-lg bg-stone-900 border border-white/5 text-stone-100 text-[10px] font-mono overflow-x-auto leading-relaxed max-h-[180px] overflow-y-auto">
                          {feedback.improvedCode}
                        </pre>
                      </div>
                    )}

                    <div className="space-y-3">
                      <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                        Next Action Items
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {feedback.suggestions.map((sug, i) => (
                          <div
                            key={i}
                            className="flex gap-2 p-3 rounded-lg border border-stone-100 dark:border-white/5 bg-stone-50/50 dark:bg-stone-900/30 text-xs text-stone-600 dark:text-stone-300 leading-normal"
                          >
                            <ChevronRight className="w-4 h-4 text-lime-500 shrink-0 mt-0.5" />
                            {sug}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
