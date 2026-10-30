import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import FeaturedMenu from './components/FeaturedMenu';
import GallerySection from './components/GallerySection';
import ReservationSection from './components/ReservationSection';
import LocationContactSection from './components/LocationContactSection';
import Footer from './components/Footer';
import MenuPage from './pages/MenuPage';
import MenuCardModal from './components/MenuCardModal';
import { Phone, Navigation, Calendar, UtensilsCrossed } from 'lucide-react';
import { BISTRO_INFO } from './data/bistroInfo';
import { ORIGINAL_MENU_CARDS } from './data/menuData';

function HomePage({ onOpenOriginalCards }) {
  return (
    <>
      <Hero />
      <AboutSection />
      <FeaturedMenu onOpenOriginalCards={onOpenOriginalCards} />
      <GallerySection />
      <ReservationSection />
      <LocationContactSection />
    </>
  );
}

export default function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const location = useLocation();
  const isMenuPage = location.pathname === '/menu';

  const handleOpenOriginalCards = () => {
    setSelectedCard(ORIGINAL_MENU_CARDS[0]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream-100 text-espresso-900 selection:bg-terracotta-200 selection:text-terracotta-800">
      
      {/* Global Navigation */}
      <Navbar onOpenOriginalCards={handleOpenOriginalCards} />

      {/* Routes: Home and Dedicated Full Menu */}
      <main className="flex-1 pb-16 sm:pb-0">
        <Routes>
          <Route
            path="/"
            element={<HomePage onOpenOriginalCards={handleOpenOriginalCards} />}
          />
          <Route path="/menu" element={<MenuPage />} />
          <Route
            path="*"
            element={<HomePage onOpenOriginalCards={handleOpenOriginalCards} />}
          />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer onOpenOriginalCards={handleOpenOriginalCards} />

      {/* Scanned Menu Card Lightbox Modal */}
      <MenuCardModal
        selectedCard={selectedCard}
        onClose={() => setSelectedCard(null)}
      />

      {/* Mobile Sticky Quick Action Bar */}
      <nav aria-label="Mobile quick actions" className="sm:hidden fixed bottom-3 left-3 right-3 z-40 bg-cream-50/95 backdrop-blur-md p-1.5 rounded-2xl shadow-elevated border border-cream-300 flex items-center justify-between gap-2">
        <a
          href={BISTRO_INFO.phoneTel}
          className="flex-1 flex items-center justify-center gap-1.5 min-h-[44px] py-2 px-2.5 rounded-xl bg-cream-200/80 hover:bg-cream-200 text-espresso-900 text-xs font-bold active:scale-[0.98] transition-transform"
          aria-label={`Call Boho Boho at ${BISTRO_INFO.phone}`}
        >
          <Phone className="w-3.5 h-3.5 text-terracotta-500" />
          <span>Call</span>
        </a>

        {!isMenuPage ? (
          <Link
            to="/menu"
            className="flex-1 flex items-center justify-center gap-1.5 min-h-[44px] py-2 px-2.5 rounded-xl bg-terracotta-50 hover:bg-terracotta-100 text-terracotta-700 border border-terracotta-200 text-xs font-bold active:scale-[0.98] transition-transform"
            aria-label="View Full Menu"
          >
            <UtensilsCrossed className="w-3.5 h-3.5 text-terracotta-500" />
            <span>Menu</span>
          </Link>
        ) : (
          <Link
            to="/"
            className="flex-1 flex items-center justify-center gap-1.5 min-h-[44px] py-2 px-2.5 rounded-xl bg-cream-200/80 hover:bg-cream-200 text-espresso-900 text-xs font-bold active:scale-[0.98] transition-transform"
            aria-label="Return to Homepage"
          >
            <span>Home</span>
          </Link>
        )}

        <a
          href="/#reservations"
          className="flex-1 flex items-center justify-center gap-1.5 min-h-[44px] py-2 px-2.5 rounded-xl bg-terracotta-500 hover:bg-terracotta-600 text-cream-50 text-xs font-bold shadow-sm uppercase tracking-wider active:scale-[0.98] transition-transform"
          aria-label="Request a table reservation"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Table</span>
        </a>
      </nav>

    </div>
  );
}
