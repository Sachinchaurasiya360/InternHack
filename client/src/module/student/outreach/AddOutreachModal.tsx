import { useState } from "react";
import { createLog } from "./outreach.api.js";

interface Props {
  onClose: () => void;
  onSuccess: () => void;
}

export default function AddOutreachModal({ onClose, onSuccess }: Props) {
  const [form, setForm] = useState({
    contactName: "", company: "", role: "",
    channel: "linkedin", notes: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await createLog(form);
      onSuccess();
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-stone-900 rounded-xl p-6 w-full max-w-md shadow-xl">
        <h2 className="text-lg font-semibold mb-4">Log Outreach</h2>
        <div className="flex flex-col gap-3">
          {["contactName", "company", "role"].map((field) => (
            <input
              key={field}
              placeholder={field === "contactName" ? "Contact Name" : field.charAt(0).toUpperCase() + field.slice(1)}
              value={(form as Record<string, string>)[field]}
              onChange={(e) => setForm((p) => ({ ...p, [field]: e.target.value }))}
              className="border rounded px-3 py-2 text-sm"
            />
          ))}
          <select
            value={form.channel}
            onChange={(e) => setForm((p) => ({ ...p, channel: e.target.value }))}
            className="border rounded px-3 py-2 text-sm"
          >
            <option value="linkedin">LinkedIn</option>
            <option value="email">Email</option>
            <option value="other">Other</option>
          </select>
          <textarea
            placeholder="Notes (optional)"
            value={form.notes}
            onChange={(e) => setForm((p) => ({ ...p, notes: e.target.value }))}
            className="border rounded px-3 py-2 text-sm"
            rows={3}
          />
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <button onClick={onClose} className="px-4 py-2 text-sm text-stone-600 hover:bg-stone-100 dark:text-stone-400 dark:hover:bg-stone-800 rounded-lg">Cancel</button>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-4 py-2 text-sm bg-lime-600 text-white rounded-lg hover:bg-lime-700 disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}