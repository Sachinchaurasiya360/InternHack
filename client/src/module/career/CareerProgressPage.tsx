import { useEffect, useState, useCallback, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp, DollarSign, Layers, Clock, Trash2, CheckCircle2, BookOpen } from "lucide-react";
import api from "../../lib/axios";
import type { Career, CareerPhase } from "../../lib/types";
import RoadmapTimeline from "./components/RoadmapTimeline";
import { getTopicsForSkill } from "./components/skillTopics";
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

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto animate-pulse space-y-4">
        <div className="h-10 bg-gray-100 rounded-xl w-1/3" />
        <div className="h-24 bg-gray-100 rounded-2xl" />
        <div className="h-48 bg-gray-100 rounded-xl" />
      </div>
    );
  }

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
    <div className="max-w-6xl mx-auto">
      <Link
        to="/student/careers"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-black mb-5 no-underline transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> My Career Paths
      </Link>

      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">

        {/* Title + Description */}
        <div>
          <div className={`h-1.5 w-16 rounded-full bg-linear-to-r ${gradient} mb-3`} />
          <h1 className="text-2xl font-bold text-gray-900 mb-1">{detail.title}</h1>
          <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">{detail.description}</p>
        </div>

        {/* Overall Progress Card */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-bold text-gray-900">Overall Progress</h2>
            <span className="text-sm font-bold text-gray-900 tabular-nums">
              {overallCompleted}/{overallTotal}
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden mb-4">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${overallPct}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`h-full rounded-full ${
                overallPct === 100 ? "bg-green-500" : overallPct > 0 ? "bg-violet-500" : "bg-gray-200"
              }`}
            />
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-gray-50 rounded-xl px-3.5 py-2.5 text-center">
              <p className="text-lg font-bold text-gray-900 tabular-nums">
                {detail.completedSkills}<span className="text-gray-400 font-medium text-sm">/{detail.totalSkills}</span>
              </p>
              <p className="text-[11px] text-gray-400 font-medium">Skills</p>
            </div>
            <div className="bg-gray-50 rounded-xl px-3.5 py-2.5 text-center">
              <p className="text-lg font-bold text-gray-900 tabular-nums">
                {topicStats.completed}<span className="text-gray-400 font-medium text-sm">/{topicStats.total}</span>
              </p>
              <p className="text-[11px] text-gray-400 font-medium">Topics</p>
            </div>
            <div className="bg-gray-50 rounded-xl px-3.5 py-2.5 text-center">
              <p className="text-lg font-bold text-gray-900">{detail.phases?.length ?? 0}</p>
              <p className="text-[11px] text-gray-400 font-medium">Phases</p>
            </div>
            <div className="bg-gray-50 rounded-xl px-3.5 py-2.5 text-center">
              <p className="text-lg font-bold text-gray-900">{totalWeeks > 0 ? `~${totalWeeks}` : "—"}</p>
              <p className="text-[11px] text-gray-400 font-medium">Weeks</p>
            </div>
          </div>

          {overallPct === 100 && (
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600 font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              Congratulations! You've completed this learning path!
            </div>
          )}
        </div>

        {/* Meta pills */}
        <div className="flex flex-wrap gap-2 text-xs text-gray-500">
          {detail.avgSalary && (
            <span className="flex items-center gap-1 bg-white border border-gray-100 px-2.5 py-1.5 rounded-lg shadow-sm">
              <DollarSign className="w-3.5 h-3.5" /> {detail.avgSalary}
            </span>
          )}
          {detail.demandLevel && (
            <span className="flex items-center gap-1 bg-white border border-gray-100 px-2.5 py-1.5 rounded-lg shadow-sm">
              <TrendingUp className="w-3.5 h-3.5" /> {detail.demandLevel} demand
            </span>
          )}
          <span className="flex items-center gap-1 bg-white border border-gray-100 px-2.5 py-1.5 rounded-lg shadow-sm">
            <Layers className="w-3.5 h-3.5" /> {detail.phases?.length ?? 0} phases
          </span>
          {totalWeeks > 0 && (
            <span className="flex items-center gap-1 bg-white border border-gray-100 px-2.5 py-1.5 rounded-lg shadow-sm">
              <Clock className="w-3.5 h-3.5" /> ~{totalWeeks} weeks
            </span>
          )}
        </div>

        {/* Tip */}
        <div className="bg-violet-50 border border-violet-100 rounded-xl px-4 py-3 text-sm text-violet-700 flex items-start gap-2">
          <BookOpen className="w-4 h-4 shrink-0 mt-0.5" />
          <span>
            <strong>How it works:</strong> Click the checkbox to mark a skill as complete. Click the skill name to expand its subtopics — check off each topic as you learn it. Your topic progress is saved in your browser.
          </span>
        </div>

        {/* Learning Guide / Roadmap */}
        {detail.phases && detail.phases.length > 0 && (
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-4">Learning Guide</h2>
            <RoadmapTimeline
              phases={detail.phases}
              interactive
              onToggleSkill={handleToggleSkill}
            />
          </div>
        )}

        {/* Unenroll */}
        <div className="pt-2 border-t border-gray-100">
          <button
            onClick={handleUnenroll}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-red-500 transition-colors"
          >
            <Trash2 className="w-4 h-4" /> Unenroll from this path
          </button>
        </div>
      </motion.div>
    </div>
  );
}
