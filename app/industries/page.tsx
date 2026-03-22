'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import {
  Building2, Heart, Landmark, Shield, Factory, Briefcase,
  ArrowRight, CheckCircle2
} from 'lucide-react'

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        badge="Industries"
        title="Built for Environments Where"
        highlight="Controls Are Non-Negotiable"
        description="AegisWire operates in regulated, security-sensitive, and operationally demanding environments where transport controls, audit trails, and trust architecture are requirements — not features. Financial services, healthcare, government, defense, critical infrastructure, and global enterprise deployments all require concrete enforcement, not marketing claims about enterprise readiness. AegisWire runs in these environments today."
        illustration="industries"
      />

      <section className="py-10 md:py-20 border-t border-white/5">
        <div className="container mx-auto px-6 space-y-16">
          {[
            {
              icon: Building2,
              title: 'Financial Services',
              description: 'Access governance, audit evidence, and policy integrity for organizations under continuous regulatory scrutiny.',
              reasons: [
                'Signed policy enforcement for access governance',
                'Audit-ready evidence from normal operations',
                'Privacy-safe telemetry that satisfies data handling requirements',
                'Dedicated or self-hosted deployment for isolation needs',
                'Trust-anchor lifecycle with managed rotation',
              ],
              technical: [
                'Policy integrity verified from publication to gateway enforcement',
                'Reproducible builds and SBOM for supply chain review',
                'Metadata-only observability without content inspection',
                'Controlled deployment with custom update schedules',
                'Architecture supports security-review-heavy procurement',
              ],
            },
            {
              icon: Heart,
              title: 'Healthcare & Life Sciences',
              description: 'Privacy-safe connectivity for distributed clinical, research, and business access environments.',
              reasons: [
                'Privacy-safe observability with metadata-only telemetry',
                'Device enrollment binding for clinical and research endpoints',
                'Secure DNS resolution within the tunnel',
                'Self-hosted deployment for data residency requirements',
                'Kill switch enforcement preventing traffic leakage',
              ],
              technical: [
                'No content inspection in default operating mode',
                'Deterministic transport behavior for regulated environments',
                'Signed trust chains for vendor and partner access',
                'Self-hosted option for sovereignty and residency',
                'Evidence packaging for compliance review',
              ],
            },
            {
              icon: Landmark,
              title: 'Government & Public Sector',
              description: 'Sovereign deployment, verifiable trust posture, and hardened transport for public sector and government-adjacent organizations.',
              reasons: [
                'Self-hosted and sovereign deployment options',
                'Post-quantum hybrid key establishment',
                'Signed policy and trust-anchor lifecycle',
                'Anti-replay and anti-amplification at protocol level',
                'Reproducible builds with SBOM generation',
              ],
              technical: [
                'Sovereign deployment with full infrastructure control',
                'Trust-anchor lifecycle with rotation and revocation',
                'Deterministic wire discipline for review and audit',
                'Multi-region deployment with regional gateway pools',
                'Architecture supports high-assurance procurement',
              ],
            },
            {
              icon: Shield,
              title: 'Defense-Adjacent & Mission-Critical',
              description: 'Hardened transport, operational evidence, and hardware appliance on the roadmap for customer-controlled edge enforcement.',
              reasons: [
                'Purpose-built transport with anti-replay protection',
                'Per-stream post-compromise security',
                'Packet-level privacy with header protection',
                'Signed artifact governance and release discipline',
                'Hardware appliance for edge enforcement — roadmap item',
              ],
              technical: [
                'Roaming session continuity in hostile network conditions',
                'Deterministic protocol behavior under stress',
                'Trust chain verification from enrollment through enforcement',
                'Evidence-backed operational controls',
                'Self-hosted deployment for isolated environments',
              ],
            },
            {
              icon: Factory,
              title: 'Critical Infrastructure & Industrial',
              description: 'Controlled access boundaries, self-hosted deployment, and policy-driven enforcement for operational technology environments.',
              reasons: [
                'Self-hosted deployment for air-gapped environments',
                'Policy-driven access with default-deny posture',
                'Gateway-level enforcement boundaries',
                'Hardware appliance for air-gapped edge sites — roadmap item',
                'Signed update paths with version control',
              ],
              technical: [
                'Controlled routing and segmented access enforcement',
                'Compatible with restricted and isolated networks',
                'Signed policy distribution without internet dependency',
                'Trust-anchor lifecycle managed locally',
                'Deterministic transport suitable for safety-critical proximity',
              ],
            },
            {
              icon: Briefcase,
              title: 'Global Enterprises',
              description: 'Regional gateway fabric, centralized governance, and deployment flexibility across multi-region, multi-cloud environments.',
              reasons: [
                'Regional gateway pools with policy-aware selection',
                'Centralized policy publication with local enforcement',
                'Multiple deployment models per business unit or region',
                'Privacy-safe observability across jurisdictions',
                'Fleet management for distributed workforces',
              ],
              technical: [
                'Regional pool publication with explicit capabilities',
                'Consistent policy enforcement across deployment models',
                'Centralized admin with deployment-aware controls',
                'Cross-platform client support for global workforce',
                'Capacity-aware scaling by region',
              ],
            },
          ].map((industry) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              viewport={{ once: true }}
              className="tech-border rounded-2xl p-8 md:p-10 bg-slate-900/20"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-500/10 text-blue-500 flex items-center justify-center rounded-lg">
                      <industry.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold font-display">{industry.title}</h3>
                  </div>
                  <p className="text-gray-400">{industry.description}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">Implemented Controls</h4>
                  <ul className="space-y-2">
                    {industry.reasons.map((reason) => (
                      <li key={reason} className="flex items-start gap-2 text-sm text-gray-400">
                        <CheckCircle2 className="w-4 h-4 text-green-500/60 mt-0.5 shrink-0" />
                        {reason}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">Architecture Fit</h4>
                  <ul className="space-y-2">
                    {industry.technical.map((theme) => (
                      <li key={theme} className="flex items-start gap-2 text-sm text-gray-400">
                        <CheckCircle2 className="w-4 h-4 text-blue-500/60 mt-0.5 shrink-0" />
                        {theme}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-10 md:py-20 border-t border-white/5 bg-gradient-to-b from-transparent to-black/40">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold font-display mb-4">See How AegisWire Fits Your Environment</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Request an architecture briefing focused on your industry's specific control and deployment requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
          >
            Contact Sales <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
