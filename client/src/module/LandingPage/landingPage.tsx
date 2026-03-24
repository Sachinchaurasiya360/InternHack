import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"
import { HeroSection } from "../../components/HeroSection"
import { StatsSection } from "../../components/StatsSection"
import { FeaturesSection } from "../../components/FeaturesSection"
import { HowItWorksSection } from "../../components/HowItWorksSection"
import { PricingSection } from "../../components/PricingSection"
import { CTASection } from "../../components/CTASection"
import { FAQSection, FAQ_ITEMS } from "../../components/FAQSection"
import { SEO } from "../../components/SEO"
import { canonicalUrl } from "../../lib/seo.utils"
import { faqSchema } from "../../lib/structured-data"

export default function LandingPage(){
    return(
        <div className="font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <SEO
              description="InternHack is an AI-powered career platform for students. Browse curated internships, score your resume with ATS AI, follow career roadmaps, and connect with recruiters."
              canonicalUrl={canonicalUrl("/")}
              structuredData={faqSchema(FAQ_ITEMS)}
            />
            <Navbar/>
            <HeroSection/>
            <StatsSection/>
            <FeaturesSection/>
            <HowItWorksSection/>
            <PricingSection/>
            <FAQSection/>
            <CTASection/>
            <Footer/>
        </div>
    )
}
