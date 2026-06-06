import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  Sparkles,
  Award,
  Layers,
  FileText,
  RefreshCw,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  Code2,
  Clock,
  Layout,
  Star,
} from "lucide-react";
import { fetchProjectRecommendations, ProjectRecommendationResult } from "./api/opensource.api";
import { Button } from "../../../components/ui/button";
import { SEO } from "../../../components/SEO";
import { Card, CardHeader, CardTitle, CardContent } from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";

export default function ProjectRecommendationsPage() {
  const queryClient = useQueryClient();
  const [selectedProject, setSelectedProject] = useState<ProjectRecommendationResult | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["opensource", "project-recommendations"],
    queryFn: () => fetchProjectRecommendations(false),
    staleTime: 10 * 60 * 1000,
  });

  const refreshMutation = useMutation({
    mutationFn: () => fetchProjectRecommendations(true),
    onSuccess: (newData) => {
      queryClient.setQueryData(["opensource", "project-recommendations"], newData);
      if (selectedProject) {
        const updated = newData.find((p) => p.title === selectedProject.title);
        setSelectedProject(updated || newData[0] || null);
      }
    },
    onSettled: () => {
      setIsRefreshing(false);
    },
  });

  const handleRefresh = () => {
    setIsRefreshing(true);
    refreshMutation.mutate();
  };

  const getDifficultyColor = (diff: string) => {
    switch (diff.toLowerCase()) {
      case "beginner":
        return "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20";
      case "intermediate":
        return "bg-lime-500/10 text-lime-500 border border-lime-500/20";
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
          Generating Customized Project Ideas...
        </p>
      </div>
    );
  }

  if (isError || !data || data.length === 0) {
    const errorMsg = error instanceof Error ? error.message : "Failed to load project suggestions.";
    return (
      <div className="max-w-md mx-auto text-center py-16 space-y-6">
        <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/25 flex items-center justify-center text-red-500 mx-auto">
          <AlertTriangle className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-stone-900 dark:text-stone-50">Generation failed</h3>
        <p className="text-sm text-stone-500 dark:text-stone-400">{errorMsg}</p>
        <Button onClick={() => refetch()}>Retry Generation</Button>
      </div>
    );
  }

  // Set default selected project
  const currentProject = selectedProject || data[0] || null;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 space-y-8">
      <SEO title="AI Project Recommendations" noIndex />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-1.5 mb-1">
            <span className="h-1.5 w-1.5 bg-lime-400 rounded-full" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              portfolio intelligence
            </span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-stone-900 dark:text-stone-50">
            AI Project Recommendations
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
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Project Options Grid */}
        <div className="lg:col-span-1 space-y-4">
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 font-bold block mb-2">
            Recommended Projects
          </span>
          {data.map((project, idx) => (
            <Card
              key={idx}
              onClick={() => setSelectedProject(project)}
              className={`border transition-all cursor-pointer hover:border-lime-500/20 ${
                currentProject?.title === project.title
                  ? "border-lime-400/30 bg-lime-500/[0.02]"
                  : "border-stone-200 dark:border-white/10"
              }`}
            >
              <CardContent className="p-4 space-y-3">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400">
                    {project.targetRole}
                  </span>
                  <Badge className={`text-[8px] font-mono uppercase px-1.5 py-0.5 ${getDifficultyColor(project.difficulty)}`}>
                    {project.difficulty}
                  </Badge>
                </div>
                <h3 className="text-sm font-bold text-stone-900 dark:text-stone-50">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3 text-[10px] text-stone-500 font-mono">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {project.duration}
                  </span>
                  <span className="flex items-center gap-1 text-lime-500 font-bold">
                    <Star className="w-3.5 h-3.5 fill-lime-500/10" />
                    {project.portfolioImpact}% Impact
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Selected Project Roadmap Details */}
        {currentProject && (
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-stone-200 dark:border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-lime-400/5 rounded-full blur-2xl pointer-events-none" />
              <CardHeader className="space-y-3 pb-4">
                <div className="flex justify-between items-start gap-4 flex-wrap">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400">
                      {currentProject.targetRole}
                    </span>
                    <CardTitle className="text-xl font-bold text-stone-900 dark:text-stone-50 mt-1">
                      {currentProject.title}
                    </CardTitle>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <span className="text-[9px] font-mono text-stone-400 block">PORTFOLIO VALUE</span>
                      <span className="text-sm font-extrabold text-lime-500 font-mono">{currentProject.portfolioImpact}/100</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] font-mono text-stone-400 block">RESUME SIGNAL</span>
                      <span className="text-sm font-extrabold text-lime-500 font-mono">{currentProject.resumeImpact}/100</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed pt-1">
                  {currentProject.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {currentProject.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="border-stone-200 dark:border-white/10 bg-transparent text-stone-600 dark:text-stone-300 font-mono text-[9px] py-0.5 px-2"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
            </Card>

            <Card className="border-stone-200 dark:border-white/10">
              <CardHeader>
                <CardTitle className="text-sm font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                  <Layout className="w-4 h-4 text-lime-400" />
                  Project Implementation Roadmap
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 pt-2 pl-6">
                <div className="relative pl-6 border-l border-stone-200 dark:border-stone-800 space-y-6">
                  {currentProject.milestones.map((milestone, i) => (
                    <div key={i} className="relative">
                      <span className="absolute -left-[30px] top-0.5 w-4.5 h-4.5 rounded-full bg-stone-900 border border-stone-800 text-lime-400 flex items-center justify-center font-mono text-[9px] font-bold">
                        {i + 1}
                      </span>
                      <div className="space-y-1">
                        <h4 className="text-xs font-bold text-stone-900 dark:text-stone-50">
                          {milestone.title}
                        </h4>
                        <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
