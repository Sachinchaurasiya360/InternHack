import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, DollarSign, Building2, ExternalLink, Globe, Clock } from "lucide-react";
import { Navbar } from "../../components/Navbar";
import { SEO } from "../../components/SEO";
import api from "../../lib/axios";
import type { ScrapedJob } from "../../lib/types";

export default function ScrapedJobDetailPage() {
  const { id } = useParams();
  const [job, setJob] = useState<ScrapedJob | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/scraped-jobs/${id}`).then((res) => {
      setJob(res.data.job);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="min-h-screen bg-gray-50 dark:bg-gray-950"><Navbar /><div className="flex items-center justify-center h-64 pt-24 text-gray-500">Loading...</div></div>;
  if (!job) return <div className="min-h-screen bg-gray-50 dark:bg-gray-950"><Navbar /><div className="text-center pt-24 text-gray-500">Job not found</div></div>;

  const getSourceBadgeColor = (src: string) => {
    switch (src) {
      case "remotive": return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400";
      case "arbeitnow": return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
      default: return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <SEO
        title={`${job.title} at ${job.company}`}
        description={`${job.title} at ${job.company} in ${job.location}. Found on ${job.source}. Apply now on InternHack.`}
        keywords={`${job.title}, ${job.company}, ${job.location}, ${job.source}, job listing`}
      />
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-12">
        <Link to="/external-jobs" className="flex items-center gap-2 text-sm text-gray-500 hover:text-black dark:hover:text-white mb-6 no-underline">
          <ArrowLeft className="w-4 h-4" /> Back to External Jobs
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          {/* Header */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm mb-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{job.title}</h1>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${getSourceBadgeColor(job.source)}`}>
                    {job.source}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1"><Building2 className="w-4 h-4" />{job.company}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{job.location}</span>
                  {job.salary && <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" />{job.salary}</span>}
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400 dark:text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />Scraped {new Date(job.scrapedAt).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <Globe className="w-4 h-4" />Last seen {new Date(job.lastSeenAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <a href={job.applicationUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors no-underline text-sm shrink-0 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200">
                <ExternalLink className="w-4 h-4" />
                Apply Externally
              </a>
            </div>

            {job.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {job.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-xs">{tag}</span>
                ))}
              </div>
            )}
          </div>

          {/* Description */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Job Description</h2>
            <div className="text-gray-600 dark:text-gray-400 whitespace-pre-wrap leading-relaxed">{job.description}</div>
          </div>

          {/* Source Info */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Source Information</h2>
            <div className="text-sm text-gray-500 space-y-1">
              <p>Source: <span className="font-medium text-gray-700 dark:text-gray-300">{job.source}</span></p>
              {job.sourceUrl && (
                <p>
                  Original listing:{" "}
                  <a href={job.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                    View on {job.source}
                  </a>
                </p>
              )}
              <p>First scraped: {new Date(job.createdAt).toLocaleString()}</p>
              <p>Last updated: {new Date(job.updatedAt).toLocaleString()}</p>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-6 text-center">
            <a href={job.applicationUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors no-underline text-sm dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200">
              <ExternalLink className="w-4 h-4" />
              Apply on {job.source}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
