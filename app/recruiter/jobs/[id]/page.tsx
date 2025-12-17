/**
 * Job Details Page
 * Route: /recruiter/jobs/[id]
 *
 * Shows detailed information about a specific job and its applications
 */

import Link from "next/link";
import { redirect } from "next/navigation";
import { requireRecruiter } from "@/packages/auth";
import {
  getJobByIdAction,
  getJobApplicationsAction,
} from "@/packages/recruiter";
import { JobActions } from "../_components/JobActions";
import { ApplicationsList } from "../_components/ApplicationsList";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function JobDetailsPage({ params }: PageProps) {
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

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-6">
        <Link
          href="/recruiter/jobs"
          className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
        >
          ← Back to Jobs
        </Link>

        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold">{job.title}</h1>
              <span
                className={`px-3 py-1 text-sm rounded-full ${
                  job.isActive
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {job.isActive ? "Active" : "Closed"}
              </span>
            </div>
            <p className="text-gray-600">
              {job.company} • {job.location}
            </p>
          </div>

          <JobActions job={job} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Job Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Info */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Job Information</h2>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Type</p>
                <p className="font-medium">{job.type.replace("_", " ")}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Duration</p>
                <p className="font-medium">{job.duration}</p>
              </div>
              {job.salary && (
                <div>
                  <p className="text-sm text-gray-600">Salary</p>
                  <p className="font-medium">{job.salary}</p>
                </div>
              )}
              <div>
                <p className="text-sm text-gray-600">Posted</p>
                <p className="font-medium">
                  {new Date(job.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>

            {job.contactDetails && (
              <div className="mt-4 pt-4 border-t">
                <p className="text-sm text-gray-600">Contact Details</p>
                <p className="font-medium">{job.contactDetails}</p>
              </div>
            )}

            {job.applyLink && (
              <div className="mt-4 pt-4 border-t">
                <p className="text-sm text-gray-600">Application Link</p>
                <a
                  href={job.applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 break-all"
                >
                  {job.applyLink}
                </a>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Description</h2>
            <div className="prose max-w-none text-gray-700 whitespace-pre-wrap">
              {job.description}
            </div>
          </div>

          {/* Requirements */}
          {job.requirements && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Requirements</h2>
              <div className="prose max-w-none text-gray-700 whitespace-pre-wrap">
                {job.requirements}
              </div>
            </div>
          )}

          {/* Responsibilities */}
          {job.responsibilities && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Responsibilities</h2>
              <div className="prose max-w-none text-gray-700 whitespace-pre-wrap">
                {job.responsibilities}
              </div>
            </div>
          )}

          {/* Benefits */}
          {job.benefits && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Benefits</h2>
              <div className="prose max-w-none text-gray-700 whitespace-pre-wrap">
                {job.benefits}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar - Applications Summary */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Applications</h2>

            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="text-sm text-gray-600">Total</span>
                <span className="text-lg font-bold">{applications.length}</span>
              </div>

              <div className="flex justify-between items-center p-3 bg-yellow-50 rounded">
                <span className="text-sm text-gray-600">Pending</span>
                <span className="text-lg font-bold text-yellow-600">
                  {applications.filter((a) => a.status === "PENDING").length}
                </span>
              </div>

              <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                <span className="text-sm text-gray-600">Reviewing</span>
                <span className="text-lg font-bold text-blue-600">
                  {applications.filter((a) => a.status === "REVIEWING").length}
                </span>
              </div>

              <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                <span className="text-sm text-gray-600">Shortlisted</span>
                <span className="text-lg font-bold text-green-600">
                  {
                    applications.filter((a) => a.status === "SHORTLISTED")
                      .length
                  }
                </span>
              </div>
            </div>

            <Link
              href={`/recruiter/jobs/${id}/applications`}
              className="mt-4 block w-full px-4 py-2 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Applications
            </Link>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold mb-3">Quick Actions</h3>
            <div className="space-y-2">
              <Link
                href={`/recruiter/jobs/${id}/edit`}
                className="block w-full px-4 py-2 border border-blue-300 text-blue-600 text-center rounded-lg hover:bg-blue-50 transition-colors"
              >
                Edit Job
              </Link>
              <Link
                href={`/recruiter/jobs/${id}/applications`}
                className="block w-full px-4 py-2 border border-gray-300 text-gray-700 text-center rounded-lg hover:bg-gray-50 transition-colors"
              >
                Manage Applications
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Applications Preview */}
      {applications.length > 0 && (
        <div className="mt-6">
          <ApplicationsList
            applications={applications.slice(0, 5)}
            jobId={id}
            showActions={false}
          />

          {applications.length > 5 && (
            <div className="mt-4 text-center">
              <Link
                href={`/recruiter/jobs/${id}/applications`}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                View all {applications.length} applications →
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
