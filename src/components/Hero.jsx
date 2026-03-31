import { useState, useEffect } from 'react';
import { Plane, ArrowRight, ShieldCheck } from 'lucide-react';

const Hero = () => {
  const images = [
    '/aroplane.jpg',
    '/schen.jpg',
    '/pamplet.jpeg',
    '/pamplet2.jpeg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900 select-none">
      
      {/* Dynamic Background Slider */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center will-change-transform transition-all duration-[3000ms] ease-in-out ${
              index === currentIndex 
                ? 'opacity-100 scale-110 visible' 
                : 'opacity-0 scale-100 invisible'
            }`}
            style={{ 
              backgroundImage: `url(${img})`,
              transitionProperty: 'opacity, transform'
            }}
          />
        ))}
      </div>

      {/* Premium Multi-layer Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900/90 z-10" />

      {/* Hero Content Area */}
      <div className="relative z-20 text-center px-6 max-w-5xl">
        
        {/* Modern Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-8 animate-in fade-in slide-in-from-top-4 duration-1000">
          <ShieldCheck size={14} className="text-blue-400" />
          <span className="text-white text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">
            Official Travel Partners
          </span>
        </div>
        
        {/* Main Heading with Updated Text */}
        <h1 className="text-white text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8 drop-shadow-2xl">
          VISIT VISAS, STUDY <br />
          <span className="text-blue-400 italic font-light">&</span> 
          <span className="text-blue-500 ml-4">EMPLOYMENT OFFER</span>
        </h1>
        
        {/* Subtext with better readability */}
        <p className="text-gray-200 max-w-2xl mx-auto text-base md:text-xl font-medium leading-relaxed mb-12 drop-shadow-md opacity-90">
          Professional visa consultancy for Canada, UK, USA, Europe, and the Middle East. 
          Your journey to a global career starts here.
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#events" className="w-full sm:w-auto">
            <button className="w-full bg-blue-600 hover:bg-white hover:text-blue-900 text-white px-12 py-5 rounded-xl font-black text-sm md:text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-2xl flex items-center justify-center gap-3 group">
              VIEW SERVICES 
              <Plane size={22} className="rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </a>
          <a href="#contact" className="w-full sm:w-auto">
            <button className="w-full border-2 border-white/80 text-white hover:bg-white hover:text-blue-900 px-12 py-5 rounded-xl font-black text-sm md:text-lg transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2">
              APPLY NOW <ArrowRight size={22} />
            </button>
          </a>
        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-3">
        <span className="text-white/40 text-[9px] font-bold tracking-[0.3em] uppercase">Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-blue-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;