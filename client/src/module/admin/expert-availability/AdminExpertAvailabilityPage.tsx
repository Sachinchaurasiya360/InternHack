import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Plus, Trash2, Loader2, CalendarClock, User } from "lucide-react";
import api from "../../../lib/axios";
import toast from "@/components/ui/toast";
import { SEO } from "../../../components/SEO";
import { queryKeys } from "../../../lib/query-keys";

interface AvailabilityBlock {
  id: number;
  date: string;
  startTime: string | null;
  endTime: string | null;
  reason: string | null;
}

interface Booking {
  id: number;
  scheduledAt: string;
  status: string;
  targetRole: string | null;
  user: { name: string; email: string };
}

const EMPTY_FORM = { date: "", startTime: "", endTime: "", reason: "" };

export default function AdminExpertAvailabilityPage() {
  const queryClient = useQueryClient();
  const [form, setForm] = useState(EMPTY_FORM);

  const { data: blocks, isLoading: loadingBlocks } = useQuery({
    queryKey: queryKeys.expertSession.adminAvailabilityBlocks(),
    queryFn: async () => {
      const res = await api.get<AvailabilityBlock[]>("/admin/expert-session/availability-blocks");
      return res.data;
    },
  });

  const { data: bookings, isLoading: loadingBookings } = useQuery({
    queryKey: queryKeys.expertSession.adminBookings(),
    queryFn: async () => {
      const res = await api.get<Booking[]>("/admin/expert-session/bookings");
      return res.data;
    },
  });

  const createMutation = useMutation({
    mutationFn: async () => {
      return api.post("/admin/expert-session/availability-blocks", {
        date: form.date,
        startTime: form.startTime || undefined,
        endTime: form.endTime || undefined,
        reason: form.reason || undefined,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.expertSession.adminAvailabilityBlocks() });
      toast.success("Availability block added");
      setForm(EMPTY_FORM);
    },
    onError: () => toast.error("Failed to add availability block"),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => api.delete(`/admin/expert-session/availability-blocks/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.expertSession.adminAvailabilityBlocks() });
      toast.success("Block removed");
    },
    onError: () => toast.error("Failed to remove block"),
  });

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <SEO title="Expert Availability" noIndex />
      <div>
        <h1 className="text-xl font-bold text-stone-900 dark:text-stone-50">Expert Session Availability</h1>
        <p className="text-sm text-stone-500 mt-1">
          Block out dates or time ranges when the expert is unavailable. Bookable hours are Mon-Fri, 10:00-18:00 IST by default.
        </p>
      </div>

      {/* Add block form */}
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-5 space-y-4">
        <h2 className="text-sm font-bold text-stone-900 dark:text-stone-50">Add a block</h2>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
            className="rounded-md border border-stone-200 dark:border-white/10 bg-transparent px-3 py-2 text-sm text-stone-900 dark:text-stone-50"
          />
          <input
            type="time"
            value={form.startTime}
            onChange={(e) => setForm((f) => ({ ...f, startTime: e.target.value }))}
            placeholder="Start (optional = whole day)"
            className="rounded-md border border-stone-200 dark:border-white/10 bg-transparent px-3 py-2 text-sm text-stone-900 dark:text-stone-50"
          />
          <input
            type="time"
            value={form.endTime}
            onChange={(e) => setForm((f) => ({ ...f, endTime: e.target.value }))}
            placeholder="End (optional)"
            className="rounded-md border border-stone-200 dark:border-white/10 bg-transparent px-3 py-2 text-sm text-stone-900 dark:text-stone-50"
          />
          <input
            type="text"
            value={form.reason}
            onChange={(e) => setForm((f) => ({ ...f, reason: e.target.value }))}
            placeholder="Reason (optional)"
            className="rounded-md border border-stone-200 dark:border-white/10 bg-transparent px-3 py-2 text-sm text-stone-900 dark:text-stone-50"
          />
        </div>
        <button
          onClick={() => createMutation.mutate()}
          disabled={!form.date || createMutation.isPending}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold bg-lime-400 text-stone-950 hover:bg-lime-300 disabled:opacity-40 cursor-pointer border-0"
        >
          {createMutation.isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
          Add block
        </button>
        <p className="text-xs text-stone-400">Leave start/end time blank to block the entire day.</p>
      </div>

      {/* Blocks list */}
      <div>
        <h2 className="text-sm font-bold text-stone-900 dark:text-stone-50 mb-3">Current blocks</h2>
        {loadingBlocks ? (
          <Loader2 className="w-5 h-5 animate-spin text-stone-400" />
        ) : !blocks || blocks.length === 0 ? (
          <p className="text-sm text-stone-500">No blocks configured.</p>
        ) : (
          <div className="space-y-2">
            {blocks.map((block) => (
              <div
                key={block.id}
                className="flex items-center justify-between rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 px-4 py-3"
              >
                <div className="flex items-center gap-2 text-sm text-stone-700 dark:text-stone-300">
                  <CalendarClock className="w-4 h-4 text-stone-400" />
                  {new Date(block.date).toLocaleDateString("en-US", { timeZone: "UTC", dateStyle: "medium" })}
                  {block.startTime && block.endTime ? ` · ${block.startTime}-${block.endTime}` : " · whole day"}
                  {block.reason && <span className="text-xs text-stone-400">({block.reason})</span>}
                </div>
                <button
                  onClick={() => deleteMutation.mutate(block.id)}
                  disabled={deleteMutation.isPending}
                  className="p-1.5 rounded-md text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 cursor-pointer border-0 bg-transparent"
                  aria-label="Remove block"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bookings list */}
      <div>
        <h2 className="text-sm font-bold text-stone-900 dark:text-stone-50 mb-3">Upcoming & past bookings</h2>
        {loadingBookings ? (
          <Loader2 className="w-5 h-5 animate-spin text-stone-400" />
        ) : !bookings || bookings.length === 0 ? (
          <p className="text-sm text-stone-500">No bookings yet.</p>
        ) : (
          <div className="space-y-2">
            {bookings.map((b) => (
              <div
                key={b.id}
                className="flex items-center justify-between rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 px-4 py-3"
              >
                <div className="flex items-center gap-2 text-sm text-stone-700 dark:text-stone-300">
                  <User className="w-4 h-4 text-stone-400" />
                  <span className="font-medium">{b.user.name}</span>
                  <span className="text-xs text-stone-400">{b.user.email}</span>
                  <span className="text-xs text-stone-400">
                    &middot; {new Date(b.scheduledAt).toLocaleString("en-US", { timeZone: "Asia/Kolkata", dateStyle: "medium", timeStyle: "short" })} IST
                  </span>
                </div>
                <span
                  className={`text-xs font-mono uppercase tracking-widest px-2 py-0.5 rounded ${
                    b.status === "SCHEDULED"
                      ? "bg-lime-400/10 text-lime-600 dark:text-lime-400"
                      : "bg-stone-100 dark:bg-white/5 text-stone-500"
                  }`}
                >
                  {b.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
