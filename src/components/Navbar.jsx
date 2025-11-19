import { useState } from 'react'
import { Menu, X, ShieldCheck, Phone, Mail } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <div className="flex h-16 items-center justify-between px-4">
            <a href="#" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/20">
                <ShieldCheck size={20} />
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-white">Zamindarr</p>
                <p className="text-[10px] uppercase tracking-widest text-blue-300/80">Due Diligence</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((n) => (
                <a key={n.href} href={n.href} className="text-sm text-blue-100/80 hover:text-white transition-colors">
                  {n.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="tel:+919999999999" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-sm text-blue-100 hover:text-white hover:border-blue-400/40 transition">
                <Phone size={16} /> Call
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30">
                <Mail size={16} /> Get Quote
              </a>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-blue-100">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="flex flex-col gap-2 rounded-xl border border-white/10 bg-slate-800/60 p-3">
                {navItems.map((n) => (
                  <a key={n.href} href={n.href} className="rounded-lg px-3 py-2 text-sm text-blue-100/90 hover:bg-white/5">
                    {n.label}
                  </a>
                ))}
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <a href="tel:+919999999999" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm text-blue-100">
                    <Phone size={16} /> Call
                  </a>
                  <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-3 py-2 text-sm font-semibold text-white">
                    <Mail size={16} /> Quote
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
