import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Education from './components/Education';
import Work from './components/Work';
import Destinations from './components/Destinations';
import Preloader from './components/Preloader';
import VideoSuccess from './components/VideoSuccess';
import ChatBot from './components/ChatBot'; // 1. Import the new component

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const criticalImages = ['/grads.jpg', '/schen.jpg', '/aroplane.jpg', '/work.jpg'];

    const cacheImages = async (srcArray) => {
      const promises = srcArray.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve; 
        });
      });

      await Promise.all(promises);
      
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1500);

      return () => clearTimeout(timer);
    };

    cacheImages(criticalImages);
  }, []);

  // Show preloader while images are being cached
  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="min-h-screen bg-white selection:bg-blue-600 selection:text-white animate-in fade-in duration-1000">
      <Navbar />
      
      <div id="hero">
        <Hero />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="events">
        <Education />
      </div>

      <div id="success">
        <VideoSuccess />
      </div>
      
      <div id="walkthrough">
        <Work />
      </div>

      <div id="booking">
        <Destinations />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />

      {/* 2. Place ChatBot here so it floats above everything else */}
      <ChatBot />
    </div>
  );
}

export default App;