import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { ArrowLeft, Download, CheckCircle, XCircle, Clock, FileText, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import api, { SERVER_URL } from "../../../lib/axios";
import { EvaluationForm } from "./EvaluationForm";
import type { Application, VerifiedSkill } from "../../../lib/types";
import { SEO } from "../../../components/SEO";

export default function ApplicationDetail() {
  const { applicationId } = useParams();
  const navigate = useNavigate();
  const [application, setApplication] = useState<Application | null>(null);
  const [loading, setLoading] = useState(true);
  const [evaluatingRoundId, setEvaluatingRoundId] = useState<number | null>(null);
  const [verifiedSkills, setVerifiedSkills] = useState<VerifiedSkill[]>([]);

  const fetchDetail = () => {
    api.get(`/recruiter/applications/${applicationId}`).then((res) => {
      setApplication(res.data.application);
      setLoading(false);
    }).catch(() => setLoading(false));
  };

  useEffect(() => { fetchDetail(); }, [applicationId]);

  useEffect(() => {
    if (application?.student?.id) {
      api.get(`/skill-tests/verified/${application.student.id}`)
        .then((res) => setVerifiedSkills(res.data.verifiedSkills || []))
        .catch(() => {});
    }
  }, [application?.student?.id]);

  const handleAdvance = async () => {
    try {
      await api.patch(`/recruiter/applications/${applicationId}/advance`);
      fetchDetail();
    } catch {
      alert("Failed to advance");
    }
  };

  const handleStatusChange = async (status: string) => {
    try {
      await api.patch(`/recruiter/applications/${applicationId}/status`, { status });
      fetchDetail();
    } catch {
      alert("Failed to update status");
    }
  };

  if (loading) return <div className="flex items-center justify-center h-64 text-gray-500 dark:text-gray-500">Loading...</div>;
  if (!application) return <div className="text-center text-gray-500 dark:text-gray-500">Application not found</div>;

  return (
    <div className="max-w-4xl mx-auto">
      <SEO title="Application Detail" noIndex />
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500 hover:text-black dark:hover:text-white mb-4">
        <ArrowLeft className="w-4 h-4" /> Back
      </button>

      {/* Header */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm mb-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">{application.student?.name}</h1>
            <p className="text-gray-500 dark:text-gray-500">{application.student?.email}</p>
            {application.student?.contactNo && <p className="text-sm text-gray-400 dark:text-gray-500">{application.student.contactNo}</p>}
          </div>
          <div className="flex items-center gap-2">
            <select value={application.status} onChange={(e) => handleStatusChange(e.target.value)}
              className={`text-sm px-3 py-1.5 rounded-lg font-medium ${getStatusColor(application.status)}`}>
              <option value="APPLIED">Applied</option>
              <option value="IN_PROGRESS">In Progress</option>
              <option value="SHORTLISTED">Shortlisted</option>
              <option value="REJECTED">Rejected</option>
              <option value="HIRED">Hired</option>
            </select>
            <button onClick={handleAdvance}
              className="px-4 py-1.5 bg-black dark:bg-white text-white dark:text-gray-950 text-sm font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200">
              Advance
            </button>
          </div>
        </div>

        {/* Resume & Cover Letter */}
        <div className="flex flex-wrap items-center gap-3 mt-4">
          {application.resumeUrl && (
            <a href={application.resumeUrl.startsWith("http") ? application.resumeUrl : `${SERVER_URL}${application.resumeUrl}`} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-950 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 no-underline">
              <Download className="w-4 h-4" /> Application Resume
            </a>
          )}
          {application.student?.resumes && application.student.resumes.length > 0 && application.student.resumes.map((url, i) => (
            <a key={i} href={url.startsWith("http") ? url : `${SERVER_URL}${url}`} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-950 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 no-underline">
              <Download className="w-4 h-4" /> Profile Resume {application.student!.resumes!.length > 1 ? i + 1 : ""}
            </a>
          ))}
          {application.coverLetter && (
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
              <FileText className="w-4 h-4" /> Cover letter attached
            </div>
          )}
        </div>
      </div>

      {/* Verified Skills */}
      {verifiedSkills.length > 0 && (
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-green-500" /> Verified Skills
            </h2>
            {application.job?.tags && application.job.tags.length > 0 && (() => {
              const verifiedNames = new Set(verifiedSkills.map((v) => v.skillName.toLowerCase()));
              const matched = application.job!.tags.filter((t) => verifiedNames.has(t.toLowerCase())).length;
              const pct = Math.round((matched / application.job!.tags.length) * 100);
              return (
                <span className={`text-sm font-semibold px-3 py-1 rounded-full ${pct >= 70 ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : pct >= 40 ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"}`}>
                  {pct}% skill match
                </span>
              );
            })()}
          </div>
          <div className="flex flex-wrap gap-2">
            {verifiedSkills.map((vs) => (
              <span key={vs.skillName} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-full text-sm font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                {vs.skillName}
                <span className="text-green-500 dark:text-green-500 text-xs">({vs.score}%)</span>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Custom Field Answers */}
      {application.customFieldAnswers && Object.keys(application.customFieldAnswers).length > 0 && (
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm mb-6">
          <h2 className="text-lg font-semibold mb-4 dark:text-white">Application Answers</h2>
          <div className="space-y-2">
            {Object.entries(application.customFieldAnswers).map(([key, value]) => (
              <div key={key} className="flex gap-2 text-sm">
                <span className="font-medium text-gray-500 dark:text-gray-500">{key}:</span>
                <span className="text-gray-900 dark:text-white">{String(value)}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Round Progress */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
        <h2 className="text-lg font-semibold mb-4 dark:text-white">Round Progress</h2>
        <div className="space-y-4">
          {application.roundSubmissions?.map((sub, i) => (
            <motion.div key={sub.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
              className="border border-gray-100 dark:border-gray-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  {getStatusIcon(sub.status)}
                  <span className="font-medium text-sm dark:text-white">{sub.round?.name || `Round ${i + 1}`}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${getRoundStatusColor(sub.status)}`}>{sub.status}</span>
                </div>
                <div className="flex items-center gap-2">
                  {sub.submittedAt && <span className="text-xs text-gray-400 dark:text-gray-500">Submitted {new Date(sub.submittedAt).toLocaleDateString()}</span>}
                  <button onClick={() => setEvaluatingRoundId(evaluatingRoundId === sub.roundId ? null : sub.roundId)}
                    className="text-xs px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-gray-300">
                    {evaluatingRoundId === sub.roundId ? "Close" : "Evaluate"}
                  </button>
                </div>
              </div>

              {/* Show answers */}
              {sub.fieldAnswers && Object.keys(sub.fieldAnswers).length > 0 && (
                <div className="mt-2 pl-6 text-sm space-y-1">
                  {Object.entries(sub.fieldAnswers).map(([key, val]) => (
                    <div key={key} className="text-gray-600 dark:text-gray-400"><span className="font-medium">{key}:</span> {String(val)}</div>
                  ))}
                </div>
              )}

              {/* Evaluation scores */}
              {sub.evaluationScores && (
                <div className="mt-2 pl-6 text-sm">
                  <span className="font-medium text-gray-500 dark:text-gray-500">Scores: </span>
                  {Object.entries(sub.evaluationScores).map(([key, val]) => (
                    <span key={key} className="mr-3 dark:text-gray-300">{key}: {(val as { score: number }).score}</span>
                  ))}
                </div>
              )}

              {/* Evaluation Form */}
              {evaluatingRoundId === sub.roundId && (
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <EvaluationForm
                    applicationId={application.id}
                    roundId={sub.roundId}
                    criteria={sub.round?.evaluationCriteria || []}
                    onComplete={() => { setEvaluatingRoundId(null); fetchDetail(); }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function getStatusIcon(status: string) {
  switch (status) {
    case "COMPLETED": return <CheckCircle className="w-4 h-4 text-green-500" />;
    case "IN_PROGRESS": return <Clock className="w-4 h-4 text-yellow-500" />;
    case "PENDING": return <Clock className="w-4 h-4 text-gray-400" />;
    default: return <XCircle className="w-4 h-4 text-red-500" />;
  }
}

function getStatusColor(status: string) {
  switch (status) {
    case "APPLIED": return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
    case "IN_PROGRESS": return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
    case "SHORTLISTED": return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
    case "REJECTED": return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
    case "HIRED": return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400";
    default: return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300";
  }
}

function getRoundStatusColor(status: string) {
  switch (status) {
    case "COMPLETED": return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
    case "IN_PROGRESS": return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
    case "PENDING": return "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-500";
    default: return "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-500";
  }
}
