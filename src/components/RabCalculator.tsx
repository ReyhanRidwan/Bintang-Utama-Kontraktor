import { useState } from 'react';
import { PhoneCall, HelpCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data';

export default function RabCalculator() {
  // Input states with defaults
  const [wallA, setWallA] = useState<number>(1.45);
  const [wallB, setWallB] = useState<number>(6.00);
  const [wallC, setWallC] = useState<number>(1.45);
  const [wallD, setWallD] = useState<number>(6.00);
  const [ceilingHeight, setCeilingHeight] = useState<number>(2.80);

  // Error messages for validation feedback
  const [errors, setErrors] = useState({
    wallA: '',
    wallB: '',
    wallC: '',
    wallD: '',
    ceilingHeight: ''
  });

  const handleInputChange = (field: string, val: string) => {
    const num = parseFloat(val);
    let errorText = '';

    if (isNaN(num)) {
      errorText = 'Harus berupa angka';
    } else {
      if (field.startsWith('wall')) {
        if (num < 0.95 || num > 6.00) {
          errorText = 'Rentang harus 0.95 - 6.00 m';
        }
      } else if (field === 'ceilingHeight') {
        if (num < 2.50 || num > 3.30) {
          errorText = 'Rentang harus 2.50 - 3.30 m';
        }
      }
    }

    setErrors(prev => ({ ...prev, [field]: errorText }));

    // Apply value if it's a valid number (or keep as is while editing)
    const fallbackNum = isNaN(num) ? 1.0 : num;
    if (field === 'wallA') setWallA(fallbackNum);
    else if (field === 'wallB') setWallB(fallbackNum);
    else if (field === 'wallC') setWallC(fallbackNum);
    else if (field === 'wallD') setWallD(fallbackNum);
    else if (field === 'ceilingHeight') setCeilingHeight(fallbackNum);
  };

  // SVG Scaling Calculations
  // We want to map dimensions of 0.95m - 6.00m to visual pixels
  // SVG size is 320x240
  const maxDim = 6.00;
  const padding = 50;
  const svgWidth = 320;
  const svgHeight = 240;

  // Horizontal width will be based on the average of Wall A and Wall C
  const actualWidthMeters = Math.max(0.95, Math.min(6.00, (wallA + wallC) / 2));
  // Vertical height will be based on the average of Wall B and Wall D
  const actualHeightMeters = Math.max(0.95, Math.min(6.00, (wallB + wallD) / 2));

  // Scale: 6.00m fits inside (320 - 2*padding) -> 220px. 
  // Pixel size = (meters / 6.00) * 220
  const rectWidth = (actualWidthMeters / maxDim) * 200 + 40;
  const rectHeight = (actualHeightMeters / maxDim) * 130 + 30;

  // Center coordinates
  const rectX = (svgWidth - rectWidth) / 2;
  const rectY = (svgHeight - rectHeight) / 2 - 10;

  // Ceiling height scaling for the vertical section diagram
  // Range is 2.50m - 3.30m
  // Visual height in pixels (let's map 2.50 to 40px and 3.30 to 80px)
  const verticalRatio = (ceilingHeight - 2.50) / (3.30 - 2.50); // 0 to 1
  const ceilingVisualHeight = 40 + verticalRatio * 40; // 40px to 80px

  const triggerCustomerService = () => {
    const text = `Halo Admin Bintang Utama Kontraktor, saya ingin berkonsultasi mengenai RAB ruangan saya dengan ukuran:\nDinding A: ${wallA}m\nDinding B: ${wallB}m\nDinding C: ${wallC}m\nDinding D: ${wallD}m\nTinggi Plafond: ${ceilingHeight}m.\nMohon info dan estimasi kasarnya. Terima kasih!`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/62${COMPANY_INFO.whatsapp1.replace(/[^0-9]/g, '')}?text=${encodedText}`, '_blank');
  };

  return (
    <section id="rab-calculator-section" className="py-20 bg-gray-100 border-y border-gray-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3" id="rab-header">
          <span className="text-[#C89A2B] font-mono font-semibold text-xs uppercase tracking-widest block">
            ✦ SIMULATOR RAB RUANG
          </span>
          <h2 className="font-sans font-bold text-2xl sm:text-3xl text-[#16233A] uppercase tracking-tight">
            Kalkulator & Denah Reaktif Dinding
          </h2>
          <div className="h-1 w-16 bg-[#C89A2B] mx-auto rounded-full" />
          <p className="font-sans text-xs sm:text-sm text-gray-500">
            Ubah ukuran dinding di panel kanan dan lihat bagaimana denah ruangan Anda berubah secara proporsional di panel kiri.
          </p>
        </div>

        {/* Split Screen Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="rab-calculator-grid">
          
          {/* Panel Kiri: Visualisasi & Diagram */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-md flex flex-col justify-between" id="rab-visual-panel">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="font-mono text-[10px] tracking-wider uppercase text-gray-400">
                  Visualizer 2D / Penampang Denah
                </span>
                <span className="bg-[#16233A] text-white font-mono text-[10px] px-2.5 py-1 rounded">
                  Live Preview
                </span>
              </div>

              {/* Denah Diagram */}
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 flex flex-col items-center justify-center relative min-h-[250px]" id="svg-denah-container">
                <svg width="100%" height="220" viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="max-w-xs transition-all duration-300">
                  {/* Outer Grid background */}
                  <defs>
                    <pattern id="grid-pattern" width="15" height="15" patternUnits="userSpaceOnUse">
                      <path d="M 15 0 L 0 0 0 15" fill="none" stroke="#f1f5f9" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid-pattern)" />

                  {/* Wall Lines - Inner Rectangle */}
                  <rect
                    x={rectX}
                    y={rectY}
                    width={rectWidth}
                    height={rectHeight}
                    fill="rgba(200, 154, 43, 0.05)"
                    stroke="#16233A"
                    strokeWidth="3"
                    className="transition-all duration-300"
                  />

                  {/* Labels on each side */}
                  {/* Top Wall (A) */}
                  <line x1={rectX} y1={rectY - 8} x2={rectX + rectWidth} y2={rectY - 8} stroke="#C89A2B" strokeWidth="1" strokeDasharray="3 3" />
                  <text
                    x={rectX + rectWidth / 2}
                    y={rectY - 14}
                    textAnchor="middle"
                    className="font-mono text-xs font-semibold fill-[#16233A] transition-all duration-300"
                  >
                    Dinding A: {wallA.toFixed(2)}m
                  </text>

                  {/* Right Wall (B) */}
                  <line x1={rectX + rectWidth + 8} y1={rectY} x2={rectX + rectWidth + 8} y2={rectY + rectHeight} stroke="#C89A2B" strokeWidth="1" strokeDasharray="3 3" />
                  <text
                    x={rectX + rectWidth + 14}
                    y={rectY + rectHeight / 2 + 4}
                    textAnchor="start"
                    className="font-mono text-xs font-semibold fill-[#16233A] transition-all duration-300"
                  >
                    Dinding B: {wallB.toFixed(2)}m
                  </text>

                  {/* Bottom Wall (C) */}
                  <line x1={rectX} y1={rectY + rectHeight + 8} x2={rectX + rectWidth} y2={rectY + rectHeight + 8} stroke="#C89A2B" strokeWidth="1" strokeDasharray="3 3" />
                  <text
                    x={rectX + rectWidth / 2}
                    y={rectY + rectHeight + 22}
                    textAnchor="middle"
                    className="font-mono text-xs font-semibold fill-[#16233A] transition-all duration-300"
                  >
                    Dinding C: {wallC.toFixed(2)}m
                  </text>

                  {/* Left Wall (D) */}
                  <line x1={rectX - 8} y1={rectY} x2={rectX - 8} y2={rectY + rectHeight} stroke="#C89A2B" strokeWidth="1" strokeDasharray="3 3" />
                  <text
                    x={rectX - 14}
                    y={rectY + rectHeight / 2 + 4}
                    textAnchor="end"
                    className="font-mono text-xs font-semibold fill-[#16233A] transition-all duration-300"
                  >
                    Dinding D: {wallD.toFixed(2)}m
                  </text>
                </svg>
              </div>
            </div>

            {/* Diagram Potongan Vertikal */}
            <div className="mt-8 pt-6 border-t border-gray-100" id="svg-potongan-container">
              <span className="font-mono text-[9px] tracking-wider uppercase text-gray-400 block mb-3">
                Potongan Vertikal (Tinggi Plafond)
              </span>

              <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-between">
                <div className="flex-1 relative h-28 flex flex-col justify-between">
                  {/* Ceiling line */}
                  <div className="border-t-2 border-[#16233A] relative">
                    <span className="absolute left-2 -top-5 font-mono text-[10px] text-gray-500 uppercase tracking-wider font-semibold">
                      Plafond
                    </span>
                  </div>

                  {/* Dynamic Dimension Arrow */}
                  <div className="absolute right-10 inset-y-0 w-8 flex flex-col items-center justify-between">
                    <div className="h-full w-[1px] bg-[#C89A2B] relative flex items-center justify-center">
                      {/* Arrow heads */}
                      <div className="absolute top-0 -translate-x-1/2 w-2 h-2 border-t border-l border-[#C89A2B] rotate-45" />
                      <div className="absolute bottom-0 -translate-x-1/2 w-2 h-2 border-b border-r border-[#C89A2B] rotate-45" />
                      {/* Height text pill */}
                      <span className="bg-white px-2 py-0.5 border border-gray-200 rounded text-[11px] font-mono font-bold text-[#C89A2B] whitespace-nowrap z-10">
                        {ceilingHeight.toFixed(2)} m
                      </span>
                    </div>
                  </div>

                  {/* Floor line */}
                  <div className="border-b-2 border-gray-600 relative">
                    <span className="absolute left-2 top-1.5 font-mono text-[10px] text-gray-500 uppercase tracking-wider font-semibold">
                      Lantai
                    </span>
                  </div>
                </div>

                <div className="w-1/3 text-right shrink-0 pl-4 space-y-1">
                  <p className="text-[10px] font-mono text-gray-400">LUAS RUANG</p>
                  <p className="text-xl font-bold font-sans text-[#16233A]">
                    {(actualWidthMeters * actualHeightMeters).toFixed(2)} m²
                  </p>
                  <p className="text-[10px] font-mono text-gray-400 mt-2">VOLUME RUANG</p>
                  <p className="text-base font-semibold font-sans text-gray-600">
                    {(actualWidthMeters * actualHeightMeters * ceilingHeight).toFixed(2)} m³
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Panel Kanan: Form Input */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-md flex flex-col justify-between" id="rab-input-panel">
            <div>
              <div className="mb-6 space-y-1">
                <h3 className="font-sans font-bold text-lg text-[#16233A] uppercase tracking-wide">
                  Masukkan ukuran dalam-dalam ruang!
                </h3>
                <p className="font-sans text-xs text-gray-500">
                  Sesuaikan panjang setiap sisi dinding sesuai dengan ukuran as bangunan (meter).
                </p>
              </div>

              {/* Form Input Sisi Dinding */}
              <div className="space-y-4" id="rab-form-inputs">
                
                {/* Dinding A */}
                <div className="p-3 bg-indigo-50/40 hover:bg-indigo-50/70 border border-indigo-100 rounded-xl transition-all duration-150">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <label htmlFor="input-wallA" className="font-sans font-semibold text-sm text-[#16233A] min-w-[120px]">
                      Dinding A (Atas)
                    </label>
                    <div className="flex items-center space-x-2">
                      <input
                        id="input-wallA"
                        type="number"
                        step="0.05"
                        min="0.95"
                        max="6.00"
                        value={wallA}
                        onChange={(e) => handleInputChange('wallA', e.target.value)}
                        className="w-24 px-3 py-1.5 border border-indigo-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 font-mono text-sm text-right bg-white"
                      />
                      <span className="font-sans text-xs text-gray-500 w-12 text-left">meter</span>
                      <span className="font-mono text-[10px] text-gray-400 w-24 text-right">(0.95 - 6.00)</span>
                    </div>
                  </div>
                  {errors.wallA && (
                    <div className="text-red-500 font-sans text-[11px] mt-1.5 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" /> <span>{errors.wallA}</span>
                    </div>
                  )}
                </div>

                {/* Dinding B */}
                <div className="p-3 bg-indigo-50/40 hover:bg-indigo-50/70 border border-indigo-100 rounded-xl transition-all duration-150">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <label htmlFor="input-wallB" className="font-sans font-semibold text-sm text-[#16233A] min-w-[120px]">
                      Dinding B (Kanan)
                    </label>
                    <div className="flex items-center space-x-2">
                      <input
                        id="input-wallB"
                        type="number"
                        step="0.05"
                        min="0.95"
                        max="6.00"
                        value={wallB}
                        onChange={(e) => handleInputChange('wallB', e.target.value)}
                        className="w-24 px-3 py-1.5 border border-indigo-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 font-mono text-sm text-right bg-white"
                      />
                      <span className="font-sans text-xs text-gray-500 w-12 text-left">meter</span>
                      <span className="font-mono text-[10px] text-gray-400 w-24 text-right">(0.95 - 6.00)</span>
                    </div>
                  </div>
                  {errors.wallB && (
                    <div className="text-red-500 font-sans text-[11px] mt-1.5 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" /> <span>{errors.wallB}</span>
                    </div>
                  )}
                </div>

                {/* Dinding C */}
                <div className="p-3 bg-indigo-50/40 hover:bg-indigo-50/70 border border-indigo-100 rounded-xl transition-all duration-150">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <label htmlFor="input-wallC" className="font-sans font-semibold text-sm text-[#16233A] min-w-[120px]">
                      Dinding C (Bawah)
                    </label>
                    <div className="flex items-center space-x-2">
                      <input
                        id="input-wallC"
                        type="number"
                        step="0.05"
                        min="0.95"
                        max="6.00"
                        value={wallC}
                        onChange={(e) => handleInputChange('wallC', e.target.value)}
                        className="w-24 px-3 py-1.5 border border-indigo-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 font-mono text-sm text-right bg-white"
                      />
                      <span className="font-sans text-xs text-gray-500 w-12 text-left">meter</span>
                      <span className="font-mono text-[10px] text-gray-400 w-24 text-right">(0.95 - 6.00)</span>
                    </div>
                  </div>
                  {errors.wallC && (
                    <div className="text-red-500 font-sans text-[11px] mt-1.5 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" /> <span>{errors.wallC}</span>
                    </div>
                  )}
                </div>

                {/* Dinding D */}
                <div className="p-3 bg-indigo-50/40 hover:bg-indigo-50/70 border border-indigo-100 rounded-xl transition-all duration-150">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <label htmlFor="input-wallD" className="font-sans font-semibold text-sm text-[#16233A] min-w-[120px]">
                      Dinding D (Kiri)
                    </label>
                    <div className="flex items-center space-x-2">
                      <input
                        id="input-wallD"
                        type="number"
                        step="0.05"
                        min="0.95"
                        max="6.00"
                        value={wallD}
                        onChange={(e) => handleInputChange('wallD', e.target.value)}
                        className="w-24 px-3 py-1.5 border border-indigo-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 font-mono text-sm text-right bg-white"
                      />
                      <span className="font-sans text-xs text-gray-500 w-12 text-left">meter</span>
                      <span className="font-mono text-[10px] text-gray-400 w-24 text-right">(0.95 - 6.00)</span>
                    </div>
                  </div>
                  {errors.wallD && (
                    <div className="text-red-500 font-sans text-[11px] mt-1.5 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" /> <span>{errors.wallD}</span>
                    </div>
                  )}
                </div>

                {/* Tinggi Plafond */}
                <div className="p-3 bg-amber-50/30 hover:bg-amber-50/60 border border-amber-100 rounded-xl transition-all duration-150">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <label htmlFor="input-ceiling" className="font-sans font-semibold text-sm text-[#16233A] min-w-[120px]">
                      Tinggi Plafond
                    </label>
                    <div className="flex items-center space-x-2">
                      <input
                        id="input-ceiling"
                        type="number"
                        step="0.05"
                        min="2.50"
                        max="3.30"
                        value={ceilingHeight}
                        onChange={(e) => handleInputChange('ceilingHeight', e.target.value)}
                        className="w-24 px-3 py-1.5 border border-amber-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300 font-mono text-sm text-right bg-white"
                      />
                      <span className="font-sans text-xs text-gray-500 w-12 text-left">meter</span>
                      <span className="font-mono text-[10px] text-gray-400 w-24 text-right">(2.50 - 3.30)</span>
                    </div>
                  </div>
                  {errors.ceilingHeight && (
                    <div className="text-red-500 font-sans text-[11px] mt-1.5 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" /> <span>{errors.ceilingHeight}</span>
                    </div>
                  )}
                </div>

              </div>
            </div>

            {/* Quick Consultation CTA */}
            <div className="pt-6 mt-6 border-t border-gray-100">
              <button
                id="btn-rab-consult"
                onClick={triggerCustomerService}
                className="w-full bg-[#16233A] hover:bg-[#233554] text-white py-3.5 rounded-xl font-sans font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
              >
                <span>Konsultasikan RAB Ini via WA</span>
                <ArrowRight className="h-4 w-4 text-[#C89A2B]" />
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Floating Button "Customer Service" */}
      <button
        id="floating-cs-button"
        onClick={triggerCustomerService}
        className="fixed bottom-6 right-6 z-40 bg-[#16233A] text-white py-3 px-5 rounded-full shadow-2xl flex items-center space-x-2 border border-[#C89A2B]/40 hover:scale-105 transition-transform duration-200 group cursor-pointer"
        title="Hubungi Customer Service"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <PhoneCall className="h-4 w-4 text-[#C89A2B] group-hover:rotate-12 transition-transform" />
        <span className="font-sans text-xs font-semibold uppercase tracking-wider">
          Customer Service
        </span>
      </button>
    </section>
  );
}
