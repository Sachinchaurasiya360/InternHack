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
  Plus,
  Trash2,
  CheckCircle2,
  Building2,
  Calendar,
  Save,
} from "lucide-react";
import {
  fetchCareerIntelligence,
  fetchStudentGoals,
  saveStudentGoals,
  CareerIntelligenceResult,
  StudentGoals,
} from "./api/opensource.api";
import { Button } from "../../../components/ui/button";
import { SEO } from "../../../components/SEO";
import { Card, CardHeader, CardTitle, CardContent } from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";

// Custom SVG Radar Chart Component
function CareerRadarChart({ scores }: { scores: { ats: number; github: number; os: number; readiness: number; gap: number } }) {
  const categories = [
    { label: "ATS Resume", value: scores.ats },
    { label: "GitHub Analytics", value: scores.github },
    { label: "Open Source", value: scores.os },
    { label: "Internship Readiness", value: scores.readiness },
    { label: "Career Gap Match", value: scores.gap },
  ];

  const size = 300;
  const center = size / 2;
  const maxRadius = 100;
  const numPoints = categories.length;

  // Compute coordinate points
  const getCoordinates = (index: number, value: number) => {
    const angle = (index * (360 / numPoints) - 90) * (Math.PI / 180);
    const r = (value / 100) * maxRadius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return { x, y };
  };

  // Generate grid lines (polygons) at 20, 40, 60, 80, 100
  const gridLevels = [20, 40, 60, 80, 100];
  const gridPaths = gridLevels.map((level) => {
    const points = Array.from({ length: numPoints }, (_, i) => {
      const { x, y } = getCoordinates(i, level);
      return `${x},${y}`;
    }).join(" ");
    return points;
  });

  // Calculate actual user scores path
  const userPoints = Array.from({ length: numPoints }, (_, i) => {
    const { x, y } = getCoordinates(i, categories[i].value);
    return `${x},${y}`;
  }).join(" ");

  return (
    <div className="flex flex-col items-center justify-center">
      <svg width={size} height={size} className="overflow-visible">
        {/* Background Grids */}
        {gridPaths.map((path, idx) => (
          <polygon
            key={idx}
            points={path}
            fill="none"
            className="stroke-stone-200 dark:stroke-white/5"
            strokeWidth="1"
          />
        ))}

        {/* Axis lines */}
        {Array.from({ length: numPoints }, (_, i) => {
          const outer = getCoordinates(i, 100);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={outer.x}
              y2={outer.y}
              className="stroke-stone-200 dark:stroke-white/5"
              strokeWidth="1"
            />
          );
        })}

        {/* User score polygon */}
        <polygon
          points={userPoints}
          className="fill-lime-400/20 stroke-lime-400"
          strokeWidth="2"
        />

        {/* User score dots */}
        {Array.from({ length: numPoints }, (_, i) => {
          const { x, y } = getCoordinates(i, categories[i].value);
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="4"
              className="fill-lime-400 stroke-stone-900 dark:stroke-stone-950"
              strokeWidth="1.5"
            />
          );
        })}

        {/* Labels */}
        {Array.from({ length: numPoints }, (_, i) => {
          const pos = getCoordinates(i, 115);
          // Adjust text alignment based on position
          let textAnchor = "middle";
          if (pos.x > center + 10) textAnchor = "start";
          if (pos.x < center - 10) textAnchor = "end";

          return (
            <text
              key={i}
              x={pos.x}
              y={pos.y + 4}
              textAnchor={textAnchor}
              className="fill-stone-500 dark:fill-stone-400 font-mono text-[9px] uppercase tracking-wider font-bold"
            >
              {categories[i].label} ({categories[i].value})
            </text>
          );
        })}
      </svg>
    </div>
  );
}

export default function CareerIntelligencePage() {
  const queryClient = useQueryClient();
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Goals Form State
  const [targetRole, setTargetRole] = useState("");
  const [targetCompany, setTargetCompany] = useState("");
  const [targetInternship, setTargetInternship] = useState("");

  const [newWeeklyGoal, setNewWeeklyGoal] = useState("");
  const [weeklyGoals, setWeeklyGoals] = useState<{ id: string; text: string; completed: boolean }[]>([]);

  const [newMonthlyGoal, setNewMonthlyGoal] = useState("");
  const [monthlyGoals, setMonthlyGoals] = useState<{ id: string; text: string; completed: boolean }[]>([]);

  const [newMilestoneTitle, setNewMilestoneTitle] = useState("");
  const [newMilestoneDate, setNewMilestoneDate] = useState("");
  const [milestones, setMilestones] = useState<{ id: string; title: string; date: string; completed: boolean }[]>([]);

  const [isSaving, setIsSaving] = useState(false);

  // Fetch Career Intelligence
  const { data: intelData, isLoading: intelLoading, isError: intelError, refetch: intelRefetch } = useQuery({
    queryKey: ["opensource", "career-intelligence"],
    queryFn: () => fetchCareerIntelligence(false),
    staleTime: 10 * 60 * 1000,
  });

  // Fetch Goals
  const { isLoading: goalsLoading } = useQuery({
    queryKey: ["opensource", "student-goals"],
    queryFn: async () => {
      const data = await fetchStudentGoals();
      setTargetRole(data.targetRole || "");
      setTargetCompany(data.targetCompany || "");
      setTargetInternship(data.targetInternship || "");
      setWeeklyGoals(data.weeklyGoals || []);
      setMonthlyGoals(data.monthlyGoals || []);
      setMilestones(data.milestones || []);
      return data;
    },
    staleTime: Infinity, // keep goals cached
  });

  // Re-evaluate mutation
  const refreshMutation = useMutation({
    mutationFn: () => fetchCareerIntelligence(true),
    onSuccess: (newData) => {
      queryClient.setQueryData(["opensource", "career-intelligence"], newData);
    },
    onSettled: () => {
      setIsRefreshing(false);
    },
  });

  const handleRefresh = () => {
    setIsRefreshing(true);
    refreshMutation.mutate();
  };

  // Save Goals Mutation
  const saveGoalsMutation = useMutation({
    mutationFn: (payload: StudentGoals) => saveStudentGoals(payload),
    onSuccess: (newData) => {
      queryClient.setQueryData(["opensource", "student-goals"], newData);
    },
    onSettled: () => {
      setIsSaving(false);
    },
  });

  const handleSaveGoals = () => {
    setIsSaving(true);
    saveGoalsMutation.mutate({
      targetRole,
      targetCompany,
      targetInternship,
      weeklyGoals,
      monthlyGoals,
      milestones,
    });
  };

  // Goal List Helpers
  const addWeeklyGoal = () => {
    if (!newWeeklyGoal.trim()) return;
    setWeeklyGoals([...weeklyGoals, { id: Math.random().toString(36).substring(7), text: newWeeklyGoal.trim(), completed: false }]);
    setNewWeeklyGoal("");
  };

  const removeWeeklyGoal = (id: string) => {
    setWeeklyGoals(weeklyGoals.filter((g) => g.id !== id));
  };

  const toggleWeeklyGoal = (id: string) => {
    setWeeklyGoals(weeklyGoals.map((g) => (g.id === id ? { ...g, completed: !g.completed } : g)));
  };

  const addMonthlyGoal = () => {
    if (!newMonthlyGoal.trim()) return;
    setMonthlyGoals([...monthlyGoals, { id: Math.random().toString(36).substring(7), text: newMonthlyGoal.trim(), completed: false }]);
    setNewMonthlyGoal("");
  };

  const removeMonthlyGoal = (id: string) => {
    setMonthlyGoals(monthlyGoals.filter((g) => g.id !== id));
  };

  const toggleMonthlyGoal = (id: string) => {
    setMonthlyGoals(monthlyGoals.map((g) => (g.id === id ? { ...g, completed: !g.completed } : g)));
  };

  const addMilestone = () => {
    if (!newMilestoneTitle.trim() || !newMilestoneDate) return;
    setMilestones([
      ...milestones,
      {
        id: Math.random().toString(36).substring(7),
        title: newMilestoneTitle.trim(),
        date: newMilestoneDate,
        completed: false,
      },
    ]);
    setNewMilestoneTitle("");
    setNewMilestoneDate("");
  };

  const removeMilestone = (id: string) => {
    setMilestones(milestones.filter((m) => m.id !== id));
  };

  const toggleMilestone = (id: string) => {
    setMilestones(milestones.map((m) => (m.id === id ? { ...m, completed: !m.completed } : m)));
  };

  if (intelLoading || goalsLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <div className="relative">
          <div className="w-12 h-12 border-4 border-lime-400/20 border-t-lime-400 rounded-full animate-spin" />
          <Sparkles className="w-5 h-5 text-lime-400 absolute inset-0 m-auto animate-pulse" />
        </div>
        <p className="text-sm font-mono text-stone-500 uppercase tracking-widest animate-pulse">
          Computing Career Intelligence...
        </p>
      </div>
    );
  }

  if (intelError || !intelData) {
    return (
      <div className="max-w-md mx-auto text-center py-16 space-y-6">
        <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/25 flex items-center justify-center text-red-500 mx-auto">
          <AlertTriangle className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-stone-900 dark:text-stone-50">Evaluation failed</h3>
        <p className="text-sm text-stone-500 dark:text-stone-400">Failed to aggregate career signals.</p>
        <Button onClick={() => intelRefetch()}>Retry Evaluation</Button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 space-y-8">
      <SEO title="Career Intelligence Platform" noIndex />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-1.5 mb-1">
            <span className="h-1.5 w-1.5 bg-lime-400 rounded-full" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              Unified OS Intelligence
            </span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-stone-900 dark:text-stone-50">
            Career Intelligence Platform
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

      {/* Top Section: Composite Ring & Radar Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Overall Ring Score */}
        <Card className="border-stone-200 dark:border-white/10 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-32 h-32 bg-lime-400/5 rounded-full blur-2xl pointer-events-none" />
          <CardHeader>
            <CardTitle className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-lime-400" />
              Composite Career Score
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center py-6 relative">
            <div className="relative w-36 h-36 flex items-center justify-center">
              {/* Circular SVG Ring */}
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  className="stroke-stone-100 dark:stroke-stone-900"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  className="stroke-lime-400"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={263.8}
                  strokeDashoffset={263.8 - (263.8 * intelData.overallScore) / 100}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-4xl font-extrabold text-stone-900 dark:text-stone-50 font-mono">
                  {intelData.overallScore}
                </span>
                <span className="text-[8px] font-mono text-stone-400 uppercase tracking-wider">
                  Out of 100
                </span>
              </div>
            </div>
            <p className="text-[10px] font-mono text-stone-400 text-center mt-4 uppercase tracking-widest max-w-[200px]">
              weighted average of all active developer modules
            </p>
          </CardContent>
        </Card>

        {/* Radar Chart */}
        <Card className="border-stone-200 dark:border-white/10 lg:col-span-2 flex flex-col justify-between">
          <CardHeader>
            <CardTitle className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-lime-400" />
              Developer Profile Balance
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center pb-6">
            <CareerRadarChart scores={intelData.components} />
          </CardContent>
        </Card>
      </div>

      {/* Component Scores Breakdown */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[
          { label: "ATS Resume", value: intelData.components.atsScore, icon: Code2 },
          { label: "GitHub Analytics", value: intelData.components.githubScore, icon: Award },
          { label: "Open Source", value: intelData.components.openSourceScore, icon: Layers },
          { label: "Internship Readiness", value: intelData.components.readinessScore, icon: Sparkles },
          { label: "Career Gap Match", value: intelData.components.gapScore, icon: Target },
        ].map((comp, idx) => (
          <Card key={idx} className="border-stone-200 dark:border-white/10 text-center p-4">
            <comp.icon className="w-5 h-5 text-lime-400 mx-auto mb-2" />
            <span className="text-[9px] font-mono text-stone-400 uppercase tracking-wider block mb-1">
              {comp.label}
            </span>
            <span className="text-xl font-extrabold font-mono text-stone-900 dark:text-stone-50">
              {comp.value}
            </span>
          </Card>
        ))}
      </div>

      {/* Career Health Report */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* AI Health Summary & Strengths */}
        <div className="md:col-span-2 space-y-6">
          <Card className="border-stone-200 dark:border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-lime-400/5 rounded-full blur-2xl pointer-events-none" />
            <CardHeader>
              <CardTitle className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-lime-400" />
                AI Career Health Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-semibold">
                {intelData.healthReport.summary}
              </p>
              <hr className="border-stone-100 dark:border-stone-900" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider font-bold">
                    Key Strengths
                  </span>
                  <div className="space-y-2">
                    {intelData.healthReport.strengths.map((str, i) => (
                      <div key={i} className="flex gap-2 text-xs text-stone-500 dark:text-stone-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{str}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-rose-400 uppercase tracking-wider font-bold">
                    Growth Points
                  </span>
                  <div className="space-y-2">
                    {intelData.healthReport.weaknesses.map((weak, i) => (
                      <div key={i} className="flex gap-2 text-xs text-stone-500 dark:text-stone-400">
                        <AlertCircle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                        <span>{weak}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Priority Recommendations */}
        <div className="md:col-span-1">
          <Card className="border-stone-200 dark:border-white/10 h-full">
            <CardHeader>
              <CardTitle className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-lime-400" />
                Impact Priorities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-1">
              {intelData.healthReport.priorities.map((prio, idx) => (
                <div key={idx} className="p-3 border border-stone-100 dark:border-stone-900 rounded-lg space-y-1.5 bg-stone-500/[0.01]">
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-[10px] font-mono text-lime-400 uppercase font-bold">
                      {prio.action.substring(0, 15)}...
                    </span>
                    <Badge className="text-[7px] font-mono px-1 py-0.2 bg-rose-500/10 text-rose-500 border border-rose-500/20">
                      {prio.impact} Impact
                    </Badge>
                  </div>
                  <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                    {prio.action}
                  </p>
                  <p className="text-[10px] text-stone-400 leading-relaxed font-mono">
                    Why: {prio.reason}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Goals and Milestones Editor */}
      <Card className="border-stone-200 dark:border-white/10">
        <CardHeader className="flex flex-row items-center justify-between gap-4 border-b border-stone-100 dark:border-stone-900 pb-4">
          <CardTitle className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
            <Target className="w-4 h-4 text-lime-400" />
            Goals & Milestones Tracker
          </CardTitle>
          <Button onClick={handleSaveGoals} disabled={isSaving} size="sm" className="font-mono text-xs gap-1.5 bg-lime-400 text-stone-950 hover:bg-lime-300">
            <Save className="w-3.5 h-3.5" />
            {isSaving ? "SAVING..." : "SAVE PROGRESS"}
          </Button>
        </CardHeader>
        <CardContent className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-6">
          {/* Targets Configuration */}
          <div className="lg:col-span-1 space-y-6">
            <div className="space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 font-bold block">
                Primary Targets
              </span>
              <div className="space-y-3">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-stone-400 block uppercase">Target Role</label>
                  <div className="relative">
                    <Briefcase className="w-3.5 h-3.5 absolute left-3 top-3 text-stone-400" />
                    <input
                      type="text"
                      placeholder="e.g. Frontend Engineer"
                      value={targetRole}
                      onChange={(e) => setTargetRole(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-800 text-xs rounded pl-9 pr-3 py-2.5 focus:outline-none focus:border-lime-500 font-mono text-stone-100"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-stone-400 block uppercase">Target Company</label>
                  <div className="relative">
                    <Building2 className="w-3.5 h-3.5 absolute left-3 top-3 text-stone-400" />
                    <input
                      type="text"
                      placeholder="e.g. Stripe, Vercel"
                      value={targetCompany}
                      onChange={(e) => setTargetCompany(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-800 text-xs rounded pl-9 pr-3 py-2.5 focus:outline-none focus:border-lime-500 font-mono text-stone-100"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-stone-400 block uppercase">Target Internship</label>
                  <div className="relative">
                    <Clock className="w-3.5 h-3.5 absolute left-3 top-3 text-stone-400" />
                    <input
                      type="text"
                      placeholder="e.g. Fall 2026 Co-op"
                      value={targetInternship}
                      onChange={(e) => setTargetInternship(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-800 text-xs rounded pl-9 pr-3 py-2.5 focus:outline-none focus:border-lime-500 font-mono text-stone-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Weekly & Monthly Goals */}
          <div className="lg:col-span-1 space-y-6">
            {/* Weekly Goal List */}
            <div className="space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 font-bold block">
                Weekly Goals
              </span>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Add weekly target..."
                  value={newWeeklyGoal}
                  onChange={(e) => setNewWeeklyGoal(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && addWeeklyGoal()}
                  className="flex-1 bg-stone-900 border border-stone-800 text-xs rounded px-3 py-1.5 focus:outline-none focus:border-lime-500 font-mono text-stone-100"
                />
                <Button onClick={addWeeklyGoal} size="sm" className="h-8 w-8 bg-lime-400 hover:bg-lime-300 text-stone-950 p-0 flex items-center justify-center">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <div className="space-y-2 max-h-[180px] overflow-y-auto pr-1">
                {weeklyGoals.map((goal) => (
                  <div key={goal.id} className="flex justify-between items-center gap-3 p-2 border border-stone-100 dark:border-stone-900 rounded bg-stone-500/[0.01]">
                    <div className="flex items-center gap-2 flex-1">
                      <input
                        type="checkbox"
                        checked={goal.completed}
                        onChange={() => toggleWeeklyGoal(goal.id)}
                        className="rounded border-stone-800 accent-lime-400 h-3.5 w-3.5"
                      />
                      <span className={`text-xs ${goal.completed ? "line-through text-stone-500" : "text-stone-700 dark:text-stone-300"}`}>
                        {goal.text}
                      </span>
                    </div>
                    <button onClick={() => removeWeeklyGoal(goal.id)} className="text-stone-400 hover:text-rose-500 transition-colors">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Monthly Goal List */}
            <div className="space-y-3 pt-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 font-bold block">
                Monthly Goals
              </span>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Add monthly target..."
                  value={newMonthlyGoal}
                  onChange={(e) => setNewMonthlyGoal(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && addMonthlyGoal()}
                  className="flex-1 bg-stone-900 border border-stone-800 text-xs rounded px-3 py-1.5 focus:outline-none focus:border-lime-500 font-mono text-stone-100"
                />
                <Button onClick={addMonthlyGoal} size="sm" className="h-8 w-8 bg-lime-400 hover:bg-lime-300 text-stone-950 p-0 flex items-center justify-center">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <div className="space-y-2 max-h-[180px] overflow-y-auto pr-1">
                {monthlyGoals.map((goal) => (
                  <div key={goal.id} className="flex justify-between items-center gap-3 p-2 border border-stone-100 dark:border-stone-900 rounded bg-stone-500/[0.01]">
                    <div className="flex items-center gap-2 flex-1">
                      <input
                        type="checkbox"
                        checked={goal.completed}
                        onChange={() => toggleMonthlyGoal(goal.id)}
                        className="rounded border-stone-800 accent-lime-400 h-3.5 w-3.5"
                      />
                      <span className={`text-xs ${goal.completed ? "line-through text-stone-500" : "text-stone-700 dark:text-stone-300"}`}>
                        {goal.text}
                      </span>
                    </div>
                    <button onClick={() => removeMonthlyGoal(goal.id)} className="text-stone-400 hover:text-rose-500 transition-colors">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Milestones Tracker */}
          <div className="lg:col-span-1 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 font-bold block">
              Key Milestones
            </span>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Milestone title..."
                value={newMilestoneTitle}
                onChange={(e) => setNewMilestoneTitle(e.target.value)}
                className="w-full bg-stone-900 border border-stone-800 text-xs rounded px-3 py-1.5 focus:outline-none focus:border-lime-500 font-mono text-stone-100"
              />
              <div className="flex gap-2">
                <input
                  type="date"
                  value={newMilestoneDate}
                  onChange={(e) => setNewMilestoneDate(e.target.value)}
                  className="flex-1 bg-stone-900 border border-stone-800 text-xs rounded px-3 py-1.5 focus:outline-none focus:border-lime-500 font-mono text-stone-400"
                />
                <Button onClick={addMilestone} size="sm" className="h-8 w-8 bg-lime-400 hover:bg-lime-300 text-stone-950 p-0 flex items-center justify-center">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1 pt-2">
              {milestones.map((ms) => (
                <div key={ms.id} className="flex justify-between items-center gap-3 p-2 border border-stone-100 dark:border-stone-900 rounded bg-stone-500/[0.01]">
                  <div className="flex items-start gap-2 flex-1">
                    <input
                      type="checkbox"
                      checked={ms.completed}
                      onChange={() => toggleMilestone(ms.id)}
                      className="rounded border-stone-800 accent-lime-400 h-3.5 w-3.5 mt-0.5"
                    />
                    <div className="space-y-0.5">
                      <span className={`text-xs block leading-tight ${ms.completed ? "line-through text-stone-500" : "text-stone-700 dark:text-stone-300"}`}>
                        {ms.title}
                      </span>
                      <span className="text-[8px] font-mono text-stone-400 flex items-center gap-1 uppercase">
                        <Calendar className="w-2.5 h-2.5" />
                        {ms.date}
                      </span>
                    </div>
                  </div>
                  <button onClick={() => removeMilestone(ms.id)} className="text-stone-400 hover:text-rose-500 transition-colors">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
