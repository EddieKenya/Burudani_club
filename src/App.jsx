import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Events from './components/Events'
import Walkthrough from './components/Walkthrough'


function App() {
  return (
    <div className="min-h-screen bg-obsidian">
      <Navbar />
      <Hero />
      <Events />
      <Walkthrough />
      
    </div>
  )
}

export default App