import { Menu, X } from 'lucide-react';
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
        if (!isOpen) {
          setIsVisible(false);
        }
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

  const navLinks = [
    { name: 'The Experience', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Experience', href: '#walkthrough' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 top-0 bg-obsidian/95 backdrop-blur-md border-b border-white/10 transition-all duration-700 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center h-full py-2">
          <a href="#hero" className="h-full block group relative">
            <img 
              src="/burudani-log.png" 
              alt="Burudani Address" 
              className="h-full w-auto object-contain transition-all duration-500 group-hover:scale-105 brightness-110 contrast-125 mix-blend-lighten"
              style={{
                filter: 'drop-shadow(0 0 12px rgba(212, 175, 55, 0.2))'
              }}
            />
          </a>
        </div>

        {/* Desktop Links - Updated with your specific order */}
        <div className="hidden lg:flex gap-6 xl:gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-white items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-gold transition-colors duration-300 whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
          <a href="#booking">
            <button className="bg-gold text-obsidian px-6 py-2.5 rounded-full font-black hover:bg-white transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-gold/40 active:scale-95 whitespace-nowrap">
              BOOK A TABLE
            </button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-obsidian/98 border-b border-white/10 p-8 flex flex-col gap-6 text-center uppercase tracking-[0.2em] text-white font-bold animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)} 
              className="hover:text-gold"
            >
              {link.name}
            </a>
          ))}
          <a href="#booking" onClick={() => setIsOpen(false)}>
            <button className="w-full bg-gold text-obsidian py-4 rounded-xl font-black text-sm">
              BOOK A TABLE
            </button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;