/**
 * Applications List Component
 * Displays list of job applications
 */

"use client";

import { JobApplicationResponse } from "@/types";
import { updateApplicationStatusAction } from "@/packages/recruiter";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface ApplicationsListProps {
  applications: JobApplicationResponse[];
  jobId: string;
  showActions?: boolean;
}

const STATUS_COLORS: Record<string, string> = {
  PENDING: "bg-yellow-100 text-yellow-700",
  REVIEWING: "bg-blue-100 text-blue-700",
  SHORTLISTED: "bg-green-100 text-green-700",
  INTERVIEWED: "bg-purple-100 text-purple-700",
  OFFERED: "bg-emerald-100 text-emerald-700",
  REJECTED: "bg-red-100 text-red-700",
  ACCEPTED: "bg-teal-100 text-teal-700",
  WITHDRAWN: "bg-gray-100 text-gray-700",
};

export function ApplicationsList({
  applications,
  jobId,
  showActions = true,
}: ApplicationsListProps) {
  const router = useRouter();
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const handleStatusChange = async (
    applicationId: string,
    newStatus: string
  ) => {
    setUpdatingId(applicationId);
    const result = await updateApplicationStatusAction(
      applicationId,
      newStatus
    );

    if (result.success) {
      router.refresh();
    } else {
      alert(result.error);
    }
    setUpdatingId(null);
  };

  if (applications.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-12 text-center">
        <div className="text-gray-400 text-5xl mb-4">📭</div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          No applications yet
        </h3>
        <p className="text-gray-600">
          Applications will appear here once candidates apply
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 bg-gray-50 border-b">
        <h2 className="text-lg font-semibold">
          Applications ({applications.length})
        </h2>
      </div>

      <div className="divide-y">
        {applications.map((application) => (
          <div
            key={application.id}
            className="p-6 hover:bg-gray-50 transition-colors"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-semibold text-lg">
                    {application.applicant.name}
                  </h3>
                  <span
                    className={`px-3 py-1 text-xs rounded-full ${
                      STATUS_COLORS[application.status]
                    }`}
                  >
                    {application.status.replace("_", " ")}
                  </span>
                </div>

                <p className="text-gray-600 mb-2">
                  {application.applicant.email}
                </p>

                <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-3">
                  {application.applicant.collegeName && (
                    <span>🎓 {application.applicant.collegeName}</span>
                  )}
                  {application.applicant.graduationYear && (
                    <span>
                      📅 Class of {application.applicant.graduationYear}
                    </span>
                  )}
                  <span>
                    📆 Applied{" "}
                    {new Date(application.createdAt).toLocaleDateString()}
                  </span>
                </div>

                {application.applicant.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {application.applicant.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {application.coverLetter && (
                  <details className="mt-3">
                    <summary className="cursor-pointer text-sm text-blue-600 hover:text-blue-800">
                      View Cover Letter
                    </summary>
                    <p className="mt-2 text-sm text-gray-700 whitespace-pre-wrap bg-gray-50 p-3 rounded">
                      {application.coverLetter}
                    </p>
                  </details>
                )}
              </div>

              <div className="ml-4 flex flex-col gap-2">
                {application.applicant.resumeUrl && (
                  <a
                    href={application.applicant.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 text-center"
                  >
                    View Resume
                  </a>
                )}

                {showActions && (
                  <select
                    value={application.status}
                    onChange={(e) =>
                      handleStatusChange(application.id, e.target.value)
                    }
                    disabled={updatingId === application.id}
                    className="px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                  >
                    <option value="PENDING">Pending</option>
                    <option value="REVIEWING">Reviewing</option>
                    <option value="SHORTLISTED">Shortlisted</option>
                    <option value="INTERVIEWED">Interviewed</option>
                    <option value="OFFERED">Offered</option>
                    <option value="REJECTED">Rejected</option>
                    <option value="ACCEPTED">Accepted</option>
                  </select>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
