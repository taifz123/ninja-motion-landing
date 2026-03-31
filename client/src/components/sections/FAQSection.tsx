import { useState } from "react";
import { SectionReveal } from "@/components/SectionReveal";
import { ChevronDown } from "lucide-react";

const FAQ_DATA = [
  { q: "Is this for beginners?", a: "Yes. The drills are simple to follow and clearly explained. If you can lie on the floor and follow photos, you can do this." },
  { q: "Do I need equipment?", a: "Most of it is bodyweight based and easy to do at home. You need a floor and about 10 minutes." },
  { q: "What if I only have one pain area?", a: "That is fine. But most of these issues are connected, which is why the full sequence works best." },
  { q: "Is this just stretching?", a: "No. That is exactly what makes it different. This is a sequenced movement protocol built on clinical biomechanics." },
  { q: "Why not just use YouTube?", a: "Because YouTube gives you random exercises with no proper sequence and no reasoning. This guide follows an actual order — each day builds on the last." },
  { q: "How long do I get access?", a: "Forever. Buy it once and keep it. Instant PDF download — save it, print it, come back to it monthly." },
  { q: "What if I need extra help?", a: "Message Yuhan on Instagram at @ninjamotiontherapies_ — he personally responds and will point you in the right direction." },
];

export function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#0A0A0A]">
      <div className="container">
        <SectionReveal>
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#D4AF37]" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#D4AF37]" style={{ fontFamily: "var(--font-heading)" }}>
                FAQ
              </span>
              <div className="w-8 h-px bg-[#D4AF37]" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white" style={{ fontFamily: "var(--font-heading)" }}>
              Common questions
            </h2>
          </div>
        </SectionReveal>

        <div className="max-w-2xl mx-auto space-y-2">
          {FAQ_DATA.map((item, i) => (
            <SectionReveal key={i} delay={i * 60}>
              <div className="border border-white/[0.06] rounded overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-base font-semibold text-white pr-4">{item.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-[#D4AF37] shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    open === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-5 pb-5 text-sm text-white/55 leading-relaxed">{item.a}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
