import { useQuery } from "@tanstack/react-query";
import { 
  AlertCircle, 
  ThumbsUp, 
  ThumbsDown, 
  MessageSquare, 
  BarChart3, 
  ShieldAlert
} from "lucide-react";
import { SEO } from "../../components/SEO";
import { LoadingScreen } from "../../components/LoadingScreen";
import api from "../../lib/axios";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from "recharts";

interface StepStat {
  guideId: string;
  stepId: string;
  total: number;
  up: number;
  satisfactionRate: number;
  reasons: Record<string, number>;
}

interface AnalyticsData {
  global: {
    totalFeedback: number;
    satisfactionRate: number;
  };
  bottom5Steps: StepStat[];
  reasonSummary: Record<string, number>;
}

export default function GuideFeedbackDashboard() {
  const { data, isLoading } = useQuery({
    queryKey: ["admin", "guide-feedback"],
    queryFn: () => api.get("/admin/guide-feedback").then((res) => res.data as AnalyticsData),
  });

  if (isLoading) return <LoadingScreen />;

  if (!data || data.global.totalFeedback === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <SEO title="Guide Feedback Analytics" noIndex />
        <div className="w-16 h-16 bg-gray-800 rounded-md flex items-center justify-center mb-4 border border-gray-700">
          <MessageSquare className="w-8 h-8 text-gray-500" />
        </div>
        <h2 className="text-xl font-bold text-white mb-2">No feedback data yet</h2>
        <p className="text-gray-400 max-w-md">
          Feedback analytics will appear here once students start rating guide steps.
        </p>
      </div>
    );
  }

  const flaggedSteps = data.bottom5Steps.filter(s => s.satisfactionRate < 60 && s.total > 5);

  const reasonChartData = Object.entries(data.reasonSummary).map(([name, value]) => ({
    name: name.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    value
  })).sort((a, b) => b.value - a.value);

  return (
    <div className="space-y-8">
      <SEO title="Guide Feedback Analytics" noIndex />
      
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">Guide Content Analytics</h1>
          <p className="text-gray-400 text-sm mt-1">
            Monitor student satisfaction and identify content friction points.
          </p>
        </div>
      </div>

      <AnimatePresence>
        {flaggedSteps.length > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="p-4 bg-red-900/20 border border-red-500/50 rounded-md flex items-start gap-4"
          >
            <div className="p-2 bg-red-500/10 rounded-lg">
              <ShieldAlert className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <h3 className="text-red-400 font-bold text-sm">Attention Required</h3>
              <p className="text-red-300/80 text-sm mt-0.5">
                The following steps require immediate content revision due to low satisfaction:{" "}
                <span className="font-semibold text-white">
                  {flaggedSteps.map(s => `${s.guideId}/${s.stepId}`).join(", ")}
                </span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900 p-6 rounded-md border border-gray-800"
        >
          <div className="flex justify-between mb-2">
            <span className="text-gray-400 text-sm font-medium">Total Feedback</span>
            <MessageSquare className="w-4 h-4 text-stone-400" />
          </div>
          <div className="text-3xl font-bold text-white tabular-nums">
            {data.global.totalFeedback}
          </div>
          <p className="text-xs text-gray-500 mt-2">Lifetime step ratings</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gray-900 p-6 rounded-md border border-gray-800"
        >
          <div className="flex justify-between mb-2">
            <span className="text-gray-400 text-sm font-medium">Avg. Satisfaction</span>
            <ThumbsUp className="w-4 h-4 text-stone-400" />
          </div>
          <div className="text-3xl font-bold text-white tabular-nums">
            {data.global.satisfactionRate.toFixed(1)}%
          </div>
          <div className="mt-2 h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-stone-500" 
              style={{ width: `${data.global.satisfactionRate}%` }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-900 p-6 rounded-md border border-gray-800"
        >
          <div className="flex justify-between mb-2">
            <span className="text-gray-400 text-sm font-medium">Bottom Performers</span>
            <AlertCircle className="w-4 h-4 text-red-400" />
          </div>
          <div className="text-3xl font-bold text-white tabular-nums">
            {data.bottom5Steps.length}
          </div>
          <p className="text-xs text-gray-500 mt-2">Steps with low ratings</p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Worst Performing Steps */}
        <div className="bg-gray-900 border border-gray-800 rounded-md overflow-hidden shadow-xl">
          <div className="p-6 border-b border-gray-800 bg-gray-900/50">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <ThumbsDown className="w-5 h-5 text-red-500" />
              Critical Content Friction
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-900/80 text-gray-400 text-xs uppercase tracking-wider">
                  <th className="px-6 py-4 font-semibold">Guide / Step</th>
                  <th className="px-6 py-4 font-semibold">Rate</th>
                  <th className="px-6 py-4 font-semibold">Volume</th>
                  <th className="px-6 py-4 font-semibold">Main Issue</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {data.bottom5Steps.length > 0 ? (
                  data.bottom5Steps.map((step) => {
                    const topReason = Object.entries(step.reasons).sort((a, b) => b[1] - a[1])[0];
                    return (
                      <tr key={`${step.guideId}-${step.stepId}`} className="hover:bg-gray-800/30 transition-colors">
                        <td className="px-6 py-4">
                          <p className="text-white font-medium text-sm capitalize">
                            {step.guideId.split('/').pop()?.replace(/-/g, ' ')}
                          </p>
                          <p className="text-gray-500 text-xs">Step: {step.stepId}</p>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`text-sm font-bold ${step.satisfactionRate < 60 ? 'text-red-400' : 'text-yellow-400'}`}>
                            {step.satisfactionRate.toFixed(0)}%
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-gray-400 text-sm tabular-nums">{step.total}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-gray-500 text-xs italic">
                            {topReason ? topReason[0].replace(/_/g, ' ') : "Mixed feedback"}
                          </span>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                      No critical friction points identified.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Reason Summary Chart */}
        <div className="bg-gray-900 border border-gray-800 rounded-md flex flex-col shadow-xl">
          <div className="p-6 border-b border-gray-800 bg-gray-900/50">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-stone-500" />
              Reasons for Confusion
            </h2>
          </div>
          <div className="p-6 flex-1 min-h-[300px]">
            {reasonChartData.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={reasonChartData} layout="vertical" margin={{ left: 40, right: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" horizontal={false} />
                  <XAxis type="number" stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    stroke="#9CA3AF" 
                    fontSize={11} 
                    tickLine={false} 
                    axisLine={false}
                    width={100}
                  />
                  <Tooltip 
                    cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }} 
                    contentStyle={{ backgroundColor: '#111827', border: '1px solid #374151', borderRadius: '8px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                    {reasonChartData.map((_entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 0 ? '#a8a29e' : '#4b5563'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full flex items-center justify-center text-gray-500 italic">
                Insufficient confusion data to visualize.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
