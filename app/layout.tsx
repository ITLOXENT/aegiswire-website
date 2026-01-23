import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AegisWire - Next-Gen Secure Transport Protocol',
  description: 'UDP-based transport with hybrid post-quantum cryptography and adaptive cover traffic. Launching soon.',
  openGraph: {
    title: 'AegisWire - Next-Gen Secure Transport Protocol',
    description: 'UDP-based transport with hybrid post-quantum cryptography and adaptive cover traffic. Launching soon.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
