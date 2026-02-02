import { Instagram, Facebook, Music2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: 'Instagram', 
      icon: <Instagram size={24} />, 
      url: 'https://www.instagram.com/burudani_address/?hl=en' 
    },
    { 
      name: 'Facebook', 
      icon: <Facebook size={24} />, 
      url: 'https://www.facebook.com/burudaniAddress/about/' 
    },
    { 
      name: 'TikTok', 
      icon: <Music2 size={24} />, 
      url: 'https://www.tiktok.com/@burudani_addres' 
    },
  ];

  return (
    <footer className="bg-obsidian border-t border-white/10 pt-16 pb-8 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 items-center text-center md:text-left">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-black tracking-tighter italic">
              BURUDANI<span className="text-gold">.</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-xs mx-auto md:mx-0">
              The ultimate evolution of Juja nightlife. Experience premium sound and unmatched vibes.
            </p>
          </div>

          {/* Socials Section */}
          <div className="flex justify-center md:justify-end gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 rounded-full border border-white/10 text-gray-400 hover:text-gold hover:border-gold hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-300"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium uppercase tracking-widest">
          <p>© {currentYear} BURUDANI ADDRESS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;