import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Plus,
  Pencil,
  Trash2,
  X,
  Loader2,
  ChevronLeft,
  ChevronRight,
  Search,
  Filter,
  Users,
  ToggleLeft,
  ToggleRight,
} from "lucide-react";
import toast from "react-hot-toast";
import api from "../../lib/axios";
import { queryKeys } from "../../lib/query-keys";
import type { Badge, BadgeCategory, Pagination } from "../../lib/types";

// ── Constants ──

const CATEGORIES: BadgeCategory[] = [
  "CAREER",
  "QUIZ",
  "SKILL",
  "CONTRIBUTION",
  "MILESTONE",
];

const CRITERIA_TYPES = [
  { value: "career_complete", label: "Career Complete" },
  { value: "quiz_pass", label: "Quiz Pass" },
  { value: "skill_test_pass", label: "Skill Test Pass" },
  { value: "first_application", label: "First Application" },
  { value: "dsa_solve", label: "DSA Solve" },
  { value: "profile_complete", label: "Profile Complete" },
];

const CATEGORY_COLORS: Record<BadgeCategory, string> = {
  CAREER: "bg-blue-500/10 text-blue-400",
  QUIZ: "bg-purple-500/10 text-purple-400",
  SKILL: "bg-emerald-500/10 text-emerald-400",
  CONTRIBUTION: "bg-amber-500/10 text-amber-400",
  MILESTONE: "bg-rose-500/10 text-rose-400",
};

interface BadgeForm {
  name: string;
  description: string;
  category: BadgeCategory;
  criteriaType: string;
  criteriaParams: { key: string; value: string }[];
  isActive: boolean;
}

const emptyForm = (): BadgeForm => ({
  name: "",
  description: "",
  category: "CAREER",
  criteriaType: "career_complete",
  criteriaParams: [],
  isActive: true,
});

function formToBadge(form: BadgeForm) {
  const params: Record<string, unknown> = {};
  for (const p of form.criteriaParams) {
    if (!p.key.trim()) continue;
    const num = Number(p.value);
    params[p.key.trim()] = isNaN(num) ? p.value : num;
  }
  return {
    name: form.name,
    description: form.description || undefined,
    category: form.category,
    criteria: { type: form.criteriaType, params: Object.keys(params).length > 0 ? params : undefined },
    isActive: form.isActive,
  };
}

function badgeToForm(badge: Badge): BadgeForm {
  const criteria = badge.criteria as { type?: string; params?: Record<string, unknown> };
  const params: { key: string; value: string }[] = [];
  if (criteria.params) {
    for (const [key, value] of Object.entries(criteria.params)) {
      params.push({ key, value: String(value) });
    }
  }
  return {
    name: badge.name,
    description: badge.description ?? "",
    category: badge.category,
    criteriaType: criteria.type ?? "career_complete",
    criteriaParams: params,
    isActive: badge.isActive,
  };
}

// ── Component ──

export default function AdminBadgesPage() {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [categoryFilter, setCategoryFilter] = useState<BadgeCategory | "ALL">("ALL");
  const [search, setSearch] = useState("");

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState<BadgeForm>(emptyForm());
  const [deleteTarget, setDeleteTarget] = useState<Badge | null>(null);

  const limit = 10;

  // ── Queries ──

  const { data, isLoading } = useQuery({
    queryKey: queryKeys.badges.admin({ page, limit, ...(categoryFilter !== "ALL" && { category: categoryFilter }) }),
    queryFn: async () => {
      const params: Record<string, string | number> = { page, limit };
      if (categoryFilter !== "ALL") params.category = categoryFilter;
      if (search.trim()) params.search = search.trim();
      const res = await api.get("/badges/admin", { params });
      return res.data as { badges: (Badge & { _count?: { studentBadges: number } })[]; pagination: Pagination };
    },
  });

  const badges = data?.badges ?? [];
  const pagination = data?.pagination;

  // ── Mutations ──

  const createMutation = useMutation({
    mutationFn: (payload: ReturnType<typeof formToBadge>) => api.post("/badges/admin", payload),
    onSuccess: () => {
      toast.success("Badge created");
      queryClient.invalidateQueries({ queryKey: queryKeys.badges.all() });
      closeModal();
    },
    onError: () => toast.error("Failed to create badge"),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: ReturnType<typeof formToBadge> }) =>
      api.put(`/badges/admin/${id}`, payload),
    onSuccess: () => {
      toast.success("Badge updated");
      queryClient.invalidateQueries({ queryKey: queryKeys.badges.all() });
      closeModal();
    },
    onError: () => toast.error("Failed to update badge"),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => api.delete(`/badges/admin/${id}`),
    onSuccess: () => {
      toast.success("Badge deleted");
      queryClient.invalidateQueries({ queryKey: queryKeys.badges.all() });
      setDeleteTarget(null);
    },
    onError: () => toast.error("Failed to delete badge"),
  });

  // ── Handlers ──

  function openCreate() {
    setEditingId(null);
    setForm(emptyForm());
    setModalOpen(true);
  }

  function openEdit(badge: Badge) {
    setEditingId(badge.id);
    setForm(badgeToForm(badge));
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setEditingId(null);
    setForm(emptyForm());
  }

  function handleSubmit() {
    if (!form.name.trim()) {
      toast.error("Badge name is required");
      return;
    }
    const payload = formToBadge(form);
    if (editingId) {
      updateMutation.mutate({ id: editingId, payload });
    } else {
      createMutation.mutate(payload);
    }
  }

  function addParam() {
    setForm((f) => ({ ...f, criteriaParams: [...f.criteriaParams, { key: "", value: "" }] }));
  }

  function updateParam(index: number, field: "key" | "value", value: string) {
    setForm((f) => {
      const params = [...f.criteriaParams];
      params[index] = { ...params[index], [field]: value };
      return { ...f, criteriaParams: params };
    });
  }

  function removeParam(index: number) {
    setForm((f) => ({
      ...f,
      criteriaParams: f.criteriaParams.filter((_, i) => i !== index),
    }));
  }

  const isSaving = createMutation.isPending || updateMutation.isPending;

  // ── Styles ──

  const inputClass =
    "w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors";
  const selectClass =
    "w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors";
  const labelClass = "block text-xs font-medium text-gray-400 mb-1";

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <Award className="w-6 h-6 text-indigo-400" />
            Badges
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            {pagination ? `${pagination.total} badge${pagination.total !== 1 ? "s" : ""}` : "Loading..."}
          </p>
        </div>
        <button
          onClick={openCreate}
          className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-500 transition-colors"
        >
          <Plus className="w-4 h-4" />
          New Badge
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 mb-4">
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            className="w-full pl-9 pr-3 py-2 bg-gray-900 border border-gray-800 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
            placeholder="Search badges..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
          <select
            className="pl-9 pr-8 py-2 bg-gray-900 border border-gray-800 rounded-lg text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors appearance-none cursor-pointer"
            value={categoryFilter}
            onChange={(e) => {
              setCategoryFilter(e.target.value as BadgeCategory | "ALL");
              setPage(1);
            }}
          >
            <option value="ALL">All Categories</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Table */}
      {isLoading ? (
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-14 bg-gray-900 rounded-lg animate-pulse" />
          ))}
        </div>
      ) : badges.length === 0 ? (
        <div className="text-center py-16 text-gray-500">
          <Award className="w-10 h-10 mx-auto mb-3 opacity-40" />
          <p>No badges found. Create your first one.</p>
        </div>
      ) : (
        <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800 text-xs font-medium text-gray-400 uppercase tracking-wider">
                <th className="text-left px-4 py-3">Name</th>
                <th className="text-left px-4 py-3">Category</th>
                <th className="text-left px-4 py-3">Criteria</th>
                <th className="text-center px-4 py-3">Active</th>
                <th className="text-center px-4 py-3">Earned</th>
                <th className="text-right px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/50">
              {badges.map((badge) => {
                const criteria = badge.criteria as { type?: string; params?: Record<string, unknown> };
                return (
                  <motion.tr
                    key={badge.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="hover:bg-gray-800/30 transition-colors"
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        {badge.iconUrl ? (
                          <img
                            src={badge.iconUrl}
                            alt=""
                            className="w-8 h-8 rounded-lg object-cover"
                          />
                        ) : (
                          <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                            <Award className="w-4 h-4 text-indigo-400" />
                          </div>
                        )}
                        <div>
                          <p className="text-sm font-medium text-white">{badge.name}</p>
                          {badge.description && (
                            <p className="text-xs text-gray-500 truncate max-w-xs">
                              {badge.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`text-xs font-medium px-2 py-1 rounded-md ${
                          CATEGORY_COLORS[badge.category]
                        }`}
                      >
                        {badge.category}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-xs font-medium px-2 py-1 rounded-md bg-gray-800 text-gray-300">
                        {criteria.type ?? "---"}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      {badge.isActive ? (
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-400">
                          <ToggleRight className="w-4 h-4" />
                          Yes
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-500">
                          <ToggleLeft className="w-4 h-4" />
                          No
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="inline-flex items-center gap-1 text-sm text-gray-300">
                        <Users className="w-3.5 h-3.5 text-gray-500" />
                        {badge._count?.studentBadges ?? 0}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => openEdit(badge)}
                          className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setDeleteTarget(badge)}
                          className="p-1.5 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination */}
      {pagination && pagination.totalPages > 1 && (
        <div className="flex items-center justify-between mt-4">
          <p className="text-xs text-gray-500">
            Page {pagination.page} of {pagination.totalPages}
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page <= 1}
              className="p-2 rounded-lg bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {Array.from({ length: pagination.totalPages }, (_, i) => i + 1)
              .filter((p) => {
                if (pagination.totalPages <= 7) return true;
                if (p === 1 || p === pagination.totalPages) return true;
                return Math.abs(p - page) <= 1;
              })
              .reduce<(number | "ellipsis")[]>((acc, p, i, arr) => {
                if (i > 0 && p - (arr[i - 1] as number) > 1) acc.push("ellipsis");
                acc.push(p);
                return acc;
              }, [])
              .map((item, i) =>
                item === "ellipsis" ? (
                  <span key={`e-${i}`} className="px-1 text-gray-600">
                    ...
                  </span>
                ) : (
                  <button
                    key={item}
                    onClick={() => setPage(item as number)}
                    className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${
                      page === item
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700"
                    }`}
                  >
                    {item}
                  </button>
                ),
              )}
            <button
              onClick={() => setPage((p) => Math.min(pagination.totalPages, p + 1))}
              disabled={page >= pagination.totalPages}
              className="p-2 rounded-lg bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Create / Edit Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ type: "spring", duration: 0.35 }}
              className="bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl w-full max-w-lg mx-4 max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
                <h2 className="text-lg font-semibold text-white">
                  {editingId ? "Edit Badge" : "Create Badge"}
                </h2>
                <button
                  onClick={closeModal}
                  className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal body */}
              <div className="px-6 py-5 space-y-4">
                {/* Name */}
                <div>
                  <label className={labelClass}>Name *</label>
                  <input
                    className={inputClass}
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder="e.g. Career Explorer"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className={labelClass}>Description</label>
                  <textarea
                    className={`${inputClass} min-h-[72px]`}
                    value={form.description}
                    onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                    placeholder="What this badge represents..."
                  />
                </div>

                {/* Category + Active */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Category</label>
                    <select
                      className={selectClass}
                      value={form.category}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, category: e.target.value as BadgeCategory }))
                      }
                    >
                      {CATEGORIES.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-end pb-1">
                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={form.isActive}
                        onChange={(e) => setForm((f) => ({ ...f, isActive: e.target.checked }))}
                        className="rounded border-gray-600 bg-gray-800 text-indigo-500 focus:ring-indigo-500 focus:ring-offset-0"
                      />
                      <span className="text-sm text-gray-300">Active</span>
                    </label>
                  </div>
                </div>

                {/* Criteria type */}
                <div>
                  <label className={labelClass}>Criteria Type</label>
                  <select
                    className={selectClass}
                    value={form.criteriaType}
                    onChange={(e) => setForm((f) => ({ ...f, criteriaType: e.target.value }))}
                  >
                    {CRITERIA_TYPES.map((ct) => (
                      <option key={ct.value} value={ct.value}>
                        {ct.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Criteria params */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Criteria Params
                    </label>
                    <button
                      type="button"
                      onClick={addParam}
                      className="text-xs text-indigo-400 hover:text-indigo-300 font-medium"
                    >
                      + Add Param
                    </button>
                  </div>
                  {form.criteriaParams.length === 0 ? (
                    <p className="text-xs text-gray-600">
                      No params. Add key-value pairs like count, careerId, etc.
                    </p>
                  ) : (
                    <div className="space-y-2">
                      {form.criteriaParams.map((param, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <input
                            className={`${inputClass} flex-1`}
                            value={param.key}
                            onChange={(e) => updateParam(i, "key", e.target.value)}
                            placeholder="Key (e.g. count)"
                          />
                          <input
                            className={`${inputClass} flex-1`}
                            value={param.value}
                            onChange={(e) => updateParam(i, "value", e.target.value)}
                            placeholder="Value (e.g. 5)"
                          />
                          <button
                            type="button"
                            onClick={() => removeParam(i)}
                            className="p-1.5 text-gray-500 hover:text-red-400 transition-colors shrink-0"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Modal footer */}
              <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-800">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-800 text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={isSaving || !form.name.trim()}
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSaving ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : null}
                  {editingId ? "Save Changes" : "Create Badge"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {deleteTarget && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={() => setDeleteTarget(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ type: "spring", duration: 0.35 }}
              className="bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl w-full max-w-sm mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-6 py-5">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
                  <Trash2 className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">Delete Badge</h3>
                <p className="text-sm text-gray-400">
                  Are you sure you want to delete{" "}
                  <span className="text-white font-medium">{deleteTarget.name}</span>? This will
                  also remove it from all students who earned it. This action cannot be undone.
                </p>
              </div>
              <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-800">
                <button
                  onClick={() => setDeleteTarget(null)}
                  className="px-4 py-2 bg-gray-800 text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => deleteMutation.mutate(deleteTarget.id)}
                  disabled={deleteMutation.isPending}
                  className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-500 transition-colors disabled:opacity-50"
                >
                  {deleteMutation.isPending ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : null}
                  Delete
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
