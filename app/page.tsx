'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Shield, Key, Layers, Network, Cpu, Zap } from 'lucide-react'

export default function Home() {
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
        setMessage('Thank you! We\'ll notify you when we launch.')
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
    <div className="min-h-screen bg-[#050A14] overflow-x-hidden selection:bg-primary/30">
      
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-cyan-900/10 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[60%] h-[60%] bg-blue-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10">
        
        <nav className="border-b border-white/5 bg-[#050A14]/50 backdrop-blur-md sticky top-0 z-50">
          <div className="container mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center">
              <Image 
                src="/logo.webp" 
                alt="AegisWire Logo" 
                width={160} 
                height={40} 
                className="object-contain invert"
                style={{ height: '40px', width: 'auto' }}
                priority
              />
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
              <span>v0.2 Spec</span>
              <span className="text-blue-500/50">|</span>
              <span className="text-blue-500">Public Alpha Soon</span>
            </div>
          </div>
        </nav>

        <section className="pt-24 pb-32 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-mono mb-8 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Protocol Launching Soon
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 leading-tight">
              Next-Gen Secure <br />
              <span className="text-gradient">Transport Protocol</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 font-light">
              UDP-based transport with hybrid post-quantum cryptography and adaptive cover traffic.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={status === 'loading'}
                className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 disabled:opacity-50"
                data-testid="input-email"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                data-testid="button-notify"
              >
                {status === 'loading' ? 'Submitting...' : 'Notify Me'}
              </button>
            </form>
            
            {message && (
              <p className={`mt-4 text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`} data-testid="text-message">
                {message}
              </p>
            )}
          </motion.div>
        </section>

        <section className="py-24 border-t border-white/5 bg-black/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Core Capabilities</h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Engineered for environments where privacy, integrity, and performance cannot be compromised.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard 
                icon={Shield}
                title="Per-Stream PCS"
                description="Post-Compromise Security applied individually to every multiplexed stream, isolating breaches."
                delay={0.1}
              />
              <FeatureCard 
                icon={Key}
                title="Hybrid Post-Quantum"
                description="Key establishment using multi-KEM hybridization to resist future quantum decryption attacks."
                delay={0.2}
              />
              <FeatureCard 
                icon={Layers}
                title="Metadata Privacy"
                description="Advanced obfuscation techniques that hide traffic patterns, volume, and timing characteristics."
                delay={0.3}
              />
            </div>
          </div>
        </section>

        <section className="py-24 container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Technical <span className="text-blue-500">Highlights</span>
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                AegisWire is built from the ground up to replace legacy protocols in high-threat environments.
              </p>
              
              <div className="space-y-6">
                <TechItem 
                  icon={Network}
                  title="Stream Multiplexing"
                  description="Single UDP connection carrying multiple isolated data streams with independent flow control."
                />
                <TechItem 
                  icon={Cpu}
                  title="Formal-Proof Friendly"
                  description="State machine designed for formal verification to mathematically prove security properties."
                />
                <TechItem 
                  icon={Zap}
                  title="Zero-RTT Resumption"
                  description="Secure session resumption without compromising forward secrecy or replay protection."
                />
              </div>
            </div>

            <div className="bg-slate-900/50 rounded-2xl p-8 border border-white/5 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-32 bg-blue-500/5 rounded-full blur-[80px]" />
              <h3 className="text-xl font-bold font-display mb-8 opacity-80">System Specifications</h3>
              <TechSpecs />
            </div>
          </div>
        </section>

        <section className="py-24 border-t border-white/5 bg-gradient-to-b from-transparent to-black/40">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-12 text-center">
              Novel Enhancements
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <EnhancementCard 
                num="01"
                title="Multi-KEM Hybridization"
                description="Combining classical ECDH with lattice-based Kyber and code-based McEliece for robust long-term security."
              />
              <EnhancementCard 
                num="02"
                title="Rolling PQ Re-randomization"
                description="Continuous key rotation mixed with entropy injection to prevent long-term traffic analysis."
              />
              <EnhancementCard 
                num="03"
                title="Adaptive Cover Traffic"
                description="Dynamically injected dummy packets that mimic real application behavior to defeat statistical analysis."
              />
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 bg-[#020408] py-12">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center">
              <Image 
                src="/logo.webp" 
                alt="AegisWire Logo" 
                width={120} 
                height={32} 
                className="object-contain invert"
                style={{ height: '32px', width: 'auto' }}
              />
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-gray-400">
              <span>© 2026 AegisWire Powered by ITLOX</span>
              <a href="mailto:intl@AegisWire.com" className="hover:text-blue-500 transition-colors">
                intl@AegisWire.com
              </a>
            </div>
          </div>
        </footer>

      </div>
    </div>
  )
}

function FeatureCard({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="tech-border p-6 bg-slate-900/30 rounded-xl hover:bg-slate-900/50 transition-colors"
    >
      <div className="w-12 h-12 bg-blue-500/10 text-blue-500 flex items-center justify-center rounded-lg mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </motion.div>
  )
}

function TechItem({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <div className="flex gap-4">
      <div className="bg-slate-800 p-3 rounded-lg h-fit border border-white/10">
        <Icon className="w-6 h-6 text-blue-500" />
      </div>
      <div>
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  )
}

function TechSpecs() {
  const specs = [
    { label: 'Transport', value: 'UDP' },
    { label: 'Key Exchange', value: 'X25519 + ML-KEM-768' },
    { label: 'Cipher', value: 'ChaCha20-Poly1305' },
    { label: 'Signature', value: 'Ed25519' },
    { label: 'PCS Model', value: 'Per-Stream Ratchet' },
    { label: 'Handshake', value: 'Noise XX / IK' },
  ]

  return (
    <div className="space-y-4 relative z-10">
      {specs.map((spec) => (
        <div key={spec.label} className="flex justify-between items-center py-2 border-b border-white/5">
          <span className="text-gray-400 text-sm">{spec.label}</span>
          <span className="font-mono text-sm text-blue-400">{spec.value}</span>
        </div>
      ))}
    </div>
  )
}

function EnhancementCard({ num, title, description }: { num: string, title: string, description: string }) {
  return (
    <div className="tech-border p-6 bg-slate-900/20 rounded-lg hover:bg-slate-900/40 transition-colors">
      <div className="w-10 h-10 bg-blue-500/20 text-blue-500 flex items-center justify-center rounded mb-4 font-mono font-bold">
        {num}
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  )
}
