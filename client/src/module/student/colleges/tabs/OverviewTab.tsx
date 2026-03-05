import { MapPin, Wifi, BookOpen } from "lucide-react";
import type { College } from "../../../../lib/types";

export default function OverviewTab({ college }: { college: College }) {
  return (
    <div className="space-y-6">
      {/* About */}
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">About</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">{college.description}</p>
        {college.campusSize && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">Campus Size: <span className="font-medium text-gray-900 dark:text-white">{college.campusSize}</span></p>
        )}
        {college.address && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 flex items-start gap-1.5">
            <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" /> {college.address}
          </p>
        )}
      </div>

      {/* Streams */}
      {college.streams.length > 0 && (
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Streams Offered</h2>
          <div className="flex flex-wrap gap-2">
            {college.streams.map((s) => (
              <span key={s} className="flex items-center gap-1 px-3 py-1.5 text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-lg">
                <BookOpen className="w-3.5 h-3.5" />{s}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Exams Accepted */}
      {college.acceptedExams.length > 0 && (
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Entrance Exams Accepted</h2>
          <div className="flex flex-wrap gap-2">
            {college.acceptedExams.map((e) => (
              <span key={e} className="px-3 py-1.5 text-sm bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 rounded-lg font-medium">{e}</span>
            ))}
          </div>
        </div>
      )}

      {/* Facilities */}
      {college.facilities.length > 0 && (
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Facilities</h2>
          <div className="flex flex-wrap gap-2">
            {college.facilities.map((f) => (
              <span key={f} className="flex items-center gap-1 px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg">
                <Wifi className="w-3.5 h-3.5" />{f}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Photos */}
      {college.photos.length > 0 && (
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {college.photos.map((url, i) => (
              <img key={i} src={url} alt={`${college.name} campus`} className="rounded-lg object-cover w-full h-40" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
