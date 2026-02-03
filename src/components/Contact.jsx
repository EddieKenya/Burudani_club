import { useState } from 'react';
import { MessageSquare, Phone, MapPin } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    category: 'inquiry',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle', 'sending', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status !== 'idle') setStatus('idle');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Credentials using your provided IDs from the images
    const serviceID = 'service_pwno6ic';
    const templateID = 'template_ooxbefi'; // From image_c44d8b.png
    const publicKey = 'Uk_lQ5Lurdw03WQGg';

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then(() => {
        setStatus('success');
        
        // Reset after 3 seconds - replaces the pop-up in image_c3cea1.png
        setTimeout(() => {
          setStatus('idle');
          setFormData({ user_name: '', user_email: '', category: 'inquiry', message: '' });
        }, 3000);
      })
      .catch((err) => {
        console.error('EmailJS Error:', err);
        setStatus('error');
      });
  };

  return (
    <section className="py-24 px-6 bg-obsidian border-t border-white/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <div className="animate-fadeIn">
          <h2 className="text-white text-4xl font-black mb-6 italic">GET IN <span className="text-gold">TOUCH</span></h2>
          <p className="text-gray-400 mb-10 leading-relaxed">
            Your experience is our priority. Whether you have an inquiry, 
            a suggestion, or a complaint, we are here to listen.
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
          </div>
        </div>

        {/* Feedback Form */}
        <div className="bg-white/5 p-8 border border-white/10 rounded-2xl shadow-xl">
          <h3 className="text-white text-xl font-bold mb-6 italic uppercase tracking-tighter">Inquiries & Suggestions</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input 
              type="text" name="user_name" required
              placeholder="Your Name" 
              value={formData.user_name} onChange={handleChange}
              className="w-full bg-black border border-white/10 p-3 rounded-lg focus:border-violet outline-none transition-all text-white" 
            />
            <input 
              type="email" name="user_email" required
              placeholder="Email Address" 
              value={formData.user_email} onChange={handleChange}
              className="w-full bg-black border border-white/10 p-3 rounded-lg focus:border-violet outline-none transition-all text-white" 
            />
            <select 
              name="category"
              value={formData.category} onChange={handleChange}
              className="w-full bg-black border border-white/10 p-3 rounded-lg focus:border-violet outline-none transition-all text-white cursor-pointer"
            >
              <option value="inquiry">General Inquiry</option>
              <option value="suggestion">Suggestion</option>
              <option value="complaint">Complaint</option>
              <option value="lost-found">Lost & Found</option>
            </select>
            <textarea 
              name="message" required
              placeholder="Describe your inquiry in detail..." 
              value={formData.message} onChange={handleChange}
              rows="4" 
              className="w-full bg-black border border-white/10 p-3 rounded-lg focus:border-violet outline-none transition-all text-white"
            ></textarea>
            
            <button 
              type="submit"
              disabled={status === 'sending' || status === 'success'}
              className={`w-full font-black py-4 rounded-lg uppercase tracking-widest transition-all duration-500 transform active:scale-95 ${
                status === 'success' ? 'bg-green-600 text-white' : 'bg-gold text-obsidian hover:bg-white'
              } disabled:opacity-80 disabled:cursor-not-allowed`}
            >
              <span className={`transition-opacity duration-300 ${status === 'success' ? 'opacity-100' : 'opacity-100'}`}>
                {status === 'sending' ? 'Sending...' : status === 'success' ? '✓ Submitted!' : 'Submit Feedback'}
              </span>
            </button>
            
            {status === 'error' && (
              <p className="text-red-500 text-xs text-center mt-2 animate-pulse font-bold">
                Submission failed. Please try again.
              </p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;