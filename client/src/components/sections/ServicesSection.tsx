import { SectionReveal } from "@/components/SectionReveal";
import { MapPin, Video } from "lucide-react";

const BOOKING_URL = "https://ninja-motion-therapies.au4.cliniko.com/bookings#location";

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#0D0C0A]">
      <div className="container">
        <SectionReveal>
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#D4AF37]" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#D4AF37]" style={{ fontFamily: "var(--font-heading)" }}>
                Beyond the Guide
              </span>
              <div className="w-8 h-px bg-[#D4AF37]" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white" style={{ fontFamily: "var(--font-heading)" }}>
              Your movement journey{" "}
              <span className="text-gradient-gold">doesn&apos;t end here</span>
            </h2>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <SectionReveal delay={100}>
            <div className="p-6 md:p-8 rounded border border-white/[0.06] bg-white/[0.02] card-glow h-full">
              <div className="w-12 h-12 rounded bg-[#D4AF37]/10 flex items-center justify-center mb-5">
                <MapPin size={22} className="text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                In-Clinic Services
              </h3>
              <p className="text-sm text-white/55 leading-relaxed mb-4">
                Comprehensive biomechanics assessments, hands-on manual therapy, individualised corrective exercise programming, and ongoing movement coaching. Every session is built around how your body actually moves — not a generic template.
              </p>
              <p className="text-xs text-white/30">Leichhardt, Inner West Sydney</p>
            </div>
          </SectionReveal>

          <SectionReveal delay={200}>
            <div className="p-6 md:p-8 rounded border border-white/[0.06] bg-white/[0.02] card-glow h-full">
              <div className="w-12 h-12 rounded bg-[#FF6B00]/10 flex items-center justify-center mb-5">
                <Video size={22} className="text-[#FF6B00]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                Online Rehab Consults
              </h3>
              <p className="text-sm text-white/55 leading-relaxed mb-4">
                Cannot make it into the clinic? We offer online biomechanics consultations and remote programming for clients anywhere in Australia and globally. Same assessment depth. Same clinical reasoning. Delivered through video consultation and a personalised program built for your body.
              </p>
              <p className="text-xs text-white/30">Available Australia-wide & globally</p>
            </div>
          </SectionReveal>
        </div>

        <SectionReveal delay={300}>
          <div className="text-center mt-10">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-[#D4AF37]/40 text-[#D4AF37] font-semibold text-base rounded hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-300"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Book Your Assessment
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
