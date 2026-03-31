import { SectionReveal } from "@/components/SectionReveal";
import { X, Check } from "lucide-react";

const STRIPE_LINK = import.meta.env.VITE_STRIPE_PAYMENT_LINK || "#";

export function PriceComparisonSection() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-[#0D0C0A]">
      <div className="container">
        <SectionReveal>
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#D4AF37]" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#D4AF37]" style={{ fontFamily: "var(--font-heading)" }}>
                Honest Comparison
              </span>
              <div className="w-8 h-px bg-[#D4AF37]" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white" style={{ fontFamily: "var(--font-heading)" }}>
              The honest comparison
            </h2>
            <p className="mt-4 text-base text-white/50 max-w-xl mx-auto">
              You can spend hundreds jumping from treatment to treatment trying to figure it out. Or you can start with a system that actually explains what may be driving your pain.
            </p>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-0 max-w-4xl mx-auto">
          {/* In-person */}
          <SectionReveal delay={100}>
            <div className="p-8 md:p-10 border border-white/[0.06] md:border-r-0 rounded-t md:rounded-l md:rounded-tr-none bg-white/[0.02]">
              <div className="mb-6">
                <span className="text-xs font-semibold tracking-[0.15em] uppercase text-white/40">In-person session</span>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-5xl md:text-6xl font-extrabold text-white" style={{ fontFamily: "var(--font-heading)" }}>$160</span>
                  <span className="text-white/40 text-sm ml-2">per session</span>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  "One session",
                  "Usually focused on one main issue",
                  "Cost adds up fast",
                  "You still need to rebook",
                  "You still need to travel",
                  "Limited time each session",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <X size={16} className="text-white/25 shrink-0" />
                    <span className="text-sm text-white/40">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* Guide */}
          <SectionReveal delay={200}>
            <div className="p-8 md:p-10 border border-[#D4AF37]/30 rounded-b md:rounded-r md:rounded-bl-none bg-[#D4AF37]/[0.03] relative">
              <div className="absolute top-4 right-4">
                <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#0A0A0A] bg-[#D4AF37] px-2.5 py-1 rounded">
                  Best Value
                </span>
              </div>
              <div className="mb-6">
                <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#D4AF37]">7-Day Movement Reset</span>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-5xl md:text-6xl font-extrabold text-[#D4AF37]" style={{ fontFamily: "var(--font-heading)" }}>$47</span>
                  <span className="text-white/40 text-sm ml-2">one payment</span>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  "Covers 5 major pain areas",
                  "Yours forever",
                  "Start today",
                  "Follow it at home",
                  "Revisit it anytime",
                  "Understand your body better",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check size={16} className="text-[#D4AF37] shrink-0" />
                    <span className="text-sm text-white/70">{item}</span>
                  </div>
                ))}
              </div>
              <a
                href={STRIPE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer mt-8 w-full inline-flex items-center justify-center px-8 py-4 bg-[#FF6B00] text-white font-bold text-base rounded tracking-wide hover:bg-[#e06000] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,107,0,0.25)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Get the 7-Day Reset — $47
              </a>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
