import { fadeUp, stagger } from "@/lib/motion-variants";
import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { useParams, Link, useLocation } from "react-router";
import { queryKeys } from "../../../lib/query-keys";
import { motion } from "framer-motion";
import {
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
  Download,
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
import { GridBackground } from "../../../components/ui/GridBackground";
import { Button } from "../../../components/ui/button";


const SIZE_LABELS: Record<string, string> = {
  STARTUP: "Startup (1-10)",
  SMALL: "Small (11-50)",
  MEDIUM: "Medium (51-200)",
  LARGE: "Large (201-1000)",
  ENTERPRISE: "Enterprise (1000+)",
};





const getSocialIcon = (platform: string) => {
  const p = platform.toLowerCase();
  const cls = "w-4 h-4 text-stone-400 group-hover:text-lime-500 transition-colors";

  if (p.includes("github")) return (
    <svg className={cls} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.03c-3.34.72-4.04-1.6-4.04-1.6-.55-1.38-1.33-1.75-1.33-1.75-1.08-.74.08-.72.08-.72 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.28-1.23 3.28-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );

  if (p.includes("dribbble")) return (
    <svg className={cls} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm7.97 5.54a10.17 10.17 0 0 1 2.3 6.35c-.33-.07-3.67-.75-7.02-.32-.08-.18-.15-.37-.23-.55-.22-.52-.46-1.04-.7-1.54 3.7-1.51 5.38-3.68 5.65-3.94zM12 1.8a10.17 10.17 0 0 1 6.84 2.64c-.24.23-1.73 2.27-5.3 3.6A45.6 45.6 0 0 0 9.6 2.13 10.23 10.23 0 0 1 12 1.8zm-2.38.37a43.7 43.7 0 0 1 3.9 5.76c-4.9 1.3-9.23 1.28-9.68 1.27A10.21 10.21 0 0 1 9.62 2.17zM1.8 12.02v-.26c.43.01 5.5.08 10.73-1.49.3.58.58 1.17.84 1.77l-.4.11c-5.4 1.75-8.27 6.52-8.52 6.96A10.18 10.18 0 0 1 1.8 12zm10.2 10.2a10.17 10.17 0 0 1-6.27-2.14c.2-.43 2.56-4.96 8.52-7.03l.07-.02a36.8 36.8 0 0 1 1.9 6.73 10.18 10.18 0 0 1-4.22 2.46zm5.94-1.64a38.5 38.5 0 0 0-1.77-6.28c2.9-.46 5.45.3 5.76.39a10.21 10.21 0 0 1-4 5.89z"/>
    </svg>
  );

  if (p.includes("linkedin")) return (
    <svg className={cls} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z"/>
    </svg>
  );

  if (p.includes("twitter") || p.includes("x")) return (
    <svg className={cls} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );

  return <Globe className={cls} />;
};

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
      <span className="h-1.5 w-1.5 bg-lime-400" />
      {children}
    </div>
  );
}

import { CompanyMark } from "../../../components/ui/CompanyMark";

export default function CompanyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { user, isAuthenticated } = useAuthStore();
  const location = useLocation();
  const isInsideLayout = location.pathname.startsWith("/student/");
  const [sortBy, setSortBy] = useState("latest");
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);



  const { 
    data: company, 
    isLoading: companyLoading,
    isError: companyIsError,
    error: companyError 
  } = useQuery<Company>({
    queryKey: queryKeys.companies.detail(slug!),
    queryFn: () => api.get(`/companies/${slug}`).then((r) => r.data.company),
    enabled: !!slug,
    staleTime: 15 * 60 * 1000,
  });

  const {
    data: reviewsData,
    isLoading: reviewsLoading,
    isError: reviewsIsError,
    error: reviewsError,
    refetch: refetchReviews,
  } = useQuery<{ reviews: CompanyReview[] }>({
    queryKey: [...queryKeys.companies.reviews(slug!), sortBy],
    queryFn: () => api.get(`/companies/${slug}/reviews?sort=${sortBy}`).then((r) => r.data),
    enabled: !!slug,
    placeholderData: keepPreviousData,
    staleTime: 5 * 60 * 1000,
  });

  const reviews = reviewsData?.reviews || [];
  const loading = companyLoading || reviewsLoading;

  const refreshReviews = () => {
    setShowReviewForm(false);
    refetchReviews();
  };

  const handleExportPdf = useReactToPrint({
    contentRef: contentRef as React.RefObject<HTMLDivElement>,
    documentTitle: `${company?.name || "Company"}_Profile`,
    onBeforePrint: () => { setIsExporting(true); return Promise.resolve(); },
    onAfterPrint: () => setIsExporting(false),
    onPrintError: (errorType: any, error: any) => {
      console.error("Failed to generate PDF:", error);
      alert("Failed to generate PDF: " + (error?.message || String(errorType)));
      setIsExporting(false);
    }
  });

  const backPath = isInsideLayout ? "/student/companies" : "/companies";

  if (loading) {
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
        {!isInsideLayout && <Navbar />}
        <LoadingScreen />
      </div>
    );
  }

  if (companyIsError || reviewsIsError) {
    const errorMsg = companyIsError
      ? (companyError as { response?: { data?: { message?: string } }; message?: string })?.response?.data?.message || companyError?.message || "Failed to load company"
      : (reviewsError as { response?: { data?: { message?: string } }; message?: string })?.response?.data?.message || reviewsError?.message || "Failed to load reviews";
      
    const errorContent = (
      <div className="max-w-6xl mx-auto px-6 pt-24 text-center">
        <Kicker>error / api</Kicker>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-red-500">
          Something went wrong
        </h1>
        <p className="mt-2 text-stone-500">{errorMsg}</p>
        <Link
          to={backPath}
          className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 no-underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to companies
        </Link>
      </div>
    );
    
    if (isInsideLayout) return errorContent;
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
        <Navbar />
        {errorContent}
        <Footer />
      </div>
    );
  }

  if (!companyIsError && !company) {
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
      <GridBackground />


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

        <motion.div ref={contentRef} id="company-profile-content" variants={stagger} initial="hidden" animate="show" className="space-y-10">
          {/* Header */}
          <motion.div variants={fadeUp}>
            <Kicker>company / profile</Kicker>
            <div className="mt-4 flex flex-col sm:flex-row sm:items-start gap-5">
              <CompanyMark name={company.name} logo={company.logo} size="xl" />
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
                      {company.avgRating > 0 ? company.avgRating.toFixed(1) : "—"}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                      {company.reviewCount} review{company.reviewCount === 1 ? "" : "s"}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 sm:ml-auto">
                    <Button
                      variant="secondary"
                      onClick={handleExportPdf}
                      disabled={isExporting}
                      className="inline-flex items-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      {isExporting ? "Exporting..." : "Export to PDF"}
                    </Button>
                    {company.website && (
                      <Button variant="primary" asChild>
                        <a
                          href={company.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 no-underline"
                        >
                          <Globe className="w-4 h-4" /> Visit website
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
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
                        type="button"
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
                      {company.avgRating > 0 ? company.avgRating.toFixed(1) : "—"}
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
          {getSocialIcon(platform)}
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
                          <CompanyMark name={contact.name} size="sm" />
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
                      type="button"
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
