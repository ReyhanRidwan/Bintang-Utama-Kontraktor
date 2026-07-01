import React, { useState } from 'react';
import { X, ArrowLeft, ArrowRight, Expand } from 'lucide-react';
import { PORTFOLIO } from '../data';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>("Semua");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [sliderPos, setSliderPos] = useState<number>(50);

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

        {/* Interactive Before/After Renovasi Slider Showcase */}
        <div className="mb-20 bg-gray-50 border border-gray-150 rounded-3xl p-6 lg:p-10 shadow-md" id="portfolio-transformation-showcase">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Slider Column */}
            <div className="lg:col-span-7 flex flex-col items-center" id="before-after-slider-container">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] rounded-2xl overflow-hidden shadow-xl border-4 border-[#16233A] select-none group">
                
                {/* AFTER IMAGE (Background) */}
                <img 
                  src="https://res.cloudinary.com/di6ziqvtp/image/upload/v1782909328/97550645-005d-4db1-84f1-71d77261f91f.png" 
                  alt="Sesudah Renovasi" 
                  className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-4 right-4 bg-emerald-600 text-white font-mono text-[10px] font-bold uppercase tracking-widest px-2.5 py-1.5 rounded-lg z-20 shadow-md">
                  Sesudah (Rumah Modern)
                </span>

                {/* BEFORE IMAGE (Clipped Layer - no CSS transition on clip-path so it tracks perfectly and buttery smooth) */}
                <img 
                  src="https://res.cloudinary.com/di6ziqvtp/image/upload/v1782909325/18b1c98a-e5a5-4fc4-8203-0caf6ceee27f.png" 
                  alt="Sebelum Renovasi" 
                  className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                  style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-4 left-4 bg-amber-600 text-white font-mono text-[10px] font-bold uppercase tracking-widest px-2.5 py-1.5 rounded-lg z-20 shadow-md">
                  Sebelum (Rumah Lama)
                </span>

                {/* Vertical Slider Line divider */}
                <div 
                  className="absolute inset-y-0 z-30 w-1 bg-white shadow-xl pointer-events-none"
                  style={{ left: `${sliderPos}%` }}
                >
                  {/* Knob */}
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#16233A] border-4 border-white shadow-2xl flex items-center justify-center text-white cursor-ew-resize">
                    <span className="text-[#C89A2B] font-extrabold text-base tracking-tighter">↔</span>
                  </div>
                </div>

                {/* Drag Handle Layer - Invisible Input Slider overlay */}
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={sliderPos}
                  onChange={(e) => setSliderPos(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40"
                  aria-label="Geser untuk melihat perbedaan Sebelum dan Sesudah"
                />
              </div>
              <p className="mt-4 font-mono text-[11px] text-gray-500 flex items-center gap-1.5 animate-pulse text-center">
                <span>◀ GESER SLIDER DI ATAS UNTUK MEMBANDINGKAN SEBELUM & SESUDAH ▶</span>
              </p>
            </div>

            {/* Description Column */}
            <div className="lg:col-span-5 space-y-6" id="before-after-description">
              <div className="space-y-2">
                <span className="text-[#C89A2B] font-mono font-bold text-xs uppercase tracking-widest block">
                  ✦ TRANSFORMASI KARYA NYATA
                </span>
                <h3 className="font-sans font-bold text-2xl sm:text-3xl text-[#16233A] uppercase tracking-tight leading-tight">
                  RENOVASI RUMAH LAMA JADI RUMAH MODERN TROPIS
                </h3>
                <div className="h-1 w-16 bg-[#C89A2B] rounded-full" />
              </div>

              <p className="font-sans text-xs sm:text-sm text-gray-600 leading-relaxed">
                Bukti keahlian tim konstruksi arsitektur kami dalam merombak total bangunan rumah lama menjadi sebuah <strong>hunian modern tropis</strong> yang estetik, hemat energi, berstruktur kokoh standar sipil, dan memiliki sirkulasi udara optimal.
              </p>

              <div className="grid grid-cols-2 gap-4" id="before-after-specs">
                <div className="bg-white p-3.5 rounded-xl border border-gray-150">
                  <span className="text-[10px] font-mono text-gray-400 block uppercase">Scope Pekerjaan</span>
                  <span className="font-sans font-bold text-xs sm:text-sm text-[#16233A] uppercase">Renovasi Rumah Lama</span>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-gray-150">
                  <span className="text-[10px] font-mono text-gray-400 block uppercase">Lokasi Proyek</span>
                  <span className="font-sans font-bold text-xs sm:text-sm text-[#16233A] uppercase">Gubeng, Surabaya</span>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-gray-150">
                  <span className="text-[10px] font-mono text-gray-400 block uppercase">Hasil Akhir</span>
                  <span className="font-sans font-bold text-xs sm:text-sm text-[#16233A] uppercase">Rumah Modern Tropis</span>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-gray-150">
                  <span className="text-[10px] font-mono text-gray-400 block uppercase">Sertifikat Mutu</span>
                  <span className="font-sans font-bold text-xs sm:text-sm text-emerald-600 uppercase">Garansi 10 Tahun</span>
                </div>
              </div>

              <div className="pt-2">
                <a 
                  href="#survey-form-section" 
                  className="inline-flex items-center justify-center bg-[#16233A] hover:bg-[#233554] text-white px-5 py-3 rounded-xl font-sans font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  Konsultasikan Renovasi Anda →
                </a>
              </div>
            </div>

          </div>
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
              {/* Aspect-ratio forced wrapper (Respects portrait property) */}
              <div className={`relative w-full overflow-hidden ${item.aspect === 'portrait' ? 'aspect-[3/4]' : 'aspect-4/3'}`}>
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
