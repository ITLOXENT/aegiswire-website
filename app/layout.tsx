import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'AegisWire - Secure Transport & Enterprise VPN Platform',
    template: '%s | AegisWire',
  },
  description: 'High-assurance secure transport and enterprise VPN platform built for regulated, security-sensitive, and operationally demanding environments.',
  openGraph: {
    title: 'AegisWire - Secure Transport & Enterprise VPN Platform',
    description: 'High-assurance secure transport and enterprise VPN platform built for regulated, security-sensitive, and operationally demanding environments.',
    type: 'website',
    siteName: 'AegisWire',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <Script
        id="Cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        data-cbid="4513ba42-000a-476e-ba6e-5075bbe1da69"
        data-blockingmode="auto"
        strategy="beforeInteractive"
      />
      <body className="font-sans antialiased">
        <div className="min-h-screen bg-[#050A14] overflow-x-hidden selection:bg-blue-500/30">
          <div className="fixed inset-0 z-0 pointer-events-none">
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-cyan-900/10 rounded-full blur-[120px]" />
            <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[60%] h-[60%] bg-blue-500/5 rounded-full blur-[150px]" />
          </div>
          <div className="relative z-10">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
