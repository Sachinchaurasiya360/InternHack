import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp, DollarSign, Layers, Clock } from "lucide-react";
import api from "../../lib/axios";
import type { Career } from "../../lib/types";
import { useAuthStore } from "../../lib/auth.store";
import RoadmapTimeline from "./components/RoadmapTimeline";
import toast from "react-hot-toast";

const DIFFICULTY_BADGE: Record<string, string> = {
  BEGINNER: "bg-green-50 text-green-700",
  INTERMEDIATE: "bg-yellow-50 text-yellow-700",
  ADVANCED: "bg-red-50 text-red-700",
};

const CATEGORY_BADGE: Record<string, string> = {
  ENGINEERING: "bg-blue-50 text-blue-700",
  DESIGN: "bg-pink-50 text-pink-700",
  DATA: "bg-purple-50 text-purple-700",
  PRODUCT: "bg-orange-50 text-orange-700",
  MARKETING: "bg-green-50 text-green-700",
  DEVOPS: "bg-cyan-50 text-cyan-700",
  SECURITY: "bg-red-50 text-red-700",
  OTHER: "bg-gray-50 text-gray-700",
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
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    if (!career) return;

    setEnrolling(true);
    try {
      await api.post("/careers/enroll", { careerId: career.id });
      toast.success("Enrolled successfully!");
      navigate(`/student/careers/${career.slug}`);
    } catch (err: unknown) {
      const msg = (err as { response?: { data?: { message?: string } } })?.response?.data?.message ?? "Failed to enroll";
      toast.error(msg);
    } finally {
      setEnrolling(false);
    }
  };

  if (loading) return <div className="text-center py-24 text-gray-500">Loading...</div>;
  if (!career) return <div className="text-center py-24 text-gray-500">Career not found</div>;

  const totalWeeks = career.phases?.reduce((sum, p) => sum + (p.durationWeeks ?? 0), 0) ?? 0;
  const totalSkills = career.phases?.reduce((sum, p) => sum + p.skills.length, 0) ?? 0;
  const diffBadge = DIFFICULTY_BADGE[career.difficulty] ?? "bg-gray-50 text-gray-700";
  const catBadge = CATEGORY_BADGE[career.category] ?? "bg-gray-50 text-gray-700";

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <Link to="/careers" className="flex items-center gap-2 text-sm text-gray-500 hover:text-black mb-6 no-underline">
          <ArrowLeft className="w-4 h-4" /> Back to Careers
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          {/* Hero */}
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${catBadge}`}>{career.category}</span>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${diffBadge}`}>{career.difficulty}</span>
            </div>

            <h1 className="text-2xl font-bold text-gray-900 mb-2">{career.title}</h1>
            <p className="text-gray-500 mb-6">{career.description}</p>

            <div className="flex flex-wrap gap-6 text-sm text-gray-500 mb-6">
              {career.avgSalary && (
                <span className="flex items-center gap-1.5">
                  <DollarSign className="w-4 h-4" /> {career.avgSalary}
                </span>
              )}
              {career.demandLevel && (
                <span className="flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4" /> {career.demandLevel} demand
                </span>
              )}
              <span className="flex items-center gap-1.5">
                <Layers className="w-4 h-4" /> {career.phases?.length ?? 0} phases
              </span>
              {totalWeeks > 0 && (
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" /> ~{totalWeeks} weeks
                </span>
              )}
              <span className="text-gray-400">{totalSkills} skills</span>
            </div>

            {isAuthenticated && user?.role === "STUDENT" && (
              enrolled ? (
                <Link
                  to={`/student/careers/${career.slug}`}
                  className="inline-block px-6 py-2.5 bg-black text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-colors no-underline"
                >
                  Continue Learning
                </Link>
              ) : (
                <button
                  onClick={handleEnroll}
                  disabled={enrolling}
                  className="px-6 py-2.5 bg-black text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-colors disabled:opacity-50"
                >
                  {enrolling ? "Enrolling..." : "Start This Path"}
                </button>
              )
            )}
            {!isAuthenticated && (
              <Link
                to="/login"
                className="inline-block px-6 py-2.5 bg-black text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-colors no-underline"
              >
                Sign In to Start
              </Link>
            )}
          </div>

          {/* Roadmap */}
          {career.phases && career.phases.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Learning Roadmap</h2>
              <RoadmapTimeline phases={career.phases} />
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
