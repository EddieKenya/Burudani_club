import { GraduationCap, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

const Education = () => {
  const universityPartners = [
    {
      id: 1,
      title: "University of Cambridge",
      location: "Cambridge, United Kingdom",
      poster: "/cambridge.jpg",
      color: "border-blue-800",
      tag: "Ivy League Equivalent"
    },
    {
      id: 2,
      title: "Imperial College London",
      location: "London, United Kingdom",
      poster: "/imperial.jpg",
      color: "border-blue-600",
      tag: "Global Top 10"
    },
    {
      id: 3,
      title: "University of Manchester",
      location: "Manchester, United Kingdom",
      poster: "/manchester uni.jpg",
      color: "border-purple-700",
      tag: "Research Leader"
    }
  ];

  return (
    <section id="education" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-slate-900 text-4xl font-black mb-4 flex items-center gap-4">
            STUDY <span className="text-blue-600 uppercase">ABROAD</span>
            <div className="h-1 flex-grow bg-slate-100"></div>
          </h2>
          <p className="text-slate-500 font-medium max-w-2xl">
            We partner with world-class institutions to ensure our clients secure 
            placements in top-tier universities across the UK and Europe.
          </p>
        </div>

        {/* University Grid - No Buttons */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {universityPartners.map((uni) => (
            <div 
              key={uni.id}
              className={`relative h-[400px] md:h-[500px] overflow-hidden group border-t-8 ${uni.color} rounded-2xl bg-slate-900 shadow-lg transition-all duration-500 select-none`}
              style={{ WebkitTouchCallout: 'none' }} 
            >
              <img 
                src={uni.poster} 
                alt={uni.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 pointer-events-none opacity-60 group-hover:opacity-80"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent z-10" />

              <div className="relative z-20 p-8 h-full flex flex-col justify-end">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded-full font-bold uppercase tracking-widest text-[9px] border border-white/20">
                    {uni.tag}
                  </span>
                  <GraduationCap className="text-white opacity-80" size={24} />
                </div>

                <h3 className="text-white text-3xl font-black mb-2 transition-colors tracking-tighter">
                  {uni.title}
                </h3>

                <p className="text-blue-100 text-sm font-semibold flex items-center gap-2">
                  <MapPin size={14} /> {uni.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Agency Support Section & Final CTA */}
        <div className="bg-slate-50 rounded-[2.5rem] p-10 md:p-16 border border-slate-100 relative overflow-hidden">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-blue-900 text-3xl font-black mb-6 uppercase tracking-tight">
                How Pascal Travels Secures Your Future
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Securing a study visa is more than just an application; it's a life-changing transition. 
                Our team at Pascal Travels & Tours provides end-to-end support—from selecting the right 
                course and university to meticulously preparing your visa documentation. We ensure 
                all requirements for the US, Canada, Australia and Europe are met with 100% precision, 
                minimizing risks and maximizing your chances of success.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                  <CheckCircle size={18} className="text-blue-600" /> Admission Guidance
                </div>
                <div className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                  <CheckCircle size={18} className="text-blue-600" /> Document Verification
                </div>
                <div className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                  <CheckCircle size={18} className="text-blue-600" /> Visa Interview Prep
                </div>
                <div className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                  <CheckCircle size={18} className="text-blue-600" /> Post-Arrival Support
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <a href="#contact" className="w-full md:w-auto">
                <button className="w-full md:w-auto bg-blue-600 text-white px-12 py-6 rounded-2xl font-black text-lg hover:bg-blue-900 transition-all transform hover:scale-105 shadow-2xl shadow-blue-200 flex items-center justify-center gap-4">
                  START YOUR APPLICATION <ArrowRight size={24} />
                </button>
              </a>
            </div>
          </div>
          
          {/* Subtle Background Accent */}
          <div className="absolute -right-20 -top-20 text-blue-100 opacity-20">
            <GraduationCap size={300} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;