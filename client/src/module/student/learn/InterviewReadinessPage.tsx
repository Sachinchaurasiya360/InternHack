import React, { useState } from 'react';
import api from "../../../lib/axios"; // Uses the shared project axios instance

interface ReadinessReport {
  overallReadiness: number;
  estimatedTimeToReady: string;
  todaysPriority: string;
  strongAreas: Array<{ topic: string; score: number }>;
  gapAreas: Array<{ topic: string; score: number }>;
  mockInterviewQuestion?: {
    title: string;
    description: string;
  };
}

export default function InterviewReadinessPage() {
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<ReadinessReport | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  // Dynamic state values handling all form controls
  const [form, setForm] = useState({
    targetRole: 'Frontend',
    companyTier: 'Startup',
    availableTime: '1-3 months',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      // Points exactly to the relative route using the common Axios wrapper configuration
      const response = await api.post('/learn/readiness', form);
      setReport(response.data.data);
    } catch (err: any) {
      console.error("Error evaluating readiness scorecard:", err);
      setError(err?.response?.data?.message || "Failed to generate evaluation. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">AI Interview Report Card</h1>
        <p className="text-sm text-gray-500">Evaluate your learning metrics against target marketplace hiring standards.</p>
      </div>

      {/* Dynamic Selection Input Form Layout */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Target Role Dropdown */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-700">Target Role</label>
            <select
              value={form.targetRole}
              onChange={(e) => setForm({ ...form, targetRole: e.target.value })}
              className="w-full rounded-lg border border-gray-300 p-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="Frontend">Frontend Developer</option>
              <option value="Backend">Backend Developer</option>
              <option value="Full-Stack">Full-Stack Developer</option>
              <option value="Data">Data Engineer</option>
            </select>
          </div>

          {/* Company Tier Dropdown */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-700">Target Company Tier</label>
            <select
              value={form.companyTier}
              onChange={(e) => setForm({ ...form, companyTier: e.target.value })}
              className="w-full rounded-lg border border-gray-300 p-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="Startup">Startup</option>
              <option value="Mid-size">Mid-size</option>
              <option value="FAANG">FAANG / Big Tech</option>
              <option value="Product company">Product Company</option>
            </select>
          </div>

          {/* Available Preparation Time Dropdown */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-700">Available Prep Time</label>
            <select
              value={form.availableTime}
              onChange={(e) => setForm({ ...form, availableTime: e.target.value })}
              className="w-full rounded-lg border border-gray-300 p-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="1 month">1 Month</option>
              <option value="1-3 months">1-3 Months</option>
              <option value="3-6 months">3-6 Months</option>
            </select>
          </div>

        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg text-sm transition disabled:bg-indigo-400 h-[40px] mt-2"
        >
          {loading ? "Analyzing Platform Data..." : "Generate Evaluation"}
        </button>
      </form>

      {/* Error Alert Box */}
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
          {error}
        </div>
      )}

      {/* AI Evaluation Report Dashboard Card Results */}
      {report && (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden p-6 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 border-b border-gray-100 gap-4">
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Overall Readiness</p>
              <p className="text-3xl font-bold text-indigo-600">{report.overallReadiness}%</p>
            </div>
            <div className="sm:text-right">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Estimated Timeline</p>
              <p className="text-sm font-medium text-gray-800">Ready in {report.estimatedTimeToReady}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Strong Areas Metrics */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-gray-900">Strong Areas</h3>
              <div className="space-y-2">
                {report.strongAreas?.map((item, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-gray-700">{item.topic}</span>
                      <span className="text-green-600 font-semibold">{item.score}%</span>
                    </div>
                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full rounded-full" style={{ width: `${item.score}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gap Areas Metrics */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-gray-900">Focus Areas (Gaps)</h3>
              <div className="space-y-2">
                {report.gapAreas?.map((item, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-gray-700">{item.topic}</span>
                      <span className="text-amber-600 font-semibold">{item.score}%</span>
                    </div>
                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-amber-500 h-full rounded-full" style={{ width: `${item.score}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Operational Daily Priorities */}
          <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4">
            <h4 className="text-xs font-bold text-indigo-800 uppercase tracking-wider mb-1">Today's Study Priority</h4>
            <p className="text-sm text-indigo-950 font-medium">{report.todaysPriority}</p>
          </div>

          {/* Autonomous Mock Interview Question */}
          {report.mockInterviewQuestion && (
            <div className="border border-gray-100 rounded-lg p-4 bg-gray-50/50 space-y-1.5">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Try This Mock Question Right Now</h4>
              <h5 className="text-sm font-bold text-gray-900">{report.mockInterviewQuestion.title}</h5>
              <p className="text-xs text-gray-600 leading-relaxed">{report.mockInterviewQuestion.description}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}