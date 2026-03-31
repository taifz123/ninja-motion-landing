import { SectionReveal } from "@/components/SectionReveal";
import { CheckCircle } from "lucide-react";

const ANATOMY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663489521805/a3fMW8WJpn7z6Aotfi6UaX/anatomy-pattern-P8KEtASkRDnDnHa7SMhQM7.webp";

const DAYS = [
  { day: "Day 1", title: "Lower Back Reset", desc: "Why stretching your hamstrings is usually the wrong answer, and what to do instead." },
  { day: "Day 2", title: "Neck Tension Reset", desc: "How to reduce the load going into your neck by changing what your ribcage is doing." },
  { day: "Day 3", title: "Jaw & TMJ Reset", desc: "Why jaw tension often starts in the neck, and how to actually address it properly." },
  { day: "Day 4", title: "Hip Mechanics Reset", desc: "What is really behind that hip pinch and why stretching alone usually does not fix it." },
  { day: "Day 5", title: "Thoracic & Ribcage Reset", desc: "Open up the middle of the body so your neck, shoulders and lower back stop compensating." },
  { day: "Day 6", title: "Shoulder Reset", desc: "Understand why shoulder pain is usually a full-body issue and how to start restoring better movement." },
  { day: "Day 7", title: "Integration Day", desc: "Tie it all together so the changes hold and your body stops dropping back into the same pattern." },
];

const INCLUDED = [
  "Clear exercise photos",
  "Simple instructions you can actually follow",
  "The reason behind every drill",
  "Beginner-friendly structure",
  "A full sequence you can repeat anytime",
  "The same movement principles used with real clients in clinic",
];

export function WhatYouGetSection() {
  return (
    <section id="program" className="relative py-24 md:py-32 bg-[#0A0A0A]">
      {/* Subtle anatomy watermark */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-[0.04] pointer-events-none hidden lg:block">
        <img src={ANATOMY_IMG} alt="" className="h-full w-full object-contain object-right" />
      </div>

      <div className="container relative z-10">
        <SectionReveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#D4AF37]" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#D4AF37]" style={{ fontFamily: "var(--font-heading)" }}>
              What&apos;s Inside
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
            What is inside the{" "}
            <span className="text-gradient-gold">7-Day Reset</span>
          </h2>
          <p className="mt-4 text-base text-white/60 max-w-2xl leading-relaxed">
            This is not a random list of mobility drills. It is a step-by-step sequence designed to build on itself, so your body actually starts changing instead of just feeling temporary relief.
          </p>
        </SectionReveal>

        <div className="gold-rule my-12" />

        {/* 7 Days Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {DAYS.map((d, i) => (
            <SectionReveal key={d.day} delay={i * 60}>
              <div className="p-5 rounded border border-white/[0.06] bg-white/[0.02] hover:border-[#D4AF37]/30 transition-all duration-300 card-glow h-full">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold tracking-[0.15em] uppercase text-[#FF6B00] bg-[#FF6B00]/10 px-2.5 py-1 rounded" style={{ fontFamily: "var(--font-heading)" }}>
                    {d.day}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  {d.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">{d.desc}</p>
              </div>
            </SectionReveal>
          ))}

          {/* Integration card spans full on lg */}
        </div>

        {/* Included Inside */}
        <SectionReveal delay={500}>
          <div className="mt-14 md:mt-16">
            <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              Included inside
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {INCLUDED.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#D4AF37] mt-0.5 shrink-0" />
                  <span className="text-sm text-white/70">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
