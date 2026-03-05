import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { ArrowLeft, GraduationCap, MapPin, Globe, Star, Award, Calendar, Users, BookOpen, Loader2, ExternalLink } from "lucide-react";
import api from "../../../lib/axios";
import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
import { useAuthStore } from "../../../lib/auth.store";
import type { College, CollegeCourse, CollegePlacement, CollegeCutoff, CollegeReview } from "../../../lib/types";
import OverviewTab from "./tabs/OverviewTab";
import CoursesTab from "./tabs/CoursesTab";
import PlacementsTab from "./tabs/PlacementsTab";
import CutoffsTab from "./tabs/CutoffsTab";
import ReviewsTab from "./tabs/ReviewsTab";

const TYPE_LABELS: Record<string, string> = {
  GOVERNMENT: "Government", PRIVATE: "Private", DEEMED: "Deemed", AUTONOMOUS: "Autonomous", CENTRAL: "Central", STATE: "State",
};

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "courses", label: "Courses & Fees" },
  { id: "placements", label: "Placements" },
  { id: "cutoffs", label: "Cutoffs" },
  { id: "reviews", label: "Reviews" },
];

export default function CollegeDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { user } = useAuthStore();
  const [college, setCollege] = useState<College | null>(null);
  const [courses, setCourses] = useState<CollegeCourse[]>([]);
  const [placements, setPlacements] = useState<CollegePlacement[]>([]);
  const [cutoffs, setCutoffs] = useState<CollegeCutoff[]>([]);
  const [reviews, setReviews] = useState<CollegeReview[]>([]);
  const [activeTab, setActiveTab] = useState("overview");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    Promise.all([
      api.get(`/colleges/${slug}`),
      api.get(`/colleges/${slug}/courses`),
      api.get(`/colleges/${slug}/placements`),
    ])
      .then(([collegeRes, coursesRes, placementsRes]) => {
        setCollege(collegeRes.data);
        setCourses(coursesRes.data);
        setPlacements(placementsRes.data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [slug]);

  // Lazy-load cutoffs and reviews when tabs activate
  useEffect(() => {
    if (activeTab === "cutoffs" && cutoffs.length === 0 && slug) {
      api.get(`/colleges/${slug}/cutoffs`).then((r) => setCutoffs(r.data)).catch(() => {});
    }
    if (activeTab === "reviews" && reviews.length === 0 && slug) {
      api.get(`/colleges/${slug}/reviews`).then((r) => setReviews(r.data)).catch(() => {});
    }
  }, [activeTab, slug, cutoffs.length, reviews.length]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
        <Navbar />
        <div className="flex items-center justify-center pt-40"><Loader2 className="w-6 h-6 animate-spin text-gray-400" /></div>
      </div>
    );
  }

  if (!college) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 pt-28 text-center">
          <GraduationCap className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">College not found.</p>
          <Link to="/colleges" className="text-sm text-blue-600 hover:underline mt-2 inline-block">Back to colleges</Link>
        </div>
      </div>
    );
  }

  const formatNaac = (g: string) => g.replace(/_PLUS_PLUS/g, "++").replace(/_PLUS/g, "+");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 pt-24 pb-16">
        {/* Back */}
        <Link to="/colleges" className="inline-flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-6 no-underline">
          <ArrowLeft className="w-4 h-4" /> Back to colleges
        </Link>

        {/* Header Card */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm p-6 mb-6">
          <div className="flex items-start gap-5">
            <div className="w-20 h-20 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
              {college.logo ? (
                <img src={college.logo} alt={college.name} className="w-16 h-16 object-contain rounded-lg" />
              ) : (
                <GraduationCap className="w-10 h-10 text-gray-400" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{college.name}</h1>
              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{college.city}, {college.state}</span>
                <span className="px-2 py-0.5 text-xs font-medium rounded bg-gray-100 dark:bg-gray-800">{TYPE_LABELS[college.type] || college.type}</span>
                {college.establishedYear && <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />Est. {college.establishedYear}</span>}
                {college.affiliation && <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" />{college.affiliation}</span>}
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {college.nirfRanking && (
                  <span className="flex items-center gap-1 text-sm font-medium text-amber-600 dark:text-amber-400">
                    <Award className="w-4 h-4" /> NIRF #{college.nirfRanking} {college.nirfYear && `(${college.nirfYear})`}
                  </span>
                )}
                {college.naacGrade && college.naacGrade !== "UNGRADED" && (
                  <span className="text-sm font-medium text-green-600 dark:text-green-400">NAAC {formatNaac(college.naacGrade)}</span>
                )}
                {college.avgRating > 0 && (
                  <span className="flex items-center gap-1 text-sm">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="font-medium text-gray-900 dark:text-white">{college.avgRating.toFixed(1)}</span>
                    <span className="text-gray-400">({college.reviewCount} reviews)</span>
                  </span>
                )}
                {college.totalStudents && (
                  <span className="flex items-center gap-1 text-sm text-gray-500"><Users className="w-3.5 h-3.5" />{college.totalStudents.toLocaleString()} students</span>
                )}
                {college.website && (
                  <a href={college.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 no-underline hover:underline">
                    <Globe className="w-3.5 h-3.5" /> Website <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-6 overflow-x-auto scrollbar-hide">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                  : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {tab.label}
              {tab.id === "courses" && courses.length > 0 && ` (${courses.length})`}
              {tab.id === "reviews" && college.reviewCount > 0 && ` (${college.reviewCount})`}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {activeTab === "overview" && <OverviewTab college={college} />}
        {activeTab === "courses" && <CoursesTab courses={courses} />}
        {activeTab === "placements" && <PlacementsTab placements={placements} />}
        {activeTab === "cutoffs" && <CutoffsTab cutoffs={cutoffs} slug={slug!} />}
        {activeTab === "reviews" && <ReviewsTab reviews={reviews} slug={slug!} user={user} onReviewAdded={() => {
          api.get(`/colleges/${slug}/reviews`).then((r) => setReviews(r.data)).catch(() => {});
        }} />}
      </div>
      <Footer />
    </div>
  );
}
