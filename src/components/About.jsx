import { MapPin, Navigation, Shield, Music } from "lucide-react";

const About = () => {
  const mapSearchUrl =
    "https://www.google.com/maps/search/Burudani+Address+Juja";

  return (
    <section
      id="about"
      className="py-24 bg-obsidian text-white px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-gold font-bold tracking-[0.4em] uppercase mb-4 text-sm">
              The Destination
            </h2>
            <h1 className="text-5xl md:text-8xl font-black italic mb-6 leading-[0.9]">
              JUJA'S PREMIER <br />
              <span className="text-violet drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                NIGHTLIFE HUB
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
              Perfectly positioned along the Thika Super Highway next to Juja Mall.
              Burudani Address offers an unparalleled multi-level clubbing
              experience defined by luxury, security, and the pulse of the city.
            </p>
          </div>

          <div className="hidden lg:block bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <p className="text-gold font-black text-4xl mb-1 italic">OPEN 24/7</p>
            <p className="text-xs text-gray-500 uppercase tracking-[0.2em]">
              During Peak Event Cycles
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Information Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-gold/30 transition-all duration-500 group">
              <div className="bg-gold/10 p-4 rounded-2xl w-fit mb-6 group-hover:bg-gold/20 transition-colors">
                <MapPin className="text-gold" size={32} />
              </div>
              <h3 className="text-2xl font-black mb-3 uppercase tracking-tighter">
                Our Address
              </h3>
              <p className="text-gray-400 mb-8 font-medium">
                Thika Super Highway,
                <br />
                Next to Juja Mall, Juja, Kenya.
              </p>
              <a
                href={mapSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-obsidian px-8 py-4 rounded-full font-black hover:bg-gold transition-all transform hover:scale-105"
              >
                GET DIRECTIONS <Navigation size={20} />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 text-center">
                <Shield className="text-violet mx-auto mb-2" />
                <span className="block text-xs uppercase font-bold text-gray-500">
                  Secure
                </span>
                <span className="font-bold">Parking</span>
              </div>
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 text-center">
                <Music className="text-violet mx-auto mb-2" />
                <span className="block text-xs uppercase font-bold text-gray-500">
                  Dual
                </span>
                <span className="font-bold">Floors</span>
              </div>
            </div>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-3 h-[500px] relative group">
            <div
              onClick={() => window.open(mapSearchUrl, "_blank")}
              className="relative w-full h-full cursor-pointer overflow-hidden rounded-[3rem] border border-white/10 shadow-2xl transition-all duration-700 group-hover:border-violet/50"
            >
              {/* Live Google Map */}
              <iframe
                title="Burudani Address Map"
                src="https://www.google.com/maps?q=Burudani+Address+Juja&output=embed"
                className="absolute inset-0 w-full h-full z-0 transition-transform duration-1000
                           group-hover:scale-110 grayscale-[0.3] brightness-[0.5]
                           group-hover:grayscale-0 group-hover:brightness-100"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Gradient Overlay (kept for luxury contrast) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-80" />

              {/* Floating Badge */}
              <div className="absolute top-8 right-8 bg-violet px-6 py-2 rounded-full text-[10px] font-black tracking-[0.3em] uppercase shadow-xl z-30">
                Juja City Mall Area
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
