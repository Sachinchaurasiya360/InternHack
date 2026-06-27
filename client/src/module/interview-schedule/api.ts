import api from "../../lib/axios";

export interface InterviewSchedule {
  id: number;
  recruiterId: number;
  studentId: number;
  scheduledAt: string;
  durationMinutes: number;
  meetingLink?: string;
  notes?: string;
  status: "SCHEDULED" | "COMPLETED" | "CANCELLED";
  student: { id: number; name: string; email: string };
  recruiter: { id: number; name: string; email: string };
}

export const scheduleInterview = async (data: {
  studentId: number;
  scheduledAt: string;
  durationMinutes: number;
  meetingLink?: string;
  notes?: string;
}) => {
  const response = await api.post<InterviewSchedule>("/interviews", data);
  return response.data;
};

export const getInterviews = async (params: {
  page?: number;
  limit?: number;
  status?: string;
  upcoming?: boolean;
}) => {
  const response = await api.get<{ data: InterviewSchedule[]; total: number; page: number; limit: number }>(
    "/interviews",
    { params }
  );
  return response.data;
};

export const updateInterview = async (
  id: number,
  data: {
    scheduledAt?: string;
    durationMinutes?: number;
    meetingLink?: string;
    notes?: string;
  }
) => {
  const response = await api.patch<InterviewSchedule>(`/interviews/${id}`, data);
  return response.data;
};

export const cancelInterview = async (id: number) => {
  const response = await api.delete<InterviewSchedule>(`/interviews/${id}`);
  return response.data;
};
