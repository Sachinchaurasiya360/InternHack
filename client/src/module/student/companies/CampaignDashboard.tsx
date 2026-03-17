import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  Trash2,
  ChevronDown,
  ChevronUp,
  Loader2,
  Mail,
  CheckCircle2,
  XCircle,
  Clock,
  AlertCircle,
} from "lucide-react";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type {
  EmailCampaign,
  EmailCampaignDetail,
  EmailCampaignStatus,
} from "../../../lib/types";

const STATUS_STYLES: Record<
  EmailCampaignStatus,
  { bg: string; text: string; label: string }
> = {
  DRAFT: {
    bg: "bg-gray-100 dark:bg-gray-800",
    text: "text-gray-600 dark:text-gray-400",
    label: "Draft",
  },
  QUEUED: {
    bg: "bg-blue-50 dark:bg-blue-900/30",
    text: "text-blue-700 dark:text-blue-400",
    label: "Queued",
  },
  SENDING: {
    bg: "bg-indigo-50 dark:bg-indigo-900/30",
    text: "text-indigo-700 dark:text-indigo-400",
    label: "Sending",
  },
  PAUSED: {
    bg: "bg-amber-50 dark:bg-amber-900/30",
    text: "text-amber-700 dark:text-amber-400",
    label: "Paused",
  },
  COMPLETED: {
    bg: "bg-emerald-50 dark:bg-emerald-900/30",
    text: "text-emerald-700 dark:text-emerald-400",
    label: "Completed",
  },
  FAILED: {
    bg: "bg-red-50 dark:bg-red-900/30",
    text: "text-red-700 dark:text-red-400",
    label: "Failed",
  },
};

export default function CampaignDashboard() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const queryClient = useQueryClient();

  const campaignsQuery = useQuery({
    queryKey: queryKeys.emailCampaigns.list(),
    queryFn: async () => {
      const { data } = await api.get("/email-campaigns");
      return data as EmailCampaign[];
    },
    refetchInterval: 10000,
  });

  const detailQuery = useQuery({
    queryKey: queryKeys.emailCampaigns.detail(expandedId ?? 0),
    queryFn: async () => {
      const { data } = await api.get(`/email-campaigns/${expandedId}`);
      return data as EmailCampaignDetail;
    },
    enabled: expandedId !== null,
  });

  const pauseMutation = useMutation({
    mutationFn: (id: number) => api.post(`/email-campaigns/${id}/pause`),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: queryKeys.emailCampaigns.list(),
      }),
  });

  const resumeMutation = useMutation({
    mutationFn: (id: number) => api.post(`/email-campaigns/${id}/resume`),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: queryKeys.emailCampaigns.list(),
      }),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => api.delete(`/email-campaigns/${id}`),
    onSuccess: () => {
      setExpandedId(null);
      queryClient.invalidateQueries({
        queryKey: queryKeys.emailCampaigns.list(),
      });
    },
  });

  const campaigns = campaignsQuery.data || [];

  if (campaignsQuery.isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
      </div>
    );
  }

  if (campaigns.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500 dark:text-gray-400">
        <Mail className="w-10 h-10 mx-auto mb-3 opacity-40" />
        <p className="text-sm">No campaigns yet</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {campaigns.map((campaign) => {
        const style = STATUS_STYLES[campaign.status];
        const progress =
          campaign.totalEmails > 0
            ? ((campaign.sentCount + campaign.failedCount) /
                campaign.totalEmails) *
              100
            : 0;
        const isExpanded = expandedId === campaign.id;

        return (
          <div
            key={campaign.id}
            className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden"
          >
            {/* Campaign header */}
            <button
              onClick={() => setExpandedId(isExpanded ? null : campaign.id)}
              className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium text-gray-900 dark:text-white text-sm truncate">
                      {campaign.name}
                    </h4>
                    <span
                      className={`px-2 py-0.5 rounded-md text-xs font-medium ${style.bg} ${style.text}`}
                    >
                      {style.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mt-1 text-xs text-gray-500 dark:text-gray-400">
                    <span>
                      {campaign.contactType === "PROFESSOR"
                        ? "Professors"
                        : "HR Contacts"}
                    </span>
                    <span>
                      {campaign.sentCount}/{campaign.totalEmails} sent
                    </span>
                    {campaign.failedCount > 0 && (
                      <span className="text-red-500">
                        {campaign.failedCount} failed
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Action buttons */}
                {campaign.status === "SENDING" && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      pauseMutation.mutate(campaign.id);
                    }}
                    disabled={pauseMutation.isPending}
                    className="p-1.5 rounded-lg hover:bg-amber-100 dark:hover:bg-amber-900/30 text-amber-600 transition-colors"
                    title="Pause"
                  >
                    <Pause className="w-4 h-4" />
                  </button>
                )}
                {campaign.status === "PAUSED" && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      resumeMutation.mutate(campaign.id);
                    }}
                    disabled={resumeMutation.isPending}
                    className="p-1.5 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900/30 text-emerald-600 transition-colors"
                    title="Resume"
                  >
                    <Play className="w-4 h-4" />
                  </button>
                )}
                {campaign.status !== "SENDING" && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (confirm("Delete this campaign?")) {
                        deleteMutation.mutate(campaign.id);
                      }
                    }}
                    disabled={deleteMutation.isPending}
                    className="p-1.5 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 text-red-500 transition-colors"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
                {isExpanded ? (
                  <ChevronUp className="w-4 h-4 text-gray-400" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                )}
              </div>
            </button>

            {/* Progress bar */}
            {(campaign.status === "SENDING" ||
              campaign.status === "PAUSED" ||
              campaign.status === "COMPLETED") && (
              <div className="px-4 pb-3">
                <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-500 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(progress, 100)}%` }}
                  />
                </div>
              </div>
            )}

            {/* Expanded detail */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4 border-t border-gray-100 dark:border-gray-800">
                    {detailQuery.isLoading ? (
                      <div className="flex justify-center py-6">
                        <Loader2 className="w-5 h-5 animate-spin text-gray-400" />
                      </div>
                    ) : detailQuery.data ? (
                      <div className="space-y-3 pt-3">
                        {/* Stats row */}
                        <div className="grid grid-cols-3 gap-3">
                          <div className="text-center p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <p className="text-lg font-semibold text-emerald-600">
                              {detailQuery.data.sentCount}
                            </p>
                            <p className="text-xs text-gray-500">Sent</p>
                          </div>
                          <div className="text-center p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <p className="text-lg font-semibold text-red-500">
                              {detailQuery.data.failedCount}
                            </p>
                            <p className="text-xs text-gray-500">Failed</p>
                          </div>
                          <div className="text-center p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <p className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                              {detailQuery.data.totalEmails -
                                detailQuery.data.sentCount -
                                detailQuery.data.failedCount}
                            </p>
                            <p className="text-xs text-gray-500">Pending</p>
                          </div>
                        </div>

                        {/* Email logs */}
                        <div className="max-h-60 overflow-y-auto space-y-1">
                          {detailQuery.data.emailLogs.map((log) => (
                            <div
                              key={log.id}
                              className="flex items-center gap-2 px-3 py-2 text-xs rounded-lg bg-gray-50 dark:bg-gray-800"
                            >
                              {log.status === "SENT" && (
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                              )}
                              {log.status === "FAILED" && (
                                <XCircle className="w-3.5 h-3.5 text-red-500 shrink-0" />
                              )}
                              {log.status === "PENDING" && (
                                <Clock className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                              )}
                              <span className="font-medium text-gray-700 dark:text-gray-300 truncate">
                                {log.recipientName}
                              </span>
                              <span className="text-gray-400 truncate">
                                {log.recipientEmail}
                              </span>
                              {log.errorMessage && (
                                <span
                                  className="text-red-500 truncate ml-auto"
                                  title={log.errorMessage}
                                >
                                  {log.errorMessage}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 py-4 text-sm text-red-500">
                        <AlertCircle className="w-4 h-4" />
                        Failed to load campaign details
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
