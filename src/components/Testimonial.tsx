import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  return (
    <section id="testimoni" className="py-24 bg-white scroll-mt-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4" id="testimonial-header">
          <span className="text-[#C89A2B] font-mono font-semibold text-xs uppercase tracking-widest block">
            ✦ TESTIMONIAL KLIEN ASLI
          </span>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#16233A] uppercase tracking-tight">
            APA KATA MEREKA YANG TELAH MEMBANGUN?
          </h2>
          <div className="h-1.5 w-20 bg-[#C89A2B] mx-auto rounded-full" />
          <p className="font-sans text-gray-500 text-sm sm:text-base leading-relaxed">
            Kepercayaan adalah prioritas nomor satu. Berikut ulasan jujur dari para pemilik rumah, ruko, dan kost yang telah mempercayakan impiannya kepada kami.
          </p>
        </div>

        {/* Testimonial Active Card slider */}
        <div className="relative bg-gray-50 border border-gray-150 rounded-3xl p-8 sm:p-12 shadow-md" id="testimonial-slider-container">
          
          {/* Quote icon background decoration */}
          <div className="absolute top-6 right-8 text-[#C89A2B]/10">
            <Quote className="h-24 w-24 transform rotate-180" />
          </div>

          <div className="space-y-6 relative z-10">
            {/* Stars Rating */}
            <div className="flex space-x-1" id="testimonial-stars-bar">
              {Array.from({ length: TESTIMONIALS[activeIndex].rating }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-[#C89A2B] text-[#C89A2B]" />
              ))}
            </div>

            {/* Testimonial Text */}
            <p id="testimonial-text-display" className="font-sans text-[#16233A] text-base sm:text-lg lg:text-xl italic font-medium leading-relaxed">
              "{TESTIMONIALS[activeIndex].text}"
            </p>

            {/* Profile Line */}
            <div className="flex items-center space-x-4 pt-4 border-t border-gray-200" id="testimonial-profile">
              <div className="bg-[#16233A] text-2xl h-12 w-12 rounded-full flex items-center justify-center shadow-inner">
                {TESTIMONIALS[activeIndex].avatar}
              </div>
              <div>
                <h4 id="testimonial-user-name" className="font-sans font-bold text-sm sm:text-base text-[#16233A]">
                  {TESTIMONIALS[activeIndex].name}
                </h4>
                <p id="testimonial-user-role" className="font-sans text-xs text-[#C89A2B] font-semibold">
                  {TESTIMONIALS[activeIndex].role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Dots & Buttons bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-gray-100" id="testimonial-nav-bar">
            {/* Dots */}
            <div className="flex space-x-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  id={`testimonial-dot-btn-${idx}`}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-200 cursor-pointer ${
                    activeIndex === idx ? 'w-6 bg-[#C89A2B]' : 'w-2.5 bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            {/* Buttons */}
            <div className="flex space-x-3">
              <button
                id="testimonial-btn-prev"
                onClick={handlePrev}
                className="bg-white hover:bg-gray-100 text-[#16233A] p-2.5 rounded-full border border-gray-200 shadow-sm transition-all cursor-pointer"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                id="testimonial-btn-next"
                onClick={handleNext}
                className="bg-[#16233A] hover:bg-[#233554] text-white p-2.5 rounded-full shadow-sm transition-all cursor-pointer"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="h-5 w-5 text-[#C89A2B]" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
