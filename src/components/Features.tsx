const features = [
  {
    icon: "🛒",
    title: "Online Ordering",
    description:
      "Accept orders directly from your website. No commission, no middleman — just pure profit.",
    highlights: ["Custom branded storefront", "Real-time order tracking", "Multiple payment methods"],
  },
  {
    icon: "📞",
    title: "Phone Ordering",
    description:
      "Manage phone orders seamlessly in one dashboard. Never lose a call-in order again.",
    highlights: ["One-click order entry", "Customer history lookup", "SMS confirmations"],
  },
  {
    icon: "📢",
    title: "Marketing Automation",
    description:
      "Automated SMS and email campaigns to bring customers back. Turn one-time buyers into regulars.",
    highlights: ["Automated re-engagement", "Birthday & loyalty offers", "Campaign analytics"],
  },
  {
    icon: "🚗",
    title: "Delivery Management",
    description:
      "Track drivers and manage deliveries in real-time. Keep customers informed every step of the way.",
    highlights: ["Live driver tracking", "Estimated arrival times", "Automated customer updates"],
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-red-50 text-red-600 text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Everything you need to grow
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            One platform to replace the patchwork of apps you&apos;re juggling today.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm hover:shadow-lg hover:border-red-100 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-red-50 group-hover:bg-red-100 flex items-center justify-center text-2xl transition-colors">
                  {f.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900">{f.title}</h3>
                  <p className="mt-2 text-gray-500 leading-relaxed">{f.description}</p>
                  <ul className="mt-4 space-y-1.5">
                    {f.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
