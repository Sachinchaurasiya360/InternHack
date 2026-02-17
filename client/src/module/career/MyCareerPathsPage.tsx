import { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Compass, ArrowRight } from "lucide-react";
import api from "../../lib/axios";
import type { StudentCareerEnrollment } from "../../lib/types";

export default function MyCareerPathsPage() {
  const [paths, setPaths] = useState<StudentCareerEnrollment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/careers/my-paths").then((res) => {
      setPaths(res.data.paths);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const getProgressColor = (progress: number) => {
    if (progress >= 70) return "text-green-500 stroke-green-500";
    if (progress >= 30) return "text-yellow-500 stroke-yellow-500";
    return "text-gray-400 stroke-gray-300";
  };

  if (loading) return <div className="text-center py-16 text-gray-500">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Career Paths</h1>
          <p className="text-sm text-gray-500 mt-1">Track your learning progress</p>
        </div>
        <Link
          to="/careers"
          className="flex items-center gap-2 px-4 py-2 bg-black text-white text-sm font-medium rounded-xl hover:bg-gray-800 transition-colors no-underline"
        >
          <Compass className="w-4 h-4" /> Explore Careers
        </Link>
      </div>

      {paths.length === 0 ? (
        <div className="text-center py-16">
          <Compass className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 mb-2">You haven't enrolled in any career paths yet</p>
          <Link to="/careers" className="text-sm text-black font-medium hover:underline">
            Explore available career paths
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {paths.map((path, i) => (
            <motion.div
              key={path.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={`/student/careers/${path.career.slug}`}
                className="flex items-center gap-5 bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow no-underline"
              >
                {/* Circular Progress */}
                <div className="relative w-16 h-16 shrink-0">
                  <svg className="w-16 h-16 -rotate-90" viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r="28" fill="none" stroke="#f3f4f6" strokeWidth="4" />
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      fill="none"
                      className={getProgressColor(path.progress)}
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeDasharray={`${(path.progress / 100) * 175.93} 175.93`}
                    />
                  </svg>
                  <span className={`absolute inset-0 flex items-center justify-center text-sm font-bold ${getProgressColor(path.progress)}`}>
                    {path.progress}%
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-gray-900">{path.career.title}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {path.completedSkills} / {path.totalSkills} skills completed
                  </p>
                  <div className="flex items-center gap-3 mt-1.5 text-xs text-gray-400">
                    <span>{path.career.category}</span>
                    <span>{path.career.difficulty}</span>
                    {path.career._count && (
                      <span>{path.career._count.phases} phases</span>
                    )}
                  </div>
                </div>

                <ArrowRight className="w-5 h-5 text-gray-300 shrink-0" />
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
