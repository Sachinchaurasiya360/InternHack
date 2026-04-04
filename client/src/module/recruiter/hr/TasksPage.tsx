import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { CheckSquare, Plus, MessageSquare } from "lucide-react";
import api from "../../../lib/axios";
import { hrKeys } from "./hr-query-keys";
import HRStatusBadge from "./components/HRStatusBadge";
import HREmptyState from "./components/HREmptyState";
import HRModal from "./components/HRModal";
import type { HRTask, TaskPriority, TaskStatus } from "./hr-types";
import { SEO } from "../../../components/SEO";

const PRIORITY_OPTIONS: TaskPriority[] = ["LOW", "MEDIUM", "HIGH", "URGENT"];
const STATUS_OPTIONS: TaskStatus[] = ["TODO", "IN_PROGRESS", "IN_REVIEW", "DONE", "CANCELLED"];
const BOARD_COLS: { status: TaskStatus; label: string; color: string }[] = [
  { status: "TODO", label: "To Do", color: "border-t-gray-400" },
  { status: "IN_PROGRESS", label: "In Progress", color: "border-t-blue-500" },
  { status: "IN_REVIEW", label: "In Review", color: "border-t-amber-500" },
  { status: "DONE", label: "Done", color: "border-t-emerald-500" },
];

export default function TasksPage() {
  const queryClient = useQueryClient();
  const [view, setView] = useState<"list" | "board">("list");
  const [showCreate, setShowCreate] = useState(false);
  const [form, setForm] = useState({ title: "", description: "", assigneeId: "", priority: "MEDIUM" as TaskPriority, dueDate: "" });
  const [saving, setSaving] = useState(false);
  const [commentTask, setCommentTask] = useState<number | null>(null);
  const [comment, setComment] = useState("");

  const { data: tasks, isLoading } = useQuery({
    queryKey: hrKeys.tasks.team(),
    queryFn: async () => {
      const res = await api.get("/hr/tasks/team");
      return res.data as { tasks: HRTask[]; total: number };
    },
  });

  const createMutation = useMutation({
    mutationFn: async () => {
      setSaving(true);
      await api.post("/hr/tasks", { ...form, assigneeId: Number(form.assigneeId) });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hr", "tasks"] });
      setShowCreate(false);
      setForm({ title: "", description: "", assigneeId: "", priority: "MEDIUM", dueDate: "" });
    },
    onSettled: () => setSaving(false),
  });

  const statusMutation = useMutation({
    mutationFn: async ({ id, status }: { id: number; status: TaskStatus }) => {
      await api.patch(`/hr/tasks/${id}/status`, { status });
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["hr", "tasks"] }),
  });

  const commentMutation = useMutation({
    mutationFn: async () => {
      if (!commentTask) return;
      await api.post(`/hr/tasks/${commentTask}/comments`, { comment });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hr", "tasks"] });
      setCommentTask(null);
      setComment("");
    },
  });

  const allTasks = tasks?.tasks ?? [];

  return (
    <div className="space-y-6">
      <SEO title="Tasks" noIndex />
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">HR Tasks</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{allTasks.length} tasks</p>
        </div>
        <button onClick={() => setShowCreate(true)} className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold bg-gray-950 dark:bg-white text-white dark:text-gray-950 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
          <Plus className="w-4 h-4" /> New Task
        </button>
      </motion.div>

      <div className="flex gap-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl w-fit">
        {(["list", "board"] as const).map((v) => (
          <button key={v} onClick={() => setView(v)} className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors capitalize ${view === v ? "bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm" : "text-gray-500 dark:text-gray-400"}`}>
            {v === "list" ? "List View" : "Board View"}
          </button>
        ))}
      </div>

      {view === "list" ? (
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-6">
          {isLoading ? (
            <div className="space-y-3">{[...Array(5)].map((_, i) => <div key={i} className="h-16 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse" />)}</div>
          ) : allTasks.length ? (
            <div className="space-y-2">
              {allTasks.map((task, i) => (
                <motion.div key={task.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">{task.title}</p>
                      <HRStatusBadge status={task.priority} />
                    </div>
                    {task.description && <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{task.description}</p>}
                    <p className="text-[10px] text-gray-400 mt-0.5">
                      Assigned to: {task.assignee?.firstName} {task.assignee?.lastName}
                      {task.dueDate && ` - Due: ${new Date(task.dueDate).toLocaleDateString()}`}
                    </p>
                  </div>
                  <select
                    value={task.status}
                    onChange={(e) => statusMutation.mutate({ id: task.id, status: e.target.value as TaskStatus })}
                    className="px-2 py-1 text-xs border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                  >
                    {STATUS_OPTIONS.map((s) => <option key={s} value={s}>{s.replace(/_/g, " ")}</option>)}
                  </select>
                  <button onClick={() => setCommentTask(task.id)} className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <MessageSquare className="w-3.5 h-3.5" />
                  </button>
                </motion.div>
              ))}
            </div>
          ) : (
            <HREmptyState icon={CheckSquare} title="No tasks" actionLabel="Create Task" onAction={() => setShowCreate(true)} />
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {BOARD_COLS.map((col) => {
            const colTasks = allTasks.filter((t) => t.status === col.status);
            return (
              <div key={col.status} className={`bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 border-t-2 ${col.color}`}>
                <div className="p-3 border-b border-gray-100 dark:border-gray-800">
                  <h3 className="text-xs font-semibold text-gray-700 dark:text-gray-300">{col.label} ({colTasks.length})</h3>
                </div>
                <div className="p-2 space-y-2 min-h-32">
                  {colTasks.map((task) => (
                    <div key={task.id} className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50">
                      <p className="text-xs font-medium text-gray-900 dark:text-white mb-1">{task.title}</p>
                      <div className="flex items-center gap-2">
                        <HRStatusBadge status={task.priority} />
                        {task.dueDate && <span className="text-[10px] text-gray-400">{new Date(task.dueDate).toLocaleDateString()}</span>}
                      </div>
                      <p className="text-[10px] text-gray-400 mt-1">{task.assignee?.firstName} {task.assignee?.lastName}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Create Modal */}
      <HRModal open={showCreate} onClose={() => setShowCreate(false)} title="New Task" onSubmit={() => createMutation.mutate()} loading={saving}>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Title *</label>
            <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
            <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none resize-none" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Assignee Employee ID *</label>
            <input type="number" value={form.assigneeId} onChange={(e) => setForm({ ...form, assigneeId: e.target.value })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Priority</label>
              <select value={form.priority} onChange={(e) => setForm({ ...form, priority: e.target.value as TaskPriority })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none">
                {PRIORITY_OPTIONS.map((p) => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Due Date</label>
              <input type="date" value={form.dueDate} onChange={(e) => setForm({ ...form, dueDate: e.target.value })} className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none" />
            </div>
          </div>
        </div>
      </HRModal>

      {/* Comment Modal */}
      <HRModal open={commentTask !== null} onClose={() => setCommentTask(null)} title="Add Comment" onSubmit={() => commentMutation.mutate()} loading={commentMutation.isPending}>
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} rows={4} placeholder="Write your comment..." className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none resize-none" />
      </HRModal>
    </div>
  );
}
