import { CheckCircle2, Award, Calendar, Users, Briefcase } from 'lucide-react';
import { COMPANY_INFO } from '../data';

export default function About() {
  const pillars = [
    { title: "Desain Modern & Tropis", desc: "Arsitektur adaptif dengan iklim Indonesia, efisien sirkulasi udara, pencahayaan alami, dan estetika eksklusif." },
    { title: "Harga Transparan", desc: "Penyusunan Rencana Anggaran Biaya (RAB) yang terperinci tanpa biaya tak terduga saat pengerjaan." },
    { title: "Material SNI Berkualitas", desc: "Penggunaan material bersertifikasi demi ketahanan bangunan berpuluh tahun menghadapi cuaca ekstrem." },
    { title: "Garansi Konstruksi Penuh", desc: "Jaminan resmi purna jual hingga 10 tahun untuk struktur bangunan serta 3 bulan masa pemeliharaan." }
  ];

  return (
    <section id="tentang-kami" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Column 1: Image paired with floating highlights */}
          <div className="lg:col-span-5 relative" id="about-visuals">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-100">
              <img
                src="/assets/images/tim_arsitek_1782564178289.jpg"
                alt="Tim Profesional Arsitek & Insinyur Bintang Utama Kontraktor"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16233A]/60 via-transparent to-transparent" />
            </div>

            {/* Floating Experience Badge */}
            <div 
              id="about-badge-exp"
              className="absolute -bottom-6 -right-6 md:right-4 bg-[#16233A] text-white p-6 rounded-xl shadow-xl flex items-center space-x-4 border-b-4 border-[#C89A2B]"
            >
              <div className="bg-[#C89A2B] text-white p-3 rounded-lg">
                <Calendar className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold font-sans text-white leading-none">9+ Tahun</p>
                <p className="text-xs text-gray-400 font-mono tracking-wider uppercase mt-1">Sejak 2017 di Indonesia</p>
              </div>
            </div>
          </div>

          {/* Column 2: Content descriptions */}
          <div className="lg:col-span-7 space-y-8" id="about-content">
            <div className="space-y-3">
              <span className="text-[#C89A2B] font-mono font-semibold text-xs uppercase tracking-widest block">
                ✦ PROFIL PERUSAHAAN
              </span>
              <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#16233A] leading-tight uppercase">
                PT. Bintang Utama Perkasa Sejahtera
              </h2>
              <div className="h-1.5 w-20 bg-[#C89A2B] rounded-full" />
            </div>

            <p className="font-sans text-gray-600 text-base sm:text-lg leading-relaxed">
              Dikenal dengan brand <strong className="text-[#16233A]">{COMPANY_INFO.brand}</strong>, kami adalah mitra konstruksi terpercaya yang fokus pada jasa arsitektur, pembangunan baru, renovasi, dan interior ruang kelas menengah hingga menengah ke atas di Surabaya dan Jawa Timur.
            </p>

            <p className="font-sans text-gray-500 text-sm sm:text-base leading-relaxed">
              Kami berkomitmen menghadirkan rumah modern yang bukan saja estetik, namun kokoh secara kalkulasi teknik sipil. Dari konsultasi denah awal, penyusunan RAB terbuka, pengawasan berkala, hingga penyerahan kunci—semua dikelola secara profesional satu atap.
            </p>

            {/* Core Values / Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4" id="about-pillars-grid">
              {pillars.map((p, idx) => (
                <div 
                  key={idx} 
                  id={`about-pillar-card-${idx}`}
                  className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 border border-transparent hover:border-gray-100"
                >
                  <div className="text-[#C89A2B] mt-0.5 shrink-0">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-sm text-[#16233A] uppercase tracking-wide">
                      {p.title}
                    </h4>
                    <p className="font-sans text-xs text-gray-500 mt-1 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Stats bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100 text-center" id="about-quick-stats">
              <div id="stat-proyek">
                <p className="text-3xl font-bold text-[#16233A]">150+</p>
                <p className="text-xs text-gray-500 font-sans mt-1">Proyek Selesai</p>
              </div>
              <div id="stat-tim">
                <p className="text-3xl font-bold text-[#16233A]">25+</p>
                <p className="text-xs text-gray-500 font-sans mt-1">Tenaga Ahli</p>
              </div>
              <div id="stat-kepuasan">
                <p className="text-3xl font-bold text-[#16233A]">100%</p>
                <p className="text-xs text-gray-500 font-sans mt-1">Kepuasan Klien</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
