import { useMemo, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import NumberFlow from "@number-flow/react";
import {
  Video,
  Plus,
  Calendar as CalendarIcon,
  List,
  Phone,
  MapPin,
  Users,
  Code2,
  UserCheck,
  ExternalLink,
  Star,
  MessageSquare,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import api from "../../../lib/axios";
import { hrKeys } from "./hr-query-keys";
import HRStatusBadge from "./components/HRStatusBadge";
import HREmptyState from "./components/HREmptyState";
import HRModal from "./components/HRModal";
import type { HRInterview, InterviewType } from "./hr-types";
import { SEO } from "../../../components/SEO";
import { Button } from "../../../components/ui/button";

const INTERVIEW_TYPES: InterviewType[] = [
  "PHONE",
  "VIDEO",
  "IN_PERSON",
  "PANEL",
  "TECHNICAL",
  "HR",
];

const TYPE_ICON: Record<InterviewType, typeof Video> = {
  PHONE: Phone,
  VIDEO: Video,
  IN_PERSON: MapPin,
  PANEL: Users,
  TECHNICAL: Code2,
  HR: UserCheck,
};

type ViewMode = "list" | "calendar";

function formatLabel(value: string) {
  return value
    .replace(/_/g, " ")
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function initials(name?: string) {
  if (!name) return "?";
  const parts = name.trim().split(/\s+/);
  return (parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? parts[0]?.[1] ?? "");
}

function dayKey(iso: string) {
  const d = new Date(iso);
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
}

function sameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function startOfDay(d: Date) {
  const c = new Date(d);
  c.setHours(0, 0, 0, 0);
  return c;
}

export default function InterviewsPage() {
  const queryClient = useQueryClient();
  const [view, setView] = useState<ViewMode>("list");
  const [typeFilter, setTypeFilter] = useState<InterviewType | "">("");
  const [cursor, setCursor] = useState(() => startOfDay(new Date()));
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);
  const [showCreate, setShowCreate] = useState(false);
  const [form, setForm] = useState({
    applicationId: "",
    type: "VIDEO" as InterviewType,
    scheduledAt: "",
    durationMinutes: 60,
    meetingLink: "",
    location: "",
  });
  const [saving, setSaving] = useState(false);
  const [showFeedback, setShowFeedback] = useState<number | null>(null);
  const [feedbackForm, setFeedbackForm] = useState({
    rating: 3,
    comments: "",
    verdict: "PENDING" as "PASS" | "FAIL" | "PENDING",
  });

  const { data: interviews, isLoading } = useQuery({
    queryKey: hrKeys.interviews.list(),
    queryFn: async () => {
      const res = await api.get("/hr/interviews");
      return res.data as HRInterview[];
    },
  });

  const createMutation = useMutation({
    mutationFn: async () => {
      setSaving(true);
      await api.post("/hr/interviews", {
        ...form,
        applicationId: Number(form.applicationId),
        durationMinutes: Number(form.durationMinutes),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hr", "interviews"] });
      setShowCreate(false);
      setForm({
        applicationId: "",
        type: "VIDEO",
        scheduledAt: "",
        durationMinutes: 60,
        meetingLink: "",
        location: "",
      });
    },
    onSettled: () => setSaving(false),
  });

  const feedbackMutation = useMutation({
    mutationFn: async () => {
      if (!showFeedback) return;
      await api.post(`/hr/interviews/${showFeedback}/feedback`, feedbackForm);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hr", "interviews"] });
      setShowFeedback(null);
    },
  });

  const now = new Date();

  const filteredInterviews = useMemo(() => {
    let list = interviews ?? [];
    if (typeFilter) list = list.filter((i) => i.type === typeFilter);
    if (selectedDay)
      list = list.filter((i) =>
        sameDay(new Date(i.scheduledAt), selectedDay),
      );
    return [...list].sort(
      (a, b) =>
        new Date(a.scheduledAt).getTime() - new Date(b.scheduledAt).getTime(),
    );
  }, [interviews, typeFilter, selectedDay]);

  const stats = useMemo(() => {
    const list = interviews ?? [];
    const upcoming = list.filter(
      (i) =>
        new Date(i.scheduledAt) > now &&
        i.status !== "CANCELLED" &&
        i.status !== "COMPLETED",
    ).length;
    const today = list.filter((i) =>
      sameDay(new Date(i.scheduledAt), now),
    ).length;
    const completed = list.filter((i) => i.status === "COMPLETED").length;
    const cancelled = list.filter(
      (i) => i.status === "CANCELLED" || i.status === "NO_SHOW",
    ).length;
    return { upcoming, today, completed, cancelled };
  }, [interviews, now]);

  const statCards = [
    { label: "Upcoming", value: stats.upcoming },
    { label: "Today", value: stats.today },
    { label: "Completed", value: stats.completed },
    { label: "Cancelled", value: stats.cancelled },
  ];

  const grouped = useMemo(() => {
    const map = new Map<string, HRInterview[]>();
    filteredInterviews.forEach((i) => {
      const k = dayKey(i.scheduledAt);
      if (!map.has(k)) map.set(k, []);
      map.get(k)!.push(i);
    });
    return Array.from(map.entries());
  }, [filteredInterviews]);

  const calendarDays = useMemo(() => buildMonthGrid(cursor), [cursor]);

  const interviewCountsByDay = useMemo(() => {
    const counts = new Map<string, number>();
    (interviews ?? []).forEach((i) => {
      if (typeFilter && i.type !== typeFilter) return;
      const k = dayKey(i.scheduledAt);
      counts.set(k, (counts.get(k) ?? 0) + 1);
    });
    return counts;
  }, [interviews, typeFilter]);

  return (
    <div className="font-sans text-stone-900 dark:text-stone-50 space-y-8">
      <SEO title="Interviews" noIndex />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
      >
        <div>
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-1 w-1 bg-lime-400" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              recruiter / hr / interviews
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
            Schedule &{" "}
            <span className="relative inline-block">
              conversations.
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
                className="absolute -bottom-0.5 left-0 right-0 h-0.75 bg-lime-400 origin-left"
              />
            </span>
          </h1>
          <p className="mt-2 text-sm text-stone-600 dark:text-stone-400 max-w-xl">
            Schedule, track, and capture feedback for every candidate conversation.
          </p>
        </div>

        <Button variant="primary" size="md" onClick={() => setShowCreate(true)}>
          <Plus className="w-4 h-4" />
          Schedule interview
        </Button>
      </motion.div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden"
      >
        {statCards.map((s) => (
          <div
            key={s.label}
            className="bg-white dark:bg-stone-900 p-4 sm:p-5"
          >
            <div className="text-2xl sm:text-3xl font-bold tracking-tight tabular-nums text-stone-900 dark:text-stone-50">
              <NumberFlow value={Number(s.value) || 0} />
            </div>
            <div className="mt-1 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-stone-500">
              {s.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-3 justify-between">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 flex-1 min-w-0">
          <button
            onClick={() => setTypeFilter("")}
            className={`shrink-0 px-3 py-1.5 text-[11px] font-mono uppercase tracking-widest rounded-md border transition-colors ${
              typeFilter === ""
                ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 border-stone-900 dark:border-stone-50"
                : "bg-white dark:bg-stone-900 border-stone-200 dark:border-white/10 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50"
            }`}
          >
            All types
          </button>
          {INTERVIEW_TYPES.map((t) => {
            const Icon = TYPE_ICON[t];
            const active = typeFilter === t;
            return (
              <button
                key={t}
                onClick={() => setTypeFilter(active ? "" : t)}
                className={`shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono uppercase tracking-widest rounded-md border transition-colors ${
                  active
                    ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 border-stone-900 dark:border-stone-50"
                    : "bg-white dark:bg-stone-900 border-stone-200 dark:border-white/10 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50"
                }`}
              >
                <Icon className="w-3 h-3" />
                {formatLabel(t)}
              </button>
            );
          })}
        </div>

        <div className="inline-flex items-center bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-lg p-0.5 shrink-0">
          <button
            onClick={() => {
              setView("list");
              setSelectedDay(null);
            }}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-mono uppercase tracking-widest transition-colors ${
              view === "list"
                ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900"
                : "text-stone-500 hover:text-stone-900 dark:hover:text-stone-50"
            }`}
          >
            <List className="w-3.5 h-3.5" /> List
          </button>
          <button
            onClick={() => setView("calendar")}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-mono uppercase tracking-widest transition-colors ${
              view === "calendar"
                ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900"
                : "text-stone-500 hover:text-stone-900 dark:hover:text-stone-50"
            }`}
          >
            <CalendarIcon className="w-3.5 h-3.5" /> Calendar
          </button>
        </div>
      </div>

      {/* Selected day chip */}
      <AnimatePresence>
        {selectedDay && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="flex items-center gap-2"
          >
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              Showing
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-lime-400/15 border border-lime-400/30 text-lime-700 dark:text-lime-400 text-xs font-semibold">
              {selectedDay.toLocaleDateString(undefined, {
                weekday: "short",
                day: "2-digit",
                month: "short",
              })}
              <button
                onClick={() => setSelectedDay(null)}
                className="ml-1 text-lime-600 hover:text-lime-800 dark:hover:text-lime-200"
                aria-label="Clear day filter"
              >
                ×
              </button>
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={view + (selectedDay ? dayKey(selectedDay.toISOString()) : "")}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
        >
          {view === "calendar" && (
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_340px] gap-4">
              <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-xl p-4 sm:p-5">
                {/* Calendar header */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                      Month view
                    </span>
                    <h3 className="mt-0.5 text-lg font-bold tracking-tight text-stone-900 dark:text-stone-50">
                      {cursor.toLocaleDateString(undefined, {
                        month: "long",
                        year: "numeric",
                      })}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() =>
                        setCursor(
                          new Date(
                            cursor.getFullYear(),
                            cursor.getMonth() - 1,
                            1,
                          ),
                        )
                      }
                      className="p-2 rounded-md border border-stone-200 dark:border-white/10 text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 hover:border-stone-300 dark:hover:border-white/20 transition-colors"
                      aria-label="Previous month"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setCursor(startOfDay(new Date()))}
                      className="px-3 py-1.5 rounded-md border border-stone-200 dark:border-white/10 text-[11px] font-mono uppercase tracking-widest text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 hover:border-stone-300 dark:hover:border-white/20 transition-colors"
                    >
                      Today
                    </button>
                    <button
                      onClick={() =>
                        setCursor(
                          new Date(
                            cursor.getFullYear(),
                            cursor.getMonth() + 1,
                            1,
                          ),
                        )
                      }
                      className="p-2 rounded-md border border-stone-200 dark:border-white/10 text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 hover:border-stone-300 dark:hover:border-white/20 transition-colors"
                      aria-label="Next month"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Weekday header */}
                <div className="mt-5 grid grid-cols-7 gap-1 mb-1">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                    (d) => (
                      <div
                        key={d}
                        className="text-[10px] font-mono uppercase tracking-widest text-stone-400 text-center py-1"
                      >
                        {d}
                      </div>
                    ),
                  )}
                </div>

                {/* Day cells */}
                <div className="grid grid-cols-7 gap-1">
                  {calendarDays.map((d) => {
                    const k = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
                    const count = interviewCountsByDay.get(k) ?? 0;
                    const inMonth = d.getMonth() === cursor.getMonth();
                    const isToday = sameDay(d, now);
                    const isSelected = selectedDay && sameDay(d, selectedDay);
                    return (
                      <button
                        key={k}
                        onClick={() => setSelectedDay(d)}
                        className={`relative aspect-square flex flex-col items-center justify-center rounded-md text-sm transition-colors border ${
                          isSelected
                            ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 border-stone-900 dark:border-stone-50"
                            : count > 0
                              ? "bg-lime-400/10 border-lime-400/30 text-stone-900 dark:text-stone-50 hover:bg-lime-400/20"
                              : "bg-transparent border-transparent hover:bg-stone-100 dark:hover:bg-white/5 " +
                                (inMonth
                                  ? "text-stone-700 dark:text-stone-300"
                                  : "text-stone-300 dark:text-stone-700")
                        }`}
                      >
                        <span
                          className={`font-semibold tabular-nums ${isToday && !isSelected ? "text-lime-700 dark:text-lime-400" : ""}`}
                        >
                          {d.getDate()}
                        </span>
                        {count > 0 && (
                          <span
                            className={`mt-0.5 text-[9px] font-mono ${
                              isSelected
                                ? "text-stone-50 dark:text-stone-900"
                                : "text-lime-700 dark:text-lime-400"
                            }`}
                          >
                            {count} int
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Day list beside calendar */}
              <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-xl p-4 sm:p-5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                  {selectedDay
                    ? selectedDay.toLocaleDateString(undefined, {
                        weekday: "long",
                        day: "2-digit",
                        month: "short",
                      })
                    : "Pick a day"}
                </span>
                <h3 className="mt-0.5 text-sm font-bold text-stone-900 dark:text-stone-50">
                  {filteredInterviews.length} interview
                  {filteredInterviews.length === 1 ? "" : "s"}
                </h3>

                <div className="mt-4 space-y-2 max-h-130 overflow-y-auto pr-1">
                  {selectedDay && filteredInterviews.length === 0 && (
                    <p className="text-xs text-stone-500 py-8 text-center">
                      No interviews on this day.
                    </p>
                  )}
                  {!selectedDay && (
                    <p className="text-xs text-stone-500 py-8 text-center">
                      Click a highlighted day to see interviews.
                    </p>
                  )}
                  {selectedDay &&
                    filteredInterviews.map((i) => (
                      <InterviewCompact
                        key={i.id}
                        interview={i}
                        onFeedback={() => {
                          setShowFeedback(i.id);
                          setFeedbackForm({
                            rating: 3,
                            comments: "",
                            verdict: "PENDING",
                          });
                        }}
                      />
                    ))}
                </div>
              </div>
            </div>
          )}

          {view === "list" && (
            <>
              {isLoading ? (
                <div className="space-y-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="h-24 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-xl animate-pulse"
                    />
                  ))}
                </div>
              ) : grouped.length ? (
                <div className="space-y-6">
                  {grouped.map(([key, items]) => {
                    const d = new Date(items[0].scheduledAt);
                    return (
                      <div key={key} className="space-y-2">
                        <div className="flex items-baseline gap-3">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                            {d.toLocaleDateString(undefined, {
                              weekday: "long",
                            })}
                          </span>
                          <span className="h-px flex-1 bg-stone-200 dark:bg-white/10" />
                          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400">
                            {d.toLocaleDateString(undefined, {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                        <div className="space-y-2">
                          {items.map((interview, i) => (
                            <InterviewRow
                              key={interview.id}
                              interview={interview}
                              index={i}
                              onFeedback={() => {
                                setShowFeedback(interview.id);
                                setFeedbackForm({
                                  rating: 3,
                                  comments: "",
                                  verdict: "PENDING",
                                });
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-xl">
                  <HREmptyState
                    icon={Video}
                    title="No interviews scheduled"
                    description={
                      typeFilter
                        ? `No ${formatLabel(typeFilter).toLowerCase()} interviews on the calendar.`
                        : "Schedule your first interview to get started."
                    }
                    actionLabel="Schedule interview"
                    onAction={() => setShowCreate(true)}
                  />
                </div>
              )}
            </>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Create Modal */}
      <HRModal
        open={showCreate}
        onClose={() => setShowCreate(false)}
        title="Schedule interview"
        subtitle="Set up a new candidate conversation"
        onSubmit={() => createMutation.mutate()}
        loading={saving}
        wide
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <label className="block text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1.5">
              Application ID *
            </label>
            <input
              type="number"
              value={form.applicationId}
              onChange={(e) =>
                setForm({ ...form, applicationId: e.target.value })
              }
              placeholder="e.g. 1042"
              className="w-full px-3 py-2.5 text-sm border border-stone-200 dark:border-white/10 rounded-lg bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 placeholder:text-stone-400 focus:outline-none focus:border-stone-900 dark:focus:border-stone-50 transition-colors"
            />
          </div>
          <div>
            <label className="block text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1.5">
              Type
            </label>
            <select
              value={form.type}
              onChange={(e) =>
                setForm({ ...form, type: e.target.value as InterviewType })
              }
              className="w-full px-3 py-2.5 text-sm border border-stone-200 dark:border-white/10 rounded-lg bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 focus:outline-none focus:border-stone-900 dark:focus:border-stone-50 transition-colors"
            >
              {INTERVIEW_TYPES.map((t) => (
                <option key={t} value={t}>
                  {formatLabel(t)}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1.5">
              Duration (minutes)
            </label>
            <input
              type="number"
              value={form.durationMinutes}
              onChange={(e) =>
                setForm({
                  ...form,
                  durationMinutes: Number(e.target.value),
                })
              }
              className="w-full px-3 py-2.5 text-sm border border-stone-200 dark:border-white/10 rounded-lg bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 focus:outline-none focus:border-stone-900 dark:focus:border-stone-50 transition-colors"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1.5">
              Scheduled at *
            </label>
            <input
              type="datetime-local"
              value={form.scheduledAt}
              onChange={(e) =>
                setForm({ ...form, scheduledAt: e.target.value })
              }
              className="w-full px-3 py-2.5 text-sm border border-stone-200 dark:border-white/10 rounded-lg bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 focus:outline-none focus:border-stone-900 dark:focus:border-stone-50 transition-colors"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1.5">
              Meeting link
            </label>
            <input
              value={form.meetingLink}
              onChange={(e) =>
                setForm({ ...form, meetingLink: e.target.value })
              }
              placeholder="https://meet.example.com/..."
              className="w-full px-3 py-2.5 text-sm border border-stone-200 dark:border-white/10 rounded-lg bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 placeholder:text-stone-400 focus:outline-none focus:border-stone-900 dark:focus:border-stone-50 transition-colors"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1.5">
              Location
            </label>
            <input
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              placeholder="Office, floor, or room"
              className="w-full px-3 py-2.5 text-sm border border-stone-200 dark:border-white/10 rounded-lg bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 placeholder:text-stone-400 focus:outline-none focus:border-stone-900 dark:focus:border-stone-50 transition-colors"
            />
          </div>
        </div>
      </HRModal>

      {/* Feedback Modal */}
      <HRModal
        open={showFeedback !== null}
        onClose={() => setShowFeedback(null)}
        title="Interview feedback"
        subtitle="Capture outcome while it's fresh"
        onSubmit={() => feedbackMutation.mutate()}
        loading={feedbackMutation.isPending}
      >
        <div className="space-y-4">
          <div>
            <label className="block text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1.5">
              Rating
            </label>
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((n) => {
                const active = n <= feedbackForm.rating;
                return (
                  <button
                    key={n}
                    type="button"
                    onClick={() =>
                      setFeedbackForm({ ...feedbackForm, rating: n })
                    }
                    className={`p-2 rounded-md border transition-colors ${
                      active
                        ? "bg-lime-400/15 border-lime-400/30 text-lime-700 dark:text-lime-400"
                        : "bg-white dark:bg-stone-900 border-stone-200 dark:border-white/10 text-stone-400 hover:text-stone-600"
                    }`}
                    aria-label={`${n} star`}
                  >
                    <Star
                      className={`w-4 h-4 ${active ? "fill-current" : ""}`}
                    />
                  </button>
                );
              })}
              <span className="ml-2 text-xs font-mono text-stone-500">
                {feedbackForm.rating} / 5
              </span>
            </div>
          </div>
          <div>
            <label className="block text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1.5">
              Verdict
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(["PENDING", "PASS", "FAIL"] as const).map((v) => {
                const active = feedbackForm.verdict === v;
                return (
                  <button
                    key={v}
                    type="button"
                    onClick={() =>
                      setFeedbackForm({ ...feedbackForm, verdict: v })
                    }
                    className={`px-3 py-2 rounded-lg border text-xs font-mono uppercase tracking-widest transition-colors ${
                      active
                        ? v === "PASS"
                          ? "bg-lime-400/15 border-lime-400/30 text-lime-700 dark:text-lime-400"
                          : v === "FAIL"
                            ? "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-900/40 text-red-700 dark:text-red-400"
                            : "bg-stone-100 dark:bg-white/5 border-stone-300 dark:border-white/20 text-stone-700 dark:text-stone-300"
                        : "bg-white dark:bg-stone-900 border-stone-200 dark:border-white/10 text-stone-500 hover:text-stone-900 dark:hover:text-stone-50"
                    }`}
                  >
                    {formatLabel(v)}
                  </button>
                );
              })}
            </div>
          </div>
          <div>
            <label className="block text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1.5">
              Comments
            </label>
            <textarea
              value={feedbackForm.comments}
              onChange={(e) =>
                setFeedbackForm({ ...feedbackForm, comments: e.target.value })
              }
              rows={4}
              placeholder="Strengths, concerns, follow-up ideas"
              className="w-full px-3 py-2.5 text-sm border border-stone-200 dark:border-white/10 rounded-lg bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 placeholder:text-stone-400 focus:outline-none focus:border-stone-900 dark:focus:border-stone-50 transition-colors resize-none"
            />
          </div>
        </div>
      </HRModal>
    </div>
  );
}

function InterviewRow({
  interview,
  index,
  onFeedback,
}: {
  interview: HRInterview;
  index: number;
  onFeedback: () => void;
}) {
  const d = new Date(interview.scheduledAt);
  const Icon = TYPE_ICON[interview.type];
  const candidateName =
    interview.application?.user?.name ||
    `Application #${interview.applicationId}`;
  const endTime = new Date(d.getTime() + interview.durationMinutes * 60000);
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.02 }}
      className="flex items-start sm:items-center gap-4 p-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-xl hover:border-stone-300 dark:hover:border-white/20 transition-colors"
    >
      <div className="w-14 h-14 rounded-lg bg-lime-400/15 border border-lime-400/30 flex flex-col items-center justify-center shrink-0">
        <span className="text-[10px] font-mono uppercase tracking-widest text-lime-700 dark:text-lime-400">
          {d.toLocaleDateString("en", { month: "short" })}
        </span>
        <span className="text-lg font-bold tabular-nums text-stone-900 dark:text-stone-50 leading-tight">
          {d.getDate()}
        </span>
      </div>

      <span className="h-10 w-10 rounded-md bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 flex items-center justify-center text-xs font-bold text-stone-700 dark:text-stone-300 shrink-0">
        {initials(candidateName)}
      </span>

      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-sm font-bold text-stone-900 dark:text-stone-50 truncate">
            {candidateName}
          </p>
          <HRStatusBadge status={interview.status} />
        </div>
        {interview.application?.job?.title && (
          <p className="mt-0.5 text-xs text-stone-600 dark:text-stone-400 truncate">
            {interview.application.job.title}
          </p>
        )}
        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-mono text-stone-500">
          <span className="inline-flex items-center gap-1.5">
            <Icon className="w-3 h-3" />
            {formatLabel(interview.type)}
          </span>
          <span className="text-stone-300 dark:text-stone-700">/</span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-3 h-3" />
            {d.toLocaleTimeString(undefined, {
              hour: "2-digit",
              minute: "2-digit",
            })}
            {" to "}
            {endTime.toLocaleTimeString(undefined, {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
          <span className="text-stone-300 dark:text-stone-700">/</span>
          <span>{interview.durationMinutes}m</span>
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        {interview.meetingLink && (
          <a
            href={interview.meetingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-lime-400 text-stone-950 hover:bg-lime-300 transition-colors text-xs font-bold no-underline"
          >
            Join
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
        {interview.status === "COMPLETED" && (
          <button
            onClick={onFeedback}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-stone-200 dark:border-white/10 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 hover:border-stone-300 dark:hover:border-white/20 transition-colors text-xs font-semibold"
          >
            <MessageSquare className="w-3 h-3" />
            Feedback
          </button>
        )}
      </div>
    </motion.div>
  );
}

function InterviewCompact({
  interview,
  onFeedback,
}: {
  interview: HRInterview;
  onFeedback: () => void;
}) {
  const d = new Date(interview.scheduledAt);
  const Icon = TYPE_ICON[interview.type];
  const candidateName =
    interview.application?.user?.name ||
    `Application #${interview.applicationId}`;
  return (
    <div className="p-3 bg-stone-50 dark:bg-white/2 border border-stone-200 dark:border-white/10 rounded-lg">
      <div className="flex items-center justify-between gap-2">
        <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 inline-flex items-center gap-1.5">
          <Clock className="w-3 h-3" />
          {d.toLocaleTimeString(undefined, {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
        <HRStatusBadge status={interview.status} />
      </div>
      <p className="mt-1.5 text-sm font-bold text-stone-900 dark:text-stone-50 truncate">
        {candidateName}
      </p>
      <div className="mt-0.5 flex items-center gap-1.5 text-[11px] font-mono text-stone-500">
        <Icon className="w-3 h-3" />
        {formatLabel(interview.type)} / {interview.durationMinutes}m
      </div>
      {(interview.meetingLink || interview.status === "COMPLETED") && (
        <div className="mt-2 flex items-center gap-2">
          {interview.meetingLink && (
            <a
              href={interview.meetingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-semibold text-lime-700 dark:text-lime-400 no-underline inline-flex items-center gap-1 hover:underline"
            >
              Join <ExternalLink className="w-3 h-3" />
            </a>
          )}
          {interview.status === "COMPLETED" && (
            <button
              onClick={onFeedback}
              className="text-[11px] font-semibold text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 inline-flex items-center gap-1"
            >
              <MessageSquare className="w-3 h-3" />
              Feedback
            </button>
          )}
        </div>
      )}
    </div>
  );
}

function buildMonthGrid(cursor: Date) {
  const first = new Date(cursor.getFullYear(), cursor.getMonth(), 1);
  const startOffset = first.getDay();
  const start = new Date(first);
  start.setDate(first.getDate() - startOffset);
  const days: Date[] = [];
  for (let i = 0; i < 42; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    days.push(d);
  }
  return days;
}
