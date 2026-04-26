import { lazy, Suspense, useEffect, type ComponentType } from "react";
import { Navigate, Route, Routes, useParams, useNavigate } from "react-router";
import { useAuthStore } from "./lib/auth.store";
import toast, { Toaster } from "./components/ui/toast";
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
        return new Promise(() => {}); // never resolves, page is reloading
      }
      sessionStorage.removeItem(key);
      throw err;
    }),
  );
}

// Public pages
const LandingPage = lazyWithRetry(() => import("./module/LandingPage/landingPage"));
const LoginPage = lazyWithRetry(() => import("./module/auth/LoginPage"));
const RegisterPage = lazyWithRetry(() => import("./module/auth/RegisterPage"));
const VerifyEmailPage = lazyWithRetry(() => import("./module/auth/VerifyEmailPage"));
const ForgotPasswordPage = lazyWithRetry(() => import("./module/auth/ForgotPasswordPage"));
const JobBrowsePage = lazyWithRetry(() => import("./module/student/jobs/JobBrowsePage"));
const JobDetailPage = lazyWithRetry(() => import("./module/student/jobs/JobDetailPage"));
const JobLandingPage = lazyWithRetry(() => import("./module/student/jobs/JobLandingPage"));
const ScrapedJobsPage = lazyWithRetry(() => import("./module/scraped-jobs/ScrapedJobsPage"));
const ScrapedJobDetailPage = lazyWithRetry(() => import("./module/scraped-jobs/ScrapedJobDetailPage"));
const CompanyListPage = lazyWithRetry(() => import("./module/student/companies/CompanyListPage"));
const CompanyDetailPage = lazyWithRetry(() => import("./module/student/companies/CompanyDetailPage"));
const PublicAtsPage = lazyWithRetry(() => import("./module/student/ats/PublicAtsPage"));
const GrantsPage = lazyWithRetry(() => import("./module/student/grants/GrantsPage"));
const PublicOpenSourcePage = lazyWithRetry(() => import("./module/student/opensource/PublicOpenSourcePage"));
const BlogListPage = lazyWithRetry(() => import("./module/blog/BlogListPage"));
const BlogPostPage = lazyWithRetry(() => import("./module/blog/BlogPostPage"));
const RecruiterLandingPage = lazyWithRetry(() => import("./module/recruiter/RecruiterLandingPage"));
const AptitudeCategoriesPage = lazyWithRetry(() => import("./module/student/aptitude/AptitudeCategoriesPage"));
const AptitudeTopicPage = lazyWithRetry(() => import("./module/student/aptitude/AptitudeTopicPage"));
const AptitudeCompaniesPage = lazyWithRetry(() => import("./module/student/aptitude/AptitudeCompaniesPage"));
const DsaTopicsPage = lazyWithRetry(() => import("./module/student/dsa/DsaTopicsPage"));
const DsaTopicDetailPage = lazyWithRetry(() => import("./module/student/dsa/DsaTopicDetailPage"));
const DsaCompaniesPage = lazyWithRetry(() => import("./module/student/dsa/DsaCompaniesPage"));
const DsaPatternsPage = lazyWithRetry(() => import("./module/student/dsa/DsaPatternsPage"));
const DsaBookmarksPage = lazyWithRetry(() => import("./module/student/dsa/DsaBookmarksPage"));
const DsaProblemDetailPage = lazyWithRetry(() => import("./module/student/dsa/DsaProblemDetailPage"));
const DsaFoundationsHubPage = lazyWithRetry(() => import("./module/student/learn/dsa-foundations/DsaFoundationsHubPage"));
const DsaFoundationsLevelPage = lazyWithRetry(() => import("./module/student/learn/dsa-foundations/DsaFoundationsLevelPage"));
const DsaFoundationsLessonPage = lazyWithRetry(() => import("./module/student/learn/dsa-foundations/DsaFoundationsLessonPage"));
const YCCompanyDetailPage = lazyWithRetry(() => import("./module/student/companies/YCCompanyDetailPage"));
const GovInternshipsPage = lazyWithRetry(() => import("./module/student/jobs/GovInternshipsPage"));
const ExternalJobDetailPage = lazyWithRetry(() => import("./module/student/jobs/ExternalJobDetailPage"));
const AptitudeTheoryPage = lazyWithRetry(() => import("./module/student/aptitude/AptitudeTheoryPage"));

// Legal pages
const TermsPage = lazyWithRetry(() => import("./module/legal/TermsPage"));
const PrivacyPage = lazyWithRetry(() => import("./module/legal/PrivacyPage"));
const ShippingPage = lazyWithRetry(() => import("./module/legal/ShippingPage"));
const ContactPage = lazyWithRetry(() => import("./module/legal/ContactPage"));
const RefundPage = lazyWithRetry(() => import("./module/legal/RefundPage"));

// Student pages
const ApplyPage = lazyWithRetry(() => import("./module/student/applications/ApplyPage"));
const StudentLayout = lazyWithRetry(() => import("./module/student/StudentLayout"));
const MyApplicationsPage = lazyWithRetry(() => import("./module/student/applications/MyApplicationsPage"));
const ApplicationProgressPage = lazyWithRetry(() => import("./module/student/applications/ApplicationProgressPage"));
const AtsLandingPage = lazyWithRetry(() => import("./module/student/ats/AtsLandingPage"));
const AtsScorePage = lazyWithRetry(() => import("./module/student/ats/AtsScorePage"));
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
const ReadCodebasePage = lazyWithRetry(() => import("./module/student/opensource/ReadCodebasePage"));
const ReadCodebaseSectionPage = lazyWithRetry(() => import("./module/student/opensource/ReadCodebaseSectionPage"));
const GitCheatsheetPage = lazyWithRetry(() => import("./module/student/opensource/GitCheatsheetPage"));
const GitCheatsheetSectionPage = lazyWithRetry(() => import("./module/student/opensource/GitCheatsheetSectionPage"));
const CommTemplatesPage = lazyWithRetry(() => import("./module/student/opensource/CommTemplatesPage"));
const CommTemplatesSectionPage = lazyWithRetry(() => import("./module/student/opensource/CommTemplatesSectionPage"));
const CICDGuidePage = lazyWithRetry(() => import("./module/student/opensource/CICDGuidePage"));
const CICDGuideSectionPage = lazyWithRetry(() => import("./module/student/opensource/CICDGuideSectionPage"));
const OpenSourceLayout = lazyWithRetry(() => import("./module/student/opensource/OpenSourceLayout"));
const GrantTrackerPage = lazyWithRetry(() => import("./module/student/grants/GrantTrackerPage"));
const CheckoutPage = lazyWithRetry(() => import("./module/student/checkout/CheckoutPage"));
const SqlPracticePage = lazyWithRetry(() => import("./module/student/sql/SqlPracticePage"));
const SkillVerificationPage = lazyWithRetry(() => import("./module/student/skill-verification/SkillVerificationPage"));
const SkillTestPage = lazyWithRetry(() => import("./module/student/skill-verification/SkillTestPage"));
const SqlExercisePage = lazyWithRetry(() => import("./module/student/sql/SqlExercisePage"));
const SqlPlaygroundPage = lazyWithRetry(() => import("./module/student/sql/SqlPlaygroundPage"));
const MockInterviewPage = lazyWithRetry(() => import("./module/student/mock-interview/MockInterviewPage"));
const LearnLayout = lazyWithRetry(() => import("./module/student/learn/LearnLayout"));
const LearnHubPage = lazyWithRetry(() => import("./module/student/learn/LearnHubPage"));
const ExamPrepHubPage = lazyWithRetry(() => import("./module/student/exam-prep/ExamPrepHubPage"));
const ExamDetailPage = lazyWithRetry(() => import("./module/student/exam-prep/ExamDetailPage"));
const ExamMockPage = lazyWithRetry(() => import("./module/student/exam-prep/ExamRunnerPage").then((m) => ({ default: m.ExamMockPage })));
const ExamSectionPage = lazyWithRetry(() => import("./module/student/exam-prep/ExamRunnerPage").then((m) => ({ default: m.ExamSectionPage })));
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
const DataAnalyticsLessonsPage = lazyWithRetry(() => import("./module/student/data-analytics/DataAnalyticsLessonsPage"));
const DataAnalyticsSectionPage = lazyWithRetry(() => import("./module/student/data-analytics/DataAnalyticsSectionPage"));
const DataAnalyticsLessonDetailPage = lazyWithRetry(() => import("./module/student/data-analytics/DataAnalyticsLessonDetailPage"));

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
const SavedCandidatesPage = lazyWithRetry(() => import("./module/recruiter/talent/SavedCandidatesPage"));
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

// InternHack AI pages
const JobAgentPage = lazyWithRetry(() => import("./module/student/job-agent/JobAgentPage"));

// 404
const NotFoundPage = lazyWithRetry(() => import("./module/NotFoundPage"));

// Student new feature pages
const SignalsPage = lazyWithRetry(() => import("./module/student/signals/SignalsPage"));
const SignalDetailPage = lazyWithRetry(() => import("./module/student/signals/SignalDetailPage"));
const InterviewsDirectoryPage = lazyWithRetry(() => import("./module/student/interviews/InterviewsDirectoryPage"));
const InterviewExperienceDetailPage = lazyWithRetry(() => import("./module/student/interviews/InterviewExperienceDetailPage"));
const ShareInterviewPage = lazyWithRetry(() => import("./module/student/interviews/ShareInterviewPage"));

// Admin pages
const AdminLoginPage = lazyWithRetry(() => import("./module/admin/AdminLoginPage"));
const AdminLayout = lazyWithRetry(() => import("./module/admin/AdminLayout"));
const AdminDashboard = lazyWithRetry(() => import("./module/admin/AdminDashboard"));
const UsersListPage = lazyWithRetry(() => import("./module/admin/users/UsersListPage"));
const UserDetailPage = lazyWithRetry(() => import("./module/admin/users/UserDetailPage"));
const AdminJobsListPage = lazyWithRetry(() => import("./module/admin/jobs/AdminJobsListPage"));
const ErrorLogsPage = lazyWithRetry(() => import("./module/admin/activity/ActivityLogsPage"));
const AdminCompaniesPage = lazyWithRetry(() => import("./module/admin/companies/AdminCompaniesPage"));
const AdminReviewsPage = lazyWithRetry(() => import("./module/admin/reviews/AdminReviewsPage"));
const AdminContributionsPage = lazyWithRetry(() => import("./module/admin/contributions/AdminContributionsPage"));
const AdminSubscribersPage = lazyWithRetry(() => import("./module/admin/AdminSubscribersPage"));
const AdminBlogPage = lazyWithRetry(() => import("./module/admin/blog/AdminBlogPage"));
const AdminBlogEditor = lazyWithRetry(() => import("./module/admin/blog/AdminBlogEditor"));
const AdminDsaPage = lazyWithRetry(() => import("./module/admin/dsa/AdminDsaPage"));
const AdminAptitudePage = lazyWithRetry(() => import("./module/admin/aptitude/AdminAptitudePage"));
const AdminSkillTestsPage = lazyWithRetry(() => import("./module/admin/skill-tests/AdminSkillTestsPage"));
const AdminBadgesPage = lazyWithRetry(() => import("./module/admin/AdminBadgesPage"));
const AdminAIProvidersPage = lazyWithRetry(() => import("./module/admin/ai/AdminAIProvidersPage"));
const AdminExternalJobsPage = lazyWithRetry(() => import("./module/admin/external-jobs/AdminExternalJobsPage"));
const AdminRepoRequestsPage = lazyWithRetry(() => import("./module/admin/repo-requests/AdminRepoRequestsPage"));
const AdminBroadcastEmailPage = lazyWithRetry(() => import("./module/admin/broadcast/AdminBroadcastEmailPage"));
const AdminSignalsPage = lazyWithRetry(() => import("./module/admin/signals/AdminSignalsPage"));
const AdminInterviewsPage = lazyWithRetry(() => import("./module/admin/interviews/AdminInterviewsPage"));

function JobBrowseOrRedirect() {
  const { isAuthenticated, user } = useAuthStore();
  if (isAuthenticated && user?.role === "STUDENT") {
    return <Navigate to="/student/jobs" replace />;
  }
  return <JobBrowsePage />;
}

function JobDetailOrRedirect() {
  const { isAuthenticated, user } = useAuthStore();
  const { id } = useParams();
  if (isAuthenticated && user?.role === "STUDENT") {
    return <Navigate to={`/student/jobs/${id}`} replace />;
  }
  return <JobDetailPage />;
}

function CompanyListOrRedirect() {
  const { isAuthenticated, user } = useAuthStore();
  if (isAuthenticated && user?.role === "STUDENT") {
    return <Navigate to="/student/companies" replace />;
  }
  return <CompanyListPage />;
}

function CompanyDetailOrRedirect() {
  const { isAuthenticated, user } = useAuthStore();
  const { slug } = useParams();
  if (isAuthenticated && user?.role === "STUDENT") {
    return <Navigate to={`/student/companies/${slug}`} replace />;
  }
  return <CompanyDetailPage />;
}

function YCCompanyOrRedirect() {
  const { isAuthenticated, user } = useAuthStore();
  const { slug } = useParams();
  if (isAuthenticated && user?.role === "STUDENT") {
    return <Navigate to={`/student/yc/${slug}`} replace />;
  }
  return <YCCompanyDetailPage />;
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

/** Listens for 401 auth:expired events and redirects via React Router instead of window.location */
function AuthExpiredRedirect() {
  const navigate = useNavigate();
  useEffect(() => {
    const handler = () => {
      toast.error("Session expired. Please log in again.");
      navigate("/login", { replace: true });
    };
    window.addEventListener("auth:expired", handler);
    return () => window.removeEventListener("auth:expired", handler);
  }, [navigate]);
  return null;
}

function App() {
  return (
    <>
      <AuthExpiredRedirect />
      <Toaster />
      <ErrorBoundary>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/verify-email" element={<VerifyEmailPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/jobs" element={<JobBrowseOrRedirect />} />
          <Route path="/jobs/t/:slug" element={<JobLandingPage />} />
          <Route path="/jobs/:id" element={<JobDetailOrRedirect />} />
          <Route path="/jobs/ext/:slug" element={<ExternalJobDetailPage />} />
          <Route path="/internships" element={<GovInternshipsPage />} />
          <Route path="/external-jobs" element={<ScrapedJobsPage />} />
          <Route path="/external-jobs/:id" element={<ScrapedJobDetailPage />} />
          <Route path="/companies" element={<CompanyListOrRedirect />} />
          <Route path="/companies/:slug" element={<CompanyDetailOrRedirect />} />
          <Route path="/yc/:slug" element={<YCCompanyOrRedirect />} />
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
            <Route path="dsa/problem" element={<Navigate to="/learn/dsa" replace />} />
            <Route path="dsa/problem/:slug" element={<DsaProblemDetailPage />} />
            <Route path="dsa/companies/:company" element={<DsaCompaniesPage />} />
            <Route path="dsa/:slug" element={<DsaTopicDetailPage />} />
            <Route path="dsa-foundations" element={<DsaFoundationsHubPage />} />
            <Route path="dsa-foundations/:levelId" element={<DsaFoundationsLevelPage />} />
            <Route path="dsa-foundations/:levelId/:lessonSlug" element={<DsaFoundationsLessonPage />} />
            <Route path="aptitude" element={<AptitudeCategoriesPage />} />
            <Route path="aptitude/companies" element={<AptitudeCompaniesPage />} />
            <Route path="aptitude/:slug" element={<AptitudeTheoryPage />} />
            <Route path="aptitude/:slug/practice" element={<AptitudeTopicPage />} />
            <Route path="blockchain" element={<BlockchainLessonsPage />} />
            <Route path="blockchain/:sectionSlug" element={<BlockchainSectionPage />} />
            <Route path="blockchain/:sectionSlug/:lessonId" element={<BlockchainLessonDetailPage />} />
            <Route path="data-analytics" element={<DataAnalyticsLessonsPage />} />
            <Route path="data-analytics/:sectionSlug" element={<DataAnalyticsSectionPage />} />
            <Route path="data-analytics/:sectionSlug/:lessonId" element={<DataAnalyticsLessonDetailPage />} />
            <Route path="exam-prep" element={<ExamPrepHubPage />} />
            <Route path="exam-prep/:examId" element={<ExamDetailPage />} />
            <Route path="exam-prep/:examId/mock" element={<ExamMockPage />} />
            <Route path="exam-prep/:examId/section/:sectionId" element={<ExamSectionPage />} />
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
            <Route path="opensource" element={<OpenSourceLayout />}>
              <Route index element={<RepoDiscoveryPage />} />
              <Route path="gsoc" element={<GSoCReposPage />} />
              <Route path="programs" element={<ProgramTrackerPage />} />
              <Route path="first-pr" element={<FirstPRRoadmapPage />} />
              <Route path="first-pr/:sectionSlug" element={<FirstPRSectionPage />} />
              <Route path="gsoc-proposal" element={<GSoCProposalPage />} />
              <Route path="gsoc-proposal/:sectionSlug" element={<GSoCProposalStepPage />} />
              <Route path="analytics" element={<OpenSourceAnalyticsPage />} />
              <Route path="read-codebase" element={<ReadCodebasePage />} />
              <Route path="read-codebase/:sectionSlug" element={<ReadCodebaseSectionPage />} />
              <Route path="git-guide" element={<GitCheatsheetPage />} />
              <Route path="git-guide/:sectionSlug" element={<GitCheatsheetSectionPage />} />
              <Route path="communication" element={<CommTemplatesPage />} />
              <Route path="communication/:sectionSlug" element={<CommTemplatesSectionPage />} />
              <Route path="cicd" element={<CICDGuidePage />} />
              <Route path="cicd/:sectionSlug" element={<CICDGuideSectionPage />} />
            </Route>
            <Route path="ai-agent" element={<JobAgentPage />} />
            <Route path="signals" element={<SignalsPage />} />
            <Route path="signals/:id" element={<SignalDetailPage />} />
            <Route path="interviews" element={<InterviewsDirectoryPage />} />
            <Route path="interviews/share" element={<ShareInterviewPage />} />
            <Route path="interviews/:id" element={<InterviewExperienceDetailPage />} />
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
            <Route path="saved" element={<SavedCandidatesPage />} />
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
            <Route path="errors" element={<ErrorLogsPage />} />
            <Route path="companies" element={<AdminCompaniesPage />} />
            <Route path="reviews" element={<AdminReviewsPage />} />
            <Route path="contributions" element={<AdminContributionsPage />} />
            <Route path="subscribers" element={<AdminSubscribersPage />} />
            <Route path="dsa" element={<AdminDsaPage />} />
            <Route path="aptitude" element={<AdminAptitudePage />} />
            <Route path="skill-tests" element={<AdminSkillTestsPage />} />
            <Route path="badges" element={<AdminBadgesPage />} />
            <Route path="ai-providers" element={<AdminAIProvidersPage />} />
            <Route path="external-jobs" element={<AdminExternalJobsPage />} />
            <Route path="repo-requests" element={<AdminRepoRequestsPage />} />
            <Route path="interview-experiences" element={<AdminInterviewsPage />} />
            <Route path="signals" element={<AdminSignalsPage />} />
            <Route path="broadcast-email" element={<AdminBroadcastEmailPage />} />
            <Route path="blog" element={<AdminBlogPage />} />
            <Route path="blog/editor" element={<AdminBlogEditor />} />
            <Route path="blog/editor/:id" element={<AdminBlogEditor />} />
            <Route path="profile/:id" element={<PublicProfilePage />} />
          </Route>

          {/* 404 catch-all */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
