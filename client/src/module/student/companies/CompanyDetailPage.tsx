import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import {
  Building2, MapPin, Globe, Users, Calendar,
  Mail, Phone, Linkedin, ArrowLeft, ExternalLink, Loader2,
  MessageSquarePlus, PenLine, UserPlus, Star, Briefcase,
} from "lucide-react";
import api, { SERVER_URL } from "../../../lib/axios";
import { useAuthStore } from "../../../lib/auth.store";
import { Navbar } from "../../../components/Navbar";
import { SEO } from "../../../components/SEO";
import { Footer } from "../../../components/Footer";
import type { Company, CompanyReview } from "../../../lib/types";
import StarRating from "./StarRating";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";
import SuggestEditModal from "./SuggestEditModal";
import AddContactModal from "./AddContactModal";

const SIZE_LABELS: Record<string, string> = {
  STARTUP: "Startup (1-10)",
  SMALL: "Small (11-50)",
  MEDIUM: "Medium (51-200)",
  LARGE: "Large (201-1000)",
  ENTERPRISE: "Enterprise (1000+)",
};

const SIZE_GRADIENTS: Record<string, string> = {
  STARTUP: "from-amber-500 to-orange-500",
  SMALL: "from-emerald-500 to-teal-500",
  MEDIUM: "from-blue-500 to-indigo-500",
  LARGE: "from-violet-500 to-purple-500",
  ENTERPRISE: "from-rose-500 to-pink-500",
};

export default function CompanyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { user, isAuthenticated } = useAuthStore();
  const [company, setCompany] = useState<Company | null>(null);
  const [reviews, setReviews] = useState<CompanyReview[]>([]);
  const [sortBy, setSortBy] = useState("latest");
  const [loading, setLoading] = useState(true);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

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
    api.get(`/companies/${slug}/reviews?sort=${sortBy}`).then((res) => setReviews(res.data.reviews)).catch(() => {});
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950">
        <Navbar />
        <div className="flex items-center justify-center py-40">
          <Loader2 className="w-6 h-6 animate-spin text-gray-400 dark:text-gray-500" />
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
          <h2 className="text-xl font-semibold text-gray-600 dark:text-gray-400">Company not found</h2>
          <Link to="/companies" className="text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white mt-2 inline-block no-underline">Browse companies</Link>
        </div>
      </div>
    );
  }

  const socialLinks = company.socialLinks as Record<string, string>;
  const gradient = SIZE_GRADIENTS[company.size] || "from-gray-700 to-gray-900";

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-gray-950">
      <SEO
        title={company.name}
        description={`${company.name} — ${company.industry || "Company"} in ${company.city}, ${company.state}. ${company.description?.slice(0, 120) || "Read reviews, see tech stack, and explore career opportunities."}`}
        keywords={`${company.name}, ${company.industry}, ${company.city}, company reviews, tech companies, ${company.technologies?.join(", ") || ""}`}
        ogImage={company.logo || undefined}
      />
      <Navbar />

      {/* Hero Header */}
      <div className="relative pt-24 pb-0 overflow-hidden">
        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-[0.06] dark:opacity-[0.12]`} />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link to="/companies" className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white no-underline transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" /> Back to companies
            </Link>
          </motion.div>

          {/* Company Hero Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xl shadow-gray-200/50 dark:shadow-gray-900/50 p-8 mb-8"
          >
            <div className="flex flex-col md:flex-row items-start gap-6">
              {/* Logo */}
              {company.logo ? (
                <img src={`${SERVER_URL}${company.logo}`} alt={company.name} className="w-24 h-24 rounded-2xl object-cover border border-gray-100 dark:border-gray-800 shadow-sm" />
              ) : (
                <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shrink-0 shadow-sm`}>
                  <Building2 className="w-10 h-10 text-white" />
                </div>
              )}

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-950 dark:text-white tracking-tight">{company.name}</h1>
                  {company.hiringStatus && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-medium rounded-full border border-emerald-200 dark:border-emerald-800">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                      Hiring
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3 text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" />{company.city}{company.state ? `, ${company.state}` : ""}</span>
                  {company.industry && (
                    <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4" />{company.industry}</span>
                  )}
                  <span className="flex items-center gap-1.5"><Users className="w-4 h-4" />{SIZE_LABELS[company.size] ?? company.size}</span>
                  {company.foundedYear && <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />Founded {company.foundedYear}</span>}
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <StarRating rating={Math.round(company.avgRating)} size="sm" />
                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{company.avgRating > 0 ? company.avgRating.toFixed(1) : "No ratings"}</span>
                    <span className="text-xs text-gray-400 dark:text-gray-500">({company.reviewCount} reviews)</span>
                  </div>

                  {/* Quick action buttons */}
                  <div className="flex items-center gap-2 ml-auto">
                    {company.website && (
                      <a href={company.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-gray-950 dark:bg-white text-white dark:text-gray-950 text-sm font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-all shadow-sm no-underline">
                        <Globe className="w-4 h-4" /> Visit Website
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Main Content - Left 2 cols */}
          <div className="md:col-span-2 space-y-6">
            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-6"
            >
              <h2 className="font-display text-lg font-bold text-gray-900 dark:text-white mb-3">About</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">{company.description}</p>
              {company.mission && (
                <div className="mt-5 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700">
                  <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Mission</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 italic">{company.mission}</p>
                </div>
              )}
            </motion.div>

            {/* Technologies */}
            {company.technologies.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-6"
              >
                <h2 className="font-display text-lg font-bold text-gray-900 dark:text-white mb-4">Tech Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {company.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400 text-sm rounded-xl font-medium border border-indigo-100 dark:border-indigo-800/50">{tech}</span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Photos */}
            {company.photos.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-6"
              >
                <h2 className="font-display text-lg font-bold text-gray-900 dark:text-white mb-4">Photos</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {company.photos.map((photo, i) => (
                    <img key={i} src={`${SERVER_URL}${photo}`} alt="" className="w-full h-40 object-cover rounded-xl" />
                  ))}
                </div>
              </motion.div>
            )}

            {/* Reviews */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-6"
            >
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-display text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <Star className="w-5 h-5 text-amber-500" /> Reviews ({reviews.length})
                </h2>
                <div className="flex items-center gap-3">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-1.5 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/10 dark:focus:ring-white/10 dark:bg-gray-800 dark:text-white"
                  >
                    <option value="latest">Latest</option>
                    <option value="highest">Highest Rating</option>
                    <option value="lowest">Lowest Rating</option>
                  </select>
                  {isAuthenticated && user?.role === "STUDENT" && (
                    <button
                      onClick={() => setShowReviewForm(true)}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-950 dark:bg-white text-white dark:text-gray-950 text-sm font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-sm"
                    >
                      <MessageSquarePlus className="w-4 h-4" /> Write Review
                    </button>
                  )}
                </div>
              </div>

              {reviews.length === 0 ? (
                <div className="text-center py-12">
                  <Star className="w-10 h-10 text-gray-200 dark:text-gray-700 mx-auto mb-3" />
                  <p className="text-sm text-gray-400 dark:text-gray-500">No reviews yet. Be the first to share your experience!</p>
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

          {/* Sidebar - Right col */}
          <div className="space-y-6">
            {/* Links Card */}
            {(company.website || Object.keys(socialLinks).length > 0) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-6"
              >
                <h2 className="font-display text-lg font-bold text-gray-900 dark:text-white mb-4">Links</h2>
                <div className="space-y-2">
                  {company.website && (
                    <a href={company.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-xl text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 no-underline transition-colors group">
                      <Globe className="w-4 h-4 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300" />
                      <span className="flex-1">Website</span>
                      <ExternalLink className="w-3.5 h-3.5 text-gray-300 dark:text-gray-600" />
                    </a>
                  )}
                  {Object.entries(socialLinks).map(([platform, url]) => (
                    <a key={platform} href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-xl text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 no-underline capitalize transition-colors group">
                      <Linkedin className="w-4 h-4 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300" />
                      <span className="flex-1">{platform}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-gray-300 dark:text-gray-600" />
                    </a>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Contacts Card */}
            {company.contacts && company.contacts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-6"
              >
                <h2 className="font-display text-lg font-bold text-gray-900 dark:text-white mb-4">Key People</h2>
                <div className="space-y-4">
                  {company.contacts.map((contact) => (
                    <div key={contact.id} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">{contact.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mb-2">{contact.designation}</p>
                      <div className="space-y-1.5">
                        {contact.email && (
                          <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white no-underline transition-colors">
                            <Mail className="w-3.5 h-3.5" /> {contact.email}
                          </a>
                        )}
                        {contact.phone && (
                          <p className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                            <Phone className="w-3.5 h-3.5" /> {contact.phone}
                          </p>
                        )}
                        {contact.linkedinUrl && (
                          <a href={contact.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400 hover:underline no-underline">
                            <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Contribute Card */}
            {isAuthenticated && user?.role === "STUDENT" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-6"
              >
                <h2 className="font-display text-lg font-bold text-gray-900 dark:text-white mb-2">Contribute</h2>
                <p className="text-xs text-gray-500 dark:text-gray-500 mb-4">Help keep information accurate</p>
                <div className="space-y-2">
                  <button
                    onClick={() => setShowEditModal(true)}
                    className="w-full flex items-center gap-2 px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <PenLine className="w-4 h-4" /> Suggest Edit
                  </button>
                  <button
                    onClick={() => setShowContactModal(true)}
                    className="w-full flex items-center gap-2 px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <UserPlus className="w-4 h-4" /> Add Contact
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <Footer />

      {/* Modals */}
      {showReviewForm && slug && (
        <ReviewForm slug={slug} onClose={() => setShowReviewForm(false)} onSubmitted={refreshReviews} />
      )}
      {showEditModal && slug && (
        <SuggestEditModal slug={slug} company={company} onClose={() => setShowEditModal(false)} />
      )}
      {showContactModal && slug && (
        <AddContactModal slug={slug} onClose={() => setShowContactModal(false)} />
      )}
    </div>
  );
}
