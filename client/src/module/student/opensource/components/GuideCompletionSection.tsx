import { useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import toast from "../../../../components/ui/toast";
import { useAuthStore } from "../../../../lib/auth.store";
import { downloadGuideCertificate } from "../_shared/guide-certificate.utils";
import GuideCertificateCard from "./GuideCertificateCard";

interface Props {
  headline: string;
  subtitle: string;
  certificateGuideName: string;
  accentWord?: string;
}

function renderHeadline(headline: string, accentWord?: string) {
  if (!accentWord || !headline.includes(accentWord)) {
    return <span>{headline}</span>;
  }

  const [before, after] = headline.split(accentWord);
  return (
    <>
      {before}
      <span className="relative inline-block align-baseline">
        <span className="relative z-10">{accentWord}</span>
        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          aria-hidden
          className="absolute bottom-0.5 left-0 right-0 h-2 sm:h-3 bg-lime-400 origin-left z-0"
        />
      </span>
      {after}
    </>
  );
}

export default function GuideCompletionSection({
  headline,
  subtitle,
  certificateGuideName,
  accentWord,
}: Props) {
  const user = useAuthStore((s) => s.user);
  const [downloading, setDownloading] = useState(false);

  const completionDate = useMemo(
    () =>
      new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
    [],
  );

  const studentName = user?.name ?? "Student";

  const handleDownload = useCallback(async () => {
    setDownloading(true);
    try {
      await downloadGuideCertificate({
        studentName,
        guideName: certificateGuideName,
        completionDate,
      });
    } catch {
      toast.error("Could not generate certificate. Please try again.");
    } finally {
      setDownloading(false);
    }
  }, [studentName, certificateGuideName, completionDate]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative mb-10 overflow-hidden rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950"
    >
      {/* Vertical grid lines */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none dark:hidden"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(23,23,23,0.04) 1px, transparent 1px)",
          backgroundSize: "140px 100%",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none hidden dark:block"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "140px 100%",
        }}
      />

      <div className="relative z-10 px-6 py-10 sm:px-10 sm:py-12">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 mb-6"
        >
          <motion.span
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 bg-lime-400"
          />
          achievement unlocked
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-stone-900 dark:text-stone-50 mb-4"
        >
          {renderHeadline(headline, accentWord)}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base text-stone-600 dark:text-stone-400 max-w-xl leading-relaxed mb-10"
        >
          {subtitle}
        </motion.p>

        {/* Certificate preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="mb-8 rounded-md"
        >
          <GuideCertificateCard
            studentName={user?.name ?? "Student"}
            guideName={certificateGuideName}
            completionDate={completionDate}
          />
        </motion.div>

        {/* Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.36 }}
        >
          <button
            type="button"
            onClick={handleDownload}
            disabled={downloading}
            className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 bg-lime-400 text-stone-950 rounded-md text-sm font-bold hover:bg-lime-300 transition-colors cursor-pointer border-0 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <Download className="w-4 h-4" />
            {downloading ? "Generating…" : "Download Certificate"}
            {!downloading && (
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            )}
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}
