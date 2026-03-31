import { useState } from "react";
import { SectionReveal } from "@/components/SectionReveal";
import { Activity, Frown, Bone, Footprints, Hand } from "lucide-react";

const PAIN_AREAS = [
  {
    id: "lower-back",
    label: "Lower Back",
    icon: Bone,
    insight: "If you keep stretching your hamstrings and your back still keeps tightening up, you are probably treating the wrong thing. This guide helps you understand how your ribcage, pelvis and pressure mechanics are feeding into lower back pain.",
  },
  {
    id: "neck",
    label: "Neck Tension",
    icon: Activity,
    insight: "If your neck and traps are always tight, it is often because your ribcage is not expanding and moving properly. So your neck ends up doing work it should never be doing.",
  },
  {
    id: "jaw",
    label: "Jaw / TMJ",
    icon: Frown,
    insight: "A lot of jaw pain is coming from the neck, especially the SCM, not just the jaw itself. If you only keep massaging the jaw, you miss what is driving it.",
  },
  {
    id: "hips",
    label: "Hip Pinching",
    icon: Footprints,
    insight: "That pinch at the front of the hip is not always tightness. A lot of the time the joint is getting jammed because your body cannot create space or control load properly.",
  },
  {
    id: "shoulders",
    label: "Shoulder Pain",
    icon: Hand,
    insight: "Shoulder pain is one of the biggest areas people get wrong. If your ribcage, clavicle, scapula and thoracic spine are not doing their job, the shoulder gets smashed for it.",
  },
];

export function PainAreasSection() {
  const [active, setActive] = useState<string[]>([]);

  const toggle = (id: string) => {
    setActive((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  return (
    <section id="pain-areas" className="py-24 md:py-32 bg-[#0D0C0A]">
      <div className="container">
        <SectionReveal>
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#D4AF37]" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#D4AF37]" style={{ fontFamily: "var(--font-heading)" }}>
                Pain Areas
              </span>
              <div className="w-8 h-px bg-[#D4AF37]" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white" style={{ fontFamily: "var(--font-heading)" }}>
              Where is your pain{" "}
              <span className="text-[#FF6B00]">hitting you?</span>
            </h2>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {PAIN_AREAS.map((area, i) => {
            const Icon = area.icon;
            const isOpen = active.includes(area.id);
            return (
              <SectionReveal key={area.id} delay={i * 80}>
                <button
                  onClick={() => toggle(area.id)}
                  className={`w-full text-left p-5 rounded border transition-all duration-300 card-glow ${
                    isOpen
                      ? "border-[#D4AF37]/60 bg-[#D4AF37]/[0.05]"
                      : "border-white/10 bg-white/[0.02] hover:border-[#D4AF37]/30"
                  }`}
                >
                  <Icon size={28} className={`mb-3 transition-colors ${isOpen ? "text-[#D4AF37]" : "text-white/40"}`} />
                  <h3 className="text-base font-bold text-white mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                    {area.label}
                  </h3>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-60 opacity-100 mt-3" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm text-white/60 leading-relaxed">{area.insight}</p>
                  </div>
                </button>
              </SectionReveal>
            );
          })}
        </div>

        <SectionReveal delay={500}>
          <p className="text-center mt-10 text-white/40 text-sm">
            One guide. Five major pain areas. One better way to start.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
