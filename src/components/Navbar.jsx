import { Menu, X, Martini } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 bg-obsidian/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Martini className="text-violet w-8 h-8" />
          <span className="text-2xl font-black tracking-tighter text-white">
            BURUDANI<span className="text-gold">.</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
          <a href="#" className="hover:text-violet transition-colors">The Experience</a>
          <a href="#" className="hover:text-violet transition-colors">Events</a>
          <a href="#" className="hover:text-violet transition-colors">Menu</a>
          <button className="bg-gold text-obsidian px-5 py-2 rounded-full font-bold hover:bg-white transition-all">
            Book Table
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-obsidian border-b border-white/10 p-6 flex flex-col gap-4 text-center uppercase tracking-widest">
          <a href="#" className="text-white">Experience</a>
          <a href="#" className="text-white">Events</a>
          <a href="#" className="text-white">Menu</a>
          <button className="bg-violet text-white py-3 rounded-lg font-bold">Book Now</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;