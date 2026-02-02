import { MessageSquare, Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 px-6 bg-obsidian border-t border-white/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        
        {/* Left Side: Feedback & Inquiries Info */}
        <div>
          <h2 className="text-white text-4xl font-black mb-6 italic">GET IN <span className="text-gold">TOUCH</span></h2>
          <p className="text-gray-400 mb-10 leading-relaxed">
            Your experience is our priority. Whether you have an inquiry about our services, 
            a suggestion to improve our vibes, or a complaint that needs our attention, 
            we are here to listen.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-violet/10 rounded-full flex items-center justify-center text-violet">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-white font-bold">Visit Us</p>
                <p className="text-gray-500 text-sm">Thika Super Highway, Next to Juja Mall</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-white font-bold">Direct Line</p>
                <p className="text-gray-500 text-sm">0729 037964</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-violet/10 rounded-full flex items-center justify-center text-violet">
                <MessageSquare size={24} />
              </div>
              <div>
                <p className="text-white font-bold">Support Hours</p>
                <p className="text-gray-500 text-sm">24/7 Response for Urgent Issues</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Feedback/Inquiry Form */}
        <div className="bg-white/5 p-8 border border-white/10 rounded-2xl">
          <h3 className="text-white text-xl font-bold mb-6 italic uppercase tracking-tighter">Inquiries & Suggestions</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full bg-black border border-white/10 p-3 rounded-lg focus:border-violet outline-none transition-colors text-white" 
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-black border border-white/10 p-3 rounded-lg focus:border-violet outline-none transition-colors text-white" 
            />
            <select className="w-full bg-black border border-white/10 p-3 rounded-lg focus:border-violet outline-none transition-colors text-white appearance-none cursor-pointer">
              <option value="inquiry">General Inquiry</option>
              <option value="suggestion">Suggestion</option>
              <option value="complaint">Complaint</option>
              <option value="lost-found">Lost & Found</option>
            </select>
            <textarea 
              placeholder="Describe your inquiry, suggestion or complaint in detail..." 
              rows="4" 
              className="w-full bg-black border border-white/10 p-3 rounded-lg focus:border-violet outline-none transition-colors text-white"
            ></textarea>
            <button className="w-full bg-gold text-obsidian font-black py-3 rounded-lg hover:bg-white transition-colors uppercase tracking-widest active:scale-95">
              Submit Feedback
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;