/**
 * Job Actions Component
 * Client component for job action buttons (toggle status, delete)
 */

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toggleJobStatusAction, deleteJobAction } from "@/packages/recruiter";
import { JobResponse } from "@/types";

interface JobActionsProps {
  job: JobResponse;
}

export function JobActions({ job }: JobActionsProps) {
  const router = useRouter();
  const [isToggling, setIsToggling] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

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
        `Are you sure you want to delete "${job.title}"? This will also delete all applications. This action cannot be undone.`
      )
    ) {
      return;
    }

    setIsDeleting(true);
    const result = await deleteJobAction(job.id);

    if (result.success) {
      router.push("/recruiter/jobs");
    } else {
      alert(result.error);
      setIsDeleting(false);
    }
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={handleToggleStatus}
        disabled={isToggling}
        className={`px-4 py-2 rounded-lg font-medium transition-colors disabled:opacity-50 ${
          job.isActive
            ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
            : "bg-green-100 text-green-700 hover:bg-green-200"
        }`}
      >
        {isToggling ? "Updating..." : job.isActive ? "Close Job" : "Reopen Job"}
      </button>

      <button
        onClick={handleDelete}
        disabled={isDeleting}
        className="px-4 py-2 bg-red-100 text-red-700 rounded-lg font-medium hover:bg-red-200 transition-colors disabled:opacity-50"
      >
        {isDeleting ? "Deleting..." : "Delete Job"}
      </button>
    </div>
  );
}
