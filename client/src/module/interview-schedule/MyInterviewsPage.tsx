import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getInterviews, cancelInterview, updateInterview, scheduleInterview } from "./api";
import toast from "../../../components/ui/toast";
import { format } from "date-fns";
import { Calendar, Clock, Video, FileText, X, Check, Plus, Edit } from "lucide-react";
import { Button } from "../../../components/ui/button";

interface Props {
  role: "RECRUITER" | "STUDENT";
}

export default function MyInterviewsPage({ role }: Props) {
  const queryClient = useQueryClient();
  const [tab, setTab] = useState<"upcoming" | "past" | "cancelled">("upcoming");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  // Form state
  const [studentId, setStudentId] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("60");
  const [meetingLink, setMeetingLink] = useState("");
  const [notes, setNotes] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["interviews", role, tab],
    queryFn: () => getInterviews({ 
      upcoming: tab === "upcoming" ? true : undefined, 
      status: tab === "cancelled" ? "CANCELLED" : tab === "past" ? "COMPLETED" : undefined,
      limit: 50 
    }),
  });

  const cancelMutation = useMutation({
    mutationFn: cancelInterview,
    onSuccess: () => {
      toast.success("Interview cancelled");
      queryClient.invalidateQueries({ queryKey: ["interviews", role] });
    },
    onError: () => toast.error("Failed to cancel interview"),
  });

  const completeMutation = useMutation({
    mutationFn: (id: number) => updateInterview(id, { status: "COMPLETED" as any }),
    onSuccess: () => {
      toast.success("Interview marked as completed");
      queryClient.invalidateQueries({ queryKey: ["interviews", role] });
    },
    onError: () => toast.error("Failed to update interview"),
  });

  const scheduleMutation = useMutation({
    mutationFn: scheduleInterview,
    onSuccess: () => {
      toast.success("Interview scheduled successfully!");
      setIsModalOpen(false);
      // Reset form
      setStudentId("");
      setDate("");
      setTime("");
      setDuration("60");
      setMeetingLink("");
      setNotes("");
      queryClient.invalidateQueries({ queryKey: ["interviews", role] });
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message || "Failed to schedule interview");
    }
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: any }) => updateInterview(id, data),
    onSuccess: () => {
      toast.success("Interview updated successfully!");
      setIsModalOpen(false);
      setEditingId(null);
      // Reset form
      setStudentId("");
      setDate("");
      setTime("");
      setDuration("60");
      setMeetingLink("");
      setNotes("");
      queryClient.invalidateQueries({ queryKey: ["interviews", role] });
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message || "Failed to update interview");
    }
  });

  const handleScheduleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentId || !date || !time || !duration) {
      toast.error("Please fill in all required fields.");
      return;
    }
    const scheduledAt = new Date(`${date}T${time}`).toISOString();
    
    // Check if the date is in the past
    if (new Date(scheduledAt).getTime() < Date.now()) {
      toast.error("Cannot schedule an interview in the past.");
      return;
    }

    if (editingId) {
      updateMutation.mutate({
        id: editingId,
        data: {
          scheduledAt,
          durationMinutes: parseInt(duration),
          meetingLink,
          notes,
        },
      });
    } else {
      scheduleMutation.mutate({
        studentId: parseInt(studentId),
        scheduledAt,
        durationMinutes: parseInt(duration),
        meetingLink,
        notes,
      });
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-stone-900 dark:text-white">My Interviews</h1>
        <div className="flex items-center gap-4">
          <div className="flex bg-stone-100 dark:bg-stone-800 rounded-lg p-1">
            <button
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                tab === "upcoming" ? "bg-white dark:bg-stone-700 shadow-sm" : "text-stone-600 dark:text-stone-400"
              }`}
              onClick={() => setTab("upcoming")}
            >
              Upcoming
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                tab === "past" ? "bg-white dark:bg-stone-700 shadow-sm" : "text-stone-600 dark:text-stone-400"
              }`}
              onClick={() => setTab("past")}
            >
              Past
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                tab === "cancelled" ? "bg-white dark:bg-stone-700 shadow-sm" : "text-stone-600 dark:text-stone-400"
              }`}
              onClick={() => setTab("cancelled")}
            >
              Cancelled
            </button>
          </div>
          {role === "RECRUITER" && (
            <Button onClick={() => {
              setEditingId(null);
              setStudentId("");
              setDate("");
              setTime("");
              setDuration("60");
              setMeetingLink("");
              setNotes("");
              setIsModalOpen(true);
            }}>
              <Plus className="w-4 h-4 mr-2" /> Schedule Interview
            </Button>
          )}
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-stone-900 dark:border-white"></div>
        </div>
      ) : data?.data && data.data.length > 0 ? (
        <div className="grid gap-4">
          {data.data.map((interview) => (
            <div key={interview.id} className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${
                      interview.status === "SCHEDULED" ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" :
                      interview.status === "COMPLETED" ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" :
                      "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                    }`}>
                      {interview.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
                    {role === "RECRUITER" ? `Interview with ${interview.student.name}` : `Interview with ${interview.recruiter.name}`}
                  </h3>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400">
                      <Calendar className="w-4 h-4" />
                      {format(new Date(interview.scheduledAt), "MMMM d, yyyy")}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400">
                      <Clock className="w-4 h-4" />
                      {format(new Date(interview.scheduledAt), "h:mm a")} ({interview.durationMinutes} minutes)
                    </div>
                    {interview.meetingLink && (
                      <div className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400">
                        <Video className="w-4 h-4" />
                        <a href={interview.meetingLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                          Join Meeting
                        </a>
                      </div>
                    )}
                    {interview.notes && (
                      <div className="flex items-start gap-2 text-sm text-stone-600 dark:text-stone-400 mt-2">
                        <FileText className="w-4 h-4 mt-0.5 shrink-0" />
                        <p>{interview.notes}</p>
                      </div>
                    )}
                  </div>
                </div>
                
                {role === "RECRUITER" && interview.status === "SCHEDULED" && (
                  <div className="flex flex-col gap-2">
                    <Button 
                      variant="outline" 
                      className="text-sm"
                      onClick={() => {
                        setEditingId(interview.id);
                        setStudentId(interview.studentId.toString());
                        const dt = new Date(interview.scheduledAt);
                        setDate(format(dt, "yyyy-MM-dd"));
                        setTime(format(dt, "HH:mm"));
                        setDuration(interview.durationMinutes.toString());
                        setMeetingLink(interview.meetingLink || "");
                        setNotes(interview.notes || "");
                        setIsModalOpen(true);
                      }}
                    >
                      <Edit className="w-4 h-4 mr-2" /> Edit
                    </Button>
                    <Button 
                      variant="outline" 
                      className="text-sm"
                      onClick={() => {
                        if (confirm("Are you sure you want to mark this interview as completed?")) {
                          completeMutation.mutate(interview.id);
                        }
                      }}
                    >
                      <Check className="w-4 h-4 mr-2" /> Complete
                    </Button>
                    <Button 
                      variant="danger"
                      className="text-sm"
                      onClick={() => {
                        if (confirm("Are you sure you want to cancel this interview?")) {
                          cancelMutation.mutate(interview.id);
                        }
                      }}
                    >
                      <X className="w-4 h-4 mr-2" /> Cancel
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-stone-50 dark:bg-stone-900 rounded-xl border border-dashed border-stone-200 dark:border-stone-800">
          <Calendar className="w-12 h-12 text-stone-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-stone-900 dark:text-white mb-1">No interviews found</h3>
          <p className="text-stone-500 dark:text-stone-400">
            {tab === "upcoming" ? "You have no upcoming interviews scheduled." : tab === "past" ? "You have no past interviews." : "You have no cancelled interviews."}
          </p>
        </div>
      )}

      {/* Schedule Interview Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-stone-900 rounded-xl max-w-md w-full shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-stone-900 dark:text-white">
                {editingId ? "Edit Interview" : "Schedule Interview"}
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="text-stone-500 hover:text-stone-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleScheduleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Student ID *</label>
                <input 
                  type="number" 
                  required 
                  disabled={!!editingId}
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  className="w-full px-3 py-2 border border-stone-300 dark:border-stone-700 rounded-md bg-transparent disabled:opacity-50" 
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Date *</label>
                  <input 
                    type="date" 
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 border border-stone-300 dark:border-stone-700 rounded-md bg-transparent" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Time *</label>
                  <input 
                    type="time" 
                    required 
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3 py-2 border border-stone-300 dark:border-stone-700 rounded-md bg-transparent" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Duration *</label>
                <select 
                  value={duration} 
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full px-3 py-2 border border-stone-300 dark:border-stone-700 rounded-md bg-transparent"
                >
                  <option value="15">15 minutes</option>
                  <option value="30">30 minutes</option>
                  <option value="45">45 minutes</option>
                  <option value="60">60 minutes</option>
                  <option value="90">90 minutes</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Meeting Link</label>
                <input 
                  type="url" 
                  value={meetingLink}
                  onChange={(e) => setMeetingLink(e.target.value)}
                  placeholder="https://zoom.us/j/..."
                  className="w-full px-3 py-2 border border-stone-300 dark:border-stone-700 rounded-md bg-transparent" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Notes</label>
                <textarea 
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 border border-stone-300 dark:border-stone-700 rounded-md bg-transparent" 
                  rows={3}
                />
              </div>
              
              <div className="pt-4 flex justify-end gap-2">
                <Button variant="ghost" type="button" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </Button>
                <Button variant="primary" type="submit" disabled={scheduleMutation.isPending || updateMutation.isPending}>
                  {scheduleMutation.isPending || updateMutation.isPending ? "Saving..." : (editingId ? "Update" : "Schedule")}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
