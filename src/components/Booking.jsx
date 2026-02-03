import { useState } from 'react';
import { Calendar, Users, GlassWater, Phone } from 'lucide-react';
import emailjs from 'emailjs-com';

const Booking = () => {
  const today = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: today,
    guests: '2',
    tier: 'Standard'
  });

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState('idle'); // 'idle', 'sending', 'success', 'error'

  const tiers = [
    { name: 'Standard', price: 'Free Entry', desc: 'Main floor seating' },
    { name: 'VIP Shield', price: 'Ksh 5,000', desc: 'Elevated view & server' },
    { name: 'VVIP Lounge', price: 'Ksh 15,000', desc: 'Private booth & bottle service' }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status !== 'idle') setStatus('idle'); // Clear error state when typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 10-digit validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      setStatus('error');
      return;
    }

    setIsSending(true);
    setStatus('sending');

    const serviceID = 'service_pwno6ic';
    const templateID = 'template_gqe5ywo';
    const publicKey = 'Uk_lQ5Lurdw03WQGg';

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then(() => {
        setStatus('success');
        setIsSending(false);
        
        // Reset form and UI state back to normal after 3 seconds
        setTimeout(() => {
          setStatus('idle');
          setFormData({ 
            name: '', 
            phone: '', 
            date: today, 
            guests: '2', 
            tier: 'Standard' 
          });
        }, 3000);
      })
      .catch((err) => {
        console.error(err);
        setStatus('error');
        setIsSending(false);
      });
  };

  return (
    <section id="booking" className="py-24 bg-obsidian text-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gold font-bold tracking-[0.3em] uppercase mb-4">Reservations</h2>
          <h1 className="text-4xl md:text-6xl font-black italic">SECURE YOUR <span className="text-violet">SPOT</span></h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <GlassWater className="text-gold" /> Experience Tiers
              </h3>
              <div className="space-y-4">
                {tiers.map((tier) => (
                  <div 
                    key={tier.name}
                    onClick={() => setFormData({...formData, tier: tier.name})}
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${
                      formData.tier === tier.name ? 'border-gold bg-gold/10' : 'border-white/5 bg-white/5'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-lg">{tier.name}</span>
                      <span className="text-gold font-black">{tier.price}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{tier.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 shadow-2xl shadow-violet/10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">Full Name</label>
                <input 
                  type="text" name="name" required
                  placeholder="John Doe"
                  value={formData.name} onChange={handleChange}
                  className="w-full bg-obsidian border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-violet transition-colors text-white"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">
                  Phone Number {status === 'error' && <span className="text-red-500 lowercase font-normal ml-2">(Must be 10 digits)</span>}
                </label>
                <div className="relative">
                  <Phone className={`absolute left-3 top-3.5 size-4 ${status === 'error' ? 'text-red-500' : 'text-gold'}`} />
                  <input 
                    type="tel" name="phone" required
                    placeholder="07..."
                    value={formData.phone} onChange={handleChange}
                    className={`w-full bg-obsidian border rounded-lg pl-10 pr-4 py-3 focus:outline-none transition-colors text-white ${status === 'error' ? 'border-red-500' : 'border-white/10 focus:border-violet'}`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3.5 size-4 text-gold" />
                    <input 
                      type="date" name="date" required
                      min={today}
                      value={formData.date} onChange={handleChange}
                      className="w-full bg-obsidian border border-white/10 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-violet text-white appearance-none" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">Guests</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3.5 size-4 text-gold" />
                    <select 
                      name="guests" 
                      value={formData.guests} onChange={handleChange}
                      className="w-full bg-obsidian border border-white/10 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-violet text-white appearance-none"
                    >
                      {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} People</option>)}
                    </select>
                  </div>
                </div>
              </div>

              <button 
                type="submit"
                disabled={isSending || status === 'success'}
                className={`w-full py-5 rounded-xl font-black text-lg transition-all duration-300 shadow-lg uppercase tracking-tighter disabled:cursor-not-allowed ${
                  status === 'success' ? 'bg-green-600 text-white shadow-green-900/20' : 'bg-violet hover:bg-white hover:text-obsidian text-white shadow-violet/20'
                }`}
              >
                {status === 'sending' ? 'Sending Request...' : status === 'success' ? 'Submitted Successfully!' : 'Request Table Reservation'}
              </button>
              
              <p className="text-center text-gray-500 text-xs mt-4">
                * Confirmation will be sent via SMS within 30 minutes.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;