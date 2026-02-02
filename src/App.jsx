import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Events from './components/Events'
import Walkthrough from './components/Walkthrough'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Booking from './components/Booking'
import About from './components/About'

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
        <Events />
      </div>

      {/* Anchor for "Experience" (Walkthrough) */}
      <div id="walkthrough">
        <Walkthrough />
      </div>

      {/* Anchor for "BOOK A TABLE" */}
      <div id="booking">
        <Booking />
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