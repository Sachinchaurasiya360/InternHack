import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Trophy, Download, Share2, Copy, Check } from "lucide-react";

interface CertificateMeta {
  userName: string;
  roadmapTitle: string;
  roadmapSlug: string;
  completedAt: string;
  certificateUrl: string;
  shareUrl: string;
}

export default function RoadmapCertificatePage() {
  const { slug, enrolledId } = useParams();

  const [data, setData] = useState<CertificateMeta | null>(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchCertificate() {
      const res = await fetch(
        `/api/roadmaps/certificates/${slug}/${enrolledId}/meta`,
      );

      if (!res.ok) {
        setError(true);
        return;
      }

      const json = await res.json();
      setData(json);
    }

    fetchCertificate();
  }, [slug, enrolledId]);
  if (error) {
  return (
    <div className="min-h-screen bg-stone-950 flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-stone-400 mb-4">Failed to load certificate</p>
        <button onClick={() => window.location.reload()} className="text-lime-400 hover:underline">
          Retry
        </button>
      </div>
    </div>
  );}
  if (!data) {
    return (
      <div className="min-h-screen bg-stone-950 flex items-center justify-center text-stone-400">
        Loading certificate...
      </div>
    );
  }

  const fullShareUrl =
    `${window.location.origin}${data.shareUrl}`;

  const fullCertificateUrl =
    `${window.location.origin}${data.certificateUrl}`;

  const twitterUrl =
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `🎉 ${data.userName} completed the ${data.roadmapTitle} roadmap on InternHack!`
    )}&url=${encodeURIComponent(fullShareUrl)}`;

  const linkedInUrl =
    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullShareUrl)}`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(fullShareUrl);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-stone-900/90 overflow-hidden shadow-2xl">

        <div className="h-2 bg-linear-to-r from-lime-400 via-emerald-400 to-sky-400" />

        <div className="p-10 text-center">

          <div className="inline-flex h-24 w-24 items-center justify-center rounded-3xl bg-lime-400 text-stone-950 shadow-lg shadow-lime-500/30 mb-6">
            <Trophy className="w-10 h-10" />
          </div>

          <p className="uppercase tracking-[0.3em] text-xs text-lime-400 mb-3">
            Certificate of Completion
          </p>

          <h1 className="text-4xl font-bold mb-3">
            {data.userName}
          </h1>

          <p className="text-stone-400 text-lg">
            successfully completed the
          </p>

          <h2 className="text-2xl font-semibold mt-3 text-stone-100">
            {data.roadmapTitle}
          </h2>

          <p className="text-stone-500 mt-5">
            Issued by InternHack
          </p>

          <p className="text-stone-500 text-sm mt-1">
            {new Date(data.completedAt).toLocaleDateString()}
          </p>

          <div className="mt-10 grid gap-3">

            <button
              onClick={() => window.open(fullCertificateUrl, "_blank")}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-lime-400 text-stone-950 font-bold hover:bg-lime-300 transition-all"
            >
              <Download className="w-4 h-4" />
              Download Certificate
            </button>

            <button
              onClick={() => window.open(linkedInUrl, "_blank")}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0A66C2]/20 border border-[#0A66C2]/30 text-[#70B5F9]"
            >
              <Share2 className="w-4 h-4" />
              Share on LinkedIn
            </button>

            <button
              onClick={() => window.open(twitterUrl, "_blank")}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-stone-800 border border-white/10"
            >
              <Share2 className="w-4 h-4" />
              Share on X (Twitter)
            </button>

            <button
              onClick={handleCopy}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-all"
            >
              {copied ? (
                <Check className="w-4 h-4 text-lime-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}

              {copied ? "Link copied!" : "Copy Share Link"}
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}