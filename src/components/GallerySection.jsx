import React, { useState, useEffect } from 'react';
import { Camera, MapPin, Maximize2, X, ChevronLeft, ChevronRight, Heart, Sparkles } from 'lucide-react';
import { BISTRO_INFO } from '../data/bistroInfo';

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const galleryItems = [
    {
      id: 'courtyard',
      title: 'The Sunlit Courtyard Lounge',
      category: 'Indoor & Atrium',
      image: '/images/ambience/boho-hero.jpg',
      aspect: 'md:col-span-8',
      description: 'Airy dining space with distressed white timber tables, woven wicker armchairs, macrame wall tapestries, and terracotta tiled flooring.'
    },
    {
      id: 'patio',
      title: 'Breezy Shaded Patio',
      category: 'Outdoor Seating',
      image: '/images/ambience/boho-patio.jpg',
      aspect: 'md:col-span-4',
      description: 'Lush patio sanctuary shaded by straw lamps and woven dreamcatchers, ideal for cool Koregaon Park evenings.'
    }
  ];

  // Handle lightbox keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeIndex === null) return;
      if (e.key === 'Escape') setActiveIndex(null);
      if (e.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev + 1) % galleryItems.length);
      }
      if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, galleryItems.length]);

  return (
    <section id="space" className="py-16 sm:py-24 bg-cream-50 border-t border-b border-cream-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-olive-100/70 border border-olive-200/60 text-xs font-semibold text-olive-700 tracking-wide uppercase mb-3">
            <Camera className="w-3.5 h-3.5 text-olive-600" />
            <span>Our Space &amp; Ambiance</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso-950 mb-3 tracking-tight">
            Step Inside the Bohemian Bistro
          </h2>
          <p className="text-sm sm:text-base text-espresso-800/80 font-sans max-w-xl mx-auto">
            Every corner of Boho Boho is composed with natural textures, artisanal macrame craftsmanship, soft earthy tones, and warm natural light.
          </p>
        </div>

        {/* Editorial Collage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {galleryItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              className={`${item.aspect} group cursor-pointer bg-cream-100 rounded-3xl overflow-hidden border border-cream-300 shadow-soft hover:shadow-elevated transition-all flex flex-col`}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-cream-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-espresso-950/20 to-transparent opacity-75 group-hover:opacity-85 transition-opacity" />

                {/* Top Corner Pill */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-cream-50/95 backdrop-blur-md text-[11px] font-bold text-terracotta-600 border border-cream-200 shadow-sm">
                    {item.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="p-2 rounded-full bg-cream-50/90 text-espresso-900 shadow-sm flex items-center justify-center">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                {/* Bottom Overlay Title & Description */}
                <div className="absolute bottom-4 left-4 right-4 text-cream-50">
                  <h3 className="font-serif text-lg sm:text-2xl font-bold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-cream-200/90 line-clamp-2 font-sans">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-cream-50 flex items-center justify-between text-xs text-espresso-800">
                <div className="flex items-center gap-1.5 text-olive-600 font-medium">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Koregaon Park, Pune</span>
                </div>
                <span className="text-terracotta-600 font-semibold group-hover:underline">
                  Click to inspect photo
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Space Highlights Strip */}
        <div className="mt-10 p-5 sm:p-7 rounded-3xl bg-cream-100 border border-cream-300 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="font-serif text-2xl sm:text-3xl font-bold text-terracotta-600">4.2 ★</p>
            <p className="text-xs text-espresso-800/80 mt-0.5 font-medium">716 Verified Google Reviews</p>
          </div>
          <div>
            <p className="font-serif text-2xl sm:text-3xl font-bold text-terracotta-600">Pet-Friendly</p>
            <p className="text-xs text-espresso-800/80 mt-0.5 font-medium">Breezy Patio Courtyard</p>
          </div>
          <div>
            <p className="font-serif text-2xl sm:text-3xl font-bold text-terracotta-600">Dine-In</p>
            <p className="text-xs text-espresso-800/80 mt-0.5 font-medium">&amp; Drive-Through Pickup</p>
          </div>
          <div>
            <p className="font-serif text-2xl sm:text-3xl font-bold text-terracotta-600">11:00 PM</p>
            <p className="text-xs text-espresso-800/80 mt-0.5 font-medium">Closing Time Daily</p>
          </div>
        </div>

      </div>

      {/* Lightbox Modal with Next / Prev Controls */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-espresso-950/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-4xl w-full bg-cream-50 rounded-3xl overflow-hidden shadow-2xl border border-cream-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-cream-200 bg-cream-100">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-terracotta-600">
                  Photo {activeIndex + 1} of {galleryItems.length} • {galleryItems[activeIndex].category}
                </span>
                <h3 className="font-serif text-lg font-bold text-espresso-950">
                  {galleryItems[activeIndex].title}
                </h3>
              </div>
              <button
                onClick={() => setActiveIndex(null)}
                className="p-2 rounded-xl text-espresso-700 hover:text-terracotta-600 hover:bg-cream-200 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Frame with Previous / Next Buttons */}
            <div className="relative p-4 sm:p-6 bg-espresso-950/10 flex items-center justify-center min-h-[300px]">
              <img
                src={galleryItems[activeIndex].image}
                alt={galleryItems[activeIndex].title}
                className="max-h-[65vh] w-auto object-contain rounded-2xl shadow-lg border border-cream-200"
              />

              {/* Prev Button */}
              <button
                onClick={() => setActiveIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] p-2.5 rounded-full bg-cream-50/95 hover:bg-cream-50 text-espresso-900 shadow-md transition-all hover:scale-105 flex items-center justify-center focus-visible:ring-2 focus-visible:ring-terracotta-500"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Button */}
              <button
                onClick={() => setActiveIndex((prev) => (prev + 1) % galleryItems.length)}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] p-2.5 rounded-full bg-cream-50/95 hover:bg-cream-50 text-espresso-900 shadow-md transition-all hover:scale-105 flex items-center justify-center focus-visible:ring-2 focus-visible:ring-terracotta-500"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Caption */}
            <div className="p-4 bg-cream-50 border-t border-cream-200 text-xs sm:text-sm text-espresso-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <span>{galleryItems[activeIndex].description}</span>
              <span className="text-terracotta-600 font-semibold shrink-0">Boho Boho, Koregaon Park</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
