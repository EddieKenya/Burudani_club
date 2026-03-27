import { MapPin, Navigation, Plane, Globe, ShieldCheck } from "lucide-react";

const About = () => {
  // Direct Google Maps link for Magomano House, Tom Mboya St
  const mapSearchUrl = "https://www.google.com/maps/search/?api=1&query=Magomano+House+Tom+Mboya+Street+Nairobi";

  return (
    <section
      id="about"
      className="py-24 bg-white text-slate-900 px-6 overflow-hidden select-none"
      style={{ WebkitTouchCallout: 'none' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-blue-600 font-bold tracking-[0.4em] uppercase mb-4 text-sm">
              Our Agency
            </h2>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[0.9] tracking-tighter">
              EXCEPTIONAL TRAVEL <br />
              <span className="text-blue-900">EXPERIENCES</span>
            </h1>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
              At Pascal Travels and Tours, our mission is to provide exceptional 
              travel experiences that exceed our clients' expectations. Based in the 
              heart of Nairobi, we specialize in global mobility, job placements, and visa consultancy.
            </p>
          </div>

          <div className="hidden lg:block bg-blue-50 border border-blue-100 p-8 rounded-3xl rotate-3 hover:rotate-0 transition-transform duration-500 shadow-sm">
            <p className="text-blue-900 font-black text-4xl mb-1 italic">ESTABLISHED</p>
            <p className="text-xs text-blue-600 uppercase tracking-[0.2em] font-bold">
              Trusted Travel Partner
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-10">
          
          {/* Information Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all duration-500 group shadow-sm">
              <div className="bg-blue-600 p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-black mb-3 uppercase tracking-tighter text-blue-900">
                Our Office
              </h3>
              <p className="text-slate-600 mb-8 font-semibold leading-relaxed">
                Nairobi CBD, Tom Mboya Street,<br />
                Magomano House, Rm 4.4<br />
                Nairobi, Kenya.
              </p>
              
              {/* Button leads directly to Magomano House */}
              <a
                href={mapSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-blue-900 text-white px-8 py-4 rounded-xl font-black hover:bg-blue-600 transition-all transform hover:scale-105 shadow-lg"
              >
                GET DIRECTIONS <Navigation size={20} />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 text-center">
                <ShieldCheck className="text-blue-600 mx-auto mb-2" />
                <span className="block text-xs uppercase font-black text-slate-400">
                  Verified
                </span>
                <span className="font-bold text-blue-900">Visa Process</span>
              </div>
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 text-center">
                <Plane className="text-blue-600 mx-auto mb-2" />
                <span className="block text-xs uppercase font-black text-slate-400">
                  Global
                </span>
                <span className="font-bold text-blue-900">Reach</span>
              </div>
            </div>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-3 h-[500px] relative group">
            <div
              onClick={() => window.open(mapSearchUrl, "_blank")}
              className="relative w-full h-full cursor-pointer overflow-hidden rounded-[3rem] border border-slate-200 shadow-xl transition-all duration-700 group-hover:border-blue-400"
            >
              {/* Iframe pointing to Tom Mboya St. 
                Note: In production, use a specific Google Maps Embed API key for the exact pin 
              */}
              <iframe
                title="Pascal Travels Office Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.818645511855!2d36.8242858!3d-1.2826501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d296be7d89%3A0xd4b445bd46ff79b2!2sMagomano%20House!5e0!3m2!1sen!2ske!4v1710000000000!5m2!1sen!2ske"
                className="absolute inset-0 w-full h-full z-0 transition-transform duration-1000 group-hover:scale-105"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Light Overlay */}
              <div className="absolute inset-0 bg-blue-900/5 z-10 pointer-events-none" />

              {/* Floating Badge */}
              <div className="absolute top-8 right-8 bg-blue-900 text-white px-6 py-2 rounded-full text-[10px] font-black tracking-[0.3em] uppercase shadow-xl z-30">
                Nairobi CBD Location
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;