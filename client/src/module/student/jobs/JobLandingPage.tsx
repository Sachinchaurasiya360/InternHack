import { useParams, Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { MapPin, IndianRupee, Clock, ArrowLeft, Briefcase } from "lucide-react";
import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
import { SEO } from "../../../components/SEO";
import { canonicalUrl } from "../../../lib/seo.utils";
import { breadcrumbSchema } from "../../../lib/structured-data";
import api from "../../../lib/axios";
import type { Job } from "../../../lib/types";

interface LandingMeta {
  title: string;
  description: string;
  totalJobs: number;
  tag: string;
  location?: string;
  slug: string;
}

interface LandingData {
  jobs: Job[];
  meta: LandingMeta;
}

export default function JobLandingPage() {
  const { slug } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["job-landing", slug],
    queryFn: () =>
      api.get(`/jobs/landing/${slug}`).then((r) => r.data as LandingData),
    enabled: !!slug,
  });

  const jobs = data?.jobs ?? [];
  const meta = data?.meta;

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-gray-950">
      {meta && (
        <SEO
          title={meta.title}
          description={meta.description}
          keywords={`${meta.tag.toLowerCase()} jobs, ${meta.location?.toLowerCase() || ""} internships, ${meta.tag.toLowerCase()} careers`}
          canonicalUrl={canonicalUrl(`/jobs/t/${slug}`)}
          structuredData={breadcrumbSchema([
            { name: "Jobs", url: canonicalUrl("/jobs") },
            { name: meta.title, url: canonicalUrl(`/jobs/t/${slug}`) },
          ])}
        />
      )}
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 pt-24 pb-16">
        <Link
          to="/jobs"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> All Jobs
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {meta?.title || "Jobs"}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          {meta
            ? `${meta.totalJobs} open position${meta.totalJobs !== 1 ? "s" : ""}`
            : "Loading..."}
        </p>

        {isLoading && (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {!isLoading && jobs.length === 0 && (
          <div className="text-center py-20">
            <Briefcase className="w-12 h-12 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              No jobs found for this filter.
            </p>
            <Link
              to="/jobs"
              className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
            >
              Browse all jobs
            </Link>
          </div>
        )}

        <div className="space-y-4">
          {jobs.map((job, i) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
            >
              <Link
                to={`/jobs/${job.id}`}
                className="block bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 hover:shadow-md transition-shadow"
              >
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {job.title}
                </h2>
                <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium mb-3">
                  {job.company}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> {job.location}
                  </span>
                  {job.salary && (
                    <span className="flex items-center gap-1">
                      <IndianRupee className="w-3.5 h-3.5" /> {job.salary}
                    </span>
                  )}
                  {job.deadline && (
                    new Date(job.deadline) < new Date()
                      ? <span className="flex items-center gap-1 text-red-500 font-medium"><Clock className="w-3.5 h-3.5" /> Expired</span>
                      : <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {new Date(job.deadline).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                  )}
                </div>
                {job.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {job.tags.slice(0, 5).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Popular job searches for internal linking */}
        <div className="mt-16 border-t border-gray-200 dark:border-gray-800 pt-8">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Popular Job Searches
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "frontend-remote",
              "backend-bangalore",
              "fullstack-remote",
              "react-remote",
              "python-remote",
              "devops-remote",
              "data-science-remote",
              "mobile-bangalore",
              "ai-remote",
              "java-pune",
            ].map((s) => (
              <Link
                key={s}
                to={`/jobs/t/${s}`}
                className="text-sm px-3 py-1.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-gray-600 dark:text-gray-400 hover:border-indigo-300 dark:hover:border-indigo-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {s
                  .split("-")
                  .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                  .join(" ")}{" "}
                Jobs
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
