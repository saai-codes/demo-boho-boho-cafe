import React, { useState, useMemo } from 'react';
import { Search, Sparkles, Eye, Info, Clock, CheckCircle2, ChevronRight, SlidersHorizontal, Image as ImageIcon } from 'lucide-react';
import { MENU_ITEMS, MENU_CATEGORIES, ORIGINAL_MENU_CARDS, APPETIZERS_PENDING_NOTE } from '../data/menuData';

export default function MenuSection({ onSelectCard }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeDiet, setActiveDiet] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('digital'); // 'digital' or 'cards'

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
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-300" title="Vegetarian">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            <span>VEG</span>
          </span>
        );
      case 'egg':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-300" title="Contains Egg">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span>EGG</span>
          </span>
        );
      case 'non-veg':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-rose-800 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-300" title="Non-Vegetarian">
            <span className="w-2 h-2 rounded-full bg-rose-600" />
            <span>NON-VEG</span>
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-olive-800 bg-olive-50 px-2 py-0.5 rounded-md border border-olive-300">
            <span>BEVERAGE</span>
          </span>
        );
    }
  };

  return (
    <section id="menu" className="py-20 sm:py-28 bg-cream-100/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-terracotta-100/80 border border-terracotta-200 text-xs font-semibold text-terracotta-700 tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-terracotta-600" />
            <span>Verified Continental &amp; Coffee Menu</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso-950 mb-4 tracking-tight">
            Nourishing Dishes &amp; Artisanal Sips
          </h2>
          <p className="text-base sm:text-lg text-espresso-800/80 font-sans">
            Transcribed faithfully from Boho Boho's official menu cards. Fresh ingredients, wholesome breakfast bowls, woodfired flavors, specialty cold brews, and seasonal desserts.
          </p>

          {/* View Mode Toggle */}
          <div className="mt-6 inline-flex items-center p-1 rounded-xl bg-cream-200/80 border border-cream-300">
            <button
              onClick={() => setViewMode('digital')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                viewMode === 'digital'
                  ? 'bg-cream-50 text-terracotta-600 shadow-sm'
                  : 'text-espresso-800 hover:text-terracotta-600'
              }`}
            >
              Interactive Digital Menu ({MENU_ITEMS.length} items)
            </button>
            <button
              onClick={() => setViewMode('cards')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                viewMode === 'cards'
                  ? 'bg-cream-50 text-terracotta-600 shadow-sm'
                  : 'text-espresso-800 hover:text-terracotta-600'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Original Scanned Cards (5)</span>
            </button>
          </div>
        </div>

        {/* ===================== VIEW MODE: ORIGINAL CARDS ===================== */}
        {viewMode === 'cards' && (
          <div id="menu-cards" className="mb-16 animate-fadeIn">
            <div className="bg-cream-50 p-6 sm:p-8 rounded-3xl border border-cream-300 shadow-soft">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-cream-200">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-espresso-950">
                    Original Boho Boho Menu Cards
                  </h3>
                  <p className="text-xs sm:text-sm text-espresso-800/80">
                    Provided directly as verified cafe menu prints. Click any card to inspect in full resolution.
                  </p>
                </div>
                <button
                  onClick={() => setViewMode('digital')}
                  className="text-xs font-semibold text-terracotta-600 hover:underline flex items-center gap-1 self-start sm:self-auto"
                >
                  <span>Switch to interactive search &amp; filter view</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {ORIGINAL_MENU_CARDS.map((card) => (
                  <div
                    key={card.id}
                    onClick={() => onSelectCard(card)}
                    className="group cursor-pointer bg-cream-100 rounded-2xl overflow-hidden border border-cream-300 hover:border-terracotta-400 shadow-sm hover:shadow-elevated transition-all flex flex-col"
                  >
                    <div className="relative aspect-[3/4] bg-cream-200 overflow-hidden">
                      <img
                        src={card.image}
                        alt={`Boho Boho menu: ${card.title}`}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-espresso-950/20 group-hover:bg-espresso-950/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <span className="px-4 py-2 bg-cream-50/95 backdrop-blur-sm text-terracotta-600 rounded-full text-xs font-bold shadow-md flex items-center gap-1.5">
                          <Eye className="w-3.5 h-3.5" />
                          <span>View Full Card</span>
                        </span>
                      </div>
                      <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-cream-50/90 backdrop-blur-sm text-[10px] font-bold text-espresso-900 border border-cream-300">
                        {card.tag}
                      </span>
                    </div>

                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-serif text-base font-bold text-espresso-950 group-hover:text-terracotta-600 transition-colors">
                          {card.title}
                        </h4>
                        <p className="text-xs text-espresso-800/70 mt-1 line-clamp-2">
                          {card.sections.join(' • ')}
                        </p>
                      </div>
                      <div className="mt-3 pt-2 border-t border-cream-200 flex items-center justify-between text-[11px] text-terracotta-600 font-semibold">
                        <span>Click to zoom</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                ))}

                {/* Appetizer Reserved Card */}
                <div className="bg-cream-100/60 rounded-2xl border-2 border-dashed border-terracotta-300 p-6 flex flex-col justify-between">
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full bg-terracotta-100 text-[10px] font-bold text-terracotta-700 border border-terracotta-200">
                      Pending Client Submission
                    </span>
                    <h4 className="font-serif text-xl font-bold text-espresso-950 mt-4 mb-2">
                      {APPETIZERS_PENDING_NOTE.title}
                    </h4>
                    <p className="text-xs text-espresso-800/80 leading-relaxed">
                      {APPETIZERS_PENDING_NOTE.message}
                    </p>
                  </div>

                  <div className="mt-6 p-3 rounded-xl bg-cream-50 border border-cream-300/80 text-[11px] text-espresso-700">
                    <span className="font-semibold text-terracotta-600">Note: </span>
                    Card placeholder reserved. Will be integrated seamlessly once the image is uploaded.
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* ===================== VIEW MODE: DIGITAL MENU ===================== */}
        {viewMode === 'digital' && (
          <div>
            {/* Filter Controls Bar */}
            <div className="bg-cream-50 p-4 sm:p-6 rounded-2xl border border-cream-300 shadow-sm mb-10">
              
              {/* Category Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-4 scrollbar-none">
                {MENU_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all focus:outline-none focus:ring-2 focus:ring-terracotta-500 ${
                      activeCategory === cat.id
                        ? 'bg-terracotta-500 text-cream-50 shadow-sm'
                        : 'bg-cream-100 text-espresso-800 hover:bg-cream-200/70 border border-cream-300/60'
                    }`}
                  >
                    {cat.label}
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
                    { id: 'all', label: 'All' },
                    { id: 'veg', label: 'Veg' },
                    { id: 'egg', label: 'Egg' },
                    { id: 'non-veg', label: 'Non-Veg' },
                  ].map((diet) => (
                    <button
                      key={diet.id}
                      onClick={() => setActiveDiet(diet.id)}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                        activeDiet === diet.id
                          ? 'bg-espresso-900 text-cream-50'
                          : 'bg-cream-100 text-espresso-700 hover:bg-cream-200 border border-cream-300/60'
                      }`}
                    >
                      {diet.label}
                    </button>
                  ))}
                </div>

                {/* Search Bar */}
                <div className="relative min-w-[240px] sm:min-w-[280px]">
                  <Search className="w-4 h-4 text-espresso-600 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search dishes, matcha, bowls, pizza..."
                    className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-cream-100 border border-cream-300 rounded-xl text-espresso-900 placeholder:text-espresso-800/50 focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:bg-cream-50 transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-espresso-700 hover:text-terracotta-600"
                    >
                      Clear
                    </button>
                  )}
                </div>

              </div>

            </div>

            {/* Menu Content: Subcategories & Items */}
            {subcategoryKeys.length === 0 ? (
              <div className="text-center py-16 bg-cream-50 rounded-2xl border border-cream-300 p-8">
                <p className="font-serif text-xl font-bold text-espresso-950 mb-2">No items match your filter</p>
                <p className="text-xs sm:text-sm text-espresso-800/70 mb-4">
                  Try adjusting your search terms or selecting another dietary preference.
                </p>
                <button
                  onClick={() => {
                    setActiveCategory('all');
                    setActiveDiet('all');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 rounded-xl bg-terracotta-500 text-cream-50 text-xs font-bold uppercase tracking-wider hover:bg-terracotta-600 transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="space-y-12 sm:space-y-16">
                {subcategoryKeys.map((subcategory) => {
                  const items = groupedItems[subcategory];
                  return (
                    <div key={subcategory} className="space-y-4">
                      
                      {/* Subcategory Title */}
                      <div className="flex items-center gap-3 pb-2 border-b-2 border-terracotta-300/40">
                        <div className="w-2.5 h-2.5 rounded-full bg-terracotta-500" />
                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-espresso-950 tracking-tight">
                          {subcategory}
                        </h3>
                        <span className="text-xs text-espresso-800/60 font-sans font-medium">
                          ({items.length} {items.length === 1 ? 'item' : 'items'})
                        </span>
                      </div>

                      {/* Items Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {items.map((item) => (
                          <div
                            key={item.id}
                            className="bg-cream-50/90 rounded-2xl p-4 sm:p-5 border border-cream-300/80 hover:border-terracotta-300 hover:bg-cream-50 shadow-sm transition-all group flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex items-start justify-between gap-3 mb-2">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <h4 className="font-serif text-base sm:text-lg font-bold text-espresso-950 group-hover:text-terracotta-600 transition-colors">
                                    {item.name}
                                  </h4>
                                  {item.isSignature && (
                                    <span className="inline-flex items-center gap-1 text-[10px] font-bold tracking-wider uppercase text-terracotta-700 bg-terracotta-100 px-2 py-0.5 rounded-full border border-terracotta-200">
                                      <Sparkles className="w-2.5 h-2.5 text-terracotta-600" />
                                      <span>Signature</span>
                                    </span>
                                  )}
                                </div>
                                
                                {renderDietDot(item.diet)}
                              </div>

                              {item.description && (
                                <p className="text-xs sm:text-sm text-espresso-800/80 leading-relaxed font-sans mb-3">
                                  {item.description}
                                </p>
                              )}
                            </div>

                            <div className="pt-2 border-t border-cream-200/60 flex items-center justify-between text-xs">
                              <span className="font-bold text-terracotta-600 text-sm sm:text-base">
                                {item.price}
                              </span>
                              <span className="text-[11px] text-espresso-700/60 font-medium">
                                Boho Boho Bistro
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                    </div>
                  );
                })}

                {/* Appetizer pending notification card in menu */}
                <div className="mt-8 bg-cream-50 rounded-2xl border-2 border-dashed border-terracotta-300/80 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-terracotta-100 text-terracotta-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-bold text-espresso-950">
                        {APPETIZERS_PENDING_NOTE.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-espresso-800/80 mt-1 max-w-xl">
                        {APPETIZERS_PENDING_NOTE.message}
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-200 text-xs font-semibold text-espresso-800 self-start sm:self-auto shrink-0">
                    <Info className="w-3.5 h-3.5 text-terracotta-500" />
                    <span>Card Awaited</span>
                  </span>
                </div>

              </div>
            )}

            {/* Menu Bottom Disclaimer */}
            <div className="mt-12 text-center text-xs text-espresso-800/70 max-w-2xl mx-auto space-y-1">
              <p>
                * All items and categories are extracted faithfully from Boho Boho's menu artboards.
              </p>
              <p>
                Prices are indicative and subject to prevailing taxes and bistro updates. Please inform the team of any dietary allergies.
              </p>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}

