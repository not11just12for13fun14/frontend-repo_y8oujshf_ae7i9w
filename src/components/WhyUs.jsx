import { motion } from 'framer-motion'
import { BadgeCheck, Clock, Scale, Globe2 } from 'lucide-react'

const points = [
  { icon: BadgeCheck, title: 'Expert-backed', desc: 'Legal audits led by seasoned real estate lawyers and ex-banking professionals.' },
  { icon: Clock, title: 'Quick Turnaround', desc: 'Fast delivery with optional express service for time-sensitive transactions.' },
  { icon: Scale, title: 'Transparent', desc: 'Fixed, upfront pricing. No hidden fees. Clear deliverables at every step.' },
  { icon: Globe2, title: 'NRI Friendly', desc: 'End-to-end remote coordination for NRIs including POA and verification.' },
]

function WhyUs() {
  return (
    <section id="why-us" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Why choose us</h2>
          <p className="mt-2 text-blue-100/80">We sweat the details, so you can buy with confidence.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-6"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
                <p.icon size={18} />
              </div>
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-blue-100/90">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
