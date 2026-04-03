export default function Footer() {
  return (
    <footer className="bg-[#111111] text-gray-400 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
          {/* Logo col */}
          <div className="col-span-2 md:col-span-1">
            <div className="bg-[#FFC300] text-black font-extrabold text-sm px-3 py-1.5 rounded tracking-widest uppercase inline-block mb-4">
              SLICE
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              The platform built for independent pizzeria owners.
            </p>
          </div>

          {[
            { heading: "Product", links: ["Online Ordering", "Phone Order Taking", "Marketing", "Branded Boxes"] },
            { heading: "Company", links: ["About", "Careers", "Press", "Blog"] },
            { heading: "Resources", links: ["Case Studies", "Help Center", "API Docs", "Status"] },
            { heading: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookie Policy"] },
          ].map((col) => (
            <div key={col.heading}>
              <p className="text-white font-bold text-sm uppercase tracking-wider mb-3">{col.heading}</p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">© 2024 Slice. All rights reserved.</p>
          <p className="text-xs text-gray-600">Built for independent pizzeria owners everywhere.</p>
        </div>
      </div>
    </footer>
  );
}
