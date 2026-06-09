import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import {
  Star,
  GitFork,
  ExternalLink,
  Tag,
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  Github,
  Code2,
  BookOpen,
  Activity,
  MessageSquare,
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";

import api from "../../../lib/axios";
import { canonicalUrl } from "../../../lib/seo.utils";
import type { OpenSourceRepo } from "../../../lib/types";
import { SEO } from "../../../components/SEO";
import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
import { Button } from "../../../components/ui/button";
import { LoadingScreen } from "../../../components/LoadingScreen";
import { difficultyBadge } from "./_shared/repo-utils";

interface GithubIssue {
  id: number;
  title: string;
  html_url: string;
  number: number;
  created_at: string;
  labels: { name: string; color: string }[];
  user: { login: string; avatar_url: string };
}

function repoPagePath(owner: string, name: string): string {
  return `/opensource/${encodeURIComponent(owner)}/${encodeURIComponent(name)}`;
}

function buildStructuredData(repo: OpenSourceRepo) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    "name": repo.name,
    "description": repo.description,
    "codeRepository": repo.url,
    "programmingLanguage": repo.language,
    "runtimePlatform": repo.domain
  };
}

const CONTRIBUTION_STEPS = [
  {
    step: "01",
    title: "Fork & Clone",
    desc: "Create your own copy of the repository and clone it locally to start working.",
  },
  {
    step: "02",
    title: "Find an Issue",
    desc: "Look for issues labeled 'good first issue' or 'beginner' that match your skills.",
  },
  {
    step: "03",
    title: "Open a PR",
    desc: "Submit your changes as a Pull Request and work with maintainers to get it merged.",
  },
] as const;

const INTERNHACK_RESOURCES = [
  { label: "Open Source Hub", to: "/opensource" },
  { label: "Your First Contribution", to: "/student/opensource/first-pr" },
  { label: "Git for Open Source", to: "/student/opensource/git-guide" },
  { label: "Read a Codebase", to: "/student/opensource/read-codebase" },
] as const;

export default function RepoPublicPage() {
  const { owner, name } = useParams<{ owner: string; name: string }>();
  const [repo, setRepo] = useState<OpenSourceRepo | null>(null);
  const [issues, setIssues] = useState<GithubIssue[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingIssues, setLoadingIssues] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!owner || !name) return;

    let cancelled = false;

    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        const response = await api.get(`/opensource/${owner}/${name}`);
        if (cancelled) return;

        const repoData = response.data.repo as OpenSourceRepo;
        setRepo(repoData);
        setLoading(false);

        setLoadingIssues(true);
        try {
          const issuesRes = await api.get(`/opensource/${owner}/${name}/issues`);
          if (!cancelled) {
            setIssues(issuesRes.data.issues ?? []);
          }
        } catch {
          if (!cancelled) setIssues([]);
        } finally {
          if (!cancelled) setLoadingIssues(false);
        }
      } catch (err: unknown) {
        if (cancelled) return;
        const message =
          (err as { response?: { data?: { message?: string } } })?.response?.data?.message ??
          "Repository not found";
        setError(message);
        setLoading(false);
        setLoadingIssues(false);
      }
    }

    fetchData();
    return () => {
      cancelled = true;
    };
  }, [owner, name]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#fafafa] dark:bg-gray-950">
        <Navbar />
        <LoadingScreen />
        <Footer />
      </div>
    );
  }

  if (error || !repo) {
    return (
      <div className="min-h-screen bg-[#fafafa] dark:bg-gray-950">
        <Navbar />
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-red-50 dark:bg-red-900/10 rounded-full mb-6">
            <AlertCircle className="w-12 h-12 text-red-500" />
          </div>
          <h1 className="text-3xl font-bold text-stone-900 dark:text-white mb-4">Repo Not Found</h1>
          <p className="text-stone-600 dark:text-stone-400 mb-8">
            {error || "The repository you're looking for doesn't exist in our catalog."}
          </p>
          <Button asChild variant="primary">
            <Link to="/opensource">Browse Collection</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const badge = difficultyBadge(repo.difficulty);
  const pageCanonical = canonicalUrl(repoPagePath(repo.owner, repo.name));

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-gray-950 selection:bg-primary/10">
      <SEO
        title={`${repo.name} — Good First Issues, Beginner Guide`}
        description={`Contribute to ${repo.name} by ${repo.owner}. Explore ${repo.language} good first issues, difficulty rating ${badge.label.toLowerCase()}, and a 3-step contribution guide for beginners.`}
        canonicalUrl={pageCanonical}
        structuredData={buildStructuredData(repo)}
      />
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="flex items-center space-x-2 text-sm text-stone-500 dark:text-stone-400 mb-8">
            <Link to="/opensource" className="hover:text-primary transition-colors">
              Open Source
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="font-medium text-stone-900 dark:text-white uppercase tracking-wider text-xs bg-stone-100 dark:bg-white/5 px-2 py-0.5 rounded">
              {repo.domain}
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-lg text-stone-500 font-medium">{repo.owner} /</span>
                      <h1 className="text-4xl font-extrabold text-stone-900 dark:text-white tracking-tight">
                        {repo.name}
                      </h1>
                    </div>
                    <p className="text-xl text-stone-600 dark:text-stone-400 leading-relaxed max-w-2xl">
                      {repo.description}
                    </p>
                  </div>
                  {repo.logo && (
                    <img
                      src={repo.logo}
                      alt={repo.name}
                      className="w-16 h-16 rounded-xl border border-stone-200 dark:border-white/10 p-2 bg-white dark:bg-stone-900"
                    />
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-6 mt-8">
                  <div className="flex items-center gap-2 text-stone-700 dark:text-stone-300">
                    <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                    <span className="font-semibold text-lg">{repo.stars.toLocaleString()}</span>
                    <span className="text-sm text-stone-500 uppercase tracking-tight font-medium">Stars</span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-700 dark:text-stone-300">
                    <GitFork className="w-5 h-5 text-stone-400" />
                    <span className="font-semibold text-lg">{repo.forks.toLocaleString()}</span>
                    <span className="text-sm text-stone-500 uppercase tracking-tight font-medium">Forks</span>
                  </div>
                  <div className="h-6 w-px bg-stone-200 dark:bg-white/10 hidden sm:block" />
                  <div className="flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/10 rounded-lg">
                    <Code2 className="w-4 h-4 text-primary" />
                    <span className="font-medium text-primary">{repo.language}</span>
                  </div>
                </div>
              </section>

              <section className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-white/10 overflow-hidden shadow-sm">
                <div className="p-6 border-b border-stone-200 dark:border-white/10 bg-stone-50/50 dark:bg-stone-900/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-primary" />
                      <h2 className="text-lg font-bold text-stone-900 dark:text-white">Good First Issues</h2>
                    </div>
                    <a
                      href={`${repo.url}/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-primary hover:underline flex items-center gap-1"
                    >
                      View all on GitHub <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
                <div className="divide-y divide-stone-100 dark:divide-white/5">
                  {loadingIssues ? (
                    <div className="p-12 text-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-primary mx-auto mb-4" />
                      <p className="text-stone-500 text-sm">Fetching live issues...</p>
                    </div>
                  ) : issues.length > 0 ? (
                    issues.map((issue) => (
                      <a
                        key={issue.id}
                        href={issue.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-6 hover:bg-stone-50 dark:hover:bg-white/5 transition-all group"
                      >
                        <div className="flex-1 pr-6">
                          <h3 className="text-stone-900 dark:text-white font-medium mb-1 group-hover:text-primary transition-colors">
                            {issue.title}
                          </h3>
                          <div className="flex items-center gap-3 text-xs text-stone-500">
                            <span className="font-mono">#{issue.number}</span>
                            <span>•</span>
                            <span>By {issue.user.login}</span>
                            <span>•</span>
                            <span>{formatDistanceToNow(new Date(issue.created_at))} ago</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          {issue.labels.slice(0, 2).map((label) => (
                            <span
                              key={label.name}
                              className="text-xs px-2 py-0.5 rounded-full font-medium"
                              style={{ backgroundColor: `#${label.color}22`, color: `#${label.color}` }}
                            >
                              {label.name}
                            </span>
                          ))}
                        </div>
                      </a>
                    ))
                  ) : (
                    <div className="p-12 text-center">
                      <p className="text-stone-500 mb-2">No active &quot;good first issue&quot; found</p>
                      <p className="text-xs text-stone-400">
                        Check the full issue tracker for other beginner tags like &quot;help wanted&quot;.
                      </p>
                    </div>
                  )}
                </div>
              </section>

              <section>
                <div className="flex items-center gap-2 mb-6">
                  <Activity className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl font-bold text-stone-900 dark:text-white">How to contribute</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {CONTRIBUTION_STEPS.map((guide) => (
                    <div
                      key={guide.step}
                      className="relative p-6 bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-white/10"
                    >
                      <span className="absolute -top-3 left-6 text-3xl font-black text-primary/10 dark:text-primary/20 italic select-none">
                        {guide.step}
                      </span>
                      <h3 className="text-lg font-bold text-stone-900 dark:text-white mb-2 pt-2">{guide.title}</h3>
                      <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{guide.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="space-y-8">
              <section className="bg-stone-900 text-white rounded-3xl p-8 overflow-hidden relative">
                <Github className="absolute -bottom-10 -right-10 w-40 h-40 text-white/5 rotate-12" />

                <h3 className="text-xl font-bold mb-6">Contribute Today</h3>

                <div className="space-y-6 relative z-10">
                  <div className="flex flex-col gap-4">
                    <Button asChild variant="primary" size="lg" className="w-full justify-center bg-white text-black hover:bg-stone-100 border-none shadow-xl">
                      <a href={repo.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        View Repository <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button asChild variant="secondary" size="lg" className="w-full justify-center bg-white/10 hover:bg-white/20 border-white/10 text-white">
                      <Link to="/opensource" className="flex items-center gap-2">
                        Explore Others <BookOpen className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-white/10">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-bold">Difficulty: {badge.label}</p>
                        <p className="text-xs text-stone-400">Perfect for your current skill level.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Tag className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-bold">Domain: {repo.domain}</p>
                        <p className="text-xs text-stone-400">
                          Explore projects in the {repo.domain.toLowerCase()} space.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-white dark:bg-stone-900 rounded-3xl border border-stone-200 dark:border-white/10 p-8">
                <h3 className="text-lg font-bold text-stone-900 dark:text-white mb-4">InternHack Resources</h3>
                <ul className="space-y-3">
                  {INTERNHACK_RESOURCES.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="text-sm text-stone-600 dark:text-stone-400 hover:text-primary flex items-center justify-between group"
                      >
                        {link.label}
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="border-l-4 border-primary pl-6 py-2">
                <p className="text-stone-500 text-sm italic">
                  &quot;Contributing to open source is one of the best ways to grow your network and career as a
                  student developer.&quot;
                </p>
                <p className="text-xs font-bold text-stone-900 dark:text-white mt-2">— InternHack Team</p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
