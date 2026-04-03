"use client";
import { useState } from "react";

const tabs = [
  {
    label: "Online ordering",
    emoji: "🖥️",
    content: {
      headline: "Your own branded online store, zero commissions.",
      body: "We build and manage your custom online ordering website so customers order directly from you — keeping 100% of the revenue in your pocket.",
    },
  },
  {
    label: "Phone order taking",
    emoji: "📞",
    content: {
      headline: "Never miss a call or an order again.",
      body: "Our team answers every phone call for your pizzeria, takes the order, and enters it into your system — 24/7.",
    },
  },
  {
    label: "Marketing services",
    emoji: "📣",
    content: {
      headline: "Bring customers back automatically.",
      body: "We run SMS campaigns, email blasts, and social ads so you can focus on making great pizza while we fill the seats.",
    },
  },
  {
    label: "Branded pizza boxes",
    emoji: "📦",
    content: {
      headline: "Custom branded boxes at wholesale prices.",
      body: "Every order is a marketing opportunity. We supply high-quality, custom-printed boxes that make your brand unforgettable.",
    },
  },
  {
    label: "Customer support",
    emoji: "🎧",
    content: {
      headline: "We handle customer issues so you don't have to.",
      body: "Refunds, complaints, late orders — our team resolves customer issues professionally, protecting your reputation.",
    },
  },
  {
    label: "Community",
    emoji: "🤝",
    content: {
      headline: "A network of 15,000+ pizzeria owners.",
      body: "Get access to an exclusive community of independent pizzeria owners sharing tips, suppliers, and success stories.",
    },
  },
];

export default function Platform() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-10">
          Explore the jobs we do for Slice family members.
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-0 border-b border-gray-200 mb-8">
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActive(i)}
              className={`px-4 py-3 text-sm font-semibold transition-colors whitespace-nowrap ${
                active === i
                  ? "border-b-2 border-black text-black"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-4">
              {tabs[active].content.headline}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {tabs[active].content.body}
            </p>
            <a
              href="#"
              className="inline-block mt-6 bg-[#FFC300] text-black font-extrabold uppercase tracking-widest text-xs px-6 py-3 hover:opacity-90 transition-opacity"
            >
              Learn More
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#FFC300]/30 to-orange-200 aspect-video flex items-center justify-center">
            <span className="text-7xl">{tabs[active].emoji}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
