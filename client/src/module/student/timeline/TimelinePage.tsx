import { useQuery } from "@tanstack/react-query";
import { formatDistanceToNow } from "date-fns";
import { Briefcase, Video, ShieldCheck, Award, Clock } from "lucide-react";
import api from "../../../lib/axios";

type ActivityType = 
  | "APPLICATION_SUBMITTED"
  | "APPLICATION_STATUS_UPDATED"
  | "MOCK_INTERVIEW_COMPLETED"
  | "SKILL_VERIFIED"
  | "BADGE_EARNED"
  | "ROADMAP_ENROLLED"
  | "COURSE_COMPLETED";

interface ActivityLog {
  id: number;
  userId: number;
  title: string;
  type: ActivityType;
  metadata: Record<string, string | number | boolean> | null;
  createdAt: string;
}

const getActivityIcon = (type: ActivityType) => {
  switch (type) {
    case "APPLICATION_SUBMITTED":
    case "APPLICATION_STATUS_UPDATED":
      return <Briefcase className="w-5 h-5 text-blue-500" />;
    case "MOCK_INTERVIEW_COMPLETED":
      return <Video className="w-5 h-5 text-purple-500" />;
    case "SKILL_VERIFIED":
      return <ShieldCheck className="w-5 h-5 text-green-500" />;
    case "BADGE_EARNED":
    case "COURSE_COMPLETED":
    case "ROADMAP_ENROLLED":
      return <Award className="w-5 h-5 text-orange-500" />;
    default:
      return <Clock className="w-5 h-5 text-stone-500" />;
  }
};

export default function TimelinePage() {
  const { data, isLoading, error } = useQuery<{ logs: ActivityLog[] }>({
    queryKey: ["student", "activity-logs"],
    queryFn: async () => {
      const res = await api.get("/student/activity-logs");
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="max-w-3xl mx-auto py-8">
        <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-50 mb-6">Your Activity Timeline</h1>
        <div className="animate-pulse space-y-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-stone-200 dark:bg-stone-800" />
              <div className="flex-1 space-y-2 py-1">
                <div className="h-4 bg-stone-200 dark:bg-stone-800 rounded w-3/4" />
                <div className="h-3 bg-stone-200 dark:bg-stone-800 rounded w-1/4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-3xl mx-auto py-8">
        <div className="p-4 rounded-xl border border-red-200 bg-red-50 text-red-600 dark:border-red-900/50 dark:bg-red-900/20 dark:text-red-400">
          Failed to load timeline. Please try again.
        </div>
      </div>
    );
  }

  const logs = data?.logs || [];

  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
          Activity Timeline
        </h1>
        <p className="text-sm text-stone-500 dark:text-stone-400 mt-1">
          Track your progress and key milestones on your journey.
        </p>
      </div>

      {logs.length === 0 ? (
        <div className="text-center py-12 px-4 rounded-xl border border-dashed border-stone-300 dark:border-stone-800">
          <Clock className="w-10 h-10 text-stone-300 dark:text-stone-700 mx-auto mb-3" />
          <h3 className="text-lg font-medium text-stone-900 dark:text-stone-50 mb-1">No activity yet</h3>
          <p className="text-sm text-stone-500 dark:text-stone-400">
            Start applying for jobs, taking skill tests, or doing mock interviews to see your timeline grow.
          </p>
        </div>
      ) : (
        <div className="relative border-l-2 border-stone-200 dark:border-stone-800 ml-4 space-y-8 pb-4">
          {logs.map((log) => (
            <div key={log.id} className="relative pl-8 group">
              {/* Timeline marker */}
              <div className="absolute -left-[21px] p-2 rounded-full bg-white dark:bg-stone-950 border-2 border-stone-200 dark:border-stone-800 group-hover:border-lime-400 transition-colors shadow-sm">
                {getActivityIcon(log.type)}
              </div>

              {/* Content card */}
              <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                  <h3 className="text-base font-bold text-stone-900 dark:text-stone-50 leading-tight">
                    {log.title}
                  </h3>
                  <span className="text-xs font-medium text-stone-500 dark:text-stone-400 shrink-0 whitespace-nowrap bg-stone-100 dark:bg-stone-800 px-2 py-1 rounded-md">
                    {formatDistanceToNow(new Date(log.createdAt), { addSuffix: true })}
                  </span>
                </div>
                
                {/* Metadata parsing based on type */}
                {log.type === "APPLICATION_STATUS_UPDATED" && log.metadata?.status && (
                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-xs font-semibold px-2 py-1 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 border border-stone-200 dark:border-stone-700">
                      New Status: {log.metadata.status}
                    </span>
                  </div>
                )}

                {log.type === "MOCK_INTERVIEW_COMPLETED" && log.metadata?.topic && (
                  <div className="mt-3 text-sm text-stone-600 dark:text-stone-400 flex flex-wrap items-center gap-2">
                    <span className="font-medium text-stone-900 dark:text-stone-200">Topic:</span> {log.metadata.topic}
                    {log.metadata.rating && (
                      <>
                        <span className="text-stone-300 dark:text-stone-700">•</span>
                        <span className="font-medium text-stone-900 dark:text-stone-200">Rating:</span> {log.metadata.rating}/5
                      </>
                    )}
                  </div>
                )}
                
                {log.type === "SKILL_VERIFIED" && log.metadata?.score && (
                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-xs font-semibold px-2 py-1 rounded-md bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400 border border-green-200 dark:border-green-500/20">
                      Score: {log.metadata.score}%
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
