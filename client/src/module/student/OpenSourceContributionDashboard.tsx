import React from "react";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axios";
import { Button } from "../components/ui/button";
import { SEO } from "../components/SEO";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

// Types mirroring backend responses (simplified)
interface ContributionTrend {
  date: string;
  count: number;
  level: number;
  details: { guideSteps: number; repoSuggestions: number; prsMerged: number };
}

interface FirstPrProgress {
  progress: number; // percentage
  completed: boolean;
}

export const OpenSourceContributionDashboard: React.FC = () => {
  const { data: trendData, isLoading: trendLoading } = useQuery<ContributionTrend[]>(
    ["opensource", "trend"],
    async () => {
      const res = await axiosInstance.get("/api/opensource/analytics/trend");
      return res.data.activity;
    },
    { staleTime: 5 * 60 * 1000 }
  );

  const { data: firstPr, isLoading: firstPrLoading } = useQuery<FirstPrProgress>(
    ["opensource", "firstPr"],
    async () => {
      const res = await axiosInstance.get("/api/opensource/first-pr/progress");
      return res.data;
    },
    { staleTime: 5 * 60 * 1000 }
  );

  // Placeholder for badges – in real implementation fetch from studentBadge endpoint
  const badges = ["Open Source Contributor", "First PR Merged"];

  return (
    <div className="container mx-auto p-6">
      <SEO title="Open Source Contributions" />
      <h1 className="text-3xl font-bold mb-6">Open Source Contribution Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Total Contributions (last 90 days)</CardTitle>
          </CardHeader>
          <CardContent>
            {trendLoading ? (
              <span>Loading...</span>
            ) : (
              <div className="text-2xl font-semibold">
                {trendData?.reduce((sum, item) => sum + item.count, 0) ?? 0}
              </div>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>First PR Progress</CardTitle>
          </CardHeader>
          <CardContent>
            {firstPrLoading ? (
              <span>Loading...</span>
            ) : (
              <div className="flex items-center space-x-2">
                <Badge>{firstPr?.completed ? "Completed" : "In Progress"}</Badge>
                <span>{firstPr?.progress ?? 0}%</span>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Badges Earned</h2>
      <div className="flex flex-wrap gap-2 mb-8">
        {badges.map((b) => (
          <Badge key={b} variant="primary" className="px-3 py-1">{b}</Badge>
        ))}
      </div>

      <Button asChild>
        <a href="/student/open-source/recommended">View Recommended Repositories</a>
      </Button>
    </div>
  );
};
