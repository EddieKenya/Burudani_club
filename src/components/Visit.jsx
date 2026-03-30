import React from 'react';
import { Plane, Building2, Car, Ticket, ShieldCheck, Globe2, ChevronRight, Star, Landmark } from 'lucide-react';

const VisitVisa = () => {
  return (
    <section id="visit-visa" className="py-24 px-6 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* BOLD TITLE SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[2px] w-12 bg-blue-600"></span>
              <span className="text-blue-600 font-black text-xs uppercase tracking-[0.3em]">Premium Mobility & PR</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none">
              VISIT <span className="text-blue-600">VISA.</span>
            </h2>
            <p className="mt-6 text-slate-600 font-medium text-lg leading-relaxed">
              Pascal Travels & Tours doesn't just process papers; we architect your entire journey. 
              From the moment you dream of a destination to the second you land, we handle the 
              complexities of global entry and logistics.
            </p>
          </div>
          <div className="hidden lg:block pb-2">
            <div className="bg-white p-6 rounded-3xl shadow-xl shadow-blue-100 border border-blue-50 flex items-center gap-4">
              <div className="bg-blue-600 p-3 rounded-2xl text-white">
                <ShieldCheck size={30} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Success Rate</p>
                <p className="text-2xl font-black text-slate-900">100%</p>
              </div>
            </div>
          </div>
        </div>

        {/* CANADA PERMANENT RESIDENCY (PR) SECTION */}
        <div className="mb-16 relative group">
          <div className="absolute inset-0 bg-blue-600 rounded-[3.5rem] rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
          <div className="relative bg-white border border-slate-100 rounded-[3.5rem] p-8 md:p-16 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full text-red-600 font-black text-[10px] tracking-widest uppercase mb-6">
                  <Landmark size={14} /> Immigration Pathway
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter">
                  Canada Permanent <br/><span className="text-blue-600">Residency (PR)</span>
                </h3>
                <p className="text-slate-600 font-medium mb-8 leading-relaxed">
                  We facilitate the complete journey to becoming a Canadian Permanent Resident. 
                  Our experts specialize in **Express Entry** and **Provincial Nominee Programs (PNP)**, 
                  ensuring your profile stands out in the pool.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                  <div className="flex gap-4">
                    <div className="h-10 w-10 shrink-0 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold">01</div>
                    <div>
                      <h4 className="font-black text-xs uppercase tracking-wider text-slate-900">WES & ECA</h4>
                      <p className="text-xs text-slate-500 mt-1">Full guidance on educational credential assessments.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-10 w-10 shrink-0 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold">02</div>
                    <div>
                      <h4 className="font-black text-xs uppercase tracking-wider text-slate-900">CRS Optimization</h4>
                      <p className="text-xs text-slate-500 mt-1">Technical strategies to maximize your ranking points.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-10 w-10 shrink-0 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold">03</div>
                    <div>
                      <h4 className="font-black text-xs uppercase tracking-wider text-slate-900">PNP Nomination</h4>
                      <p className="text-xs text-slate-500 mt-1">Direct facilitation for provincial interest and invitations.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-10 w-10 shrink-0 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold">04</div>
                    <div>
                      <h4 className="font-black text-xs uppercase tracking-wider text-slate-900">ITA Support</h4>
                      <p className="text-xs text-slate-500 mt-1">End-to-end documentation once you receive your invite.</p>
                    </div>
                  </div>
                </div>
                
                <button className="w-full sm:w-auto bg-blue-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
                  Start PR Assessment
                </button>
              </div>
              
              <div className="relative h-full min-h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img 
                  src="/canada_pr.jpg" 
                  alt="Canada Permanent Residency" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* IN-DEPTH FACILITATION GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Europe/Schengen */}
          <div className="group relative bg-white rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500">
            <div className="relative h-64 mb-8 rounded-[2rem] overflow-hidden">
              <img src="/europe_visit.jpg" alt="Europe" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2">
                <Star size={14} className="text-yellow-500 fill-yellow-500" />
                <span className="text-[10px] font-black uppercase tracking-widest">Top Rated</span>
              </div>
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-4">Schengen & UK Entry</h3>
            <p className="text-slate-500 font-medium mb-8 leading-relaxed">
              We navigate the rigorous requirements of European consulates. Our facilitation includes 
              comprehensive file auditing, biometric scheduling, and expert interview coaching.
            </p>
            <ul className="space-y-4">
              {['Multi-country Itinerary Planning', 'Insurance & Financial Vetting', 'Fast-track Appointment Booking'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700 uppercase tracking-tight">
                  <div className="h-2 w-2 bg-blue-600 rounded-full"></div> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Middle East/Asia */}
          <div className="group relative bg-white rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500">
            <div className="relative h-64 mb-8 rounded-[2rem] overflow-hidden">
              <img src="/saudi_visit.jpg" alt="Asia" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-4">Asian & Gulf Visas</h3>
            <p className="text-slate-500 font-medium mb-8 leading-relaxed">
              Experience the Middle East and Asia with zero friction. We specialize in E-Visa 
              facilitation for Saudi Arabia, Dubai, and Qatar.
            </p>
            <ul className="space-y-4">
              {['24-Hour E-Visa Turnaround', 'Official Invitation Processing', 'Group & Family Facilitation'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700 uppercase tracking-tight">
                  <div className="h-2 w-2 bg-blue-500 rounded-full"></div> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* THE "ELITE CONCIERGE" - TICKETING, HOTEL, PICKUP */}
        <div className="bg-blue-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Globe2 size={300} />
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-black mb-12 tracking-tighter">Beyond The Visa: <br/><span className="text-blue-400">The Pascal Concierge</span></h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <div className="bg-blue-800 w-16 h-16 rounded-2xl flex items-center justify-center">
                  <Ticket size={28} />
                </div>
                <h4 className="text-xl font-black uppercase tracking-widest">Global Ticketing</h4>
                <p className="text-blue-100/70 text-sm leading-relaxed">
                  We secure the most efficient flight routes at exclusive agency rates. 
                  Includes flexible rebooking options.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-blue-800 w-16 h-16 rounded-2xl flex items-center justify-center">
                  <Building2 size={28} />
                </div>
                <h4 className="text-xl font-black uppercase tracking-widest">Hotel Booking</h4>
                <p className="text-blue-100/70 text-sm leading-relaxed">
                  Vetted accommodations that range from luxury 5-star stays to strategic 
                  business hubs.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-blue-800 w-16 h-16 rounded-2xl flex items-center justify-center">
                  <Car size={28} />
                </div>
                <h4 className="text-xl font-black uppercase tracking-widest">Airport Pickup</h4>
                <p className="text-blue-100/70 text-sm leading-relaxed">
                  Eliminate landing anxiety. Our professional chauffeurs meet you at 
                  arrivals for a private transfer.
                </p>
              </div>
            </div>

            <button className="mt-16 bg-white text-blue-900 px-12 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-blue-50 transition-all flex items-center gap-3">
              Book Complete Package <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitVisa;