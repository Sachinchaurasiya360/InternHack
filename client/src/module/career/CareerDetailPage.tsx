import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp, DollarSign, Layers, Clock, Users, Zap } from "lucide-react";
import api from "../../lib/axios";
import type { Career } from "../../lib/types";
import { useAuthStore } from "../../lib/auth.store";
import RoadmapTimeline from "./components/RoadmapTimeline";
import { Navbar } from "../../components/Navbar";
import toast from "react-hot-toast";

const CATEGORY_CONFIG: Record<string, { bg: string; text: string; border: string; hero: string }> = {
  ENGINEERING: {
    bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-100",
    hero: "from-blue-600 to-blue-900",
  },
  DESIGN: {
    bg: "bg-pink-50", text: "text-pink-700", border: "border-pink-100",
    hero: "from-pink-500 to-rose-800",
  },
  DATA: {
    bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-100",
    hero: "from-purple-600 to-purple-900",
  },
  PRODUCT: {
    bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-100",
    hero: "from-orange-500 to-amber-800",
  },
  MARKETING: {
    bg: "bg-green-50", text: "text-green-700", border: "border-green-100",
    hero: "from-green-600 to-emerald-900",
  },
  DEVOPS: {
    bg: "bg-cyan-50", text: "text-cyan-700", border: "border-cyan-100",
    hero: "from-cyan-600 to-teal-900",
  },
  SECURITY: {
    bg: "bg-red-50", text: "text-red-700", border: "border-red-100",
    hero: "from-red-600 to-red-900",
  },
  OTHER: {
    bg: "bg-gray-50", text: "text-gray-700", border: "border-gray-100",
    hero: "from-gray-700 to-gray-900",
  },
};

const DIFFICULTY_CONFIG: Record<string, { bg: string; text: string; label: string }> = {
  BEGINNER: { bg: "bg-green-50", text: "text-green-700", label: "Beginner Friendly" },
  INTERMEDIATE: { bg: "bg-amber-50", text: "text-amber-700", label: "Intermediate" },
  ADVANCED: { bg: "bg-red-50", text: "text-red-700", label: "Advanced" },
};

export default function CareerDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuthStore();
  const [career, setCareer] = useState<Career | null>(null);
  const [enrolled, setEnrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [enrolling, setEnrolling] = useState(false);

  useEffect(() => {
    api.get(`/careers/${slug}`).then((res) => {
      setCareer(res.data.career);
      setEnrolled(res.data.enrolled ?? false);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, [slug]);

  const handleEnroll = async () => {
    if (!isAuthenticated) { navigate("/login"); return; }
    if (!career) return;
    setEnrolling(true);
    try {
      await api.post("/careers/enroll", { careerId: career.id });
      toast.success("Enrolled! Let's start learning.");
      navigate(`/student/careers/${career.slug}`);
    } catch (err: unknown) {
      const msg = (err as { response?: { data?: { message?: string } } })?.response?.data?.message ?? "Failed to enroll";
      toast.error(msg);
    } finally {
      setEnrolling(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-28 max-w-4xl mx-auto px-6">
          <div className="animate-pulse space-y-4">
            <div className="h-48 bg-gray-200 rounded-2xl" />
            <div className="h-8 bg-gray-200 rounded w-1/2" />
            <div className="h-4 bg-gray-200 rounded w-3/4" />
          </div>
        </div>
      </div>
    );
  }

  if (!career) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="text-center pt-40 text-gray-500">Career not found</div>
      </div>
    );
  }

  const totalWeeks = career.phases?.reduce((sum, p) => sum + (p.durationWeeks ?? 0), 0) ?? 0;
  const totalSkills = career.phases?.reduce((sum, p) => sum + p.skills.length, 0) ?? 0;
  const catCfg = CATEGORY_CONFIG[career.category] ?? CATEGORY_CONFIG["OTHER"];
  const diffCfg = DIFFICULTY_CONFIG[career.difficulty] ?? { bg: "bg-gray-50", text: "text-gray-600", label: career.difficulty };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero banner */}
      <div className={`bg-gradient-to-br ${catCfg.hero} pt-24 pb-12 px-6`}>
        <div className="max-w-4xl mx-auto">
          <Link
            to="/careers"
            className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm mb-6 no-underline transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Careers
          </Link>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-white/15 text-white border border-white/20`}>
              {career.category}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-white/15 text-white border border-white/20`}>
              {diffCfg.label}
            </span>
          </div>

          <h1 className="text-3xl font-bold text-white mb-3">{career.title}</h1>
          <p className="text-white/70 max-w-2xl leading-relaxed mb-6">{career.description}</p>

          {/* Stat pills */}
          <div className="flex flex-wrap gap-3 text-sm text-white/80 mb-8">
            {career.avgSalary && (
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
                <DollarSign className="w-3.5 h-3.5" /> {career.avgSalary}
              </span>
            )}
            {career.demandLevel && (
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
                <TrendingUp className="w-3.5 h-3.5" /> {career.demandLevel} demand
              </span>
            )}
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
              <Layers className="w-3.5 h-3.5" /> {career.phases?.length ?? 0} phases
            </span>
            {totalWeeks > 0 && (
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
                <Clock className="w-3.5 h-3.5" /> ~{totalWeeks} weeks
              </span>
            )}
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
              <Zap className="w-3.5 h-3.5" /> {totalSkills} skills
            </span>
            {career._count?.enrollments != null && career._count.enrollments > 0 && (
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
                <Users className="w-3.5 h-3.5" /> {career._count.enrollments} enrolled
              </span>
            )}
          </div>

          {/* CTA */}
          {isAuthenticated && user?.role === "STUDENT" ? (
            enrolled ? (
              <Link
                to={`/student/careers/${career.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-colors no-underline shadow-lg"
              >
                Continue Learning →
              </Link>
            ) : (
              <button
                onClick={handleEnroll}
                disabled={enrolling}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-colors disabled:opacity-50 shadow-lg"
              >
                {enrolling ? "Enrolling..." : "Start This Path →"}
              </button>
            )
          ) : !isAuthenticated ? (
            <Link
              to="/login"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-colors no-underline shadow-lg"
            >
              Sign In to Start →
            </Link>
          ) : null}
        </div>
      </div>

      {/* Roadmap */}
      <div className="max-w-4xl mx-auto px-6 py-10">
        {career.phases && career.phases.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Learning Roadmap</h2>
                <p className="text-sm text-gray-500 mt-0.5">
                  Click any skill to see its subtopics. Enroll to track progress.
                </p>
              </div>
              <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${diffCfg.bg} ${diffCfg.text}`}>
                {diffCfg.label}
              </span>
            </div>
            <RoadmapTimeline phases={career.phases} />
          </motion.div>
        )}
      </div>
    </div>
  );
}
