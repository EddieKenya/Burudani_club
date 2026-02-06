const Events = () => {
  const staticEvents = [
    {
      id: 1,
      title: "Live Bands",
      day: "12",
      time: "6pm",
      poster: "/livebands.png",
      color: "border-green-500",
      indicator: "bg-green-500"
    },
    {
      id: 2,
      title: "Mugithii Express",
      day: "23rd",
      time: "9pm",
      poster: "/fatxo.png",
      color: "border-violet",
      indicator: "bg-violet"
    },
    {
      id: 3,
      title: "Nyashinski City",
      day: "15th",
      time: "8pm",
      poster: "/nyashinski.png",
      color: "border-gold",
      indicator: "bg-gold"
    }
  ];

  return (
    <section id="events" className="py-24 px-6 bg-obsidian">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-4xl font-black mb-12 flex items-center gap-4">
          WHAT'S <span className="text-violet italic uppercase">ON</span>
          <div className="h-1 flex-grow bg-white/5"></div>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {staticEvents.map((event) => (
            <div 
              key={event.id}
              /* 1. select-none: Stops text selection popups.
                 2. pointer-events-auto: Ensures clicks still work.
                 3. webkit-touch-callout: Specifically kills the iPhone "Save Image" popup.
              */
              className={`relative h-[450px] overflow-hidden group border-l-4 ${event.color} rounded-r-2xl bg-white/5 transition-all duration-500 hover:bg-white/10 active:bg-white/10 select-none`}
              style={{ WebkitTouchCallout: 'none' }} 
            >
              {/* Event Poster Background */}
              <img 
                src={event.poster} 
                alt={event.title}
                /* pointer-events-none ensures the image itself doesn't trigger "Save Image" on long press */
                className="absolute inset-0 w-full h-full object-cover grayscale-[0.5] transition-all duration-700 opacity-40 pointer-events-none
                           group-hover:grayscale-0 group-hover:opacity-60 group-hover:scale-110
                           group-active:grayscale-0 group-active:opacity-60 group-active:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent z-10" />

              <div className="relative z-20 p-10 h-full flex flex-col justify-end">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-gold font-black uppercase tracking-[0.2em] text-xs">
                    {event.day}
                  </p>
                  <div className={`w-2 h-2 rounded-full animate-pulse ${event.indicator}`} />
                </div>

                <h3 className="text-white text-3xl font-black mb-3 transition-colors tracking-tighter uppercase italic leading-tight group-hover:text-white group-active:text-white">
                  {event.title}
                </h3>

                <p className="text-gray-300 text-sm mb-8 font-medium tracking-wide">
                  {event.time}
                </p>

                <a href="#booking" className="inline-block">
                  <button className="text-white text-[10px] font-black uppercase tracking-[0.2em] border-b-2 border-white/10 pb-2 transition-all hover:border-gold active:border-gold">
                    Get Tickets
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;