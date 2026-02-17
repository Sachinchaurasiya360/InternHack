import { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Upload, FileText, Loader2, CheckCircle, AlertCircle, History, Sparkles } from "lucide-react";
import api from "../../../lib/axios";
import type { AtsScore } from "../../../lib/types";

const CATEGORY_LABELS: Record<string, string> = {
  formatting: "Formatting",
  keywords: "Keywords",
  experience: "Experience",
  skills: "Skills",
  education: "Education",
  impact: "Impact",
};

function ScoreCircle({ score }: { score: number }) {
  const color = score >= 70 ? "text-green-500" : score >= 40 ? "text-yellow-500" : "text-red-500";
  const bgColor = score >= 70 ? "bg-green-50" : score >= 40 ? "bg-yellow-50" : "bg-red-50";
  const ringColor = score >= 70 ? "ring-green-200" : score >= 40 ? "ring-yellow-200" : "ring-red-200";

  return (
    <div className={`w-36 h-36 rounded-full ${bgColor} ring-4 ${ringColor} flex flex-col items-center justify-center mx-auto`}>
      <span className={`text-4xl font-bold ${color}`}>{score}</span>
      <span className="text-xs text-gray-500 mt-1">out of 100</span>
    </div>
  );
}

function CategoryBar({ label, score }: { label: string; score: number }) {
  const color = score >= 70 ? "bg-green-500" : score >= 40 ? "bg-yellow-500" : "bg-red-500";

  return (
    <div className="flex items-center gap-3">
      <span className="w-28 text-sm text-gray-600 shrink-0">{label}</span>
      <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${String(score)}%` }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`h-full rounded-full ${color}`}
        />
      </div>
      <span className="w-10 text-sm font-semibold text-gray-700 text-right">{score}</span>
    </div>
  );
}

export default function AtsScorePage() {
  const [file, setFile] = useState<File | null>(null);
  const [resumeUrl, setResumeUrl] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState<AtsScore | null>(null);
  const [error, setError] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      setResumeUrl("");
      setResult(null);
      setError("");
    }
  };

  const handleAnalyze = async () => {
    setError("");
    setResult(null);
    setLoading(true);

    try {
      let url = resumeUrl;

      // Upload file first if selected
      if (file && !resumeUrl) {
        setUploading(true);
        const formData = new FormData();
        formData.append("file", file);
        const uploadRes = await api.post("/upload/resume", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        url = uploadRes.data.file.url;
        setResumeUrl(url);
        setUploading(false);
      }

      if (!url) {
        setError("Please upload a resume PDF first.");
        setLoading(false);
        return;
      }

      // Score the resume
      const body: Record<string, string> = { resumeUrl: url };
      if (jobTitle.trim()) body["jobTitle"] = jobTitle.trim();
      if (jobDescription.trim()) body["jobDescription"] = jobDescription.trim();

      const res = await api.post("/ats/score", body);
      setResult(res.data.score);
    } catch (err: unknown) {
      const msg = (err as { response?: { data?: { message?: string } } })?.response?.data?.message
        || "Failed to analyze resume. Please try again.";
      setError(msg);
    } finally {
      setLoading(false);
      setUploading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Sparkles className="w-6 h-6" />
            ATS Resume Score
          </h1>
          <p className="text-sm text-gray-500 mt-1">Get AI-powered feedback on your resume's ATS compatibility</p>
        </div>
        <Link to="/student/ats/history" className="flex items-center gap-2 text-sm text-gray-600 hover:text-black no-underline">
          <History className="w-4 h-4" /> View History
        </Link>
      </div>

      {/* Upload & Config Section */}
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Upload Your Resume</h2>

        {/* File Upload */}
        <label className="flex items-center gap-4 p-4 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer hover:border-gray-400 transition-colors mb-4">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
            {file ? <FileText className="w-6 h-6 text-gray-600" /> : <Upload className="w-6 h-6 text-gray-400" />}
          </div>
          <div className="flex-1">
            {file ? (
              <>
                <p className="text-sm font-medium text-gray-900">{file.name}</p>
                <p className="text-xs text-gray-500">{(file.size / 1024).toFixed(1)} KB</p>
              </>
            ) : (
              <>
                <p className="text-sm font-medium text-gray-700">Click to upload PDF resume</p>
                <p className="text-xs text-gray-400">PDF files up to 10MB</p>
              </>
            )}
          </div>
          <input type="file" accept=".pdf" onChange={handleFileChange} className="hidden" />
        </label>

        {/* Optional Job Context */}
        <div className="space-y-3">
          <p className="text-sm font-medium text-gray-700">Target Job (optional — for job-specific scoring)</p>
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder="Job title, e.g. Frontend Developer"
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
          />
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Paste the job description here for tailored keyword analysis..."
            rows={4}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10 resize-none"
          />
        </div>

        {error && (
          <div className="flex items-center gap-2 mt-4 p-3 bg-red-50 text-red-700 rounded-lg text-sm">
            <AlertCircle className="w-4 h-4 shrink-0" />
            {error}
          </div>
        )}

        <button
          onClick={handleAnalyze}
          disabled={loading || (!file && !resumeUrl)}
          className="mt-4 w-full py-3 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              {uploading ? "Uploading resume..." : "Analyzing your resume..."}
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              Analyze Resume
            </>
          )}
        </button>
      </div>

      {/* Results */}
      {result && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          {/* Overall Score */}
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm text-center">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Your ATS Score</h2>
            <ScoreCircle score={result.overallScore} />
            <p className="mt-4 text-sm text-gray-500">
              {result.overallScore >= 70
                ? "Great! Your resume is well-optimized for ATS systems."
                : result.overallScore >= 40
                  ? "Decent, but there's room for improvement."
                  : "Your resume needs significant improvements for ATS compatibility."}
            </p>
          </div>

          {/* Category Breakdown */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Category Breakdown</h2>
            <div className="space-y-3">
              {Object.entries(result.categoryScores).map(([key, score]) => (
                <CategoryBar key={key} label={CATEGORY_LABELS[key] ?? key} score={score} />
              ))}
            </div>
          </div>

          {/* Suggestions */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Suggestions for Improvement</h2>
            <ol className="list-decimal list-inside space-y-2">
              {result.suggestions.map((s, i) => (
                <li key={i} className="text-sm text-gray-600 leading-relaxed">{s}</li>
              ))}
            </ol>
          </div>

          {/* Keyword Analysis */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Keyword Analysis</h2>
            {result.keywordAnalysis.found.length > 0 && (
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-500" /> Keywords Found
                </p>
                <div className="flex flex-wrap gap-2">
                  {result.keywordAnalysis.found.map((kw) => (
                    <span key={kw} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium">{kw}</span>
                  ))}
                </div>
              </div>
            )}
            {result.keywordAnalysis.missing.length > 0 && (
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4 text-orange-500" /> Missing Keywords
                </p>
                <div className="flex flex-wrap gap-2">
                  {result.keywordAnalysis.missing.map((kw) => (
                    <span key={kw} className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-xs font-medium">{kw}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
}
