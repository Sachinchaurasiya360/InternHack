import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Loader2, Send, Mail, FlaskConical } from "lucide-react";
import api from "../../../lib/axios";
import toast from "@/components/ui/toast";
import { SEO } from "../../../components/SEO";

type RoleFilter = "ALL" | "STUDENT" | "RECRUITER" | "ADMIN";
type PlanFilter = "ALL" | "FREE" | "MONTHLY" | "YEARLY";
type VerifiedFilter = "ALL" | "VERIFIED" | "UNVERIFIED";

export default function AdminBroadcastEmailPage() {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [role, setRole] = useState<RoleFilter>("ALL");
  const [plan, setPlan] = useState<PlanFilter>("ALL");
  const [verified, setVerified] = useState<VerifiedFilter>("ALL");
  const [testEmail, setTestEmail] = useState("");

  const buildPayload = (asTest: boolean) => ({
    subject,
    body,
    filter: {
      role,
      subscriptionPlan: plan,
      ...(verified === "ALL" ? {} : { isVerified: verified === "VERIFIED" }),
    },
    ...(asTest ? { testEmail } : {}),
  });

  const sendMutation = useMutation({
    mutationFn: async (asTest: boolean) => {
      const res = await api.post("/admin/broadcast-email", buildPayload(asTest));
      return res.data as { sent: number; failed: number; recipients: number; test: boolean; message: string };
    },
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: () => toast.error("Failed to send email"),
  });

  const canSend = subject.trim().length > 0 && body.trim().length > 0 && !sendMutation.isPending;
  const canTest = canSend && /^\S+@\S+\.\S+$/.test(testEmail);

  return (
    <div>
      <SEO title="Broadcast Email" noIndex />
      <div className="flex items-center gap-2 mb-6">
        <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Broadcast Email</h1>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left: compose */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-5 space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              maxLength={200}
              placeholder="A short, clear subject line"
              className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20"
            />
          </div>
          <div className="rounded-lg border border-indigo-200 dark:border-indigo-900/50 bg-indigo-50/60 dark:bg-indigo-900/10 px-3 py-2 text-xs text-indigo-900 dark:text-indigo-200">
            <p className="font-semibold mb-1">Personalization variables</p>
            <p className="leading-relaxed">
              Use <code className="px-1 rounded bg-white/70 dark:bg-black/30">{"{username}"}</code>,{" "}
              <code className="px-1 rounded bg-white/70 dark:bg-black/30">{"{{username}}"}</code>,{" "}
              <code className="px-1 rounded bg-white/70 dark:bg-black/30">{"{name}"}</code>,{" "}
              <code className="px-1 rounded bg-white/70 dark:bg-black/30">{"{firstName}"}</code>, or{" "}
              <code className="px-1 rounded bg-white/70 dark:bg-black/30">{"{email}"}</code> in the subject or body — they're case-insensitive and replaced per recipient. Test sends use <strong>Sachin</strong> as the sample name.
            </p>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Body</label>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={12}
              placeholder="Write your email body. Plain text — line breaks are preserved."
              className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20"
            />
            <p className="text-xs text-gray-400 mt-1">{body.length} / 20000</p>
          </div>
        </div>

        {/* Right: filters & actions */}
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-5 space-y-4">
            <h2 className="text-sm font-semibold text-gray-900 dark:text-white">Filters</h2>
            <Select label="Role" value={role} onChange={(v) => setRole(v as RoleFilter)}
              options={[["ALL", "All users"], ["STUDENT", "Students"], ["RECRUITER", "Recruiters"], ["ADMIN", "Admins"]]} />
            <Select label="Subscription" value={plan} onChange={(v) => setPlan(v as PlanFilter)}
              options={[["ALL", "All plans"], ["FREE", "Free"], ["MONTHLY", "Monthly"], ["YEARLY", "Yearly"]]} />
            <Select label="Verification" value={verified} onChange={(v) => setVerified(v as VerifiedFilter)}
              options={[["ALL", "Both"], ["VERIFIED", "Verified only"], ["UNVERIFIED", "Unverified only"]]} />
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-5 space-y-3">
            <h2 className="text-sm font-semibold text-gray-900 dark:text-white">Test send</h2>
            <input
              type="email"
              value={testEmail}
              onChange={(e) => setTestEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20"
            />
            <button
              onClick={() => sendMutation.mutate(true)}
              disabled={!canTest}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50"
            >
              {sendMutation.isPending && sendMutation.variables === true ? <Loader2 className="w-4 h-4 animate-spin" /> : <FlaskConical className="w-4 h-4" />}
              Send test email
            </button>
          </div>

          <button
            onClick={() => {
              if (confirm("Send this email to all matching users?")) sendMutation.mutate(false);
            }}
            disabled={!canSend}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-black dark:bg-white text-white dark:text-gray-950 text-sm font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 disabled:opacity-50"
          >
            {sendMutation.isPending && sendMutation.variables === false ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            Send to all matching users
          </button>
        </div>
      </div>
    </div>
  );
}

function Select({ label, value, onChange, options }: {
  label: string; value: string; onChange: (v: string) => void; options: [string, string][];
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20"
      >
        {options.map(([v, l]) => (
          <option key={v} value={v}>{l}</option>
        ))}
      </select>
    </div>
  );
}
