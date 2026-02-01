const areas = [
  { name: "The Sky Lounge", desc: "Panoramic views of the city", icon: "360°" },
  { name: "Main Dance Floor", desc: "Pulse of the night", icon: "LIVE" },
  { name: "The Cocktail Bar", desc: "Artisanal spirits", icon: "DRINKS" },
  { name: "The Vendor Market", desc: "Shop and chill", icon: "RETAIL" },
];

const Walkthrough = () => {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-white text-4xl font-black mb-4">EXPLORE THE <span className="text-gold">VENUE</span></h2>
        <p className="text-gray-500 uppercase tracking-widest text-sm">Experience our multi-level destination</p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {areas.map((area, index) => (
          <div key={index} className="relative aspect-square bg-white/5 overflow-hidden group border border-white/10">
            {/* Overlay */}
            <div className="absolute inset-0 bg-violet/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-20">
              <span className="text-violet font-black mb-4 text-xs tracking-widest">{area.icon}</span>
              <h3 className="text-white text-xl font-bold uppercase mb-2">{area.name}</h3>
              <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                {area.desc}
              </p>
            </div>
            
            {/* Animated Border */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gold transition-all duration-500 group-hover:w-full" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Walkthrough;