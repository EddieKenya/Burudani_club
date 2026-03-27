import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  // Official contact data sourced from company materials
  const contactInfo = {
    phones: ["+971559954082", "+971568242388"],
    location: "Nairobi CBD, Tom Mboya Street, Magomano House Rm 4.4",
    tiktok: "@pascal_travels_and_tours",
    email: "pascaltravelsdoc@gmail.com"
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left Side: Contact Information */}
          <div className="space-y-12">
            <div>
              <h2 className="text-blue-900 text-4xl font-black mb-4 uppercase tracking-tight">
                Get In <span className="text-blue-600 italic">Touch</span>
              </h2>
              <p className="text-slate-500 font-medium">
                Our mission is to provide exceptional travel experiences. Reach out to our 
                Nairobi office to begin your visa application or job placement journey.
              </p>
            </div>

            <div className="space-y-8">
              {/* Phone Numbers */}
              <div className="flex items-start gap-6 group">
                <div className="bg-blue-50 p-4 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-black text-blue-900 uppercase text-xs tracking-widest mb-1">Call or WhatsApp</h4>
                  {contactInfo.phones.map((num, i) => (
                    <p key={i} className="text-slate-600 font-bold text-lg">{num}</p>
                  ))}
                </div>
              </div>

              {/* Office Location */}
              <div className="flex items-start gap-6 group">
                <div className="bg-blue-50 p-4 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-black text-blue-900 uppercase text-xs tracking-widest mb-1">Office Location</h4>
                  <p className="text-slate-600 font-bold leading-relaxed">
                    {contactInfo.location}
                  </p>
                </div>
              </div>

              {/* Email Address */}
              <div className="flex items-start gap-6 group">
                <div className="bg-blue-50 p-4 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-black text-blue-900 uppercase text-xs tracking-widest mb-1">Email Us</h4>
                  <p className="text-slate-600 font-bold">{contactInfo.email}</p>
                </div>
              </div>
            </div>

            {/* TikTok / Social Handle */}
            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 inline-flex items-center gap-4">
               <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white">
                 <span className="font-black text-xs uppercase">t</span>
               </div>
               <div>
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Follow us on TikTok</p>
                 <p className="text-blue-900 font-black">{contactInfo.tiktok}</p>
               </div>
            </div>
          </div>

          {/* Right Side: Quick Contact Form */}
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-white text-2xl font-black mb-8 uppercase tracking-tight">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-6 py-4 text-white focus:border-blue-500 outline-none transition-all placeholder:text-slate-500"
                  />
                  <input 
                    type="text" 
                    placeholder="Phone Number" 
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-6 py-4 text-white focus:border-blue-500 outline-none transition-all placeholder:text-slate-500"
                  />
                </div>

                {/* VISIBLE DROPDOWN MENU */}
                <div className="relative">
                  <select 
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-6 py-4 text-white focus:border-blue-500 outline-none transition-all appearance-none cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled className="bg-slate-900 text-slate-400">Select Service</option>
                    <option value="work" className="bg-slate-900 text-white">Work Visa</option>
                    <option value="study" className="bg-slate-900 text-white">Study Visa</option>
                    <option value="jobs" className="bg-slate-900 text-white">Job Placements</option>
                    <option value="schengen" className="bg-slate-900 text-white">Schengen Visa</option>
                    <option value="canada" className="bg-slate-900 text-white">Canada PR</option>
                  </select>
                  {/* Custom Arrow for Visibility */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                  </div>
                </div>

                <textarea 
                  placeholder="How can we help you?" 
                  rows="4"
                  className="w-full bg-white/5 border border-white/20 rounded-xl px-6 py-4 text-white focus:border-blue-500 outline-none transition-all placeholder:text-slate-500"
                ></textarea>

                <button className="w-full bg-blue-600 hover:bg-white hover:text-blue-900 text-white font-black py-5 rounded-xl transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-sm shadow-xl">
                  Send Inquiry <Send size={18} />
                </button>
              </form>
            </div>

            {/* Background Decoration */}
            <div className="absolute -bottom-10 -right-10 text-white/5 pointer-events-none">
              <MessageCircle size={200} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;