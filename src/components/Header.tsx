"use client";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-[#FFC300] text-black text-sm font-medium py-2 text-center px-4">
        Refer a local shop, earn $1,500!{" "}
        <a href="#" className="underline font-semibold">
          Learn more.
        </a>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <a href="#" className="flex-shrink-0">
              <div className="bg-[#FFC300] text-black font-extrabold text-sm px-3 py-1.5 rounded tracking-widest uppercase">
                SLICE
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-7">
              {["FAMILY MEMBERSHIP", "PRODUCTS", "PRICING", "RESOURCES", "CASE STUDIES"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-xs font-bold text-gray-900 hover:text-gray-600 tracking-wide uppercase"
                >
                  {item}
                </a>
              ))}
              <button aria-label="Search" className="text-gray-700 hover:text-gray-900">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                </svg>
              </button>
            </nav>

            {/* Auth + CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a href="#" className="text-xs font-bold tracking-wide uppercase text-gray-900 hover:text-gray-600">
                LOGIN
              </a>
              <a
                href="#join"
                className="inline-flex items-center px-5 py-2 border-2 border-black text-black text-xs font-extrabold tracking-wide uppercase hover:bg-[#FFC300] hover:border-[#FFC300] transition-colors"
              >
                LEARN MORE
              </a>
            </div>

            {/* Mobile burger */}
            <button
              className="md:hidden p-2 text-gray-700"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-3">
            {["Family Membership", "Products", "Pricing", "Resources", "Case Studies"].map((link) => (
              <a
                key={link}
                href="#"
                className="block text-sm font-bold text-gray-800 hover:text-gray-600 py-1 uppercase tracking-wide"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href="#join"
              className="block text-center mt-2 px-5 py-2.5 bg-[#FFC300] text-black text-sm font-extrabold uppercase tracking-wide hover:opacity-90 transition-opacity"
              onClick={() => setMenuOpen(false)}
            >
              Learn More
            </a>
          </div>
        )}
      </header>
    </>
  );
}
