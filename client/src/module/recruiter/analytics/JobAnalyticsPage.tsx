import { useCallback, useEffect, useState } from "react";
import { LoadingScreen } from "../../../components/LoadingScreen";
import { useParams, Link } from "react-router";
import { ArrowLeft, TrendingDown, BarChart3, AlertTriangle, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";
import api from "../../../lib/axios";
import { SEO } from "../../../components/SEO";
import { Button } from "@/components/ui/button";

interface AnalyticsData {
  jobId: number;
  jobTitle: string;
  totalApplications: number;
  statusBreakdown: Record<string, number>;
  roundAnalytics: {
    id: number;
    name: string;
    orderIndex: number;
    totalSubmissions: number;
    completed: number;
    inProgress: number;
    pending: number;
  }[];
}

// Priority order and colour for status breakdown cards
const STATUS_CONFIG: Record<string, { label: string; color: string }> = {
  HIRED:        { label: "Hired",        color: "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300" },
  IN_PROGRESS:  { label: "In Progress",  color: "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300" },
  APPLIED:      { label: "Applied",      color: "bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300" },
  SHORTLISTED:  { label: "Shortlisted",  color: "bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300" },
  REJECTED:     { label: "Rejected",     color: "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300" },
  WITHDRAWN:    { label: "Withdrawn",    color: "bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400" },
};

const STATUS_ORDER = ["HIRED", "IN_PROGRESS", "APPLIED", "SHORTLISTED", "REJECTED", "WITHDRAWN"];

function sortedStatusEntries(breakdown: Record<string, number>): [string, number][] {
  const known = STATUS_ORDER.filter((s) => s in breakdown).map((s) => [s, breakdown[s]] as [string, number]);
  const rest = Object.entries(breakdown).filter(([s]) => !STATUS_ORDER.includes(s));
  return [...known, ...rest];
}

// Pull a human-readable message out of whatever axios/network error we get,
// without leaking raw stack traces or internal error shapes to the user.
function getErrorMessage(err: unknown): string {
  if (err && typeof err === "object" && "code" in err && (err as { code?: string }).code === "ECONNABORTED") {
    return "The request took too long to complete. Please try again.";
  }
  if (err && typeof err === "object" && "response" in err) {
    const response = (err as { response?: { status?: number; data?: { message?: string } } }).response;
    if (response?.status === 404) return "This job could not be found. It may have been deleted.";
    if (response?.status === 403) return "You don't have permission to view analytics for this job.";
    if (response?.data?.message) return response.data.message;
    if (response?.status) return `The server returned an error (${response.status}).`;
  }
  if (err && typeof err === "object" && "request" in err) {
    return "We couldn't reach the server. Please check your connection and try again.";
  }
  return "Something went wrong while loading analytics.";
}

export default function JobAnalyticsPage() {
  const { id: jobId } = useParams();
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAnalytics = useCallback(() => {
    setLoading(true);
    setError(null);
    api
      .get(`/recruiter/jobs/${jobId}/analytics`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(getErrorMessage(err));
        setLoading(false);
      });
  }, [jobId]);

  useEffect(() => {
    fetchAnalytics();
  }, [fetchAnalytics]);

  const backToJobsLink = (
    <Link
      to="/recruiters/jobs"
      className="flex items-center gap-2 text-sm text-stone-500 dark:text-stone-500 hover:text-black dark:hover:text-white mb-4 no-underline"
    >
      <ArrowLeft className="w-4 h-4" /> Back to Jobs
    </Link>
  );

  if (loading) return <LoadingScreen />;

  if (error || !data)
    return (
      <div className="max-w-4xl mx-auto">
        <SEO title="Job Analytics" noIndex />
        {backToJobsLink}
        <div className="flex flex-col items-center justify-center text-center gap-3 py-16 px-6 bg-white dark:bg-stone-900 rounded-xl border border-stone-100 dark:border-stone-800 shadow-sm">
          <AlertTriangle className="w-10 h-10 text-red-400 dark:text-red-500" />
          <p className="text-stone-900 dark:text-white font-semibold">
            Failed to load analytics
          </p>
          <p className="text-sm text-stone-500 dark:text-stone-400 max-w-sm">
            {error ?? "Something went wrong while loading analytics."}
          </p>
          <Button
            type="button"
            onClick={fetchAnalytics}
            variant="default"
            className="mt-2 inline-flex items-center gap-2"
          >
            <RefreshCw className="w-4 h-4" /> Retry
          </Button>
        </div>
      </div>
    );

  // FIX 3 — baseline is always totalApplications, never max of rounds
  const baseline = Math.max(data.totalApplications, 1);

  const hiredCount = data.statusBreakdown["HIRED"] || 0;

  return (
    <div className="max-w-4xl mx-auto">
      <SEO title="Job Analytics" noIndex />
      {backToJobsLink}

      <h1 className="text-2xl font-bold text-stone-900 dark:text-white mb-2">
        {data.jobTitle}
      </h1>
      <p className="text-stone-500 dark:text-stone-500 mb-6">
        {data.totalApplications} total applications
      </p>

      {/* FIX 4 — Status Breakdown: sorted + colour-coded */}
      <div className="bg-white dark:bg-stone-900 p-6 rounded-xl border border-stone-100 dark:border-stone-800 shadow-sm mb-6">
        <h2 className="text-lg font-semibold mb-4 dark:text-white">
          Application Status
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {sortedStatusEntries(data.statusBreakdown).map(([status, count]) => {
            const cfg = STATUS_CONFIG[status] ?? {
              label: status,
              color: "bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300",
            };
            return (
              <div
                key={status}
                className={`text-center p-3 rounded-lg ${cfg.color}`}
              >
                <p className="text-2xl font-bold">{count}</p>
                <p className="text-xs uppercase font-medium mt-0.5">
                  {cfg.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recruitment Funnel */}
      <div className="bg-white dark:bg-stone-900 p-6 rounded-xl border border-stone-100 dark:border-stone-800 shadow-sm mb-6">
        <h2 className="text-lg font-semibold mb-4 dark:text-white">
          Recruitment Funnel
        </h2>

        {/* FIX 5 — empty state when no rounds configured */}
        {data.roundAnalytics.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 text-center gap-2">
            <BarChart3 className="w-10 h-10 text-stone-300 dark:text-stone-700" />
            <p className="text-stone-500 dark:text-stone-400 font-medium">
              No interview rounds set up yet
            </p>
            <p className="text-sm text-stone-400 dark:text-stone-600">
              Add rounds to this job to see the funnel breakdown.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {/* Applied — always 100% of baseline */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-stone-500 dark:text-stone-500 w-40 shrink-0">
                Applied
              </span>
              <div className="flex-1 bg-stone-100 dark:bg-stone-800 rounded-full h-8 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.5 }}
                  className="bg-blue-500 h-full rounded-full flex items-center justify-end pr-3"
                >
                  <span className="text-xs font-bold text-white">
                    {data.totalApplications}
                  </span>
                </motion.div>
              </div>
              {/* spacer to align with drop-rate column below */}
              <span className="w-16 shrink-0" />
            </div>

            {data.roundAnalytics.map((round, i) => {
              // FIX 3 — bar width relative to totalApplications
              const pct = (round.totalSubmissions / baseline) * 100;

              const passRate =
                round.totalSubmissions > 0
                  ? ((round.completed / round.totalSubmissions) * 100).toFixed(1)
                  : "0";

              // FIX 2 — when prior stage had 0 submissions, drop is 100%
              const prevCount =
                i === 0
                  ? data.totalApplications
                  : data.roundAnalytics[i - 1]!.totalSubmissions;

              const dropRate =
                prevCount === 0
                  ? "100"
                  : (
                      ((prevCount - round.totalSubmissions) / prevCount) *
                      100
                    ).toFixed(0);

              return (
                <div key={round.id}>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-stone-500 dark:text-stone-500 w-40 shrink-0 truncate">
                      {round.name}
                    </span>
                    <div className="flex-1 bg-stone-100 dark:bg-stone-800 rounded-full h-8 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${pct}%` }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="bg-green-500 h-full rounded-full flex items-center justify-end pr-3 min-w-[40px]"
                      >
                        <span className="text-xs font-bold text-white">
                          {round.totalSubmissions}
                        </span>
                      </motion.div>
                    </div>
                    <span className="text-xs text-red-500 flex items-center gap-1 w-16 shrink-0">
                      <TrendingDown className="w-3 h-3" /> {dropRate}%
                    </span>
                  </div>
                  <div className="sm:ml-44 flex flex-wrap gap-2 sm:gap-4 text-xs text-stone-400 dark:text-stone-500 mt-1">
                    <span>{round.completed} completed</span>
                    <span>{round.inProgress} in progress</span>
                    <span>{round.pending} pending</span>
                    <span className="text-green-600 dark:text-green-400 font-medium">
                      {passRate}% pass rate
                    </span>
                  </div>
                </div>
              );
            })}

            {/* FIX 1 — HIRED end-of-funnel bar */}
            {(() => {
              const lastRound =
                data.roundAnalytics[data.roundAnalytics.length - 1]!;
              const hiredPct = (hiredCount / baseline) * 100;
              const dropRate =
                lastRound.totalSubmissions === 0
                  ? "100"
                  : (
                      ((lastRound.totalSubmissions - hiredCount) /
                        lastRound.totalSubmissions) *
                      100
                    ).toFixed(0);

              return (
                <div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-semibold text-green-700 dark:text-green-400 w-40 shrink-0">
                      Offered / Hired
                    </span>
                    <div className="flex-1 bg-stone-100 dark:bg-stone-800 rounded-full h-8 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${hiredPct}%` }}
                        transition={{
                          duration: 0.5,
                          delay: data.roundAnalytics.length * 0.1,
                        }}
                        className="bg-emerald-500 h-full rounded-full flex items-center justify-end pr-3 min-w-[40px]"
                      >
                        <span className="text-xs font-bold text-white">
                          {hiredCount}
                        </span>
                      </motion.div>
                    </div>
                    <span className="text-xs text-red-500 flex items-center gap-1 w-16 shrink-0">
                      <TrendingDown className="w-3 h-3" /> {dropRate}%
                    </span>
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </div>

      {/* Key Metrics */}
      <div className="bg-white dark:bg-stone-900 p-6 rounded-xl border border-stone-100 dark:border-stone-800 shadow-sm">
        <h2 className="text-lg font-semibold mb-4 dark:text-white">
          Key Metrics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-white">
              {data.totalApplications}
            </p>
            <p className="text-sm text-stone-500 dark:text-stone-500">
              Total Applicants
            </p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-white">
              {hiredCount}
            </p>
            <p className="text-sm text-stone-500 dark:text-stone-500">Hired</p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-white">
              {data.totalApplications > 0
                ? ((hiredCount / data.totalApplications) * 100).toFixed(1)
                : "0"}
              %
            </p>
            <p className="text-sm text-stone-500 dark:text-stone-500">
              Conversion Rate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
