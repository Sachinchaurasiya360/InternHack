import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router";
import { ArrowLeft, GraduationCap, Star, Award, MapPin, Loader2, X, Search } from "lucide-react";
import api from "../../../lib/axios";
import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
import type { College, CollegePlacement } from "../../../lib/types";

interface CompareCollege extends College {
  placements?: CollegePlacement[];
  _count?: { reviews: number; courses: number };
}

export default function CollegeComparePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [colleges, setColleges] = useState<CompareCollege[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<College[]>([]);
  const [searching, setSearching] = useState(false);

  const ids = searchParams.get("ids") || "";

  useEffect(() => {
    if (!ids) return;
    setLoading(true);
    api.get("/colleges/compare", { params: { ids } })
      .then((r) => setColleges(r.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [ids]);

  const handleSearch = async (q: string) => {
    setSearchQuery(q);
    if (q.length < 2) { setSearchResults([]); return; }
    setSearching(true);
    try {
      const res = await api.get("/colleges", { params: { search: q, limit: "5" } });
      setSearchResults(res.data.colleges);
    } catch { setSearchResults([]); }
    finally { setSearching(false); }
  };

  const addCollege = (id: number) => {
    const current = ids ? ids.split(",").map(Number) : [];
    if (current.includes(id) || current.length >= 4) return;
    setSearchParams({ ids: [...current, id].join(",") });
    setSearchQuery("");
    setSearchResults([]);
  };

  const removeCollege = (id: number) => {
    const current = ids.split(",").map(Number).filter((n) => n !== id);
    if (current.length === 0) setSearchParams({});
    else setSearchParams({ ids: current.join(",") });
  };

  const formatNaac = (g: string) => g.replace(/_PLUS_PLUS/g, "++").replace(/_PLUS/g, "+");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 pt-24 pb-16">
        <Link to="/colleges" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white mb-6 no-underline">
          <ArrowLeft className="w-4 h-4" /> Back to colleges
        </Link>

        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Compare Colleges</h1>

        {/* Search to add */}
        <div className="relative mb-8 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search college to add..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white"
          />
          {searchResults.length > 0 && (
            <div className="absolute top-full mt-1 w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
              {searchResults.map((c) => (
                <button key={c.id} onClick={() => addCollege(c.id)} className="w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">{c.name}</div>
                    <div className="text-xs text-gray-400">{c.city}, {c.state}</div>
                  </div>
                </button>
              ))}
            </div>
          )}
          {searching && <div className="absolute top-full mt-1 w-full text-center py-3 text-xs text-gray-400">Searching...</div>}
        </div>

        {loading ? (
          <div className="flex justify-center py-20"><Loader2 className="w-6 h-6 animate-spin text-gray-400" /></div>
        ) : colleges.length === 0 ? (
          <div className="text-center py-20">
            <GraduationCap className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-sm text-gray-500">Search and add 2-4 colleges to compare.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 w-40">Parameter</th>
                  {colleges.map((c) => (
                    <th key={c.id} className="text-left px-4 py-3 min-w-[200px]">
                      <div className="flex items-start justify-between">
                        <Link to={`/colleges/${c.slug}`} className="no-underline">
                          <div className="font-semibold text-gray-900 dark:text-white text-sm">{c.name}</div>
                          <div className="text-xs text-gray-400 flex items-center gap-1 mt-0.5"><MapPin className="w-3 h-3" />{c.city}, {c.state}</div>
                        </Link>
                        <button onClick={() => removeCollege(c.id)} className="p-1 text-gray-400 hover:text-red-500"><X className="w-3.5 h-3.5" /></button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                <Row label="Type" values={colleges.map((c) => c.type.charAt(0) + c.type.slice(1).toLowerCase())} />
                <Row label="NIRF Ranking" values={colleges.map((c) => c.nirfRanking ? `#${c.nirfRanking}` : "—")} highlight />
                <Row label="NAAC Grade" values={colleges.map((c) => c.naacGrade && c.naacGrade !== "UNGRADED" ? formatNaac(c.naacGrade) : "—")} />
                <Row label="Established" values={colleges.map((c) => c.establishedYear ? String(c.establishedYear) : "—")} />
                <Row label="Rating" values={colleges.map((c) => c.avgRating > 0 ? `${c.avgRating.toFixed(1)} / 5` : "—")} />
                <Row label="Reviews" values={colleges.map((c) => String(c.reviewCount || 0))} />
                <Row label="Courses" values={colleges.map((c) => String(c._count?.courses || 0))} />
                <Row label="Streams" values={colleges.map((c) => c.streams.join(", ") || "—")} />
                <Row label="Exams" values={colleges.map((c) => c.acceptedExams.slice(0, 3).join(", ") || "—")} />
                <Row label="Avg Package" values={colleges.map((c) => c.placements?.[0]?.avgPackageLPA ? `${c.placements[0].avgPackageLPA} LPA` : "—")} highlight />
                <Row label="Highest Package" values={colleges.map((c) => c.placements?.[0]?.highestPackageLPA ? `${c.placements[0].highestPackageLPA} LPA` : "—")} />
                <Row label="Placement Rate" values={colleges.map((c) => c.placements?.[0]?.placementRate ? `${c.placements[0].placementRate}%` : "—")} />
                <Row label="Facilities" values={colleges.map((c) => c.facilities.join(", ") || "—")} />
              </tbody>
            </table>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

function Row({ label, values, highlight }: { label: string; values: string[]; highlight?: boolean }) {
  return (
    <tr className={highlight ? "bg-gray-50 dark:bg-gray-800/30" : ""}>
      <td className="px-4 py-3 text-xs font-medium text-gray-500">{label}</td>
      {values.map((v, i) => (
        <td key={i} className="px-4 py-3 text-sm text-gray-900 dark:text-white">{v}</td>
      ))}
    </tr>
  );
}
