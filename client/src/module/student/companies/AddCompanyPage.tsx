import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import {
  Building2,
  Globe,
  ImagePlus,
  Loader2,
  MapPin,
  Plus,
  X,
} from "lucide-react";
import toast from "@/components/ui/toast";
import { uploadDirectToS3 } from "@/utils/upload";
import api from "../../../lib/axios";
import { Button } from "../../../components/ui/button";

const INPUT_BASE =
  "w-full px-3 py-2.5 border border-stone-200 dark:border-white/10 rounded-md text-sm bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-900/10 dark:focus:ring-white/20 transition-colors";

const SECTION =
  "bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-5 space-y-4";

const LABEL =
  "block text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-1.5";

export default function AddCompanyPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const handleLogoChange = (file: File | null) => {
    setLogoFile(file);
    if (file) {
      const url = URL.createObjectURL(file);
      setLogoPreview(url);
    } else {
      setLogoPreview(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let logoUrl: string | undefined;

      if (logoFile) {
        const uploadRes = await uploadDirectToS3({
          file: logoFile,
          folder: "company-logos",
        });
        logoUrl = uploadRes.fileUrl;
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
      const msg =
        (err as { response?: { data?: { message?: string } } })?.response?.data
          ?.message || "Failed to submit company";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  const canSubmit =
    !loading &&
    form.name.trim() &&
    form.description.trim() &&
    form.industry.trim() &&
    form.city.trim();

  return (
    <div className="max-w-2xl mx-auto pb-12">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center">
            <Building2 className="w-4 h-4 text-stone-600 dark:text-stone-400" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
            Add a Company
          </h1>
        </div>
        <p className="text-sm text-stone-500 dark:text-stone-400 mt-1 ml-10">
          Submit a company for review. It will be visible once approved by an admin.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Basic Info */}
        <div className={SECTION}>
          <div className="flex items-center gap-2 pb-3 border-b border-stone-100 dark:border-white/5">
            <Building2 className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              Basic Information
            </span>
          </div>

          {/* Logo upload */}
          <div>
            <span className={LABEL}>Logo</span>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-16 h-16 rounded-md border-2 border-dashed border-stone-200 dark:border-white/10 flex items-center justify-center hover:border-stone-400 dark:hover:border-white/30 transition-colors shrink-0 overflow-hidden"
              >
                {logoPreview ? (
                  <img
                    src={logoPreview}
                    alt="Logo preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <ImagePlus className="w-5 h-5 text-stone-300 dark:text-stone-600" />
                )}
              </button>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-stone-600 dark:text-stone-400">
                  {logoFile ? logoFile.name : "Click to upload a company logo"}
                </p>
                <p className="text-xs text-stone-400 dark:text-stone-500 mt-0.5">
                  PNG, JPG, SVG up to 5 MB
                </p>
                {logoFile && (
                  <button
                    type="button"
                    onClick={() => handleLogoChange(null)}
                    className="text-xs text-stone-400 hover:text-stone-600 dark:hover:text-stone-300 mt-1 flex items-center gap-1 transition-colors"
                  >
                    <X className="w-3 h-3" /> Remove
                  </button>
                )}
              </div>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleLogoChange(e.target.files?.[0] || null)}
            />
          </div>

          <div>
            <label className={LABEL}>Company Name *</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => updateField("name", e.target.value)}
              required
              placeholder="e.g. Acme Corp"
              className={INPUT_BASE}
            />
          </div>

          <div>
            <label className={LABEL}>Description *</label>
            <textarea
              value={form.description}
              onChange={(e) => updateField("description", e.target.value)}
              required
              rows={4}
              placeholder="What does this company do?"
              className={`${INPUT_BASE} resize-none`}
            />
          </div>

          <div>
            <label className={LABEL}>Mission</label>
            <textarea
              value={form.mission}
              onChange={(e) => updateField("mission", e.target.value)}
              rows={2}
              placeholder="Company mission statement"
              className={`${INPUT_BASE} resize-none`}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={LABEL}>Industry *</label>
              <input
                type="text"
                value={form.industry}
                onChange={(e) => updateField("industry", e.target.value)}
                required
                placeholder="e.g. Technology, Finance"
                className={INPUT_BASE}
              />
            </div>
            <div>
              <label className={LABEL}>Company Size *</label>
              <select
                value={form.size}
                onChange={(e) => updateField("size", e.target.value)}
                className={INPUT_BASE}
              >
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
        <div className={SECTION}>
          <div className="flex items-center gap-2 pb-3 border-b border-stone-100 dark:border-white/5">
            <MapPin className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              Location
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={LABEL}>City *</label>
              <input
                type="text"
                value={form.city}
                onChange={(e) => updateField("city", e.target.value)}
                required
                placeholder="e.g. Bangalore"
                className={INPUT_BASE}
              />
            </div>
            <div>
              <label className={LABEL}>State</label>
              <input
                type="text"
                value={form.state}
                onChange={(e) => updateField("state", e.target.value)}
                placeholder="e.g. Karnataka"
                className={INPUT_BASE}
              />
            </div>
          </div>

          <div>
            <label className={LABEL}>Address</label>
            <input
              type="text"
              value={form.address}
              onChange={(e) => updateField("address", e.target.value)}
              placeholder="Street address"
              className={INPUT_BASE}
            />
          </div>
        </div>

        {/* Additional Details */}
        <div className={SECTION}>
          <div className="flex items-center gap-2 pb-3 border-b border-stone-100 dark:border-white/5">
            <Globe className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              Additional Details
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={LABEL}>Website</label>
              <input
                type="url"
                value={form.website}
                onChange={(e) => updateField("website", e.target.value)}
                placeholder="https://..."
                className={INPUT_BASE}
              />
            </div>
            <div>
              <label className={LABEL}>Founded Year</label>
              <input
                type="number"
                value={form.foundedYear}
                onChange={(e) => updateField("foundedYear", e.target.value)}
                placeholder="e.g. 2015"
                className={INPUT_BASE}
              />
            </div>
          </div>

          {/* Technologies */}
          <div>
            <label className={LABEL}>Tech Stack</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={techInput}
                onChange={(e) => setTechInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addTech();
                  }
                }}
                placeholder="Type a technology and press Enter"
                className={INPUT_BASE}
              />
              <button
                type="button"
                onClick={addTech}
                className="px-3 py-2.5 rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 hover:bg-stone-50 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-400 transition-colors shrink-0"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            {technologies.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1 px-2 py-0.5 bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-[11px] font-mono uppercase tracking-wider rounded-md"
                  >
                    {tech}
                    <button
                      type="button"
                      onClick={() => removeTech(tech)}
                      className="text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 transition-colors ml-0.5"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Hiring Status */}
          <div>
            <label
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  checked={form.hiringStatus}
                  onChange={(e) => updateField("hiringStatus", e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-9 h-5 rounded-md bg-stone-200 dark:bg-stone-700 peer-checked:bg-lime-400 dark:peer-checked:bg-lime-500 transition-colors" />
                <div className="absolute top-0.5 left-0.5 w-4 h-4 rounded-sm bg-white shadow-sm transition-transform peer-checked:translate-x-4" />
              </div>
              <div>
                <span className="text-sm font-medium text-stone-700 dark:text-stone-300">
                  Currently hiring
                </span>
                <p className="text-xs text-stone-400 dark:text-stone-500 mt-0.5">
                  Mark if this company is actively looking for interns
                </p>
              </div>
            </label>
          </div>
        </div>

        {/* Submit */}
        <div className="flex items-center gap-3 pt-2">
          <Button
            type="submit"
            variant="mono"
            size="lg"
            disabled={!canSubmit}
            className="flex-1"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Building2 className="w-4 h-4" />
                Submit for Review
              </>
            )}
          </Button>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-5 py-2.5 rounded-md border border-stone-200 dark:border-white/10 text-sm text-stone-600 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors"
          >
            Cancel
          </button>
        </div>

        <p className="text-center text-xs text-stone-400 dark:text-stone-500">
          Submissions are reviewed by our team before appearing publicly.
        </p>
      </form>
    </div>
  );
}
