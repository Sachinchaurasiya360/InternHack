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
  TrendingDown,
  Calendar,
  Zap,
} from "lucide-react";
import { fetchDeveloperGrowth, DeveloperGrowthResult } from "./api/opensource.api";
import { Button } from "../../../components/ui/button";
import { SEO } from "../../../components/SEO";
import { Card, CardHeader, CardTitle, CardContent } from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function DeveloperGrowthPage() {
  const queryClient = useQueryClient();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["opensource", "growth"],
    queryFn: () => fetchDeveloperGrowth(false),
    staleTime: 5 * 60 * 1000, // 5 min
  });

  const refreshMutation = useMutation({
    mutationFn: () => fetchDeveloperGrowth(true),
    onSuccess: (newData) => {
      queryClient.setQueryData(["opensource", "growth"], newData);
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
          Calculating Developer Growth...
        </p>
      </div>
    );
  }

  if (isError || !data) {
    const errorMsg = error instanceof Error ? error.message : "Failed to load growth tracking.";
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
    growthScore,
    growthRank,
    trend,
    milestones,
    monthlyReport,
    lastUpdated,
  } = data;

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "dsa":
        return TrendingUp;
      case "sql":
        return Layers;
      case "skill assessment":
        return BadgeCheck;
      case "open source":
        return Github;
      case "resume":
      default:
        return FileText;
    }
  };

  const getCategoryBadgeStyles = (category: string) => {
    switch (category.toLowerCase()) {
      case "dsa":
        return "bg-indigo-500/10 text-indigo-500 border border-indigo-500/20";
      case "sql":
        return "bg-cyan-500/10 text-cyan-500 border border-cyan-500/20";
      case "skill assessment":
        return "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20";
      case "open source":
        return "bg-lime-500/10 text-lime-500 border border-lime-500/20";
      case "resume":
      default:
        return "bg-amber-500/10 text-amber-500 border border-amber-500/20";
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 space-y-8">
      <SEO title="Developer Growth Dashboard" noIndex />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-1.5 mb-1">
            <span className="h-1.5 w-1.5 bg-lime-400 rounded-full" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              growth analytics
            </span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-stone-900 dark:text-stone-50">
            Developer Growth Dashboard
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
          <Badge variant="outline" className="text-xs py-1 px-3 w-fit font-mono border-lime-500/25 bg-lime-500/5 text-lime-500">
            RANK: {growthRank.toUpperCase()}
          </Badge>
        </div>
      </div>

      {/* Top Section: Growth Score & Trend Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Growth Score Card */}
        <Card className="border-stone-200 dark:border-white/10 flex flex-col justify-between overflow-hidden relative">
          <div className="absolute top-0 right-0 w-48 h-48 bg-lime-400/5 rounded-full blur-2xl pointer-events-none" />
          <CardHeader className="pb-0">
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-lime-400" />
              Growth Score
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
                  strokeDashoffset={263.8 - (263.8 * growthScore) / 100}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-4xl font-extrabold text-stone-900 dark:text-stone-50">{growthScore}</span>
                <span className="text-[10px] font-mono text-stone-400">OF 100</span>
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-sm font-bold text-stone-900 dark:text-stone-50">{growthRank}</h4>
              <p className="text-[10px] font-mono text-stone-400 mt-1">
                Last calculated: {new Date(lastUpdated).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Growth Trend Area Chart */}
        <Card className="lg:col-span-2 border-stone-200 dark:border-white/10">
          <CardHeader>
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-lime-400" />
              Growth Score Trend
            </CardTitle>
          </CardHeader>
          <CardContent className="h-64 pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trend} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#a3e635" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#a3e635" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis
                  dataKey="month"
                  stroke="#888"
                  fontSize={10}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#888"
                  fontSize={10}
                  tickLine={false}
                  axisLine={false}
                  domain={[0, 100]}
                />
                <Tooltip
                  contentStyle={{
                    background: "#1c1917",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "0.5rem",
                    color: "#e7e5e4",
                    fontSize: "0.75rem",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="score"
                  stroke="#a3e635"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#growthGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Middle Section: Milestones Timeline & Monthly Growth Report */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Milestone Timeline */}
        <Card className="lg:col-span-1 border-stone-200 dark:border-white/10">
          <CardHeader>
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-lime-400" />
              Completed Milestones
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 max-h-[380px] overflow-y-auto pr-2">
            {milestones.length === 0 ? (
              <p className="text-xs text-stone-400 italic text-center py-8">Onboarding milestones will appear once you begin DSA or Open Source tasks.</p>
            ) : (
              <div className="relative pl-6 border-l border-stone-200 dark:border-stone-800 space-y-6">
                {milestones.map((milestone, idx) => {
                  const Icon = getCategoryIcon(milestone.category);
                  return (
                    <div key={idx} className="relative">
                      {/* Timeline dot */}
                      <span className="absolute -left-[31px] top-0.5 p-1 rounded-full bg-stone-900 border border-stone-800 text-lime-400">
                        <Icon className="w-3.5 h-3.5" />
                      </span>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="text-xs font-bold text-stone-900 dark:text-stone-50">
                            {milestone.title}
                          </h4>
                          <Badge className={`text-[8px] font-mono px-1 py-0 ${getCategoryBadgeStyles(milestone.category)}`}>
                            {milestone.category}
                          </Badge>
                        </div>
                        <span className="text-[10px] font-mono text-stone-400 block">{milestone.date}</span>
                        <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Monthly report */}
        <Card className="lg:col-span-2 border-stone-200 dark:border-white/10 flex flex-col justify-between">
          <CardHeader>
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-lime-400" />
              AI Monthly Growth Report
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 rounded-xl border border-stone-200 dark:border-white/5 bg-stone-50/50 dark:bg-stone-900/30 space-y-2">
              <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest font-mono">Report Summary</h4>
              <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                {monthlyReport.summary}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Achievements */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-emerald-500 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  Key Progress Items
                </h4>
                <ul className="space-y-2">
                  {monthlyReport.achievements.map((ach, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <Zap className="w-3.5 h-3.5 text-lime-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Focus Areas */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-amber-500 uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-4 h-4" />
                  Actionable Learning Priorities
                </h4>
                <ul className="space-y-2">
                  {monthlyReport.focusAreas.map((focus, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <ChevronRight className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">{focus}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
