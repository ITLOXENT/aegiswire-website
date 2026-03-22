'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import StatusBadge from '../components/StatusBadge'
import {
  Shield, Cpu, Network, Zap, Lock, Eye, Layers,
  ArrowRight, CheckCircle2
} from 'lucide-react'

export default function SecureTransportPage() {
  return (
    <>
      <PageHero
        badge="Secure Transport"
        title="Transport Architecture,"
        highlight="In Production"
        description="AegisWire runs a purpose-built secure transport layer with deterministic wire discipline, anti-replay protection, roaming session continuity, stream multiplexing, and packet-level metadata privacy. Key exchange uses a hybrid X25519 + ML-KEM-768 construction covering both classical and post-quantum threat models simultaneously. Post-compromise security ratchets session keys automatically. This is the operating platform — not a roadmap item."
        illustration="transport"
      />

      <section className="py-10 md:py-20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-6 md:mb-12">
            <h2 className="text-3xl font-bold font-display mb-2">
              Session & Mobility
            </h2>
            <StatusBadge status="available" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Network,
                title: 'UDP-Based Secure Transport',
                description: 'Production transport built on UDP with a custom session model. Not a WireGuard wrapper. Not inherited protocol defaults.',
              },
              {
                icon: Layers,
                title: 'Stream-Multiplexed Sessions',
                description: 'Multiple isolated data streams over a single connection. Independent flow control and security boundaries per stream.',
              },
              {
                icon: Zap,
                title: 'Roaming & Session Migration',
                description: 'Sessions survive network changes without reconnection. Handles mobile transitions, Wi-Fi/cellular handoff, and connectivity interruptions.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0 }}
                viewport={{ once: true }}
                className="tech-border p-6 bg-slate-900/30 rounded-xl"
              >
                <div className="w-12 h-12 bg-blue-500/10 text-blue-500 flex items-center justify-center rounded-lg mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 border-t border-white/5 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-6 md:mb-12">
            <h2 className="text-3xl font-bold font-display mb-2">
              Replay & State Protection
            </h2>
            <StatusBadge status="available" />
          </div>
          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Shield,
                title: 'Anti-Replay Protection',
                description: 'Replay attack prevention at the protocol level. Every packet carries replay-resistant state. Duplicate and out-of-window packets are rejected.',
              },
              {
                icon: Cpu,
                title: 'Deterministic Wire Discipline',
                description: 'Predictable state transitions, bounded message sizes, strict validation rules. The protocol behaves identically under review and in production.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0 }}
                viewport={{ once: true }}
                className="tech-border p-6 bg-slate-900/30 rounded-xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-500/10 text-blue-500 flex items-center justify-center rounded-lg">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                </div>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
            <div className="tech-border p-6 bg-slate-900/30 rounded-xl lg:col-span-2">
              <h3 className="text-lg font-bold mb-3">Anti-Amplification Controls</h3>
              <p className="text-gray-400 text-sm">
                The transport rejects unauthenticated traffic that could be used for amplification attacks. Connection establishment requires proof of origin before resource commitment. This is implemented and enforced in all deployment modes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-6 md:mb-12">
            <h2 className="text-3xl font-bold font-display mb-2">
              Privacy & Observability Boundaries
            </h2>
            <StatusBadge status="available" />
          </div>
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center max-w-5xl mx-auto">
            <div>
              <ul className="space-y-4">
                {[
                  { label: 'Packet-level privacy', detail: 'Header protection prevents metadata exposure at the wire level' },
                  { label: 'Per-stream PCS', detail: 'Post-compromise security operates per stream, limiting blast radius of any key compromise' },
                  { label: 'Post-quantum key establishment', detail: 'Hybrid key exchange using post-quantum algorithms protects sessions against future quantum decryption' },
                  { label: 'Metadata-only telemetry', detail: 'Operational observability uses metadata signals, not content inspection' },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">{item.label}</span>
                      <p className="text-sm text-gray-500 mt-0.5">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-900/50 rounded-2xl p-8 border border-white/5 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-32 bg-blue-500/5 rounded-full blur-[80px]" />
              <h3 className="text-xl font-bold font-display mb-8 opacity-80">Transport Controls</h3>
              <div className="space-y-4 relative z-10">
                {[
                  { label: 'Transport', value: 'UDP, custom session model' },
                  { label: 'Sessions', value: 'Stream-multiplexed' },
                  { label: 'Replay', value: 'Rejected at protocol level' },
                  { label: 'Privacy', value: 'Packet header protection' },
                  { label: 'PCS', value: 'Per-stream, implemented' },
                  { label: 'PQ Key Exchange', value: 'X25519 + ML-KEM-768 hybrid' },
                ].map((spec) => (
                  <div key={spec.label} className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-gray-400 text-sm">{spec.label}</span>
                    <span className="font-mono text-sm text-blue-400">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 border-t border-white/5 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-6 md:mb-12">
            <h2 className="text-3xl font-bold font-display mb-2">
              Trust & Policy Enforcement
            </h2>
            <StatusBadge status="available" />
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              'Signed policy distribution from control plane to gateway',
              'Trust-anchor rotation and revocation without service interruption',
              'Gateway-level enforcement of signed policy artifacts',
              'Device enrollment binding with trust chain verification',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 rounded-lg bg-slate-900/30 tech-border">
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 border-t border-white/5 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              viewport={{ once: true }}
              className="tech-border p-7 rounded-xl bg-slate-900/20"
            >
              <h3 className="text-xl font-bold font-display mb-4">
                Noise-Inspired, <span className="text-gradient">But Broader</span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                AegisWire draws on modern authenticated-session design principles but is not a Noise implementation. It extends that foundation into multi-stream transport governance, mobility-aware session behavior, signed policy continuity, and a complete operational trust architecture.
              </p>
              <p className="text-gray-500 text-sm">
                Not a protocol wrapper. A purpose-built platform with its own session model, wire discipline, and operational trust story.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              viewport={{ once: true }}
              className="tech-border p-7 rounded-xl bg-slate-900/20"
            >
              <h3 className="text-xl font-bold font-display mb-4">
                Why Packet-0 <span className="text-gradient">Privacy Matters</span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Payload encryption alone does not solve the whole problem. Early-session privacy matters because exposure during setup and routing happens before a session is fully established — before higher-level controls can compensate.
              </p>
              <p className="text-gray-500 text-sm">
                AegisWire treats metadata during connection setup as part of the security problem, not an afterthought.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              viewport={{ once: true }}
              className="tech-border p-7 rounded-xl bg-slate-900/20"
            >
              <h3 className="text-xl font-bold font-display mb-4">
                Why PQ + PCS <span className="text-gradient">Together</span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Most transport stories mention post-quantum algorithms or session resilience in isolation. PQ transition readiness addresses future decryption of today's traffic. PCS addresses security posture after a key compromise within a running session.
              </p>
              <p className="text-gray-500 text-sm">
                AegisWire positions both as part of one coherent long-horizon security architecture — not separate feature checkboxes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold font-display mb-2">
                Security Properties <span className="text-gradient">in Operation</span>
              </h2>
              <p className="text-gray-400 text-sm">All of the following are implemented and enforced across all deployment modes.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { property: 'Hybrid Post-Quantum Key Exchange', detail: 'X25519 + ML-KEM-768 construction. Both classical and post-quantum threat models addressed simultaneously at session establishment.' },
                { property: 'Per-Stream Post-Compromise Security', detail: 'Session keys ratchet automatically per stream. A compromised key limits exposure to material derived before the compromise.' },
                { property: 'Anti-Replay Protection', detail: 'Sequence-windowed rejection at the protocol level. Duplicate and out-of-window packets are discarded without processing.' },
                { property: 'Anti-Amplification Controls', detail: 'Proof-of-origin required before resource commitment. Unauthenticated traffic is rejected before session state is allocated.' },
                { property: 'Deterministic Wire Behavior', detail: 'Predictable state transitions, bounded message sizes, strict validation rules. Identical behavior under audit review and in production.' },
                { property: 'Session Migration & Roaming', detail: 'Sessions survive network changes — mobile handoff, Wi-Fi/cellular transition — without reconnection or session teardown.' },
                { property: 'Packet-Level Metadata Privacy', detail: 'Header protection from the first packet. Metadata exposure during connection setup is treated as part of the security problem.' },
                { property: 'Privacy-Safe Observability', detail: 'Operational telemetry uses metadata signals only. No content inspection. No payload logging. This is the production default.' },
              ].map((item) => (
                <div key={item.property} className="tech-border p-5 rounded-xl bg-slate-900/20">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                    <h4 className="font-semibold text-sm text-white">{item.property}</h4>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed pl-6">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold font-display mb-6 text-center">
              Current Platform Status
            </h2>
            <div className="tech-border rounded-xl p-8 bg-slate-900/20">
              <p className="text-gray-400 mb-6">
                All transport, session, replay protection, privacy, PCS, post-quantum, trust, policy, and observability capabilities described on this page are implemented and operating in production deployments.
              </p>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-cyan-500/5 border border-cyan-500/20">
                <span className="w-4 h-4 rounded-full border border-cyan-500/50 bg-cyan-500/10 shrink-0 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                </span>
                <span className="text-sm text-gray-300">
                  <strong className="text-cyan-400">Roadmap:</strong> Hardware appliance for customer-controlled edge enforcement is the only transport-related delivery still on the roadmap.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 border-t border-white/5 bg-gradient-to-b from-transparent to-black/40">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold font-display mb-4">Review the Transport Architecture</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Request an architecture briefing. We walk through implemented controls, not slide decks.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
          >
            Book an Architecture Briefing <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
