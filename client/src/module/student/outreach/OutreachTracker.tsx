import { useEffect, useState } from "react";
import { getLogs, createLog, updateLog, deleteLog } from "./outreach.api.js";
import AddOutreachModal from "./AddOutreachModal.js";

interface Log {
  id: number;
  contactName: string;
  company: string;
  role: string;
  channel: string;
  sentAt: string;
  followUpDate: string;
  status: string;
  notes?: string;
}

const STATUS_COLORS: Record<string, string> = {
  sent: "bg-blue-100 text-blue-700",
  replied: "bg-green-100 text-green-700",
  ghosted: "bg-gray-100 text-gray-600",
  referral_given: "bg-purple-100 text-purple-700",
  rejected: "bg-red-100 text-red-700",
};

export default function OutreachTracker() {
  const [logs, setLogs] = useState<Log[]>([]);
  const [showModal, setShowModal] = useState(false);

  const fetchLogs = () => getLogs().then((res) => setLogs(res.data.logs));

  useEffect(() => { fetchLogs(); }, []);

  const overdue = logs.filter(
    (l) => l.status === "sent" && new Date(l.followUpDate) < new Date()
  );

  const handleStatusChange = async (id: number, status: string) => {
    await updateLog(id, { status });
    fetchLogs();
  };

  const handleDelete = async (id: number) => {
    await deleteLog(id);
    fetchLogs();
  };

  return (
    <div>
      {overdue.length > 0 && (
        <div className="mb-4 bg-yellow-50 border border-yellow-300 text-yellow-800 rounded-lg px-4 py-3 text-sm">
          ⏰ You have {overdue.length} outreach{overdue.length > 1 ? "es" : ""} overdue for follow-up!
        </div>
      )}

      <div className="flex justify-end mb-4">
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700"
        >
          + Log Outreach
        </button>
      </div>

      {logs.length === 0 ? (
        <p className="text-gray-400 text-center py-12">No outreach logged yet. Start by clicking "Log Outreach".</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50 text-left text-gray-600">
                <th className="px-3 py-2">Contact</th>
                <th className="px-3 py-2">Company</th>
                <th className="px-3 py-2">Role</th>
                <th className="px-3 py-2">Channel</th>
                <th className="px-3 py-2">Sent</th>
                <th className="px-3 py-2">Follow-Up</th>
                <th className="px-3 py-2">Status</th>
                <th className="px-3 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => (
                <tr key={log.id} className="border-t hover:bg-gray-50">
                  <td className="px-3 py-2 font-medium">{log.contactName}</td>
                  <td className="px-3 py-2">{log.company}</td>
                  <td className="px-3 py-2">{log.role}</td>
                  <td className="px-3 py-2 capitalize">{log.channel}</td>
                  <td className="px-3 py-2">{new Date(log.sentAt).toLocaleDateString()}</td>
                  <td className="px-3 py-2">{new Date(log.followUpDate).toLocaleDateString()}</td>
                  <td className="px-3 py-2">
                    <select
                      value={log.status}
                      onChange={(e) => handleStatusChange(log.id, e.target.value)}
                      className={`text-xs px-2 py-1 rounded-full font-medium border-0 ${STATUS_COLORS[log.status]}`}
                    >
                      {Object.keys(STATUS_COLORS).map((s) => (
                        <option key={s} value={s}>{s.replace("_", " ")}</option>
                      ))}
                    </select>
                  </td>
                  <td className="px-3 py-2">
                    <button onClick={() => handleDelete(log.id)} className="text-red-500 hover:text-red-700 text-xs">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showModal && (
        <AddOutreachModal
          onClose={() => setShowModal(false)}
          onSuccess={() => { setShowModal(false); fetchLogs(); }}
        />
      )}
    </div>
  );
}