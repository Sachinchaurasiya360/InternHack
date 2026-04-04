import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Plus,
  Users,
  Trash2,
  X,
  FolderOpen,
  ChevronRight,
} from "lucide-react";
import toast from "@/components/ui/toast";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import { SEO } from "../../../components/SEO";
import type { TalentPool } from "../../../lib/types";

export default function TalentPoolsPage() {
  const queryClient = useQueryClient();
  const [showCreate, setShowCreate] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [newPool, setNewPool] = useState({ name: "", description: "" });

  const { data: pools, isLoading } = useQuery({
    queryKey: queryKeys.talentPools.list(),
    queryFn: async () => {
      const res = await api.get("/recruiter/talent-pools");
      return res.data as TalentPool[];
    },
  });

  const createMutation = useMutation({
    mutationFn: async (payload: { name: string; description: string }) => {
      const res = await api.post("/recruiter/talent-pools", payload);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.talentPools.list() });
      setShowCreate(false);
      setNewPool({ name: "", description: "" });
      toast.success("Talent pool created");
    },
    onError: () => {
      toast.error("Failed to create pool");
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (poolId: number) => {
      await api.delete(`/recruiter/talent-pools/${poolId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.talentPools.list() });
      setDeleteId(null);
      toast.success("Pool deleted");
    },
    onError: () => {
      toast.error("Failed to delete pool");
    },
  });

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPool.name.trim()) return;
    createMutation.mutate(newPool);
  };

  return (
    <div>
      <SEO title="Talent Pools" noIndex />
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Talent Pools
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Organize and track candidates across your hiring pipeline
          </p>
        </div>
        <button
          onClick={() => setShowCreate(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-black dark:bg-white text-white dark:text-gray-950 text-sm font-medium rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
        >
          <Plus className="w-4 h-4" />
          New Pool
        </button>
      </div>

      {/* Loading */}
      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-6 animate-pulse"
            >
              <div className="h-5 bg-gray-200 dark:bg-gray-800 rounded w-2/3 mb-3" />
              <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-full mb-2" />
              <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-1/2" />
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {!isLoading && (!pools || pools.length === 0) && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
            <FolderOpen className="w-8 h-8 text-gray-400 dark:text-gray-500" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
            No talent pools yet
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm mb-4">
            Create your first talent pool to start organizing candidates.
          </p>
          <button
            onClick={() => setShowCreate(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-black dark:bg-white text-white dark:text-gray-950 text-sm font-medium rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Create Pool
          </button>
        </div>
      )}

      {/* Pool Cards Grid */}
      {!isLoading && pools && pools.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pools.map((pool, i) => (
            <motion.div
              key={pool.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 hover:border-gray-200 dark:hover:border-gray-700 p-6 flex flex-col transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setDeleteId(pool.id);
                  }}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                  title="Delete pool"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <h3 className="font-semibold text-gray-900 dark:text-white mb-1 truncate">
                {pool.name}
              </h3>
              {pool.description && (
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-4">
                  {pool.description}
                </p>
              )}

              <div className="flex-1" />

              <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {pool._count?.members ?? 0} member
                  {(pool._count?.members ?? 0) !== 1 ? "s" : ""}
                </span>
                <Link
                  to={`/recruiters/talent-pools/${pool.id}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors no-underline"
                >
                  View
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Create Pool Modal */}
      <AnimatePresence>
        {showCreate && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setShowCreate(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xl w-full max-w-md">
                <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Create Talent Pool
                  </h2>
                  <button
                    onClick={() => setShowCreate(false)}
                    className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <form onSubmit={handleCreate} className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Pool Name
                    </label>
                    <input
                      type="text"
                      value={newPool.name}
                      onChange={(e) =>
                        setNewPool({ ...newPool, name: e.target.value })
                      }
                      className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 dark:bg-gray-800 dark:text-white"
                      placeholder="e.g. Frontend Candidates Q1"
                      required
                      autoFocus
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Description
                    </label>
                    <textarea
                      value={newPool.description}
                      onChange={(e) =>
                        setNewPool({ ...newPool, description: e.target.value })
                      }
                      className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 min-h-[80px] dark:bg-gray-800 dark:text-white"
                      placeholder="Optional description..."
                    />
                  </div>
                  <div className="flex justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowCreate(false)}
                      className="px-4 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={createMutation.isPending}
                      className="px-6 py-2.5 bg-black dark:bg-white text-white dark:text-gray-950 text-sm font-medium rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-50"
                    >
                      {createMutation.isPending ? "Creating..." : "Create"}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {deleteId !== null && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setDeleteId(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xl w-full max-w-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Delete Pool?
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                  This will permanently remove the pool and all its member
                  records. This action cannot be undone.
                </p>
                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => setDeleteId(null)}
                    className="px-4 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => deleteId !== null && deleteMutation.mutate(deleteId)}
                    disabled={deleteMutation.isPending}
                    className="px-4 py-2.5 bg-red-600 text-white text-sm font-medium rounded-xl hover:bg-red-700 transition-colors disabled:opacity-50"
                  >
                    {deleteMutation.isPending ? "Deleting..." : "Delete"}
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
