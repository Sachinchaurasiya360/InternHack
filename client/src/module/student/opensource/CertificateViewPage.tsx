import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import { Trophy, Copy, Download, Check, Linkedin, ArrowLeft, ExternalLink } from "lucide-react";
import { SEO } from "../../../components/SEO";
import { Button } from "../../../components/ui/button";
import toast from "../../../components/ui/toast";

interface Certificate {
  token: string;
  studentName: string;
  guideName: string;
  issuedAt: string;
}

export default function CertificateViewPage() {
  const { token } = useParams();
  const [cert, setCert] = useState<Certificate | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/opensource/certificate/${token}`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((data) => {
        setCert(data.certificate);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, [token]);

  const copyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setCopied(true);
    toast.success("Certificate link copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinkedIn = () => {
    const url = window.location.href;
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedInUrl, "_blank", "width=600,height=600");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        <div className="h-12 w-12 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin" />
      </div>
    );
  }

  if (error || !cert) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 p-6 text-center">
        <div className="w-20 h-20 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-6">
          <Trophy className="w-10 h-10 text-red-500 opacity-20" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Certificate Not Found</h1>
        <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-sm">
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
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
      <SEO
        title={`${cert.studentName}'s Certificate - ${cert.guideName}`}
        description={`${cert.studentName} has successfully completed the ${cert.guideName} on InternHack.`}
        ogImage={`${import.meta.env.VITE_API_URL}/api/opensource/certificate/${token}/og`}
      />

      {/* Hero background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 h-[500px]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-500/10 dark:bg-indigo-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-6 pt-12">
        <div className="flex items-center justify-between mb-8">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
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
          className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-2xl shadow-indigo-500/10 dark:shadow-none border border-slate-200 dark:border-slate-800 overflow-hidden"
        >
          {/* Certificate Content (Web Version) */}
          <div className="aspect-[16/9] w-full p-8 sm:p-16 flex flex-col items-center justify-center text-center relative">
             {/* Decorative patterns */}
             <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '32px 32px' }} />
             </div>
             
             <div className="absolute top-8 right-8 w-24 h-24 sm:w-32 sm:h-32 opacity-10">
                <Trophy className="w-full h-full text-indigo-500" />
             </div>

             <div className="space-y-6 sm:space-y-10 relative z-10 w-full">
                <div className="inline-flex flex-col items-center">
                   <div className="h-px w-24 bg-indigo-500/30 mb-4" />
                   <span className="text-xs sm:text-sm font-bold tracking-[0.3em] text-slate-400 dark:text-slate-500 uppercase">
                     Certificate of Completion
                   </span>
                   <div className="h-px w-24 bg-indigo-500/30 mt-4" />
                </div>

                <div className="space-y-4">
                  <p className="text-lg sm:text-2xl text-slate-500 dark:text-slate-400 font-medium">This is to certify that</p>
                  <h1 className="text-4xl sm:text-7xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
                    {cert.studentName}
                  </h1>
                </div>

                <div className="space-y-4">
                  <p className="text-lg sm:text-2xl text-slate-500 dark:text-slate-400 font-medium">has successfully completed the</p>
                  <div className="inline-block px-6 py-2 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20">
                    <h2 className="text-2xl sm:text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                      {cert.guideName}
                    </h2>
                  </div>
                </div>

                <div className="pt-8 sm:pt-12 flex flex-col items-center gap-2">
                  <p className="text-sm sm:text-base text-slate-400 font-medium">
                    Issued on {date}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-slate-300 dark:text-slate-600 font-mono">
                    <span>ID: {token}</span>
                    <span>•</span>
                    <Link to="/" className="hover:text-indigo-500 transition-colors flex items-center gap-1">
                      internhack.xyz <ExternalLink className="w-2.5 h-2.5" />
                    </Link>
                  </div>
                </div>
             </div>

             {/* Bottom corner badge */}
             <div className="absolute bottom-8 right-8 flex items-center gap-3">
                <div className="text-right hidden sm:block">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Verified by</p>
                  <p className="text-sm font-bold bg-linear-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">InternHack AI</p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-indigo-500 to-purple-600 p-0.5 shadow-lg shadow-indigo-500/20">
                   <div className="w-full h-full rounded-[14px] bg-white dark:bg-slate-900 flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-indigo-500" />
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
            className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Add to LinkedIn</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-6 text-sm">
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
            className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Download Image</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-6 text-sm">
              Get a high-resolution version of your certificate for your portfolio or social media posts.
            </p>
            <Button 
              className="w-full" 
              variant="secondary" 
              onClick={() => window.open(`${import.meta.env.VITE_API_URL}/api/opensource/certificate/${token}/og`, "_blank")}
            >
              <Download className="w-4 h-4 mr-2" />
              Download PNG
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
