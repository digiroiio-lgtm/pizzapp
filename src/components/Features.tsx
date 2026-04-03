export default function Features() {
  return (
    <section className="bg-[#f5f0e8] py-16 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Join{" "}
          <span className="underline decoration-2 underline-offset-4">15,000</span>{" "}
          independent pizzerias already
          <br />
          thriving on Slice!
        </h2>
        <p className="mt-4 text-gray-600 text-base max-w-xl mx-auto">
          The Slice Family Membership is how most independent pizzerias hire Slice.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {/* Card 1 */}
          <div>
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-orange-300 to-red-400 aspect-[4/3] flex items-center justify-center">
              <span className="text-8xl">🍕</span>
            </div>
            <h3 className="mt-4 text-lg font-extrabold text-gray-900">
              We handle the work, you get the results.
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Slice manages your online order channels, answers your phone, delivers your boxes, and runs your marketing.
            </p>
          </div>

          {/* Card 2 */}
          <div>
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-300 to-orange-400 aspect-[4/3] flex items-center justify-center">
              <span className="text-8xl">💰</span>
            </div>
            <h3 className="mt-4 text-lg font-extrabold text-gray-900">
              We put money back in your pocket.
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Slice family members get the best deals on boxes, delivery services, marketing, hardware, and much more!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
