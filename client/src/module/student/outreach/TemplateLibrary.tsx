import { useEffect, useState } from "react";
import { getTemplates } from "./outreach.api.js";

interface Template {
  id: number;
  type: string;
  title: string;
  body: string;
  placeholders: string[];
}

export default function TemplateLibrary() {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [fills, setFills] = useState<Record<number, Record<string, string>>>({});
  const [copied, setCopied] = useState<number | null>(null);

  useEffect(() => {
    getTemplates().then((res) => setTemplates(res.data.templates));
  }, []);

  const getPreview = (template: Template) => {
    let body = template.body;
    const f = fills[template.id] ?? {};
    template.placeholders.forEach((p) => {
      body = body.replaceAll(`[${p}]`, f[p] || `[${p}]`);
    });
    return body;
  };

  const handleCopy = (template: Template) => {
    navigator.clipboard.writeText(getPreview(template));
    setCopied(template.id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {templates.map((t) => (
        <div key={t.id} className="border rounded-xl p-5 shadow-sm bg-white flex flex-col gap-3">
          <h3 className="font-semibold text-lg">{t.title}</h3>
          <pre className="text-sm bg-gray-50 rounded p-3 whitespace-pre-wrap font-sans text-gray-700">
            {getPreview(t)}
          </pre>
          <div className="flex flex-wrap gap-2">
            {t.placeholders.map((p) => (
              <input
                key={p}
                placeholder={p}
                value={fills[t.id]?.[p] ?? ""}
                onChange={(e) =>
                  setFills((prev) => ({
                    ...prev,
                    [t.id]: { ...prev[t.id], [p]: e.target.value },
                  }))
                }
                className="border rounded px-2 py-1 text-sm w-32"
              />
            ))}
          </div>
          <button
            onClick={() => handleCopy(t)}
            className="self-start bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm hover:bg-blue-700"
          >
            {copied === t.id ? "Copied!" : "Copy to Clipboard"}
          </button>
        </div>
      ))}
    </div>
  );
}