"use client";

import { useState } from "react";

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="early-access" className="bg-red-600 py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Join the pizza revolution
          </h2>
          <p className="mt-4 text-lg text-red-100">
            Get early access to PizzApp — free during our launch period. No credit card required.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white rounded-2xl p-10 text-center shadow-2xl">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-gray-900">You&apos;re on the list!</h3>
            <p className="mt-2 text-gray-500">
              We&apos;ll be in touch very soon with your early access details.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Marco Rossi"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="marco@pizzeria.co.uk"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+44 7700 000000"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                />
              </div>
              <div>
                <label htmlFor="postcode" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Postcode
                </label>
                <input
                  id="postcode"
                  type="text"
                  placeholder="M1 1AE"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                />
              </div>
            </div>

            <div>
              <label htmlFor="pizzeria" className="block text-sm font-semibold text-gray-700 mb-1.5">
                Pizzeria Name
              </label>
              <input
                id="pizzeria"
                type="text"
                required
                placeholder="Marco's Pizzeria"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-red-600 text-white font-bold text-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-200 mt-2"
            >
              Join Early Access →
            </button>

            <p className="text-center text-xs text-gray-400">
              By signing up you agree to our{" "}
              <a href="#" className="underline hover:text-gray-600">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="underline hover:text-gray-600">
                Privacy Policy
              </a>
              .
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
