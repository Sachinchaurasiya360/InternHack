import { useState } from "react";
import { Mail, Globe, Clock3, Bug, Loader2, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO";
import { Button } from "../../components/ui/button";
import api from "../../lib/axios";

const hand = { fontFamily: "'Caveat', cursive" };

const cards = [
  { icon: Mail, title: "Email", body: "For enquiries, support, or partnerships — we reply within 24-48 hours.", link: { href: "mailto:mrsachinchaurasiya@gmail.com", label: "mrsachinchaurasiya@gmail.com" } },
  { icon: Clock3, title: "Support Hours", body: "Monday to Saturday, 10:00 AM - 7:00 PM IST. We aim to respond within 24-48 hours on business days." },
  { icon: Bug, title: "Report an Issue", body: "Found a bug or vulnerability? Email us with steps to reproduce — we take all reports seriously.", link: { href: "mailto:mrsachinchaurasiya@gmail.com", label: "mrsachinchaurasiya@gmail.com" } },
  { icon: Globe, title: "Social Media", links: [{ href: "https://x.com/internhack_xyz", label: "Twitter / X" }, { href: "https://www.linkedin.com/company/internhack", label: "LinkedIn" }] },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true); setError(""); setSuccess(false);
    try { await api.post("/contact", formData); setSuccess(true); setFormData({ name: "", email: "", subject: "", message: "" }); }
    catch { setError("Something went wrong. Please try again or email us directly."); }
    finally { setLoading(false); }
  };

  const inputCls = "w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:border-lime-500 focus:outline-none focus:ring-1 focus:ring-lime-500";
  const cardCls = "rounded-2xl border border-gray-200 dark:border-gray-900 bg-white/70 dark:bg-[#070707] backdrop-blur-sm p-6 shadow-sm hover:border-lime-400/40 dark:hover:border-lime-500/40 transition-all";

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#070707]">
      <SEO title="Contact Us" description="Get in touch with the InternHack team for support, feedback, or business enquiries." />
      <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600&display=swap" rel="stylesheet" />
      <Navbar />
      <main className="flex-1 max-w-5xl mx-auto px-4 pt-28 pb-16">

        <div className="mb-12 text-center">
          <p style={hand} className="text-lime-500 dark:text-lime-400 text-xl mb-2">reach out anytime</p>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">Contact Us</h1>
          <p className="text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">We would love to hear from you — support, feedback, partnerships, or general enquiries.</p>
        </div>

        <form onSubmit={handleSubmit} className={`${cardCls} mb-10 space-y-4`}>
          <h2 style={hand} className="text-2xl text-gray-900 dark:text-white">Send us a message</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div><label className="mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400">Name</label><input name="name" value={formData.name} onChange={handleChange} required className={inputCls} /></div>
            <div><label className="mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400">Email</label><input name="email" type="email" value={formData.email} onChange={handleChange} required className={inputCls} /></div>
          </div>
          <div><label className="mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400">Subject</label><input name="subject" value={formData.subject} onChange={handleChange} required className={inputCls} /></div>
          <div><label className="mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400">Message</label><textarea name="message" rows={5} value={formData.message} onChange={handleChange} required className={`${inputCls} resize-y`} /></div>
          {error && <div className="flex items-center gap-2 rounded-lg bg-red-50 dark:bg-red-900/20 px-3 py-2 text-xs text-red-600 dark:text-red-400"><AlertCircle className="h-3.5 w-3.5 flex-shrink-0" />{error}</div>}
          {success && <div className="flex items-center gap-2 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 px-3 py-2 text-xs text-emerald-600 dark:text-emerald-400"><CheckCircle className="h-3.5 w-3.5 flex-shrink-0" />Message sent! We will get back to you within 24-48 hours.</div>}
          <Button type="submit" variant="mono" size="lg" disabled={loading} className="w-full">
            {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</> : <><Send className="h-4 w-4" /> Send Message</>}
          </Button>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {cards.map(({ icon: Icon, title, body, link, links }) => (
            <section key={title} className={cardCls}>
              <div className="flex items-center gap-2 mb-3"><Icon className="w-5 h-5 text-lime-500 dark:text-lime-400" /><h2 style={hand} className="text-2xl text-gray-900 dark:text-white">{title}</h2></div>
              {body && <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">{body}</p>}
              {link && <a href={link.href} className="mt-3 inline-block text-sm text-lime-500 dark:text-lime-400 hover:underline">{link.label}</a>}
              {links && <ul className="space-y-2 text-sm">{links.map(l => <li key={l.href}><a href={l.href} target="_blank" rel="noopener noreferrer" className="text-lime-500 dark:text-lime-400 hover:underline">{l.label}</a></li>)}</ul>}
            </section>
          ))}
        </div>

      </main>
      <Footer />
    </div>
  );
}