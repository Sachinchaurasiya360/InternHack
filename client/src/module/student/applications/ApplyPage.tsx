import { useState } from "react";
import { useParams, useNavigate, Link, useLocation } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { ArrowLeft, FileText, ExternalLink, Check, MapPin, IndianRupee, Clock, Send, Briefcase } from "lucide-react";
import { Navbar } from "../../../components/Navbar";
import { DynamicFieldRenderer } from "../../../components/DynamicFieldRenderer";
import api from "../../../lib/axios";
import { uploadDirectToS3 } from "../../../utils/upload";
import { queryKeys } from "../../../lib/query-keys";
import type { Job, CustomFieldDefinition, User } from "../../../lib/types";
import { LoadingScreen } from "../../../components/LoadingScreen";
import { Button } from "../../../components/ui/button";

function getFileNameFromUrl(url: string): string {
  try {
    const pathname = new URL(url).pathname;
    const parts = pathname.split("/");
    const full = decodeURIComponent(parts[parts.length - 1] ?? "resume.pdf");
    const match = full.match(/^(.+)-\d+-\d+(\.\w+)$/);
    return match ? `${match[1]}${match[2]}` : full;
  } catch {
    return "resume.pdf";
  }
}

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

  const { data: profile, isLoading: profileLoading } = useQuery({
    queryKey: queryKeys.profile.me(),
    queryFn: () => api.get("/auth/me").then((res) => res.data.user as User),
  });

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [customFieldAnswers, setCustomFieldAnswers] = useState<Record<string, unknown>>({});
  const [fileUploads, setFileUploads] = useState<Record<string, File>>({});
  const [selectedResume, setSelectedResume] = useState<string | null>(null);
  const [coverLetter, setCoverLetter] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const finalAnswers = { ...customFieldAnswers };
      for (const [fieldId, file] of Object.entries(fileUploads)) {
        const uploadRes = await uploadDirectToS3({
          file,
          folder: "resumes",
          endpoint: "/profile-resume",
        });
        finalAnswers[fieldId] = uploadRes.file?.url || uploadRes.fileUrl || uploadRes.url || "";
      }

      await api.post(`/student/jobs/${actualJobId}/apply`, {
        customFieldAnswers: finalAnswers,
        resumeUrl: selectedResume || undefined,
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

  if (loading || profileLoading) {
    if (inStudentLayout) return <LoadingScreen />;
    return <div className="min-h-screen bg-[#fafafa] dark:bg-gray-950"><Navbar /><LoadingScreen /></div>;
  }
  if (!job) {
    if (inStudentLayout) return <div className="text-center pt-12 text-gray-500">Job not found</div>;
    return <div className="min-h-screen bg-[#fafafa] dark:bg-gray-950"><Navbar /><div className="text-center pt-24 text-gray-500">Job not found</div></div>;
  }

  const resumes = profile?.resumes ?? [];
  const customFields = (job.customFields || []) as CustomFieldDefinition[];
  const backPath = inStudentLayout ? `/student/jobs/${actualJobId}` : `/jobs/${actualJobId}`;

  const content = (
    <div className="min-h-screen bg-[#fafafa] dark:bg-gray-950 relative overflow-hidden">
      {/* Background decorations, matching JobBrowsePage */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-150 h-150 rounded-full bg-linear-to-br from-indigo-100 to-violet-100 dark:from-indigo-900/30 dark:to-violet-900/30 opacity-60 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-125 h-125 rounded-full bg-linear-to-tr from-slate-100 to-blue-100 dark:from-slate-900/30 dark:to-blue-900/30 opacity-60 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-200 h-200 rounded-full border border-black/3 dark:border-white/3" />
      </div>
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className={`relative z-10 max-w-2xl mx-auto ${inStudentLayout ? "px-6 pt-8 pb-16" : "px-6 pt-24 pb-16"}`}>
        {/* Back link */}
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
          <Link to={backPath} className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white mb-8 no-underline transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Job
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-950 dark:text-white mb-3">
            Apply to <span className="text-gradient-accent">{job.title}</span>
          </h1>
          <p className="text-base text-gray-500">Complete the form below to submit your application</p>
        </motion.div>

        {/* Job Info Card */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
          className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gray-950 dark:bg-white flex items-center justify-center shrink-0 text-white dark:text-gray-950 text-lg font-bold">
              {job.company?.charAt(0) || "C"}
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-base font-semibold text-gray-900 dark:text-white truncate">{job.title}</h2>
              <p className="text-sm text-gray-500 truncate">{job.company}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-4 text-xs text-gray-500">
            <span className="flex items-center gap-1 bg-gray-50 dark:bg-gray-800 px-2.5 py-1 rounded-lg">
              <MapPin className="w-3 h-3 text-indigo-400" />{job.location}
            </span>
            <span className="flex items-center gap-1 bg-gray-50 dark:bg-gray-800 px-2.5 py-1 rounded-lg">
              <IndianRupee className="w-3 h-3 text-emerald-400" />{job.salary}
            </span>
            {job.deadline && (
              <span className="flex items-center gap-1 bg-gray-50 dark:bg-gray-800 px-2.5 py-1 rounded-lg">
                <Clock className="w-3 h-3 text-amber-400" />{new Date(job.deadline).toLocaleDateString()}
              </span>
            )}
          </div>
        </motion.div>

        {error && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/50 rounded-2xl text-sm text-red-600 dark:text-red-400 mb-6">
            {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Resume Selection */}
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center">
                <FileText className="w-4.5 h-4.5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h2 className="text-base font-semibold text-gray-900 dark:text-white">Select Resume</h2>
            </div>
            {resumes.length > 0 ? (
              <div className="space-y-2.5">
                {resumes.map((url, i) => (
                  <Button
                    key={url}
                    type="button"
                    variant="outline"
                    autoHeight
                    onClick={() => setSelectedResume(selectedResume === url ? null : url)}
                    className={`w-full justify-start gap-3 py-3.5 rounded-xl text-left ${
                      selectedResume === url
                        ? "border-indigo-300 bg-indigo-50/50 dark:border-indigo-600 dark:bg-indigo-900/20 shadow-sm"
                        : ""
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      selectedResume === url
                        ? "bg-indigo-600 dark:bg-indigo-500"
                        : "bg-gray-100 dark:bg-gray-800"
                    }`}>
                      {selectedResume === url
                        ? <Check className="w-4 h-4 text-white" />
                        : <FileText className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                      }
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-medium truncate transition-colors ${
                        selectedResume === url
                          ? "text-indigo-700 dark:text-indigo-300"
                          : "text-gray-700 dark:text-gray-300"
                      }`}>
                        Resume {resumes.length > 1 ? i + 1 : ""}, {getFileNameFromUrl(url)}
                      </p>
                    </div>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors shrink-0"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-xl">
                <FileText className="w-8 h-8 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">No resumes on your profile</p>
                <Link
                  to="/student/profile"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 no-underline transition-colors"
                >
                  Upload a resume in your profile <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}
          </motion.div>

          {/* Cover Letter */}
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-violet-50 dark:bg-violet-900/20 flex items-center justify-center">
                <Briefcase className="w-4.5 h-4.5 text-violet-600 dark:text-violet-400" />
              </div>
              <div>
                <h2 className="text-base font-semibold text-gray-900 dark:text-white">Cover Letter</h2>
                <p className="text-xs text-gray-400">Optional</p>
              </div>
            </div>
            <textarea
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/30 min-h-32 text-sm dark:text-white dark:placeholder-gray-500 resize-none"
              placeholder="Tell the recruiter why you're a great fit for this role..."
            />
          </motion.div>

          {/* Custom Fields */}
          {customFields.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center">
                  <Briefcase className="w-4.5 h-4.5 text-amber-600 dark:text-amber-400" />
                </div>
                <h2 className="text-base font-semibold text-gray-900 dark:text-white">Additional Questions</h2>
              </div>
              <DynamicFieldRenderer
                fields={customFields}
                values={customFieldAnswers}
                onChange={(fieldId, value) => setCustomFieldAnswers({ ...customFieldAnswers, [fieldId]: value })}
                onFileSelect={(fieldId, file) => setFileUploads((prev) => ({ ...prev, [fieldId]: file }))}
              />
            </motion.div>
          )}

          {/* Submit */}
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
            <Button
              type="submit"
              variant="mono"
              size="lg"
              disabled={submitting}
              className="w-full rounded-xl"
            >
              {submitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 dark:border-gray-950/30 border-t-white dark:border-t-gray-950 rounded-full animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Submit Application
                </>
              )}
            </Button>
          </motion.div>
        </form>
      </div>
    </div>
  );

  if (inStudentLayout) return content;

  return (
    <div className="min-h-screen">
      <Navbar />
      {content}
    </div>
  );
}
