import { ServiceItem, PortfolioItem, TestimonialItem, FaqItem } from './types';

export const COMPANY_INFO = {
  name: "PT. Bintang Utama Perkasa Sejahtera",
  brand: "Bintang Utama Kontraktor",
  address: "Jl. Ngagel Dadi I No.16, Ngagel Rejo, Wonokromo, Surabaya",
  whatsapp1: "0812-1650-9997",
  whatsapp2: "0812-8000-0460",
  email: "ptbintangutamaperkasasejahtera@gmail.com",
  serviceAreas: ["Surabaya", "Sidoarjo", "Gresik", "Jawa Timur"],
};

export const HERO_SLIDES = [
  {
    id: 1,
    title: "Bangun Rumah Impian Bersama Kontraktor Profesional",
    subtitle: "Melayani pembangunan rumah baru, renovasi rumah, desain arsitektur, interior, kolam renang, hingga bangunan komersial dengan kualitas terbaik.",
    image: "/assets/images/hero_banner_1782564083229.jpg"
  },
  {
    id: 2,
    title: "Rumah Modern yang Nyaman & Berkualitas",
    subtitle: "Wujudkan hunian tropis modern dengan konstruksi kokoh, estetika premium, dan fungsionalitas tinggi untuk keluarga masa kini.",
    image: "/assets/images/rumah_2_lantai_1782564100267.jpg"
  },
  {
    id: 3,
    title: "Desain • Bangun • Renovasi",
    subtitle: "Solusi satu atap dari tahap konsep arsitektur, perhitungan rancangan anggaran biaya transparan, hingga pengerjaan selesai dengan garansi.",
    image: "/assets/images/renovasi_rumah_1782564114836.jpg"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "bangun-baru",
    title: "Bangun Rumah Baru",
    description: "Layanan konstruksi rumah dari nol (fondasi hingga finishing) dengan standar struktur tahan gempa dan estetik modern.",
    icon: "Home"
  },
  {
    id: "renovasi-rumah",
    title: "Renovasi Rumah",
    description: "Peremajaan ruang, peninggian lantai, penambahan tingkat, maupun perbaikan total dengan efisiensi material tinggi.",
    icon: "Hammer"
  },
  {
    id: "renovasi-ruko",
    title: "Renovasi Ruko",
    description: "Fungsionalisasi ruko komersial agar menarik pelanggan baru dengan desain interior & fasad premium.",
    icon: "Store"
  },
  {
    id: "bangun-kos",
    title: "Bangun Kos",
    description: "Desain dan konstruksi rumah kos modern dengan tata ruang produktif guna memaksimalkan hasil investasi Anda.",
    icon: "Building"
  },
  {
    id: "bangun-kantor",
    title: "Bangun Kantor",
    description: "Konstruksi ruang kerja ergonomis, modern, dan profesional untuk meningkatkan produktivitas serta citra perusahaan.",
    icon: "Briefcase"
  },
  {
    id: "bangunan-umum",
    title: "Bangun Bangunan Umum",
    description: "Pembangunan fasilitas publik, tempat ibadah, kafe, atau ruko baru dengan standar kekuatan sipil terbaik.",
    icon: "Building2"
  },
  {
    id: "kolam-renang",
    title: "Kolam Renang",
    description: "Pembuatan kolam renang pribadi atau komersial dengan sistem sirkulasi modern, waterproofing andal, dan desain tropis.",
    icon: "Waves"
  },
  {
    id: "desain-arsitektur",
    title: "Desain Arsitektur",
    description: "Visualisasi 3D realistis dan gambar kerja (DED) lengkap oleh arsitek profesional kami sebelum konstruksi dimulai.",
    icon: "Compass"
  },
  {
    id: "interior",
    title: "Interior",
    description: "Pembuatan kitchen set, custom backdrop TV, wardrobe, plafon estetik, dan furniture fungsional berkualitas tinggi.",
    icon: "LayoutGrid"
  },
  {
    id: "imb-pbg",
    title: "Pengurusan IMB/PBG",
    description: "Bantuan legalitas pengurusan Izin Mendirikan Bangunan (IMB) atau Persetujuan Bangunan Gedung (PBG) secara aman dan cepat.",
    icon: "FileText"
  }
];

export const ADVANTAGES = [
  {
    title: "Konsultasi Gratis",
    description: "Diskusikan keinginan, budget, dan rencana hunian Anda bersama tim kami tanpa biaya.",
    icon: "MessageSquare"
  },
  {
    title: "Survey Lokasi",
    description: "Tim ahli kami siap meluncur ke lokasi Anda di Surabaya, Sidoarjo, atau Gresik untuk pengukuran akurat.",
    icon: "MapPin"
  },
  {
    title: "Tim Arsitek",
    description: "Desain ditangani langsung oleh arsitek berpengalaman dengan portofolio estetis tropis modern.",
    icon: "PenTool"
  },
  {
    title: "Tim Sipil",
    description: "Pelaksanaan lapangan diawasi oleh insinyur teknik sipil untuk jaminan struktur kokoh.",
    icon: "ShieldAlert"
  },
  {
    title: "Desain Custom",
    description: "Tidak ada template berulang. Setiap desain disesuaikan dengan kebutuhan ruang dan gaya hidup Anda.",
    icon: "Sliders"
  },
  {
    title: "Material Berkualitas",
    description: "Penggunaan bahan bangunan berstandar SNI terpilih yang tahan lama di iklim tropis Indonesia.",
    icon: "Layers"
  },
  {
    title: "Bergaransi",
    description: "Jaminan masa pemeliharaan pasca serah terima untuk memastikan kualitas struktur dan kenyamanan hunian.",
    icon: "ShieldCheck"
  },
  {
    title: "Tepat Waktu",
    description: "Skedul pembangunan yang termonitor berkala melalui kurva S untuk komitmen serah terima terjadwal.",
    icon: "Clock"
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: "p1",
    title: "Modern Minimalist Tropical Villa - Surabaya Timur",
    category: "Rumah Modern",
    image: "/assets/images/hero_banner_1782564083229.jpg"
  },
  {
    id: "p2",
    title: "Rumah Tropis 2 Lantai dengan Carport Baja - Sidoarjo",
    category: "Rumah 2 Lantai",
    image: "/assets/images/rumah_2_lantai_1782564100267.jpg"
  },
  {
    id: "p3",
    title: "Renovasi Fasad & Peninggian Struktur - Surabaya Barat",
    category: "Renovasi Rumah",
    image: "/assets/images/renovasi_rumah_1782564114836.jpg"
  },
  {
    id: "p4",
    title: "Living Room Mewah Hangat - Modern Backdrop",
    category: "Interior",
    image: "/assets/images/interior_modern_1782564128739.jpg"
  },
  {
    id: "p5",
    title: "Kolam Renang Pribadi & Decking Kayu - Gresik",
    category: "Kolam Renang",
    image: "/assets/images/kolam_renang_1782564147440.jpg"
  },
  {
    id: "p6",
    title: "Ruko 3 Lantai Minimalis Komersial - Surabaya Pusat",
    category: "Ruko",
    image: "/assets/images/ruko_modern_1782564162277.jpg"
  },
  {
    id: "p7",
    title: "Konstruksi Rumah Kost 12 Kamar Modern - Wonokromo",
    category: "Kos",
    image: "/assets/images/rumah_2_lantai_1782564100267.jpg"
  },
  {
    id: "p8",
    title: "Ruang Kolaborasi & Desain Studio - Bintang Utama",
    category: "Kantor",
    image: "/assets/images/tim_arsitek_1782564178289.jpg"
  },
  {
    id: "p9",
    title: "Pembangunan Rumah Tinggal 2 Lantai Mewah Klasik Modern - Sidoarjo",
    category: "Rumah 2 Lantai",
    image: "https://res.cloudinary.com/di6ziqvtp/image/upload/v1782909453/a1fca787-19c4-44e7-968c-98726792894d.png",
    aspect: "portrait"
  },
  {
    id: "p10",
    title: "Konstruksi Rumah 2 Lantai Estetik Tropis - Wonorejo, Surabaya",
    category: "Rumah 2 Lantai",
    image: "https://res.cloudinary.com/di6ziqvtp/image/upload/v1782909396/67db7dab-7ff7-42ae-a244-43c0cd8333de.png",
    aspect: "portrait"
  },
  {
    id: "p11",
    title: "Proyek Rumah Minimalis 2 Lantai Lantai Granit - Keputih, Surabaya",
    category: "Rumah 2 Lantai",
    image: "https://res.cloudinary.com/di6ziqvtp/image/upload/v1782909362/dc63d30f-06c1-4c4c-b28c-2e73db3a7235.png",
    aspect: "portrait"
  }
];

export const PROCESS_STEPS = [
  { step: "1", title: "Konsultasi", desc: "Diskusi kebutuhan ruang, gaya arsitektur, perkiraan budget, dan detail awal proyek secara gratis." },
  { step: "2", title: "Survey", desc: "Pengukuran lahan, pengecekan kontur tanah, orientasi matahari, dan analisis kondisi lingkungan sekitar." },
  { step: "3", title: "Desain", desc: "Pembuatan konsep denah, visualisasi 3D realistis (eksterior & interior), hingga disetujui klien." },
  { step: "4", title: "RAB", desc: "Penyusunan Rencana Anggaran Biaya mendetail yang transparan, berisi spesifikasi material dan ongkos jasa." },
  { step: "5", title: "Pembangunan", desc: "Pelaksanaan fisik konstruksi di lapangan diawasi oleh tim ahli sipil dengan laporan berkala." },
  { step: "6", title: "QC", desc: "Pemeriksaan detail kelayakan struktur, instalasi kelistrikan/plumbing, dan kerapian finishing (Quality Control)." },
  { step: "7", title: "Serah Terima", desc: "Penyerahan kunci rumah beserta berkas garansi konstruksi sebagai wujud jaminan purna jual kami." }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    name: "Bapak Hendra Wijaya",
    role: "Pemilik Rumah 2 Lantai - Dharmahusada, Surabaya",
    avatar: "👨‍💼",
    text: "Membangun rumah bersama Bintang Utama sangat memuaskan. Estimasi RAB sangat jujur, tidak ada biaya siluman di tengah pengerjaan. Tim arsiteknya sangat akomodatif menerjemahkan keinginan istri saya.",
    rating: 5
  },
  {
    id: "t2",
    name: "Ibu Citra Lestari",
    role: "Renovasi Rumah Tinggal - Graha Famili, Surabaya",
    avatar: "👩‍💼",
    text: "Pekerjaan renovasi rumah kami selesai tepat waktu sebelum lebaran. Tukangnya rapi, pembersihan proyek sangat diperhatikan, dan yang paling penting ada garansi kebocoran setelah serah terima.",
    rating: 5
  },
  {
    id: "t3",
    name: "Bapak Aditya Nugraha",
    role: "Pemilik Kost Modern - Keputih, Surabaya",
    avatar: "👨‍💻",
    text: "Bintang Utama Kontraktor merancang kost saya dengan tata ruang yang sangat efisien. Hasilnya, 12 kamar langsung penuh dalam 2 bulan pertama karena desain sirkulasi udara dan estetikanya sangat disukai mahasiswa.",
    rating: 5
  },
  {
    id: "t4",
    name: "Ibu Dr. Amalia",
    role: "Pemilik Ruko & Klinik - Buduran, Sidoarjo",
    avatar: "👩‍⚕️",
    text: "Sangat komunikatif! Mulai dari perizinan PBG/IMB dibantu penuh sampai tuntas. Desain fasad kliniknya minimalis modern dan mendapat banyak pujian dari pasien yang datang.",
    rating: 5
  },
  {
    id: "t5",
    name: "Bapak Gunawan",
    role: "Rumah Tropis Baru - Pondok Candra, Sidoarjo",
    avatar: "👨‍💼",
    text: "Konstruksi betonnya sangat rapi. Tim sipilnya sering mengirim dokumentasi progres mingguan berupa video, jadi saya yang sibuk bekerja tetap bisa memantau tanpa perlu datang setiap hari.",
    rating: 5
  },
  {
    id: "t6",
    name: "Bapak Rudy Hartono",
    role: "Interior & Kitchen Set - Menganti, Gresik",
    avatar: "🤵",
    text: "Finishing duco dan melamik untuk wardrobe serta kitchen set kami sangat presisi. Harganya rasional untuk kualitas premium, fitting-nya juga kokoh dan presisi. Highly recommended!",
    rating: 5
  }
];

export const FAQS: FaqItem[] = [
  {
    id: "f1",
    question: "Berapa biaya bangun rumah per meter persegi?",
    answer: "Biaya bangun rumah bervariasi tergantung pada spesifikasi material dan desain yang Anda pilih. Standar kami berkisar antara Rp 4.500.000 hingga Rp 7.500.000+ per m² untuk kategori rumah modern menengah hingga mewah dengan jaminan struktur kokoh."
  },
  {
    id: "f2",
    question: "Apakah saya bisa mendapatkan desain custom?",
    answer: "Tentu saja! Kami tidak menggunakan template desain massal. Setiap proyek dirancang secara custom oleh tim Arsitek kami berdasarkan bentuk lahan, orientasi arah matahari, gaya estetika pilihan Anda, serta disesuaikan dengan anggaran."
  },
  {
    id: "f3",
    question: "Apakah Bintang Utama Kontraktor melayani renovasi kecil?",
    answer: "Kami melayani renovasi skala menengah hingga besar (seperti peninggian plafon, peningkatan struktur jadi 2 lantai, renovasi fasad keseluruhan, pembuatan kolam renang, atau pengerjaan interior lengkap satu rumah). Untuk renovasi kecil (seperti tambal bocor genteng tunggal), kami sarankan menggunakan tukang lokal harian."
  },
  {
    id: "f4",
    question: "Berapa lama durasi pembangunan rumah?",
    answer: "Durasi pembangunan umumnya berkisar antara 4 hingga 8 bulan untuk rumah tinggal standar 1-2 lantai. Sebelum pengerjaan dimulai, kami akan memberikan skedul kerja resmi (Kurva-S) sehingga Anda dapat memantau ketepatan waktu proyek secara real-time."
  },
  {
    id: "f5",
    question: "Apakah ada garansi setelah serah terima?",
    answer: "Ya, kami berkomitmen menjaga kepuasan klien dengan memberikan Garansi Pemeliharaan selama 3 bulan untuk instalasi/finishing, serta Garansi Struktur hingga 10 tahun untuk pekerjaan konstruksi utama dari nol."
  },
  {
    id: "f6",
    question: "Apakah tim bisa survey langsung ke lokasi saya?",
    answer: "Sangat bisa! Kami melayani survey lokasi gratis dan pengukuran lapangan langsung untuk wilayah Surabaya, Sidoarjo, dan Gresik. Silakan isi form konsultasi atau hubungi WhatsApp kami untuk menjadwalkan jadwal survey."
  }
];

export const SEO_KEYWORDS = [
  "Kontraktor Rumah Surabaya",
  "Bangun Rumah Surabaya",
  "Renovasi Rumah Surabaya",
  "Jasa Arsitek Surabaya",
  "Kontraktor Interior Surabaya",
  "Kontraktor Kolam Renang",
  "Bangun Kos Surabaya",
  "Bangun Ruko Surabaya"
];
