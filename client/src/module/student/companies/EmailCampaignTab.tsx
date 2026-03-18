import { useState, useRef, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  MessageSquare,
  Users,
  Settings,
  ChevronRight,
  ChevronLeft,
  Loader2,
  AlertCircle,
  Eye,
  Play,
  Search,
  Mail,
  RefreshCw,
  Lock,
} from "lucide-react";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import { useAuthStore } from "../../../lib/auth.store";
import CampaignDashboard from "./CampaignDashboard";
import type { ChatMessage, EmailCampaign } from "../../../lib/types";

type Phase = "chat" | "recipients" | "send";
type ContactType = "PROFESSOR" | "HR";

interface PreviewEmail {
  to: string | null;
  recipientName: string;
  subject: string;
  body: string;
}

const INTERVAL_OPTIONS = [
  { value: 30, label: "30 seconds" },
  { value: 60, label: "1 minute" },
  { value: 120, label: "2 minutes" },
  { value: 300, label: "5 minutes" },
];

export default function EmailCampaignTab() {
  const { user } = useAuthStore();

  // ── Phase state ──
  const [phase, setPhase] = useState<Phase>("chat");
  const [showDashboard, setShowDashboard] = useState(false);

  // ── Chat state ──
  const [contactType, setContactType] = useState<ContactType>("HR");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [chatInput, setChatInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  // ── Extracted template ──
  const [emailSubject, setEmailSubject] = useState("");
  const [emailTemplate, setEmailTemplate] = useState("");

  // ── Recipient filters ──
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [filterSearch, setFilterSearch] = useState("");

  // ── Send config ──
  const [campaignName, setCampaignName] = useState("");
  const [intervalSeconds, setIntervalSeconds] = useState(60);
  const [previewEmails, setPreviewEmails] = useState<PreviewEmail[]>([]);

  // ── Campaigns query ──
  const campaignsQuery = useQuery({
    queryKey: queryKeys.emailCampaigns.list(),
    queryFn: async () => {
      const { data } = await api.get("/email-campaigns");
      return data as EmailCampaign[];
    },
  });

  const queryClient = useQueryClient();

  // ── Chat mutation ──
  const chatMutation = useMutation({
    mutationFn: async (message: string) => {
      const { data } = await api.post("/email-campaigns/chat", {
        message,
        history: chatHistory,
        contactType,
      });
      return data as { reply: string };
    },
    onSuccess: (data, message) => {
      const newHistory: ChatMessage[] = [
        ...chatHistory,
        { role: "user", content: message },
        { role: "assistant", content: data.reply },
      ];
      setChatHistory(newHistory);

      // Extract template if present
      const subjectMatch = data.reply.match(
        /<email_subject>([\s\S]*?)<\/email_subject>/
      );
      const bodyMatch = data.reply.match(
        /<email_body>([\s\S]*?)<\/email_body>/
      );
      if (subjectMatch && bodyMatch) {
        setEmailSubject(subjectMatch[1].trim());
        setEmailTemplate(bodyMatch[1].trim());
      }
    },
  });

  // ── Preview mutation ──
  const previewMutation = useMutation({
    mutationFn: async () => {
      const { data } = await api.post("/email-campaigns/preview", {
        emailTemplate,
        emailSubject,
        contactType,
        filters,
        count: 3,
      });
      return data as PreviewEmail[];
    },
    onSuccess: (data) => setPreviewEmails(data),
  });

  // ── Create + start campaign ──
  const createMutation = useMutation({
    mutationFn: async () => {
      const { data } = await api.post("/email-campaigns", {
        name: campaignName || `Campaign ${new Date().toLocaleDateString()}`,
        chatHistory,
        emailSubject,
        emailTemplate,
        contactType,
        filters,
        intervalSeconds,
      });
      return data as EmailCampaign;
    },
    onSuccess: async (campaign) => {
      // Auto-start
      await api.post(`/email-campaigns/${campaign.id}/start`);
      queryClient.invalidateQueries({
        queryKey: queryKeys.emailCampaigns.list(),
      });
      setShowDashboard(true);
      resetForm();
    },
  });

  // Auto-scroll chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  function resetForm() {
    setPhase("chat");
    setChatHistory([]);
    setChatInput("");
    setEmailSubject("");
    setEmailTemplate("");
    setFilters({});
    setFilterSearch("");
    setCampaignName("");
    setPreviewEmails([]);
  }

  function handleSendChat() {
    const msg = chatInput.trim();
    if (!msg || chatMutation.isPending) return;
    setChatInput("");
    chatMutation.mutate(msg);
  }

  const hasTemplate = emailSubject.length > 0 && emailTemplate.length > 0;
  const canProceedToRecipients = hasTemplate && chatHistory.length >= 4;
  const hasAppPassword = user?.hasAppPassword;
  const isPremium =
    (user?.subscriptionPlan === "MONTHLY" || user?.subscriptionPlan === "YEARLY") &&
    user?.subscriptionStatus === "ACTIVE";

  // ── Dashboard view ──
  if (showDashboard) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Your Campaigns
          </h3>
          <button
            onClick={() => setShowDashboard(false)}
            className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            + New Campaign
          </button>
        </div>
        <CampaignDashboard />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header + toggle dashboard */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            AI Email Campaign
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Chat with AI to craft personalized emails, then send them in bulk
          </p>
        </div>
        {(campaignsQuery.data?.length ?? 0) > 0 && (
          <button
            onClick={() => setShowDashboard(true)}
            className="flex items-center gap-1.5 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            <RefreshCw className="w-4 h-4" />
            View Campaigns ({campaignsQuery.data?.length})
          </button>
        )}
      </div>

      {/* Phase stepper */}
      <div className="flex items-center gap-2">
        {(["chat", "recipients", "send"] as Phase[]).map((p, i) => {
          const icons = [MessageSquare, Users, Send];
          const labels = ["Chat with AI", "Select Recipients", "Send"];
          const Icon = icons[i];
          const isActive = phase === p;
          const isPast =
            (["chat", "recipients", "send"] as Phase[]).indexOf(phase) > i;
          return (
            <div key={p} className="flex items-center gap-2">
              {i > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-300 dark:text-gray-600" />
              )}
              <button
                onClick={() => {
                  if (isPast) setPhase(p);
                }}
                disabled={!isPast && !isActive}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300"
                    : isPast
                      ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 cursor-pointer"
                      : "bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-500 cursor-not-allowed"
                }`}
              >
                <Icon className="w-4 h-4" />
                {labels[i]}
              </button>
            </div>
          );
        })}
      </div>

      {/* ── Phase 1: Chat ── */}
      {phase === "chat" && (
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
          {/* Contact type selector */}
          <div className="flex items-center gap-3 p-4 border-b border-gray-100 dark:border-gray-800">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Email to:
            </span>
            <button
              onClick={() => setContactType("HR")}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                contactType === "HR"
                  ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300"
                  : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              IT HR Contacts
            </button>
            <button
              onClick={() => setContactType("PROFESSOR")}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                contactType === "PROFESSOR"
                  ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300"
                  : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              IIT Professors
            </button>
          </div>

          {/* Chat messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-3">
            {chatHistory.length === 0 && (
              <div className="flex items-center justify-center h-full text-gray-400 dark:text-gray-500 text-sm">
                <div className="text-center space-y-2">
                  <MessageSquare className="w-8 h-8 mx-auto opacity-50" />
                  <p>
                    Start by describing what kind of email you want to send
                  </p>
                  <p className="text-xs text-gray-400">
                    e.g. "I want to reach out to HR managers for a software
                    engineering internship"
                  </p>
                </div>
              </div>
            )}

            {chatHistory.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-xl px-4 py-2.5 text-sm whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                  }`}
                >
                  {/* Strip template tags for display */}
                  {msg.content
                    .replace(/<email_subject>[\s\S]*?<\/email_subject>/g, "")
                    .replace(/<email_body>[\s\S]*?<\/email_body>/g, "")
                    .trim() ||
                    "I've generated an email template for you! You can proceed to the next step."}
                </div>
              </div>
            ))}

            {chatMutation.isPending && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-xl px-4 py-2.5">
                  <Loader2 className="w-4 h-4 animate-spin text-gray-500" />
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Template extracted indicator */}
          {hasTemplate && (
            <div className="mx-4 mb-2 p-3 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg">
              <div className="flex items-center gap-2 text-sm text-emerald-700 dark:text-emerald-400">
                <Mail className="w-4 h-4" />
                <span className="font-medium">Template ready!</span>
                <span className="text-emerald-600 dark:text-emerald-500">
                  Subject: {emailSubject}
                </span>
              </div>
            </div>
          )}

          {/* Chat input */}
          <div className="p-4 border-t border-gray-100 dark:border-gray-800">
            {!user ? (
              <a
                href="/login"
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Lock className="w-4 h-4" />
                Sign in to start chatting
              </a>
            ) : !isPremium ? (
              <a
                href="/student/checkout"
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Lock className="w-4 h-4" />
                Upgrade to Premium to use AI Email Campaigns
              </a>
            ) : (
              <>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSendChat()}
                    placeholder="Describe your email needs..."
                    className="flex-1 px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white"
                    disabled={chatMutation.isPending}
                  />
                  <button
                    onClick={handleSendChat}
                    disabled={!chatInput.trim() || chatMutation.isPending}
                    className="px-4 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>

                {/* Proceed button */}
                {canProceedToRecipients && (
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={() => setPhase("recipients")}
                    className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors text-sm font-medium"
                  >
                    Continue to Select Recipients
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                )}
              </>
            )}
          </div>
        </div>
      )}

      {/* ── Phase 2: Recipients ── */}
      {phase === "recipients" && (
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 space-y-5">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-gray-900 dark:text-white">
              Filter Recipients
            </h4>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {contactType === "HR" ? "IT HR Contacts" : "IIT Professors"}
            </span>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {contactType === "HR" ? (
              <div>
                <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  value={filters.company || ""}
                  onChange={(e) =>
                    setFilters((f) => ({ ...f, company: e.target.value }))
                  }
                  placeholder="e.g. Google, TCS..."
                  className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white"
                />
              </div>
            ) : (
              <>
                <div>
                  <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
                    College
                  </label>
                  <input
                    type="text"
                    value={filters.college || ""}
                    onChange={(e) =>
                      setFilters((f) => ({ ...f, college: e.target.value }))
                    }
                    placeholder="e.g. IIT Bombay"
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
                    Department
                  </label>
                  <input
                    type="text"
                    value={filters.department || ""}
                    onChange={(e) =>
                      setFilters((f) => ({ ...f, department: e.target.value }))
                    }
                    placeholder="e.g. Computer Science"
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white"
                  />
                </div>
              </>
            )}
            <div className={contactType === "HR" ? "" : "sm:col-span-2"}>
              <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
                Search
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={filterSearch}
                  onChange={(e) => {
                    setFilterSearch(e.target.value);
                    setFilters((f) => ({ ...f, search: e.target.value }));
                  }}
                  placeholder="Search by name..."
                  className="w-full pl-9 pr-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white"
                />
              </div>
            </div>
          </div>

          {/* Template preview */}
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg space-y-2">
            <div className="flex items-center justify-between">
              <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Email Template
              </h5>
              <button
                onClick={() => setPhase("chat")}
                className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                Edit in chat
              </button>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <span className="font-medium">Subject:</span> {emailSubject}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 line-clamp-3 whitespace-pre-wrap">
              {emailTemplate}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => setPhase("chat")}
              className="flex items-center gap-1.5 px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Chat
            </button>
            <button
              onClick={() => setPhase("send")}
              className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors text-sm font-medium"
            >
              Configure & Send
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ── Phase 3: Send ── */}
      {phase === "send" && (
        <div className="space-y-5">
          {/* App password warning */}
          {!hasAppPassword && (
            <div className="flex items-start gap-3 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
              <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-amber-800 dark:text-amber-300">
                  Gmail App Password required
                </p>
                <p className="text-xs text-amber-700 dark:text-amber-400 mt-1">
                  Go to your{" "}
                  <a
                    href="/profile"
                    className="underline font-medium"
                  >
                    profile settings
                  </a>{" "}
                  to set your Gmail App Password before sending emails.
                </p>
              </div>
            </div>
          )}

          <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 space-y-5">
            <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Campaign Settings
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
                  Campaign Name
                </label>
                <input
                  type="text"
                  value={campaignName}
                  onChange={(e) => setCampaignName(e.target.value)}
                  placeholder={`Campaign ${new Date().toLocaleDateString()}`}
                  className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
                  Send Interval
                </label>
                <select
                  value={intervalSeconds}
                  onChange={(e) => setIntervalSeconds(Number(e.target.value))}
                  className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white"
                >
                  {INTERVAL_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Preview section */}
            <div>
              <button
                onClick={() => previewMutation.mutate()}
                disabled={previewMutation.isPending}
                className="flex items-center gap-1.5 text-sm text-indigo-600 dark:text-indigo-400 hover:underline disabled:opacity-50"
              >
                {previewMutation.isPending ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
                Preview 3 sample emails
              </button>

              <AnimatePresence>
                {previewEmails.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-3 space-y-3"
                  >
                    {previewEmails.map((email, i) => (
                      <div
                        key={i}
                        className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm"
                      >
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                          To: {email.recipientName}{" "}
                          {email.to && `<${email.to}>`}
                        </p>
                        <p className="font-medium text-gray-800 dark:text-gray-200 mb-1">
                          {email.subject}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 whitespace-pre-wrap text-xs line-clamp-4">
                          {email.body}
                        </p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Error display */}
            {createMutation.isError && (
              <div className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-700 dark:text-red-400">
                <AlertCircle className="w-4 h-4 shrink-0" />
                {(createMutation.error as Error)?.message || "Failed to create campaign"}
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => setPhase("recipients")}
                className="flex items-center gap-1.5 px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </button>
              <button
                onClick={() => createMutation.mutate()}
                disabled={
                  !hasAppPassword ||
                  createMutation.isPending
                }
                className="flex items-center gap-2 px-6 py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm font-medium"
              >
                {createMutation.isPending ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Play className="w-4 h-4" />
                )}
                Create & Start Campaign
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
