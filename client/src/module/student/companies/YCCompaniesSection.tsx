import { useState, useMemo } from "react";
import { Search, ExternalLink, ChevronDown, Building2, Rocket } from "lucide-react";
import { ycCompaniesData, YC_BATCHES } from "./ycCompaniesData";
import type { YCCompany } from "./ycCompaniesData";

const STATUS_COLORS: Record<string, string> = {
  Active: "bg-emerald-50 text-emerald-700",
  Acquired: "bg-blue-50 text-blue-700",
  Public: "bg-purple-50 text-purple-700",
};

function YCCard({ company }: { company: YCCompany }) {
  return (
    <a
      href={company.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all p-5 no-underline group"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
            <span className="text-orange-600 font-bold text-sm">{company.name.charAt(0)}</span>
          </div>
          <div className="min-w-0">
            <h4 className="text-sm font-semibold text-gray-900 truncate group-hover:text-orange-600 transition-colors">
              {company.name}
            </h4>
            <p className="text-xs text-gray-400">{company.industry}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="px-2 py-0.5 bg-orange-50 text-orange-700 text-[10px] font-bold rounded-full border border-orange-100">
            {company.batch}
          </span>
          <span className={`px-2 py-0.5 text-[10px] font-medium rounded-full ${STATUS_COLORS[company.status] ?? "bg-gray-50 text-gray-600"}`}>
            {company.status}
          </span>
        </div>
      </div>

      <p className="text-sm text-gray-600 line-clamp-2 mb-3">{company.description}</p>

      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1">
          {company.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="px-2 py-0.5 bg-gray-50 text-gray-500 text-[10px] rounded-full">
              #{tag}
            </span>
          ))}
        </div>
        <ExternalLink className="w-3.5 h-3.5 text-gray-300 group-hover:text-orange-500 transition-colors" />
      </div>
    </a>
  );
}

export default function YCCompaniesSection() {
  const [search, setSearch] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("All");
  const [expanded, setExpanded] = useState(false);

  const filtered = useMemo(() => {
    let list = [...ycCompaniesData];

    if (selectedBatch !== "All") {
      list = list.filter((c) => c.batch === selectedBatch);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.industry.toLowerCase().includes(q) ||
          c.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    return list;
  }, [search, selectedBatch]);

  const displayedList = expanded ? filtered : filtered.slice(0, 6);

  return (
    <section className="mb-10">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-1">
        <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
          <Rocket className="w-4 h-4 text-orange-600" />
        </div>
        <h2 className="text-xl font-bold text-gray-900">YC Companies</h2>
        <span className="px-2 py-0.5 bg-orange-50 text-orange-700 text-xs font-semibold rounded-full border border-orange-100">
          Y Combinator
        </span>
      </div>
      <p className="text-sm text-gray-500 mb-5 ml-11">
        Explore top startups backed by Y Combinator. Filter by batch to find companies from your favorite cohort.
      </p>

      {/* Search + Batch filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search YC companies..."
            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-300"
          />
        </div>

        {/* Batch dropdown */}
        <div className="relative group">
          <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors">
            <Building2 className="w-4 h-4" />
            Batch: <span className="font-medium text-gray-900">{selectedBatch}</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
          <div className="absolute left-0 top-full z-20 mt-1 hidden min-w-[160px] max-h-[240px] overflow-y-auto rounded-xl border border-gray-100 bg-white p-1 shadow-xl group-hover:block">
            {YC_BATCHES.map((batch) => (
              <button
                key={batch}
                onClick={() => setSelectedBatch(batch)}
                className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                  selectedBatch === batch
                    ? "bg-orange-50 text-orange-700 font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {batch}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Cards grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-xl">
          <Building2 className="w-10 h-10 text-gray-300 mx-auto mb-3" />
          <p className="text-sm text-gray-500">No YC companies match your search</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayedList.map((company) => (
              <YCCard key={company.name} company={company} />
            ))}
          </div>

          {filtered.length > 6 && (
            <div className="mt-4 text-center">
              <button
                onClick={() => setExpanded(!expanded)}
                className="inline-flex items-center gap-1.5 px-5 py-2 text-sm font-medium text-orange-600 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors"
              >
                {expanded ? "Show Less" : `Show All ${filtered.length} Companies`}
                <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
