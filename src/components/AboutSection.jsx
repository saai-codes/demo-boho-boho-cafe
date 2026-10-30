import React from 'react';
import { Coffee, UtensilsCrossed, Heart, Sparkles, Compass, ShieldCheck } from 'lucide-react';
import { BISTRO_INFO } from '../data/bistroInfo';

export default function AboutSection() {
  const highlights = [
    {
      icon: Coffee,
      title: "Artisanal Coffee & Matcha",
      description: "From our signature Espresso Coconut Water and Pink Iced Latte to Japanese Cloud Matcha and 18-hour cold brews."
    },
    {
      icon: UtensilsCrossed,
      title: "Continental Comfort Dining",
      description: "Nourishing avocado bowls, egg specials on sourdough, whole-grain pizzas, peri-peri steaks, and house Thai curry bowls."
    },
    {
      icon: Heart,
      title: "Pet-Friendly Warmth",
      description: "A breezy outdoor courtyard where your furry best friends are warmly greeted with water bowls and cozy vibes."
    },
    {
      icon: Sparkles,
      title: "Authentic Bohemian Ambiance",
      description: "Earthy beige tones, macrame wall hangings, dreamcatcher canopies, wicker seating, and tranquil natural sunlight."
    }
  ];

  return (
    <section id="story" className="py-20 sm:py-28 bg-cream-50 border-t border-b border-cream-200/80 relative overflow-hidden">
      
      {/* Decorative botanical leaf SVG accents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-olive-100/70 border border-olive-200/60 text-xs font-semibold text-olive-700 tracking-wide uppercase mb-3">
            <Compass className="w-3.5 h-3.5 text-olive-600" />
            <span>The Bistro Philosophy</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso-950 mb-4 tracking-tight">
            Crafted for Slow Afternoons &amp; Spirited Conversations
          </h2>
          <p className="text-base sm:text-lg text-espresso-800/80 leading-relaxed font-sans">
            Boho Boho (बोहो बोहो) is a tranquil haven situated in the leafy heart of Koregaon Park, Pune. We bring together thoughtful cooking, specialty roasts, and an earthy, boho-chic environment designed to soothe the senses.
          </p>
        </div>

        {/* Two Column Story & Image Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Left Column: Verified Bistro Patio Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto">
              {/* Organic border framing */}
              <div className="relative bg-cream-100 p-3 sm:p-4 rounded-3xl shadow-soft border border-cream-300/80">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-cream-200 relative">
                  <img
                    src="/images/ambience/boho-patio.jpg"
                    alt="Boho Boho Koregaon Park outdoor patio dining with white bistro tables, wicker seating, dreamcatchers and macrame tapestry"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/60 via-transparent to-transparent opacity-70" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-cream-50">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-cream-200 bg-espresso-900/40 backdrop-blur-sm px-2.5 py-0.5 rounded-full inline-block mb-1">
                      Verified Cafe Photography
                    </span>
                    <p className="font-serif text-base font-bold">Courtyard Patio Seating</p>
                  </div>
                </div>

                <div className="mt-3 px-2 py-1 flex items-center justify-between text-xs text-espresso-800/80">
                  <span>398, Row House 1, Ashok Chakra Society</span>
                  <span className="font-semibold text-terracotta-600">Meera Nagar</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Authentic Overview */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-espresso-950 mb-4">
              A Bohemian Retreat on South Main Road
            </h3>
            
            <p className="text-sm sm:text-base text-espresso-800/85 leading-relaxed mb-4">
              Step away from the city hustle into our peaceful corner in Koregaon Park. Whether settling down with a laptop and a house-brewed matcha latte, catching up with friends over our signature Mediterranean platter, or bringing your pet along for a lazy weekend brunch, Boho Boho is designed to be your comfortable second living room.
            </p>

            <p className="text-sm sm:text-base text-espresso-800/85 leading-relaxed mb-6">
              Our kitchen celebrates fresh, made-to-order continental cuisine, artisanal sourdough preparations, hearty grain bowls, and handcrafted dessert selections like Lotus Biscoff cheesecake and seasonal Alphonso mango treats.
            </p>

            {/* Quick Fact Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-cream-200/80">
              <div className="p-3 rounded-xl bg-cream-100 border border-cream-300/60">
                <p className="text-[11px] font-semibold uppercase text-terracotta-600">Cuisine</p>
                <p className="text-sm font-bold text-espresso-900">Continental Bistro</p>
              </div>

              <div className="p-3 rounded-xl bg-cream-100 border border-cream-300/60">
                <p className="text-[11px] font-semibold uppercase text-terracotta-600">Average Spend</p>
                <p className="text-sm font-bold text-espresso-900">₹400 – ₹1,400</p>
              </div>

              <div className="p-3 rounded-xl bg-cream-100 border border-cream-300/60 col-span-2 sm:col-span-1">
                <p className="text-[11px] font-semibold uppercase text-olive-600">Atmosphere</p>
                <p className="text-sm font-bold text-espresso-900">Pet &amp; Work Friendly</p>
              </div>
            </div>

          </div>

        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-cream-100/70 border border-cream-300/70 hover:border-terracotta-300/80 hover:bg-cream-100 shadow-sm transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-terracotta-100 text-terracotta-600 flex items-center justify-center mb-4 group-hover:bg-terracotta-500 group-hover:text-cream-50 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-lg font-bold text-espresso-950 mb-2">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-espresso-800/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

