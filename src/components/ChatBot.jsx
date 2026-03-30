import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Globe, Phone, FileText, MapPin, MessageCircle } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const initialMessages = [
    { 
      role: 'bot', 
      text: "Greetings!\n\nWe’re excited to help you plan your next international journey ✈️\nHow can we assist you today?" 
    }
  ];
  
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    setMessages(initialMessages);
    setInput('');
  };

  const handleSend = (customText) => {
    const textToSend = customText || input;
    if (!textToSend.trim()) return;
    
    const userMessage = textToSend.toLowerCase();
    const newMessages = [...messages, { role: 'user', text: textToSend }];
    setMessages(newMessages);
    setInput('');

    let botResponse = "Thank you for your inquiry! For a faster response, you can also fill out our Contact Form below, and our team will get in touch with you shortly.";

    if (userMessage.includes("study") || userMessage.includes("university")) {
      botResponse = "We offer expert university placement and study visa assistance for Canada, the UK, Australia, and Europe. Our team handles everything from admission to visa stamping.";
    } 
    else if (userMessage.includes("work") || userMessage.includes("job")) {
      botResponse = "Pascal Travels specializes in Work Visas for the UK (Skilled Worker), Canada (LMIA), and Poland. We also offer job placement services in the Gulf and Europe.";
    }
    else if (userMessage.includes("canada") || userMessage.includes("pr")) {
      botResponse = "Canada PR is our specialty! We guide you through Express Entry and PNP programs. Visit our offices in Nairobi or Lagos for a free CRS score assessment.";
    }
    else if (userMessage.includes("schengen") || userMessage.includes("europe")) {
      botResponse = "Looking for a Schengen Visa? We assist with holiday, business, and transit visas for Germany, France, Poland, and more.";
    }
    else if (userMessage.includes("contact") || userMessage.includes("phone") || userMessage.includes("call")) {
      botResponse = "📞 Kenya: +254 705205903 / +254 753731136\n📞 Nigeria: +234 (Branch Office)\n📧 Email: pascaltravels@gmail.com";
    }
    else if (userMessage.includes("office") || userMessage.includes("where") || userMessage.includes("location")) {
      botResponse = "📍 Kenya: Magomano B.S Complex, Opp KTDA Plaza, Nairobi.\n📍 Nigeria: Ogba, Lagos State (Floor 2, Room 15).\n📍 Ghana: Accra City Center.";
    }
    else if (userMessage.includes("ticketing") || userMessage.includes("flight")) {
      botResponse = "We provide global ticketing and hotel reservations at competitive rates. Let us handle your itinerary!";
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    }, 800);
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[9999] font-sans">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center gap-3 group active:scale-95"
        >
          <MessageCircle size={28} />
          <span className="font-bold pr-2 hidden sm:inline">Talk to an Expert</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-[90vw] sm:w-[360px] h-[75vh] sm:h-[550px] rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.3)] border border-slate-200 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200 origin-bottom-right">
          
          {/* STICKY HEADER - This stays at the top forever */}
          <div className="shrink-0 bg-gradient-to-r from-blue-900 to-blue-800 p-5 text-white flex justify-between items-center z-10 shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white text-blue-900 rounded-full flex items-center justify-center font-black text-sm">P</div>
              <div>
                <h3 className="font-black uppercase tracking-widest text-[10px]">Pascal Assistant</h3>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <p className="text-[9px] text-blue-200 font-bold uppercase tracking-widest">Available</p>
                </div>
              </div>
            </div>
            <button 
              onClick={handleClose} 
              className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all active:scale-90"
              aria-label="Close Chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* MESSAGES AREA - Scrollable */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-slate-50 scroll-smooth">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm font-bold shadow-sm whitespace-pre-line leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Quick Action Suggestions */}
            {messages.length === 1 && (
              <div className="grid grid-cols-1 gap-2 mt-2">
                <button onClick={() => handleSend("Tell me about Study Visas")} className="flex items-center gap-3 p-3 bg-white border border-blue-100 rounded-xl text-[11px] font-bold text-blue-700 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                  <Globe size={14} /> Study Visa Programs
                </button>
                <button onClick={() => handleSend("I'm interested in Work Visas")} className="flex items-center gap-3 p-3 bg-white border border-blue-100 rounded-xl text-[11px] font-bold text-blue-700 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                  <FileText size={14} /> Work Visa Options
                </button>
                <button 
                  onClick={() => {
                    handleSend("Redirect me to the inquiry form");
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }} 
                  className="flex items-center gap-3 p-3 bg-blue-50 border border-blue-200 rounded-xl text-[11px] font-black text-blue-900 hover:bg-blue-100 transition-all shadow-sm"
                >
                  <Send size={14} /> Detailed Inquiry Form
                </button>
              </div>
            )}
          </div>

          {/* INPUT AREA - Sticky at bottom */}
          <div className="shrink-0 p-4 bg-white border-t border-slate-100 flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              className="flex-1 bg-slate-100 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600 text-sm text-slate-900 font-medium placeholder:text-slate-400"
            />
            <button 
              onClick={() => handleSend()}
              className="bg-blue-600 text-white p-3 rounded-2xl hover:bg-blue-700 transition-all shadow-md flex items-center justify-center active:scale-95"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;