import { useState, useEffect } from 'react';

import { Anchor, Users, FileText, TrendingUp, Cpu, Download, Zap, Link, Play, Scale } from 'lucide-react'; // Scale ikonunu ekledim!

import './index.css';
import mainManuImage from './images/main_manu.jpg'; // <-- RESİM BURADAN İÇE AKTARILDI


// --- Sabit Veriler ---

const projectData = {
    groupName: "CODENGE",
    tagline: "Hava Aracı Ağırlık Merkezi Hesaplama ve Otomatik Dengeleme Sistemi",
    program: "TUSAŞ LIFT-UP",
    members: [
        { name: "Yasin Anber", role: "Bilgisayar Mühendisi" },
        { name: "Sude İpekci", role: "Bilgisayar Mühendisi" },
        { name: "Selin Göç", role: "Bilgisayar Mühendisi" },
        { name: "Elif Sude Memiş", role: "Yazılım Mühendisi" },
    ],
    mockReports: [
        { id: 0, title: "Literature Presentation (Literatür Sunumu)", date: "01.10.2024", filePath: "/reports/litrerature_presentation.docx" },
        { id: 1, title: "Project Proposal (Proje Teklifi)", date: "15.10.2024" },
        { id: 2, title: "Project Specifications Report (Proje Spesifikasyon Raporu)", date: "05.11.2024" },
        { id: 3, title: "Analysis Report (Analiz Raporu)", date: "20.11.2024" },
        { id: 4, title: "High Level Design Report (Üst Düzey Tasarım Raporu)", date: "10.12.2024" },
    ],
    stakeholders: {
        coordinator: { name: "Abdulkadir Nazlı", role: "Koordinatör Mühendis" },
        consultant: { name: "Hakkı Gökhan İlk", role: "Danışman Hoca" },
        jury: [
            { name: "Ayşe Yasmin Seydim", role: "Jüri Üyesi" },
            { name: "Ali Berkol", role: "Jüri Üyesi" },
        ]
    },
    videoUrl: "https://www.youtube.com/embed/hVCLEepZ-KU", // Aircraft Center Of Gravity Explained
};


// --- Bileşenler ---


// 1. Ana Sayfa (Resim Arka Planlı, Video ve Kontrol Düğmesi İçeren)
const HeroSection = () => {
    const [isVideoVisible, setIsVideoVisible] = useState(false);

    const handleToggleVideo = () => {
        setIsVideoVisible(!isVideoVisible);
    };

    return (
        <div 
            id="anasayfa" 
            className="relative h-[90vh] flex flex-col items-center justify-center text-white overflow-hidden bg-cover bg-center"
            // VİDEO YERİNE RESİM BURAYA UYGULANDI
            style={{ backgroundImage: `url(${mainManuImage})` }} // <--- GÜNCELLEME BURADA
        >
            {/* Arka Plan Gradient Efekti (Metin okunurluğu için bu önemli!) */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 to-blue-900/80 opacity-90"></div>
            
            {/* Ana İçerik */}
            <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
                    {projectData.groupName}
                </h1>
                <p className="text-xl md:text-3xl font-light mb-6 text-blue-300">
                    {projectData.tagline}
                </p>
                
                <span className="inline-block px-4 py-2 bg-yellow-500 text-gray-900 font-bold rounded-full shadow-lg">
                    {projectData.program} Projesi
                </span>

                {/* Video Oynatıcı (ana içeriğin altında, açılıp kapanan) */}
                <div 
                    className={`mt-10 max-w-full mx-auto transition-all duration-500 ease-in-out transform ${
                        isVideoVisible ? 'opacity-100 scale-100 h-auto' : 'opacity-0 scale-95 h-0 pointer-events-none'
                    }`}
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

            {/* VİDEO BUTONU SOL ALTA SABİTLENDİ */}
            <button
                onClick={handleToggleVideo}
                className="fixed bottom-8 left-8 z-50 inline-flex items-center space-x-3 px-6 py-3 bg-pink-600 text-white font-bold rounded-full shadow-xl hover:bg-pink-700 transition duration-300 transform hover:scale-105 animate-bounce"
            >
                <Play className="w-6 h-6" />
                <span>{isVideoVisible ? 'Eğitici Videoyu Kapat' : 'Konuyla İlgili Eğitici Videoyu İzle'}</span>
            </button>

            <style>{`
                @keyframes bounce {
                    0%, 100% {
                        transform: translateY(-25%);
                        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
                    }
                    50% {
                        transform: translateY(0);
                        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
                    }
                }
                .animate-bounce {
                    animation: bounce 1s infinite;
                }
            `}</style>
        </div>
    );
};


// 2. Proje Açıklaması
const DescriptionSection = () => (
    <section id="aciklama" className="py-16 px-4 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-10 border-b-4 border-indigo-500 inline-block pb-2">
                <Anchor className="inline-block mr-2 align-top" /> Proje Detayı: Ağırlık Merkezi (AGM) Kontrolü
            </h2>

            <p className="text-lg text-gray-700 mb-10 leading-relaxed text-center italic font-medium">
                Hava araçlarının tasarımında kritik bir parametre olan Ağırlık Merkezi (AGM), uçuş emniyetini, aerodinamik performansı ve yakıt verimliliğini doğrudan belirler. <span className="text-indigo-600 font-bold">CODENGE</span> projesi olarak, küçük ve büyük ölçekli hava platformlarında bu hayati dengeyi anlık olarak ölçmek ve sapmaları sıfırlamak üzere tasarlanmış tam otomatik bir dengeleme sistemi geliştirilecektir. Bu, havacılıkta operasyonel güvenilirliği artırmayı amaçlayan yenilikçi bir yaklaşımdır.
            </p>

            <div className="grid md:grid-cols-2 gap-10">
                <div className="p-8 bg-white rounded-xl shadow-xl transition duration-300 hover:shadow-2xl border-t-4 border-indigo-500">
                    <TrendingUp className="text-indigo-500 w-10 h-10 mb-4" />
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Yüksek Hassasiyetli AGM Hesaplama ve Görselleştirme</h3>
                    <p className="text-gray-600">
                        Hava aracı yerdeyken, her bir iniş takımı altına konumlandırılan <span className="font-semibold text-gray-800">üç (3) adet yüksek hassasiyetli loadcell</span> aracılığıyla ağırlık verileri anlık olarak toplanır.
                        <br/><br/>
                        Bu veriler, hava aracının <span className="font-semibold text-gray-800">X ve Y eksenlerindeki</span> hassas ağırlık merkezi koordinatlarını hesaplamak için kullanılır. Geliştirdiğimiz C/C++ tabanlı gömülü yazılım ve kullanıcı dostu arayüz sayesinde, anlık AGM konumu görselleştirilir ve önceden tanımlanmış <span className="font-semibold text-green-700">optimum denge noktası</span> ile mevcut sapma net bir şekilde gösterilir.
                    </p>
                </div>

                <div className="p-8 bg-white rounded-xl shadow-xl transition duration-300 hover:shadow-2xl border-t-4 border-green-500">
                    {/* İKON DEĞİŞTİRİLDİ: Zap yerine Scale */}
                    <Scale className="text-green-500 w-10 h-10 mb-4" /> 
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Dinamik ve Otomatik Ağırlık Dengeleme Mekanizması</h3>
                    <p className="text-gray-600 mb-4">
                        Kargo yükleme/boşaltma, yakıt tüketimi veya görev yükü değişimleri gibi operasyonel faktörler nedeniyle AGM'de meydana gelen sapmalarda, sistemimiz dengeyi <span className="font-semibold text-green-700">otonom olarak</span> sağlar.
                        <br/><br/>
                        Dengeleme, hava aracının boylamasına ve enlemesine düzlemlerde hareket edebilen, <span className="font-semibold text-green-700">servo motorlar ile kontrol edilen akıllı bir karşı ağırlık sistemi</span> kullanılarak gerçekleştirilir. Bu hareketli kütle, hesaplanan optimum AGM noktasına ulaşmak için gereken mesafeye milimetrik hassasiyetle komut alarak hareket eder.
                    </p>
                    <p className="mt-4 text-sm font-semibold text-indigo-700 p-3 bg-indigo-100 rounded-lg">
                        {/* GELECEK VİZYONU GÜNCELLENDİ */}
                        Bu yöntem ileri safhalarda spesifik tekniklerle geliştirilip optimize edilecektir.
                    </p>
                </div>
            </div>
        </div>
    </section>
);


// 3. Grup Üyeleri
const TeamSection = () => (
    <section id="ekip" className="py-16 px-4 md:px-12 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-10 border-b-4 border-blue-500 inline-block pb-2">
                <Users className="inline-block mr-2 align-top" /> Grup Üyeleri
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
                {projectData.members.map((member, index) => (
                    <div key={index} className="text-center p-6 bg-gray-800 rounded-xl shadow-lg border-t-4 border-indigo-600 transform hover:scale-[1.03] transition duration-300">
                        {/* Mock Avatar */}
                        <div className="w-20 h-20 bg-blue-500/20 rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold border-2 border-blue-500">
                            {member.name.split(' ')[0][0]}{member.name.split(' ').slice(-1)[0][0]}
                        </div>
                        <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                        {/* ROL */}
                        <p className="text-sm text-blue-300 mt-1">{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);


// 4. Paydaşlar ve İletişim Bilgileri
const StakeholderSection = () => (
    <section id="paydaslar" className="py-16 px-4 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-10 border-b-4 border-indigo-500 inline-block pb-2">
                <Link className="inline-block mr-2 align-top" /> Paydaşlar ve Yönetim
            </h2>
            
            {/* Koordinatör ve Danışman */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Koordinatör Mühendis */}
                <div className="p-6 bg-indigo-50 rounded-xl shadow-lg border-l-4 border-indigo-600">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">{projectData.stakeholders.coordinator.role}</h3>
                    <p className="text-xl font-bold text-indigo-700">{projectData.stakeholders.coordinator.name}</p>
                    <p className="text-sm text-gray-500 mt-2">Teknik süreçlerin takibi ve proje yönetim desteği.</p>
                </div>
                
                {/* Danışman Hoca */}
                <div className="p-6 bg-blue-50 rounded-xl shadow-lg border-l-4 border-blue-600">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">{projectData.stakeholders.consultant.role}</h3>
                    <p className="text-xl font-bold text-blue-700">{projectData.stakeholders.consultant.name}</p>
                    <p className="text-sm text-gray-500 mt-2">Akademik rehberlik ve metodolojik danışmanlık.</p>
                </div>
            </div>

            {/* Jüri Üyeleri */}
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-6 border-b border-gray-300 pb-3">Jüri Üyeleri</h3>
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


// 5. Raporlar Sistemi (Gerçek İndirme Fonksiyonu)

const ReportSection = () => {
    
    // NOT: Artık handleDownload fonksiyonuna ihtiyacımız yok, çünkü indirme
    // işlemi doğrudan HTML <a> etiketi ve "download" özelliği ile yapılacak.
    
    return (
        <section id="raporlar" className="py-16 px-4 md:px-12 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-10 border-b-4 border-indigo-500 inline-block pb-2">
                    <FileText className="inline-block mr-2 align-top" /> Proje Raporları
                </h2>
                
                <p className="text-center text-gray-600 mb-8">
                    Proje süreci boyunca hazırlanan teknik ve ilerleme raporlarını aşağıda bulabilirsiniz. Raporlar Word formatında (DOCX) indirilmeye hazırdır.
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
                            
                            {/* <button> yerine <a> etiketi kullanıldı! */}
                            <a
                                // Raporda tanımladığımız dosya yolu (örn: /reports/proposal_report.docx)
                                href={report.filePath} 
                                
                                // 'download' özelliği, tarayıcıya dosyayı indirmesini söyler
                                download 
                                
                                // Linkin yeni sekmede açılması için (Opsiyonel ama iyi bir pratik)
                                target="_blank" 
                                rel="noopener noreferrer" 
                                
                                // Tailwind stilleri eski buton ile aynı
                                className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white font-semibold rounded-full shadow-md hover:bg-green-600 transition duration-300"
                                aria-label={`${report.title} Word dosyasını indir`}
                            >
                                <Download className="w-5 h-5" />
                                <span>İndir (DOCX)</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


// 6. Navigasyon Çubuğu
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
        { name: "Ekip", href: "#ekip" },
        { name: "Paydaşlar", href: "#paydaslar" }, 
        { name: "Raporlar", href: "#raporlar" },
    ];

    return (
        <header className={`sticky top-0 z-50 transition duration-300 ${isScrolled ? 'bg-gray-900/95 shadow-2xl backdrop-blur-sm' : 'bg-transparent'}`}>
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-white tracking-wider">
                    {projectData.groupName}
                </div>
                <div className="flex space-x-6">
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
const App = () => (
    <div className="font-sans antialiased bg-white min-h-screen">
        {/* React bileşenleri içinde script ve meta etiketleri kullanılmaz, index.html içinde olmalıdır.
           Bu kodlar, sadece CSS ve font ayarlarını uygulamak için stil etiketine taşınmıştır. 
        */}
        <style>
            {`
            /* index.html'den gelen meta viewport ve tailwind script kaldırıldı, 
               çünkü React bu elementleri desteklemez. */
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
            html { scroll-behavior: smooth; }
            body { font-family: 'Inter', sans-serif; }
            `}
        </style>
        
        <Navbar />
        <main>
            <HeroSection />
            <DescriptionSection />
            <TeamSection />
            <StakeholderSection /> 
            <ReportSection />
        </main>
        
        {/* Footer */}
        <footer className="bg-gray-800 text-white py-6 text-center text-sm border-t border-blue-700">
            <div className="max-w-6xl mx-auto">
                © {new Date().getFullYear()} {projectData.groupName} | {projectData.program} Projesi
            </div>
        </footer>
    </div>
);


export default App;