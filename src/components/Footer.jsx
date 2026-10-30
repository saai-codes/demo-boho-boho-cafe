import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Heart, Navigation } from 'lucide-react';
import { BISTRO_INFO } from '../data/bistroInfo';

export default function Footer({ onOpenOriginalCards }) {
  return (
    <footer className="bg-espresso-950 text-cream-100 pt-12 sm:pt-14 pb-10 border-t border-espresso-900 relative overflow-hidden">
      
      {/* Subtle organic bohemian background glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-terracotta-600/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-10 border-b border-espresso-800">
          
          {/* Col 1: Brand & Identity (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-3.5">
            
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-terracotta-600/20 border border-terracotta-500/40 flex items-center justify-center">
                <svg className="w-5 h-5 text-terracotta-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" strokeLinecap="round" />
                </svg>
              </div>

              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-cream-50 block">
                  BOHO BOHO
                </span>
                <span className="text-xs font-serif text-terracotta-400">
                  {BISTRO_INFO.vernacularName} • Continental Bistro
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-cream-200/70 leading-relaxed max-w-sm font-sans">
              A serene bohemian bistro located in Meera Nagar, Koregaon Park. Handcrafted coffees, cold brews, whole-grain pizzas, fresh smoothie bowls, and pet-friendly courtyard warmth.
            </p>

            <div className="pt-1 flex items-center gap-2 text-xs text-olive-300">
              <Heart className="w-3.5 h-3.5 fill-olive-400/40" />
              <span>Pet-Friendly • Dine-In • Drive-Through Pickup</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-terracotta-400">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-cream-200/80">
              <li>
                <Link to="/" className="hover:text-terracotta-300 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-terracotta-300 transition-colors font-semibold text-cream-50">
                  The Full Menu (90 Items)
                </Link>
              </li>
              <li>
                <button
                  onClick={onOpenOriginalCards}
                  className="hover:text-terracotta-300 transition-colors text-left text-terracotta-400"
                >
                  Original Scanned Cards (5)
                </button>
              </li>
              <li>
                <a href="/#story" className="hover:text-terracotta-300 transition-colors">Our Vibe &amp; Story</a>
              </li>
              <li>
                <a href="/#space" className="hover:text-terracotta-300 transition-colors">Our Space &amp; Ambience</a>
              </li>
              <li>
                <a href="/#reservations" className="hover:text-terracotta-300 transition-colors">Table Reservation Request</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Coordinates & Hours (4 cols) */}
          <div className="lg:col-span-4 space-y-2.5">
            <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-terracotta-400">
              Visit &amp; Contact
            </h4>
            
            <p className="text-xs text-cream-200/80 leading-relaxed flex items-start gap-2">
              <MapPin className="w-4 h-4 text-terracotta-400 shrink-0 mt-0.5" />
              <span>{BISTRO_INFO.address.full}</span>
            </p>

            <p className="text-xs text-cream-200/80 flex items-center gap-2">
              <Phone className="w-4 h-4 text-terracotta-400 shrink-0" />
              <a href={BISTRO_INFO.phoneTel} className="font-semibold text-cream-50 hover:text-terracotta-300">
                {BISTRO_INFO.phone}
              </a>
            </p>

            <p className="text-xs text-cream-200/80 flex items-center gap-2">
              <Clock className="w-4 h-4 text-terracotta-400 shrink-0" />
              <span>Open Daily: {BISTRO_INFO.operatingHours.hours}</span>
            </p>

            <div className="pt-2">
              <a
                href={BISTRO_INFO.googleMapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-espresso-900 hover:bg-terracotta-600 text-[11px] font-semibold text-cream-100 transition-colors border border-espresso-800"
              >
                <Navigation className="w-3 h-3 text-terracotta-400" />
                <span>Google Maps Directions</span>
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Bar & Honest Client Demo Disclaimer */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left text-[11px] text-cream-300/60">
          <div>
            <p>© {new Date().getFullYear()} Boho Boho (बोहो बोहो). Client Demo Concept.</p>
          </div>

          <div className="max-w-xl text-[11px] bg-espresso-900/60 p-2.5 rounded-xl border border-espresso-800/80 text-cream-300/70">
            <strong className="text-cream-200 font-semibold">Demo Notice: </strong>
            Proposed presentation concept for Boho Boho, Koregaon Park. Menu items and business information verified from official menu cards and public listings. Not an officially commissioned site.
          </div>
        </div>

      </div>
    </footer>
  );
}
