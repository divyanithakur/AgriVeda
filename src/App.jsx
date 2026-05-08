import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Dashboard from './components/Dashboard'
import Analytics from './components/Analytics'
import About from './components/About'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0a1f0f] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Dashboard />
      <Analytics />
      <About />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App
