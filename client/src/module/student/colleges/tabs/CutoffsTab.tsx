import { useState, useEffect } from "react";
import { Scissors } from "lucide-react";
import api from "../../../../lib/axios";
import type { CollegeCutoff } from "../../../../lib/types";

export default function CutoffsTab({ cutoffs: initialCutoffs, slug }: { cutoffs: CollegeCutoff[]; slug: string }) {
  const [cutoffs, setCutoffs] = useState(initialCutoffs);
  const [examFilter, setExamFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  useEffect(() => { setCutoffs(initialCutoffs); }, [initialCutoffs]);

  // Derive filter options
  const exams = [...new Set(cutoffs.map((c) => c.exam?.name).filter(Boolean))] as string[];
  const years = [...new Set(cutoffs.map((c) => c.year))].sort((a, b) => b - a);
  const categories = [...new Set(cutoffs.map((c) => c.category))].sort();

  const handleFilter = async () => {
    const params: Record<string, string> = {};
    if (yearFilter) params.year = yearFilter;
    if (categoryFilter) params.category = categoryFilter;
    // examId filter requires knowing the ID, so we filter client-side for exam name
    try {
      const res = await api.get(`/colleges/${slug}/cutoffs`, { params });
      setCutoffs(res.data);
    } catch { /* ignore */ }
  };

  useEffect(() => { if (yearFilter || categoryFilter) handleFilter(); }, [yearFilter, categoryFilter]);

  const filtered = examFilter ? cutoffs.filter((c) => c.exam?.name === examFilter) : cutoffs;

  if (cutoffs.length === 0 && !initialCutoffs.length) {
    return (
      <div className="text-center py-12">
        <Scissors className="w-10 h-10 text-gray-300 dark:text-gray-600 mx-auto mb-2" />
        <p className="text-sm text-gray-500">No cutoff data available yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-4">
        <select value={examFilter} onChange={(e) => setExamFilter(e.target.value)} className="px-3 py-2 text-sm bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white">
          <option value="">All Exams</option>
          {exams.map((e) => <option key={e} value={e}>{e}</option>)}
        </select>
        <select value={yearFilter} onChange={(e) => setYearFilter(e.target.value)} className="px-3 py-2 text-sm bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white">
          <option value="">All Years</option>
          {years.map((y) => <option key={y} value={String(y)}>{y}</option>)}
        </select>
        <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} className="px-3 py-2 text-sm bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white">
          <option value="">All Categories</option>
          {categories.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-800">
              <th className="px-6 py-3 font-medium">Exam</th>
              <th className="px-4 py-3 font-medium">Course</th>
              <th className="px-4 py-3 font-medium">Year</th>
              <th className="px-4 py-3 font-medium">Category</th>
              <th className="px-4 py-3 font-medium">Opening Rank</th>
              <th className="px-4 py-3 font-medium">Closing Rank</th>
              <th className="px-4 py-3 font-medium">Round</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c) => (
              <tr key={c.id} className="border-b border-gray-50 dark:border-gray-800/50">
                <td className="px-6 py-3 font-medium text-gray-900 dark:text-white">{c.exam?.name || "—"}</td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{c.course ? `${c.course.degree} ${c.course.name}` : "General"}</td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{c.year}</td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{c.category}</td>
                <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{c.openingRank?.toLocaleString() || c.openingScore || "—"}</td>
                <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{c.closingRank?.toLocaleString() || c.closingScore || "—"}</td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{c.round || "—"}</td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr><td colSpan={7} className="px-6 py-8 text-center text-gray-400">No cutoff data matching filters.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
