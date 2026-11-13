import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Eye, X } from 'lucide-react';

export const APP_SCREENS = [
  { id: 1, src: '/tela01_1x.webp' },
  { id: 2, src: '/tela02_1x.webp' },
  { id: 3, src: '/tela03_1x.webp' },
  { id: 4, src: '/tela04_1x.webp' },
  { id: 5, src: '/tela05_1x.webp' },
  { id: 6, src: '/tela06_1x.webp' },
  { id: 7, src: '/tela07_1x.webp' },
  { id: 8, src: '/tela08_1x.webp' }
];

interface SosAppScreensGalleryProps {
  className?: string;
}

export const SosAppScreensGallery: React.FC<SosAppScreensGalleryProps> = ({ className = '' }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Touch swipe refs for modal
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Scroll function for main carousel
  const scrollCarousel = useCallback((direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const scrollAmount = container.clientWidth * 0.75;
      
      if (direction === 'right') {
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 20) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      } else {
        if (container.scrollLeft <= 20) {
          container.scrollTo({ left: container.scrollWidth, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
      }
    }
  }, []);

  // Autoplay effect for main carousel
  useEffect(() => {
    if (isPaused || lightboxIndex !== null) return;
    const interval = setInterval(() => {
      scrollCarousel('right');
    }, 3800);

    return () => clearInterval(interval);
  }, [isPaused, lightboxIndex, scrollCarousel]);

  // Modal Circular Navigation
  const handlePrevModal = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? 0 : (prev - 1 + APP_SCREENS.length) % APP_SCREENS.length));
  }, []);

  const handleNextModal = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? 0 : (prev + 1) % APP_SCREENS.length));
  }, []);

  const handleCloseModal = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  // Keyboard navigation for Modal
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNextModal();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrevModal();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        handleCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handleNextModal, handlePrevModal, handleCloseModal]);

  // Touch Swipe Handlers for Modal
  const handleModalTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleModalTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleModalTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 40;
    const isRightSwipe = distance < -40;

    if (isLeftSwipe) {
      handleNextModal();
    } else if (isRightSwipe) {
      handlePrevModal();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div 
        className="relative max-w-7xl mx-auto px-2 sm:px-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Navigation Arrows for Carousel */}
        <button
          onClick={() => scrollCarousel('left')}
          className="absolute -left-2 sm:left-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white text-[#EA4D82] border border-rose-200 shadow-xl hover:bg-[#EA4D82] hover:text-white transition-all flex items-center justify-center cursor-pointer group focus:outline-none"
          aria-label="Tela anterior"
        >
          <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
        </button>

        <button
          onClick={() => scrollCarousel('right')}
          className="absolute -right-2 sm:right-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white text-[#EA4D82] border border-rose-200 shadow-xl hover:bg-[#EA4D82] hover:text-white transition-all flex items-center justify-center cursor-pointer group focus:outline-none"
          aria-label="Próxima tela"
        >
          <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
        </button>

        {/* Carousel Scroll Container */}
        <div
          ref={carouselRef}
          className="flex items-center gap-4 sm:gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory py-6 px-4 sm:px-8 no-scrollbar scroll-smooth"
        >
          {APP_SCREENS.map((scr, idx) => (
            <div
              key={scr.id}
              onClick={() => setLightboxIndex(idx)}
              className="shrink-0 snap-center group relative cursor-pointer rounded-[2.2rem] bg-slate-900 border-[5px] border-slate-800 shadow-lg hover:shadow-2xl hover:border-[#EA4D82] transition-all duration-300 transform hover:-translate-y-1.5 overflow-hidden w-[240px] sm:w-[280px] lg:w-[310px]"
            >
              {/* Smartphone Notch / Top Bar */}
              <div className="w-16 h-2.5 bg-slate-800 mx-auto rounded-full mt-2 mb-1"></div>

              {/* Uncropped App Screen Container */}
              <div className="aspect-[810/1440] w-full bg-slate-950 relative rounded-b-[1.8rem] flex items-center justify-center p-1 overflow-hidden">
                <img
                  src={scr.src}
                  alt={`Tela ${scr.id} do aplicativo SOS Maria da Penha`}
                  className="w-full h-full object-contain rounded-xl group-hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />

                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-[#EA4D82]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                  <div className="bg-[#EA4D82] text-white px-4 py-2 rounded-full font-bold text-xs shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="w-4 h-4" />
                    <span>Ampliar</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center items-center gap-2 pt-1">
          {APP_SCREENS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (carouselRef.current) {
                  const cardWidth = carouselRef.current.scrollWidth / APP_SCREENS.length;
                  carouselRef.current.scrollTo({ left: cardWidth * idx, behavior: 'smooth' });
                }
              }}
              className="w-2.5 h-2.5 rounded-full bg-rose-200 hover:bg-[#EA4D82] transition-colors cursor-pointer"
              aria-label={`Ir para tela ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox / Modal for Enlarged View with Circular Prev/Next Navigation */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 select-none animate-in fade-in duration-200"
          onClick={handleCloseModal}
          onTouchStart={handleModalTouchStart}
          onTouchMove={handleModalTouchMove}
          onTouchEnd={handleModalTouchEnd}
        >
          {/* Modal Box */}
          <div
            className="relative max-w-lg w-full bg-slate-950/90 border border-white/15 rounded-3xl p-3 sm:p-5 shadow-2xl flex flex-col items-center space-y-3 my-auto max-h-[95vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar: Counter & Close Button */}
            <div className="w-full flex items-center justify-between border-b border-white/10 pb-3 px-2">
              <span className="text-white text-xs sm:text-sm font-bold bg-white/10 px-3 py-1 rounded-full text-rose-200 tracking-wider">
                {lightboxIndex + 1} / {APP_SCREENS.length}
              </span>

              <button
                onClick={handleCloseModal}
                className="p-1.5 rounded-full bg-white/10 text-slate-300 hover:text-white hover:bg-[#EA4D82] transition-colors cursor-pointer"
                aria-label="Fechar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image display area with Side Navigation Arrows */}
            <div className="relative w-full flex items-center justify-center flex-1 py-1 min-h-[60vh] max-h-[75vh]">
              {/* Previous Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevModal();
                }}
                className="absolute left-1 sm:-left-3 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/60 text-white border border-white/20 hover:bg-[#EA4D82] hover:border-[#EA4D82] transition-all flex items-center justify-center cursor-pointer shadow-lg active:scale-95"
                aria-label="Tela anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Uncropped Enlarged Image */}
              <img
                src={APP_SCREENS[lightboxIndex].src}
                alt={`Tela ${APP_SCREENS[lightboxIndex].id} ampliada`}
                className="max-h-[72vh] max-w-full w-auto h-auto object-contain rounded-2xl shadow-2xl transition-all duration-300"
              />

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextModal();
                }}
                className="absolute right-1 sm:-right-3 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/60 text-white border border-white/20 hover:bg-[#EA4D82] hover:border-[#EA4D82] transition-all flex items-center justify-center cursor-pointer shadow-lg active:scale-95"
                aria-label="Próxima tela"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Subtitle / Navigation Hint */}
            <div className="text-center text-[11px] text-slate-400 pt-1">
              Use as setas (← →) ou deslize para navegar • ESC para fechar
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
