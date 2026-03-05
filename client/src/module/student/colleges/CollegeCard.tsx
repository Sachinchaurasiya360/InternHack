import { Link } from "react-router";
import { GraduationCap, Star, MapPin, Award, BookOpen } from "lucide-react";
import type { College } from "../../../lib/types";

const TYPE_COLORS: Record<string, string> = {
  GOVERNMENT: "bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400",
  PRIVATE: "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400",
  DEEMED: "bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400",
  AUTONOMOUS: "bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400",
  CENTRAL: "bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400",
  STATE: "bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400",
};

const NAAC_COLORS: Record<string, string> = {
  A_PLUS_PLUS: "bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300",
  A_PLUS: "bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400",
  A: "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400",
  B_PLUS_PLUS: "bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400",
  B_PLUS: "bg-yellow-50 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400",
  B: "bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400",
  C: "bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400",
};

function formatNaac(grade: string): string {
  return grade.replace(/_PLUS_PLUS/g, "++").replace(/_PLUS/g, "+");
}

function formatType(type: string): string {
  return type.charAt(0) + type.slice(1).toLowerCase();
}

export default function CollegeCard({ college }: { college: College }) {
  return (
    <Link
      to={`/colleges/${college.slug}`}
      className="block no-underline bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 p-5"
    >
      <div className="flex items-start gap-4">
        {/* Logo */}
        <div className="w-14 h-14 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
          {college.logo ? (
            <img src={college.logo} alt={college.name} className="w-10 h-10 object-contain rounded-lg" />
          ) : (
            <GraduationCap className="w-7 h-7 text-gray-400 dark:text-gray-500" />
          )}
        </div>

        <div className="flex-1 min-w-0">
          {/* Name + Type */}
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white leading-tight line-clamp-2">
              {college.name}
            </h3>
          </div>

          {/* Badges row */}
          <div className="flex flex-wrap items-center gap-1.5 mb-2">
            <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${TYPE_COLORS[college.type] || TYPE_COLORS.PRIVATE}`}>
              {formatType(college.type)}
            </span>
            {college.naacGrade && college.naacGrade !== "UNGRADED" && (
              <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${NAAC_COLORS[college.naacGrade] || ""}`}>
                NAAC {formatNaac(college.naacGrade)}
              </span>
            )}
            {college.nirfRanking && (
              <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">
                <Award className="w-3 h-3 inline mr-0.5 -mt-0.5" />
                NIRF #{college.nirfRanking}
              </span>
            )}
          </div>

          {/* Location */}
          <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 mb-2">
            <MapPin className="w-3 h-3 flex-shrink-0" />
            <span className="truncate">{college.city}, {college.state}</span>
          </div>

          {/* Rating */}
          {college.avgRating > 0 && (
            <div className="flex items-center gap-1 text-xs mb-2">
              <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
              <span className="font-medium text-gray-900 dark:text-white">{college.avgRating.toFixed(1)}</span>
              <span className="text-gray-400">({college.reviewCount})</span>
            </div>
          )}

          {/* Streams */}
          {college.streams.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-2">
              {college.streams.slice(0, 3).map((s) => (
                <span key={s} className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                  <BookOpen className="w-2.5 h-2.5 inline mr-0.5 -mt-0.5" />{s}
                </span>
              ))}
              {college.streams.length > 3 && (
                <span className="text-[10px] text-gray-400">+{college.streams.length - 3}</span>
              )}
            </div>
          )}

          {/* Exams */}
          {college.acceptedExams.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {college.acceptedExams.slice(0, 3).map((e) => (
                <span key={e} className="text-[10px] px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                  {e}
                </span>
              ))}
              {college.acceptedExams.length > 3 && (
                <span className="text-[10px] text-gray-400">+{college.acceptedExams.length - 3}</span>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
