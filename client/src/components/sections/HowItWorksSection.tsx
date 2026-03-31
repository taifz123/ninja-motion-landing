import { SectionReveal } from "@/components/SectionReveal";

const STRIPE_LINK = import.meta.env.VITE_STRIPE_PAYMENT_LINK || "#!";

const STEPS = [
  { num: "01", title: "Buy the guide", desc: "You get instant access straight away. Instant PDF download after checkout." },
  { num: "02", title: "Follow the plan", desc: "Just go day by day. Around 10 minutes a day. No equipment needed." },
  { num: "03", title: "Start feeling the shift", desc: "Most people notice things changing fast when they finally start doing the right work instead of guessing." },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-[#0D0C0A]">
      <div className="container">
        <SectionReveal>
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#D4AF37]" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#D4AF37]" style={{ fontFamily: "var(--font-heading)" }}>
                How It Works
              </span>
              <div className="w-8 h-px bg-[#D4AF37]" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white" style={{ fontFamily: "var(--font-heading)" }}>
              Three steps. <span className="text-gradient-gold">Real change.</span>
            </h2>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {STEPS.map((step, i) => (
            <SectionReveal key={step.num} delay={i * 120}>
              <div className="text-center md:text-left">
                <span
                  className="text-6xl md:text-7xl font-extrabold text-[#D4AF37]/15 leading-none"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {step.num}
                </span>
                <h3 className="mt-2 text-xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-white/50 leading-relaxed">{step.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={400}>
          <div className="text-center mt-12">
            <a
              href={STRIPE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer inline-flex items-center justify-center px-8 py-4 bg-[#FF6B00] text-white font-bold text-base rounded tracking-wide hover:bg-[#e06000] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,107,0,0.25)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Get the 7-Day Reset — $47
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
