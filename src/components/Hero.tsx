export default function Hero() {
  return (
    <section className="bg-[#1c1c1c] text-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Build the pizza shop people
          <br />
          <span className="border-b-4 border-[#FFC300] pb-1">line up for.</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base md:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
          We&apos;ll work behind the scenes to bring you more orders, answer every phone
          call, improve operations, and deliver big savings on supplies.
        </p>

        {/* Label above image */}
        <p className="mt-10 text-xs font-extrabold tracking-widest uppercase text-[#FFC300]">
          Slice Family Members Get Up To:
        </p>

        {/* Image + stats row */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {/* Owner photo placeholder with overlay card */}
          <div className="relative w-72 md:w-80 flex-shrink-0">
            {/* Photo placeholder */}
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800 aspect-[3/4] w-full">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-8xl">👨‍🍳</span>
              </div>
            </div>
            {/* Statement card overlay */}
            <div className="absolute bottom-8 right-0 translate-x-1/4 bg-white text-black rounded-xl shadow-2xl p-4 w-52 text-left">
              <p className="text-xs font-extrabold uppercase tracking-wider text-gray-800 mb-2">
                Statement
              </p>
              <p className="text-xs text-gray-500">Amount to be paid to you:</p>
              <p className="text-2xl font-extrabold text-gray-900 my-1 flex items-center gap-1">
                <span className="inline-flex w-6 h-6 rounded-full bg-green-500 items-center justify-center text-white text-xs">↑</span>
                +$9,375.98
              </p>
              <p className="text-xs text-gray-500">
                You saved{" "}
                <span className="text-[#FFC300] font-bold">$2,846</span> this month with Slice
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-col gap-4 text-left">
            <p className="text-xl md:text-2xl font-bold text-gray-300">1,000+ more orders.</p>
            <div className="border-l-4 border-[#FFC300] pl-4">
              <p className="text-xl md:text-2xl font-extrabold text-white">$25,000+ more profit.</p>
            </div>
            <p className="text-xl md:text-2xl font-bold text-gray-300">2,000+ hours saved.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12" id="join">
          <a
            href="#"
            className="inline-block bg-[#FFC300] text-black font-extrabold uppercase tracking-widest text-sm px-8 py-4 hover:opacity-90 transition-opacity"
          >
            Join the Slice Family
          </a>
        </div>
      </div>
    </section>
  );
}
