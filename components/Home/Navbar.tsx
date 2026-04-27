'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '/#about' },
    { name: 'What We Build', href: '/#whatwebuild' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Contact', href: '/contact', isButton: true },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-100 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 mt-4">
        {/* Main Navbar Container */}
        <div className="bg-[#FAF7EF]/90 backdrop-blur-md border border-[#E5D9B6] rounded-full px-6 py-3 flex items-center justify-between shadow-sm">
          <Link
            href="/"
            className="text-xl font-medium tracking-tight text-[#2D2D2D]"
          >
            Lumora<span className="text-[#B39359]">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#B39359] ${
                  link.isButton
                    ? 'bg-[#2D2D2D] text-[#FAF7EF] px-5 py-2 rounded-full hover:bg-[#454545]'
                    : 'text-[#6B6658]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle Button */}
          <button
            type="button"
            className="md:hidden flex flex-col gap-1.5 p-2 z-110"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {/* Simple CSS Hamburger */}
            <span
              className={`h-0.5 w-6 bg-[#2D2D2D] transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`h-0.5 w-6 bg-[#2D2D2D] ${isOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`h-0.5 w-6 bg-[#2D2D2D] transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`md:hidden absolute left-4 right-4 mt-2 transition-all duration-300 ease-in-out origin-top ${
            isOpen
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="bg-[#FAF7EF] border border-[#E5D9B6] rounded-4xl p-6 shadow-2xl flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium py-2 border-b border-[#E5D9B6]/50 last:border-0 ${
                  link.isButton ? 'text-[#B39359]' : 'text-[#2D2D2D]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
