'use client'

import { motion } from 'framer-motion'
import { Shield, Layers, Globe, Lock, Cpu, Radio, Server, Building2, Landmark, HeartPulse, Factory, Fingerprint, FileCheck, Package, Key, Network, Wifi, Eye, RefreshCw, Mail, Users, CheckCircle2 } from 'lucide-react'

type Variant = 'platform' | 'vpn' | 'transport' | 'deployments' | 'industries' | 'security' | 'contact'

const cardBase = "rounded-xl border border-white/[0.08] bg-white/[0.03] h-full flex flex-col"

function PlatformIllustration() {
  return (
    <div className={`${cardBase} p-8 gap-6`}>
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
          <Layers className="w-7 h-7 text-blue-400" />
        </div>
        <div>
          <div className="text-white text-lg font-semibold">6 Integrated Components</div>
          <div className="text-gray-500 text-sm">Single Trust Architecture</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {[
          { val: 'Transport', sub: 'Core Layer' },
          { val: 'Control', sub: 'Plane' },
          { val: 'Gateway', sub: 'Fabric' },
          { val: 'VPN', sub: 'Services' },
          { val: 'Trust', sub: 'Operations' },
          { val: 'Admin', sub: 'Interface' },
        ].map((m) => (
          <div key={m.val} className="rounded-lg bg-white/[0.04] border border-white/[0.06] p-3 text-center">
            <div className="text-blue-400 text-sm font-semibold">{m.val}</div>
            <div className="text-gray-500 text-xs mt-0.5">{m.sub}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2 flex-1">
        {[
          { icon: Shield, label: 'Post-Quantum Key Exchange', color: 'text-blue-400 bg-blue-500/10 border-blue-500/20' },
          { icon: Lock, label: 'Cryptographically Signed Policy', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
          { icon: Fingerprint, label: 'Trust-Anchor Lifecycle Management', color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20' },
          { icon: Eye, label: 'Privacy-Safe Operational Telemetry', color: 'text-violet-400 bg-violet-500/10 border-violet-500/20' },
        ].map((f) => (
          <div key={f.label} className={`flex items-center gap-3 rounded-lg border px-4 py-3 ${f.color}`}>
            <f.icon className="w-4 h-4 shrink-0" />
            <span className="text-sm font-medium">{f.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function VpnIllustration() {
  return (
    <div className={`${cardBase} p-8 gap-6`}>
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
          <Globe className="w-7 h-7 text-blue-400" />
        </div>
        <div>
          <div className="text-white text-lg font-semibold">Enterprise VPN</div>
          <div className="text-gray-500 text-sm">Governed Connectivity Platform</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {[
          { val: 'Policy', sub: 'Aware Routing' },
          { val: 'Secure', sub: 'DNS' },
          { val: 'Device', sub: 'Lifecycle' },
        ].map((m) => (
          <div key={m.val} className="rounded-lg bg-white/[0.04] border border-white/[0.06] p-3 text-center">
            <div className="text-blue-400 text-sm font-semibold">{m.val}</div>
            <div className="text-gray-500 text-xs mt-0.5">{m.sub}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2 flex-1">
        {[
          { icon: Lock, label: 'Signed Trust Chains for Every Session' },
          { icon: Shield, label: 'OS-Level Certificate Enforcement' },
          { icon: Network, label: 'Split-Tunnel with Policy Continuity' },
          { icon: Key, label: 'Signed VPN Configuration Distribution' },
          { icon: Wifi, label: 'Roaming Session Continuity' },
        ].map((f) => (
          <div key={f.label} className="flex items-center gap-3 rounded-lg bg-white/[0.04] border border-white/[0.06] px-4 py-3">
            <f.icon className="w-4 h-4 text-blue-400 shrink-0" />
            <span className="text-sm text-gray-300">{f.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function TransportIllustration() {
  return (
    <div className={`${cardBase} p-8 gap-6`}>
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
          <Shield className="w-7 h-7 text-blue-400" />
        </div>
        <div>
          <div className="text-white text-lg font-semibold">X25519 + ML-KEM-768</div>
          <div className="text-gray-500 text-sm">Hybrid Post-Quantum Key Exchange</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {[
          { val: '>8 Gbps', sub: 'Throughput' },
          { val: '<1 RTT', sub: 'Session Start' },
          { val: 'Rust', sub: 'Memory-Safe' },
        ].map((m) => (
          <div key={m.val} className="rounded-lg bg-white/[0.04] border border-white/[0.06] p-3 text-center">
            <div className="text-blue-400 text-sm font-bold">{m.val}</div>
            <div className="text-gray-500 text-xs mt-0.5">{m.sub}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2 flex-1">
        {[
          { icon: Shield, label: 'Anti-Replay Protection' },
          { icon: Lock, label: 'Post-Compromise Security (PCS)' },
          { icon: Radio, label: 'Zero-Copy Kernel I/O' },
          { icon: Network, label: 'Stream Multiplexing' },
          { icon: Cpu, label: 'Packet-Level Metadata Privacy' },
        ].map((f) => (
          <div key={f.label} className="flex items-center gap-3 rounded-lg bg-white/[0.04] border border-white/[0.06] px-4 py-3">
            <f.icon className="w-4 h-4 text-blue-400 shrink-0" />
            <span className="text-sm text-gray-300">{f.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function DeploymentsIllustration() {
  return (
    <div className={`${cardBase} p-8 gap-6`}>
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
          <Server className="w-7 h-7 text-blue-400" />
        </div>
        <div>
          <div className="text-white text-lg font-semibold">Deployment Models</div>
          <div className="text-gray-500 text-sm">Same Trust Architecture Across All</div>
        </div>
      </div>

      <div className="flex flex-col gap-3 flex-1">
        {[
          { name: 'Managed SaaS', detail: 'AegisWire-operated, multi-tenant isolated', status: 'Avail. Now', dot: 'bg-emerald-400', text: 'text-emerald-400' },
          { name: 'Dedicated Tenant', detail: 'Single-tenant, AegisWire-operated', status: 'Avail. Now', dot: 'bg-emerald-400', text: 'text-emerald-400' },
          { name: 'Self-Hosted', detail: 'Customer-operated on your infrastructure', status: 'Avail. Now', dot: 'bg-emerald-400', text: 'text-emerald-400' },
          { name: 'Regional Gateway', detail: 'Distributed edge node deployment', status: 'Avail. Now', dot: 'bg-emerald-400', text: 'text-emerald-400' },
          { name: 'Hardware Appliance', detail: 'Purpose-built edge hardware', status: 'Roadmap', dot: 'bg-cyan-400', text: 'text-cyan-400' },
        ].map((d) => (
          <div key={d.name} className="flex items-center justify-between rounded-lg bg-white/[0.04] border border-white/[0.06] px-4 py-3">
            <div className="flex items-start gap-3">
              <div className={`w-2 h-2 rounded-full ${d.dot} mt-1.5 shrink-0`} />
              <div>
                <div className="text-gray-200 text-sm font-medium">{d.name}</div>
                <div className="text-gray-500 text-xs mt-0.5">{d.detail}</div>
              </div>
            </div>
            <span className={`text-xs font-mono shrink-0 ml-3 ${d.text}`}>{d.status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function IndustriesIllustration() {
  const industries = [
    { icon: Landmark, name: 'Financial Services', controls: 'Audit Trails & Compliance Controls' },
    { icon: HeartPulse, name: 'Healthcare', controls: 'PHI Protection & Access Policy' },
    { icon: Building2, name: 'Government', controls: 'Sovereign & Air-Gap Deployment' },
    { icon: Shield, name: 'Defense', controls: 'Classified Network Isolation' },
    { icon: Factory, name: 'Critical Infrastructure', controls: 'OT/IT Separation' },
    { icon: Globe, name: 'Global Enterprise', controls: 'Data Residency & Regional Control' },
  ]
  return (
    <div className={`${cardBase} p-8 gap-6`}>
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
          <Building2 className="w-7 h-7 text-blue-400" />
        </div>
        <div>
          <div className="text-white text-lg font-semibold">6 Target Industries</div>
          <div className="text-gray-500 text-sm">Regulated & Security-Sensitive</div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 flex-1">
        {industries.map((ind) => (
          <div key={ind.name} className="flex items-center gap-3 rounded-lg bg-white/[0.04] border border-white/[0.06] px-4 py-3">
            <ind.icon className="w-5 h-5 text-blue-400 shrink-0" />
            <div>
              <div className="text-gray-200 text-sm font-medium">{ind.name}</div>
              <div className="text-gray-500 text-xs mt-0.5">{ind.controls}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SecurityIllustration() {
  return (
    <div className={`${cardBase} p-8 gap-6`}>
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
          <Lock className="w-7 h-7 text-emerald-400" />
        </div>
        <div>
          <div className="text-white text-lg font-semibold">Trust Operations</div>
          <div className="text-gray-500 text-sm">Production Functionality</div>
        </div>
      </div>

      <div className="flex flex-col gap-3 flex-1">
        {[
          { icon: FileCheck, label: 'Signed Release Artifacts', detail: 'Every release cryptographically signed' },
          { icon: Package, label: 'SBOM Generation', detail: 'Full software bill of materials' },
          { icon: Cpu, label: 'Reproducible Builds', detail: 'Public verification of build outputs' },
          { icon: Fingerprint, label: 'Trust-Anchor Lifecycle', detail: 'Issuance, rotation, revocation' },
          { icon: Eye, label: 'Privacy-Safe Observability', detail: 'Telemetry without metadata exposure' },
          { icon: RefreshCw, label: 'Post-Compromise Security', detail: 'Automatic key ratcheting per session' },
        ].map((f) => (
          <div key={f.label} className="flex items-start gap-3 rounded-lg bg-white/[0.04] border border-white/[0.06] px-4 py-3">
            <f.icon className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-gray-200 text-sm font-medium">{f.label}</div>
              <div className="text-gray-500 text-xs mt-0.5">{f.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ContactIllustration() {
  return (
    <div className={`${cardBase} p-8 gap-6`}>
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
          <Users className="w-7 h-7 text-blue-400" />
        </div>
        <div>
          <div className="text-white text-lg font-semibold">Architecture Briefing</div>
          <div className="text-gray-500 text-sm">Technical & Commercial Engagement</div>
        </div>
      </div>

      <div className="flex flex-col gap-3 flex-1">
        {[
          { icon: Shield, label: 'Transport Architecture Deep-Dive', detail: 'Wire discipline, PQ/PCS, session design' },
          { icon: Lock, label: 'Policy & Trust Architecture', detail: 'Control plane, signed configs, anchors' },
          { icon: Server, label: 'Deployment Model Scoping', detail: 'SaaS, dedicated, self-hosted options' },
          { icon: Globe, label: 'Integration Assessment', detail: 'Existing stack and migration path' },
          { icon: Cpu, label: 'Security Posture Review', detail: 'Compliance, trust ops, audit trail' },
          { icon: Mail, label: 'Commercial Engagement', detail: 'Licensing, support, SLA discussion' },
        ].map((f) => (
          <div key={f.label} className="flex items-start gap-3 rounded-lg bg-white/[0.04] border border-white/[0.06] px-4 py-3">
            <f.icon className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-gray-200 text-sm font-medium">{f.label}</div>
              <div className="text-gray-500 text-xs mt-0.5">{f.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const variants: Record<Variant, () => React.JSX.Element> = {
  platform: PlatformIllustration,
  vpn: VpnIllustration,
  transport: TransportIllustration,
  deployments: DeploymentsIllustration,
  industries: IndustriesIllustration,
  security: SecurityIllustration,
  contact: ContactIllustration,
}

export default function HeroIllustration({ variant }: { variant: Variant }) {
  const Component = variants[variant]

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full h-full"
    >
      <Component />
    </motion.div>
  )
}
