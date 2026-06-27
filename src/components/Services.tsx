import * as Icons from 'lucide-react';
import { SERVICES } from '../data';

export default function Services() {
  // Dynamically map icon names to Lucide icon components
  const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="h-8 w-8 text-[#C89A2B]" />;
    }
    return <Icons.HelpCircle className="h-8 w-8 text-[#C89A2B]" />;
  };

  const handleCtaClick = () => {
    const element = document.getElementById('survey-form-section');
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
    <section id="layanan" className="py-24 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="services-header">
          <span className="text-[#C89A2B] font-mono font-semibold text-xs uppercase tracking-widest block">
            ✦ LAYANAN UTAMA KAMI
          </span>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#16233A] uppercase tracking-tight">
            SOLUSI SPESIALIS KONSTRUKSI HINGGA INTERIOR
          </h2>
          <div className="h-1.5 w-20 bg-[#C89A2B] mx-auto rounded-full" />
          <p className="font-sans text-gray-500 text-sm sm:text-base leading-relaxed">
            Menghadirkan layanan terintegrasi dari tahap konsep arsitektur, perhitungan sipil yang aman, pengerjaan konstruksi di lapangan, hingga instalasi furnitur interior custom.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="services-grid-container">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              id={`service-card-${s.id}`}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Decorative top gold border on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#C89A2B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div className="space-y-6">
                {/* Icon Circle */}
                <div className="bg-[#16233A]/5 group-hover:bg-[#C89A2B]/10 p-4 rounded-xl inline-flex transition-colors duration-300">
                  {renderIcon(s.icon)}
                </div>

                <div className="space-y-2">
                  <h3 className="font-sans font-bold text-lg text-[#16233A] uppercase tracking-wide group-hover:text-[#C89A2B] transition-colors duration-200">
                    {s.title}
                  </h3>
                  <p className="font-sans text-sm text-gray-500 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>

              {/* Action link */}
              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="font-mono text-xs text-gray-400 group-hover:text-[#16233A] transition-colors duration-200">
                  PT BINTANG UTAMA
                </span>
                <button
                  id={`btn-service-consult-${s.id}`}
                  onClick={handleCtaClick}
                  className="text-xs font-semibold text-[#C89A2B] hover:text-[#16233A] flex items-center gap-1 cursor-pointer group-hover:underline"
                >
                  <span>Konsultasikan</span>
                  <Icons.ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
