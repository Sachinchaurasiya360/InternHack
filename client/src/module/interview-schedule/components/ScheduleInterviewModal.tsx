import React, { useState } from "react";
import { scheduleInterview } from "../api";
import toast from "../../../components/ui/toast";

interface Props {
  open: boolean;
  onClose: () => void;
  studentId: number;
  studentName: string;
  onScheduled?: () => void;
}

export default function ScheduleInterviewModal({ open, onClose, studentId, studentName, onScheduled }: Props) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    scheduledAt: "",
    time: "",
    durationMinutes: 60,
    meetingLink: "",
    notes: "",
  });

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      // Combine date and time
      const datetime = new Date(`${form.scheduledAt}T${form.time}:00`);
      if (isNaN(datetime.getTime())) {
        toast.error("Invalid date or time selected.");
        setLoading(false);
        return;
      }

      await scheduleInterview({
        studentId,
        scheduledAt: datetime.toISOString(),
        durationMinutes: Number(form.durationMinutes),
        meetingLink: form.meetingLink,
        notes: form.notes,
      });

      toast.success("Interview scheduled successfully!");
      if (onScheduled) onScheduled();
      onClose();
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to schedule interview");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/50" onClick={loading ? undefined : onClose} />
      <div
        role="dialog"
        aria-modal="true"
        className="relative z-[100] w-full max-w-md rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 p-6 shadow-xl"
      >
        <h2 className="text-lg font-semibold text-stone-900 dark:text-white mb-4">
          Schedule Interview with {studentName}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1 space-y-1">
              <label className="text-sm font-medium text-stone-700 dark:text-stone-300">Date *</label>
              <input
                type="date"
                required
                className="w-full rounded-md border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 px-3 py-2 text-sm text-stone-900 dark:text-white"
                value={form.scheduledAt}
                onChange={(e) => setForm({ ...form, scheduledAt: e.target.value })}
              />
            </div>
            <div className="flex-1 space-y-1">
              <label className="text-sm font-medium text-stone-700 dark:text-stone-300">Time *</label>
              <input
                type="time"
                required
                className="w-full rounded-md border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 px-3 py-2 text-sm text-stone-900 dark:text-white"
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-stone-700 dark:text-stone-300">Duration (minutes) *</label>
            <select
              required
              className="w-full rounded-md border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 px-3 py-2 text-sm text-stone-900 dark:text-white"
              value={form.durationMinutes}
              onChange={(e) => setForm({ ...form, durationMinutes: Number(e.target.value) })}
            >
              <option value={15}>15 minutes</option>
              <option value={30}>30 minutes</option>
              <option value={45}>45 minutes</option>
              <option value={60}>60 minutes</option>
              <option value={90}>90 minutes</option>
              <option value={120}>120 minutes</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-stone-700 dark:text-stone-300">Meeting Link</label>
            <input
              type="url"
              placeholder="https://meet.google.com/..."
              className="w-full rounded-md border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 px-3 py-2 text-sm text-stone-900 dark:text-white"
              value={form.meetingLink}
              onChange={(e) => setForm({ ...form, meetingLink: e.target.value })}
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-stone-700 dark:text-stone-300">Notes (Optional)</label>
            <textarea
              placeholder="Agenda, prerequisites, etc."
              rows={3}
              className="w-full rounded-md border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 px-3 py-2 text-sm text-stone-900 dark:text-white"
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              disabled={loading}
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-md transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 text-sm font-medium text-white bg-black dark:bg-white dark:text-black hover:bg-stone-800 dark:hover:bg-stone-200 rounded-md transition-colors disabled:opacity-50"
            >
              {loading ? "Scheduling..." : "Schedule Interview"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
