'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Home } from 'lucide-react'

const navItems = [
  { label: 'Platform', href: '/platform' },
  { label: 'Enterprise VPN', href: '/enterprise-vpn' },
  { label: 'Secure Transport', href: '/secure-transport' },
  { label: 'Deployments', href: '/deployments' },
  { label: 'Industries', href: '/industries' },
  { label: 'Security & Trust', href: '/security-trust' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="border-b border-white/5 bg-[#050A14]/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo.webp"
            alt="AegisWire Logo"
            width={180}
            height={40}
            className="object-contain invert"
            style={{ height: '40px', width: 'auto' }}
            priority
          />
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          <Link
            href="/"
            className={`px-2.5 py-2 rounded-md text-sm font-medium transition-colors ${
              pathname === '/'
                ? 'text-blue-400 bg-blue-500/10'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
            title="Home"
            aria-label="Home"
          >
            <Home className="w-4 h-4" />
          </Link>
          <span className="w-px h-5 bg-white/10 mx-1" />
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === item.href
                  ? 'text-blue-400 bg-blue-500/10'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors"
            data-testid="link-request-demo"
          >
            Request Demo
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-gray-400 hover:text-white"
          data-testid="button-mobile-menu"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-white/5 bg-[#050A14]/95 backdrop-blur-md">
          <div className="container mx-auto px-6 py-4 space-y-1">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-2 px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                pathname === '/'
                  ? 'text-blue-400 bg-blue-500/10'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Home className="w-4 h-4" />
              Home
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-blue-400 bg-blue-500/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 mt-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium text-center transition-colors"
            >
              Request Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
