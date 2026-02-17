import { BrowserRouter, Route, Routes } from "react-router";
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

        {/* Student protected routes */}
        <Route path="/jobs/:jobId/apply" element={<ProtectedRoute role="STUDENT"><ApplyPage /></ProtectedRoute>} />
        <Route path="/student" element={<ProtectedRoute role="STUDENT"><StudentLayout /></ProtectedRoute>}>
          <Route path="applications" element={<MyApplicationsPage />} />
          <Route path="applications/:applicationId" element={<ApplicationProgressPage />} />
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
