import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Acceptable Use Policy — AegisWire',
  description: 'Permitted and prohibited uses of the AegisWire secure transport and enterprise VPN platform.',
}

export default function AcceptableUsePage() {
  return (
    <main className="min-h-screen">
      <section className="pt-10 pb-8 md:pt-16 md:pb-10 border-b border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-6 uppercase tracking-widest">Legal</div>
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">Acceptable Use Policy</h1>
          <p className="text-gray-400">Last updated: March 2026 &nbsp;·&nbsp; <Link href="/legal" className="text-blue-400 hover:underline">All legal documents</Link></p>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="container mx-auto px-6 max-w-4xl space-y-10 text-gray-300 leading-relaxed">

          <div className="p-5 rounded-xl border border-blue-500/20 bg-blue-500/5 text-sm text-blue-200 leading-relaxed">
            This Acceptable Use Policy (&ldquo;AUP&rdquo;) governs all use of the AegisWire platform and is incorporated by reference into our <Link href="/legal/terms" className="text-blue-400 hover:underline">Terms of Service</Link>. By using the platform, you agree to comply with this AUP. Violation may result in immediate suspension or termination of access without refund.
          </div>

          <Sec title="1. Purpose">
            <P>AegisWire provides a secure transport and enterprise VPN platform designed for legitimate professional, commercial, and governmental use. This AUP defines the conduct expected of all Customers, authorised users, and any person who accesses the platform, directly or through a Customer account.</P>
          </Sec>

          <Sec title="2. Permitted Uses">
            <P>The AegisWire platform may be used only for lawful purposes in furtherance of your organisation&rsquo;s legitimate business operations, including:</P>
            <UL items={[
              'Securing enterprise network traffic and remote access in accordance with your organisation\'s security policies.',
              'Protecting data in transit across hostile or untrusted network environments.',
              'Enforcing network segmentation, zero-trust access, and policy-controlled connectivity within your organisation.',
              'Operating within regulated environments requiring encrypted transport and auditable policy enforcement.',
              'Integrating the platform with your existing identity, authentication, and security infrastructure.',
            ]} />
          </Sec>

          <Sec title="3. Prohibited Uses">
            <P>You must not use the AegisWire platform to:</P>

            <Sub>3.1 Illegal and Harmful Activities</Sub>
            <UL items={[
              'Engage in any activity that violates applicable local, national, or international law or regulation.',
              'Transmit, store, or process content that is unlawful, defamatory, obscene, or that infringes any third-party intellectual property or privacy rights.',
              'Facilitate terrorism, money laundering, trafficking, or any other criminal enterprise.',
              'Circumvent export control laws or use the platform in territories subject to applicable sanctions without authorisation.',
            ]} />

            <Sub>3.2 Unauthorised Access and Attacks</Sub>
            <UL items={[
              'Attempt to gain unauthorised access to any system, network, device, account, or data — whether internal to AegisWire or external.',
              'Conduct port scanning, network mapping, or vulnerability probing of systems or networks that you do not own or do not have explicit written authorisation to test.',
              'Launch or facilitate denial-of-service (DoS) or distributed denial-of-service (DDoS) attacks.',
              'Intercept, redirect, or tamper with network traffic not belonging to your organisation.',
              'Exploit or attempt to exploit any vulnerability in the AegisWire platform or in systems accessible through it.',
            ]} />

            <Sub>3.3 Malicious Content</Sub>
            <UL items={[
              'Transmit malware, ransomware, spyware, worms, trojans, rootkits, keyloggers, or any other malicious code.',
              'Use the platform to serve phishing pages, credential harvesting infrastructure, or fraudulent communications.',
              'Use the platform to operate command-and-control (C2) infrastructure for botnets or similar malicious networks.',
            ]} />

            <Sub>3.4 Abuse of the Platform</Sub>
            <UL items={[
              'Reverse-engineer, decompile, disassemble, or attempt to derive the source code or underlying protocols of the AegisWire platform without express written authorisation.',
              'Resell, sub-license, or offer access to the platform to third parties without prior written authorisation from AegisWire.',
              'Use the platform to benchmark or create competitive products without AegisWire\'s prior written consent.',
              'Circumvent, disable, or interfere with any security control, audit log, policy enforcement mechanism, or cryptographic protection in the platform.',
              'Attempt to identify or exploit shared infrastructure to access data belonging to other AegisWire customers.',
            ]} />

            <Sub>3.5 Network and Traffic Abuse</Sub>
            <UL items={[
              'Generate traffic volumes that materially degrade platform performance for other customers.',
              'Use the platform to bypass lawful geographic restrictions in violation of the terms of the underlying service or applicable law.',
              'Use the platform to conceal your identity or origin for the purpose of committing fraud or evading law enforcement.',
              'Spoof IP addresses, packet headers, or other identifying information for malicious purposes.',
            ]} />

            <Sub>3.6 Sanctions and Export Controls</Sub>
            <UL items={[
              'Access or use the platform from, or on behalf of persons or entities in, jurisdictions subject to comprehensive sanctions programmes administered by the UK, EU, US OFAC, or other applicable authorities, without valid authorisation.',
              'Export, re-export, or transfer any element of the platform in violation of applicable export control regulations.',
            ]} />
          </Sec>

          <Sec title="4. Security Responsibilities">
            <P>Customers are responsible for maintaining appropriate security practices within their own environments, including:</P>
            <UL items={[
              'Protecting credentials, API keys, and certificates used to access the AegisWire platform.',
              'Keeping devices that access the platform free of malware and up to date with security patches.',
              'Promptly reporting any suspected compromise of credentials or platform access to AegisWire at intl@aegiswire.com.',
              'Ensuring that authorised users within your organisation are trained to use the platform securely.',
              'Not sharing access credentials between individuals or with unauthorised persons.',
            ]} />
          </Sec>

          <Sec title="5. Reporting Violations">
            <P>If you become aware of any use of the AegisWire platform that violates this AUP, you are encouraged to report it to <a href="mailto:security@aegiswire.com" className="text-blue-400 hover:underline">security@aegiswire.com</a> or <a href="mailto:legal@aegiswire.com" className="text-blue-400 hover:underline">legal@aegiswire.com</a>. AegisWire takes all reports seriously and will investigate promptly.</P>
            <P>If you are a security researcher who believes you have identified a vulnerability in the AegisWire platform, please contact us responsibly at <a href="mailto:security@aegiswire.com" className="text-blue-400 hover:underline">security@aegiswire.com</a> before any public disclosure.</P>
          </Sec>

          <Sec title="6. Enforcement">
            <P>AegisWire reserves the right to investigate any suspected violation of this AUP. Upon confirmation or reasonable suspicion of a violation, AegisWire may, at its sole discretion and without prior notice:</P>
            <UL items={[
              'Suspend or terminate access to the platform, with or without refund.',
              'Remove, disable, or quarantine any content or session determined to be in violation of this AUP.',
              'Preserve and disclose information to law enforcement, regulators, or other authorities where required by law or where AegisWire determines in good faith that disclosure is necessary to protect the safety of any person or the integrity of the platform.',
              'Take legal action against you and/or your organisation for damages, injunctions, or other relief.',
            ]} />
            <P>AegisWire&rsquo;s failure to act on a violation does not waive our right to act on subsequent or similar violations.</P>
          </Sec>

          <Sec title="7. Updates">
            <P>AegisWire may update this AUP from time to time. Continued use of the platform following notice of an update constitutes acceptance of the revised AUP. Material changes will be communicated by email or by notice on our website.</P>
          </Sec>

          <Sec title="8. Contact">
            <P>
              Legal notices: <a href="mailto:legal@aegiswire.com" className="text-blue-400 hover:underline">legal@aegiswire.com</a><br />
              Security reports: <a href="mailto:security@aegiswire.com" className="text-blue-400 hover:underline">security@aegiswire.com</a><br />
              General: <a href="mailto:intl@aegiswire.com" className="text-blue-400 hover:underline">intl@aegiswire.com</a>
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
