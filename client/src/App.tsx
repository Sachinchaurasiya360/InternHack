import { lazy, Suspense, type ComponentType } from "react";
import { BrowserRouter, Navigate, Route, Routes, useParams } from "react-router";
import { useAuthStore } from "./lib/auth.store";
import { Toaster } from "react-hot-toast";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { LoadingScreen } from "./components/LoadingScreen";

function lazyWithRetry(factory: () => Promise<{ default: ComponentType<unknown> }>) {
  return lazy(() =>
    factory().catch((err: unknown) => {
      const key = "chunk_reload";
      if (!sessionStorage.getItem(key)) {
        sessionStorage.setItem(key, "1");
        window.location.reload();
        return new Promise(() => {}); // never resolves — page is reloading
      }
      sessionStorage.removeItem(key);
      throw err;
    }),
  );
}

// Public pages
const LandingPage = lazy(() => import("./module/LandingPage/landingPage"));
const LoginPage = lazy(() => import("./module/auth/LoginPage"));
const RegisterPage = lazy(() => import("./module/auth/RegisterPage"));
const VerifyEmailPage = lazy(() => import("./module/auth/VerifyEmailPage"));
const ForgotPasswordPage = lazy(() => import("./module/auth/ForgotPasswordPage"));
const JobBrowsePage = lazy(() => import("./module/student/jobs/JobBrowsePage"));
const JobDetailPage = lazy(() => import("./module/student/jobs/JobDetailPage"));
const JobLandingPage = lazy(() => import("./module/student/jobs/JobLandingPage"));
const ScrapedJobsPage = lazy(() => import("./module/scraped-jobs/ScrapedJobsPage"));
const ScrapedJobDetailPage = lazy(() => import("./module/scraped-jobs/ScrapedJobDetailPage"));
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
const ExternalJobDetailPage = lazy(() => import("./module/student/jobs/ExternalJobDetailPage"));
const AptitudeTheoryPage = lazy(() => import("./module/student/aptitude/AptitudeTheoryPage"));

// Legal pages
const TermsPage = lazy(() => import("./module/legal/TermsPage"));
const PrivacyPage = lazy(() => import("./module/legal/PrivacyPage"));
const ShippingPage = lazy(() => import("./module/legal/ShippingPage"));
const ContactPage = lazy(() => import("./module/legal/ContactPage"));
const RefundPage = lazy(() => import("./module/legal/RefundPage"));

// Student pages
const ApplyPage = lazyWithRetry(() => import("./module/student/applications/ApplyPage"));
const StudentLayout = lazyWithRetry(() => import("./module/student/StudentLayout"));
const MyApplicationsPage = lazyWithRetry(() => import("./module/student/applications/MyApplicationsPage"));
const ApplicationProgressPage = lazyWithRetry(() => import("./module/student/applications/ApplicationProgressPage"));
const AtsLandingPage = lazyWithRetry(() => import("./module/student/ats/AtsLandingPage"));
const AtsScorePage = lazyWithRetry(() => import("./module/student/ats/AtsScorePage"));
const AtsHistoryPage = lazyWithRetry(() => import("./module/student/ats/AtsHistoryPage"));
const AtsScoreDetailPage = lazyWithRetry(() => import("./module/student/ats/AtsScoreDetailPage"));
const ResumeBuilderPage = lazyWithRetry(() => import("./module/student/ats/ResumeBuilderPage"));
const CoverLetterPage = lazyWithRetry(() => import("./module/student/ats/CoverLetterPage"));
const LatexResumeEditor = lazyWithRetry(() => import("./module/student/ats/LatexResumeEditor"));
const LatexTemplatesGallery = lazyWithRetry(() => import("./module/student/ats/LatexTemplatesGallery"));
const ResumeGeneratorPage = lazyWithRetry(() => import("./module/student/ats/ResumeGeneratorPage"));
const AddCompanyPage = lazyWithRetry(() => import("./module/student/companies/AddCompanyPage"));
const StudentProfilePage = lazyWithRetry(() => import("./module/student/profile/StudentProfilePage"));
const PublicProfilePage = lazyWithRetry(() => import("./module/student/profile/PublicProfilePage"));
const RepoDiscoveryPage = lazyWithRetry(() => import("./module/student/opensource/RepoDiscoveryPage"));
const GSoCReposPage = lazyWithRetry(() => import("./module/student/opensource/GSoCReposPage"));
const ProgramTrackerPage = lazyWithRetry(() => import("./module/student/opensource/ProgramTrackerPage"));
const FirstPRRoadmapPage = lazyWithRetry(() => import("./module/student/opensource/FirstPRRoadmapPage"));
const FirstPRSectionPage = lazyWithRetry(() => import("./module/student/opensource/FirstPRSectionPage"));
const GSoCProposalPage = lazyWithRetry(() => import("./module/student/opensource/GSoCProposalPage"));
const GSoCProposalStepPage = lazyWithRetry(() => import("./module/student/opensource/GSoCProposalStepPage"));
const OpenSourceAnalyticsPage = lazyWithRetry(() => import("./module/student/opensource/OpenSourceAnalyticsPage"));
const GrantTrackerPage = lazyWithRetry(() => import("./module/student/grants/GrantTrackerPage"));
const HackathonCalendarPage = lazyWithRetry(() => import("./module/student/grants/HackathonCalendarPage"));
const CheckoutPage = lazyWithRetry(() => import("./module/student/checkout/CheckoutPage"));
const SqlPracticePage = lazyWithRetry(() => import("./module/student/sql/SqlPracticePage"));
const SkillVerificationPage = lazyWithRetry(() => import("./module/student/skill-verification/SkillVerificationPage"));
const SkillTestPage = lazyWithRetry(() => import("./module/student/skill-verification/SkillTestPage"));
const SqlExercisePage = lazyWithRetry(() => import("./module/student/sql/SqlExercisePage"));
const SqlPlaygroundPage = lazyWithRetry(() => import("./module/student/sql/SqlPlaygroundPage"));
const MockInterviewPage = lazyWithRetry(() => import("./module/student/mock-interview/MockInterviewPage"));
const LearnLayout = lazyWithRetry(() => import("./module/student/learn/LearnLayout"));
const LearnHubPage = lazyWithRetry(() => import("./module/student/learn/LearnHubPage"));
const InterviewLessonsPage = lazyWithRetry(() => import("./module/student/interview-prep/InterviewLessonsPage"));
const InterviewSectionPage = lazyWithRetry(() => import("./module/student/interview-prep/InterviewSectionPage"));
const InterviewQuestionPage = lazyWithRetry(() => import("./module/student/interview-prep/InterviewQuestionPage"));
const JsLessonsPage = lazyWithRetry(() => import("./module/student/javascript/JsLessonsPage"));
const JsSectionPage = lazyWithRetry(() => import("./module/student/javascript/JsSectionPage"));
const JsLessonDetailPage = lazyWithRetry(() => import("./module/student/javascript/JsLessonDetailPage"));
const HtmlLessonsPage = lazyWithRetry(() => import("./module/student/html/HtmlLessonsPage"));
const HtmlSectionPage = lazyWithRetry(() => import("./module/student/html/HtmlSectionPage"));
const HtmlLessonDetailPage = lazyWithRetry(() => import("./module/student/html/HtmlLessonDetailPage"));
const CssLessonsPage = lazyWithRetry(() => import("./module/student/css/CssLessonsPage"));
const CssSectionPage = lazyWithRetry(() => import("./module/student/css/CssSectionPage"));
const CssLessonDetailPage = lazyWithRetry(() => import("./module/student/css/CssLessonDetailPage"));
const TsLessonsPage = lazyWithRetry(() => import("./module/student/typescript/TsLessonsPage"));
const TsSectionPage = lazyWithRetry(() => import("./module/student/typescript/TsSectionPage"));
const TsLessonDetailPage = lazyWithRetry(() => import("./module/student/typescript/TsLessonDetailPage"));
const ReactLessonsPage = lazyWithRetry(() => import("./module/student/react/ReactLessonsPage"));
const ReactSectionPage = lazyWithRetry(() => import("./module/student/react/ReactSectionPage"));
const ReactLessonDetailPage = lazyWithRetry(() => import("./module/student/react/ReactLessonDetailPage"));
const FastApiLessonsPage = lazyWithRetry(() => import("./module/student/fastapi/FastApiLessonsPage"));
const FastApiSectionPage = lazyWithRetry(() => import("./module/student/fastapi/FastApiSectionPage"));
const FastApiLessonDetailPage = lazyWithRetry(() => import("./module/student/fastapi/FastApiLessonDetailPage"));
const FlaskLessonsPage = lazyWithRetry(() => import("./module/student/flask/FlaskLessonsPage"));
const FlaskSectionPage = lazyWithRetry(() => import("./module/student/flask/FlaskSectionPage"));
const FlaskLessonDetailPage = lazyWithRetry(() => import("./module/student/flask/FlaskLessonDetailPage"));
const DjangoLessonsPage = lazyWithRetry(() => import("./module/student/django/DjangoLessonsPage"));
const DjangoSectionPage = lazyWithRetry(() => import("./module/student/django/DjangoSectionPage"));
const DjangoLessonDetailPage = lazyWithRetry(() => import("./module/student/django/DjangoLessonDetailPage"));
const NodeLessonsPage = lazyWithRetry(() => import("./module/student/nodejs/NodeLessonsPage"));
const NodeSectionPage = lazyWithRetry(() => import("./module/student/nodejs/NodeSectionPage"));
const NodeLessonDetailPage = lazyWithRetry(() => import("./module/student/nodejs/NodeLessonDetailPage"));
const PythonLessonsPage = lazyWithRetry(() => import("./module/student/python/PythonLessonsPage"));
const PythonSectionPage = lazyWithRetry(() => import("./module/student/python/PythonSectionPage"));
const PythonLessonDetailPage = lazyWithRetry(() => import("./module/student/python/PythonLessonDetailPage"));
const BlockchainLessonsPage = lazyWithRetry(() => import("./module/student/blockchain/BlockchainLessonsPage"));
const BlockchainSectionPage = lazyWithRetry(() => import("./module/student/blockchain/BlockchainSectionPage"));
const BlockchainLessonDetailPage = lazyWithRetry(() => import("./module/student/blockchain/BlockchainLessonDetailPage"));

// Recruiter auth pages
const RecruiterLoginPage = lazyWithRetry(() => import("./module/recruiter/auth/RecruiterLoginPage"));
const RecruiterRegisterPage = lazyWithRetry(() => import("./module/recruiter/auth/RecruiterRegisterPage"));

// Recruiter pages
const RecruiterLayout = lazyWithRetry(() => import("./module/recruiter/RecruiterLayout"));
const RecruiterDashboard = lazyWithRetry(() => import("./module/recruiter/RecruiterDashboard"));
const RecruiterJobsList = lazyWithRetry(() => import("./module/recruiter/jobs/RecruiterJobsList"));
const CreateJobPage = lazyWithRetry(() => import("./module/recruiter/jobs/CreateJobPage"));
const EditJobPage = lazyWithRetry(() => import("./module/recruiter/jobs/EditJobPage"));
const ApplicationsList = lazyWithRetry(() => import("./module/recruiter/applications/ApplicationsList"));
const ApplicationDetail = lazyWithRetry(() => import("./module/recruiter/applications/ApplicationDetail"));
const JobAnalyticsPage = lazyWithRetry(() => import("./module/recruiter/analytics/JobAnalyticsPage"));
const TalentSearchPage = lazyWithRetry(() => import("./module/recruiter/talent/TalentSearchPage"));
const TalentPoolsPage = lazyWithRetry(() => import("./module/recruiter/talent/TalentPoolsPage"));
const TalentPoolDetailPage = lazyWithRetry(() => import("./module/recruiter/talent/TalentPoolDetailPage"));
const DrivesListPage = lazyWithRetry(() => import("./module/recruiter/drives/DrivesListPage"));
const CreateDrivePage = lazyWithRetry(() => import("./module/recruiter/drives/CreateDrivePage"));
const DriveDetailPage = lazyWithRetry(() => import("./module/recruiter/drives/DriveDetailPage"));
const RecruiterProfilePage = lazyWithRetry(() => import("./module/recruiter/profile/RecruiterProfilePage"));

// HR Management pages
const HRDashboardPage = lazyWithRetry(() => import("./module/recruiter/hr/HRDashboardPage"));
const EmployeesPage = lazyWithRetry(() => import("./module/recruiter/hr/EmployeesPage"));
const EmployeeDetailPage = lazyWithRetry(() => import("./module/recruiter/hr/EmployeeDetailPage"));
const DepartmentsPage = lazyWithRetry(() => import("./module/recruiter/hr/DepartmentsPage"));
const LeavePage = lazyWithRetry(() => import("./module/recruiter/hr/LeavePage"));
const AttendancePage = lazyWithRetry(() => import("./module/recruiter/hr/AttendancePage"));
const HRInterviewsPage = lazyWithRetry(() => import("./module/recruiter/hr/InterviewsPage"));
const TasksPage = lazyWithRetry(() => import("./module/recruiter/hr/TasksPage"));
const PerformancePage = lazyWithRetry(() => import("./module/recruiter/hr/PerformancePage"));
const PayrollPage = lazyWithRetry(() => import("./module/recruiter/hr/PayrollPage"));
const ReimbursementsPage = lazyWithRetry(() => import("./module/recruiter/hr/ReimbursementsPage"));
const OnboardingPage = lazyWithRetry(() => import("./module/recruiter/hr/OnboardingPage"));
const CompliancePage = lazyWithRetry(() => import("./module/recruiter/hr/CompliancePage"));
const WorkflowsPage = lazyWithRetry(() => import("./module/recruiter/hr/WorkflowsPage"));
const RolesPage = lazyWithRetry(() => import("./module/recruiter/hr/RolesPage"));

// Student new feature pages
const CampusDrivesPage = lazyWithRetry(() => import("./module/student/campus/CampusDrivesPage"));
const CampusDriveDetailPage = lazyWithRetry(() => import("./module/student/campus/CampusDriveDetailPage"));

// Admin pages
const AdminLoginPage = lazyWithRetry(() => import("./module/admin/AdminLoginPage"));
const AdminLayout = lazyWithRetry(() => import("./module/admin/AdminLayout"));
const AdminDashboard = lazyWithRetry(() => import("./module/admin/AdminDashboard"));
const UsersListPage = lazyWithRetry(() => import("./module/admin/users/UsersListPage"));
const UserDetailPage = lazyWithRetry(() => import("./module/admin/users/UserDetailPage"));
const AdminJobsListPage = lazyWithRetry(() => import("./module/admin/jobs/AdminJobsListPage"));
const ActivityLogsPage = lazyWithRetry(() => import("./module/admin/activity/ActivityLogsPage"));
const AdminCompaniesPage = lazyWithRetry(() => import("./module/admin/companies/AdminCompaniesPage"));
const AdminReviewsPage = lazyWithRetry(() => import("./module/admin/reviews/AdminReviewsPage"));
const AdminContributionsPage = lazyWithRetry(() => import("./module/admin/contributions/AdminContributionsPage"));
const AdminSubscribersPage = lazyWithRetry(() => import("./module/admin/AdminSubscribersPage"));
const AdminBlogPage = lazyWithRetry(() => import("./module/admin/blog/AdminBlogPage"));
const AdminBlogEditor = lazyWithRetry(() => import("./module/admin/blog/AdminBlogEditor"));
const AdminDsaPage = lazyWithRetry(() => import("./module/admin/dsa/AdminDsaPage"));
const AdminAptitudePage = lazyWithRetry(() => import("./module/admin/aptitude/AdminAptitudePage"));
const AdminSkillTestsPage = lazyWithRetry(() => import("./module/admin/skill-tests/AdminSkillTestsPage"));
const AdminHackathonsPage = lazyWithRetry(() => import("./module/admin/hackathons/AdminHackathonsPage"));
const AdminBadgesPage = lazyWithRetry(() => import("./module/admin/AdminBadgesPage"));
const AdminAIProvidersPage = lazyWithRetry(() => import("./module/admin/ai/AdminAIProvidersPage"));
const AdminExternalJobsPage = lazyWithRetry(() => import("./module/admin/external-jobs/AdminExternalJobsPage"));

function JobDetailOrRedirect() {
  const { isAuthenticated, user } = useAuthStore();
  const { id } = useParams();
  if (isAuthenticated && user?.role === "STUDENT") {
    return <Navigate to={`/student/jobs/${id}`} replace />;
  }
  return <JobDetailPage />;
}

function ApplyRedirect() {
  const { jobId } = useParams();
  return <Navigate to={`/student/jobs/${jobId}/apply`} replace />;
}

function ProfileRedirect() {
  const { id } = useParams();
  const { user } = useAuthStore();
  const base = user?.role === "ADMIN" ? "/admin" : "/recruiters";
  return <Navigate to={`${base}/profile/${id}`} replace />;
}

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
          <Route path="/verify-email" element={<VerifyEmailPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/jobs" element={<JobBrowsePage />} />
          <Route path="/jobs/t/:slug" element={<JobLandingPage />} />
          <Route path="/jobs/:id" element={<JobDetailOrRedirect />} />
          <Route path="/jobs/ext/:slug" element={<ExternalJobDetailPage />} />
          <Route path="/internships" element={<GovInternshipsPage />} />
          <Route path="/external-jobs" element={<ScrapedJobsPage />} />
          <Route path="/external-jobs/:id" element={<ScrapedJobDetailPage />} />
          <Route path="/companies" element={<CompanyListPage />} />
          <Route path="/companies/:slug" element={<CompanyDetailPage />} />
          <Route path="/yc/:slug" element={<YCCompanyDetailPage />} />
          <Route path="/ats-score" element={<PublicAtsPage />} />
          <Route path="/grants" element={<GrantsPage />} />
          <Route path="/for-recruiters" element={<RecruiterLandingPage />} />
          <Route path="/recruiter/login" element={<RecruiterLoginPage />} />
          <Route path="/recruiter/register" element={<RecruiterRegisterPage />} />
          <Route path="/opensource" element={<PublicOpenSourcePage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          {/* Legal Pages */}
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/shipping" element={<ShippingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/refund" element={<RefundPage />} />
          {/* Learning Hub - all learning content under /learn */}
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
            <Route path="typescript" element={<TsLessonsPage />} />
            <Route path="typescript/:sectionSlug" element={<TsSectionPage />} />
            <Route path="typescript/:sectionSlug/:lessonId" element={<TsLessonDetailPage />} />
            <Route path="react" element={<ReactLessonsPage />} />
            <Route path="react/:sectionSlug" element={<ReactSectionPage />} />
            <Route path="react/:sectionSlug/:lessonId" element={<ReactLessonDetailPage />} />
            <Route path="fastapi" element={<FastApiLessonsPage />} />
            <Route path="fastapi/:sectionSlug" element={<FastApiSectionPage />} />
            <Route path="fastapi/:sectionSlug/:lessonId" element={<FastApiLessonDetailPage />} />
            <Route path="flask" element={<FlaskLessonsPage />} />
            <Route path="flask/:sectionSlug" element={<FlaskSectionPage />} />
            <Route path="flask/:sectionSlug/:lessonId" element={<FlaskLessonDetailPage />} />
            <Route path="django" element={<DjangoLessonsPage />} />
            <Route path="django/:sectionSlug" element={<DjangoSectionPage />} />
            <Route path="django/:sectionSlug/:lessonId" element={<DjangoLessonDetailPage />} />
            <Route path="nodejs" element={<NodeLessonsPage />} />
            <Route path="nodejs/:sectionSlug" element={<NodeSectionPage />} />
            <Route path="nodejs/:sectionSlug/:lessonId" element={<NodeLessonDetailPage />} />
            <Route path="python" element={<PythonLessonsPage />} />
            <Route path="python/:sectionSlug" element={<PythonSectionPage />} />
            <Route path="python/:sectionSlug/:lessonId" element={<PythonLessonDetailPage />} />
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
            <Route path="aptitude/:slug" element={<AptitudeTheoryPage />} />
            <Route path="aptitude/:slug/practice" element={<AptitudeTopicPage />} />
            <Route path="blockchain" element={<BlockchainLessonsPage />} />
            <Route path="blockchain/:sectionSlug" element={<BlockchainSectionPage />} />
            <Route path="blockchain/:sectionSlug/:lessonId" element={<BlockchainLessonDetailPage />} />
            <Route path="interview" element={<InterviewLessonsPage />} />
            <Route path="interview/:sectionSlug" element={<InterviewSectionPage />} />
            <Route path="interview/:sectionSlug/:questionId" element={<InterviewQuestionPage />} />
          </Route>

          {/* Legacy redirects */}
          <Route path="/dsa/*" element={<Navigate to="/learn/dsa" replace />} />
          <Route path="/sql/*" element={<Navigate to="/learn/sql" replace />} />
          <Route path="/javascript/*" element={<Navigate to="/learn/javascript" replace />} />
          <Route path="/aptitude/*" element={<Navigate to="/learn/aptitude" replace />} />
          <Route path="/student/learn" element={<Navigate to="/learn" replace />} />
          <Route path="/student/javascript/*" element={<Navigate to="/learn/javascript" replace />} />
          <Route path="/html/*" element={<Navigate to="/learn/html" replace />} />
          <Route path="/css/*" element={<Navigate to="/learn/css" replace />} />
          <Route path="/student/html/*" element={<Navigate to="/learn/html" replace />} />
          <Route path="/student/css/*" element={<Navigate to="/learn/css" replace />} />
          <Route path="/typescript/*" element={<Navigate to="/learn/typescript" replace />} />
          <Route path="/student/typescript/*" element={<Navigate to="/learn/typescript" replace />} />
          <Route path="/react/*" element={<Navigate to="/learn/react" replace />} />
          <Route path="/student/react/*" element={<Navigate to="/learn/react" replace />} />
          <Route path="/student/sql/*" element={<Navigate to="/learn/sql" replace />} />
          <Route path="/student/dsa/*" element={<Navigate to="/learn/dsa" replace />} />
          <Route path="/student/aptitude/*" element={<Navigate to="/learn/aptitude" replace />} />
          <Route path="/fastapi/*" element={<Navigate to="/learn/fastapi" replace />} />
          <Route path="/flask/*" element={<Navigate to="/learn/flask" replace />} />
          <Route path="/django/*" element={<Navigate to="/learn/django" replace />} />
          <Route path="/python/*" element={<Navigate to="/learn/python" replace />} />
          <Route path="/student/python/*" element={<Navigate to="/learn/python" replace />} />

          {/* Standalone proctored test - no layout chrome */}
          <Route path="/test/:testId" element={<ProtectedRoute role="STUDENT"><SkillTestPage /></ProtectedRoute>} />

          {/* Student protected routes */}
          <Route path="/jobs/:jobId/apply" element={<ProtectedRoute role="STUDENT"><ApplyRedirect /></ProtectedRoute>} />
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
            <Route path="ats/latex-templates" element={<LatexTemplatesGallery />} />
            <Route path="skill-verification" element={<SkillVerificationPage />} />
            <Route path="mock-interview" element={<MockInterviewPage />} />
            <Route path="companies/add" element={<AddCompanyPage />} />
            <Route path="grants" element={<GrantsPage />} />
            <Route path="grants/tracker" element={<GrantTrackerPage />} />
            <Route path="grants/hackathons" element={<HackathonCalendarPage />} />
            <Route path="opensource" element={<RepoDiscoveryPage />} />
            <Route path="opensource/gsoc" element={<GSoCReposPage />} />
            <Route path="opensource/programs" element={<ProgramTrackerPage />} />
            <Route path="opensource/first-pr" element={<FirstPRRoadmapPage />} />
            <Route path="opensource/first-pr/:sectionSlug" element={<FirstPRSectionPage />} />
            <Route path="opensource/gsoc-proposal" element={<GSoCProposalPage />} />
            <Route path="opensource/gsoc-proposal/:sectionSlug" element={<GSoCProposalStepPage />} />
            <Route path="opensource/analytics" element={<OpenSourceAnalyticsPage />} />
<Route path="campus-drives" element={<CampusDrivesPage />} />
            <Route path="campus-drives/:id" element={<CampusDriveDetailPage />} />
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
            <Route path="talent-pools" element={<TalentPoolsPage />} />
            <Route path="talent-pools/:poolId" element={<TalentPoolDetailPage />} />
            <Route path="campus-drives" element={<DrivesListPage />} />
            <Route path="campus-drives/new" element={<CreateDrivePage />} />
            <Route path="campus-drives/:id" element={<DriveDetailPage />} />
            <Route path="profile" element={<RecruiterProfilePage />} />
            <Route path="profile/:id" element={<PublicProfilePage />} />
            {/* HR Management */}
            <Route path="hr" element={<HRDashboardPage />} />
            <Route path="hr/employees" element={<EmployeesPage />} />
            <Route path="hr/employees/:id" element={<EmployeeDetailPage />} />
            <Route path="hr/departments" element={<DepartmentsPage />} />
            <Route path="hr/leave" element={<LeavePage />} />
            <Route path="hr/attendance" element={<AttendancePage />} />
            <Route path="hr/interviews" element={<HRInterviewsPage />} />
            <Route path="hr/tasks" element={<TasksPage />} />
            <Route path="hr/performance" element={<PerformancePage />} />
            <Route path="hr/payroll" element={<PayrollPage />} />
            <Route path="hr/reimbursements" element={<ReimbursementsPage />} />
            <Route path="hr/onboarding" element={<OnboardingPage />} />
            <Route path="hr/compliance" element={<CompliancePage />} />
            <Route path="hr/workflows" element={<WorkflowsPage />} />
            <Route path="hr/roles" element={<RolesPage />} />
          </Route>

          {/* Profile view redirect → recruiter layout */}
          <Route path="/profile/:id" element={<ProtectedRoute><ProfileRedirect /></ProtectedRoute>} />

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
            <Route path="dsa" element={<AdminDsaPage />} />
            <Route path="aptitude" element={<AdminAptitudePage />} />
            <Route path="skill-tests" element={<AdminSkillTestsPage />} />
            <Route path="hackathons" element={<AdminHackathonsPage />} />
            <Route path="badges" element={<AdminBadgesPage />} />
            <Route path="ai-providers" element={<AdminAIProvidersPage />} />
            <Route path="external-jobs" element={<AdminExternalJobsPage />} />
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
