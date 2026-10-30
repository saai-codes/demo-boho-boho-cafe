import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar, Sparkles } from 'lucide-react';
import { BISTRO_INFO } from '../data/bistroInfo';

export default function Navbar({ onOpenOriginalCards }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Our Vibe', href: isHomePage ? '#story' : '/#story' },
    { name: 'Menu', href: '/menu', isRoute: true, badge: 'Full Menu' },
    { name: 'Menu Cards', href: '#menu-cards', onClick: onOpenOriginalCards },
    { name: 'Our Space', href: isHomePage ? '#space' : '/#space' },
    { name: 'Reservations', href: isHomePage ? '#reservations' : '/#reservations' },
    { name: 'Find Us', href: isHomePage ? '#location' : '/#location' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-sm border-b border-cream-200/80 py-2.5 sm:py-3'
          : 'bg-cream-50/80 backdrop-blur-sm sm:bg-transparent py-3 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-terracotta-500 rounded-lg p-1"
            aria-label="Boho Boho Bistro Homepage"
          >
            {/* Boho Sun Motif */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-terracotta-100 flex items-center justify-center border border-terracotta-300/60 group-hover:bg-terracotta-200 transition-colors shrink-0">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-terracotta-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" strokeLinecap="round" />
              </svg>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-terracotta-600">
                  BOHO BOHO
                </span>
                <span className="text-[11px] font-serif text-olive-600 px-1.5 py-0.2 rounded bg-olive-100 border border-olive-200 hidden sm:inline-block">
                  {BISTRO_INFO.vernacularName}
                </span>
              </div>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-espresso-800/70">
                Bistro • Koregaon Park
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              if (link.isRoute) {
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`text-sm font-semibold tracking-wide transition-colors relative py-1 flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-terracotta-500 rounded ${
                      location.pathname === '/menu'
                        ? 'text-terracotta-600 font-bold'
                        : 'text-espresso-900 hover:text-terracotta-600'
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-terracotta-100 text-terracotta-700 font-bold border border-terracotta-200">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              }

              if (link.onClick) {
                return (
                  <button
                    key={link.name}
                    onClick={link.onClick}
                    className="text-sm font-medium tracking-wide text-espresso-800 hover:text-terracotta-600 transition-colors py-1 focus:outline-none focus:ring-2 focus:ring-terracotta-500 rounded"
                  >
                    {link.name}
                  </button>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium tracking-wide text-espresso-800 hover:text-terracotta-600 transition-colors py-1 focus:outline-none focus:ring-2 focus:ring-terracotta-500 rounded"
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={BISTRO_INFO.phoneTel}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-espresso-800 hover:text-terracotta-600 rounded-full border border-cream-300 hover:border-terracotta-300 bg-cream-50 transition-all shadow-sm"
              title="Call Boho Boho"
            >
              <Phone className="w-3.5 h-3.5 text-terracotta-500" />
              <span>{BISTRO_INFO.phone}</span>
            </a>

            <a
              href="/#reservations"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold tracking-wide uppercase bg-terracotta-500 hover:bg-terracotta-600 text-cream-50 rounded-full shadow-sm hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-terracotta-500"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Request Table</span>
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-espresso-900 hover:text-terracotta-600 hover:bg-cream-200/60 transition-colors focus:outline-none focus:ring-2 focus:ring-terracotta-500"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-cream-50 border-b border-cream-200 shadow-xl px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col space-y-3">
            <div className="pb-2 border-b border-cream-200/60 flex items-center justify-between text-xs text-espresso-800">
              <span className="font-serif italic text-olive-600">{BISTRO_INFO.vernacularName} • Koregaon Park</span>
              <span className="text-terracotta-600 font-semibold">Open Daily till 11 PM</span>
            </div>

            {navLinks.map((link) => {
              if (link.isRoute) {
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-semibold py-2 px-3 rounded-lg hover:bg-cream-200/60 text-espresso-900 hover:text-terracotta-600 transition-colors flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="text-xs bg-terracotta-100 text-terracotta-700 px-2 py-0.5 rounded-full font-bold">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              }

              if (link.onClick) {
                return (
                  <button
                    key={link.name}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      link.onClick();
                    }}
                    className="text-base font-medium py-2 px-3 rounded-lg hover:bg-cream-200/60 text-espresso-900 hover:text-terracotta-600 transition-colors text-left"
                  >
                    {link.name}
                  </button>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium py-2 px-3 rounded-lg hover:bg-cream-200/60 text-espresso-900 hover:text-terracotta-600 transition-colors"
                >
                  {link.name}
                </a>
              );
            })}

            <div className="pt-3 border-t border-cream-200/80 flex flex-col gap-2">
              <a
                href={BISTRO_INFO.phoneTel}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold text-espresso-900 bg-cream-200/70 border border-cream-300"
              >
                <Phone className="w-4 h-4 text-terracotta-500" />
                <span>Call {BISTRO_INFO.phone}</span>
              </a>

              <a
                href="/#reservations"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-bold uppercase tracking-wider bg-terracotta-500 text-cream-50 shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Request a Table</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
