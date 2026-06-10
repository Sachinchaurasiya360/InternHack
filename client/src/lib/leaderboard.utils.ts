import type { LeaderboardView, RepoDomain } from "./types/opensource.types";

/**
 * Format a large number with K/M suffixes
 * @example formatScore(1250) => "1.3K"
 * @example formatScore(1500000) => "1.5M"
 */
export function formatScore(score: number): string {
  if (score >= 1_000_000) {
    return `${(score / 1_000_000).toFixed(1)}M`;
  }
  if (score >= 1_000) {
    return `${(score / 1_000).toFixed(1)}K`;
  }
  return score.toString();
}

/**
 * Get a medal emoji for top 3 ranks
 * @example getRankBadge(1) => "🥇"
 */
export function getRankBadge(rank: number): string | null {
  switch (rank) {
    case 1:
      return "🥇";
    case 2:
      return "🥈";
    case 3:
      return "🥉";
    default:
      return null;
  }
}

/**
 * Get display text for leaderboard view
 */
export function getViewDisplayName(view: LeaderboardView): string {
  switch (view) {
    case "global":
      return "Global";
    case "weekly":
      return "This Week";
    case "monthly":
      return "This Month";
    case "university":
      return "My University";
    case "domain":
      return "Domain";
    default:
      return "Leaderboard";
  }
}

/**
 * Get description for leaderboard view
 */
export function getViewDescription(view: LeaderboardView, domain?: string): string {
  switch (view) {
    case "global":
      return "Top contributors of all time";
    case "weekly":
      return "Top contributors from the last 7 days";
    case "monthly":
      return "Top contributors from the last 30 days";
    case "university":
      return "Top contributors from your university";
    case "domain":
      return domain ? `Top contributors in ${domain}` : "Top contributors by domain";
    default:
      return "";
  }
}

/**
 * Get color class for rank badge
 */
export function getRankColorClass(rank: number): string {
  if (rank === 1) return "text-yellow-500"; // Gold
  if (rank === 2) return "text-gray-400"; // Silver
  if (rank === 3) return "text-amber-600"; // Bronze
  return "text-gray-600";
}

/**
 * Get background color class for rank card
 */
export function getRankBgClass(rank: number): string {
  if (rank === 1) return "bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20 border-yellow-200 dark:border-yellow-800";
  if (rank === 2) return "bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-950/20 dark:to-slate-950/20 border-gray-200 dark:border-gray-800";
  if (rank === 3) return "bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-200 dark:border-amber-800";
  return "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800";
}

/**
 * Format streak text
 * @example formatStreak(5) => "5 day streak"
 */
export function formatStreak(days: number): string {
  if (days === 0) return "No streak";
  if (days === 1) return "1 day";
  return `${days} days`;
}

/**
 * Get streak emoji based on length
 */
export function getStreakEmoji(days: number): string {
  if (days === 0) return "💤";
  if (days < 7) return "🔥";
  if (days < 30) return "🚀";
  if (days < 100) return "⚡";
  return "🏆";
}

/**
 * Calculate rank change indicator
 * @example getRankChange(10, 15) => "+5 ↗" (moved up 5 places)
 */
export function getRankChange(currentRank: number, previousRank?: number): string | null {
  if (!previousRank || previousRank === currentRank) return null;
  
  const change = previousRank - currentRank; // positive = moved up
  if (change > 0) {
    return `+${change} ↗`;
  }
  return `${change} ↘`;
}

/**
 * Get contribution level text
 */
export function getContributionLevel(score: number): string {
  if (score === 0) return "No contributions yet";
  if (score < 50) return "Getting started";
  if (score < 200) return "Active contributor";
  if (score < 500) return "Regular contributor";
  if (score < 1000) return "Dedicated contributor";
  if (score < 2000) return "Elite contributor";
  return "Legendary contributor";
}

/**
 * Get all available domains for filtering
 */
export function getAvailableDomains(): { value: RepoDomain; label: string }[] {
  return [
    { value: "WEB", label: "Web Development" },
    { value: "AI", label: "Artificial Intelligence" },
    { value: "MOBILE", label: "Mobile Development" },
    { value: "DEVOPS", label: "DevOps" },
    { value: "DATA", label: "Data Science" },
    { value: "BLOCKCHAIN", label: "Blockchain" },
    { value: "SECURITY", label: "Security" },
    { value: "CLOUD", label: "Cloud" },
    { value: "GAMING", label: "Gaming" },
    { value: "OTHER", label: "Other" },
  ];
}

/**
 * Format domain name for display
 */
export function formatDomainName(domain: string): string {
  const domainMap: Record<string, string> = {
    WEB: "Web Development",
    AI: "Artificial Intelligence",
    MOBILE: "Mobile Development",
    DEVOPS: "DevOps",
    DATA: "Data Science",
    BLOCKCHAIN: "Blockchain",
    SECURITY: "Security",
    CLOUD: "Cloud",
    GAMING: "Gaming",
    OTHER: "Other",
  };
  
  return domainMap[domain] || domain;
}

/**
 * Get percentage of progress towards next milestone
 * @example getProgressToNextMilestone(850) => { current: 850, next: 1000, percent: 85 }
 */
export function getProgressToNextMilestone(score: number): {
  current: number;
  next: number;
  percent: number;
} {
  const milestones = [0, 50, 100, 250, 500, 1000, 2000, 5000, 10000];
  
  const nextMilestone = milestones.find((m) => m > score) || milestones[milestones.length - 1];
  const prevMilestone = milestones
    .slice()
    .reverse()
    .find((m) => m <= score) || 0;
  
  const range = nextMilestone - prevMilestone;
  const progress = score - prevMilestone;
  const percent = range > 0 ? Math.round((progress / range) * 100) : 100;
  
  return {
    current: score,
    next: nextMilestone,
    percent: Math.min(percent, 100),
  };
}

/**
 * Get metric display info
 */
export function getMetricInfo(metricKey: string): {
  label: string;
  icon: string;
  description: string;
} {
  const metrics: Record<string, { label: string; icon: string; description: string }> = {
    guidesCompleted: {
      label: "Guides",
      icon: "📚",
      description: "Guides completed",
    },
    reposSuggestedApproved: {
      label: "Repos",
      icon: "✅",
      description: "Repositories suggested and approved",
    },
    githubPRsMerged: {
      label: "PRs",
      icon: "🔀",
      description: "GitHub pull requests merged",
    },
    currentStreak: {
      label: "Streak",
      icon: "🔥",
      description: "Current contribution streak",
    },
    certificatesEarned: {
      label: "Badges",
      icon: "🏅",
      description: "Certificates and badges earned",
    },
  };
  
  return (
    metrics[metricKey] || {
      label: metricKey,
      icon: "📊",
      description: metricKey,
    }
  );
}
