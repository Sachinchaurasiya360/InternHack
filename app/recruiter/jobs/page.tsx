/**
 * Jobs Listing Page
 * Route: /recruiter/jobs
 *
 * Displays all jobs created by the recruiter with filtering and search
 */

import Link from "next/link";
import { requireRecruiter } from "@/packages/auth";
import { getRecruiterJobsAction } from "@/packages/recruiter";
import { redirect } from "next/navigation";
import { JobsFilterClient } from "./_components/JobsFilterClient";
import { JobCard } from "./_components/JobCard";

interface PageProps {
  searchParams: Promise<{
    type?: string;
    isActive?: string;
    search?: string;
  }>;
}

export default async function RecruiterJobsPage({ searchParams }: PageProps) {
  // Require recruiter authentication
  try {
    await requireRecruiter();
  } catch (error) {
    redirect("/login");
  }

  const params = await searchParams;

  // Build filters
  const filters = {
    type: params.type as any,
    isActive: params.isActive ? params.isActive === "true" : undefined,
    search: params.search,
  };

  // Fetch jobs
  const result = await getRecruiterJobsAction(filters);
  const jobs = result.success ? result.data : [];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">My Job Postings</h1>
          <p className="text-gray-600">{jobs.length} jobs found</p>
        </div>
        <Link
          href="/recruiter/jobs/create"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          + Create New Job
        </Link>
      </div>

      {/* Filters */}
      <JobsFilterClient initialFilters={filters} />

      {/* Jobs List */}
      <div className="mt-6 space-y-4">
        {jobs.length > 0 ? (
          jobs.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <div className="text-gray-400 text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No jobs found
            </h3>
            <p className="text-gray-600 mb-6">
              {params.search || params.type || params.isActive
                ? "Try adjusting your filters"
                : "Create your first job posting to get started"}
            </p>
            <Link
              href="/recruiter/jobs/create"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Create Job
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
