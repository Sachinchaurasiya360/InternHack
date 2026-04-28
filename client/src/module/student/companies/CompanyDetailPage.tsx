import { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router";
import { motion } from "framer-motion";
import {
  Building2,
  MapPin,
  Globe,
  Users,
  Calendar,
  Mail,
  Phone,
  Linkedin,
  ArrowLeft,
  ExternalLink,
  MessageSquarePlus,
  PenLine,
  Star,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";
import { LoadingScreen } from "../../../components/LoadingScreen";
import api, { SERVER_URL } from "../../../lib/axios";
import { useAuthStore } from "../../../lib/auth.store";
import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
import { SEO } from "../../../components/SEO";
import { canonicalUrl } from "../../../lib/seo.utils";
import { organizationSchema, breadcrumbSchema } from "../../../lib/structured-data";
import type { Company, CompanyReview } from "../../../lib/types";
import StarRating from "./StarRating";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";
import SuggestEditModal from "./SuggestEditModal";
import InterviewExperienceSection from "./InterviewExperienceSection";

const SIZE_LABELS: Record<string, string> = {
  STARTUP: "Startup (1-10)",
  SMALL: "Small (11-50)",
  MEDIUM: "Medium (51-200)",
  LARGE: "Large (201-1000)",
  ENTERPRISE: "Enterprise (1000+)",
};

const fadeUp = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };
const stagger = { show: { transition: { staggerChildren: 0.07 } } };

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
      <span className="h-1.5 w-1.5 bg-lime-400" />
      {children}
    </div>
  );
}

function CompanyLogo({ src, label }: { src?: string | null; label: string }) {
  if (src) {
    return (
      <img
        src={src.startsWith("http") ? src : `${SERVER_URL}${src}`}
        alt={label}
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-md object-cover border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 shrink-0"
      />
    );
  }
  return (
    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0 text-stone-900 dark:text-stone-50 text-2xl sm:text-3xl font-bold">
      {label?.charAt(0)?.toUpperCase() || "?"}
    </div>
  );
}

function ContactMark({ label }: { label: string }) {
  return (
    <div className="w-9 h-9 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0 text-stone-900 dark:text-stone-50 text-sm font-bold">
      {label?.charAt(0)?.toUpperCase() || "?"}
    </div>
  );
}

export default function CompanyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { user, isAuthenticated } = useAuthStore();
  const location = useLocation();
  const isInsideLayout = location.pathname.startsWith("/student/");
  const [company, setCompany] = useState<Company | null>(null);
  const [reviews, setReviews] = useState<CompanyReview[]>([]);
  const [sortBy, setSortBy] = useState("latest");
  const [loading, setLoading] = useState(true);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    Promise.all([
      api.get(`/companies/${slug}`),
      api.get(`/companies/${slug}/reviews?sort=${sortBy}`),
    ])
      .then(([companyRes, reviewsRes]) => {
        setCompany(companyRes.data.company);
        setReviews(reviewsRes.data.reviews);
      })
      .catch(() => setCompany(null))
      .finally(() => setLoading(false));
  }, [slug, sortBy]);

  const refreshReviews = () => {
    if (!slug) return;
    setShowReviewForm(false);
    api
      .get(`/companies/${slug}/reviews?sort=${sortBy}`)
      .then((res) => setReviews(res.data.reviews))
      .catch(() => {});
  };

  const backPath = isInsideLayout ? "/student/companies" : "/companies";

  if (loading) {
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
        {!isInsideLayout && <Navbar />}
        <LoadingScreen />
      </div>
    );
  }

  if (!company) {
    const notFound = (
      <div className="max-w-6xl mx-auto px-6 pt-24 text-center">
        <Kicker>error / 404</Kicker>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
          Company not found.
        </h1>
        <Link
          to={backPath}
          className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 no-underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to companies
        </Link>
      </div>
    );
    if (isInsideLayout) return notFound;
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
        <Navbar />
        {notFound}
        <Footer />
      </div>
    );
  }

  const socialLinks = (company.socialLinks ?? {}) as Record<string, string>;
  const hasLinks = !!company.website || Object.keys(socialLinks).length > 0;

  const page = (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 relative">
      {/* Grid line backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.04] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(120,113,108,0.25) 1px, transparent 1px)",
          backgroundSize: "120px 100%",
        }}
      />

      <div className={`relative max-w-6xl mx-auto px-6 pb-16 ${isInsideLayout ? "" : "pt-24"}`}>
        {/* Back link */}
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
          <Link
            to={backPath}
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 mb-8 no-underline transition-colors mt-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to companies
          </Link>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-10">
          {/* Header */}
          <motion.div variants={fadeUp}>
            <Kicker>company / profile</Kicker>
            <div className="mt-4 flex flex-col sm:flex-row sm:items-start gap-5">
              <CompanyLogo src={company.logo} label={company.name} />
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3">
                  <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-tight">
                    {company.name}
                  </h1>
                  {company.hiringStatus && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-lime-700 dark:text-lime-400 border border-lime-300/70 dark:border-lime-500/30 bg-lime-50/60 dark:bg-lime-500/5 rounded-md">
                      <span className="h-1 w-1 bg-lime-500" />
                      hiring
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-stone-500">
                  {company.industry || "Company"} · {company.city}
                  {company.state ? `, ${company.state}` : ""}
                </p>

                {/* Meta row */}
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-stone-600 dark:text-stone-400">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-stone-400" />
                    {company.city}
                    {company.state ? `, ${company.state}` : ""}
                  </span>
                  {company.industry && (
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-stone-400" />
                      {company.industry}
                    </span>
                  )}
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-stone-400" />
                    {SIZE_LABELS[company.size] ?? company.size}
                  </span>
                  {company.foundedYear && (
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-stone-400" /> Founded{" "}
                      {company.foundedYear}
                    </span>
                  )}
                </div>

                {/* Rating + CTA */}
                <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex items-center gap-2">
                    <StarRating rating={Math.round(company.avgRating)} size="sm" />
                    <span className="text-sm font-bold text-stone-900 dark:text-stone-50 tabular-nums">
                      {company.avgRating > 0 ? company.avgRating.toFixed(1) : ","}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                      {company.reviewCount} review{company.reviewCount === 1 ? "" : "s"}
                    </span>
                  </div>

                  {company.website && (
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-lime-400 text-stone-900 text-sm font-semibold rounded-md hover:bg-lime-500 transition-colors no-underline sm:ml-auto"
                    >
                      <Globe className="w-4 h-4" /> Visit website
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Two column */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main */}
            <div className="lg:col-span-2 space-y-6">
              {/* About */}
              <motion.div
                variants={fadeUp}
                className="bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10 p-6 sm:p-8"
              >
                <Kicker>about / company</Kicker>
                <p className="mt-4 text-sm text-stone-700 dark:text-stone-300 leading-relaxed whitespace-pre-line">
                  {company.description || "No description provided."}
                </p>
                {company.mission && (
                  <div className="mt-6 pt-6 border-t border-stone-100 dark:border-white/5">
                    <Kicker>mission</Kicker>
                    <p className="mt-3 text-sm text-stone-700 dark:text-stone-300 italic leading-relaxed">
                      {company.mission}
                    </p>
                  </div>
                )}
              </motion.div>

              {/* Tech Stack */}
              {company.technologies.length > 0 && (
                <motion.div
                  variants={fadeUp}
                  className="bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10 p-6 sm:p-8"
                >
                  <div className="flex items-center justify-between mb-4">
                    <Kicker>tech / stack</Kicker>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                      {company.technologies.length} tool
                      {company.technologies.length === 1 ? "" : "s"}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {company.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center text-[11px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-md border border-stone-200 dark:border-white/10 text-stone-700 dark:text-stone-300 bg-stone-50 dark:bg-stone-800/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Photos */}
              {company.photos.length > 0 && (
                <motion.div
                  variants={fadeUp}
                  className="bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10 p-6 sm:p-8"
                >
                  <Kicker>gallery</Kicker>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {company.photos.map((photo, i) => (
                      <img
                        key={i}
                        src={photo.startsWith("http") ? photo : `${SERVER_URL}${photo}`}
                        alt=""
                        className="w-full h-40 object-cover rounded-md border border-stone-200 dark:border-white/10"
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Interview experiences */}
              <motion.div variants={fadeUp}>
                <InterviewExperienceSection
                  slug={slug ?? ""}
                  companyName={company.name}
                  canContribute={Boolean(isAuthenticated && user?.role === "STUDENT")}
                  isInsideLayout={isInsideLayout}
                />
              </motion.div>

              {/* Reviews */}
              <motion.div
                variants={fadeUp}
                className="bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10 p-6 sm:p-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
                  <div className="flex items-center gap-3">
                    <Kicker>reviews</Kicker>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                      {reviews.length} total
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="px-3 py-2 bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-white/10 rounded-md text-xs font-mono uppercase tracking-widest text-stone-600 dark:text-stone-300 focus:outline-none focus:border-lime-400"
                    >
                      <option value="latest">latest</option>
                      <option value="highest">highest</option>
                      <option value="lowest">lowest</option>
                    </select>
                    {isAuthenticated && user?.role === "STUDENT" && (
                      <button
                        onClick={() => setShowReviewForm(true)}
                        className="inline-flex items-center gap-2 px-3 py-2 bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 text-xs font-bold uppercase tracking-widest rounded-md hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors cursor-pointer whitespace-nowrap"
                      >
                        <MessageSquarePlus className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Write</span> review
                      </button>
                    )}
                  </div>
                </div>

                {reviews.length === 0 ? (
                  <div className="py-14 text-center border border-dashed border-stone-300 dark:border-white/10 rounded-md">
                    <div className="inline-flex flex-col items-center gap-3">
                      <div className="w-12 h-12 rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950 flex items-center justify-center text-stone-400">
                        <Star className="w-5 h-5" />
                      </div>
                      <p className="text-sm text-stone-700 dark:text-stone-300 font-medium">
                        No reviews yet
                      </p>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                        be the first to share your experience
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {reviews.map((review) => (
                      <ReviewCard key={review.id} review={review} />
                    ))}
                  </div>
                )}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick facts */}
              <motion.div
                variants={fadeUp}
                className="bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10 p-6"
              >
                <Kicker>quick / facts</Kicker>
                <dl className="mt-4 space-y-3 text-sm">
                  <div className="flex items-start justify-between gap-3">
                    <dt className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                      Location
                    </dt>
                    <dd className="text-stone-900 dark:text-stone-50 text-right truncate">
                      {company.city}
                      {company.state ? `, ${company.state}` : ""}
                    </dd>
                  </div>
                  {company.industry && (
                    <div className="flex items-start justify-between gap-3">
                      <dt className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                        Industry
                      </dt>
                      <dd className="text-stone-900 dark:text-stone-50 text-right truncate">
                        {company.industry}
                      </dd>
                    </div>
                  )}
                  <div className="flex items-start justify-between gap-3">
                    <dt className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                      Size
                    </dt>
                    <dd className="text-stone-900 dark:text-stone-50 text-right">
                      {SIZE_LABELS[company.size] ?? company.size}
                    </dd>
                  </div>
                  {company.foundedYear && (
                    <div className="flex items-start justify-between gap-3">
                      <dt className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                        Founded
                      </dt>
                      <dd className="text-stone-900 dark:text-stone-50 text-right">
                        {company.foundedYear}
                      </dd>
                    </div>
                  )}
                  <div className="flex items-start justify-between gap-3">
                    <dt className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                      Rating
                    </dt>
                    <dd className="text-stone-900 dark:text-stone-50 text-right tabular-nums">
                      {company.avgRating > 0 ? company.avgRating.toFixed(1) : ","}
                      <span className="text-stone-500 ml-1">/ 5</span>
                    </dd>
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <dt className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                      Reviews
                    </dt>
                    <dd className="text-stone-900 dark:text-stone-50 text-right tabular-nums">
                      {company.reviewCount}
                    </dd>
                  </div>
                </dl>
              </motion.div>

              {/* Links */}
              {hasLinks && (
                <motion.div
                  variants={fadeUp}
                  className="bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10 p-6"
                >
                  <Kicker>links</Kicker>
                  <div className="mt-4 space-y-2">
                    {company.website && (
                      <a
                        href={company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 px-3 py-2.5 rounded-md border border-stone-200 dark:border-white/10 text-sm text-stone-700 dark:text-stone-300 hover:border-stone-400 dark:hover:border-white/30 no-underline transition-colors"
                      >
                        <Globe className="w-4 h-4 text-stone-400 group-hover:text-lime-500 transition-colors" />
                        <span className="flex-1">Website</span>
                        <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
                      </a>
                    )}
                    {Object.entries(socialLinks).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 px-3 py-2.5 rounded-md border border-stone-200 dark:border-white/10 text-sm text-stone-700 dark:text-stone-300 hover:border-stone-400 dark:hover:border-white/30 no-underline capitalize transition-colors"
                      >
                        <Linkedin className="w-4 h-4 text-stone-400 group-hover:text-lime-500 transition-colors" />
                        <span className="flex-1">{platform}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Key People */}
              {company.contacts && company.contacts.length > 0 && (
                <motion.div
                  variants={fadeUp}
                  className="bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10 p-6"
                >
                  <Kicker>key / people</Kicker>
                  <div className="mt-4 space-y-4">
                    {company.contacts.map((contact) => (
                      <div
                        key={contact.id}
                        className="pb-4 border-b border-stone-100 dark:border-white/5 last:pb-0 last:border-b-0"
                      >
                        <div className="flex items-start gap-3">
                          <ContactMark label={contact.name} />
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-bold text-stone-900 dark:text-stone-50 truncate">
                              {contact.name}
                            </p>
                            {contact.designation && (
                              <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mt-0.5 truncate">
                                {contact.designation}
                              </p>
                            )}
                          </div>
                        </div>
                        {(contact.email || contact.phone || contact.linkedinUrl) && (
                          <div className="mt-3 pl-12 space-y-1.5">
                            {contact.email && (
                              <a
                                href={`mailto:${contact.email}`}
                                className="flex items-center gap-1.5 text-xs text-stone-600 dark:text-stone-400 hover:text-lime-600 dark:hover:text-lime-400 no-underline transition-colors truncate"
                              >
                                <Mail className="w-3 h-3 shrink-0" />
                                <span className="truncate">{contact.email}</span>
                              </a>
                            )}
                            {contact.phone && (
                              <p className="flex items-center gap-1.5 text-xs text-stone-600 dark:text-stone-400">
                                <Phone className="w-3 h-3 shrink-0" /> {contact.phone}
                              </p>
                            )}
                            {contact.linkedinUrl && (
                              <a
                                href={contact.linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs text-stone-600 dark:text-stone-400 hover:text-lime-600 dark:hover:text-lime-400 no-underline transition-colors"
                              >
                                <Linkedin className="w-3 h-3" /> LinkedIn
                                <ExternalLink className="w-3 h-3 opacity-60" />
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Contribute */}
              {isAuthenticated && user?.role === "STUDENT" && (
                <motion.div
                  variants={fadeUp}
                  className="bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10 p-6"
                >
                  <Kicker>contribute</Kicker>
                  <p className="mt-3 text-xs text-stone-500 leading-relaxed">
                    Help keep this profile accurate. Every edit and contact earns contributor points.
                  </p>
                  <div className="mt-4 space-y-2">
                    <button
                      onClick={() => setShowEditModal(true)}
                      className="group w-full inline-flex items-center justify-between gap-2 px-4 py-2.5 rounded-md border border-stone-200 dark:border-white/10 text-sm font-medium text-stone-700 dark:text-stone-300 hover:border-stone-400 dark:hover:border-white/30 transition-colors cursor-pointer bg-transparent"
                    >
                      <span className="inline-flex items-center gap-2">
                        <PenLine className="w-4 h-4 text-stone-400 group-hover:text-lime-500 transition-colors" />
                        Suggest edit
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-900 dark:group-hover:text-stone-50 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modals */}
      {showReviewForm && slug && (
        <ReviewForm slug={slug} onClose={() => setShowReviewForm(false)} onSubmitted={refreshReviews} />
      )}
      {showEditModal && slug && (
        <SuggestEditModal slug={slug} company={company} onClose={() => setShowEditModal(false)} />
      )}
    </div>
  );

  if (isInsideLayout) {
    return (
      <>
        <SEO title={company.name} noIndex />
        {page}
      </>
    );
  }

  return (
    <>
      <SEO
        title={company.name}
        description={`${company.name} - ${company.industry || "Company"} in ${company.city}${company.state ? `, ${company.state}` : ""}. ${company.description?.slice(0, 120) || "Read reviews, see tech stack, and explore career opportunities."}`}
        keywords={`${company.name}, ${company.industry}, ${company.city}, company reviews, tech companies, ${company.technologies?.join(", ") || ""}`}
        ogImage={company.logo || undefined}
        canonicalUrl={canonicalUrl(`/companies/${company.slug}`)}
        structuredData={[
          organizationSchema({
            name: company.name,
            description: company.description,
            slug: company.slug,
            website: company.website,
            city: company.city,
            industry: company.industry,
          }),
          breadcrumbSchema([
            { name: "Companies", url: canonicalUrl("/companies") },
            { name: company.name, url: canonicalUrl(`/companies/${company.slug}`) },
          ]),
        ]}
      />
      <Navbar />
      {page}
      <Footer />
    </>
  );
}
