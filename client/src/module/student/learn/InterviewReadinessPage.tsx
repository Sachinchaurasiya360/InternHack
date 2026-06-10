import React, { useState } from 'react';

interface AreaItem {
  topic: string;
  score: number;
}

interface ReportState {
  overallReadiness: number;
  estimatedTimeToReady: string;
  todaysPriority: string;
  strongAreas: AreaItem[];
  gapAreas: AreaItem[];
}

export default function InterviewReadinessPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [report, setReport] = useState<ReportState | null>(null);
  const [form, setForm] = useState({
    targetRole: 'Junior Frontend',
    companyTier: 'Startup',
    availableTime: '1-3 months',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await window.fetch('http://localhost:5000/api/v1/learn/readiness', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data && data.success) {
        setReport(data.data);
      }
    } catch (err) {
      console.error("Network Fetch Error Loop:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">AI Interview Report Card</h1>
        <p className="text-sm text-slate-500">Evaluate your learning progress against target company benchmarks.</p>
      </div>

      <form onSubmit={handleSubmit} className="p-4 bg-white border border-slate-200 rounded-xl flex gap-4 items-center shadow-sm">
        <select 
          value={form.targetRole} 
          onChange={(e) => setForm({...form, targetRole: e.target.value})}
          className="p-2 border border-slate-300 rounded-lg text-sm bg-white"
        >
          <option value="Junior Frontend">Junior Frontend (React)</option>
          <option value="Backend Developer">Backend (Node.js)</option>
        </select>

        <button 
          type="submit" 
          disabled={loading} 
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-medium text-sm rounded-lg transition"
        >
          {loading ? 'Analyzing...' : 'Generate Report'}
        </button>
      </form>

      {report && (
        <div className="space-y-4">
          <div className="p-6 bg-slate-900 text-white rounded-2xl shadow-sm">
            <h3 className="text-xs text-slate-400 font-bold uppercase tracking-wider">Overall Job Readiness</h3>
            <span className="text-4xl font-black text-indigo-400 block my-2">{report.overallReadiness}%</span>
            <p className="text-xs text-slate-300">Estimated Pacing: <strong className="text-white">{report.estimatedTimeToReady}</strong></p>
          </div>
          
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-900">
            <span className="font-bold">🎯 Today's Focus Action:</span> {report.todaysPriority}
          </div>
        </div>
      )}
    </div>
  );
}