import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp, DollarSign, Layers, Clock, Users, Zap, Sparkles } from "lucide-react";
import api from "../../lib/axios";
import type { Career } from "../../lib/types";
import { useAuthStore } from "../../lib/auth.store";
import RoadmapTimeline from "./components/RoadmapTimeline";
import { Navbar } from "../../components/Navbar";
import toast from "react-hot-toast";

const CATEGORY_CONFIG: Record<string, { pill: string; gradient: string; icon: string }> = {
  ENGINEERING: { pill: "bg-blue-50 text-blue-700 border-blue-100", gradient: "from-blue-500 to-blue-600", icon: "bg-blue-50 text-blue-600" },
  DESIGN:      { pill: "bg-pink-50 text-pink-700 border-pink-100", gradient: "from-pink-500 to-rose-600", icon: "bg-pink-50 text-pink-600" },
  DATA:        { pill: "bg-purple-50 text-purple-700 border-purple-100", gradient: "from-purple-500 to-purple-600", icon: "bg-purple-50 text-purple-600" },
  PRODUCT:     { pill: "bg-orange-50 text-orange-700 border-orange-100", gradient: "from-orange-400 to-amber-500", icon: "bg-orange-50 text-orange-600" },
  MARKETING:   { pill: "bg-green-50 text-green-700 border-green-100", gradient: "from-green-500 to-emerald-600", icon: "bg-green-50 text-green-600" },
  DEVOPS:      { pill: "bg-cyan-50 text-cyan-700 border-cyan-100", gradient: "from-cyan-500 to-teal-600", icon: "bg-cyan-50 text-cyan-600" },
  SECURITY:    { pill: "bg-red-50 text-red-700 border-red-100", gradient: "from-red-500 to-red-600", icon: "bg-red-50 text-red-600" },
  OTHER:       { pill: "bg-gray-50 text-gray-700 border-gray-200", gradient: "from-gray-500 to-gray-600", icon: "bg-gray-50 text-gray-600" },
};

const DIFFICULTY_CONFIG: Record<string, { bg: string; text: string; label: string }> = {
  BEGINNER: { bg: "bg-green-50", text: "text-green-700", label: "Beginner Friendly" },
  INTERMEDIATE: { bg: "bg-amber-50", text: "text-amber-700", label: "Intermediate" },
  ADVANCED: { bg: "bg-red-50", text: "text-red-700", label: "Advanced" },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
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
      <div className="min-h-screen bg-[#fafafa]">
        <Navbar />
        <div className="pt-28 max-w-4xl mx-auto px-6">
          <div className="animate-pulse space-y-4">
            <div className="h-48 bg-white rounded-2xl border border-gray-100" />
            <div className="h-8 bg-gray-100 rounded w-1/2" />
            <div className="h-4 bg-gray-100 rounded w-3/4" />
          </div>
        </div>
      </div>
    );
  }

  if (!career) {
    return (
      <div className="min-h-screen bg-[#fafafa]">
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
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#fafafa] pt-24 pb-16 px-6">
        {/* Gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-125 h-125 rounded-full bg-linear-to-br from-indigo-100 to-violet-100 opacity-60 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-100 h-100 rounded-full bg-linear-to-tr from-slate-100 to-blue-100 opacity-60 blur-3xl" />
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div custom={0} initial="hidden" animate="visible" variants={fadeInUp}>
            <Link
              to="/careers"
              className="inline-flex items-center gap-1.5 text-gray-400 hover:text-gray-700 text-sm mb-6 no-underline transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Careers
            </Link>
          </motion.div>

          <motion.div custom={1} initial="hidden" animate="visible" variants={fadeInUp} className="flex flex-wrap gap-2 mb-5">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${catCfg.pill}`}>
              <Sparkles className="w-3 h-3" />
              {career.category}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${diffCfg.bg} ${diffCfg.text}`}>
              {diffCfg.label}
            </span>
          </motion.div>

          <motion.h1
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-950 tracking-tight mb-4"
          >
            {career.title}
          </motion.h1>

          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-gray-500 text-lg max-w-2xl leading-relaxed mb-8"
          >
            {career.description}
          </motion.p>

          {/* Stat pills */}
          <motion.div custom={4} initial="hidden" animate="visible" variants={fadeInUp} className="flex flex-wrap gap-3 mb-8">
            {career.avgSalary && (
              <span className="flex items-center gap-1.5 bg-white px-3.5 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 shadow-sm">
                <DollarSign className="w-3.5 h-3.5 text-gray-400" /> {career.avgSalary}
              </span>
            )}
            {career.demandLevel && (
              <span className="flex items-center gap-1.5 bg-white px-3.5 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 shadow-sm">
                <TrendingUp className="w-3.5 h-3.5 text-gray-400" /> {career.demandLevel} demand
              </span>
            )}
            <span className="flex items-center gap-1.5 bg-white px-3.5 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 shadow-sm">
              <Layers className="w-3.5 h-3.5 text-gray-400" /> {career.phases?.length ?? 0} phases
            </span>
            {totalWeeks > 0 && (
              <span className="flex items-center gap-1.5 bg-white px-3.5 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 shadow-sm">
                <Clock className="w-3.5 h-3.5 text-gray-400" /> ~{totalWeeks} weeks
              </span>
            )}
            <span className="flex items-center gap-1.5 bg-white px-3.5 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 shadow-sm">
              <Zap className="w-3.5 h-3.5 text-gray-400" /> {totalSkills} skills
            </span>
            {career._count?.enrollments != null && career._count.enrollments > 0 && (
              <span className="flex items-center gap-1.5 bg-white px-3.5 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 shadow-sm">
                <Users className="w-3.5 h-3.5 text-gray-400" /> {career._count.enrollments} enrolled
              </span>
            )}
          </motion.div>

          {/* CTA */}
          <motion.div custom={5} initial="hidden" animate="visible" variants={fadeInUp}>
            {isAuthenticated && user?.role === "STUDENT" ? (
              enrolled ? (
                <Link
                  to={`/student/careers/${career.slug}`}
                  className="no-underline"
                >
                  <motion.button
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-gray-950 text-white text-base font-semibold rounded-2xl hover:bg-gray-800 transition-all shadow-lg shadow-black/10 flex items-center gap-2"
                  >
                    Continue Learning →
                  </motion.button>
                </Link>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleEnroll}
                  disabled={enrolling}
                  className="px-8 py-4 bg-gray-950 text-white text-base font-semibold rounded-2xl hover:bg-gray-800 transition-all shadow-lg shadow-black/10 flex items-center gap-2 disabled:opacity-50"
                >
                  {enrolling ? "Enrolling..." : "Start This Path →"}
                </motion.button>
              )
            ) : !isAuthenticated ? (
              <Link to="/login" className="no-underline">
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-gray-950 text-white text-base font-semibold rounded-2xl hover:bg-gray-800 transition-all shadow-lg shadow-black/10 flex items-center gap-2"
                >
                  Sign In to Start →
                </motion.button>
              </Link>
            ) : null}
          </motion.div>
        </div>
      </section>

      {/* Roadmap */}
      <div className="max-w-6xl mx-auto px-6 py-10">
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
