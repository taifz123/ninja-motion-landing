/*
 * Design: Surgical Noir — Hero Section
 * Full viewport height, dark background with anatomical wireframe overlay.
 * Asymmetric 60/40 split on desktop. Bold Montserrat headline, gold accents.
 * Orange CTA button. Weighty fade-in animation on load.
 */

import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663489521805/a3fMW8WJpn7z6Aotfi6UaX/hero-bg-CCkKUhKHErarbRftLDPXZ3.webp";
const BOOKING_URL = "https://www.ninjamotiontherapies.com.au";

export function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-3xl">
          {/* Overline */}
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="w-12 h-px bg-[#D4AF37]" />
            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[#D4AF37]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Ninja Motion Therapies
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`transition-all duration-700 delay-150 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span
              className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              The{" "}
              <span className="text-gradient-gold">7-Day</span>{" "}
              Pain &{" "}
              <br className="hidden sm:block" />
              Movement{" "}
              <span className="text-[#FF6B00]">Reset</span>
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className={`mt-6 md:mt-8 text-lg md:text-xl text-white/75 leading-relaxed max-w-xl transition-all duration-700 delay-300 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            A biomechanics-led program to restore movement, reduce compensation,
            and build lasting function. Built on clinical reasoning, not generic
            stretching.
          </p>

          {/* CTA Buttons */}
          <div
            className={`mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-[450ms] ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer inline-flex items-center justify-center px-8 py-4 bg-[#FF6B00] text-white font-bold text-base rounded tracking-wide hover:bg-[#FF6B00]/90 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,107,0,0.3)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Book Your Assessment
            </a>
            <a
              href="#program"
              className="inline-flex items-center justify-center px-8 py-4 border border-[#D4AF37]/40 text-[#D4AF37] font-semibold text-base rounded hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-300"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Explore the Program
            </a>
          </div>

          {/* Trust indicators */}
          <div
            className={`mt-12 flex items-center gap-6 text-sm text-white/40 transition-all duration-700 delay-[600ms] ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span>20-30 min sessions</span>
            <span className="w-1 h-1 rounded-full bg-[#D4AF37]/50" />
            <span>7 progressive days</span>
            <span className="w-1 h-1 rounded-full bg-[#D4AF37]/50" />
            <span>Clinical biomechanics</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#problem" className="text-[#D4AF37]/50 hover:text-[#D4AF37] transition-colors">
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
}
