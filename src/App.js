import { useState, useEffect } from 'react';

// İKONLAR
import { Users, FileText, TrendingUp, Download, Link, Play, Scale, Camera, Cpu, Code, Activity, Settings, Layers, Monitor } from 'lucide-react';

import './index.css';
import mainManuImage from './images/main_manu7.jpg';

import prototipImg from './images/prototip.png';
import arayuzImg from './images/arayuz.png';
import gbyfImg from './images/gbyf.png';

// YENİ LOGOLAR İÇE AKTARILDI
import tusasLogo from './images/tusas.png';
import teduLogo from './images/tedu.png';
import sideRightImg from './images/side_right.png';
import sideLeftImg from './images/side_left.png';
import tekerImg from './images/teker.png';
import finalProtoImg from './images/Picture2.jpg';
import taslakImg from './images/taslak.png'; // CAD çizimi için olan görsel
import belgeImg from './images/belge.png'; // Başarı belgesi
import emoStantImg from './images/bps.jpeg'; // EMO BPS sergi görseli
import demoVideo from './videos/demo.mp4';





// --- Sabit Veriler ---
const projectData = {
    groupName: "CODENGE",
    tagline: "Hava Aracı Ağırlık Merkezi Tespiti ve Otonom Dengeleme Sistemi",
    program: "TUSAŞ LIFT-UP",
    members: [
        { name: "Yasin Anber", role: "Bilgisayar Mühendisi" },
        { name: "Sude İpekci", role: "Bilgisayar Mühendisi" },
        
    ],

    mockReports: [
        { id: 0, title: "Literature Presentation (Literatür Sunumu)", date: "01.10.2025", filePath: "/reports/litrerature_presentation.docx" },
        { id: 1, title: "Project Proposal (Proje Teklifi)", date: "31.10.2025",filePath: "/reports/Project_Proposal.docx" },
        { id: 2, title: "Project Specifications Report (Proje Spesifikasyon Raporu)", date: "14.11.2025",filePath: "/reports/Project_Specifications_Report.docx" }, 
        { id: 3, title: "Analysis Report (Analiz Raporu)", date: "28.11.2025" ,filePath: "/reports/Analysis_Report.docx"}, 
        { id: 4, title: "High Level Design Report (Üst Düzey Tasarım Raporu)", date: "30.12.2025",filePath: "/reports/Highlevel_report.pdf" },
        { id: 5, title: "Project To-Do List", date: "11.01.2026",filePath: "/reports/TODO.xlsx" },
        { id: 6, title: "Project Poster", date: "11.01.2026",filePath: "/reports/cmpe 491_Poster.pdf" },
        { id: 7, title: "Low Level Design Report", date: "22.03.2026",filePath: "/reports/CMPE492_LowLevelDesignReport.pdf" },
        { id: 8, title: "Low Level Design Report V2", date: "22.03.2026",filePath: "/reports/CMPE492_LowLevelDesignReport-v2.pdf" },
        { id: 9, title: "Test Plan", date: "10.04.2026",filePath: "/reports/CMPE492_TestPlan_Report.pdf" },
        { id: 10, title: "Final Report", date: "10.05.2026",filePath: "/reports/CMPE492_Final_Report.pdf" },
    ],

    stakeholders: {
        coordinator: { name: "Abdulkadir Nazlı", role: "Koordinatör Mühendis" },
        consultant: { name: "Prof. Dr. Hakkı Gökhan İlk", role: "Danışman Hoca" },
        jury: [
            { name: "Ayşe Yasmin Seydim", role: "Jüri Üyesi" },
            { name: "Ali Berkol", role: "Jüri Üyesi" },
        ]
    },
    videoUrl: "https://www.youtube.com/embed/hVCLEepZ-KU", 
};


// --- Bileşenler ---

// 1. Ana Sayfa (HeroSection)
const HeroSection = () => {
    const [isVideoVisible, setIsVideoVisible] = useState(false);

    const handleToggleVideo = () => {
        setIsVideoVisible(!isVideoVisible);
    };

    return (
        <div id="anasayfa" className="relative h-[90vh] flex flex-col items-center justify-center text-white overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${mainManuImage})` }}>
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 to-blue-900/80 opacity-90"></div>
            
            <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">{projectData.groupName}</h1>
                <p className="text-xl md:text-3xl font-light mb-6 text-white">{projectData.tagline}</p>
                <span className="inline-block px-4 py-2 bg-yellow-500 text-gray-900 font-bold rounded-full shadow-lg">{projectData.program} Projesi</span>

                <div 
                    className={`mt-10 max-w-full mx-auto transition-all duration-500 ease-in-out transform ${isVideoVisible ? 'opacity-100 scale-100 h-auto' : 'opacity-0 scale-95 h-0 pointer-events-none'}`}
                    style={{ height: isVideoVisible ? '50vh' : '0', overflow: 'hidden' }}
                >
                    <div className="relative w-full h-full bg-black rounded-xl shadow-2xl border-4 border-white/30">
                        <iframe
                            title="Aircraft Center of Gravity Explained"
                            className="absolute top-0 left-0 w-full h-full rounded-xl"
                            src={projectData.videoUrl}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>

            <button onClick={handleToggleVideo} className="fixed bottom-8 left-8 z-50 inline-flex items-center space-x-3 px-6 py-3 bg-pink-900 text-white font-bold rounded-full shadow-xl hover:bg-pink-700 transition duration-300 transform hover:scale-105 animate-bounce">
                <Play className="w-6 h-6" />
                <span>{isVideoVisible ? 'Eğitici Videoyu Kapat' : 'Konuyla İlgili Eğitici Videoyu İzle'}</span>
            </button>
        </div>
    );
};

// 2. Kurumlar Şeridi (Trust Badges) - LOGOLAR EKLENDİ
const TrustBadgeSection = () => (
    <div className="bg-gray-100 border-b border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4">
            <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
                Destekleyen Kurumlar
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-70 grayscale hover:grayscale-0 transition duration-500">
                
                {/* TUSAŞ LIFT-UP BLOK */}
                <div className="flex items-center gap-4 cursor-default hover:scale-105 transition transform">
                    <img src={tusasLogo} alt="TUSAŞ Logo" className="h-12 w-auto object-contain" />
                    <div className="text-3xl font-black text-[#003B71] tracking-tighter flex items-center gap-2">
                        <span className="bg-[#003B71] text-white px-2 py-1 rounded-md text-xl">TUSAŞ</span> LIFT-UP
                    </div>
                </div>
                
                <div className="w-1 h-12 bg-gray-300 rounded-full hidden md:block"></div> {/* Ayırıcı Dikey Çizgi */}
                
                {/* TED ÜNİVERSİTESİ BLOK */}
                <div className="flex items-center gap-4 cursor-default hover:scale-105 transition transform">
                    <img src={teduLogo} alt="TED Üniversitesi Logo" className="h-12 w-auto object-contain" />
                    <div className="text-3xl font-black text-[#E31837] tracking-tighter flex items-center gap-2">
                        TED <span className="font-light">ÜNİVERSİTESİ</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
);


// 3. Proje Açıklaması (Görseller tam kenara yaslı)
const DescriptionSection = () => (
    <section id="aciklama" className="bg-gray-50">
        {/* w-full: Tam genişlik, flex-row: Yan yana dizilim */}
        <div className="w-full flex flex-col lg:flex-row items-stretch">
            
            {/* SOL GÖRSEL - Tam kenara yapışık */}
            <div className="hidden lg:block lg:w-1/5">
                <img 
                    src={sideLeftImg} 
                    alt="Left" 
                    className="w-full h-full object-cover" 
                />
            </div>

            {/* ORTA METİN ALANI - Okunabilirlik için kısıtlı genişlik */}
            <div className="lg:w-3/5 py-16 px-4 md:px-12 flex flex-col justify-center">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 flex items-center justify-center gap-3">
                            Proje Detayı: Ağırlık Merkezi Tespiti ve Otonom Dengeleme Sistemi
                        </h2>
                        <div className="w-24 h-1.5 bg-indigo-600 rounded-full mx-auto mt-5"></div>
                    </div>

                    <p className="text-lg text-gray-700 mb-10 leading-relaxed text-center px-4">
                        Hava araçlarının tasarımında kritik bir parametre olan Ağırlık Merkezi (AGM), uçuş emniyetini, aerodinamik performansı ve yakıt verimliliğini doğrudan belirler. <span className="text-indigo-600 font-bold">codenGe</span> projesi olarak, küçük ve büyük ölçekli hava platformlarında bu hayati dengeyi anlık olarak ölçmek ve sapmaları sıfırlamak üzere tasarlanmış tam otomatik bir dengeleme sistemi geliştirilecektir. Bu, havacılıkta operasyonel güvenilirliği artırmayı amaçlayan yenilikçi bir yaklaşımdır.
                    </p>

                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="p-8 bg-white rounded-xl shadow-xl transition duration-300 hover:shadow-2xl border-t-4 border-blue-500">
                            <TrendingUp className="text-blue-500 w-10 h-10 mb-4" />
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">Yüksek Hassasiyetli AGM Hesaplama</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Hava aracı yerdeyken, her bir iniş takımı altına konumlandırılan <span className="font-semibold text-gray-800">üç (3) adet yüksek hassasiyetli loadcell</span> aracılığıyla ağırlık verileri anlık olarak toplanır.
                            </p>
                        </div>

                        <div className="p-8 bg-white rounded-xl shadow-xl transition duration-300 hover:shadow-2xl border-t-4 border-blue-500">
                            <Scale className="text-blue-500 w-10 h-10 mb-4" /> 
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">Otonom Dengeleme Sistemi</h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Dengeleme, hava aracının boylamasına ve enlemesine düzlemlerde hareket edebilen, <span className="font-semibold text-green-700">step motorlar ile kontrol edilen akıllı bir karşı ağırlık sistemi</span> kullanılarak gerçekleştirilir.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* SAĞ GÖRSEL - Tam kenara yapışık */}
            <div className="hidden lg:block lg:w-1/5">
                <img 
                    src={sideRightImg} 
                    alt="Right" 
                    className="w-full h-full object-cover" 
                />
            </div>
        </div>
    </section>
);

// 4. Kullanılan Teknolojiler (Tech Stack) Şeridi - RENGİ GÜNCELLENDİ
const TechStackSection = () => (
    <section className="py-12 bg-indigo-950 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold mb-8 text-indigo-200 tracking-wide uppercase text-sm">Projede Kullanılan Temel Teknolojiler</h3>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                <div className="flex items-center gap-2 bg-indigo-900 px-5 py-3 rounded-full shadow-lg border border-indigo-800 hover:bg-indigo-800 transition cursor-default">
                    <Cpu className="text-blue-400 w-5 h-5" /> <span className="font-medium">C/C++ & Gömülü Sistemler</span>
                </div>
                <div className="flex items-center gap-2 bg-indigo-900 px-5 py-3 rounded-full shadow-lg border border-indigo-800 hover:bg-indigo-800 transition cursor-default">
                    <Monitor className="text-cyan-400 w-5 h-5" /> <span className="font-medium">Python (Arayüz / UI)</span>
                </div>
                <div className="flex items-center gap-2 bg-indigo-900 px-5 py-3 rounded-full shadow-lg border border-indigo-800 hover:bg-indigo-800 transition cursor-default">
                    <Code className="text-pink-400 w-5 h-5" /> <span className="font-medium">React.js & Web</span>
                </div>
                <div className="flex items-center gap-2 bg-indigo-900 px-5 py-3 rounded-full shadow-lg border border-indigo-800 hover:bg-indigo-800 transition cursor-default">
                    <Activity className="text-green-400 w-5 h-5" /> <span className="font-medium">Loadcell & Sensör Ağları</span>
                </div>
                <div className="flex items-center gap-2 bg-indigo-900 px-5 py-3 rounded-full shadow-lg border border-indigo-800 hover:bg-indigo-800 transition cursor-default">
                    <Settings className="text-yellow-400 w-5 h-5" /> <span className="font-medium">Step Motor Kontrolü</span>
                </div>
                <div className="flex items-center gap-2 bg-indigo-900 px-5 py-3 rounded-full shadow-lg border border-indigo-800 hover:bg-indigo-800 transition cursor-default">
                    <Layers className="text-purple-400 w-5 h-5" /> <span className="font-medium">3D Modelleme & Baskı</span>
                </div>
            </div>
        </div>
    </section>
);


// 5. Proje Galerisi (Tüm Eski ve Yeni Öğeler)
// 5. Proje Galerisi (Resim Hizalamaları Düzeltilmiş Hali)
const GallerySection = () => (
    <section id="galeri" className="py-16 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 flex items-center justify-center gap-3">
                    <Camera className="text-indigo-600 w-10 h-10" /> Proje Galerisi
                </h2>
                <div className="w-24 h-1.5 bg-indigo-600 rounded-full mx-auto mt-5"></div>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
                
                {/* 1. SİSTEM PROTOTİPİ */}
                <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border border-gray-200 flex flex-col group">
                    <div className="h-64 overflow-hidden bg-black flex items-center justify-center">
                        <img src={prototipImg} alt="Sistem Prototipi" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" />
                    </div>
                    <div className="p-6 flex-grow flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3 border-b border-gray-200 pb-2">Sistem Prototipi</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Özel olarak tasarladığımız tandem rotorlu helikopter modelimiz. Sistemin genel işleyişini yansıtan bu prototipte; sensörlerle ölçülen ağırlık verilerine göre otonom dengeleme sağlayan step motorlar, vidalı mil ve hareketli karşı kütle mekanizması yer almaktadır.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 2. KULLANICI ARAYÜZÜ - UI */}
                <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border border-gray-200 flex flex-col group">
                    <div className="h-64 overflow-hidden bg-[#0d131f] flex items-center justify-center border-b border-gray-200">
                        <img src={arayuzImg} alt="Kullanıcı Arayüzü" className="w-full h-full object-contain transform group-hover:scale-105 transition duration-500 p-2" />
                    </div>
                    <div className="p-6 flex-grow flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3 border-b border-gray-200 pb-2">Kullanıcı Arayüzü (UI)</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Geliştirdiğimiz kontrol paneli arayüzü. Bu panel üzerinden, hava aracının ağırlık merkezi koordinatları, optimum noktadan milimetrik sapma miktarı ve sistemin anlık dengeleme durumu canlı olarak takip edilebilmektedir.
                            </p>
                        </div>
                    </div>
                </div>

             {/* 7. LİFT-UP BAŞARI BELGESİ */}

                <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border border-gray-200 flex flex-col group">
                    <div className="h-64 overflow-hidden bg-black flex items-center justify-center">
                        <img src={belgeImg} alt="LIFT-UP Başarı Belgesi" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" />
                    </div>
                    <div className="p-6 flex-grow flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3 border-b border-gray-200 pb-2">TUSAŞ LIFT-UP Başarı Belgesi</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                TUSAŞ LIFT-UP Sanayi Odaklı Lisans Bitirme Projeleri Programı kapsamında 350+ proje arasından <span className="font-bold text-blue-600">en iyi 18 ekip</span> arasına girerek almaya hak kazandığımız resmi başarı belgemiz.
                            </p>
                        </div>
                        
                    </div>
                </div>


                {/* 3. GBYF BAŞARISI */}
                <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border border-gray-200 flex flex-col group">
                    <div className="h-64 overflow-hidden bg-black flex items-center justify-center">
                        <img src={gbyfImg} alt="GBYF Başarısı" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" />
                    </div>
                    <div className="p-6 flex-grow flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3 border-b border-gray-200 pb-2">GBYF Yarışması Başarısı</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Projemizle katıldığımız Genç Beyinler Yeni Fikirler (GBYF) yarışmasında finale kalarak yüzlerce proje arasından <span className="font-bold text-blue-600">ilk 5'e girme</span> başarısı gösterdik. Görselde ekibimiz ve danışman hocamızla fuar alanındaki standımız yer almaktadır.
                            </p>
                        </div>
                    </div>
                </div>
{/* 8. EMO BPS PROJE SERGİSİ (DÜZELTİLDİ: object-contain yapıldı) */}
<div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border border-gray-200 flex flex-col group">
    <div className="h-64 overflow-hidden bg-gray-900 flex items-center justify-center border-b border-gray-200">
        <img src={emoStantImg} alt="EMO BPS Proje Sergisi" className="w-full h-full object-contain transform group-hover:scale-105 transition duration-500 p-2" />
    </div>
    <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 border-b border-gray-200 pb-2">EMO BPS Proje Sergisi</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
                EMO Ankara Şubesi tarafından yürütülen Bitirme Projeleri Sergisi'nde (BPS) projemizi ve otonom dengeleme prototipimizi ziyaretçilere sunduğumuz stant alanımız.
            </p>
        </div>
    </div>
</div>
               

                {/* 5. PROTOTİPİN NİHAİ HALİ */}
                <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border border-gray-200 flex flex-col group">
                    <div className="h-64 overflow-hidden bg-black flex items-center justify-center">
                        <img src={finalProtoImg} alt="Prototipin Nihai Hali" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" />
                    </div>
                    <div className="p-6 flex-grow flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3 border-b border-gray-200 pb-2">Prototipin Nihai Hali</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Tandem rotorlu helikopter modelimiz üzerinde otonom karşı ağırlık mekanizmasının, step motorların ve entegre sensör altyapısının eksiksiz olarak monte edildiği son üretim aşaması.
                            </p>
                        </div>
                    </div>
                </div>
               

                 {/* 4. SENSÖR ÖLÇÜMÜ VE FİLTRELEME (DÜZELTİLDİ: bg-white ve object-contain yapıldı) */}
                <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border border-gray-200 flex flex-col group">
                    <div className="h-64 overflow-hidden bg-white flex items-center justify-center border-b border-gray-200">
                        <img src={tekerImg} alt="Sensör Ölçümü ve Filtreleme" className="w-full h-full object-contain transform group-hover:scale-105 transition duration-500 p-2" />
                    </div>
                    <div className="p-6 flex-grow flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3 border-b border-gray-200 pb-2">Sensör Ölçümü ve Filtreleme</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Ağırlık merkezini hassas ölçerken mekanik titreşimlerden kaynaklı veri gürültüleriyle karşılaştık. Geliştirdiğimiz kararlı dijital filtreleme algoritmaları sayesinde bu dalgalanmaları süzerek anlık ve güvenilir ağırlık verileri elde ettik.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 6. İLK TASLAK VE MEKANİK PLANLAMA (DÜZELTİLDİ: bg-white yapıldı) */}
                <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border border-gray-200 flex flex-col group">
                    <div className="h-64 overflow-hidden bg-white flex items-center justify-center border-b border-gray-200">
                        <img src={taslakImg} alt="İlk Taslak ve Mekanik Planlama" className="w-full h-full object-contain transform group-hover:scale-105 transition duration-500 p-2" />
                    </div>
                    <div className="p-6 flex-grow flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3 border-b border-gray-200 pb-2">İlk Taslak ve Mekanik Planlama</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Projenin başlangıç aşamasında tasarlanan X-Y eksenli dengeleme sisteminin ve hareketli kütle mimarisinin ilk teknik çizim ve CAD taslağı.
                            </p>
                        </div>
                    </div>
                </div>

                

                

            </div>
        </div>
    </section>
);


// 5.5. Proje Demo Videosu Bölümü

const DemoSection = () => (
    <section id="demo" className="py-20 px-4 md:px-12 bg-[#0b0f19] text-white border-b border-gray-800">
        <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white flex items-center justify-center gap-3">
                    <Play className="text-pink-700 w-10 h-10" /> Proje Demo Videosu
                </h2>
                <div className="w-24 h-1.5 bg-pink-700 rounded-full mx-auto mt-5"></div>
                <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                    Hava aracı ağırlık merkezi tespiti, loadcell sensör verilerinin işlenmesi ve otonom dengeleme mekanizmasının çalışırkenki anlık görüntüsü.
                </p>
            </div>
            
            {/* Yerel Video Oynatıcı Çerçevesi */}
            <div className="relative w-full aspect-video bg-black rounded-2xl shadow-2xl overflow-hidden border-4 border-gray-700">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    controls
                    playsInline
                >
                    <source src={demoVideo} type="video/mp4" />
                    Tarayıcınız video etiketini desteklemiyor.
                </video>
            </div>
        </div>
    </section>
);


// 6. Grup Üyeleri

const TeamSection = () => (
    <section id="ekip" className="py-16 px-4 md:px-12 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white flex items-center justify-center gap-3">
                    <Users className="text-blue-500 w-10 h-10" /> Grup Üyeleri
                </h2>
                <div className="w-24 h-1.5 bg-blue-500 rounded-full mx-auto mt-5"></div>
            </div>

            {/* Grid yerine flex justify-center kullanarak kartları ortaladık ve genişlik verdik */}
            <div className="flex flex-wrap justify-center gap-8">
                {projectData.members.map((member, index) => (
                    <div key={index} className="w-full sm:w-64 text-center p-6 bg-gray-800 rounded-xl shadow-lg border-t-4 border-indigo-600 transform hover:scale-[1.03] transition duration-300">
                        <div className="w-20 h-20 bg-blue-500/20 rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold border-2 border-blue-500">
                            {member.name.split(' ')[0][0]}{member.name.split(' ').slice(-1)[0][0]}
                        </div>
                        <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                        <p className="text-sm text-blue-300 mt-1">{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);


// 7. Paydaşlar ve İletişim Bilgileri
const StakeholderSection = () => (
    <section id="paydaslar" className="py-16 px-4 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 flex items-center justify-center gap-3">
                    <Link className="text-indigo-600 w-10 h-10" /> Paydaşlar ve Yönetim
                </h2>
                <div className="w-24 h-1.5 bg-indigo-600 rounded-full mx-auto mt-5"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="p-6 bg-indigo-50 rounded-xl shadow-lg border-l-4 border-indigo-600">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">{projectData.stakeholders.coordinator.role}</h3>
                    <p className="text-xl font-bold text-indigo-700">{projectData.stakeholders.coordinator.name}</p>
                    <p className="text-sm text-gray-500 mt-2">Teknik süreçlerin takibi ve proje yönetim desteği.</p>
                </div>
                
                <div className="p-6 bg-blue-50 rounded-xl shadow-lg border-l-4 border-blue-600">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">{projectData.stakeholders.consultant.role}</h3>
                    <p className="text-xl font-bold text-blue-700">{projectData.stakeholders.consultant.name}</p>
                    <p className="text-sm text-gray-500 mt-2">Akademik rehberlik ve metodolojik danışmanlık.</p>
                </div>
            </div>

            <div className="text-center mb-8 mt-16">
                <h3 className="text-3xl font-bold text-gray-800">Jüri Üyeleri</h3>
                <div className="w-16 h-1 bg-gray-300 rounded-full mx-auto mt-4"></div>
            </div>

            <div className="flex justify-center gap-8 flex-wrap">
                {projectData.stakeholders.jury.map((member, index) => (
                    <div key={index} className="w-full sm:w-60 p-5 bg-gray-100 rounded-lg shadow-md text-center transform hover:scale-[1.02] transition duration-200">
                        <h4 className="text-lg font-semibold text-gray-800">{member.name}</h4>
                        <p className="text-sm text-yellow-600 mt-1">{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);


// 8. Raporlar Sistemi
const ReportSection = () => {
    return (
        <section id="raporlar" className="py-16 px-4 md:px-12 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 flex items-center justify-center gap-3">
                        <FileText className="text-indigo-600 w-10 h-10" /> Proje Belgeleri
                    </h2>
                    <div className="w-24 h-1.5 bg-indigo-600 rounded-full mx-auto mt-5"></div>
                </div>
                
                <p className="text-center text-gray-600 mb-8">
                    Proje süreci boyunca hazırlanan teknik raporları ve belgeleri aşağıda bulabilirsiniz.
                </p>

                <div className="space-y-4 max-w-3xl mx-auto">
                    {projectData.mockReports.map((report) => (
                        <div 
                            key={report.id} 
                            className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 border-l-4 border-blue-500"
                        >
                            <div>
                                <h4 className="text-lg font-medium text-gray-900">{report.title}</h4>
                                <p className="text-sm text-gray-500 mt-1">Yayın Tarihi: {report.date}</p>
                            </div>
                            
                            {report.filePath ? (
                                <a
                                    href={report.filePath} 
                                    download 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white font-semibold rounded-full shadow-md hover:bg-green-600 transition duration-300"
                                    aria-label={`${report.title} dosyasını indir`}
                                >
                                    <Download className="w-5 h-5" />
                                    <span>İndir</span>
                                </a>
                            ) : (
                                <span
                                    className="flex items-center space-x-2 px-4 py-2 bg-gray-400 text-white font-semibold rounded-full shadow-md cursor-not-allowed"
                                >
                                    <span>Yakında</span>
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


// 9. Navigasyon Çubuğu (Kenarlara Tam Yaslı)
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: "Ana Sayfa", href: "#anasayfa" },
        { name: "Açıklama", href: "#aciklama" },
        { name: "Galeri", href: "#galeri" },
        { name: "Demo", href: "#demo" },
        { name: "Ekip", href: "#ekip" },
        { name: "Paydaşlar", href: "#paydaslar" }, 
        { name: "Raporlar", href: "#raporlar" },
    ];

    return (
        <header className={`sticky top-0 z-50 transition duration-300 ${isScrolled ? 'bg-gray-900/95 shadow-2xl backdrop-blur-sm' : 'bg-transparent'}`}>
            {/* max-w-7xl kaldırılarak w-full yapıldı ve içeride px-6 ile hafif kenar payı bırakıldı */}
            <nav className="w-full px-6 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-white tracking-wider">
                    {projectData.groupName}
                </div>
                <div className="hidden md:flex space-x-6">
                    {navItems.map((item) => (
                        <a 
                            key={item.name}
                            href={item.href} 
                            className="text-white hover:text-blue-400 transition duration-150 font-medium text-lg"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );
};

// --- Ana Uygulama Bileşeni ---
const App = () => {
    
    return (
        <div className="font-sans antialiased bg-white min-h-screen">
            
            <style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;800&family=Lato:wght@400;700&display=swap');
                
                html { scroll-behavior: smooth; }
                
                body { 
                    font-family: 'Lato', sans-serif; 
                }
                
                h1, h2, h3, h4, h5, h6 { 
                    font-family: 'Montserrat', sans-serif; 
                }
                
                @keyframes bounce {
                    0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); }
                    50% { transform: translateY(0); animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }
                }
                .animate-bounce { animation: bounce 1s infinite; }
                `}
            </style>
            
            <Navbar />
            <main>
                <HeroSection />
                <TrustBadgeSection />
                <DescriptionSection />
                <TechStackSection />
                <GallerySection />
                <DemoSection />
                <TeamSection />
                <StakeholderSection /> 
                <ReportSection />
            </main>
            
            {/* Footer */}
            <footer className="bg-gray-800 text-white py-6 text-center border-t border-blue-700 flex flex-col items-center justify-center">
                <div className="max-w-6xl mx-auto text-sm mb-2">
                    © {new Date().getFullYear()} {projectData.groupName} | {projectData.program} Projesi
                </div>
                <div className="text-xs text-gray-400 font-light tracking-wide">
                    Created by Yasin Anber
                </div>
            </footer>
        </div>
    );
};

export default App;