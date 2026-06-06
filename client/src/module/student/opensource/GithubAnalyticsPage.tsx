import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  Github,
  Star,
  GitFork,
  BookOpen,
  AlertCircle,
  FileCode2,
  ChevronRight,
  TrendingUp,
  Sparkles,
  Award,
  Layers,
  FileText,
} from "lucide-react";
import { fetchGithubAnalytics } from "./api/opensource.api";
import { Button } from "../../../components/ui/button";
import { SEO } from "../../../components/SEO";
import { Card, CardHeader, CardTitle, CardContent } from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";
import { useAuthStore } from "../../../lib/auth.store";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const COLORS = [
  "#a3e635", // Lime
  "#3b82f6", // Blue
  "#10b981", // Emerald
  "#f59e0b", // Amber
  "#6366f1", // Indigo
  "#8b5cf6", // Violet
];

export default function GithubAnalyticsPage() {
  const { user } = useAuthStore();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["opensource", "github-analytics"],
    queryFn: fetchGithubAnalytics,
    staleTime: 10 * 60 * 1000,
  });

  const hasGithubLink = !!user?.githubUrl;

  if (!hasGithubLink) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-500 mx-auto">
          <Github className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-extrabold text-stone-900 dark:text-stone-50">Link Your GitHub Account</h2>
        <p className="text-stone-500 dark:text-stone-400 text-sm max-w-sm mx-auto">
          To view detailed repository analytics, quality scoring, and technology stack breakdowns, link your GitHub URL in your profile first.
        </p>
        <Button asChild>
          <Link to="/student/profile">
            Go to Profile Settings
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </Button>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <div className="relative">
          <div className="w-12 h-12 border-4 border-lime-400/20 border-t-lime-400 rounded-full animate-spin" />
          <Sparkles className="w-5 h-5 text-lime-400 absolute inset-0 m-auto animate-pulse" />
        </div>
        <p className="text-sm font-mono text-stone-500 uppercase tracking-widest animate-pulse">Running AI Profiler...</p>
      </div>
    );
  }

  if (isError || !data) {
    const errorMsg = error instanceof Error ? error.message : "Could not complete analysis.";
    return (
      <div className="max-w-md mx-auto text-center py-16 space-y-6">
        <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/25 flex items-center justify-center text-red-500 mx-auto">
          <AlertCircle className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-stone-900 dark:text-stone-50">Profiling failed</h3>
        <p className="text-sm text-stone-500 dark:text-stone-400">
          {errorMsg}
        </p>
        <Button onClick={() => window.location.reload()}>Retry Analysis</Button>
      </div>
    );
  }

  const {
    developerScore,
    developerRank,
    projectDiversityScore,
    documentationQualityScore,
    repositoryActivityScore,
    techStackBreakdown,
    recommendations,
    totalStars,
    totalForks,
    publicRepos,
  } = data;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 space-y-8">
      <SEO title="GitHub Career Analytics" noIndex />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-1.5 mb-1">
            <span className="h-1.5 w-1.5 bg-lime-400 rounded-full" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">profile intelligence</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-stone-900 dark:text-stone-50">GitHub Career Analytics</h1>
        </div>
        <Badge variant="outline" className="border-lime-500/25 bg-lime-500/5 text-lime-500 text-xs py-1 px-3 w-fit font-mono">
          RANK: {developerRank.toUpperCase()}
        </Badge>
      </div>

      {/* Top Section: Score & Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Developer Score Card */}
        <Card className="border-stone-200 dark:border-white/10 flex flex-col justify-between overflow-hidden relative">
          <div className="absolute top-0 right-0 w-48 h-48 bg-lime-400/5 rounded-full blur-2xl pointer-events-none" />
          <CardHeader className="pb-0">
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-lime-400" />
              Developer Score
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 flex flex-col items-center justify-center space-y-4">
            {/* Circular score display */}
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
                  strokeDashoffset={263.8 - (263.8 * developerScore) / 100}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-4xl font-extrabold text-stone-900 dark:text-stone-50">{developerScore}</span>
                <span className="text-[10px] font-mono text-stone-400">OF 100</span>
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-sm font-bold text-stone-900 dark:text-stone-50">{developerRank}</h4>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 leading-relaxed max-w-[200px]">
                Your score places you in the top tier of active developer portfolios.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Quality Metrics Card */}
        <Card className="border-stone-200 dark:border-white/10">
          <CardHeader>
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-lime-400" />
              Quality Indicators
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            {[
              { label: "Documentation Quality", score: documentationQualityScore, desc: "Evaluates descriptions, pages, and READMEs." },
              { label: "Project Diversity", score: projectDiversityScore, desc: "Measures language combinations and project scope." },
              { label: "Repository Activity", score: repositoryActivityScore, desc: "Evaluates active updates and commit consistency." },
            ].map((metric) => (
              <div key={metric.label} className="space-y-1">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-stone-700 dark:text-stone-300 font-semibold">{metric.label}</span>
                  <span className="font-bold text-lime-500">{metric.score}%</span>
                </div>
                <div className="w-full bg-stone-100 dark:bg-stone-800 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-lime-400 h-full rounded-full"
                    style={{ width: `${metric.score}%` }}
                  />
                </div>
                <p className="text-[10px] text-stone-500 leading-relaxed">{metric.desc}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Basic Stats Grid */}
        <div className="grid grid-rows-3 gap-4">
          {[
            { label: "Public Repositories", value: publicRepos, icon: FileCode2, color: "text-blue-500 bg-blue-500/5 border-blue-500/15" },
            { label: "Repository Stars", value: totalStars, icon: Star, color: "text-amber-500 bg-amber-500/5 border-amber-500/15" },
            { label: "Total Forks", value: totalForks, icon: GitFork, color: "text-emerald-500 bg-emerald-500/5 border-emerald-500/15" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 flex items-center justify-between"
            >
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-widest text-stone-500">{stat.label}</span>
                <p className="text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50">{stat.value}</p>
              </div>
              <div className={`p-2.5 rounded-xl border ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chart and recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Tech Stack Distribution */}
        <Card className="lg:col-span-1 border-stone-200 dark:border-white/10">
          <CardHeader>
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-lime-400" />
              Technology Stack
            </CardTitle>
          </CardHeader>
          <CardContent className="h-72 flex flex-col justify-center">
            {techStackBreakdown.length === 0 ? (
              <p className="text-xs text-stone-400 italic text-center">No languages detected.</p>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={techStackBreakdown}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={3}
                    dataKey="percentage"
                    stroke="none"
                  >
                    {techStackBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      background: "#1c1917",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "0.375rem",
                      color: "#e7e5e4",
                      fontSize: "0.75rem",
                    }}
                  />
                  <Legend formatter={(value) => <span className="text-xs text-stone-500 dark:text-stone-400">{value}</span>} />
                </PieChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>

        {/* Actionable Recommendations */}
        <Card className="lg:col-span-2 border-stone-200 dark:border-white/10">
          <CardHeader>
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-lime-400" />
              AI Profile Optimization Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-xl border border-stone-200 dark:border-white/10 bg-stone-50/50 dark:bg-stone-900/10 p-4 flex gap-3">
              <Sparkles className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-stone-900 dark:text-stone-50">Gemini Optimization Analysis</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Based on repository metadata parsing, we have identified key areas to improve your presentation to recruiters and hiring managers.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              {recommendations.map((rec, i) => (
                <div
                  key={i}
                  className="flex gap-3 p-3.5 rounded-xl border border-stone-200 dark:border-white/5 hover:border-lime-500/20 transition-colors bg-white dark:bg-stone-900/30"
                >
                  <div className="w-6 h-6 rounded-lg bg-lime-400/10 text-lime-500 flex items-center justify-center font-mono text-xs shrink-0 font-bold">
                    {i + 1}
                  </div>
                  <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">{rec}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
