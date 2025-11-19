import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    const formData = Object.fromEntries(new FormData(e.currentTarget))

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/inquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (res.ok) {
        setStatus('Thanks! We will reach out shortly.')
        e.currentTarget.reset()
      } else {
        setStatus('Something went wrong. Please try again.')
      }
    } catch (err) {
      setStatus('Unable to send right now. Please try WhatsApp/Call.')
    }
  }

  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Get a free consultation</h2>
          <p className="mt-2 text-blue-100/80">Tell us about the property and what you need help with.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-6 md:grid-cols-2">
          <input name="name" required placeholder="Your name" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
          <input name="email" type="email" required placeholder="Email" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
          <input name="phone" required placeholder="Phone" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
          <input name="location" placeholder="Location / Area" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
          <textarea name="message" placeholder="Tell us about the property or share a link" className="md:col-span-2 h-32 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
          <button className="md:col-span-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 font-semibold text-white">Submit</button>
        </form>
        {status && <p className="mt-3 text-center text-blue-100/80">{status}</p>}
      </div>
    </section>
  )
}

export default Contact
