import { useState, useEffect } from 'react';
import { Plane, ArrowRight } from 'lucide-react';

const Hero = () => {
  const images = [
    '/grads.jpg',
    '/schen.jpg',
    '/aroplane.jpg',
    '/work.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Increased slightly to allow the zoom effect to breathe

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900 select-none">
      
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center will-change-transform transition-all duration-[2500ms] ease-in-out ${
              index === currentIndex 
                ? 'opacity-100 scale-110 visible' 
                : 'opacity-0 scale-100 invisible'
            }`}
            style={{ 
              backgroundImage: `url(${img})`,
              transitionProperty: 'opacity, transform' // Explicitly tells browser what to animate
            }}
          />
        ))}
      </div>

      {/* Professional Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-slate-900/40 to-slate-900/90 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl">
        <h2 className="text-white text-xs md:text-lg font-bold tracking-[0.4em] uppercase mb-4 animate-pulse">
          Your Trusted Partner in Global Mobility
        </h2>
        
        <h1 className="text-white text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-6 drop-shadow-2xl">
          WORK, STUDY & <br />
          <span className="text-blue-400">TRAVEL WORLDWIDE</span>
        </h1>
        
        <p className="text-gray-100 max-w-2xl mx-auto text-base md:text-xl font-medium leading-relaxed mb-10">
          Exceptional travel experiences for Work Visas, Study Visas, and Permanent Residency 
          to Canada, UK, USA, Europe, and the Middle East.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#events" className="w-full sm:w-auto">
            <button className="w-full bg-blue-600 hover:bg-white hover:text-blue-900 text-white px-10 py-4 rounded-lg font-black text-sm md:text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl flex items-center justify-center gap-2">
              OUR SERVICES <Plane size={20} className="rotate-45" />
            </button>
          </a>
          <a href="#contact" className="w-full sm:w-auto">
            <button className="w-full border-2 border-white text-white hover:bg-white hover:text-blue-900 px-10 py-4 rounded-lg font-black text-sm md:text-lg transition-all duration-300 active:scale-95 flex items-center justify-center gap-2">
              GET STARTED <ArrowRight size={20} />
            </button>
          </a>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <div className="w-[2px] h-16 bg-white/20 rounded-full relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-blue-400 animate-scroll-move" />
        </div>
      </div>
    </section>
  );
};

export default Hero;