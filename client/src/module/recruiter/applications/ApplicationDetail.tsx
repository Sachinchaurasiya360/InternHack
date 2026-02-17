import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { ArrowLeft, Download, CheckCircle, XCircle, Clock, FileText } from "lucide-react";
import { motion } from "framer-motion";
import api from "../../../lib/axios";
import { EvaluationForm } from "./EvaluationForm";
import type { Application } from "../../../lib/types";

export default function ApplicationDetail() {
  const { applicationId } = useParams();
  const navigate = useNavigate();
  const [application, setApplication] = useState<Application | null>(null);
  const [loading, setLoading] = useState(true);
  const [evaluatingRoundId, setEvaluatingRoundId] = useState<number | null>(null);

  const fetchDetail = () => {
    api.get(`/recruiter/applications/${applicationId}`).then((res) => {
      setApplication(res.data.application);
      setLoading(false);
    }).catch(() => setLoading(false));
  };

  useEffect(() => { fetchDetail(); }, [applicationId]);

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

  if (loading) return <div className="flex items-center justify-center h-64 text-gray-500">Loading...</div>;
  if (!application) return <div className="text-center text-gray-500">Application not found</div>;

  return (
    <div className="max-w-4xl mx-auto">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-sm text-gray-500 hover:text-black mb-4">
        <ArrowLeft className="w-4 h-4" /> Back
      </button>

      {/* Header */}
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900">{application.student?.name}</h1>
            <p className="text-gray-500">{application.student?.email}</p>
            {application.student?.contactNo && <p className="text-sm text-gray-400">{application.student.contactNo}</p>}
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
              className="px-4 py-1.5 bg-black text-white text-sm font-semibold rounded-lg hover:bg-gray-800">
              Advance
            </button>
          </div>
        </div>

        {/* Resume & Cover Letter */}
        <div className="flex items-center gap-4 mt-4">
          {application.resumeUrl && (
            <a href={`http://localhost:3000${application.resumeUrl}`} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg text-sm text-gray-700 hover:bg-gray-100 no-underline">
              <Download className="w-4 h-4" /> Download Resume
            </a>
          )}
          {application.coverLetter && (
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <FileText className="w-4 h-4" /> Cover letter attached
            </div>
          )}
        </div>
      </div>

      {/* Custom Field Answers */}
      {application.customFieldAnswers && Object.keys(application.customFieldAnswers).length > 0 && (
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-6">
          <h2 className="text-lg font-semibold mb-4">Application Answers</h2>
          <div className="space-y-2">
            {Object.entries(application.customFieldAnswers).map(([key, value]) => (
              <div key={key} className="flex gap-2 text-sm">
                <span className="font-medium text-gray-500">{key}:</span>
                <span className="text-gray-900">{String(value)}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Round Progress */}
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Round Progress</h2>
        <div className="space-y-4">
          {application.roundSubmissions?.map((sub, i) => (
            <motion.div key={sub.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
              className="border border-gray-100 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  {getStatusIcon(sub.status)}
                  <span className="font-medium text-sm">{sub.round?.name || `Round ${i + 1}`}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${getRoundStatusColor(sub.status)}`}>{sub.status}</span>
                </div>
                <div className="flex items-center gap-2">
                  {sub.submittedAt && <span className="text-xs text-gray-400">Submitted {new Date(sub.submittedAt).toLocaleDateString()}</span>}
                  <button onClick={() => setEvaluatingRoundId(evaluatingRoundId === sub.roundId ? null : sub.roundId)}
                    className="text-xs px-3 py-1.5 border border-gray-300 rounded-lg hover:bg-gray-50">
                    {evaluatingRoundId === sub.roundId ? "Close" : "Evaluate"}
                  </button>
                </div>
              </div>

              {/* Show answers */}
              {sub.fieldAnswers && Object.keys(sub.fieldAnswers).length > 0 && (
                <div className="mt-2 pl-6 text-sm space-y-1">
                  {Object.entries(sub.fieldAnswers).map(([key, val]) => (
                    <div key={key} className="text-gray-600"><span className="font-medium">{key}:</span> {String(val)}</div>
                  ))}
                </div>
              )}

              {/* Evaluation scores */}
              {sub.evaluationScores && (
                <div className="mt-2 pl-6 text-sm">
                  <span className="font-medium text-gray-500">Scores: </span>
                  {Object.entries(sub.evaluationScores).map(([key, val]) => (
                    <span key={key} className="mr-3">{key}: {(val as { score: number }).score}</span>
                  ))}
                </div>
              )}

              {/* Evaluation Form */}
              {evaluatingRoundId === sub.roundId && (
                <div className="mt-4 pt-4 border-t border-gray-100">
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
    case "APPLIED": return "bg-blue-100 text-blue-700";
    case "IN_PROGRESS": return "bg-yellow-100 text-yellow-700";
    case "SHORTLISTED": return "bg-green-100 text-green-700";
    case "REJECTED": return "bg-red-100 text-red-700";
    case "HIRED": return "bg-emerald-100 text-emerald-700";
    default: return "bg-gray-100 text-gray-700";
  }
}

function getRoundStatusColor(status: string) {
  switch (status) {
    case "COMPLETED": return "bg-green-100 text-green-700";
    case "IN_PROGRESS": return "bg-yellow-100 text-yellow-700";
    case "PENDING": return "bg-gray-100 text-gray-500";
    default: return "bg-gray-100 text-gray-500";
  }
}
