import { useEffect, useState, memo } from "react";
import type { ReactNode } from "react";
import { Navbar } from "../../../components/Navbar";
import { useStudentSidebar } from "../../../components/StudentSidebar";
import { useAuthStore } from "../../../lib/auth.store";
import api from "../../../lib/axios";
import {
  Trophy,
  Download,
  ExternalLink,
  Share2
} from "lucide-react";
import toast from "@/components/ui/toast";
interface Certificate {
  shareToken: string;
  roadmapTitle: string;
  roadmapSlug: string;
  completedAt: string;
  certificateUrl: string;
  shareUrl: string;
}

const CertificateCard = memo(function CertificateCard({
  certificate,
}: {
  certificate: Certificate;
}) {
  const shareUrl =
    `${window.location.origin}${certificate.shareUrl}`;

  const downloadUrl =
    `${window.location.origin}${certificate.certificateUrl}`;

  return (
    <div className="group w-full max-w-sm rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 overflow-hidden hover:border-lime-400/30 transition-all duration-300">

      {/* Accent */}
      <div className="h-1 bg-linear-to-r from-lime-400/80 via-lime-300 to-sky-400/70" />

      <div className="p-6">

        {/* Icon */}
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-md bg-lime-400 text-stone-950 shadow-lg shadow-lime-500/20 mb-5">
          <Trophy className="w-7 h-7" />
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold leading-tight text-stone-900 dark:text-stone-100">
          {certificate.roadmapTitle}
        </h2>

        <p className="text-stone-600 dark:text-stone-400 text-sm mt-2">
          Completed on{" "}
          {new Date(
            certificate.completedAt,
          ).toLocaleDateString()}
        </p>

        {/* Buttons */}
        <div className="mt-6 space-y-3">

          <button
            onClick={() =>
              window.open(downloadUrl, "_blank", "noopener,noreferrer")
            }
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-lime-400 hover:bg-lime-300 text-stone-950 font-semibold transition-all"
          >
            <Download className="w-4 h-4" />
            Download Certificate
          </button>

          <button
            onClick={() =>
              window.open(shareUrl, "_blank", "noopener,noreferrer")
            }
            className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-stone-200 dark:border-white/10 hover:bg-stone-100 dark:hover:bg-white/5 transition-all text-sm text-stone-700 dark:text-stone-300"
          >
            <ExternalLink className="w-4 h-4" />
            Open Public Page
          </button>

          <button
            onClick={async() => {
              try{
              await navigator.clipboard.writeText(shareUrl);
              toast.success("Share link copied to clipboard!");
              } catch {
              toast.error("Failed to copy share link. Please try copying manually.");
              }
            }}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-stone-200 dark:border-white/10 hover:bg-stone-100 dark:hover:bg-white/5 transition-all text-sm text-stone-700 dark:text-stone-300"
          >
            <Share2 className="w-4 h-4" />
            Copy Share Link
          </button>

        </div>
      </div>
    </div>
  );
});

function Chrome({
  children,
  isStudent,
  sidebarWidth,
  collapsed,
  sidebar,
}: {
  children: ReactNode;
  isStudent: boolean;
  sidebarWidth: number;
  collapsed: boolean;
  sidebar: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white dark:bg-stone-950">
      <div className="hidden lg:block">
        <Navbar sidebarOffset={isStudent ? sidebarWidth : 0} />
      </div>

      <div className="lg:hidden">
        <Navbar />
      </div>

      {isStudent && sidebar}

      <div
        className={`pt-16 lg:pt-24 transition-all duration-300 ${
          isStudent
            ? collapsed
              ? "lg:ml-18"
              : "lg:ml-64"
            : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function LoadingUI(){
  return (
    <div className="min-h-screen bg-white dark:bg-stone-950 text-stone-400 flex items-center justify-center">
      Loading certificates...
    </div> 
  );
}

function ErrorUI(){
    return (
    <div className="min-h-screen bg-white dark:bg-stone-950 flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-stone-400 mb-4">Failed to load certificates</p>
        <button onClick={() => window.location.reload()} className="text-lime-400 hover:underline">
          Retry
        </button>
      </div>
    </div>
  );
}

export default function RoadmapCertificatesGalleryPage() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { isAuthenticated, user } = useAuthStore();
  const isStudent = isAuthenticated && user?.role === "STUDENT";
  const { collapsed, sidebarWidth, sidebar} = useStudentSidebar();
  const chromeProps = { isStudent, sidebarWidth, collapsed, sidebar};

  useEffect(() => {
    async function fetchCertificates() {
      try {
        const res = await api.get("/roadmaps/me/certificates");

        setCertificates(res.data.certificates || []);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchCertificates();
  }, []);

  return (
    <Chrome {...chromeProps}>
      {loading? <LoadingUI/> : error? <ErrorUI/> : (
    <div className="min-h-screen bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100 px-6 py-12 flex justify-center">

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
          <div className="rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900/60 p-16 text-center">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-md bg-stone-800 mb-6">
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

            {certificates.map((certificate) => (
            <CertificateCard key={certificate.shareToken} certificate={certificate}/>
            ))}p

          </div>
        )}
      </div>
    </div>
      )}
    </Chrome>
  );
}