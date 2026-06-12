import React, { useState, useMemo } from "react";
import { Link } from "react-router";
import {
  Search,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Filter,
} from "lucide-react";
import { Button } from "../../../components/ui/button";

// Program Type Enum
export type ProgramType = "OUTREACHY" | "LFX" | "MLH" | "SEASON_OF_DOCS";

interface Org {
  id: number;
  name: string;
  description: string;
  techStack: string[];
  timeline: string;
  mandatoryContributionPeriod?: string;
  cohort?: "May-August" | "December-March";
  foundation?: "CNCF" | "Linux Foundation" | "Hyperledger";
  term?: "Spring" | "Summer" | "Fall";
  difficulty?: "Beginner" | "Intermediate" | "Advanced";
  docType?: "Tutorials" | "API Reference" | "User Guides";
  url: string;
}

interface OrgBrowserPageProps {
  programType: ProgramType;
}

const MOCK_ORGS: Record<ProgramType, Org[]> = {
  OUTREACHY: [
    {
      id: 1,
      name: "Debian",
      description: "Debian is a Unix-like operating system and a distribution of free software. Outreachy interns will work on updating packaging systems and enhancing automated package builds.",
      techStack: ["Rust", "Python", "Bash"],
      timeline: "Internship: Dec 2026 - Mar 2027",
      cohort: "December-March",
      mandatoryContributionPeriod: "Oct 2 - Oct 30, 2026",
      url: "https://www.debian.org",
    },
    {
      id: 2,
      name: "Fedora Project",
      description: "Fedora creates an innovative, free, and open-source platform. Fedora contributors are working on Python module upgrades and Cloud deployment scripts.",
      techStack: ["Python", "Go", "Ansible"],
      timeline: "Internship: May - Aug 2026",
      cohort: "May-August",
      mandatoryContributionPeriod: "Feb 5 - Mar 5, 2026",
      url: "https://getfedora.org",
    },
    {
      id: 3,
      name: "GNOME Foundation",
      description: "GNOME is a desktop environment for Linux. Work on rewriting core utilities in Rust and updating the system documentation.",
      techStack: ["JavaScript", "Rust", "Gtk"],
      timeline: "Internship: Dec 2026 - Mar 2027",
      cohort: "December-March",
      mandatoryContributionPeriod: "Oct 2 - Oct 30, 2026",
      url: "https://www.gnome.org",
    },
    {
      id: 4,
      name: "Mozilla",
      description: "Mozilla is an advocate for the open Web. Interns will work on developer tools and optimize web browser compiler backend performance.",
      techStack: ["JavaScript", "Rust", "C++"],
      timeline: "Internship: May - Aug 2026",
      cohort: "May-August",
      mandatoryContributionPeriod: "Feb 5 - Mar 5, 2026",
      url: "https://www.mozilla.org",
    },
    {
      id: 5,
      name: "Wikimedia Foundation",
      description: "Wikimedia supports free knowledge projects. Interns work on media processing modules and Wikipedia backend APIs.",
      techStack: ["PHP", "JavaScript", "Python"],
      timeline: "Internship: Dec 2026 - Mar 2027",
      cohort: "December-March",
      mandatoryContributionPeriod: "Oct 2 - Oct 30, 2026",
      url: "https://www.wikimedia.org",
    },
  ],
  LFX: [
    {
      id: 11,
      name: "Kubernetes (CNCF)",
      description: "Enable node resource metrics APIs inside kubelet. Mentees will develop metrics collectors and clean up client interfaces.",
      techStack: ["Go", "Kubernetes", "Cloud"],
      timeline: "Cohort: Mar 1 - May 31, 2026",
      foundation: "CNCF",
      term: "Spring",
      url: "https://kubernetes.io",
    },
    {
      id: 12,
      name: "Hyperledger Fabric (Hyperledger)",
      description: "Optimize peer database committing speed. Enhance LevelDB indices and bloque state synchronizers.",
      techStack: ["Go", "LevelDB", "Docker"],
      timeline: "Cohort: Jun 1 - Aug 31, 2026",
      foundation: "Hyperledger",
      term: "Summer",
      url: "https://www.hyperledger.org",
    },
    {
      id: 13,
      name: "Linux Kernel (Linux Foundation)",
      description: "eBPF subsystem test suites extensions. Write integration socket diagnostics using core assembly utilities.",
      techStack: ["C", "Assembly", "eBPF"],
      timeline: "Cohort: Oct 1 - Dec 31, 2026",
      foundation: "Linux Foundation",
      term: "Fall",
      url: "https://www.kernel.org",
    },
    {
      id: 14,
      name: "Prometheus (CNCF)",
      description: "Expand remote write storage interface to handle cache replication when remote endpoints are unavailable.",
      techStack: ["Go", "Prometheus", "Cloud"],
      timeline: "Cohort: Jun 1 - Aug 31, 2026",
      foundation: "CNCF",
      term: "Summer",
      url: "https://prometheus.io",
    },
    {
      id: 15,
      name: "Zowe (Open Mainframe)",
      description: "Mainframe telemetry plugins implementation. Construct responsive stats reporting dashboards.",
      techStack: ["TypeScript", "Java", "Node.js"],
      timeline: "Cohort: Oct 1 - Dec 31, 2026",
      foundation: "Linux Foundation",
      term: "Fall",
      url: "https://www.zowe.org",
    },
  ],
  MLH: [
    {
      id: 21,
      name: "Meta React Pod",
      description: "Develop new diagnostic dashboards inside React DevTools and optimize test environments for Server Components.",
      techStack: ["JavaScript", "TypeScript", "React"],
      timeline: "Batch: Jun 1 - Aug 24, 2026",
      term: "Summer",
      url: "https://react.dev",
    },
    {
      id: 22,
      name: "AWS Cloud Pod",
      description: "Create AWS CDK construct libraries for serverless deployment patterns and event-driven architectures.",
      techStack: ["TypeScript", "AWS CDK", "Python"],
      timeline: "Batch: Jan 15 - Apr 10, 2026",
      term: "Spring",
      url: "https://aws.amazon.com",
    },
    {
      id: 23,
      name: "Solana Web3 Pod",
      description: "Refactor Rust anchor contract architectures to minimize program footprint and serialization gas costs.",
      techStack: ["Rust", "Web3", "Anchor"],
      timeline: "Batch: Sep 15 - Dec 10, 2026",
      term: "Fall",
      url: "https://solana.com",
    },
    {
      id: 24,
      name: "Vercel Next.js Pod",
      description: "Construct Next.js router compilation profiles and diagnostic tools inside the Turbopack build engine.",
      techStack: ["Rust", "TypeScript", "Next.js"],
      timeline: "Batch: Jun 1 - Aug 24, 2026",
      term: "Summer",
      url: "https://nextjs.org",
    },
  ],
  SEASON_OF_DOCS: [
    {
      id: 31,
      name: "Apache Kafka",
      description: "Rewrite the developer quickstart guide and construct statistical benchmarks documentation for event streaming setup.",
      techStack: ["Markdown", "Java", "Shell"],
      timeline: "Program: May - Nov 2026",
      difficulty: "Intermediate",
      docType: "Tutorials",
      url: "https://kafka.apache.org",
    },
    {
      id: 32,
      name: "TensorFlow",
      description: "Revamp deep learning library reference sheets. Author Jupyter tutorial notebooks illustrating new execution layers.",
      techStack: ["Python", "Jupyter", "Sphinx"],
      timeline: "Program: May - Nov 2026",
      difficulty: "Advanced",
      docType: "API Reference",
      url: "https://www.tensorflow.org",
    },
    {
      id: 33,
      name: "Prometheus",
      description: "Create user guides for configuring alertmanager templates and building custom queries in PromQL.",
      techStack: ["Prometheus", "PromQL", "Hugo"],
      timeline: "Program: May - Nov 2026",
      difficulty: "Beginner",
      docType: "User Guides",
      url: "https://prometheus.io",
    },
    {
      id: 34,
      name: "JupyterLab",
      description: "Design extensions documentation guides. Document the API lifecycle for extension creators.",
      techStack: ["Markdown", "TypeScript", "Sphinx"],
      timeline: "Program: May - Nov 2026",
      difficulty: "Intermediate",
      docType: "User Guides",
      url: "https://jupyter.org",
    },
  ],
};

const PROGRAM_META: Record<
  ProgramType,
  { title: string; desc: string; bannerBg: string }
> = {
  OUTREACHY: {
    title: "Outreachy Organizations",
    desc: "Outreachy provides paid, remote internships for people subject to systemic bias in the tech industry. Interns are paired with experienced mentors in FOSS organizations.",
    bannerBg: "bg-linear-to-r from-stone-900 to-stone-800 dark:from-stone-950 dark:to-stone-900",
  },
  LFX: {
    title: "LFX Mentorship Projects",
    desc: "Linux Foundation's program connecting mentees with cloud-native, blockchain, and kernel maintainers. Work on real LF projects with global developer visibility.",
    bannerBg: "bg-linear-to-r from-stone-900 to-stone-800 dark:from-stone-950 dark:to-stone-900",
  },
  MLH: {
    title: "MLH Fellowship Projects",
    desc: "A remote internship alternative where fellows collaborate in engineering pods on open-source libraries used by real-world tech companies.",
    bannerBg: "bg-linear-to-r from-stone-900 to-stone-800 dark:from-stone-950 dark:to-stone-900",
  },
  SEASON_OF_DOCS: {
    title: "Google Season of Docs Orgs",
    desc: "Google pairs technical writers with open source organizations to improve developer documentation, API references, tutorials, and training platforms.",
    bannerBg: "bg-linear-to-r from-stone-900 to-stone-800 dark:from-stone-950 dark:to-stone-900",
  },
};

// ─── Child Cards (React.memo) ────────────────────────────────

export const OrgCard = React.memo(function OrgCard({
  org,
  programType,
}: {
  org: Org;
  programType: ProgramType;
}) {
  return (
    <div className="flex flex-col h-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-6 shadow-xs hover:shadow-md transition-all justify-between space-y-4">
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          {/* Company avatar: first-letter in a neutral box */}
          <div className="w-10 h-10 bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 font-extrabold text-lg flex items-center justify-center rounded-md border border-stone-200 dark:border-white/5 shrink-0">
            {org.name.charAt(0)}
          </div>
          <div className="min-w-0">
            <h3 className="text-sm font-bold text-stone-900 dark:text-stone-50 truncate">
              {org.name}
            </h3>
            <span className="text-xs font-mono text-stone-400 font-bold block">
              {org.timeline}
            </span>
          </div>
        </div>

        <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed line-clamp-3">
          {org.description}
        </p>

        {/* Tech stack tags - rounded-md stone pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {org.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 text-xs font-mono uppercase tracking-wider rounded-md font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-3 pt-2">
        {/* Program-specific timelines & criteria */}
        {programType === "OUTREACHY" && org.mandatoryContributionPeriod && (
          <div className="p-2.5 bg-lime-500/10 dark:bg-lime-950/20 text-lime-700 dark:text-lime-400 border border-lime-500/25 rounded-md">
            <span className="text-xs font-mono uppercase font-bold tracking-widest block">
              Mandatory Contribution Period
            </span>
            <span className="text-xs font-semibold mt-0.5 block">
              {org.mandatoryContributionPeriod}
            </span>
          </div>
        )}

        {programType === "LFX" && (
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <div className="p-2 bg-stone-50 dark:bg-stone-950 rounded-md border border-stone-200/50 dark:border-white/5">
              <span className="text-stone-400 block uppercase">Foundation</span>
              <span className="text-stone-700 dark:text-stone-300 font-bold mt-0.5 block">
                {org.foundation}
              </span>
            </div>
            <div className="p-2 bg-stone-50 dark:bg-stone-950 rounded-md border border-stone-200/50 dark:border-white/5">
              <span className="text-stone-400 block uppercase">Cohort Term</span>
              <span className="text-stone-700 dark:text-stone-300 font-bold mt-0.5 block">
                {org.term}
              </span>
            </div>
          </div>
        )}

        {programType === "MLH" && (
          <div className="p-2.5 bg-stone-50 dark:bg-stone-950 rounded-md border border-stone-200/50 dark:border-white/5 flex items-center justify-between text-xs font-mono">
            <span className="text-stone-400 uppercase">Fellowship Term</span>
            <span className="text-stone-700 dark:text-stone-300 font-bold">
              {org.term} Batch
            </span>
          </div>
        )}

        {programType === "SEASON_OF_DOCS" && (
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <div className="p-2 bg-stone-50 dark:bg-stone-950 rounded-md border border-stone-200/50 dark:border-white/5">
              <span className="text-stone-400 block uppercase">Doc Type</span>
              <span className="text-stone-700 dark:text-stone-300 font-bold mt-0.5 block truncate">
                {org.docType}
              </span>
            </div>
            <div className="p-2 bg-stone-50 dark:bg-stone-950 rounded-md border border-stone-200/50 dark:border-white/5">
              <span className="text-stone-400 block uppercase">Difficulty</span>
              <span className="text-stone-700 dark:text-stone-300 font-bold mt-0.5 block">
                {org.difficulty}
              </span>
            </div>
          </div>
        )}

        {/* Button: rounded-md */}
        <Button asChild size="md" variant="secondary" className="w-full justify-center rounded-md">
          <a href={org.url} target="_blank" rel="noopener noreferrer">
            Visit Program <ExternalLink className="w-3.5 h-3.5 ml-2" />
          </a>
        </Button>
      </div>
    </div>
  );
});

// ─── Main Component ──────────────────────────────────────────

export default function OrgBrowserPage({ programType }: OrgBrowserPageProps) {
  const meta = PROGRAM_META[programType];
  const orgs = MOCK_ORGS[programType];

  // States
  const [search, setSearch] = useState("");
  const [selectedTech, setSelectedTech] = useState("ALL");
  const [criteriaFilter, setCriteriaFilter] = useState("ALL");
  const [currentPage, setCurrentPage] = useState(1);

  // Constants
  const itemsPerPage = 6;

  // Extract unique tech tags from organizations list
  const techOptions = useMemo(() => {
    const list = new Set<string>();
    orgs.forEach((o) => o.techStack.forEach((t) => list.add(t)));
    return Array.from(list).sort();
  }, [orgs]);

  // Extract program specific dropdown options
  const criteriaOptions = useMemo(() => {
    const list = new Set<string>();
    orgs.forEach((o) => {
      if (programType === "OUTREACHY" && o.cohort) list.add(o.cohort);
      if (programType === "LFX" && o.foundation) list.add(o.foundation);
      if (programType === "MLH" && o.term) list.add(o.term);
      if (programType === "SEASON_OF_DOCS" && o.docType) list.add(o.docType);
    });
    return Array.from(list).sort();
  }, [orgs, programType]);

  // Dynamic filter text label
  const criteriaLabel = useMemo(() => {
    if (programType === "OUTREACHY") return "Cohort Round";
    if (programType === "LFX") return "Foundation";
    if (programType === "MLH") return "Batch Term";
    return "Documentation Type";
  }, [programType]);

  // Filter logic
  const filteredOrgs = useMemo(() => {
    return orgs.filter((org) => {
      const matchesSearch =
        org.name.toLowerCase().includes(search.toLowerCase()) ||
        org.description.toLowerCase().includes(search.toLowerCase());

      const matchesTech =
        selectedTech === "ALL" || org.techStack.includes(selectedTech);

      let matchesCriteria = true;
      if (criteriaFilter !== "ALL") {
        if (programType === "OUTREACHY") matchesCriteria = org.cohort === criteriaFilter;
        if (programType === "LFX") matchesCriteria = org.foundation === criteriaFilter;
        if (programType === "MLH") matchesCriteria = org.term === criteriaFilter;
        if (programType === "SEASON_OF_DOCS") matchesCriteria = org.docType === criteriaFilter;
      }

      return matchesSearch && matchesTech && matchesCriteria;
    });
  }, [orgs, search, selectedTech, criteriaFilter, programType]);

  // Pagination logic
  const totalPages = Math.ceil(filteredOrgs.length / itemsPerPage) || 1;
  const paginatedOrgs = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredOrgs.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredOrgs, currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50 min-h-screen pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 pt-6 space-y-6">
        
        {/* Back Link / Navigation */}
        <div className="flex items-center">
          <Link
            to="/student/opensource/programs"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 transition-colors no-underline"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            Back to Programs
          </Link>
        </div>

        {/* Dynamic Header Block (Premium Stone) */}
        <div className={`p-8 border border-stone-200 dark:border-white/10 ${meta.bannerBg} rounded-md text-white shadow-xs`}>
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-lime-400">
              <span className="h-1.5 w-1.5 bg-lime-400 rounded-md shrink-0" />
              Open Source Initiative
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white mt-2">
              {meta.title}
            </h1>
            <p className="text-sm text-stone-300 dark:text-stone-400 max-w-3xl leading-relaxed mt-2">
              {meta.desc}
            </p>
          </div>
        </div>

        {/* Control & Filter Bar (rounded-md strict) */}
        <div className="flex flex-col md:flex-row gap-4 bg-white dark:bg-stone-900 p-4 border border-stone-200 dark:border-white/10 rounded-md shadow-xs">
          
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 dark:text-stone-500" />
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search organizations or projects..."
              className="w-full pl-9 pr-4 py-2 border border-stone-200 dark:border-white/10 rounded-md text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-500 text-sm bg-stone-50 dark:bg-stone-950 focus:outline-none focus:border-stone-400 dark:focus:border-white/20 transition-all"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Tech Stack Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-400">
                Tech Stack:
              </span>
              <select
                value={selectedTech}
                onChange={(e) => {
                  setSelectedTech(e.target.value);
                  setCurrentPage(1);
                }}
                className="px-3 py-1.5 text-xs bg-stone-50 dark:bg-stone-950 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-white/10 rounded-md focus:outline-none focus:ring-1 focus:ring-lime-500"
              >
                <option value="ALL">All Languages</option>
                {techOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Program Specific Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-400">
                {criteriaLabel}:
              </span>
              <select
                value={criteriaFilter}
                onChange={(e) => {
                  setCriteriaFilter(e.target.value);
                  setCurrentPage(1);
                }}
                className="px-3 py-1.5 text-xs bg-stone-50 dark:bg-stone-950 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-white/10 rounded-md focus:outline-none focus:ring-1 focus:ring-lime-500"
              >
                <option value="ALL">All Options</option>
                {criteriaOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

        </div>

        {/* Organization Discovery Grid (gap-6 responsive) */}
        {filteredOrgs.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-20 border border-dashed border-stone-200 dark:border-white/10 rounded-md bg-white dark:bg-stone-900 space-y-3">
            <Filter className="w-8 h-8 text-stone-300 dark:text-stone-600" />
            <p className="text-sm font-semibold text-stone-500">
              No participating organizations found matching your search.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedOrgs.map((org) => (
              <OrgCard key={org.id} org={org} programType={programType} />
            ))}
          </div>
        )}

        {/* Pagination Controls (Bottom) */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-1.5 pt-6">
            {/* Previous page */}
            <Button
              size="sm"
              variant="outline"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className="rounded-md h-8 px-2 border-stone-200 dark:border-white/10 hover:bg-stone-100 dark:hover:bg-white/5"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {/* Page indices */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              const active = currentPage === page;
              return (
                <Button
                  key={page}
                  size="sm"
                  variant={active ? "primary" : "outline"}
                  onClick={() => handlePageChange(page)}
                  className={`rounded-md h-8 w-8 min-w-0 p-0 ${
                    active
                      ? "bg-lime-500 text-stone-950 font-bold border-none"
                      : "border-stone-200 dark:border-white/10 hover:bg-stone-100 dark:hover:bg-white/5 text-stone-700 dark:text-stone-300"
                  }`}
                >
                  {page}
                </Button>
              );
            })}

            {/* Next page */}
            <Button
              size="sm"
              variant="outline"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              className="rounded-md h-8 px-2 border-stone-200 dark:border-white/10 hover:bg-stone-100 dark:hover:bg-white/5"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}

      </div>
    </div>
  );
}
