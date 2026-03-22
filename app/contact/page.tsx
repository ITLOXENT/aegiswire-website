'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import { Mail, ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Is AegisWire based on Noise?',
    answer: 'AegisWire is informed by modern secure-session design principles associated with the Noise era, but it is a broader secure transport and enterprise VPN platform rather than a Noise implementation. Its differentiation comes from how transport discipline, policy continuity, trust publication, signed control surfaces, privacy-safe operations, and deployment control are combined into one architecture.',
  },
  {
    question: 'How is AegisWire different from a consumer VPN?',
    answer: 'AegisWire is an enterprise secure transport and private connectivity platform. It runs signed policy enforcement, trust-anchor lifecycle management, gateway-level controls, and privacy-safe observability. Consumer VPNs provide tunnel connectivity. AegisWire provides governed enterprise access with enforcement at the gateway, a reviewable trust model, and deployment flexibility for regulated environments.',
  },
  {
    question: 'How does AegisWire differ from overlay network tools?',
    answer: 'AegisWire runs a purpose-built secure transport, not a wrapper around existing protocols. It includes anti-replay protection, anti-amplification controls, deterministic wire discipline, per-stream post-compromise security, post-quantum key establishment, and packet-level privacy during session setup. Overlay tools typically inherit protocol defaults without these controls.',
  },
  {
    question: 'Why talk about post-quantum and post-compromise security together?',
    answer: 'Because sophisticated buyers understand that long-horizon security is not just about today\'s confidentiality. Post-quantum transition planning matters for data collected now. Post-compromise security matters for sessions that run over time. AegisWire treats these as part of one coherent forward-looking architecture, not separate feature checkboxes.',
  },
  {
    question: 'Why does metadata privacy matter in AegisWire\'s story?',
    answer: 'Payload encryption alone does not solve the whole problem. Buyers in serious environments increasingly ask what is visible during setup, routing, and policy publication — before higher-level controls can compensate. AegisWire treats packet-level metadata exposure as part of the security problem, not just traffic payload encryption.',
  },
  {
    question: 'What deployment options are available?',
    answer: 'Four deployment models are available now: managed SaaS, dedicated single-tenant, self-hosted sovereign, and regional gateway fabric. All run the same signed policy, trust-anchor lifecycle, and privacy-safe observability. Hardware appliance for edge enforcement is the only delivery item on the roadmap.',
  },
  {
    question: 'Does AegisWire have third-party audits or certifications?',
    answer: 'We do not claim certifications we have not completed. We document engineering discipline: signed releases, SBOM generation, reproducible builds, trust-anchor lifecycle management, and audit-ready evidence packaging. We provide architecture-level security documentation for evaluation and review.',
  },
  {
    question: 'What is on the roadmap?',
    answer: 'Hardware appliance for customer-controlled edge enforcement. That is the only platform delivery item on the roadmap. All transport, VPN, trust, policy, privacy, and deployment capabilities described on this site are implemented and in production.',
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="tech-border rounded-xl bg-slate-900/30 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left"
        data-testid={`faq-${question.slice(0, 20).replace(/\s/g, '-').toLowerCase()}`}
      >
        <span className="font-medium text-gray-200 pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-5 pb-5">
          <p className="text-sm text-gray-400 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function ContactPage() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setStatus('success')
        setMessage('Thank you! Our team will be in touch shortly.')
        setEmail('')
      } else {
        const data = await res.json()
        setStatus('error')
        setMessage(data.message || 'Something went wrong')
      }
    } catch {
      setStatus('error')
      setMessage('Failed to submit. Please try again.')
    }
  }

  return (
    <>
      <PageHero
        badge="Contact"
        title="Talk to the"
        highlight="AegisWire Team"
        description="Request an architecture briefing, deployment scoping session, or technical deep-dive. AegisWire engagements begin with the engineering team, not a sales deck. We walk through transport architecture, trust operations, policy design, and deployment fit for your specific environment — and answer technical questions directly."
        illustration="contact"
      />

      <section className="py-10 md:py-20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold font-display mb-6">Get Started</h2>
              <p className="text-gray-400 mb-8">
                Enter your business email and our team will reach out to schedule a conversation about your secure access requirements.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Business Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    required
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 disabled:opacity-50"
                    data-testid="input-contact-email"
                  />
                  <p className="mt-1 text-xs text-gray-500">Business email required. Free email providers are not accepted.</p>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  data-testid="button-contact-submit"
                >
                  {status === 'loading' ? 'Submitting...' : 'Request a Demo'}
                  {status !== 'loading' && <ArrowRight className="w-4 h-4" />}
                </button>

                {message && (
                  <p className={`text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`} data-testid="text-contact-message">
                    {message}
                  </p>
                )}
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl font-bold font-display mb-4">What to Expect</h3>
                <ul className="space-y-3">
                  {[
                    'A conversation about your security and access requirements',
                    'An architecture briefing against the live platform',
                    'Discussion of deployment models and control boundaries',
                    'Technical deep-dive with engineering if needed',
                    'No obligation. No high-pressure sales process.',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-400 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="tech-border rounded-xl p-6 bg-slate-900/30">
                <h3 className="text-lg font-bold mb-4">Direct Contact</h3>
                <div className="space-y-3">
                  <a
                    href="mailto:intl@aegiswire.com"
                    className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    intl@aegiswire.com
                  </a>
                  <a
                    href="mailto:sales@aegiswire.com"
                    className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    sales@aegiswire.com
                  </a>
                </div>
              </div>

              <div className="tech-border rounded-xl p-6 bg-slate-900/30">
                <h3 className="text-lg font-bold mb-3">Best For</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'CISOs',
                    'Network Security',
                    'Security Architects',
                    'Compliance Teams',
                    'Platform Engineering',
                    'Infrastructure Teams',
                  ].map((role) => (
                    <span key={role} className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 border-t border-white/5 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-display mb-8 text-center">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
