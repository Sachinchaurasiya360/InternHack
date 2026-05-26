import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO";

export default function ShippingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
      <SEO
        title="Shipping & Delivery Policy"
        description="Shipping and Delivery Policy for InternHack, a digital platform with instant access."
      />
      <Navbar />
      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="rounded-3xl border border-stone-200/70 dark:border-stone-700/70 bg-stone-50 dark:bg-stone-950/70 p-8 sm:p-10 shadow-sm shadow-stone-200/40 dark:shadow-black/20">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400 font-semibold mb-4">
              Policy overview
            </p>
            <h1 className="text-4xl sm:text-5xl font-semibold text-gray-950 dark:text-white leading-tight">
              Shipping & Delivery Policy
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-7">
              InternHack provides digital access only. There are no physical products to ship, and your paid features become available as soon as payment completes.
            </p>
            <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">Last updated: March 17, 2026</p>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr,0.8fr]">
          <div className="space-y-10 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
            <section className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-gray-900 p-8 shadow-sm shadow-stone-200/30 dark:shadow-black/30">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Digital delivery only</h2>
              <p>
                InternHack is a fully digital service. You will not receive a physical shipment. All access, features,
                and premium content are delivered electronically through your account and the platform interface.
              </p>
            </section>

            <section className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-gray-900 p-8 shadow-sm shadow-stone-200/30 dark:shadow-black/30">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Instant access</h2>
              <p>
                After successful payment, premium features activate immediately. There is no shipping carrier, fulfillment
                warehouse, or delivery window to wait for — your experience starts right away.
              </p>
            </section>

            <section className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-gray-900 p-8 shadow-sm shadow-stone-200/30 dark:shadow-black/30">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">What you receive</h2>
              <ul className="list-disc pl-5 space-y-3">
                <li>Unlimited access to AI-powered tools for resumes, ATS review, and cover letter generation.</li>
                <li>Premium mock interviews, skill assessments, and recruiter resources.</li>
                <li>Priority access to new features, templates, and learning materials.</li>
                <li>Secure access to your account and data through the platform.</li>
              </ul>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-indigo-200/80 dark:border-indigo-500/30 bg-indigo-50 dark:bg-indigo-950/40 p-7 shadow-sm shadow-indigo-200/20 dark:shadow-black/20">
              <h2 className="text-xl font-semibold text-indigo-900 dark:text-white mb-3">Need help?</h2>
              <p className="text-sm text-indigo-900 dark:text-gray-200 leading-relaxed">
                If your premium features are not available within 10 minutes of payment, contact our support team with your receipt or transaction ID.
              </p>
              <a
                href="mailto:mrsachinchaurasiya@gmail.com"
                className="mt-5 inline-flex items-center rounded-2xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-indigo-500/20 hover:bg-indigo-700 transition-colors"
              >
                Contact support
              </a>
            </div>

            <div className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-gray-900 p-7 shadow-sm shadow-stone-200/30 dark:shadow-black/30">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Quick summary</h2>
              <dl className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
                <div>
                  <dt className="font-semibold text-gray-900 dark:text-white">Delivery</dt>
                  <dd>Digital access immediately after payment.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900 dark:text-white">Physical products</dt>
                  <dd>None. InternHack is delivered entirely online.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900 dark:text-white">Support response</dt>
                  <dd>Support issues are handled within 24 hours.</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
