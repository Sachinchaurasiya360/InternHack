import { Link, useParams, useLocation } from "react-router";
import { LoadingScreen } from "../../../components/LoadingScreen";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Building2,
  ExternalLink,
  Globe,
  Linkedin,
  MapPin,
  Rocket,
  Twitter,
  Users,
} from "lucide-react";
import { SEO } from "../../../components/SEO";
import { canonicalUrl, SITE_URL } from "../../../lib/seo.utils";
import { organizationSchema, breadcrumbSchema } from "../../../lib/structured-data";
import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { YCCompany, YCFounder } from "../../../lib/types";

function FounderCard({ founder }: { founder: YCFounder }) {
  return (
    <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-5 flex flex-col sm:flex-row gap-4">
      {founder.imageUrl ? (
        <img
          src={founder.imageUrl}
          alt={founder.name}
          className="w-14 h-14 rounded-md object-cover border border-stone-200 dark:border-white/10 shrink-0"
        />
      ) : (
        <div className="w-14 h-14 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0">
          <span className="text-stone-600 dark:text-stone-400 font-bold text-lg">
            {founder.name.charAt(0)}
          </span>
        </div>
      )}
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-bold text-stone-900 dark:text-stone-50">
          {founder.name}
        </h3>
        <p className="text-xs text-stone-500 mt-0.5">{founder.title}</p>
        {founder.bio && (
          <p className="text-sm text-stone-600 dark:text-stone-400 mt-2 leading-relaxed line-clamp-3">
            {founder.bio}
          </p>
        )}
        <div className="flex items-center gap-2 mt-3">
          {founder.linkedin && (
            <a
              href={founder.linkedin.startsWith("http") ? founder.linkedin : `https://${founder.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 text-stone-600 dark:text-stone-400 rounded-md text-xs font-medium hover:border-stone-400 dark:hover:border-white/30 hover:text-stone-900 dark:hover:text-stone-50 transition-colors no-underline"
            >
              <Linkedin className="w-3 h-3" /> LinkedIn
            </a>
          )}
          {founder.twitter && (
            <a
              href={founder.twitter.startsWith("http") ? founder.twitter : `https://${founder.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 text-stone-600 dark:text-stone-400 rounded-md text-xs font-medium hover:border-stone-400 dark:hover:border-white/30 hover:text-stone-900 dark:hover:text-stone-50 transition-colors no-underline"
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

  const backTo = isInsideLayout ? "/student/companies" : "/companies";

  if (isLoading) {
    return (
      <div className={isInsideLayout ? "pb-16" : "min-h-screen"}>
        {!isInsideLayout && <Navbar />}
        <div className={isInsideLayout ? "" : "max-w-5xl mx-auto px-4 pt-24"}>
          <LoadingScreen />
        </div>
      </div>
    );
  }

  if (!company) {
    return (
      <div className={isInsideLayout ? "pb-16" : "min-h-screen"}>
        {!isInsideLayout && <Navbar />}
        <div className={`${isInsideLayout ? "" : "max-w-5xl mx-auto px-4 pt-24"} text-center py-20 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md`}>
          <div className="w-14 h-14 mx-auto bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 rounded-md flex items-center justify-center mb-4">
            <Building2 className="w-6 h-6 text-stone-500" />
          </div>
          <p className="text-stone-500 text-sm mb-4">Company not found.</p>
          <Link
            to={backTo}
            className="inline-flex items-center gap-2 text-sm text-stone-900 dark:text-stone-50 hover:underline no-underline"
          >
            <ArrowLeft className="w-4 h-4" /> Browse companies
          </Link>
        </div>
        {!isInsideLayout && <Footer />}
      </div>
    );
  }

  const founders = (company.founders ?? []) as YCFounder[];
  const socialLinks = (company.socialLinks ?? {}) as Record<string, string>;

  return (
    <div className={isInsideLayout ? "pb-16" : "min-h-screen"}>
      <SEO
        title={`${company.name} - YC ${company.batchShort || ""}`}
        description={company.oneLiner || company.longDescription?.slice(0, 160) || `${company.name} is a Y Combinator company.`}
        keywords={`${company.name}, Y Combinator, YC, ${company.industry || ""}, ${company.tags?.join(", ") || ""}`}
        ogImage={company.smallLogoUrl || undefined}
        canonicalUrl={canonicalUrl(`/yc/${company.slug}`)}
        structuredData={[
          organizationSchema({
            name: company.name,
            description: company.oneLiner || company.longDescription?.slice(0, 160) || `${company.name} is a Y Combinator company.`,
            slug: company.slug,
            website: company.website,
            city: company.allLocations || undefined,
            industry: company.industry || undefined,
          }),
          breadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Y Combinator", url: `${SITE_URL}/yc` },
            { name: company.name, url: `${SITE_URL}/yc/${company.slug}` },
          ]),
        ]}
      />

      {!isInsideLayout && <Navbar />}

      <div className={isInsideLayout ? "" : "max-w-5xl mx-auto px-4 pt-24 pb-16"}>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mt-6">
          {/* Back link */}
          <Link
            to={backTo}
            className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 no-underline transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Companies
          </Link>

          {/* Page kicker */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
              <span className="h-1 w-1 bg-lime-400" />
              yc / company
            </div>
            <h1 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-tight">
              {company.name}
            </h1>
            {company.oneLiner && (
              <p className="mt-2 text-sm text-stone-500 max-w-2xl">{company.oneLiner}</p>
            )}
          </div>

          {/* Header card */}
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-6 md:p-8">
            <div className="flex items-start gap-4 flex-wrap">
              <div className="w-16 h-16 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0 text-xl font-bold text-stone-700 dark:text-stone-300 overflow-hidden">
                {company.smallLogoUrl ? (
                  <img src={company.smallLogoUrl} alt={company.name} className="w-full h-full object-contain" />
                ) : (
                  company.name.charAt(0)
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-1.5">
                  {company.batchShort && (
                    <span className="inline-flex items-center px-2 py-0.5 border border-stone-300 dark:border-white/20 bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-50 rounded-md text-[10px] font-mono font-bold uppercase tracking-widest">
                      YC {company.batchShort}
                    </span>
                  )}
                  {company.status && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-mono uppercase tracking-widest border border-stone-200 dark:border-white/10 text-stone-600 dark:text-stone-400">
                      {company.status}
                    </span>
                  )}
                  {company.isHiring && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 border border-lime-300/70 dark:border-lime-500/30 bg-lime-50/60 dark:bg-lime-500/5 text-lime-700 dark:text-lime-400 rounded-md text-[10px] font-mono uppercase tracking-widest">
                      <span className="h-1 w-1 bg-lime-500" />
                      Hiring
                    </span>
                  )}
                </div>
                {company.allLocations && (
                  <p className="mt-2 inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-stone-500">
                    <MapPin className="w-3 h-3" />
                    {company.allLocations}
                  </p>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-wrap gap-3">
              {company.website && (
                <a
                  href={company.website.startsWith("http") ? company.website : `https://${company.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity no-underline"
                >
                  <Globe className="w-4 h-4" />
                  Visit Website
                </a>
              )}
              {company.ycUrl && (
                <a
                  href={company.ycUrl.startsWith("http") ? company.ycUrl : `https://www.ycombinator.com/companies/${company.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-md text-sm font-semibold transition-colors no-underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  YC Profile
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin.startsWith("http") ? socialLinks.linkedin : `https://${socialLinks.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 text-stone-900 dark:text-stone-50 rounded-md text-sm font-semibold hover:border-stone-400 dark:hover:border-white/30 transition-colors no-underline"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              )}
              {socialLinks.twitter && (
                <a
                  href={socialLinks.twitter.startsWith("http") ? socialLinks.twitter : `https://${socialLinks.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 text-stone-900 dark:text-stone-50 rounded-md text-sm font-semibold hover:border-stone-400 dark:hover:border-white/30 transition-colors no-underline"
                >
                  <Twitter className="w-4 h-4" />
                  Twitter
                </a>
              )}
            </div>
          </div>

          {/* Meta chips row */}
          <div className="flex flex-wrap gap-2 mt-4">
            {company.allLocations && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-white/10 rounded-md">
                <MapPin className="w-3 h-3 text-stone-400" />
                {company.allLocations}
              </span>
            )}
            {company.teamSize && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-white/10 rounded-md">
                <Users className="w-3 h-3 text-stone-400" />
                {company.teamSize.toLocaleString()} people
              </span>
            )}
            {company.industry && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-white/10 rounded-md">
                <Building2 className="w-3 h-3 text-stone-400" />
                {company.industry}
              </span>
            )}
            {(company.stage || company.batch) && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-white/10 rounded-md">
                <Rocket className="w-3 h-3 text-stone-400" />
                {company.stage || company.batch}
              </span>
            )}
          </div>

          {/* Body */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
            {/* Main */}
            <div className="lg:col-span-2 space-y-4">
              {company.longDescription && (
                <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-6 md:p-8">
                  <h2 className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-3">
                    About {company.name}
                  </h2>
                  <p className="text-sm md:text-base text-stone-700 dark:text-stone-300 whitespace-pre-line leading-relaxed">
                    {company.longDescription}
                  </p>
                </div>
              )}
              {founders.length > 0 && (
                <div>
                  <h2 className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-3">
                    Founders
                  </h2>
                  <div className="space-y-3">
                    {founders.map((founder) => (
                      <FounderCard key={founder.name} founder={founder} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-5">
                <h3 className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-4">
                  Company Info
                </h3>
                <dl className="space-y-3 text-sm">
                  {company.batch && (
                    <div className="flex justify-between gap-2">
                      <dt className="text-stone-500">Batch</dt>
                      <dd className="text-stone-900 dark:text-stone-50 font-medium text-right">{company.batch}</dd>
                    </div>
                  )}
                  {company.status && (
                    <div className="flex justify-between gap-2">
                      <dt className="text-stone-500">Status</dt>
                      <dd className="text-stone-900 dark:text-stone-50 font-medium text-right">{company.status}</dd>
                    </div>
                  )}
                  {company.teamSize && (
                    <div className="flex justify-between gap-2">
                      <dt className="text-stone-500">Team Size</dt>
                      <dd className="text-stone-900 dark:text-stone-50 font-medium text-right">{company.teamSize.toLocaleString()}</dd>
                    </div>
                  )}
                  {company.stage && (
                    <div className="flex justify-between gap-2">
                      <dt className="text-stone-500">Stage</dt>
                      <dd className="text-stone-900 dark:text-stone-50 font-medium text-right">{company.stage}</dd>
                    </div>
                  )}
                  {company.industry && (
                    <div className="flex justify-between gap-2">
                      <dt className="text-stone-500">Industry</dt>
                      <dd className="text-stone-900 dark:text-stone-50 font-medium text-right">{company.industry}</dd>
                    </div>
                  )}
                  {company.subindustry && (
                    <div className="flex justify-between gap-2">
                      <dt className="text-stone-500">Sub-industry</dt>
                      <dd className="text-stone-900 dark:text-stone-50 font-medium text-right max-w-36">{company.subindustry}</dd>
                    </div>
                  )}
                  {company.allLocations && (
                    <div className="flex justify-between gap-2">
                      <dt className="text-stone-500">Location</dt>
                      <dd className="text-stone-900 dark:text-stone-50 font-medium text-right max-w-36">{company.allLocations}</dd>
                    </div>
                  )}
                </dl>
              </div>

              {(company.tags.length > 0 || company.industries.length > 0) && (
                <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-5">
                  <h3 className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-3">
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {company.industries.map((ind) => (
                      <span
                        key={ind}
                        className="px-2.5 py-1 bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400 text-xs font-medium rounded-md"
                      >
                        {ind}
                      </span>
                    ))}
                    {company.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 text-xs rounded-md"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {company.regions.length > 0 && (
                <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-5">
                  <h3 className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-3">
                    Regions
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {company.regions.map((region) => (
                      <span
                        key={region}
                        className="px-2.5 py-1 bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 text-xs rounded-md"
                      >
                        {region}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {!isInsideLayout && <Footer />}
    </div>
  );
}
