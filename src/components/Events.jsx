const events = [
  { day: "Thursday", title: "Reggae Night", time: "9 PM - Late", color: "border-green-500" },
  { day: "Friday", title: "Live Band", time: "8 PM - 12 AM", color: "border-violet" },
  { day: "Saturday", title: "Rhumba Gold", time: "9 PM - Late", color: "border-gold" },
];

const Events = () => {
  return (
    <section className="py-24 px-6 bg-obsidian">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-4xl font-black mb-12 flex items-center gap-4">
          WHAT'S <span className="text-violet italic">ON</span>
          <div className="h-1 flex-grow bg-white/5"></div>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div 
              key={index}
              className={`p-8 bg-white/5 border-l-4 ${event.color} hover:bg-white/10 transition-all group cursor-pointer`}
            >
              <p className="text-gold font-bold uppercase tracking-widest text-sm mb-2">{event.day}</p>
              <h3 className="text-white text-2xl font-bold mb-4 group-hover:text-violet transition-colors">
                {event.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6">{event.time}</p>
              <button className="text-white text-xs font-bold uppercase border-b border-white/20 pb-1 hover:border-violet transition-all">
                Get Tickets
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;