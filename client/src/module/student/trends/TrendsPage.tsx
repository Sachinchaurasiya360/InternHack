import { useMemo } from "react";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  TrendingUp,
  Briefcase,
  MapPin,
  Zap,
  AlertCircle,
} from "lucide-react";
import { LoadingScreen } from "../../../components/LoadingScreen";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  LineChart,
  Line,
} from "recharts";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type {
  TrendsOverview,
  TrendSkill,
  TrendLocation,
  TrendSalary,
  TrendTimeline,
  TrendSupply,
} from "../../../lib/types";

// ─── Theme ──────────────────────────────────────────────────────
const CHART_COLORS = [
  "#6366f1", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6",
  "#0ea5e9", "#f97316", "#22c55e", "#ec4899", "#06b6d4",
  "#d946ef", "#84cc16",
];

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.4 } }),
};

const tooltipStyle = {
  contentStyle: { background: "#fff", border: "1px solid #e5e7eb", borderRadius: "0.75rem", color: "#1f2937", fontSize: "0.8rem", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" },
  itemStyle: { color: "#374151" },
};

// ─── Custom Tooltip ─────────────────────────────────────────────
function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: { value: number; name?: string; color?: string }[]; label?: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs text-gray-700 shadow-lg">
      {label && <p className="font-semibold text-gray-900 mb-1">{label}</p>}
      {payload.map((p, i) => (
        <p key={i}>{p.name ?? ""}: <span className="font-bold text-gray-900">{typeof p.value === "number" ? p.value.toLocaleString() : p.value}</span></p>
      ))}
    </div>
  );
}

// ─── Chart Card ─────────────────────────────────────────────────
function ChartCard({ title, subtitle, index, children, className = "" }: { title: string; subtitle: string; index: number; children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariant}
      initial="hidden"
      animate="visible"
      className={`bg-white rounded-2xl border border-gray-200 p-6 shadow-sm ${className}`}
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-0.5">{title}</h3>
      <p className="text-xs text-gray-500 mb-4">{subtitle}</p>
      {children}
    </motion.div>
  );
}

// ─── Stat Card ──────────────────────────────────────────────────
function StatCard({ icon: Icon, label, value, color, index }: { icon: typeof Briefcase; label: string; value: string | number; color: string; index: number }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariant}
      initial="hidden"
      animate="visible"
      className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm"
    >
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-900">{typeof value === "number" ? value.toLocaleString() : value}</p>
          <p className="text-xs text-gray-500">{label}</p>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Page ───────────────────────────────────────────────────────
export default function TrendsPage() {
  const { data: overview, isLoading: loadingOverview } = useQuery<TrendsOverview>({
    queryKey: queryKeys.trends.overview(),
    queryFn: () => api.get("/trends/overview").then((r) => r.data),
    staleTime: 5 * 60 * 1000,
  });

  const { data: skillsData } = useQuery<{ skills: TrendSkill[] }>({
    queryKey: queryKeys.trends.skills(),
    queryFn: () => api.get("/trends/skills").then((r) => r.data),
    staleTime: 5 * 60 * 1000,
  });

  const { data: locationsData } = useQuery<{ locations: TrendLocation[] }>({
    queryKey: queryKeys.trends.locations(),
    queryFn: () => api.get("/trends/locations").then((r) => r.data),
    staleTime: 5 * 60 * 1000,
  });

  const { data: salariesData } = useQuery<{ salaries: TrendSalary[] }>({
    queryKey: queryKeys.trends.salaries(),
    queryFn: () => api.get("/trends/salaries").then((r) => r.data),
    staleTime: 5 * 60 * 1000,
  });

  const { data: timelineData } = useQuery<{ timeline: TrendTimeline[] }>({
    queryKey: queryKeys.trends.timeline(),
    queryFn: () => api.get("/trends/timeline").then((r) => r.data),
    staleTime: 5 * 60 * 1000,
  });

  const { data: supplyData } = useQuery<{ skills: TrendSupply[] }>({
    queryKey: queryKeys.trends.supply(),
    queryFn: () => api.get("/trends/supply").then((r) => r.data),
    staleTime: 5 * 60 * 1000,
  });

  const skills = skillsData?.skills ?? [];
  const locations = locationsData?.locations ?? [];
  const salaries = salariesData?.salaries ?? [];
  const timeline = timelineData?.timeline ?? [];
  const supply = supplyData?.skills ?? [];

  // Skill distribution pie data (top 10)
  const skillPieData = useMemo(() =>
    skills.slice(0, 10).map((s) => ({ name: s.name, value: s.demandCount })),
  [skills]);

  // Demand vs Supply radar data (top 8)
  const radarData = useMemo(() => {
    if (!skills.length || !supply.length) return [];
    const supplyMap = new Map(supply.map((s) => [s.name.toLowerCase(), s.userCount]));
    const maxDemand = Math.max(...skills.map((s) => s.demandCount), 1);
    const maxSupply = Math.max(...supply.map((s) => s.userCount), 1);
    return skills.slice(0, 8).map((s) => ({
      skill: s.name.length > 12 ? s.name.slice(0, 10) + ".." : s.name,
      demand: Math.round((s.demandCount / maxDemand) * 100),
      supply: Math.round(((supplyMap.get(s.name.toLowerCase()) ?? 0) / maxSupply) * 100),
    }));
  }, [skills, supply]);

  if (loadingOverview) return <div className="min-h-screen bg-gray-50"><LoadingScreen /></div>;

  const hasData = overview && (overview.totalJobs > 0 || overview.totalScrapedJobs > 0);

  if (!hasData) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-3 text-gray-500">
        <AlertCircle className="w-10 h-10" />
        <p>No job data available for trends yet.</p>
        <Link to="/student/jobs" className="text-indigo-600 hover:underline text-sm">Browse Jobs</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-2">
        <Link to="/student/jobs" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-4">
          <ArrowLeft className="w-4 h-4" /> Back to Jobs
        </Link>
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp className="w-7 h-7 text-indigo-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Job Market Trends</h1>
            <p className="text-sm text-gray-500">
              Insights from {(overview!.totalJobs + overview!.totalScrapedJobs).toLocaleString()} job postings
            </p>
          </div>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard icon={Briefcase} label="Platform Jobs" value={overview!.totalJobs} color="bg-indigo-600" index={0} />
        <StatCard icon={Briefcase} label="Scraped Jobs" value={overview!.totalScrapedJobs} color="bg-emerald-600" index={1} />
        <StatCard icon={MapPin} label="Top City" value={overview!.topCity || "N/A"} color="bg-amber-500" index={2} />
        <StatCard icon={Zap} label="Top Skill" value={overview!.topSkill || "N/A"} color="bg-violet-600" index={3} />
      </div>

      {/* Charts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* 1 - Skill Distribution (Pie) */}
        {skillPieData.length > 0 && (
          <ChartCard title="In-Demand Skills" subtitle="Most requested skills across job postings" index={0}>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={skillPieData} cx="50%" cy="50%" innerRadius={60} outerRadius={105} dataKey="value" paddingAngle={2} stroke="#fff" strokeWidth={2}>
                  {skillPieData.map((_, i) => <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />)}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend formatter={(v) => <span className="text-xs text-gray-600">{v}</span>} wrapperStyle={{ fontSize: 11 }} />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>
        )}

        {/* 2 - Monthly Posting Trends (Line) */}
        {timeline.length > 0 && (
          <ChartCard title="Monthly Posting Trends" subtitle="Job postings over the last 12 months" index={1}>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={timeline}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" tick={{ fill: "#374151", fontSize: 11 }} angle={-30} textAnchor="end" height={50} />
                <YAxis tick={{ fill: "#6b7280", fontSize: 12 }} />
                <Tooltip {...tooltipStyle} />
                <Line type="monotone" dataKey="jobCount" stroke="#6366f1" strokeWidth={2.5} dot={{ r: 4, fill: "#6366f1" }} activeDot={{ r: 6 }} name="Platform Jobs" />
                <Line type="monotone" dataKey="scrapedCount" stroke="#10b981" strokeWidth={2} dot={{ r: 3, fill: "#10b981" }} name="Scraped Jobs" />
                <Legend formatter={(v) => <span className="text-xs text-gray-600">{v}</span>} />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>
        )}

        {/* 3 - Top Locations (Horizontal Bar) */}
        {locations.length > 0 && (
          <ChartCard title="Top Hiring Cities" subtitle="Cities with the most job postings" index={2}>
            <ResponsiveContainer width="100%" height={340}>
              <BarChart data={locations.slice(0, 12)} layout="vertical" margin={{ left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis type="number" tick={{ fill: "#6b7280", fontSize: 12 }} />
                <YAxis dataKey="city" type="category" tick={{ fill: "#374151", fontSize: 11 }} width={100} />
                <Tooltip {...tooltipStyle} />
                <Bar dataKey="jobCount" radius={[0, 6, 6, 0]} name="Jobs">
                  {locations.slice(0, 12).map((_, i) => <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        )}

        {/* 4 - Salary Distribution (Bar) */}
        {salaries.length > 0 && (
          <ChartCard title="Salary Distribution" subtitle="Job count by salary ranges" index={3}>
            <ResponsiveContainer width="100%" height={340}>
              <BarChart data={salaries}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="range" tick={{ fill: "#374151", fontSize: 11 }} angle={-15} textAnchor="end" height={50} />
                <YAxis tick={{ fill: "#6b7280", fontSize: 12 }} />
                <Tooltip {...tooltipStyle} />
                <Bar dataKey="count" fill="#8b5cf6" radius={[6, 6, 0, 0]} name="Jobs" />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        )}

        {/* 5 - Top Skills Bar */}
        {skills.length > 0 && (
          <ChartCard title="Top 15 Skills by Demand" subtitle="Skills most frequently mentioned in job tags" index={4}>
            <ResponsiveContainer width="100%" height={340}>
              <BarChart data={skills.slice(0, 15)} layout="vertical" margin={{ left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis type="number" tick={{ fill: "#6b7280", fontSize: 12 }} />
                <YAxis dataKey="name" type="category" tick={{ fill: "#374151", fontSize: 11 }} width={100} />
                <Tooltip {...tooltipStyle} />
                <Bar dataKey="demandCount" radius={[0, 6, 6, 0]} name="Demand">
                  {skills.slice(0, 15).map((_, i) => <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        )}

        {/* 6 - Demand vs Supply Radar */}
        {radarData.length > 0 && (
          <ChartCard title="Skill Demand vs Supply" subtitle="Comparing what companies want vs what students know" index={5}>
            <div className="max-w-md mx-auto">
              <ResponsiveContainer width="100%" height={320}>
                <RadarChart data={radarData}>
                  <PolarGrid stroke="#d1d5db" />
                  <PolarAngleAxis dataKey="skill" tick={{ fill: "#374151", fontSize: 11 }} />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: "#9ca3af", fontSize: 10 }} />
                  <Radar name="Demand" dataKey="demand" stroke="#6366f1" fill="#6366f1" fillOpacity={0.2} />
                  <Radar name="Supply" dataKey="supply" stroke="#10b981" fill="#10b981" fillOpacity={0.2} />
                  <Legend formatter={(v) => <span className="text-xs text-gray-600">{v}</span>} />
                  <Tooltip {...tooltipStyle} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>
        )}
      </div>
    </div>
  );
}
