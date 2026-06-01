import { useEffect, useState, useMemo, useRef } from "react";
import { Link, useParams } from "react-router";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  Bookmark,
  CheckCircle2,
  ChevronRight,
  Circle,
  ExternalLink,
  Loader2,
  Save,
} from "lucide-react";
import { SEO } from "../../../components/SEO";
import { Button } from "../../../components/ui/button";
import { canonicalUrl, SITE_URL } from "../../../lib/seo.utils";
import api from "../../../lib/axios";
import toast from "../../../components/ui/toast";
import { useAuthStore } from "../../../lib/auth.store";
import type {
  RoadmapResource,
  RoadmapTopic,
  RoadmapTopicStatus,
} from "../../../lib/types";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../lib/query-keys";

interface TopicResponse {
  topic: RoadmapTopic & {
    resources: RoadmapResource[];
    section: {
      slug: string;
      title: string;
      orderIndex: number;
      roadmap: { slug: string; title: string; isPublished: boolean };
    };
  };
}

export default function RoadmapTopicPage() {
  const { slug = "", topicSlug = "" } = useParams();
  const { isAuthenticated } = useAuthStore();
  const [savingNotes, setSavingNotes] = useState(false);
  const [saved, setSaved] = useState(false); // State to show "Saved" message after auto-saving
  const autoSaveTimeout = useRef<NodeJS.Timeout | null>(null); // Ref to track auto-save timeout
  const queryClient = useQueryClient();

  const { data: topicData, isLoading: topicLoading } = useQuery({
    queryKey: queryKeys.roadmaps.topic(slug, topicSlug),
    queryFn: () =>
      api
        .get<TopicResponse>(`/roadmaps/${slug}/topics/${topicSlug}`)
        .then((res) => res.data),
    enabled: !!slug && !!topicSlug,
    staleTime: 10 * 60 * 1000,
  });

  const topic = topicData?.topic || null;
  const loading = topicLoading;

  const { data: enrollmentsData } = useQuery({
    queryKey: queryKeys.roadmaps.enrollments(),
    queryFn: () =>
      api
        .get<{
          enrollments: {
            id: number;
            roadmap: { slug: string };
            topicProgress: {
              topicId: number;
              status: RoadmapTopicStatus;
              bookmarked: boolean;
              notes: string | null;
            }[];
          }[];
        }>("/roadmaps/me/enrollments")
        .then((res) => res.data),
    enabled: isAuthenticated && !!topic,
    staleTime: 5 * 60 * 1000,
  });

  const enrollment = enrollmentsData?.enrollments.find(
    (e) => e.roadmap.slug === slug,
  );
  const enrollmentId = enrollment?.id || null;

  // We keep local state for optimistic updates during editing
  const [progress, setProgress] = useState<{
    status: RoadmapTopicStatus;
    bookmarked: boolean;
    notes: string;
  } | null>(null);

  useEffect(() => {
    if (enrollment && topic) {
      const p = enrollment.topicProgress.find((tp) => tp.topicId === topic.id);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setProgress({
        status: p?.status ?? "NOT_STARTED",
        bookmarked: p?.bookmarked ?? false,
        notes: p?.notes ?? "",
      });
    }
  }, [enrollment, topic]);

  const learningResourceSchema = useMemo(() => {
    if (!topic) return null;
    return {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      name: topic.title,
      description: topic.summary,
      timeRequired: `PT${topic.estimatedHours}H`,
      educationalLevel: `Level ${topic.difficulty}/5`,
      url: `${SITE_URL}/roadmaps/${slug}/topics/${topic.slug}`,
      learningResourceType: "Lesson",
      isAccessibleForFree: true,
    };
  }, [topic, slug]);

  const updateProgress = async (patch: {
    status?: RoadmapTopicStatus;
    bookmarked?: boolean;
    notes?: string;
  }) => {
    if (!enrollmentId || !topic) return;
    try {
      await api.patch(
        `/roadmaps/me/enrollments/${enrollmentId}/topics/${topic.id}`,
        patch,
      );
      setProgress((p) =>
        p ? { ...p, ...patch, notes: patch.notes ?? p.notes } : p,
      );
      // Invalidate enrollments and detail to keep data fresh
      queryClient.invalidateQueries({
        queryKey: queryKeys.roadmaps.enrollments(),
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.roadmaps.enrollmentDetail(enrollmentId),
      });
    } catch {
      toast.error("Could not save");
    }
  };

  const saveNotes = async () => {
    if (!progress) return;
    setSavingNotes(true);
    await updateProgress({ notes: progress.notes });
    setSavingNotes(false);
    toast.success("Notes saved");
  };

  // Auto-save notes 500ms after textarea loses focus
  const handleAutoSave = () => {
    if (!progress) return;

    if (autoSaveTimeout.current) {
      clearTimeout(autoSaveTimeout.current);
    }

    autoSaveTimeout.current = setTimeout(async () => {
      setSavingNotes(true);

      await updateProgress({
        notes: progress.notes,
      });

      setSavingNotes(false);

      setSaved(true);

      setTimeout(() => {
        setSaved(false);
      }, 2000);
    }, 500);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-500" />
      </div>
    );
  }

  if (!topic) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950 flex items-center justify-center text-sm">
        Topic not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <SEO
        title={`${topic.title} - ${topic.section.roadmap.title}`}
        description={topic.summary}
        canonicalUrl={canonicalUrl(`/roadmaps/${slug}/topics/${topic.slug}`)}
        ogType="article"
        noIndex={!topic.section.roadmap.isPublished}
        structuredData={learningResourceSchema ?? undefined}
      />

      <div className="max-w-4xl mx-auto px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs font-mono text-gray-400 mt-8 mb-6"
          >
            <Link
              to="/roadmaps"
              className="hover:text-gray-600 dark:hover:text-gray-300 no-underline"
            >
              roadmaps
            </Link>
            <ChevronRight className="w-3 h-3" aria-hidden="true" />
            <Link
              to={`/roadmaps/${slug}`}
              className="hover:text-gray-600 dark:hover:text-gray-300 no-underline"
            >
              {topic.section.roadmap.title.toLowerCase()}
            </Link>
            <ChevronRight className="w-3 h-3" aria-hidden="true" />
            <span
              className="text-gray-600 dark:text-gray-300"
              aria-current="page"
            >
              {topic.title.toLowerCase()}
            </span>
          </nav>

          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-gray-950 dark:text-white mb-3">
            {topic.title}
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
            {topic.summary}
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-gray-500 mb-8">
            <span>{topic.estimatedHours} hours</span>
            <span>·</span>
            <span>difficulty {topic.difficulty}/5</span>
            <span>·</span>
            <span>
              section {topic.section.orderIndex + 1}: {topic.section.title}
            </span>
          </div>

          {progress && (
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <Button
                size="sm"
                variant={
                  progress.status === "COMPLETED" ? "primary" : "outline"
                }
                aria-pressed={progress.status === "COMPLETED"}
                onClick={() =>
                  updateProgress({
                    status:
                      progress.status === "COMPLETED"
                        ? "NOT_STARTED"
                        : "COMPLETED",
                  })
                }
              >
                {progress.status === "COMPLETED" ? (
                  <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                ) : (
                  <Circle className="w-3.5 h-3.5" aria-hidden="true" />
                )}
                {progress.status === "COMPLETED"
                  ? "Completed"
                  : "Mark complete"}
              </Button>
              <Button
                size="sm"
                variant={progress.bookmarked ? "primary" : "outline"}
                aria-pressed={progress.bookmarked}
                onClick={() =>
                  updateProgress({ bookmarked: !progress.bookmarked })
                }
              >
                <Bookmark
                  className={`w-3.5 h-3.5 ${progress.bookmarked ? "fill-current" : ""}`}
                  aria-hidden="true"
                />
                {progress.bookmarked ? "Bookmarked" : "Bookmark"}
              </Button>
            </div>
          )}

          {/* Markdown content */}
          <article className="prose prose-zinc dark:prose-invert max-w-none mb-10">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {topic.contentMd}
            </ReactMarkdown>
          </article>

          {/* Resources */}
          {topic.resources.length > 0 && (
            <section className="mb-10">
              <h2 className="font-display text-xl font-bold text-gray-950 dark:text-white mb-4">
                Resources
              </h2>
              <ul className="space-y-2">
                {topic.resources.map((r) => (
                  <li key={r.id}>
                    <a
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 p-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-sm transition-all group no-underline"
                    >
                      <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-500 mt-1 shrink-0">
                        {r.kind}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-gray-950 dark:text-white">
                          {r.title}
                        </p>
                        {r.source && (
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                            {r.source}
                          </p>
                        )}
                      </div>
                      <ExternalLink
                        className="w-4 h-4 text-gray-400 mt-1 shrink-0 group-hover:text-indigo-500 transition-colors"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {topic.miniProject && (
            <section className="mb-10 bg-lime-50 dark:bg-lime-950/30 border border-lime-200 dark:border-lime-900 rounded-2xl p-6">
              <h2 className="text-xs font-bold uppercase tracking-widest text-lime-700 dark:text-lime-400 mb-2">
                Mini project
              </h2>
              <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed">
                {topic.miniProject}
              </p>
            </section>
          )}

          {topic.selfCheck && (
            <section className="mb-10 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 rounded-2xl p-6">
              <h2 className="text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400 mb-2">
                Self-check
              </h2>
              <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed">
                {topic.selfCheck}
              </p>
            </section>
          )}

          {/* Notes for enrolled users */}
          {progress && (
            <section>
              <h2 className="font-display text-xl font-bold text-gray-950 dark:text-white mb-3">
                Your notes
              </h2>
              <label htmlFor="topic-notes" className="sr-only">
                Notes for {topic.title}
              </label>
              <textarea
                id="topic-notes"
                value={progress.notes}
                maxLength={1000} // maxLength added to limit input
                onBlur={handleAutoSave} // auto-save on blur
                onChange={(e) =>
                  setProgress((p) => (p ? { ...p, notes: e.target.value } : p))
                }
                rows={6}
                placeholder="Anything you want to remember about this topic..."
                className="w-full p-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:border-indigo-500 focus-visible:ring-2 focus-visible:ring-indigo-500 transition-colors"
              />
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                {progress.notes.length} / 1000
              </p>
              {saved && <p className="mt-1 text-xs text-green-500">Saved</p>}
              <div className="mt-2 flex justify-end">
                <Button size="sm" onClick={saveNotes} disabled={savingNotes}>
                  {savingNotes ? (
                    <Loader2
                      className="w-3.5 h-3.5 animate-spin"
                      aria-hidden="true"
                    />
                  ) : (
                    <Save className="w-3.5 h-3.5" aria-hidden="true" />
                  )}
                  Save notes
                </Button>
              </div>
            </section>
          )}
        </motion.div>
      </div>
    </div>
  );
}
