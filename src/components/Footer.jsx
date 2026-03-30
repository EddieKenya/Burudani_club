import { Instagram, Facebook, Music2, Globe, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: 'Instagram', 
      icon: <Instagram size={20} />, 
      url: '#' 
    },
    { 
      name: 'Facebook', 
      icon: <Facebook size={20} />, 
      url: '#' 
    },
    { 
      name: 'TikTok', 
      icon: <Music2 size={20} />, 
      url: 'https://www.tiktok.com/@pascal_travels_and_tours' 
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-10 px-6 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          
          {/* Brand & Mission Section */}
          <div className="space-y-6 col-span-1 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Globe size={24} className="text-white" />
              </div>
              <h2 className="text-xl font-black tracking-tighter uppercase">
                PASCAL TRAVELS<span className="text-blue-500">.</span>
              </h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Providing exceptional travel experiences that exceed expectations. 
              Specializing in global mobility, job placements, and visa consultancy.
            </p>
            
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-xl border border-white/10 text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Updated Quick Navigation based on image_7bafde.png */}
          <div className="grid grid-cols-2 gap-8 col-span-1 md:col-span-1">
            <div className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-blue-500">Services</h4>
              <ul className="space-y-2 text-sm text-slate-400 font-medium">
                <li><a href="#work" className="hover:text-white transition-colors">Work Visas</a></li>
                <li><a href="#education" className="hover:text-white transition-colors">Study Abroad</a></li>
                <li><a href="#destinations" className="hover:text-white transition-colors">Job Placements</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Schengen Visa</a></li>
                <li><a href="#booking" className="hover:text-white transition-colors">Hotel & Airport Pickup</a></li>
                <li><a href="#success" className="hover:text-white transition-colors">Ticketing</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-blue-500">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400 font-medium">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Location</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Back to Top / Nairobi Office Info */}
          <div className="flex flex-col items-start md:items-end justify-between space-y-8">
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors"
            >
              Back to Top <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </button>
            <div className="text-left md:text-right">
              <p className="text-xs font-black text-white uppercase tracking-widest mb-1">Nairobi Office</p>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                Tom Mboya Street, Magomano House<br />
                Room 4.4, Nairobi, Kenya
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">
          <p>© {currentYear} PASCAL TRAVELS & TOURS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;