import {
  GitPullRequest,
  GitMerge,
  GitBranch,
  Award,
  Globe,
  ExternalLink,
  CheckCircle2,
  ChevronRight,
  BookOpen,
  Sparkles,
  Heart,
  Github,
  Briefcase,
  TrendingUp,
} from "lucide-react";
import { fetchContributionsDashboard } from "./api/opensource.api";
import { queryKeys } from "../../../lib/query-keys";
import { Button } from "../../../components/ui/button";
import { SEO } from "../../../components/SEO";
import { Card, CardHeader, CardTitle, CardContent } from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";
import { OssContributionHeatmap } from "../../../components/OssContributionHeatmap";
import ContributionGraphs from "../../../components/ContributionGraphs";
import { useAuthStore } from "../../../lib/auth.store";

// Custom category badge colors
const BADGE_COLORS: Record<string, string> = {
  CAREER: "bg-indigo-500/10 text-indigo-500 border-indigo-500/25",
  QUIZ: "bg-blue-500/10 text-blue-500 border-blue-500/25",
  SKILL: "bg-emerald-500/10 text-emerald-500 border-emerald-500/25",
  CONTRIBUTION: "bg-lime-500/10 text-lime-500 border-lime-500/25",
  MILESTONE: "bg-amber-500/10 text-amber-500 border-amber-500/25",
};

export default function ContributionsDashboardPage() {
  const { user } = useAuthStore();

  const { data, isLoading, isError } = useQuery({
    queryKey: queryKeys.opensource.contributions(),
    queryFn: fetchContributionsDashboard,
    staleTime: 5 * 60 * 1000,
  });

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <div className="w-10 h-10 border-2 border-lime-400 border-t-transparent rounded-full animate-spin" />
        <p className="text-sm font-mono text-stone-500 uppercase tracking-widest">Loading contributions...</p>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
        <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/25 flex items-center justify-center text-red-500 mb-4">
          <GitPullRequest className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-stone-900 dark:text-stone-50 mb-1">Failed to load dashboard</h3>
        <p className="text-sm text-stone-500 dark:text-stone-400 mb-6">Could not fetch contribution statistics at this time.</p>
        <Button onClick={() => window.location.reload()}>Try Again</Button>
      </div>
    );
  }

  const {
    totalPRs,
    mergedPRs,
    openPRs,
    issuesSolved,
    repositoriesContributed,
    firstPrProgress,
    badges,
  } = data;

  const totalSteps = 10; // First PR roadmap has 10 steps
  const completedSteps = firstPrProgress.length;
  const progressPct = Math.round((completedSteps / totalSteps) * 100);

  const hasContributions = totalPRs > 0 || repositoriesContributed.length > 0 || badges.length > 0;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 space-y-8">
      <SEO title="Open Source Contributions Dashboard" noIndex />

      {/* Hero Banner */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative rounded-2xl overflow-hidden border border-stone-200 dark:border-white/10 bg-linear-to-br from-stone-900 via-stone-950 to-stone-900 p-8 shadow-xl text-white"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-lime-400/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-lime-400/10 text-lime-400 border border-lime-400/20 text-xs font-mono uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Open Source Track
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Open Source <span className="text-lime-400">Contributions</span>
            </h1>
            <p className="text-sm sm:text-base text-stone-400 leading-relaxed">
              Welcome to your open-source command center. Monitor your pull requests, review roadmap progress, track achievements, and explore recommended codebases.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="primary" className="bg-lime-400 text-stone-950 hover:bg-lime-300">
              <Link to="/student/opensource/github-analytics">
                <Github className="w-4 h-4 mr-1.5" />
                View GitHub Analytics
              </Link>
            </Button>
            <Button asChild variant="secondary" className="border-white/20 text-white hover:bg-white/5 bg-transparent border">
              <Link to="/student/opensource/readiness">
                <Sparkles className="w-4 h-4 mr-1.5" />
                Internship Readiness Score
              </Link>
            </Button>
            <Button asChild variant="secondary" className="border-white/20 text-white hover:bg-white/5 bg-transparent border">
              <Link to="/student/opensource/hiring-signal">
                <Briefcase className="w-4 h-4 mr-1.5" />
                Hiring Signal Score
              </Link>
            </Button>
            <Button asChild variant="secondary" className="border-white/20 text-white hover:bg-white/5 bg-transparent border">
              <Link to="/student/opensource/growth">
                <TrendingUp className="w-4 h-4 mr-1.5" />
                Developer Growth
              </Link>
            </Button>
            <Button asChild variant="secondary" className="border-white/20 text-white hover:bg-white/5 bg-transparent border">
              <Link to="/student/opensource/coach">
                <BookOpen className="w-4 h-4 mr-1.5" />
                AI Open Source Coach
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>

      {!hasContributions && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-2xl border border-dashed border-stone-200 dark:border-white/10 p-12 text-center max-w-2xl mx-auto"
        >
          <div className="w-14 h-14 rounded-2xl bg-lime-400/10 border border-lime-400/20 flex items-center justify-center text-lime-500 mx-auto mb-6">
            <Globe className="w-6 h-6 animate-pulse" />
          </div>
          <h2 className="text-xl font-bold text-stone-900 dark:text-stone-50 mb-2">Kickstart your Open Source Journey</h2>
          <p className="text-stone-500 dark:text-stone-400 text-sm max-w-md mx-auto mb-8 leading-relaxed">
            You don't have any recorded contributions yet. Follow the First PR roadmap, submit repository recommendations, or explore curated beginner-friendly repositories to begin.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild variant="primary">
              <Link to="/student/opensource/first-pr">
                Start First PR Guide
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link to="/student/opensource">
                Discover Repositories
              </Link>
            </Button>
          </div>
        </motion.div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total PRs", value: totalPRs, icon: GitPullRequest, color: "text-indigo-500 bg-indigo-500/5 border-indigo-500/15" },
          { label: "Merged PRs", value: mergedPRs, icon: GitMerge, color: "text-emerald-500 bg-emerald-500/5 border-emerald-500/15" },
          { label: "Open PRs", value: openPRs, icon: GitBranch, color: "text-amber-500 bg-amber-500/5 border-amber-500/15" },
          { label: "Repositories", value: repositoriesContributed.length, icon: Globe, color: "text-lime-500 bg-lime-500/5 border-lime-500/15" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-500">{stat.label}</span>
              <div className={`p-1.5 rounded-lg border ${stat.color}`}>
                <stat.icon className="w-4 h-4" />
              </div>
            </div>
            <span className="text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50 tabular-nums">
              {stat.value}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Heatmap & Coding Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="overflow-hidden border-stone-200 dark:border-white/10">
            <CardHeader className="border-b border-stone-200 dark:border-white/5 bg-stone-50/50 dark:bg-stone-900/20">
              <CardTitle className="text-sm font-bold uppercase tracking-wider text-stone-500 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-lime-400" />
                Contribution Heatmap
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <OssContributionHeatmap />
            </CardContent>
          </Card>

          <ContributionGraphs
            githubUsername={user?.githubUrl?.split("/").pop()}
            leetcodeUsername={user?.leetcodeUrl?.split("/").pop()}
            showPrompts={true}
          />
        </div>

        {/* Sidebar Cards */}
        <div className="space-y-6">
          {/* First PR Progress Card */}
          <Card className="border-stone-200 dark:border-white/10">
            <CardHeader className="border-b border-stone-200 dark:border-white/5 bg-stone-50/50 dark:bg-stone-900/20">
              <CardTitle className="text-sm font-bold uppercase tracking-wider text-stone-500 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-lime-400" />
                First PR Roadmap
              </CardTitle>
            </CardHeader>
            <CardContent className="p-5 space-y-4">
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-stone-500">Progress</span>
                  <span className="font-bold text-lime-500">{progressPct}%</span>
                </div>
                <div className="w-full bg-stone-100 dark:bg-stone-800 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-lime-400 h-full rounded-full transition-all duration-500"
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
                <p className="text-xs text-stone-500 leading-relaxed mt-2">
                  {completedSteps} of {totalSteps} steps completed. Build familiarity with workflow guidelines.
                </p>
              </div>
              <Button asChild className="w-full" variant="outline">
                <Link to="/student/opensource/first-pr">
                  View Roadmap Checklist
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Badges Section */}
          <Card className="border-stone-200 dark:border-white/10">
            <CardHeader className="border-b border-stone-200 dark:border-white/5 bg-stone-50/50 dark:bg-stone-900/20">
              <CardTitle className="text-sm font-bold uppercase tracking-wider text-stone-500 flex items-center gap-2">
                <Award className="w-4 h-4 text-lime-400" />
                Badges & Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="p-5">
              {badges.length === 0 ? (
                <div className="text-center py-6">
                  <p className="text-xs text-stone-400 italic">No badges unlocked yet.</p>
                </div>
              ) : (
                <div className="grid grid-cols-4 gap-3">
                  {badges.map((sb) => {
                    const badgeClass = BADGE_COLORS[sb.badge.category] || "bg-stone-500/10 text-stone-500";
                    return (
                      <div
                        key={sb.id}
                        className="group relative flex flex-col items-center justify-center p-2 rounded-xl border border-stone-200 dark:border-white/5 bg-stone-50/30 dark:bg-stone-900/40 hover:scale-105 transition-all"
                        title={`${sb.badge.name}: ${sb.badge.description}`}
                      >
                        {sb.badge.iconUrl ? (
                          <img src={sb.badge.iconUrl} alt={sb.badge.name} className="w-8 h-8 object-contain mb-1.5" />
                        ) : (
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold mb-1.5 ${badgeClass}`}>
                            {sb.badge.name[0]}
                          </div>
                        )}
                        <span className="text-[10px] text-stone-500 dark:text-stone-400 text-center truncate w-full">
                          {sb.badge.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Repositories List */}
      {repositoriesContributed.length > 0 && (
        <Card className="border-stone-200 dark:border-white/10">
          <CardHeader className="border-b border-stone-200 dark:border-white/5 bg-stone-50/50 dark:bg-stone-900/20">
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-stone-500 flex items-center gap-2">
              <Globe className="w-4 h-4 text-lime-400" />
              Contributed Repositories
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-stone-200 dark:divide-white/5">
              {repositoriesContributed.map((repo) => (
                <div key={repo.id} className="flex items-center justify-between p-4 hover:bg-stone-50/40 dark:hover:bg-stone-900/10 transition-colors">
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-stone-900 dark:text-stone-50">{repo.name}</h4>
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-stone-500 hover:text-lime-500 flex items-center gap-1 transition-colors no-underline"
                    >
                      {repo.url}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <Badge variant="outline" className="border-lime-500/25 bg-lime-500/10 text-lime-500 font-mono text-[10px]">
                    APPROVED
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Bottom Footer Credit */}
      <div className="flex items-center justify-center gap-1 text-xs text-stone-400">
        <span>Made with</span>
        <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500" />
        <span>by InternHack Team</span>
      </div>
    </div>
  );
}
