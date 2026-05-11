import { useEffect, useMemo, useState, useCallback, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router";
import ReactFlow, {
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  type Node,
  type Edge,
  Position,
  Handle,
  type NodeProps,
  ReactFlowProvider,
} from "reactflow";
import "reactflow/dist/style.css";
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
} from "lucide-react";
import { SEO } from "../../../components/SEO";
import { RoadmapCompletionModal } from "./RoadmapCompletionModal";
import { Button } from "../../../components/ui/button";
import { Navbar } from "../../../components/Navbar";
import { useStudentSidebar } from "../../../components/StudentSidebar";
import api from "../../../lib/axios";
import toast from "../../../components/ui/toast";
import type {
  RoadmapEnrollment,
  RoadmapEnrollmentSummary,
  RoadmapTopic,
  RoadmapTopicStatus,
} from "../../../lib/types";

interface EnrollmentResponse {
  enrollment: RoadmapEnrollment;
  summary: RoadmapEnrollmentSummary;
}

interface TopicNodeData {
  topic: RoadmapTopic;
  status: RoadmapTopicStatus;
  bookmarked: boolean;
  isNext: boolean;
  index: number;
  onClick: () => void;
}

interface SectionLabelData {
  title: string;
  index: number;
  total: number;
  completed: number;
}

// ─── Custom node: section banner (decorative, no handles) ─────────────────
function SectionLabelNode({ data }: NodeProps<SectionLabelData>) {
  const pct =
    data.total === 0 ? 0 : Math.round((data.completed / data.total) * 100);
  const sectionDone = data.completed === data.total && data.total > 0;
  const baseDelay = Math.min(data.index * 0.08, 0.4);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: baseDelay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="select-none pointer-events-none w-120"
    >
      {/* Decorative spine break */}
      <div className="flex items-center gap-2 mb-5 px-2">
        <span className="h-1 w-1 rounded-full bg-stone-400 dark:bg-stone-600" />
        <div className="h-px flex-1 border-t border-dashed border-stone-300 dark:border-stone-700" />
        <span className="h-1 w-1 rounded-full bg-stone-400 dark:bg-stone-600" />
      </div>

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
          className={`relative h-11 w-11 rounded-md flex items-center justify-center shrink-0 ${
            sectionDone
              ? "bg-lime-400 text-stone-950"
              : "bg-stone-950 dark:bg-stone-50 text-stone-50 dark:text-stone-950"
          }`}
        >
          {sectionDone ? (
            <Check className="w-5 h-5" strokeWidth={3} />
          ) : (
            <span className="text-sm font-mono font-bold tabular-nums">
              {String(data.index + 1).padStart(2, "0")}
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
            section {String(data.index + 1).padStart(2, "0")}
          </p>
          <p className="text-lg font-bold text-stone-950 dark:text-stone-50 leading-tight truncate">
            {data.title}
          </p>
        </div>

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
          {data.completed}/{data.total} topics
        </span>
        {sectionDone ? (
          <span className="inline-flex items-center gap-1 text-lime-600 dark:text-lime-500 font-bold uppercase tracking-wider">
            <Check className="w-2.5 h-2.5" strokeWidth={3} />
            section complete
          </span>
        ) : data.completed > 0 ? (
          <span className="text-stone-500 dark:text-stone-400 uppercase tracking-wider">
            in progress
          </span>
        ) : (
          <span className="text-stone-400 uppercase tracking-wider">
            not started
          </span>
        )}
      </div>
    </motion.div>
  );
}

// ─── Custom node: topic card ────────────────────────────────────────────────
function TopicNode({ data }: NodeProps<TopicNodeData>) {
  const { status, topic, isNext, bookmarked, index } = data;
  const isCompleted = status === "COMPLETED";
  const isInProgress = status === "IN_PROGRESS";

  const railColor = isCompleted
    ? "bg-lime-500"
    : isInProgress
      ? "bg-amber-400"
      : "bg-stone-200 dark:bg-stone-800";

  const cardBorder = isNext
    ? "border-lime-400 dark:border-lime-500"
    : "border-stone-200 dark:border-stone-800";

  return (
    <motion.div
      initial={{ opacity: 0, y: 6, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay: Math.min(index * 0.022, 0.6),
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ scale: 1.02, transition: { duration: 0.15 } }}
      whileTap={{ scale: 0.98 }}
      onClick={data.onClick}
      className={`group relative bg-white dark:bg-stone-900 border-y border-r ${cardBorder} border-l-0 rounded-r-md cursor-grab active:cursor-grabbing w-72 overflow-hidden transition-all hover:shadow-lg hover:shadow-lime-500/5 dark:hover:shadow-lime-400/10`}
    >
      <Handle
        type="target"
        position={Position.Top}
        className="bg-stone-300! dark:bg-stone-700! w-2! h-2! border-0! top-0!"
      />

      {/* Left status rail */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-1.5 ${railColor} transition-colors`}
      >
        {isNext && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "200%" }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-x-0 h-1/2 bg-linear-to-b from-transparent via-lime-300 to-transparent"
          />
        )}
      </div>

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
      <div className="pl-5 pr-3.5 py-3">
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
          className={`text-sm font-bold leading-snug line-clamp-2 transition-colors ${
            isCompleted
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
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        className="bg-stone-300! dark:bg-stone-700! w-2! h-2! border-0! bottom-0!"
      />
    </motion.div>
  );
}

const nodeTypes = { topic: TopicNode, sectionLabel: SectionLabelNode };

// ─── Page ──────────────────────────────────────────────────────────────────
export default function RoadmapCanvasPage() {
  const { slug = "" } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<EnrollmentResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [enrollmentId, setEnrollmentId] = useState<number | null>(null);
  const [drawerTopicId, setDrawerTopicId] = useState<number | null>(null);
  const [downloading, setDownloading] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  // Track previous percentComplete so we only fire the modal on the transition to 100
  const prevPercentRef = useRef<number | null>(null);
  const hasShownCompletionRef = useRef(false);

  useEffect(() => {
    let mounted = true;
    api
      .get<{ enrollments: { id: number; roadmap: { slug: string } }[] }>(
        "/roadmaps/me/enrollments",
      )
      .then(async (res) => {
        if (!mounted) return;
        const e = res.data.enrollments.find((x) => x.roadmap.slug === slug);
        if (!e) {
          navigate(`/roadmaps/${slug}/enroll`);
          return;
        }
        setEnrollmentId(e.id);
        const detail = await api.get<EnrollmentResponse>(
          `/roadmaps/me/enrollments/${e.id}`,
        );
        if (!mounted) return;
        setData(detail.data);
      })
      .catch(() => mounted && navigate(`/roadmaps/${slug}`))
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, [slug, navigate]);

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

  const { nodes, edges } = useMemo<{
    nodes: Node<TopicNodeData | SectionLabelData>[];
    edges: Edge[];
  }>(() => {
    if (!data) return { nodes: [], edges: [] };

    const slugToTopicId = new Map<string, number>();
    for (const t of allTopics) slugToTopicId.set(t.slug, t.id);

    // ── Vertical spine layout ────────────────────────────────────────────
    // Topic node = w-72 (288px). Centered around x=0 ⇒ x = -144.
    // Section banner = w-120 (480px). Centered around x=0 ⇒ x = -240.
    const TOPIC_NODE_WIDTH = 288;
    const TOPIC_X = -TOPIC_NODE_WIDTH / 2;
    const SECTION_BANNER_X = -240;
    const SECTION_HEADER_HEIGHT = 150;
    const ROW_HEIGHT = 110;
    const SECTION_GAP = 70;

    const nodes: Node<TopicNodeData | SectionLabelData>[] = [];
    const edges: Edge[] = [];
    const sections = data.enrollment.roadmap.sections;

    let cursorY = 0;
    let globalIdx = 0;
    let prevSectionLastTopicId: number | null = null;

    sections.forEach((section, sIdx) => {
      const completedInSection = section.topics.filter(
        (t) => progressByTopicId.get(t.id)?.status === "COMPLETED",
      ).length;

      // Section banner
      nodes.push({
        id: `section-${section.id}`,
        type: "sectionLabel",
        position: { x: SECTION_BANNER_X, y: cursorY },
        data: {
          title: section.title,
          index: sIdx,
          total: section.topics.length,
          completed: completedInSection,
        },
        draggable: false,
        selectable: false,
      });
      cursorY += SECTION_HEADER_HEIGHT;

      const firstTopicInSection = section.topics[0];

      // Bridge edge from previous section's last topic to this section's first topic
      if (prevSectionLastTopicId && firstTopicInSection) {
        edges.push({
          id: `bridge-${prevSectionLastTopicId}-${firstTopicInSection.id}`,
          source: String(prevSectionLastTopicId),
          target: String(firstTopicInSection.id),
          type: "smoothstep",
          style: {
            stroke: "#a8a29e",
            strokeWidth: 1.25,
            strokeDasharray: "3 5",
            opacity: 0.5,
          },
        });
      }

      section.topics.forEach((topic, tIdx) => {
        const p = progressByTopicId.get(topic.id);
        nodes.push({
          id: String(topic.id),
          type: "topic",
          position: { x: TOPIC_X, y: cursorY },
          data: {
            topic,
            status: p?.status ?? "NOT_STARTED",
            bookmarked: p?.bookmarked ?? false,
            isNext: topic.id === nextTopicId,
            index: globalIdx,
            onClick: () => handleNodeClick(topic.id),
          },
        });
        globalIdx += 1;
        cursorY += ROW_HEIGHT;

        // Sequential edges within a section
        if (tIdx > 0) {
          const prev = section.topics[tIdx - 1];
          const prevDone =
            progressByTopicId.get(prev.id)?.status === "COMPLETED";
          const isFrontier = prevDone && topic.id === nextTopicId;
          edges.push({
            id: `e${prev.id}-${topic.id}`,
            source: String(prev.id),
            target: String(topic.id),
            type: "smoothstep",
            animated: isFrontier,
            style: {
              stroke: prevDone ? "#84cc16" : "#d6d3d1",
              strokeWidth: prevDone ? 2 : 1.5,
            },
          });
        }

        // Cross-section prereq edges (dashed)
        for (const preSlug of topic.prerequisiteSlugs ?? []) {
          const preId = slugToTopicId.get(preSlug);
          if (preId && preId !== topic.id) {
            edges.push({
              id: `p${preId}-${topic.id}`,
              source: String(preId),
              target: String(topic.id),
              type: "smoothstep",
              animated: false,
              style: {
                stroke: "#a8a29e",
                strokeWidth: 1.25,
                strokeDasharray: "4 4",
                opacity: 0.45,
              },
            });
          }
        }
      });

      prevSectionLastTopicId =
        section.topics[section.topics.length - 1]?.id ?? prevSectionLastTopicId;
      cursorY += SECTION_GAP;
    });

    return { nodes, edges };
  }, [data, allTopics, progressByTopicId, nextTopicId, handleNodeClick]);

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
      const detail = await api.get<EnrollmentResponse>(
        `/roadmaps/me/enrollments/${enrollmentId}`,
      );
      setData(detail.data);
    } catch {
      toast.error("Could not save progress");
    }
  };

  const downloadPdf = async () => {
    if (!enrollmentId) return;
    setDownloading(true);
    try {
      const res = await api.get(
        `/roadmaps/me/enrollments/${enrollmentId}/pdf`,
        {
          responseType: "blob",
        },
      );
      const url = URL.createObjectURL(res.data as Blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${slug}-roadmap.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      toast.error("Could not download PDF");
    } finally {
      setDownloading(false);
    }
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
  if (!data) return null;

  const { summary } = data;

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
        className={`flex flex-col h-screen pt-16 lg:pt-16 transition-all duration-300 ${
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
              to="/student/roadmaps"
              className="p-2 -ml-2 text-stone-400 hover:text-stone-50 hover:bg-white/5 rounded-md transition-colors no-underline"
              aria-label="Back to dashboard"
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
                    {computeStreak(data)}d
                  </span>
                }
              />
            </div>

            <button
              type="button"
              onClick={downloadPdf}
              disabled={downloading}
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-lime-400 text-stone-950 text-xs font-bold rounded-md hover:bg-lime-300 transition-colors disabled:opacity-60 cursor-pointer border-0"
            >
              {downloading ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <Download className="w-3.5 h-3.5" />
              )}
              PDF
            </button>
          </div>

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

        {/* ─── Canvas ──────────────────────────────────────────────────────── */}
        <div className="flex-1 relative">
          <ReactFlowProvider>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              nodeTypes={nodeTypes}
              fitView={false}
              defaultViewport={{ x: 0, y: 0, zoom: 1 }}
              onInit={(instance) => {
                const w = window.innerWidth;
                // Center the spine (flow x = 0) on screen, pin to top of content
                instance.setViewport({ x: w / 2, y: 30, zoom: 1 });
              }}
              proOptions={{ hideAttribution: true }}
              nodesDraggable={true}
              nodesConnectable={false}
              elementsSelectable={true}
              panOnDrag={[1, 2]}
              minZoom={0.4}
              maxZoom={1.5}
              className="bg-stone-50 dark:bg-stone-950"
            >
              <Background
                variant={BackgroundVariant.Dots}
                gap={28}
                size={1}
                color="#d6d3d1"
                className="dark:opacity-20"
              />
              <Controls
                showInteractive={false}
                className="bg-white! dark:bg-stone-900! border! border-stone-200! dark:border-stone-800! rounded-md! shadow-sm! [&_button]:border-stone-200! dark:[&_button]:border-stone-800! [&_button:hover]:bg-lime-50! dark:[&_button:hover]:bg-lime-950/30!"
              />
              <MiniMap
                pannable
                zoomable
                maskColor="rgba(245, 245, 244, 0.6)"
                className="bg-white! dark:bg-stone-900! border! border-stone-200! dark:border-stone-800! rounded-md!"
                nodeColor={(n) => {
                  if (n.type === "sectionLabel") return "transparent";
                  const d = n.data as TopicNodeData;
                  if (d?.status === "COMPLETED") return "#84cc16";
                  if (d?.status === "IN_PROGRESS") return "#fbbf24";
                  return "#d6d3d1";
                }}
              />
            </ReactFlow>
          </ReactFlowProvider>

          {/* Floating legend */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="absolute bottom-5 left-5 hidden sm:flex items-center gap-3 px-3 py-2 bg-white/90 dark:bg-stone-900/90 backdrop-blur border border-stone-200 dark:border-stone-800 rounded-md shadow-sm"
          >
            <LegendDot color="bg-lime-500" label="done" />
            <LegendDot color="bg-amber-400" label="active" />
            <LegendDot
              color="border-2 border-stone-300 dark:border-stone-700"
              label="todo"
            />
          </motion.div>
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
                className="fixed inset-y-0 right-0 w-full sm:w-115 bg-white dark:bg-stone-950 border-l border-stone-200 dark:border-stone-800 shadow-2xl z-50 overflow-y-auto"
              >
                <div className="sticky top-0 z-10 bg-white/90 dark:bg-stone-950/90 backdrop-blur border-b border-stone-200 dark:border-stone-800 px-5 py-3 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-stone-400">
                    <span className="h-1 w-1 bg-lime-500" />
                    topic
                  </div>
                  <Button
                    variant="ghost"
                    mode="icon"
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
                    <button
                      type="button"
                      onClick={() =>
                        updateProgress(drawerTopic.id, {
                          bookmarked: !drawerProgress?.bookmarked,
                        })
                      }
                      className={`inline-flex items-center justify-center h-7 w-7 rounded-md text-xs font-bold transition-colors cursor-pointer border ${
                        drawerProgress?.bookmarked
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
                        {drawerTopic.resources.map((r, i) => (
                          <motion.li
                            key={r.id}
                            initial={{ opacity: 0, x: 8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: 0.25 + i * 0.04,
                              duration: 0.3,
                            }}
                          >
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
                          </motion.li>
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

        {/* ─── Roadmap Completion Modal ─────────────────────────────────── */}
        {showCompletionModal && (
          <RoadmapCompletionModal
            roadmapName={data.enrollment.roadmap.title}
            onClose={() => setShowCompletionModal(false)}
          />
        )}
      </div>
    </div>
  );
}

// ─── Small subcomponents ───────────────────────────────────────────────────
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
      className={`inline-flex items-center gap-1.5 h-7 px-2.5 rounded-md text-xs font-bold transition-colors cursor-pointer border ${
        active ? activeBg : idle
      }`}
    >
      {children}
    </button>
  );
}

function computeStreak(data: EnrollmentResponse): number {
  // Count distinct days (UTC) on which any topic was completed.
  // Simple approximation: number of unique YYYY-MM-DD strings across completedAt timestamps.
  const days = new Set<string>();
  for (const p of data.enrollment.topicProgress) {
    if (p.status === "COMPLETED" && p.completedAt) {
      days.add(new Date(p.completedAt).toISOString().slice(0, 10));
    }
  }
  return days.size;
}
