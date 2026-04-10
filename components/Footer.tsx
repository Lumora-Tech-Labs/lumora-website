import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAF7EF] border-t border-[#E5D9B6] pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-2xl font-medium tracking-tight text-[#2D2D2D] mb-6 block"
            >
              Lumora<span className="text-[#B39359]">.</span>
            </Link>
            <p className="text-[#6B6658] text-lg max-w-sm leading-relaxed">
              Architecting the future of intelligent systems through precision
              engineering and high-fidelity design.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[#2D2D2D] font-bold text-sm uppercase tracking-widest mb-6">
              Explore
            </h4>
            <ul className="space-y-4">
              {['About', 'Work', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/#${item.toLowerCase()}`}
                    className="text-[#6B6658] hover:text-[#B39359] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Presence */}
          <div>
            <h4 className="text-[#2D2D2D] font-bold text-sm uppercase tracking-widest mb-6">
              Presence
            </h4>
            <ul className="space-y-2 text-[#6B6658]">
              <li>Lahore, PK</li>
              <li className="pt-4 italic">
                Available for global Remote collaboration.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E5D9B6]/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#6B6658] text-sm">
            © {currentYear} Lumora Tech Labs. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm font-medium text-[#2D2D2D]">
            <a
              href="https://github.com/Lumora-Tech-Labs"
              className="hover:text-[#B39359] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/company/lumora-tech-labs"
              className="hover:text-[#B39359] transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
