import { Zap, Send, Loader2 } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import api from "../lib/axios";

const linkClass =
  "text-sm text-gray-400 hover:text-gray-200 transition-colors no-underline";

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
    <footer className="bg-gray-950 text-white pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Newsletter Banner */}
        <div className="relative rounded-2xl bg-white/5 border border-white/10 p-8 md:p-10 mb-14 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="font-display text-xl font-bold mb-1">
                Stay in the loop
              </h3>
              <p className="text-sm text-gray-400">
                Get the latest jobs, career tips, and platform updates delivered to your inbox.
              </p>
            </div>
            <div className="w-full md:w-auto">
              {subscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-sm text-emerald-400 font-medium py-3 px-5 bg-emerald-500/10 rounded-xl border border-emerald-500/20"
                >
                  Thanks for subscribing!
                </motion.div>
              ) : (
                <div>
                  <form onSubmit={handleSubscribe} className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setError(""); }}
                      placeholder="your@email.com"
                      required
                      className="px-4 py-2.5 bg-white/10 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors w-60"
                    />
                    <button
                      type="submit"
                      disabled={submitting}
                      className="px-5 py-2.5 bg-white text-gray-950 text-sm font-semibold rounded-xl hover:bg-gray-100 transition-colors flex items-center gap-2 disabled:opacity-50"
                    >
                      {submitting ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
                      Subscribe
                    </button>
                  </form>
                  {error && <p className="text-xs text-red-400 mt-2">{error}</p>}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white/10 flex items-center justify-center rounded-xl">
                <Zap className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="font-display text-lg font-bold">InternHack</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Prepare. Practice. Placed.
              <br />
              Your all-in-one career platform.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
              Platform
            </h4>
            <ul className="space-y-3">
              <li><Link to="/jobs" className={linkClass}>Jobs</Link></li>
              <li><Link to="/external-jobs" className={linkClass}>External Jobs</Link></li>
              <li><Link to="/careers" className={linkClass}>Career Roadmaps</Link></li>
              <li><Link to="/companies" className={linkClass}>Companies</Link></li>
            </ul>
          </div>

          {/* For Recruiters */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
              For Recruiters
            </h4>
            <ul className="space-y-3">
              <li><Link to="/register" className={linkClass}>Post a Job</Link></li>
              <li><Link to="/recruiters" className={linkClass}>Dashboard</Link></li>
            </ul>
          </div>

          {/* Get Started */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
              Get Started
            </h4>
            <ul className="space-y-3">
              <li><Link to="/register" className={linkClass}>Sign Up</Link></li>
              <li><Link to="/login" className={linkClass}>Sign In</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} InternHack. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Built for students & recruiters
          </p>
        </div>
      </div>
    </footer>
  );
}
