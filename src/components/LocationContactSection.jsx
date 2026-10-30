import React from 'react';
import { MapPin, Phone, Clock, Navigation, CheckCircle2, Car, ShoppingBag, Heart } from 'lucide-react';
import { BISTRO_INFO } from '../data/bistroInfo';

export default function LocationContactSection() {
  return (
    <section id="location" className="py-16 sm:py-24 bg-cream-50 border-t border-cream-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-olive-100/70 border border-olive-200/60 text-xs font-semibold text-olive-700 tracking-wide uppercase mb-3">
            <MapPin className="w-3.5 h-3.5 text-olive-600" />
            <span>Visit Us in Koregaon Park</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso-950 mb-3 tracking-tight">
            Find Your Way to Boho Boho
          </h2>
          <p className="text-sm sm:text-base text-espresso-800/80 font-sans max-w-xl mx-auto">
            Tucked along South Main Road in Ashok Chakra Society, Meera Nagar. Easy drive-in access, tranquil leafy surroundings, and breezy courtyard seating.
          </p>
        </div>

        {/* Content Grid: Contact Details & Map Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: Essential Bistro Coordinates */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4 sm:space-y-5">
            
            {/* Address Card */}
            <div className="p-5 sm:p-6 rounded-3xl bg-cream-100 border border-cream-300 shadow-sm">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-terracotta-100 text-terracotta-600 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-espresso-950 mb-1">
                    Bistro Location
                  </h3>
                  <p className="text-xs sm:text-sm text-espresso-800 leading-relaxed font-sans mb-3">
                    398, Row House 1, S Main Road<br />
                    Ashok Chakra Society, Meera Nagar<br />
                    Koregaon Park, Pune, Maharashtra 411001
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <a
                      href={BISTRO_INFO.googleMapsDirections}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-terracotta-500 hover:bg-terracotta-600 text-cream-50 text-xs font-bold uppercase tracking-wider shadow-sm transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Directions</span>
                    </a>

                    <a
                      href={BISTRO_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cream-50 border border-cream-300 text-espresso-800 text-xs font-semibold hover:bg-cream-200 transition-colors"
                    >
                      <span>Google Maps Listing</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone & Contact */}
            <div className="p-5 sm:p-6 rounded-3xl bg-cream-100 border border-cream-300 shadow-sm">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-olive-100 text-olive-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-espresso-950 mb-0.5">
                    Direct Phone Line
                  </h3>
                  <p className="text-xs text-espresso-800/80 mb-1.5">
                    For table enquiries and drive-through pickups:
                  </p>
                  <a
                    href={BISTRO_INFO.phoneTel}
                    className="font-serif text-lg sm:text-xl font-bold text-terracotta-600 hover:underline block"
                  >
                    {BISTRO_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="p-5 sm:p-6 rounded-3xl bg-cream-100 border border-cream-300 shadow-sm">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-espresso-950 mb-0.5">
                    Operating Hours
                  </h3>
                  <div className="flex items-center justify-between text-xs sm:text-sm text-espresso-900 font-semibold mb-0.5">
                    <span>{BISTRO_INFO.operatingHours.days}</span>
                    <span className="text-terracotta-600">{BISTRO_INFO.operatingHours.hours}</span>
                  </div>
                  <p className="text-[11px] text-espresso-800/70">
                    {BISTRO_INFO.operatingHours.note}
                  </p>
                </div>
              </div>
            </div>

            {/* Verified Services */}
            <div className="p-4 sm:p-5 rounded-3xl bg-cream-200/50 border border-cream-300/80">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-espresso-900 mb-2.5">
                Verified Bistro Services
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-1.5 text-espresso-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-olive-600 shrink-0" />
                  <span>Dine-In Courtyard</span>
                </div>
                <div className="flex items-center gap-1.5 text-espresso-800">
                  <Car className="w-3.5 h-3.5 text-olive-600 shrink-0" />
                  <span>Drive-Through Pickup</span>
                </div>
                <div className="flex items-center gap-1.5 text-espresso-800">
                  <ShoppingBag className="w-3.5 h-3.5 text-olive-600 shrink-0" />
                  <span>No-Contact Delivery</span>
                </div>
                <div className="flex items-center gap-1.5 text-espresso-800">
                  <Heart className="w-3.5 h-3.5 text-olive-600 shrink-0" />
                  <span>100% Pet-Friendly</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Location Embed & Route Card */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-cream-100 rounded-3xl p-3 border border-cream-300 shadow-soft h-full flex flex-col">
              
              <div className="relative w-full h-[360px] sm:h-[420px] lg:h-full min-h-[340px] rounded-2xl overflow-hidden bg-cream-200 border border-cream-300/80">
                <iframe
                  title="Boho Boho Koregaon Park Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.056080517521!2d73.89637587522513!3d18.532890782563384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c167527db097%3A0xbe94d867553cf959!2sBoho%20Boho!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Overlay Card on Map */}
                <div className="absolute bottom-3 left-3 right-3 sm:right-auto bg-cream-50/95 backdrop-blur-md p-3.5 rounded-xl border border-cream-300 shadow-md max-w-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-serif font-bold text-sm text-espresso-950">Boho Boho (बोहो बोहो)</span>
                    <span className="text-[10px] bg-olive-100 text-olive-700 px-1.5 py-0.5 rounded font-semibold">4.2 ★</span>
                  </div>
                  <p className="text-[11px] text-espresso-800 leading-snug">
                    Row House 1, S Main Rd, Ashok Chakra Society, Meera Nagar, Koregaon Park
                  </p>
                  <a
                    href={BISTRO_INFO.googleMapsDirections}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-terracotta-600 hover:underline"
                  >
                    <span>Open in Maps for live traffic directions</span>
                    <Navigation className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
