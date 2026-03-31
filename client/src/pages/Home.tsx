import { Navbar } from "@/components/Navbar";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { PainAreasSection } from "@/components/sections/PainAreasSection";
import { WhatYouGetSection } from "@/components/sections/WhatYouGetSection";
import { WhyItWorksSection } from "@/components/sections/WhyItWorksSection";
import { InstagramReelSection } from "@/components/sections/InstagramReelSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { StickyBar } from "@/components/StickyBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <MarqueeStrip />
      <ProblemSection />
      <PainAreasSection />
      <WhatYouGetSection />
      <WhyItWorksSection />
      <InstagramReelSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <FAQSection />
      <FinalCTASection />
      <ServicesSection />
      <FooterSection />
      <StickyBar />
    </div>
  );
}
