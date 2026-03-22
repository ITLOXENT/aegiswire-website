import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI & Automated Systems Disclaimer — AegisWire',
  description: 'Important disclaimer regarding automated decision-making, AI-assisted features, and policy enforcement systems within the AegisWire platform.',
}

export default function AiDisclaimerPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-10 pb-8 md:pt-16 md:pb-10 border-b border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-6 uppercase tracking-widest">Legal</div>
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">AI &amp; Automated Systems Disclaimer</h1>
          <p className="text-gray-400">Last updated: March 2026 &nbsp;·&nbsp; <Link href="/legal" className="text-blue-400 hover:underline">All legal documents</Link></p>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="container mx-auto px-6 max-w-4xl space-y-10 text-gray-300 leading-relaxed">

          <div className="p-5 rounded-xl border border-blue-500/20 bg-blue-500/5 text-sm text-blue-200 leading-relaxed">
            This disclaimer applies to all automated systems, machine-learning-assisted features, AI-powered components, and algorithmic decision-making functions that form part of or are associated with the AegisWire platform, operated by ITLOX LTD (trading as AegisWire). Please read this document carefully. It limits AegisWire&rsquo;s liability for outputs, decisions, and recommendations produced by automated systems.
          </div>

          <Sec title="1. Automated Systems in the AegisWire Platform">
            <P>The AegisWire platform incorporates automated systems including, but not limited to:</P>
            <UL items={[
              'Policy enforcement engines that automatically permit or deny network sessions based on configured rules and real-time trust assessments.',
              'Cryptographic key exchange and session establishment mechanisms that operate without manual intervention.',
              'Anomaly detection and behavioural monitoring components that may generate alerts, trigger policy responses, or surface recommendations.',
              'Session scoring and trust-level assignment systems that classify traffic and user behaviour against defined parameters.',
              'Automated certificate validation, revocation checking, and cryptographic posture assessment.',
              'Log analysis and audit trail generation systems.',
            ]} />
            <P>These systems operate based on configurations, rules, thresholds, and parameters set by the Customer and/or AegisWire engineers. They are designed to assist human security and network operations teams — not to replace human judgement in high-stakes decisions.</P>
          </Sec>

          <Sec title="2. No Guarantee of Accuracy or Completeness">
            <P>Automated systems, by their nature, are not infallible. AegisWire makes no representation or warranty, express or implied, that:</P>
            <UL items={[
              'Outputs, alerts, recommendations, or decisions produced by automated systems are accurate, complete, or free from error.',
              'Threat classifications, anomaly scores, or trust assessments reflect the true or complete state of a network environment.',
              'Automated policy decisions will correctly identify all threats or correctly permit all legitimate traffic in all circumstances.',
              'AI-assisted features will perform identically across different network environments, data sets, or operational contexts.',
              'Any automated system within the platform is free from bias, incorrect pattern recognition, or false positives and false negatives.',
            ]} />
          </Sec>

          <Sec title="3. Human Oversight Requirement">
            <P>AegisWire strongly recommends that Customers:</P>
            <UL items={[
              'Maintain qualified human oversight of all automated policy enforcement decisions, particularly those that may block, restrict, or terminate network access for users or systems.',
              'Treat automated alerts, scores, and recommendations as inputs to human decision-making processes, not as final determinations.',
              'Regularly review and audit automated system configurations, rules, and thresholds to ensure they reflect current operational requirements and security objectives.',
              'Test automated systems in non-production environments before relying on them for critical infrastructure or safety-sensitive operations.',
              'Establish escalation procedures for scenarios where automated systems produce ambiguous or conflicting outputs.',
            ]} />
            <P className="font-semibold text-white/80">AegisWire is not liable for any loss, damage, disruption, or security incident that arises from a Customer&rsquo;s failure to maintain appropriate human oversight of automated system outputs.</P>
          </Sec>

          <Sec title="4. Automated Decision-Making and GDPR">
            <P>Where the AegisWire platform is used in a manner that results in automated decisions with legal or similarly significant effects on natural persons (for example, denial of network access by an authorised employee), the Customer, as data controller, is responsible for:</P>
            <UL items={[
              'Ensuring a lawful basis exists under applicable data protection law for such automated decision-making.',
              'Providing data subjects with appropriate information about automated decisions affecting them.',
              'Implementing a mechanism for data subjects to request human review of automated decisions where required by law.',
              'Complying with the requirements of GDPR Article 22 and equivalent provisions under applicable national law.',
            ]} />
            <P>AegisWire, as data processor, will provide reasonable technical assistance to the Customer in facilitating compliance with these obligations upon written request. See the <Link href="/legal/dpa" className="text-blue-400 hover:underline">Data Processing Addendum</Link> for further details.</P>
          </Sec>

          <Sec title="5. No Warranty for Security Outcomes">
            <P>The use of AI-assisted threat detection, anomaly scoring, policy enforcement, or any other automated security feature does not guarantee that the Customer&rsquo;s network, systems, or data will be free from security incidents, breaches, unauthorised access, or data loss. AegisWire expressly disclaims any warranty that its automated systems will prevent all security incidents or provide complete protection against all threats.</P>
            <P>Security is a shared responsibility. Customers remain responsible for their own security posture, incident response, and compliance with applicable security standards and regulations.</P>
          </Sec>

          <Sec title="6. Third-Party AI Components">
            <P>Certain features of the AegisWire platform may rely on or integrate with AI or machine-learning components supplied by third parties. AegisWire is not responsible for the accuracy, completeness, fairness, or reliability of outputs generated by third-party AI components. Where third-party AI is used, AegisWire will endeavour to disclose this in product documentation.</P>
          </Sec>

          <Sec title="7. Limitation of Liability">
            <P>To the maximum extent permitted by applicable law, ITLOX LTD (trading as AegisWire) shall not be liable for any loss, damage, claim, or expense arising directly or indirectly from:</P>
            <UL items={[
              'Reliance on any output, recommendation, alert, classification, or decision produced by an automated system within the platform.',
              'False positives or false negatives produced by anomaly detection, threat classification, or policy enforcement systems.',
              'Automated blocking or restriction of legitimate traffic or users.',
              'Failure of automated systems to detect, prevent, or respond to security threats.',
              'Any other consequence of automated system operation, misconfiguration, or unexpected behaviour.',
            ]} />
            <P>This limitation is without prejudice to the general limitation of liability set out in the <Link href="/legal/terms" className="text-blue-400 hover:underline">Terms of Service</Link>.</P>
          </Sec>

          <Sec title="8. Contact">
            <P>For questions about automated systems, AI features, or to report unexpected behaviour:</P>
            <P>
              <strong className="text-white">ITLOX LTD (trading as AegisWire)</strong><br />
              Legal: <a href="mailto:legal@aegiswire.com" className="text-blue-400 hover:underline">legal@aegiswire.com</a><br />
              Security: <a href="mailto:security@aegiswire.com" className="text-blue-400 hover:underline">security@aegiswire.com</a>
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
function P({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-gray-300 leading-relaxed ${className ?? ''}`}>{children}</p>
}
function UL({ items }: { items: string[] }) {
  return (
    <ul className="list-disc list-outside ml-5 space-y-1.5">
      {items.map((item, i) => <li key={i} className="text-gray-300 leading-relaxed">{item}</li>)}
    </ul>
  )
}
