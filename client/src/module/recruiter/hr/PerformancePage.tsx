import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Award, Plus, Star } from "lucide-react";
import api from "../../../lib/axios";
import { hrKeys } from "./hr-query-keys";
import HRStatusBadge from "./components/HRStatusBadge";
import HREmptyState from "./components/HREmptyState";
import HRModal from "./components/HRModal";
import type { PerformanceReview, ReviewCycle, HRReviewStatus } from "./hr-types";

const CYCLES: ReviewCycle[] = ["QUARTERLY", "HALF_YEARLY", "ANNUAL"];
const REVIEW_STATUSES: HRReviewStatus[] = ["DRAFT", "SELF_REVIEW", "MANAGER_REVIEW", "CALIBRATION", "COMPLETED"];

export default function PerformancePage() {
  const queryClient = useQueryClient();
  const [tab, setTab] = useState<"team" | "my">("team");
  const [showCreate, setShowCreate] = useState(false);
  const [form, setForm] = useState({ employeeId: "", reviewerId: "", cycle: "ANNUAL" as ReviewCycle, period: "" });
  const [saving, setSaving] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(null);

  const { data: teamReviews, isLoading } = useQuery({
    queryKey: hrKeys.performance.team(),
    queryFn: async () => {
      const res = await api.get("/hr/performance/reviews/team");
      return res.data as { reviews: PerformanceReview[]; total: number };
    },
    enabled: tab === "team",
  });

  const { data: myReviews } = useQuery({
    queryKey: hrKeys.performance.my(),
    queryFn: async () => {
      const res = await api.get("/hr/performance/reviews/my");
      return res.data as { reviews: PerformanceReview[]; total: number };
    },
    enabled: tab === "my",
  });

  const createMutation = useMutation({
    mutationFn: async () => {
      setSaving(true);
      await api.post("/hr/performance/reviews", { ...form, employeeId: Number(form.employeeId), reviewerId: Number(form.reviewerId) });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hr", "performance"] });
      setShowCreate(false);
    },
    onSettled: () => setSaving(false),
  });

  const submitMutation = useMutation({
    mutationFn: async ({ id, status }: { id: number; status: HRReviewStatus }) => {
      await api.patch(`/hr/performance/reviews/${id}/submit`, { status });
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["hr", "performance"] }),
  });

  const reviews = tab === "team" ? teamReviews?.reviews : myReviews?.reviews;

  function RatingStars({ rating }: { rating?: number | null }) {
    if (!rating) return <span className="text-xs text-gray-400">-</span>;
    return (
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star key={s} className={`w-3 h-3 ${s <= rating ? "text-amber-500 fill-amber-500" : "text-gray-300 dark:text-gray-600"}`} />
        ))}
        <span className="text-xs text-gray-500 ml-1">{rating.toFixed(1)}</span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Performance Reviews</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Manage performance review cycles</p>
        </div>
        <button onClick={() => setShowCreate(true)} className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold bg-gray-950 dark:bg-white text-white dark:text-gray-950 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
          <Plus className="w-4 h-4" /> New Review
        </button>
      </motion.div>

      <div className="flex gap-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl w-fit">
        {(["team", "my"] as const).map((t) => (
          <button key={t} onClick={() => setTab(t)} className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors capitalize ${tab === t ? "bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm" : "text-gray-500 dark:text-gray-400"}`}>
            {t === "team" ? "Team Reviews" : "My Reviews"}
          </button>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-6">
        {isLoading ? (
          <div className="space-y-3">{[...Array(5)].map((_, i) => <div key={i} className="h-16 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse" />)}</div>
        ) : reviews?.length ? (
          <div className="space-y-3">
            {reviews.map((review, i) => (
              <motion.div key={review.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}>
                <div
                  className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-800 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors"
                  onClick={() => setExpanded(expanded === review.id ? null : review.id)}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        {review.employee?.firstName} {review.employee?.lastName}
                      </p>
                      <HRStatusBadge status={review.status} />
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5">{review.cycle} - {review.period}</p>
                  </div>
                  <div className="text-right">
                    <RatingStars rating={review.finalRating || review.managerRating} />
                    {review.promotionRecommended && <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">Promotion Recommended</span>}
                  </div>
                </div>
                {expanded === review.id && (
                  <div className="p-4 bg-gray-50 dark:bg-gray-800/30 rounded-b-xl border-x border-b border-gray-100 dark:border-gray-800 space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-[10px] text-gray-500 uppercase">Self Rating</span>
                        <RatingStars rating={review.selfRating} />
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-500 uppercase">Manager Rating</span>
                        <RatingStars rating={review.managerRating} />
                      </div>
                    </div>
                    {review.selfComments && <div><span className="text-[10px] text-gray-500 uppercase">Self Comments</span><p className="text-xs text-gray-700 dark:text-gray-300 mt-0.5">{review.selfComments}</p></div>}
                    {review.managerComments && <div><span className="text-[10px] text-gray-500 uppercase">Manager Comments</span><p className="text-xs text-gray-700 dark:text-gray-300 mt-0.5">{review.managerComments}</p></div>}
                    {review.strengths && <div><span className="text-[10px] text-gray-500 uppercase">Strengths</span><p className="text-xs text-gray-700 dark:text-gray-300 mt-0.5">{review.strengths}</p></div>}
                    {review.improvements && <div><span className="text-[10px] text-gray-500 uppercase">Areas for Improvement</span><p className="text-xs text-gray-700 dark:text-gray-300 mt-0.5">{review.improvements}</p></div>}
                    {review.status !== "COMPLETED" && (
                      <div className="flex gap-2 pt-2">
                        {REVIEW_STATUSES.filter((s) => s !== review.status).map((s) => (
                          <button key={s} onClick={() => submitMutation.mutate({ id: review.id, status: s })} className="px-3 py-1.5 text-[10px] font-medium border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                            {s.replace(/_/g, " ")}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        ) : (
          <HREmptyState icon={Award} title="No reviews found" actionLabel="Create Review" onAction={() => setShowCreate(true)} />
        )}
      </div>

      <HRModal open={showCreate} onClose={() => setShowCreate(false)} title="New Performance Review" onSubmit={() => createMutation.mutate()} loading={saving}>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Employee ID *</label>
            <input type="number" value={form.employeeId} onChange={(e) => setForm({ ...form, employeeId: e.target.value })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Reviewer ID *</label>
            <input type="number" value={form.reviewerId} onChange={(e) => setForm({ ...form, reviewerId: e.target.value })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Cycle</label>
            <select value={form.cycle} onChange={(e) => setForm({ ...form, cycle: e.target.value as ReviewCycle })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none">
              {CYCLES.map((c) => <option key={c} value={c}>{c.replace(/_/g, " ")}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Period *</label>
            <input value={form.period} onChange={(e) => setForm({ ...form, period: e.target.value })} placeholder="e.g. Q1 2026" className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none" />
          </div>
        </div>
      </HRModal>
    </div>
  );
}
