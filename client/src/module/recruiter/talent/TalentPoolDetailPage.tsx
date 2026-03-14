import { useState } from "react";
import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  ArrowLeft,
  Users,
  MapPin,
  GraduationCap,
  Trash2,
  Save,
  Pencil,
  X,
  StickyNote,
} from "lucide-react";
import toast from "react-hot-toast";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { TalentPool, TalentPoolMember } from "../../../lib/types";

export default function TalentPoolDetailPage() {
  const { poolId } = useParams();
  const queryClient = useQueryClient();
  const numericPoolId = Number(poolId);

  const [editing, setEditing] = useState(false);
  const [editForm, setEditForm] = useState({ name: "", description: "" });
  const [memberNotes, setMemberNotes] = useState<Record<number, string>>({});
  const [editingNoteId, setEditingNoteId] = useState<number | null>(null);

  const { data: pool, isLoading } = useQuery({
    queryKey: queryKeys.talentPools.detail(numericPoolId),
    queryFn: async () => {
      const res = await api.get(`/recruiter/talent-pools/${poolId}`);
      return res.data as TalentPool;
    },
    enabled: !!poolId,
  });

  const updatePoolMutation = useMutation({
    mutationFn: async (payload: { name: string; description: string }) => {
      const res = await api.put(`/recruiter/talent-pools/${poolId}`, payload);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.talentPools.detail(numericPoolId),
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.talentPools.list(),
      });
      setEditing(false);
      toast.success("Pool updated");
    },
    onError: () => {
      toast.error("Failed to update pool");
    },
  });

  const removeMemberMutation = useMutation({
    mutationFn: async (memberId: number) => {
      await api.delete(
        `/recruiter/talent-pools/${poolId}/members/${memberId}`
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.talentPools.detail(numericPoolId),
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.talentPools.list(),
      });
      toast.success("Member removed");
    },
    onError: () => {
      toast.error("Failed to remove member");
    },
  });

  const updateNotesMutation = useMutation({
    mutationFn: async ({
      memberId,
      notes,
    }: {
      memberId: number;
      notes: string;
    }) => {
      await api.patch(
        `/recruiter/talent-pools/${poolId}/members/${memberId}`,
        { notes }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.talentPools.detail(numericPoolId),
      });
      setEditingNoteId(null);
      toast.success("Notes updated");
    },
    onError: () => {
      toast.error("Failed to update notes");
    },
  });

  const startEditing = () => {
    if (!pool) return;
    setEditForm({ name: pool.name, description: pool.description || "" });
    setEditing(true);
  };

  const handleUpdatePool = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editForm.name.trim()) return;
    updatePoolMutation.mutate(editForm);
  };

  const startEditingNote = (member: TalentPoolMember) => {
    setEditingNoteId(member.id);
    setMemberNotes((prev) => ({
      ...prev,
      [member.id]: member.notes || "",
    }));
  };

  const saveNote = (memberId: number) => {
    updateNotesMutation.mutate({
      memberId,
      notes: memberNotes[memberId] || "",
    });
  };

  if (isLoading) {
    return (
      <div className="animate-pulse space-y-6">
        <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-48" />
        <div className="h-40 bg-gray-200 dark:bg-gray-800 rounded-2xl" />
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="h-28 bg-gray-200 dark:bg-gray-800 rounded-2xl"
            />
          ))}
        </div>
      </div>
    );
  }

  if (!pool) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500 dark:text-gray-400">Pool not found.</p>
        <Link
          to="/recruiters/talent-pools"
          className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline mt-2 inline-block no-underline"
        >
          Back to pools
        </Link>
      </div>
    );
  }

  const members = pool.members || [];

  return (
    <div>
      {/* Back Link */}
      <Link
        to="/recruiters/talent-pools"
        className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500 hover:text-black dark:hover:text-white mb-4 no-underline"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Pools
      </Link>

      {/* Pool Info */}
      {editing ? (
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={handleUpdatePool}
          className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-6 mb-6 space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Pool Name
            </label>
            <input
              type="text"
              value={editForm.name}
              onChange={(e) =>
                setEditForm({ ...editForm, name: e.target.value })
              }
              className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 dark:bg-gray-800 dark:text-white"
              required
              autoFocus
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Description
            </label>
            <textarea
              value={editForm.description}
              onChange={(e) =>
                setEditForm({ ...editForm, description: e.target.value })
              }
              className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 min-h-[80px] dark:bg-gray-800 dark:text-white"
              placeholder="Optional description..."
            />
          </div>
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setEditing(false)}
              className="px-4 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={updatePoolMutation.isPending}
              className="px-6 py-2.5 bg-black dark:bg-white text-white dark:text-gray-950 text-sm font-medium rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-50"
            >
              {updatePoolMutation.isPending ? "Saving..." : "Save"}
            </button>
          </div>
        </motion.form>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-6 mb-6"
        >
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {pool.name}
              </h1>
              {pool.description && (
                <p className="text-gray-500 dark:text-gray-400">
                  {pool.description}
                </p>
              )}
              <div className="flex items-center gap-4 mt-3">
                <span className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                  <Users className="w-4 h-4" />
                  {members.length} member{members.length !== 1 ? "s" : ""}
                </span>
                <span className="text-sm text-gray-400 dark:text-gray-500">
                  Created {new Date(pool.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
            <button
              onClick={startEditing}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-gray-200 dark:border-gray-700 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <Pencil className="w-4 h-4" />
              Edit
            </button>
          </div>
        </motion.div>
      )}

      {/* Members */}
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Members
      </h2>

      {members.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 text-center">
          <div className="w-14 h-14 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-3">
            <Users className="w-7 h-7 text-gray-400 dark:text-gray-500" />
          </div>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
            No members yet
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs">
            Use the Talent Search to find candidates and save them to this pool.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {members.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-5"
            >
              <div className="flex items-start gap-4">
                {/* Avatar */}
                {member.student.profilePic ? (
                  <img
                    src={member.student.profilePic}
                    alt={member.student.name}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                      {member.student.name
                        .split(" ")
                        .map((p) => p[0])
                        .slice(0, 2)
                        .join("")
                        .toUpperCase()}
                    </span>
                  </div>
                )}

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <Link
                      to={`/profile/${member.student.id}`}
                      className="font-semibold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors no-underline"
                    >
                      {member.student.name}
                    </Link>
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                      {member.student.email}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {member.student.college && (
                      <span className="flex items-center gap-1">
                        <GraduationCap className="w-3.5 h-3.5" />
                        {member.student.college}
                        {member.student.graduationYear && (
                          <span className="text-gray-400 dark:text-gray-500">
                            ({member.student.graduationYear})
                          </span>
                        )}
                      </span>
                    )}
                    {member.student.location && (
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {member.student.location}
                      </span>
                    )}
                  </div>

                  {/* Skills */}
                  {member.student.skills && member.student.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {member.student.skills.slice(0, 8).map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-2 py-1 rounded-md font-medium bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                        >
                          {skill}
                        </span>
                      ))}
                      {member.student.skills.length > 8 && (
                        <span className="text-xs text-gray-400 dark:text-gray-500 px-2 py-1">
                          +{member.student.skills.length - 8} more
                        </span>
                      )}
                    </div>
                  )}

                  {/* Notes */}
                  {editingNoteId === member.id ? (
                    <div className="flex items-start gap-2">
                      <textarea
                        value={memberNotes[member.id] ?? ""}
                        onChange={(e) =>
                          setMemberNotes((prev) => ({
                            ...prev,
                            [member.id]: e.target.value,
                          }))
                        }
                        className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 dark:bg-gray-800 dark:text-white min-h-[60px]"
                        placeholder="Add notes about this candidate..."
                        autoFocus
                      />
                      <div className="flex flex-col gap-1">
                        <button
                          onClick={() => saveNote(member.id)}
                          disabled={updateNotesMutation.isPending}
                          className="p-2 rounded-lg bg-black dark:bg-white text-white dark:text-gray-950 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-50"
                          title="Save notes"
                        >
                          <Save className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setEditingNoteId(null)}
                          className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                          title="Cancel"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-start gap-2">
                      {member.notes ? (
                        <p className="text-sm text-gray-500 dark:text-gray-400 italic flex items-start gap-1.5">
                          <StickyNote className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-amber-500" />
                          {member.notes}
                        </p>
                      ) : (
                        <button
                          onClick={() => startEditingNote(member)}
                          className="text-xs text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                        >
                          + Add notes
                        </button>
                      )}
                      {member.notes && (
                        <button
                          onClick={() => startEditingNote(member)}
                          className="p-1 rounded text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors flex-shrink-0"
                          title="Edit notes"
                        >
                          <Pencil className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-xs text-gray-400 dark:text-gray-500">
                    Added {new Date(member.addedAt).toLocaleDateString()}
                  </span>
                  <button
                    onClick={() => removeMemberMutation.mutate(member.id)}
                    disabled={removeMemberMutation.isPending}
                    className="p-2 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                    title="Remove member"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
