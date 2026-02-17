import { useEffect, useState, useCallback } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp, DollarSign, Layers, Clock, Trash2 } from "lucide-react";
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

  useEffect(() => {
    fetchDetail();
  }, [fetchDetail]);

  const handleToggleSkill = async (skillId: number) => {
    try {
      const res = await api.post(`/careers/skills/${String(skillId)}/toggle`);
      const { completed } = res.data as { skillId: number; completed: boolean };

      // Optimistic update
      setDetail((prev) => {
        if (!prev || !prev.phases) return prev;
        const updatedPhases: CareerPhase[] = prev.phases.map((phase) => ({
          ...phase,
          skills: phase.skills.map((skill) =>
            skill.id === skillId ? { ...skill, completed } : skill
          ),
        }));
        const totalSkills = updatedPhases.reduce((sum, p) => sum + p.skills.length, 0);
        const completedSkills = updatedPhases.reduce(
          (sum, p) => sum + p.skills.filter((s) => s.completed).length,
          0,
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
    if (!confirm("Are you sure you want to unenroll? All your progress will be lost.")) return;

    try {
      await api.delete(`/careers/enroll/${String(detail.id)}`);
      toast.success("Unenrolled successfully");
      navigate("/student/careers");
    } catch {
      toast.error("Failed to unenroll");
    }
  };

  if (loading) return <div className="text-center py-16 text-gray-500">Loading...</div>;
  if (!detail) return <div className="text-center py-16 text-gray-500">Career not found or not enrolled</div>;

  const totalWeeks = detail.phases?.reduce((sum, p) => sum + (p.durationWeeks ?? 0), 0) ?? 0;
  const progressColor = detail.progress >= 70 ? "bg-green-500" : detail.progress >= 30 ? "bg-yellow-500" : "bg-gray-300";

  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/student/careers" className="flex items-center gap-2 text-sm text-gray-500 hover:text-black mb-6 no-underline">
        <ArrowLeft className="w-4 h-4" /> My Career Paths
      </Link>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        {/* Header */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h1 className="text-xl font-bold text-gray-900 mb-1">{detail.title}</h1>
          <p className="text-sm text-gray-500 mb-4">{detail.description}</p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
            {detail.avgSalary && (
              <span className="flex items-center gap-1">
                <DollarSign className="w-4 h-4" /> {detail.avgSalary}
              </span>
            )}
            {detail.demandLevel && (
              <span className="flex items-center gap-1">
                <TrendingUp className="w-4 h-4" /> {detail.demandLevel}
              </span>
            )}
            <span className="flex items-center gap-1">
              <Layers className="w-4 h-4" /> {detail.phases?.length ?? 0} phases
            </span>
            {totalWeeks > 0 && (
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> ~{totalWeeks} weeks
              </span>
            )}
          </div>

          {/* Progress bar */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${String(detail.progress)}%` }}
                transition={{ duration: 0.8 }}
                className={`h-full rounded-full ${progressColor}`}
              />
            </div>
            <span className="text-sm font-semibold text-gray-700 w-16 text-right">
              {detail.progress}%
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            {detail.completedSkills} / {detail.totalSkills} skills completed
          </p>
        </div>

        {/* Interactive Timeline */}
        {detail.phases && detail.phases.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Roadmap</h2>
            <RoadmapTimeline
              phases={detail.phases}
              interactive
              onToggleSkill={handleToggleSkill}
            />
          </div>
        )}

        {/* Unenroll */}
        <div className="pt-4 border-t border-gray-100">
          <button
            onClick={handleUnenroll}
            className="flex items-center gap-2 text-sm text-red-500 hover:text-red-700 transition-colors"
          >
            <Trash2 className="w-4 h-4" /> Unenroll from this path
          </button>
        </div>
      </motion.div>
    </div>
  );
}
