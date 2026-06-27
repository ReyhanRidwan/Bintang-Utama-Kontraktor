import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Calculator, Calendar } from 'lucide-react';
import { HERO_SLIDES } from '../data';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  // Auto slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleCtaClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div id="hero-slider-section" className="relative h-screen min-h-[600px] w-full overflow-hidden bg-black">
      {/* Slides Background Container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.6, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={HERO_SLIDES[currentSlide].image}
            alt={HERO_SLIDES[currentSlide].title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark overlay with gradient for premium legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#16233A] via-transparent to-black/50 opacity-80" />

      {/* Content Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-[#C89A2B]/20 border border-[#C89A2B]/40 px-3 py-1.5 rounded-full text-[#C89A2B] text-xs font-mono uppercase tracking-widest">
                <span>✦ PREMIUM CONTRACTOR SURABAYA</span>
              </div>

              {/* Title */}
              <h1 id="hero-slide-title" className="font-sans font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight leading-tight uppercase max-w-4xl mx-auto">
                {HERO_SLIDES[currentSlide].title}
              </h1>

              {/* Subtitle */}
              <p id="hero-slide-subtitle" className="font-sans text-gray-300 text-sm sm:text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
                {HERO_SLIDES[currentSlide].subtitle}
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  id="hero-cta-konsultasi"
                  onClick={() => handleCtaClick('survey-form-section')}
                  className="w-full sm:w-auto bg-[#C89A2B] hover:bg-opacity-90 text-white font-sans font-semibold text-base px-8 py-4 rounded-md shadow-lg transition-all duration-200 cursor-pointer flex items-center justify-center space-x-2 border-b-2 border-amber-800"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Konsultasi & Survey Gratis</span>
                </button>
                <button
                  id="hero-cta-calculator"
                  onClick={() => handleCtaClick('rab-calculator-section')}
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-sans font-semibold text-base px-8 py-4 rounded-md border border-white/30 backdrop-blur-md transition-all duration-200 cursor-pointer flex items-center justify-center space-x-2"
                >
                  <Calculator className="h-5 w-5 text-[#C89A2B]" />
                  <span>Hitung RAB Sekarang</span>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        id="hero-btn-prev"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full border border-white/10 backdrop-blur-sm transition-all duration-200 cursor-pointer"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        id="hero-btn-next"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full border border-white/10 backdrop-blur-sm transition-all duration-200 cursor-pointer"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div id="hero-indicators" className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            id={`hero-indicator-dot-${idx}`}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              currentSlide === idx ? 'w-8 bg-[#C89A2B]' : 'w-2.5 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
