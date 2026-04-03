const footerLinks = {
  Product: ["Ordering", "Marketing", "Delivery", "Platform"],
  Pricing: ["Starter", "Growth", "Enterprise", "Compare Plans"],
  Resources: ["Blog", "Docs", "API", "Status"],
  Company: ["About", "Careers", "Contact", "Press"],
};

export default function Footer() {
  return (
    <footer id="about" className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Logo + tagline */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🍕</span>
              <span className="font-extrabold text-xl text-white">
                Pizz<span className="text-red-500">App</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed">
              The all-in-one platform for independent pizzerias to grow, sell
              and delight customers.
            </p>
            <div className="flex gap-3 mt-5">
              {["𝕏", "in", "f"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-xs hover:bg-red-600 hover:text-white transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm hover:text-red-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal row */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">© 2024 PizzApp. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
