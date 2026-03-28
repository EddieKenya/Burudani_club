import { useState, useRef } from 'react';
import { CheckCircle, Play, X, Volume2 } from 'lucide-react';

const VideoSuccess = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  const videos = [
    { id: 1, src: "/video/reliability.mp4", title: "OUR RELIABILITY", duration: "1:25" },
    { id: 2, src: "/video/employment.mp4", title: "EMPLOYMENT OFFERS", duration: "1:16" },
    { id: 3, src: "/video/inspiration .mp4", title: "SUCCESS INSPIRATION", duration: "1:37" },
    { id: 4, src: "/video/partners.mp4", title: "GLOBAL PARTNERS", duration: "1:04" },
    { id: 5, src: "/video/pascal video.mp4", title: "FOUNDER'S MESSAGE", duration: "2:07" },
    { id: 6, src: "/video/woman presenting.mp4", title: "CLIENT TESTIMONY", duration: "1:12" }
  ];

  const handleMouseEnter = (e) => {
    const video = e.currentTarget.querySelector('video');
    if (video) video.play().catch(() => {});
  };

  const handleMouseLeave = (e) => {
    const video = e.currentTarget.querySelector('video');
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <section className="py-24 bg-white px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-blue-600 font-bold tracking-[0.4em] uppercase mb-4 text-xs">Verified Success</h2>
          <h1 className="text-4xl md:text-6xl font-black text-blue-900 tracking-tighter uppercase leading-none">
            Proven <span className="text-blue-600 italic font-light">Reliability</span>
          </h1>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {videos.map((video) => (
            <div 
              key={video.id} 
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => setSelectedVideo(video)}
              className="group relative aspect-[9/16] bg-slate-900 rounded-[2rem] overflow-hidden shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
            >
              <video 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                muted
                loop
                playsInline
                preload="auto"
              >
                <source src={video.src} type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-transparent to-transparent z-10 pointer-events-none" />
              
              <div className="absolute inset-0 z-20 p-5 flex flex-col justify-between pointer-events-none">
                <div className="self-end bg-white/20 backdrop-blur-md text-white text-[10px] font-black px-2 py-1 rounded-lg">
                  {video.duration}
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={10} className="text-blue-400" />
                  <p className="text-white font-black text-[10px] uppercase tracking-widest">{video.title}</p>
                </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center z-30 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-2xl scale-75 group-hover:scale-100 transition-all">
                  <Play size={24} fill="currentColor" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal (Popup) */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-10 animate-in fade-in duration-300"
          onClick={() => setSelectedVideo(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-blue-400 transition-colors z-[110]"
            onClick={() => setSelectedVideo(null)}
          >
            <X size={40} strokeWidth={3} />
          </button>

          <div 
            className="relative w-full max-w-sm aspect-[9/16] bg-black rounded-[3rem] overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking the video itself
          >
            <video 
              src={selectedVideo.src} 
              className="w-full h-full object-contain"
              autoPlay 
              controls
              playsInline
            >
              <source src={selectedVideo.src} type="video/mp4" />
            </video>
            
            <div className="absolute top-6 left-6 flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg">
              <Volume2 size={16} />
              <span className="text-[10px] font-black uppercase tracking-widest">Sound On</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSuccess;