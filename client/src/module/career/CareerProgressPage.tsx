import { useEffect, useState, useCallback } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp, DollarSign, Layers, Clock, Trash2, CheckCircle2, Zap } from "lucide-react";
import api from "../../lib/axios";
import type { Career, CareerPhase } from "../../lib/types";
import RoadmapTimeline from "./components/RoadmapTimeline";
import toast from "react-hot-toast";

interface PathDetail extends Career {
  enrollment: { id: number; status: string };
  progress: number;
  completedSkills: number;
  totalSkills: number;
}

const CATEGORY_ACCENT: Record<string, string> = {
  ENGINEERING: "from-blue-500 to-blue-700",
  DATA:        "from-purple-500 to-purple-700",
  DESIGN:      "from-pink-500 to-rose-700",
  PRODUCT:     "from-orange-400 to-amber-600",
  MARKETING:   "from-green-500 to-emerald-700",
  DEVOPS:      "from-cyan-500 to-teal-700",
  SECURITY:    "from-red-500 to-red-700",
  OTHER:       "from-gray-500 to-gray-700",
};

export default function CareerProgressPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [detail, setDetail] = useState<PathDetail | null>(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto animate-pulse space-y-4">
        <div className="h-36 bg-gray-100 rounded-2xl" />
        <div className="h-8 bg-gray-100 rounded w-1/3" />
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
  const isCompleted = detail.progress === 100;

  return (
    <div className="max-w-4xl mx-auto">
      <Link
        to="/student/careers"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-black mb-6 no-underline transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> My Career Paths
      </Link>

      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">

        {/* Header card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          {/* Gradient top strip */}
          <div className={`h-2 bg-gradient-to-r ${gradient}`} />

          <div className="p-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex-1 min-w-0">
                <h1 className="text-xl font-bold text-gray-900 mb-1">{detail.title}</h1>
                <p className="text-sm text-gray-500 leading-relaxed">{detail.description}</p>
              </div>

              {/* Big progress circle */}
              <div className="shrink-0">
                <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
                  <circle cx="40" cy="40" r="34" fill="none" stroke="#f3f4f6" strokeWidth="6" />
                  <motion.circle
                    cx="40" cy="40" r="34"
                    fill="none"
                    stroke={isCompleted ? "#22c55e" : detail.progress > 0 ? "#f59e0b" : "#d1d5db"}
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 34}`}
                    initial={{ strokeDashoffset: 2 * Math.PI * 34 }}
                    animate={{ strokeDashoffset: 2 * Math.PI * 34 * (1 - detail.progress / 100) }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                </svg>
                <p className="text-center -mt-14 mb-6 text-xl font-bold text-gray-900">{detail.progress}%</p>
              </div>
            </div>

            {/* Meta pills */}
            <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-5">
              {detail.avgSalary && (
                <span className="flex items-center gap-1 bg-gray-50 border border-gray-100 px-2.5 py-1.5 rounded-lg">
                  <DollarSign className="w-3.5 h-3.5" /> {detail.avgSalary}
                </span>
              )}
              {detail.demandLevel && (
                <span className="flex items-center gap-1 bg-gray-50 border border-gray-100 px-2.5 py-1.5 rounded-lg">
                  <TrendingUp className="w-3.5 h-3.5" /> {detail.demandLevel} demand
                </span>
              )}
              <span className="flex items-center gap-1 bg-gray-50 border border-gray-100 px-2.5 py-1.5 rounded-lg">
                <Layers className="w-3.5 h-3.5" /> {detail.phases?.length ?? 0} phases
              </span>
              {totalWeeks > 0 && (
                <span className="flex items-center gap-1 bg-gray-50 border border-gray-100 px-2.5 py-1.5 rounded-lg">
                  <Clock className="w-3.5 h-3.5" /> ~{totalWeeks} weeks
                </span>
              )}
            </div>

            {/* Progress bar */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5" />
                  {detail.completedSkills} / {detail.totalSkills} skills completed
                </span>
                {isCompleted && (
                  <span className="flex items-center gap-1 text-green-600 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> All done!
                  </span>
                )}
              </div>
              <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${detail.progress}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`h-full rounded-full ${
                    isCompleted ? "bg-green-500" : detail.progress > 0 ? "bg-amber-400" : "bg-gray-200"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tip banner */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 text-sm text-blue-700 flex items-start gap-2">
          <Zap className="w-4 h-4 shrink-0 mt-0.5" />
          <span>
            <strong>Tip:</strong> Click the checkbox to mark a skill as complete. Click the skill name to expand its topic checklist — your topic progress is saved locally in your browser.
          </span>
        </div>

        {/* Interactive Roadmap */}
        {detail.phases && detail.phases.length > 0 && (
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-4">Your Roadmap</h2>
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
