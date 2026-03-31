import { Menu, X, Plane, Briefcase, GraduationCap, Phone, MapPin, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timeout;
    const handleActivity = () => {
      setIsVisible(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (!isOpen) setIsVisible(false);
      }, 3000);
    };

    window.addEventListener('scroll', handleActivity);
    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('touchstart', handleActivity);

    return () => {
      window.removeEventListener('scroll', handleActivity);
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('touchstart', handleActivity);
      clearTimeout(timeout);
    };
  }, [isOpen]);

  // Links aligned with updated App.jsx IDs
  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Visit Visas', href: '#visit-visa', icon: <Globe size={14} /> },
    { name: 'Work Visas', href: '#walkthrough', icon: <Briefcase size={14} /> },
    { name: 'Study Visas', href: '#events', icon: <GraduationCap size={14} /> },
    { name: 'Destinations', href: '#booking', icon: <MapPin size={14} /> },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 top-0 transition-all duration-700 ease-in-out select-none ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      } bg-white/95 backdrop-blur-md border-b border-blue-100`}
    >
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-4 h-full">
          {/* Unclickable Logo Image */}
          <img 
            src="/logo.png" 
            alt="Pascal Travels Logo" 
            className="h-10 w-auto object-contain pointer-events-none select-none" 
          />
          
          <a href="#hero" className="block group flex items-center gap-3">
            <div className="flex flex-col">
              <span className="font-black text-blue-900 tracking-tighter text-xl leading-none">
                PASCAL
              </span>
              <span className="text-[9px] font-bold text-blue-600 tracking-[0.2em] uppercase">
                Travels & Tours
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-6 xl:gap-8 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-700 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-blue-600 transition-colors duration-300 flex items-center gap-2 group relative whitespace-nowrap"
            >
              {link.icon && <span className="text-blue-400 group-hover:text-blue-600 transition-colors">{link.icon}</span>}
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          
          <div className="h-6 w-[1px] bg-slate-200 mx-1"></div>

          {/* Instant Call Link */}
          <a href="tel:+254705205903" className="hover:text-blue-600 transition-colors flex items-center gap-2 text-blue-900 whitespace-nowrap">
            <Phone size={14} />
            <span className="hidden xl:inline">CALL US</span>
          </a>

          {/* Apply Now Button leading to Contact Section */}
          <a href="#contact">
            <button className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-black hover:bg-blue-700 transition-all active:scale-95 shadow-md shadow-blue-100 flex items-center gap-2 text-[9px] whitespace-nowrap">
              <Plane size={14} className="rotate-45" /> APPLY NOW
            </button>
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <div className="lg:hidden">
          <button 
            className="text-blue-900 p-2 rounded-lg bg-blue-50/50" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* REFINED MOBILE MENU */}
      <div className={`
        lg:hidden absolute top-20 left-0 w-full bg-white border-b border-blue-100 shadow-xl transition-all duration-300 ease-in-out
        ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'}
      `}>
        <div className="p-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)} 
              className="flex items-center gap-4 py-4 px-4 rounded-xl hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition-all text-xs font-black uppercase tracking-widest"
            >
              <span className="text-blue-500">{link.icon}</span>
              {link.name}
            </a>
          ))}
          
          {/* Mobile Instant Call Action */}
          <a href="tel:+254705205903" className="flex items-center gap-4 py-4 px-4 rounded-xl hover:bg-blue-50 text-blue-900 transition-all text-xs font-black uppercase tracking-widest">
            <Phone size={14} className="text-blue-500" />
            Call Now
          </a>
          
          <div className="mt-4 pt-4 border-t border-slate-100">
            <a href="#contact" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-black text-[10px] tracking-[0.2em] flex items-center justify-center gap-2 shadow-lg shadow-blue-200">
                START APPLICATION <Plane size={14} className="rotate-45" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;