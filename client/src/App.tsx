import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Toaster } from "react-hot-toast";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { LoadingScreen } from "./components/LoadingScreen";

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
const BlogListPage = lazy(() => import("./module/blog/BlogListPage"));
const BlogPostPage = lazy(() => import("./module/blog/BlogPostPage"));
const RecruiterLandingPage = lazy(() => import("./module/recruiter/RecruiterLandingPage"));
const AptitudeCategoriesPage = lazy(() => import("./module/student/aptitude/AptitudeCategoriesPage"));
const AptitudeTopicPage = lazy(() => import("./module/student/aptitude/AptitudeTopicPage"));
const AptitudeCompaniesPage = lazy(() => import("./module/student/aptitude/AptitudeCompaniesPage"));
const DsaTopicsPage = lazy(() => import("./module/student/dsa/DsaTopicsPage"));
const DsaTopicDetailPage = lazy(() => import("./module/student/dsa/DsaTopicDetailPage"));
const DsaCompaniesPage = lazy(() => import("./module/student/dsa/DsaCompaniesPage"));
const DsaPatternsPage = lazy(() => import("./module/student/dsa/DsaPatternsPage"));
const DsaBookmarksPage = lazy(() => import("./module/student/dsa/DsaBookmarksPage"));
const YCCompanyDetailPage = lazy(() => import("./module/student/companies/YCCompanyDetailPage"));
const GovInternshipsPage = lazy(() => import("./module/student/jobs/GovInternshipsPage"));

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
const LatexResumeEditor = lazy(() => import("./module/student/ats/LatexResumeEditor"));
const ResumeGeneratorPage = lazy(() => import("./module/student/ats/ResumeGeneratorPage"));
const CareerProgressPage = lazy(() => import("./module/career/CareerProgressPage"));
const AddCompanyPage = lazy(() => import("./module/student/companies/AddCompanyPage"));
const StudentProfilePage = lazy(() => import("./module/student/profile/StudentProfilePage"));
const PublicProfilePage = lazy(() => import("./module/student/profile/PublicProfilePage"));
const RepoDiscoveryPage = lazy(() => import("./module/student/opensource/RepoDiscoveryPage"));
const GSoCReposPage = lazy(() => import("./module/student/opensource/GSoCReposPage"));
const ProgramTrackerPage = lazy(() => import("./module/student/opensource/ProgramTrackerPage"));
const FirstPRRoadmapPage = lazy(() => import("./module/student/opensource/FirstPRRoadmapPage"));
const GSoCProposalPage = lazy(() => import("./module/student/opensource/GSoCProposalPage"));
const OpenSourceAnalyticsPage = lazy(() => import("./module/student/opensource/OpenSourceAnalyticsPage"));
const Web3RoadmapPage = lazy(() => import("./module/student/grants/Web3RoadmapPage"));
const GrantTrackerPage = lazy(() => import("./module/student/grants/GrantTrackerPage"));
const HackathonCalendarPage = lazy(() => import("./module/student/grants/HackathonCalendarPage"));
const ProjectIdeasPage = lazy(() => import("./module/student/grants/ProjectIdeasPage"));
const CheckoutPage = lazy(() => import("./module/student/checkout/CheckoutPage"));
const SkillQuizPage = lazy(() => import("./module/career/quiz/SkillQuizPage"));
const SqlPracticePage = lazy(() => import("./module/student/sql/SqlPracticePage"));
const SkillVerificationPage = lazy(() => import("./module/student/skill-verification/SkillVerificationPage"));
const SkillTestPage = lazy(() => import("./module/student/skill-verification/SkillTestPage"));
const SqlExercisePage = lazy(() => import("./module/student/sql/SqlExercisePage"));
const SqlPlaygroundPage = lazy(() => import("./module/student/sql/SqlPlaygroundPage"));
const MockInterviewPage = lazy(() => import("./module/student/mock-interview/MockInterviewPage"));
const LearnLayout = lazy(() => import("./module/student/learn/LearnLayout"));
const LearnHubPage = lazy(() => import("./module/student/learn/LearnHubPage"));
const JsLessonsPage = lazy(() => import("./module/student/javascript/JsLessonsPage"));
const JsSectionPage = lazy(() => import("./module/student/javascript/JsSectionPage"));
const JsLessonDetailPage = lazy(() => import("./module/student/javascript/JsLessonDetailPage"));
const HtmlLessonsPage = lazy(() => import("./module/student/html/HtmlLessonsPage"));
const HtmlSectionPage = lazy(() => import("./module/student/html/HtmlSectionPage"));
const HtmlLessonDetailPage = lazy(() => import("./module/student/html/HtmlLessonDetailPage"));
const CssLessonsPage = lazy(() => import("./module/student/css/CssLessonsPage"));
const CssSectionPage = lazy(() => import("./module/student/css/CssSectionPage"));
const CssLessonDetailPage = lazy(() => import("./module/student/css/CssLessonDetailPage"));

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
const AdminBlogPage = lazy(() => import("./module/admin/blog/AdminBlogPage"));
const AdminBlogEditor = lazy(() => import("./module/admin/blog/AdminBlogEditor"));
const AdminDsaPage = lazy(() => import("./module/admin/dsa/AdminDsaPage"));
const AdminAptitudePage = lazy(() => import("./module/admin/aptitude/AdminAptitudePage"));
const AdminSkillTestsPage = lazy(() => import("./module/admin/skill-tests/AdminSkillTestsPage"));
const AdminHackathonsPage = lazy(() => import("./module/admin/hackathons/AdminHackathonsPage"));

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <ErrorBoundary>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/jobs" element={<JobBrowsePage />} />
          <Route path="/jobs/:id" element={<JobDetailPage />} />
          <Route path="/internships" element={<GovInternshipsPage />} />
          <Route path="/external-jobs" element={<ScrapedJobsPage />} />
          <Route path="/external-jobs/:id" element={<ScrapedJobDetailPage />} />
          <Route path="/companies" element={<CompanyListPage />} />
          <Route path="/companies/:slug" element={<CompanyDetailPage />} />
          <Route path="/yc/:slug" element={<YCCompanyDetailPage />} />
          <Route path="/ats-score" element={<PublicAtsPage />} />
          <Route path="/grants" element={<GrantsPage />} />
          <Route path="/for-recruiters" element={<RecruiterLandingPage />} />
          <Route path="/opensource" element={<PublicOpenSourcePage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          {/* Learning Hub — all learning content under /learn */}
          <Route path="/learn" element={<LearnLayout />}>
            <Route index element={<LearnHubPage />} />
            <Route path="javascript" element={<JsLessonsPage />} />
            <Route path="javascript/:sectionSlug" element={<JsSectionPage />} />
            <Route path="javascript/:sectionSlug/:lessonId" element={<JsLessonDetailPage />} />
            <Route path="html" element={<HtmlLessonsPage />} />
            <Route path="html/:sectionSlug" element={<HtmlSectionPage />} />
            <Route path="html/:sectionSlug/:lessonId" element={<HtmlLessonDetailPage />} />
            <Route path="css" element={<CssLessonsPage />} />
            <Route path="css/:sectionSlug" element={<CssSectionPage />} />
            <Route path="css/:sectionSlug/:lessonId" element={<CssLessonDetailPage />} />
            <Route path="sql" element={<SqlPracticePage />} />
            <Route path="sql/playground" element={<SqlPlaygroundPage />} />
            <Route path="sql/:sectionSlug" element={<SqlExercisePage />} />
            <Route path="sql/:sectionSlug/:exerciseId" element={<SqlExercisePage />} />
            <Route path="dsa" element={<DsaTopicsPage />} />
            <Route path="dsa/companies" element={<DsaCompaniesPage />} />
            <Route path="dsa/patterns" element={<DsaPatternsPage />} />
            <Route path="dsa/bookmarks" element={<ProtectedRoute role="STUDENT"><DsaBookmarksPage /></ProtectedRoute>} />
            <Route path="dsa/:slug" element={<DsaTopicDetailPage />} />
            <Route path="aptitude" element={<AptitudeCategoriesPage />} />
            <Route path="aptitude/companies" element={<AptitudeCompaniesPage />} />
            <Route path="aptitude/:slug" element={<AptitudeTopicPage />} />
            <Route path="careers" element={<CareerExplorePage />} />
            <Route path="careers/:slug" element={<CareerDetailPage />} />
            <Route path="careers/:slug/quiz/:skillId" element={<ProtectedRoute role="STUDENT"><SkillQuizPage /></ProtectedRoute>} />
          </Route>

          {/* Legacy redirects */}
          <Route path="/dsa/*" element={<Navigate to="/learn/dsa" replace />} />
          <Route path="/sql/*" element={<Navigate to="/learn/sql" replace />} />
          <Route path="/javascript/*" element={<Navigate to="/learn/javascript" replace />} />
          <Route path="/aptitude/*" element={<Navigate to="/learn/aptitude" replace />} />
          <Route path="/careers/*" element={<Navigate to="/learn/careers" replace />} />
          <Route path="/student/learn" element={<Navigate to="/learn" replace />} />
          <Route path="/student/javascript/*" element={<Navigate to="/learn/javascript" replace />} />
          <Route path="/html/*" element={<Navigate to="/learn/html" replace />} />
          <Route path="/css/*" element={<Navigate to="/learn/css" replace />} />
          <Route path="/student/html/*" element={<Navigate to="/learn/html" replace />} />
          <Route path="/student/css/*" element={<Navigate to="/learn/css" replace />} />
          <Route path="/student/sql/*" element={<Navigate to="/learn/sql" replace />} />
          <Route path="/student/dsa/*" element={<Navigate to="/learn/dsa" replace />} />
          <Route path="/student/aptitude/*" element={<Navigate to="/learn/aptitude" replace />} />

          {/* Standalone proctored test - no layout chrome */}
          <Route path="/test/:testId" element={<ProtectedRoute role="STUDENT"><SkillTestPage /></ProtectedRoute>} />

          {/* Student protected routes */}
          <Route path="/jobs/:jobId/apply" element={<ProtectedRoute role="STUDENT"><ApplyPage /></ProtectedRoute>} />
          <Route path="/student" element={<ProtectedRoute role="STUDENT"><StudentLayout /></ProtectedRoute>}>
            <Route index element={<Navigate to="applications" replace />} />
            <Route path="jobs" element={<JobBrowsePage />} />
            <Route path="jobs/:id" element={<JobDetailPage />} />
            <Route path="jobs/:id/apply" element={<ApplyPage />} />
            <Route path="internships" element={<GovInternshipsPage />} />
            <Route path="companies" element={<CompanyListPage />} />
            <Route path="companies/:slug" element={<CompanyDetailPage />} />
            <Route path="yc/:slug" element={<YCCompanyDetailPage />} />
            <Route path="applications" element={<MyApplicationsPage />} />
            <Route path="applications/:applicationId" element={<ApplicationProgressPage />} />
            <Route path="ats" element={<AtsLandingPage />} />
            <Route path="ats/score" element={<AtsScorePage />} />
            <Route path="ats/history" element={<AtsHistoryPage />} />
            <Route path="ats/history/:scoreId" element={<AtsScoreDetailPage />} />
            <Route path="ats/resume-generator" element={<ResumeGeneratorPage />} />
            <Route path="ats/templates" element={<ResumeBuilderPage />} />
            <Route path="ats/cover-letter" element={<CoverLetterPage />} />
            <Route path="ats/latex-editor" element={<LatexResumeEditor />} />
            <Route path="careers" element={<Navigate to="/learn" replace />} />
            <Route path="careers/:slug" element={<CareerProgressPage />} />
            <Route path="skill-verification" element={<SkillVerificationPage />} />
            <Route path="mock-interview" element={<MockInterviewPage />} />
            <Route path="companies/add" element={<AddCompanyPage />} />
            <Route path="grants" element={<GrantsPage />} />
            <Route path="grants/roadmap" element={<Web3RoadmapPage />} />
            <Route path="grants/tracker" element={<GrantTrackerPage />} />
            <Route path="grants/hackathons" element={<HackathonCalendarPage />} />
            <Route path="grants/projects" element={<ProjectIdeasPage />} />
            <Route path="opensource" element={<RepoDiscoveryPage />} />
            <Route path="opensource/gsoc" element={<GSoCReposPage />} />
            <Route path="opensource/programs" element={<ProgramTrackerPage />} />
            <Route path="opensource/first-pr" element={<FirstPRRoadmapPage />} />
            <Route path="opensource/gsoc-proposal" element={<GSoCProposalPage />} />
            <Route path="opensource/analytics" element={<OpenSourceAnalyticsPage />} />
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
            <Route path="profile/:id" element={<PublicProfilePage />} />
          </Route>

          {/* Profile view (recruiter/admin - backend enforces role) */}
          <Route path="/profile/:id" element={<ProtectedRoute><PublicProfilePage /></ProtectedRoute>} />

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
            <Route path="dsa" element={<AdminDsaPage />} />
            <Route path="aptitude" element={<AdminAptitudePage />} />
            <Route path="skill-tests" element={<AdminSkillTestsPage />} />
            <Route path="hackathons" element={<AdminHackathonsPage />} />
            <Route path="blog" element={<AdminBlogPage />} />
            <Route path="blog/editor" element={<AdminBlogEditor />} />
            <Route path="blog/editor/:id" element={<AdminBlogEditor />} />
            <Route path="profile/:id" element={<PublicProfilePage />} />
          </Route>
        </Routes>
      </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
