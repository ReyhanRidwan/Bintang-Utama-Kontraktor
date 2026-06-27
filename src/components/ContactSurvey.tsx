import React, { useState } from 'react';
import { Phone, Check, MapPin, ClipboardList, Send, Image as ImageIcon } from 'lucide-react';
import { COMPANY_INFO } from '../data';

export default function ContactSurvey() {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    location: '',
    buildingType: 'Rumah Tinggal Modern',
    buildingArea: '',
    budget: '',
    targetStart: 'Segera (Bulan Ini)',
    notes: '',
  });

  const [photoName, setPhotoName] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPhotoName(file.name);
    }
  };

  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = 'Nama lengkap wajib diisi';
    if (!formData.whatsapp.trim()) tempErrors.whatsapp = 'Nomor WhatsApp wajib diisi';
    if (!formData.location.trim()) tempErrors.location = 'Lokasi pembangunan wajib diisi';
    if (!formData.buildingArea.trim()) tempErrors.buildingArea = 'Luas bangunan wajib diisi';
    if (!formData.budget.trim()) tempErrors.budget = 'Perkiraan budget wajib diisi';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitted(true);

    // Format WhatsApp Message
    const msg = `Halo Bintang Utama Kontraktor!\nSaya ingin mengajukan Konsultasi & Survey Pembangunan:\n\n` +
                `*Nama:* ${formData.name}\n` +
                `*WhatsApp:* ${formData.whatsapp}\n` +
                `*Lokasi Proyek:* ${formData.location}\n` +
                `*Jenis Bangunan:* ${formData.buildingType}\n` +
                `*Luas Bangunan:* ${formData.buildingArea} m²\n` +
                `*Estimasi Budget:* ${formData.budget}\n` +
                `*Target Mulai:* ${formData.targetStart}\n` +
                `*Foto Lokasi:* ${photoName ? `Terlampir (${photoName})` : 'Belum dipilih'}\n` +
                `*Catatan Khusus:* ${formData.notes || '-'}\n\n` +
                `Mohon bantuannya untuk diproses jadwal surveynya. Terima kasih!`;

    const encodedMsg = encodeURIComponent(msg);
    const waUrl = `https://wa.me/62${COMPANY_INFO.whatsapp1.replace(/[^0-9]/g, '')}?text=${encodedMsg}`;

    // Small delay to show submit state, then redirect
    setTimeout(() => {
      window.open(waUrl, '_blank');
      setIsSubmitted(false);
    }, 1000);
  };

  return (
    <section id="survey-form-section" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Column 1: Call to Action Details */}
          <div className="lg:col-span-5 space-y-8" id="survey-info-panel">
            <div className="space-y-4">
              <span className="text-[#C89A2B] font-mono font-semibold text-xs uppercase tracking-widest block">
                ✦ FORMULIR KONSULTASI & SURVEY LOKASI
              </span>
              <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#16233A] uppercase tracking-tight leading-tight">
                Wujudkan Rumah Impian Anda Bersama Kami
              </h2>
              <div className="h-1.5 w-20 bg-[#C89A2B] rounded-full" />
              <p className="font-sans text-gray-500 text-sm sm:text-base leading-relaxed">
                Sebelum survey lokasi dilaksanakan gratis di wilayah Surabaya, Sidoarjo, dan Gresik, silakan lengkapi formulir survey kebutuhan di samping.
              </p>
            </div>

            {/* Guaranteed Badges */}
            <div className="space-y-4" id="survey-perks-list">
              <div className="flex items-start space-x-3.5 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="bg-[#C89A2B]/10 p-2 rounded-lg text-[#C89A2B] shrink-0">
                  <Check className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-[#16233A] uppercase tracking-wide">100% Survey Gratis</h4>
                  <p className="font-sans text-xs text-gray-500 mt-1">Kami melakukan pengukuran detail ke lahan Anda tanpa dipungut biaya transportasi maupun jasa.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="bg-[#C89A2B]/10 p-2 rounded-lg text-[#C89A2B] shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-[#16233A] uppercase tracking-wide">Area Surabaya, Sidoarjo, Gresik</h4>
                  <p className="font-sans text-xs text-gray-500 mt-1">Tim surveyor bersertifikat kami berdomisili lokal untuk kecepatan penjadwalan survey lapangan.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="bg-[#C89A2B]/10 p-2 rounded-lg text-[#C89A2B] shrink-0">
                  <ClipboardList className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-[#16233A] uppercase tracking-wide">Penyusunan RAB Akurat</h4>
                  <p className="font-sans text-xs text-gray-500 mt-1">Setelah survey dilaksanakan, kami menyusun draf RAB resmi dan denah ruangan gratis.</p>
                </div>
              </div>
            </div>

            {/* Alternative WA Contact details */}
            <div className="p-6 bg-amber-50/50 border border-amber-100 rounded-2xl text-center space-y-3">
              <p className="font-sans text-xs font-semibold text-[#16233A] uppercase tracking-wide">
                Atau Hubungi Direct Admin Kami:
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
                <a
                  id="direct-wa-admin1"
                  href={`https://wa.me/62${COMPANY_INFO.whatsapp1.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#16233A] hover:bg-[#233554] text-white px-4 py-2 rounded-lg font-sans text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 text-[#C89A2B]" />
                  <span>Admin 1: {COMPANY_INFO.whatsapp1}</span>
                </a>
                <a
                  id="direct-wa-admin2"
                  href={`https://wa.me/62${COMPANY_INFO.whatsapp2.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#16233A] hover:bg-[#233554] text-white px-4 py-2 rounded-lg font-sans text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 text-[#C89A2B]" />
                  <span>Admin 2: {COMPANY_INFO.whatsapp2}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Form Fields Card */}
          <div className="lg:col-span-7 bg-gray-50 border border-gray-150 rounded-3xl p-6 sm:p-8 shadow-lg" id="survey-form-panel">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Nama Lengkap */}
                <div className="space-y-1.5">
                  <label htmlFor="form-name" className="font-sans font-semibold text-xs text-gray-700 uppercase tracking-wider block">
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Contoh: Hendra Wijaya"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm font-sans"
                  />
                  {errors.name && <p className="text-red-500 text-[11px] font-sans">{errors.name}</p>}
                </div>

                {/* No WhatsApp */}
                <div className="space-y-1.5">
                  <label htmlFor="form-whatsapp" className="font-sans font-semibold text-xs text-gray-700 uppercase tracking-wider block">
                    Nomor WhatsApp aktif <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="form-whatsapp"
                    type="text"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    placeholder="Contoh: 0812-1650-9997"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm font-sans"
                  />
                  {errors.whatsapp && <p className="text-red-500 text-[11px] font-sans">{errors.whatsapp}</p>}
                </div>
              </div>

              {/* Lokasi */}
              <div className="space-y-1.5">
                <label htmlFor="form-location" className="font-sans font-semibold text-xs text-gray-700 uppercase tracking-wider block">
                  Lokasi Rencana Pembangunan <span className="text-red-500">*</span>
                </label>
                <input
                  id="form-location"
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Contoh: Wonokromo, Surabaya atau Waru, Sidoarjo"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm font-sans"
                />
                {errors.location && <p className="text-red-500 text-[11px] font-sans">{errors.location}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Jenis Bangunan */}
                <div className="space-y-1.5">
                  <label htmlFor="form-buildingType" className="font-sans font-semibold text-xs text-gray-700 uppercase tracking-wider block">
                    Jenis Rencana Bangunan
                  </label>
                  <select
                    id="form-buildingType"
                    name="buildingType"
                    value={formData.buildingType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 text-xs sm:text-sm font-sans text-gray-700"
                  >
                    <option value="Rumah Tinggal Modern 1 Lantai">Rumah Tinggal Modern 1 Lantai</option>
                    <option value="Rumah Tinggal Modern 2 Lantai">Rumah Tinggal Modern 2 Lantai</option>
                    <option value="Renovasi Rumah Total / Tingkat">Renovasi Rumah Total / Tingkat</option>
                    <option value="Pembangunan Kost Modern">Pembangunan Kost Modern</option>
                    <option value="Pembangunan Ruko Komersial">Pembangunan Ruko Komersial</option>
                    <option value="Pembuatan Kolam Renang">Pembuatan Kolam Renang</option>
                    <option value="Pekerjaan Interior Custom">Pekerjaan Interior Custom</option>
                  </select>
                </div>

                {/* Luas Bangunan */}
                <div className="space-y-1.5">
                  <label htmlFor="form-buildingArea" className="font-sans font-semibold text-xs text-gray-700 uppercase tracking-wider block">
                    Perkiraan Luas Bangunan (m²) <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="form-buildingArea"
                    type="text"
                    name="buildingArea"
                    value={formData.buildingArea}
                    onChange={handleInputChange}
                    placeholder="Contoh: 120"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm font-sans"
                  />
                  {errors.buildingArea && <p className="text-red-500 text-[11px] font-sans">{errors.buildingArea}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Perkiraan Budget */}
                <div className="space-y-1.5">
                  <label htmlFor="form-budget" className="font-sans font-semibold text-xs text-gray-700 uppercase tracking-wider block">
                    Perkiraan Alokasi Budget <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="form-budget"
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    placeholder="Contoh: Rp 300 Juta - Rp 500 Juta"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm font-sans"
                  />
                  {errors.budget && <p className="text-red-500 text-[11px] font-sans">{errors.budget}</p>}
                </div>

                {/* Target Mulai */}
                <div className="space-y-1.5">
                  <label htmlFor="form-targetStart" className="font-sans font-semibold text-xs text-gray-700 uppercase tracking-wider block">
                    Target Mulai Pengerjaan
                  </label>
                  <select
                    id="form-targetStart"
                    name="targetStart"
                    value={formData.targetStart}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 text-xs sm:text-sm font-sans text-gray-700"
                  >
                    <option value="Segera (Bulan Ini)">Segera (Bulan Ini)</option>
                    <option value="1 - 3 Bulan Ke depan">1 - 3 Bulan Ke depan</option>
                    <option value="3 - 6 Bulan Ke depan">3 - 6 Bulan Ke depan</option>
                    <option value="Baru Cari Informasi">Baru Cari Informasi / Tanya-Tanya</option>
                  </select>
                </div>
              </div>

              {/* Upload Foto */}
              <div className="space-y-1.5">
                <span className="font-sans font-semibold text-xs text-gray-700 uppercase tracking-wider block">
                  Foto Lokasi Saat Ini (Opsional)
                </span>
                <div className="border-2 border-dashed border-gray-200 hover:border-[#C89A2B] rounded-2xl p-4 transition-colors bg-white flex items-center justify-center cursor-pointer relative">
                  <input
                    id="form-photo"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                  <div className="text-center space-y-1">
                    <ImageIcon className="h-6 w-6 text-[#C89A2B] mx-auto" />
                    <p className="font-sans text-xs font-semibold text-[#16233A]">
                      {photoName ? `Terpilih: ${photoName}` : 'Klik / Drag untuk melampirkan foto'}
                    </p>
                    <p className="font-sans text-[10px] text-gray-400">Format PNG, JPG atau JPEG up to 5MB</p>
                  </div>
                </div>
              </div>

              {/* Catatan */}
              <div className="space-y-1.5">
                <label htmlFor="form-notes" className="font-sans font-semibold text-xs text-gray-700 uppercase tracking-wider block">
                  Catatan Tambahan / Desain Khusus
                </label>
                <textarea
                  id="form-notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Contoh: Ingin desain fasad industrial modern dengan roster lubang udara minimalis."
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm font-sans resize-none"
                />
              </div>

              {/* Submit CTA Redirect Button */}
              <div className="pt-3">
                <button
                  id="btn-submit-survey-wa"
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full bg-[#C89A2B] hover:bg-opacity-90 disabled:bg-gray-400 text-white py-4 rounded-xl font-sans font-bold text-base shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2.5 cursor-pointer border-b-2 border-amber-800"
                >
                  <Send className="h-5 w-5" />
                  <span>{isSubmitted ? 'Mengalihkan ke WhatsApp...' : 'Submit & Hubungi WhatsApp'}</span>
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
