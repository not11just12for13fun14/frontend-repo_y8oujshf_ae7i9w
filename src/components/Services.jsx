import { Building2, FileSearch, MapPin, Stamp, PenTool, ClipboardList } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: FileSearch,
    title: 'Title & Document Verification',
    desc: 'Comprehensive scrutiny of parent deeds, khata, RTC, encumbrance certificates and mutation records.'
  },
  {
    icon: Stamp,
    title: 'RERA & Compliance Checks',
    desc: 'Project registration, approvals, OC/CC verification, and deviation assessments as per bye-laws.'
  },
  {
    icon: MapPin,
    title: 'On-ground Site Inspection',
    desc: 'Site visit with photos/videos, neighborhood insights, and physical measurement verification.'
  },
  {
    icon: PenTool,
    title: 'Legal Opinion',
    desc: 'Review by experienced real estate lawyers with risk flags and clear next steps.'
  },
  {
    icon: ClipboardList,
    title: 'Transaction Support',
    desc: 'Agreement review, token and sale deed support, liaison with banks and builders.'
  },
  {
    icon: Building2,
    title: 'Additional Services',
    desc: 'BBMP/BMRDA documents, khata transfer, property tax, tenant verification and more.'
  },
]

function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Services tailored for Bangalore real estate</h2>
          <p className="mt-2 text-blue-100/80">Pick what you need or go end-to-end for complete peace of mind.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-lg"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10 blur-2xl" />
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-600/30">
                <s.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-blue-100/90">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
