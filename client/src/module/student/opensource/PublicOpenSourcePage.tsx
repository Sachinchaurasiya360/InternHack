import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
import { SEO } from "../../../components/SEO";
import { canonicalUrl } from "../../../lib/seo.utils";
import OpenSourceLandingPage from "./OpenSourceLandingPage";
import { OssContributionHeatmap } from "../../../components/OssContributionHeatmap";
import { useAuthStore } from "../../../lib/auth.store";

export default function PublicOpenSourcePage() {
  const { isAuthenticated, user } = useAuthStore();
  const isStudent = isAuthenticated && user?.role === "STUDENT";

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-gray-950">
      <SEO
        title="Open Source Discovery"
        description="Discover beginner-friendly open-source repositories, explore GSoC organizations, track programs like LFX, Outreachy, and Hacktoberfest, and make your first contribution - all for free."
        keywords="open source, GSoC, Google Summer of Code, LFX mentorship, Outreachy, MLH fellowship, Hacktoberfest, open source programs, beginner open source, first pull request, good first issues"
        canonicalUrl={canonicalUrl("/opensource")}
      />
      <Navbar />
      
      {isStudent && (
        <div className="pt-24 pb-8 bg-stone-50 dark:bg-stone-950 border-b border-stone-200 dark:border-white/10">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-xl font-bold text-stone-900 dark:text-white mb-4">Your Open Source Activity</h2>
            <OssContributionHeatmap />
          </div>
        </div>
      )}

      <OpenSourceLandingPage />
      <Footer />
    </div>
  );
}
