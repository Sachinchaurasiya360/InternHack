import { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowRight, Clock, BookOpen, Download, Map, Loader2 } from "lucide-react";
import { SEO } from "../../../components/SEO";
import { Button } from "../../../components/ui/button";
import api from "../../../lib/axios";
import toast from "../../../components/ui/toast";
import type { RoadmapEnrollmentListItem } from "../../../lib/types";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../lib/query-keys";

export default function RoadmapDashboardPage() {
  const [downloadingId, setDownloadingId] = useState<number | null>(null);

  const { data, isLoading: loading } = useQuery({
    queryKey: queryKeys.roadmaps.enrollments(),
    queryFn: () => api.get<{ enrollments: RoadmapEnrollmentListItem[] }>("/roadmaps/me/enrollments").then(res => res.data),
  });

  const enrollments = data?.enrollments || [];

  const downloadPdf = async (id: number, slug: string) => {
    setDownloadingId(id);
    try {
      const res = await api.get(`/roadmaps/me/enrollments/${id}/pdf`, { responseType: "blob" });
      const url = URL.createObjectURL(res.data as Blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${slug}-roadmap.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      toast.error("Could not download PDF");
    } finally {
      setDownloadingId(null);
    }
  };

  return (
    <div className="pb-12">
      <SEO title="My Roadmaps" noIndex />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-6 mb-8"
      >
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-gray-950 dark:text-white mb-2">
          My roadmaps
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Resume where you left off, or start a new path.
        </p>
      </motion.div>

      {loading ? (
        <div className="grid sm:grid-cols-2 gap-4">
          {[0, 1].map((i) => (
            <div key={i} className="h-44 bg-gray-100 dark:bg-gray-900 rounded-2xl animate-pulse" />
          ))}
        </div>
      ) : enrollments.length === 0 ? (
        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-10 text-center">
          <Map className="w-10 h-10 text-gray-300 mx-auto mb-3" />
          <p className="text-base font-bold text-gray-950 dark:text-white mb-1">No roadmaps yet</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">Pick a path that fits your goal.</p>
          <Button asChild variant="mono">
            <Link to="/roadmaps">Browse roadmaps</Link>
          </Button>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-4">
          {enrollments.map((e, i) => {
            const completed = e.topicProgress.filter((p) => p.status === "COMPLETED").length;
            const pct = e.roadmap.topicCount === 0 ? 0 : Math.round((completed / e.roadmap.topicCount) * 100);
            return (
              <motion.div
                key={e.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + i * 0.05, duration: 0.4 }}
                className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-5"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h2 className="text-lg font-bold text-gray-950 dark:text-white">{e.roadmap.title}</h2>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-4">
                  {e.roadmap.shortDescription}
                </p>

                {/* Progress bar */}
                <div className="mb-4">
                  <div className="flex items-baseline justify-between mb-1.5">
                    <span className="text-xs font-mono text-gray-400">progress</span>
                    <span className="text-xs font-mono font-bold text-gray-700 dark:text-gray-300">{pct}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-lime-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1.5 font-mono">
                    {completed} / {e.roadmap.topicCount} topics
                  </p>
                </div>

                <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 font-mono mb-4">
                  <span className="inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {e.hoursPerWeek}h/wk</span>
                  <span className="inline-flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" /> {e.roadmap.estimatedHours}h total</span>
                </div>

                <div className="flex items-center gap-2">
                  <Button asChild variant="mono" size="sm">
                    <Link to={`/learn/roadmaps/${e.roadmap.slug}`}>
                      Resume
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => downloadPdf(e.id, e.roadmap.slug)}
                    disabled={downloadingId === e.id}
                  >
                    {downloadingId === e.id ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Download className="w-3.5 h-3.5" />}
                    PDF
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
