import { useEffect, useState, useCallback, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp, DollarSign, Layers, Clock, Trash2, CheckCircle2, BookOpen, Route } from "lucide-react";
import api from "../../lib/axios";
import type { Career, CareerPhase } from "../../lib/types";
import RoadmapTimeline from "./components/RoadmapTimeline";
import { getTopicsForSkill } from "./components/skillTopics";
import { LoadingScreen } from "../../components/LoadingScreen";
import toast from "react-hot-toast";

interface PathDetail extends Career {
  enrollment: { id: number; status: string };
  progress: number;
  completedSkills: number;
  totalSkills: number;
}

const CATEGORY_ACCENT: Record<string, string> = {
  ENGINEERING: "from-blue-500 to-blue-600",
  DATA:        "from-purple-500 to-purple-600",
  DESIGN:      "from-pink-500 to-rose-600",
  PRODUCT:     "from-orange-400 to-amber-500",
  MARKETING:   "from-green-500 to-emerald-600",
  DEVOPS:      "from-cyan-500 to-teal-600",
  SECURITY:    "from-red-500 to-red-600",
  OTHER:       "from-gray-500 to-gray-600",
};

export default function CareerProgressPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [detail, setDetail] = useState<PathDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [topicRefresh, setTopicRefresh] = useState(0);

  const fetchDetail = useCallback(() => {
    api.get(`/careers/my-paths/${slug}`).then((res) => {
      setDetail(res.data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, [slug]);

  useEffect(() => { fetchDetail(); }, [fetchDetail]);

  const handleToggleSkill = async (skillId: number) => {
    try {
      const res = await api.post(`/careers/skills/${String(skillId)}/toggle`);
      const { completed } = res.data as { skillId: number; completed: boolean };

      setDetail((prev) => {
        if (!prev || !prev.phases) return prev;
        const updatedPhases: CareerPhase[] = prev.phases.map((phase) => ({
          ...phase,
          skills: phase.skills.map((skill) =>
            skill.id === skillId ? { ...skill, completed } : skill
          ),
        }));
        const totalSkills = updatedPhases.reduce((s, p) => s + p.skills.length, 0);
        const completedSkills = updatedPhases.reduce(
          (s, p) => s + p.skills.filter((sk) => sk.completed).length, 0
        );
        return {
          ...prev,
          phases: updatedPhases,
          completedSkills,
          totalSkills,
          progress: totalSkills > 0 ? Math.round((completedSkills / totalSkills) * 100) : 0,
        };
      });
      setTopicRefresh((n) => n + 1);
    } catch {
      toast.error("Failed to update skill");
    }
  };

  const handleUnenroll = async () => {
    if (!detail) return;
    if (!confirm("Are you sure you want to unenroll? Your topic checkbox progress will remain saved locally.")) return;
    try {
      await api.delete(`/careers/enroll/${String(detail.id)}`);
      toast.success("Unenrolled successfully");
      navigate("/student/careers");
    } catch {
      toast.error("Failed to unenroll");
    }
  };

  // Compute overall topic progress from localStorage
  const topicStats = useMemo(() => {
    if (!detail?.phases) return { total: 0, completed: 0 };
    let total = 0;
    let completed = 0;
    for (const phase of detail.phases) {
      for (const skill of phase.skills) {
        const topics = getTopicsForSkill(skill.name);
        total += topics.length;
        try {
          const saved = localStorage.getItem(`career-topics-${skill.id}`);
          if (saved) completed += (JSON.parse(saved) as number[]).length;
        } catch { /* ignore */ }
      }
    }
    return { total, completed };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detail?.phases, topicRefresh]);

  if (loading) return <LoadingScreen />;

  if (!detail) {
    return (
      <div className="text-center py-16 text-gray-500">
        Career not found or you are not enrolled.
      </div>
    );
  }

  const totalWeeks = detail.phases?.reduce((s, p) => s + (p.durationWeeks ?? 0), 0) ?? 0;
  const gradient = CATEGORY_ACCENT[detail.category] ?? CATEGORY_ACCENT["OTHER"];
  const overallTotal = detail.totalSkills + topicStats.total;
  const overallCompleted = detail.completedSkills + topicStats.completed;
  const overallPct = overallTotal > 0 ? Math.round((overallCompleted / overallTotal) * 100) : 0;

  return (
    <div className="relative max-w-6xl mx-auto pb-12">
      {/* Atmospheric background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-150 h-150 bg-linear-to-br from-indigo-100 to-violet-100 dark:from-indigo-900/20 dark:to-violet-900/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-linear-to-tr from-slate-100 to-blue-100 dark:from-slate-900/20 dark:to-blue-900/20 rounded-full blur-3xl opacity-40" />
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-10"
      >
        <Link
          to="/student/careers"
          className="inline-flex items-center gap-1.5 text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-sm mb-6 no-underline transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> My Career Paths
        </Link>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm text-sm text-gray-600 dark:text-gray-400 mb-6 mx-auto block w-fit">
          <Route className="w-4 h-4 text-indigo-500" />
          <span>Career Roadmap</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-gray-950 dark:text-white mb-3">
          {detail.title.split(" ").slice(0, -1).join(" ")}{" "}
          <span className="text-gradient-accent">{detail.title.split(" ").slice(-1)[0]}</span>
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-500 max-w-xl mx-auto">
          {detail.description}
        </p>
      </motion.div>

      {/* Overall Progress Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 rounded-2xl shadow-sm p-6 mb-6"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-gray-400 dark:text-gray-500" />
            Overall Progress
          </h2>
          <span className="text-sm font-bold text-gray-900 dark:text-white tabular-nums">
            {overallPct}%
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full h-2.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden mb-5">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${overallPct}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`h-full rounded-full ${
              overallPct === 100 ? "bg-green-500" : overallPct > 0 ? "bg-indigo-500" : "bg-gray-200 dark:bg-gray-700"
            }`}
          />
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { value: `${detail.completedSkills}/${detail.totalSkills}`, label: "Skills" },
            { value: `${topicStats.completed}/${topicStats.total}`, label: "Topics" },
            { value: String(detail.phases?.length ?? 0), label: "Phases" },
            { value: totalWeeks > 0 ? `~${totalWeeks}` : "—", label: "Weeks" },
          ].map((stat) => (
            <div key={stat.label} className="bg-gray-50 dark:bg-gray-800/60 rounded-xl px-3.5 py-3 text-center">
              <p className="text-lg font-bold text-gray-900 dark:text-white tabular-nums">{stat.value}</p>
              <p className="text-[11px] text-gray-400 dark:text-gray-500 font-medium mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>

        {overallPct === 100 && (
          <div className="mt-4 flex items-center gap-2 text-sm text-green-600 dark:text-green-400 font-semibold bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl px-4 py-3">
            <CheckCircle2 className="w-4 h-4" />
            Congratulations! You've completed this learning path!
          </div>
        )}
      </motion.div>

      {/* Meta pills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="flex flex-wrap gap-2.5 mb-6"
      >
        {detail.avgSalary && (
          <span className="flex items-center gap-1.5 bg-white dark:bg-gray-900 px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400 shadow-sm">
            <DollarSign className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500" /> {detail.avgSalary}
          </span>
        )}
        {detail.demandLevel && (
          <span className="flex items-center gap-1.5 bg-white dark:bg-gray-900 px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400 shadow-sm">
            <TrendingUp className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500" /> {detail.demandLevel} demand
          </span>
        )}
        <span className="flex items-center gap-1.5 bg-white dark:bg-gray-900 px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400 shadow-sm">
          <Layers className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500" /> {detail.phases?.length ?? 0} phases
        </span>
        {totalWeeks > 0 && (
          <span className="flex items-center gap-1.5 bg-white dark:bg-gray-900 px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400 shadow-sm">
            <Clock className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500" /> ~{totalWeeks} weeks
          </span>
        )}
      </motion.div>

      {/* Tip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 rounded-2xl shadow-sm px-5 py-4 text-sm text-gray-600 dark:text-gray-400 flex items-start gap-3 mb-8"
      >
        <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
          <BookOpen className="w-4 h-4 text-indigo-500" />
        </div>
        <span className="leading-relaxed">
          <strong className="text-gray-900 dark:text-white">How it works:</strong> Click the checkbox to mark a skill as complete. Click the skill name to expand its subtopics — check off each topic as you learn it. Your topic progress is saved in your browser.
        </span>
      </motion.div>

      {/* Learning Guide / Roadmap */}
      {detail.phases && detail.phases.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-5 flex items-center gap-2">
            <Layers className="w-5 h-5 text-gray-400 dark:text-gray-500" />
            Learning Guide
          </h2>
          <RoadmapTimeline
            phases={detail.phases}
            interactive
            onToggleSkill={handleToggleSkill}
            careerSlug={slug}
          />
        </motion.div>
      )}

      {/* Unenroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-8 pt-4 border-t border-gray-100 dark:border-gray-800"
      >
        <button
          onClick={handleUnenroll}
          className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500 hover:text-red-500 transition-colors"
        >
          <Trash2 className="w-4 h-4" /> Unenroll from this path
        </button>
      </motion.div>
    </div>
  );
}
