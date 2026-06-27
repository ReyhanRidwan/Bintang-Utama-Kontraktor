import { Mail, MapPin, Phone, Landmark, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, SEO_KEYWORDS } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#16233A] text-white pt-16 pb-8 border-t-4 border-[#C89A2B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-gray-800">
          
          {/* Col 1: Corporate Info */}
          <div className="lg:col-span-5 space-y-6" id="footer-col-identity">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={handleScrollToTop}>
              <div className="bg-[#C89A2B] p-2 rounded text-white flex items-center justify-center">
                <Landmark className="h-6 w-6" />
              </div>
              <div>
                <span className="font-sans font-bold text-lg tracking-tight text-white block leading-none">
                  BINTANG UTAMA
                </span>
                <span className="font-mono text-[10px] text-gray-300 tracking-wider uppercase block">
                  KONTRAKTOR
                </span>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
              <strong className="text-white">{COMPANY_INFO.name}</strong> adalah badan usaha resmi pelaksana jasa perencanaan desain arsitektur, perhitungan sipil, pengerjaan konstruksi, dan kontraktor interior khusus rumah kelas menengah atas di Jawa Timur.
            </p>

            <div className="flex items-center space-x-2 text-xs text-gray-400" id="footer-certifications">
              <ShieldCheck className="h-4 w-4 text-[#C89A2B]" />
              <span>Sertifikat Konstruksi Sipil Berlisensi Resmi</span>
            </div>
          </div>

          {/* Col 2: Hubungi Kami Contact Details */}
          <div className="lg:col-span-4 space-y-4" id="footer-col-contact">
            <h4 className="font-sans font-bold text-sm uppercase tracking-wider text-white border-l-2 border-[#C89A2B] pl-2.5">
              Hubungi Kantor Utama
            </h4>

            <ul className="space-y-3.5 text-xs sm:text-sm text-gray-400 font-sans">
              <li className="flex items-start space-x-3" id="footer-addr-row">
                <MapPin className="h-4 w-4 text-[#C89A2B] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </li>

              <li className="flex items-center space-x-3" id="footer-wa1-row">
                <Phone className="h-4 w-4 text-[#C89A2B] shrink-0" />
                <a href={`https://wa.me/62${COMPANY_INFO.whatsapp1.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  {COMPANY_INFO.whatsapp1} (Admin 1)
                </a>
              </li>

              <li className="flex items-center space-x-3" id="footer-wa2-row">
                <Phone className="h-4 w-4 text-[#C89A2B] shrink-0" />
                <a href={`https://wa.me/62${COMPANY_INFO.whatsapp2.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  {COMPANY_INFO.whatsapp2} (Admin 2)
                </a>
              </li>

              <li className="flex items-center space-x-3" id="footer-email-row">
                <Mail className="h-4 w-4 text-[#C89A2B] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors break-all">
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Layanan Pintar links */}
          <div className="lg:col-span-3 space-y-4" id="footer-col-quicklinks">
            <h4 className="font-sans font-bold text-sm uppercase tracking-wider text-white border-l-2 border-[#C89A2B] pl-2.5">
              Area Operasional
            </h4>
            
            <ul className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-gray-400 font-sans">
              {COMPANY_INFO.serviceAreas.map((area, idx) => (
                <li key={idx} className="flex items-center space-x-1.5">
                  <span className="h-1 w-1.5 bg-[#C89A2B] rounded-full" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-gray-800">
              <span className="text-[10px] text-gray-500 uppercase tracking-widest block mb-2 font-mono">
                Legalitas Badan Usaha:
              </span>
              <span className="bg-gray-800/80 px-2.5 py-1 rounded text-[10px] font-semibold text-gray-300 font-sans uppercase">
                AHU - PT KEMENKUMHAM RI
              </span>
            </div>
          </div>

        </div>

        {/* SEO Keywords Expansion Drawer */}
        <div className="py-6 border-b border-gray-800" id="footer-seo-bar">
          <span className="font-mono text-[9px] tracking-widest text-gray-500 block uppercase mb-3">
            SEO Tags & Wilayah Layanan Kontraktor Surabaya Sidoarjo Gresik:
          </span>
          <div className="flex flex-wrap gap-x-3 gap-y-1.5">
            {SEO_KEYWORDS.map((kw, i) => (
              <span key={i} className="text-gray-500 text-[11px] font-sans hover:text-[#C89A2B] transition-colors">
                #{kw}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright and Bottom layout */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-gray-500 font-sans" id="footer-copyright-bar">
          <p>© {currentYear} {COMPANY_INFO.name}. All Rights Reserved.</p>
          <button 
            id="back-to-top-btn"
            onClick={handleScrollToTop} 
            className="hover:text-white transition-colors cursor-pointer text-[10px] uppercase font-mono tracking-wider"
          >
            Kembali ke Atas ↑
          </button>
        </div>

      </div>
    </footer>
  );
}
