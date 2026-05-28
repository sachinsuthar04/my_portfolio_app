
'use client';

import { useState } from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#blog', label: 'Blog' }
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-bg/85 border-b border-border/80">
      <div className="container h-14 flex items-center justify-between">
        <a href="#" className="font-semibold text-lg hover:text-brand transition-colors tracking-tight">
          Sachin Suthar
        </a>

        {/* Desktop Menu */}
        <div className="hidden sm:flex gap-6 text-sm font-medium">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-fg/80 hover:text-brand transition-colors duration-200">
              {l.label}
            </a>
          ))}
        </div>

        {/* Hamburger Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex sm:hidden p-2 text-fg/80 hover:text-brand transition-colors focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Glassmorphic Slide-down Drawer */}
      <div
        className={`sm:hidden fixed left-0 right-0 top-14 bg-bg/95 backdrop-blur-xl border-b border-border/80 shadow-2xl transition-all duration-300 ease-out origin-top ${
          isOpen
            ? 'opacity-100 translate-y-0 scale-y-100 pointer-events-auto'
            : 'opacity-0 -translate-y-4 scale-y-95 pointer-events-none'
        }`}
      >
        <div className="flex flex-col py-4 px-6 gap-3">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-fg/80 hover:text-brand py-2 border-b border-border/30 last:border-b-0 transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
