import { BookOpen } from "lucide-react";
import type { CollegeCourse } from "../../../../lib/types";

function formatFees(amount?: number): string {
  if (!amount) return "—";
  if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)}L`;
  return `₹${amount.toLocaleString()}`;
}

const MODE_LABELS: Record<string, string> = {
  FULL_TIME: "Full-time", PART_TIME: "Part-time", DISTANCE: "Distance", ONLINE: "Online",
};

export default function CoursesTab({ courses }: { courses: CollegeCourse[] }) {
  if (courses.length === 0) {
    return (
      <div className="text-center py-12">
        <BookOpen className="w-10 h-10 text-gray-300 dark:text-gray-600 mx-auto mb-2" />
        <p className="text-sm text-gray-500">No course data available yet.</p>
      </div>
    );
  }

  // Group by stream
  const grouped = courses.reduce<Record<string, CollegeCourse[]>>((acc, c) => {
    (acc[c.stream] ||= []).push(c);
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      {Object.entries(grouped).map(([stream, streamCourses]) => (
        <div key={stream} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
          <div className="px-6 py-3 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-800">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{stream} ({streamCourses.length})</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-800">
                  <th className="px-6 py-3 font-medium">Course</th>
                  <th className="px-4 py-3 font-medium">Degree</th>
                  <th className="px-4 py-3 font-medium">Duration</th>
                  <th className="px-4 py-3 font-medium">Fees/Year</th>
                  <th className="px-4 py-3 font-medium">Total Fees</th>
                  <th className="px-4 py-3 font-medium">Mode</th>
                  <th className="px-4 py-3 font-medium">Seats</th>
                </tr>
              </thead>
              <tbody>
                {streamCourses.map((c) => (
                  <tr key={c.id} className="border-b border-gray-50 dark:border-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800/30">
                    <td className="px-6 py-3">
                      <div className="font-medium text-gray-900 dark:text-white">{c.name}</div>
                      {c.specialization && <div className="text-xs text-gray-400">{c.specialization}</div>}
                      {c.eligibility && <div className="text-xs text-gray-400 mt-0.5">{c.eligibility}</div>}
                    </td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{c.degree}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{c.durationYears} yrs</td>
                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{formatFees(c.feesPerYear)}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{formatFees(c.totalFees)}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{MODE_LABELS[c.mode] || c.mode}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{c.seats || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
