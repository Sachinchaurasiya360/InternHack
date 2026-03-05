import { TrendingUp, Building2 } from "lucide-react";
import type { CollegePlacement } from "../../../../lib/types";

export default function PlacementsTab({ placements }: { placements: CollegePlacement[] }) {
  if (placements.length === 0) {
    return (
      <div className="text-center py-12">
        <TrendingUp className="w-10 h-10 text-gray-300 dark:text-gray-600 mx-auto mb-2" />
        <p className="text-sm text-gray-500">No placement data available yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {placements.map((p) => (
        <div key={p.id} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Placements {p.year}</h3>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {p.avgPackageLPA != null && (
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{p.avgPackageLPA} LPA</div>
                <div className="text-xs text-gray-500">Average Package</div>
              </div>
            )}
            {p.highestPackageLPA != null && (
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">{p.highestPackageLPA} LPA</div>
                <div className="text-xs text-gray-500">Highest Package</div>
              </div>
            )}
            {p.medianPackageLPA != null && (
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{p.medianPackageLPA} LPA</div>
                <div className="text-xs text-gray-500">Median Package</div>
              </div>
            )}
            {p.placementRate != null && (
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{p.placementRate}%</div>
                <div className="text-xs text-gray-500">Placement Rate</div>
              </div>
            )}
          </div>

          {/* Top Recruiters */}
          {p.topRecruiters.length > 0 && (
            <div>
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-1.5">
                <Building2 className="w-4 h-4" /> Top Recruiters
              </h4>
              <div className="flex flex-wrap gap-2">
                {p.topRecruiters.map((r) => (
                  <span key={r} className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full">{r}</span>
                ))}
              </div>
            </div>
          )}

          {/* Sector-wise */}
          {p.sectorWise && Object.keys(p.sectorWise).length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Sector-wise Placement</h4>
              <div className="space-y-2">
                {Object.entries(p.sectorWise).map(([sector, pct]) => (
                  <div key={sector} className="flex items-center gap-3">
                    <span className="text-xs text-gray-600 dark:text-gray-400 w-24 flex-shrink-0">{sector}</span>
                    <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-full h-2">
                      <div className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full" style={{ width: `${Math.min(Number(pct), 100)}%` }} />
                    </div>
                    <span className="text-xs font-medium text-gray-900 dark:text-white w-10 text-right">{pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
