import { MapPin, Globe, Compass, ArrowUpRight } from 'lucide-react';

const Destinations = () => {
  const locations = [
    {
      id: 1,
      name: "Dubai & Abu Dhabi",
      region: "UAE",
      image: "/dubai_pic.avif",
      // Large on desktop, full width on mobile
      size: "md:col-span-2 md:row-span-2 aspect-[4/5] md:aspect-auto", 
      tag: "Business & Leisure"
    },
    {
      id: 2,
      name: "Cape Town",
      region: "South Africa",
      image: "/capetown.webp",
      size: "md:col-span-1 md:row-span-1 aspect-square md:aspect-auto",
      tag: "Adventure"
    },
    {
      id: 3,
      name: "Santorini",
      region: "Greece",
      image: "/Santorini.jpg",
      size: "md:col-span-1 md:row-span-2 aspect-[4/5] md:aspect-auto",
      tag: "Schengen Visa"
    },
    {
      id: 4,
      name: "Maldives",
      region: "South Asia",
      image: "/maldives.jpg",
      size: "md:col-span-1 md:row-span-1 aspect-square md:aspect-auto",
      tag: "History"
    }
  ];

  return (
    <section id="destinations" className="py-16 md:py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-blue-900 text-3xl md:text-5xl font-black mb-4 flex items-center gap-3">
              POPULAR <span className="text-blue-600 font-light italic">DESTINATIONS</span>
            </h2>
            <p className="text-slate-500 font-medium text-sm md:text-base leading-relaxed">
              From the skyscrapers of the UAE to the historic streets of Europe, 
              we facilitate visas and travel logistics for the world's most iconic locations.
            </p>
          </div>
          <div className="flex items-center gap-4 text-blue-600 font-black text-[10px] uppercase tracking-widest bg-blue-50 px-4 py-2 rounded-full md:bg-transparent md:p-0">
            <Globe size={16} /> Global Reach <Compass size={16} /> Visa Experts
          </div>
        </div>

        {/* Improved Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 md:h-[800px]">
          {locations.map((loc) => (
            <div 
              key={loc.id}
              className={`relative overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] group shadow-lg ${loc.size} transition-all duration-700 hover:shadow-2xl`}
            >
              {/* Background Image */}
              <img 
                src={loc.image} 
                alt={loc.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Elegant Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/20 to-transparent opacity-90 md:opacity-80 group-hover:opacity-100 transition-opacity" />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-white">
                <div>
                  <span className="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[8px] md:text-[9px] font-black uppercase tracking-widest border border-white/30 mb-3">
                    {loc.tag}
                  </span>
                </div>
                
                <h3 className="text-xl md:text-3xl font-black tracking-tighter mb-1">
                  {loc.name}
                </h3>
                
                <p className="flex items-center gap-2 text-blue-200 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 md:mb-6">
                  <MapPin size={14} className="text-white" /> {loc.region}
                </p>

                {/* Mobile: Always visible or smaller translate. Desktop: Hover effect */}
                <button className="flex items-center gap-2 text-white text-[9px] font-black uppercase tracking-[0.2em] md:opacity-0 md:group-hover:opacity-100 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-500">
                  Plan Trip <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Horizontal Scrollable Banner for Mobile */}
        <div className="mt-12 md:mt-16 overflow-x-auto no-scrollbar border-y border-slate-100 py-8 md:py-10">
          <div className="flex justify-start md:justify-center items-center gap-10 md:gap-16 min-w-max px-4">
            {['UAE', 'CANADA', 'USA', 'UK', 'EUROPE', 'INDIA', 'QATAR'].map((country) => (
              <div key={country} className="text-slate-300 font-black text-lg md:text-2xl tracking-tighter hover:text-blue-600 transition-colors cursor-default whitespace-nowrap">
                {country}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Destinations;