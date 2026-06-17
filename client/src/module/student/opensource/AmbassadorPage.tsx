import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import {
  Award,
  Copy,
  ExternalLink,
  CheckCircle,
  XCircle,
  Loader2,
  Share2,
  Link2,
  Globe,
} from "lucide-react";
import { Button } from "../../../components/ui/button";
import { SEO } from "../../../components/SEO";
import toast from "../../../components/ui/toast";
import api from "../../../lib/axios";

interface AmbassadorStatus {
  ambassador: {
    id: number;
    status: string;
    guidesCompleted: number;
    reposContributed: number;
    leaderboardRank: number | null;
    accountAgeDays: number;
    premiumGranted: boolean;
    referralLinks: {
      id: string;
      code: string;
      url: string;
      label: string | null;
      clicks: number;
      isActive: boolean;
      _count: { conversions: number };
    }[];
    shares: {
      id: number;
      platform: string;
      url: string;
      description: string | null;
      status: string;
    }[];
  } | null;
  eligibility?: {
    eligible: boolean;
    details: {
      guidesCompleted: number;
      reposContributed: number;
      accountAgeDays: number;
      leaderboardRank: number | null;
      inTop100: boolean;
    };
  };
  totalConversions?: number;
  referralUrl?: string | null;
}

const ELIGIBILITY_STEPS = [
  { key: "guidesCompleted", label: "Complete all 6 guides", min: 6 },
  { key: "reposContributed", label: "Contribute to 3+ repos", min: 3 },
  { key: "accountAgeDays", label: "Account age 30+ days", min: 30 },
  { key: "inTop100", label: "Top 100 on leaderboard", min: 1 },
];

export default function AmbassadorPage() {
  const queryClient = useQueryClient();
  const [sharePlatform, setSharePlatform] = useState("");
  const [shareUrl, setShareUrl] = useState("");
  const [shareDesc, setShareDesc] = useState("");
  const [showShareForm, setShowShareForm] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["ambassador", "me"],
    queryFn: () => api.get<AmbassadorStatus>("/ambassador/me").then((r) => r.data),
  });

  const eligibilityQuery = useQuery({
    queryKey: ["ambassador", "eligibility"],
    queryFn: () => api.get("/ambassador/me/eligibility").then((r) => r.data),
    enabled: !data?.ambassador,
  });

  const applyMutation = useMutation({
    mutationFn: () => api.post("/ambassador/apply"),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ambassador", "me"] });
      toast.success("Application submitted for review!");
    },
    onError: (err: any) => toast.error(err?.response?.data?.message || "Failed to apply"),
  });

  const autoEnrollMutation = useMutation({
    mutationFn: () => api.post("/ambassador/auto-enroll"),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ambassador", "me"] });
      toast.success("You are now an OSS Ambassador!");
    },
    onError: (err: any) => toast.error(err?.response?.data?.message || "Auto-enroll failed"),
  });

  const shareMutation = useMutation({
    mutationFn: (body: { platform: string; url: string; description?: string }) =>
      api.post("/ambassador/shares", body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ambassador", "me"] });
      toast.success("Share submitted for review");
      setShowShareForm(false);
      setSharePlatform("");
      setShareUrl("");
      setShareDesc("");
    },
    onError: (err: any) => toast.error(err?.response?.data?.message || "Failed to submit share"),
  });

  const generateLinkMutation = useMutation({
    mutationFn: () => api.post("/ambassador/referral-links", {}),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ambassador", "me"] });
      toast.success("New referral link generated");
    },
  });

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => toast.success("Copied!"));
  };

  const isApproved = data?.ambassador?.status === "APPROVED";
  const isPending = data?.ambassador?.status === "PENDING";
  const eligibility = eligibilityQuery.data;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-6 h-6 animate-spin text-stone-400" />
      </div>
    );
  }

  return (
    <div>
      <SEO title="OSS Ambassador" />

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Globe className="w-6 h-6 text-lime-500" />
        <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-50">OSS Ambassador Program</h1>
      </div>

      {!data?.ambassador && (
        /* ── Not yet applied ── */
        <div className="space-y-6">
          <div className="p-6 border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 rounded-md">
            <h2 className="text-lg font-semibold text-stone-900 dark:text-stone-50 mb-2">Become an OSS Ambassador</h2>
            <p className="text-sm text-stone-500 dark:text-stone-400 mb-6">
              Unlock premium perks, a referral program, and a featured badge on your profile.
            </p>

            {/* Eligibility checklist */}
            <div className="space-y-3 mb-6">
              {ELIGIBILITY_STEPS.map((step) => {
                const val = eligibility?.details?.[step.key as keyof typeof eligibility.details] ?? 0;
                const met = typeof val === "boolean" ? val : Number(val) >= step.min;
                return (
                  <div key={step.key} className="flex items-center gap-3 text-sm">
                    {met ? (
                      <CheckCircle className="w-5 h-5 text-lime-500 shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 text-stone-300 dark:text-stone-600 shrink-0" />
                    )}
                    <span className={met ? "text-stone-900 dark:text-stone-50" : "text-stone-400"}>
                      {step.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-3">
              <Button
                onClick={() => autoEnrollMutation.mutate()}
                disabled={!eligibility?.eligible || autoEnrollMutation.isPending}
              >
                {autoEnrollMutation.isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Award className="w-4 h-4" />}
                Auto-Enroll Now
              </Button>
              <Button
                variant="secondary"
                onClick={() => applyMutation.mutate()}
                disabled={!eligibility?.eligible || applyMutation.isPending}
              >
                Submit for Review
              </Button>
            </div>
          </div>
        </div>
      )}

      {isPending && (
        /* ── Pending review ── */
        <div className="p-6 border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 rounded-md text-center">
          <Award className="w-12 h-12 text-amber-500 mx-auto mb-3" />
          <h2 className="text-lg font-semibold text-stone-900 dark:text-stone-50">Application Under Review</h2>
          <p className="text-sm text-stone-500 mt-1">An admin will review your application shortly.</p>
        </div>
      )}

      {isApproved && data?.ambassador && (
        /* ── Approved Ambassador Dashboard ── */
        <div className="space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Guides", value: `${data.ambassador.guidesCompleted}/6` },
              { label: "Repos", value: data.ambassador.reposContributed },
              { label: "Rank", value: data.ambassador.leaderboardRank ? `#${data.ambassador.leaderboardRank}` : "N/A" },
              { label: "Referrals", value: data.totalConversions ?? 0 },
            ].map((s) => (
              <div key={s.label} className="p-4 border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 rounded-md text-center">
                <p className="text-xs font-mono uppercase tracking-widest text-stone-400">{s.label}</p>
                <p className="text-2xl font-bold text-stone-900 dark:text-stone-50 mt-1">{s.value}</p>
              </div>
            ))}
          </div>

          {/* Referral Links */}
          <div className="p-6 border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 rounded-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-stone-900 dark:text-stone-50">Referral Links</h2>
              <Button size="sm" onClick={() => generateLinkMutation.mutate()} disabled={generateLinkMutation.isPending}>
                <Link2 className="w-3.5 h-3.5" /> New Link
              </Button>
            </div>
            {data.ambassador.referralLinks.length === 0 ? (
              <p className="text-sm text-stone-400">No referral links yet.</p>
            ) : (
              <div className="space-y-2">
                {data.ambassador.referralLinks.map((link) => (
                  <div key={link.id} className="flex items-center justify-between p-3 bg-stone-50 dark:bg-stone-800 rounded-md">
                    <code className="text-xs text-lime-600 dark:text-lime-400 truncate flex-1">{link.url}</code>
                    <div className="flex items-center gap-3 shrink-0 ml-3">
                      <span className="text-xs text-stone-400">{link.clicks} clicks · {link._count.conversions} signups</span>
                      <button onClick={() => copyToClipboard(link.url)} className="p-1 hover:bg-stone-200 dark:hover:bg-stone-700 rounded">
                        <Copy className="w-3.5 h-3.5 text-stone-400" />
                      </button>
                      <a href={link.url} target="_blank" rel="noopener noreferrer" className="p-1 hover:bg-stone-200 dark:hover:bg-stone-700 rounded">
                        <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Social Shares */}
          <div className="p-6 border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 rounded-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-stone-900 dark:text-stone-50">Social Shares</h2>
              <Button size="sm" onClick={() => setShowShareForm(!showShareForm)}>
                <Share2 className="w-3.5 h-3.5" /> {showShareForm ? "Cancel" : "New Share"}
              </Button>
            </div>

            {showShareForm && (
              <div className="mb-4 p-4 bg-stone-50 dark:bg-stone-800 rounded-md space-y-3">
                <input
                  placeholder="Platform (e.g. Twitter, LinkedIn)"
                  value={sharePlatform}
                  onChange={(e) => setSharePlatform(e.target.value)}
                  className="w-full px-3 py-2 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-md text-sm"
                />
                <input
                  placeholder="Post URL"
                  value={shareUrl}
                  onChange={(e) => setShareUrl(e.target.value)}
                  className="w-full px-3 py-2 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-md text-sm"
                />
                <textarea
                  placeholder="Description (optional)"
                  value={shareDesc}
                  onChange={(e) => setShareDesc(e.target.value)}
                  className="w-full px-3 py-2 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-md text-sm"
                  rows={2}
                />
                <Button
                  size="sm"
                  onClick={() => shareMutation.mutate({ platform: sharePlatform, url: shareUrl, description: shareDesc || undefined })}
                  disabled={!sharePlatform || !shareUrl || shareMutation.isPending}
                >
                  Submit Share
                </Button>
              </div>
            )}

            {data.ambassador.shares.length === 0 ? (
              <p className="text-sm text-stone-400">No shares submitted yet.</p>
            ) : (
              <div className="space-y-2">
                {data.ambassador.shares.map((share) => (
                  <div key={share.id} className="flex items-center justify-between p-3 bg-stone-50 dark:bg-stone-800 rounded-md">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-stone-700 dark:text-stone-300">{share.platform}</span>
                      <span className={`text-xs px-1.5 py-0.5 rounded ${
                        share.status === "APPROVED" ? "bg-lime-100 dark:bg-lime-900/30 text-lime-700 dark:text-lime-400" :
                        share.status === "REJECTED" ? "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400" :
                        "bg-stone-100 dark:bg-stone-700 text-stone-500"
                      }`}>{share.status}</span>
                    </div>
                    <a href={share.url} target="_blank" rel="noopener noreferrer" className="text-xs text-lime-600 dark:text-lime-400 hover:underline truncate ml-3">
                      {share.url}
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
