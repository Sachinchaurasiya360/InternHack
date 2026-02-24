import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Toaster } from "react-hot-toast";
import LandingPage from "./module/LandingPage/landingPage";
import LoginPage from "./module/auth/LoginPage";
import RegisterPage from "./module/auth/RegisterPage";
import JobBrowsePage from "./module/student/jobs/JobBrowsePage";
import JobDetailPage from "./module/student/jobs/JobDetailPage";
import ApplyPage from "./module/student/applications/ApplyPage";
import RecruiterLayout from "./module/recruiter/RecruiterLayout";
import RecruiterDashboard from "./module/recruiter/RecruiterDashboard";
import RecruiterJobsList from "./module/recruiter/jobs/RecruiterJobsList";
import CreateJobPage from "./module/recruiter/jobs/CreateJobPage";
import EditJobPage from "./module/recruiter/jobs/EditJobPage";
import ApplicationsList from "./module/recruiter/applications/ApplicationsList";
import ApplicationDetail from "./module/recruiter/applications/ApplicationDetail";
import JobAnalyticsPage from "./module/recruiter/analytics/JobAnalyticsPage";
import StudentLayout from "./module/student/StudentLayout";
import MyApplicationsPage from "./module/student/applications/MyApplicationsPage";
import ApplicationProgressPage from "./module/student/applications/ApplicationProgressPage";
import ScrapedJobsPage from "./module/scraped-jobs/ScrapedJobsPage";
import ScrapedJobDetailPage from "./module/scraped-jobs/ScrapedJobDetailPage";
import AtsLandingPage from "./module/student/ats/AtsLandingPage";
import PublicAtsPage from "./module/student/ats/PublicAtsPage";
import AtsScorePage from "./module/student/ats/AtsScorePage";
import AtsHistoryPage from "./module/student/ats/AtsHistoryPage";
import AtsScoreDetailPage from "./module/student/ats/AtsScoreDetailPage";
import ResumeBuilderPage from "./module/student/ats/ResumeBuilderPage";
import CoverLetterPage from "./module/student/ats/CoverLetterPage";
import CareerExplorePage from "./module/career/CareerExplorePage";
import CareerDetailPage from "./module/career/CareerDetailPage";
import MyCareerPathsPage from "./module/career/MyCareerPathsPage";
import CareerProgressPage from "./module/career/CareerProgressPage";
import CompanyListPage from "./module/student/companies/CompanyListPage";
import CompanyDetailPage from "./module/student/companies/CompanyDetailPage";
import AddCompanyPage from "./module/student/companies/AddCompanyPage";
import StudentProfilePage from "./module/student/profile/StudentProfilePage";
import GrantsPage from "./module/student/grants/GrantsPage";
import RepoDiscoveryPage from "./module/student/opensource/RepoDiscoveryPage";
import PublicOpenSourcePage from "./module/student/opensource/PublicOpenSourcePage";
import CheckoutPage from "./module/student/checkout/CheckoutPage";
import AdminLoginPage from "./module/admin/AdminLoginPage";
import AdminLayout from "./module/admin/AdminLayout";
import AdminDashboard from "./module/admin/AdminDashboard";
import UsersListPage from "./module/admin/users/UsersListPage";
import UserDetailPage from "./module/admin/users/UserDetailPage";
import AdminJobsListPage from "./module/admin/jobs/AdminJobsListPage";
import ActivityLogsPage from "./module/admin/activity/ActivityLogsPage";
import AdminCompaniesPage from "./module/admin/companies/AdminCompaniesPage";
import AdminReviewsPage from "./module/admin/reviews/AdminReviewsPage";
import AdminContributionsPage from "./module/admin/contributions/AdminContributionsPage";
import AdminSubscribersPage from "./module/admin/AdminSubscribersPage";
import AdminCareersPage from "./module/admin/careers/AdminCareersPage";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
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
          <Route path="companies/add" element={<AddCompanyPage />} />
          <Route path="grants" element={<GrantsPage />} />
          <Route path="opensource" element={<RepoDiscoveryPage />} />
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
