import { PROCESS_STEPS } from '../data';

export default function Process() {
  return (
    <section id="proses-kerja" className="py-24 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4" id="process-header">
          <span className="text-[#C89A2B] font-mono font-semibold text-xs uppercase tracking-widest block">
            ✦ PROSES KERJA SISTEMATIS
          </span>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#16233A] uppercase tracking-tight">
            7 TAHAPAN MEMBANGUN TANPA RAGU
          </h2>
          <div className="h-1.5 w-20 bg-[#C89A2B] mx-auto rounded-full" />
          <p className="font-sans text-gray-500 text-sm sm:text-base leading-relaxed">
            Setiap pengerjaan diawasi secara tertib dengan SOP terstandarisasi demi menjamin ketepatan kualitas konstruksi dan waktu penyerahan kunci.
          </p>
        </div>

        {/* Timeline Line */}
        <div className="relative" id="timeline-container">
          {/* Vertical line for mobile, horizontal for desktop (custom tailwind classes) */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 md:space-y-20 relative">
            {PROCESS_STEPS.map((s, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={s.step} 
                  id={`process-step-row-${s.step}`}
                  className={`flex flex-col md:flex-row items-stretch ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Left Column (Desktop) */}
                  <div className="flex-1 md:px-12 flex items-center justify-end" id={`process-col-a-${s.step}`}>
                    {!isEven && (
                      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-150 shadow-sm text-left relative w-full hover:shadow-md transition-shadow">
                        {/* Little triangle arrow pointing to center dot */}
                        <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 bg-white border-t border-r border-gray-150 rotate-45" />
                        
                        <div className="space-y-2">
                          <span className="font-mono text-3xl font-extrabold text-[#C89A2B]/25 block">
                            Mulai Tahap 0{s.step}
                          </span>
                          <h4 className="font-sans font-bold text-lg text-[#16233A] uppercase tracking-wide">
                            {s.title}
                          </h4>
                          <p className="font-sans text-xs sm:text-sm text-gray-500 leading-relaxed">
                            {s.desc}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Center Dot Column */}
                  <div className="shrink-0 flex md:justify-center items-center relative py-4 md:py-0" id={`process-col-dot-${s.step}`}>
                    <div className="h-12 w-12 rounded-full bg-[#16233A] text-white font-mono text-base font-bold flex items-center justify-center border-4 border-white shadow-md z-10 relative">
                      <span className="text-[#C89A2B]">{s.step}</span>
                    </div>
                  </div>

                  {/* Right Column (Desktop) */}
                  <div className="flex-1 md:px-12 flex items-center justify-start" id={`process-col-b-${s.step}`}>
                    {isEven ? (
                      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-150 shadow-sm text-left relative w-full hover:shadow-md transition-shadow">
                        {/* Little triangle arrow pointing to center dot */}
                        <div className="hidden md:block absolute top-1/2 -left-3 -translate-y-1/2 w-6 h-6 bg-white border-b border-l border-gray-150 rotate-45" />
                        
                        <div className="space-y-2">
                          <span className="font-mono text-3xl font-extrabold text-[#C89A2B]/25 block">
                            Mulai Tahap 0{s.step}
                          </span>
                          <h4 className="font-sans font-bold text-lg text-[#16233A] uppercase tracking-wide">
                            {s.title}
                          </h4>
                          <p className="font-sans text-xs sm:text-sm text-gray-500 leading-relaxed">
                            {s.desc}
                          </p>
                        </div>
                      </div>
                    ) : (
                      // Mobile layout placeholder for content (since columns swap)
                      <div className="block md:hidden bg-white p-6 rounded-2xl border border-gray-150 shadow-sm text-left w-full">
                        <div className="space-y-2">
                          <span className="font-mono text-2xl font-extrabold text-[#C89A2B]/20 block">
                            Mulai Tahap 0{s.step}
                          </span>
                          <h4 className="font-sans font-bold text-base text-[#16233A] uppercase">
                            {s.title}
                          </h4>
                          <p className="font-sans text-xs text-gray-500 leading-relaxed">
                            {s.desc}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
