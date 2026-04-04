import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Video, Plus, Calendar } from "lucide-react";
import api from "../../../lib/axios";
import { hrKeys } from "./hr-query-keys";
import HRStatusBadge from "./components/HRStatusBadge";
import HREmptyState from "./components/HREmptyState";
import HRModal from "./components/HRModal";
import type { HRInterview, InterviewType } from "./hr-types";
import { SEO } from "../../../components/SEO";

const INTERVIEW_TYPES: InterviewType[] = ["PHONE", "VIDEO", "IN_PERSON", "PANEL", "TECHNICAL", "HR"];

export default function InterviewsPage() {
  const queryClient = useQueryClient();
  const [tab, setTab] = useState<"list" | "calendar">("list");
  const [showCreate, setShowCreate] = useState(false);
  const [form, setForm] = useState({ applicationId: "", type: "VIDEO" as InterviewType, scheduledAt: "", durationMinutes: 60, meetingLink: "", location: "" });
  const [saving, setSaving] = useState(false);
  const [showFeedback, setShowFeedback] = useState<number | null>(null);
  const [feedbackForm, setFeedbackForm] = useState({ rating: 3, comments: "", verdict: "PENDING" as "PASS" | "FAIL" | "PENDING" });

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
      await api.post("/hr/interviews", { ...form, applicationId: Number(form.applicationId), durationMinutes: Number(form.durationMinutes) });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hr", "interviews"] });
      setShowCreate(false);
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

  return (
    <div className="space-y-6">
      <SEO title="Interviews" noIndex />
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Interviews</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Schedule and manage interviews</p>
        </div>
        <button onClick={() => setShowCreate(true)} className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold bg-gray-950 dark:bg-white text-white dark:text-gray-950 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
          <Plus className="w-4 h-4" /> Schedule Interview
        </button>
      </motion.div>

      <div className="flex gap-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl w-fit">
        {(["list", "calendar"] as const).map((t) => (
          <button key={t} onClick={() => setTab(t)} className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors capitalize ${tab === t ? "bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm" : "text-gray-500 dark:text-gray-400"}`}>
            {t === "list" ? "List View" : "Calendar"}
          </button>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-6">
        {tab === "list" ? (
          isLoading ? (
            <div className="space-y-3">{[...Array(5)].map((_, i) => <div key={i} className="h-16 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse" />)}</div>
          ) : interviews?.length ? (
            <div className="space-y-3">
              {interviews.map((interview, i) => (
                <motion.div key={interview.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-900/20 flex items-center justify-center">
                    <Video className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      {interview.application?.user?.name || `Application #${interview.applicationId}`}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {interview.type} - {interview.durationMinutes}min - {new Date(interview.scheduledAt).toLocaleString()}
                    </p>
                    {interview.application?.job && <p className="text-[10px] text-gray-400">{interview.application.job.title}</p>}
                  </div>
                  <HRStatusBadge status={interview.status} />
                  {interview.meetingLink && (
                    <a href={interview.meetingLink} target="_blank" rel="noopener noreferrer" className="text-xs text-indigo-600 hover:underline">Join</a>
                  )}
                  {interview.status === "COMPLETED" && (
                    <button onClick={() => { setShowFeedback(interview.id); setFeedbackForm({ rating: 3, comments: "", verdict: "PENDING" }); }} className="text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                      Add Feedback
                    </button>
                  )}
                </motion.div>
              ))}
            </div>
          ) : (
            <HREmptyState icon={Video} title="No interviews scheduled" actionLabel="Schedule Interview" onAction={() => setShowCreate(true)} />
          )
        ) : (
          <div className="text-center py-12">
            <Calendar className="w-10 h-10 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
            <p className="text-sm text-gray-500">Calendar view - interviews are shown in the list view</p>
          </div>
        )}
      </div>

      {/* Create Modal */}
      <HRModal open={showCreate} onClose={() => setShowCreate(false)} title="Schedule Interview" onSubmit={() => createMutation.mutate()} loading={saving}>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Application ID *</label>
            <input type="number" value={form.applicationId} onChange={(e) => setForm({ ...form, applicationId: e.target.value })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Type</label>
            <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value as InterviewType })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none">
              {INTERVIEW_TYPES.map((t) => <option key={t} value={t}>{t.replace(/_/g, " ")}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Scheduled At *</label>
            <input type="datetime-local" value={form.scheduledAt} onChange={(e) => setForm({ ...form, scheduledAt: e.target.value })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Duration (minutes)</label>
            <input type="number" value={form.durationMinutes} onChange={(e) => setForm({ ...form, durationMinutes: Number(e.target.value) })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Meeting Link</label>
            <input value={form.meetingLink} onChange={(e) => setForm({ ...form, meetingLink: e.target.value })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none" />
          </div>
        </div>
      </HRModal>

      {/* Feedback Modal */}
      <HRModal open={showFeedback !== null} onClose={() => setShowFeedback(null)} title="Interview Feedback" onSubmit={() => feedbackMutation.mutate()} loading={feedbackMutation.isPending}>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Rating (1-5)</label>
            <input type="number" min={1} max={5} value={feedbackForm.rating} onChange={(e) => setFeedbackForm({ ...feedbackForm, rating: Number(e.target.value) })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Comments</label>
            <textarea value={feedbackForm.comments} onChange={(e) => setFeedbackForm({ ...feedbackForm, comments: e.target.value })} rows={3} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none resize-none" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Verdict</label>
            <select value={feedbackForm.verdict} onChange={(e) => setFeedbackForm({ ...feedbackForm, verdict: e.target.value as "PASS" | "FAIL" | "PENDING" })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none">
              <option value="PENDING">Pending</option>
              <option value="PASS">Pass</option>
              <option value="FAIL">Fail</option>
            </select>
          </div>
        </div>
      </HRModal>
    </div>
  );
}
