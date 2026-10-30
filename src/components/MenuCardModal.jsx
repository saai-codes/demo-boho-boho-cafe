import React, { useEffect } from 'react';
import { X, ZoomIn, ExternalLink, Download } from 'lucide-react';

export default function MenuCardModal({ selectedCard, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (selectedCard) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCard, onClose]);

  if (!selectedCard) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-espresso-950/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-card-title"
    >
      <div
        className="relative max-w-4xl w-full max-h-[92vh] bg-cream-50 rounded-2xl shadow-2xl border border-cream-300 flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-cream-200 bg-cream-100">
          <div>
            <span className="text-xs uppercase tracking-wider font-semibold text-terracotta-600">
              {selectedCard.tag}
            </span>
            <h3 id="modal-card-title" className="font-serif text-lg sm:text-xl font-bold text-espresso-950">
              {selectedCard.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={selectedCard.image}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 text-espresso-700 hover:text-terracotta-600 hover:bg-cream-200/70 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-terracotta-500"
              title="Open full resolution in new tab"
              aria-label="Open full resolution menu card in new tab"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
            <button
              onClick={onClose}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 text-espresso-700 hover:text-terracotta-600 hover:bg-cream-200/70 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body - Image Viewer */}
        <div className="overflow-auto p-4 sm:p-6 flex items-center justify-center bg-espresso-900/5">
          <img
            src={selectedCard.image}
            alt={`Original menu card: ${selectedCard.title}`}
            className="max-h-[72vh] w-auto object-contain rounded-xl shadow-lg border border-cream-200"
          />
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 border-t border-cream-200 bg-cream-50 text-xs text-espresso-700 flex flex-wrap items-center justify-between gap-2">
          <span>Sections included: {selectedCard.sections.join(' • ')}</span>
          <span className="text-olive-600 font-medium">Authentic Boho Boho Menu Card</span>
        </div>
      </div>
    </div>
  );
}

