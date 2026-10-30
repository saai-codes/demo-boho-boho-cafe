import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, SlidersHorizontal, Sparkles, BookOpen, Clock, Info, Phone, Calendar, ChevronRight } from 'lucide-react';
import { MENU_ITEMS, MENU_CATEGORIES, ORIGINAL_MENU_CARDS, APPETIZERS_PENDING_NOTE } from '../data/menuData';
import { BISTRO_INFO } from '../data/bistroInfo';
import MenuCardModal from '../components/MenuCardModal';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeDiet, setActiveDiet] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCard, setSelectedCard] = useState(null);

  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter items based on category, diet, and search query
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      const categoryMatch = activeCategory === 'all' || item.category === activeCategory;

      // Diet match
      let dietMatch = true;
      if (activeDiet === 'veg') dietMatch = item.diet === 'veg';
      else if (activeDiet === 'egg') dietMatch = item.diet === 'egg';
      else if (activeDiet === 'non-veg') dietMatch = item.diet === 'non-veg';

      // Search match
      const query = searchQuery.trim().toLowerCase();
      const searchMatch = !query ||
        item.name.toLowerCase().includes(query) ||
        item.subcategory.toLowerCase().includes(query) ||
        (item.description && item.description.toLowerCase().includes(query));

      return categoryMatch && dietMatch && searchMatch;
    });
  }, [activeCategory, activeDiet, searchQuery]);

  // Group filtered items by subcategory
  const groupedItems = useMemo(() => {
    const groups = {};
    filteredItems.forEach((item) => {
      if (!groups[item.subcategory]) {
        groups[item.subcategory] = [];
      }
      groups[item.subcategory].push(item);
    });
    return groups;
  }, [filteredItems]);

  const subcategoryKeys = Object.keys(groupedItems);

  // Helper for dietary indicators
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
      case 'non-veg':
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-rose-800 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-300">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-600" />
            <span>NON-VEG</span>
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
    <div className="min-h-screen bg-cream-100/90 text-espresso-900 pb-24 pt-16 sm:pt-20">
      
      {/* Top Banner Navigation Bar - Sticks cleanly below fixed Navbar without collision */}
      <div className="sticky top-[56px] sm:top-[68px] z-30 bg-cream-50/95 backdrop-blur-md border-b border-cream-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3.5 flex items-center justify-between gap-2">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 min-h-[38px] px-2.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider text-espresso-900 hover:text-terracotta-600 transition-colors focus-visible:ring-2 focus-visible:ring-terracotta-500"
            aria-label="Return to Boho Boho Homepage"
          >
            <ArrowLeft className="w-4 h-4 text-terracotta-500" />
            <span>Back to Home</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-terracotta-600 text-base sm:text-xl hidden md:inline">
              BOHO BOHO
            </span>
            <span className="text-xs font-serif text-olive-600 px-2 py-0.5 rounded bg-olive-100 border border-olive-200 hidden sm:inline-block">
              {BISTRO_INFO.vernacularName}
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setSelectedCard(ORIGINAL_MENU_CARDS[0])}
              className="inline-flex items-center gap-1.5 min-h-[38px] px-3 py-1.5 rounded-lg bg-cream-100 hover:bg-cream-200 border border-cream-300 text-xs font-semibold text-espresso-800 transition-colors focus-visible:ring-2 focus-visible:ring-terracotta-500"
              aria-label="Open 5 original scanned menu cards"
            >
              <BookOpen className="w-3.5 h-3.5 text-terracotta-500" />
              <span className="hidden sm:inline">Original Cards (5)</span>
              <span className="sm:hidden">Cards</span>
            </button>

            <a
              href="/#reservations"
              className="inline-flex items-center gap-1.5 min-h-[38px] px-3.5 py-1.5 rounded-lg bg-terracotta-500 hover:bg-terracotta-600 text-cream-50 text-xs font-bold uppercase tracking-wider shadow-sm transition-colors focus-visible:ring-2 focus-visible:ring-terracotta-500"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserve</span>
            </a>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <div className="pt-6 sm:pt-8 pb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-terracotta-100/80 border border-terracotta-200 text-xs font-semibold text-terracotta-700 tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-terracotta-600" />
            <span>Complete Bistro Catalogue • 90 Authentic Items</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso-950 mb-3 tracking-tight">
            The Boho Boho Menu
          </h1>
          <p className="text-xs sm:text-sm text-espresso-800/80 max-w-xl mx-auto font-sans leading-relaxed">
            Transcribed faithfully from Boho Boho's official menu artboards in Koregaon Park. Fresh botanical drinks, all-day eggs, hearty bowls, whole-grain pizzas, and seasonal desserts.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-cream-50 p-4 sm:p-6 rounded-3xl border border-cream-300 shadow-sm mb-8">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-4 scrollbar-none touch-pan-x">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`min-h-[42px] px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 ${
                  activeCategory === cat.id
                    ? 'bg-terracotta-500 text-cream-50 shadow-sm'
                    : 'bg-cream-100 text-espresso-800 hover:bg-cream-200/70 border border-cream-300/60'
                }`}
                aria-pressed={activeCategory === cat.id}
              >
                <span>{cat.label}</span>
                <span className={`ml-1.5 text-[10px] px-1.5 py-0.5 rounded-full ${
                  activeCategory === cat.id ? 'bg-terracotta-600 text-cream-50' : 'bg-cream-200 text-espresso-700'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Secondary Controls: Diet Filters + Search Bar */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pt-3 border-t border-cream-200">
            
            {/* Dietary Filter */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs font-semibold text-espresso-800/80 mr-1 flex items-center gap-1">
                <SlidersHorizontal className="w-3.5 h-3.5 text-terracotta-500" />
                <span>Diet:</span>
              </span>

              {[
                { id: 'all', label: 'All Items' },
                { id: 'veg', label: 'Vegetarian' },
                { id: 'egg', label: 'Eggitarian' },
                { id: 'non-veg', label: 'Non-Vegetarian' },
              ].map((diet) => (
                <button
                  key={diet.id}
                  onClick={() => setActiveDiet(diet.id)}
                  className={`min-h-[36px] px-3 py-1.5 rounded-lg text-xs font-semibold transition-all focus-visible:ring-2 focus-visible:ring-terracotta-500 ${
                    activeDiet === diet.id
                      ? 'bg-espresso-900 text-cream-50'
                      : 'bg-cream-100 text-espresso-700 hover:bg-cream-200 border border-cream-300/60'
                  }`}
                  aria-pressed={activeDiet === diet.id}
                >
                  {diet.label}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full min-w-0 sm:min-w-[280px] md:w-auto">
              <Search className="w-4 h-4 text-espresso-600 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search matcha, latte, bowls, pizza..."
                className="w-full pl-9 pr-8 py-2 text-base sm:text-sm bg-cream-100 border border-cream-300 rounded-xl text-espresso-900 placeholder:text-espresso-800/50 focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:bg-cream-50 transition-all"
                aria-label="Search menu items"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-bold text-espresso-700 hover:text-terracotta-600 p-1"
                  aria-label="Clear search text"
                >
                  Clear
                </button>
              )}
            </div>

          </div>

        </div>

        {/* Menu Listings */}
        {subcategoryKeys.length === 0 ? (
          <div className="text-center py-16 bg-cream-50 rounded-3xl border border-cream-300 p-8 max-w-xl mx-auto">
            <p className="font-serif text-xl font-bold text-espresso-950 mb-2">No matching dishes found</p>
            <p className="text-xs sm:text-sm text-espresso-800/70 mb-4">
              We couldn't find anything matching your search. Try resetting filters or using a broader query.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setActiveDiet('all');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 rounded-xl bg-terracotta-500 text-cream-50 text-xs font-bold uppercase tracking-wider hover:bg-terracotta-600 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="space-y-12 sm:space-y-16">
            {subcategoryKeys.map((subcategory) => {
              const items = groupedItems[subcategory];
              // Check if any item in this subcategory has a visual image
              const hasImages = items.some(i => i.image);

              return (
                <div key={subcategory} className="space-y-4">
                  
                  {/* Subcategory Header */}
                  <div className="flex items-center gap-3 pb-2 border-b-2 border-terracotta-300/40">
                    <div className="w-2.5 h-2.5 rounded-full bg-terracotta-500" />
                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-espresso-950 tracking-tight">
                      {subcategory}
                    </h2>
                    <span className="text-xs text-espresso-800/60 font-sans font-medium">
                      ({items.length} {items.length === 1 ? 'item' : 'items'})
                    </span>
                  </div>

                  {/* Responsive Visual Card Grid */}
                  {hasImages ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                      {items.map((item) => (
                        <div
                          key={item.id}
                          className="bg-cream-50 rounded-3xl overflow-hidden border border-cream-300/90 shadow-sm hover:shadow-elevated transition-all flex flex-col justify-between group"
                        >
                          <div>
                            {item.image ? (
                              <div className="relative aspect-[16/10] overflow-hidden bg-cream-200">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                  loading="lazy"
                                  onError={(e) => {
                                    e.currentTarget.onerror = null;
                                    e.currentTarget.src = '/images/food/cappuccino.jpg';
                                  }}
                                />
                                <div className="absolute top-3 left-3">
                                  {item.isSignature && (
                                    <span className="px-2.5 py-0.5 rounded-full bg-cream-50/95 backdrop-blur-sm text-[10px] font-bold text-terracotta-600 border border-cream-200">
                                      Signature
                                    </span>
                                  )}
                                </div>
                                <div className="absolute top-3 right-3">
                                  {renderDietDot(item.diet)}
                                </div>
                                <div className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-lg bg-espresso-950/85 backdrop-blur-md text-cream-50 font-bold text-xs">
                                  {item.price}
                                </div>
                              </div>
                            ) : null}

                            <div className="p-5">
                              <div className="flex items-start justify-between gap-2 mb-1.5">
                                <h3 className="font-serif text-lg font-bold text-espresso-950 group-hover:text-terracotta-600 transition-colors">
                                  {item.name}
                                </h3>
                                {!item.image && renderDietDot(item.diet)}
                              </div>

                              {item.description && (
                                <p className="text-xs sm:text-sm text-espresso-800/80 leading-relaxed font-sans mb-3">
                                  {item.description}
                                </p>
                              )}
                            </div>
                          </div>

                          {!item.image && (
                            <div className="px-5 pb-4 pt-2 border-t border-cream-200 flex items-center justify-between text-xs">
                              <span className="font-bold text-terracotta-600 text-sm">
                                {item.price}
                              </span>
                              <span className="text-[11px] text-espresso-700/60 font-medium">Boho Boho Bistro</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    /* Clean, fast-reading text-and-price rows for categories like coffees, hot teas, etc. */
                    <div className="bg-cream-50 rounded-3xl p-4 sm:p-6 border border-cream-300 shadow-sm divide-y divide-cream-200/80">
                      {items.map((item) => (
                        <div
                          key={item.id}
                          className="py-3.5 sm:py-4 first:pt-1 last:pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 group hover:bg-cream-100/60 px-3 -mx-3 rounded-xl transition-colors"
                        >
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-serif font-bold text-base text-espresso-950 group-hover:text-terracotta-600 transition-colors">
                                {item.name}
                              </span>
                              {item.isSignature && (
                                <span className="inline-flex items-center gap-1 text-[9px] font-bold tracking-wider uppercase text-terracotta-700 bg-terracotta-100 px-1.5 py-0.5 rounded-full border border-terracotta-200">
                                  Signature
                                </span>
                              )}
                              {renderDietDot(item.diet)}
                            </div>
                            {item.description && (
                              <p className="text-xs text-espresso-800/75 max-w-2xl font-sans">
                                {item.description}
                              </p>
                            )}
                          </div>

                          <div className="shrink-0 text-left sm:text-right">
                            <span className="font-serif font-bold text-terracotta-600 text-sm sm:text-base">
                              {item.price}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                </div>
              );
            })}

            {/* Appetizer pending notification card in menu */}
            <div className="bg-cream-50 rounded-3xl border-2 border-dashed border-terracotta-300/80 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-terracotta-100 text-terracotta-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-espresso-950">
                    {APPETIZERS_PENDING_NOTE.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-espresso-800/80 mt-1 max-w-xl leading-relaxed">
                    {APPETIZERS_PENDING_NOTE.message}
                  </p>
                </div>
              </div>

              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cream-200 text-xs font-semibold text-espresso-800 self-start sm:self-auto shrink-0">
                <Info className="w-3.5 h-3.5 text-terracotta-500" />
                <span>Card Awaited</span>
              </span>
            </div>

          </div>
        )}

        {/* Bottom Reservation Callout Banner */}
        <div className="mt-16 bg-cream-50 rounded-3xl p-6 sm:p-10 border border-cream-300 shadow-soft flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1.5 max-w-xl">
            <h3 className="font-serif text-2xl font-bold text-espresso-950">
              Ready to dine with us in Koregaon Park?
            </h3>
            <p className="text-xs sm:text-sm text-espresso-800/80">
              Reserve your table in advance for indoor seating or our pet-friendly courtyard patio.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="/#reservations"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-terracotta-500 hover:bg-terracotta-600 text-cream-50 font-bold text-xs uppercase tracking-wider shadow-sm transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Request a Table</span>
            </a>

            <a
              href={BISTRO_INFO.phoneTel}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-cream-100 hover:bg-cream-200 border border-cream-300 text-espresso-900 font-semibold text-xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-terracotta-500" />
              <span>{BISTRO_INFO.phone}</span>
            </a>
          </div>
        </div>

      </div>

      {/* Scanned Menu Card Lightbox Modal */}
      <MenuCardModal
        selectedCard={selectedCard}
        onClose={() => setSelectedCard(null)}
      />

    </div>
  );
}

