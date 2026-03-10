import { Link, useParams, useLocation } from "react-router";
import { LoadingScreen } from "../../../components/LoadingScreen";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Building2,
  Calendar,
  ExternalLink,
  Globe,
  Linkedin,
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
  Active: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  Acquired: "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  Public: "bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  Inactive: "bg-gray-50 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
};

function FounderCard({ founder }: { founder: YCFounder }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all duration-300 p-5 flex flex-col sm:flex-row gap-4">
      {founder.imageUrl ? (
        <img
          src={founder.imageUrl}
          alt={founder.name}
          className="w-16 h-16 rounded-xl object-cover border border-gray-100 dark:border-gray-800 shrink-0"
        />
      ) : (
        <div className="w-16 h-16 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0">
          <span className="text-gray-500 dark:text-gray-400 font-bold text-xl">
            {founder.name.charAt(0)}
          </span>
        </div>
      )}
      <div className="flex-1 min-w-0">
        <h3 className="text-base font-semibold text-gray-900 dark:text-white">
          {founder.name}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mt-0.5">
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
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg text-xs font-medium hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors no-underline"
            >
              <Linkedin className="w-3 h-3" /> LinkedIn
            </a>
          )}
          {founder.twitter && (
            <a
              href={founder.twitter.startsWith("http") ? founder.twitter : `https://${founder.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg text-xs font-medium hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors no-underline"
            >
              <Twitter className="w-3 h-3" /> Twitter
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function YCCompanyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const isInsideLayout = useLocation().pathname.startsWith("/student/");

  const { data: company, isLoading } = useQuery<YCCompany>({
    queryKey: queryKeys.yc.detail(slug!),
    queryFn: () => api.get(`/yc/companies/${slug}`).then((r) => r.data),
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white/50 dark:bg-gray-950">
        {!isInsideLayout && <Navbar />}
        <LoadingScreen />
      </div>
    );
  }

  if (!company) {
    return (
      <div className="min-h-screen bg-white/50 dark:bg-gray-950">
        {!isInsideLayout && <Navbar />}
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
  const statusClass = STATUS_COLORS[company.status ?? ""] ?? "bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400";
  const backTo = isInsideLayout ? "/student/companies" : "/companies";

  return (
    <div className="relative min-h-screen bg-white/50 dark:bg-gray-950">
      <SEO
        title={`${company.name} - YC ${company.batchShort || ""}`}
        description={company.oneLiner || company.longDescription?.slice(0, 160) || `${company.name} is a Y Combinator company.`}
        keywords={`${company.name}, Y Combinator, YC, ${company.industry || ""}, ${company.tags?.join(", ") || ""}`}
        ogImage={company.smallLogoUrl || undefined}
      />

      {/* Atmospheric background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-150 h-150 bg-orange-100 dark:bg-orange-900/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-slate-100 dark:bg-slate-900/20 rounded-full blur-3xl opacity-40" />
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {!isInsideLayout && <Navbar />}

      <div className="relative max-w-5xl mx-auto px-4 py-8 pt-24 pb-16">
        {/* Back */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <Link
            to={backTo}
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white no-underline transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to companies
          </Link>
        </motion.div>

        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-8"
        >
          {/* Logo */}
          <div className="flex justify-center mb-4">
            {company.smallLogoUrl ? (
              <img
                src={company.smallLogoUrl}
                alt={company.name}
                className="w-20 h-20 rounded-2xl object-contain bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm"
              />
            ) : (
              <div className="w-20 h-20 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400 font-bold text-2xl">{company.name.charAt(0)}</span>
              </div>
            )}
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-gray-950 dark:text-white mb-2">
            {company.name}
          </h1>

          {company.oneLiner && (
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-4">
              {company.oneLiner}
            </p>
          )}

          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            {company.batchShort && (
              <span className="px-3 py-1 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-sm font-bold rounded-full">
                YC {company.batchShort}
              </span>
            )}
            {company.status && (
              <span className={`px-3 py-1 text-sm font-medium rounded-full ${statusClass}`}>
                {company.status}
              </span>
            )}
            {company.isHiring && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-medium rounded-full">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                Hiring
              </span>
            )}
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8"
        >
          {[
            { label: "Location", value: company.allLocations || "-", icon: MapPin },
            { label: "Team Size", value: company.teamSize ? company.teamSize.toLocaleString() : "-", icon: Users },
            { label: "Industry", value: company.industry || "-", icon: Building2 },
            { label: "Stage", value: company.stage || company.batch || "-", icon: Rocket },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-4 text-center"
            >
              <item.icon className="w-4 h-4 text-gray-400 mx-auto mb-2" />
              <p className="text-sm font-bold text-gray-900 dark:text-gray-100 truncate">{item.value}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{item.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {company.website && (
            <a
              href={company.website.startsWith("http") ? company.website : `https://${company.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors no-underline"
            >
              <Globe className="w-4 h-4" /> Visit Website
            </a>
          )}
          {company.ycUrl && (
            <a
              href={company.ycUrl.startsWith("http") ? company.ycUrl : `https://www.ycombinator.com/companies/${company.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-500 text-white text-sm font-medium rounded-xl hover:bg-orange-600 transition-colors no-underline"
            >
              <ExternalLink className="w-4 h-4" /> YC Profile
            </a>
          )}
          {socialLinks.linkedin && (
            <a
              href={socialLinks.linkedin.startsWith("http") ? socialLinks.linkedin : `https://${socialLinks.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors no-underline"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          )}
          {socialLinks.twitter && (
            <a
              href={socialLinks.twitter.startsWith("http") ? socialLinks.twitter : `https://${socialLinks.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors no-underline"
            >
              <Twitter className="w-4 h-4" /> Twitter
            </a>
          )}
        </motion.div>

        {/* Body Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Description */}
            {company.longDescription && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-6"
              >
                <h2 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                  About {company.name}
                </h2>
                <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                  {company.longDescription}
                </div>
              </motion.div>
            )}

            {/* Founders */}
            {founders.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                  Founders
                </h2>
                <div className="space-y-4">
                  {founders.map((founder) => (
                    <FounderCard key={founder.name} founder={founder} />
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="space-y-6"
          >
            {/* Company Info */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-5">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
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
                    <dd className="text-gray-900 dark:text-white font-medium text-right max-w-40">{company.subindustry}</dd>
                  </div>
                )}
                {company.allLocations && (
                  <div className="flex justify-between">
                    <dt className="text-gray-500 dark:text-gray-500">Location</dt>
                    <dd className="text-gray-900 dark:text-white font-medium text-right max-w-44">{company.allLocations}</dd>
                  </div>
                )}
              </dl>
            </div>

            {/* Tags */}
            {(company.tags.length > 0 || company.industries.length > 0) && (
              <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-5">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-3">
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
              <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-5">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-3">
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

      {!isInsideLayout && <Footer />}
    </div>
  );
}
