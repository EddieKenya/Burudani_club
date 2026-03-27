import { Plane } from 'lucide-react';

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-slate-950 flex flex-col items-center justify-center">
      <div className="relative">
        {/* Spinning Ring */}
        <div className="w-20 h-20 border-2 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
        
        {/* Centered Plane Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Plane className="text-white animate-pulse rotate-45" size={28} />
        </div>
      </div>

      {/* Loading Text */}
      <div className="mt-8 flex flex-col items-center gap-2">
        <h2 className="text-white font-black tracking-[0.4em] uppercase text-[10px] animate-pulse">
          Pascal Travels
        </h2>
        <div className="h-[1px] w-12 bg-blue-600 animate-width-grow"></div>
        <p className="text-slate-500 font-bold text-[8px] uppercase tracking-widest mt-2">
          Preparing your journey...
        </p>
      </div>
    </div>
  );
};

export default Preloader;