import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import {
  Building2, MapPin, Globe, Users, Calendar,
  Mail, Phone, Linkedin, ArrowLeft, ExternalLink, Loader2,
  MessageSquarePlus, PenLine, UserPlus,
} from "lucide-react";
import api from "../../../lib/axios";
import { useAuthStore } from "../../../lib/auth.store";
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
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
      </div>
    );
  }

  if (!company) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <h2 className="text-xl font-semibold text-gray-600">Company not found</h2>
        <Link to="/companies" className="text-sm text-blue-600 hover:underline mt-2 inline-block">Browse companies</Link>
      </div>
    );
  }

  const socialLinks = company.socialLinks as Record<string, string>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Back */}
      <Link to="/companies" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-black mb-6 no-underline">
        <ArrowLeft className="w-4 h-4" /> Back to companies
      </Link>

      {/* Header */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 mb-6">
        <div className="flex items-start gap-5">
          {company.logo ? (
            <img src={`http://localhost:3000${company.logo}`} alt={company.name} className="w-20 h-20 rounded-xl object-cover border border-gray-100" />
          ) : (
            <div className="w-20 h-20 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
              <Building2 className="w-8 h-8 text-gray-400" />
            </div>
          )}
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-gray-900">{company.name}</h1>
              {company.hiringStatus && (
                <span className="px-3 py-1 bg-green-50 text-green-700 text-sm font-medium rounded-full">Hiring</span>
              )}
            </div>
            <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{company.city}{company.state ? `, ${company.state}` : ""}</span>
              <span>{company.industry}</span>
              <span className="flex items-center gap-1"><Users className="w-4 h-4" />{SIZE_LABELS[company.size] ?? company.size}</span>
              {company.foundedYear && <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />Founded {company.foundedYear}</span>}
            </div>
            <div className="flex items-center gap-2 mt-3">
              <StarRating rating={Math.round(company.avgRating)} size="sm" />
              <span className="text-sm font-medium text-gray-700">{company.avgRating > 0 ? company.avgRating.toFixed(1) : "No ratings"}</span>
              <span className="text-xs text-gray-400">({company.reviewCount} reviews)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">About</h2>
        <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{company.description}</p>
        {company.mission && (
          <div className="mt-4">
            <h3 className="text-sm font-medium text-gray-700 mb-1">Mission</h3>
            <p className="text-sm text-gray-600">{company.mission}</p>
          </div>
        )}
      </div>

      {/* Technologies */}
      {company.technologies.length > 0 && (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {company.technologies.map((tech) => (
              <span key={tech} className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm rounded-lg font-medium">{tech}</span>
            ))}
          </div>
        </div>
      )}

      {/* Links */}
      {(company.website || Object.keys(socialLinks).length > 0) && (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Links</h2>
          <div className="flex flex-wrap gap-3">
            {company.website && (
              <a href={company.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg text-sm text-gray-700 hover:bg-gray-100 no-underline">
                <Globe className="w-4 h-4" /> Website <ExternalLink className="w-3 h-3" />
              </a>
            )}
            {Object.entries(socialLinks).map(([platform, url]) => (
              <a key={platform} href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg text-sm text-gray-700 hover:bg-gray-100 no-underline capitalize">
                {platform} <ExternalLink className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Photos */}
      {company.photos.length > 0 && (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Photos</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {company.photos.map((photo, i) => (
              <img key={i} src={`http://localhost:3000${photo}`} alt="" className="w-full h-40 object-cover rounded-lg" />
            ))}
          </div>
        </div>
      )}

      {/* Contacts */}
      {company.contacts && company.contacts.length > 0 && (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Key People</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {company.contacts.map((contact) => (
              <div key={contact.id} className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm font-semibold text-gray-900">{contact.name}</p>
                <p className="text-xs text-gray-500 mb-2">{contact.designation}</p>
                <div className="space-y-1">
                  {contact.email && (
                    <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-xs text-gray-600 hover:text-black no-underline">
                      <Mail className="w-3.5 h-3.5" /> {contact.email}
                    </a>
                  )}
                  {contact.phone && (
                    <p className="flex items-center gap-2 text-xs text-gray-600">
                      <Phone className="w-3.5 h-3.5" /> {contact.phone}
                    </p>
                  )}
                  {contact.linkedinUrl && (
                    <a href={contact.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-blue-600 hover:underline no-underline">
                      <Linkedin className="w-3.5 h-3.5" /> LinkedIn Profile
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Reviews */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Reviews ({reviews.length})</h2>
          <div className="flex items-center gap-3">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm focus:outline-none"
            >
              <option value="latest">Latest</option>
              <option value="highest">Highest Rating</option>
              <option value="lowest">Lowest Rating</option>
            </select>
            {isAuthenticated && user?.role === "STUDENT" && (
              <button
                onClick={() => setShowReviewForm(true)}
                className="flex items-center gap-2 px-4 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
              >
                <MessageSquarePlus className="w-4 h-4" /> Write Review
              </button>
            )}
          </div>
        </div>

        {reviews.length === 0 ? (
          <p className="text-sm text-gray-400 text-center py-8">No reviews yet. Be the first to share your experience!</p>
        ) : (
          <div className="space-y-4">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        )}
      </div>

      {/* Contribute */}
      {isAuthenticated && user?.role === "STUDENT" && (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Contribute</h2>
          <p className="text-sm text-gray-500 mb-4">Help keep company information accurate and up-to-date</p>
          <div className="flex gap-3">
            <button
              onClick={() => setShowEditModal(true)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <PenLine className="w-4 h-4" /> Suggest Edit
            </button>
            <button
              onClick={() => setShowContactModal(true)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <UserPlus className="w-4 h-4" /> Add Contact
            </button>
          </div>
        </div>
      )}

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
