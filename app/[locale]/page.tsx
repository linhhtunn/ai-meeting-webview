import Header from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import {
  SummarySection,
  OrgManagementSection,
  MeetingManagementSection,
} from "@/components/sections/features";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { CTABanner } from "@/components/sections/cta-banner";

export default function LandingPage() {
  return (
    <div className="font-sans overflow-x-hidden  text-black">
      <main>
        <div className="bg-[linear-gradient(180deg,#EAEDFF_0%,#FFFFFF_84.53%)]">
          <Header />
          <Hero />
          <Stats />
        </div>
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

