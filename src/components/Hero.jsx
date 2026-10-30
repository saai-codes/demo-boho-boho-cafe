import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, ArrowRight, Clock, Sparkles, Heart } from 'lucide-react';
import { BISTRO_INFO } from '../data/bistroInfo';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 overflow-hidden boho-pattern-bg">
      {/* Decorative bohemian organic ambient glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[200px] sm:h-[250px] bg-terracotta-200/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-40 right-0 w-[240px] sm:w-[350px] h-[240px] sm:h-[350px] bg-olive-200/15 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Brand Story & Headline */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-cream-50/95 border border-cream-300 shadow-sm text-xs text-espresso-900 mb-4 sm:mb-5 max-w-full flex-wrap">
              <span className="w-2 h-2 rounded-full bg-olive-500 animate-pulse shrink-0" />
              <span className="font-semibold text-terracotta-600 tracking-wide uppercase text-[11px] sm:text-xs">Bistro &amp; Artisan Coffee</span>
              <span className="text-cream-400">•</span>
              <span className="text-olive-700 font-serif italic">{BISTRO_INFO.vernacularName}</span>
              <span className="text-cream-400 hidden sm:inline">•</span>
              <span className="text-espresso-800/80 hidden sm:inline">Koregaon Park, Pune</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl xl:text-6xl text-espresso-950 leading-[1.18] sm:leading-[1.12] tracking-tight mb-4 font-bold">
              Where Sunlit Courtyards Meet{' '}
              <span className="italic font-normal text-terracotta-600 block sm:inline">
                Bohemian Flavors.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-base lg:text-lg text-espresso-800/85 leading-relaxed max-w-xl mb-6">
              A serene bohemian sanctuary in Meera Nagar, Koregaon Park. Unwind amidst white-washed arches, macrame tapestries, and wicker breezes with cold brews, botanical coffees, sourdough brunches, and continental comfort classics.
            </p>

            {/* Badges / Social Proof */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-6 text-xs sm:text-sm">
              {/* Google Reviews */}
              <a
                href={BISTRO_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-cream-50 border border-cream-300 shadow-sm hover:border-terracotta-300 transition-colors"
                title="View verified reviews on Google Maps"
              >
                <div className="flex text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-500" />
                </div>
                <span className="font-bold text-espresso-900">{BISTRO_INFO.rating.score}</span>
                <span className="text-espresso-800/70">({BISTRO_INFO.rating.reviewCount} reviews)</span>
              </a>

              {/* Price Range */}
              <div className="flex items-center gap-1 px-3 py-1 rounded-xl bg-cream-50 border border-cream-300 shadow-sm text-espresso-800">
                <span className="text-terracotta-500 font-semibold">₹</span>
                <span>{BISTRO_INFO.priceRange}</span>
              </div>

              {/* Pet Friendly */}
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-olive-50 border border-olive-200 text-olive-700 font-medium">
                <Heart className="w-3.5 h-3.5 text-olive-600 fill-olive-400/50" />
                <span>Pet-Friendly Patio</span>
              </div>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <Link
                to="/menu"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider bg-terracotta-500 hover:bg-terracotta-600 text-cream-50 rounded-xl shadow-soft hover:shadow-elevated transition-all group focus:outline-none focus:ring-2 focus:ring-terracotta-500"
              >
                <span>Explore Full Menu</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="#reservations"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold tracking-wide text-espresso-900 bg-cream-50 hover:bg-cream-200/70 border border-cream-300 hover:border-terracotta-300 rounded-xl shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-terracotta-500"
              >
                <span>Request a Table</span>
              </a>

              <a
                href={BISTRO_INFO.googleMapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs sm:text-sm font-semibold text-olive-700 hover:text-olive-800 hover:bg-olive-100/50 rounded-xl transition-colors"
                title="Open Google Maps Directions"
              >
                <MapPin className="w-4 h-4 text-olive-600" />
                <span className="underline decoration-olive-300 underline-offset-4">Directions</span>
              </a>
            </div>

            {/* Operational note */}
            <div className="mt-6 flex items-center gap-2 text-xs text-espresso-800/70">
              <Clock className="w-3.5 h-3.5 text-olive-600" />
              <span>{BISTRO_INFO.operatingHours.days} • {BISTRO_INFO.operatingHours.hours}</span>
            </div>

          </div>

          {/* Right Column: Verified Authentic Boho Boho Photography Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Bohemian Arch Backdrop Decoration */}
              <div className="absolute -top-3 -left-3 w-full h-full border-2 border-dashed border-terracotta-300/80 rounded-[40px] -rotate-1 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-full h-full bg-cream-200/60 rounded-[40px] rotate-2 -z-10" />

              {/* Main Image Container */}
              <div className="relative bg-cream-50 p-3 rounded-[36px] shadow-elevated border border-cream-300/80 overflow-hidden">
                <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden bg-cream-200">
                  <img
                    src="/images/ambience/boho-hero.jpg"
                    alt="Authentic interior of Boho Boho Cafe in Koregaon Park Pune featuring white distressed tables, wicker chairs, macrame tapestry and terracotta tiles"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/70 via-transparent to-transparent opacity-75" />

                  {/* Corner Badge */}
                  <div className="absolute top-3.5 left-3.5 bg-cream-50/95 backdrop-blur-md px-3 py-1 rounded-full border border-cream-200 shadow-sm text-[11px] font-semibold text-terracotta-600 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-terracotta-500" />
                    <span>Authentic Bistro Courtyard</span>
                  </div>

                  {/* Bottom Image Overlay Details */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 text-cream-50">
                    <p className="font-serif text-base sm:text-lg font-bold">The Sunlit Courtyard</p>
                    <p className="text-xs text-cream-200/90 leading-snug">
                      Row House 1, Ashok Chakra Society, Meera Nagar
                    </p>
                  </div>
                </div>

                {/* Floating Tag Card */}
                <div className="mt-2.5 px-2 py-1 flex items-center justify-between text-xs text-espresso-800">
                  <span className="font-serif italic text-terracotta-600 font-semibold">
                    #GoodFood • #GoodMood • #GoodVibes
                  </span>
                  <span className="text-[11px] text-olive-600 font-medium">
                    Koregaon Park, Pune
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
