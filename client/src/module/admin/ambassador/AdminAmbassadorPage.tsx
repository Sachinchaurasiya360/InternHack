import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { PaginationControls } from "../../../components/ui/PaginationControls";
import { Button } from "../../../components/ui/button";
import {
  Users,
  Search,
  Loader2,
  CheckCircle,
  XCircle,
  Star,
  Share2,
  Award,
  ExternalLink,
  Copy,
  TrendingUp,
  Eye,
  Link2,
} from "lucide-react";
import toast from "../../../components/ui/toast";
import api from "../../../lib/axios";
import { SEO } from "../../../components/SEO";

type Tab = "ambassadors" | "shares" | "spotlights" | "referrers";

interface Ambassador {
  id: number;
  userId: number;
  status: string;
  guidesCompleted: number;
  reposContributed: number;
  leaderboardRank: number | null;
  accountAgeDays: number;
  premiumGranted: boolean;
  premiumGrantedAt: string | null;
  appliedAt: string | null;
  reviewedAt: string | null;
  createdAt: string;
  user: { id: number; name: string; email: string; profilePic: string | null; createdAt: string };
  reviewer: { id: number; name: string } | null;
  _count: { referralLinks: number; shares: number; spotlights: number };
}

interface Share {
  id: number;
  ambassadorId: number;
  platform: string;
  url: string;
  description: string | null;
  status: string;
  adminNotes: string | null;
  reviewedAt: string | null;
  createdAt: string;
  reviewer: { id: number; name: string } | null;
}

interface Spotlight {
  id: number;
  ambassadorId: number;
  month: string;
  year: number;
  title: string | null;
  description: string | null;
  isActive: boolean;
  createdAt: string;
  ambassador: { user: { id: number; name: string; profilePic: string | null } };
}

interface TopReferrer {
  userId: number;
  name: string;
  profilePic: string | null;
  count: number;
}

interface AmbassadorDetail extends Ambassador {
  referralLinks: Array<{
    id: string;
    code: string;
    url: string;
    label: string | null;
    clicks: number;
    _count: { conversions: number };
  }>;
  shares: Share[];
  spotlights: Spotlight[];
}

function statusBadge(status: string) {
  const base = "inline-flex items-center gap-1 px-2 py-0.5 rounded-sm text-xs font-medium";
  if (status === "APPROVED") return `${base} bg-lime-500/10 text-lime-400`;
  if (status === "REJECTED") return `${base} bg-red-500/10 text-red-400`;
  return `${base} bg-amber-500/10 text-amber-400`;
}

export default function AdminAmbassadorPage() {
  const [activeTab, setActiveTab] = useState<Tab>("ambassadors");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [page, setPage] = useState(1);
  const [selectedAmbassador, setSelectedAmbassador] = useState<number | null>(null);
  const [ambassadorDetail, setAmbassadorDetail] = useState<AmbassadorDetail | null>(null);
  const queryClient = useQueryClient();

  const limit = 20;

  const ambassadorsQuery = useQuery({
    queryKey: ["admin", "ambassadors", { status: statusFilter, search, page, limit }],
    queryFn: () =>
      api
        .get("/ambassador/admin", {
          params: { status: statusFilter || undefined, search: search || undefined, page, limit },
        })
        .then((r) => r.data),
  });

  const spotlightsQuery = useQuery({
    queryKey: ["admin", "ambassador-spotlights"],
    queryFn: () => api.get("/ambassador/admin/spotlights").then((r) => r.data),
    enabled: activeTab === "spotlights",
  });

  const referrersQuery = useQuery({
    queryKey: ["admin", "ambassador-top-referrers"],
    queryFn: () => api.get("/ambassador/admin/top-referrers").then((r) => r.data),
    enabled: activeTab === "referrers",
  });

  const reviewMutation = useMutation({
    mutationFn: ({ id, status, adminNotes }: { id: number; status: string; adminNotes?: string }) =>
      api.put(`/ambassador/admin/${id}/review`, { status, adminNotes }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "ambassadors"] });
      queryClient.invalidateQueries({ queryKey: ["admin", "ambassador-detail"] });
      toast.success("Ambassador updated");
    },
    onError: (err) => { console.error("[AdminAmbassador] review error:", err); toast.error("Failed to update ambassador"); },
  });

  const reviewShareMutation = useMutation({
    mutationFn: ({ shareId, status, adminNotes }: { shareId: number; status: string; adminNotes?: string }) =>
      api.put(`/ambassador/admin/shares/${shareId}/review`, { status, adminNotes }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "ambassador-detail"] });
      toast.success("Share reviewed");
    },
    onError: (err) => { console.error("[AdminAmbassador] reviewShare error:", err); toast.error("Failed to review share"); },
  });

  const loadAmbassadorDetail = async (id: number) => {
    setSelectedAmbassador(id);
    try {
      const res = await api.get(`/ambassador/admin/${id}`);
      setAmbassadorDetail(res.data as AmbassadorDetail);
    } catch (err) {
      console.error("[AdminAmbassador] load detail error:", err);
      toast.error("Failed to load ambassador details");
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => toast.success("Copied!"));
  };

  const tabs: { key: Tab; label: string; icon: typeof Users }[] = [
    { key: "ambassadors", label: "Ambassadors", icon: Users },
    { key: "shares", label: "Social Shares", icon: Share2 },
    { key: "spotlights", label: "Spotlights", icon: Star },
    { key: "referrers", label: "Top Referrers", icon: TrendingUp },
  ];

  return (
    <div>
      <SEO title="OSS Ambassador Program" noIndex />
      <h1 className="text-2xl font-bold text-white mb-6 mt-6">OSS Ambassador Program</h1>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 bg-stone-900 rounded-lg p-1 w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => { setActiveTab(tab.key); setSelectedAmbassador(null); setAmbassadorDetail(null); }}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === tab.key
                ? "bg-lime-600 text-white"
                : "text-stone-400 hover:text-white hover:bg-stone-800"
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "ambassadors" && (
          <motion.div key="ambassadors" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {selectedAmbassador && ambassadorDetail ? (
              <AmbassadorDetailView
                ambassador={ambassadorDetail}
                onBack={() => { setSelectedAmbassador(null); setAmbassadorDetail(null); }}
                onReview={(status, notes) => reviewMutation.mutate({ id: selectedAmbassador, status, adminNotes: notes })}
                onReviewShare={(shareId, status, notes) => reviewShareMutation.mutate({ shareId, status, adminNotes: notes })}
                onCopy={copyToClipboard}
              />
            ) : (
              <>
                {/* Filters */}
                <div className="flex gap-4 mb-6">
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                    <input
                      type="text"
                      placeholder="Search by name or email..."
                      value={search}
                      onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                      className="w-full pl-10 pr-4 py-2 bg-stone-900 border border-stone-700 rounded-lg text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-lime-500 text-sm"
                    />
                  </div>
                  <select
                    value={statusFilter}
                    onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }}
                    className="bg-stone-900 border border-stone-700 rounded-lg text-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500"
                  >
                    <option value="">All Status</option>
                    <option value="PENDING">Pending</option>
                    <option value="APPROVED">Approved</option>
                    <option value="REJECTED">Rejected</option>
                  </select>
                </div>

                {/* Table */}
                <div className="bg-stone-900 rounded-lg border border-stone-800 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-stone-800 text-stone-400">
                          <th className="text-left px-4 py-3 font-medium">Name</th>
                          <th className="text-left px-4 py-3 font-medium">Status</th>
                          <th className="text-center px-4 py-3 font-medium">Guides</th>
                          <th className="text-center px-4 py-3 font-medium">Repos</th>
                          <th className="text-center px-4 py-3 font-medium">Rank</th>
                          <th className="text-center px-4 py-3 font-medium">Premium</th>
                          <th className="text-center px-4 py-3 font-medium">Links</th>
                          <th className="text-center px-4 py-3 font-medium">Shares</th>
                          <th className="text-right px-4 py-3 font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ambassadorsQuery.isLoading ? (
                          <tr>
                            <td colSpan={9} className="text-center py-12">
                              <Loader2 className="w-6 h-6 animate-spin mx-auto text-stone-400" />
                            </td>
                          </tr>
                        ) : ambassadorsQuery.data?.ambassadors?.length === 0 ? (
                          <tr>
                            <td colSpan={9} className="text-center py-12 text-stone-500">
                              No ambassadors found
                            </td>
                          </tr>
                        ) : (
                          ambassadorsQuery.data?.ambassadors?.map((a: Ambassador) => (
                            <tr key={a.id} className="border-b border-stone-800 hover:bg-stone-800/50 cursor-pointer"
                              onClick={() => loadAmbassadorDetail(a.id)}>
                              <td className="px-4 py-3">
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-md bg-stone-700 flex items-center justify-center text-xs font-medium text-white">
                                    {a.user.name.charAt(0).toUpperCase()}
                                  </div>
                                  <div>
                                    <div className="text-white font-medium">{a.user.name}</div>
                                    <div className="text-stone-400 text-xs">{a.user.email}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-4 py-3">
                                <span className={statusBadge(a.status)}>
                                  {a.status === "APPROVED" ? <CheckCircle className="w-3 h-3" /> :
                                   a.status === "REJECTED" ? <XCircle className="w-3 h-3" /> :
                                   <Eye className="w-3 h-3" />}
                                  {a.status}
                                </span>
                              </td>
                              <td className="px-4 py-3 text-center text-white">{a.guidesCompleted}/6</td>
                              <td className="px-4 py-3 text-center text-white">{a.reposContributed}</td>
                              <td className="px-4 py-3 text-center text-white">
                                {a.leaderboardRank ? `#${a.leaderboardRank}` : "-"}
                              </td>
                              <td className="px-4 py-3 text-center">
                                {a.premiumGranted ? (
                                  <CheckCircle className="w-4 h-4 text-lime-400 mx-auto" />
                                ) : (
                                  <XCircle className="w-4 h-4 text-stone-600 mx-auto" />
                                )}
                              </td>
                              <td className="px-4 py-3 text-center text-white">{a._count.referralLinks}</td>
                              <td className="px-4 py-3 text-center text-white">{a._count.shares}</td>
                              <td className="px-4 py-3 text-right">
                                <div className="flex gap-2 justify-end">
                                  {a.status === "PENDING" && (
                                    <>
                                      <Button
                                        size="sm"
                                        onClick={(e) => { e.stopPropagation(); reviewMutation.mutate({ id: a.id, status: "APPROVED" }); }}
                                        disabled={reviewMutation.isPending}
                                      >
                                        <CheckCircle className="w-3.5 h-3.5" />
                                        Approve
                                      </Button>
                                      <Button
                                        size="sm"
                                        variant="danger"
                                        onClick={(e) => { e.stopPropagation(); reviewMutation.mutate({ id: a.id, status: "REJECTED", adminNotes: "Rejected by admin" }); }}
                                        disabled={reviewMutation.isPending}
                                      >
                                        <XCircle className="w-3.5 h-3.5" />
                                        Reject
                                      </Button>
                                    </>
                                  )}
                                </div>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

                {ambassadorsQuery.data?.pagination && (
                  <PaginationControls
                    currentPage={ambassadorsQuery.data.pagination.page}
                    totalPages={Math.ceil(ambassadorsQuery.data.pagination.total / ambassadorsQuery.data.pagination.limit)}
                    onPageChange={setPage}
                  />
                )}
              </>
            )}
          </motion.div>
        )}

        {activeTab === "shares" && (
          <motion.div key="shares" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <SharesTab
              ambassadors={ambassadorsQuery.data?.ambassadors ?? []}
              onReview={reviewShareMutation.mutate}
              onCopy={copyToClipboard}
            />
          </motion.div>
        )}

        {activeTab === "spotlights" && (
          <motion.div key="spotlights" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <SpotlightsTab
              spotlights={spotlightsQuery.data?.spotlights ?? []}
              ambassadors={ambassadorsQuery.data?.ambassadors ?? []}
              isLoading={spotlightsQuery.isLoading}
            />
          </motion.div>
        )}

        {activeTab === "referrers" && (
          <motion.div key="referrers" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ReferrersTab
              referrers={referrersQuery.data?.topReferrers ?? []}
              isLoading={referrersQuery.isLoading}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Ambassador Detail View ─────────────────────────────────────

function AmbassadorDetailView({
  ambassador,
  onBack,
  onReview,
  onReviewShare,
  onCopy,
}: {
  ambassador: AmbassadorDetail;
  onBack: () => void;
  onReview: (status: string, notes?: string) => void;
  onReviewShare: (shareId: number, status: string, notes?: string) => void;
  onCopy: (text: string) => void;
}) {
  return (
    <div>
      <button onClick={onBack} className="text-stone-400 hover:text-white text-sm mb-4">&larr; Back to list</button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-stone-900 rounded-lg border border-stone-800 p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Ambassador Info</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-stone-400">Name</span>
                <p className="text-white">{ambassador.user.name}</p>
              </div>
              <div>
                <span className="text-stone-400">Email</span>
                <p className="text-white">{ambassador.user.email}</p>
              </div>
              <div>
                <span className="text-stone-400">Status</span>
                <p className={`font-medium ${ambassador.status === "APPROVED" ? "text-lime-400" : ambassador.status === "REJECTED" ? "text-red-400" : "text-amber-400"}`}>{ambassador.status}</p>
              </div>
              <div>
                <span className="text-stone-400">Guides Completed</span>
                <p className="text-white">{ambassador.guidesCompleted}/6</p>
              </div>
              <div>
                <span className="text-stone-400">Repos Contributed</span>
                <p className="text-white">{ambassador.reposContributed}</p>
              </div>
              <div>
                <span className="text-stone-400">Leaderboard Rank</span>
                <p className="text-white">{ambassador.leaderboardRank ? `#${ambassador.leaderboardRank}` : "N/A"}</p>
              </div>
              <div>
                <span className="text-stone-400">Account Age (days)</span>
                <p className="text-white">{ambassador.accountAgeDays}</p>
              </div>
              <div>
                <span className="text-stone-400">Premium Granted</span>
                <p className="text-white">{ambassador.premiumGranted ? "Yes" : "No"}</p>
              </div>
            </div>
          </div>

          {/* Referral Links */}
          {ambassador.referralLinks?.length > 0 && (
            <div className="bg-stone-900 rounded-lg border border-stone-800 p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Referral Links</h2>
              <div className="space-y-3">
                {ambassador.referralLinks.map((link) => (
                  <div key={link.id} className="flex items-center justify-between bg-stone-800 rounded-lg px-4 py-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <Link2 className="w-4 h-4 text-stone-400 shrink-0" />
                        <code className="text-sm text-lime-400 truncate">{link.url}</code>
                      </div>
                      {link.label && <p className="text-xs text-stone-400 mt-1">{link.label}</p>}
                    </div>
                    <div className="flex items-center gap-4 shrink-0 ml-4">
                      <span className="text-xs text-stone-400">{link.clicks} clicks</span>
                      <span className="text-xs text-stone-400">{link._count?.conversions ?? 0} conversions</span>
                      <button onClick={() => onCopy(link.url)} className="p-1.5 rounded hover:bg-stone-700 text-stone-400 hover:text-white">
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                      <a href={link.url} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded hover:bg-stone-700 text-stone-400 hover:text-white">
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Social Shares */}
          {ambassador.shares?.length > 0 && (
            <div className="bg-stone-900 rounded-lg border border-stone-800 p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Social Shares</h2>
              <div className="space-y-3">
                {ambassador.shares.map((share) => (
                  <div key={share.id} className="flex items-center justify-between bg-stone-800 rounded-lg px-4 py-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <Share2 className="w-4 h-4 text-stone-400" />
                        <span className="text-white text-sm font-medium">{share.platform}</span>
                        <span className={`text-xs px-1.5 py-0.5 rounded-sm ${
                          share.status === "APPROVED" ? "bg-lime-500/10 text-lime-400" :
                          share.status === "REJECTED" ? "bg-red-500/10 text-red-400" :
                          "bg-amber-500/10 text-amber-400"
                        }`}>{share.status}</span>
                      </div>
                      <a href={share.url} target="_blank" rel="noopener noreferrer" className="text-lime-400 text-xs hover:underline mt-1 inline-block">{share.url}</a>
                      {share.description && <p className="text-stone-400 text-xs mt-1">{share.description}</p>}
                    </div>
                    {share.status === "PENDING" && (
                      <div className="flex gap-2">
                        <Button size="sm" onClick={() => onReviewShare(share.id, "APPROVED")}>
                          <CheckCircle className="w-3.5 h-3.5" /> Approve
                        </Button>
                        <Button size="sm" variant="danger" onClick={() => onReviewShare(share.id, "REJECTED")}>
                          <XCircle className="w-3.5 h-3.5" /> Reject
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Actions Panel */}
        {ambassador.status === "PENDING" && (
          <div className="bg-stone-900 rounded-lg border border-stone-800 p-6 h-fit">
            <h2 className="text-lg font-semibold text-white mb-4">Review Application</h2>
            <div className="space-y-3">
              <Button className="w-full" onClick={() => onReview("APPROVED")}>
                <CheckCircle className="w-4 h-4" /> Approve & Grant Premium
              </Button>
              <Button className="w-full" variant="danger" onClick={() => onReview("REJECTED")}>
                <XCircle className="w-4 h-4" /> Reject
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Shares Tab ──────────────────────────────────────────────────

function SharesTab({ ambassadors, onReview, onCopy }: {
  ambassadors: Ambassador[];
  onReview: (args: { shareId: number; status: string; adminNotes?: string }) => void;
  onCopy: (text: string) => void;
}) {
  const [selectedAmbId, setSelectedAmbId] = useState<number | null>(null);

  const sharesQuery = useQuery({
    queryKey: ["admin", "ambassador-shares", selectedAmbId],
    queryFn: () => api.get(`/ambassador/admin/${selectedAmbId}/shares`).then((r) => r.data),
    enabled: !!selectedAmbId,
  });

  return (
    <div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-stone-400 mb-2">Select Ambassador</label>
        <select
          value={selectedAmbId ?? ""}
          onChange={(e) => setSelectedAmbId(e.target.value ? parseInt(e.target.value) : null)}
          className="bg-stone-900 border border-stone-700 rounded-lg text-white px-3 py-2 text-sm w-full max-w-md"
        >
          <option value="">-- Choose --</option>
          {ambassadors.map((a) => (
            <option key={a.id} value={a.id}>{a.user.name} ({a.user.email})</option>
          ))}
        </select>
      </div>

      {selectedAmbId && (
        <div className="bg-stone-900 rounded-lg border border-stone-800 overflow-hidden">
          {sharesQuery.isLoading ? (
            <div className="py-12 text-center"><Loader2 className="w-6 h-6 animate-spin mx-auto text-stone-400" /></div>
          ) : sharesQuery.data?.shares?.length === 0 ? (
            <div className="py-12 text-center text-stone-500">No shares found</div>
          ) : (
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-800 text-stone-400">
                  <th className="text-left px-4 py-3">Platform</th>
                  <th className="text-left px-4 py-3">URL</th>
                  <th className="text-left px-4 py-3">Status</th>
                  <th className="text-right px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {sharesQuery.data?.shares?.map((share: Share) => (
                  <tr key={share.id} className="border-b border-stone-800">
                    <td className="px-4 py-3 text-white">{share.platform}</td>
                    <td className="px-4 py-3">
                      <a href={share.url} target="_blank" rel="noopener noreferrer" className="text-lime-400 hover:underline text-xs break-all">{share.url}</a>
                      <button onClick={() => onCopy(share.url)} className="ml-2 text-stone-400 hover:text-white"><Copy className="w-3 h-3 inline" /></button>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`text-xs px-1.5 py-0.5 rounded-sm ${
                        share.status === "APPROVED" ? "bg-lime-500/10 text-lime-400" :
                        share.status === "REJECTED" ? "bg-red-500/10 text-red-400" :
                        "bg-amber-500/10 text-amber-400"
                      }`}>{share.status}</span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      {share.status === "PENDING" && (
                        <div className="flex gap-2 justify-end">
                          <Button size="sm" onClick={() => onReview({ shareId: share.id, status: "APPROVED" })}>
                            <CheckCircle className="w-3.5 h-3.5" /> Approve
                          </Button>
                          <Button size="sm" variant="danger" onClick={() => onReview({ shareId: share.id, status: "REJECTED" })}>
                            <XCircle className="w-3.5 h-3.5" /> Reject
                          </Button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Spotlights Tab ──────────────────────────────────────────────

interface SpotlightFormData {
  ambassadorId: number;
  month: string;
  year: number;
  title?: string;
  description?: string;
}

function SpotlightsTab({ spotlights, ambassadors, isLoading }: {
  spotlights: Spotlight[];
  ambassadors: Ambassador[];
  isLoading: boolean;
}) {
  const queryClient = useQueryClient();

  const createMutation = useMutation({
    mutationFn: (data: SpotlightFormData) => api.post("/ambassador/admin/spotlights", data),
    onSuccess: () => { queryClient.invalidateQueries({ queryKey: ["admin", "ambassador-spotlights"] }); toast.success("Spotlight created"); },
    onError: (err) => { console.error("[AdminAmbassador] create spotlight error:", err); toast.error("Failed to create spotlight"); },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => api.delete(`/ambassador/admin/spotlights/${id}`),
    onSuccess: () => { queryClient.invalidateQueries({ queryKey: ["admin", "ambassador-spotlights"] }); toast.success("Spotlight deleted"); },
    onError: (err) => { console.error("[AdminAmbassador] delete spotlight error:", err); toast.error("Failed to delete spotlight"); },
  });

  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ ambassadorId: "", month: "", year: new Date().getFullYear().toString(), title: "", description: "" });

  const handleCreate = () => {
    if (!form.ambassadorId || !form.month || !form.year) {
      toast.error("Please fill in required fields");
      return;
    }
    createMutation.mutate({
      ambassadorId: parseInt(form.ambassadorId),
      month: form.month.padStart(2, "0"),
      year: parseInt(form.year),
      title: form.title || undefined,
      description: form.description || undefined,
    });
    setShowForm(false);
    setForm({ ambassadorId: "", month: "", year: new Date().getFullYear().toString(), title: "", description: "" });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-stone-400 text-sm">{spotlights.length} spotlight(s)</p>
        <Button onClick={() => setShowForm(!showForm)}>
          <Star className="w-4 h-4" />
          {showForm ? "Cancel" : "Add Spotlight"}
        </Button>
      </div>

      {showForm && (
        <div className="bg-stone-900 rounded-lg border border-stone-800 p-6 mb-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-stone-400 mb-1">Ambassador *</label>
              <select value={form.ambassadorId} onChange={(e) => setForm({ ...form, ambassadorId: e.target.value })}
                className="w-full bg-stone-800 border border-stone-700 rounded-lg px-3 py-2 text-white text-sm">
                <option value="">Select...</option>
                {ambassadors.filter((a) => a.status === "APPROVED").map((a) => (
                  <option key={a.id} value={a.id}>{a.user.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm text-stone-400 mb-1">Month *</label>
              <select value={form.month} onChange={(e) => setForm({ ...form, month: e.target.value })}
                className="w-full bg-stone-800 border border-stone-700 rounded-lg px-3 py-2 text-white text-sm">
                <option value="">Select...</option>
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i + 1} value={String(i + 1).padStart(2, "0")}>
                    {new Date(0, i).toLocaleString("default", { month: "long" })}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm text-stone-400 mb-1">Year *</label>
              <input type="number" value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })}
                className="w-full bg-stone-800 border border-stone-700 rounded-lg px-3 py-2 text-white text-sm" />
            </div>
            <div>
              <label className="block text-sm text-stone-400 mb-1">Title</label>
              <input type="text" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full bg-stone-800 border border-stone-700 rounded-lg px-3 py-2 text-white text-sm" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-stone-400 mb-1">Description</label>
            <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full bg-stone-800 border border-stone-700 rounded-lg px-3 py-2 text-white text-sm" rows={3} />
          </div>
          <Button onClick={handleCreate} disabled={createMutation.isPending}>
            {createMutation.isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Star className="w-4 h-4" />}
            Create Spotlight
          </Button>
        </div>
      )}

      {isLoading ? (
        <div className="py-12 text-center"><Loader2 className="w-6 h-6 animate-spin mx-auto text-stone-400" /></div>
      ) : spotlights.length === 0 ? (
        <div className="py-12 text-center text-stone-500">No spotlights yet</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {spotlights.map((s) => (
            <div key={s.id} className="bg-stone-900 rounded-lg border border-stone-800 p-5">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-stone-700 flex items-center justify-center text-sm font-medium text-white">
                    {s.ambassador.user.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">{s.ambassador.user.name}</div>
                    <div className="text-stone-400 text-xs">{s.month}/{s.year}</div>
                  </div>
                </div>
                <button onClick={() => deleteMutation.mutate(s.id)} className="text-stone-500 hover:text-red-400">
                  <XCircle className="w-4 h-4" />
                </button>
              </div>
              {s.title && <h3 className="text-white text-sm font-medium mb-1">{s.title}</h3>}
              {s.description && <p className="text-stone-400 text-xs">{s.description}</p>}
              <div className="mt-2">
                <span className={`text-xs px-1.5 py-0.5 rounded-sm ${s.isActive ? "bg-lime-500/10 text-lime-400" : "bg-stone-500/10 text-stone-400"}`}>
                  {s.isActive ? "Active" : "Inactive"}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Referrers Tab ───────────────────────────────────────────────

function ReferrersTab({ referrers, isLoading }: { referrers: TopReferrer[]; isLoading: boolean }) {
  return (
    <div>
      {isLoading ? (
        <div className="py-12 text-center"><Loader2 className="w-6 h-6 animate-spin mx-auto text-stone-400" /></div>
      ) : referrers.length === 0 ? (
        <div className="py-12 text-center text-stone-500">No referrals this month yet</div>
      ) : (
        <div className="bg-stone-900 rounded-lg border border-stone-800 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-800 text-stone-400">
                <th className="text-left px-4 py-3 font-medium">#</th>
                <th className="text-left px-4 py-3 font-medium">Ambassador</th>
                <th className="text-right px-4 py-3 font-medium">Referrals</th>
              </tr>
            </thead>
            <tbody>
              {referrers.map((r, i) => (
                <tr key={r.userId} className="border-b border-stone-800">
                  <td className="px-4 py-3 text-stone-400 w-12">
                    {i === 0 ? <Award className="w-5 h-5 text-yellow-400" /> :
                     i === 1 ? <Award className="w-5 h-5 text-stone-400" /> :
                     i === 2 ? <Award className="w-5 h-5 text-amber-600" /> :
                     <span className="text-stone-500">{i + 1}</span>}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-md bg-stone-700 flex items-center justify-center text-xs font-medium text-white">
                        {r.name.charAt(0).toUpperCase()}
                      </div>
                      <span className="text-white font-medium">{r.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <span className="text-white font-bold text-lg">{r.count}</span>
                    <span className="text-stone-400 text-xs ml-1">signups</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
