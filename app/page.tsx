'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import StatusBadge from './components/StatusBadge'
import {
  Shield, Key, Layers, Globe, Lock, Server, Eye, Cpu,
  Building2, Heart, Landmark, Factory, Briefcase,
  ArrowRight, CheckCircle2, Fingerprint, Target, XCircle,
  Activity, EyeOff, GitBranch, Link2, ShieldCheck, FileCheck2, HardDrive,
  Zap, Radio
} from 'lucide-react'
import NetworkBackground from './components/NetworkBackground'
import SectionDivider from './components/SectionDivider'

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
        setMessage('Thank you! We\'ll be in touch shortly.')
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
      <section className="relative pt-8 pb-8 md:pt-14 md:pb-14 overflow-hidden">
        {/* Animated network background */}
        <NetworkBackground />
        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-4xl mx-auto">

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-8 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              Secure Transport & Enterprise VPN
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-6 leading-tight">
              High-Assurance Secure Access for{' '}
              <span className="text-gradient">Modern Enterprises</span>
            </h1>

            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-4 leading-relaxed">
              AegisWire is a production secure transport and enterprise VPN platform. Transport core, control plane, gateway fabric, and trust operations run as one integrated system — signed policy enforcement, post-quantum key exchange, packet-level metadata privacy, and per-stream post-compromise security are all implemented and running now.
            </p>

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-10 text-sm text-gray-400">
              {[
                'Policy-aware routing with gateway enforcement',
                'Privacy-safe metadata-only telemetry',
                'Managed, dedicated & self-hosted — available now',
                'Post-quantum key exchange + per-stream PCS, in production',
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" />
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
                data-testid="link-hero-demo"
              >
                Request a Demo
              </Link>
              <Link
                href="/platform"
                className="px-8 py-3.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium transition-colors"
                data-testid="link-hero-platform"
              >
                Explore the Platform
              </Link>
            </div>

          </div>
        </div>
      </section>
      <SectionDivider />

      <section className="py-12 md:py-24 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 max-w-5xl mx-auto">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold font-display">What Ships Today</h2>
                <StatusBadge status="available" />
              </div>
              <ul className="space-y-3">
                {[
                  'UDP-based secure transport with deterministic wire discipline',
                  'Stream-multiplexed sessions with roaming and migration',
                  'Anti-replay protection and anti-amplification controls',
                  'Full and split tunnel VPN with secure DNS and kill switch',
                  'Signed policy distribution and trust-anchor lifecycle',
                  'Privacy-safe observability with metadata-only telemetry',
                  'Gateway pool selection with failover and draining',
                  'Managed SaaS, dedicated, and self-hosted deployment',
                  'SBOM generation, signed releases, reproducible builds',
                  'Post-quantum hybrid key establishment',
                  'Per-stream post-compromise security (PCS)',
                  'Packet-level privacy and header protection',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold font-display">On the Roadmap</h2>
                <StatusBadge status="roadmap" />
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <span className="w-4 h-4 rounded-full border border-cyan-500/50 bg-cyan-500/10 shrink-0 flex items-center justify-center mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  </span>
                  Hardware appliance for customer-controlled edge enforcement
                </li>
              </ul>
              <div className="tech-border rounded-xl p-6 bg-slate-900/30">
                <p className="text-gray-400 text-sm leading-relaxed">
                  Every capability listed under "What Ships Today" is implemented and operating in production environments. Hardware appliance is the only platform delivery item still on the roadmap. AegisWire does not list aspirational features as current capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Session Flow Explainer ───────────────────────────────────────────── */}
      <section className="py-12 md:py-24 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              What Happens When a <span className="text-gradient">Session Opens</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Every AegisWire connection follows a deterministic sequence. No implicit trust, no deferred validation, no post-connection policy negotiation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  step: '01',
                  icon: Radio,
                  title: 'Packet-0 Sent',
                  detail: 'Device transmits an authenticated initiation packet. Identity commitment is included before any data flows.',
                },
                {
                  step: '02',
                  icon: Key,
                  title: 'PQ Key Exchange',
                  detail: 'X25519 + ML-KEM-768 hybrid. Both classical and post-quantum threat models covered in the same handshake.',
                },
                {
                  step: '03',
                  icon: Fingerprint,
                  title: 'Trust Anchor Checked',
                  detail: 'Device certificate and user binding verified against the trust store. Enrollment state confirmed.',
                },
                {
                  step: '04',
                  icon: Shield,
                  title: 'Policy Enforced',
                  detail: 'Signed routing rules from the control plane applied at the gateway before the session is admitted.',
                },
                {
                  step: '05',
                  icon: Lock,
                  title: 'Session Secured',
                  detail: 'Anti-replay counters initialised. Packet header protection active. Deterministic wire discipline in effect.',
                },
                {
                  step: '06',
                  icon: Zap,
                  title: 'PCS Running',
                  detail: 'Per-stream post-compromise security ratchets keys continuously. Compromise of one key window does not persist.',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                  viewport={{ once: true }}
                >
                  <div className="tech-border rounded-xl p-7 bg-slate-900/30 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <span className="text-xs font-mono text-blue-400/50 tracking-widest">{item.step}</span>
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/secure-transport"
                className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                Full transport architecture detail <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Platform Architecture ─────────────────────────────────────────────── */}
      <section className="py-12 md:py-24 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Platform <span className="text-gradient">Architecture</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Nine integrated layers. Each reinforces the others. All shipping.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Lock,
                title: 'Session Security',
                description: 'Authenticated session establishment, replay-aware validation, deterministic state transitions, and bounded message handling.',
                href: '/secure-transport',
              },
              {
                icon: Shield,
                title: 'Transport Core',
                description: 'UDP-based secure transport with stream multiplexing, roaming continuity, anti-amplification, and packet-level privacy.',
                href: '/secure-transport',
              },
              {
                icon: Key,
                title: 'Enterprise VPN',
                description: 'Full and split tunnel, secure DNS resolution, OS-level kill switch, and policy-driven routing across desktop, mobile, and headless clients.',
                href: '/enterprise-vpn',
              },
              {
                icon: Fingerprint,
                title: 'Identity & Trust',
                description: 'Device enrollment, user binding, gateway trust signals, signed artifact distribution, and trust-anchor rotation.',
                href: '/security-trust',
              },
              {
                icon: Target,
                title: 'Policy Enforcement',
                description: 'Signed policy publication, gateway-level enforcement, device and user scoping, and default-deny posture.',
                href: '/platform',
              },
              {
                icon: Eye,
                title: 'Operations & Evidence',
                description: 'Signed release workflows, metadata-only telemetry, SBOM generation, reproducible builds, and audit-ready evidence packaging.',
                href: '/security-trust',
              },
              {
                icon: Globe,
                title: 'Deployment Flexibility',
                description: 'Managed SaaS, dedicated single-tenant, self-hosted sovereign, and regional gateway fabric. Same trust model, different control boundaries.',
                href: '/deployments',
              },
              {
                icon: Cpu,
                title: 'Cryptographic Controls',
                description: 'Post-quantum hybrid key establishment, per-stream PCS, packet header protection, and trust-anchor lifecycle management.',
                href: '/secure-transport',
              },
              {
                icon: Layers,
                title: 'Control Plane',
                description: 'Tenant, user, and device lifecycle management. Role-aware administration. Gateway directory. Multi-tenant operations.',
                href: '/platform',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0 }}
                viewport={{ once: true }}
              >
                <Link href={item.href} className="block tech-border p-6 bg-slate-900/30 rounded-xl hover:bg-slate-900/50 transition-colors group h-full">
                  <div className="w-12 h-12 bg-blue-500/10 text-blue-500 flex items-center justify-center rounded-lg mb-4">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Noise Heritage ───────────────────────────────────────────────────── */}
      <section className="py-10 md:py-20 border-t border-white/5 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-5 uppercase tracking-widest">
                Protocol Heritage
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">
                Noise-Inspired,{' '}
                <span className="text-gradient">But Broader</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                AegisWire's session layer draws from the Noise Protocol Framework — a formal specification for authenticated key exchange used across Signal, WireGuard, and a range of high-assurance systems. The handshake patterns, transcript integrity, and forward secrecy properties that make Noise a trusted foundation are carried forward in AegisWire's design.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                AegisWire extends that foundation with post-quantum key establishment, per-stream PCS beyond standard forward secrecy, and packet-level metadata privacy that treats early-session exposure as a first-class security concern — not an edge case. The result is a transport that operates in hostile networks where Noise-based tools were not designed to run.
              </p>
              <Link
                href="/secure-transport"
                className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                Transport architecture in detail <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-4">
              {[
                {
                  label: 'Noise Framework',
                  note: 'Formal handshake patterns, transcript integrity, forward secrecy',
                  included: true,
                },
                {
                  label: 'Post-Quantum Key Exchange',
                  note: 'X25519 + ML-KEM-768 hybrid — covers both threat models simultaneously',
                  included: true,
                  extra: true,
                },
                {
                  label: 'Per-Stream PCS',
                  note: 'Key ratcheting beyond standard FS — limits blast radius of any key compromise',
                  included: true,
                  extra: true,
                },
                {
                  label: 'Packet-Level Metadata Privacy',
                  note: 'Header protection at session open, before higher-level controls engage',
                  included: true,
                  extra: true,
                },
                {
                  label: 'Hostile Network Survivability',
                  note: 'Anti-replay, anti-amplification, session migration under adversarial conditions',
                  included: true,
                  extra: true,
                },
              ].map((row) => (
                <div key={row.label} className={`flex items-start gap-4 p-4 rounded-xl border ${row.extra ? 'bg-blue-500/5 border-blue-500/15' : 'bg-slate-900/20 border-white/5'}`}>
                  <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${row.extra ? 'text-blue-400' : 'text-green-500'}`} />
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-sm font-semibold text-white">{row.label}</span>
                      {row.extra && <span className="text-xs px-1.5 py-0.5 rounded bg-blue-500/15 text-blue-400 font-mono">+AegisWire</span>}
                    </div>
                    <p className="text-xs text-gray-400">{row.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why AegisWire Stands Out ──────────────────────────────────────────── */}
      <section className="py-12 md:py-24 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Why AegisWire <span className="text-gradient">Stands Out</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Concrete technical properties that distinguish a purpose-built platform from a repositioned tunnel product.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-6 md:mb-12">
            {[
              {
                icon: Activity,
                title: 'Authenticated Session Architecture',
                description: 'Authenticated session establishment, signed control distribution, trust-anchor lifecycle, and operational governance — integrated into one transport and enterprise VPN platform.',
              },
              {
                icon: EyeOff,
                title: 'Packet-Level Metadata Privacy',
                description: 'Early-session metadata is treated as part of the security problem. Header protection reduces exposure before higher-level controls can compensate.',
              },
              {
                icon: Cpu,
                title: 'PQ + PCS Together',
                description: 'Post-quantum transition and post-compromise session recovery are part of one coherent architecture — not separate feature checkboxes.',
              },
              {
                icon: GitBranch,
                title: 'Multiple Trust Lanes',
                description: 'Different trust environments need different authentication paths. AegisWire supports certificates, pinned trust, and bootstrap enrollment. Extended authentication families are in rollout.',
              },
              {
                icon: Link2,
                title: 'Policy-to-Transport Continuity',
                description: 'Control-plane intent, published gateway state, and runtime behavior stay aligned — not loosely connected subsystems under a shared dashboard.',
              },
              {
                icon: ShieldCheck,
                title: 'Privacy-Safe Operations',
                description: 'Metadata-only telemetry with no content inspection. No payload logging. Privacy-safe observability is enforced as the production default, not configured as an option.',
              },
              {
                icon: FileCheck2,
                title: 'Evidence-Backed Release Discipline',
                description: 'Signed artifacts, SBOM generation, reproducible builds, and trust-anchor handling give buyers a stronger answer to "how is this run?"',
              },
              {
                icon: HardDrive,
                title: 'Deployment Sovereignty',
                description: 'Managed SaaS, dedicated single-tenant, self-hosted sovereign, and regional gateway fabric are available now. Hardware appliance is the only delivery model still on the roadmap.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0 }}
                viewport={{ once: true }}
                className="tech-border p-6 rounded-xl bg-slate-900/30"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-px bg-white/5 rounded-xl overflow-hidden">
            {[
              'Transport, trust, policy, and gateway in one architecture',
              'Anti-replay and anti-amplification at the protocol level',
              'Per-stream post-compromise security — in production',
              'Post-quantum hybrid key establishment — in production',
              'Metadata exposure treated as a security concern',
            ].map((item) => (
              <div key={item} className="bg-[#050A14] px-4 py-4 text-center">
                <p className="text-sm text-gray-400 leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 border-t border-white/5 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-6 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              How AegisWire <span className="text-gradient">Differs</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="tech-border p-6 rounded-xl bg-slate-900/30">
              <h3 className="font-bold mb-1 text-sm text-gray-400 uppercase tracking-wider">vs. Consumer VPNs</h3>
              <ul className="mt-4 space-y-2">
                {[
                  'Enterprise policy enforcement, not browser-plugin tunneling',
                  'Signed trust chains, not shared credentials',
                  'Fleet lifecycle management, not single-user apps',
                  'Deployment choice with isolation boundaries',
                ].map((item) => (
                  <li key={item} className="text-sm text-gray-300 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="tech-border p-6 rounded-xl bg-slate-900/30">
              <h3 className="font-bold mb-1 text-sm text-gray-400 uppercase tracking-wider">vs. Overlay Network Tools</h3>
              <ul className="mt-4 space-y-2">
                {[
                  'Purpose-built transport, not a WireGuard wrapper',
                  'Anti-replay and anti-amplification at the protocol level',
                  'Deterministic wire discipline, not inherited defaults',
                  'Post-quantum key establishment, not deferred',
                ].map((item) => (
                  <li key={item} className="text-sm text-gray-300 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="tech-border p-6 rounded-xl bg-blue-500/5 border-blue-500/20">
              <h3 className="font-bold mb-1 text-sm text-gray-400 uppercase tracking-wider">vs. Zero-Trust Marketing Platforms</h3>
              <ul className="mt-4 space-y-2">
                {[
                  'Concrete transport controls, not abstract identity narratives',
                  'Signed policy paths, not dashboard-only governance',
                  'Privacy-safe telemetry by default, not optional add-on',
                  'Self-hosted and sovereign options, not SaaS-only lock-in',
                ].map((item) => (
                  <li key={item} className="text-sm text-gray-300 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Deploy on Your <span className="text-gradient">Terms</span>
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                Managed SaaS, dedicated single-tenant, or self-hosted. Each model runs the same trust and policy architecture with different control boundaries. Choose based on your residency, isolation, and operational requirements.
              </p>
              <Link
                href="/deployments"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                Compare deployment models <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { title: 'Managed SaaS', desc: 'Managed operations, fastest adoption', badge: 'available' as const },
                { title: 'Dedicated Cloud', desc: 'Tenant isolation, custom rollout', badge: 'available' as const },
                { title: 'Self-Hosted', desc: 'Full infrastructure control', badge: 'available' as const },
                { title: 'Hardware Appliance', desc: 'Customer-controlled edge', badge: 'roadmap' as const },
              ].map((model) => (
                <div key={model.title} className="tech-border p-5 rounded-xl bg-slate-900/30">
                  <h4 className="font-bold mb-1 text-sm">{model.title}</h4>
                  <p className="text-xs text-gray-500 mb-2">{model.desc}</p>
                  <StatusBadge status={model.badge} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 border-t border-white/5 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Built for Regulated and Security-Sensitive Environments
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: Building2, label: 'Financial Services' },
              { icon: Heart, label: 'Healthcare' },
              { icon: Landmark, label: 'Government' },
              { icon: Factory, label: 'Critical Infrastructure' },
              { icon: Briefcase, label: 'Global Enterprise' },
            ].map((ind) => (
              <Link
                key={ind.label}
                href="/industries"
                className="tech-border p-6 rounded-xl bg-slate-900/20 hover:bg-slate-900/40 transition-colors text-center group"
              >
                <ind.icon className="w-8 h-8 text-blue-500/70 mx-auto mb-3 group-hover:text-blue-400 transition-colors" />
                <span className="text-sm font-medium text-gray-300">{ind.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 border-t border-white/5 bg-gradient-to-b from-transparent to-black/40">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            See AegisWire in Operation
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Request an architecture briefing. We walk through the live platform, not slide decks.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your business email"
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
              {status === 'loading' ? 'Submitting...' : 'Get in Touch'}
            </button>
          </form>

          {message && (
            <p className={`text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`} data-testid="text-message">
              {message}
            </p>
          )}
        </div>
      </section>
    </>
  )
}
