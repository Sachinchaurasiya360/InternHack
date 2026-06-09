import { Youtube } from "lucide-react";

function getYouTubeEmbedUrl(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname === "youtu.be") return `https://www.youtube.com/embed${u.pathname}`;
    if (u.hostname.includes("youtube.com")) {
      if (u.pathname.startsWith("/embed")) return url;
      const v = u.searchParams.get("v");
      if (v) return `https://www.youtube.com/embed/${v}`;
    }
    return null;
  } catch {
    return null;
  }
}

interface DsaVideoPanelProps {
  videoUrl: string;
}

export function DsaVideoPanel({ videoUrl }: DsaVideoPanelProps) {
  const embedUrl = getYouTubeEmbedUrl(videoUrl);
  if (!embedUrl) return null;

  return (
    <div>
      <div className="flex items-center gap-1.5 mb-2">
        <Youtube className="w-3 h-3 text-red-500" />
        <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
          video explanation
        </span>
      </div>
      <div className="relative w-full aspect-video rounded-md overflow-hidden bg-black/5 dark:bg-white/5 border border-stone-200 dark:border-white/10">
        <iframe
          src={embedUrl}
          title="Video explanation"
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}
