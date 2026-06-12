import { useEffect, useState, type ReactNode, type KeyboardEvent } from "react";
import { useNavigate, Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Wand2,
  Plus,
  X,
  Map as MapIcon,
  Zap,
  Clock,
  BookOpen,
  Crown,
  Eye,
} from "lucide-react";
import { SEO } from "../../../components/SEO";
import { Button } from "../../../components/ui/button";
import { Navbar } from "../../../components/Navbar";
import { useStudentSidebar } from "../../../components/StudentSidebar";
import { useAuthStore } from "../../../lib/auth.store";
import api from "../../../lib/axios";
import toast from "../../../components/ui/toast";
import type { DayOfWeek, RoadmapEnrollmentListItem } from "../../../lib/types";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../lib/query-keys";

interface RoadmapPreview {
  slug: string;
  enrollmentId: number;
  title: string;
  sections: { title: string; estimatedHours: number }[];
  totalHours: number;
}

const TEMPLATES = [
  {
    id: "fullstack",
    title: "Full-Stack in 3 months",
    description: "React + Node + Postgres. Ship a SaaS from scratch.",
    goalDescription:
      "I want to become a full-stack developer and build a SaaS product in 3 months using React, Node.js, and PostgreSQL.",
    experienceLevel: "SOME" as const,
    background: "SELF_TAUGHT" as const,
    goal: "JOB_READY" as const,
    mustInclude: ["React", "Node.js", "PostgreSQL", "REST APIs"],
    hoursPerWeek: 15,
  },
  {
    id: "frontend",
    title: "Frontend in 6 weeks",
    description: "HTML → CSS → JS → React. Fast track to UI dev.",
    goalDescription:
      "I want to master frontend development in 6 weeks covering HTML, CSS, JavaScript, and React to get a junior frontend job.",
    experienceLevel: "NEW" as const,
    background: "CAREER_SWITCHER" as const,
    goal: "JOB_READY" as const,
    mustInclude: ["HTML", "CSS", "JavaScript", "React"],
    hoursPerWeek: 20,
  },
  {
    id: "backend-python",
    title: "Backend Python in 2 months",
    description: "Python + FastAPI + databases. Build production APIs.",
    goalDescription:
      "I want to learn backend development with Python, FastAPI, and PostgreSQL to build and deploy production-ready REST APIs in 2 months.",
    experienceLevel: "SOME" as const,
    background: "CS_STUDENT" as const,
    goal: "SIDE_PROJECT" as const,
    mustInclude: ["Python", "FastAPI", "PostgreSQL", "Docker"],
    hoursPerWeek: 12,
  },
  {
    id: "dsa-faang",
    title: "DSA prep for FAANG in 90 days",
    description: "Arrays to DP. Interview patterns for top tech companies.",
    goalDescription:
      "I want to prepare for FAANG coding interviews in 90 days by mastering data structures, algorithms, and common interview patterns.",
    experienceLevel: "SOME" as const,
    background: "WORKING_PRO" as const,
    goal: "JOB_READY" as const,
    mustInclude: [
      "Arrays",
      "Trees",
      "Graphs",
      "Dynamic Programming",
      "System Design",
    ],
    hoursPerWeek: 10,
  },
];
type Background =
  | "CS_STUDENT"
  | "SELF_TAUGHT"
  | "CAREER_SWITCHER"
  | "HOBBYIST"
  | "WORKING_PRO";
type Experience = "NEW" | "SOME" | "EXPERIENCED";
type Goal = "JOB_READY" | "SIDE_PROJECT" | "SCHOOL" | "CURIOUS";

const DAYS: DayOfWeek[] = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const DAY_LABEL: Record<DayOfWeek, string> = {
  MON: "Mon",
  TUE: "Tue",
  WED: "Wed",
  THU: "Thu",
  FRI: "Fri",
  SAT: "Sat",
  SUN: "Sun",
};

const EXPERIENCE_OPTS: { value: Experience; label: string; body: string }[] = [
  { value: "NEW", label: "Brand new", body: "Never coded, or very little." },
  {
    value: "SOME",
    label: "Some experience",
    body: "Tutorials, school, side projects.",
  },
  {
    value: "EXPERIENCED",
    label: "Experienced",
    body: "Comfortable building, want depth.",
  },
];

const BACKGROUND_OPTS: { value: Background; label: string; body: string }[] = [
  {
    value: "CS_STUDENT",
    label: "CS student",
    body: "In college or a CS program.",
  },
  { value: "SELF_TAUGHT", label: "Self-taught", body: "Learning on your own." },
  {
    value: "CAREER_SWITCHER",
    label: "Career switcher",
    body: "From a non-tech field.",
  },
  {
    value: "WORKING_PRO",
    label: "Working pro",
    body: "Already in tech, leveling up.",
  },
  { value: "HOBBYIST", label: "Hobbyist", body: "Just for fun." },
];

const GOAL_OPTS: { value: Goal; label: string; body: string }[] = [
  {
    value: "JOB_READY",
    label: "Get job ready",
    body: "Build a portfolio that lands interviews.",
  },
  {
    value: "SIDE_PROJECT",
    label: "Build a side project",
    body: "I have an idea and want to ship it.",
  },
  {
    value: "SCHOOL",
    label: "School / coursework",
    body: "Reinforce what I'm learning in class.",
  },
  {
    value: "CURIOUS",
    label: "Curious",
    body: "I just want to understand the stack.",
  },
];

const STEPS = [
  {
    id: 0,
    label: "goal",
    title: "What do you want to learn?",
    body: "One sentence is enough. Be specific.",
  },
  {
    id: 1,
    label: "level",
    title: "How far along are you?",
    body: "Helps us skip what you already know.",
  },
  {
    id: 2,
    label: "context",
    title: "Tell us your story",
    body: "Background and what you want out of this.",
  },
  {
    id: 3,
    label: "topics",
    title: "Specific tools or topics?",
    body: "Optional. Anything that must be in or stay out.",
  },
  {
    id: 4,
    label: "pace",
    title: "How much time can you give?",
    body: "We pace the plan to your real schedule.",
  },
];

function Chrome({
  children,
  sidebarWidth,
  collapsed,
  sidebar,
}: {
  children: ReactNode;
  sidebarWidth: number;
  collapsed: boolean;
  sidebar: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
      <div className="hidden lg:block">
        <Navbar sidebarOffset={sidebarWidth} />
      </div>
      <div className="lg:hidden">
        <Navbar />
      </div>
      {sidebar}
      <div
        className={`pt-16 lg:pt-24 transition-all duration-300 ${collapsed ? "lg:ml-18" : "lg:ml-64"}`}
      >
        {children}
      </div>
    </div>
  );
}

export default function AiRoadmapWizardPage() {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const { collapsed, sidebarWidth, sidebar } = useStudentSidebar();
  const [step, setStep] = useState(0);

  // Inputs
  const [goalDescription, setGoalDescription] = useState("");
  const [experienceLevel, setExperienceLevel] = useState<Experience>("NEW");
  const [background, setBackground] = useState<Background>("SELF_TAUGHT");
  const [goal, setGoal] = useState<Goal>("JOB_READY");
  const [knownSkills, setKnownSkills] = useState<string[]>([]);
  const [mustInclude, setMustInclude] = useState<string[]>([]);
  const [avoid, setAvoid] = useState<string[]>([]);
  const [hoursPerWeek, setHoursPerWeek] = useState(8);
  const [preferredDays, setPreferredDays] = useState<DayOfWeek[]>([
    "MON",
    "WED",
    "SAT",
  ]);

  // Submission
  // Usage counter
  const [usageCount, setUsageCount] = useState<number | null>(null);
  const [usageLimit, setUsageLimit] = useState<number>(5);
  const [isPro, setIsPro] = useState(false);

  // Template
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [showTemplates, setShowTemplates] = useState(true);

  // Preview
  const [preview, setPreview] = useState<RoadmapPreview | null>(null);

  // Submission
  const [submitting, setSubmitting] = useState(false);
  const [submitMsgIdx, setSubmitMsgIdx] = useState(0);
  const [dismissedWarning, setDismissedWarning] = useState(false);

  // Existing enrollments link
const { data: enrollmentsData } = useQuery({
    queryKey: queryKeys.roadmaps.enrollments(),
    queryFn: () => api.get<{ enrollments: RoadmapEnrollmentListItem[] }>("/roadmaps/me/enrollments").then(res => res.data),
    enabled: !!user,
    staleTime: 2 * 60 * 1000,
  });
  const enrollments = enrollmentsData?.enrollments || [];
  const similarEnrollment = (() => {
    if (!user) return null;
    const userAiRoadmaps = enrollments.filter(e => e.roadmap.ownerUserId === user.id);
    const normalize = (str: string) => str.toLowerCase().replace(/[^\w\s]/g, "");
    const goalNorm = normalize(goalDescription);
    if (!goalNorm) return null;
    return userAiRoadmaps.find(e => {
      const titleNorm = normalize(e.roadmap.title);
      return titleNorm.includes(goalNorm) || goalNorm.includes(titleNorm);
    });
  })();
  const [forceCreate, setForceCreate] = useState(false);

  useEffect(() => {
    let mounted = true;
    api.get<{ used: number; limit: number; isPro: boolean }>("/roadmaps/ai/usage")
      .then((res) => {
        if (!mounted) return;
        setUsageCount(res.data.used);
        setUsageLimit(res.data.limit);
        setIsPro(res.data.isPro);
      })
      .catch(() => { /* ok — hide counter if endpoint missing */ });
    return () => { mounted = false; };
  }, []);
  // Rotating loading copy
  useEffect(() => {
    if (!submitting) return;
    const id = setInterval(() => setSubmitMsgIdx((i) => i + 1), 2200);
    return () => clearInterval(id);
  }, [submitting]);

  const applyTemplate = (templateId: string) => {
    const t = TEMPLATES.find((t) => t.id === templateId);
    if (!t) return;
    setGoalDescription(t.goalDescription);
    setExperienceLevel(t.experienceLevel);
    setBackground(t.background);
    setGoal(t.goal);
    setMustInclude(t.mustInclude);
    setHoursPerWeek(t.hoursPerWeek);
    setSelectedTemplate(templateId);
    setShowTemplates(false);
  };

  const toggleDay = (d: DayOfWeek) => {
    setPreferredDays((prev) =>
      prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d],
    );
  };

  const canProceed = (() => {
    if (step === 0) return goalDescription.trim().length >= 10;
    if (step === 4) return preferredDays.length > 0;
    return true;
  })();

  const submit = async (force = false) => {
    setSubmitting(true);
    try {
const res = await api.post<{
        slug: string;
        enrollmentId: number;
        title: string;
        sections: { title: string; estimatedHours: number }[];
        totalHours: number;
      }>("/roadmaps/ai/generate", {
        goalDescription: goalDescription.trim(),
        experienceLevel,
        background,
        goal,
        hoursPerWeek,
        preferredDays,
        knownSkills,
        mustInclude,
        avoid,
        forceCreate: force,
      });
      toast.success("Your roadmap is ready — preview it before enrolling");
      setPreview({
        slug: res.data.slug,
        enrollmentId: res.data.enrollmentId,
        title: res.data.title ?? "Your Custom Roadmap",
        sections: res.data.sections ?? [],
        totalHours: res.data.totalHours ?? 0,
      });
      setSubmitting(false);
    } catch (err) {
      const axiosErr = err as { response?: { status?: number; data?: { message?: string; roadmap?: { title: string; slug: string } } } };
      if (axiosErr.response?.status === 409) {
        if (axiosErr.response.data?.message?.includes("limit")) {
          toast.error(
            <div className="flex flex-col gap-2 p-1 text-left">
              <p>You have reached the limit of 5 active AI roadmaps. Please complete or delete existing ones first.</p>
              <Link to="/student/roadmaps" className="text-sm font-bold text-stone-950 dark:text-stone-50 hover:underline">
                Manage roadmaps →
              </Link>
            </div>,
            { duration: 8000 }
          );
        } else if (axiosErr.response.data?.roadmap) {
          const duplicate = axiosErr.response.data.roadmap;
          toast.warning(
            <div className="flex flex-col gap-2 p-1 text-left">
              <p className="font-bold">Similar roadmap exists</p>
              <p className="text-[10px] opacity-70">We found &quot;{duplicate.title}&quot; which seems similar to your goal.</p>
              <div className="flex items-center gap-3 mt-1">
                <Link to={`/learn/roadmaps/${duplicate.slug}`} className="text-xs font-bold text-stone-950 dark:text-stone-50 hover:underline">
                  View existing
                </Link>
                <button
                  onClick={() => { toast.dismiss(); submit(true); }}
                  className="text-xs font-bold text-lime-600 dark:text-lime-400 hover:underline bg-transparent border-0 p-0 cursor-pointer"
                >
                  Create anyway
                </button>
              </div>
            </div>,
            { duration: 10000 }
          );
        }
      } else {
        const msg = axiosErr.response?.data?.message ?? "Could not generate roadmap. Please try again.";
        toast.error(msg);
      }
      setSubmitting(false);
    }
  };
  const chromeProps = { sidebarWidth, collapsed, sidebar };
  const stepMeta = STEPS[step];
  const progress = ((step + 1) / STEPS.length) * 100;

  // ── Preview screen ──
  if (preview) {
    return (
      <Chrome {...chromeProps}>
        <div className="max-w-2xl mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 mb-4">
              <Eye className="w-3.5 h-3.5 text-lime-500" />
              preview before enrolling
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-950 dark:text-stone-50 mb-2">
              {preview.title}
            </h1>
            <div className="flex items-center gap-3 mb-8 text-xs font-mono uppercase tracking-widest text-stone-500">
              <span className="inline-flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                {preview.sections.length} sections
              </span>
              <span className="h-1 w-1 bg-stone-300 dark:bg-stone-700" />
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />~{preview.totalHours}h total
              </span>
            </div>

            {preview.sections.length > 0 ? (
              <div className="space-y-2 mb-8">
                {preview.sections.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className="flex items-center justify-between gap-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl px-4 py-3"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="text-[10px] font-mono tabular-nums text-stone-400 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-medium text-stone-900 dark:text-stone-50 truncate">
                        {s.title}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-stone-400 shrink-0">
                      ~{s.estimatedHours}h
                    </span>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="mb-8 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl px-4 py-6 text-center text-sm text-stone-500">
                Section details not available — you can still enroll and explore
                the full roadmap.
              </div>
            )}

            <div className="flex items-center gap-3 flex-wrap">
              <button
                onClick={() => setPreview(null)}
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-stone-300 dark:border-stone-700 rounded-xl text-sm font-mono uppercase tracking-widest text-stone-600 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-900 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" /> Adjust
              </button>
              <button
                onClick={() => navigate(`/learn/roadmaps/${preview.slug}`)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-lime-400 hover:bg-lime-300 text-stone-950 rounded-xl text-sm font-mono uppercase tracking-widest font-bold transition-colors"
              >
                <ArrowRight className="w-4 h-4" /> Enroll now
              </button>
            </div>
          </motion.div>
        </div>
      </Chrome>
    );
  }

  if (submitting) {
    return (
      <Chrome {...chromeProps}>
        <div className="max-w-xl mx-auto px-6 py-24 text-center">
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 320, damping: 22 }}
            className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-lime-400 text-stone-950 mb-6 relative"
          >
            <Wand2 className="w-9 h-9" strokeWidth={2.5} />
            <motion.span
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: 1.6, opacity: 0 }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
              className="absolute inset-0 rounded-2xl border-2 border-lime-400"
            />
          </motion.div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-950 dark:text-stone-50 mb-3">
            Crafting your roadmap
          </h1>
          <AnimatePresence mode="wait">
            <motion.p
              key={submitMsgIdx}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.4 }}
              className="text-sm text-stone-500 dark:text-stone-400 mb-10 font-mono uppercase tracking-widest"
            >
              {LOADING_MESSAGES[submitMsgIdx % LOADING_MESSAGES.length]}
            </motion.p>
          </AnimatePresence>
          <div className="flex justify-center gap-2">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={{ y: [0, -8, 0], opacity: [0.4, 1, 0.4] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "easeInOut",
                }}
                className="h-2 w-2 rounded-full bg-lime-500"
              />
            ))}
          </div>
        </div>
      </Chrome>
    );
  }

  return (
    <Chrome {...chromeProps}>
      <SEO title="Generate a personalized roadmap with AI" noIndex />

      <div className="relative max-w-3xl mx-auto px-6 pb-16">
        {/* Decorative gradient */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-200 h-150 bg-gradient-to-br from-lime-100 via-transparent to-stone-100 dark:from-lime-900/20 dark:via-transparent dark:to-stone-950/50 rounded-full blur-3xl" />
        </div>

        {/* Generation counter */}
        {usageCount !== null && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 mt-2"
          >
            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-mono uppercase tracking-widest border ${
                isPro
                  ? "bg-lime-50 dark:bg-lime-900/20 border-lime-200 dark:border-lime-800 text-lime-700 dark:text-lime-400"
                  : usageCount >= usageLimit
                    ? "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-700 dark:text-red-400"
                    : "bg-stone-100 dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400"
              }`}
            >
              {isPro ? (
                <>
                  <Crown className="w-3.5 h-3.5" /> Unlimited generations on Pro
                </>
              ) : (
                <>
                  <Zap className="w-3.5 h-3.5" /> AI roadmaps this month:{" "}
                  {usageCount} / {usageLimit} —{" "}
                  {usageCount >= usageLimit
                    ? "limit reached"
                    : `${usageLimit - usageCount} left`}
                </>
              )}
            </div>
          </motion.div>
        )}

        {/* Template picker */}
        {showTemplates && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <p className="text-[10px] font-mono uppercase tracking-widest text-stone-400 mb-3">
              start from a template or build from scratch
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
              {TEMPLATES.map((t, i) => (
                <motion.button
                  key={t.id}
                  type="button"
                  onClick={() => applyTemplate(t.id)}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  whileTap={{ scale: 0.98 }}
                  className={`text-left p-4 rounded-xl border transition-colors cursor-pointer ${
                    selectedTemplate === t.id
                      ? "border-lime-400 bg-lime-50 dark:bg-lime-950/30"
                      : "border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 hover:border-stone-400 dark:hover:border-stone-600"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-bold text-stone-950 dark:text-stone-50">
                      {t.title}
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 dark:text-stone-400">
                    {t.description}
                  </p>
                </motion.button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setShowTemplates(false)}
              className="text-[10px] font-mono uppercase tracking-widest text-stone-400 hover:text-stone-600 dark:hover:text-stone-300 transition-colors"
            >
              skip — build from scratch →
            </button>
          </motion.div>
        )}

        {!showTemplates && selectedTemplate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6"
          >
            <button
              type="button"
              onClick={() => setShowTemplates(true)}
              className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-lime-600 dark:text-lime-400 hover:text-lime-700 dark:hover:text-lime-300 transition-colors"
            >
              ✓ Using template:{" "}
              {TEMPLATES.find((t) => t.id === selectedTemplate)?.title} — change
              →
            </button>
          </motion.div>
        )}

        {enrollments.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6 mt-2"
          >
            <Link
              to="/student/roadmaps"
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-lime-400 dark:hover:border-lime-600 rounded-md text-[10px] font-mono uppercase tracking-widest text-stone-600 dark:text-stone-400 transition-colors"
            >
              <MapIcon className="w-3.5 h-3.5 text-lime-500" />
              {enrollments.length} active
              <span className="text-stone-300 dark:text-stone-700">/</span>
              view my roadmaps
              <ChevronRight className="w-3 h-3" />
            </Link>
          </motion.div>
        )}

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-2 mb-6"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 mb-3">
            <span className="h-1.5 w-1.5 bg-lime-400" />
            generate with ai
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-stone-950 dark:text-stone-50 leading-tight">
            Build a roadmap that fits you.
          </h1>
        </motion.div>

        {step === 4 && similarEnrollment && !forceCreate && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 flex gap-4"
          >
            <div className="h-10 w-10 shrink-0 rounded-xl bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center text-amber-600">
              <MapIcon className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-bold text-amber-900 dark:text-amber-200 mb-1">
                Wait, is this familiar?
              </h3>
              <p className="text-xs text-amber-700/80 dark:text-amber-400/80 leading-relaxed mb-3">
                You already have an active roadmap called <strong>"{similarEnrollment.roadmap.title}"</strong>. 
                Want to continue where you left off?
              </p>
              <div className="flex flex-wrap gap-2">
                <Button asChild size="sm" variant="secondary" className="bg-white dark:bg-amber-900 dark:hover:bg-amber-800">
                  <Link to={`/learn/roadmaps/${similarEnrollment.roadmap.slug}`}>
                    Open Existing
                  </Link>
                </Button>
                <Button size="sm" variant="ghost" className="text-amber-700 dark:text-amber-400" onClick={() => setForceCreate(true)}>
                  Create anyway
                </Button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Step bar */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-1.5">
            {STEPS.map((s) => {
              const done = s.id < step;
              const active = s.id === step;
              return (
                <div key={s.id} className="flex-1">
                  <div className="h-0.5 w-full bg-stone-200 dark:bg-stone-800 overflow-hidden rounded-full">
                    <motion.div
                      className={`h-full ${done || active ? "bg-lime-500" : ""}`}
                      initial={{ width: 0 }}
                      animate={{ width: done ? "100%" : active ? "50%" : "0%" }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-stone-400 tabular-nums">
            <span>{stepMeta.label}</span>
            <span>
              {Math.round(progress)}% / step {step + 1} of {STEPS.length}
            </span>
          </div>
        </motion.div>

        {/* Step body */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-950 dark:text-stone-50 mb-2">
              {stepMeta.title}
            </h2>
            <p className="text-sm text-stone-500 dark:text-stone-400 mb-8">
              {stepMeta.body}
            </p>

            {step === 0 && (
              <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6">
                <textarea
                  value={goalDescription}
                  onChange={(e) => setGoalDescription(e.target.value)}
                  placeholder="e.g., I want to become a full-stack developer and ship a SaaS in 4 months. I'm interested in React and Postgres."
                  rows={5}
                  maxLength={500}
                  className="w-full p-4 bg-transparent border-0 outline-0 text-base text-stone-950 dark:text-stone-50 placeholder:text-stone-400 resize-none"
                />
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-stone-400">
                    {goalDescription.trim().length < 10
                      ? "at least 10 characters"
                      : "looks good"}
                  </p>
                  <p className="text-[10px] font-mono text-stone-400 tabular-nums">
                    {goalDescription.length} / 500
                  </p>
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="grid sm:grid-cols-3 gap-3">
                {EXPERIENCE_OPTS.map((o, i) => (
                  <Pickable
                    key={o.value}
                    active={experienceLevel === o.value}
                    onClick={() => setExperienceLevel(o.value)}
                    delay={0.05 + i * 0.04}
                  >
                    <p className="text-sm font-bold text-stone-950 dark:text-stone-50">
                      {o.label}
                    </p>
                    <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 leading-relaxed">
                      {o.body}
                    </p>
                  </Pickable>
                ))}
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-stone-400 mb-3">
                    your background
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {BACKGROUND_OPTS.map((o, i) => (
                      <Pickable
                        key={o.value}
                        active={background === o.value}
                        onClick={() => setBackground(o.value)}
                        delay={0.05 + i * 0.04}
                      >
                        <p className="text-sm font-bold text-stone-950 dark:text-stone-50">
                          {o.label}
                        </p>
                        <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 leading-relaxed">
                          {o.body}
                        </p>
                      </Pickable>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-stone-400 mb-3">
                    primary goal
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {GOAL_OPTS.map((o, i) => (
                      <Pickable
                        key={o.value}
                        active={goal === o.value}
                        onClick={() => setGoal(o.value)}
                        delay={0.1 + i * 0.04}
                      >
                        <p className="text-sm font-bold text-stone-950 dark:text-stone-50">
                          {o.label}
                        </p>
                        <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 leading-relaxed">
                          {o.body}
                        </p>
                      </Pickable>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <ChipsField
                  label="Already comfortable with"
                  hint="We'll skip these. Press Enter to add."
                  values={knownSkills}
                  onChange={setKnownSkills}
                  placeholder="e.g., HTML, JavaScript, Git"
                />
                <ChipsField
                  label="Must include"
                  hint="Topics or tools you specifically want covered."
                  values={mustInclude}
                  onChange={setMustInclude}
                  placeholder="e.g., TypeScript, Postgres, Docker"
                />
                <ChipsField
                  label="Avoid"
                  hint="Topics or tools to skip entirely."
                  values={avoid}
                  onChange={setAvoid}
                  placeholder="e.g., PHP, jQuery"
                />
              </div>
            )}

            {step === 4 && (
              <div className="space-y-5">
                <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6">
                  <div className="flex items-baseline justify-between mb-5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400">
                      hours per week
                    </span>
                    <motion.span
                      key={hoursPerWeek}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 18,
                      }}
                      className="font-display text-4xl font-bold text-stone-950 dark:text-stone-50 tabular-nums"
                    >
                      {hoursPerWeek}
                      <span className="text-base text-stone-400 font-normal ml-1">
                        h
                      </span>
                    </motion.span>
                  </div>
                  <input
                    type="range"
                    min={2}
                    max={40}
                    step={1}
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                    className="w-full accent-lime-500"
                  />
                  <div className="mt-2 flex justify-between text-[9px] font-mono text-stone-400">
                    <span>2h</span>
                    <span>20h</span>
                    <span>40h</span>
                  </div>
                </div>

                <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-stone-400 mb-3">
                    preferred study days
                  </p>
                  <div className="grid grid-cols-7 gap-2">
                    {DAYS.map((d, i) => {
                      const active = preferredDays.includes(d);
                      return (
                        <motion.button
                          key={d}
                          type="button"
                          onClick={() => toggleDay(d)}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.05 + i * 0.04, duration: 0.3 }}
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.96 }}
                          className={`h-12 rounded-xl text-sm font-bold transition-colors cursor-pointer border ${
                            active
                              ? "bg-lime-400 text-stone-950 border-lime-400"
                              : "bg-white text-stone-700 border-stone-200 hover:border-stone-400 dark:bg-stone-900 dark:text-stone-300 dark:border-stone-800 dark:hover:border-stone-600"
                          }`}
                        >
                          {DAY_LABEL[d]}
                        </motion.button>
                      );
                    })}
                  </div>
                  {preferredDays.length === 0 && (
                    <p className="text-xs text-amber-600 dark:text-amber-400 mt-3 font-mono uppercase tracking-wider">
                      pick at least one day
                    </p>
                  )}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="bg-stone-950 text-stone-50 dark:bg-stone-50 dark:text-stone-950 rounded-2xl p-5"
                >
                  <p className="text-[10px] font-mono uppercase tracking-widest opacity-60 mb-2">
                    what happens next
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 mt-0.5 shrink-0 text-lime-400" />{" "}
                      AI drafts a roadmap based on your answers
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 mt-0.5 shrink-0 text-lime-400" />{" "}
                      We generate a personalized PDF and email it to you
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 mt-0.5 shrink-0 text-lime-400" />{" "}
                      You land on the interactive canvas to start tracking
                    </li>
                  </ul>
                </motion.div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="flex flex-col gap-4 mt-8">
          {step === STEPS.length - 1 && similarEnrollment && !dismissedWarning && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-4 flex gap-3 text-amber-900 dark:text-amber-200 relative"
            >
              <div className="flex-1 text-sm">
                <p className="font-medium mb-1">
                  You already have a roadmap for &quot;{similarEnrollment.roadmap.title}&quot;.
                </p>
                <p className="opacity-80">Generating again will create a separate copy.</p>
                <Link
                  to={`/learn/roadmaps/${similarEnrollment.roadmap.slug}`}
                  className="inline-block mt-2 text-amber-700 dark:text-amber-400 font-bold hover:underline"
                >
                  View existing →
                </Link>
              </div>
              <button
                type="button"
                onClick={() => setDismissedWarning(true)}
                className="text-amber-500 hover:text-amber-700 dark:hover:text-amber-300 self-start"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          )}
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </Button>
            {step < STEPS.length - 1 ? (
              <Button
                variant="mono"
                onClick={() => setStep((s) => s + 1)}
                disabled={!canProceed}
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button variant="mono" onClick={() => submit(false)} disabled={!canProceed}>
                <Wand2 className="w-4 h-4" />
                Generate my roadmap
                <ArrowRight className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </Chrome>
  );
}

// ── Subcomponents ────────────────────────────────────────────────────────────
function Pickable({
  active,
  onClick,
  children,
  delay = 0,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
  delay?: number;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
      whileTap={{ scale: 0.98 }}
      className={`text-left rounded-xl p-4 border transition-colors cursor-pointer ${
        active
          ? "border-lime-400 bg-lime-50 dark:bg-lime-950/30 dark:border-lime-700"
          : "border-stone-200 hover:border-stone-400 dark:border-stone-800 dark:hover:border-stone-600 bg-white dark:bg-stone-900"
      }`}
    >
      {children}
    </motion.button>
  );
}

function ChipsField({
  label,
  hint,
  values,
  onChange,
  placeholder,
}: {
  label: string;
  hint: string;
  values: string[];
  onChange: (v: string[]) => void;
  placeholder: string;
}) {
  const [input, setInput] = useState("");

  const add = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    if (values.includes(trimmed)) {
      setInput("");
      return;
    }
    if (values.length >= 20) return;
    if (trimmed.length > 40) return;
    onChange([...values, trimmed]);
    setInput("");
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      add();
    } else if (e.key === "Backspace" && input === "" && values.length > 0) {
      onChange(values.slice(0, -1));
    }
  };

  return (
    <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-5">
      <div className="flex items-baseline justify-between mb-3">
        <p className="text-[10px] font-mono uppercase tracking-widest text-stone-400">
          {label}
        </p>
        <p className="text-[10px] font-mono text-stone-400 tabular-nums">
          {values.length}/20
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5 mb-2">
        <AnimatePresence>
          {values.map((v) => (
            <motion.span
              key={v}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.18 }}
              className="inline-flex items-center gap-1 px-2.5 h-7 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-xs font-medium text-stone-700 dark:text-stone-300"
            >
              {v}
              <button
                type="button"
                onClick={() => onChange(values.filter((x) => x !== v))}
                className="text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 cursor-pointer p-0 bg-transparent border-0 inline-flex"
              >
                <X className="w-3 h-3" />
              </button>
            </motion.span>
          ))}
        </AnimatePresence>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          className="flex-1 bg-transparent border-0 outline-0 text-sm text-stone-950 dark:text-stone-50 placeholder:text-stone-400"
        />
        <button
          type="button"
          onClick={add}
          disabled={!input.trim()}
          className="inline-flex items-center justify-center h-7 w-7 rounded-md bg-stone-100 dark:bg-stone-800 hover:bg-lime-400 dark:hover:bg-lime-400 hover:text-stone-950 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Plus className="w-3.5 h-3.5" />
        </button>
      </div>
      <p className="text-[10px] font-mono text-stone-400 mt-2">{hint}</p>
    </div>
  );
}

const LOADING_MESSAGES = [
  "asking the model for a structured plan",
  "matching topics to your hours per week",
  "curating real, free resources",
  "writing the mini projects",
  "wrapping it into a PDF",
];
