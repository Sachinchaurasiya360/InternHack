import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  ArrowLeft,
  MapPin,
  DollarSign,
  Building2,
  ExternalLink,
  Globe,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import { Navbar } from "../../components/Navbar";
import { SEO } from "../../components/SEO";
import { LoadingScreen } from "../../components/LoadingScreen";
import { Button } from "../../components/ui/button";
import { queryKeys } from "../../lib/query-keys";
import api from "../../lib/axios";
import type { ScrapedJob } from "../../lib/types";
import { getSourceBadgeColor } from "./scraped-jobs.utils";

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
      <span className="h-1.5 w-1.5 bg-lime-400" />
      {children}
    </div>
  );
}

function CompanyMark({ label }: { label: string }) {
  return (
    <div className="w-14 h-14 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0 text-stone-900 dark:text-stone-50 text-xl font-bold">
      {label?.charAt(0)?.toUpperCase() || "?"}
    </div>
  );
}

export default function ScrapedJobDetailPage() {
  const { id } = useParams();

  const { data: job, isLoading, isError, refetch } = useQuery({
    queryKey: queryKeys.scrapedJobs.detail(id!),
    queryFn: async () => {
      try {
        const res = await api.get(`/scraped-jobs/${id}`);
        return res.data.job as ScrapedJob;
      } catch (err) {
        if (axios.isAxiosError(err) && err.response?.status === 404) {
          return null;
        }
        throw err;
      }
    },
    enabled: !!id,
    retry: false,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
        <Navbar />
        <LoadingScreen />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
        <SEO title="External Job" noIndex />
        <Navbar />
        <div className="max-w-4xl mx-auto px-6 pt-24 pb-12 text-center">
          <Kicker>error / network</Kicker>
          <h1 className="mt-4 text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
            Could not load this job
          </h1>
          <p className="mt-3 text-sm text-stone-500 mb-6">Check your connection and try again.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button variant="mono" onClick={() => refetch()}>
              Retry
            </Button>
            <Link
              to="/external-jobs"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-stone-900 dark:text-stone-50 hover:text-lime-500 no-underline"
            >
              Back to external jobs <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
        <SEO title="Job Not Found" noIndex />
        <Navbar />
        <div className="max-w-4xl mx-auto px-6 pt-24 pb-12 text-center">
          <Kicker>error / 404</Kicker>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
            Job not found.
          </h1>
          <p className="mt-3 text-sm text-stone-500 mb-6">
            This listing may have expired or been removed.
          </p>
          <Link
            to="/external-jobs"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-stone-900 dark:text-stone-50 hover:text-lime-500 no-underline"
          >
            Browse external jobs <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50">
      <SEO
        title={`${job.title} at ${job.company}`}
        description={`${job.title} at ${job.company} in ${job.location}. Found on ${job.source}. Apply now on InternHack.`}
        keywords={`${job.title}, ${job.company}, ${job.location}, ${job.source}, job listing`}
      />
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-12">
        <Link
          to="/external-jobs"
          className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 mb-6 no-underline"
        >
          <ArrowLeft className="w-4 h-4" /> Back to External Jobs
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="bg-white dark:bg-stone-900 p-8 rounded-md border border-stone-200 dark:border-white/10 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex gap-4 flex-1 min-w-0">
                <CompanyMark label={job.company || "?"} />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h1 className="text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
                      {job.title}
                    </h1>
                    <span
                      className={`text-xs px-2.5 py-1 rounded font-medium ${getSourceBadgeColor(job.source)}`}
                    >
                      {job.source}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-stone-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Building2 className="w-4 h-4" />
                      {job.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                    {job.salary && (
                      <span className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        {job.salary}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-stone-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      Scraped {new Date(job.scrapedAt).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Globe className="w-4 h-4" />
                      Last seen {new Date(job.lastSeenAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
              <Button variant="mono" size="lg" asChild className="shrink-0 rounded-md">
                <a href={job.applicationUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  Apply Externally
                </a>
              </Button>
            </div>

            {job.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 rounded text-xs font-mono uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white dark:bg-stone-900 p-8 rounded-md border border-stone-200 dark:border-white/10 mb-6">
            <h2 className="text-lg font-semibold text-stone-900 dark:text-stone-50 mb-4">
              Job Description
            </h2>
            <div className="text-stone-600 dark:text-stone-400 whitespace-pre-wrap leading-relaxed">
              {job.description}
            </div>
          </div>

          <div className="bg-white dark:bg-stone-900 p-6 rounded-md border border-stone-200 dark:border-white/10">
            <h2 className="text-lg font-semibold text-stone-900 dark:text-stone-50 mb-2">
              Source Information
            </h2>
            <div className="text-sm text-stone-500 space-y-1">
              <p>
                Source:{" "}
                <span className="font-medium text-stone-700 dark:text-stone-300">{job.source}</span>
              </p>
              {job.sourceUrl && (
                <p>
                  Original listing:{" "}
                  <a
                    href={job.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lime-600 dark:text-lime-400 hover:underline"
                  >
                    View on {job.source}
                  </a>
                </p>
              )}
              <p>First scraped: {new Date(job.createdAt).toLocaleString()}</p>
              <p>Last updated: {new Date(job.updatedAt).toLocaleString()}</p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Button variant="mono" size="lg" asChild className="rounded-md">
              <a href={job.applicationUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                Apply on {job.source}
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
