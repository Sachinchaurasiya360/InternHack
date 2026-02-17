import { User } from "lucide-react";
import StarRating from "./StarRating";
import type { CompanyReview } from "../../../lib/types";

export default function ReviewCard({ review }: { review: CompanyReview }) {
  const date = new Date(review.createdAt).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="bg-white p-5 rounded-xl border border-gray-100">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          {review.user?.profilePic ? (
            <img src={review.user.profilePic} alt="" className="w-10 h-10 rounded-full object-cover" />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
              <User className="w-5 h-5 text-gray-400" />
            </div>
          )}
          <div>
            <p className="text-sm font-medium text-gray-900">{review.user?.name ?? "Anonymous"}</p>
            <p className="text-xs text-gray-400">{date}</p>
          </div>
        </div>
        <StarRating rating={review.rating} size="sm" />
      </div>

      <h4 className="mt-3 text-sm font-semibold text-gray-900">{review.title}</h4>
      <p className="mt-1 text-sm text-gray-600 leading-relaxed">{review.content}</p>

      {(review.pros || review.cons) && (
        <div className="mt-3 grid grid-cols-2 gap-3">
          {review.pros && (
            <div>
              <p className="text-xs font-medium text-green-700 mb-1">Pros</p>
              <p className="text-xs text-gray-600">{review.pros}</p>
            </div>
          )}
          {review.cons && (
            <div>
              <p className="text-xs font-medium text-red-700 mb-1">Cons</p>
              <p className="text-xs text-gray-600">{review.cons}</p>
            </div>
          )}
        </div>
      )}

      {review.interviewExperience && (
        <div className="mt-3">
          <p className="text-xs font-medium text-gray-700 mb-1">Interview Experience</p>
          <p className="text-xs text-gray-600">{review.interviewExperience}</p>
        </div>
      )}

      {review.workCulture && (
        <div className="mt-2">
          <p className="text-xs font-medium text-gray-700 mb-1">Work Culture</p>
          <p className="text-xs text-gray-600">{review.workCulture}</p>
        </div>
      )}

      {review.salaryInsights && (
        <div className="mt-2">
          <p className="text-xs font-medium text-gray-700 mb-1">Salary Insights</p>
          <p className="text-xs text-gray-600">{review.salaryInsights}</p>
        </div>
      )}
    </div>
  );
}
