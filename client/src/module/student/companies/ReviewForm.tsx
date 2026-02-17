import { useState } from "react";
import { X, Loader2, Send } from "lucide-react";
import toast from "react-hot-toast";
import StarRating from "./StarRating";
import api from "../../../lib/axios";

interface ReviewFormProps {
  slug: string;
  onClose: () => void;
  onSubmitted: () => void;
}

export default function ReviewForm({ slug, onClose, onSubmitted }: ReviewFormProps) {
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [pros, setPros] = useState("");
  const [cons, setCons] = useState("");
  const [interviewExperience, setInterviewExperience] = useState("");
  const [workCulture, setWorkCulture] = useState("");
  const [salaryInsights, setSalaryInsights] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      toast.error("Please select a rating");
      return;
    }

    setLoading(true);
    try {
      const body: Record<string, unknown> = { rating, title, content };
      if (pros.trim()) body["pros"] = pros.trim();
      if (cons.trim()) body["cons"] = cons.trim();
      if (interviewExperience.trim()) body["interviewExperience"] = interviewExperience.trim();
      if (workCulture.trim()) body["workCulture"] = workCulture.trim();
      if (salaryInsights.trim()) body["salaryInsights"] = salaryInsights.trim();

      await api.post(`/companies/${slug}/reviews`, body);
      toast.success("Review submitted for moderation!");
      onSubmitted();
    } catch (err: unknown) {
      const msg = (err as { response?: { data?: { message?: string } } })?.response?.data?.message || "Failed to submit review";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">Write a Review</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-lg">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          {/* Rating */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Rating *</label>
            <StarRating rating={rating} onRate={setRating} size="lg" />
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Summarize your experience"
              required
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Review *</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Share your detailed experience..."
              required
              rows={4}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10 resize-none"
            />
          </div>

          {/* Pros & Cons */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Pros</label>
              <textarea
                value={pros}
                onChange={(e) => setPros(e.target.value)}
                placeholder="What did you like?"
                rows={2}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10 resize-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Cons</label>
              <textarea
                value={cons}
                onChange={(e) => setCons(e.target.value)}
                placeholder="What could be improved?"
                rows={2}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10 resize-none"
              />
            </div>
          </div>

          {/* Optional Fields */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Interview Experience</label>
            <textarea
              value={interviewExperience}
              onChange={(e) => setInterviewExperience(e.target.value)}
              placeholder="Describe the interview process..."
              rows={2}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10 resize-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Work Culture</label>
              <textarea
                value={workCulture}
                onChange={(e) => setWorkCulture(e.target.value)}
                placeholder="Describe the work culture..."
                rows={2}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10 resize-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Salary Insights</label>
              <textarea
                value={salaryInsights}
                onChange={(e) => setSalaryInsights(e.target.value)}
                placeholder="Share salary/compensation details..."
                rows={2}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10 resize-none"
              />
            </div>
          </div>

          <p className="text-xs text-gray-400">Your review will be visible after admin moderation.</p>

          <button
            type="submit"
            disabled={loading || rating === 0 || !title.trim() || content.trim().length < 10}
            className="w-full py-3 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</>
            ) : (
              <><Send className="w-4 h-4" /> Submit Review</>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
