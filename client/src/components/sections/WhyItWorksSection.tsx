import { SectionReveal } from "@/components/SectionReveal";

const TRANSFORM_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663489521805/a3fMW8WJpn7z6Aotfi6UaX/transformation-bg-m7f2gq5xGdoWp9MYs7U4hw.webp";

export function WhyItWorksSection() {
  return (
    <section id="benefits" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={TRANSFORM_BG} alt="" className="w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-[#0A0A0A]/90" />
      </div>

      <div className="container relative z-10">
        <SectionReveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#D4AF37]" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#D4AF37]" style={{ fontFamily: "var(--font-heading)" }}>
              Why It Works
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-3xl" style={{ fontFamily: "var(--font-heading)" }}>
            Why this works when{" "}
            <span className="text-[#FF6B00]">random rehab</span> does not
          </h2>
        </SectionReveal>

        <div className="gold-rule my-12" />

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <SectionReveal delay={100}>
            <div className="space-y-5 text-white/70 text-base leading-relaxed">
              <p>Most people are throwing exercises at the problem with no clue why they are doing them.</p>
              <p>That is why they keep bouncing between:</p>
              <div className="space-y-2 pl-4 border-l-2 border-[#FF6B00]/30">
                {["Stretching", "Foam rolling", "Massage balls", "Random YouTube videos", "Temporary relief"].map((item) => (
                  <p key={item} className="text-white/50 text-sm">{item}</p>
                ))}
              </div>
              <p>And then the pain comes straight back.</p>
            </div>
          </SectionReveal>

          <SectionReveal delay={200}>
            <div className="p-6 md:p-8 rounded border border-[#D4AF37]/20 bg-[#D4AF37]/[0.03]">
              <p className="text-lg text-white/80 mb-6 leading-relaxed">This guide is different because it follows an actual order.</p>
              <div className="space-y-6">
                {[
                  { label: "Right drill.", desc: "Each exercise is chosen for a specific biomechanical reason." },
                  { label: "Right time.", desc: "The sequence matters — each day builds on the last." },
                  { label: "Right reason.", desc: "You understand why you are doing each movement." },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#D4AF37]" style={{ fontFamily: "var(--font-heading)" }}>{item.label}</h4>
                      <p className="text-sm text-white/50 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-base text-white/70 leading-relaxed">
                That is how you stop chasing pain and start changing what is causing it.
              </p>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
