import { Briefcase, CheckCircle, HardHat, Globe, ArrowRight } from 'lucide-react';

const Work = () => {
  const workDestinations = [
    {
      id: 1,
      title: "Germany & Poland",
      subtitle: "Industrial & Skilled Labor",
      desc: "Access the robust European job market. We specialize in securing work permits for Germany and Poland, focusing on manufacturing, logistics, and technical roles.",
      image: "/germany.jpg", // or /poland.jpg
      points: ["Tier-1 Work Permits", "Language Support", "Long-term Residency Path"]
    },
    {
      id: 2,
      title: "Construction & Skilled Trades",
      subtitle: "Gulf & European Opportunities",
      desc: "The construction sector in the UAE and Europe is booming. Pascal Travels connects skilled tradespeople—from engineers to site workers—with verified employers.",
      image: "/construction.webp",
      points: ["Verified Contracts", "Accommodation Support", "Medical Insurance Included"]
    }
  ];

  return (
    <section id="work" className="py-24 px-6 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-white text-4xl font-black mb-4 flex items-center justify-center md:justify-start gap-4">
            GLOBAL <span className="text-blue-400 uppercase font-light">CAREERS</span>
            <div className="hidden md:block h-1 flex-grow bg-white/10"></div>
          </h2>
          <p className="text-slate-400 font-medium max-w-2xl">
            Pascal Travels & Tours bridge the gap between skilled African professionals 
            and international employers in Europe and the Middle East.
          </p>
        </div>

        {/* Alternating Feature Layout */}
        <div className="space-y-32">
          {workDestinations.map((work, index) => (
            <div 
              key={work.id} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Image Side with Decorative Frame */}
              <div className="w-full lg:w-1/2 relative">
                <div className={`absolute -inset-4 border-2 ${index % 2 === 0 ? 'border-blue-500/30' : 'border-emerald-500/30'} rounded-2xl -rotate-2 z-0`}></div>
                <div className="relative h-[300px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl z-10">
                  <img 
                    src={work.image} 
                    alt={work.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-500/10 rounded-xl">
                    {work.title.includes("Construction") ? <HardHat className="text-blue-400" /> : <Briefcase className="text-blue-400" />}
                  </div>
                  <span className="text-blue-400 font-black uppercase tracking-widest text-sm">{work.subtitle}</span>
                </div>
                
                <h3 className="text-white text-4xl md:text-5xl font-black tracking-tighter">
                  {work.title}
                </h3>
                
                <p className="text-slate-400 text-lg leading-relaxed">
                  {work.desc}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {work.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-200 font-bold text-sm">
                      <CheckCircle size={18} className="text-blue-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA Bar */}
        <div className="mt-32 p-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl">
          <div className="bg-slate-900 rounded-[1.4rem] p-10 md:p-16 text-center">
            <h3 className="text-white text-3xl font-black mb-6 uppercase">Ready to Start Your International Career?</h3>
            <p className="text-slate-400 max-w-2xl mx-auto mb-10">
              Our agency handles the heavy lifting—from contract verification and visa processing to flight bookings. 
              Let us help you secure a job in the Czech Republic, Germany, Serbia, or the UAE today.
            </p>
            <a href="#contact">
              <button className="bg-blue-600 hover:bg-white hover:text-blue-900 text-white px-12 py-5 rounded-xl font-black text-lg transition-all transform hover:scale-105 shadow-xl flex items-center gap-4 mx-auto">
                ENQUIRE ABOUT JOBS <ArrowRight size={24} />
              </button>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Work;