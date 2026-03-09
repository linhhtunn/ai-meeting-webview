import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { SummarySection, OrgManagementSection, MeetingManagementSection } from "@/components/sections/features";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { CTABanner } from "@/components/sections/cta-banner";

export default function LandingPage() {
  return (
    <div className="font-sans overflow-x-hidden bg-white text-black">
      <Header />
      <main>
        <Hero />
        <Stats />
        <SummarySection />
        <OrgManagementSection />
        <MeetingManagementSection />
        <Testimonials />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
