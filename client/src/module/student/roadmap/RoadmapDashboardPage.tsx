import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Clock,
  BookOpen,
  Download,
  Map,
  Loader2,
  X,
  Zap,
} from "lucide-react";
import { SEO } from "../../../components/SEO";
import { Button } from "../../../components/ui/button";
import api from "../../../lib/axios";
import toast from "../../../components/ui/toast";
import type { RoadmapEnrollmentListItem } from "../../../lib/types";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../lib/query-keys";
import {
  RecommendationCard,
  type WeakArea,
} from "../learn/components/RecommendationCard";

export default function RoadmapDashboardPage() {
  const navigate = useNavigate();
  const [downloadingId, setDownloadingId] = useState<number | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedRoadmapId, setSelectedRoadmapId] = useState<number | null>(
    null,
  );
  const queryClient = useQueryClient();

  const { data: weakAreasData } = useQuery({
    queryKey: ["student-recommendations"],
    queryFn: () =>
      api
        .get<{ weakAreas: WeakArea[] }>("/student/recommendations")
        .then((r) => r.data),
    staleTime: 30 * 60 * 1000,
  });
  const weakAreas = weakAreasData?.weakAreas ?? [];

  const {
    data,
    isLoading: loading,
    isError,
  } = useQuery({
    queryKey: queryKeys.roadmaps.enrollments(),
    queryFn: () =>
      api
        .get<{
          enrollments: RoadmapEnrollmentListItem[];
        }>("/roadmaps/me/enrollments")
        .then((res) => res.data),
    staleTime: 5 * 60 * 1000,
  });

  const enrollments = data?.enrollments || [];

  const downloadPdf = async (id: number, slug: string) => {
    setDownloadingId(id);
    try {
      const res = await api.get(`/roadmaps/me/enrollments/${id}/pdf`, {
        responseType: "blob",
      });
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

  const handleDeleteClick = (roadmapId: number) => {
    setSelectedRoadmapId(roadmapId);
    setDeleteDialogOpen(true);
  };

  const handleDeleteYes = async () => {
    try {
      setIsDeleting(true);
      const res = await api.delete(
        `/roadmaps/me/enrollments/${selectedRoadmapId}`,
      );
      if (res.status === 204) {
        toast.success("Roadmap left successfully!");
        await queryClient.invalidateQueries({
          queryKey: queryKeys.roadmaps.enrollments(),
        });
      } else {
        toast.error("Failed to leave roadmap. Please try again.");
      }
    } catch {
      toast.error("Failed to leave roadmap. Please try again.");
    } finally {
      setIsDeleting(false);
      setDeleteDialogOpen(false);
      setSelectedRoadmapId(null);
    }
  };

  const handleDeleteClose = () => {
    setDeleteDialogOpen(false);
    setSelectedRoadmapId(null);
  };

  return (
    <main className="pb-12">
      <SEO title="My Roadmaps" noIndex />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mt-6 mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-stone-200 dark:border-white/10 pb-8"
      >
        <div>
          <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
            <span className="h-1.5 w-1.5 bg-lime-400" />
            learning / roadmaps
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
            My roadmaps.
          </h1>
          <p className="mt-3 text-sm text-stone-500 max-w-md">
            Resume where you left off, or start a new path.
          </p>
        </div>
        <button
          type="button"
          onClick={() => navigate(-1)}
          aria-label="Go back"
          className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-stone-100 hover:bg-stone-200 dark:bg-white/5 dark:hover:bg-white/10 text-stone-600 dark:text-stone-400 transition-colors border-0 cursor-pointer shrink-0"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
      </motion.div>

      {weakAreas.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden"
        >
          <div className="flex items-center justify-between gap-3 px-5 py-3.5 border-b border-stone-200 dark:border-white/10">
            <div className="flex flex-col gap-1 min-w-0">
              <span className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
                <span className="h-1 w-1 bg-lime-400" />
                ai-powered
              </span>
              <span className="text-sm font-bold text-stone-900 dark:text-stone-50">
                Skill gaps to address
              </span>
            </div>
            <div className="shrink-0 flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-stone-400">
              <Zap className="w-3 h-3 text-lime-500" />
              {weakAreas.length} area{weakAreas.length !== 1 ? "s" : ""}
            </div>
          </div>
          <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {weakAreas.slice(0, 4).map((area, i) => (
              <RecommendationCard
                key={`${area.type}-${area.topic}`}
                area={area}
                index={i}
              />
            ))}
          </div>
        </motion.section>
      )}

      {loading ? (
        <div
          aria-busy="true"
          aria-label="Loading your roadmaps"
          className="grid sm:grid-cols-2 gap-4"
        >
          {[0, 1].map((i) => (
            <div
              key={i}
              className="h-44 bg-gray-100 dark:bg-gray-900 rounded-2xl animate-pulse"
            />
          ))}
        </div>
      ) : isError ? (
        <div className="bg-white dark:bg-gray-900 border border-red-100 dark:border-red-900/30 rounded-2xl p-10 text-center">
          <p className="text-base font-bold text-red-600 dark:text-red-400 mb-1">
            Failed to load roadmaps
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
            There was an error fetching your data. Please try again.
          </p>
          <Button
            onClick={() => window.location.reload()}
            variant="outline"
            size="sm"
          >
            Retry
          </Button>
        </div>
      ) : enrollments.length === 0 ? (
        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-10 text-center">
          <Map
            className="w-10 h-10 text-gray-300 mx-auto mb-3"
            aria-hidden="true"
          />
          <p className="text-base font-bold text-gray-950 dark:text-white mb-1">
            No roadmaps yet
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
            Pick a path that fits your goal.
          </p>
          <Button asChild variant="mono">
            <Link to="/roadmaps">Browse roadmaps</Link>
          </Button>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-4">
          {enrollments.map((e, i) => {
            const completed = e.topicProgress.filter(
              (p) => p.status === "COMPLETED",
            ).length;
            const pct =
              e.roadmap.topicCount === 0
                ? 0
                : Math.round((completed / e.roadmap.topicCount) * 100);
            return (
              <motion.article
                key={e.id}
                aria-label={`${e.roadmap.title} — ${pct}% complete`}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + i * 0.05, duration: 0.4 }}
                className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-5"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h2 className="text-lg font-bold text-gray-950 dark:text-white">
                    {e.roadmap.title}
                  </h2>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-4">
                  {e.roadmap.shortDescription}
                </p>

                {/* Progress bar */}
                <div className="mb-4">
                  <div className="flex items-baseline justify-between mb-1.5">
                    <span
                      className="text-xs font-mono text-gray-400"
                      aria-hidden="true"
                    >
                      progress
                    </span>
                    <span
                      className="text-xs font-mono font-bold text-gray-700 dark:text-gray-300"
                      aria-hidden="true"
                    >
                      {pct}%
                    </span>
                  </div>
                  <div
                    role="progressbar"
                    aria-valuenow={pct}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${e.roadmap.title} progress: ${pct}%`}
                    className="w-full h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden"
                  >
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
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" aria-hidden="true" />{" "}
                    {e.hoursPerWeek}h/wk
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />{" "}
                    {e.roadmap.estimatedHours}h total
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Button asChild variant="mono" size="sm">
                    <Link to={`/learn/roadmaps/${e.roadmap.slug}`}>
                      Resume
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => downloadPdf(e.id, e.roadmap.slug)}
                    disabled={downloadingId === e.id}
                    aria-label={
                      downloadingId === e.id
                        ? `Downloading PDF for ${e.roadmap.title}`
                        : `Download PDF for ${e.roadmap.title}`
                    }
                  >
                    {downloadingId === e.id ? (
                      <Loader2
                        className="w-3.5 h-3.5 animate-spin"
                        aria-hidden="true"
                      />
                    ) : (
                      <Download className="w-3.5 h-3.5" aria-hidden="true" />
                    )}
                    PDF
                  </Button>
                  <div className="ml-auto">
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDeleteClick(e.id)}
                      aria-label={`Leave ${e.roadmap.title} roadmap`}
                    >
                      Leave Roadmap
                    </Button>

                    {deleteDialogOpen && selectedRoadmapId === e.id && (
                      <div className="fixed inset-0 z-50 flex items-center justify-center">
                        <div
                          className="fixed inset-0 bg-black/50"
                          aria-hidden="true"
                        />

                        <div
                          role="alertdialog"
                          aria-modal="true"
                          aria-labelledby="delete-dialog-title"
                          aria-describedby="delete-dialog-desc"
                          className="relative z-50 w-full max-w-sm rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-6 shadow-xl"
                        >
                          <Button
                            variant="ghost"
                            mode="icon"
                            size="sm"
                            onClick={handleDeleteClose}
                            aria-label="Close dialog"
                            disabled={isDeleting}
                            className="absolute top-4 right-4"
                          >
                            <X className="w-4 h-4" aria-hidden="true" />
                          </Button>

                          <h2
                            id="delete-dialog-title"
                            className="text-lg font-bold text-gray-950 dark:text-white pr-8"
                          >
                            Leave Roadmap?
                          </h2>
                          <div
                            id="delete-dialog-desc"
                            className="mt-2 text-sm text-gray-600 dark:text-gray-400"
                          >
                            <p>
                              <strong>
                                Leaving "{e.roadmap.title}" will permanently
                                erase all saved progress and topic completion
                                data.
                              </strong>
                            </p>
                            <p className="mt-1">
                              Are you sure you want to leave this roadmap?
                            </p>
                          </div>

                          <div className="mt-6 flex justify-end gap-3">
                            <Button
                              variant="secondary"
                              size="sm"
                              onClick={handleDeleteClose}
                              disabled={isDeleting}
                            >
                              No
                            </Button>
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={handleDeleteYes}
                              disabled={isDeleting}
                            >
                              {isDeleting ? (
                                <Loader2
                                  className="w-4 h-4 animate-spin"
                                  aria-hidden="true"
                                />
                              ) : (
                                "Yes, leave"
                              )}
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      )}
    </main>
  );
}
