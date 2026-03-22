import Image from 'next/image'
import Link from 'next/link'

const footerLinks = [
  {
    title: 'Platform',
    links: [
      { label: 'Platform Overview', href: '/platform' },
      { label: 'Enterprise VPN', href: '/enterprise-vpn' },
      { label: 'Secure Transport', href: '/secure-transport' },
      { label: 'Deployment Models', href: '/deployments' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Industries', href: '/industries' },
      { label: 'Security & Trust', href: '/security-trust' },
      { label: 'Contact Sales', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms of Service', href: '/legal/terms' },
      { label: 'Privacy Policy', href: '/legal/privacy' },
      { label: 'Refund Policy', href: '/legal/refund-policy' },
      { label: 'Acceptable Use', href: '/legal/acceptable-use' },
      { label: 'SLA', href: '/legal/sla' },
      { label: 'AI Disclaimer', href: '/legal/ai-disclaimer' },
      { label: 'DMCA & IP', href: '/legal/dmca' },
      { label: 'Cookie Policy', href: '/legal/cookies' },
      { label: 'DPA', href: '/legal/dpa' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020408]">
      <div className="container mx-auto px-6 py-8 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-6 md:mb-12">
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/logo.webp"
              alt="AegisWire Logo"
              width={160}
              height={36}
              className="object-contain invert mb-4"
              style={{ height: '36px', width: 'auto' }}
            />
            <p className="text-sm text-gray-500 max-w-xs">
              Production secure transport and enterprise VPN platform. Signed policy enforcement, post-quantum key exchange, per-stream PCS, and privacy-safe operations — shipping now.
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold text-white mb-4">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-blue-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-sm text-gray-500">© 2026 AegisWire Powered by ITLOX</span>
          <a
            href="mailto:intl@aegiswire.com"
            className="text-sm text-gray-500 hover:text-blue-400 transition-colors"
          >
            intl@aegiswire.com
          </a>
        </div>
      </div>
    </footer>
  )
}
