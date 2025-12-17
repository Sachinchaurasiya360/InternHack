/**
 * Recruiter Dashboard Home Page
 * Route: /recruiter
 * 
 * Shows overview of recruiter's posted jobs and quick actions
 */

import Link from 'next/link';
import { getRecruiterStatsAction, getRecruiterJobsAction } from '@/packages/recruiter';
import { requireRecruiter } from '@/packages/auth';
import { redirect } from 'next/navigation';

export default async function RecruiterPage() {
  // Require recruiter authentication
  try {
    await requireRecruiter();
  } catch (error) {
    redirect('/login'); // Redirect to login if not authenticated
  }

  // Fetch dashboard statistics
  const statsResult = await getRecruiterStatsAction();
  const stats = statsResult.success ? statsResult.data : {
    totalJobs: 0,
    activeJobs: 0,
    totalApplications: 0,
    pendingApplications: 0,
    shortlistedApplications: 0,
  };

  // Fetch recent jobs
  const jobsResult = await getRecruiterJobsAction();
  const recentJobs = jobsResult.success ? jobsResult.data.slice(0, 5) : [];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome to Recruiter Dashboard</h1>
        <p className="text-gray-600">Manage your job postings and applications</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Link 
          href="/recruiter/jobs/create"
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
        >
          <div className="text-blue-600 text-3xl mb-3">+</div>
          <h3 className="text-lg font-semibold mb-2">Create New Job</h3>
          <p className="text-gray-600 text-sm">Post a new job opportunity</p>
        </Link>

        <Link
          href="/recruiter/jobs"
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
        >
          <div className="text-green-600 text-3xl mb-3">📋</div>
          <h3 className="text-lg font-semibold mb-2">My Jobs</h3>
          <p className="text-gray-600 text-sm">View and manage {stats.totalJobs} postings</p>
        </Link>

        <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <div className="text-purple-600 text-3xl mb-3">👥</div>
          <h3 className="text-lg font-semibold mb-2">Applications</h3>
          <p className="text-gray-600 text-sm">{stats.totalApplications} total applications</p>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded">
            <div className="text-2xl font-bold text-blue-600">{stats.totalJobs}</div>
            <div className="text-sm text-gray-600">Total Jobs</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded">
            <div className="text-2xl font-bold text-green-600">{stats.activeJobs}</div>
            <div className="text-sm text-gray-600">Active Jobs</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded">
            <div className="text-2xl font-bold text-purple-600">{stats.totalApplications}</div>
            <div className="text-sm text-gray-600">Total Applications</div>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded">
            <div className="text-2xl font-bold text-yellow-600">{stats.pendingApplications}</div>
            <div className="text-sm text-gray-600">Pending Review</div>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded">
            <div className="text-2xl font-bold text-orange-600">{stats.shortlistedApplications}</div>
            <div className="text-sm text-gray-600">Shortlisted</div>
          </div>
        </div>
      </div>

      {/* Recent Jobs */}
      {recentJobs.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Recent Job Postings</h2>
            <Link 
              href="/recruiter/jobs" 
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              View All →
            </Link>
          </div>
          <div className="space-y-3">
            {recentJobs.map((job) => (
              <Link
                key={job.id}
                href={`/recruiter/jobs/${job.id}`}
                className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{job.title}</h3>
                    <p className="text-sm text-gray-600">{job.company} • {job.location}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className={`px-3 py-1 text-xs rounded-full ${
                      job.isActive 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {job.isActive ? 'Active' : 'Closed'}
                    </span>
                    {job._count && (
                      <span className="text-xs text-gray-500">
                        {job._count.applications} applications
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {recentJobs.length === 0 && (
        <div className="bg-white rounded-lg shadow-md p-12 text-center">
          <div className="text-gray-400 text-5xl mb-4">📝</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No jobs posted yet</h3>
          <p className="text-gray-600 mb-6">Start by creating your first job posting</p>
          <Link
            href="/recruiter/jobs/create"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Create Your First Job
          </Link>
        </div>
      )}
    </div>
  );
}
