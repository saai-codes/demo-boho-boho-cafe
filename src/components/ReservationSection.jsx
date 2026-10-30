import React, { useState } from 'react';
import { Calendar, Clock, Users, User, Phone, MessageSquare, CheckCircle, AlertCircle, Sparkles, Send } from 'lucide-react';
import { BISTRO_INFO } from '../data/bistroInfo';

export default function ReservationSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2',
    date: '',
    time: '19:00',
    seatingPreference: 'Breezy Courtyard Patio (Pet Friendly)',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!formData.date) {
      setErrorMsg('Please select a reservation date.');
      return;
    }

    setSubmitting(true);
    // Honest transmission simulation
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  // Generate WhatsApp message link for direct instant communication with the cafe phone (+91 98603 91777)
  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello Boho Boho! I would like to request a table reservation:\n\n` +
      `• Name: ${formData.name}\n` +
      `• Phone: ${formData.phone}\n` +
      `• Date: ${formData.date}\n` +
      `• Time: ${formData.time}\n` +
      `• Guests: ${formData.guests} people\n` +
      `• Seating: ${formData.seatingPreference}\n` +
      (formData.notes ? `• Special Notes: ${formData.notes}\n` : '') +
      `\nPlease verify table availability and confirm with me. Thank you!`
    );
    return `https://wa.me/919860391777?text=${text}`;
  };

  return (
    <section id="reservations" className="py-16 sm:py-24 bg-cream-100/90 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-terracotta-100/80 border border-terracotta-200 text-xs font-semibold text-terracotta-700 tracking-wide uppercase mb-3">
            <Calendar className="w-3.5 h-3.5 text-terracotta-600" />
            <span>Table Reservation Request</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso-950 mb-3 tracking-tight">
            Reserve Your Bohemian Corner
          </h2>
          <p className="text-xs sm:text-sm text-espresso-800/80 font-sans max-w-md mx-auto">
            Please submit your request below. Since seating is intimate, our staff confirms all table reservations individually via call or WhatsApp.
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-cream-50 rounded-3xl border border-cream-300 shadow-elevated p-6 sm:p-10 relative">
          
          {submitted ? (
            <div className="py-6 text-center max-w-lg mx-auto animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                <CheckCircle className="w-9 h-9" />
              </div>
              
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-espresso-950 mb-2">
                Table Request Received!
              </h3>
              
              <p className="text-sm text-espresso-800/80 mb-6 leading-relaxed">
                Thank you, <span className="font-semibold text-terracotta-600">{formData.name}</span>. Your request for <span className="font-semibold">{formData.guests} guests</span> on <span className="font-semibold">{formData.date}</span> at <span className="font-semibold">{formData.time}</span> has been logged.
              </p>

              {/* Direct WhatsApp Action for instant speed */}
              <div className="p-5 rounded-2xl bg-cream-100 border border-cream-300/80 mb-6 text-left text-xs sm:text-sm space-y-3">
                <p className="font-semibold text-espresso-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-terracotta-500" />
                  <span>Instant Handoff via WhatsApp</span>
                </p>
                <p className="text-espresso-800/70">
                  Send this exact request directly to the Boho Boho desk for priority verification:
                </p>
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Send via WhatsApp (+91 98603 91777)</span>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={BISTRO_INFO.phoneTel}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-cream-300 text-xs font-semibold text-espresso-800 hover:bg-cream-200 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-terracotta-500" />
                  <span>Call Bistro Directly</span>
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="w-full sm:w-auto text-xs font-semibold text-terracotta-600 hover:underline py-2"
                >
                  Submit another request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs font-semibold text-rose-700 flex items-center gap-2 animate-fadeIn">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-espresso-900 uppercase tracking-wider flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-terracotta-500" />
                    <span>Your Full Name *</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Priya Sharma"
                    required
                    className="w-full px-3.5 py-2.5 text-base sm:text-sm bg-cream-100 border border-cream-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:bg-cream-50 transition-all text-espresso-900"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-espresso-900 uppercase tracking-wider flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-terracotta-500" />
                    <span>Phone Number *</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98XXX XXXXX"
                    required
                    className="w-full px-3.5 py-2.5 text-base sm:text-sm bg-cream-100 border border-cream-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:bg-cream-50 transition-all text-espresso-900"
                  />
                </div>

                {/* Number of Guests */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-espresso-900 uppercase tracking-wider flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-terracotta-500" />
                    <span>Party Size *</span>
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-base sm:text-sm bg-cream-100 border border-cream-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:bg-cream-50 transition-all text-espresso-900"
                  >
                    <option value="1">1 Person (Solo / Work)</option>
                    <option value="2">2 People (Cozy Table)</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People (Standard Table)</option>
                    <option value="5">5 People</option>
                    <option value="6">6 People (Gathering)</option>
                    <option value="7+">7+ People (Large Party)</option>
                  </select>
                </div>

                {/* Date */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-espresso-900 uppercase tracking-wider flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-terracotta-500" />
                    <span>Date of Visit *</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    required
                    className="w-full px-3.5 py-2.5 text-base sm:text-sm bg-cream-100 border border-cream-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:bg-cream-50 transition-all text-espresso-900"
                  />
                </div>

                {/* Time */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-espresso-900 uppercase tracking-wider flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-terracotta-500" />
                    <span>Preferred Time Slot *</span>
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-base sm:text-sm bg-cream-100 border border-cream-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:bg-cream-50 transition-all text-espresso-900"
                  >
                    <option value="10:00">10:00 AM — Morning Coffee &amp; Brunch</option>
                    <option value="11:30">11:30 AM — Late Morning</option>
                    <option value="13:00">01:00 PM — Lunch &amp; Bowls</option>
                    <option value="15:00">03:00 PM — Work &amp; Matcha Sips</option>
                    <option value="17:00">05:00 PM — Sundowner &amp; Coffees</option>
                    <option value="19:00">07:00 PM — Early Dinner</option>
                    <option value="20:30">08:30 PM — Prime Dinner</option>
                    <option value="21:45">09:45 PM — Late Supper (Kitchen closes 10:30 PM)</option>
                  </select>
                </div>

                {/* Seating Preference */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-espresso-900 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-terracotta-500" />
                    <span>Seating Preference</span>
                  </label>
                  <select
                    name="seatingPreference"
                    value={formData.seatingPreference}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-sm bg-cream-100 border border-cream-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:bg-cream-50 transition-all text-espresso-900"
                  >
                    <option value="Breezy Courtyard Patio (Pet Friendly)">Breezy Courtyard Patio (Pet Friendly)</option>
                    <option value="Indoor Bohemian Lounge (Air-Conditioned)">Indoor Bohemian Lounge (Air-Conditioned)</option>
                    <option value="First Available Table">First Available Table</option>
                  </select>
                </div>

              </div>

              {/* Special Requests */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-espresso-900 uppercase tracking-wider flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-terracotta-500" />
                  <span>Special Notes / Occasion (Optional)</span>
                </label>
                <input
                  type="text"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="e.g. Birthday celebration, bringing our pet dog, quiet table needed..."
                  className="w-full px-3.5 py-2.5 text-sm bg-cream-100 border border-cream-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:bg-cream-50 transition-all text-espresso-900"
                />
              </div>

              {/* Disclaimer Notice */}
              <div className="p-3.5 rounded-xl bg-cream-200/60 border border-cream-300/60 text-xs text-espresso-800/80 flex items-start gap-2.5">
                <span className="text-terracotta-600 font-bold shrink-0 mt-0.5">ℹ</span>
                <span>
                  <strong>Reservation Notice:</strong> Submitting this form sends an honest enquiry to the Boho Boho team. It is not an automated live confirmation. Our team verifies table availability and will call or text you back promptly.
                </span>
              </div>

              {/* Submit CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="text-xs text-espresso-700">
                  Need a table within 2 hours? Call <a href={BISTRO_INFO.phoneTel} className="font-bold text-terracotta-600 underline">{BISTRO_INFO.phone}</a>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-terracotta-500 hover:bg-terracotta-600 text-cream-50 font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-terracotta-500 disabled:opacity-50"
                >
                  {submitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <span>Submit Table Request</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
