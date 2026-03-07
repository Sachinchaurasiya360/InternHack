import { Link, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Building2,
  Calendar,
  ExternalLink,
  Globe,
  Linkedin,
  Loader2,
  MapPin,
  Rocket,
  Twitter,
  Users,
} from "lucide-react";
import { SEO } from "../../../components/SEO";
import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { YCCompany, YCFounder } from "../../../lib/types";

const STATUS_COLORS: Record<string, string> = {
  Active: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
  Acquired: "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800",
  Public: "bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 border-purple-200 dark:border-purple-800",
  Inactive: "bg-gray-50 text-gray-600 dark:bg-gray-800 dark:text-gray-400 border-gray-200 dark:border-gray-700",
};

function FounderCard({ founder }: { founder: YCFounder }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-5 flex flex-col sm:flex-row gap-4">
      {founder.imageUrl ? (
        <img
          src={founder.imageUrl}
          alt={founder.name}
          className="w-20 h-20 rounded-xl object-cover border border-gray-100 dark:border-gray-800 shrink-0"
        />
      ) : (
        <div className="w-20 h-20 rounded-xl bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center shrink-0">
          <span className="text-orange-600 dark:text-orange-400 font-bold text-2xl">
            {founder.name.charAt(0)}
          </span>
        </div>
      )}
      <div className="flex-1 min-w-0">
        <h3 className="text-base font-semibold text-gray-900 dark:text-white">
          {founder.name}
        </h3>
        <p className="text-sm text-orange-600 dark:text-orange-400 font-medium mt-0.5">
          {founder.title}
        </p>
        {founder.bio && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 line-clamp-3">
            {founder.bio}
          </p>
        )}
        <div className="flex items-center gap-3 mt-3">
          {founder.linkedin && (
            <a
              href={founder.linkedin.startsWith("http") ? founder.linkedin : `https://${founder.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}
          {founder.twitter && (
            <a
              href={founder.twitter.startsWith("http") ? founder.twitter : `https://${founder.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function YCCompanyDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  const { data: company, isLoading } = useQuery<YCCompany>({
    queryKey: queryKeys.yc.detail(slug!),
    queryFn: () => api.get(`/yc/companies/${slug}`).then((r) => r.data),
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950">
        <Navbar />
        <div className="flex items-center justify-center py-40">
          <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
        </div>
      </div>
    );
  }

  if (!company) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-40 text-center">
          <Building2 className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-600 dark:text-gray-400">
            Company not found
          </h2>
          <Link
            to="/companies"
            className="text-sm text-gray-500 hover:text-black dark:hover:text-white mt-2 inline-block no-underline"
          >
            Browse companies
          </Link>
        </div>
      </div>
    );
  }

  const founders = (company.founders ?? []) as YCFounder[];
  const socialLinks = (company.socialLinks ?? {}) as Record<string, string>;
  const statusClass =
    STATUS_COLORS[company.status ?? ""] ?? "bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700";

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-gray-950">
      <SEO
        title={`${company.name} — YC ${company.batchShort || ""}`}
        description={company.oneLiner || company.longDescription?.slice(0, 160) || `${company.name} is a Y Combinator company.`}
        keywords={`${company.name}, Y Combinator, YC, ${company.industry || ""}, ${company.tags?.join(", ") || ""}`}
        ogImage={company.smallLogoUrl || undefined}
      />
      <Navbar />

      {/* Hero */}
      <div className="relative pt-24 pb-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 opacity-[0.04] dark:opacity-[0.08]" />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          {/* Back */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <Link
              to="/companies"
              className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white no-underline transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" /> Back to companies
            </Link>
          </motion.div>

          {/* Hero card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xl shadow-gray-200/50 dark:shadow-gray-900/50 p-8 mb-8"
          >
            <div className="flex flex-col md:flex-row items-start gap-6">
              {/* Logo */}
              {company.smallLogoUrl ? (
                <img
                  src={company.smallLogoUrl}
                  alt={company.name}
                  className="w-20 h-20 rounded-2xl object-contain bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-800 shadow-sm"
                />
              ) : (
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shrink-0 shadow-sm">
                  <span className="text-white font-bold text-2xl">{company.name.charAt(0)}</span>
                </div>
              )}

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-950 dark:text-white tracking-tight">
                    {company.name}
                  </h1>
                  {company.batchShort && (
                    <span className="px-3 py-1 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-sm font-bold rounded-full border border-orange-200 dark:border-orange-800">
                      YC {company.batchShort}
                    </span>
                  )}
                  {company.status && (
                    <span className={`px-3 py-1 text-sm font-medium rounded-full border ${statusClass}`}>
                      {company.status}
                    </span>
                  )}
                  {company.isHiring && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-medium rounded-full border border-emerald-200 dark:border-emerald-800">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                      Hiring
                    </span>
                  )}
                </div>

                {company.oneLiner && (
                  <p className="text-lg text-gray-600 dark:text-gray-400 mt-1">{company.oneLiner}</p>
                )}

                {/* Info chips */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-4 text-sm text-gray-500 dark:text-gray-400">
                  {company.allLocations && (
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {company.allLocations}
                    </span>
                  )}
                  {company.teamSize && (
                    <span className="flex items-center gap-1.5">
                      <Users className="w-4 h-4" />
                      {company.teamSize.toLocaleString()} employees
                    </span>
                  )}
                  {company.industry && (
                    <span className="flex items-center gap-1.5">
                      <Building2 className="w-4 h-4" />
                      {company.industry}
                    </span>
                  )}
                  {company.stage && (
                    <span className="flex items-center gap-1.5">
                      <Rocket className="w-4 h-4" />
                      {company.stage}
                    </span>
                  )}
                  {company.batch && (
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {company.batch}
                    </span>
                  )}
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-3 mt-5">
                  {company.website && (
                    <a
                      href={company.website.startsWith("http") ? company.website : `https://${company.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors no-underline"
                    >
                      <Globe className="w-4 h-4" /> Visit Website
                    </a>
                  )}
                  {company.ycUrl && (
                    <a
                      href={company.ycUrl.startsWith("http") ? company.ycUrl : `https://www.ycombinator.com/companies/${company.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded-lg hover:bg-orange-600 transition-colors no-underline"
                    >
                      <ExternalLink className="w-4 h-4" /> YC Profile
                    </a>
                  )}
                  {socialLinks.linkedin && (
                    <a
                      href={socialLinks.linkedin.startsWith("http") ? socialLinks.linkedin : `https://${socialLinks.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors no-underline"
                    >
                      <Linkedin className="w-4 h-4" /> LinkedIn
                    </a>
                  )}
                  {socialLinks.twitter && (
                    <a
                      href={socialLinks.twitter.startsWith("http") ? socialLinks.twitter : `https://${socialLinks.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors no-underline"
                    >
                      <Twitter className="w-4 h-4" /> Twitter
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-5xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            {company.longDescription && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-6"
              >
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  About {company.name}
                </h2>
                <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                  {company.longDescription}
                </div>
              </motion.section>
            )}

            {/* Founders */}
            {founders.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Founders
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {founders.map((founder) => (
                    <FounderCard key={founder.name} founder={founder} />
                  ))}
                </div>
              </motion.section>
            )}
          </div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="space-y-6"
          >
            {/* Quick info */}
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-5">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
                Company Info
              </h3>
              <dl className="space-y-3 text-sm">
                {company.batch && (
                  <div className="flex justify-between">
                    <dt className="text-gray-500 dark:text-gray-500">Batch</dt>
                    <dd className="text-gray-900 dark:text-white font-medium">{company.batch}</dd>
                  </div>
                )}
                {company.status && (
                  <div className="flex justify-between">
                    <dt className="text-gray-500 dark:text-gray-500">Status</dt>
                    <dd className="text-gray-900 dark:text-white font-medium">{company.status}</dd>
                  </div>
                )}
                {company.teamSize && (
                  <div className="flex justify-between">
                    <dt className="text-gray-500 dark:text-gray-500">Team Size</dt>
                    <dd className="text-gray-900 dark:text-white font-medium">{company.teamSize.toLocaleString()}</dd>
                  </div>
                )}
                {company.stage && (
                  <div className="flex justify-between">
                    <dt className="text-gray-500 dark:text-gray-500">Stage</dt>
                    <dd className="text-gray-900 dark:text-white font-medium">{company.stage}</dd>
                  </div>
                )}
                {company.industry && (
                  <div className="flex justify-between">
                    <dt className="text-gray-500 dark:text-gray-500">Industry</dt>
                    <dd className="text-gray-900 dark:text-white font-medium">{company.industry}</dd>
                  </div>
                )}
                {company.subindustry && (
                  <div className="flex justify-between">
                    <dt className="text-gray-500 dark:text-gray-500">Sub-industry</dt>
                    <dd className="text-gray-900 dark:text-white font-medium text-right max-w-[160px]">{company.subindustry}</dd>
                  </div>
                )}
                {company.allLocations && (
                  <div className="flex justify-between">
                    <dt className="text-gray-500 dark:text-gray-500">Location</dt>
                    <dd className="text-gray-900 dark:text-white font-medium text-right max-w-[180px]">{company.allLocations}</dd>
                  </div>
                )}
              </dl>
            </div>

            {/* Tags */}
            {(company.tags.length > 0 || company.industries.length > 0) && (
              <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-5">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {company.industries.map((ind) => (
                    <span
                      key={ind}
                      className="px-2.5 py-1 bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400 text-xs font-medium rounded-full"
                    >
                      {ind}
                    </span>
                  ))}
                  {company.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Regions */}
            {company.regions.length > 0 && (
              <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-5">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">
                  Regions
                </h3>
                <div className="flex flex-wrap gap-2">
                  {company.regions.map((region) => (
                    <span
                      key={region}
                      className="px-2.5 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-xs rounded-full"
                    >
                      {region}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}
