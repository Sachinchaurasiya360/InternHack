import { useEffect, useMemo, useState, useCallback, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import NumberFlow from "@number-flow/react";
import {
  CheckCircle2,
  Bookmark,
  X,
  Download,
  Loader2,
  ArrowLeft,
  ExternalLink,
  Clock,
  Check,
  Target,
  Flame,
  ChevronRight,
  BookOpen,
  Pencil,
  ChevronDown,
  ChevronUp,
  RefreshCw,
  Wand2,
  Link2,
  TrendingUp,
  AlertTriangle,
  Users,
  GraduationCap,
} from "lucide-react";
import { SEO } from "../../../components/SEO";
import  RoadmapCompletionModal from "./RoadmapCompletionModal";
import { Button } from "../../../components/ui/button";
import { Navbar } from "../../../components/Navbar";
import { useStudentSidebar } from "../../../components/StudentSidebar";
import api from "../../../lib/axios";
import toast from "../../../components/ui/toast";
import type {
  RoadmapEnrollment,
  RoadmapEnrollmentAnalytics,
  RoadmapEnrollmentSummary,
  RoadmapSection,
  RoadmapTopic,
  RoadmapTopicStatus,
  RoadmapResource,
  StudyBuddyResponse,
} from "../../../lib/types";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { queryKeys } from "../../../lib/query-keys";
import { Area, AreaChart, ResponsiveContainer } from "recharts";

interface EnrollmentResponse {
  enrollment: RoadmapEnrollment;
  summary: RoadmapEnrollmentSummary;
}

interface AnalyticsResponse {
  analytics: RoadmapEnrollmentAnalytics;
}

interface SectionHeaderProps {
  title: string;
  index: number;
  total: number;
  completed: number;
  isCollapsed: boolean;
  onToggle: () => void;
  /** Present only on AI-generated roadmaps owned by the current user */
  onRegenerate?: () => void;
  isRegenerating?: boolean;
  aiRegeneratedAt?: string | null;
}

// ─── Section banner: header for a group of topics ─────────────────────────
function SectionHeader({
  title,
  index,
  total,
  completed,
  isCollapsed,
  onToggle,
  onRegenerate,
  isRegenerating,
  aiRegeneratedAt,
}: SectionHeaderProps) {
  const pct = total === 0 ? 0 : Math.round((completed / total) * 100);
  const sectionDone = completed === total && total > 0;
  const baseDelay = Math.min(index * 0.06, 0.3);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: baseDelay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="select-none"
    >
      {/* Decorative spine break */}
      {index > 0 && (
        <div className="flex items-center gap-2 mb-5 px-2">
          <span className="h-1 w-1 rounded-full bg-stone-400 dark:bg-stone-600" />
          <div className="h-px flex-1 border-t border-dashed border-stone-300 dark:border-stone-700" />
          <span className="h-1 w-1 rounded-full bg-stone-400 dark:bg-stone-600" />
        </div>
      )}

      <div className="flex items-center gap-4 px-2">
        {/* Number/check token with ping ring on completion */}
        <motion.div
          initial={{ scale: 0.4, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: baseDelay + 0.1,
            type: "spring",
            stiffness: 380,
            damping: 20,
          }}
          className={`relative h-11 w-11 rounded-md flex items-center justify-center shrink-0 ${sectionDone
              ? "bg-lime-400 text-stone-950"
              : "bg-stone-950 dark:bg-stone-50 text-stone-50 dark:text-stone-950"
            }`}
        >
          {sectionDone ? (
            <Check className="w-5 h-5" strokeWidth={3} />
          ) : (
            <span className="text-sm font-mono font-bold tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
          {sectionDone && (
            <motion.span
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
              className="absolute inset-0 rounded-md border-2 border-lime-400"
            />
          )}
        </motion.div>

        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-stone-400 mb-0.5">
            section {String(index + 1).padStart(2, "0")}
          </p>
          <p className="text-lg font-bold text-stone-950 dark:text-stone-50 leading-tight truncate">
            {title}
          </p>
        </div>

        <button
          type="button"
          onClick={onToggle}
          title={isCollapsed ? "Expand section" : "Collapse section"}
          className="p-1 rounded hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-500 transition-colors mr-1 cursor-pointer"
        >
          {isCollapsed ? (
            <ChevronDown className="w-5 h-5" />
          ) : (
            <ChevronUp className="w-5 h-5" />
          )}
        </button>

        {onRegenerate && (
          <button
            type="button"
            onClick={onRegenerate}
            disabled={isRegenerating}
            title={
              isRegenerating
                ? "Regenerating section…"
                : "Regenerate this section with AI"
            }
            className="p-1 rounded hover:bg-lime-100 dark:hover:bg-lime-950/40 text-stone-400 hover:text-lime-600 dark:hover:text-lime-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors mr-2 cursor-pointer"
          >
            {isRegenerating ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <RefreshCw className="w-4 h-4" />
            )}
          </button>
        )}

        <div className="text-right shrink-0">
          <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-stone-400 mb-0.5">
            progress
          </p>
          <p className="text-sm font-bold text-stone-950 dark:text-stone-50 tabular-nums leading-tight">
            {pct}
            <span className="text-stone-400 font-normal">%</span>
          </p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-3 mx-2 h-0.5 bg-stone-200 dark:bg-stone-800 overflow-hidden rounded-full">
        <motion.div
          className="h-full bg-lime-500"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{
            delay: baseDelay + 0.2,
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>

      {/* Topic count + status */}
      <div className="mt-2 mx-2 flex items-center justify-between text-[10px] font-mono text-stone-400">
        <span className="tabular-nums">
          {completed}/{total} topics
        </span>
        {sectionDone ? (
          <span className="inline-flex items-center gap-1 text-lime-600 dark:text-lime-500 font-bold uppercase tracking-wider">
            <Check className="w-2.5 h-2.5" strokeWidth={3} />
            section complete
          </span>
        ) : completed > 0 ? (
          <span className="text-stone-500 dark:text-stone-400 uppercase tracking-wider">
            in progress
          </span>
        ) : (
          <span className="text-stone-400 uppercase tracking-wider">
            not started
          </span>
        )}
      </div>

      {/* AI-regenerated badge */}
      {aiRegeneratedAt && (
        <div className="mt-1.5 mx-2 flex items-center gap-1 text-[9px] font-mono text-lime-600 dark:text-lime-500 uppercase tracking-wider">
          <Wand2 className="w-2.5 h-2.5" />
          ai-rewritten
        </div>
      )}
    </motion.div>
  );
}

interface TopicTimelineCardProps {
  topic: RoadmapTopic;
  status: RoadmapTopicStatus;
  bookmarked: boolean;
  isNext: boolean;
  isWeak: boolean;
  index: number;
  prerequisiteTitles: string[];
  onClick: () => void;
}

// ─── Topic card: one row in the timeline ───────────────────────────────────
function TopicTimelineCard({
  topic,
  status,
  isNext,
  bookmarked,
  index,
  isWeak,
  prerequisiteTitles,
  onClick,
}: TopicTimelineCardProps) {
  const isCompleted = status === "COMPLETED";
  const isInProgress = status === "IN_PROGRESS";
  const isSkipped = status === "SKIPPED";

  const weakRing =
    isWeak && !isCompleted ? "ring-2 ring-amber-400 ring-offset-1" : "";

  const cardBorder = isNext
    ? "border-lime-400 dark:border-lime-500"
    : "border-stone-200 dark:border-stone-800";

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: Math.min(index * 0.02, 0.5),
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ scale: 1.01, transition: { duration: 0.15 } }}
      onClick={onClick}
      className={`group relative bg-white dark:bg-stone-900 border ${cardBorder} rounded-lg cursor-pointer min-h-16 overflow-hidden transition-all hover:shadow-lg hover:shadow-lime-500/5 dark:hover:shadow-lime-400/10 ${weakRing}`}
    >
      {/* Bookmark corner ribbon */}
      {bookmarked && (
        <div className="pointer-events-none absolute top-0 right-0">
          <div
            className="h-0 w-0 border-t-20 border-l-20 border-t-lime-500 border-l-transparent"
            aria-label="bookmarked"
          />
        </div>
      )}

      {/* Card body */}
      <div className="pl-4 pr-3.5 py-3">
        {/* Top row: step + status */}
        <div className="flex items-center justify-between mb-1.5 min-h-3.5">
          <div className="inline-flex items-center gap-1.5 text-[9.5px] font-mono uppercase tracking-[0.18em] text-stone-400">
            <span className="tabular-nums font-bold text-stone-500 dark:text-stone-400">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-stone-300 dark:text-stone-700">/</span>
            <span>topic</span>
          </div>

          {isCompleted ? (
            <motion.div
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 420, damping: 20 }}
              className="h-4 w-4 rounded-full bg-lime-500 flex items-center justify-center"
            >
              <Check className="w-2.5 h-2.5 text-stone-950" strokeWidth={3.5} />
            </motion.div>
          ) : isSkipped ? (
            <span className="inline-flex items-center gap-1 text-[9.5px] font-mono font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
              skipped
            </span>
          ) : isInProgress ? (
            <span className="inline-flex items-center gap-1 text-[9.5px] font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              <motion.span
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-1.5 w-1.5 rounded-full bg-amber-500"
              />
              active
            </span>
          ) : isNext ? (
            <span className="inline-flex items-center gap-1 text-[9.5px] font-mono font-bold uppercase tracking-wider text-lime-600 dark:text-lime-400">
              <motion.span
                animate={{ scale: [1, 1.4, 1] }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-1.5 w-1.5 rounded-full bg-lime-500"
              />
              next up
            </span>
          ) : null}
        </div>

        {/* Title */}
        <p
          className={`text-sm font-bold leading-snug transition-colors ${isCompleted || isSkipped
              ? "text-stone-400 dark:text-stone-600 line-through decoration-1 decoration-stone-300 dark:decoration-stone-700"
              : "text-stone-950 dark:text-stone-50 group-hover:text-stone-950 dark:group-hover:text-stone-50"
            }`}
        >
          {topic.title}
        </p>

        {/* Meta row */}
        <div className="mt-2 flex items-center gap-1.5 text-[10px] font-mono text-stone-400">
          <span className="inline-flex items-center gap-1">
            <Clock className="w-2.5 h-2.5" />
            <span className="tabular-nums">{topic.estimatedHours}h</span>
          </span>
          <span className="text-stone-300 dark:text-stone-700">·</span>
          <span className="text-amber-500">
            {"★".repeat(topic.difficulty)}
            <span className="text-stone-300 dark:text-stone-700">
              {"★".repeat(5 - topic.difficulty)}
            </span>
          </span>
          {topic.resources && topic.resources.length > 0 && (
            <>
              <span className="text-stone-300 dark:text-stone-700">·</span>
              <span className="inline-flex items-center gap-1">
                <BookOpen className="w-2.5 h-2.5" />
                <span className="tabular-nums">{topic.resources.length}</span>
              </span>
            </>
          )}
          <span className="ml-auto inline-flex items-center text-stone-300 dark:text-stone-700 group-hover:text-lime-500 transition-colors">
            <ChevronRight className="w-3 h-3" />
          </span>
        </div>

        {/* Prerequisite badges */}
        {prerequisiteTitles.length > 0 && (
          <div className="mt-2 pt-2 border-t border-dashed border-stone-200 dark:border-stone-800 flex items-start gap-1.5 text-[10px] font-mono text-stone-400">
            <Link2 className="w-2.5 h-2.5 mt-0.5 shrink-0" />
            <span className="leading-relaxed">
              requires{" "}
              <span className="text-stone-600 dark:text-stone-300 font-semibold">
                {prerequisiteTitles.join(", ")}
              </span>
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

function topicDotClass(
  status: RoadmapTopicStatus,
  isNext: boolean,
): string {
  if (status === "COMPLETED") return "bg-lime-500";
  if (status === "IN_PROGRESS") return "bg-amber-400";
  if (status === "SKIPPED") return "bg-stone-400 dark:bg-stone-600";
  if (isNext) return "bg-lime-400";
  return "bg-stone-300 dark:bg-stone-700";
}

// ─── Page ──────────────────────────────────────────────────────────────────
export default function RoadmapCanvasPage() {
  const { slug = "" } = useParams();

  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 768 : false,
  );

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [drawerTopicId, setDrawerTopicId] = useState<number | null>(null);
  const [downloading, setDownloading] = useState<"light" | "dark" | null>(null);
  // Track which sectionId is currently being regenerated
  const [regeneratingSectionId, setRegeneratingSectionId] = useState<
    number | null
  >(null);
  const [regenModal, setRegenModal] = useState<{
    sectionId: number;
    sectionTitle: string;
  } | null>(null);

  const [regenInstructions, setRegenInstructions] = useState("");
  const [collapsedSections, setCollapsedSections] = useState<Set<number>>(
    new Set(),
  );
  const [weakTopicTitles, setWeakTopicTitles] = useState<Set<string>>(
    new Set(),
  );

  useEffect(() => {
    api
      .get<{
        weakAreas: { type: string; topic: string; topicSlug?: string }[];
      }>("/student/recommendations")
      .then((res) => {
        const slugs = new Set(
          res.data.weakAreas
            .filter((w) => w.type === "roadmap" && w.topicSlug)
            .map((w) => w.topicSlug as string),
        );
        setWeakTopicTitles(slugs);
      })
      .catch((err) => {
        console.error("Failed to fetch recommendations:", err);
      });
  }, []);

  const toggleSection = useCallback((id: number) => {
    setCollapsedSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
   const [showEditModal, setShowEditModal] = useState(false);
  const [showBuddyDrawer, setShowBuddyDrawer] = useState(false);
  const [preferSameCollege, setPreferSameCollege] = useState(false);
  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [level, setLevel] = useState<"BEGINNER" | "INTERMEDIATE" | "ADVANCED" | "ALL_LEVELS">(
    "BEGINNER",
  );
  // Track previous percentComplete so we only fire the modal on the transition to 100
  const prevPercentRef = useRef<number | null>(null);
  const hasShownCompletionRef = useRef(false);

  const {
    data: enrollmentsList,
    isLoading: enrollmentsLoading,
    error: enrollmentsError,
  } = useQuery({
    queryKey: queryKeys.roadmaps.enrollments(),
    queryFn: () =>
      api
        .get<{
          enrollments: { id: number; roadmap: { slug: string } }[];
        }>("/roadmaps/me/enrollments")
        .then((res) => res.data),
  });

  useEffect(() => {
    if (enrollmentsError) {
      navigate(`/roadmaps/${slug}`);
    }
  }, [enrollmentsError, navigate, slug]);

  const enrollmentMatch = enrollmentsList?.enrollments.find(
    (x) => x.roadmap.slug === slug,
  );

  useEffect(() => {
    if (enrollmentsList && !enrollmentMatch && !enrollmentsLoading) {
      navigate(`/roadmaps/${slug}/enroll`);
    }
  }, [enrollmentsList, enrollmentMatch, enrollmentsLoading, navigate, slug]);

  const enrollmentId = enrollmentMatch?.id || null;

  const {
    data,
    isLoading: detailLoading,
    isError: detailError,
  } = useQuery({
    queryKey: queryKeys.roadmaps.enrollmentDetail(enrollmentId!),
    queryFn: () =>
      api
        .get<EnrollmentResponse>(`/roadmaps/me/enrollments/${enrollmentId}`)
        .then((res) => res.data),
    enabled: !!enrollmentId,
  });

  const { data: analyticsData } = useQuery({
    queryKey: queryKeys.roadmaps.enrollmentAnalytics(enrollmentId!),
    queryFn: () =>
      api
        .get<AnalyticsResponse>(
          `/roadmaps/me/enrollments/${enrollmentId}/analytics`,
        )
        .then((res) => res.data),
    enabled: !!enrollmentId,
  });

  const { data: profileData } = useQuery({
    queryKey: queryKeys.profile.me(),
    queryFn: () => api.get<{ user: { college: string | null } }>("/auth/me").then((r) => r.data),
  });
  const hasCollege = Boolean(profileData?.user?.college);

  const roadmapId = data?.enrollment?.roadmapId;

  const { data: studyBuddyData } = useQuery({
    queryKey: queryKeys.roadmaps.studyBuddy(roadmapId!),
    queryFn: () =>
      api
        .get<StudyBuddyResponse>(`/roadmaps/${roadmapId}/study-buddy`)
        .then((res) => res.data),
    enabled: !!roadmapId,
  });

  const optInMutation = useMutation({
    mutationFn: (body: { preferSameCollege: boolean }) =>
      api.post(`/roadmaps/${roadmapId}/study-buddy/opt-in`, body).then((r) => r.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.roadmaps.studyBuddy(roadmapId!) });
      toast.success("Joined matching pool!");
    },
    onError: () => {
      toast.error("Failed to opt in");
    },
  });

  const optOutMutation = useMutation({
    mutationFn: () =>
      api.delete(`/roadmaps/${roadmapId}/study-buddy/opt-in`).then((r) => r.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.roadmaps.studyBuddy(roadmapId!) });
      toast.success("Left study buddy matching.");
    },
    onError: () => {
      toast.error("Failed to opt out");
    },
  });

  const rematchMutation = useMutation({
    mutationFn: () =>
      api.post(`/roadmaps/${roadmapId}/study-buddy/rematch`).then((r) => r.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.roadmaps.studyBuddy(roadmapId!) });
      toast.success("Rematch request processed!");
    },
    onError: () => {
      toast.error("Failed to request rematch");
    },
  });

  useEffect(() => {
    if (studyBuddyData) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPreferSameCollege(studyBuddyData.preferSameCollege);
    }
  }, [studyBuddyData]);

  const loading = enrollmentsLoading || detailLoading;
  const error = enrollmentsError || detailError;

  // ── Fire completion modal when progress first reaches 100% ──────────────
  useEffect(() => {
    if (!data) return;

    const pct = data.summary.percentComplete;

    // Only show once per page session on first transition to 100%
    if (
      !hasShownCompletionRef.current &&
      prevPercentRef.current !== null &&
      prevPercentRef.current < 100 &&
      pct === 100
    ) {
      setShowCompletionModal(true);
      hasShownCompletionRef.current = true;
    }

    prevPercentRef.current = pct;
  }, [data]);
  useEffect(() => {
    if (!data) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTitle(data.enrollment.roadmap.title);
    setShortDescription(data.enrollment.roadmap.shortDescription);
    setLevel(data.enrollment.roadmap.level);
  }, [data]);

  const progressByTopicId = useMemo(() => {
    if (!data)
      return new Map<
        number,
        { status: RoadmapTopicStatus; bookmarked: boolean }
      >();
    return new Map(
      data.enrollment.topicProgress.map((p) => [
        p.topicId,
        { status: p.status, bookmarked: p.bookmarked },
      ]),
    );
  }, [data]);

  // First topic that is not yet COMPLETED (in section/order order)
  const nextTopicId = useMemo(() => {
    if (!data) return null;
    for (const section of data.enrollment.roadmap.sections) {
      for (const t of section.topics) {
        const p = progressByTopicId.get(t.id);
        if (!p || p.status !== "COMPLETED") return t.id;
      }
    }
    return null;
  }, [data, progressByTopicId]);

  const handleNodeClick = useCallback((topicId: number) => {
    setDrawerTopicId(topicId);
  }, []);
  const handleUpdateRoadmap = async () => {
  try {
    await api.patch(`/roadmaps/${slug}`, {
      title,
      shortDescription,
      level,
    });

    toast.success("Roadmap updated");

    setShowEditModal(false);

    queryClient.invalidateQueries({
      queryKey: queryKeys.roadmaps.enrollmentDetail(enrollmentId!),
    });
  } catch {
    toast.error("Failed to update roadmap");
  }
};

  const allTopics = useMemo(() => {
    if (!data) return [];
    return data.enrollment.roadmap.sections.flatMap((s) => s.topics);
  }, [data]);

  const regenProgressImpact = useMemo(() => {
    const empty = { totalAffected: 0, completed: 0, inProgress: 0 };
    if (!regenModal || !data) return empty;
    const section = data.enrollment.roadmap.sections.find(
      (s) => s.id === regenModal.sectionId,
    );
    if (!section) return empty;
    let completed = 0;
    let inProgress = 0;
    for (const topic of section.topics) {
      const p = progressByTopicId.get(topic.id);
      if (p?.status === "COMPLETED") completed++;
      else if (p?.status === "IN_PROGRESS") inProgress++;
    }
    return { totalAffected: completed + inProgress, completed, inProgress };
  }, [regenModal, data, progressByTopicId]);

  const isAiOwned = !!(
    data?.enrollment.roadmap.isAiGenerated &&
    data?.enrollment.roadmap.ownerUserId
  );

  const openRegenModal = useCallback(
    (sectionId: number, sectionTitle: string) => {
      setRegenInstructions("");
      setRegenModal({ sectionId, sectionTitle });
    },
    [],
  );

  const topicsBySlug = useMemo(() => {
    const map = new Map<string, RoadmapTopic>();
    for (const t of allTopics) map.set(t.slug, t);
    return map;
  }, [allTopics]);

  const globalIndexByTopicId = useMemo(() => {
    const map = new Map<number, number>();
    allTopics.forEach((t, i) => map.set(t.id, i));
    return map;
  }, [allTopics]);

  const drawerTopic = useMemo(() => {
    if (!drawerTopicId || !data) return null;
    return allTopics.find((t) => t.id === drawerTopicId) ?? null;
  }, [drawerTopicId, allTopics, data]);

  const drawerProgress = drawerTopicId
    ? progressByTopicId.get(drawerTopicId)
    : undefined;

  const updateProgress = async (
    topicId: number,
    patch: { status?: RoadmapTopicStatus; bookmarked?: boolean },
  ) => {
    if (!enrollmentId) return;
    try {
      await api.patch(
        `/roadmaps/me/enrollments/${enrollmentId}/topics/${topicId}`,
        patch,
      );
      queryClient.invalidateQueries({
        queryKey: queryKeys.roadmaps.enrollmentDetail(enrollmentId),
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.roadmaps.enrollments(),
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.roadmaps.enrollmentAnalytics(enrollmentId),
      });
    } catch {
      toast.error("Could not save progress");
    }
  };

  const downloadPdf = async (theme: "light" | "dark") => {
    if (!enrollmentId) return;

    setDownloading(theme);

    try {
      const res = await api.get(
        `/roadmaps/me/enrollments/${enrollmentId}/pdf`,
        { responseType: "blob" },
      );

      const url = URL.createObjectURL(res.data as Blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `${slug}-roadmap${theme === "dark" ? "-dark" : ""}.pdf`;
      a.click();

      URL.revokeObjectURL(url);

      toast.success("PDF downloaded successfully");
    } catch {
      toast.error("PDF generation failed. Please try again.");
    } finally {
      setDownloading(null);
    }
  };

  // ── Section regeneration mutation ────────────────────────────────────────
  const regenerateMutation = useMutation({
    mutationFn: ({
      sectionId,
      instructions,
    }: {
      sectionId: number;
      instructions?: string;
    }) =>
      api
        .post<{
          message: string;
          section: RoadmapSection;
        }>(`/roadmaps/${slug}/sections/${sectionId}/regenerate`, {
          instructions: instructions?.trim() || undefined,
        })
        .then((r) => r.data),
    onMutate: ({ sectionId }) => {
      setRegeneratingSectionId(sectionId);
    },
    onSuccess: () => {
      toast.success("Section regenerated");
      // Refresh the enrollment detail so the canvas re-renders with new topics
      if (enrollmentId) {
        queryClient.invalidateQueries({
          queryKey: queryKeys.roadmaps.enrollmentDetail(enrollmentId),
        });
        queryClient.invalidateQueries({
          queryKey: queryKeys.roadmaps.enrollments(),
        });
        queryClient.invalidateQueries({
          queryKey: queryKeys.roadmaps.enrollmentAnalytics(enrollmentId),
        });
      }
      setRegenModal(null);
      setRegenInstructions("");
    },
    onError: (err: { response?: { data?: { message?: string } } }) => {
      const msg =
        err?.response?.data?.message ??
        "Could not regenerate section. Please try again.";
      toast.error(msg);
    },
    onSettled: () => {
      setRegeneratingSectionId(null);
    },
  });

  const confirmRegen = () => {
    if (!regenModal) return;
    regenerateMutation.mutate({
      sectionId: regenModal.sectionId,
      instructions: regenInstructions,
    });
  };

  // useStudentSidebar must be called unconditionally (rules of hooks). It always
  // returns valid props since this page is auth-gated.
  const { collapsed, sidebarWidth, sidebar } = useStudentSidebar();

  if (loading) {
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
        <div className="hidden lg:block">
          <Navbar sidebarOffset={sidebarWidth} />
        </div>
        <div className="lg:hidden">
          <Navbar />
        </div>
        {sidebar}
        <div className="flex items-center justify-center pt-32">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="h-10 w-10 border-2 border-stone-200 dark:border-stone-800 border-t-lime-500 rounded-full"
          />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
        <div className="hidden lg:block">
          <Navbar sidebarOffset={sidebarWidth} />
        </div>
        <div className="lg:hidden">
          <Navbar />
        </div>
        {sidebar}
        <div className="flex flex-col items-center justify-center pt-32 px-6 text-center">
          <p className="text-lg font-bold text-stone-950 dark:text-stone-50 mb-2">
            Could not load your roadmap
          </p>
          <p className="text-sm text-stone-500 mb-6">
            There was a problem connecting to the server. Please try again.
          </p>
          <Button onClick={() => window.location.reload()} variant="outline">
            Retry
          </Button>
        </div>
      </div>
    );
  }

  if (!data) return null;

  const { summary } = data;
  const analytics = analyticsData?.analytics ?? null;

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
      {/* Global navbar */}
      <div className="hidden lg:block">
        <Navbar sidebarOffset={sidebarWidth} />
      </div>
      <div className="lg:hidden">
        <Navbar />
      </div>
      {sidebar}

      {/* Main content area: fills the rest of the viewport, alongside sidebar */}
      <div
        className={`flex flex-col min-h-screen overflow-y-auto pt-16 transition-all duration-300 ${
          collapsed ? "lg:ml-18" : "lg:ml-64"
        }`}
      >
        <SEO title={`Learn: ${data.enrollment.roadmap.title}`} noIndex />

        {/* ─── Top bar ─────────────────────────────────────────────────────── */}
        <motion.header
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 bg-stone-950 text-stone-50 border-b border-white/10"
        >
          <div className="flex items-center gap-4 px-5 py-3">
            <Link
              to="/roadmaps"
              className="p-2 -ml-2 text-stone-400 hover:text-stone-50 hover:bg-white/5 rounded-md transition-colors no-underline"
              aria-label="Back to roadmaps"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-stone-500 mb-0.5">
                <span className="h-1 w-1 bg-lime-400" />
                roadmap
              </div>
              <p className="text-sm font-bold text-stone-50 truncate">
                {data.enrollment.roadmap.title}
              </p>
            </div>

            <div className="hidden md:flex items-center gap-5 shrink-0">
              <Stat
                icon={Target}
                label="progress"
                value={
                  <NumberFlow
                    value={summary.percentComplete}
                    suffix="%"
                    className="font-bold"
                  />
                }
                accent
              />
              <Stat
                icon={CheckCircle2}
                label="topics"
                value={
                  <span className="font-bold tabular-nums">
                    <NumberFlow value={summary.completedTopics} />
                    <span className="text-stone-500">
                      /{summary.totalTopics}
                    </span>
                  </span>
                }
              />
              <Stat
                icon={Clock}
                label="hours"
                value={
                  <span className="font-bold tabular-nums">
                    <NumberFlow value={summary.hoursDone} />
                    <span className="text-stone-500">
                      /{summary.hoursTotal}
                    </span>
                  </span>
                }
              />
              <Stat
                icon={Flame}
                label="streak"
                value={
                  <span className="font-bold tabular-nums">
                    {analytics?.currentStreak ?? 0}d
                  </span>
                }
              />
            </div>
                        <button
              type="button"
              onClick={() => setShowEditModal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-stone-800 text-stone-50 text-xs font-bold rounded-md hover:bg-stone-700 transition-colors"
            >
              <Pencil className="w-3.5 h-3.5" />
              Edit
            </button>

            {studyBuddyData && (
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setShowBuddyDrawer(true)}
              >
                <Users className="w-3.5 h-3.5 text-lime-400" />
                {studyBuddyData.status === "MATCHED"
                  ? `Buddy: ${studyBuddyData.buddy?.name.split(" ")[0]}`
                  : studyBuddyData.status === "SEARCHING"
                    ? "Buddy: Searching..."
                    : "Find Study Buddy"}
              </Button>
            )}

            <button
              type="button"
              onClick={() => downloadPdf("light")}
              disabled={downloading !== null}
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-lime-400 text-stone-950 text-xs font-bold rounded-md hover:bg-lime-300 transition-colors disabled:opacity-60 cursor-pointer border-0"
            >
              {downloading === "light" ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <Download className="w-3.5 h-3.5" />
              )}

              {downloading === "light" ? "Generating..." : "PDF"}
            </button>
          </div>

          <RoadmapAnalyticsStrip analytics={analytics} />

          {/* Animated progress strip */}
          <div className="h-0.5 bg-stone-900 overflow-hidden">
            <motion.div
              className="h-full bg-lime-400"
              initial={{ width: 0 }}
              animate={{ width: `${summary.percentComplete}%` }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </motion.header>

        {/* ─── Timeline ────────────────────────────────────────────────────── */}
        <div className="flex-1 bg-stone-50 dark:bg-stone-950">
          <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 py-8">
            {/* Legend */}
            <div className="mb-6 flex items-center gap-4">
              <LegendDot color="bg-lime-500" label="done" />
              <LegendDot color="bg-amber-400" label="active" />
              <LegendDot
                color="border-2 border-stone-300 dark:border-stone-700"
                label="todo"
              />
            </div>

            {data.enrollment.roadmap.sections.map((section, sIdx) => {
              const isCollapsed = collapsedSections.has(section.id);
              const completedInSection = section.topics.filter(
                (t) => progressByTopicId.get(t.id)?.status === "COMPLETED",
              ).length;

              return (
                <div key={section.id} className={sIdx > 0 ? "mt-10" : ""}>
                  <SectionHeader
                    title={section.title}
                    index={sIdx}
                    total={section.topics.length}
                    completed={completedInSection}
                    isCollapsed={isCollapsed}
                    onToggle={() => toggleSection(section.id)}
                    {...(isAiOwned
                      ? {
                        onRegenerate: () =>
                          openRegenModal(section.id, section.title),
                        isRegenerating:
                          regeneratingSectionId === section.id,
                        aiRegeneratedAt: section.aiRegeneratedAt ?? null,
                      }
                      : {})}
                  />

                  {!isCollapsed && (
                    <div className="mt-5 space-y-2">
                      {section.topics.map((topic, tIdx) => {
                        const p = progressByTopicId.get(topic.id);
                        const status = p?.status ?? "NOT_STARTED";
                        const isNext = topic.id === nextTopicId;
                        const isFirst = tIdx === 0;
                        const isLast = tIdx === section.topics.length - 1;
                        const prevTopic =
                          tIdx > 0 ? section.topics[tIdx - 1] : null;
                        const prevDone = prevTopic
                          ? progressByTopicId.get(prevTopic.id)?.status ===
                          "COMPLETED"
                          : false;
                        const prerequisiteTitles = (
                          topic.prerequisiteSlugs ?? []
                        )
                          .map((s) => topicsBySlug.get(s)?.title)
                          .filter((t): t is string => Boolean(t));

                        return (
                          <div key={topic.id} className="relative flex gap-3">
                            {/* Gutter: connecting line + status dot */}
                            <div className="relative flex w-6 shrink-0 justify-center">
                              {!isFirst && (
                                <span
                                  className={`absolute top-0 h-5 w-px ${prevDone
                                      ? "bg-lime-400"
                                      : "bg-stone-200 dark:bg-stone-800"
                                    }`}
                                />
                              )}
                              {!isLast && (
                                <span className="absolute top-5 bottom-0 w-px bg-stone-200 dark:bg-stone-800" />
                              )}
                              <span
                                className={`relative z-10 mt-4 h-2.5 w-2.5 rounded-full ${topicDotClass(status, isNext)}`}
                              />
                            </div>

                            <div className="flex-1 min-w-0 pb-1">
                              <TopicTimelineCard
                                topic={topic}
                                status={status}
                                bookmarked={p?.bookmarked ?? false}
                                isNext={isNext}
                                isWeak={weakTopicTitles.has(topic.slug)}
                                index={
                                  globalIndexByTopicId.get(topic.id) ?? 0
                                }
                                prerequisiteTitles={prerequisiteTitles}
                                onClick={() => handleNodeClick(topic.id)}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── Drawer ──────────────────────────────────────────────────────── */}
        <AnimatePresence>
          {drawerTopic && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setDrawerTopicId(null)}
                className="fixed inset-0 bg-stone-950/40 backdrop-blur-[2px] z-40"
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 28, stiffness: 280 }}
                className={
                  isMobile
                    ? "fixed bottom-0 left-0 right-0 h-[78vh] bg-white dark:bg-stone-950 border-t border-stone-200 dark:border-stone-800 shadow-2xl z-50 overflow-y-auto rounded-t-2xl"
                    : "fixed inset-y-0 right-0 w-full sm:w-115 bg-white dark:bg-stone-950 border-l border-stone-200 dark:border-stone-800 shadow-2xl z-50 overflow-y-auto"
                }
              >
                <div className="sticky top-0 z-10 bg-white/90 dark:bg-stone-950/90 backdrop-blur border-b border-stone-200 dark:border-stone-800 px-5 py-3 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-stone-400">
                    <span className="h-1 w-1 bg-lime-500" />
                    topic
                  </div>
                  <Button
                    variant="ghost"
                    mode="icon"
                    aria-label="Close drawer"
                    size="sm"
                    onClick={() => setDrawerTopicId(null)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>

                <div className="p-5 space-y-5">
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                  >
                    <h3 className="font-display text-2xl font-bold text-stone-950 dark:text-stone-50 mb-2 leading-tight">
                      {drawerTopic.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[11px] font-mono text-stone-400 mb-4">
                      <span className="tabular-nums">
                        {drawerTopic.estimatedHours}h
                      </span>
                      <span className="text-stone-300 dark:text-stone-700">
                        ·
                      </span>
                      <span className="text-amber-500">
                        {"★".repeat(drawerTopic.difficulty)}
                        <span className="text-stone-300 dark:text-stone-700">
                          {"★".repeat(5 - drawerTopic.difficulty)}
                        </span>
                      </span>
                    </div>
                    <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                      {drawerTopic.summary}
                    </p>
                  </motion.div>

                  {/* Status chips */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.3 }}
                    className="flex items-center gap-1.5 flex-wrap"
                  >
                    <StatusChip
                      active={
                        !drawerProgress ||
                        drawerProgress.status === "NOT_STARTED"
                      }
                      onClick={() =>
                        updateProgress(drawerTopic.id, {
                          status: "NOT_STARTED",
                        })
                      }
                    >
                      Not started
                    </StatusChip>
                    <StatusChip
                      active={drawerProgress?.status === "IN_PROGRESS"}
                      activeColor="amber"
                      onClick={() =>
                        updateProgress(drawerTopic.id, {
                          status: "IN_PROGRESS",
                        })
                      }
                    >
                      In progress
                    </StatusChip>
                    <StatusChip
                      active={drawerProgress?.status === "COMPLETED"}
                      activeColor="lime"
                      onClick={() =>
                        updateProgress(drawerTopic.id, { status: "COMPLETED" })
                      }
                    >
                      <Check className="w-3 h-3" /> Completed
                    </StatusChip>
                    <StatusChip
                      active={drawerProgress?.status === "SKIPPED"}
                      onClick={() =>
                        updateProgress(drawerTopic.id, { status: "SKIPPED" })
                      }
                    >
                      Skipped
                    </StatusChip>
                    <button
                      type="button"
                      aria-label={
                        drawerProgress?.bookmarked
                          ? "Remove bookmark"
                          : "Add bookmark"
                      }
                      title={
                        drawerProgress?.bookmarked
                          ? "Remove bookmark"
                          : "Add bookmark"
                      }
                      onClick={() =>
                        updateProgress(drawerTopic.id, {
                          bookmarked: !drawerProgress?.bookmarked,
                        })
                      }
                      className={`inline-flex items-center justify-center h-7 w-7 rounded-md text-xs font-bold transition-colors cursor-pointer border ${drawerProgress?.bookmarked
                          ? "bg-lime-400 text-stone-950 border-lime-400"
                          : "bg-white text-stone-500 border-stone-200 hover:border-stone-400 dark:bg-stone-900 dark:text-stone-400 dark:border-stone-800 dark:hover:border-stone-600"
                        }`}
                    >
                      <Bookmark
                        className={`w-3 h-3 ${drawerProgress?.bookmarked ? "fill-current" : ""}`}
                      />
                    </button>
                  </motion.div>

                  {/* Resources */}
                  {drawerTopic.resources.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                    >
                      <p className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-stone-400 mb-2">
                        <span className="h-1 w-1 bg-lime-500" />
                        resources
                      </p>
                      <ul className="space-y-1">
                        {drawerTopic.resources.map((r: RoadmapResource) => (
                          <li key={r.id}>
                            <a
                              href={r.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors group no-underline"
                            >
                              <span className="text-[9px] font-mono uppercase tracking-widest text-lime-600 dark:text-lime-500 shrink-0 w-12">
                                {r.kind}
                              </span>
                              <span className="flex-1 text-sm text-stone-700 dark:text-stone-300 group-hover:text-stone-950 dark:group-hover:text-stone-50">
                                {r.title}
                                {r.source && (
                                  <span className="text-stone-400 ml-1.5">
                                    ({r.source})
                                  </span>
                                )}
                              </span>
                              <ExternalLink className="w-3 h-3 text-stone-300 dark:text-stone-700 shrink-0 group-hover:text-lime-500 transition-colors" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {drawerTopic.miniProject && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.3 }}
                      className="bg-lime-50 dark:bg-lime-950/30 border border-lime-200 dark:border-lime-900/50 rounded-xl p-4"
                    >
                      <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-lime-700 dark:text-lime-400 mb-2">
                        <span className="h-1 w-1 bg-lime-500" />
                        mini project
                      </p>
                      <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                        {drawerTopic.miniProject}
                      </p>
                    </motion.div>
                  )}

                  {drawerTopic.selfCheck && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35, duration: 0.3 }}
                      className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 rounded-xl p-4"
                    >
                      <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-400 mb-2">
                        <span className="h-1 w-1 bg-amber-500" />
                        self-check
                      </p>
                      <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                        {drawerTopic.selfCheck}
                      </p>
                    </motion.div>
                  )}

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                    className="pt-2 border-t border-stone-200 dark:border-stone-800"
                  >
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="w-full"
                    >
                      <Link to={`/learn/roadmaps/${slug}/${drawerTopic.slug}`}>
                        Open the full topic page
                        <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* ─── Study Buddy Drawer ────────────────────────────────────────── */}
        <AnimatePresence>
          {showBuddyDrawer && studyBuddyData && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setShowBuddyDrawer(false)}
                className="fixed inset-0 bg-stone-950/40 backdrop-blur-[2px] z-40"
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 28, stiffness: 280 }}
                className={
                  isMobile
                    ? "fixed bottom-0 left-0 right-0 h-[78vh] bg-white dark:bg-stone-950 border-t border-stone-200 dark:border-stone-800 shadow-2xl z-50 overflow-y-auto rounded-t-2xl"
                    : "fixed inset-y-0 right-0 w-full sm:w-115 bg-white dark:bg-stone-950 border-l border-stone-200 dark:border-stone-800 shadow-2xl z-50 overflow-y-auto"
                }
              >
                <div className="sticky top-0 z-10 bg-white/90 dark:bg-stone-950/90 backdrop-blur border-b border-stone-200 dark:border-stone-800 px-5 py-3 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-stone-400">
                    <span className="h-1 w-1 bg-lime-500" />
                    Study Buddy Matcher
                  </div>
                  <Button
                    variant="ghost"
                    mode="icon"
                    aria-label="Close drawer"
                    size="sm"
                    onClick={() => setShowBuddyDrawer(false)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>

                <div className="p-5 space-y-6">
                  {studyBuddyData.status === "NOT_OPTED_IN" && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="font-display text-xl font-bold text-stone-950 dark:text-stone-50 leading-tight">
                          Find an Accountability Partner
                        </h3>
                        <p className="text-sm text-stone-500 dark:text-stone-400">
                          Get matched with another student enrolled in this roadmap. Compare progress, see who completes more topics each week, and stay motivated together.
                        </p>
                      </div>

                      <div className="bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-4 space-y-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-lime-500 shrink-0 mt-0.5" />
                          <div>
                            <h4 className="text-xs font-bold text-stone-900 dark:text-stone-100">
                              Smart Matching Algorithm
                            </h4>
                            <p className="text-xs text-stone-500 dark:text-stone-400">
                              Pairs you based on current completion rates, completed topics count, and experience level.
                            </p>
                          </div>
                        </div>

                        {hasCollege ? (
                          <label className="flex items-start gap-3 cursor-pointer select-none">
                            <input
                              type="checkbox"
                              checked={preferSameCollege}
                              onChange={(e) => setPreferSameCollege(e.target.checked)}
                              className="mt-1 accent-lime-400 h-4 w-4 rounded border-stone-300 text-lime-600 focus:ring-lime-500"
                            />
                            <div>
                              <span className="text-xs font-bold text-stone-900 dark:text-stone-100">
                                Match within your college
                              </span>
                              <p className="text-xs text-stone-500 dark:text-stone-400">
                                Prioritize matching with peers from {profileData?.user?.college}.
                              </p>
                            </div>
                          </label>
                        ) : (
                          <div className="flex items-start gap-2.5 text-xs text-stone-500 dark:text-stone-500">
                            <GraduationCap className="w-4 h-4 shrink-0 mt-0.5" />
                            <span>
                              College match unavailable. Set your college in your profile to allow matching with campus peers.
                            </span>
                          </div>
                        )}
                      </div>

                      <Button
                        variant="primary"
                        className="w-full justify-center"
                        disabled={optInMutation.isPending}
                        onClick={() => optInMutation.mutate({ preferSameCollege })}
                      >
                        {optInMutation.isPending ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin mr-2" />
                            Joining pool...
                          </>
                        ) : (
                          "Find a Study Buddy"
                        )}
                      </Button>
                    </div>
                  )}

                  {studyBuddyData.status === "SEARCHING" && (
                    <div className="flex flex-col items-center justify-center text-center space-y-6 py-8">
                      <div className="relative flex items-center justify-center h-48 w-48">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-36 h-36 rounded-full border border-lime-400/20 animate-ping duration-1000" />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-28 h-28 rounded-full border border-lime-400/30 animate-pulse duration-1000" />
                        </div>
                        <div className="relative z-10 p-5 bg-stone-100 dark:bg-stone-900 rounded-full border border-lime-400/50 shadow-lg shadow-lime-950/20">
                          <Users className="w-10 h-10 text-lime-400" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-display text-lg font-bold text-stone-950 dark:text-stone-50 leading-tight">
                          Looking for your Buddy...
                        </h3>
                        <p className="text-xs text-stone-500 dark:text-stone-400 max-w-xs">
                          We are analyzing the roadmap pool to match you with someone at a similar pace and experience level.
                        </p>
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-stone-400 hover:text-stone-200"
                        disabled={optOutMutation.isPending}
                        onClick={() => optOutMutation.mutate()}
                      >
                        {optOutMutation.isPending ? "Canceling..." : "Cancel Search"}
                      </Button>
                    </div>
                  )}

                  {studyBuddyData.status === "MATCHED" && studyBuddyData.buddy && (
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <h3 className="text-xs font-mono uppercase tracking-wider text-stone-400">
                          Your Accountability Partner
                        </h3>
                        
                        <div className="flex items-center gap-4 bg-stone-50 dark:bg-stone-900/50 border border-stone-200 dark:border-stone-800 rounded-xl p-4">
                          <div className="flex items-center justify-center w-12 h-12 bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-lg font-bold rounded-lg shrink-0">
                            {studyBuddyData.buddy.name.charAt(0).toUpperCase()}
                          </div>
                          <div className="space-y-1">
                            <h4 className="font-display font-bold text-stone-900 dark:text-stone-50 leading-tight">
                              {studyBuddyData.buddy.name}
                            </h4>
                            <div className="flex flex-col gap-1">
                              {studyBuddyData.buddy.college && (
                                <div className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400">
                                  <GraduationCap className="w-3.5 h-3.5 shrink-0" />
                                  <span className="truncate max-w-48">
                                    {studyBuddyData.buddy.college}
                                  </span>
                                </div>
                              )}
                              <div className="flex items-center gap-3 text-xs font-mono text-stone-500 dark:text-stone-400">
                                <span>Exp: {studyBuddyData.buddy.experienceLevel}</span>
                                {studyBuddyData.buddy.currentStreak > 0 && (
                                  <span className="flex items-center gap-1 text-amber-500">
                                    <Flame className="w-3.5 h-3.5" />
                                    {studyBuddyData.buddy.currentStreak}d
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4 border-t border-stone-200 dark:border-stone-800 pt-5">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-stone-400">
                          Progress Comparison
                        </h4>

                        <div className="space-y-4">
                          {/* User progress */}
                          <div className="space-y-1.5">
                            <div className="flex items-center justify-between text-xs font-bold text-stone-800 dark:text-stone-200">
                              <span>You</span>
                              <span className="font-mono">{summary.percentComplete}%</span>
                            </div>
                            <div className="h-2 bg-stone-200 dark:bg-stone-800 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-lime-400 rounded-full transition-all duration-500"
                                style={{ width: `${summary.percentComplete}%` }}
                              />
                            </div>
                            <div className="text-xs text-stone-500 dark:text-stone-400 font-mono text-right">
                              {summary.completedTopics} of {summary.totalTopics} topics complete
                            </div>
                          </div>

                          {/* Buddy progress */}
                          <div className="space-y-1.5">
                            <div className="flex items-center justify-between text-xs font-bold text-stone-800 dark:text-stone-200">
                              <span>{studyBuddyData.buddy.name}</span>
                              <span className="font-mono">{studyBuddyData.buddy.percentComplete}%</span>
                            </div>
                            <div className="h-2 bg-stone-200 dark:bg-stone-800 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-amber-400 rounded-full transition-all duration-500"
                                style={{ width: `${studyBuddyData.buddy.percentComplete}%` }}
                              />
                            </div>
                            <div className="text-xs text-stone-500 dark:text-stone-400 font-mono text-right">
                              {studyBuddyData.buddy.completedTopics} of {summary.totalTopics} topics complete
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-stone-200 dark:border-stone-800 pt-5 flex flex-col gap-2">
                        <Button
                          variant="secondary"
                          className="w-full justify-center"
                          disabled={rematchMutation.isPending}
                          onClick={() => {
                            if (window.confirm("Are you sure you want to rematch? This will assign a new buddy and automatically place your current buddy back in the matchmaking pool.")) {
                              rematchMutation.mutate();
                            }
                          }}
                        >
                          {rematchMutation.isPending ? "Rematching..." : "Request Rematch"}
                        </Button>
                        <Button
                          variant="danger"
                          className="w-full justify-center"
                          disabled={optOutMutation.isPending}
                          onClick={() => {
                            if (window.confirm("Stop matching with this buddy? This will exit the program.")) {
                              optOutMutation.mutate();
                            }
                          }}
                        >
                          {optOutMutation.isPending ? "Stopping..." : "Stop Matching"}
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {showEditModal && (
          <>
    {/* Backdrop */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowEditModal(false)}
      className="fixed inset-0 z-60 bg-stone-950/70 backdrop-blur-sm"
    />

    {/* Modal */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 24,
      }}
      className="fixed inset-0 z-70 flex items-center justify-center p-4"
    >
      <div
        className="w-full max-w-2xl rounded-2xl border border-stone-800 bg-stone-950 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-stone-800 px-6 py-5">
          <h2 className="text-2xl font-bold text-stone-50">
            Edit Roadmap Details
          </h2>

          <button
            type="button"
            onClick={() => setShowEditModal(false)}
            className="rounded-md p-2 text-stone-500 hover:bg-stone-900 hover:text-stone-300"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="space-y-6 p-6">
          {/* Title */}
          <div>
            <label className="mb-2 block text-[11px] font-mono uppercase tracking-[0.2em] text-stone-500">
              Title
            </label>

            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-xl border border-stone-700 bg-stone-900 px-4 py-3 text-stone-50 outline-none focus:border-lime-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="mb-2 block text-[11px] font-mono uppercase tracking-[0.2em] text-stone-500">
              Description
            </label>

            <textarea
              rows={5}
              value={shortDescription}
              onChange={(e) =>
                setShortDescription(e.target.value)
              }
              className="w-full rounded-xl border border-stone-700 bg-stone-900 px-4 py-3 text-stone-50 outline-none resize-none focus:border-lime-500"
            />
          </div>

          {/* Level */}
          <div>
            <label className="mb-2 block text-[11px] font-mono uppercase tracking-[0.2em] text-stone-500">
              Level
            </label>

            <select
              value={level}
                           onChange={(e) =>
                setLevel(
                  e.target.value as "BEGINNER" | "INTERMEDIATE" | "ADVANCED",
                )
              }
              className="w-full rounded-xl border border-stone-700 bg-stone-900 px-4 py-3 text-stone-50 outline-none focus:border-lime-500"
            >
              <option value="BEGINNER">
                Beginner
              </option>

              <option value="INTERMEDIATE">
                Intermediate
              </option>

              <option value="ADVANCED">
                Advanced
              </option>
            </select>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t border-stone-800 px-6 py-5">
          <Button
            variant="ghost"
            onClick={() => setShowEditModal(false)}
          >
            Cancel
          </Button>

          <Button
            onClick={handleUpdateRoadmap}
            className="bg-lime-400 text-stone-950 hover:bg-lime-300"
          >
            Save Changes
          </Button>
        </div>
      </div>
    </motion.div>
  </>
)}

        {/* ─── Roadmap Completion Modal ─────────────────────────────────── */}
        {showCompletionModal && (
          <RoadmapCompletionModal
            roadmapName={data.enrollment.roadmap.title}
            shareToken={String(data.enrollment.shareToken)}
            roadmapSlug={data.enrollment.roadmap.slug}
            onClose={() => setShowCompletionModal(false)}
          />
        )}

        {/* ─── Section Regeneration Modal ───────────────────────────────── */}
        <AnimatePresence>
          {regenModal && (
            <>
              {/* Backdrop */}
              <motion.div
                key="regen-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() =>
                  !regenerateMutation.isPending && setRegenModal(null)
                }
                className="fixed inset-0 z-60 bg-stone-950/60 backdrop-blur-sm"
              />
              {/* Dialog */}
              <motion.div
                key="regen-dialog"
                role="dialog"
                aria-modal="true"
                aria-labelledby="regen-dialog-title"
                initial={{ opacity: 0, scale: 0.92, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 8 }}
                transition={{ type: "spring", damping: 26, stiffness: 320 }}
                className="fixed inset-0 z-70 flex items-center justify-center px-4 pointer-events-none"
              >
                <div className="w-full max-w-md pointer-events-auto bg-stone-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                  {/* Header */}
                  <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-white/8">
                    <div className="flex items-center gap-2">
                      <div className="h-7 w-7 rounded-md bg-lime-400 flex items-center justify-center">
                        <RefreshCw className="w-3.5 h-3.5 text-stone-950" />
                      </div>
                      <div>
                        <p
                          id="regen-dialog-title"
                          className="text-sm font-bold text-stone-50"
                        >
                          Regenerate section
                        </p>
                        <p className="text-xs font-mono text-stone-500 truncate max-w-60">
                          {regenModal.sectionTitle}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setRegenModal(null)}
                      disabled={regenerateMutation.isPending}
                      aria-label="Close"
                      className="p-1.5 rounded-lg text-stone-500 hover:text-stone-300 hover:bg-white/5 transition-colors disabled:opacity-40 cursor-pointer border-0 bg-transparent"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Body */}
                  <div className="px-5 py-4 space-y-4">
                    <div
                      role="alert"
                      className="flex gap-3 rounded-xl border border-amber-500/30 bg-amber-500/10 px-3.5 py-3"
                    >
                      <AlertTriangle
                        className="mt-0.5 h-4 w-4 shrink-0 text-amber-400"
                        aria-hidden
                      />
                      <div className="space-y-1.5">
                        <p className="text-xs font-semibold text-amber-100">
                          Progress in this section will be reset
                        </p>
                        <p className="text-xs text-amber-100/80 leading-relaxed">
                          Regenerating this section will reset your progress for
                          all topics in it. This cannot be undone.
                        </p>
                        {regenProgressImpact.totalAffected > 0 ? (
                          <p className="text-[11px] font-mono text-amber-200/90">
                            {regenProgressImpact.completed > 0 && (
                              <span>
                                {regenProgressImpact.completed} completed
                              </span>
                            )}
                            {regenProgressImpact.completed > 0 &&
                              regenProgressImpact.inProgress > 0 &&
                              " · "}
                            {regenProgressImpact.inProgress > 0 && (
                              <span>
                                {regenProgressImpact.inProgress} in progress
                              </span>
                            )}{" "}
                            topic
                            {regenProgressImpact.totalAffected === 1
                              ? ""
                              : "s"}{" "}
                            will be affected.
                          </p>
                        ) : (
                          <p className="text-[11px] font-mono text-amber-200/70">
                            No completed or in-progress topics in this section
                            yet.
                          </p>
                        )}
                      </div>
                    </div>

                    <p className="text-xs text-stone-400 leading-relaxed">
                      AI will rewrite this section's topics and resources while
                      keeping the rest of your roadmap intact. Your progress on
                      existing topics will be cleared for this section. AI will
                      rewrite this section's topics and resources while keeping
                      the rest of your roadmap intact. Your progress on existing
                      topics will be cleared for this section.
                    </p>

                    <div>
                      <label
                        htmlFor="regen-instructions"
                        className="block text-[10px] font-mono uppercase tracking-widest text-stone-400 mb-2"
                      >
                        Instructions (optional)
                      </label>
                      <textarea
                        id="regen-instructions"
                        value={regenInstructions}
                        onChange={(e) => setRegenInstructions(e.target.value)}
                        placeholder="e.g. make it more beginner-friendly, focus on practical projects, add more TypeScript content…"
                        rows={3}
                        maxLength={400}
                        disabled={regenerateMutation.isPending}
                        className="w-full px-3 py-2.5 bg-stone-800 border border-white/8 rounded-xl text-sm text-stone-100 placeholder:text-stone-600 focus:outline-none focus:border-lime-500/50 focus:ring-1 focus:ring-lime-500/30 resize-none disabled:opacity-50 transition-colors"
                      />
                      <p className="text-[10px] font-mono text-stone-600 mt-1 text-right tabular-nums">
                        {regenInstructions.length}/400
                      </p>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="px-5 pb-5 flex items-center justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setRegenModal(null)}
                      disabled={regenerateMutation.isPending}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={confirmRegen}
                      disabled={regenerateMutation.isPending}
                    >
                      {regenerateMutation.isPending ? (
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      ) : (
                        <Wand2 className="w-3.5 h-3.5" />
                      )}
                    </Button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ─── Small subcomponents ───────────────────────────────────────────────────
function RoadmapAnalyticsStrip({
  analytics,
}: {
  analytics: RoadmapEnrollmentAnalytics | null;
}) {
  const statusStyles = analytics
    ? {
      AHEAD: "text-lime-300",
      ON_TRACK: "text-sky-300",
      BEHIND: "text-amber-300",
    }[analytics.onTrackStatus]
    : "text-stone-500";

  const statusLabel =
    analytics?.onTrackStatus.replace("_", " ").toLowerCase() ?? "loading";
  const estimatedDate = analytics
    ? new Intl.DateTimeFormat(undefined, {
      month: "short",
      day: "numeric",
    }).format(new Date(analytics.estimatedCompletionDate))
    : "calculating";

  return (
    <div className="border-t border-white/10 bg-stone-950/95 px-5 py-3">
      <div className="grid gap-3 lg:grid-cols-5 lg:items-center">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:col-span-4">
          <AnalyticsMetric
            label="current streak"
            value={analytics ? `${analytics.currentStreak}d` : "--"}
          />
          <AnalyticsMetric
            label="best streak"
            value={analytics ? `${analytics.longestStreak}d` : "--"}
          />
          <AnalyticsMetric
            label="this week"
            value={
              analytics
                ? `${analytics.topicsCompletedThisWeek}/${analytics.weeklyTarget}`
                : "--"
            }
          />
          <AnalyticsMetric label="finish est." value={estimatedDate} />
        </div>

        <div className="flex items-center gap-3 min-w-0">
          <div className="flex w-28 shrink-0 items-center gap-2">
            <TrendingUp
              className={`w-3.5 h-3.5 ${statusStyles}`}
              aria-hidden="true"
            />
            <div className="min-w-0">
              <p className="text-xs font-bold text-stone-100 capitalize truncate">
                {statusLabel}
              </p>
              <p className="text-[10px] font-mono text-stone-500 uppercase tracking-wider">
                pace
              </p>
            </div>
          </div>

          <div className="min-w-0 rounded-md border border-white/10 bg-white/5 px-3 py-2">
            <p className="text-[10px] font-mono uppercase tracking-wider text-stone-500">
              trend
            </p>

            <div className="h-8 mt-1">
              {analytics && analytics.progressTrend.length > 1 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={analytics.progressTrend}>
                    <defs>
                      <linearGradient
                        id="trendFill"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#a3e635"
                          stopOpacity={0.35}
                        />
                        <stop
                          offset="100%"
                          stopColor="#a3e635"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      dataKey="cumulative"
                      stroke="#a3e635"
                      strokeWidth={2}
                      fill="url(#trendFill)"
                      dot={{ r: 2, strokeWidth: 0, fill: "#a3e635" }}
                      isAnimationActive={false}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full flex items-center justify-center text-[10px] font-mono text-stone-600">
                  complete 2 days to see
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnalyticsMetric({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="min-w-0 rounded-md border border-white/10 bg-white/5 px-3 py-2">
      <p className="text-[10px] font-mono uppercase tracking-wider text-stone-500 truncate">
        {label}
      </p>
      <p className="mt-0.5 text-sm font-bold text-stone-50 tabular-nums truncate">
        {value}
      </p>
    </div>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
  accent = false,
}: {
  icon: typeof Target;
  label: string;
  value: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      <Icon
        className={`w-3.5 h-3.5 ${accent ? "text-lime-400" : "text-stone-500"}`}
      />
      <div className="flex flex-col">
        <span className="text-[9px] font-mono uppercase tracking-[0.18em] text-stone-500 leading-none">
          {label}
        </span>
        <span
          className={`text-xs leading-tight mt-0.5 ${accent ? "text-lime-400" : "text-stone-50"}`}
        >
          {value}
        </span>
      </div>
    </div>
  );
}

function LegendDot({ color, label }: { color: string; label: string }) {
  const isBorder = color.startsWith("border-");
  return (
    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-stone-500">
      <span
        className={`h-2.5 w-2.5 rounded-full ${isBorder ? color : color}`}
      />
      {label}
    </span>
  );
}

function StatusChip({
  active,
  activeColor = "stone",
  children,
  onClick,
}: {
  active: boolean;
  activeColor?: "stone" | "lime" | "amber";
  children: React.ReactNode;
  onClick: () => void;
}) {
  const activeBg =
    activeColor === "lime"
      ? "bg-lime-400 text-stone-950 border-lime-400"
      : activeColor === "amber"
        ? "bg-amber-400 text-stone-950 border-amber-400"
        : "bg-stone-950 text-stone-50 border-stone-950 dark:bg-stone-50 dark:text-stone-950 dark:border-stone-50";
  const idle =
    "bg-white text-stone-700 border-stone-200 hover:border-stone-400 dark:bg-stone-900 dark:text-stone-300 dark:border-stone-800 dark:hover:border-stone-600";
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 h-7 px-2.5 rounded-md text-xs font-bold transition-colors cursor-pointer border ${active ? activeBg : idle
        }`}
    >
      {children}
    </button>
  );
}
