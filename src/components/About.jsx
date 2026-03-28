import { useState } from 'react';
import { MapPin, Globe, ShieldCheck, Star, ArrowRight } from "lucide-react";

const About = () => {
  const [activeBranch, setActiveBranch] = useState('Nairobi');

  const branches = {
    Nairobi: {
      address: "Magomano House, Tom Mboya St, Rm 4.4",
      city: "Nairobi, Kenya",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.818556108163!2d36.8227!3d-1.2833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d63683f12d%3A0x6b16c14828131!2sTom%20Mboya%20St%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1710000000000!5m2!1sen!2ske"
    },
    Lagos: {
      address: "Ogba, Floor 2, Room 15",
      city: "Lagos, Nigeria",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.2!2d3.3!3d6.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93!2sOgba%2C%20Lagos!5e0!3m2!1sen!2sng!4v1710000000000!5m2!1sen!2sng"
    },
    Accra: {
      address: "Accra City Center, Branch Office",
      city: "Accra, Ghana",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.5!2d-0.2!3d5.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023!2sAccra!5e0!3m2!1sen!2sgh!4v1710000000000!5m2!1sen!2sgh"
    }
  };

  return (
    <section id="about" className="py-24 bg-slate-50 text-slate-900 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* International Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-blue-600 font-bold tracking-[0.3em] uppercase mb-4 text-xs">
              <Globe size={14} /> Pan-African Presence
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[0.9] tracking-tighter">
              A GLOBAL AGENCY <br />
              <span className="text-blue-900">WITH LOCAL ROOTS.</span>
            </h1>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium max-w-2xl">
              Pascal Travels and Tours is a premier global mobility firm operating across 
              <span className="text-blue-600 font-bold"> Kenya, Nigeria, and Ghana.</span> We bridge the gap 
              between African talent and international opportunities.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
            <div className="p-6 bg-white rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
              <ShieldCheck className="text-blue-600 mb-2" size={28} />
              <p className="text-[10px] font-black uppercase text-slate-400">Licensed</p>
              <p className="font-bold text-blue-900">Visa Experts</p>
            </div>
            <div className="p-6 bg-white rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
              <Star className="text-orange-400 mb-2" size={28} />
              <p className="text-[10px] font-black uppercase text-slate-400">Success Rate</p>
              <p className="font-bold text-blue-900">98% Global</p>
            </div>
          </div>
        </div>

        {/* Branch Switcher & Map */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Branch Selection Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {Object.keys(branches).map((city) => (
              <button
                key={city}
                onClick={() => setActiveBranch(city)}
                className={`p-8 rounded-[2rem] text-left transition-all duration-500 border-2 ${
                  activeBranch === city 
                  ? 'bg-blue-900 border-blue-900 text-white shadow-2xl scale-[1.02]' 
                  : 'bg-white border-slate-100 text-slate-600 hover:border-blue-200'
                }`}
              >
                <div className="flex justify-between items-center mb-4">
                  <MapPin size={24} className={activeBranch === city ? 'text-blue-400' : 'text-blue-600'} />
                  {activeBranch === city && <div className="w-2 h-2 rounded-full bg-green-400 animate-ping"></div>}
                </div>
                <h3 className="text-2xl font-black tracking-tight mb-2 uppercase">{city}</h3>
                <p className={`text-sm ${activeBranch === city ? 'text-blue-100' : 'text-slate-500'} font-medium`}>
                  {branches[city].address}
                </p>
              </button>
            ))}
          </div>

          {/* Map Display */}
          <div className="lg:col-span-8 h-[500px] lg:h-auto relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
            <iframe
              title="Branch Location"
              src={branches[activeBranch].map}
              className="absolute inset-0 w-full h-full"
              loading="lazy"
              style={{ filter: 'grayscale(0.2) contrast(1.1)' }}
            />
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg z-10 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-600"></div>
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-900">
                Current View: {branches[activeBranch].city}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;