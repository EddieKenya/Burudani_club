import { MapPin, Globe, Compass, ArrowUpRight } from 'lucide-react';

const Destinations = () => {
  const locations = [
    {
      id: 1,
      name: "Dubai & Abu Dhabi",
      region: "UAE",
      image: "/uae.jpg",
      size: "md:col-span-2 md:row-span-2", // Large feature card
      tag: "Business & Leisure"
    },
    {
      id: 2,
      name: "Cape Town",
      region: "South Africa",
      image: "/Capetown.jpg",
      size: "md:col-span-1 md:row-span-1",
      tag: "Adventure"
    },
    {
      id: 3,
      name: "Santorini",
      region: "Greece",
      image: "/Santorini.jpg",
      size: "md:col-span-1 md:row-span-2", // Tall card
      tag: "Schengen Visa"
    },
    {
      id: 4,
      name: "Rome",
      region: "Italy",
      image: "/Rome.jpg",
      size: "md:col-span-1 md:row-span-1",
      tag: "History"
    }
  ];

  return (
    <section id="destinations" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-blue-900 text-4xl font-black mb-4 flex items-center gap-4">
              POPULAR <span className="text-blue-600 font-light italic">DESTINATIONS</span>
            </h2>
            <p className="text-slate-500 font-medium">
              From the skyscrapers of the UAE to the historic streets of Europe, 
              we facilitate visas and travel logistics for the world's most iconic locations.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest">
            <Globe size={18} /> Global Reach <Compass size={18} className="ml-4" /> Visa Experts
          </div>
        </div>

        {/* Masonry-Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6 h-[1200px] md:h-[800px]">
          {locations.map((loc) => (
            <div 
              key={loc.id}
              className={`relative overflow-hidden rounded-[2rem] group shadow-lg ${loc.size} transition-all duration-700 hover:shadow-2xl`}
            >
              {/* Background Image */}
              <img 
                src={loc.image} 
                alt={loc.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Elegant Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <div className="flex justify-between items-center mb-2">
                  <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border border-white/30">
                    {loc.tag}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-black tracking-tighter mb-1">
                  {loc.name}
                </h3>
                
                <p className="flex items-center gap-2 text-blue-200 text-xs font-bold uppercase tracking-widest mb-6">
                  <MapPin size={14} className="text-white" /> {loc.region}
                </p>

                <button className="flex items-center gap-2 text-white text-[10px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  Plan Trip <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner from Flyer */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 border-y border-slate-100 py-10">
          {['UAE', 'CANADA', 'USA', 'UK', 'EUROPE', 'INDIA', 'QATAR'].map((country) => (
            <div key={country} className="text-slate-300 font-black text-xl md:text-2xl tracking-tighter hover:text-blue-600 transition-colors cursor-default">
              {country}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Destinations;