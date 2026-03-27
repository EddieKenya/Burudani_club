import { Menu, X, Plane, Briefcase, GraduationCap, Phone, MapPin } from 'lucide-react';
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

  // Links aligned with App.jsx IDs
  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Study Visas', href: '#events', icon: <GraduationCap size={14} /> },
    { name: 'Work Visas', href: '#walkthrough', icon: <Briefcase size={14} /> },
    { name: 'Destinations', href: '#booking', icon: <MapPin size={14} /> },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 top-0 transition-all duration-700 ease-in-out select-none ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      } bg-white/95 backdrop-blur-md border-b border-blue-100`}
      style={{ WebkitTouchCallout: 'none' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center h-full py-4">
          <a href="#hero" className="h-full block group flex items-center gap-3">
            <div className="flex flex-col">
              <span className="font-black text-blue-900 tracking-tighter text-2xl leading-none">
                PASCAL
              </span>
              <span className="text-[10px] font-bold text-blue-600 tracking-[0.3em] uppercase">
                Travels & Tours
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-8 xl:gap-10 text-[11px] font-bold uppercase tracking-[0.15em] text-slate-700 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-blue-600 transition-colors duration-300 whitespace-nowrap flex items-center gap-2 group relative"
            >
              {link.icon && <span className="text-blue-400 group-hover:text-blue-600 transition-colors">{link.icon}</span>}
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          
          <div className="h-6 w-[1px] bg-slate-200 mx-2"></div>

          <a href="tel:+2547155995408" className="hover:text-blue-600 transition-colors flex items-center gap-2 text-blue-900">
            <Phone size={16} />
            <span className="hidden xl:inline">CALL US</span>
          </a>

          <a href="#contact">
            <button className="bg-blue-600 text-white px-7 py-3 rounded-lg font-black hover:bg-blue-700 transition-all active:scale-95 shadow-md shadow-blue-100 flex items-center gap-2">
              <Plane size={16} className="rotate-45" /> APPLY NOW
            </button>
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <button className="text-blue-900 p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 p-10 flex flex-col gap-8 text-center uppercase tracking-[0.2em] text-slate-800 font-bold">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)} 
              className="hover:text-blue-600 text-sm"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsOpen(false)} className="pt-4 border-t border-slate-100">
            <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-black text-xs tracking-widest flex items-center justify-center gap-2">
              START APPLICATION <Plane size={16} className="rotate-45" />
            </button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;