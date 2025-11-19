import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import WhyUs from './components/WhyUs'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-50">
      <div className="absolute inset-0 bg-[radial-gradient(600px_600px_at_10%_10%,rgba(59,130,246,0.12),transparent_60%),radial-gradient(600px_600px_at_90%_10%,rgba(8,145,178,0.12),transparent_60%)]" />

      <Navbar />

      <main className="relative">
        <Hero />
        <Services />
        <Process />
        <WhyUs />
        <Pricing />
        <FAQ />
        <Contact />

        <footer className="border-t border-white/10 py-10 text-center text-sm text-blue-200/70">
          © {new Date().getFullYear()} Zamindarr • Real Estate Due Diligence, Bangalore
        </footer>
      </main>
    </div>
  )
}

export default App
