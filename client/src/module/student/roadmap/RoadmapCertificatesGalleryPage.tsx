import { useEffect, useState } from "react";
import {
  Trophy,
  Download,
  ExternalLink,
  Share2
} from "lucide-react";
import toast from "@/components/ui/toast";
interface Certificate {
  enrollmentId: string;
  roadmapTitle: string;
  roadmapSlug: string;
  completedAt: string;
  certificateUrl: string;
  shareUrl: string;
}

export default function RoadmapCertificatesGalleryPage() {
  const [certificates, setCertificates] = useState<
    Certificate[]
  >([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCertificates() {
      try {
        const res = await fetch(
          "/api/roadmaps/me/certificates",
          {
            credentials: "include",
          },
        );

        if (!res.ok) return;

        const data = await res.json();

        setCertificates(data.certificates || []);
      } finally {
        setLoading(false);
      }
    }

    fetchCertificates();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-stone-950 text-stone-400 flex items-center justify-center">
        Loading certificates...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 px-6 py-12 flex justify-center">

      <div className="w-full max-w-6xl text-center">

        {/* Header */}
        <div className="mb-10">
          <p className="uppercase tracking-[0.3em] text-xs text-lime-400 mb-3">
            achievements
          </p>

          <h1 className="text-4xl font-bold">
            My Certificates
          </h1>

          <p className="text-stone-400 mt-3">
            Showcase all your completed roadmap achievements.
          </p>
        </div>

        {/* Empty state */}
        {certificates.length === 0 && (
          <div className="rounded-3xl border border-white/10 bg-stone-900/60 p-16 text-center">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-stone-800 mb-6">
              <Trophy className="w-8 h-8 text-stone-500" />
            </div>

            <h2 className="text-2xl font-semibold mb-3">
              No certificates yet
            </h2>

            <p className="text-stone-400">
              Complete a roadmap to unlock certificates.
            </p>
          </div>
        )}

        {/* Grid */}
        {certificates.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 place-items-center">

            {certificates.map((certificate) => {
              const shareUrl =
                `${window.location.origin}${certificate.shareUrl}/${certificate.enrollmentId}`;

              const downloadUrl =
                `${window.location.origin}${certificate.certificateUrl}`;

              return (
                <div
                  key={certificate.enrollmentId}
                  className="group w-full max-w-sm rounded-3xl border border-white/10 bg-stone-900/80 overflow-hidden hover:border-lime-400/30 transition-all duration-300"
                >

                  {/* Accent */}
                  <div className="h-2 bg-gradient-to-r from-lime-400 via-emerald-400 to-sky-400" />

                  <div className="p-6">

                    {/* Icon */}
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-400 text-stone-950 shadow-lg shadow-lime-500/20 mb-5">
                      <Trophy className="w-7 h-7" />
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold leading-tight">
                      {certificate.roadmapTitle}
                    </h2>

                    <p className="text-stone-500 text-sm mt-2">
                      Completed on{" "}
                      {new Date(
                        certificate.completedAt,
                      ).toLocaleDateString()}
                    </p>

                    {/* Buttons */}
                    <div className="mt-6 space-y-3">

                      <button
                        onClick={() =>
                          window.open(downloadUrl, "_blank")
                        }
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-lime-400 hover:bg-lime-300 text-stone-950 font-semibold transition-all"
                      >
                        <Download className="w-4 h-4" />
                        Download Certificate
                      </button>

                      <button
                        onClick={() =>
                          window.open(shareUrl, "_blank")
                        }
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Open Public Page
                      </button>

                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(
                            shareUrl,
                          );
                          toast.success("Share link copied to clipboard!");
                        }}
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-all"
                      >
                        <Share2 className="w-4 h-4" />
                        Copy Share Link
                      </button>

                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        )}
      </div>
    </div>
  );
}