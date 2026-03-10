import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp, Layers, Clock, Users, Zap } from "lucide-react";
import api from "../../lib/axios";
import type { Career } from "../../lib/types";
import { useAuthStore } from "../../lib/auth.store";
import RoadmapTimeline from "./components/RoadmapTimeline";
import { Navbar } from "../../components/Navbar";
import { LoadingScreen } from "../../components/LoadingScreen";
import { SEO } from "../../components/SEO";
import toast from "react-hot-toast";

const DIFFICULTY_CONFIG: Record<string, { bg: string; text: string; label: string }> = {
  BEGINNER: { bg: "bg-green-50 dark:bg-green-900/30", text: "text-green-700 dark:text-green-400", label: "Beginner Friendly" },
  INTERMEDIATE: { bg: "bg-amber-50 dark:bg-amber-900/30", text: "text-amber-700 dark:text-amber-400", label: "Intermediate" },
  ADVANCED: { bg: "bg-red-50 dark:bg-red-900/30", text: "text-red-700 dark:text-red-400", label: "Advanced" },
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
      <div className="min-h-screen bg-[#fafafa] dark:bg-gray-950">
        <Navbar />
        <LoadingScreen />
      </div>
    );
  }

  if (!career) {
    return (
      <div className="min-h-screen bg-[#fafafa] dark:bg-gray-950">
        <Navbar />
        <div className="text-center pt-40 text-gray-500">Career not found</div>
      </div>
    );
  }

  const totalWeeks = career.phases?.reduce((sum, p) => sum + (p.durationWeeks ?? 0), 0) ?? 0;
  const totalSkills = career.phases?.reduce((sum, p) => sum + p.skills.length, 0) ?? 0;
  const diffCfg = DIFFICULTY_CONFIG[career.difficulty] ?? { bg: "bg-gray-50 dark:bg-gray-800", text: "text-gray-600 dark:text-gray-400", label: career.difficulty };

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-gray-950">
      <SEO
        title={`${career.title} Career Roadmap`}
        description={career.description?.slice(0, 160) || `Explore the ${career.title} career roadmap with step-by-step learning phases, skills, and resources.`}
        keywords={`${career.title}, career roadmap, ${career.category}, learning path, skill development`}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#fafafa] dark:bg-gray-950 pt-24 pb-16 px-6">
        {/* Gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-125 h-125 rounded-full bg-linear-to-br from-indigo-100 to-violet-100 dark:from-indigo-900/30 dark:to-violet-900/30 opacity-60 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-100 h-100 rounded-full bg-linear-to-tr from-slate-100 to-blue-100 dark:from-slate-900/30 dark:to-blue-900/30 opacity-60 blur-3xl" />
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
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
              className="inline-flex items-center gap-1.5 text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-sm mb-6 no-underline transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Careers
            </Link>
          </motion.div>

          <motion.h1
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-950 dark:text-white tracking-tight mb-4"
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
            {career.demandLevel && (
              <span className="flex items-center gap-1.5 bg-white dark:bg-gray-900 px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400 shadow-sm">
                <TrendingUp className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500" /> {career.demandLevel} demand
              </span>
            )}
            <span className="flex items-center gap-1.5 bg-white dark:bg-gray-900 px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400 shadow-sm">
              <Layers className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500" /> {career.phases?.length ?? 0} phases
            </span>
            {totalWeeks > 0 && (
              <span className="flex items-center gap-1.5 bg-white dark:bg-gray-900 px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400 shadow-sm">
                <Clock className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500" /> ~{totalWeeks} weeks
              </span>
            )}
            <span className="flex items-center gap-1.5 bg-white dark:bg-gray-900 px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400 shadow-sm">
              <Zap className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500" /> {totalSkills} skills
            </span>
            {career._count?.enrollments != null && career._count.enrollments > 0 && (
              <span className="flex items-center gap-1.5 bg-white dark:bg-gray-900 px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400 shadow-sm">
                <Users className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500" /> {career._count.enrollments} enrolled
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
                    className="px-8 py-4 bg-gray-950 text-white text-base font-semibold rounded-2xl hover:bg-gray-800 transition-all shadow-lg shadow-black/10 flex items-center gap-2 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
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
                  className="px-8 py-4 bg-gray-950 text-white text-base font-semibold rounded-2xl hover:bg-gray-800 transition-all shadow-lg shadow-black/10 flex items-center gap-2 disabled:opacity-50 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
                >
                  {enrolling ? "Enrolling..." : "Start This Path →"}
                </motion.button>
              )
            ) : !isAuthenticated ? (
              <Link to="/login" className="no-underline">
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-gray-950 text-white text-base font-semibold rounded-2xl hover:bg-gray-800 transition-all shadow-lg shadow-black/10 flex items-center gap-2 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
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
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Learning Roadmap</h2>
                <p className="text-sm text-gray-500 mt-0.5">
                  Click any skill to see its subtopics. Enroll to track progress.
                </p>
              </div>
              <span className={`text-xs font-semibold ${diffCfg.text}`}>
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
