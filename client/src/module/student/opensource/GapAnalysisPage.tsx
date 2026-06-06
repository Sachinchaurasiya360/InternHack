import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  Sparkles,
  Award,
  Layers,
  RefreshCw,
  AlertTriangle,
  ChevronRight,
  Code2,
  Clock,
  Layout,
  Target,
  BookOpen,
  AlertCircle,
  TrendingUp,
  Briefcase,
  ExternalLink,
} from "lucide-react";
import { fetchGapAnalysis, TargetRoleMatch, SkillGap, LearningPriority } from "./api/opensource.api";
import { Button } from "../../../components/ui/button";
import { SEO } from "../../../components/SEO";
import { Card, CardHeader, CardTitle, CardContent } from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";

export default function GapAnalysisPage() {
  const queryClient = useQueryClient();
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Fetch Career Gap Analysis
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["opensource", "gap-analysis", selectedRole],
    queryFn: () => fetchGapAnalysis(false, selectedRole || undefined),
    staleTime: 10 * 60 * 1000, // 10 minutes stale time
  });

  // Re-evaluate mutation
  const refreshMutation = useMutation({
    mutationFn: () => fetchGapAnalysis(true, selectedRole || undefined),
    onSuccess: (newData) => {
      queryClient.setQueryData(["opensource", "gap-analysis", selectedRole], newData);
    },
    onSettled: () => {
      setIsRefreshing(false);
    },
  });

  const handleRefresh = () => {
    setIsRefreshing(true);
    refreshMutation.mutate();
  };

  const getImportanceColor = (imp: string) => {
    switch (imp.toLowerCase()) {
      case "high":
        return "bg-rose-500/10 text-rose-500 border border-rose-500/20";
      case "medium":
        return "bg-amber-500/10 text-amber-500 border border-amber-500/20";
      default:
        return "bg-stone-500/10 text-stone-500 border border-stone-500/20";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "strong":
        return "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20";
      case "weak":
        return "bg-amber-500/10 text-amber-500 border border-amber-500/20";
      default:
        return "bg-rose-500/10 text-rose-500 border border-rose-500/20";
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <div className="relative">
          <div className="w-12 h-12 border-4 border-lime-400/20 border-t-lime-400 rounded-full animate-spin" />
          <Sparkles className="w-5 h-5 text-lime-400 absolute inset-0 m-auto animate-pulse" />
        </div>
        <p className="text-sm font-mono text-stone-500 uppercase tracking-widest animate-pulse">
          Analyzing Career Skill Gaps...
        </p>
      </div>
    );
  }

  if (isError || !data) {
    const errorMsg = error instanceof Error ? error.message : "Failed to load career gap analysis.";
    return (
      <div className="max-w-md mx-auto text-center py-16 space-y-6">
        <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/25 flex items-center justify-center text-red-500 mx-auto">
          <AlertTriangle className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-stone-900 dark:text-stone-50">Analysis failed</h3>
        <p className="text-sm text-stone-500 dark:text-stone-400">{errorMsg}</p>
        <Button onClick={() => refetch()}>Retry Evaluation</Button>
      </div>
    );
  }

  // Find target roles to display in header selection
  const primaryRoleMatch = data.targetRoles.find((r) => r.isTarget) || data.targetRoles[0];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 space-y-8">
      <SEO title="Career Gap Analysis" noIndex />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-1.5 mb-1">
            <span className="h-1.5 w-1.5 bg-lime-400 rounded-full" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              Career Operating System
            </span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-stone-900 dark:text-stone-50">
            Career Gap Analysis
          </h1>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-stone-400">Target Role:</span>
            <select
              value={selectedRole || primaryRoleMatch?.roleName}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="bg-stone-900 text-stone-100 border border-stone-800 rounded px-2.5 py-1 text-xs font-mono focus:outline-none focus:border-lime-500"
            >
              {data.targetRoles.map((role) => (
                <option key={role.roleName} value={role.roleName}>
                  {role.roleName} ({role.matchPercentage}% match)
                </option>
              ))}
            </select>
          </div>
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
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Role Matches & Missing Technologies */}
        <div className="lg:col-span-1 space-y-6">
          {/* Target Role Match Card */}
          <Card className="border-stone-200 dark:border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-lime-400/5 rounded-full blur-2xl pointer-events-none" />
            <CardHeader>
              <CardTitle className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                <Target className="w-4 h-4 text-lime-400" />
                Target Role Mapping
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {data.targetRoles.map((role) => (
                <div
                  key={role.roleName}
                  onClick={() => setSelectedRole(role.roleName)}
                  className={`p-3 rounded-lg border transition-all cursor-pointer flex justify-between items-center ${
                    (selectedRole === role.roleName || (!selectedRole && role.roleName === primaryRoleMatch?.roleName))
                      ? "border-lime-400/30 bg-lime-500/[0.02]"
                      : "border-stone-100 dark:border-stone-900 hover:border-lime-500/10"
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="text-xs font-bold text-stone-900 dark:text-stone-50">
                      {role.roleName}
                    </div>
                    <div className="text-[10px] font-mono text-stone-400 flex items-center gap-1">
                      {role.isTarget ? (
                        <span className="text-lime-500">★ Primary Target</span>
                      ) : (
                        <span>Secondary Role</span>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-extrabold text-lime-400 font-mono">
                      {role.matchPercentage}%
                    </span>
                    <div className="w-16 bg-stone-200 dark:bg-stone-800 h-1.5 rounded-full mt-1 overflow-hidden">
                      <div
                        className="bg-lime-400 h-full rounded-full"
                        style={{ width: `${role.matchPercentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Missing Technologies Card */}
          <Card className="border-stone-200 dark:border-white/10">
            <CardHeader>
              <CardTitle className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-rose-500" />
                Missing Technologies
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-relaxed">
                These industry-standard libraries, databases, and DevOps tools are missing from your verified tests, resume, or GitHub profile:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {data.missingTechnologies.length > 0 ? (
                  data.missingTechnologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-rose-500/10 bg-rose-500/[0.02] text-rose-400 font-mono text-[9px] py-0.5 px-2"
                    >
                      {tech}
                    </Badge>
                  ))
                ) : (
                  <span className="text-xs font-mono text-emerald-400">All key stack technologies detected!</span>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Skill Gaps and Learning priorities */}
        <div className="lg:col-span-2 space-y-6">
          {/* Skill Gaps Breakdown */}
          <Card className="border-stone-200 dark:border-white/10">
            <CardHeader className="pb-3">
              <CardTitle className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-lime-400" />
                Detected Skill Gaps
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-stone-100 dark:divide-stone-900">
                {data.skillGaps.map((gap, idx) => (
                  <div key={idx} className="flex justify-between items-center p-4 hover:bg-stone-500/[0.01] transition-colors">
                    <span className="text-xs font-semibold text-stone-900 dark:text-stone-50">
                      {gap.skillName}
                    </span>
                    <div className="flex items-center gap-2">
                      <Badge className={`text-[8px] font-mono uppercase px-1.5 py-0.5 ${getImportanceColor(gap.importance)}`}>
                        {gap.importance} Importance
                      </Badge>
                      <Badge className={`text-[8px] font-mono uppercase px-1.5 py-0.5 ${getStatusColor(gap.status)}`}>
                        {gap.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Learning Priorities Timeline */}
          <Card className="border-stone-200 dark:border-white/10">
            <CardHeader>
              <CardTitle className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-lime-400" />
                Learning Priorities Queue
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 pt-2 pl-6">
              <div className="relative pl-6 border-l border-stone-200 dark:border-stone-800 space-y-6">
                {data.learningPriorities.map((item, i) => (
                  <div key={i} className="relative">
                    <span className="absolute -left-[30px] top-0.5 w-4.5 h-4.5 rounded-full bg-stone-900 border border-stone-800 text-lime-400 flex items-center justify-center font-mono text-[9px] font-bold">
                      {i + 1}
                    </span>
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-start gap-4">
                        <h4 className="text-xs font-bold text-stone-900 dark:text-stone-50">
                          {item.technology}
                        </h4>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-[9px] font-mono text-stone-400 uppercase tracking-widest flex items-center gap-1">
                            <Clock className="w-3 h-3 text-lime-400" />
                            {item.timeframe}
                          </span>
                          <Badge className={`text-[8px] font-mono px-1 py-0.2 ${getImportanceColor(item.priority)}`}>
                            {item.priority} Priority
                          </Badge>
                        </div>
                      </div>
                      <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
                        {item.reason}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Action Plan / Career Recommendations */}
          <Card className="border-stone-200 dark:border-white/10">
            <CardHeader>
              <CardTitle className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-lime-400" />
                Career Action Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-2">
              {data.careerRecommendations.map((rec, i) => (
                <div key={i} className="flex gap-2.5 p-3 rounded-lg border border-stone-100 dark:border-stone-900 bg-stone-500/[0.01]">
                  <ChevronRight className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                    {rec}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
