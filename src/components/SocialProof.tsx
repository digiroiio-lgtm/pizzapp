const testimonials = [
  { name: "Rafael", shop: "Stacy's Restaurant & Pizzeria", quote: "Thank God for Slice for giving our customers the easiest way to order.", bg: "bg-gray-800" },
  { name: "Anthony", shop: "New York Pizza Restaurant", quote: "The register is so simple. It's easy. It's not complicated. Anyone can use it.", bg: "bg-amber-700" },
  { name: "Jerry", shop: "Prima Pizza Kitchen", quote: "Slice has been a partner that has helped me out through the success of Prima.", bg: "bg-gray-600" },
  { name: "Nadia", shop: "Atlantis Pizza & Brew", quote: "Slice has allowed us to open a new location and embrace technology.", bg: "bg-orange-800" },
  { name: "Laura", shop: "Mangia Pizza & Catering", quote: "To all the owners: Just dive in with Slice. Trust me, you'll get your time back.", bg: "bg-red-900" },
  { name: "Tomas", shop: "Oak Pizzeria", quote: "I've never had a support system like what Slice provides.", bg: "bg-yellow-900" },
  { name: "Yung", shop: "TASTE Pizzeria", quote: "Slice has definitely made our life easier around here.", bg: "bg-green-900" },
  { name: "Frank", shop: "Mustachi's Pizzeria", quote: "Slice let us focus on making pizzas, and everything else was handled.", bg: "bg-blue-900" },
];

const statCards = [
  { value: "$1.7M+", label: "in total pizza sales" },
  { value: "73K+", label: "total orders fulfilled" },
];

export default function SocialProof() {
  return (
    <section className="bg-[#f5f0e8] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-10">
          Real owners. Real results.
        </h2>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {/* Stat cards first */}
          {statCards.map((s) => (
            <div
              key={s.value}
              className="flex-shrink-0 w-48 rounded-xl bg-gray-900 text-white flex flex-col justify-end p-4 aspect-[3/4]"
            >
              <p className="text-3xl font-extrabold text-[#FFC300]">{s.value}</p>
              <p className="text-sm text-gray-300 mt-1">{s.label}</p>
            </div>
          ))}
          {/* Testimonial photo cards */}
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`flex-shrink-0 w-48 rounded-xl ${t.bg} text-white flex flex-col justify-end p-4 aspect-[3/4] relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="relative">
                <p className="text-xs leading-snug font-medium">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-xs text-gray-400 mt-2">— {t.name}, {t.shop}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
