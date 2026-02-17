import { useState } from "react";
import { useNavigate } from "react-router";
import { Building2, Loader2, Plus, X } from "lucide-react";
import toast from "react-hot-toast";
import api from "../../../lib/axios";

export default function AddCompanyPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [logoFile, setLogoFile] = useState<File | null>(null);

  const [form, setForm] = useState({
    name: "",
    description: "",
    mission: "",
    industry: "",
    size: "STARTUP" as string,
    city: "",
    state: "",
    address: "",
    website: "",
    hiringStatus: false,
    foundedYear: "",
  });

  const [technologies, setTechnologies] = useState<string[]>([]);
  const [techInput, setTechInput] = useState("");

  const updateField = (field: string, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const addTech = () => {
    const val = techInput.trim();
    if (val && !technologies.includes(val)) {
      setTechnologies([...technologies, val]);
      setTechInput("");
    }
  };

  const removeTech = (tech: string) => {
    setTechnologies(technologies.filter((t) => t !== tech));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let logoUrl: string | undefined;

      if (logoFile) {
        const formData = new FormData();
        formData.append("file", logoFile);
        const uploadRes = await api.post("/upload/resume", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        logoUrl = uploadRes.data.file.url;
      }

      const body: Record<string, unknown> = {
        name: form.name.trim(),
        description: form.description.trim(),
        industry: form.industry.trim(),
        size: form.size,
        city: form.city.trim(),
      };

      if (form.mission.trim()) body["mission"] = form.mission.trim();
      if (form.state.trim()) body["state"] = form.state.trim();
      if (form.address.trim()) body["address"] = form.address.trim();
      if (form.website.trim()) body["website"] = form.website.trim();
      if (form.foundedYear) body["foundedYear"] = parseInt(form.foundedYear, 10);
      if (form.hiringStatus) body["hiringStatus"] = true;
      if (technologies.length > 0) body["technologies"] = technologies;
      if (logoUrl) body["logo"] = logoUrl;

      await api.post("/companies/contribute", body);
      toast.success("Company submitted for admin review!");
      navigate("/companies");
    } catch (err: unknown) {
      const msg = (err as { response?: { data?: { message?: string } } })?.response?.data?.message || "Failed to submit company";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <Building2 className="w-6 h-6" /> Add a Company
        </h1>
        <p className="text-sm text-gray-500 mt-1">Submit a company for review. It will be visible once approved by an admin.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Info */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-4">
          <h2 className="text-base font-semibold text-gray-900">Basic Information</h2>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
            <input type="text" value={form.name} onChange={(e) => updateField("name", e.target.value)} required
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
            <textarea value={form.description} onChange={(e) => updateField("description", e.target.value)} required rows={4}
              placeholder="What does this company do?"
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10 resize-none" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mission</label>
            <textarea value={form.mission} onChange={(e) => updateField("mission", e.target.value)} rows={2}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10 resize-none" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Industry *</label>
              <input type="text" value={form.industry} onChange={(e) => updateField("industry", e.target.value)} required
                placeholder="e.g. Technology, Finance"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company Size *</label>
              <select value={form.size} onChange={(e) => updateField("size", e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10">
                <option value="STARTUP">Startup (1-10)</option>
                <option value="SMALL">Small (11-50)</option>
                <option value="MEDIUM">Medium (51-200)</option>
                <option value="LARGE">Large (201-1000)</option>
                <option value="ENTERPRISE">Enterprise (1000+)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-4">
          <h2 className="text-base font-semibold text-gray-900">Location</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
              <input type="text" value={form.city} onChange={(e) => updateField("city", e.target.value)} required
                placeholder="e.g. Bangalore"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
              <input type="text" value={form.state} onChange={(e) => updateField("state", e.target.value)}
                placeholder="e.g. Karnataka"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <input type="text" value={form.address} onChange={(e) => updateField("address", e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10" />
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-4">
          <h2 className="text-base font-semibold text-gray-900">Additional Details</h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
              <input type="url" value={form.website} onChange={(e) => updateField("website", e.target.value)}
                placeholder="https://..."
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Founded Year</label>
              <input type="number" value={form.foundedYear} onChange={(e) => updateField("foundedYear", e.target.value)}
                placeholder="e.g. 2015"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10" />
            </div>
          </div>

          {/* Technologies */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Technologies</label>
            <div className="flex gap-2">
              <input type="text" value={techInput} onChange={(e) => setTechInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addTech(); } }}
                placeholder="Type and press Enter"
                className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10" />
              <button type="button" onClick={addTech}
                className="px-4 py-2.5 bg-gray-100 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-200">
                <Plus className="w-4 h-4" />
              </button>
            </div>
            {technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {technologies.map((tech) => (
                  <span key={tech} className="flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">
                    {tech}
                    <button type="button" onClick={() => removeTech(tech)}><X className="w-3 h-3" /></button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Logo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Company Logo</label>
            <input type="file" accept="image/*" onChange={(e) => setLogoFile(e.target.files?.[0] || null)}
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200" />
          </div>

          {/* Hiring Status */}
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={form.hiringStatus} onChange={(e) => updateField("hiringStatus", e.target.checked)}
              className="rounded border-gray-300" />
            <span className="text-sm text-gray-700">Currently hiring</span>
          </label>
        </div>

        <button type="submit" disabled={loading || !form.name.trim() || !form.description.trim() || !form.industry.trim() || !form.city.trim()}
          className="w-full py-3 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors disabled:opacity-40 flex items-center justify-center gap-2">
          {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</> : <><Building2 className="w-4 h-4" /> Submit Company</>}
        </button>
      </form>
    </div>
  );
}
