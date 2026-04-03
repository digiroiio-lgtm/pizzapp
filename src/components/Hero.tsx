export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-20 md:pt-24 md:pb-32">
      {/* Background gradient blob */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-red-50 opacity-60 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-orange-50 opacity-60 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-700 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              Now in Early Access
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
              The app built for{" "}
              <span className="text-red-600">real pizzerias.</span>
            </h1>

            <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-lg">
              Stop paying 30% commissions to delivery apps. Own your customers
              and orders with PizzApp.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#early-access"
                className="inline-flex items-center px-7 py-3.5 rounded-full bg-red-600 text-white font-semibold text-base hover:bg-red-700 transition-colors shadow-lg shadow-red-200"
              >
                Get Early Access
              </a>
              <a
                href="#features"
                className="inline-flex items-center px-7 py-3.5 rounded-full border-2 border-gray-200 text-gray-700 font-semibold text-base hover:border-red-300 hover:text-red-600 transition-colors"
              >
                Book Demo
              </a>
            </div>

            <p className="mt-5 text-sm text-gray-400">
              No credit card required · Free during early access
            </p>
          </div>

          {/* Dashboard mockup */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-200 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 aspect-[4/3]">
              {/* Fake dashboard UI */}
              <div className="absolute inset-0 p-5 flex flex-col gap-3">
                {/* Top bar */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="h-4 w-32 rounded-full bg-white/10" />
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-2 mt-1">
                  {[
                    { label: "Orders Today", value: "47", color: "text-green-400" },
                    { label: "Revenue", value: "£1,240", color: "text-blue-400" },
                    { label: "Avg Time", value: "28m", color: "text-yellow-400" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-xl bg-white/10 p-3">
                      <p className="text-white/50 text-xs">{stat.label}</p>
                      <p className={`font-bold text-lg ${stat.color}`}>{stat.value}</p>
                    </div>
                  ))}
                </div>

                {/* Orders list */}
                <div className="flex-1 rounded-xl bg-white/5 p-3 space-y-2">
                  <p className="text-white/40 text-xs font-medium uppercase tracking-wide">
                    Live Orders
                  </p>
                  {[
                    { name: "Margherita × 2", status: "Preparing", time: "2m ago", statusColor: "bg-yellow-400" },
                    { name: "Pepperoni × 1", status: "Out for delivery", time: "8m ago", statusColor: "bg-blue-400" },
                    { name: "BBQ Chicken × 3", status: "Delivered", time: "15m ago", statusColor: "bg-green-400" },
                    { name: "Veggie Special × 1", status: "New order", time: "Just now", statusColor: "bg-red-400" },
                  ].map((order) => (
                    <div
                      key={order.name}
                      className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2"
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${order.statusColor}`} />
                        <span className="text-white/80 text-xs">{order.name}</span>
                      </div>
                      <div className="text-right">
                        <p className="text-white/50 text-xs">{order.status}</p>
                        <p className="text-white/30 text-xs">{order.time}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map placeholder */}
                <div className="rounded-xl bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-white/10 p-3 flex items-center gap-3">
                  <span className="text-2xl">🗺️</span>
                  <div>
                    <p className="text-white/70 text-xs font-medium">3 drivers active</p>
                    <p className="text-white/40 text-xs">All deliveries on track</p>
                  </div>
                  <div className="ml-auto flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <div key={i} className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-xs">
                        🛵
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-xl">
                📈
              </div>
              <div>
                <p className="text-xs text-gray-500">This month</p>
                <p className="text-sm font-bold text-gray-900">+35% more orders</p>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-xl">
                💰
              </div>
              <div>
                <p className="text-xs text-gray-500">Commission saved</p>
                <p className="text-sm font-bold text-gray-900">£2,400 / mo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
