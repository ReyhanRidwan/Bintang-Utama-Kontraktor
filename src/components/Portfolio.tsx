import React, { useState } from 'react';
import { X, ArrowLeft, ArrowRight, Expand } from 'lucide-react';
import { PORTFOLIO } from '../data';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>("Semua");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    "Semua",
    "Rumah Modern",
    "Rumah 2 Lantai",
    "Renovasi Rumah",
    "Interior",
    "Kolam Renang",
    "Ruko",
    "Kos",
    "Kantor"
  ];

  // Filter items based on selected category
  const filteredPortfolio = activeCategory === "Semua"
    ? PORTFOLIO
    : PORTFOLIO.filter(item => item.category === activeCategory);

  const openLightbox = (index: number) => {
    // Find the original index of the filtered item in the filtered array
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! === filteredPortfolio.length - 1 ? 0 : prev! + 1));
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! === 0 ? filteredPortfolio.length - 1 : prev! - 1));
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="portfolio-header">
          <span className="text-[#C89A2B] font-mono font-semibold text-xs uppercase tracking-widest block">
            ✦ DOKUMENTASI PROYEK
          </span>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#16233A] uppercase tracking-tight">
            GALERI HASIL KARYA NYATA KAMI
          </h2>
          <div className="h-1.5 w-20 bg-[#C89A2B] mx-auto rounded-full" />
          <p className="font-sans text-gray-500 text-sm sm:text-base leading-relaxed">
            Kumpulan dokumentasi foto fisik asli pembangunan rumah baru, renovasi ruko, tata ruang interior, dan kolam renang di wilayah Surabaya & sekitarnya.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" id="portfolio-category-tabs">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              id={`portfolio-tab-${cat.replace(/\s+/g, '-').toLowerCase()}`}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full font-sans text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#16233A] text-white shadow-md border-b-2 border-[#C89A2B]"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Gallery */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" 
          id="portfolio-items-grid"
        >
          {filteredPortfolio.map((item, index) => (
            <div
              key={item.id}
              id={`portfolio-card-${item.id}`}
              onClick={() => openLightbox(index)}
              className="group relative bg-gray-50 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
            >
              {/* Aspect-ratio forced wrapper */}
              <div className="relative aspect-4/3 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Dark Hover Mask overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/95 p-3 rounded-full text-[#16233A] transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Expand className="h-5 w-5" />
                  </div>
                </div>
              </div>

              {/* Descriptions */}
              <div className="p-5 space-y-1">
                <span className="font-mono text-[10px] text-[#C89A2B] uppercase tracking-wider font-semibold">
                  {item.category}
                </span>
                <h4 className="font-sans font-bold text-sm text-[#16233A] line-clamp-1 group-hover:text-[#C89A2B] transition-colors duration-200 uppercase">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredPortfolio.length === 0 && (
          <div className="text-center py-16 bg-gray-50 rounded-2xl border border-dashed" id="portfolio-empty">
            <p className="text-gray-400 font-sans text-sm">Tidak ditemukan proyek untuk kategori ini.</p>
          </div>
        )}

      </div>

      {/* LIGHTBOX COMPONENT */}
      {lightboxIndex !== null && (
        <div 
          id="portfolio-lightbox" 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 select-none"
          onClick={closeLightbox}
        >
          {/* Header Controls */}
          <div className="absolute top-4 right-4 z-50 flex items-center space-x-4">
            <span className="text-white/60 font-mono text-sm">
              {lightboxIndex + 1} / {filteredPortfolio.length}
            </span>
            <button
              id="lightbox-close-btn"
              onClick={closeLightbox}
              className="bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full transition-all cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Core Image Display */}
          <div className="relative w-full max-w-4xl h-[75vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {/* Prev Trigger */}
            <button
              id="lightbox-prev-btn"
              onClick={prevImage}
              className="absolute left-0 sm:-left-16 z-50 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all cursor-pointer"
              aria-label="Previous Image"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>

            {/* Rendered active Image */}
            <img
              src={filteredPortfolio[lightboxIndex].image}
              alt={filteredPortfolio[lightboxIndex].title}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              referrerPolicy="no-referrer"
            />

            {/* Next Trigger */}
            <button
              id="lightbox-next-btn"
              onClick={nextImage}
              className="absolute right-0 sm:-right-16 z-50 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all cursor-pointer"
              aria-label="Next Image"
            >
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>

          {/* Footer labels */}
          <div 
            className="text-center mt-6 text-white max-w-2xl px-4" 
            onClick={(e) => e.stopPropagation()}
          >
            <span className="inline-block bg-[#C89A2B] text-white font-mono text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded mb-2">
              {filteredPortfolio[lightboxIndex].category}
            </span>
            <h3 className="font-sans font-bold text-lg sm:text-xl text-white uppercase tracking-wide">
              {filteredPortfolio[lightboxIndex].title}
            </h3>
            <p className="text-white/40 font-mono text-xs mt-1">
              PT. BINTANG UTAMA PERKASA SEJAHTERA
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
