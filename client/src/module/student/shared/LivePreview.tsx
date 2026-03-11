import { useState, useEffect, useRef, memo } from "react";

interface LivePreviewProps {
  html: string;
  css?: string;
  height?: string;
}

function LivePreviewInner({ html, css, height = "200px" }: LivePreviewProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [srcdoc, setSrcdoc] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      const doc = `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{margin:12px;font-family:system-ui,-apple-system,sans-serif;font-size:14px;color:#1a1a1a}*{box-sizing:border-box}${css ?? ""}</style></head><body>${html}</body></html>`;
      setSrcdoc(doc);
    }, 300);
    return () => clearTimeout(timer);
  }, [html, css]);

  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden bg-white">
      <div className="px-4 py-2 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">Preview</span>
      </div>
      <iframe
        ref={iframeRef}
        srcDoc={srcdoc}
        sandbox="allow-scripts"
        className="w-full border-0 bg-white"
        style={{ height }}
        title="Live Preview"
      />
    </div>
  );
}

export const LivePreview = memo(LivePreviewInner);
