import { SectionReveal } from "@/components/SectionReveal";

const CTA_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663489521805/a3fMW8WJpn7z6Aotfi6UaX/cta-section-bg-PXpnthWQ5jBsH38YM33Mns.webp";
const STRIPE_LINK = import.meta.env.VITE_STRIPE_PAYMENT_LINK || "#!";

export function FinalCTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={CTA_BG} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-[#0A0A0A]/85" />
      </div>

      <div className="container relative z-10">
        <SectionReveal>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
              You do not need more{" "}
              <span className="text-[#FF6B00]">random stretches.</span>
              <br />
              You need the right{" "}
              <span className="text-gradient-gold">starting point.</span>
            </h2>

            <p className="mt-6 text-base text-white/60 leading-relaxed max-w-lg mx-auto">
              If your lower back keeps tightening up, your neck is always stiff, your jaw keeps clenching, your hip keeps pinching, or your shoulder never feels right — stop wasting time on the wrong fix. This guide shows you where to start.
            </p>

            <div className="mt-6 flex items-center justify-center gap-4 text-sm text-white/40">
              <span>7 days</span>
              <span className="w-1 h-1 rounded-full bg-[#D4AF37]/40" />
              <span>10 minutes a day</span>
              <span className="w-1 h-1 rounded-full bg-[#D4AF37]/40" />
              <span>$47 once</span>
            </div>

            <a
              href={STRIPE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer mt-8 inline-flex items-center justify-center px-10 py-5 bg-[#FF6B00] text-white font-bold text-lg rounded tracking-wide hover:bg-[#e06000] transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,107,0,0.3)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Get the 7-Day Reset — $47
            </a>

            <p className="mt-6 text-sm text-white/35">
              Questions? DM{" "}
              <a
                href="https://www.instagram.com/ninjamotiontherapies_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4AF37] hover:text-[#D4AF37]/80 transition-colors"
              >
                @ninjamotiontherapies_
              </a>{" "}
              on Instagram — Yuhan personally responds.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
