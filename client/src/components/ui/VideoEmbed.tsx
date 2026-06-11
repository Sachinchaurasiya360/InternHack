import { useState } from "react";
import { Video } from "lucide-react";

function getYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
    /^([a-zA-Z0-9_-]{11})$/,
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m?.[1]) return m[1];
  }
  return null;
}

function getLoomId(url: string): string | null {
  const m = url.match(/loom\.com\/(?:share|embed)\/([a-f0-9]+)/);
  return m?.[1] ?? null;
}

function isDirectVideo(url: string): boolean {
  return /\.(mp4|webm|ogg)(\?|$)/i.test(url);
}

interface Props {
  url: string;
  title?: string;
}

export function VideoEmbed({ url, title }: Props) {
  const [expanded, setExpanded] = useState(false);

  const youtubeId = getYouTubeId(url);
  const loomId = getLoomId(url);

  let embedUrl: string | null = null;
  let type: "youtube" | "loom" | "direct" | null = null;

  if (youtubeId) {
    embedUrl = `https://www.youtube.com/embed/${youtubeId}`;
    type = "youtube";
  } else if (loomId) {
    embedUrl = `https://www.loom.com/embed/${loomId}`;
    type = "loom";
  } else if (isDirectVideo(url)) {
    embedUrl = url;
    type = "direct";
  }

  if (!embedUrl) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-stone-600 dark:text-stone-400 hover:underline"
      >
        <Video className="w-4 h-4" />
        {title ?? "Watch video"}
      </a>
    );
  }

  return (
    <div className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden">
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="flex items-center justify-between w-full px-5 py-3.5 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-stone-100 dark:bg-stone-800 flex items-center justify-center shrink-0">
            <Video className="w-4 h-4 text-stone-600 dark:text-stone-400" />
          </div>
          <div>
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              {title ?? "Watch: How-to Video"}
            </span>
            <span className="text-xs text-gray-400 dark:text-gray-500 ml-2">
              {type === "youtube" ? "YouTube" : type === "loom" ? "Loom" : "Video"}
            </span>
          </div>
        </div>
        <span className="text-xs font-medium text-stone-600 dark:text-stone-400 shrink-0">
          {expanded ? "Collapse" : "Play"}
        </span>
      </button>

      {expanded && (
        <div className="border-t border-gray-100 dark:border-gray-800">
          {type === "direct" ? (
            <video
              controls
              className="w-full aspect-video bg-black"
              src={embedUrl}
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="relative w-full aspect-video bg-black">
              <iframe
                src={embedUrl}
                title={title ?? "Video embed"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
