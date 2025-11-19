import { useState } from 'react'

const faqs = [
  {
    q: 'How long does due diligence take?',
    a: 'Typically 5-7 working days for most apartments, faster with express add-on. Complex land cases may take longer.'
  },
  {
    q: 'Do you cover RERA and OC/CC?',
    a: 'Yes, we verify project registrations, approvals and completion certificates based on availability.'
  },
  {
    q: 'Can this be done remotely for NRIs?',
    a: 'Absolutely. We handle coordination on your behalf and offer POA setup and bank liaison services.'
  },
  {
    q: 'Is legal opinion included?',
    a: 'Yes. A written legal opinion with risk assessment is provided in the Standard & NRI packages.'
  },
]

function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="relative py-20">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Frequently asked questions</h2>
          <p className="mt-2 text-blue-100/80">Didn’t find your answer? Reach out and we’ll help.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60">
              <button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between px-5 py-4 text-left">
                <span className="text-white font-medium">{f.q}</span>
                <span className="text-blue-200">{open === i ? '-' : '+'}</span>
              </button>
              {open === i && (
                <div className="border-t border-white/10 px-5 py-4 text-blue-100/90">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
