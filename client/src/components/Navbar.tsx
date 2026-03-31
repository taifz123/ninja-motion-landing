import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const STRIPE_LINK = import.meta.env.VITE_STRIPE_PAYMENT_LINK || "#!";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Program", href: "#program" },
    { label: "Pain Areas", href: "#pain-areas" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Services", href: "#services" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#D4AF37]/10"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-3 group">
          <img src="/logo.png" alt="Ninja Motion Therapies" className="h-10 md:h-12 w-auto" />
          <span
            className="text-lg md:text-xl font-extrabold tracking-tight text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            NINJA MOTION
          </span>
          <span className="hidden sm:inline text-xs font-medium tracking-[0.15em] uppercase text-[#D4AF37]">
            Therapies
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/60 hover:text-[#D4AF37] transition-colors duration-300 tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href={STRIPE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer px-5 py-2.5 bg-[#FF6B00] text-white text-sm font-semibold rounded tracking-wide hover:bg-[#e06000] transition-colors"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Get the Reset — $47
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-[#0A0A0A]/98 backdrop-blur-md border-t border-[#D4AF37]/10">
          <div className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-white/80 hover:text-[#D4AF37] transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href={STRIPE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer mt-2 px-5 py-3 bg-[#FF6B00] text-white text-sm font-semibold rounded text-center tracking-wide"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Get the Reset — $47
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
