import { useQuery } from "@tanstack/react-query";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";

export default function InterviewDashboardPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: queryKeys.interviewDashboard.mine(),
    queryFn: async () => {
      const response = await api.get(
        "/interviews/student/my-interviews"
      );

      return response.data;
    },
  });

  if (isLoading) {
    return (
      <div className="p-6">
        Loading interviews...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 text-red-500">
        Failed to load interviews
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-3xl font-bold">
        Interview Dashboard
      </h1>

      {!data?.interviews?.length ? (
        <div className="border rounded-lg p-4">
          No interviews scheduled.
        </div>
      ) : (
        data.interviews.map((interview: any) => (
          <div
            key={interview.id}
            className="border rounded-lg p-4"
          >
            <h2 className="font-semibold text-lg">
              {interview.application?.job?.title}
            </h2>

            <p>
              Company:
              {" "}
              {interview.application?.job?.company}
            </p>

            <p>
              Type:
              {" "}
              {interview.type}
            </p>

            <p>
              Status:
              {" "}
              {interview.status}
            </p>

            <p>
              Date:
              {" "}
              {new Date(
                interview.scheduledAt
              ).toLocaleString()}
            </p>

            {interview.meetingLink && (
              <a
                href={interview.meetingLink}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 underline"
              >
                Join Meeting
              </a>
            )}
          </div>
        ))
      )}
    </div>
  );
}