import { useState, useEffect } from 'react';

const Hero = () => {
  const images = [
    '/Burudani-Address2.png',
    '/burudani-Address3.png',
    '/dancers.png',
    '/burudanisquare.png'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Changes image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-obsidian">
      
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              backgroundImage: `url(${img})`,
              backfaceVisibility: 'hidden' 
            }}
          />
        ))}
      </div>

      {/* High-End Club Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-obsidian/40 to-obsidian z-10" />
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl">
        <h2 className="text-gold text-xs md:text-xl font-bold tracking-[0.4em] uppercase mb-4 animate-pulse">
          Welcome to the Evolution of Nightlife
        </h2>
        
        <h1 className="text-white text-4xl sm:text-6xl md:text-8xl font-black italic tracking-tighter leading-[0.9] mb-6">
          LEVEL UP YOUR <br />
          <span className="text-violet drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]">NIGHTS</span>
        </h1>
        
        <p className="text-gray-200 max-w-2xl mx-auto text-base md:text-xl font-medium leading-relaxed mb-10 drop-shadow-md">
          Experience the pulse of Juja at Burudani Address. Two floors of premium sound, 
          exclusive lounges, and an atmosphere that never sleeps.
        </p>
        
        {/* Responsive Button Group */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#events" className="w-full sm:w-auto">
            <button className="w-full bg-violet hover:bg-white hover:text-obsidian text-white px-10 py-4 rounded-full font-black text-sm md:text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg">
              VIEW LINEUP
            </button>
          </a>
          <a href="#booking" className="w-full sm:w-auto">
            <button className="w-full border-2 border-gold text-gold hover:bg-gold hover:text-obsidian px-10 py-4 rounded-full font-black text-sm md:text-lg transition-all duration-300 active:scale-95">
              VIP TABLES
            </button>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden md:block">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-gold to-transparent opacity-50" />
      </div>
    </section>
  );
};

export default Hero;