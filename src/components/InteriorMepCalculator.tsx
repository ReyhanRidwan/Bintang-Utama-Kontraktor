import { useState } from 'react';
import { ArrowLeft, ArrowRight, Printer, Check, Calculator, RefreshCw } from 'lucide-react';
import { COMPANY_INFO } from '../data';

export default function InteriorMepCalculator() {
  const [step, setStep] = useState(1);

  // --- STEP 1: DIMENSI RUANGAN ---
  const [length, setLength] = useState<number>(5.0);
  const [width, setWidth] = useState<number>(4.0);
  const [ceiling, setCeiling] = useState<number>(3.0);

  // --- STEP 2: PEKERJAAN ARSITEKTUR & DINDING ---
  const [plesterAciEnabled, setPlesterAciEnabled] = useState<boolean>(true);
  const [plesterAciPrice, setPlesterAciPrice] = useState<number>(65000);

  const [pengecatanEnabled, setPengecatanEnabled] = useState<boolean>(true);
  const [pengecatanPrice, setPengecatanPrice] = useState<number>(35000);

  const [keramikLantaiEnabled, setKeramikLantaiEnabled] = useState<boolean>(true);
  const [keramikLantaiPrice, setKeramikLantaiPrice] = useState<number>(150000);

  // --- STEP 3: BONGKARAN & PINTU ---
  const [doorCount, setDoorCount] = useState<number>(1);
  const [doorWidth, setDoorWidth] = useState<number>(0.8);
  const [doorHeight, setDoorHeight] = useState<number>(2.1);
  const [doorPaintSpec, setDoorPaintSpec] = useState<string>("Melamik");

  const [bongkarLantaiEnabled, setBongkarLantaiEnabled] = useState<boolean>(false);
  const [bongkarLantaiPrice, setBongkarLantaiPrice] = useState<number>(45000);

  const [catKusenEnabled, setCatKusenEnabled] = useState<boolean>(false);
  const [catKusenPrice, setCatKusenPrice] = useState<number>(55000);

  // --- STEP 4: MEKANIKAL, ELEKTRIKAL, PLUMBING ---
  const [pasangLampuEnabled, setPasangLampuEnabled] = useState<boolean>(false);
  const [lampuCount, setLampuCount] = useState<number>(4);
  const [lampuSize, setLampuSize] = useState<string>("4 Inch");
  const [lampuPrice, setLampuPrice] = useState<number>(35000);

  const [saklarEnabled, setSaklarEnabled] = useState<boolean>(false);
  const [saklarCount, setSaklarCount] = useState<number>(2);
  const [saklarPrice, setSaklarPrice] = useState<number>(25000);

  const [exhaustEnabled, setExhaustEnabled] = useState<boolean>(false);
  const [exhaustCount, setExhaustCount] = useState<number>(1);
  const [exhaustPrice, setExhaustPrice] = useState<number>(350000);

  const [instalasiListrikEnabled, setInstalasiListrikEnabled] = useState<boolean>(false);
  const [instalasiListrikCount, setInstalasiListrikCount] = useState<number>(6);
  const [instalasiListrikPrice, setInstalasiListrikPrice] = useState<number>(220000);

  // --- CALCULATIONS FOR SUMMARY ---
  const volumeDindingKotor = ((length * 2) + (width * 2)) * ceiling;
  const volumeLantai = length * width;
  const volumeCatKusen = ((doorHeight * 2) + doorWidth) * doorCount;

  // Items to compile in Step 5
  const items = [
    {
      id: "plester-aci",
      name: "Plester & Aci Dinding",
      enabled: plesterAciEnabled,
      volume: volumeDindingKotor,
      unit: "m²",
      pricePerUnit: plesterAciPrice,
      total: volumeDindingKotor * plesterAciPrice
    },
    {
      id: "pengecatan",
      name: "Pengecatan Dinding",
      enabled: pengecatanEnabled,
      volume: volumeDindingKotor,
      unit: "m²",
      pricePerUnit: pengecatanPrice,
      total: volumeDindingKotor * pengecatanPrice
    },
    {
      id: "keramik-lantai",
      name: "Pemasangan Keramik Lantai",
      enabled: keramikLantaiEnabled,
      volume: volumeLantai,
      unit: "m²",
      pricePerUnit: keramikLantaiPrice,
      total: volumeLantai * keramikLantaiPrice
    },
    {
      id: "bongkar-lantai",
      name: "Bongkar Lantai Lama",
      enabled: bongkarLantaiEnabled,
      volume: volumeLantai,
      unit: "m²",
      pricePerUnit: bongkarLantaiPrice,
      total: volumeLantai * bongkarLantaiPrice
    },
    {
      id: "cat-kusen",
      name: `Cat Kusen Pintu (${doorPaintSpec})`,
      enabled: catKusenEnabled,
      volume: volumeCatKusen,
      unit: "m'",
      pricePerUnit: catKusenPrice + (doorPaintSpec === "Duco" ? 200000 / (volumeCatKusen || 1) : 0),
      total: (volumeCatKusen * catKusenPrice) + (doorPaintSpec === "Duco" ? 200000 * doorCount : 0)
    },
    {
      id: "pasang-lampu",
      name: `Pasang Lampu Baru (Size: ${lampuSize})`,
      enabled: pasangLampuEnabled,
      volume: lampuCount,
      unit: "Unit",
      pricePerUnit: lampuPrice,
      total: lampuCount * lampuPrice
    },
    {
      id: "saklar",
      name: "Saklar & Stop Kontak",
      enabled: saklarEnabled,
      volume: saklarCount,
      unit: "Unit",
      pricePerUnit: saklarPrice,
      total: saklarCount * saklarPrice
    },
    {
      id: "exhaust",
      name: "Pasang Exhaust Fan",
      enabled: exhaustEnabled,
      volume: exhaustCount,
      unit: "Unit",
      pricePerUnit: exhaustPrice,
      total: exhaustCount * exhaustPrice
    },
    {
      id: "instalasi-listrik",
      name: "Instalasi Listrik (Kabel & Pipa)",
      enabled: instalasiListrikEnabled,
      volume: instalasiListrikCount,
      unit: "Titik",
      pricePerUnit: instalasiListrikPrice,
      total: instalasiListrikCount * instalasiListrikPrice
    }
  ];

  const enabledItems = items.filter(item => item.enabled);
  const grandTotal = enabledItems.reduce((acc, curr) => acc + curr.total, 0);

  const formatIDR = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  };

  const handleNext = () => {
    if (step < 5) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const resetAll = () => {
    setLength(5.0);
    setWidth(4.0);
    setCeiling(3.0);
    setPlesterAciEnabled(true);
    setPlesterAciPrice(65000);
    setPengecatanEnabled(true);
    setPengecatanPrice(35000);
    setKeramikLantaiEnabled(true);
    setKeramikLantaiPrice(150000);
    setDoorCount(1);
    setDoorWidth(0.8);
    setDoorHeight(2.1);
    setDoorPaintSpec("Melamik");
    setBongkarLantaiEnabled(false);
    setBongkarLantaiPrice(45000);
    setCatKusenEnabled(false);
    setCatKusenPrice(55000);
    setPasangLampuEnabled(false);
    setLampuCount(4);
    setLampuSize("4 Inch");
    setLampuPrice(35000);
    setSaklarEnabled(false);
    setSaklarCount(2);
    setSaklarPrice(25000);
    setExhaustEnabled(false);
    setExhaustCount(1);
    setExhaustPrice(350000);
    setInstalasiListrikEnabled(false);
    setInstalasiListrikCount(6);
    setInstalasiListrikPrice(220000);
    setStep(1);
  };

  const handlePrint = () => {
    window.print();
  };

  // Stepper Header Icons/Names
  const stepTitles = [
    "Dimensi",
    "Arsitektur",
    "Pintu & Bongkaran",
    "MEP & Listrik",
    "Hasil RAB"
  ];

  return (
    <section id="interior-mep-calculator-section" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Main Box Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3" id="imep-header">
          <span className="text-[#C89A2B] font-mono font-semibold text-xs uppercase tracking-widest block">
            ✦ INTERIOR & MEP ESTIMATOR
          </span>
          <h2 className="font-sans font-bold text-2xl sm:text-3xl text-[#16233A] uppercase tracking-tight">
            Kalkulator RAB Interior & MEP Pro
          </h2>
          <div className="h-1 w-16 bg-[#C89A2B] mx-auto rounded-full" />
          <p className="font-sans text-xs sm:text-sm text-gray-500">
            Dapatkan estimasi Rencana Anggaran Biaya pengerjaan arsitektur sipil, instalasi MEP (Mekanikal Elektrikal Plumbing) real-time dengan spesifikasi material dinamis.
          </p>
        </div>

        {/* Stepper Wizard Indicator */}
        <div className="mb-10" id="imep-stepper-visual">
          <div className="flex items-center justify-between relative">
            {/* Background line */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-gray-200 z-0" />
            
            {/* Active Highlight Line */}
            <div 
              className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 bg-[#C89A2B] transition-all duration-300 z-0" 
              style={{ width: `${((step - 1) / 4) * 100}%` }}
            />

            {stepTitles.map((title, index) => {
              const active = step >= index + 1;
              const current = step === index + 1;
              return (
                <div key={index} className="flex flex-col items-center relative z-10">
                  <button
                    id={`stepper-circle-btn-${index + 1}`}
                    onClick={() => index + 1 < step || step === 5 ? setStep(index + 1) : null}
                    className={`h-8 w-8 rounded-full font-mono text-xs font-bold flex items-center justify-center transition-all duration-300 cursor-pointer ${
                      active 
                        ? 'bg-[#C89A2B] text-white ring-4 ring-amber-50' 
                        : 'bg-gray-100 text-gray-400 border border-gray-200'
                    } ${current ? 'scale-110 !bg-[#16233A]' : ''}`}
                  >
                    {step > index + 1 ? <Check className="h-4 w-4" /> : index + 1}
                  </button>
                  <span className="hidden sm:block text-[10px] font-sans font-semibold uppercase mt-2 text-gray-500 tracking-wider">
                    {title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden" id="imep-stepper-body">
          
          {/* Subtle design header for context */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#C89A2B]" />

          <div className="min-h-[280px]">
            {/* --- TAHAP 1: DIMENSI RUANGAN --- */}
            {step === 1 && (
              <div className="space-y-6" id="imep-step-1">
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-sans font-bold text-[#16233A] text-lg uppercase tracking-wide">
                    Tahap 1: Dimensi Utama Ruangan
                  </h3>
                  <p className="text-gray-500 text-xs mt-1">
                    Silakan tentukan dimensi panjang, lebar, dan tinggi plafond ruangan untuk pemicu perhitungan volume pekerjaan dinding dan lantai.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Panjang */}
                  <div className="space-y-2">
                    <label htmlFor="p-ruangan" className="font-sans font-semibold text-sm text-[#16233A] block">
                      Panjang Ruangan (meter)
                    </label>
                    <input
                      id="p-ruangan"
                      type="number"
                      step="0.1"
                      min="1.0"
                      value={length}
                      onChange={(e) => setLength(Math.max(1, parseFloat(e.target.value) || 0))}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 font-mono text-base"
                    />
                    <p className="text-[10px] text-gray-400">Contoh: 5 meter</p>
                  </div>

                  {/* Lebar */}
                  <div className="space-y-2">
                    <label htmlFor="l-ruangan" className="font-sans font-semibold text-sm text-[#16233A] block">
                      Lebar Ruangan (meter)
                    </label>
                    <input
                      id="l-ruangan"
                      type="number"
                      step="0.1"
                      min="1.0"
                      value={width}
                      onChange={(e) => setWidth(Math.max(1, parseFloat(e.target.value) || 0))}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 font-mono text-base"
                    />
                    <p className="text-[10px] text-gray-400">Contoh: 4 meter</p>
                  </div>

                  {/* Tinggi Plafond */}
                  <div className="space-y-2">
                    <label htmlFor="h-plafond" className="font-sans font-semibold text-sm text-[#16233A] block">
                      Tinggi Plafond (meter)
                    </label>
                    <input
                      id="h-plafond"
                      type="number"
                      step="0.1"
                      min="2.0"
                      value={ceiling}
                      onChange={(e) => setCeiling(Math.max(2, parseFloat(e.target.value) || 0))}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 font-mono text-base"
                    />
                    <p className="text-[10px] text-gray-400">Contoh: 3 meter</p>
                  </div>
                </div>

                <div className="bg-amber-50/50 border border-amber-200/50 p-4 rounded-xl flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-amber-800 font-mono tracking-wider block uppercase font-bold">
                      INFO HASIL HITUNG AUTOMATIS
                    </span>
                    <span className="font-sans text-xs text-gray-600 mt-1 block">
                      Volume Dinding Kotor: <strong>{volumeDindingKotor.toFixed(2)} m²</strong> | Volume Lantai: <strong>{volumeLantai.toFixed(2)} m²</strong>
                    </span>
                  </div>
                  <Calculator className="h-6 w-6 text-[#C89A2B] shrink-0 hidden sm:block" />
                </div>
              </div>
            )}

            {/* --- TAHAP 2: PEKERJAAN ARSITEKTUR & DINDING --- */}
            {step === 2 && (
              <div className="space-y-6" id="imep-step-2">
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-sans font-bold text-[#16233A] text-lg uppercase tracking-wide">
                    Tahap 2: Pekerjaan Arsitektur & Dinding
                  </h3>
                  <p className="text-gray-500 text-xs mt-1">
                    Pilih pekerjaan apa saja yang akan diproses. Geser slider untuk menyesuaikan kualitas & harga material yang diinginkan.
                  </p>
                </div>

                <div className="space-y-5">
                  {/* Item 1: Plester & Aci */}
                  <div className="p-5 bg-white border border-gray-150 rounded-2xl shadow-sm space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <input
                          id="chk-plester"
                          type="checkbox"
                          checked={plesterAciEnabled}
                          onChange={(e) => setPlesterAciEnabled(e.target.checked)}
                          className="h-5 w-5 rounded border-gray-300 text-[#C89A2B] focus:ring-amber-500"
                        />
                        <label htmlFor="chk-plester" className="font-sans font-bold text-sm text-[#16233A] uppercase tracking-wide">
                          Plester & Aci Dinding
                        </label>
                      </div>
                      <span className="font-mono text-xs text-gray-500">
                        Vol: {volumeDindingKotor.toFixed(2)} m²
                      </span>
                    </div>

                    {plesterAciEnabled && (
                      <div className="space-y-2 pt-2 border-t border-gray-100">
                        <div className="flex justify-between items-center text-xs text-gray-500">
                          <span>Slider Harga Satuan:</span>
                          <span className="font-semibold text-emerald-600 font-mono">{formatIDR(plesterAciPrice)}/m²</span>
                        </div>
                        <input
                          type="range"
                          min="50000"
                          max="150000"
                          step="5000"
                          value={plesterAciPrice}
                          onChange={(e) => setPlesterAciPrice(parseInt(e.target.value))}
                          className="w-full accent-[#C89A2B]"
                        />
                        <div className="flex justify-between text-[10px] font-mono text-gray-400">
                          <span>Standard (Rp 50rb)</span>
                          <span>Premium (Rp 150rb)</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Item 2: Pengecatan */}
                  <div className="p-5 bg-white border border-gray-150 rounded-2xl shadow-sm space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <input
                          id="chk-pengecatan"
                          type="checkbox"
                          checked={pengecatanEnabled}
                          onChange={(e) => setPengecatanEnabled(e.target.checked)}
                          className="h-5 w-5 rounded border-gray-300 text-[#C89A2B] focus:ring-amber-500"
                        />
                        <label htmlFor="chk-pengecatan" className="font-sans font-bold text-sm text-[#16233A] uppercase tracking-wide">
                          Pengecatan Dinding
                        </label>
                      </div>
                      <span className="font-mono text-xs text-gray-500">
                        Vol: {volumeDindingKotor.toFixed(2)} m²
                      </span>
                    </div>

                    {pengecatanEnabled && (
                      <div className="space-y-2 pt-2 border-t border-gray-100">
                        <div className="flex justify-between items-center text-xs text-gray-500">
                          <span>Slider Harga Satuan:</span>
                          <span className="font-semibold text-emerald-600 font-mono">{formatIDR(pengecatanPrice)}/m²</span>
                        </div>
                        <input
                          type="range"
                          min="25000"
                          max="80000"
                          step="1000"
                          value={pengecatanPrice}
                          onChange={(e) => setPengecatanPrice(parseInt(e.target.value))}
                          className="w-full accent-[#C89A2B]"
                        />
                        <div className="flex justify-between text-[10px] font-mono text-gray-400">
                          <span>Kebutuhan Dasar (Rp 25rb)</span>
                          <span>Eksklusif Jotun (Rp 80rb)</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Item 3: Keramik Lantai */}
                  <div className="p-5 bg-white border border-gray-150 rounded-2xl shadow-sm space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <input
                          id="chk-keramik"
                          type="checkbox"
                          checked={keramikLantaiEnabled}
                          onChange={(e) => setKeramikLantaiEnabled(e.target.checked)}
                          className="h-5 w-5 rounded border-gray-300 text-[#C89A2B] focus:ring-amber-500"
                        />
                        <label htmlFor="chk-keramik" className="font-sans font-bold text-sm text-[#16233A] uppercase tracking-wide">
                          Pemasangan Keramik Lantai
                        </label>
                      </div>
                      <span className="font-mono text-xs text-gray-500">
                        Vol: {volumeLantai.toFixed(2)} m²
                      </span>
                    </div>

                    {keramikLantaiEnabled && (
                      <div className="space-y-2 pt-2 border-t border-gray-100">
                        <div className="flex justify-between items-center text-xs text-gray-500">
                          <span>Slider Harga Satuan:</span>
                          <span className="font-semibold text-emerald-600 font-mono">{formatIDR(keramikLantaiPrice)}/m²</span>
                        </div>
                        <input
                          type="range"
                          min="100000"
                          max="350000"
                          step="5000"
                          value={keramikLantaiPrice}
                          onChange={(e) => setKeramikLantaiPrice(parseInt(e.target.value))}
                          className="w-full accent-[#C89A2B]"
                        />
                        <div className="flex justify-between text-[10px] font-mono text-gray-400">
                          <span>Keramik Lokal 40x40 (Rp 100rb)</span>
                          <span>Granit Tile 60x60 (Rp 350rb)</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* --- TAHAP 3: BONGKARAN & PINTU --- */}
            {step === 3 && (
              <div className="space-y-6" id="imep-step-3">
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-sans font-bold text-[#16233A] text-lg uppercase tracking-wide">
                    Tahap 3: Bongkaran & Kusen Pintu
                  </h3>
                  <p className="text-gray-500 text-xs mt-1">
                    Silakan tentukan ukuran pintu untuk menghitung pengerjaan finishing cat kusen dan pekerjaan bongkar lantai lama.
                  </p>
                </div>

                {/* Door specs variables */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-white border border-gray-150 rounded-2xl shadow-sm">
                  <div className="space-y-1.5">
                    <label htmlFor="pintu-jml" className="font-sans font-semibold text-xs text-gray-500 uppercase">Jumlah Pintu</label>
                    <input
                      id="pintu-jml"
                      type="number"
                      min="0"
                      value={doorCount}
                      onChange={(e) => setDoorCount(Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-mono text-right"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="pintu-lbr" className="font-sans font-semibold text-xs text-gray-500 uppercase">Lebar Pintu (m)</label>
                    <input
                      id="pintu-lbr"
                      type="number"
                      step="0.1"
                      min="0.1"
                      value={doorWidth}
                      onChange={(e) => setDoorWidth(Math.max(0.1, parseFloat(e.target.value) || 0))}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-mono text-right"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="pintu-tgi" className="font-sans font-semibold text-xs text-gray-500 uppercase">Tinggi Pintu (m)</label>
                    <input
                      id="pintu-tgi"
                      type="number"
                      step="0.1"
                      min="0.1"
                      value={doorHeight}
                      onChange={(e) => setDoorHeight(Math.max(0.1, parseFloat(e.target.value) || 0))}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-mono text-right"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="pintu-cat" className="font-sans font-semibold text-xs text-gray-500 uppercase">Finishing Kusen</label>
                    <select
                      id="pintu-cat"
                      value={doorPaintSpec}
                      onChange={(e) => setDoorPaintSpec(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs font-semibold text-[#16233A] focus:outline-none"
                    >
                      <option value="Melamik">Melamik (Normal)</option>
                      <option value="Duco">Duco (+Rp200K / unit)</option>
                    </select>
                  </div>
                </div>

                {/* Sub-Checkboxes */}
                <div className="space-y-4">
                  {/* Bongkar Lantai */}
                  <div className="p-5 bg-white border border-gray-150 rounded-2xl shadow-sm space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <input
                          id="chk-bongkar"
                          type="checkbox"
                          checked={bongkarLantaiEnabled}
                          onChange={(e) => setBongkarLantaiEnabled(e.target.checked)}
                          className="h-5 w-5 rounded border-gray-300 text-[#C89A2B] focus:ring-amber-500"
                        />
                        <label htmlFor="chk-bongkar" className="font-sans font-bold text-sm text-[#16233A] uppercase tracking-wide">
                          Bongkar Lantai Lama
                        </label>
                      </div>
                      <span className="font-mono text-xs text-gray-500">
                        Vol: {volumeLantai.toFixed(2)} m²
                      </span>
                    </div>

                    {bongkarLantaiEnabled && (
                      <div className="space-y-2 pt-2 border-t border-gray-100">
                        <div className="flex justify-between items-center text-xs text-gray-500">
                          <span>Slider Harga Bongkar:</span>
                          <span className="font-semibold text-emerald-600 font-mono">{formatIDR(bongkarLantaiPrice)}/m²</span>
                        </div>
                        <input
                          type="range"
                          min="30000"
                          max="100000"
                          step="2000"
                          value={bongkarLantaiPrice}
                          onChange={(e) => setBongkarLantaiPrice(parseInt(e.target.value))}
                          className="w-full accent-[#C89A2B]"
                        />
                        <div className="flex justify-between text-[10px] font-mono text-gray-400">
                          <span>Ringan (Rp 30rb)</span>
                          <span>Bongkar Total + Buang Puing (Rp 100rb)</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Cat Kusen Pintu */}
                  <div className="p-5 bg-white border border-gray-150 rounded-2xl shadow-sm space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <input
                          id="chk-kusen"
                          type="checkbox"
                          checked={catKusenEnabled}
                          onChange={(e) => setCatKusenEnabled(e.target.checked)}
                          className="h-5 w-5 rounded border-gray-300 text-[#C89A2B] focus:ring-amber-500"
                        />
                        <label htmlFor="chk-kusen" className="font-sans font-bold text-sm text-[#16233A] uppercase tracking-wide">
                          Cat Kusen Pintu
                        </label>
                      </div>
                      <span className="font-mono text-xs text-gray-500">
                        Vol: {volumeCatKusen.toFixed(2)} m'
                      </span>
                    </div>

                    {catKusenEnabled && (
                      <div className="space-y-2 pt-2 border-t border-gray-100">
                        <div className="flex justify-between items-center text-xs text-gray-500">
                          <span>Slider Cat Kusen:</span>
                          <span className="font-semibold text-emerald-600 font-mono">{formatIDR(catKusenPrice)}/m'</span>
                        </div>
                        <input
                          type="range"
                          min="40000"
                          max="90000"
                          step="2000"
                          value={catKusenPrice}
                          onChange={(e) => setCatKusenPrice(parseInt(e.target.value))}
                          className="w-full accent-[#C89A2B]"
                        />
                        <div className="flex justify-between text-[10px] font-mono text-gray-400">
                          <span>Sederhana (Rp 40rb)</span>
                          <span>Eksklusif (Rp 90rb)</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            )}

            {/* --- TAHAP 4: MEKANIKAL, ELEKTRIKAL, PLUMBING --- */}
            {step === 4 && (
              <div className="space-y-6" id="imep-step-4">
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-sans font-bold text-[#16233A] text-lg uppercase tracking-wide">
                    Tahap 4: Mekanikal, Elektrikal, Plumbing (MEP)
                  </h3>
                  <p className="text-gray-500 text-xs mt-1">
                    Silakan tentukan kebutuhan titik saklar, stop kontak, lampu baru, dan exhaust fan untuk estimasi kelistrikan.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Item 1: Pasang Lampu */}
                  <div className="p-4 bg-white border border-gray-150 rounded-2xl shadow-sm space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center space-x-3">
                        <input
                          id="chk-lampu"
                          type="checkbox"
                          checked={pasangLampuEnabled}
                          onChange={(e) => setPasangLampuEnabled(e.target.checked)}
                          className="h-5 w-5 rounded border-gray-300 text-[#C89A2B] focus:ring-amber-500"
                        />
                        <label htmlFor="chk-lampu" className="font-sans font-bold text-sm text-[#16233A] uppercase tracking-wide">
                          Pasang Lampu Baru
                        </label>
                      </div>

                      {pasangLampuEnabled && (
                        <div className="flex items-center gap-3">
                          <div className="flex items-center space-x-1">
                            <span className="text-xs text-gray-400">Jml:</span>
                            <input
                              type="number"
                              min="1"
                              value={lampuCount}
                              onChange={(e) => setLampuCount(Math.max(1, parseInt(e.target.value) || 0))}
                              className="w-16 px-2 py-1 border border-gray-200 rounded font-mono text-xs text-right"
                            />
                          </div>
                          <select
                            value={lampuSize}
                            onChange={(e) => setLampuSize(e.target.value)}
                            className="px-2 py-1 border border-gray-200 rounded text-xs text-[#16233A] focus:outline-none"
                          >
                            <option value="3 Inch">3 Inch</option>
                            <option value="4 Inch">4 Inch</option>
                            <option value="5 Inch">5 Inch</option>
                          </select>
                        </div>
                      )}
                    </div>

                    {pasangLampuEnabled && (
                      <div className="space-y-1.5 pt-2 border-t border-gray-100">
                        <div className="flex justify-between items-center text-xs text-gray-500">
                          <span>Slider Harga Material Toko:</span>
                          <span className="font-semibold text-emerald-600 font-mono">{formatIDR(lampuPrice)}/unit</span>
                        </div>
                        <input
                          type="range"
                          min="15000"
                          max="100000"
                          step="1000"
                          value={lampuPrice}
                          onChange={(e) => setLampuPrice(parseInt(e.target.value))}
                          className="w-full accent-[#C89A2B]"
                        />
                      </div>
                    )}
                  </div>

                  {/* Item 2: Saklar */}
                  <div className="p-4 bg-white border border-gray-150 rounded-2xl shadow-sm space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center space-x-3">
                        <input
                          id="chk-saklar"
                          type="checkbox"
                          checked={saklarEnabled}
                          onChange={(e) => setSaklarEnabled(e.target.checked)}
                          className="h-5 w-5 rounded border-gray-300 text-[#C89A2B] focus:ring-amber-500"
                        />
                        <label htmlFor="chk-saklar" className="font-sans font-bold text-sm text-[#16233A] uppercase tracking-wide">
                          Saklar & Stop Kontak
                        </label>
                      </div>

                      {saklarEnabled && (
                        <div className="flex items-center space-x-1">
                          <span className="text-xs text-gray-400">Jml:</span>
                          <input
                            type="number"
                            min="1"
                            value={saklarCount}
                            onChange={(e) => setSaklarCount(Math.max(1, parseInt(e.target.value) || 0))}
                            className="w-16 px-2 py-1 border border-gray-200 rounded font-mono text-xs text-right"
                          />
                          <span className="text-xs text-gray-400 pl-1">Unit</span>
                        </div>
                      )}
                    </div>

                    {saklarEnabled && (
                      <div className="space-y-1.5 pt-2 border-t border-gray-100">
                        <div className="flex justify-between items-center text-xs text-gray-500">
                          <span>Slider Harga Saklar:</span>
                          <span className="font-semibold text-emerald-600 font-mono">{formatIDR(saklarPrice)}/unit</span>
                        </div>
                        <input
                          type="range"
                          min="15000"
                          max="50000"
                          step="1000"
                          value={saklarPrice}
                          onChange={(e) => setSaklarPrice(parseInt(e.target.value))}
                          className="w-full accent-[#C89A2B]"
                        />
                      </div>
                    )}
                  </div>

                  {/* Item 3: Exhaust Fan */}
                  <div className="p-4 bg-white border border-gray-150 rounded-2xl shadow-sm space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center space-x-3">
                        <input
                          id="chk-exhaust"
                          type="checkbox"
                          checked={exhaustEnabled}
                          onChange={(e) => setExhaustEnabled(e.target.checked)}
                          className="h-5 w-5 rounded border-gray-300 text-[#C89A2B] focus:ring-amber-500"
                        />
                        <label htmlFor="chk-exhaust" className="font-sans font-bold text-sm text-[#16233A] uppercase tracking-wide">
                          Exhaust Fan Dinding/Plafon
                        </label>
                      </div>

                      {exhaustEnabled && (
                        <div className="flex items-center space-x-1">
                          <span className="text-xs text-gray-400">Jml:</span>
                          <input
                            type="number"
                            min="1"
                            value={exhaustCount}
                            onChange={(e) => setExhaustCount(Math.max(1, parseInt(e.target.value) || 0))}
                            className="w-16 px-2 py-1 border border-gray-200 rounded font-mono text-xs text-right"
                          />
                          <span className="text-xs text-gray-400 pl-1">Unit</span>
                        </div>
                      )}
                    </div>

                    {exhaustEnabled && (
                      <div className="space-y-1.5 pt-2 border-t border-gray-100">
                        <div className="flex justify-between items-center text-xs text-gray-500">
                          <span>Slider Harga Exhaust:</span>
                          <span className="font-semibold text-emerald-600 font-mono">{formatIDR(exhaustPrice)}/unit</span>
                        </div>
                        <input
                          type="range"
                          min="200000"
                          max="1500000"
                          step="20000"
                          value={exhaustPrice}
                          onChange={(e) => setExhaustPrice(parseInt(e.target.value))}
                          className="w-full accent-[#C89A2B]"
                        />
                      </div>
                    )}
                  </div>

                  {/* Item 4: Instalasi Kabel */}
                  <div className="p-4 bg-white border border-gray-150 rounded-2xl shadow-sm space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center space-x-3">
                        <input
                          id="chk-kabel"
                          type="checkbox"
                          checked={instalasiListrikEnabled}
                          onChange={(e) => setInstalasiListrikEnabled(e.target.checked)}
                          className="h-5 w-5 rounded border-gray-300 text-[#C89A2B] focus:ring-amber-500"
                        />
                        <label htmlFor="chk-kabel" className="font-sans font-bold text-sm text-[#16233A] uppercase tracking-wide">
                          Instalasi Listrik (Kabel & Pipa)
                        </label>
                      </div>

                      {instalasiListrikEnabled && (
                        <div className="flex items-center space-x-1">
                          <span className="text-xs text-gray-400">Titik:</span>
                          <input
                            type="number"
                            min="1"
                            value={instalasiListrikCount}
                            onChange={(e) => setInstalasiListrikCount(Math.max(1, parseInt(e.target.value) || 0))}
                            className="w-16 px-2 py-1 border border-gray-200 rounded font-mono text-xs text-right"
                          />
                          <span className="text-xs text-gray-400 pl-1">ttk</span>
                        </div>
                      )}
                    </div>

                    {instalasiListrikEnabled && (
                      <div className="space-y-1.5 pt-2 border-t border-gray-100">
                        <div className="flex justify-between items-center text-xs text-gray-500">
                          <span>Slider Jasa+Material:</span>
                          <span className="font-semibold text-emerald-600 font-mono">{formatIDR(instalasiListrikPrice)}/ttk</span>
                        </div>
                        <input
                          type="range"
                          min="150000"
                          max="350000"
                          step="5000"
                          value={instalasiListrikPrice}
                          onChange={(e) => setInstalasiListrikPrice(parseInt(e.target.value))}
                          className="w-full accent-[#C89A2B]"
                        />
                      </div>
                    )}
                  </div>
                </div>

              </div>
            )}

            {/* --- TAHAP 5: HALAMAN HASIL (REKAPITULASI) --- */}
            {step === 5 && (
              <div className="space-y-6 print:p-0 print:border-none print:shadow-none" id="imep-step-5">
                <div className="border-b border-gray-200 pb-4 flex justify-between items-start">
                  <div>
                    <h3 className="font-sans font-bold text-[#16233A] text-lg uppercase tracking-wide">
                      REKAPITULASI ESTIMASI RAB INTERIOR & MEP
                    </h3>
                    <p className="text-gray-500 text-xs mt-1">
                      Dokumen rekap otomatis berdasarkan ukuran ruang ({length}x{width}x{ceiling}m) dan spesifikasi pengerjaan yang dicentang.
                    </p>
                  </div>
                  
                  {/* Print Button inside step */}
                  <button
                    id="print-rab-receipt-btn"
                    onClick={handlePrint}
                    className="bg-gray-800 hover:bg-gray-700 text-white p-2.5 rounded-lg flex items-center space-x-1 text-xs font-semibold cursor-pointer shrink-0 print:hidden transition-all"
                  >
                    <Printer className="h-4 w-4" />
                    <span>Cetak / PDF</span>
                  </button>
                </div>

                {enabledItems.length === 0 ? (
                  <div className="text-center py-12 bg-white border border-dashed rounded-2xl" id="no-items-selected">
                    <p className="text-gray-400 font-sans text-sm">Tidak ada pekerjaan yang dicentang di langkah sebelumnya.</p>
                    <p className="text-xs text-gray-400 mt-1">Silakan kembali dan centang minimal satu item pekerjaan.</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto bg-white border border-gray-200 rounded-xl shadow-sm" id="receipt-table-container">
                    <table className="min-w-full divide-y divide-gray-200 text-left">
                      <thead className="bg-[#16233A] text-white font-sans text-xs uppercase tracking-wider">
                        <tr>
                          <th className="px-4 py-3.5 font-bold">Item Pekerjaan</th>
                          <th className="px-4 py-3.5 font-bold text-center">Volume</th>
                          <th className="px-4 py-3.5 font-bold text-center">Satuan</th>
                          <th className="px-4 py-3.5 font-bold text-right">Harga Satuan</th>
                          <th className="px-4 py-3.5 font-bold text-right">Subtotal</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 font-sans text-xs text-gray-600">
                        {enabledItems.map((item) => (
                          <tr key={item.id} className="hover:bg-gray-50">
                            <td className="px-4 py-3 font-semibold text-[#16233A]">{item.name}</td>
                            <td className="px-4 py-3 text-center font-mono">{item.volume.toFixed(2)}</td>
                            <td className="px-4 py-3 text-center">{item.unit}</td>
                            <td className="px-4 py-3 text-right font-mono">{formatIDR(item.pricePerUnit)}</td>
                            <td className="px-4 py-3 text-right font-semibold text-gray-900 font-mono">{formatIDR(item.total)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Grand Total Bar */}
                <div className="bg-[#16233A] text-white p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md" id="grand-total-bar">
                  <div className="text-center sm:text-left">
                    <span className="font-mono text-[10px] text-[#C89A2B] uppercase tracking-wider block font-semibold">
                      ESTIMASI GRAND TOTAL KESELURUHAN
                    </span>
                    <span className="font-sans text-xs text-gray-300">
                      *Estimasi bersifat perkiraan awal acuan RAB
                    </span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold font-sans text-[#C89A2B]">
                    {formatIDR(grandTotal)}
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-2 pt-4 print:hidden">
                  <button
                    id="btn-imep-reset-all"
                    onClick={resetAll}
                    className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-gray-500 hover:text-red-500 bg-gray-100 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                  >
                    <RefreshCw className="h-3.5 w-3.5" />
                    <span>Reset Ulang Form</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Stepper Footer Controls */}
          <div className="flex items-center justify-between pt-8 mt-8 border-t border-gray-200 print:hidden" id="imep-stepper-footer">
            <button
              id="btn-imep-prev"
              disabled={step === 1}
              onClick={handlePrev}
              className={`flex items-center space-x-1 px-5 py-3 rounded-xl border border-gray-200 text-sm font-semibold transition-all cursor-pointer ${
                step === 1 
                  ? 'opacity-40 cursor-not-allowed text-gray-300' 
                  : 'bg-white hover:bg-gray-100 text-gray-700'
              }`}
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Kembali</span>
            </button>

            {step < 5 ? (
              <button
                id="btn-imep-next"
                onClick={handleNext}
                className="bg-[#C89A2B] hover:bg-opacity-90 text-white px-6 py-3 rounded-xl font-semibold text-sm flex items-center space-x-1.5 transition-all cursor-pointer border-b-2 border-amber-800"
              >
                <span>{step === 4 ? 'Lihat Hasil' : 'Berikutnya'}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <a
                id="btn-imep-wa-direct"
                href={`https://wa.me/62${COMPANY_INFO.whatsapp1.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                  `Halo Admin Bintang Utama Kontraktor, saya baru saja melakukan simulasi RAB di kalkulator website dengan Grand Total: ${formatIDR(grandTotal)}.\nUkuran Ruang: ${length}x${width}x${ceiling}m.\nMohon info selanjutnya.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#C89A2B] hover:bg-opacity-95 text-white px-6 py-3 rounded-xl font-semibold text-sm flex items-center space-x-1.5 shadow-md"
              >
                <span>Hubungi WA Admin</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
