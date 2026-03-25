import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Cpu, Check, AlertCircle, BarChart3, Clock, Zap } from "lucide-react";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { AIProviderType, AIServiceType, AIServiceConfig, AIRequestStats } from "../../../lib/types";

const SERVICE_LABELS: Record<AIServiceType, string> = {
  ATS_SCORE: "ATS Resume Scoring",
  COVER_LETTER: "Cover Letter Generation",
  RESUME_GEN: "LaTeX Resume Generation",
  LATEX_CHAT: "LaTeX Chat Assistant",
  EMAIL_CHAT: "Email Chat Assistant",
};

const PROVIDER_INFO: Record<AIProviderType, { label: string; color: string; models: string[] }> = {
  GEMINI: {
    label: "Google Gemini",
    color: "text-blue-400",
    models: ["gemini-2.5-flash-lite", "gemini-2.5-flash", "gemini-2.5-pro"],
  },
  GROQ: {
    label: "Groq",
    color: "text-orange-400",
    models: ["llama-3.3-70b-versatile", "llama-3.1-8b-instant", "mixtral-8x7b-32768"],
  },
  OPENROUTER: {
    label: "OpenRouter",
    color: "text-purple-400",
    models: ["openai/gpt-4o-mini", "anthropic/claude-3.5-sonnet", "google/gemini-pro"],
  },
  CODESTRAL: {
    label: "Codestral (Mistral)",
    color: "text-emerald-400",
    models: ["codestral-latest", "mistral-large-latest"],
  },
  CLAUDE: {
    label: "Anthropic Claude",
    color: "text-amber-400",
    models: ["claude-sonnet-4-20250514", "claude-haiku-4-20250414", "claude-opus-4-20250514"],
  },
};

const PROVIDERS: AIProviderType[] = ["GEMINI", "GROQ", "OPENROUTER", "CODESTRAL", "CLAUDE"];

interface ConfigResponse {
  configs: AIServiceConfig[];
  envStatus: Record<string, boolean>;
}

export default function AdminAIProvidersPage() {
  const queryClient = useQueryClient();
  const [statsRange, setStatsRange] = useState<"day" | "week" | "month">("week");

  const { data: configData, isLoading: configLoading } = useQuery({
    queryKey: queryKeys.admin.aiConfig(),
    queryFn: () => api.get("/admin/ai/config").then((r) => r.data as ConfigResponse),
  });

  const { data: statsData, isLoading: statsLoading } = useQuery({
    queryKey: queryKeys.admin.aiStats(statsRange),
    queryFn: () => api.get(`/admin/ai/stats?range=${statsRange}`).then((r) => r.data as AIRequestStats),
  });

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Cpu className="w-6 h-6 text-indigo-400" />
        <h1 className="text-2xl font-bold text-white">AI Providers</h1>
      </div>

      {/* Env Key Status */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 mb-8">
        {PROVIDERS.map((p) => {
          const hasKey = configData?.envStatus[p] ?? false;
          const info = PROVIDER_INFO[p];
          return (
            <div key={p} className="bg-gray-900 rounded-lg border border-gray-800 p-4">
              <div className="flex items-center justify-between mb-1">
                <span className={`text-sm font-medium ${info.color}`}>{info.label}</span>
                {hasKey ? (
                  <span className="flex items-center gap-1 text-xs text-green-400">
                    <Check className="w-3 h-3" /> Key set
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-xs text-red-400">
                    <AlertCircle className="w-3 h-3" /> Missing
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-500">{p === "CLAUDE" ? "CLAUDE_API" : `${p}_API_KEY`}</p>
            </div>
          );
        })}
      </div>

      {/* Service Config Cards */}
      <h2 className="text-lg font-semibold text-white mb-4">Service Configuration</h2>
      {configLoading ? (
        <div className="text-gray-400 text-sm">Loading configs...</div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
          {configData?.configs.map((cfg, i) => (
            <ServiceConfigCard
              key={cfg.service}
              config={cfg}
              envStatus={configData.envStatus}
              index={i}
              onSwitched={() => queryClient.invalidateQueries({ queryKey: queryKeys.admin.aiConfig() })}
            />
          ))}
        </div>
      )}

      {/* Request Stats */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-indigo-400" />
          Request Statistics
        </h2>
        <div className="flex gap-1">
          {(["day", "week", "month"] as const).map((r) => (
            <button
              key={r}
              onClick={() => setStatsRange(r)}
              className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                statsRange === r
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-800 text-gray-400 hover:text-white"
              }`}
            >
              {r.charAt(0).toUpperCase() + r.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {statsLoading ? (
        <div className="text-gray-400 text-sm">Loading stats...</div>
      ) : statsData ? (
        <div className="space-y-4">
          {/* Summary Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
              <div className="flex items-center gap-2 mb-1">
                <Zap className="w-4 h-4 text-amber-400" />
                <span className="text-sm text-gray-400">Total Requests</span>
              </div>
              <p className="text-2xl font-bold text-white">{statsData.totalRequests}</p>
            </div>
            <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-400">Avg Latency</span>
              </div>
              <p className="text-2xl font-bold text-white">{statsData.avgLatencyMs}ms</p>
            </div>
            <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
              <div className="flex items-center gap-2 mb-1">
                <AlertCircle className="w-4 h-4 text-red-400" />
                <span className="text-sm text-gray-400">Error Rate</span>
              </div>
              <p className="text-2xl font-bold text-white">{statsData.errorRate}%</p>
            </div>
          </div>

          {/* Breakdown Tables */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* By Provider */}
            <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
              <h3 className="text-sm font-medium text-gray-400 mb-3">By Provider</h3>
              {statsData.byProvider.length === 0 ? (
                <p className="text-xs text-gray-500">No data yet</p>
              ) : (
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-gray-500 text-xs border-b border-gray-800">
                      <th className="text-left pb-2">Provider</th>
                      <th className="text-right pb-2">Requests</th>
                      <th className="text-right pb-2">Avg Latency</th>
                    </tr>
                  </thead>
                  <tbody>
                    {statsData.byProvider.map((p) => (
                      <tr key={p.provider} className="border-b border-gray-800/50">
                        <td className={`py-2 ${PROVIDER_INFO[p.provider]?.color ?? "text-gray-300"}`}>
                          {PROVIDER_INFO[p.provider]?.label ?? p.provider}
                        </td>
                        <td className="text-right text-gray-300 py-2">{p.count}</td>
                        <td className="text-right text-gray-300 py-2">{p.avgLatencyMs}ms</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            {/* By Service */}
            <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
              <h3 className="text-sm font-medium text-gray-400 mb-3">By Service</h3>
              {statsData.byService.length === 0 ? (
                <p className="text-xs text-gray-500">No data yet</p>
              ) : (
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-gray-500 text-xs border-b border-gray-800">
                      <th className="text-left pb-2">Service</th>
                      <th className="text-right pb-2">Requests</th>
                    </tr>
                  </thead>
                  <tbody>
                    {statsData.byService.map((s) => (
                      <tr key={s.service} className="border-b border-gray-800/50">
                        <td className="text-gray-300 py-2">{SERVICE_LABELS[s.service] ?? s.service}</td>
                        <td className="text-right text-gray-300 py-2">{s.count}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

// ── Service Config Card ──

function ServiceConfigCard({
  config,
  envStatus,
  index,
  onSwitched,
}: {
  config: AIServiceConfig;
  envStatus: Record<string, boolean>;
  index: number;
  onSwitched: () => void;
}) {
  const [provider, setProvider] = useState<AIProviderType>(config.provider);
  const [modelName, setModelName] = useState(config.modelName);

  const switchMutation = useMutation({
    mutationFn: (body: { service: AIServiceType; provider: AIProviderType; modelName: string }) =>
      api.put("/admin/ai/switch", body),
    onSuccess: () => onSwitched(),
  });

  const isDirty = provider !== config.provider || modelName !== config.modelName;
  const keyMissing = !envStatus[provider];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="bg-gray-900 rounded-xl border border-gray-800 p-5"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-medium">{SERVICE_LABELS[config.service]}</h3>
        <span className={`text-xs px-2 py-0.5 rounded ${PROVIDER_INFO[config.provider].color} bg-gray-800`}>
          {PROVIDER_INFO[config.provider].label}
        </span>
      </div>

      {/* Provider select */}
      <label className="block text-xs text-gray-500 mb-1">Provider</label>
      <select
        value={provider}
        onChange={(e) => {
          const p = e.target.value as AIProviderType;
          setProvider(p);
          setModelName(PROVIDER_INFO[p].models[0]);
        }}
        className="w-full bg-gray-800 text-gray-200 text-sm rounded-lg border border-gray-700 px-3 py-2 mb-3 focus:outline-none focus:border-indigo-500"
      >
        {PROVIDERS.map((p) => (
          <option key={p} value={p}>
            {PROVIDER_INFO[p].label} {!envStatus[p] ? "(no key)" : ""}
          </option>
        ))}
      </select>

      {/* Model select */}
      <label className="block text-xs text-gray-500 mb-1">Model</label>
      <select
        value={modelName}
        onChange={(e) => setModelName(e.target.value)}
        className="w-full bg-gray-800 text-gray-200 text-sm rounded-lg border border-gray-700 px-3 py-2 mb-3 focus:outline-none focus:border-indigo-500"
      >
        {PROVIDER_INFO[provider].models.map((m) => (
          <option key={m} value={m}>{m}</option>
        ))}
      </select>

      {/* Custom model input */}
      <label className="block text-xs text-gray-500 mb-1">Or enter custom model name</label>
      <input
        type="text"
        value={modelName}
        onChange={(e) => setModelName(e.target.value)}
        placeholder="e.g. llama-3.1-70b-versatile"
        className="w-full bg-gray-800 text-gray-200 text-sm rounded-lg border border-gray-700 px-3 py-2 mb-4 focus:outline-none focus:border-indigo-500"
      />

      {keyMissing && (
        <p className="text-xs text-red-400 mb-3 flex items-center gap-1">
          <AlertCircle className="w-3 h-3" />
          {provider}_API_KEY not set in server .env
        </p>
      )}

      <button
        onClick={() =>
          switchMutation.mutate({ service: config.service, provider, modelName })
        }
        disabled={!isDirty || keyMissing || switchMutation.isPending}
        className="w-full py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed bg-indigo-600 text-white hover:bg-indigo-500"
      >
        {switchMutation.isPending ? "Switching..." : "Save Changes"}
      </button>

      {switchMutation.isSuccess && (
        <p className="text-xs text-green-400 mt-2 flex items-center gap-1">
          <Check className="w-3 h-3" /> Switched successfully
        </p>
      )}
    </motion.div>
  );
}
