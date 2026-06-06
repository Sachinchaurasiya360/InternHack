import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
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
  Briefcase,
} from "lucide-react";
import { fetchHiringSignal, HiringSignalResult } from "./api/opensource.api";
import { Button } from "../../../components/ui/button";
import { SEO } from "../../../components/SEO";
import { Card, CardHeader, CardTitle, CardContent } from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";

export default function HiringSignalPage() {
  const queryClient = useQueryClient();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["opensource", "hiring-signal"],
    queryFn: () => fetchHiringSignal(false),
    staleTime: 5 * 60 * 1000, // 5 min
  });

  const refreshMutation = useMutation({
    mutationFn: () => fetchHiringSignal(true),
    onSuccess: (newData) => {
      queryClient.setQueryData(["opensource", "hiring-signal"], newData);
    },
    onSettled: () => {
      setIsRefreshing(false);
    },
  });

  const handleRefresh = () => {
    setIsRefreshing(true);
    refreshMutation.mutate();
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <div className="relative">
          <div className="w-12 h-12 border-4 border-lime-400/20 border-t-lime-400 rounded-full animate-spin" />
          <Sparkles className="w-5 h-5 text-lime-400 absolute inset-0 m-auto animate-pulse" />
        </div>
        <p className="text-sm font-mono text-stone-500 uppercase tracking-widest animate-pulse">
          Evaluating Hiring Signals...
        </p>
      </div>
    );
  }

  if (isError || !data) {
    const errorMsg = error instanceof Error ? error.message : "Failed to load hiring attractiveness assessment.";
    return (
      <div className="max-w-md mx-auto text-center py-16 space-y-6">
        <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/25 flex items-center justify-center text-red-500 mx-auto">
          <AlertTriangle className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-stone-900 dark:text-stone-50">Evaluation failed</h3>
        <p className="text-sm text-stone-500 dark:text-stone-400">{errorMsg}</p>
        <Button onClick={() => refetch()}>Retry Evaluation</Button>
      </div>
    );
  }

  const {
    hiringScore,
    hiringRank,
    categoryScores,
    strengths,
    weaknesses,
    recommendations,
    lastUpdated,
  } = data;

  const getRankBadgeStyles = (rank: string) => {
    const r = rank.toLowerCase();
    if (r.includes("talent") || r.includes("attractive")) {
      return "border-emerald-500/25 bg-emerald-500/5 text-emerald-500";
    }
    if (r.includes("prospect") || r.includes("developing")) {
      return "border-lime-500/25 bg-lime-500/5 text-lime-500";
    }
    return "border-red-500/25 bg-red-500/5 text-red-500";
  };

  const getPriorityBadgeStyles = (priority: string) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "bg-rose-500/10 text-rose-500 border border-rose-500/20";
      case "medium":
        return "bg-amber-500/10 text-amber-500 border border-amber-500/20";
      default:
        return "bg-stone-500/10 text-stone-500 border border-stone-500/20";
    }
  };

  const getAreaActionUrl = (area: string) => {
    switch (area.toLowerCase()) {
      case "portfolio":
      case "github":
        return "/student/profile";
      case "resume":
        return "/student/ats";
      case "skills":
        return "/student/skill-verification";
      case "contributions":
      default:
        return "/student/open-source/contributions";
    }
  };

  const getAreaLabel = (area: string) => {
    switch (area.toLowerCase()) {
      case "portfolio":
        return "Edit Portfolio";
      case "resume":
        return "Optimize Resume";
      case "github":
        return "Link GitHub";
      case "skills":
        return "Verify Skills";
      case "contributions":
      default:
        return "View Contributions";
    }
  };

  const isDataIncomplete =
    categoryScores.technicalDepth === 0 &&
    categoryScores.projectPortfolio === 0 &&
    categoryScores.documentationQuality === 0;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 space-y-8">
      <SEO title="Hiring Signal Dashboard" noIndex />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-1.5 mb-1">
            <span className="h-1.5 w-1.5 bg-lime-400 rounded-full" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              recruiter attractiveness
            </span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-stone-900 dark:text-stone-50">
            Hiring Signal Engine
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <Button
            onClick={handleRefresh}
            disabled={isRefreshing || refreshMutation.isPending}
            variant="outline"
            size="sm"
            className="font-mono text-xs gap-1.5"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? "animate-spin" : ""}`} />
            RE-EVALUATE
          </Button>
          <Badge variant="outline" className={`text-xs py-1 px-3 w-fit font-mono ${getRankBadgeStyles(hiringRank)}`}>
            STATUS: {hiringRank.toUpperCase()}
          </Badge>
        </div>
      </div>

      {isDataIncomplete && (
        <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/10 flex gap-4">
          <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
          <div className="space-y-1.5">
            <h4 className="text-sm font-bold text-amber-500">Missing Attractiveness Data</h4>
            <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
              We couldn't compute specific Hiring Signals because your profile lacks project entries, resume evaluations, and linked GitHub metadata. Update your portfolio, verify skills, and link GitHub to build your hiring ranking score!
            </p>
          </div>
        </div>
      )}

      {/* Top Section: Score Dial & Category Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Attractiveness Dial */}
        <Card className="border-stone-200 dark:border-white/10 flex flex-col justify-between overflow-hidden relative">
          <div className="absolute top-0 right-0 w-48 h-48 bg-lime-400/5 rounded-full blur-2xl pointer-events-none" />
          <CardHeader className="pb-0">
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-lime-400" />
              Attractiveness Score
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 flex flex-col items-center justify-center space-y-4">
            <div className="relative w-36 h-36 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  className="stroke-stone-100 dark:stroke-stone-800"
                  strokeWidth="8"
                  fill="transparent"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  className="stroke-lime-400"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray={263.8}
                  strokeDashoffset={263.8 - (263.8 * hiringScore) / 100}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-4xl font-extrabold text-stone-900 dark:text-stone-50">{hiringScore}</span>
                <span className="text-[10px] font-mono text-stone-400">OF 100</span>
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-sm font-bold text-stone-900 dark:text-stone-50">{hiringRank}</h4>
              <p className="text-[10px] font-mono text-stone-400 mt-1">
                Last calculated: {new Date(lastUpdated).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Categories breakdown */}
        <Card className="lg:col-span-2 border-stone-200 dark:border-white/10">
          <CardHeader>
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-lime-400" />
              Recruiter Attractiveness Criteria
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {[
              {
                label: "Technical Depth",
                score: categoryScores.technicalDepth,
                desc: "Measures proficiency in stack technologies, APIs, and verified assessments.",
                icon: TrendingUp,
              },
              {
                label: "Project Portfolio",
                score: categoryScores.projectPortfolio,
                desc: "Evaluates project completeness, deployment status, and system architecture.",
                icon: FolderCode,
              },
              {
                label: "Documentation Quality",
                score: categoryScores.documentationQuality,
                desc: "Assesses readme quality, explanation clarity, and repository clarity.",
                icon: FileText,
              },
              {
                label: "Contribution Activity",
                score: categoryScores.contributionActivity,
                desc: "Measures commit consistency, issue resolution, and open source commits.",
                icon: Github,
              },
            ].map((category) => (
              <div
                key={category.label}
                className="p-4 rounded-xl border border-stone-100 dark:border-white/5 bg-stone-50/50 dark:bg-stone-900/30 space-y-2.5"
              >
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-stone-700 dark:text-stone-300 flex items-center gap-2">
                    <category.icon className="w-4 h-4 text-lime-400 shrink-0" />
                    {category.label}
                  </span>
                  <span className="text-xs font-mono font-bold text-lime-500">{category.score}%</span>
                </div>
                <div className="w-full bg-stone-100 dark:bg-stone-800 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-lime-400 h-full rounded-full"
                    style={{ width: `${category.score}%` }}
                  />
                </div>
                <p className="text-[10px] text-stone-500 dark:text-stone-400 leading-normal">{category.desc}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Strengths & Weaknesses */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Attractiveness Strengths */}
        <Card className="border-emerald-500/15 dark:border-emerald-500/10 bg-emerald-500/[0.01]">
          <CardHeader>
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-emerald-500 flex items-center gap-1.5">
              <BadgeCheck className="w-4.5 h-4.5" />
              Recruiter Strengths
            </CardTitle>
          </CardHeader>
          <CardContent>
            {strengths.length === 0 ? (
              <p className="text-xs text-stone-400 italic">No recruitment strengths highlighted yet.</p>
            ) : (
              <ul className="space-y-3">
                {strengths.map((str, i) => (
                  <li key={i} className="flex gap-2.5 items-start">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">{str}</span>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>

        {/* Growth Areas */}
        <Card className="border-rose-500/15 dark:border-rose-500/10 bg-rose-500/[0.01]">
          <CardHeader>
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-rose-500 flex items-center gap-1.5">
              <BadgeAlert className="w-4.5 h-4.5" />
              Growth Priorities
            </CardTitle>
          </CardHeader>
          <CardContent>
            {weaknesses.length === 0 ? (
              <p className="text-xs text-stone-400 italic">No growth priorities highlighted yet.</p>
            ) : (
              <ul className="space-y-3">
                {weaknesses.map((weak, i) => (
                  <li key={i} className="flex gap-2.5 items-start">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">{weak}</span>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Recruiter Recommendations */}
      <Card className="border-stone-200 dark:border-white/10">
        <CardHeader>
          <CardTitle className="text-sm font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-lime-400" />
            Recruiter Profile Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recommendations.length === 0 ? (
            <p className="text-xs text-stone-400 italic text-center py-4">No specific attractiveness suggestions generated.</p>
          ) : (
            <div className="space-y-3">
              {recommendations.map((rec, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-stone-200 dark:border-white/5 hover:border-lime-500/20 transition-colors bg-white dark:bg-stone-900/30"
                >
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-lg bg-lime-400/10 text-lime-500 flex items-center justify-center font-mono text-xs shrink-0 font-bold">
                      {i + 1}
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-stone-400">
                          {rec.area}
                        </span>
                        <Badge className={`text-[9px] font-mono uppercase px-1.5 py-0.5 ${getPriorityBadgeStyles(rec.priority)}`}>
                          {rec.priority}
                        </Badge>
                      </div>
                      <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                        {rec.text}
                      </p>
                    </div>
                  </div>
                  <Button asChild size="sm" variant="secondary" className="font-mono text-[10px] sm:self-center self-start shrink-0">
                    <Link to={getAreaActionUrl(rec.area)}>
                      {getAreaLabel(rec.area)}
                      <ChevronRight className="w-3 h-3 ml-1" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
