import { useState, useRef } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Sparkles,
  FileText,
  Search,
  CheckCircle,
  Copy,
  Download,
  RefreshCw,
  Briefcase,
  Building2,
  Code2,
  MessageSquare,
} from "lucide-react";
import toast from "react-hot-toast";
import api from "../../../lib/axios";
import { SEO } from "../../../components/SEO";
import type { CoverLetterTone } from "../../../lib/types";

const TONES: { id: CoverLetterTone; label: string; description: string }[] = [
  { id: "professional", label: "Professional", description: "Formal and confident" },
  { id: "friendly", label: "Friendly", description: "Warm and approachable" },
  { id: "enthusiastic", label: "Enthusiastic", description: "Energetic and passionate" },
];

const GENERATION_STEPS = [
  { icon: FileText, label: "Reading job description" },
  { icon: Search, label: "Analyzing requirements" },
  { icon: Sparkles, label: "Crafting your cover letter" },
  { icon: CheckCircle, label: "Finalizing" },
];

const inputCls =
  "w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-400 transition-colors bg-white";
const labelCls = "block text-xs font-medium text-gray-500 mb-1.5";

export default function CoverLetterPage() {
  const [jobDescription, setJobDescription] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [keySkills, setKeySkills] = useState("");
  const [tone, setTone] = useState<CoverLetterTone>("professional");
  const [coverLetter, setCoverLetter] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [error, setError] = useState("");
  const letterRef = useRef<HTMLDivElement>(null);

  const handleGenerate = async () => {
    if (jobDescription.trim().length < 50) {
      toast.error("Job description must be at least 50 characters");
      return;
    }

    setLoading(true);
    setError("");
    setCoverLetter("");
    setCurrentStep(0);

    // Animate steps
    const stepInterval = setInterval(() => {
      setCurrentStep((s) => {
        if (s < GENERATION_STEPS.length - 1) return s + 1;
        return s;
      });
    }, 1500);

    try {
      const { data } = await api.post("/ats/cover-letter", {
        jobDescription: jobDescription.trim(),
        jobTitle: jobTitle.trim() || undefined,
        companyName: companyName.trim() || undefined,
        keySkills: keySkills.trim() || undefined,
        tone,
      });
      setCoverLetter(data.coverLetter);
    } catch (err) {
      const msg =
        (err as { response?: { data?: { message?: string } } })?.response?.data
          ?.message || "Failed to generate cover letter. Please try again.";
      setError(msg);
      toast.error(msg);
    } finally {
      clearInterval(stepInterval);
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(coverLetter);
      toast.success("Copied to clipboard!");
    } catch {
      toast.error("Failed to copy");
    }
  };

  const handleDownload = () => {
    if (!letterRef.current) return;
    const content = letterRef.current.innerText;
    const win = window.open("", "_blank");
    if (!win) return;
    win.document.write(`<!DOCTYPE html>
<html><head><title>Cover Letter</title>
<style>
  body { font-family: 'Georgia', serif; max-width: 700px; margin: 60px auto; padding: 0 40px; line-height: 1.7; color: #1a1a1a; font-size: 14px; }
  @media print { body { margin: 40px; } @page { size: A4; margin: 20mm; } }
</style></head>
<body><pre style="white-space:pre-wrap;font-family:inherit;">${content}</pre></body></html>`);
    win.document.close();
    setTimeout(() => win.print(), 400);
  };

  return (
    <>
      <SEO title="Cover Letter Builder — InternHack" description="Generate AI-powered cover letters tailored to any job" />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4">
            <div className="flex items-center gap-3">
              <Link to="/student/ats" className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors text-gray-500">
                <ArrowLeft className="w-4 h-4" />
              </Link>
              <div>
                <h1 className="text-lg font-bold text-gray-900">AI Cover Letter Builder</h1>
                <p className="text-xs text-gray-400">Generate tailored cover letters in seconds</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left - Input Form */}
            <div className="space-y-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm"
              >
                <h2 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-violet-500" />
                  Job Details
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className={labelCls}>Job Description *</label>
                    <textarea
                      className={`${inputCls} min-h-[140px] resize-y`}
                      placeholder="Paste the full job description here..."
                      value={jobDescription}
                      onChange={(e) => setJobDescription(e.target.value)}
                    />
                    <p className="text-[10px] text-gray-400 mt-1">
                      {jobDescription.length}/50 characters minimum
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className={labelCls}>
                        <Briefcase className="w-3 h-3 inline mr-1" />
                        Job Title
                      </label>
                      <input
                        className={inputCls}
                        placeholder="Software Engineer"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className={labelCls}>
                        <Building2 className="w-3 h-3 inline mr-1" />
                        Company Name
                      </label>
                      <input
                        className={inputCls}
                        placeholder="Google"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelCls}>
                      <Code2 className="w-3 h-3 inline mr-1" />
                      Your Key Skills & Experience
                    </label>
                    <textarea
                      className={`${inputCls} min-h-[80px] resize-y`}
                      placeholder="3 years of React/Node.js experience, built scalable microservices, led a team of 4..."
                      value={keySkills}
                      onChange={(e) => setKeySkills(e.target.value)}
                    />
                  </div>

                  {/* Tone Selector */}
                  <div>
                    <label className={labelCls}>Tone</label>
                    <div className="flex gap-2">
                      {TONES.map((t) => (
                        <button
                          key={t.id}
                          onClick={() => setTone(t.id)}
                          className={`flex-1 px-3 py-2.5 rounded-xl border-2 text-xs font-medium transition-all ${
                            tone === t.id
                              ? "border-violet-500 bg-violet-50 text-violet-700"
                              : "border-gray-200 text-gray-500 hover:border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          <div>{t.label}</div>
                          <div className="text-[10px] font-normal mt-0.5 opacity-70">
                            {t.description}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleGenerate}
                    disabled={loading || jobDescription.trim().length < 50}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gray-950 text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        Generate Cover Letter
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Right - Output */}
            <div>
              <AnimatePresence mode="wait">
                {loading && (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm"
                  >
                    <div className="space-y-4">
                      {GENERATION_STEPS.map((step, i) => {
                        const Icon = step.icon;
                        const isActive = i === currentStep;
                        const isDone = i < currentStep;
                        return (
                          <motion.div
                            key={step.label}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.15 }}
                            className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${
                              isActive
                                ? "bg-violet-50 border border-violet-200"
                                : isDone
                                ? "bg-green-50 border border-green-200"
                                : "bg-gray-50 border border-gray-100"
                            }`}
                          >
                            <div
                              className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                isActive
                                  ? "bg-violet-500 text-white"
                                  : isDone
                                  ? "bg-green-500 text-white"
                                  : "bg-gray-200 text-gray-400"
                              }`}
                            >
                              {isDone ? (
                                <CheckCircle className="w-4 h-4" />
                              ) : (
                                <Icon className="w-4 h-4" />
                              )}
                            </div>
                            <span
                              className={`text-sm font-medium ${
                                isActive ? "text-violet-700" : isDone ? "text-green-700" : "text-gray-400"
                              }`}
                            >
                              {step.label}
                              {isActive && (
                                <motion.span
                                  animate={{ opacity: [1, 0.3] }}
                                  transition={{ repeat: Infinity, duration: 0.8 }}
                                  className="ml-1"
                                >
                                  ...
                                </motion.span>
                              )}
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {!loading && coverLetter && (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                  >
                    {/* Actions bar */}
                    <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-gray-50">
                      <span className="text-xs font-semibold text-gray-500 flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                        Generated successfully
                      </span>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={handleGenerate}
                          className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded-lg transition-colors"
                        >
                          <RefreshCw className="w-3 h-3" />
                          Regenerate
                        </button>
                        <button
                          onClick={handleCopy}
                          className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded-lg transition-colors"
                        >
                          <Copy className="w-3 h-3" />
                          Copy
                        </button>
                        <button
                          onClick={handleDownload}
                          className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-white bg-gray-950 hover:bg-gray-800 rounded-lg transition-colors"
                        >
                          <Download className="w-3 h-3" />
                          PDF
                        </button>
                      </div>
                    </div>
                    {/* Letter content */}
                    <div className="p-6" ref={letterRef}>
                      <textarea
                        className="w-full min-h-[400px] text-sm text-gray-700 leading-relaxed border-none outline-none resize-y bg-transparent font-serif"
                        value={coverLetter}
                        onChange={(e) => setCoverLetter(e.target.value)}
                      />
                    </div>
                  </motion.div>
                )}

                {!loading && !coverLetter && !error && (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-white rounded-2xl border border-gray-100 p-10 shadow-sm text-center"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-6 h-6 text-gray-400" />
                    </div>
                    <h3 className="text-sm font-bold text-gray-700 mb-1">Your cover letter will appear here</h3>
                    <p className="text-xs text-gray-400 max-w-xs mx-auto">
                      Fill in the job details on the left and click "Generate" to create a tailored cover letter.
                    </p>
                  </motion.div>
                )}

                {!loading && error && !coverLetter && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl border border-red-200 p-8 shadow-sm text-center"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-6 h-6 text-red-400" />
                    </div>
                    <h3 className="text-sm font-bold text-red-700 mb-1">Generation Failed</h3>
                    <p className="text-xs text-red-400 mb-4">{error}</p>
                    <button
                      onClick={handleGenerate}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-red-50 text-red-600 text-xs font-medium rounded-lg hover:bg-red-100 transition-colors"
                    >
                      <RefreshCw className="w-3 h-3" />
                      Try Again
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
