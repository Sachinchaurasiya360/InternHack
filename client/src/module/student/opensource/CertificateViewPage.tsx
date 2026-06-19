import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import { Trophy, Copy, Download, Check, Linkedin, ArrowLeft, ExternalLink } from "lucide-react";
import { SEO } from "../../../components/SEO";
import { Button } from "../../../components/ui/button";
import toast from "../../../components/ui/toast";
import { fetchCertificate } from "./api/opensource.api";

export default function CertificateViewPage() {
  const { token } = useParams<{ token?: string }>();
  const [copied, setCopied] = useState(false);

  const {
    data: cert,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["certificate", token],
    queryFn: () => fetchCertificate(token as string),
    enabled: !!token,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 2,
    retry: 1,
  });

  /**
   * Copies the current certificate page URL to the clipboard
   * and shows a temporary "copied" confirmation state.
   */
  const copyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setCopied(true);
    toast.success("Certificate link copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  /**
   * Opens LinkedIn's share dialog for the current certificate page.
   */
  const shareLinkedIn = () => {
    const url = window.location.href;
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedInUrl, "_blank", "noopener,noreferrer,width=600,height=600");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50 dark:bg-stone-950">
        <div className="h-12 w-12 rounded-md border-4 border-lime-500 border-t-transparent animate-spin" />
      </div>

    );
  }

  if (isError || !cert) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-stone-50 dark:bg-stone-950 p-6 text-center">
        <div className="w-20 h-20 bg-red-100 dark:bg-red-900/20 rounded-md flex items-center justify-center mb-6">
          <Trophy className="w-10 h-10 text-red-500 opacity-20" />
        </div>
        <h1 className="text-2xl font-bold text-stone-900 dark:text-white mb-2">Certificate Not Found</h1>
        <p className="text-stone-500 dark:text-stone-400 mb-8 max-w-sm">
          We couldn't find the certificate you're looking for. It might have been removed or the link is incorrect.
        </p>
        <Button asChild variant="primary">
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    );

  }

  const date = new Date(cert.issuedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 pb-20">
      <SEO
        title={`${cert.studentName}'s Certificate - ${cert.guideName}`}
        description={`${cert.studentName} has successfully completed the ${cert.guideName} on InternHack.`}
        ogImage={`${import.meta.env.VITE_API_URL}/api/opensource/certificate/${token}/og`}
      />


      {/* Hero background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 h-[500px]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-lime-500/10 dark:bg-lime-500/5 blur-[120px] rounded-md" />

      </div>

      <div className="max-w-5xl mx-auto px-6 pt-12">
        <div className="flex items-center justify-between mb-8">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-50 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to InternHack
          </Link>
          <div className="flex items-center gap-3">
            <Button variant="secondary" size="sm" onClick={copyLink}>
              {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
              {copied ? "Copied" : "Copy Link"}
            </Button>
            <Button variant="secondary" size="sm" onClick={shareLinkedIn}>
              <Linkedin className="w-4 h-4 mr-2 fill-current" />
              Share on LinkedIn
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-white dark:bg-stone-900 rounded-md shadow-2xl shadow-lime-500/10 dark:shadow-none border border-stone-200 dark:border-stone-800 overflow-hidden"
        >

          {/* Certificate Content (Web Version) */}
          <div className="aspect-[16/9] w-full p-8 sm:p-16 flex flex-col items-center justify-center text-center relative">
            {/* Decorative patterns */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
              <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '32px 32px' }} />
            </div>

            <div className="absolute top-8 right-8 w-24 h-24 sm:w-32 sm:h-32 opacity-10">
              <Trophy className="w-full h-full text-lime-500" />
            </div>

            <div className="space-y-6 sm:space-y-10 relative z-10 w-full">
              <div className="inline-flex flex-col items-center">
                <div className="h-px w-24 bg-lime-500/30 mb-4" />
                <span className="text-xs sm:text-sm font-bold tracking-[0.3em] text-stone-400 dark:text-stone-500 uppercase">
                  Certificate of Completion
                </span>
                <div className="h-px w-24 bg-lime-500/30 mt-4" />

              </div>

              <div className="space-y-4">
                <p className="text-lg sm:text-2xl text-stone-500 dark:text-stone-400 font-medium">This is to certify that</p>
                <h1 className="text-4xl sm:text-7xl font-display font-bold text-stone-900 dark:text-white tracking-tight">

                  {cert.studentName}
                </h1>
              </div>

              <div className="space-y-4">
                <p className="text-lg sm:text-2xl text-stone-500 dark:text-stone-400 font-medium">has successfully completed the</p>
                <div className="inline-block px-6 py-2 rounded-md bg-lime-50 dark:bg-lime-500/10 border border-lime-100 dark:border-lime-500/20">
                  <h2 className="text-2xl sm:text-4xl font-bold text-lime-600 dark:text-lime-400">
                    {cert.guideName}
                  </h2>
                </div>
              </div>


              <div className="pt-8 sm:pt-12 flex flex-col items-center gap-2">
                <p className="text-sm sm:text-base text-stone-400 font-medium">
                  Issued on {date}
                </p>
                <div className="flex items-center gap-2 text-xs text-stone-300 dark:text-stone-600 font-mono">

                  <span>ID: {token}</span>
                  <span>•</span>
                  <Link to="/" className="hover:text-lime-500 transition-colors flex items-center gap-1">
                    internhack.xyz <ExternalLink className="w-2.5 h-2.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom corner badge */}
            <div className="absolute bottom-8 right-8 flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">Verified by</p>
                <p className="text-sm font-bold bg-linear-to-r from-lime-500 to-lime-600 bg-clip-text text-transparent">InternHack AI</p>

              </div>
              <div className="w-12 h-12 rounded-md bg-linear-to-br from-lime-500 to-lime-600 p-0.5 shadow-lg shadow-lime-500/20">
                <div className="w-full h-full rounded-md bg-white dark:bg-stone-900 flex items-center justify-center">

                  <Trophy className="w-6 h-6 text-stone-500" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Cards */}
        <div className="grid sm:grid-cols-2 gap-6 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-stone-900 p-8 rounded-md border border-stone-200 dark:border-stone-800"
          >
            <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-3">Add to LinkedIn</h3>
            <p className="text-stone-500 dark:text-stone-400 mb-6 text-sm">
              Showcase your achievement to recruiters and peers by adding this certificate to your LinkedIn profile.
            </p>
            <Button className="w-full" variant="primary" onClick={shareLinkedIn}>
              <Linkedin className="w-4 h-4 mr-2" />
              Add to Profile
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-stone-900 p-8 rounded-md border border-stone-200 dark:border-stone-800"
          >
            <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-3">Download Image</h3>
            <p className="text-stone-500 dark:text-stone-400 mb-6 text-sm">
              Get a high-resolution version of your certificate for your portfolio or social media posts.
            </p>
            <Button
              className="w-full"
              variant="secondary"
              onClick={() => window.open(`${import.meta.env.VITE_API_URL}/api/opensource/certificate/${token}/og`, "_blank")}
            >
              <Download className="w-4 h-4 mr-2" />
              Download SVG
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
