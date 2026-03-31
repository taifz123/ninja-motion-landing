export function FooterSection() {
  return (
    <footer className="py-12 bg-[#080706] border-t border-white/[0.04]">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-base font-extrabold text-white tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              NINJA MOTION
            </span>
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-[#D4AF37]">
              Therapies
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-white/30">
            <span>Leichhardt, Sydney</span>
            <span className="w-1 h-1 rounded-full bg-white/15" />
            <a
              href="https://www.instagram.com/ninjamotiontherapies_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF37]/60 hover:text-[#D4AF37] transition-colors"
            >
              @ninjamotiontherapies_
            </a>
          </div>
        </div>

        <div className="gold-rule my-6" />

        <p className="text-center text-xs text-white/20">
          &copy; {new Date().getFullYear()} Ninja Motion Therapies. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
