const areas = [
  { 
    name: "The Sky Lounge", 
    desc: "Panoramic views of the city", 
    icon: "360°",
    img: "/skylounge.png"
  },
  { 
    name: "Main Dance Floor", 
    desc: "Pulse of the night", 
    icon: "LIVE",
    img: "/dancefloor.png"
  },
  { 
    name: "The Cocktail Bar", 
    desc: "Artisanal spirits", 
    icon: "DRINKS",
    img: "/cocktails.png"
  },
  { 
    name: "The Vendor Market", 
    desc: "Shop and chill", 
    icon: "RETAIL",
    img: "/vendor.png"
  },
];

const Walkthrough = () => {
  return (
    <section id="walkthrough" className="py-24 px-6 bg-obsidian">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-white text-4xl md:text-6xl font-black mb-4 italic uppercase tracking-tighter">
          EXPLORE THE <span className="text-gold">VENUE</span>
        </h2>
        <p className="text-gray-500 uppercase tracking-[0.3em] text-sm">Experience our multi-level destination</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {areas.map((area, index) => (
          <div 
            key={index} 
            /* Added select-none to stop popups on the wording */
            className="relative aspect-square overflow-hidden group border border-white/10 rounded-xl cursor-pointer touch-manipulation active:scale-[0.98] transition-transform select-none"
            style={{ WebkitTouchCallout: 'none' }}
          >
            
            {/* Layer 1: Background Image - pointer-events-none stops 'Save Image' popup */}
            <img 
              src={area.img} 
              alt={area.name}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 grayscale-[0.5] brightness-[0.4] pointer-events-none
                         group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110
                         group-active:grayscale-0 group-active:brightness-100 group-active:scale-110"
            />

            {/* Layer 2: Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 z-10" />
            <div className="absolute inset-0 bg-violet/40 opacity-0 group-hover:opacity-20 group-active:opacity-20 transition-opacity duration-500 z-10" />
            
            {/* Layer 3: Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-20 text-center">
              <span className="text-gold font-black mb-4 text-xs tracking-[0.3em] bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                {area.icon}
              </span>
              <h3 className="text-white text-2xl font-black uppercase mb-2 drop-shadow-lg">
                {area.name}
              </h3>
              <p className="text-gray-200 text-sm font-medium opacity-0 translate-y-4 transition-all duration-500 max-w-[80%] drop-shadow-md
                            group-hover:opacity-100 group-hover:translate-y-0
                            group-active:opacity-100 group-active:translate-y-0">
                {area.desc}
              </p>
            </div>
            
            {/* Layer 4: Animated Bottom Border */}
            <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-gold transition-all duration-500 z-30
                            group-hover:w-full 
                            group-active:w-full" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Walkthrough;