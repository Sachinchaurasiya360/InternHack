import { useMemo, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import NumberFlow from "@number-flow/react";
import {
  Award,
  Plus,
  Star,
  TrendingUp,
  ChevronDown,
  Users,
  UserCircle,
} from "lucide-react";
import api from "../../../lib/axios";
import { hrKeys } from "./hr-query-keys";
import HRStatusBadge from "./components/HRStatusBadge";
import HREmptyState from "./components/HREmptyState";
import HRModal from "./components/HRModal";
import type {
  PerformanceReview,
  ReviewCycle,
  HRReviewStatus,
  HREmployee,
} from "./hr-types";
import { SEO } from "../../../components/SEO";
import { Button } from "../../../components/ui/button";

const CYCLES: ReviewCycle[] = ["QUARTERLY", "HALF_YEARLY", "ANNUAL"];
const REVIEW_STATUSES: HRReviewStatus[] = [
  "DRAFT",
  "SELF_REVIEW",
  "MANAGER_REVIEW",
  "CALIBRATION",
  "COMPLETED",
];

function formatLabel(value: string) {
  return value
    .replace(/_/g, " ")
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function initials(first?: string, last?: string) {
  return `${first?.[0] ?? ""}${last?.[0] ?? ""}`.toUpperCase() || "?";
}

function RatingStars({
  rating,
  size = "sm",
}: {
  rating?: number | null;
  size?: "sm" | "md";
}) {
  const dim = size === "md" ? "w-4 h-4" : "w-3 h-3";
  if (!rating) {
    return (
      <span className="text-xs font-mono text-stone-400 dark:text-stone-600">
        n/a
      </span>
    );
  }
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`${dim} ${
            s <= Math.round(rating)
              ? "text-lime-500 fill-lime-500"
              : "text-stone-300 dark:text-stone-700"
          }`}
        />
      ))}
      <span className="ml-1.5 text-xs font-mono tabular-nums text-stone-600 dark:text-stone-400">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

export default function PerformancePage() {
  const queryClient = useQueryClient();
  const [tab, setTab] = useState<"team" | "my">("team");
  const [cycleFilter, setCycleFilter] = useState<ReviewCycle | "">("");
  const [showCreate, setShowCreate] = useState(false);
  const [form, setForm] = useState({
    employeeId: "",
    reviewerId: "",
    cycle: "ANNUAL" as ReviewCycle,
    period: "",
  });
  const [saving, setSaving] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(null);

  const { data: teamReviews, isLoading: teamLoading } = useQuery({
    queryKey: hrKeys.performance.team(),
    queryFn: async () => {
      const res = await api.get("/hr/performance/reviews/team");
      return res.data as { reviews: PerformanceReview[]; total: number };
    },
    enabled: tab === "team",
  });

  const { data: myReviews, isLoading: myLoading } = useQuery({
    queryKey: hrKeys.performance.my(),
    queryFn: async () => {
      const res = await api.get("/hr/performance/reviews/my");
      return res.data as { reviews: PerformanceReview[]; total: number };
    },
    enabled: tab === "my",
  });

  const { data: employeeOptions } = useQuery({
    queryKey: ["hr", "employees", "options"],
    queryFn: async () => {
      const res = await api.get("/hr/employees?limit=200");
      return res.data as { employees: HREmployee[] };
    },
    enabled: showCreate,
  });

  const createMutation = useMutation({
    mutationFn: async () => {
      setSaving(true);
      await api.post("/hr/performance/reviews", {
        ...form,
        employeeId: Number(form.employeeId),
        reviewerId: Number(form.reviewerId),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hr", "performance"] });
      setShowCreate(false);
      setForm({ employeeId: "", reviewerId: "", cycle: "ANNUAL", period: "" });
    },
    onSettled: () => setSaving(false),
  });

  const submitMutation = useMutation({
    mutationFn: async ({
      id,
      status,
    }: {
      id: number;
      status: HRReviewStatus;
    }) => {
      await api.patch(`/hr/performance/reviews/${id}/submit`, { status });
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["hr", "performance"] }),
  });

  const allReviews = tab === "team" ? teamReviews?.reviews : myReviews?.reviews;
  const isLoading = tab === "team" ? teamLoading : myLoading;

  const reviews = useMemo(() => {
    if (!allReviews) return [];
    return cycleFilter
      ? allReviews.filter((r) => r.cycle === cycleFilter)
      : allReviews;
  }, [allReviews, cycleFilter]);

  const stats = useMemo(() => {
    const list = allReviews ?? [];
    const total = list.length;
    const completed = list.filter((r) => r.status === "COMPLETED").length;
    const inProgress = list.filter(
      (r) => r.status !== "COMPLETED" && r.status !== "DRAFT",
    ).length;
    const promotions = list.filter((r) => r.promotionRecommended).length;
    return { total, completed, inProgress, promotions };
  }, [allReviews]);

  const statCards = [
    { label: "total", value: stats.total },
    { label: "completed", value: stats.completed },
    { label: "in progress", value: stats.inProgress },
    { label: "promotion recs", value: stats.promotions },
  ];

  return (
    <div className="space-y-8">
      <SEO title="Performance" noIndex />

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-wrap items-end justify-between gap-4"
      >
        <div className="min-w-0">
          <div className="mt-6 flex items-center gap-2 mb-3">
            <span className="h-1 w-1 bg-lime-400" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              recruiter / hr / performance
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
            Reviews &{" "}
            <span className="relative inline-block">
              feedback.
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
                className="absolute -bottom-0.5 left-0 right-0 h-0.75 bg-lime-400 origin-left"
              />
            </span>
          </h1>
          <p className="mt-2 text-sm text-stone-600 dark:text-stone-400 max-w-xl">
            Run review cycles, track ratings, and flag promotion candidates.
          </p>
        </div>
        <Button variant="primary" size="md" onClick={() => setShowCreate(true)}>
          <Plus className="w-4 h-4" />
          New review
        </Button>
      </motion.header>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden"
      >
        {statCards.map((s) => (
          <div key={s.label} className="bg-white dark:bg-stone-900 p-4 sm:p-5">
            <div className="text-2xl sm:text-3xl font-bold tracking-tight tabular-nums text-stone-900 dark:text-stone-50">
              <NumberFlow value={Number(s.value) || 0} />
            </div>
            <div className="mt-1 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-stone-500">
              {s.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Tabs + cycle filter */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-1 p-1 bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md">
          {(["team", "my"] as const).map((t) => {
            const Icon = t === "team" ? Users : UserCircle;
            return (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`inline-flex items-center gap-2 px-3 py-1.5 text-[11px] font-mono uppercase tracking-widest rounded-md transition-colors border-0 cursor-pointer ${
                  tab === t
                    ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900"
                    : "bg-transparent text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {t === "team" ? "Team" : "My reviews"}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          <button
            onClick={() => setCycleFilter("")}
            className={`shrink-0 px-3 py-1.5 text-[11px] font-mono uppercase tracking-widest rounded-md border transition-colors cursor-pointer ${
              cycleFilter === ""
                ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 border-stone-900 dark:border-stone-50"
                : "bg-white dark:bg-stone-900 border-stone-200 dark:border-white/10 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50"
            }`}
          >
            All cycles
          </button>
          {CYCLES.map((c) => (
            <button
              key={c}
              onClick={() => setCycleFilter(c)}
              className={`shrink-0 px-3 py-1.5 text-[11px] font-mono uppercase tracking-widest rounded-md border transition-colors cursor-pointer ${
                cycleFilter === c
                  ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 border-stone-900 dark:border-stone-50"
                  : "bg-white dark:bg-stone-900 border-stone-200 dark:border-white/10 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50"
              }`}
            >
              {formatLabel(c)}
            </button>
          ))}
        </div>
      </div>

      {/* Reviews list */}
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-xl overflow-hidden">
        {isLoading ? (
          <div className="p-6 space-y-3">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="h-20 bg-stone-100 dark:bg-stone-800 rounded-md animate-pulse"
              />
            ))}
          </div>
        ) : reviews.length ? (
          <ul className="divide-y divide-stone-200 dark:divide-white/10">
            {reviews.map((review, i) => {
              const rating = review.finalRating || review.managerRating;
              const isOpen = expanded === review.id;
              return (
                <li key={review.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.02 }}
                  >
                    <button
                      onClick={() => setExpanded(isOpen ? null : review.id)}
                      className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-stone-50 dark:hover:bg-white/5 transition-colors border-0 bg-transparent cursor-pointer"
                    >
                      <div className="shrink-0 w-10 h-10 rounded-md bg-lime-400/15 border border-lime-400/30 text-lime-700 dark:text-lime-400 flex items-center justify-center text-sm font-bold tracking-tight">
                        {initials(
                          review.employee?.firstName,
                          review.employee?.lastName,
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="text-sm font-semibold text-stone-900 dark:text-stone-50 truncate">
                            {review.employee?.firstName}{" "}
                            {review.employee?.lastName}
                          </p>
                          <HRStatusBadge status={review.status} />
                          {review.promotionRecommended && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-lime-700 dark:text-lime-400 border border-lime-400/30 bg-lime-400/10 px-1.5 py-0.5">
                              <TrendingUp className="w-3 h-3" />
                              promo
                            </span>
                          )}
                        </div>
                        <div className="mt-1 flex items-center gap-3 text-[11px] font-mono uppercase tracking-widest text-stone-500">
                          <span>{formatLabel(review.cycle)}</span>
                          <span className="text-stone-300 dark:text-stone-700">
                            /
                          </span>
                          <span>{review.period}</span>
                          {review.employee?.designation && (
                            <>
                              <span className="text-stone-300 dark:text-stone-700">
                                /
                              </span>
                              <span className="truncate normal-case tracking-normal font-sans">
                                {review.employee.designation}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="hidden sm:flex flex-col items-end gap-1 shrink-0">
                        <RatingStars rating={rating} />
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-stone-400 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden bg-stone-50 dark:bg-stone-950/50"
                        >
                          <div className="px-5 py-5 space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden">
                              {[
                                { label: "self", val: review.selfRating },
                                { label: "manager", val: review.managerRating },
                                { label: "final", val: review.finalRating },
                              ].map((r) => (
                                <div
                                  key={r.label}
                                  className="bg-white dark:bg-stone-900 p-3"
                                >
                                  <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1">
                                    {r.label} rating
                                  </div>
                                  <RatingStars rating={r.val} size="md" />
                                </div>
                              ))}
                            </div>

                            {(review.selfComments ||
                              review.managerComments) && (
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {review.selfComments && (
                                  <Comment
                                    label="self comments"
                                    body={review.selfComments}
                                  />
                                )}
                                {review.managerComments && (
                                  <Comment
                                    label="manager comments"
                                    body={review.managerComments}
                                  />
                                )}
                              </div>
                            )}

                            {(review.strengths || review.improvements) && (
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {review.strengths && (
                                  <Comment
                                    label="strengths"
                                    body={review.strengths}
                                  />
                                )}
                                {review.improvements && (
                                  <Comment
                                    label="areas for improvement"
                                    body={review.improvements}
                                  />
                                )}
                              </div>
                            )}

                            {review.status !== "COMPLETED" && (
                              <div>
                                <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">
                                  move to
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  {REVIEW_STATUSES.filter(
                                    (s) => s !== review.status,
                                  ).map((s) => (
                                    <button
                                      key={s}
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        submitMutation.mutate({
                                          id: review.id,
                                          status: s,
                                        });
                                      }}
                                      className="px-3 py-1.5 text-[11px] font-mono uppercase tracking-widest border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 hover:border-stone-300 dark:hover:border-white/20 rounded-md transition-colors cursor-pointer"
                                    >
                                      {formatLabel(s)}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="p-6">
            <HREmptyState
              icon={Award}
              title="No reviews found"
              actionLabel="Create review"
              onAction={() => setShowCreate(true)}
            />
          </div>
        )}
      </div>

      {/* Create modal */}
      <HRModal
        open={showCreate}
        onClose={() => setShowCreate(false)}
        title="New performance review"
        subtitle="Pair an employee with a reviewer for a given cycle."
        onSubmit={() => createMutation.mutate()}
        submitLabel="Create review"
        loading={saving}
      >
        <div className="space-y-4">
          <Field label="Employee">
            <select
              value={form.employeeId}
              onChange={(e) =>
                setForm({ ...form, employeeId: e.target.value })
              }
              className="w-full px-3 py-2 text-sm bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md text-stone-900 dark:text-stone-50 focus:outline-none focus:border-lime-400"
            >
              <option value="">Select employee…</option>
              {employeeOptions?.employees?.map((e) => (
                <option key={e.id} value={e.id}>
                  {e.firstName} {e.lastName}
                  {e.designation ? ` — ${e.designation}` : ""}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Reviewer">
            <select
              value={form.reviewerId}
              onChange={(e) =>
                setForm({ ...form, reviewerId: e.target.value })
              }
              className="w-full px-3 py-2 text-sm bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md text-stone-900 dark:text-stone-50 focus:outline-none focus:border-lime-400"
            >
              <option value="">Select reviewer…</option>
              {employeeOptions?.employees?.map((e) => (
                <option key={e.id} value={e.id}>
                  {e.firstName} {e.lastName}
                  {e.designation ? ` — ${e.designation}` : ""}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Cycle">
            <div className="grid grid-cols-3 gap-2">
              {CYCLES.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setForm({ ...form, cycle: c })}
                  className={`px-2 py-2 text-[11px] font-mono uppercase tracking-widest rounded-md border transition-colors cursor-pointer ${
                    form.cycle === c
                      ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 border-stone-900 dark:border-stone-50"
                      : "bg-white dark:bg-stone-900 border-stone-200 dark:border-white/10 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50"
                  }`}
                >
                  {formatLabel(c)}
                </button>
              ))}
            </div>
          </Field>
          <Field label="Period">
            <input
              value={form.period}
              onChange={(e) => setForm({ ...form, period: e.target.value })}
              placeholder="e.g. Q1 2026"
              className="w-full px-3 py-2 text-sm bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md text-stone-900 dark:text-stone-50 placeholder:text-stone-400 focus:outline-none focus:border-lime-400"
            />
          </Field>
        </div>
      </HRModal>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1.5">
        {label}
      </span>
      {children}
    </label>
  );
}

function Comment({ label, body }: { label: string; body: string }) {
  return (
    <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-3">
      <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1">
        {label}
      </div>
      <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed whitespace-pre-wrap">
        {body}
      </p>
    </div>
  );
}
