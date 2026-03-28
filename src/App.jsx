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

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // List of critical Hero images to ensure the first view is perfect
    const criticalImages = [
      '/grads.jpg', 
      '/schen.jpg', 
      '/aroplane.jpg', 
      '/work.jpg'
    ];

    const cacheImages = async (srcArray) => {
      const promises = srcArray.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve; // Continue even if one image fails to load
        });
      });

      await Promise.all(promises);
      
      // Artificial delay for a smooth transition (optional, adjust as needed)
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
      
      {/* Hero Section */}
      <div id="hero">
        <Hero />
      </div>

      {/* About Section */}
      <div id="about">
        <About />
      </div>

      {/* Study Visas (Education) Section */}
      <div id="events">
        <Education />
      </div>

      {/* Work Visas Section */}
      <div id="success">
        <VideoSuccess />
      </div>
      
      {/* Work Visas Section */}
      <div id="walkthrough">
        <Work />
      </div>

      {/* Popular Destinations Section */}
      <div id="booking">
        <Destinations />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;