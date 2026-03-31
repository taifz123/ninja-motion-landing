import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663489521805/a3fMW8WJpn7z6Aotfi6UaX/hero-bg-CCkKUhKHErarbRftLDPXZ3.webp";
const STRIPE_LINK = import.meta.env.VITE_STRIPE_PAYMENT_LINK || "#!";

export function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const base = "transition-all duration-700 ease-out";
  const show = "opacity-100 translate-y-0";
  const hide = "opacity-0 translate-y-4";

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0">
        <img src={HERO_BG} alt="" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-[#0A0A0A]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/50" />
      </div>

      <div className="container relative z-10 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-3xl">
          {/* Overline */}
          <div className={`flex items-center gap-3 mb-6 ${base} ${loaded ? show : hide}`}>
            <div className="w-12 h-px bg-[#D4AF37]" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#D4AF37]" style={{ fontFamily: "var(--font-heading)" }}>
              Ninja Motion Therapies
            </span>
          </div>

          {/* Headline */}
          <h1 className={`${base} delay-150 ${loaded ? show : hide}`}>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold leading-[1.05] tracking-tight text-white" style={{ fontFamily: "var(--font-heading)" }}>
              Still in pain?{" "}
              <span className="text-gradient-gold">Stop guessing.</span>
              <br className="hidden sm:block" />
              Fix what is actually{" "}
              <span className="text-[#FF6B00]">driving it.</span>
            </span>
          </h1>

          {/* Sub */}
          <p className={`mt-6 md:mt-8 text-base md:text-lg text-white/70 leading-relaxed max-w-xl ${base} delay-300 ${loaded ? show : hide}`}>
            This is my 7-Day Movement Reset — built from treating real people with lower back pain, neck tension, jaw pain, hip pinching and shoulder issues every week. The same protocol I use with $150/session clients, yours for the price of a single gym visit.
          </p>

          {/* CTAs */}
          <div className={`mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 ${base} delay-[450ms] ${loaded ? show : hide}`}>
            <a
              href={STRIPE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer inline-flex items-center justify-center px-8 py-4 bg-[#FF6B00] text-white font-bold text-base rounded tracking-wide hover:bg-[#e06000] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,107,0,0.25)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Get the 7-Day Reset — $47
            </a>
            <a
              href="#program"
              className="inline-flex items-center justify-center px-8 py-4 border border-[#D4AF37]/30 text-[#D4AF37] font-semibold text-base rounded hover:border-[#D4AF37]/70 hover:bg-[#D4AF37]/5 transition-all duration-300"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Explore the Program
            </a>
          </div>

          {/* Trust row */}
          <div className={`mt-10 flex items-center gap-4 text-sm text-white/40 ${base} delay-[600ms] ${loaded ? show : hide}`}>
            <span>Instant PDF download</span>
            <span className="w-1 h-1 rounded-full bg-[#D4AF37]/40" />
            <span>One payment</span>
            <span className="w-1 h-1 rounded-full bg-[#D4AF37]/40" />
            <span>Yours forever</span>
          </div>

          {/* Stats */}
          <div className={`mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-lg ${base} delay-[750ms] ${loaded ? show : hide}`}>
            {[
              { num: "33", label: "Five-star reviews" },
              { num: "7", label: "Days" },
              { num: "10", label: "Minutes a day" },
              { num: "$47", label: "Once only" },
            ].map((s) => (
              <div key={s.label} className="text-center sm:text-left">
                <div className="text-2xl font-extrabold text-[#D4AF37]" style={{ fontFamily: "var(--font-heading)" }}>{s.num}</div>
                <div className="text-xs text-white/40 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#problem" className="text-[#D4AF37]/40 hover:text-[#D4AF37] transition-colors">
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
}
