import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { ArrowLeft, CheckCircle, Clock, Circle, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { DynamicFieldRenderer } from "../../../components/DynamicFieldRenderer";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { Application, CustomFieldDefinition } from "../../../lib/types";

export default function ApplicationProgressPage() {
  const { applicationId } = useParams();
  const navigate = useNavigate();
  const [activeRoundId, setActiveRoundId] = useState<number | null>(null);
  const [fieldAnswers, setFieldAnswers] = useState<Record<string, unknown>>({});
  const [submitting, setSubmitting] = useState(false);

  const queryClient = useQueryClient();
  const { data: application, isLoading: loading } = useQuery({
    queryKey: queryKeys.applications.progress(applicationId!),
    queryFn: () => api.get(`/student/applications/${applicationId}`).then((res) => res.data.application as Application),
    enabled: !!applicationId,
  });

  const handleSubmitRound = async (roundId: number) => {
    setSubmitting(true);
    try {
      await api.post(`/student/applications/${applicationId}/rounds/${roundId}/submit`, {
        fieldAnswers,
        attachments: [],
      });
      setActiveRoundId(null);
      setFieldAnswers({});
      queryClient.invalidateQueries({ queryKey: queryKeys.applications.progress(applicationId!) });
    } catch {
      alert("Failed to submit round");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <div className="flex items-center justify-center h-64 text-gray-500">Loading...</div>;
  if (!application) return <div className="text-center text-gray-500">Application not found</div>;

  const rounds = application.job?.rounds || [];
  const submissions = application.roundSubmissions || [];

  return (
    <div className="max-w-3xl mx-auto">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-sm text-gray-500 hover:text-black mb-4">
        <ArrowLeft className="w-4 h-4" /> Back
      </button>

      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">{application.job?.title}</h1>
        <p className="text-gray-500">{application.job?.company}</p>
        <span className={`inline-block mt-2 px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(application.status)}`}>
          {application.status}
        </span>
      </div>

      {/* Round Progress Timeline */}
      <div className="space-y-4">
        {rounds.map((round, i) => {
          const submission = submissions.find((s) => s.roundId === round.id);
          const isActive = application.currentRoundId === round.id;
          const isCompleted = submission?.status === "COMPLETED";
          const isPending = !submission || submission.status === "PENDING";
          const customFields = (round.customFields || []) as CustomFieldDefinition[];

          return (
            <motion.div key={round.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className={`bg-white rounded-xl border shadow-sm overflow-hidden ${
                isActive ? "border-black" : "border-gray-100"
              }`}>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  {isCompleted ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : isActive ? (
                    <Clock className="w-5 h-5 text-yellow-500" />
                  ) : (
                    <Circle className="w-5 h-5 text-gray-300" />
                  )}
                  <h3 className="font-semibold text-gray-900">Round {i + 1}: {round.name}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    isCompleted ? "bg-green-100 text-green-700" :
                    isActive ? "bg-yellow-100 text-yellow-700" :
                    "bg-gray-100 text-gray-500"
                  }`}>
                    {isCompleted ? "Completed" : isActive ? "In Progress" : "Pending"}
                  </span>
                </div>

                {round.description && <p className="text-sm text-gray-500 ml-8 mb-2">{round.description}</p>}
                {round.instructions && (
                  <div className="ml-8 p-3 bg-blue-50 rounded-lg text-sm text-blue-700 mb-3">
                    {round.instructions}
                  </div>
                )}

                {/* Show completed submission data */}
                {isCompleted && submission?.fieldAnswers && Object.keys(submission.fieldAnswers).length > 0 && (
                  <div className="ml-8 mt-2 p-3 bg-gray-50 rounded-lg text-sm">
                    <p className="font-medium text-gray-500 mb-1">Your Submission:</p>
                    {Object.entries(submission.fieldAnswers).map(([key, val]) => (
                      <div key={key} className="text-gray-600">{key}: {String(val)}</div>
                    ))}
                  </div>
                )}

                {/* Active round: show form */}
                {isActive && !isCompleted && (
                  <div className="ml-8 mt-4">
                    {activeRoundId === round.id ? (
                      <div className="space-y-4">
                        {customFields.length > 0 && (
                          <DynamicFieldRenderer
                            fields={customFields}
                            values={fieldAnswers}
                            onChange={(fieldId, value) => setFieldAnswers({ ...fieldAnswers, [fieldId]: value })}
                          />
                        )}
                        <div className="flex items-center gap-3">
                          <button onClick={() => handleSubmitRound(round.id)} disabled={submitting}
                            className="flex items-center gap-2 px-4 py-2 bg-black text-white text-sm font-semibold rounded-lg hover:bg-gray-800 disabled:opacity-50">
                            <Send className="w-4 h-4" />
                            {submitting ? "Submitting..." : "Submit Round"}
                          </button>
                          <button onClick={() => setActiveRoundId(null)}
                            className="px-4 py-2 text-sm text-gray-500 hover:text-black">Cancel</button>
                        </div>
                      </div>
                    ) : (
                      <button onClick={() => setActiveRoundId(round.id)}
                        className="px-4 py-2 bg-black text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors">
                        Start Round
                      </button>
                    )}
                  </div>
                )}

                {/* Pending round */}
                {isPending && !isActive && (
                  <p className="ml-8 text-sm text-gray-400">Complete the previous round to unlock this one.</p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function getStatusColor(status: string) {
  switch (status) {
    case "APPLIED": return "bg-blue-100 text-blue-700";
    case "IN_PROGRESS": return "bg-yellow-100 text-yellow-700";
    case "SHORTLISTED": return "bg-green-100 text-green-700";
    case "REJECTED": return "bg-red-100 text-red-700";
    case "HIRED": return "bg-emerald-100 text-emerald-700";
    case "WITHDRAWN": return "bg-gray-100 text-gray-700";
    default: return "bg-gray-100 text-gray-700";
  }
}
