import { useState } from "react";
import { useParams, useNavigate, Link, useLocation } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "../../../components/Navbar";
import { DynamicFieldRenderer } from "../../../components/DynamicFieldRenderer";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { Job, CustomFieldDefinition } from "../../../lib/types";
import { LoadingScreen } from "../../../components/LoadingScreen";

export default function ApplyPage() {
  const { jobId, id } = useParams();
  const actualJobId = jobId || id;
  const navigate = useNavigate();
  const location = useLocation();
  const inStudentLayout = location.pathname.startsWith("/student/");

  const { data: job, isLoading: loading } = useQuery({
    queryKey: queryKeys.jobs.detail(actualJobId!),
    queryFn: () => api.get(`/jobs/${actualJobId}`).then((res) => res.data.job as Job),
    enabled: !!actualJobId,
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [customFieldAnswers, setCustomFieldAnswers] = useState<Record<string, unknown>>({});
  const [fileUploads, setFileUploads] = useState<Record<string, File>>({});
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [coverLetter, setCoverLetter] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      let resumeUrl: string | undefined;

      // Upload resume if provided
      if (resumeFile) {
        const formData = new FormData();
        formData.append("file", resumeFile);
        const uploadRes = await api.post("/upload/profile-resume", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        resumeUrl = uploadRes.data.file.url;
      }

      // Upload any custom field files to S3
      const finalAnswers = { ...customFieldAnswers };
      for (const [fieldId, file] of Object.entries(fileUploads)) {
        const formData = new FormData();
        formData.append("file", file);
        const uploadRes = await api.post("/upload/resume", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        finalAnswers[fieldId] = uploadRes.data.file.url;
      }

      await api.post(`/student/jobs/${actualJobId}/apply`, {
        customFieldAnswers: finalAnswers,
        resumeUrl,
        coverLetter: coverLetter || undefined,
      });

      navigate("/student/applications");
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string } } };
      setError(error.response?.data?.message || "Failed to submit application");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    if (inStudentLayout) return <LoadingScreen />;
    return <div className="min-h-screen bg-gray-50 dark:bg-gray-950"><Navbar /><LoadingScreen /></div>;
  }
  if (!job) {
    if (inStudentLayout) return <div className="text-center pt-12 text-gray-500">Job not found</div>;
    return <div className="min-h-screen bg-gray-50 dark:bg-gray-950"><Navbar /><div className="text-center pt-24 text-gray-500">Job not found</div></div>;
  }

  const customFields = (job.customFields || []) as CustomFieldDefinition[];
  const backPath = inStudentLayout ? `/student/jobs/${actualJobId}` : `/jobs/${actualJobId}`;

  const content = (
    <div className={inStudentLayout ? "max-w-2xl pb-12" : "max-w-2xl mx-auto px-6 pt-24 pb-12"}>
      <Link to={backPath} className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white mb-6 no-underline transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Job
      </Link>

      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Apply to {job.title}</h1>
      <p className="text-gray-500 mb-6">{job.company} &middot; {job.location}</p>

      {error && <div className="p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-600 dark:text-red-400 mb-4">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Resume Upload */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-gray-800">
          <h2 className="text-lg font-semibold mb-4 dark:text-white">Resume</h2>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-gray-900 file:text-white hover:file:bg-gray-700 file:cursor-pointer dark:file:bg-white dark:file:text-gray-950 dark:hover:file:bg-gray-200"
          />
        </div>

        {/* Cover Letter */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-gray-800">
          <h2 className="text-lg font-semibold mb-4 dark:text-white">Cover Letter (Optional)</h2>
          <textarea
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 min-h-[120px] dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
            placeholder="Tell the recruiter why you're a great fit..."
          />
        </div>

        {/* Custom Fields */}
        {customFields.length > 0 && (
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-gray-800">
            <h2 className="text-lg font-semibold mb-4 dark:text-white">Additional Questions</h2>
            <DynamicFieldRenderer
              fields={customFields}
              values={customFieldAnswers}
              onChange={(fieldId, value) => setCustomFieldAnswers({ ...customFieldAnswers, [fieldId]: value })}
              onFileSelect={(fieldId, file) => setFileUploads((prev) => ({ ...prev, [fieldId]: file }))}
            />
          </div>
        )}

        <button type="submit" disabled={submitting}
          className="w-full py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors disabled:opacity-50 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200">
          {submitting ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  );

  if (inStudentLayout) return content;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />
      {content}
    </div>
  );
}
