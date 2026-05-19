import { Send, Loader2, Mail, MessageSquarePlus } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import api from "../lib/axios";

const linkClass =
  "text-sm text-stone-400 hover:text-stone-50 transition-colors no-underline";

const SOCIAL_LINKS = {
  email: "mailto:mrsachinchaurasiya@gmail.com",
  twitter: "https://x.com/sachindev69",
  linkedin: "https://www.linkedin.com/company/internhack",
};

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitting(true);
    setError("");
    try {
      await api.post("/newsletter/subscribe", { email: email.trim() });
      setSubscribed(true);
      setEmail("");
    } catch {
      setError("Failed to subscribe. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <footer className="bg-stone-950 text-stone-50 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-8">
        <div className="grid md:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          <div className="md:col-span-5">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 mb-6">
              <span className="h-1.5 w-1.5 bg-lime-400" />
              newsletter
            </div>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-stone-50 leading-none">
              One email.{" "}
              <span className="text-stone-500">Monday mornings.</span>
            </h3>
            <p className="mt-4 text-sm text-stone-400 max-w-sm leading-relaxed">
              New roles, platform updates, career tactics. No spam, unsubscribe
              in one click.
            </p>
            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 inline-flex items-center gap-2 text-sm text-lime-400 font-mono"
              >
                <span className="h-1.5 w-1.5 bg-lime-400" />
                subscribed. see you monday.
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  placeholder="your@email.com"
                  required
                  className="flex-1 min-w-0 w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md text-sm text-stone-50 placeholder-stone-600 focus:outline-none focus:border-lime-400 transition-colors"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="shrink-0 w-full sm:w-auto justify-center px-5 py-3 bg-lime-400 text-stone-950 text-sm font-bold rounded-md hover:bg-lime-300 transition-colors flex items-center gap-2 disabled:opacity-50 border-0 cursor-pointer"
                >
                  {submitting ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <Send className="w-3.5 h-3.5" />
                  )}
                  Subscribe
                </button>
              </form>
            )}
            {error && <p className="text-xs text-red-400 mt-2">{error}</p>}
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-stone-500 mb-4">
                Platform
              </h4>
              <ul className="space-y-3">
                <li><Link to="/jobs" className={linkClass}>Jobs</Link></li>
                <li><Link to="/external-jobs" className={linkClass}>External jobs</Link></li>
                <li><Link to="/roadmaps" className={linkClass}>Roadmaps</Link></li>
                <li><Link to="/companies" className={linkClass}>Companies</Link></li>
                <li><Link to="/ats-score" className={linkClass}>ATS scorer</Link></li>
                <li><Link to="/opensource" className={linkClass}>Open source</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-stone-500 mb-4">
                For recruiters
              </h4>
              <ul className="space-y-3">
                <li><Link to="/for-recruiters" className={linkClass}>Overview</Link></li>
                <li><Link to="/register" className={linkClass}>Post a job</Link></li>
                <li><Link to="/recruiters" className={linkClass}>Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-stone-500 mb-4">
                Account
              </h4>
              <ul className="space-y-3">
                <li><Link to="/register" className={linkClass}>Start free</Link></li>
                <li><Link to="/login" className={linkClass}>Sign in</Link></li>
                <li><Link to="/blog" className={linkClass}>Blog</Link></li>
                <li><Link to="/contact" className={linkClass}>Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-8">
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <img src="/logo.png" alt="InternHack" className="h-7 w-7 rounded-md object-contain" />
              <span className="absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 bg-lime-400" />
            </div>
            <span className="text-sm font-bold tracking-tight text-stone-50">
              InternHack
            </span>
          </div>

          <div className="flex items-center gap-1">
            <a
              href={SOCIAL_LINKS.email}
              className="p-2.5 text-stone-400 hover:text-stone-50 hover:bg-white/5 rounded-md transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-stone-400 hover:text-stone-50 hover:bg-white/5 rounded-md transition-colors"
              aria-label="X / Twitter"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-stone-400 hover:text-stone-50 hover:bg-white/5 rounded-md transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="mailto:mrsachinchaurasiya@gmail.com?subject=Bug%20Report%20at%20InternHack"
              className="ml-2 inline-flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-md text-xs font-mono text-stone-300 hover:text-stone-50 hover:bg-white/10 transition-colors no-underline"
            >
              <MessageSquarePlus className="w-3.5 h-3.5" />
              report a bug
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-stone-600">
          <p>
            &copy; {new Date().getFullYear()} InternHack. built in india.
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <Link
          to="/terms"
             onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-stone-400 transition-colors no-underline"
              >
                Terms
          </Link>

          <Link
          to="/privacy"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="hover:text-stone-400 transition-colors no-underline"
                >
                  Privacy
          </Link>

          <Link
          to="/refund"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                 className="hover:text-stone-400 transition-colors no-underline"
                 >
                  Refunds
          </Link>

          <Link
               to="/shipping"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="hover:text-stone-400 transition-colors no-underline"
                  >
                    Shipping
          </Link>

          <Link
              to="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="hover:text-stone-400 transition-colors no-underline"
          >
              Contact
          </Link>
        </div>
        </div>
      </div>
    </footer>
  );
}
