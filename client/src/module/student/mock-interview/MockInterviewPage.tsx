import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Video, Lock, CheckCircle, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import api from "../../../lib/axios";

interface MockInterviewInfo {
  allowed: boolean;
  tier: "FREE" | "PREMIUM";
  calendlyUrl: string | null;
  used: number;
  limit: number;
}

export default function MockInterviewPage() {
  const queryClient = useQueryClient();
  const [booked, setBooked] = useState(false);

  const { data, isLoading } = useQuery<MockInterviewInfo>({
    queryKey: ["mock-interview"],
    queryFn: () => api.get("/student/mock-interview").then((r) => r.data),
  });

  const bookMutation = useMutation({
    mutationFn: () => api.post("/student/mock-interview/book"),
    onSuccess: () => {
      setBooked(true);
      queryClient.invalidateQueries({ queryKey: ["mock-interview"] });
    },
  });

  if (isLoading) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-64" />
          <div className="h-96 bg-gray-200 dark:bg-gray-800 rounded-2xl" />
        </div>
      </div>
    );
  }

  // Free tier — upgrade prompt
  if (data?.tier === "FREE") {
    return (
      <div className="max-w-3xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Video className="w-10 h-10 text-gray-400 dark:text-gray-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Mock Interviews
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-8">
            Practice with real interviewers to sharpen your skills and boost your confidence before the real thing.
          </p>

          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 max-w-md mx-auto">
            <Lock className="w-8 h-8 text-amber-500 mx-auto mb-4" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Premium Feature
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Upgrade to Premium to book 1 mock interview per month with industry professionals.
            </p>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-gray-950 font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors no-underline"
            >
              Upgrade to Premium
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  // Premium — already used this month
  if (data && !data.allowed) {
    const nextMonth = new Date();
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    nextMonth.setDate(1);
    const nextMonthStr = nextMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" });

    return (
      <div className="max-w-3xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="w-20 h-20 bg-green-50 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Interview Booked
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-4">
            You've used your mock interview for this month ({data.used}/{data.limit}).
          </p>
          <p className="text-sm text-gray-400 dark:text-gray-500">
            Next available: {nextMonthStr}
          </p>
        </motion.div>
      </div>
    );
  }

  // Premium — can book
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Book a Mock Interview
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            Schedule your monthly mock interview session. Pick a time that works for you.
          </p>
          <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
            {data?.used ?? 0}/{data?.limit ?? 1} used this month
          </p>
        </div>

        {booked ? (
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-8 text-center">
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-2">
              Successfully Booked
            </h2>
            <p className="text-sm text-green-600 dark:text-green-400">
              Your mock interview has been recorded. Check your email for the Calendly confirmation.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Calendly embed */}
            {data?.calendlyUrl && (
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden">
                <iframe
                  src={data.calendlyUrl}
                  className="w-full border-0"
                  style={{ minHeight: "660px" }}
                  title="Schedule Mock Interview"
                />
              </div>
            )}

            <div className="text-center">
              <button
                onClick={() => bookMutation.mutate()}
                disabled={bookMutation.isPending}
                className="inline-flex items-center gap-2 px-8 py-3 bg-black dark:bg-white text-white dark:text-gray-950 font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-50"
              >
                <Calendar className="w-5 h-5" />
                {bookMutation.isPending ? "Booking..." : "Confirm Booking"}
              </button>
              {bookMutation.isError && (
                <p className="text-sm text-red-500 mt-2">
                  Failed to book. Please try again.
                </p>
              )}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
