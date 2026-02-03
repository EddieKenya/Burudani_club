import { useState, useEffect } from 'react';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fixed colors for the 3 slots: Green, Violet, Gold
  const fixedColors = ["border-green-500", "border-violet", "border-gold"];

  useEffect(() => {
    // Function to pull the latest 3 events from Django
    const fetchEvents = () => {
      fetch('http://127.0.0.1:8000/api/events/')
        .then((response) => {
          if (!response.ok) throw new Error('Network response was not ok');
          return response.json();
        })
        .then((data) => {
          setEvents(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching from Django:', error);
          // We don't set loading to false here to avoid flickering on poll errors
        });
    };

    // Run immediately on component mount
    fetchEvents();

    // Set interval to poll every 3 seconds for instant updates
    const interval = setInterval(fetchEvents, 3000);

    // Cleanup interval when the user leaves the page to save performance
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="bg-obsidian py-24 text-center">
        <p className="text-white animate-pulse font-black uppercase tracking-widest">
          Syncing with Burudani Live...
        </p>
      </div>
    );
  }

  return (
    <section id="events" className="py-24 px-6 bg-obsidian">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-4xl font-black mb-12 flex items-center gap-4">
          WHAT'S <span className="text-violet italic uppercase">ON</span>
          <div className="h-1 flex-grow bg-white/5"></div>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {events.length > 0 ? (
            events.map((event, index) => (
              <div 
                key={event.id || index}
                className={`relative h-[450px] overflow-hidden group border-l-4 ${fixedColors[index % 3]} rounded-r-2xl bg-white/5 transition-all duration-500 hover:bg-white/10`}
              >
                {/* Event Poster Background */}
                {event.poster ? (
                  <img 
                    src={event.poster} 
                    alt={event.title}
                    className="absolute inset-0 w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 opacity-40 group-hover:opacity-60"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                )}
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent z-10" />

                {/* Content Overlay */}
                <div className="relative z-20 p-10 h-full flex flex-col justify-end">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-gold font-black uppercase tracking-[0.2em] text-xs">
                      {event.day}
                    </p>
                    {/* Pulsing indicator to show it's live */}
                    <div className={`w-2 h-2 rounded-full animate-pulse ${fixedColors[index % 3].replace('border-', 'bg-')}`} />
                  </div>

                  <h3 className="text-white text-3xl font-black mb-3 group-hover:text-white transition-colors tracking-tighter uppercase italic leading-tight">
                    {event.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-8 font-medium tracking-wide">
                    {event.time}
                  </p>

                  <a href="#booking" className="inline-block">
                    <button className="text-white text-[10px] font-black uppercase tracking-[0.2em] border-b-2 border-white/10 pb-2 hover:border-gold transition-all hover:text-gold">
                      Get Tickets
                    </button>
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 py-20 text-center border-2 border-dashed border-white/5 rounded-3xl">
              <p className="text-gray-500 font-bold uppercase tracking-widest">No upcoming events scheduled</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Events;