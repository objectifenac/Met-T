import React, { useState, useEffect } from 'react';
import { LucideMenu, LucideX, LucideArrowDown, LucideInstagram, LucideMail, LucideArrowRight } from 'lucide-react';

// --- ASSETS ---
const ASSETS = {
  hero: "DSC_6866.jpg", 
  margot_main: "10df81d8-b30c-4b02-aa28-8f5422ed3d69.JPG", 
  timeo_main: "8cfaad6d-0358-4683-a7c2-9c4c807167a5.JPG", 
  grid_lifestyle: "b2f4052b-5169-4272-a966-10100eba409d.jpg",
  margot_snow: "a4a5be1c-bdbc-4c58-8784-033aa4713a52.jpg",
  margot_interior: "IMG_1998.jpg",
  margot_street: "9ce5cfab-6223-4439-ab30-8d36819791c0.jpg"
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: 'ACCUEIL', id: 'home' },
    { label: 'MARGOT', id: 'margot' },
    { label: 'TIMÉO', id: 'timeo' },
    { label: 'MENSURATIONS', id: 'measurements' },
    { label: 'CONTACT', id: 'contact' }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center p-6 md:p-10 transition-all duration-500 ${scrolled ? 'bg-[#0F0F10]/90 backdrop-blur-md py-4' : ''}`}>
        <div className="text-2xl md:text-3xl font-serif tracking-tighter cursor-pointer text-[#F3EEE7]" onClick={() => scrollTo('home')}>
          MARGOT <span className="text-[#6E1F2A]">&</span> TIMÉO
        </div>
        <button onClick={() => setIsOpen(true)} className="text-[#F3EEE7] flex items-center gap-3 group">
          <span className="text-[10px] tracking-[0.3em] uppercase hidden md:block opacity-60">Menu</span>
          <LucideMenu size={32} strokeWidth={1} />
        </button>
      </nav>

      <div className={`fixed inset-0 z-[100] bg-[#0F0F10] transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="absolute top-10 right-10">
          <button onClick={() => setIsOpen(false)} className="text-[#F3EEE7] p-2 hover:rotate-90 transition-transform duration-300">
            <LucideX size={40} strokeWidth={1} />
          </button>
        </div>
        <div className="h-full flex flex-col justify-center items-center space-y-6 md:space-y-10">
          {navItems.map((item) => (
            <button 
              key={item.id} 
              onClick={() => scrollTo(item.id)} 
              className="text-4xl md:text-7xl font-serif text-[#F3EEE7] hover:text-[#6E1F2A] hover:italic transition-all duration-300 uppercase tracking-tighter"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default function App() {
  return (
    <div className="bg-[#0F0F10] text-[#F3EEE7] font-sans selection:bg-[#6E1F2A] overflow-x-hidden">
      
      <Navigation />

      {/* SECTION 1: HERO */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-40 scale-110">
          <img src={ASSETS.hero} className="w-full h-full object-cover animate-slow-zoom" alt="Portrait de duo" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-[14rem] font-serif leading-none tracking-tighter mb-4">
            Margot <span className="italic text-[#6E1F2A]">&</span> Timéo
          </h1>
          <p className="text-[10px] md:text-xs tracking-[0.8em] uppercase opacity-60 mb-12">Modèles • Paris • Portfolio Duo</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
            <button onClick={() => document.getElementById('margot').scrollIntoView({behavior:'smooth'})} className="group flex items-center gap-4 border border-white/20 px-8 py-3 hover:bg-white hover:text-black transition-all duration-500">
              <span className="font-serif italic text-xl">Margot</span>
              <LucideArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button onClick={() => document.getElementById('timeo').scrollIntoView({behavior:'smooth'})} className="group flex items-center gap-4 border border-white/20 px-8 py-3 hover:bg-[#6E1F2A] transition-all duration-500">
              <span className="font-serif italic text-xl">Timéo</span>
              <LucideArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
          <LucideArrowDown size={30} strokeWidth={1} />
        </div>
      </section>

      {/* SECTION 2: MARGOT */}
      <section id="margot" className="relative min-h-screen bg-[#F3EEE7] text-[#0F0F10] py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">
            <div className="w-full md:w-1/2 overflow-hidden shadow-2xl">
              <img src={ASSETS.margot_main} className="w-full grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100 object-cover aspect-[3/4]" alt="Portrait de Margot" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-7xl md:text-[10rem] font-serif leading-none uppercase mb-6 text-[#6E1F2A]">Margot</h2>
              <p className="text-2xl md:text-3xl font-serif italic mb-12 opacity-80 leading-snug">
                "Une élégance intemporelle alliée à une force éditoriale saisissante."
              </p>
              <div className="grid grid-cols-1 gap-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                   <div className="h-[300px] overflow-hidden"><img src={ASSETS.margot_street} className="w-full h-full object-cover grayscale" alt="Margot mode" /></div>
                   <div className="h-[300px] overflow-hidden md:mt-12"><img src={ASSETS.margot_snow} className="w-full h-full object-cover grayscale" alt="Margot hiver" /></div>
                   <div className="h-[300px] overflow-hidden"><img src={ASSETS.margot_interior} className="w-full h-full object-cover grayscale" alt="Margot intérieur" /></div>
                   <div className="h-[300px] overflow-hidden md:mt-12 flex items-center justify-center bg-black/5 p-4 italic font-serif text-center">New Face 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: TIMÉO */}
      <section id="timeo" className="relative min-h-screen bg-[#0F0F10] text-[#F3EEE7] py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row-reverse gap-16 md:gap-24 items-center">
            <div className="w-full md:w-1/2 overflow-hidden shadow-2xl border border-white/5">
              <img src={ASSETS.timeo_main} className="w-full brightness-75 hover:brightness-100 transition-all duration-1000 aspect-[3/4] object-cover" alt="Portrait de Timéo" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-7xl md:text-[10rem] font-serif leading-none uppercase mb-6 text-[#6B5648]">Timéo</h2>
              <p className="text-2xl md:text-3xl font-serif italic mb-12 opacity-80 leading-snug">
                "Une structure brute et une versatilité moderne pour le luxe contemporain."
              </p>
              <div className="h-[400px] w-full relative group overflow-hidden">
                 <img src={ASSETS.grid_lifestyle} className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-opacity duration-700 grayscale" alt="Lifestyle Timéo" />
                 <div className="absolute inset-0 border border-white/10 m-4 flex items-center justify-center">
                    <span className="text-xs tracking-[0.6em] uppercase">Street • Editorial • Casting</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: MENSURATIONS */}
      <section id="measurements" className="bg-[#F3EEE7] text-[#0F0F10] py-24 md:py-32 border-y border-black/5">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-5xl md:text-8xl font-serif mb-4">Mensurations</h2>
            <div className="h-[2px] w-40 bg-[#6E1F2A]"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {/* Margot Measurements */}
            <div className="space-y-8">
              <h3 className="text-3xl font-serif italic text-[#6E1F2A]">Profil Margot</h3>
              <div className="space-y-4 font-sans uppercase text-[11px] tracking-widest">
                <div className="flex justify-between border-b border-black/10 py-4 font-bold"><span>Taille</span><span className="text-xl font-serif italic text-black">175 cm</span></div>
                <div className="flex justify-between border-b border-black/10 py-4 font-bold"><span>Poitrine</span><span className="text-xl font-serif italic text-black">84 cm</span></div>
                <div className="flex justify-between border-b border-black/10 py-4 font-bold"><span>Taille (Mens.)</span><span className="text-xl font-serif italic text-black">62 cm</span></div>
                <div className="flex justify-between border-b border-black/10 py-4 font-bold"><span>Hanches</span><span className="text-xl font-serif italic text-black">90 cm</span></div>
                <div className="flex justify-between border-b border-black/10 py-4 font-bold"><span>Pointure</span><span className="text-xl font-serif italic text-black">39</span></div>
                <div className="flex justify-between border-b border-black/10 py-4 font-bold"><span>Cheveux</span><span className="text-xl font-serif italic text-black">Châtain</span></div>
                <div className="flex justify-between border-b border-black/10 py-4 font-bold"><span>Yeux</span><span className="text-xl font-serif italic text-black">Bruns</span></div>
              </div>
            </div>

            {/* Timéo Measurements */}
            <div className="space-y-8">
              <h3 className="text-3xl font-serif italic text-[#6B5648]">Profil Timéo</h3>
              <div className="space-y-4 font-sans uppercase text-[11px] tracking-widest">
                <div className="flex justify-between border-b border-black/10 py-4 font-bold"><span>Taille</span><span className="text-xl font-serif italic text-black">183 cm</span></div>
                <div className="flex justify-between border-b border-black/10 py-4 font-bold"><span>Poitrine</span><span className="text-xl font-serif italic text-black">98 cm</span></div>
                <div className="flex justify-between border-b border-black/10 py-4 font-bold"><span>Taille (Mens.)</span><span className="text-xl font-serif italic text-black">78 cm</span></div>
                <div className="flex justify-between border-b border-black/10 py-4 font-bold"><span>Confection</span><span className="text-xl font-serif italic text-black">48-50</span></div>
                <div className="flex justify-between border-b border-black/10 py-4 font-bold"><span>Pointure</span><span className="text-xl font-serif italic text-black">43</span></div>
                <div className="flex justify-between border-b border-black/10 py-4 font-bold"><span>Cheveux</span><span className="text-xl font-serif italic text-black">Brun</span></div>
                <div className="flex justify-between border-b border-black/10 py-4 font-bold"><span>Yeux</span><span className="text-xl font-serif italic text-black">Noisette</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CONTACT */}
      <section id="contact" className="min-h-screen bg-[#0F0F10] text-[#F3EEE7] flex items-center justify-center py-24 px-6 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6E1F2A]/10 rounded-full blur-[120px] -z-0"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#6B5648]/10 rounded-full blur-[120px] -z-0"></div>

        <div className="max-w-6xl w-full relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <h2 className="text-6xl md:text-9xl font-serif leading-none tracking-tighter mb-10">Travaillons <span className="italic block text-[#6E1F2A]">Ensemble.</span></h2>
              <div className="space-y-12">
                <div className="group cursor-pointer">
                  <p className="text-[10px] tracking-[0.5em] opacity-40 uppercase mb-4">Direct Email</p>
                  <p className="text-3xl md:text-4xl font-serif group-hover:text-[#6E1F2A] transition-colors">booking@margot-timeo.com</p>
                </div>
                <div className="group cursor-pointer">
                  <p className="text-[10px] tracking-[0.5em] opacity-40 uppercase mb-4">Instagram Duo</p>
                  <div className="flex items-center gap-4">
                    <LucideInstagram size={32} strokeWidth={1} />
                    <p className="text-3xl md:text-4xl font-serif group-hover:text-[#6E1F2A] transition-colors">@margot_timeo_paris</p>
                  </div>
                </div>
                <div>
                   <p className="text-[10px] tracking-[0.5em] opacity-40 uppercase mb-4">Localisation</p>
                   <p className="text-xl font-serif">Paris, France • Disponibles International</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-10 md:p-16 border border-white/10 rounded-sm">
              <form className="space-y-8">
                <div className="space-y-2">
                   <label className="text-[10px] tracking-[0.4em] opacity-40 uppercase">Agence / Client</label>
                   <input type="text" className="w-full bg-transparent border-b border-white/20 py-4 focus:border-[#6E1F2A] outline-none font-serif text-2xl transition-colors" placeholder="Vogue, Chanel, IMG..." />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] tracking-[0.4em] opacity-40 uppercase">Message</label>
                   <textarea rows="4" className="w-full bg-transparent border-b border-white/20 py-4 focus:border-[#6E1F2A] outline-none font-serif text-2xl transition-colors resize-none" placeholder="Projet, Dates, Lieu..."></textarea>
                </div>
                <button className="group flex items-center gap-6 text-2xl md:text-3xl font-serif italic hover:gap-10 transition-all duration-500 text-[#6E1F2A]">
                  Envoyer la demande <LucideArrowRight size={32} strokeWidth={1} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/5 text-center px-6">
        <p className="text-[10px] tracking-[0.6em] opacity-30 uppercase">© 2024 MARGOT & TIMÉO • PORTFOLIO ÉDITORIAL</p>
      </footer>

      <style>{`
        @keyframes slow-zoom {
          from { transform: scale(1.1); }
          to { transform: scale(1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 15s infinite alternate ease-in-out;
        }
        html {
          scroll-behavior: smooth;
        }
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 4px;
        }
        ::-webkit-scrollbar-track {
          background: #0F0F10;
        }
        ::-webkit-scrollbar-thumb {
          background: #6E1F2A;
        }
      `}</style>

    </div>
  );
}