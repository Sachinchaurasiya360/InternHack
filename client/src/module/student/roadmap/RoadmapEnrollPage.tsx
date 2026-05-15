import { useEffect, useMemo, useState, type ReactNode } from "react";
import { useNavigate, useParams, Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Clock,
  Loader2,
  Calendar,
  Target,
  ChevronLeft,
  ChevronRight,
  Map as MapIcon,
} from "lucide-react";
import { SEO } from "../../../components/SEO";
import { Button } from "../../../components/ui/button";
import { Navbar } from "../../../components/Navbar";
import { useStudentSidebar } from "../../../components/StudentSidebar";
import api from "../../../lib/axios";
import toast from "../../../components/ui/toast";
import type {
  DayOfWeek,
  EnrollInput,
  EnrollmentGoal,
  ExperienceLevel,
  Roadmap,
  RoadmapEnrollmentListItem,
} from "../../../lib/types";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../lib/query-keys";

const DAYS: DayOfWeek[] = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const DAY_LABEL: Record<DayOfWeek, string> = {
  MON: "Mon", TUE: "Tue", WED: "Wed", THU: "Thu", FRI: "Fri", SAT: "Sat", SUN: "Sun",
};

const EXPERIENCE_OPTS: { value: ExperienceLevel; label: string; body: string }[] = [
  { value: "NEW", label: "Brand new", body: "Never coded, or very little." },
  { value: "SOME", label: "Some experience", body: "Tutorials, school, side dabbling." },
  { value: "EXPERIENCED", label: "Experienced", body: "Comfortable building, want to formalize." },
];

const GOAL_OPTS: { value: EnrollmentGoal; label: string; body: string }[] = [
  { value: "JOB_READY", label: "Get job ready", body: "Build a portfolio that lands interviews." },
  { value: "SIDE_PROJECT", label: "Build a side project", body: "I have an idea and want to ship it." },
  { value: "SCHOOL", label: "School / coursework", body: "Reinforce what I'm learning in class." },
  { value: "CURIOUS", label: "Curious learner", body: "I just want to understand how this stack works." },
];

const STEPS = [
  { id: 0, label: "pace", title: "Pick your pace", body: "We'll build a weekly plan from this and email you a PDF." },
  { id: 1, label: "days", title: "Pick your days", body: "Tells us when to recommend study sessions." },
  { id: 2, label: "you", title: "A bit about you", body: "Helps us tune recommendations." },
];

function Chrome({ children, sidebarWidth, collapsed, sidebar }: {
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
      <div className="lg:hidden"><Navbar /></div>
      {sidebar}
      <div className={`pt-16 lg:pt-24 transition-all duration-300 ${collapsed ? "lg:ml-18" : "lg:ml-64"}`}>
        {children}
      </div>
    </div>
  );
}

export default function RoadmapEnrollPage() {
  const { slug = "" } = useParams();
  const navigate = useNavigate();
  const { collapsed, sidebarWidth, sidebar } = useStudentSidebar();
  const [submitting, setSubmitting] = useState(false);
  const [step, setStep] = useState(0);

  const [hoursPerWeek, setHoursPerWeek] = useState(8);
  const [preferredDays, setPreferredDays] = useState<DayOfWeek[]>(["MON", "WED", "SAT"]);
  const [experienceLevel, setExperienceLevel] = useState<ExperienceLevel>("NEW");
  const [goal, setGoal] = useState<EnrollmentGoal>("JOB_READY");

  const { data: roadmapData, isLoading: roadmapLoading } = useQuery({
    queryKey: queryKeys.roadmaps.detail(slug),
    queryFn: () => api.get<{ roadmap: Roadmap }>(`/roadmaps/${slug}`).then(res => res.data),
    enabled: !!slug,
  });

  const { data: enrollmentsData } = useQuery({
    queryKey: queryKeys.roadmaps.enrollments(),
    queryFn: () => api.get<{ enrollments: RoadmapEnrollmentListItem[] }>("/roadmaps/me/enrollments").then(res => res.data),
  });

  const roadmap = roadmapData?.roadmap || null;
  const enrollments = enrollmentsData?.enrollments || [];
  const loading = roadmapLoading;

  useEffect(() => {
    if (enrollmentsData) {
      const existing = enrollmentsData.enrollments.find((e) => e.roadmap.slug === slug);
      if (existing) {
        // Already enrolled, jump them to the canvas instead of letting them re-enroll
        navigate(`/learn/roadmaps/${slug}`, { replace: true });
      }
    }
  }, [enrollmentsData, slug, navigate]);

  const targetWeeks = useMemo(() => {
    if (!roadmap) return 0;
    return Math.max(1, Math.ceil(roadmap.estimatedHours / hoursPerWeek));
  }, [roadmap, hoursPerWeek]);

  const targetEndDate = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + targetWeeks * 7);
    return d;
  }, [targetWeeks]);

  const toggleDay = (d: DayOfWeek) => {
    setPreferredDays((prev) => prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]);
  };

  const submit = async () => {
    if (preferredDays.length === 0) {
      toast.error("Pick at least one day");
      return;
    }
    setSubmitting(true);
    try {
      const body: EnrollInput = { hoursPerWeek, preferredDays, experienceLevel, goal };
      await api.post(`/roadmaps/${slug}/enroll`, body);
      toast.success("You're enrolled. Check your email for the PDF.");
      navigate(`/learn/roadmaps/${slug}`);
    } catch (err) {
      const msg = (err as { response?: { data?: { message?: string } } }).response?.data?.message
        ?? "Could not enroll. Please try again.";
      toast.error(msg);
      setSubmitting(false);
    }
  };

  const chromeProps = { sidebarWidth, collapsed, sidebar };

  if (loading) {
    return (
      <Chrome {...chromeProps}>
        <div className="flex items-center justify-center py-32">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="h-10 w-10 border-2 border-stone-200 dark:border-stone-800 border-t-lime-500 rounded-full"
          />
        </div>
      </Chrome>
    );
  }
  if (!roadmap) {
    return (
      <Chrome {...chromeProps}>
        <div className="flex items-center justify-center py-32 text-sm text-stone-500">
          Roadmap not found.
        </div>
      </Chrome>
    );
  }

  const progress = ((step + 1) / STEPS.length) * 100;
  const canProceed = step !== 1 || preferredDays.length > 0;
  const stepMeta = STEPS[step];

  return (
    <Chrome {...chromeProps}>
      <SEO title={`Enroll: ${roadmap.title}`} noIndex />

      <div className="relative max-w-3xl mx-auto px-6 pb-16">
        {/* Decorative gradient background */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-200 h-150 bg-linear-to-br from-lime-100 via-transparent to-stone-100 dark:from-lime-900/20 dark:via-transparent dark:to-stone-900/30 rounded-full blur-3xl opacity-60" />
        </div>

        {/* Existing enrollments link */}
        {enrollments.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6 mt-2"
          >
            <Link
              to="/student/roadmaps"
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-lime-400 dark:hover:border-lime-600 rounded-md text-xs font-mono uppercase tracking-widest text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-stone-50 transition-colors no-underline"
            >
              <MapIcon className="w-3.5 h-3.5 text-lime-500" />
              {enrollments.length} active
              <span className="text-stone-300 dark:text-stone-700">/</span>
              view my roadmaps
              <ChevronRight className="w-3 h-3" />
            </Link>
          </motion.div>
        )}

        {/* Roadmap eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-2 mb-8"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 mb-3">
            <span className="h-1.5 w-1.5 bg-lime-400" />
            enrolling in
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-stone-950 dark:text-stone-50 leading-tight">
            {roadmap.title}
          </h1>
        </motion.div>

        {/* Step progress dots */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3">
            {STEPS.map((s) => {
              const done = s.id < step;
              const active = s.id === step;
              return (
                <div key={s.id} className="flex-1">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className={`h-5 w-5 rounded-full flex items-center justify-center text-[10px] font-mono font-bold tabular-nums transition-colors ${
                        active
                          ? "bg-stone-950 dark:bg-stone-50 text-stone-50 dark:text-stone-950"
                          : done
                            ? "bg-lime-400 text-stone-950"
                            : "bg-stone-200 dark:bg-stone-800 text-stone-500"
                      }`}
                    >
                      {done ? <Check className="w-3 h-3" strokeWidth={3} /> : s.id + 1}
                    </span>
                    <span
                      className={`text-[10px] font-mono uppercase tracking-widest transition-colors ${
                        active
                          ? "text-stone-900 dark:text-stone-100"
                          : "text-stone-400"
                      }`}
                    >
                      {s.label}
                    </span>
                  </div>
                  <div className="h-0.5 w-full bg-stone-200 dark:bg-stone-800 overflow-hidden rounded-full">
                    <motion.div
                      className="h-full bg-lime-500"
                      initial={{ width: 0 }}
                      animate={{ width: done ? "100%" : active ? "50%" : "0%" }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-2 text-right text-[10px] font-mono uppercase tracking-widest text-stone-400 tabular-nums">
            {Math.round(progress)}% / step {step + 1} of {STEPS.length}
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
            <p className="text-sm text-stone-500 dark:text-stone-400 mb-8">{stepMeta.body}</p>

            {step === 0 && (
              <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6">
                <div className="flex items-baseline justify-between mb-5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400">
                    hours per week
                  </span>
                  <motion.span
                    key={hoursPerWeek}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 18 }}
                    className="font-display text-4xl font-bold text-stone-950 dark:text-stone-50 tabular-nums"
                  >
                    {hoursPerWeek}
                    <span className="text-base text-stone-400 font-normal ml-1">h</span>
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
                <div className="grid grid-cols-3 gap-3 mt-6">
                  <Stat icon={Clock} label="Total" value={`${roadmap.estimatedHours}h`} />
                  <Stat icon={Calendar} label="Weeks" value={String(targetWeeks)} />
                  <Stat
                    icon={Target}
                    label="Finish by"
                    value={targetEndDate.toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                  />
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6">
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
                        className={`h-14 rounded-xl text-sm font-bold transition-colors cursor-pointer border ${
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
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-4">
                  Pick the days you can realistically study. We'll pace your week around these.
                </p>
                {preferredDays.length === 0 && (
                  <p className="text-xs text-amber-600 dark:text-amber-400 mt-2 font-mono uppercase tracking-wider">
                    pick at least one day
                  </p>
                )}
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-stone-400 mb-3">
                    experience
                  </p>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {EXPERIENCE_OPTS.map((o, i) => (
                      <motion.button
                        key={o.value}
                        type="button"
                        onClick={() => setExperienceLevel(o.value)}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05 + i * 0.04, duration: 0.3 }}
                        whileTap={{ scale: 0.98 }}
                        className={`text-left rounded-xl p-4 border transition-colors cursor-pointer ${
                          experienceLevel === o.value
                            ? "border-lime-400 bg-lime-50 dark:bg-lime-950/30 dark:border-lime-700"
                            : "border-stone-200 hover:border-stone-400 dark:border-stone-800 dark:hover:border-stone-600 bg-white dark:bg-stone-900"
                        }`}
                      >
                        <p className="text-sm font-bold text-stone-950 dark:text-stone-50">{o.label}</p>
                        <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 leading-relaxed">{o.body}</p>
                      </motion.button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-stone-400 mb-3">goal</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {GOAL_OPTS.map((o, i) => (
                      <motion.button
                        key={o.value}
                        type="button"
                        onClick={() => setGoal(o.value)}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + i * 0.04, duration: 0.3 }}
                        whileTap={{ scale: 0.98 }}
                        className={`text-left rounded-xl p-4 border transition-colors cursor-pointer ${
                          goal === o.value
                            ? "border-lime-400 bg-lime-50 dark:bg-lime-950/30 dark:border-lime-700"
                            : "border-stone-200 hover:border-stone-400 dark:border-stone-800 dark:hover:border-stone-600 bg-white dark:bg-stone-900"
                        }`}
                      >
                        <p className="text-sm font-bold text-stone-950 dark:text-stone-50">{o.label}</p>
                        <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 leading-relaxed">{o.body}</p>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Final summary card */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="bg-stone-950 text-stone-50 dark:bg-stone-50 dark:text-stone-950 rounded-2xl p-5"
                >
                  <p className="text-[10px] font-mono uppercase tracking-widest opacity-60 mb-2">
                    your plan
                  </p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                    <span><strong className="font-bold">{hoursPerWeek}h</strong>/week</span>
                    <span className="opacity-50">·</span>
                    <span><strong className="font-bold">{targetWeeks}</strong> weeks</span>
                    <span className="opacity-50">·</span>
                    <span>finish by <strong className="font-bold">{targetEndDate.toLocaleDateString("en-US", { month: "short", day: "numeric" })}</strong></span>
                  </div>
                  <p className="text-xs opacity-70 mt-3 leading-relaxed">
                    On enrollment we'll email you a PDF with the full plan, week-1 topics, and curated resources. We check in on day 10.
                  </p>
                </motion.div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Nav buttons */}
        <div className="flex items-center justify-between mt-8">
          <Button
            variant="ghost"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </Button>
          {step < STEPS.length - 1 ? (
            <Button variant="mono" onClick={() => setStep((s) => s + 1)} disabled={!canProceed}>
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button variant="mono" onClick={submit} disabled={submitting}>
              {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
              Enroll, email me the PDF
            </Button>
          )}
        </div>
      </div>
    </Chrome>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Clock;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-stone-50 dark:bg-stone-800/50 border border-stone-100 dark:border-stone-800 rounded-xl p-3">
      <div className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-widest text-stone-500 mb-1">
        <Icon className="w-3 h-3" />
        {label}
      </div>
      <p className="text-base font-bold text-stone-950 dark:text-stone-50 tabular-nums">{value}</p>
    </div>
  );
}
