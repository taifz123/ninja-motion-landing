import { SectionReveal } from "@/components/SectionReveal";

const PROBLEM_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663489521805/a3fMW8WJpn7z6Aotfi6UaX/problem-section-bg-B97cwHH9YL7BxnkmbAq4Za.webp";

export function ProblemSection() {
  return (
    <section id="problem" className="relative py-24 md:py-32 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0">
        <img src={PROBLEM_BG} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-[#0A0A0A]/85" />
      </div>

      <div className="container relative z-10">
        <SectionReveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#FF6B00]" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#FF6B00]" style={{ fontFamily: "var(--font-heading)" }}>
              The Real Problem
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
            Most people are treating{" "}
            <span className="text-[#FF6B00]">the wrong thing.</span>
          </h2>
          <p className="mt-3 text-lg text-white/50">That is why the pain keeps coming back.</p>
        </SectionReveal>

        <div className="gold-rule my-12 md:my-16" />

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
          <SectionReveal delay={100}>
            <div className="space-y-5 text-white/70 text-base leading-relaxed">
              <p>Your shoulder pain is usually not just a shoulder problem. Your jaw tension is usually not just a jaw problem. Your neck pain is usually not just a neck problem. Your lower back pain is rarely fixed by stretching your hamstrings.</p>
              <p>The body compensates. One area gets stuck. Another area takes over. Then you keep chasing symptoms instead of fixing the pattern driving them.</p>
            </div>
          </SectionReveal>

          <SectionReveal delay={200}>
            <div className="space-y-4">
              {[
                "Stretching what feels tight without asking why it is tight",
                "Mobilising joints without understanding the restriction",
                "Random exercises with no structure or progression",
                "Treating symptoms instead of systems",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded bg-white/[0.03] border border-[#FF6B00]/10">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-[#FF6B00]/15 flex items-center justify-center shrink-0">
                    <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
                  </span>
                  <span className="text-white/60 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>

        <SectionReveal delay={300}>
          <div className="mt-12 md:mt-16 p-6 md:p-8 rounded border border-[#D4AF37]/20 bg-[#D4AF37]/[0.03]">
            <p className="text-lg md:text-xl text-white/90 leading-relaxed italic" style={{ fontFamily: "var(--font-heading)" }}>
              "This program is different. It is built on clinical biomechanics and designed to address the root causes of movement dysfunction — not just the surface-level symptoms."
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
