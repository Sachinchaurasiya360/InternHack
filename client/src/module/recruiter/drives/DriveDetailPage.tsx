import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { motion } from "framer-motion";
import {
  useQuery,
  useMutation,
  useQueryClient,
  keepPreviousData,
} from "@tanstack/react-query";
import {
  ArrowLeft,
  Trash2,
  Calendar,
  Users,
  Clock,
  Building2,
  GraduationCap,
  BookOpen,
  ChevronRight,
  User,
  Mail,
} from "lucide-react";
import toast from "react-hot-toast";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type {
  CampusDrive,
  CampusDriveRegistration,
  CampusDriveStatus,
  CampusRegistrationStatus,
  Pagination,
} from "../../../lib/types";

const statusColors: Record<string, string> = {
  DRAFT: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
  OPEN: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  CLOSED: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  COMPLETED:
    "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
};

const regStatusColors: Record<string, string> = {
  REGISTERED:
    "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  SHORTLISTED:
    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  REJECTED: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
};

const STATUS_FLOW: CampusDriveStatus[] = [
  "DRAFT",
  "OPEN",
  "CLOSED",
  "COMPLETED",
];

function getNextStatuses(current: CampusDriveStatus): CampusDriveStatus[] {
  const idx = STATUS_FLOW.indexOf(current);
  if (idx === -1 || idx >= STATUS_FLOW.length - 1) return [];
  return STATUS_FLOW.slice(idx + 1);
}

export default function DriveDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const driveId = Number(id);

  const [regPage, setRegPage] = useState(1);

  // Fetch drive detail
  const {
    data: driveData,
    isLoading: driveLoading,
    isError: driveError,
  } = useQuery({
    queryKey: queryKeys.campusDrives.detail(driveId),
    queryFn: async () => {
      const res = await api.get(`/campus-drives/${driveId}`);
      return res.data as { drive: CampusDrive };
    },
    enabled: !isNaN(driveId),
  });

  // Fetch registrations
  const { data: regData, isLoading: regLoading } = useQuery({
    queryKey: [...queryKeys.campusDrives.registrations(driveId), regPage],
    queryFn: async () => {
      const res = await api.get(`/campus-drives/${driveId}/registrations`, {
        params: { page: regPage, limit: 10 },
      });
      return res.data as {
        registrations: CampusDriveRegistration[];
        pagination: Pagination;
      };
    },
    enabled: !isNaN(driveId),
    placeholderData: keepPreviousData,
  });

  // Status mutation
  const statusMutation = useMutation({
    mutationFn: async (status: CampusDriveStatus) => {
      const res = await api.patch(`/campus-drives/${driveId}/status`, {
        status,
      });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.campusDrives.detail(driveId),
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.campusDrives.recruiter(),
      });
      toast.success("Drive status updated");
    },
    onError: (err: unknown) => {
      const e = err as { response?: { data?: { message?: string } } };
      toast.error(e.response?.data?.message || "Failed to update status");
    },
  });

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: async () => {
      await api.delete(`/campus-drives/${driveId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.campusDrives.recruiter(),
      });
      toast.success("Campus drive deleted");
      navigate("/recruiters/campus-drives");
    },
    onError: (err: unknown) => {
      const e = err as { response?: { data?: { message?: string } } };
      toast.error(e.response?.data?.message || "Failed to delete drive");
    },
  });

  // Registration status mutation
  const regStatusMutation = useMutation({
    mutationFn: async ({
      regId,
      status,
    }: {
      regId: number;
      status: CampusRegistrationStatus;
    }) => {
      const res = await api.patch(
        `/campus-drives/${driveId}/registrations/${regId}/status`,
        { status },
      );
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.campusDrives.registrations(driveId),
      });
      toast.success("Registration status updated");
    },
    onError: (err: unknown) => {
      const e = err as { response?: { data?: { message?: string } } };
      toast.error(
        e.response?.data?.message || "Failed to update registration",
      );
    },
  });

  const handleDelete = () => {
    if (!confirm("Are you sure you want to delete this draft drive?")) return;
    deleteMutation.mutate();
  };

  if (driveLoading) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="h-8 w-20 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse mb-6" />
        <div className="h-64 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 animate-pulse" />
      </div>
    );
  }

  if (driveError || !driveData?.drive) {
    return (
      <div className="max-w-4xl mx-auto text-center py-20">
        <p className="text-gray-500 text-lg">Campus drive not found</p>
        <button
          onClick={() => navigate("/recruiters/campus-drives")}
          className="mt-4 text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          Back to drives
        </button>
      </div>
    );
  }

  const drive = driveData.drive;
  const registrations = regData?.registrations ?? [];
  const regPagination = regData?.pagination;
  const nextStatuses = getNextStatuses(drive.status);

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={() => navigate("/recruiters/campus-drives")}
        className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500 hover:text-black dark:hover:text-white mb-4 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Drives
      </button>

      {/* Drive Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm mb-6"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start gap-4 min-w-0 flex-1">
            <div className="w-12 h-12 rounded-xl bg-gray-950 dark:bg-white flex items-center justify-center shrink-0 text-white dark:text-gray-950 text-lg font-bold">
              {drive.company?.charAt(0)?.toUpperCase() || "C"}
            </div>
            <div className="min-w-0">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                {drive.title}
              </h1>
              <p className="text-sm text-gray-500">{drive.company}</p>
            </div>
          </div>
          <span
            className={`text-xs font-medium px-3 py-1.5 rounded-lg shrink-0 ${statusColors[drive.status]}`}
          >
            {drive.status}
          </span>
        </div>

        {drive.description && (
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
            {drive.description}
          </p>
        )}

        {/* Drive Meta */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-5">
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-3">
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
              <Calendar className="w-3.5 h-3.5" />
              Reg. Deadline
            </div>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              {new Date(drive.registrationDeadline).toLocaleDateString()}
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-3">
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
              <Clock className="w-3.5 h-3.5" />
              Drive Date
            </div>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              {drive.driveDate
                ? new Date(drive.driveDate).toLocaleDateString()
                : "TBD"}
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-3">
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
              <Users className="w-3.5 h-3.5" />
              Registrations
            </div>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              {drive._count?.registrations ?? 0}
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-3">
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
              <BookOpen className="w-3.5 h-3.5" />
              Min CGPA
            </div>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              {drive.minCGPA ?? "None"}
            </p>
          </div>
        </div>

        {/* Target Colleges */}
        {drive.targetColleges.length > 0 && (
          <div className="mb-4">
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
              <Building2 className="w-3.5 h-3.5" />
              Target Colleges
            </div>
            <div className="flex flex-wrap gap-2">
              {drive.targetColleges.map((college) => (
                <span
                  key={college}
                  className="px-2.5 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 rounded-lg text-xs font-medium"
                >
                  {college}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Eligible Branches */}
        {drive.eligibleBranches.length > 0 && (
          <div className="mb-4">
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
              <GraduationCap className="w-3.5 h-3.5" />
              Eligible Branches
            </div>
            <div className="flex flex-wrap gap-2">
              {drive.eligibleBranches.map((branch) => (
                <span
                  key={branch}
                  className="px-2.5 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-lg text-xs font-medium"
                >
                  {branch}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Eligible Graduation Years */}
        {drive.eligibleGraduationYears.length > 0 && (
          <div className="mb-5">
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
              <Calendar className="w-3.5 h-3.5" />
              Graduation Years
            </div>
            <div className="flex flex-wrap gap-2">
              {drive.eligibleGraduationYears.map((year) => (
                <span
                  key={year}
                  className="px-2.5 py-1 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 rounded-lg text-xs font-medium"
                >
                  {year}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
          {nextStatuses.map((status) => (
            <button
              key={status}
              onClick={() => statusMutation.mutate(status)}
              disabled={statusMutation.isPending}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium bg-black dark:bg-white text-white dark:text-gray-950 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-50"
            >
              Mark as {status}
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          ))}

          {drive.status === "DRAFT" && (
            <button
              onClick={handleDelete}
              disabled={deleteMutation.isPending}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 rounded-xl hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors disabled:opacity-50 ml-auto"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Delete Drive
            </button>
          )}
        </div>
      </motion.div>

      {/* Registrations Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm"
      >
        <div className="p-6 pb-4 border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Registrations
            </h2>
            <span className="text-sm text-gray-500">
              {regPagination?.total ?? 0} total
            </span>
          </div>
        </div>

        {regLoading ? (
          <div className="p-6 space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-16 bg-gray-50 dark:bg-gray-800 rounded-xl animate-pulse"
              />
            ))}
          </div>
        ) : registrations.length === 0 ? (
          <div className="text-center py-14">
            <Users className="w-10 h-10 mx-auto text-gray-300 dark:text-gray-600 mb-3" />
            <p className="text-gray-500 font-medium mb-1">
              No registrations yet
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              Students will appear here once they register for this drive
            </p>
          </div>
        ) : (
          <>
            <div className="divide-y divide-gray-50 dark:divide-gray-800">
              {registrations.map((reg, i) => (
                <motion.div
                  key={reg.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.04 }}
                  className="flex items-center justify-between px-6 py-4 hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    {reg.student?.profilePic ? (
                      <img
                        src={reg.student.profilePic}
                        alt={reg.student.name}
                        className="w-10 h-10 rounded-xl object-cover shrink-0"
                        onError={(e) => { e.currentTarget.style.display = "none"; }}
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0">
                        <User className="w-4 h-4 text-gray-400" />
                      </div>
                    )}
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                        {reg.student?.name || "Unknown Student"}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        {reg.student?.email && (
                          <span className="flex items-center gap-1 truncate">
                            <Mail className="w-3 h-3" />
                            {reg.student.email}
                          </span>
                        )}
                        {reg.student?.college && (
                          <span className="flex items-center gap-1 truncate">
                            <Building2 className="w-3 h-3" />
                            {reg.student.college}
                          </span>
                        )}
                        {reg.student?.graduationYear && (
                          <span className="shrink-0">
                            Grad: {reg.student.graduationYear}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 ml-4">
                    <span className="text-xs text-gray-400">
                      {new Date(reg.registeredAt).toLocaleDateString()}
                    </span>
                    <select
                      value={reg.status}
                      onChange={(e) =>
                        regStatusMutation.mutate({
                          regId: reg.id,
                          status: e.target
                            .value as CampusRegistrationStatus,
                        })
                      }
                      disabled={regStatusMutation.isPending}
                      className={`text-xs px-3 py-1.5 rounded-lg font-medium border-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 ${regStatusColors[reg.status]}`}
                    >
                      <option value="REGISTERED">Registered</option>
                      <option value="SHORTLISTED">Shortlisted</option>
                      <option value="REJECTED">Rejected</option>
                    </select>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Registrations Pagination */}
            {regPagination && regPagination.totalPages > 1 && (
              <div className="flex items-center justify-center gap-3 p-6 pt-4 border-t border-gray-50 dark:border-gray-800">
                <button
                  onClick={() => setRegPage(Math.max(1, regPage - 1))}
                  disabled={regPage === 1}
                  className="px-4 py-2 text-sm font-medium bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl disabled:opacity-30 hover:border-gray-300 dark:hover:border-gray-600 transition-colors dark:text-gray-300"
                >
                  Previous
                </button>
                <div className="flex items-center gap-1">
                  {Array.from(
                    { length: Math.min(regPagination.totalPages, 5) },
                    (_, i) => {
                      const p = i + 1;
                      return (
                        <button
                          key={p}
                          onClick={() => setRegPage(p)}
                          className={`w-9 h-9 rounded-xl text-sm font-medium transition-all ${
                            regPage === p
                              ? "bg-gray-950 dark:bg-white text-white dark:text-gray-950 shadow-md"
                              : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-gray-300"
                          }`}
                        >
                          {p}
                        </button>
                      );
                    },
                  )}
                </div>
                <button
                  onClick={() =>
                    setRegPage(
                      Math.min(regPagination.totalPages, regPage + 1),
                    )
                  }
                  disabled={regPage === regPagination.totalPages}
                  className="px-4 py-2 text-sm font-medium bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl disabled:opacity-30 hover:border-gray-300 dark:hover:border-gray-600 transition-colors dark:text-gray-300"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </motion.div>
    </div>
  );
}
