import { useState, useEffect } from 'react';
import { Menu, X, Phone, Calculator, Landmark } from 'lucide-react';
import { COMPANY_INFO } from '../data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
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
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#16233A] shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            id="navbar-logo-container"
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="bg-[#C89A2B] p-2 rounded text-white flex items-center justify-center">
              <Landmark className="h-6 w-6" />
            </div>
            <div>
              <span className="font-sans font-bold text-lg md:text-xl tracking-tight text-white block leading-none">
                BINTANG UTAMA
              </span>
              <span className="font-mono text-[10px] text-gray-300 tracking-wider uppercase block">
                KONTRAKTOR
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <button
              id="nav-btn-home"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-white hover:text-[#C89A2B] text-sm font-medium transition-colors duration-200 cursor-pointer"
            >
              Beranda
            </button>
            <button
              id="nav-btn-about"
              onClick={() => scrollToSection('tentang-kami')}
              className="text-white hover:text-[#C89A2B] text-sm font-medium transition-colors duration-200 cursor-pointer"
            >
              Tentang Kami
            </button>
            <button
              id="nav-btn-services"
              onClick={() => scrollToSection('layanan')}
              className="text-white hover:text-[#C89A2B] text-sm font-medium transition-colors duration-200 cursor-pointer"
            >
              Layanan
            </button>
            <button
              id="nav-btn-rab"
              onClick={() => scrollToSection('rab-calculator-section')}
              className="text-[#C89A2B] font-semibold text-sm hover:text-white flex items-center gap-1.5 transition-colors duration-200 cursor-pointer"
            >
              <Calculator className="h-4 w-4" /> Kalkulator RAB
            </button>
            <button
              id="nav-btn-portfolio"
              onClick={() => scrollToSection('portfolio')}
              className="text-white hover:text-[#C89A2B] text-sm font-medium transition-colors duration-200 cursor-pointer"
            >
              Portofolio
            </button>
            <button
              id="nav-btn-process"
              onClick={() => scrollToSection('proses-kerja')}
              className="text-white hover:text-[#C89A2B] text-sm font-medium transition-colors duration-200 cursor-pointer"
            >
              Proses Kerja
            </button>
            <button
              id="nav-btn-faq"
              onClick={() => scrollToSection('faq')}
              className="text-white hover:text-[#C89A2B] text-sm font-medium transition-colors duration-200 cursor-pointer"
            >
              FAQ
            </button>
          </div>

          <div className="hidden lg:flex items-center">
            <a
              id="nav-cta-whatsapp"
              href={`https://wa.me/62${COMPANY_INFO.whatsapp1.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C89A2B] hover:bg-opacity-90 text-white font-medium text-sm px-5 py-2.5 rounded-md flex items-center space-x-2 transition-all duration-200 cursor-pointer"
            >
              <Phone className="h-4 w-4" />
              <span>Konsultasi Gratis</span>
            </a>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden flex items-center">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none p-1 cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div id="mobile-drawer" className="lg:hidden bg-[#16233A] border-t border-gray-800 px-4 pt-2 pb-6 space-y-3 shadow-2xl">
          <button
            id="mobile-nav-btn-home"
            onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setIsOpen(false); }}
            className="block w-full text-left text-white hover:text-[#C89A2B] py-2 text-base font-medium border-b border-gray-800"
          >
            Beranda
          </button>
          <button
            id="mobile-nav-btn-about"
            onClick={() => scrollToSection('tentang-kami')}
            className="block w-full text-left text-white hover:text-[#C89A2B] py-2 text-base font-medium border-b border-gray-800"
          >
            Tentang Kami
          </button>
          <button
            id="mobile-nav-btn-services"
            onClick={() => scrollToSection('layanan')}
            className="block w-full text-left text-white hover:text-[#C89A2B] py-2 text-base font-medium border-b border-gray-800"
          >
            Layanan
          </button>
          <button
            id="mobile-nav-btn-rab"
            onClick={() => scrollToSection('rab-calculator-section')}
            className="block w-full text-left text-[#C89A2B] hover:text-white py-2 text-base font-semibold border-b border-gray-800 flex items-center gap-1"
          >
            <Calculator className="h-4 w-4" /> Kalkulator RAB
          </button>
          <button
            id="mobile-nav-btn-portfolio"
            onClick={() => scrollToSection('portfolio')}
            className="block w-full text-left text-white hover:text-[#C89A2B] py-2 text-base font-medium border-b border-gray-800"
          >
            Portofolio
          </button>
          <button
            id="mobile-nav-btn-process"
            onClick={() => scrollToSection('proses-kerja')}
            className="block w-full text-left text-white hover:text-[#C89A2B] py-2 text-base font-medium border-b border-gray-800"
          >
            Proses Kerja
          </button>
          <button
            id="mobile-nav-btn-faq"
            onClick={() => scrollToSection('faq')}
            className="block w-full text-left text-white hover:text-[#C89A2B] py-2 text-base font-medium border-b border-gray-800"
          >
            FAQ
          </button>
          <a
            id="mobile-nav-cta-whatsapp"
            href={`https://wa.me/62${COMPANY_INFO.whatsapp1.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center bg-[#C89A2B] text-white py-3 rounded-md font-medium flex items-center justify-center space-x-2 shadow-md hover:bg-opacity-95"
          >
            <Phone className="h-5 w-5" />
            <span>Hubungi WhatsApp</span>
          </a>
        </div>
      )}
    </nav>
  );
}
