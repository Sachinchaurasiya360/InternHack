import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"
import { HeroGeometric } from "../../components/ui/shape-landing-hero"
import { AudienceSection } from "../../components/AudienceSection"
import { FeaturesSection } from "../../components/FeaturesSection"
import { HowItWorksSection } from "../../components/HowItWorksSection"
import { PricingSection } from "../../components/PricingSection"
import { TestimonialsSection } from "../../components/TestimonialsSection"
import { CTASection } from "../../components/CTASection"
import { FAQSection, FAQ_ITEMS } from "../../components/FAQSection"
import { DemoVideoSection } from "../../components/DemoVideoSection"
import { SEO } from "../../components/SEO"
import { canonicalUrl } from "../../lib/seo.utils"
import { faqSchema, websiteSchema, platformOrganizationSchema } from "../../lib/structured-data"

export default function LandingPage(){
    return(
      
        <div className="font-sans bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50 pt-16 md:pt-0">
           
            <SEO
              title="Free ATS Resume Scorer, Internships & Career Roadmaps for Students"
              description="Score your resume with AI, browse 1,200+ curated internships, follow developer career roadmaps, and get placed. Trusted by students at IITs, NITs, and 200+ colleges. Free to start."
              canonicalUrl={canonicalUrl("/")}
              structuredData={[
                websiteSchema(),
                platformOrganizationSchema(),
                faqSchema(FAQ_ITEMS),
              ]}
            />
            <Navbar/>
            <HeroGeometric/>
            <DemoVideoSection/>
            <AudienceSection/>
            <FeaturesSection/>
            <HowItWorksSection/>
            <PricingSection/>
            <TestimonialsSection/>
            <FAQSection/>
            <CTASection/>
            <Footer/>
        </div>
    )
}
