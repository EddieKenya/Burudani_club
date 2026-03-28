import { Phone, Mail, MapPin, Send, MessageCircle, Globe, Award } from 'lucide-react';

const Contact = () => {
  const offices = [
    {
      country: "Kenya (Head Office)",
      phones: ["+254 705205903", "+254 753731136"],
      intl: ["+971 559954082", "+971 568242388"],
      location: "Magomano B.S complex, Tom Mboya street, Opp KTDA plaza, Nairobi.",
      email: "pascaltravels@gmail.com",
      color: "bg-blue-600"
    },
    {
      country: "Nigeria Branch",
      phones: ["Office Operational"],
      location: "Ogba, Lagos State, Floor 2, Room 15 (Office Complete)",
      email: "pascaltravelsnigeria@gmail.com",
      color: "bg-slate-800"
    },
    {
      country: "Ghana Branch",
      phones: ["Office Operational"],
      location: "Accra City Center, Branch Office",
      email: "pascaltravelsghana@gmail.com",
      color: "bg-slate-800"
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-[0.4em] uppercase mb-4 text-xs">Get in Touch</h2>
          <h1 className="text-4xl md:text-6xl font-black text-blue-900 tracking-tighter uppercase">
            Our Global <span className="text-blue-600 italic font-light">Network</span>
          </h1>
        </div>

        {/* Global Offices Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {offices.map((office, idx) => (
            <div key={idx} className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-200 hover:border-blue-500 transition-all group">
              <div className={`${office.color} w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}>
                <MapPin size={24} />
              </div>
              
              <h3 className="text-xl font-black text-blue-900 uppercase tracking-tight mb-4 flex items-center gap-2">
                {office.country} {idx === 0 && <Award size={16} className="text-blue-500" />}
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Address</p>
                  <p className="text-slate-600 font-bold text-sm leading-relaxed">{office.location}</p>
                </div>

                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Direct Lines</p>
                  {office.phones.map((p, i) => (
                    <p key={i} className="text-blue-600 font-black text-lg">{p}</p>
                  ))}
                  {office.intl && office.intl.map((p, i) => (
                    <p key={i} className="text-slate-400 font-bold text-xs mt-1">Intl: {p}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Unified Contact Form */}
        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          <div className="lg:col-span-2 bg-blue-900 rounded-[3rem] p-10 text-white shadow-2xl flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">Connect with us</h3>
              <p className="text-blue-100 mb-8 font-medium">Follow our journey and see successful visa testimonies on our social platforms.</p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl border border-white/10 hover:bg-white/20 transition-all">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center font-black">T</div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-blue-300">TikTok Handle</p>
                    <p className="font-bold text-sm">@pascal_travels_and_tours</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl border border-white/10 hover:bg-white/20 transition-all">
                  <Mail className="text-blue-300" />
                  <div>
                    <p className="text-[10px] uppercase font-bold text-blue-300">Official Email</p>
                    <p className="font-bold text-sm">pascaltravels@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2">Available 24/7</p>
              <p className="text-sm font-medium opacity-70">Our support team is ready to assist you in any time zone.</p>
            </div>
          </div>

          {/* Fixed Visibility Form */}
          <div className="lg:col-span-3 bg-white rounded-[3rem] p-10 shadow-2xl border border-slate-200 relative overflow-hidden">
            <h3 className="text-2xl font-black text-blue-900 mb-8 uppercase tracking-tight italic">Send a Quick Message</h3>
            
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. John Doe" 
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 focus:bg-white transition-all text-slate-900 placeholder:text-slate-400" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Phone Number</label>
                  <input 
                    type="text" 
                    placeholder="e.g. +254 7XX XXX XXX" 
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 focus:bg-white transition-all text-slate-900 placeholder:text-slate-400" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Requested Service</label>
                <select className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 transition-all text-slate-700 font-bold appearance-none cursor-pointer">
                  <option>Employment Offer</option>
                  <option>Ticketing</option>
                  <option>Study Visa</option>
                  <option>Canada pr</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Message</label>
                <textarea 
                  placeholder="Tell us about your travel plans..." 
                  rows="4" 
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 focus:bg-white transition-all text-slate-900 placeholder:text-slate-400"
                ></textarea>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-6 rounded-2xl transition-all flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-sm shadow-xl transform active:scale-95 group">
                Send Inquiry <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;