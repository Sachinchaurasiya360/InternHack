import { useState } from "react";
import { Star, MessageSquare, ThumbsUp, ThumbsDown } from "lucide-react";
import api from "../../../../lib/axios";
import type { CollegeReview } from "../../../../lib/types";

interface Props {
  reviews: CollegeReview[];
  slug: string;
  user: { id: number; role: string } | null;
  onReviewAdded: () => void;
}

function StarRow({ label, value }: { label: string; value?: number }) {
  if (!value) return null;
  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="text-gray-500 w-28">{label}</span>
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} className={`w-3 h-3 ${i <= value ? "text-yellow-500 fill-yellow-500" : "text-gray-200 dark:text-gray-700"}`} />
        ))}
      </div>
      <span className="text-gray-600 dark:text-gray-400 font-medium">{value}/5</span>
    </div>
  );
}

export default function ReviewsTab({ reviews, slug, user, onReviewAdded }: Props) {
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    overallRating: 5, placementsRating: 0, infrastructureRating: 0, facultyRating: 0,
    campusLifeRating: 0, valueForMoneyRating: 0, title: "", content: "", pros: "", cons: "",
    courseStudied: "", graduationYear: 0,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const data = { ...form };
      // Clean zero values
      if (!data.placementsRating) delete (data as Record<string, unknown>).placementsRating;
      if (!data.infrastructureRating) delete (data as Record<string, unknown>).infrastructureRating;
      if (!data.facultyRating) delete (data as Record<string, unknown>).facultyRating;
      if (!data.campusLifeRating) delete (data as Record<string, unknown>).campusLifeRating;
      if (!data.valueForMoneyRating) delete (data as Record<string, unknown>).valueForMoneyRating;
      if (!data.graduationYear) delete (data as Record<string, unknown>).graduationYear;
      if (!data.courseStudied) delete (data as Record<string, unknown>).courseStudied;

      await api.post(`/colleges/${slug}/reviews`, data);
      setShowForm(false);
      onReviewAdded();
    } catch { /* ignore */ }
    finally { setSubmitting(false); }
  };

  return (
    <div className="space-y-4">
      {/* Write review button */}
      {user?.role === "STUDENT" && (
        <div className="flex justify-end">
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-4 py-2 text-sm font-medium bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:opacity-90 transition"
          >
            {showForm ? "Cancel" : "Write a Review"}
          </button>
        </div>
      )}

      {/* Review form */}
      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-6 space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { key: "overallRating", label: "Overall *" },
              { key: "placementsRating", label: "Placements" },
              { key: "infrastructureRating", label: "Infrastructure" },
              { key: "facultyRating", label: "Faculty" },
              { key: "campusLifeRating", label: "Campus Life" },
              { key: "valueForMoneyRating", label: "Value for Money" },
            ].map(({ key, label }) => (
              <div key={key}>
                <label className="text-xs font-medium text-gray-500 mb-1 block">{label}</label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setForm((f) => ({ ...f, [key]: i }))}
                      className="p-0.5"
                    >
                      <Star className={`w-5 h-5 ${i <= (form as Record<string, number>)[key] ? "text-yellow-500 fill-yellow-500" : "text-gray-200 dark:text-gray-700"}`} />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <input
            placeholder="Review title"
            required
            value={form.title}
            onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
            className="w-full px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white"
          />
          <textarea
            placeholder="Share your experience (min 10 characters)"
            required
            rows={4}
            value={form.content}
            onChange={(e) => setForm((f) => ({ ...f, content: e.target.value }))}
            className="w-full px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white"
          />
          <div className="grid grid-cols-2 gap-4">
            <textarea placeholder="Pros" rows={2} value={form.pros} onChange={(e) => setForm((f) => ({ ...f, pros: e.target.value }))} className="w-full px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white" />
            <textarea placeholder="Cons" rows={2} value={form.cons} onChange={(e) => setForm((f) => ({ ...f, cons: e.target.value }))} className="w-full px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input placeholder="Course studied (e.g. B.Tech CSE)" value={form.courseStudied} onChange={(e) => setForm((f) => ({ ...f, courseStudied: e.target.value }))} className="w-full px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white" />
            <input type="number" placeholder="Graduation year" value={form.graduationYear || ""} onChange={(e) => setForm((f) => ({ ...f, graduationYear: parseInt(e.target.value) || 0 }))} className="w-full px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white" />
          </div>
          <button type="submit" disabled={submitting} className="px-6 py-2 text-sm font-medium bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:opacity-90 disabled:opacity-50 transition">
            {submitting ? "Submitting..." : "Submit Review"}
          </button>
        </form>
      )}

      {/* Review list */}
      {reviews.length === 0 ? (
        <div className="text-center py-12">
          <MessageSquare className="w-10 h-10 text-gray-300 dark:text-gray-600 mx-auto mb-2" />
          <p className="text-sm text-gray-500">No reviews yet. Be the first to review!</p>
        </div>
      ) : (
        reviews.map((r) => (
          <div key={r.id} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-5">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white">{r.title}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className={`w-3.5 h-3.5 ${i <= r.overallRating ? "text-yellow-500 fill-yellow-500" : "text-gray-200 dark:text-gray-700"}`} />
                    ))}
                  </div>
                  <span className="text-xs text-gray-400">by {r.user?.name || "Anonymous"}</span>
                  {r.courseStudied && <span className="text-xs text-gray-400">• {r.courseStudied}</span>}
                  {r.graduationYear && <span className="text-xs text-gray-400">• {r.graduationYear}</span>}
                </div>
              </div>
              <span className="text-xs text-gray-400">{new Date(r.createdAt).toLocaleDateString()}</span>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{r.content}</p>

            {/* Sub-ratings */}
            <div className="space-y-1 mb-3">
              <StarRow label="Placements" value={r.placementsRating} />
              <StarRow label="Infrastructure" value={r.infrastructureRating} />
              <StarRow label="Faculty" value={r.facultyRating} />
              <StarRow label="Campus Life" value={r.campusLifeRating} />
              <StarRow label="Value for Money" value={r.valueForMoneyRating} />
            </div>

            {(r.pros || r.cons) && (
              <div className="grid grid-cols-2 gap-3">
                {r.pros && (
                  <div className="text-xs">
                    <span className="flex items-center gap-1 text-green-600 dark:text-green-400 font-medium mb-1"><ThumbsUp className="w-3 h-3" /> Pros</span>
                    <p className="text-gray-500">{r.pros}</p>
                  </div>
                )}
                {r.cons && (
                  <div className="text-xs">
                    <span className="flex items-center gap-1 text-red-600 dark:text-red-400 font-medium mb-1"><ThumbsDown className="w-3 h-3" /> Cons</span>
                    <p className="text-gray-500">{r.cons}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}
