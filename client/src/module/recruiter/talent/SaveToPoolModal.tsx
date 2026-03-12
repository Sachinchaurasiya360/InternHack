import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { X, Plus, Users, FolderPlus } from "lucide-react";
import toast from "react-hot-toast";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { TalentPool } from "../../../lib/types";

interface SaveToPoolModalProps {
  studentId: number;
  studentName: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function SaveToPoolModal({
  studentId,
  studentName,
  isOpen,
  onClose,
}: SaveToPoolModalProps) {
  const queryClient = useQueryClient();
  const [selectedPoolId, setSelectedPoolId] = useState<number | null>(null);
  const [notes, setNotes] = useState("");
  const [showInlineCreate, setShowInlineCreate] = useState(false);
  const [newPoolName, setNewPoolName] = useState("");
  const [newPoolDescription, setNewPoolDescription] = useState("");

  const { data: pools, isLoading: poolsLoading } = useQuery({
    queryKey: queryKeys.talentPools.list(),
    queryFn: async () => {
      const res = await api.get("/recruiter/talent-pools");
      return res.data as TalentPool[];
    },
    enabled: isOpen,
  });

  const createPoolMutation = useMutation({
    mutationFn: async (payload: { name: string; description: string }) => {
      const res = await api.post("/recruiter/talent-pools", payload);
      return res.data as TalentPool;
    },
    onSuccess: (newPool) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.talentPools.list() });
      setSelectedPoolId(newPool.id);
      setShowInlineCreate(false);
      setNewPoolName("");
      setNewPoolDescription("");
      toast.success("Pool created");
    },
    onError: () => {
      toast.error("Failed to create pool");
    },
  });

  const addMemberMutation = useMutation({
    mutationFn: async ({
      poolId,
      studentId,
      notes,
    }: {
      poolId: number;
      studentId: number;
      notes: string;
    }) => {
      await api.post(`/recruiter/talent-pools/${poolId}/members`, {
        studentId,
        notes,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.talentPools.list() });
      if (selectedPoolId) {
        queryClient.invalidateQueries({
          queryKey: queryKeys.talentPools.detail(selectedPoolId),
        });
      }
      toast.success(`${studentName} saved to pool`);
      handleClose();
    },
    onError: (err: { response?: { data?: { message?: string } } }) => {
      toast.error(err.response?.data?.message || "Failed to save to pool");
    },
  });

  const handleClose = () => {
    setSelectedPoolId(null);
    setNotes("");
    setShowInlineCreate(false);
    setNewPoolName("");
    setNewPoolDescription("");
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPoolId) {
      toast.error("Please select a pool");
      return;
    }
    addMemberMutation.mutate({
      poolId: selectedPoolId,
      studentId,
      notes,
    });
  };

  const handleCreatePool = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPoolName.trim()) return;
    createPoolMutation.mutate({
      name: newPoolName,
      description: newPoolDescription,
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xl w-full max-w-md max-h-[90vh] flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800 flex-shrink-0">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Save to Pool
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                    Add {studentName} to a talent pool
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <form
                onSubmit={handleSubmit}
                className="p-6 space-y-4 overflow-y-auto flex-1"
              >
                {/* Pool List */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Select Pool
                  </label>

                  {poolsLoading ? (
                    <div className="space-y-2">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <div
                          key={i}
                          className="h-12 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse"
                        />
                      ))}
                    </div>
                  ) : !pools || pools.length === 0 ? (
                    <div className="text-center py-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                      <Users className="w-8 h-8 text-gray-400 dark:text-gray-500 mx-auto mb-2" />
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        No pools yet. Create one below.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {pools.map((pool) => (
                        <label
                          key={pool.id}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-colors ${
                            selectedPoolId === pool.id
                              ? "border-black dark:border-white bg-gray-50 dark:bg-gray-800"
                              : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                          }`}
                        >
                          <input
                            type="radio"
                            name="pool"
                            value={pool.id}
                            checked={selectedPoolId === pool.id}
                            onChange={() => setSelectedPoolId(pool.id)}
                            className="accent-black dark:accent-white"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                              {pool.name}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {pool._count?.members ?? 0} member
                              {(pool._count?.members ?? 0) !== 1 ? "s" : ""}
                            </p>
                          </div>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Inline Create Pool */}
                {showInlineCreate ? (
                  <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 space-y-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        New Pool
                      </span>
                      <button
                        type="button"
                        onClick={() => setShowInlineCreate(false)}
                        className="text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                    <input
                      type="text"
                      value={newPoolName}
                      onChange={(e) => setNewPoolName(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 dark:bg-gray-800 dark:text-white"
                      placeholder="Pool name"
                      autoFocus
                    />
                    <input
                      type="text"
                      value={newPoolDescription}
                      onChange={(e) => setNewPoolDescription(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 dark:bg-gray-800 dark:text-white"
                      placeholder="Description (optional)"
                    />
                    <button
                      type="button"
                      onClick={handleCreatePool}
                      disabled={
                        !newPoolName.trim() || createPoolMutation.isPending
                      }
                      className="w-full py-2 bg-black dark:bg-white text-white dark:text-gray-950 text-sm font-medium rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-50"
                    >
                      {createPoolMutation.isPending
                        ? "Creating..."
                        : "Create Pool"}
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowInlineCreate(true)}
                    className="flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                  >
                    <FolderPlus className="w-4 h-4" />
                    Create new pool
                  </button>
                )}

                {/* Notes */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Notes
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 min-h-[80px] text-sm dark:bg-gray-800 dark:text-white"
                    placeholder="Add notes about this candidate..."
                  />
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="px-4 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={
                      !selectedPoolId || addMemberMutation.isPending
                    }
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-black dark:bg-white text-white dark:text-gray-950 text-sm font-medium rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-50"
                  >
                    <Plus className="w-4 h-4" />
                    {addMemberMutation.isPending ? "Saving..." : "Save to Pool"}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
