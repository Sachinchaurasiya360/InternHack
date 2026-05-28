import { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  BookOpen,
  Download,
  Map,
  Loader2,
  X,
} from "lucide-react";
import { SEO } from "../../../components/SEO";
import { Button } from "../../../components/ui/button";
import api from "../../../lib/axios";
import toast from "../../../components/ui/toast";
import type { RoadmapEnrollmentListItem } from "../../../lib/types";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../lib/query-keys";
import LoadingSpinner from "@/components/ui/loading-spinner";

export default function RoadmapDashboardPage() {
  const [downloadingId, setDownloadingId] = useState<number | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedRoadmapId, setSelectedRoadmapId] = useState<number | null>(
    null,
  );

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
      // alert(`Confirmed: Roadmap ${selectedRoadmapId} will be deleted!`);
      setIsDeleting(true);
      const res = await api.delete(
        `/roadmaps/me/enrollments/${selectedRoadmapId}`,
      );
      if (res.status === 204) {
        toast.success("Roadmap left successfully!");
      } else {
        toast.error("Failed to leave roadmap. Please try again.");
      }
    } catch {
      toast.error("Failed to leave roadmap. Please try again.");
    } finally {
      setIsDeleting(false);
      setDeleteDialogOpen(false);
      setSelectedRoadmapId(null);
      window.location.reload();
    }
  };

  const handleDeleteNo = () => {
    setDeleteDialogOpen(false);
    setSelectedRoadmapId(null);
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
                  <div className="ml-auto" id="popover-roadmap">
                    {/* Delete Button */}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDeleteClick(e.id)}
                      aria-label={`Delete ${e.roadmap.title} roadmap`}
                      className="p-2 rounded-lg border-2 border-red-600 bg-white hover:border-red-700 hover:bg-red-500  hover:text-white  transition-colors text-red-600 dark:bg-red-700 dark:hover:bg-red-700 dark:text-white"
                    >
                      Leave Roadmap
                    </Button>

                    {/* Delete Confirmation Dialog */}
                    {deleteDialogOpen && selectedRoadmapId === e.id && (
                      <div className="fixed inset-0 z-50 flex items-center justify-center">
                        {/* Backdrop */}
                        <div
                          className="fixed inset-0 bg-black/50"
                          aria-hidden="true"
                        />

                        {/* Dialog */}
                        <div
                          role="alertdialog"
                          aria-modal="true"
                          aria-labelledby="delete-dialog-title"
                          aria-describedby="delete-dialog-desc"
                          className="relative z-50 w-full max-w-sm rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-6 shadow-xl"
                        >
                          {/* Close Button */}
                          <button
                            onClick={handleDeleteClose}
                            aria-label="Close dialog"
                            disabled={isDeleting}
                            className="absolute top-4 right-4 p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <X className="w-5 h-5" aria-hidden="true" />
                          </button>

                          {/* Content */}
                          <h2
                            id="delete-dialog-title"
                            className="text-lg font-bold text-gray-950 dark:text-white pr-8"
                          >
                            Delete Roadmap?
                          </h2>
                          <p
                            id="delete-dialog-desc"
                            className="mt-2 text-sm text-gray-600 dark:text-gray-400"
                          >
                            <p>
                              <b>
                                Removing "{e.roadmap.title}" roadmap will erase
                                all saved progress and topic completion data
                                permanently. &nbsp;
                              </b>
                            </p>
                            <span>
                              Are you sure you want to delete "{e.roadmap.title}
                              "?
                            </span>
                          </p>

                          {/* Button Group */}
                          <div className="mt-6 flex justify-end gap-3">
                            {/* No Button */}
                            <button
                              onClick={handleDeleteNo}
                              disabled={isDeleting}
                              className="px-4 py-2 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              No
                            </button>

                            {/* Yes Button */}
                            <button
                              onClick={handleDeleteYes}
                              disabled={isDeleting}
                              className="px-4 py-2 text-sm font-medium rounded-lg bg-red-600 hover:bg-red-700 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              {isDeleting ? <LoadingSpinner /> : "Yes"}
                            </button>
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
