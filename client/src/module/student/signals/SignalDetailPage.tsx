import { useParams, Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Briefcase,
  Building2,
  DollarSign,
  MapPin,
  Calendar,
  Globe,
  Users,
  Tag,
  Radar,
} from "lucide-react";
import { SEO } from "../../../components/SEO";
import { queryKeys } from "../../../lib/query-keys";
import type { FundingSignal, FundingSignalListResponse } from "../../../lib/types";
import { getSignalById, getSignalSources, querySignals } from "./signals-api";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function freshnessLabel(iso: string): { label: string; tone: "fresh" | "normal" | "stale" } {
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86_400_000);
  if (days <= 7) return { label: "Fresh, last 7 days", tone: "fresh" };
  if (days <= 30) return { label: `${String(days)}d old`, tone: "normal" };
  return { label: `${String(days)}d old`, tone: "stale" };
}

function inferCareersUrl(signal: FundingSignal): string | null {
  if (signal.careersUrl) return signal.careersUrl;
  if (signal.companyWebsite) {
    try {
      const u = new URL(signal.companyWebsite);
      return `${u.origin}/careers`;
    } catch {
      return null;
    }
  }
  return null;
}

export default function SignalDetailPage() {
  const { id: idParam } = useParams<{ id: string }>();
  const id = Number(idParam);

  const { data: signal, isLoading, error } = useQuery<FundingSignal>({
    queryKey: queryKeys.signals.detail(id),
    queryFn: () => getSignalById(id),
    enabled: Number.isFinite(id),
    staleTime: 10 * 60 * 1000,
  });

  const { data: sourcesData } = useQuery({
    queryKey: queryKeys.signals.sources(),
    queryFn: () => getSignalSources(),
    staleTime: 60 * 60 * 1000,
  });

  const { data: related } = useQuery<FundingSignalListResponse>({
    queryKey: queryKeys.signals.list({
      related: signal?.id ?? 0,
      src: signal?.source ?? "",
    }),
    queryFn: () =>
      querySignals({
        page: 1,
        limit: 4,
        sort: "recent",
        source: signal?.source,
      }),
    enabled: Boolean(signal?.source),
    staleTime: 10 * 60 * 1000,
  });

  if (isLoading) {
    return (
      <div className="pb-16">
        <SEO title="Signal" noIndex />
        <div className="h-96 rounded-md bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 animate-pulse" />
      </div>
    );
  }

  if (error || !signal) {
    return (
      <div className="pb-16">
        <SEO title="Signal not found" noIndex />
        <div className="text-center py-20 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md">
          <div className="w-16 h-16 mx-auto bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 rounded-md flex items-center justify-center mb-4">
            <Radar className="w-7 h-7 text-stone-500" />
          </div>
          <p className="text-stone-500 text-sm mb-4">This signal could not be loaded.</p>
          <Link
            to="/student/signals"
            className="inline-flex items-center gap-2 text-sm text-stone-900 dark:text-stone-50 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" /> Back to signals
          </Link>
        </div>
      </div>
    );
  }

  const initial = signal.companyName.trim().charAt(0).toUpperCase() || "?";
  const sourceName =
    sourcesData?.sources.find((s) => s.id === signal.source)?.name ?? signal.source;
  const freshness = freshnessLabel(signal.announcedAt);
  const careers = inferCareersUrl(signal);
  const relatedOthers = (related?.signals ?? []).filter((r) => r.id !== signal.id).slice(0, 3);

  return (
    <div className="pb-16">
      <SEO title={`${signal.companyName}, Signal`} noIndex />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-6"
      >
        {/* Header card */}
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-6 md:p-8">
          <div className="flex items-start gap-4 flex-wrap">
            <div className="w-16 h-16 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0 text-xl font-bold text-stone-700 dark:text-stone-300 overflow-hidden">
              {signal.logoUrl ? (
                <img src={signal.logoUrl} alt="" className="w-full h-full object-cover" />
              ) : (
                initial
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-tight">
                {signal.companyName}
              </h1>
              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] font-mono uppercase tracking-widest text-stone-500">
                <span>{sourceName}</span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {formatDate(signal.announcedAt)}
                </span>
                <span
                  className={`inline-flex items-center gap-1 ${
                    freshness.tone === "fresh"
                      ? "text-lime-600 dark:text-lime-400"
                      : freshness.tone === "stale"
                      ? "text-stone-400"
                      : "text-stone-500"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 ${
                      freshness.tone === "fresh"
                        ? "bg-lime-400"
                        : freshness.tone === "stale"
                        ? "bg-stone-400"
                        : "bg-stone-500"
                    }`}
                  />
                  {freshness.label}
                </span>
                {signal.hiringSignal ? (
                  <span className="inline-flex items-center gap-1 text-stone-900 dark:text-stone-50">
                    <Briefcase className="w-3 h-3" />
                    Likely hiring
                  </span>
                ) : null}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={signal.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity no-underline"
            >
              <ExternalLink className="w-4 h-4" />
              Open original
            </a>
            {careers ? (
              <a
                href={careers}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-lime-400 hover:bg-lime-500 text-stone-900 rounded-md text-sm font-semibold transition-colors no-underline"
              >
                <Briefcase className="w-4 h-4" />
                Visit careers page
              </a>
            ) : null}
            {signal.companyWebsite ? (
              <a
                href={signal.companyWebsite}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 text-stone-900 dark:text-stone-50 rounded-md text-sm font-semibold hover:border-stone-400 dark:hover:border-white/30 transition-colors no-underline"
              >
                <Globe className="w-4 h-4" />
                Website
              </a>
            ) : null}
          </div>
        </div>

        {/* Body: description + facts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
          <div className="lg:col-span-2 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-6 md:p-8">
            <h2 className="text-sm font-mono uppercase tracking-widest text-stone-500 mb-3">
              About this signal
            </h2>
            {signal.description ? (
              <p className="text-sm md:text-base text-stone-700 dark:text-stone-300 whitespace-pre-wrap leading-relaxed">
                {signal.description}
              </p>
            ) : (
              <p className="text-sm text-stone-500 italic">
                No description provided.
              </p>
            )}

            {signal.tags.length > 0 ? (
              <div className="mt-6">
                <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">
                  Tags
                </div>
                <div className="flex flex-wrap gap-2">
                  {signal.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 rounded-md text-xs"
                    >
                      <Tag className="w-3 h-3" />
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            {signal.investors.length > 0 ? (
              <div className="mt-6">
                <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">
                  Investors
                </div>
                <div className="flex flex-wrap gap-2">
                  {signal.investors.map((inv) => (
                    <span
                      key={inv}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 rounded-md text-xs"
                    >
                      <Users className="w-3 h-3" />
                      {inv}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          {/* Facts sidebar */}
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-6">
            <h2 className="text-sm font-mono uppercase tracking-widest text-stone-500 mb-4">
              Quick facts
            </h2>
            <dl className="space-y-4 text-sm">
              {signal.fundingAmount ? (
                <Fact
                  icon={<DollarSign className="w-4 h-4 text-lime-600 dark:text-lime-400" />}
                  label="Amount raised"
                  value={signal.fundingAmount}
                />
              ) : null}
              {signal.fundingRound ? (
                <Fact
                  icon={<Building2 className="w-4 h-4 text-stone-500" />}
                  label="Round"
                  value={signal.fundingRound}
                />
              ) : null}
              {signal.industry ? (
                <Fact
                  icon={<Building2 className="w-4 h-4 text-stone-500" />}
                  label="Industry"
                  value={signal.industry}
                />
              ) : null}
              {signal.hqLocation ? (
                <Fact
                  icon={<MapPin className="w-4 h-4 text-stone-500" />}
                  label="HQ"
                  value={signal.hqLocation}
                />
              ) : null}
              <Fact
                icon={<Calendar className="w-4 h-4 text-stone-500" />}
                label="Announced"
                value={formatDate(signal.announcedAt)}
              />
            </dl>
          </div>
        </div>

        {/* Related */}
        {relatedOthers.length > 0 ? (
          <div className="mt-10">
            <h2 className="text-sm font-mono uppercase tracking-widest text-stone-500 mb-4">
              More from {sourceName}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {relatedOthers.map((r) => (
                <Link
                  key={r.id}
                  to={`/student/signals/${String(r.id)}`}
                  className="no-underline block bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-4 hover:border-stone-400 dark:hover:border-white/30 transition-colors"
                >
                  <div className="text-sm font-semibold text-stone-900 dark:text-stone-50 truncate">
                    {r.companyName}
                  </div>
                  {r.fundingAmount ? (
                    <div className="text-xs text-lime-600 dark:text-lime-400 mt-1 font-mono">
                      {r.fundingAmount} {r.fundingRound ?? ""}
                    </div>
                  ) : (
                    <div className="text-xs text-stone-500 mt-1">{r.fundingRound ?? ""}</div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-10">
          <Link
            to="/student/signals"
            className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> All signals
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

function Fact({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5">{icon}</div>
      <div className="min-w-0">
        <dt className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
          {label}
        </dt>
        <dd className="text-sm text-stone-900 dark:text-stone-50 mt-0.5 break-words">
          {value}
        </dd>
      </div>
    </div>
  );
}
