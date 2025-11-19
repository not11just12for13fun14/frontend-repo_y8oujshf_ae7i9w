import { motion } from 'framer-motion'

const steps = [
  { step: '01', title: 'Free Consultation', desc: 'Tell us about the property. We scope the checks you need and advise timelines & pricing.' },
  { step: '02', title: 'Document Collection', desc: 'You share available records. We also coordinate with builder, seller, bank, and government portals.' },
  { step: '03', title: 'Legal & Field Work', desc: 'We run searches, inspect on-ground, verify approvals and prepare a structured report with risks.' },
  { step: '04', title: 'Final Opinion', desc: 'Talk to an expert. Get a clear “go / fix / avoid” recommendation with next steps.' },
]

function Process() {
  return (
    <section id="process" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">How it works</h2>
          <p className="mt-2 text-blue-100/80">Simple, transparent, and fast.</p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-blue-500/30 via-cyan-500/30 to-transparent md:block" />
          <div className="space-y-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: i * 0.05 }}
                className="grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]"
              >
                <div className={`rounded-2xl border border-white/10 bg-slate-900/60 p-6 ${i % 2 === 0 ? 'md:order-1' : 'md:order-3'}`}> 
                  <p className="text-sm text-blue-200/80">Step {s.step}</p>
                  <h3 className="text-xl font-semibold text-white">{s.title}</h3>
                  <p className="mt-1 text-blue-100/90">{s.desc}</p>
                </div>
                <div className="hidden md:flex md:order-2 h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow" />
                <div className={`rounded-2xl border border-white/10 bg-slate-900/20 p-6 ${i % 2 === 0 ? 'md:order-3' : 'md:order-1'}`}>
                  <p className="text-blue-200/80">What you get</p>
                  <ul className="mt-1 list-disc pl-5 text-blue-100/90">
                    <li>Progress updates</li>
                    <li>Clear timelines</li>
                    <li>Single point of contact</li>
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
