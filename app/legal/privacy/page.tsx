import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — AegisWire',
  description: 'How AegisWire collects, uses, and protects personal data. GDPR, UK GDPR, and US state privacy disclosures.',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-10 pb-8 md:pt-16 md:pb-10 border-b border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-6 uppercase tracking-widest">Legal</div>
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">Privacy Policy</h1>
          <p className="text-gray-400">Last updated: March 2026 &nbsp;·&nbsp; <Link href="/legal" className="text-blue-400 hover:underline">All legal documents</Link></p>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="container mx-auto px-6 max-w-4xl space-y-10 text-gray-300 leading-relaxed">

          <Intro />

          <Sec title="1. Who We Are">
            <P>ITLOX LTD trades as AegisWire (&ldquo;AegisWire&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;). We are a business-to-business (&ldquo;B2B&rdquo;) software and infrastructure company providing secure transport and enterprise VPN platform services. We are not a consumer business.</P>
            <P>For data protection purposes, AegisWire acts as a data <strong className="text-white">controller</strong> in relation to personal data collected through our website and marketing activities. For personal data processed within the platform on behalf of enterprise customers, AegisWire acts as a data <strong className="text-white">processor</strong> — see our <Link href="/legal/dpa" className="text-blue-400 hover:underline">Data Processing Addendum</Link>.</P>
            <P>Our primary contact for data protection matters is: <a href="mailto:legal@aegiswire.com" className="text-blue-400 hover:underline">legal@aegiswire.com</a></P>
          </Sec>

          <Sec title="2. Data We Collect and Why">
            <Sub>2.1 Website and Enquiry Data</Sub>
            <P>When you visit our website or submit an enquiry, we collect:</P>
            <Table rows={[
              ['Email address', 'Provided by you via lead registration or contact form', 'To respond to your enquiry and, with your consent, send relevant product updates', 'Legitimate interests / Consent'],
              ['Name and organisation', 'Provided by you in contact forms', 'To address correspondence and qualify your enquiry', 'Legitimate interests'],
              ['Message content', 'Provided by you in contact forms', 'To process and respond to your communication', 'Legitimate interests / Contract'],
              ['IP address and browser metadata', 'Automatically collected when you access our website', 'Security, fraud prevention, and basic analytics', 'Legitimate interests'],
            ]} headers={['Data', 'Source', 'Purpose', 'Lawful Basis (GDPR)']} />

            <Sub>2.2 Platform and Technical Data (Processor Role)</Sub>
            <P>When enterprise customers deploy the AegisWire platform, we process technical data (such as session metadata, policy logs, and cryptographic handshake records) on their behalf as a data processor. This processing is governed by our <Link href="/legal/dpa" className="text-blue-400 hover:underline">Data Processing Addendum</Link> and the applicable customer contract, not this Privacy Policy.</P>

            <Sub>2.3 Cookies</Sub>
            <P>We use cookies and similar technologies as described in our <Link href="/legal/cookies" className="text-blue-400 hover:underline">Cookie Policy</Link>.</P>

            <Sub>2.4 Data We Do Not Collect</Sub>
            <P>We do not knowingly collect data from children under 16. We do not sell, rent, or broker personal data to third parties. We do not use personal data collected through the website for profiling or automated decision-making that produces legal or similarly significant effects.</P>
          </Sec>

          <Sec title="3. How We Use Personal Data">
            <P>We use personal data collected through the website to:</P>
            <UL items={[
              'Respond to enquiries, demo requests, and sales conversations.',
              'Send transactional communications about your request or account.',
              'Send product and marketing updates where you have provided consent or where we have a legitimate interest and you have not opted out.',
              'Comply with legal and regulatory obligations.',
              'Detect, investigate, and prevent fraud, abuse, and security incidents.',
              'Improve and develop our website and services.',
            ]} />
            <P>We do not use your personal data for purposes incompatible with those stated above without your consent or a lawful basis under applicable law.</P>
          </Sec>

          <Sec title="4. Lawful Basis for Processing (GDPR / UK GDPR)">
            <P>Where GDPR or UK GDPR applies, we rely on the following lawful bases:</P>
            <UL items={[
              'Legitimate interests: Processing enquiry data and basic website analytics to operate our business, where those interests are not overridden by your data protection rights.',
              'Consent: Where you have expressly opted in to marketing communications. You may withdraw consent at any time by emailing legal@aegiswire.com.',
              'Contract: Where processing is necessary to take pre-contractual steps or to perform a contract with you or your organisation.',
              'Legal obligation: Where processing is required to comply with applicable law.',
            ]} />
          </Sec>

          <Sec title="5. Data Sharing and Third Parties">
            <P>We do not sell your personal data. We share data only as follows:</P>
            <Sub>5.1 Service Providers (Processors)</Sub>
            <P>We engage the following categories of service provider who process personal data on our behalf:</P>
            <UL items={[
              'Cloud infrastructure: Amazon Web Services, Inc. (AWS), used for hosting, email delivery, and DNS. Data may be processed in the United States (us-west-2 region). See international transfers below.',
              'Email delivery: AWS Simple Email Service (SES) for transactional email.',
              'Analytics: Where enabled, limited website analytics providers.',
            ]} />
            <P>All processors are contractually bound by data processing terms requiring adequate security and prohibiting use of data for their own purposes.</P>
            <Sub>5.2 Legal and Regulatory Disclosures</Sub>
            <P>We may disclose personal data where required by law, court order, regulatory authority, or to protect the legal rights, property, or safety of AegisWire, our customers, or the public.</P>
            <Sub>5.3 Corporate Transactions</Sub>
            <P>In the event of a merger, acquisition, or sale of all or substantially all of our assets, personal data may be transferred to the successor entity, subject to equivalent privacy protections. We will notify you of any such change where required by law.</P>
          </Sec>

          <Sec title="6. International Data Transfers">
            <P>Our primary infrastructure is hosted on AWS in the United States (us-west-2, Oregon). Where personal data is transferred from the European Economic Area (EEA) or the United Kingdom to a country that is not subject to an adequacy decision, we rely on appropriate safeguards including:</P>
            <UL items={[
              'Standard Contractual Clauses (SCCs) approved by the European Commission.',
              'The UK International Data Transfer Addendum where applicable.',
              'AWS&rsquo;s participation in certified frameworks where applicable.',
            ]} />
            <P>You may request a copy of our transfer safeguards by contacting <a href="mailto:legal@aegiswire.com" className="text-blue-400 hover:underline">legal@aegiswire.com</a>.</P>
          </Sec>

          <Sec title="7. Data Retention">
            <P>We retain personal data only for as long as necessary for the purposes for which it was collected, unless a longer period is required by law:</P>
            <UL items={[
              'Enquiry and contact data: up to 3 years from the date of last meaningful interaction, unless you request earlier deletion.',
              'Marketing consent records: for the duration of your consent plus a reasonable period for legal compliance.',
              'Contractual and billing data: for the duration of the contract plus the period required by applicable law (typically 6–7 years for financial records).',
              'Security and fraud logs: up to 12 months unless a longer period is required for an ongoing investigation.',
            ]} />
          </Sec>

          <Sec title="8. Your Rights">
            <Sub>8.1 Rights Under GDPR and UK GDPR</Sub>
            <P>If you are located in the EEA, the United Kingdom, or Switzerland, you have the following rights in relation to your personal data:</P>
            <UL items={[
              'Right of access: to obtain a copy of the personal data we hold about you.',
              'Right to rectification: to correct inaccurate or incomplete personal data.',
              'Right to erasure ("right to be forgotten"): to request deletion of your personal data where there is no compelling reason to continue processing it.',
              'Right to restriction of processing: to ask us to pause processing of your data in certain circumstances.',
              'Right to data portability: to receive your personal data in a structured, machine-readable format.',
              'Right to object: to object to processing based on legitimate interests or for direct marketing at any time.',
              'Rights related to automated decision-making: we do not make solely automated decisions with legal or significant effects, but you have the right to request human review if you believe otherwise.',
            ]} />
            <P>To exercise any of these rights, contact <a href="mailto:legal@aegiswire.com" className="text-blue-400 hover:underline">legal@aegiswire.com</a>. We will respond within one calendar month. We may need to verify your identity before processing a request.</P>
            <P>If you are not satisfied with our response, you have the right to lodge a complaint with the relevant supervisory authority. In the UK, this is the Information Commissioner&rsquo;s Office (<a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">ico.org.uk</a>). In the EEA, contact your national data protection authority.</P>
            <Sub>8.2 US State Privacy Rights</Sub>
            <P>AegisWire is a B2B platform and does not sell personal data. Residents of US states with applicable privacy laws (including California CCPA/CPRA, Virginia VCDPA, Colorado CPA, and others) may have rights to know, delete, opt-out of sale (we do not sell), and non-discrimination. To make a request, contact <a href="mailto:legal@aegiswire.com" className="text-blue-400 hover:underline">legal@aegiswire.com</a>.</P>
          </Sec>

          <Sec title="9. Security">
            <P>AegisWire implements technical and organisational measures to protect personal data, including encryption in transit, access controls, and security monitoring. Details are set out in our <Link href="/security-trust" className="text-blue-400 hover:underline">Security &amp; Trust Centre</Link>.</P>
            <P>However, no method of transmission over the internet is completely secure. We cannot guarantee absolute security and you transmit data at your own risk. Where we become aware of a personal data breach, we will comply with our notification obligations under applicable law.</P>
          </Sec>

          <Sec title="10. Changes to This Policy">
            <P>We may update this Privacy Policy from time to time. Material changes will be notified by email or by prominent notice on our website before they take effect. The &ldquo;Last updated&rdquo; date at the top reflects the most recent revision. Your continued use of the website or platform after the effective date constitutes acknowledgement of the updated policy.</P>
          </Sec>

          <Sec title="11. Contact Us">
            <P>For any privacy-related queries, data subject requests, or to report a concern:</P>
            <P>
              <strong className="text-white">ITLOX LTD (trading as AegisWire)</strong><br />
              Email: <a href="mailto:legal@aegiswire.com" className="text-blue-400 hover:underline">legal@aegiswire.com</a><br />
              General: <a href="mailto:intl@aegiswire.com" className="text-blue-400 hover:underline">intl@aegiswire.com</a>
            </P>
          </Sec>

          <div className="p-5 rounded-xl border border-yellow-500/20 bg-yellow-500/5 text-sm text-yellow-200/80 leading-relaxed">
            <strong>Note for legal counsel:</strong> This policy should be reviewed by a qualified data protection solicitor, particularly to confirm controller/processor classifications, the specific SCCs or transfer mechanisms in use, and applicability of additional jurisdiction-specific disclosure requirements for your target markets.
          </div>

        </div>
      </section>
    </main>
  )
}

function Intro() {
  return (
    <div className="p-5 rounded-xl border border-blue-500/20 bg-blue-500/5 text-sm text-blue-200 leading-relaxed">
      This Privacy Policy explains how AegisWire collects, uses, stores, and protects personal data in connection with our website and marketing activities. It applies to visitors to our website and individuals who make enquiries or register interest in our services. Enterprise customers who deploy the AegisWire platform should also refer to our <Link href="/legal/dpa" className="text-blue-400 hover:underline">Data Processing Addendum</Link>.
    </div>
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
function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-white/10 my-4">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/10 bg-white/5">
            {headers.map((h, i) => <th key={i} className="text-left px-4 py-3 text-white font-medium">{h}</th>)}
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
