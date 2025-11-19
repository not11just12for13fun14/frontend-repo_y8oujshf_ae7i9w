import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Basic Check',
    price: '₹4,999',
    highlight: false,
    features: ['EC & Khata verification', 'Basic title check', 'Phone support']
  },
  {
    name: 'Standard Due Diligence',
    price: '₹14,999',
    highlight: true,
    features: ['Complete title chain review', 'RERA & approvals', 'On-ground inspection', 'Detailed report']
  },
  {
    name: 'NRI End-to-End',
    price: 'Custom',
    highlight: false,
    features: ['Everything in Standard', 'Remote coordination', 'POA & bank liaison', 'Priority turnaround']
  },
]

function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Simple, transparent pricing</h2>
          <p className="mt-2 text-blue-100/80">Pick a plan or ask for a custom quote.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.05 }}
              className={`relative rounded-2xl border p-6 ${t.highlight ? 'border-blue-400/50 bg-slate-900/70 shadow-xl shadow-blue-500/20' : 'border-white/10 bg-slate-900/60'}`}
            >
              {t.highlight && (
                <span className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-2 py-1 text-[10px] font-semibold tracking-wider text-white">Popular</span>
              )}
              <h3 className="text-xl font-semibold text-white">{t.name}</h3>
              <p className="mt-2 text-3xl font-black text-white">{t.price}</p>
              <ul className="mt-4 space-y-2 text-blue-100/90">
                {t.features.map((f) => (
                  <li key={f} className="">• {f}</li>
                ))}
              </ul>
              <a href="#contact" className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 font-semibold ${t.highlight ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white' : 'border border-white/10 text-blue-100'}`}>Get started</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
