import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Service Level Agreement — AegisWire',
  description: 'AegisWire standard service availability terms, support commitments, and SLA framework for enterprise customers.',
}

export default function SlaPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-10 pb-8 md:pt-16 md:pb-10 border-b border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-6 uppercase tracking-widest">Legal</div>
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">Service Level Agreement</h1>
          <p className="text-gray-400">Last updated: March 2026 &nbsp;·&nbsp; <Link href="/legal" className="text-blue-400 hover:underline">All legal documents</Link></p>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="container mx-auto px-6 max-w-4xl space-y-10 text-gray-300 leading-relaxed">

          <div className="p-5 rounded-xl border border-blue-500/20 bg-blue-500/5 text-sm text-blue-200 leading-relaxed">
            This document sets out the standard service availability framework and support commitments for the AegisWire platform, operated by ITLOX LTD (trading as AegisWire). <strong>This standard SLA applies in the absence of a separately negotiated and signed Enterprise SLA.</strong> Enterprise customers with specific uptime or support requirements should contact <a href="mailto:intl@aegiswire.com" className="text-blue-400 hover:underline">intl@aegiswire.com</a> to discuss a bespoke SLA.
          </div>

          <div className="p-5 rounded-xl border border-yellow-500/20 bg-yellow-500/5 text-sm text-yellow-200/80 leading-relaxed">
            <strong>Important:</strong> Unless a specific uptime commitment is expressly stated in a signed order form or enterprise agreement, AegisWire does not guarantee any specific level of availability. The standard terms below represent our commercial best efforts commitment, not a legally binding uptime guarantee. Customers requiring contractual uptime guarantees must enter into a separate Enterprise SLA.
          </div>

          <Sec title="1. Definitions">
            <DefTable rows={[
              ['Availability', 'The percentage of time in a calendar month during which the AegisWire managed platform is accessible and functioning for its primary purpose, excluding Scheduled Maintenance and Excluded Events.'],
              ['Downtime', 'A period during which the AegisWire managed platform is wholly unavailable, not including degraded performance or partial feature unavailability.'],
              ['Scheduled Maintenance', 'Planned maintenance periods notified to Customers at least 48 hours in advance (or immediately for emergency security patching).'],
              ['Excluded Events', 'Events outside AegisWire\'s reasonable control, as defined in Section 5.'],
              ['Incident', 'An unplanned interruption to or degradation of the platform service.'],
              ['Response Time', 'The time from AegisWire receiving a support request to an initial acknowledgement response.'],
              ['Resolution Time', 'The time from initial acknowledgement to restoration of service or delivery of a workaround. Resolution time is a target, not a guarantee.'],
            ]} />
          </Sec>

          <Sec title="2. Standard Availability Target">
            <P>For managed SaaS deployments, AegisWire targets the following availability on a commercial best-efforts basis:</P>
            <AvailTable rows={[
              ['Standard (Managed SaaS)', '99.5%', 'Monthly', 'Not contractually binding without signed Enterprise SLA'],
              ['Enterprise (with signed SLA)', 'Up to 99.95%', 'Monthly', 'Subject to negotiated Enterprise SLA terms'],
            ]} />
            <P>Self-hosted and dedicated deployments: Availability depends on the Customer&rsquo;s own infrastructure. AegisWire provides software support but does not control or guarantee the availability of Customer-managed infrastructure.</P>
            <Sub>2.1 Availability Calculation</Sub>
            <P>Availability % = ((Total minutes in month − Downtime minutes) / Total minutes in month) × 100</P>
            <P>Scheduled Maintenance and Excluded Events are not counted as Downtime for the purposes of this calculation.</P>
          </Sec>

          <Sec title="3. Support Tiers">
            <SupportTable rows={[
              ['Critical', 'P1', 'Complete platform unavailability or active security breach', '4 hours (business hours)', '24 hours (target)', 'Email + designated contact'],
              ['High', 'P2', 'Major feature degradation significantly impacting operations', '8 hours (business hours)', '3 business days (target)', 'Email'],
              ['Medium', 'P3', 'Partial feature impairment; workaround available', '1 business day', '10 business days (target)', 'Email'],
              ['Low', 'P4', 'General enquiries, feature requests, documentation', '3 business days', 'Best efforts', 'Email'],
            ]} />
            <P>Business hours are defined as 09:00–18:00 GMT/BST, Monday to Friday, excluding UK public holidays. Enterprise SLA customers may negotiate extended support hours and dedicated support contacts.</P>
            <P>Support requests must be submitted to: <a href="mailto:support@aegiswire.com" className="text-blue-400 hover:underline">support@aegiswire.com</a></P>
          </Sec>

          <Sec title="4. Service Credits (Standard Tier)">
            <P>Where AegisWire fails to meet the standard availability target in any calendar month (excluding Excluded Events), Customers on paid managed SaaS subscriptions may be eligible for a service credit as follows:</P>
            <CreditTable rows={[
              ['99.0% – 99.49%', '5% of monthly fee for the affected month'],
              ['95.0% – 98.99%', '10% of monthly fee for the affected month'],
              ['Below 95.0%', '20% of monthly fee for the affected month'],
            ]} />
            <Sub>4.1 Credit Conditions</Sub>
            <UL items={[
              'Credits must be claimed within 30 days of the end of the affected calendar month by emailing support@aegiswire.com with details of the outage.',
              'Credits apply only to undisputed monthly fees for the directly affected service.',
              'Credits are applied as a deduction against future invoices. No cash payment is made.',
              'Credits are the Customer\'s sole and exclusive remedy for failure to meet the standard availability target.',
              'Credits are not available where the failure results from an Excluded Event or from a Customer\'s own actions or infrastructure.',
            ]} />
          </Sec>

          <Sec title="5. Excluded Events">
            <P>The following are excluded from Availability calculations and credit eligibility:</P>
            <UL items={[
              'Scheduled Maintenance notified in accordance with these terms.',
              'Emergency security patching that cannot wait for scheduled maintenance.',
              'Force majeure events as defined in the Terms of Service.',
              'Failures caused by Customer\'s infrastructure, network, or configuration errors.',
              'Actions or omissions of the Customer or its users that violate the Acceptable Use Policy or Terms of Service.',
              'Third-party service failures (including internet service providers, cloud infrastructure providers, DNS providers) outside AegisWire\'s direct control.',
              'DDoS attacks, volumetric attacks, or other hostile network events targeting the Customer\'s deployment or the shared infrastructure.',
              'Outages caused by zero-day vulnerabilities or previously unknown security issues during active incident response.',
              'Beta, preview, or experimental features explicitly labelled as such.',
            ]} />
          </Sec>

          <Sec title="6. Maintenance Windows">
            <P>AegisWire will endeavour to conduct Scheduled Maintenance during low-traffic periods (typically 02:00–06:00 GMT). We will provide at least 48 hours&rsquo; advance notice of planned maintenance via email to the Customer&rsquo;s registered contact. Emergency security maintenance may be deployed without advance notice where AegisWire determines it is necessary to protect platform integrity or Customer data.</P>
          </Sec>

          <Sec title="7. Incident Communication">
            <P>During a P1 or P2 Incident, AegisWire will provide status updates at least every 4 hours via email or a published status channel. Following resolution of a significant incident, AegisWire will provide a post-incident report summarising the cause, impact, and corrective actions within 10 business days, upon request.</P>
          </Sec>

          <Sec title="8. Limitations">
            <P>This SLA framework does not:</P>
            <UL items={[
              'Create any legally binding uptime guarantee without a separately executed Enterprise SLA.',
              'Override or expand the limitation of liability provisions in the Terms of Service.',
              'Apply to self-hosted, dedicated, or customer-managed deployment environments.',
              'Apply during any period where the Customer\'s account is suspended for non-payment or breach of the Terms of Service.',
              'Guarantee any specific resolution time for any category of Incident.',
            ]} />
          </Sec>

          <Sec title="9. Enterprise SLA">
            <P>Customers in regulated industries (financial services, healthcare, government, defence, critical national infrastructure) or with high-availability requirements may negotiate a separate Enterprise SLA with contractually binding uptime commitments, extended support hours, dedicated support engineers, and enhanced credit provisions. Contact <a href="mailto:intl@aegiswire.com" className="text-blue-400 hover:underline">intl@aegiswire.com</a> to discuss Enterprise SLA options.</P>
          </Sec>

          <Sec title="10. Contact">
            <P>
              <strong className="text-white">ITLOX LTD (trading as AegisWire)</strong><br />
              Support: <a href="mailto:support@aegiswire.com" className="text-blue-400 hover:underline">support@aegiswire.com</a><br />
              Enterprise enquiries: <a href="mailto:intl@aegiswire.com" className="text-blue-400 hover:underline">intl@aegiswire.com</a>
            </P>
          </Sec>

        </div>
      </section>
    </main>
  )
}

function Sec({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-white/10">{title}</h2>
      <div className="space-y-4">{children}</div>
    </div>
  )
}
function Sub({ children }: { children: React.ReactNode }) {
  return <h3 className="text-base font-semibold text-white/90 mt-6 mb-2">{children}</h3>
}
function P({ children }: { children: React.ReactNode }) {
  return <p className="text-gray-300 leading-relaxed">{children}</p>
}
function UL({ items }: { items: string[] }) {
  return (
    <ul className="list-disc list-outside ml-5 space-y-1.5">
      {items.map((item, i) => <li key={i} className="text-gray-300 leading-relaxed">{item}</li>)}
    </ul>
  )
}
function DefTable({ rows }: { rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-white/10 my-4">
      <table className="w-full text-sm">
        <tbody>
          {rows.map(([term, def], i) => (
            <tr key={i} className="border-b border-white/5 last:border-0">
              <td className="px-4 py-3 text-white font-medium align-top w-44">{term}</td>
              <td className="px-4 py-3 text-gray-400 leading-relaxed">{def}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
function AvailTable({ rows }: { rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-white/10 my-4">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/10 bg-white/5">
            {['Tier', 'Target Availability', 'Measurement Period', 'Notes'].map((h, i) => (
              <th key={i} className="text-left px-4 py-3 text-white font-medium">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="border-b border-white/5 last:border-0">
              {row.map((cell, ci) => <td key={ci} className="px-4 py-3 text-gray-400">{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
function SupportTable({ rows }: { rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-white/10 my-4">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/10 bg-white/5">
            {['Priority', 'Code', 'Definition', 'Response Target', 'Resolution Target', 'Channel'].map((h, i) => (
              <th key={i} className="text-left px-4 py-3 text-white font-medium">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="border-b border-white/5 last:border-0">
              {row.map((cell, ci) => <td key={ci} className="px-4 py-3 text-gray-400 align-top">{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
function CreditTable({ rows }: { rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-white/10 my-4">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/10 bg-white/5">
            {['Monthly Availability', 'Credit'].map((h, i) => (
              <th key={i} className="text-left px-4 py-3 text-white font-medium">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="border-b border-white/5 last:border-0">
              {row.map((cell, ci) => <td key={ci} className="px-4 py-3 text-gray-400">{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
