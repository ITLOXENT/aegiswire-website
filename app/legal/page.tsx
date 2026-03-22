import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Legal & Compliance — AegisWire',
  description: 'Legal documents, privacy policy, terms of service, and compliance information for AegisWire.',
}

const legalDocs = [
  {
    title: 'Terms of Service',
    href: '/legal/terms',
    description: 'The agreement governing access to and use of the AegisWire platform, including subscription terms, acceptable use, liability, and dispute resolution.',
    updated: 'March 2026',
  },
  {
    title: 'Privacy Policy',
    href: '/legal/privacy',
    description: 'How ITLOX LTD (trading as AegisWire) collects, uses, stores, and protects personal data. Covers GDPR, UK GDPR, and applicable US state privacy law obligations.',
    updated: 'March 2026',
  },
  {
    title: 'Refund & Cancellation Policy',
    href: '/legal/refund-policy',
    description: 'Enterprise refund terms, cancellation notice requirements, billing dispute process, and chargeback policy. All fees are non-refundable except as stated.',
    updated: 'March 2026',
  },
  {
    title: 'Acceptable Use Policy',
    href: '/legal/acceptable-use',
    description: 'Permitted and prohibited uses of the AegisWire platform, including security requirements, prohibited conduct, and enforcement procedures.',
    updated: 'March 2026',
  },
  {
    title: 'Service Level Agreement',
    href: '/legal/sla',
    description: 'Standard service availability targets, support tiers, incident response commitments, and service credit framework. Enterprise SLA available on request.',
    updated: 'March 2026',
  },
  {
    title: 'AI & Automated Systems Disclaimer',
    href: '/legal/ai-disclaimer',
    description: 'Limitations and responsibilities relating to automated policy enforcement, AI-assisted features, anomaly detection, and algorithmic decision-making in the platform.',
    updated: 'March 2026',
  },
  {
    title: 'DMCA & Intellectual Property Notice',
    href: '/legal/dmca',
    description: 'Copyright ownership, trademark policy, DMCA takedown and counter-notice procedures, and intellectual property complaint process.',
    updated: 'March 2026',
  },
  {
    title: 'Cookie Policy',
    href: '/legal/cookies',
    description: 'Information about cookies and similar tracking technologies used on the AegisWire website and how to manage your preferences.',
    updated: 'March 2026',
  },
  {
    title: 'Data Processing Addendum',
    href: '/legal/dpa',
    description: 'GDPR Article 28 compliant data processing terms for enterprise customers for whom AegisWire acts as a data processor.',
    updated: 'March 2026',
  },
]

export default function LegalHubPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-10 pb-8 md:pt-16 md:pb-12 border-b border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-6 uppercase tracking-widest">
            Legal &amp; Compliance
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4 leading-tight">
            Legal <span className="text-gradient">Documents</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            AegisWire is committed to transparency in how we operate, process data, and govern access to our platform.
            All documents below apply to use of the AegisWire platform and website.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-4">
            {legalDocs.map((doc) => (
              <Link
                key={doc.href}
                href={doc.href}
                className="block p-6 rounded-xl border border-white/10 bg-white/2 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors mb-2">
                      {doc.title}
                    </h2>
                    <p className="text-sm text-gray-400 leading-relaxed">{doc.description}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <span className="text-xs text-gray-600">Last updated</span>
                    <div className="text-xs text-gray-500 mt-0.5">{doc.updated}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-xl border border-white/10 bg-black/20">
            <h3 className="text-base font-semibold text-white mb-2">Legal enquiries</h3>
            <p className="text-sm text-gray-400">
              For legal notices, data subject requests, or compliance enquiries, contact{' '}
              <a href="mailto:legal@aegiswire.com" className="text-blue-400 hover:underline">legal@aegiswire.com</a>.
              {' '}For general enquiries, contact{' '}
              <a href="mailto:intl@aegiswire.com" className="text-blue-400 hover:underline">intl@aegiswire.com</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
