'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import StatusBadge from '../components/StatusBadge'
import {
  Cloud, Server, Building, Globe, HardDrive,
  ArrowRight, CheckCircle2
} from 'lucide-react'

export default function DeploymentsPage() {
  return (
    <>
      <PageHero
        badge="Deployment Models"
        title="Four Deployment Models,"
        highlight="One Trust Architecture"
        description="Managed SaaS, dedicated single-tenant, self-hosted, and regional gateway deployments all run the same signed policy, trust-anchor lifecycle, and privacy-safe observability. Where you run AegisWire determines control boundaries — not the security model. The trust architecture, signed artifact pipeline, and policy enforcement operate identically regardless of deployment type. Hardware appliance is the only item on the roadmap."
        illustration="deployments"
      />

      <section className="py-10 md:py-20 border-t border-white/5">
        <div className="container mx-auto px-6 space-y-12">
          {[
            {
              icon: Cloud,
              title: 'Managed SaaS',
              badge: 'available' as const,
              description: 'AegisWire-operated control plane with managed infrastructure, signed policy workflows, and governed update paths.',
              copy: 'Fastest adoption path. AegisWire manages infrastructure, operations, and updates. Your team retains policy publication control, trust-anchor ownership, and administrative governance.',
              points: [
                'AegisWire-managed infrastructure and operations',
                'Signed policy workflows under tenant administrative control',
                'Governed update paths with rollback support',
                'Privacy-safe observability with metadata-only telemetry',
                'Gateway pool selection with regional publication',
                'Enterprise admin console with role-based access',
              ],
            },
            {
              icon: Server,
              title: 'Dedicated Single-Tenant',
              badge: 'available' as const,
              description: 'Isolated infrastructure per customer with dedicated trust boundaries, custom update schedules, and tenant-specific operational controls.',
              copy: 'Stronger isolation for organizations requiring dedicated environments. Same trust architecture. Separate infrastructure boundary. Custom rollout and update timing.',
              points: [
                'Dedicated infrastructure per customer',
                'Isolated trust boundaries and key material',
                'Custom update and rollout schedules',
                'Tenant-specific operational monitoring',
                'Same signed policy and trust-anchor lifecycle',
                'Tailored scaling per customer requirements',
              ],
            },
            {
              icon: Building,
              title: 'Self-Hosted / Sovereign',
              badge: 'available' as const,
              description: 'Customer-controlled infrastructure with full administrative ownership. Same trust architecture, deployed in your environment.',
              copy: 'Full infrastructure control for regulated, sovereignty-sensitive, or operationally isolated environments. AegisWire\'s policy, trust, and evidence model operates on customer-owned infrastructure.',
              points: [
                'Full infrastructure control and administrative ownership',
                'Data residency and jurisdictional alignment',
                'Customer-managed update governance',
                'Same signed policy and trust-anchor lifecycle',
                'Compatible with air-gapped and restricted networks',
                'On-premises or private cloud deployment',
              ],
            },
            {
              icon: Globe,
              title: 'Regional Gateway Fabric',
              badge: 'available' as const,
              description: 'Regional gateway pools with policy-aware publication, controlled draining, failover, and capacity-aware scaling.',
              copy: 'Gateway pools publish capabilities by region. Selection reflects policy and administrative intent, not only latency. Draining and failover operate as governed lifecycle operations.',
              points: [
                'Regional pool publication with explicit capabilities',
                'Policy-aware gateway selection',
                'Controlled draining without session disruption',
                'Capacity-aware scaling per region',
                'Failover with administrative visibility',
                'Consistent behavior across all deployment models',
              ],
            },
            {
              icon: HardDrive,
              title: 'Hardware Appliance',
              badge: 'roadmap' as const,
              description: 'Customer-controlled edge enforcement hardware. The platform architecture supports this delivery model. Hardware appliance is not yet available.',
              copy: 'Hardware appliance is the only platform delivery item still on the roadmap. The AegisWire trust model, policy architecture, and deployment patterns are built to extend into a hardware-controlled edge. All other delivery models ship now.',
              points: [
                'Customer-controlled edge presence',
                'Local enforcement and routing',
                'Same trust model as cloud deployment',
                'Branch, field, and enclave use cases',
                'Aligned with self-hosted operational model',
                'Architecture-ready, not yet shipping',
              ],
            },
          ].map((model) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              viewport={{ once: true }}
              className="tech-border rounded-2xl p-8 md:p-10 bg-slate-900/20"
            >
              <div className="grid lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-500/10 text-blue-500 flex items-center justify-center rounded-lg">
                      <model.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold font-display">{model.title}</h3>
                      <div className="mt-1"><StatusBadge status={model.badge} /></div>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4">{model.description}</p>
                  <p className="text-gray-300 text-sm">{model.copy}</p>
                </div>
                <div className="lg:col-span-2">
                  <ul className="space-y-2">
                    {model.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-gray-400">
                        <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${model.badge === 'roadmap' ? 'text-cyan-500/60' : 'text-green-500/60'}`} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-10 md:py-20 border-t border-white/5 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold font-display mb-6 text-center">
              Isolation & Control Boundaries
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Boundary</th>
                    <th className="text-center py-3 px-4 text-gray-400 font-medium">Managed</th>
                    <th className="text-center py-3 px-4 text-gray-400 font-medium">Dedicated</th>
                    <th className="text-center py-3 px-4 text-gray-400 font-medium">Self-Hosted</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  {[
                    { label: 'Infrastructure ownership', managed: 'AegisWire', dedicated: 'AegisWire', self: 'Customer' },
                    { label: 'Tenant isolation', managed: 'Logical', dedicated: 'Physical', self: 'Physical' },
                    { label: 'Policy control', managed: 'Customer', dedicated: 'Customer', self: 'Customer' },
                    { label: 'Trust-anchor ownership', managed: 'Customer', dedicated: 'Customer', self: 'Customer' },
                    { label: 'Update governance', managed: 'Managed', dedicated: 'Custom schedule', self: 'Customer' },
                    { label: 'Data residency', managed: 'Region-selected', dedicated: 'Region-selected', self: 'Customer-controlled' },
                  ].map((row) => (
                    <tr key={row.label} className="border-b border-white/5">
                      <td className="py-3 px-4 text-gray-400">{row.label}</td>
                      <td className="py-3 px-4 text-center">{row.managed}</td>
                      <td className="py-3 px-4 text-center">{row.dedicated}</td>
                      <td className="py-3 px-4 text-center">{row.self}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 border-t border-white/5 bg-gradient-to-b from-transparent to-black/40">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold font-display mb-4">Find the Right Deployment Model</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Talk to our team about which deployment posture matches your control, residency, and isolation requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
          >
            Talk to the AegisWire Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
