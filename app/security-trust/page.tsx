'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import StatusBadge from '../components/StatusBadge'
import {
  Shield, Lock, FileCheck, Eye, Key, RefreshCw,
  ArrowRight, CheckCircle2
} from 'lucide-react'

export default function SecurityTrustPage() {
  return (
    <>
      <PageHero
        badge="Security & Trust Center"
        title="Security Posture,"
        highlight="Not Security Theatre"
        description="AegisWire treats trust operations as production functionality, not a compliance checkbox. Every release is cryptographically signed. Every build is reproducible with public verification. Trust-anchor lifecycle management — issuance, rotation, revocation — is implemented and operating. Observability surfaces operational signals without exposing metadata about sessions, endpoints, or user behaviour. This page documents what exists and is operating, not what is planned."
        illustration="security"
      />

      <section className="py-10 md:py-20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              What Makes AegisWire <span className="text-gradient">Different</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Purpose-Built Transport',
                description: 'Not a VPN service layered on inherited protocol defaults. AegisWire runs its own secure transport with anti-replay, anti-amplification, and deterministic wire behavior.',
              },
              {
                icon: Key,
                title: 'Signed Trust Chains',
                description: 'Policy artifacts are signed from publication through enforcement. Trust anchors have managed lifecycle with rotation and revocation. Not dashboard-only governance.',
              },
              {
                icon: Eye,
                title: 'Privacy-Safe by Default',
                description: 'Observability uses metadata-only telemetry. Packet-level privacy protects headers. This is the default operating mode, not an optional add-on.',
              },
              {
                icon: FileCheck,
                title: 'Reproducible & Auditable',
                description: 'Reproducible builds, SBOM generation, signed releases, and release manifest workflows operate in the current build pipeline.',
              },
              {
                icon: RefreshCw,
                title: 'Deployment Choice',
                description: 'Managed SaaS, dedicated single-tenant, self-hosted sovereign, and regional gateway fabric all run the same trust architecture. Control boundaries differ. Trust integrity does not.',
              },
              {
                icon: Lock,
                title: 'Operational Integrity',
                description: 'Signed update paths, trust-anchor lifecycle, and audit-ready evidence packaging are production platform features, not afterthought processes.',
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
            <h2 className="text-3xl font-bold font-display mb-4">
              Engineering <span className="text-gradient">Discipline</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Trust claims require engineering evidence. These practices are implemented in the current platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'Signed Releases', description: 'Every release artifact is cryptographically signed. Signature verification is part of the update path.' },
              { title: 'SBOM Generation', description: 'Software bill of materials is generated for each release. Dependency tracking is part of the build pipeline.' },
              { title: 'Reproducible Builds', description: 'Build process produces identical outputs from identical inputs. Third-party verification is structurally supported.' },
              { title: 'Trust-Anchor Lifecycle', description: 'Trust anchors have managed creation, rotation, and revocation. Lifecycle operations do not require service interruption.' },
              { title: 'Signed Policy Distribution', description: 'Policy artifacts carry signatures from control plane through gateway enforcement. Unsigned policy is rejected.' },
              { title: 'Secure Update Discipline', description: 'Updates follow signed distribution paths. Rollback and version pinning are operationally supported.' },
            ].map((item) => (
              <div key={item.title} className="tech-border p-6 rounded-xl bg-slate-900/30">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-bold">{item.title}</h4>
                  <StatusBadge status="available" />
                </div>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-6 md:mb-12">
            <h2 className="text-3xl font-bold font-display mb-4">
              How We Communicate <span className="text-gradient">Maturity</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              AegisWire distinguishes clearly between what is implemented, what is in rollout, and what remains on the roadmap. We do not list aspirational features as current capabilities.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="tech-border rounded-xl p-6 bg-slate-900/30">
              <div className="mb-4"><StatusBadge status="available" /></div>
              <h3 className="text-lg font-bold mb-3">Implemented Now</h3>
              <ul className="space-y-2">
                {[
                  'Secure transport with custom session model',
                  'Anti-replay and anti-amplification',
                  'Stream multiplexing with per-stream PCS',
                  'Post-quantum hybrid key establishment',
                  'Packet-level privacy and header protection',
                  'Signed policy and trust-anchor lifecycle',
                  'Privacy-safe metadata-only telemetry',
                  'Reproducible builds and SBOM generation',
                  'Managed, dedicated, and self-hosted deployment',
                  'Enterprise admin with role-based access',
                  'Gateway pool selection with failover',
                  'Full and split tunnel VPN with kill switch',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="tech-border rounded-xl p-6 bg-slate-900/30">
              <div className="mb-4"><StatusBadge status="rollout" /></div>
              <h3 className="text-lg font-bold mb-3">In Rollout</h3>
              <ul className="space-y-2">
                {[
                  'Advanced multipath transport posture',
                  'Camouflage and cover-traffic profiles',
                  'Extended authentication families',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="w-4 h-4 rounded-full border border-amber-500/50 bg-amber-500/10 shrink-0 flex items-center justify-center mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-500 mt-4">
                These capabilities are implemented and undergoing controlled rollout across deployment environments.
              </p>
            </div>

            <div className="tech-border rounded-xl p-6 bg-slate-900/30">
              <div className="mb-4"><StatusBadge status="roadmap" /></div>
              <h3 className="text-lg font-bold mb-3">Roadmap</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="w-4 h-4 rounded-full border border-cyan-500/50 bg-cyan-500/10 shrink-0 flex items-center justify-center mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  </span>
                  Hardware appliance for customer-controlled edge enforcement
                </li>
              </ul>
              <p className="text-xs text-gray-500 mt-4">
                Hardware appliance is the only platform delivery item remaining on the roadmap. All other capabilities listed on this site are implemented and in production.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 border-t border-white/5 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-6 md:mb-12">
            <h2 className="text-3xl font-bold font-display mb-4">
              Audit & Compliance <span className="text-gradient">Readiness</span>
            </h2>
            <p className="text-gray-400 text-lg">
              The goal is reducing friction between engineering reality and audit expectations. AegisWire produces evidence as part of normal operations, not as a separate compliance exercise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                label: 'Runtime platform controls',
                items: [
                  'Signed policy enforced at the gateway — unsigned artifacts are rejected',
                  'Trust-anchor rotation operates without service interruption',
                  'Packet-level privacy active at connection setup, not only after session establishment',
                  'Metadata-only telemetry: no content inspection in operational defaults',
                ],
              },
              {
                label: 'Governance and evidence workflows',
                items: [
                  'Signed releases with cryptographic artifact verification paths',
                  'SBOM generated per release and tracked through the build pipeline',
                  'Reproducible builds: identical inputs produce identical outputs, third-party verifiable',
                  'Structured evidence packaging for internal audit and security review cycles',
                ],
              },
            ].map((group) => (
              <div key={group.label} className="tech-border rounded-xl p-6 bg-slate-900/30">
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-4">{group.label}</h4>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6 md:mb-12">
              <h2 className="text-3xl font-bold font-display mb-4">
                What Security Evaluators <span className="text-gradient">Can Review</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                The following documentation and evidence is available to technical buyers, security teams, and procurement evaluators on request. We do not claim materials we cannot produce.
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  category: 'Transport & Protocol',
                  items: [
                    'Transport specification and protocol-level state machine documentation',
                    'Session model, wire behavior, and state transition descriptions',
                    'Handshake construction and key establishment details (X25519 + ML-KEM-768)',
                  ],
                },
                {
                  category: 'Cryptographic Controls',
                  items: [
                    'Hybrid post-quantum key establishment construction and rationale',
                    'Per-stream PCS ratchet model and key lifecycle behavior',
                    'Packet-level privacy and header protection design',
                  ],
                },
                {
                  category: 'Release & Build Integrity',
                  items: [
                    'Signed release artifacts with cryptographic verification paths',
                    'SBOM output per release with dependency tracking',
                    'Reproducible build process documentation and third-party verification approach',
                  ],
                },
                {
                  category: 'Policy & Trust Architecture',
                  items: [
                    'Signed policy pipeline from control plane through gateway enforcement',
                    'Trust-anchor lifecycle model: issuance, rotation, and revocation',
                    'Device enrollment binding and trust chain verification flows',
                  ],
                },
                {
                  category: 'Deployment Architecture',
                  items: [
                    'Deployment model specifications for all four delivery modes',
                    'Isolation and control boundary documentation per deployment type',
                    'Self-hosted and sovereign deployment architecture details',
                  ],
                },
                {
                  category: 'Maturity & Status Mapping',
                  items: [
                    'Explicit control mapping of implemented vs in-rollout vs roadmap items',
                    'No feature conflation between implemented and aspirational capabilities',
                    'Hardware appliance roadmap rationale and architectural readiness state',
                  ],
                },
              ].map((group) => (
                <div key={group.category} className="tech-border rounded-xl bg-slate-900/20 overflow-hidden">
                  <div className="px-5 py-3 border-b border-white/5 bg-slate-900/40">
                    <span className="text-xs font-mono uppercase tracking-wider text-blue-400">{group.category}</span>
                  </div>
                  <ul className="px-5 py-4 space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-green-500/70 mt-0.5 shrink-0" />
                        <span className="text-sm text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 border-t border-white/5 bg-gradient-to-b from-transparent to-black/40">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold font-display mb-4">Review Our Security Posture</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Request access to security documentation or schedule an architecture review. We discuss implemented controls, not marketing narratives.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
          >
            Request Security Review <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
