'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import StatusBadge from '../components/StatusBadge'
import {
  Shield, Wifi, Monitor, Smartphone, Lock, RefreshCw, Eye, Globe,
  ArrowRight, CheckCircle2, Server, Key
} from 'lucide-react'

export default function EnterpriseVPNPage() {
  return (
    <>
      <PageHero
        badge="Enterprise VPN"
        title="Enterprise Private Connectivity,"
        highlight="In Production"
        description="AegisWire Enterprise VPN enforces policy-aware routing, signed trust chains, secure DNS, and device-lifecycle control across every endpoint and gateway. This is not a tunnel with a dashboard added on top. Every session is governed — signed configuration distribution, certificate-bound trust, OS-level enforcement, and roaming continuity operate together as one system."
        illustration="vpn"
      />

      <section className="py-10 md:py-20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Full & Split Tunnel',
                description: 'Route all traffic or specific destinations through the secure tunnel. Tunnel mode is policy-driven, not user-selected.',
              },
              {
                icon: Lock,
                title: 'Secure DNS Resolution',
                description: 'DNS queries resolve within the tunnel. Leak prevention is enforced at the OS level, not requested as a preference.',
              },
              {
                icon: Wifi,
                title: 'OS-Level Kill Switch',
                description: 'Network-level enforcement prevents traffic leakage on connection interruption. Kill switch operates at the OS network stack, not the application layer.',
              },
              {
                icon: Monitor,
                title: 'Device & User Enrollment',
                description: 'Enrollment binds device identity to user and policy relationships. Connectivity requires verified enrollment, not just valid credentials.',
              },
              {
                icon: Server,
                title: 'Gateway Pool Selection',
                description: 'Policy-aware gateway selection with regional pool publication, failover, and controlled draining. Gateway choice reflects policy, not latency alone.',
              },
              {
                icon: RefreshCw,
                title: 'Credential Lifecycle',
                description: 'Credential refresh, rotation, and revocation are managed platform operations. Revocation propagates through the trust chain, not just the directory.',
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
                  <div className="w-10 h-10 bg-blue-500/10 text-blue-500 flex items-center justify-center rounded-lg">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <StatusBadge status="available" />
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
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Architecture <span className="text-gradient">Depth</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Globe,
                title: 'Policy-Driven Client Routing',
                description: 'Routing decisions enforce published policy, not device-local heuristics. Split-tunnel destinations, DNS behavior, and gateway selection reflect administrative intent.',
              },
              {
                icon: Server,
                title: 'Gateway-Aware Session Management',
                description: 'Gateway pools, region selection, and control-plane publication align connectivity choices with administrative boundaries. Not ad hoc endpoint sprawl.',
              },
              {
                icon: Key,
                title: 'Trust Chain in Client Operations',
                description: 'The client consumes signed artifacts, validates trust anchors, and enforces lifecycle-safe refresh behavior. Trust is verified, not assumed.',
              },
              {
                icon: Eye,
                title: 'Privacy-Safe Observability',
                description: 'Enterprise visibility uses metadata-only telemetry by default. No content inspection. No traffic logging. Privacy-safe operations are the production default.',
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
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold font-display mb-6">
                Fleet <span className="text-gradient">Operations</span>
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                Enterprise-scale client fleet management. Centralized policy, device lifecycle, credential management, and cross-platform deployment.
              </p>
              <ul className="space-y-3">
                {[
                  'Centralized policy distribution to all clients',
                  'Device posture enforcement at enrollment and runtime',
                  'Automated credential rotation and revocation',
                  'Fleet-wide configuration updates',
                  'Cross-platform client support',
                  'Headless deployment for servers and containers',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Monitor, label: 'Desktop', desc: 'Windows, macOS, Linux' },
                { icon: Smartphone, label: 'Mobile', desc: 'iOS and Android' },
                { icon: Server, label: 'Headless', desc: 'Servers and containers' },
                { icon: Shield, label: 'Managed', desc: 'MDM and fleet tools' },
              ].map((platform) => (
                <div key={platform.label} className="tech-border p-5 rounded-xl bg-slate-900/30 text-center">
                  <platform.icon className="w-8 h-8 text-blue-500/70 mx-auto mb-2" />
                  <h4 className="font-bold text-sm mb-1">{platform.label}</h4>
                  <p className="text-xs text-gray-500">{platform.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold font-display mb-5">
                Not Legacy Remote Access <span className="text-gradient">With a Fresh UI</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-5">
                Legacy VPN products center on tunnel creation first and explain trust, policy, telemetry, and update governance later — often as separate add-on products. AegisWire operates in the opposite direction.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Enterprise VPN strength inherits from a transport-first design, a signed-control model, and a deployment-aware operational posture. For technical buyers, the value is not just that users connect — it is that connectivity can be governed, reviewed, updated, and justified cleanly in high-scrutiny environments.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Shield, label: 'Trust established at session start', detail: 'Not assumed post-connection' },
                { icon: Server, label: 'Signed gateway publication', detail: 'Not ad hoc endpoint selection' },
                { icon: Globe, label: 'Policy-driven routing posture', detail: 'Not device-local heuristics' },
                { icon: RefreshCw, label: 'Lifecycle-safe credential refresh', detail: 'Not manual rotation' },
                { icon: Eye, label: 'Privacy-safe telemetry default', detail: 'Not content inspection' },
                { icon: CheckCircle2, label: 'Evidence-backed release process', detail: 'Not just feature claims' },
              ].map((item) => (
                <div key={item.label} className="tech-border p-4 rounded-xl bg-slate-900/20">
                  <div className="w-7 h-7 rounded-lg bg-blue-500/10 flex items-center justify-center mb-2">
                    <item.icon className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <p className="text-white text-xs font-semibold mb-0.5">{item.label}</p>
                  <p className="text-gray-500 text-[11px]">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 border-t border-white/5 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-6 md:mb-12">
            <h2 className="text-3xl font-bold font-display mb-4">
              AegisWire vs. Legacy VPN
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: 'Legacy VPN',
                items: ['Broad network trust assumptions', 'Static configurations', 'Manual credential management', 'No policy enforcement at transport'],
                negative: true,
              },
              {
                title: 'AegisWire',
                items: ['Signed trust chains with lifecycle', 'Policy-driven enforcement at gateway', 'Automated credential lifecycle', 'Privacy-safe metadata-only telemetry'],
                negative: false,
              },
              {
                title: 'Result',
                items: ['Auditable trust posture', 'Reduced silent failures', 'Deployment flexibility', 'Evidence-backed operations'],
                negative: false,
                highlight: true,
              },
            ].map((col) => (
              <div
                key={col.title}
                className={`p-6 rounded-xl tech-border ${col.highlight ? 'bg-blue-500/5 border-blue-500/20' : 'bg-slate-900/30'}`}
              >
                <h4 className="font-bold mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${col.negative ? 'bg-red-500/50' : 'bg-green-500'}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 border-t border-white/5 bg-gradient-to-b from-transparent to-black/40">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold font-display mb-4">Replace Your Legacy VPN</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            See the production platform. We demonstrate implemented controls, not feature roadmaps.
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
