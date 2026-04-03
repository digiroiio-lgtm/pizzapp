const platformItems = [
  {
    icon: "🍕",
    title: "Menu Management",
    description: "Build and update your menu in minutes. Control prices, items and categories instantly.",
  },
  {
    icon: "📊",
    title: "Order Dashboard",
    description: "See all orders in one place — online, phone, collection and delivery — in real time.",
  },
  {
    icon: "🖥️",
    title: "POS Integration",
    description: "Connects seamlessly with your existing point-of-sale system. No double entry.",
  },
  {
    icon: "📍",
    title: "Driver Tracking",
    description: "Live GPS tracking for every driver. Customers see their pizza moving in real time.",
  },
  {
    icon: "💬",
    title: "SMS Marketing",
    description: "Send targeted promotions to past customers. Average 4× ROI on every campaign.",
  },
  {
    icon: "⭐",
    title: "Loyalty System",
    description: "Built-in points and rewards to keep customers coming back again and again.",
  },
];

export default function Platform() {
  return (
    <section id="platform" className="bg-gray-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-red-50 text-red-600 text-sm font-medium mb-4">
            Platform
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            A complete platform for{" "}
            <span className="text-red-600">modern pizzerias</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Every tool you need to run, grow, and delight — under one roof.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {platformItems.map((item) => (
            <div
              key={item.title}
              className="group bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md hover:border-red-100 transition-all duration-300 flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-50 group-hover:bg-red-100 flex items-center justify-center text-xl transition-colors">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-900">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
