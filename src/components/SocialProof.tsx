const testimonials = [
  {
    quote:
      "PizzApp completely transformed our business. We went from losing 30% on every Deliveroo order to owning our customer relationships. Our profit margins are finally where they should be.",
    name: "Marco Rossi",
    role: "Owner, Rossi's Pizzeria",
    location: "Manchester",
    avatar: "MR",
    rating: 5,
  },
  {
    quote:
      "The phone ordering dashboard alone saved us hours every week. Our staff can take orders in seconds and everything is tracked automatically. Genuinely life-changing for our team.",
    name: "Sarah Patel",
    role: "Manager, Slice & Co.",
    location: "Birmingham",
    avatar: "SP",
    rating: 5,
  },
  {
    quote:
      "The SMS marketing campaigns are incredible. We sent one re-engagement message and generated £800 in orders that same evening. The ROI is insane.",
    name: "James O'Brien",
    role: "Owner, The Pizza Yard",
    location: "Leeds",
    avatar: "JO",
    rating: 5,
  },
];

const stats = [
  { value: "2,500+", label: "orders processed" },
  { value: "£180k", label: "saved in commissions" },
  { value: "98%", label: "customer satisfaction" },
];

export default function SocialProof() {
  return (
    <section id="pricing" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-red-50 text-red-600 text-sm font-medium mb-4">
            Social Proof
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Trusted by pizza shops across the UK
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Real results from real pizzerias using PizzApp every day.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-gray-100 bg-gray-50 p-8 shadow-sm flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed flex-1 italic">&ldquo;{t.quote}&rdquo;</p>

              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white text-sm font-bold">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">
                    {t.role} · {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="rounded-2xl bg-gradient-to-r from-red-600 to-red-700 p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-4xl md:text-5xl font-extrabold text-white">{s.value}</p>
                <p className="mt-1 text-red-200 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
