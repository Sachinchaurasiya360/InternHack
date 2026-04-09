import { useEffect, useRef, useState } from "react";

let mermaidPromise: Promise<typeof import("mermaid").default> | null = null;
function loadMermaid() {
  if (!mermaidPromise) {
    mermaidPromise = import("mermaid").then((m) => {
      const mermaid = m.default;
      mermaid.initialize({
        startOnLoad: false,
        theme: "default",
        securityLevel: "loose",
        flowchart: { curve: "basis" },
        themeVariables: {
          primaryColor: "#ede9fe",
          primaryTextColor: "#1e1b4b",
          primaryBorderColor: "#8b5cf6",
          lineColor: "#64748b",
          secondaryColor: "#fef3c7",
          tertiaryColor: "#f0fdf4",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        },
      });
      return mermaid;
    });
  }
  return mermaidPromise;
}

type Props = { chart: string; caption?: string };

export function Mermaid({ chart, caption }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>("");
  const [err, setErr] = useState<string | null>(null);
  const idRef = useRef(`m-${Math.random().toString(36).slice(2, 10)}`);

  useEffect(() => {
    let cancelled = false;
    loadMermaid()
      .then((mermaid) => mermaid.render(idRef.current, chart))
      .then(({ svg }) => {
        if (!cancelled) setSvg(svg);
      })
      .catch((e) => {
        if (!cancelled) setErr(String(e?.message || e));
      });
    return () => {
      cancelled = true;
    };
  }, [chart]);

  return (
    <figure className="my-4">
      <div className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 overflow-x-auto">
        {err ? (
          <pre className="text-xs text-red-500 whitespace-pre-wrap">{err}</pre>
        ) : svg ? (
          <div
            ref={ref}
            className="flex justify-center [&_svg]:max-w-full [&_svg]:h-auto"
            dangerouslySetInnerHTML={{ __html: svg }}
          />
        ) : (
          <div className="h-32 flex items-center justify-center text-xs text-gray-400">
            Loading diagram...
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="mt-2 text-xs text-center text-gray-500 dark:text-gray-400 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
