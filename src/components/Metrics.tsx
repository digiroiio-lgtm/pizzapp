const metrics = [
  {
    value: "+35%",
    label: "more direct orders",
    description: "Customers order directly from your site, not a platform",
    icon: "📈",
    gradient: "from-red-50 to-orange-50",
    border: "border-red-100",
    valueColor: "text-red-600",
  },
  {
    value: "£20k",
    label: "extra yearly revenue",
    description: "Average extra revenue our pizzerias make in year one",
    icon: "💷",
    gradient: "from-green-50 to-emerald-50",
    border: "border-green-100",
    valueColor: "text-green-600",
  },
  {
    value: "1,000+",
    label: "hours saved",
    description: "Per year on admin tasks, manual orders and phone calls",
    icon: "⏱️",
    gradient: "from-blue-50 to-indigo-50",
    border: "border-blue-100",
    valueColor: "text-blue-600",
  },
];

export default function Metrics() {
  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((m) => (
            <div
              key={m.value}
              className={`relative rounded-2xl bg-gradient-to-br ${m.gradient} border ${m.border} p-8 shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className="text-4xl mb-4">{m.icon}</div>
              <p className={`text-5xl font-extrabold tracking-tight ${m.valueColor}`}>
                {m.value}
              </p>
              <p className="mt-1 text-lg font-semibold text-gray-800">{m.label}</p>
              <p className="mt-2 text-sm text-gray-500">{m.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
