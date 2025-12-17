/**
 * Job Applications Page
 * Route: /recruiter/jobs/[id]/applications
 *
 * Full page for managing all applications for a specific job
 */

import Link from "next/link";
import { redirect } from "next/navigation";
import { requireRecruiter } from "@/packages/auth";
import {
  getJobByIdAction,
  getJobApplicationsAction,
} from "@/packages/recruiter";
import { ApplicationsList } from "../../_components/ApplicationsList";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function JobApplicationsPage({ params }: PageProps) {
  try {
    await requireRecruiter();
  } catch (error) {
    redirect("/login");
  }

  const { id } = await params;

  // Fetch job details
  const jobResult = await getJobByIdAction(id);

  if (!jobResult.success) {
    redirect("/recruiter/jobs");
  }

  const job = jobResult.data;

  // Fetch applications
  const applicationsResult = await getJobApplicationsAction(id);
  const applications = applicationsResult.success
    ? applicationsResult.data
    : [];

  // Group applications by status
  const groupedApplications = {
    pending: applications.filter((a) => a.status === "PENDING"),
    reviewing: applications.filter((a) => a.status === "REVIEWING"),
    shortlisted: applications.filter((a) => a.status === "SHORTLISTED"),
    interviewed: applications.filter((a) => a.status === "INTERVIEWED"),
    offered: applications.filter((a) => a.status === "OFFERED"),
    rejected: applications.filter((a) => a.status === "REJECTED"),
    accepted: applications.filter((a) => a.status === "ACCEPTED"),
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-6">
        <Link
          href={`/recruiter/jobs/${id}`}
          className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
        >
          ← Back to Job Details
        </Link>

        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              Applications for {job.title}
            </h1>
            <p className="text-gray-600">
              {applications.length} total applications
            </p>
          </div>
        </div>
      </div>

      {/* Status Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-6">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-yellow-700">
            {groupedApplications.pending.length}
          </div>
          <div className="text-xs text-gray-600">Pending</div>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-blue-700">
            {groupedApplications.reviewing.length}
          </div>
          <div className="text-xs text-gray-600">Reviewing</div>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-green-700">
            {groupedApplications.shortlisted.length}
          </div>
          <div className="text-xs text-gray-600">Shortlisted</div>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-purple-700">
            {groupedApplications.interviewed.length}
          </div>
          <div className="text-xs text-gray-600">Interviewed</div>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-emerald-700">
            {groupedApplications.offered.length}
          </div>
          <div className="text-xs text-gray-600">Offered</div>
        </div>
        <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-teal-700">
            {groupedApplications.accepted.length}
          </div>
          <div className="text-xs text-gray-600">Accepted</div>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-red-700">
            {groupedApplications.rejected.length}
          </div>
          <div className="text-xs text-gray-600">Rejected</div>
        </div>
      </div>

      {/* Applications List */}
      <ApplicationsList
        applications={applications}
        jobId={id}
        showActions={true}
      />
    </div>
  );
}
