import { useState, useRef, useCallback } from "react";
import { Link, useParams } from "react-router";
import { ArrowLeft, Upload, AlertCircle, CheckCircle2, XCircle, Download, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SEO } from "../../../components/SEO";
import api from "../../../lib/axios";

// --- CSV Field Requirements ---
// Required: email, name
// Optional: phone, skills, linkedinUrl, portfolioUrl, coverLetter

const REQUIRED_HEADERS = ["email", "name"] as const;

interface CsvRow {
  email: string;
  name: string;
  phone?: string;
  skills?: string;
  linkedinUrl?: string;
  portfolioUrl?: string;
  coverLetter?: string;
}

interface ImportResult {
  row: number;
  email: string;
  name: string;
  status: "success" | "error" | "duplicate";
  message?: string;
}

// --- CSV Parser ---
function parseCsv(text: string): { headers: string[]; rows: Record<string, string>[] } {
  const lines = text.split(/\r?\n/).filter((l) => l.trim().length > 0);
  if (lines.length === 0) return { headers: [], rows: [] };

  const headers = lines[0].split(",").map((h) => h.trim().toLowerCase().replace(/[^a-z]/g, ""));
  const rows = lines.slice(1).map((line) => {
    // Basic CSV parse: handles simple cases (no quoted commas)
    const values = line.split(",").map((v) => v.trim());
    const obj: Record<string, string> = {};
    headers.forEach((h, i) => { obj[h] = values[i] ?? ""; });
    return obj;
  });
  return { headers, rows };
}

function validateRow(row: Record<string, string>): string | null {
  if (!row.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(row.email)) {
    return `Invalid or missing email: "${row.email}"`;
  }
  if (!row.name || row.name.length < 2) {
    return `Missing or too-short name: "${row.name}"`;
  }
  return null;
}

// --- SAMPLE CSV DOWNLOAD ---
function downloadSampleCsv() {
  const sample = [
    ["email", "name", "phone", "skills", "linkedinUrl", "portfolioUrl", "coverLetter"].join(","),
    ["alice@example.com", "Alice Smith", "+1-555-0101", "React,TypeScript,Node.js", "https://linkedin.com/in/alicesmith", "https://alicesmith.dev", "Excited to join your campus drive!"].join(","),
    ["bob@example.com", "Bob Jones", "+1-555-0202", "Python,Django,PostgreSQL", "https://linkedin.com/in/bobjones", "", "Looking forward to the opportunity."].join(","),
  ].join("\n");

  const blob = new Blob([sample], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "candidates_import_template.csv";
  a.click();
  URL.revokeObjectURL(url);
}

export default function CandidateImportPage() {
  const { id: jobId } = useParams<{ id: string }>();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<CsvRow[]>([]);
  const [parseError, setParseError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const [importing, setImporting] = useState(false);
  const [results, setResults] = useState<ImportResult[]>([]);
  const [done, setDone] = useState(false);

  const handleFileSelect = useCallback((f: File) => {
    setFile(f);
    setResults([]);
    setDone(false);
    setParseError(null);
    setValidationErrors([]);
    setPreview([]);

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      const { headers, rows } = parseCsv(text);

      // Check required headers
      const missing = REQUIRED_HEADERS.filter((h) => !headers.includes(h));
      if (missing.length > 0) {
        setParseError(`Missing required CSV columns: ${missing.join(", ")}. Found: ${headers.join(", ")}`);
        return;
      }

      // Validate each row
      const errors: string[] = [];
      const validRows: CsvRow[] = [];
      rows.forEach((row, idx) => {
        const err = validateRow(row);
        if (err) {
          errors.push(`Row ${idx + 2}: ${err}`);
        } else {
          validRows.push(row as unknown as CsvRow);
        }
      });

      setValidationErrors(errors);
      setPreview(validRows.slice(0, 5)); // Show first 5 as preview
    };
    reader.readAsText(f);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const f = e.dataTransfer.files[0];
    if (f && f.name.endsWith(".csv")) handleFileSelect(f);
  }, [handleFileSelect]);

  const handleImport = async () => {
    if (!file || !jobId) return;
    setImporting(true);
    setResults([]);

    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target?.result as string;
      const { rows } = parseCsv(text);
      const importResults: ImportResult[] = [];

      for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const validationErr = validateRow(row);
        if (validationErr) {
          importResults.push({ row: i + 2, email: row.email, name: row.name, status: "error", message: validationErr });
          continue;
        }
        try {
          await api.post(`/recruiter/jobs/${jobId}/candidates/import`, {
            email: row.email,
            name: row.name,
            phone: row.phone || undefined,
            skills: row.skills ? row.skills.split(";").map((s: string) => s.trim()).filter(Boolean) : undefined,
            linkedinUrl: row.linkedinUrl || undefined,
            portfolioUrl: row.portfolioUrl || undefined,
            coverLetter: row.coverLetter || undefined,
          });
          importResults.push({ row: i + 2, email: row.email, name: row.name, status: "success" });
        } catch (err: unknown) {
          const axiosErr = err as { response?: { status?: number; data?: { message?: string } } };
          const status = axiosErr?.response?.status;
          const msg = axiosErr?.response?.data?.message || "Unknown error";
          importResults.push({
            row: i + 2,
            email: row.email,
            name: row.name,
            status: status === 409 ? "duplicate" : "error",
            message: status === 409 ? "Already imported or email exists" : msg,
          });
        }
      }

      setResults(importResults);
      setDone(true);
      setImporting(false);
    };
    reader.readAsText(file);
  };

  const successCount = results.filter((r) => r.status === "success").length;
  const errorCount = results.filter((r) => r.status === "error").length;
  const dupCount = results.filter((r) => r.status === "duplicate").length;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <SEO title="Import Candidates" noIndex />

      {/* Header */}
      <div>
        <Link
          to={`/recruiters/jobs/${jobId}/applications`}
          className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500 hover:text-black dark:hover:text-white mb-4 no-underline"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Applications
        </Link>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Import Candidates</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Upload a CSV file to bulk-import candidates for this campus recruitment drive.
            </p>
          </div>
          <button
            onClick={downloadSampleCsv}
            className="flex items-center gap-1.5 text-xs px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 transition-colors whitespace-nowrap"
          >
            <Download className="w-3.5 h-3.5" /> Sample CSV
          </button>
        </div>
      </div>

      {/* Drop Zone */}
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer transition-all ${
          file
            ? "border-green-400 dark:border-green-600 bg-green-50/50 dark:bg-green-900/10"
            : "border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 bg-gray-50/50 dark:bg-gray-900/30"
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".csv"
          className="hidden"
          onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFileSelect(f); }}
        />
        <Upload className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" />
        {file ? (
          <>
            <p className="font-semibold text-gray-900 dark:text-white">{file.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {preview.length} valid rows detected — click to change
            </p>
          </>
        ) : (
          <>
            <p className="font-semibold text-gray-700 dark:text-gray-300">
              Drop a CSV file here, or click to browse
            </p>
            <p className="text-sm text-gray-400 mt-1">Required columns: <code>email</code>, <code>name</code></p>
          </>
        )}
      </div>

      {/* Parse Error */}
      <AnimatePresence>
        {parseError && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-700 dark:text-red-300 font-medium">{parseError}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Validation Errors */}
      <AnimatePresence>
        {validationErrors.length > 0 && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl space-y-1">
            <p className="text-sm font-semibold text-amber-700 dark:text-amber-300">
              {validationErrors.length} row(s) will be skipped due to validation errors:
            </p>
            {validationErrors.slice(0, 5).map((e, i) => (
              <p key={i} className="text-xs text-amber-600 dark:text-amber-400">• {e}</p>
            ))}
            {validationErrors.length > 5 && (
              <p className="text-xs text-amber-500">…and {validationErrors.length - 5} more</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Preview */}
      {preview.length > 0 && !done && (
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
          <div className="px-5 py-3 border-b border-gray-100 dark:border-gray-800">
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Preview (first {preview.length} rows)</p>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <th scope="col" className="text-left text-xs font-medium text-gray-500 uppercase px-5 py-2">Name</th>
                <th scope="col" className="text-left text-xs font-medium text-gray-500 uppercase px-5 py-2">Email</th>
                <th scope="col" className="text-left text-xs font-medium text-gray-500 uppercase px-5 py-2">Phone</th>
                <th scope="col" className="text-left text-xs font-medium text-gray-500 uppercase px-5 py-2">Skills</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
              {preview.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <td className="px-5 py-3 font-medium text-gray-900 dark:text-white">{row.name}</td>
                  <td className="px-5 py-3 text-gray-500 dark:text-gray-400">{row.email}</td>
                  <td className="px-5 py-3 text-gray-500 dark:text-gray-400">{row.phone || "—"}</td>
                  <td className="px-5 py-3 text-gray-500 dark:text-gray-400 text-xs">{row.skills || "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Import Button */}
      {file && !parseError && !done && (
        <button
          onClick={handleImport}
          disabled={importing || preview.length === 0}
          className={`w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
            importing || preview.length === 0
              ? "bg-gray-200 dark:bg-gray-800 text-gray-400 cursor-not-allowed"
              : "bg-black dark:bg-white text-white dark:text-gray-950 hover:bg-gray-800 dark:hover:bg-gray-200 shadow-lg"
          }`}
        >
          {importing ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Importing candidates…
            </>
          ) : (
            <>
              <Upload className="w-4 h-4" />
              Import {preview.length}+ candidates
            </>
          )}
        </button>
      )}

      {/* Import Results */}
      <AnimatePresence>
        {done && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
            {/* Summary */}
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-center">
                <p className="text-2xl font-black text-green-600 dark:text-green-400">{successCount}</p>
                <p className="text-xs font-medium text-green-700 dark:text-green-300 mt-1">Imported</p>
              </div>
              <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl text-center">
                <p className="text-2xl font-black text-amber-600 dark:text-amber-400">{dupCount}</p>
                <p className="text-xs font-medium text-amber-700 dark:text-amber-300 mt-1">Duplicates</p>
              </div>
              <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-center">
                <p className="text-2xl font-black text-red-600 dark:text-red-400">{errorCount}</p>
                <p className="text-xs font-medium text-red-700 dark:text-red-300 mt-1">Failed</p>
              </div>
            </div>

            {/* Row-level results */}
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
              <div className="px-5 py-3 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Import Results</p>
                <Link
                  to={`/recruiters/jobs/${jobId}/applications`}
                  className="text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white no-underline"
                >
                  View Applications →
                </Link>
              </div>
              <div className="divide-y divide-gray-50 dark:divide-gray-800 max-h-72 overflow-y-auto">
                {results.map((r) => (
                  <div key={r.row} className="px-5 py-3 flex items-center gap-3 text-sm">
                    {r.status === "success" ? (
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    ) : r.status === "duplicate" ? (
                      <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 dark:text-white truncate">{r.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{r.email}</p>
                    </div>
                    {r.message && (
                      <p className="text-xs text-gray-400 dark:text-gray-500 text-right flex-shrink-0 max-w-[200px] truncate">{r.message}</p>
                    )}
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      r.status === "success"
                        ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                        : r.status === "duplicate"
                        ? "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400"
                        : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"
                    }`}>
                      {r.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reset Button */}
            <button
              onClick={() => { setFile(null); setPreview([]); setResults([]); setDone(false); setValidationErrors([]); setParseError(null); }}
              className="w-full py-2.5 rounded-xl font-bold text-sm border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Import Another File
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
