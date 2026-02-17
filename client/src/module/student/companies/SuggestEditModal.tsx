import { useState } from "react";
import { X, Loader2, Send } from "lucide-react";
import toast from "react-hot-toast";
import api from "../../../lib/axios";
import type { Company } from "../../../lib/types";

interface SuggestEditModalProps {
  slug: string;
  company: Company;
  onClose: () => void;
}

export default function SuggestEditModal({ slug, company, onClose }: SuggestEditModalProps) {
  const [description, setDescription] = useState(company.description);
  const [mission, setMission] = useState(company.mission || "");
  const [website, setWebsite] = useState(company.website || "");
  const [address, setAddress] = useState(company.address || "");
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reason.trim()) {
      toast.error("Please provide a reason for the edit");
      return;
    }

    setLoading(true);
    try {
      const changes: Record<string, string> = {};
      if (description !== company.description) changes["description"] = description;
      if (mission !== (company.mission || "")) changes["mission"] = mission;
      if (website !== (company.website || "")) changes["website"] = website;
      if (address !== (company.address || "")) changes["address"] = address;

      if (Object.keys(changes).length === 0) {
        toast.error("No changes detected");
        setLoading(false);
        return;
      }

      await api.post(`/companies/${slug}/contribute/edit`, { changes, reason: reason.trim() });
      toast.success("Edit suggestion submitted for review!");
      onClose();
    } catch (err: unknown) {
      const msg = (err as { response?: { data?: { message?: string } } })?.response?.data?.message || "Failed to submit edit";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">Suggest Edit</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-lg">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10 resize-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mission</label>
            <textarea
              value={mission}
              onChange={(e) => setMission(e.target.value)}
              rows={2}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10 resize-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
            <input
              type="text"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Reason for edit *</label>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Why should this be changed?"
              rows={2}
              required
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading || !reason.trim()}
            className="w-full py-3 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors disabled:opacity-40 flex items-center justify-center gap-2"
          >
            {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</> : <><Send className="w-4 h-4" /> Submit Suggestion</>}
          </button>
        </form>
      </div>
    </div>
  );
}
