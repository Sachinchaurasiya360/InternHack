import { useState } from "react";
import { useInterviews } from "../interview-schedule/queries";
import { Button } from "../../components/ui/button";
import { Calendar, Video, Clock, User } from "lucide-react";

export default function StudentInterviewsPage() {
  const [statusFilter, setStatusFilter] = useState<"SCHEDULED" | "COMPLETED" | "CANCELLED">("SCHEDULED");
  const [page, setPage] = useState(1);
  
  const { data, isLoading } = useInterviews({
    role: "STUDENT",
    status: statusFilter,
    page,
    limit: 10,
  });

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">My Interviews</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mt-1">Keep track of your scheduled interviews with recruiters.</p>
      </div>

      <div className="flex space-x-4 mb-6 border-b border-zinc-200 dark:border-zinc-800 pb-2 overflow-x-auto">
        <button
          onClick={() => { setStatusFilter("SCHEDULED"); setPage(1); }}
          className={`px-4 py-2 text-sm font-medium rounded-t-lg border-b-2 ${
            statusFilter === "SCHEDULED" ? "border-blue-600 text-blue-600" : "border-transparent text-zinc-500 hover:text-zinc-700"
          }`}
        >
          Upcoming
        </button>
        <button
          onClick={() => { setStatusFilter("COMPLETED"); setPage(1); }}
          className={`px-4 py-2 text-sm font-medium rounded-t-lg border-b-2 ${
            statusFilter === "COMPLETED" ? "border-blue-600 text-blue-600" : "border-transparent text-zinc-500 hover:text-zinc-700"
          }`}
        >
          Completed
        </button>
        <button
          onClick={() => { setStatusFilter("CANCELLED"); setPage(1); }}
          className={`px-4 py-2 text-sm font-medium rounded-t-lg border-b-2 ${
            statusFilter === "CANCELLED" ? "border-blue-600 text-blue-600" : "border-transparent text-zinc-500 hover:text-zinc-700"
          }`}
        >
          Cancelled
        </button>
      </div>

      {isLoading ? (
        <div className="text-center py-12 text-zinc-500">Loading interviews...</div>
      ) : data?.data?.length === 0 ? (
        <div className="text-center py-12 text-zinc-500 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-dashed border-zinc-300 dark:border-zinc-800">
          No {statusFilter.toLowerCase()} interviews found.
        </div>
      ) : (
        <div className="grid gap-4">
          {data?.data.map((interview) => (
            <div key={interview.id} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between shadow-sm">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <User className="w-4 h-4 text-zinc-400" />
                  <span className="font-semibold text-zinc-900 dark:text-white">{interview.recruiter.name}</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(interview.scheduledAt).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {new Date(interview.scheduledAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} ({interview.durationMinutes}m)
                  </div>
                </div>
                {interview.meetingLink && (
                  <div className="flex items-center gap-2 text-sm">
                    <Video className="w-4 h-4 text-blue-500" />
                    <a href={interview.meetingLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Join Meeting
                    </a>
                  </div>
                )}
                {interview.notes && (
                  <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-950 p-2 rounded-md">
                    {interview.notes}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {data?.total && data.total > 10 && (
        <div className="mt-8 flex justify-center gap-2">
          <Button variant="ghost" disabled={page === 1} onClick={() => setPage((p) => p - 1)}>Previous</Button>
          <span className="px-4 py-2 text-sm text-zinc-600">Page {page} of {Math.ceil(data.total / 10)}</span>
          <Button variant="ghost" disabled={page >= Math.ceil(data.total / 10)} onClick={() => setPage((p) => p + 1)}>Next</Button>
        </div>
      )}
    </div>
  );
}
