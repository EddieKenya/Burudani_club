import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Booking from './components/Booking'
import About from './components/About'
import Education from './components/Education'
import Work from './components/Work'
import Destinations from './components/Destinations'
function App() {
  return (
    <div className="min-h-screen bg-obsidian selection:bg-violet selection:text-white">
      <Navbar />
      
      {/* Anchor for "The Experience" */}
      <div id="hero">
        <Hero />
      </div>

      {/* Anchor for "About" */}
      <div id="about">
        <About />
      </div>

      {/* Anchor for "Events" */}
      <div id="events">
        <Education/>
      </div>

      {/* Anchor for "Experience" (Walkthrough) */}
      <div id="walkthrough">
        <Work/>
      </div>

      {/* Anchor for "BOOK A TABLE" */}
      <div id="booking">
        <Destinations/>
      </div>

      {/* Anchor for "Contact Us" */}
      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </div>
  )
}

export default App