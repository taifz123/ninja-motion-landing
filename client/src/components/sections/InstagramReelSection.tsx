import { SectionReveal } from "@/components/SectionReveal";
import { Instagram, Play, ArrowRight } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/ninjamotiontherapies_/";
const INSTAGRAM_EMBED = "https://www.instagram.com/ninjamotiontherapies_/embed/";

export function InstagramReelSection() {
  return (
    <section id="instagram" className="py-20 md:py-28 bg-[#0D0C0A]">
      <div className="container">
        <SectionReveal>
          <div className="text-center mb-10 md:mb-14">
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
          <div className="max-w-[420px] mx-auto px-4 sm:px-0">
            <div className="rounded-lg border border-white/[0.08] bg-white/[0.02] overflow-hidden card-glow">
              <iframe
                src={INSTAGRAM_EMBED}
                className="w-full"
                style={{ minHeight: "480px", border: "none" }}
                loading="lazy"
                title="Ninja Motion Therapies on Instagram"
              />
            </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={150}>
          <div className="mt-10 max-w-md mx-auto px-4 sm:px-0">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 sm:p-5 rounded-lg border border-white/[0.08] bg-white/[0.02] hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/[0.03] transition-all duration-300"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center shrink-0">
                <Instagram size={24} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm sm:text-base font-bold text-white truncate" style={{ fontFamily: "var(--font-heading)" }}>
                  @ninjamotiontherapies_
                </p>
                <p className="text-xs sm:text-sm text-white/40 mt-0.5">
                  Reels, tips & client transformations
                </p>
              </div>
              <ArrowRight size={18} className="text-white/30 group-hover:text-[#D4AF37] transition-colors shrink-0" />
            </a>
          </div>
        </SectionReveal>

        <SectionReveal delay={200}>
          <div className="text-center mt-8">
            <a
              href={INSTAGRAM_URL + "reels/"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#D4AF37] hover:text-[#D4AF37]/80 transition-colors"
            >
              <Play size={14} className="fill-current" />
              Watch all reels
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
