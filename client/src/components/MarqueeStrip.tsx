export function MarqueeStrip() {
  const items = [
    "Shoulder Pain",
    "Lower Back Pain",
    "Neck Tension",
    "TMJ Relief",
    "Hip Pain",
    "Ribcage Mechanics",
    "Sports Injury Rehab",
    "Ninja Motion Therapies",
    "Leichhardt Sydney",
  ];

  const repeated = [...items, ...items];

  return (
    <div className="bg-[#D4AF37]/[0.06] border-y border-[#D4AF37]/10 py-3 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="mx-6 text-xs font-semibold tracking-[0.15em] uppercase text-[#D4AF37]/50">
            {item}
            <span className="ml-6 text-[#D4AF37]/20">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
