import { formatDate } from "../../../lib/date-utils";
import { useState, useRef } from "react";
import { getStatusColor } from "../../../lib/application-colors";
import { useParams, useNavigate, Link } from "react-router";
import { ArrowLeft, CheckCircle, Clock, Circle, Send, ExternalLink, Calendar as CalendarIcon, Download, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { DynamicFieldRenderer } from "../../../components/DynamicFieldRenderer";
import { AssessmentTestView } from "./AssessmentTestView";
import toast from "@/components/ui/toast";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { Application, CustomFieldDefinition, AssessmentQuestion } from "../../../lib/types";
import { LoadingScreen } from "../../../components/LoadingScreen";
import { Button } from "../../../components/ui/button";
import { googleCalendarUrl, downloadICS } from "../../../lib/calendar";

function getDeadlineBanner(deadline: string): { level: "warning" | "critical" | null; daysLeft: number } {
  const now = new Date();
  const deadlineDate = new Date(deadline);
  const diffMs = deadlineDate.getTime() - now.getTime();
  const daysLeft = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  if (daysLeft < 0) return { level: null, daysLeft };
  if (daysLeft <= 2) return { level: "critical", daysLeft };
  if (daysLeft <= 7) return { level: "warning", daysLeft };
  return { level: null, daysLeft };
}

export default function ApplicationProgressPage() {
  const { applicationId } = useParams();
  const navigate = useNavigate();
  const [activeRoundId, setActiveRoundId] = useState<number | null>(null);
  const [fieldAnswers, setFieldAnswers] = useState<Record<string, unknown>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const lastPayload = useRef<{ roundId: number; answers: Record<string, unknown> } | null>(null);

  const queryClient = useQueryClient();
  const { data: application, isLoading: loading } = useQuery({
    queryKey: queryKeys.applications.progress(applicationId!),
    queryFn: () => api.get(`/student/applications/${applicationId}`).then((res) => res.data.application as Application),
    enabled: !!applicationId,
  });

  const handleSubmitRound = async (roundId: number, overrideAnswers?: Record<string, unknown>) => {
    const answers = overrideAnswers ?? fieldAnswers;
    lastPayload.current = { roundId, answers };
    setSubmitting(true);
    setSubmitError(null);
    try {
      await api.post(`/student/applications/${applicationId}/rounds/${roundId}/submit`, {
        fieldAnswers: answers,
        attachments: [],
      });
      setActiveRoundId(null);
      setFieldAnswers({});
      lastPayload.current = null;
      queryClient.invalidateQueries({ queryKey: queryKeys.applications.progress(applicationId!) });
    } catch {
      setSubmitError("Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <LoadingScreen />;
  if (!application) return <div className="text-center text-gray-500">Application not found</div>;

  const rounds = application.job?.rounds || [];
  const submissions = application.roundSubmissions || [];

  return (
    <div className="max-w-3xl mx-auto">
      <Button variant="ghost" size="sm" onClick={() => navigate(-1)} className="text-gray-500 hover:text-black dark:hover:text-white mb-4">
        <ArrowLeft className="w-4 h-4" /> Back
      </Button>

      <div className="mb-6">
        <Link to={`/student/jobs/${application.jobId}`} className="inline-flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors no-underline">
          {application.job?.title} <ExternalLink className="w-5 h-5" />
        </Link>
        <p className="text-gray-500">{application.job?.company}</p>
        <div className="flex items-center gap-3 mt-2">
          <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(application.status)}`}>
            {application.status}
          </span>
          {application.job?.deadline && (
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 flex items-center gap-1">
                <Clock className="w-4 h-4" /> Deadline: {formatDate(application.job.deadline)}
              </span>
              <Button
                variant="outline"
                size="sm"
                className="h-7 text-xs flex items-center gap-1"
                onClick={() => window.open(googleCalendarUrl({
                  title: `${application.job?.title} @ ${application.job?.company} — Application Deadline`,
                  details: `Applied via InternHack: https://internhack.xyz/student/applications/${application.id}\\nCompany: ${application.job?.company}\\nRole: ${application.job?.title}\\nLocation: ${application.job?.location || "Remote"}`,
                  start: new Date(application.job?.deadline ?? ""),
                  end: new Date(new Date(application.job?.deadline ?? "").getTime() + 30 * 60000),
                }), '_blank')}
              >
                <CalendarIcon className="w-3 h-3" /> Google Calendar
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-7 text-xs flex items-center gap-1"
                onClick={() => downloadICS(`/student/applications/${application.id}/calendar.ics?type=deadline`, 'deadline.ics').catch(() => toast.error('Failed to download .ics file'))}
              >
                <Download className="w-3 h-3" /> .ics
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Deadline urgency banner */}
      {application.job?.deadline && (() => {
        const banner = getDeadlineBanner(application.job!.deadline!);
        if (!banner.level) return null;
        const isCritical = banner.level === "critical";
        return (
          <div className={`mb-6 p-4 rounded-lg border ${isCritical ? "border-red-300 bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-400" : "border-amber-300 bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400"}`}>
            <div className="flex items-start gap-3">
              {isCritical ? <Clock className="w-5 h-5 mt-0.5 text-red-500" /> : <AlertTriangle className="w-5 h-5 mt-0.5 text-amber-500" />}
              <div className="flex-1">
                <p className="font-medium">
                  {isCritical
                    ? `Deadline ${banner.daysLeft === 0 ? "is today" : `is in ${banner.daysLeft} day${banner.daysLeft !== 1 ? "s" : ""}`}`
                    : `Deadline is in ${banner.daysLeft} day${banner.daysLeft !== 1 ? "s" : ""}`}
                </p>
                <p className="text-sm mt-1 opacity-80">Submit your rounds before the deadline to avoid missing this opportunity.</p>
              </div>
              <Button
                variant={isCritical ? "mono" : "outline"}
                size="sm"
                className="shrink-0 h-8 text-xs flex items-center gap-1"
                onClick={() => window.open(googleCalendarUrl({
                  title: `${application.job?.title} @ ${application.job?.company} — Application Deadline`,
                  details: `Applied via InternHack: https://internhack.xyz/student/applications/${application.id}\\nCompany: ${application.job?.company}\\nRole: ${application.job?.title}\\nLocation: ${application.job?.location || "Remote"}`,
                  start: new Date(application.job?.deadline ?? ""),
                  end: new Date(new Date(application.job?.deadline ?? "").getTime() + 30 * 60000),
                }), '_blank')}
              >
                <CalendarIcon className="w-3.5 h-3.5" /> Add to Calendar
              </Button>
            </div>
          </div>
        );
      })()}

      {/* Round Progress Timeline */}
      <div className="space-y-4">
        {rounds.map((round, i) => {
          const submission = submissions.find((s) => s.roundId === round.id);
          const isActive = application.currentRoundId === round.id;
          const isCompleted = submission?.status === "COMPLETED";
          const isPending = !submission || submission.status === "PENDING";
          const customFields = (round.customFields || []) as CustomFieldDefinition[];
          const assessmentQuestions = (round.assessmentQuestions || []) as AssessmentQuestion[];
          const hasAssessment = assessmentQuestions.length > 0;

          return (
            <motion.div key={round.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className={`bg-white dark:bg-gray-900 rounded-xl border shadow-sm overflow-hidden ${isActive ? "border-black dark:border-white" : "border-gray-100 dark:border-gray-800"
                }`}>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  {isCompleted ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : isActive ? (
                    <Clock className="w-5 h-5 text-yellow-500" />
                  ) : (
                    <Circle className="w-5 h-5 text-gray-300 dark:text-gray-600" />
                  )}
                  <h3 className="font-semibold text-gray-900 dark:text-white">Round {i + 1}: {round.name}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${isCompleted ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
                    isActive ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" :
                      "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-500"
                    }`}>
                    {isCompleted ? "Completed" : isActive ? "In Progress" : "Pending"}
                  </span>
                  {round.activateAt && (
                    <div className="flex items-center gap-2 ml-auto">
                      <span className="text-sm text-gray-500 flex items-center gap-1">
                        <Clock className="w-4 h-4" /> {new Date(round.activateAt).toLocaleString()}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-7 text-xs flex items-center gap-1"
                        onClick={() => window.open(googleCalendarUrl({
                          title: `${application.job?.title} @ ${application.job?.company} — ${round.name}`,
                          details: `Applied via InternHack: https://internhack.xyz/student/applications/${application.id}\\nCompany: ${application.job?.company}\\nRole: ${application.job?.title}\\nLocation: ${application.job?.location || "Remote"}\\n${round.name}`,
                          start: new Date(round.activateAt!),
                          end: new Date(new Date(round.activateAt!).getTime() + 60 * 60000),
                        }), '_blank')}
                      >
                        <CalendarIcon className="w-3 h-3" /> Google Calendar
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-7 text-xs flex items-center gap-1"
                        onClick={() => downloadICS(`/student/applications/${application.id}/calendar.ics?type=round&roundId=${round.id}`, `round-${round.id}.ics`).catch(() => toast.error('Failed to download .ics file'))}
                      >
                        <Download className="w-3 h-3" /> .ics
                      </Button>
                    </div>
                  )}
                </div>

                {round.description && <p className="text-sm text-gray-500 ml-8 mb-2">{round.description}</p>}
                {round.instructions && (
                  <div className="ml-8 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-sm text-blue-700 dark:text-blue-400 mb-3">
                    {round.instructions}
                  </div>
                )}

                {/* Show completed submission data */}
                {isCompleted && submission?.fieldAnswers && Object.keys(submission.fieldAnswers).length > 0 && (
                  <div className="ml-8 mt-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm">
                    <p className="font-medium text-gray-500 mb-1">Your Submission:</p>
                    {Object.entries(submission.fieldAnswers).map(([key, val]) => (
                      <div key={key} className="text-gray-600 dark:text-gray-400">{key}: {String(val)}</div>
                    ))}
                  </div>
                )}

                {/* Active round: show form or assessment */}
                {isActive && !isCompleted && (
                  <div className="ml-8 mt-4">
                    {/* Error banner shown for BOTH assessment and custom field submissions */}
                    {submitError && (
                      <div aria-live="polite" className="flex items-center gap-3 p-3 mb-3 bg-red-50 dark:bg-red-900/30 rounded-lg text-sm text-red-600 dark:text-red-400">
                        <span>{submitError}</span>
                        <Button
                          variant="mono"
                          size="sm"
                          aria-label="Retry submission"
                          disabled={submitting}
                          onClick={() => lastPayload.current && handleSubmitRound(lastPayload.current.roundId, lastPayload.current.answers)}
                        >
                          {submitting ? "Retrying..." : "Retry"}
                        </Button>
                      </div>
                    )}
                    {activeRoundId === round.id ? (
                      hasAssessment ? (
                        <AssessmentTestView
                          questions={assessmentQuestions}
                          timeLimitSecs={round.timeLimitSecs}
                          submitting={submitting}
                          onSubmit={(answers) => {
                            handleSubmitRound(round.id, { ...fieldAnswers, assessmentAnswers: answers });
                          }}
                        />
                      ) : (
                        <div className="space-y-4">
                          {customFields.length > 0 && (
                            <DynamicFieldRenderer
                              fields={customFields}
                              values={fieldAnswers}
                              onChange={(fieldId, value) => setFieldAnswers({ ...fieldAnswers, [fieldId]: value })}
                            />
                          )}
                          <div className="flex items-center gap-3">
                            <Button variant="mono" onClick={() => handleSubmitRound(round.id)} disabled={submitting}>
                              <Send className="w-4 h-4" />
                              {submitting ? "Submitting..." : "Submit Round"}
                            </Button>
                            <Button variant="ghost" onClick={() => { setActiveRoundId(null); setSubmitError(null); }} className="text-gray-500 hover:text-black dark:hover:text-white">Cancel</Button>
                          </div>
                        </div>
                      )
                    ) : (
                      <Button variant="mono" onClick={() => setActiveRoundId(round.id)}>
                        Start Round
                      </Button>
                    )}
                  </div>
                )}

                {/* Pending round */}
                {isPending && !isActive && (
                  <p className="ml-8 text-sm text-gray-400 dark:text-gray-500">Complete the previous round to unlock this one.</p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}