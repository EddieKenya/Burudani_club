const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Overlay for that dark club feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-obsidian/80 to-obsidian z-10" />
      
      {/* Visual Placeholder (Since we're using text only, imagine a high-energy video here) */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514525253344-f814d074e015?q=80&w=2000')] bg-cover bg-center" />

      {/* Hero Content */}
      <div className="relative z-20 text-center px-6">
        <h2 className="text-gold text-sm md:text-xl font-bold tracking-[0.3em] uppercase mb-4 animate-pulse">
          Welcome to the Evolution of Nightlife
        </h2>
        <h1 className="text-white text-5xl md:text-8xl font-black italic tracking-tighter leading-none mb-6">
          LEVEL UP YOUR <br />
          <span className="text-violet">NIGHTS</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed mb-10">
          Experience the pulse of the city at Burudani. Two floors of premium sound, 
          exclusive lounges, and an atmosphere that never sleeps.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-violet hover:bg-white hover:text-obsidian text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105">
            View Tonight's Lineup
          </button>
          <button className="border border-gold text-gold hover:bg-gold hover:text-obsidian px-10 py-4 rounded-full font-bold text-lg transition-all duration-300">
            VIP Tables
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;