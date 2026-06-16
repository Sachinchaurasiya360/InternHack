import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Circle,
  Trophy,
  Brain,
  Code2,
  BookOpen,
  GraduationCap,
  RefreshCw,
  Target,
  ChevronRight,
  Compass,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { SEO } from "../../../../components/SEO";
import { Button } from "../../../../components/ui/button";
import api from "../../../../lib/axios";
import { PREP_PLANS, type PrepTask, type PrepDay, type TaskType } from "./placementPrepData";
import type { DsaProgress, AptitudeCategory } from "../../../../lib/types/learning.types";

interface InterviewProgress {
  completedIds: string[];
}

export default function PlacementPrepPlansPage() {
  const [activePlanId, setActivePlanId] = useState<string | null>(() =>
    localStorage.getItem("active-placement-prep-plan")
  );
  const [selectedDayNum, setSelectedDayNum] = useState<number>(1);
  const [manualCompletions, setManualCompletions] = useState<Record<string, boolean>>(() => {
    const activeId = localStorage.getItem("active-placement-prep-plan");
    if (activeId) {
      const stored = localStorage.getItem(`placement-prep-progress-${activeId}`);
      if (stored) {
        try {
          return JSON.parse(stored);
        } catch {
          return {};
        }
      }
    }
    return {};
  });

  // 1. Fetch backend progress metrics to auto-check tasks
  const dsaProgressQuery = useQuery<DsaProgress>({
    queryKey: ["dsa-progress-summary"],
    queryFn: () => api.get<DsaProgress>("/dsa/my-progress").then((r) => r.data),
    staleTime: 30_000,
    retry: false,
  });

  const aptitudeCategoriesQuery = useQuery<AptitudeCategory[]>({
    queryKey: ["aptitude-categories-list"],
    queryFn: () => api.get<AptitudeCategory[]>("/aptitude/categories").then((r) => r.data),
    staleTime: 30_000,
    retry: false,
  });

  const interviewProgressQuery = useQuery<InterviewProgress>({
    queryKey: ["interview-progress-summary"],
    queryFn: () => api.get<InterviewProgress>("/learn/interview/progress").then((r) => r.data),
    staleTime: 30_000,
    retry: false,
  });



  const activePlan = useMemo(() => {
    return PREP_PLANS.find((p) => p.id === activePlanId) || null;
  }, [activePlanId]);

  // Compute completed state for any task
  const isTaskCompleted = (task: PrepTask): boolean => {
    // Check manual override first
    if (manualCompletions[task.id]) return true;

    // Check Auto-completion metrics
    if (task.type === "dsa") {
      const solvedSlugs = dsaProgressQuery.data?.solvedSlugs || [];
      return solvedSlugs.includes(task.refId);
    }

    if (task.type === "aptitude") {
      const categories = aptitudeCategoriesQuery.data || [];
      // Find the topic inside the categories list to see if answered count is >= 1
      for (const cat of categories) {
        const topic = cat.topics?.find((t) => t.slug === task.refId);
        if (topic && topic.answeredCount > 0) return true;
      }
      return false;
    }

    if (task.type === "interview") {
      const completedIds = interviewProgressQuery.data?.completedIds || [];
      return completedIds.includes(task.refId);
    }

    if (task.type === "core") {
      try {
        const raw = localStorage.getItem(`${task.refId}-progress`);
        if (raw) {
          const progress = JSON.parse(raw);
          const values = Object.values(progress) as { completed?: boolean }[];
          return values.length > 0 && values.every((v) => v?.completed);
        }
      } catch {
        return false;
      }
      return false;
    }

    if (task.type === "exam") {
      try {
        const raw = localStorage.getItem("exam-attempts-history");
        if (raw) {
          const history = JSON.parse(raw);
          return !!history[task.refId];
        }
      } catch {
        return false;
      }
      return false;
    }

    return false;
  };

  const getDayCompletedCount = (day: PrepDay): number => {
    return day.tasks.filter(isTaskCompleted).length;
  };

  const isDayCompleted = (day: PrepDay): boolean => {
    return day.tasks.length > 0 && day.tasks.every(isTaskCompleted);
  };

  // Select the active plan's total stats
  const planStats = useMemo(() => {
    if (!activePlan) return { totalTasks: 0, completedTasks: 0, percentage: 0 };
    let totalTasks = 0;
    let completedTasks = 0;
    for (const d of activePlan.days) {
      totalTasks += d.tasks.length;
      completedTasks += d.tasks.filter(isTaskCompleted).length;
    }
    const percentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
    return { totalTasks, completedTasks, percentage };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePlan, manualCompletions, dsaProgressQuery.data, aptitudeCategoriesQuery.data, interviewProgressQuery.data]);

  // Set default selected day to the first incomplete day
  useEffect(() => {
    if (activePlan) {
      const firstIncompleteDay = activePlan.days.find((d) => !isDayCompleted(d));
      let timer: NodeJS.Timeout;
      if (firstIncompleteDay) {
        timer = setTimeout(() => {
          setSelectedDayNum(firstIncompleteDay.day);
        }, 0);
      } else {
        timer = setTimeout(() => {
          setSelectedDayNum(1);
        }, 0);
      }
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePlanId]);

  const toggleTaskManual = (taskId: string) => {
    if (!activePlanId) return;
    const next = { ...manualCompletions, [taskId]: !manualCompletions[taskId] };
    setManualCompletions(next);
    localStorage.setItem(`placement-prep-progress-${activePlanId}`, JSON.stringify(next));
  };

  const handleEnroll = (planId: string) => {
    localStorage.setItem("active-placement-prep-plan", planId);
    setActivePlanId(planId);
    const stored = localStorage.getItem(`placement-prep-progress-${planId}`);
    if (stored) {
      try {
        setManualCompletions(JSON.parse(stored));
      } catch {
        setManualCompletions({});
      }
    } else {
      setManualCompletions({});
    }
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset your progress? This will clear manual check-offs.")) {
      if (activePlanId) {
        localStorage.removeItem(`placement-prep-progress-${activePlanId}`);
        setManualCompletions({});
      }
    }
  };

  const handleLeavePlan = () => {
    if (window.confirm("Are you sure you want to switch or leave your current plan? Your progress will remain saved.")) {
      localStorage.removeItem("active-placement-prep-plan");
      setActivePlanId(null);
      setManualCompletions({});
    }
  };

  const getTaskIcon = (type: TaskType) => {
    switch (type) {
      case "dsa":
        return <Code2 className="w-4 h-4 text-sky-500" />;
      case "aptitude":
        return <Brain className="w-4 h-4 text-purple-500" />;
      case "core":
        return <BookOpen className="w-4 h-4 text-emerald-500" />;
      case "interview":
        return <GraduationCap className="w-4 h-4 text-violet-500" />;
      case "exam":
        return <Trophy className="w-4 h-4 text-amber-500" />;
    }
  };

  const getTaskBadgeStyle = (type: TaskType) => {
    switch (type) {
      case "dsa":
        return "bg-sky-100 dark:bg-sky-950/30 text-sky-700 dark:text-sky-400 border border-sky-200 dark:border-sky-800/50";
      case "aptitude":
        return "bg-purple-100 dark:bg-purple-950/30 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-800/50";
      case "core":
        return "bg-emerald-100 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50";
      case "interview":
        return "bg-violet-100 dark:bg-violet-950/30 text-violet-700 dark:text-violet-400 border border-violet-200 dark:border-violet-800/50";
      case "exam":
        return "bg-amber-100 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800/50";
    }
  };

  return (
    <div className="relative text-stone-900 dark:text-stone-50 pb-16 min-h-[80vh]">
      <SEO
        title="Placement Prep Plans - InternHack"
        description="Ace your placements with our structured 30, 60, and 90-day study crash courses covering DSA, Aptitude, Core Subjects, and Mocks."
      />

      {/* Hero Header without pill badge */}
      <div className="mt-8 mb-10 border-b border-stone-200 dark:border-white/10 pb-8 flex flex-wrap items-end justify-between gap-6">
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500">
            <span className="h-1.5 w-1.5 bg-lime-400" />
            learn / placement prep plans
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
            Placement Prep <span className="text-lime-500 dark:text-lime-400">Plans.</span>
          </h1>
          <p className="mt-3 text-sm text-stone-500 max-w-xl">
            Choose a structured roadmap matching your interview timeline to master core concepts, practice targeted questions, and clear company-specific mock criteria.
          </p>
        </div>

        {activePlan && (
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              onClick={handleLeavePlan}
              className="text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 text-xs gap-1.5"
            >
              <Compass className="w-3.5 h-3.5" />
              Switch Plan
            </Button>
            <Button
              variant="ghost"
              onClick={handleReset}
              className="text-red-500 hover:text-red-600 dark:hover:text-red-400 text-xs gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Reset Progress
            </Button>
          </div>
        )}
      </div>

      <AnimatePresence mode="wait">
        {!activePlan ? (
          // ── PLAN SELECTION VIEW ──
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6"
          >
            {PREP_PLANS.map((plan, index) => {
              const Icon = plan.id === "30-day" ? Target : plan.id === "60-day" ? Brain : Trophy;
              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative flex flex-col bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-xl p-6 hover:border-lime-400 dark:hover:border-lime-400 transition-all shadow-sm"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-lime-50 dark:bg-lime-900/10 border border-lime-200 dark:border-lime-900/30 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-lime-600 dark:text-lime-400" />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-wider text-stone-400">
                      {plan.durationDays} Days
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-stone-900 dark:text-stone-50 group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">
                    {plan.title}
                  </h3>
                  <p className="text-xs font-semibold text-stone-500 mt-1 uppercase tracking-wider">
                    Difficulty: {plan.difficulty}
                  </p>

                  <p className="text-sm text-stone-500 dark:text-stone-400 mt-4 flex-grow leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="border-t border-stone-100 dark:border-white/5 pt-4 mt-6 space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-stone-400">Target Role</span>
                      <span className="font-semibold text-stone-700 dark:text-stone-300">{plan.targetRole}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-400">Target Tier</span>
                      <span className="font-semibold text-stone-700 dark:text-stone-300 truncate max-w-[200px]" title={plan.targetTier}>
                        {plan.targetTier}
                      </span>
                    </div>
                  </div>

                  <Button
                    onClick={() => handleEnroll(plan.id)}
                    className="w-full mt-6 bg-lime-400 text-stone-900 hover:bg-lime-500 font-semibold"
                  >
                    Start Prep Plan
                  </Button>
                </motion.div>
              );
            })}
          </motion.div>
        ) : (
          // ── ACTIVE PLAN DASHBOARD ──
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="space-y-6"
          >
            {/* Overview Scorecard Panel */}
            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-xl p-6 shadow-sm">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-lime-500 font-semibold">
                    active track
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-50 mt-1">
                    {activePlan.title}
                  </h2>
                  <p className="text-sm text-stone-500 dark:text-stone-400 mt-1 max-w-xl">
                    {activePlan.description}
                  </p>
                </div>
                <div className="shrink-0 flex items-center gap-4 bg-stone-50 dark:bg-white/5 px-6 py-4 rounded-xl border border-stone-200/50 dark:border-white/5">
                  <div className="text-center">
                    <p className="text-xs font-mono uppercase tracking-wider text-stone-400">Progress</p>
                    <p className="text-3xl font-extrabold text-stone-900 dark:text-stone-50 tabular-nums">
                      {planStats.percentage}%
                    </p>
                  </div>
                  <div className="h-8 w-px bg-stone-200 dark:bg-white/10" />
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-stone-400">Completed</p>
                    <p className="text-sm font-bold text-stone-700 dark:text-stone-300">
                      {planStats.completedTasks} / {planStats.totalTasks} Tasks
                    </p>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-stone-100 dark:bg-white/5 h-2 rounded-full overflow-hidden mt-6">
                <motion.div
                  className="bg-lime-400 h-full rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${planStats.percentage}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>
            </div>

            {/* Grid Layout: Left Day Navigator, Right Task Checklist */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column: Day Scroll List */}
              <div className="lg:col-span-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-xl p-4 shadow-sm max-h-[600px] overflow-y-auto">
                <div className="text-xs font-bold font-mono uppercase tracking-widest text-stone-400 mb-3 px-2">
                  Timeline
                </div>
                <div className="space-y-1.5">
                  {activePlan.days.map((d) => {
                    const completed = isDayCompleted(d);
                    const selected = d.day === selectedDayNum;
                    const solvedCount = getDayCompletedCount(d);
                    const totalCount = d.tasks.length;

                    return (
                      <button
                        key={d.day}
                        onClick={() => setSelectedDayNum(d.day)}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left transition-all ${
                          selected
                            ? "bg-stone-900 dark:bg-stone-850 text-white shadow-md border-l-4 border-lime-400"
                            : "hover:bg-stone-50 dark:hover:bg-white/5 text-stone-750 dark:text-stone-300"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          {completed ? (
                            <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
                          ) : (
                            <Circle className={`w-4 h-4 shrink-0 ${selected ? "text-stone-400" : "text-stone-600"}`} />
                          )}
                          <div className="min-w-0">
                            <span className="text-xs font-mono uppercase tracking-wider block leading-none text-stone-400">
                              Day {d.day}
                            </span>
                            <span className="text-xs font-semibold truncate block mt-1">
                              {d.title}
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono shrink-0 tabular-nums ml-2 opacity-80">
                          {solvedCount}/{totalCount}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Active Day Tasks */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center justify-between border-b border-stone-200 dark:border-white/10 pb-3">
                  <div>
                    <h3 className="text-lg font-bold text-stone-900 dark:text-stone-50">
                      Day {selectedDayNum} Syllabus
                    </h3>
                    <p className="text-xs text-stone-500">
                      {activePlan.days.find((d) => d.day === selectedDayNum)?.title}
                    </p>
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-stone-400">
                    {activePlan.days.find((d) => d.day === selectedDayNum)?.tasks.length || 0} tasks
                  </span>
                </div>

                <div className="space-y-3">
                  {activePlan.days
                    .find((d) => d.day === selectedDayNum)
                    ?.tasks.map((task) => {
                      const completed = isTaskCompleted(task);

                      return (
                        <div
                          key={task.id}
                          className="flex items-start gap-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-xl p-5 shadow-sm hover:border-stone-300 dark:hover:border-white/15 transition-all group"
                        >
                          {/* Checkbox button */}
                          <button
                            onClick={() => toggleTaskManual(task.id)}
                            className="mt-0.5 shrink-0 focus:outline-none"
                            title="Toggle completed state"
                          >
                            {completed ? (
                              <CheckCircle2 className="w-5 h-5 text-lime-500 dark:text-lime-400 fill-lime-500/10" />
                            ) : (
                              <Circle className="w-5 h-5 text-stone-300 dark:text-stone-700 hover:text-lime-400 transition-colors" />
                            )}
                          </button>

                          {/* Task Description */}
                          <div className="flex-grow min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className={`text-[10px] px-2 py-0.5 rounded-md font-mono uppercase tracking-wider font-semibold ${getTaskBadgeStyle(task.type)}`}>
                                <span className="inline-block mr-1">{getTaskIcon(task.type)}</span>
                                {task.type}
                              </span>
                              {completed && (
                                <span className="text-[10px] text-lime-600 dark:text-lime-400 font-medium font-mono uppercase tracking-wider bg-lime-50 dark:bg-lime-950/20 px-1.5 py-0.5 rounded">
                                  COMPLETED
                                </span>
                              )}
                            </div>
                            <h4 className="text-sm font-bold text-stone-900 dark:text-stone-50 mt-2">
                              {task.title}
                            </h4>
                            <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 leading-relaxed">
                              {task.description}
                            </p>
                          </div>

                          {/* Action Button */}
                          <Link
                            to={task.link}
                            className="shrink-0 self-center no-underline"
                          >
                            <Button
                              variant={completed ? "secondary" : "primary"}
                              size="sm"
                              className="text-xs flex items-center gap-1 bg-lime-400 text-stone-900 hover:bg-lime-500"
                            >
                              <span>{task.type === "exam" ? "Take Mock" : task.type === "core" ? "Learn" : "Practice"}</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </Button>
                          </Link>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
