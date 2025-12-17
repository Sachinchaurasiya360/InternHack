/**
 * Job Card Component
 * Displays a single job in the listing
 */

"use client";

import Link from "next/link";
import { JobResponse } from "@/types";
import { toggleJobStatusAction, deleteJobAction } from "@/packages/recruiter";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface JobCardProps {
  job: JobResponse;
}

export function JobCard({ job }: JobCardProps) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);
  const [isToggling, setIsToggling] = useState(false);

  const handleToggleStatus = async () => {
    if (isToggling) return;

    setIsToggling(true);
    const result = await toggleJobStatusAction(job.id);

    if (result.success) {
      router.refresh();
    } else {
      alert(result.error);
    }
    setIsToggling(false);
  };

  const handleDelete = async () => {
    if (isDeleting) return;

    if (
      !confirm(
        `Are you sure you want to delete "${job.title}"? This action cannot be undone.`
      )
    ) {
      return;
    }

    setIsDeleting(true);
    const result = await deleteJobAction(job.id);

    if (result.success) {
      router.refresh();
    } else {
      alert(result.error);
      setIsDeleting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <Link
              href={`/recruiter/jobs/${job.id}`}
              className="text-xl font-semibold text-gray-900 hover:text-blue-600"
            >
              {job.title}
            </Link>
            <span
              className={`px-3 py-1 text-xs rounded-full ${
                job.isActive
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {job.isActive ? "Active" : "Closed"}
            </span>
            <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
              {job.type.replace("_", " ")}
            </span>
          </div>

          <p className="text-gray-600 mb-3">
            {job.company} • {job.location}
          </p>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>
              📅 Posted {new Date(job.createdAt).toLocaleDateString()}
            </span>
            {job._count && (
              <span>👥 {job._count.applications} applications</span>
            )}
            <span>⏱️ {job.duration}</span>
          </div>
        </div>

        <div className="flex gap-2 ml-4">
          <Link
            href={`/recruiter/jobs/${job.id}`}
            className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            View Details
          </Link>

          <Link
            href={`/recruiter/jobs/${job.id}/edit`}
            className="px-4 py-2 text-sm border border-blue-300 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Edit
          </Link>

          <button
            onClick={handleToggleStatus}
            disabled={isToggling}
            className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
          >
            {isToggling ? "..." : job.isActive ? "Close" : "Open"}
          </button>

          <button
            onClick={handleDelete}
            disabled={isDeleting}
            className="px-4 py-2 text-sm border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors disabled:opacity-50"
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}
