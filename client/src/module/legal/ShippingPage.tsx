import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO";

export default function ShippingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
      <SEO
        title="Shipping & Delivery Policy"
        description="Shipping and Delivery Policy for InternHack — a digital platform with instant access."
      />
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto px-4 pt-28 pb-16">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Shipping & Delivery Policy</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">Last updated: March 17, 2026</p>

        <div className="space-y-8 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Digital Platform</h2>
            <p>
              InternHack is a fully digital platform. We do not sell or ship any physical products. All services,
              features, and content are delivered electronically through the Platform.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Instant Access</h2>
            <p>
              Upon successful payment for a subscription plan, premium features are activated instantly on your
              account. There is no waiting period or shipping delay. You can access all premium features immediately
              after payment confirmation.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">What You Receive</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Unlimited access to AI-powered tools (ATS scoring, resume generation, cover letters, LaTeX editor)</li>
              <li>Full access to the HR contact directory and email campaign tools</li>
              <li>Unlimited mock interviews and skill tests</li>
              <li>Priority access to new features</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Activation Issues</h2>
            <p>
              If your premium features are not activated within 10 minutes of a successful payment, please contact
              us at{" "}
              <a href="mailto:internhack.xyz@gmail.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                internhack.xyz@gmail.com
              </a>{" "}
              with your payment receipt or transaction ID. We will resolve the issue within 24 hours.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
