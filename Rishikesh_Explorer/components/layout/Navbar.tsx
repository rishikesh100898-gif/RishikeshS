"use client";

import { useState } from "react";

const navItems = [
{ label: "About", href: "#about" },
{ label: "Build", href: "#build" },
{ label: "Learn", href: "#learn" },
{ label: "Music", href: "#music" },
{ label: "Write", href: "#write" },
{ label: "Gallery", href: "#gallery" },
];

export default function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);

return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a
          href="#"
          className="text-lg font-semibold tracking-[0.2em] transition-opacity hover:opacity-70"
        >
          RISHIKESH
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Connect Button */}
        <a
          href="#connect"
          className="hidden rounded-full border border-white/15 px-5 py-2 text-sm transition-all hover:border-white/40 hover:bg-white hover:text-black md:block"
        >
          Connect
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 md:hidden"
          aria-label="Toggle navigation"
        >
          <span className="text-xl">
            {menuOpen ? "×" : "☰"}
          </span>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-black/95 px-6 py-6 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg text-zinc-300 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#connect"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full border border-white/15 px-5 py-3 text-center text-sm"
            >
              Connect
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
