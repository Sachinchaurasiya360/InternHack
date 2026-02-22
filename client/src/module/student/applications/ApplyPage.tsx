import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "../../../components/Navbar";
import { DynamicFieldRenderer } from "../../../components/DynamicFieldRenderer";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { Job, CustomFieldDefinition } from "../../../lib/types";

export default function ApplyPage() {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const { data: job, isLoading: loading } = useQuery({
    queryKey: queryKeys.jobs.detail(jobId!),
    queryFn: () => api.get(`/jobs/${jobId}`).then((res) => res.data.job as Job),
    enabled: !!jobId,
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [customFieldAnswers, setCustomFieldAnswers] = useState<Record<string, unknown>>({});
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
        const uploadRes = await api.post("/upload/resume", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        resumeUrl = uploadRes.data.file.url;
      }

      await api.post(`/student/jobs/${jobId}/apply`, {
        customFieldAnswers,
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

  if (loading) return <div className="min-h-screen bg-gray-50"><Navbar /><div className="flex items-center justify-center h-64 pt-24 text-gray-500">Loading...</div></div>;
  if (!job) return <div className="min-h-screen bg-gray-50"><Navbar /><div className="text-center pt-24 text-gray-500">Job not found</div></div>;

  const customFields = (job.customFields || []) as CustomFieldDefinition[];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-2xl mx-auto px-6 pt-24 pb-12">
        <Link to={`/jobs/${jobId}`} className="flex items-center gap-2 text-sm text-gray-500 hover:text-black mb-6 no-underline">
          <ArrowLeft className="w-4 h-4" /> Back to Job
        </Link>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">Apply to {job.title}</h1>
        <p className="text-gray-500 mb-6">{job.company} &middot; {job.location}</p>

        {error && <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600 mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Resume Upload */}
          <div className="bg-white p-6 rounded-xl border border-gray-100">
            <h2 className="text-lg font-semibold mb-4">Resume</h2>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-gray-800 file:cursor-pointer"
            />
          </div>

          {/* Cover Letter */}
          <div className="bg-white p-6 rounded-xl border border-gray-100">
            <h2 className="text-lg font-semibold mb-4">Cover Letter (Optional)</h2>
            <textarea
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20 min-h-[120px]"
              placeholder="Tell the recruiter why you're a great fit..."
            />
          </div>

          {/* Custom Fields */}
          {customFields.length > 0 && (
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <h2 className="text-lg font-semibold mb-4">Additional Questions</h2>
              <DynamicFieldRenderer
                fields={customFields}
                values={customFieldAnswers}
                onChange={(fieldId, value) => setCustomFieldAnswers({ ...customFieldAnswers, [fieldId]: value })}
              />
            </div>
          )}

          <button type="submit" disabled={submitting}
            className="w-full py-3 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors disabled:opacity-50">
            {submitting ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
}
