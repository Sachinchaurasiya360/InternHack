import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Toaster } from "react-hot-toast";
import { ProtectedRoute } from "./components/ProtectedRoute";

// Public pages
const LandingPage = lazy(() => import("./module/LandingPage/landingPage"));
const LoginPage = lazy(() => import("./module/auth/LoginPage"));
const RegisterPage = lazy(() => import("./module/auth/RegisterPage"));
const JobBrowsePage = lazy(() => import("./module/student/jobs/JobBrowsePage"));
const JobDetailPage = lazy(() => import("./module/student/jobs/JobDetailPage"));
const ScrapedJobsPage = lazy(() => import("./module/scraped-jobs/ScrapedJobsPage"));
const ScrapedJobDetailPage = lazy(() => import("./module/scraped-jobs/ScrapedJobDetailPage"));
const CareerExplorePage = lazy(() => import("./module/career/CareerExplorePage"));
const CareerDetailPage = lazy(() => import("./module/career/CareerDetailPage"));
const CompanyListPage = lazy(() => import("./module/student/companies/CompanyListPage"));
const CompanyDetailPage = lazy(() => import("./module/student/companies/CompanyDetailPage"));
const PublicAtsPage = lazy(() => import("./module/student/ats/PublicAtsPage"));
const GrantsPage = lazy(() => import("./module/student/grants/GrantsPage"));
const PublicOpenSourcePage = lazy(() => import("./module/student/opensource/PublicOpenSourcePage"));
const CollegeLandingPage = lazy(() => import("./module/student/colleges/CollegeLandingPage"));
const CollegeListPage = lazy(() => import("./module/student/colleges/CollegeListPage"));
const CollegeComparePage = lazy(() => import("./module/student/colleges/CollegeComparePage"));
const ExamCollegesPage = lazy(() => import("./module/student/colleges/ExamCollegesPage"));
const CollegeDetailPage = lazy(() => import("./module/student/colleges/CollegeDetailPage"));
const BlogListPage = lazy(() => import("./module/blog/BlogListPage"));
const BlogPostPage = lazy(() => import("./module/blog/BlogPostPage"));

// Student pages
const ApplyPage = lazy(() => import("./module/student/applications/ApplyPage"));
const StudentLayout = lazy(() => import("./module/student/StudentLayout"));
const MyApplicationsPage = lazy(() => import("./module/student/applications/MyApplicationsPage"));
const ApplicationProgressPage = lazy(() => import("./module/student/applications/ApplicationProgressPage"));
const AtsLandingPage = lazy(() => import("./module/student/ats/AtsLandingPage"));
const AtsScorePage = lazy(() => import("./module/student/ats/AtsScorePage"));
const AtsHistoryPage = lazy(() => import("./module/student/ats/AtsHistoryPage"));
const AtsScoreDetailPage = lazy(() => import("./module/student/ats/AtsScoreDetailPage"));
const ResumeBuilderPage = lazy(() => import("./module/student/ats/ResumeBuilderPage"));
const CoverLetterPage = lazy(() => import("./module/student/ats/CoverLetterPage"));
const MyCareerPathsPage = lazy(() => import("./module/career/MyCareerPathsPage"));
const CareerProgressPage = lazy(() => import("./module/career/CareerProgressPage"));
const AddCompanyPage = lazy(() => import("./module/student/companies/AddCompanyPage"));
const StudentProfilePage = lazy(() => import("./module/student/profile/StudentProfilePage"));
const RepoDiscoveryPage = lazy(() => import("./module/student/opensource/RepoDiscoveryPage"));
const OpenSourceGuidancePage = lazy(() => import("./module/student/opensource/OpenSourceGuidancePage"));
const GSoCReposPage = lazy(() => import("./module/student/opensource/GSoCReposPage"));
const ProgramTrackerPage = lazy(() => import("./module/student/opensource/ProgramTrackerPage"));
const FirstPRRoadmapPage = lazy(() => import("./module/student/opensource/FirstPRRoadmapPage"));
const GSoCProposalPage = lazy(() => import("./module/student/opensource/GSoCProposalPage"));
const CheckoutPage = lazy(() => import("./module/student/checkout/CheckoutPage"));
const SkillQuizPage = lazy(() => import("./module/career/quiz/SkillQuizPage"));

// Recruiter pages
const RecruiterLayout = lazy(() => import("./module/recruiter/RecruiterLayout"));
const RecruiterDashboard = lazy(() => import("./module/recruiter/RecruiterDashboard"));
const RecruiterJobsList = lazy(() => import("./module/recruiter/jobs/RecruiterJobsList"));
const CreateJobPage = lazy(() => import("./module/recruiter/jobs/CreateJobPage"));
const EditJobPage = lazy(() => import("./module/recruiter/jobs/EditJobPage"));
const ApplicationsList = lazy(() => import("./module/recruiter/applications/ApplicationsList"));
const ApplicationDetail = lazy(() => import("./module/recruiter/applications/ApplicationDetail"));
const JobAnalyticsPage = lazy(() => import("./module/recruiter/analytics/JobAnalyticsPage"));
const TalentSearchPage = lazy(() => import("./module/recruiter/talent/TalentSearchPage"));

// Admin pages
const AdminLoginPage = lazy(() => import("./module/admin/AdminLoginPage"));
const AdminLayout = lazy(() => import("./module/admin/AdminLayout"));
const AdminDashboard = lazy(() => import("./module/admin/AdminDashboard"));
const UsersListPage = lazy(() => import("./module/admin/users/UsersListPage"));
const UserDetailPage = lazy(() => import("./module/admin/users/UserDetailPage"));
const AdminJobsListPage = lazy(() => import("./module/admin/jobs/AdminJobsListPage"));
const ActivityLogsPage = lazy(() => import("./module/admin/activity/ActivityLogsPage"));
const AdminCompaniesPage = lazy(() => import("./module/admin/companies/AdminCompaniesPage"));
const AdminReviewsPage = lazy(() => import("./module/admin/reviews/AdminReviewsPage"));
const AdminContributionsPage = lazy(() => import("./module/admin/contributions/AdminContributionsPage"));
const AdminSubscribersPage = lazy(() => import("./module/admin/AdminSubscribersPage"));
const AdminCareersPage = lazy(() => import("./module/admin/careers/AdminCareersPage"));
const AdminCollegesPage = lazy(() => import("./module/admin/colleges/AdminCollegesPage"));
const AdminCollegeReviewsPage = lazy(() => import("./module/admin/colleges/AdminCollegeReviewsPage"));
const AdminBlogPage = lazy(() => import("./module/admin/blog/AdminBlogPage"));
const AdminBlogEditor = lazy(() => import("./module/admin/blog/AdminBlogEditor"));

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600" /></div>}>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/jobs" element={<JobBrowsePage />} />
          <Route path="/jobs/:id" element={<JobDetailPage />} />
          <Route path="/external-jobs" element={<ScrapedJobsPage />} />
          <Route path="/external-jobs/:id" element={<ScrapedJobDetailPage />} />
          <Route path="/careers" element={<CareerExplorePage />} />
          <Route path="/careers/:slug" element={<CareerDetailPage />} />
          <Route path="/companies" element={<CompanyListPage />} />
          <Route path="/companies/:slug" element={<CompanyDetailPage />} />
          <Route path="/ats-score" element={<PublicAtsPage />} />
          <Route path="/grants" element={<GrantsPage />} />
          <Route path="/opensource" element={<PublicOpenSourcePage />} />
          <Route path="/colleges" element={<CollegeLandingPage />} />
          <Route path="/colleges/explore" element={<CollegeListPage />} />
          <Route path="/colleges/compare" element={<CollegeComparePage />} />
          <Route path="/colleges/exam/:examSlug" element={<ExamCollegesPage />} />
          <Route path="/colleges/:slug" element={<CollegeDetailPage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />

          {/* Student protected routes */}
          <Route path="/jobs/:jobId/apply" element={<ProtectedRoute role="STUDENT"><ApplyPage /></ProtectedRoute>} />
          <Route path="/student" element={<ProtectedRoute role="STUDENT"><StudentLayout /></ProtectedRoute>}>
            <Route index element={<Navigate to="applications" replace />} />
            <Route path="jobs" element={<JobBrowsePage />} />
            <Route path="jobs/:id" element={<JobDetailPage />} />
            <Route path="companies" element={<CompanyListPage />} />
            <Route path="companies/:slug" element={<CompanyDetailPage />} />
            <Route path="applications" element={<MyApplicationsPage />} />
            <Route path="applications/:applicationId" element={<ApplicationProgressPage />} />
            <Route path="ats" element={<AtsLandingPage />} />
            <Route path="ats/score" element={<AtsScorePage />} />
            <Route path="ats/history" element={<AtsHistoryPage />} />
            <Route path="ats/history/:scoreId" element={<AtsScoreDetailPage />} />
            <Route path="ats/templates" element={<ResumeBuilderPage />} />
            <Route path="ats/cover-letter" element={<CoverLetterPage />} />
            <Route path="careers" element={<MyCareerPathsPage />} />
            <Route path="careers/:slug" element={<CareerProgressPage />} />
            <Route path="careers/:slug/quiz/:skillId" element={<SkillQuizPage />} />
            <Route path="colleges" element={<CollegeListPage />} />
            <Route path="colleges/explore" element={<CollegeListPage />} />
            <Route path="colleges/compare" element={<CollegeComparePage />} />
            <Route path="colleges/exam/:examSlug" element={<ExamCollegesPage />} />
            <Route path="colleges/:slug" element={<CollegeDetailPage />} />
            <Route path="companies/add" element={<AddCompanyPage />} />
            <Route path="grants" element={<GrantsPage />} />
            <Route path="opensource" element={<RepoDiscoveryPage />} />
            <Route path="opensource/guidance" element={<OpenSourceGuidancePage />} />
            <Route path="opensource/gsoc" element={<GSoCReposPage />} />
            <Route path="opensource/programs" element={<ProgramTrackerPage />} />
            <Route path="opensource/first-pr" element={<FirstPRRoadmapPage />} />
            <Route path="opensource/gsoc-proposal" element={<GSoCProposalPage />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="profile" element={<StudentProfilePage />} />
          </Route>

          {/* Recruiter protected routes */}
          <Route path="/recruiters" element={<ProtectedRoute role="RECRUITER"><RecruiterLayout /></ProtectedRoute>}>
            <Route index element={<RecruiterDashboard />} />
            <Route path="jobs" element={<RecruiterJobsList />} />
            <Route path="jobs/create" element={<CreateJobPage />} />
            <Route path="jobs/:id/edit" element={<EditJobPage />} />
            <Route path="jobs/:id/applications" element={<ApplicationsList />} />
            <Route path="jobs/:id/analytics" element={<JobAnalyticsPage />} />
            <Route path="applications/:applicationId" element={<ApplicationDetail />} />
            <Route path="talent-search" element={<TalentSearchPage />} />
          </Route>

          {/* Admin login (public) */}
          <Route path="/admin/login" element={<AdminLoginPage />} />

          {/* Admin protected routes */}
          <Route path="/admin" element={<ProtectedRoute role="ADMIN" redirectTo="/admin/login"><AdminLayout /></ProtectedRoute>}>
            <Route index element={<AdminDashboard />} />
            <Route path="users" element={<UsersListPage />} />
            <Route path="users/:id" element={<UserDetailPage />} />
            <Route path="jobs" element={<AdminJobsListPage />} />
            <Route path="activity" element={<ActivityLogsPage />} />
            <Route path="companies" element={<AdminCompaniesPage />} />
            <Route path="reviews" element={<AdminReviewsPage />} />
            <Route path="contributions" element={<AdminContributionsPage />} />
            <Route path="subscribers" element={<AdminSubscribersPage />} />
            <Route path="careers" element={<AdminCareersPage />} />
            <Route path="colleges" element={<AdminCollegesPage />} />
            <Route path="college-reviews" element={<AdminCollegeReviewsPage />} />
            <Route path="blog" element={<AdminBlogPage />} />
            <Route path="blog/editor" element={<AdminBlogEditor />} />
            <Route path="blog/editor/:id" element={<AdminBlogEditor />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
