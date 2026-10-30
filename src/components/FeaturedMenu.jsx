import React from 'react';
import { ArrowRight, Sparkles, BookOpen, Clock, Heart } from 'lucide-react';
import { FEATURED_ITEMS } from '../data/menuData';
import { Link } from 'react-router-dom';

export default function FeaturedMenu({ onOpenOriginalCards }) {
  const renderDietDot = (diet) => {
    switch (diet) {
      case 'veg':
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            <span>VEG</span>
          </span>
        );
      case 'egg':
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-300">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span>EGG</span>
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-olive-800 bg-olive-50 px-2 py-0.5 rounded-md border border-olive-300">
            <span>SIPS</span>
          </span>
        );
    }
  };

  return (
    <section id="menu-preview" className="py-16 sm:py-24 bg-cream-100/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-terracotta-100/80 border border-terracotta-200 text-xs font-semibold text-terracotta-700 tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-terracotta-600" />
            <span>A Taste of Boho Boho</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso-950 mb-4 tracking-tight">
            Handcrafted Sips &amp; Wholesome Plates
          </h2>
          <p className="text-base sm:text-lg text-espresso-800/80 font-sans max-w-2xl mx-auto">
            A small taste from our 60+ item bistro catalogue. Explore our signature botanical coffees, stone-baked pizzas, nourishing avocado toasts, and artisanal desserts.
          </p>
        </div>

        {/* 6 Curated Visual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {FEATURED_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group bg-cream-50 rounded-3xl overflow-hidden border border-cream-300 shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between"
            >
              <div>
                {/* Image Container with organic top corners */}
                <div className="relative aspect-[4/3] overflow-hidden bg-cream-200">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/images/food/cappuccino.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-cream-50/95 backdrop-blur-md text-[11px] font-bold text-terracotta-600 border border-cream-200 shadow-sm">
                      {item.badge}
                    </span>
                  </div>

                  {/* Dietary indicator top right */}
                  <div className="absolute top-3 right-3">
                    {renderDietDot(item.diet)}
                  </div>

                  {/* Price overlay on bottom right of image */}
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-xl bg-espresso-950/85 backdrop-blur-md text-cream-50 font-bold text-sm">
                    {item.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-olive-600 block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-espresso-950 mb-2 group-hover:text-terracotta-600 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-espresso-800/80 leading-relaxed font-sans line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-5 sm:px-6 pb-5 pt-2 border-t border-cream-200/60 flex items-center justify-between text-xs font-semibold text-terracotta-600">
                <Link
                  to="/menu"
                  className="inline-flex items-center gap-1.5 hover:underline group-hover:translate-x-0.5 transition-transform"
                >
                  <span>View in full menu</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[11px] text-espresso-700/60">Boho Boho Bistro</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Callout Bar */}
        <div className="bg-cream-50 rounded-3xl p-6 sm:p-8 border border-cream-300 shadow-soft flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1.5 max-w-xl">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-espresso-950">
              Hungry for more? Browse the complete 60+ item catalogue.
            </h4>
            <p className="text-xs sm:text-sm text-espresso-800/80">
              Discover breakfast bowls, egg preparations on sourdough, wok-tossed Thai rice bowls, pasta, peri-peri steaks, and seasonal mango desserts.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <Link
              to="/menu"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-terracotta-500 hover:bg-terracotta-600 text-cream-50 font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all group"
            >
              <span>Explore Full Menu</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <button
              onClick={onOpenOriginalCards}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-cream-100 hover:bg-cream-200 border border-cream-300 text-espresso-900 font-semibold text-xs tracking-wide transition-colors"
            >
              <BookOpen className="w-4 h-4 text-terracotta-500" />
              <span>Original Scanned Cards (5)</span>
            </button>
          </div>
        </div>

        {/* Subtle note about Appetizers */}
        <div className="mt-6 text-center text-xs text-espresso-800/70 flex items-center justify-center gap-2">
          <Clock className="w-3.5 h-3.5 text-olive-600" />
          <span>Note: Appetizers card is reserved and will be integrated as soon as owner submits the final print.</span>
        </div>

      </div>
    </section>
  );
}

