import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Phone, Mail, MapPin, Send, 
  CheckCircle2, Loader2, Award, 
  Globe, ChevronDown 
} from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ sent: false, error: false });

  // Office Data Configuration
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

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Using your provided EmailJS credentials
    emailjs.sendForm(
      'service_8nuwimo', 
      'template_a3f7ehe', 
      form.current, 
      'VWeE9qBtDH47d6BLG'
    )
    .then(() => {
      setIsSubmitting(false);
      setStatus({ sent: true, error: false });
      form.current.reset();
      setTimeout(() => setStatus({ sent: false, error: false }), 7000);
    }, (error) => {
      setIsSubmitting(false);
      setStatus({ sent: false, error: true });
      console.error('EmailJS Error:', error);
    });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-[0.4em] uppercase mb-4 text-xs">Get In Touch</h2>
          <h1 className="text-4xl md:text-6xl font-black text-blue-900 tracking-tighter uppercase">
            Contact Our <span className="text-blue-600 italic font-light">Global Offices</span>
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
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-slate-600 font-bold text-sm leading-relaxed">{office.location}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Contact Lines</p>
                  {office.phones.map((p, i) => (
                    <p key={i} className="text-blue-600 font-black text-lg">{p}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          
          {/* Social & Info Sidebar */}
          <div className="lg:col-span-2 bg-blue-900 rounded-[3rem] p-10 text-white shadow-2xl flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">Connect With Us</h3>
              <p className="text-blue-100 mb-8 font-medium">Our support team is available across multiple timezones to assist your travel needs.</p>
              
              <div className="space-y-4">
                <a href="https://www.tiktok.com/@pascal_travels_and_tours" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl border border-white/10 hover:bg-white/20 transition-all">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center font-black text-white text-sm">T</div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-blue-300">TikTok</p>
                    <p className="font-bold text-sm">@pascal_travels_and_tours</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl border border-white/10 hover:bg-white/20 transition-all">
                  <Mail className="text-blue-300" size={20} />
                  <div>
                    <p className="text-[10px] uppercase font-bold text-blue-300">Email Support</p>
                    <p className="font-bold text-sm">pascaltravels@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2 text-blue-400 mb-2">
                <Globe size={16} />
                <p className="text-xs font-bold uppercase tracking-widest">Global Mobility Licensed</p>
              </div>
              <p className="text-sm font-medium opacity-70 italic">Your journey begins with a single trusted step.</p>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-3 bg-white rounded-[3rem] p-10 shadow-2xl border border-slate-200">
            <h3 className="text-2xl font-black text-blue-900 mb-8 uppercase tracking-tight">Send An Inquiry</h3>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Full Name</label>
                  <input name="user_name" type="text" required placeholder="e.g. John Doe" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-blue-600 focus:bg-white transition-all text-slate-900" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Phone Number</label>
                  <input name="user_phone" type="text" required placeholder="+254 XXX XXX XXX" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-blue-600 focus:bg-white transition-all text-slate-900" />
                </div>
              </div>

              {/* Subject Selection Area */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Requested Service</label>
                <div className="relative">
                  <select 
                    name="requested_service" 
                    required 
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-blue-600 focus:bg-white transition-all text-slate-900 font-bold appearance-none cursor-pointer"
                  >
                    <option value="" disabled selected>Select a Service</option>
                    <option value="Work Visa">Work Visa</option>
                    <option value="Study Visa">Study Visa</option>
                    <option value="Job Placements">Job Placements</option>
                    <option value="Canada PR">Permanent Residency (Canada PR)</option>
                    <option value="Schengen Visa">Schengen Visa</option>
                    <option value="Ticketing">Ticketing & Reservations</option>
                  </select>
                  <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Email Address</label>
                <input name="user_email" type="email" required placeholder="name@email.com" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-blue-600 focus:bg-white transition-all text-slate-900" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Message</label>
                <textarea name="message" required placeholder="How can we assist you today?" rows="4" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-blue-600 focus:bg-white transition-all text-slate-900"></textarea>
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-6 rounded-2xl transition-all flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-sm shadow-xl disabled:opacity-50">
                {isSubmitting ? <>Processing... <Loader2 className="animate-spin" size={20} /></> : <>Send Inquiry <Send size={20} /></>}
              </button>

              {status.sent && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-2xl flex items-center gap-3 text-green-700 font-bold animate-in fade-in">
                  <CheckCircle2 size={20} />
                  Message received! We have sent a confirmation to your email.
                </div>
              )}
              {status.error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-2xl flex items-center gap-3 text-red-700 font-bold">
                  Something went wrong. Please try again or call us directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;