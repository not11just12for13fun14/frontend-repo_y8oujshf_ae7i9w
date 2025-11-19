import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28" id="home">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-24 right-10 h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_10%_10%,rgba(59,130,246,0.08),transparent_40%),radial-gradient(700px_circle_at_90%_10%,rgba(8,145,178,0.08),transparent_40%)]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 md:grid-cols-2">
        <div className="py-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-black tracking-tight text-white"
          >
            Real Estate Due Diligence in Bangalore, done right.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-lg md:text-xl text-blue-100/90"
          >
            We verify titles, documents, RERA, encumbrances and compliance end-to-end, and offer on-ground services from site visits to legal opinions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-white font-semibold shadow-lg shadow-blue-500/30">Get a free consultation</a>
            <a href="#services" className="inline-flex items-center justify-center rounded-xl border border-white/10 px-5 py-3 text-blue-100 hover:text-white">Explore services</a>
          </motion.div>

          <div className="mt-6 flex items-center gap-4 text-xs text-blue-200/80">
            <span>Trusted by home buyers, NRIs & investors</span>
            <span className="inline-block h-1 w-1 rounded-full bg-blue-300/60" />
            <span>Fast turnaround • Fixed pricing</span>
          </div>
        </div>

        <div className="relative aspect-square rounded-2xl border border-white/10 bg-slate-900/60 p-2 shadow-2xl">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-400/10" />
          <div className="relative h-full w-full overflow-hidden rounded-xl">
            <Spline scene="https://prod.spline.design/H6e4o1v7zGzU6i8m/scene.splinecode" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
