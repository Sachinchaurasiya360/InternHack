import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  ArrowLeft, Building2, Calendar, Users, Clock, GraduationCap,
  BookOpen, TrendingUp, CheckCircle, Loader2,
} from "lucide-react";
import toast from "@/components/ui/toast";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { CampusDrive, CampusDriveRegistration } from "../../../lib/types";

const statusColors: Record<string, string> = {
  OPEN: "bg-green-500/10 text-green-400 border-green-500/20",
  DRAFT: "bg-gray-500/10 text-gray-400 border-gray-500/20",
  CLOSED: "bg-red-500/10 text-red-400 border-red-500/20",
  COMPLETED: "bg-blue-500/10 text-blue-400 border-blue-500/20",
};

const registrationStatusColors: Record<string, string> = {
  REGISTERED: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  SHORTLISTED: "bg-green-500/10 text-green-600 dark:text-green-400",
  REJECTED: "bg-red-500/10 text-red-600 dark:text-red-400",
};

export default function CampusDriveDetailPage() {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: queryKeys.campusDrives.detail(Number(id)),
    queryFn: async () => {
      const res = await api.get(`/student/campus-drives/${id}`);
      return res.data as { drive: CampusDrive; registration: CampusDriveRegistration | null };
    },
    enabled: !!id,
  });

  const registerMutation = useMutation({
    mutationFn: () => api.post(`/student/campus-drives/${id}/register`),
    onSuccess: () => {
      toast.success("Registered successfully!");
      queryClient.invalidateQueries({ queryKey: queryKeys.campusDrives.detail(Number(id)) });
    },
    onError: (err: any) => {
      toast.error(err.response?.data?.message || "Failed to register");
    },
  });

  const drive = data?.drive;
  const registration = data?.registration;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-6 h-6 text-gray-400 animate-spin" />
      </div>
    );
  }

  if (!drive) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500">Drive not found</p>
        <Link to="/student/campus-drives" className="text-indigo-500 hover:text-indigo-400 text-sm mt-2 inline-block no-underline">
          Back to drives
        </Link>
      </div>
    );
  }

  const isPastDeadline = new Date(drive.registrationDeadline) < new Date();

  return (
    <div className="pb-12">
      <Link
        to="/student/campus-drives"
        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white mb-6 no-underline transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Campus Drives
      </Link>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        {/* Header Card */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm mb-6 p-8">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-gray-950 dark:bg-white flex items-center justify-center text-white dark:text-gray-950 text-lg font-bold">
                  {drive.company?.charAt(0) || "C"}
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{drive.title}</h1>
                  <p className="text-base text-gray-500">{drive.company}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className={`text-xs font-medium px-3 py-1.5 rounded-lg border ${statusColors[drive.status] || "bg-gray-100 text-gray-600"}`}>
                  {drive.status}
                </span>
                <span className="flex items-center gap-1.5 text-sm bg-gray-50 dark:bg-gray-800 px-3 py-1.5 rounded-lg">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Deadline: {new Date(drive.registrationDeadline).toLocaleDateString()}
                  </span>
                </span>
                {drive._count && (
                  <span className="flex items-center gap-1.5 text-sm bg-gray-50 dark:bg-gray-800 px-3 py-1.5 rounded-lg">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600 dark:text-gray-400">{drive._count.registrations} registered</span>
                  </span>
                )}
                {drive.driveDate && (
                  <span className="flex items-center gap-1.5 text-sm bg-gray-50 dark:bg-gray-800 px-3 py-1.5 rounded-lg">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600 dark:text-gray-400">Drive: {new Date(drive.driveDate).toLocaleDateString()}</span>
                  </span>
                )}
              </div>
            </div>

            <div className="shrink-0">
              {registration ? (
                <div className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium ${registrationStatusColors[registration.status] || "bg-gray-100 text-gray-600"}`}>
                  <CheckCircle className="w-4 h-4" />
                  {registration.status === "REGISTERED" && "Registered"}
                  {registration.status === "SHORTLISTED" && "Shortlisted"}
                  {registration.status === "REJECTED" && "Not Selected"}
                </div>
              ) : drive.status === "OPEN" && !isPastDeadline ? (
                <button
                  onClick={() => registerMutation.mutate()}
                  disabled={registerMutation.isPending}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-950 font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors text-sm disabled:opacity-50"
                >
                  {registerMutation.isPending ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <CheckCircle className="w-4 h-4" />
                  )}
                  Register
                </button>
              ) : (
                <span className="text-sm text-gray-400 px-5 py-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  {isPastDeadline ? "Registration closed" : "Not accepting registrations"}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm mb-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <div className="w-1.5 h-6 bg-gray-900 dark:bg-white rounded-full" />
            About this Drive
          </h2>
          <div className="text-gray-600 dark:text-gray-400 whitespace-pre-wrap leading-relaxed">
            {drive.description}
          </div>
        </div>

        {/* Eligibility */}
        <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm mb-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <div className="w-1.5 h-6 bg-gray-900 dark:bg-white rounded-full" />
            Eligibility Criteria
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Target Colleges */}
            {drive.targetColleges.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Target Colleges</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {drive.targetColleges.map((college) => (
                    <span key={college} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg text-xs font-medium">
                      {college}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Eligible Branches */}
            {drive.eligibleBranches.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Eligible Branches</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {drive.eligibleBranches.map((branch) => (
                    <span key={branch} className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-lg text-xs font-medium">
                      {branch}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Min CGPA */}
            {drive.minCGPA != null && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Minimum CGPA</span>
                </div>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">{drive.minCGPA}</span>
                <span className="text-sm text-gray-500 ml-1">/ 10</span>
              </div>
            )}

            {/* Eligible Graduation Years */}
            {drive.eligibleGraduationYears.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Graduation Years</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {drive.eligibleGraduationYears.map((year) => (
                    <span key={year} className="px-3 py-1 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 rounded-lg text-xs font-medium">
                      {year}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Registration Info */}
        {registration && (
          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-gray-900 dark:bg-white rounded-full" />
              Your Registration
            </h2>
            <div className="flex items-center gap-4">
              <div className={`px-4 py-2 rounded-lg text-sm font-medium ${registrationStatusColors[registration.status] || "bg-gray-100 text-gray-600"}`}>
                {registration.status}
              </div>
              <span className="text-sm text-gray-500">
                Registered on {new Date(registration.registeredAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
