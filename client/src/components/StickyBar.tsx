import { useEffect, useState } from "react";

const STRIPE_LINK = import.meta.env.VITE_STRIPE_PAYMENT_LINK || "#!";

export function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ease-out ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-[rgba(8,7,6,0.96)] backdrop-blur-xl border-t border-[#D4AF37]/10">
        <div className="container flex items-center justify-between h-16">
          <span className="text-2xl font-extrabold text-[#D4AF37]" style={{ fontFamily: "var(--font-heading)" }}>
            $47
          </span>
          <a
            href={STRIPE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer px-6 py-2.5 bg-[#FF6B00] text-white text-sm font-bold rounded tracking-wide hover:bg-[#e06000] transition-all duration-200"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Get the Reset
          </a>
        </div>
      </div>
    </div>
  );
}
