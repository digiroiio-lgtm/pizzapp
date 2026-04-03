const brands = [
  "Stelton Pizza", "New York Pizza", "Pizza Mia", "Roma Pizza",
  "Spinachio Pizza", "Luv N Oven", "Levy's", "La Mia Cucina",
  "5-5 Brooklyn", "Bella Note", "Angelina's", "314 Pizza",
];

export default function Metrics() {
  const marqueeItems = [...brands, ...brands];
  return (
    <div className="bg-[#1c1c1c] border-t border-gray-700 py-8 overflow-hidden">
      <div className="flex gap-16 animate-marquee whitespace-nowrap">
        {marqueeItems.map((brand, i) => (
          <span key={i} className="text-gray-400 font-bold text-sm uppercase tracking-widest flex-shrink-0">
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
}
