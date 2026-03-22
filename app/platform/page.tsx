'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import StatusBadge from '../components/StatusBadge'
import {
  Shield, Server, Layers, Lock, Globe, Users,
  ArrowRight, CheckCircle2
} from 'lucide-react'

export default function PlatformPage() {
  return (
    <>
      <PageHero
        badge="Platform Overview"
        title="The AegisWire Platform,"
        highlight="End to End"
        description="A production secure transport and enterprise VPN platform. Transport core, VPN services, control plane, gateway fabric, and trust layer operate as integrated systems, not bolted-on features. Security outcomes weaken at the boundaries between layers — AegisWire keeps transport, policy, trust, and operations aligned in one architecture. Six components share a single trust model, signed configuration surface, and privacy-safe observability layer."
        illustration="platform"
      />

      <section className="py-10 md:py-20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold font-display mb-6">
                Transport <span className="text-gradient">Core</span>
              </h2>
              <p className="text-gray-400 text-lg mb-6">
                AegisWire runs a purpose-built secure transport with anti-replay protection, deterministic wire discipline, stream multiplexing, roaming continuity, packet-level privacy, and post-quantum key establishment. Not a wrapper around existing protocols.
              </p>
              <Link
                href="/secure-transport"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                Transport architecture details <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold font-display mb-6">
                Policy & <span className="text-gradient">Enforcement</span>
              </h2>
              <p className="text-gray-400 text-lg mb-6">
                Signed policy distribution from control plane to gateway. Trust-anchor lifecycle with rotation and revocation. Device enrollment binding. Default-deny enforcement posture. All implemented and enforced in production.
              </p>
              <Link
                href="/enterprise-vpn"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                Enterprise VPN details <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 border-t border-white/5 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Platform Components
            </h2>
            <p className="text-gray-400">All components below are implemented and in production.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Secure Transport',
                badge: 'available' as const,
                points: [
                  'UDP-based transport with custom session model',
                  'Stream multiplexing with per-stream PCS',
                  'Roaming and session migration',
                  'Anti-replay and anti-amplification',
                  'Deterministic wire discipline',
                  'Post-quantum hybrid key establishment',
                ],
              },
              {
                icon: Globe,
                title: 'Enterprise VPN',
                badge: 'available' as const,
                points: [
                  'Full and split tunnel with secure DNS',
                  'OS-level kill switch enforcement',
                  'Policy-driven routing decisions',
                  'User and device enrollment binding',
                  'Managed credential refresh and revocation',
                  'Desktop, mobile, and headless clients',
                ],
              },
              {
                icon: Layers,
                title: 'Control Plane',
                badge: 'available' as const,
                points: [
                  'Tenant, user, and device lifecycle',
                  'Signed policy publication and distribution',
                  'Trust-anchor lifecycle management',
                  'Gateway directory and pool publication',
                  'Role-aware administrative workflows',
                  'Multi-tenant operations',
                ],
              },
              {
                icon: Server,
                title: 'Gateway Fabric',
                badge: 'available' as const,
                points: [
                  'Regional gateway pool architecture',
                  'Policy-aware gateway selection',
                  'Connection-affinity routing',
                  'Privacy-safe metadata-only observability',
                  'Controlled draining and failover',
                  'Capacity-aware scaling',
                ],
              },
              {
                icon: Lock,
                title: 'Trust & Evidence',
                badge: 'available' as const,
                points: [
                  'Signed policy and posture artifacts',
                  'Trust-anchor rotation and revocation',
                  'Reproducible builds',
                  'SBOM generation and release manifests',
                  'Audit-ready evidence packaging',
                  'Signed release distribution',
                ],
              },
              {
                icon: Users,
                title: 'Administration',
                badge: 'available' as const,
                points: [
                  'Enterprise admin console',
                  'Role-based access control',
                  'Multi-tenant operations',
                  'Privacy-safe audit logging',
                  'Deployment-aware controls',
                  'Fleet lifecycle management',
                ],
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
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-500/10 text-blue-500 flex items-center justify-center rounded-lg">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <StatusBadge status={item.badge} />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <ul className="space-y-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-gray-400">
                      <CheckCircle2 className="w-4 h-4 text-green-500/60 mt-0.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 border-t border-white/5 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto mb-6 md:mb-12">
            <h2 className="text-3xl font-bold font-display mb-4">
              Why This Architecture <span className="text-gradient">Is Unusual</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Most products combine a tunnel, an admin console, and some policy logic. AegisWire is shaped so those pieces reinforce each other rather than operating as loosely connected subsystems.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Trust failures typically appear at the boundaries: between enrollment and connection, between policy and gateway action, between release operations and runtime trust, and between architecture claims and operational evidence. AegisWire keeps those boundaries explicit, signed, and governed — not left as integration problems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: 'Session ↔ Trust Boundary',
                description: 'Session establishment and trust chain verification happen together. Connectivity does not precede trust validation.',
              },
              {
                title: 'Policy ↔ Gateway Alignment',
                description: 'Gateway selection and enforcement reflect published control-plane policy at runtime — not stale config or client-local state.',
              },
              {
                title: 'Release ↔ Runtime Integrity',
                description: 'Signed release workflows, SBOM, and reproducible builds mean the thing that runs can be compared against the thing that was reviewed.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0 }}
                viewport={{ once: true }}
                className="tech-border p-6 rounded-xl bg-slate-900/20"
              >
                <h3 className="font-mono text-blue-400 text-sm mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-6 md:mb-12">
            <h2 className="text-3xl font-bold font-display mb-4">
              Platform <span className="text-gradient">Outcomes</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              'No hidden trust transitions between layers',
              'Policy integrity from publication through enforcement',
              'Audit and architecture review supported by evidence',
              'Regulated operating models supported by deployment choice',
              'Governance maintained across all deployment modes',
              'Concrete modernization path for legacy VPN replacement',
            ].map((outcome) => (
              <div key={outcome} className="flex items-center gap-3 p-4 rounded-lg bg-slate-900/20 tech-border">
                <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                <span className="text-gray-300">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 border-t border-white/5 bg-gradient-to-b from-transparent to-black/40">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold font-display mb-4">See the Platform in Operation</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Request an architecture briefing. We demonstrate the live platform, not concept diagrams.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
          >
            Request a Demo <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
