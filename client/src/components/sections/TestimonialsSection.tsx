import { SectionReveal } from "@/components/SectionReveal";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "James Nguyen",
    descriptor: "Dance · Martial Arts · Strength Training",
    quote: "As someone who dances multiple times a week on top of strength training and martial arts, I had built up a lot of stress through my hips, shoulders and lower back. It was affecting performance and making movement feel restricted. Yuhan's approach was different to anything I had experienced before. It felt intentional, structured and actually targeted the problem. My hips felt freer, my shoulders moved better and training felt smoother.",
    highlight: "different to anything I had experienced before",
  },
  {
    name: "Cristian S",
    descriptor: "Bodybuilding",
    quote: "As a bodybuilder, small imbalances become big issues very quickly. I started seeing Yuhan when tight shoulders and hips were starting to affect my training and posing. The sessions were very targeted and made a real difference.",
    highlight: "small imbalances become big issues very quickly",
  },
  {
    name: "Fadi",
    descriptor: "Chronic Shoulder & Back Pain",
    quote: "I went to see Yuhan for ongoing shoulder and back pain that had been affecting sleep and daily movement. I felt a noticeable difference after the first session. My shoulder moved more freely, the back tightness eased off and I was not guarding every movement anymore.",
    highlight: "felt a noticeable difference after the first session",
  },
  {
    name: "Jean David Soto Martinez",
    descriptor: "Remedial & Sports Massage",
    quote: "I've been seeing Ninja Motion Therapies in Leichhardt for remedial massage and sports massage, and the results have been unreal. I originally booked in for back pain, neck pain, shoulder pain, and hip pain, but the rehab-focused approach went beyond what I expected.",
    highlight: "the results have been unreal",
  },
  {
    name: "Jordi Mazzone",
    descriptor: "Rugby League · NRL Pathway",
    quote: "I play rugby league and started seeing Yuhan in Leichhardt to stay on top of shoulder stiffness and improve my foot mechanics during the season. The difference in recovery and how I pulled up between games was noticeable straight away. The work helped me stay consistent through the year, and I was fortunate enough to earn an opportunity with an NRL club.",
    highlight: "earned an opportunity with an NRL club",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} className="fill-[#D4AF37] text-[#D4AF37]" />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#0A0A0A]">
      <div className="container">
        <SectionReveal>
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#D4AF37]" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#D4AF37]" style={{ fontFamily: "var(--font-heading)" }}>
                Testimonials
              </span>
              <div className="w-8 h-px bg-[#D4AF37]" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white" style={{ fontFamily: "var(--font-heading)" }}>
              Real people. <span className="text-gradient-gold">Real results.</span>
            </h2>
            <p className="mt-3 text-white/40 text-sm">33 five-star Google reviews</p>
          </div>
        </SectionReveal>

        {/* Featured testimonial — Jordi */}
        <SectionReveal delay={100}>
          <div className="mb-8 p-6 md:p-8 rounded border border-[#D4AF37]/20 bg-[#D4AF37]/[0.03]">
            <Stars />
            <p className="mt-4 text-lg md:text-xl text-white/85 leading-relaxed italic" style={{ fontFamily: "var(--font-heading)" }}>
              "{TESTIMONIALS[4].quote}"
            </p>
            <p className="mt-3 text-sm text-[#D4AF37]">"{TESTIMONIALS[4].highlight}"</p>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                <span className="text-sm font-bold text-[#D4AF37]">{TESTIMONIALS[4].name[0]}</span>
              </div>
              <div>
                <p className="text-sm font-bold text-white">{TESTIMONIALS[4].name}</p>
                <p className="text-xs text-white/40">{TESTIMONIALS[4].descriptor}</p>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Other testimonials */}
        <div className="grid md:grid-cols-2 gap-4">
          {TESTIMONIALS.slice(0, 4).map((t, i) => (
            <SectionReveal key={t.name} delay={150 + i * 80}>
              <div className="p-5 rounded border border-white/[0.06] bg-white/[0.02] h-full card-glow">
                <Stars />
                <p className="mt-3 text-sm text-white/65 leading-relaxed">"{t.quote}"</p>
                <p className="mt-2 text-xs text-[#D4AF37]">"{t.highlight}"</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                    <span className="text-xs font-bold text-[#D4AF37]">{t.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-white/40">{t.descriptor}</p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={600}>
          <div className="text-center mt-8">
            <a
              href="https://google.com/maps/place/ninja+motion+therapies"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#D4AF37] hover:text-[#D4AF37]/80 transition-colors"
            >
              Read all 33 reviews on Google &rarr;
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
