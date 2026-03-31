import { SectionReveal } from "@/components/SectionReveal";

const INSTAGRAM_URL = "https://www.instagram.com/ninjamotiontherapies_/";

export function InstagramReelSection() {
  return (
    <section id="instagram" className="py-24 md:py-32 bg-[#0D0C0A]">
      <div className="container">
        <SectionReveal>
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#D4AF37]" />
              <span
                className="text-xs font-semibold tracking-[0.2em] uppercase text-[#D4AF37]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                See It In Action
              </span>
              <div className="w-8 h-px bg-[#D4AF37]" />
            </div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Watch how it <span className="text-gradient-gold">works</span>
            </h2>
            <p className="mt-4 text-base text-white/50 max-w-xl mx-auto">
              Real movement. Real results. Follow along on Instagram.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={100}>
          <div className="max-w-md mx-auto">
            <div className="rounded border border-white/[0.06] bg-white/[0.02] overflow-hidden card-glow">
              <iframe
                src="https://www.instagram.com/reel/ninjamotiontherapies_/embed/"
                className="w-full"
                style={{ minHeight: "600px", border: "none" }}
                loading="lazy"
                allowTransparency
                allow="encrypted-media"
                title="Ninja Motion Therapies Instagram Reel"
              />
            </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={200}>
          <div className="text-center mt-10">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-[#D4AF37]/40 text-[#D4AF37] font-semibold text-base rounded hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-300"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Follow @ninjamotiontherapies_
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
