import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Data Processing Addendum — AegisWire',
  description: 'GDPR Article 28 compliant Data Processing Addendum for AegisWire enterprise customers.',
}

export default function DpaPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-10 pb-8 md:pt-16 md:pb-10 border-b border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-6 uppercase tracking-widest">Legal</div>
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">Data Processing Addendum</h1>
          <p className="text-gray-400">Last updated: March 2026 &nbsp;·&nbsp; <Link href="/legal" className="text-blue-400 hover:underline">All legal documents</Link></p>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="container mx-auto px-6 max-w-4xl space-y-10 text-gray-300 leading-relaxed">

          <div className="p-5 rounded-xl border border-blue-500/20 bg-blue-500/5 text-sm text-blue-200 leading-relaxed">
            This Data Processing Addendum (&ldquo;DPA&rdquo;) forms part of the agreement between ITLOX LTD (trading as AegisWire, &ldquo;Processor&rdquo;) and the Customer (&ldquo;Controller&rdquo;) for the provision of the AegisWire platform. It supplements and is incorporated into the <Link href="/legal/terms" className="text-blue-400 hover:underline">Terms of Service</Link>. This DPA applies where AegisWire processes personal data on behalf of the Customer in its capacity as a data processor under the GDPR, UK GDPR, or applicable equivalent legislation.
          </div>

          <Sec title="1. Definitions">
            <P>In this DPA, the following terms have the meanings given below:</P>
            <DefTable rows={[
              ['Controller', 'The Customer, who determines the purposes and means of the processing of personal data.'],
              ['Processor', 'ITLOX LTD (trading as AegisWire), which processes personal data on behalf of the Controller.'],
              ['Personal Data', 'Any information relating to an identified or identifiable natural person as defined by applicable data protection law.'],
              ['Processing', 'Any operation performed on personal data, including collection, storage, use, disclosure, or deletion.'],
              ['Data Subject', 'The natural person to whom personal data relates.'],
              ['Applicable Data Protection Law', 'GDPR (EU 2016/679), UK GDPR, and any other applicable national or regional data protection legislation.'],
              ['Sub-Processor', 'Any third party engaged by AegisWire to process personal data on behalf of the Controller.'],
              ['Security Incident', 'A confirmed or suspected unauthorised access to, disclosure, alteration, loss, or destruction of personal data.'],
            ]} />
          </Sec>

          <Sec title="2. Scope and Nature of Processing">
            <P>AegisWire processes personal data solely to the extent necessary to provide the platform services as described in the applicable order or contract. The processing activities covered by this DPA are:</P>
            <InfoTable rows={[
              ['Subject matter', 'Secure transport, encrypted session management, policy enforcement, and related platform operations'],
              ['Duration', 'For the duration of the Customer\'s subscription and as required for wind-down upon termination'],
              ['Nature and purpose', 'Transmission, routing, encryption, and policy-controlled filtering of data passing through the platform on behalf of the Customer'],
              ['Categories of personal data', 'Network metadata (e.g., source/destination identifiers where present in Customer traffic); session identifiers; policy enforcement logs; any personal data contained in Customer Data transmitted through the platform'],
              ['Categories of data subjects', 'Employees, contractors, and authorised users of the Customer organisation who use the platform; any persons whose data is transmitted through the Customer\'s deployment'],
            ]} />
            <P>AegisWire does not process personal data beyond what is necessary for the purposes above and does not process personal data for its own commercial purposes (including advertising or profiling).</P>
          </Sec>

          <Sec title="3. Controller Obligations">
            <P>The Controller represents and warrants that:</P>
            <UL items={[
              'It has a lawful basis under applicable data protection law for all personal data it directs AegisWire to process.',
              'It has provided all required notices to and obtained all required consents from data subjects.',
              'Its instructions to AegisWire comply with applicable law.',
              'It will notify AegisWire promptly if it becomes aware that any processing instruction violates applicable law.',
            ]} />
          </Sec>

          <Sec title="4. Processor Obligations">
            <P>AegisWire, as Processor, agrees to:</P>
            <UL items={[
              'Process personal data only on documented instructions from the Controller, unless required to do so by applicable law (in which case AegisWire will inform the Controller of that requirement before processing, unless prohibited by law).',
              'Ensure that persons authorised to process personal data are bound by appropriate confidentiality obligations.',
              'Implement and maintain appropriate technical and organisational security measures as set out in Section 5 of this DPA.',
              'Assist the Controller, as far as technically possible and commercially reasonable, in fulfilling its obligations to respond to data subject requests under applicable law.',
              'Assist the Controller in fulfilling its obligations regarding security, breach notification, data protection impact assessments, and prior consultation with supervisory authorities.',
              'Delete or return all personal data to the Controller upon termination of the agreement, at the Controller\'s choice, and delete existing copies unless retention is required by law.',
              'Make available to the Controller all information reasonably necessary to demonstrate compliance with this DPA, and allow for and contribute to audits conducted by the Controller or an authorised auditor, subject to reasonable notice and agreement on cost.',
              'Promptly notify the Controller if it becomes aware that an instruction infringes applicable data protection law.',
            ]} />
          </Sec>

          <Sec title="5. Security Measures">
            <P>AegisWire implements technical and organisational measures appropriate to the nature, scope, context, and purposes of the processing, and to the risks to the rights and freedoms of natural persons. These measures include, as a minimum:</P>
            <UL items={[
              'Encryption of personal data in transit using strong cryptographic protocols (including post-quantum key exchange where deployed).',
              'Encryption of personal data at rest.',
              'Ongoing confidentiality, integrity, availability, and resilience of processing systems.',
              'The ability to restore the availability and access to personal data in a timely manner in the event of a physical or technical incident.',
              'A process for regularly testing, assessing, and evaluating the effectiveness of technical and organisational measures.',
              'Access controls limiting processing of personal data to authorised personnel on a need-to-know basis.',
              'Audit logging of significant access events.',
            ]} />
            <P>Full details of AegisWire&rsquo;s security practices are available in our <Link href="/security-trust" className="text-blue-400 hover:underline">Security &amp; Trust Centre</Link>. Enterprise customers requiring additional security documentation should contact <a href="mailto:legal@aegiswire.com" className="text-blue-400 hover:underline">legal@aegiswire.com</a>.</P>
          </Sec>

          <Sec title="6. Security Incident Notification">
            <P>AegisWire will notify the Controller without undue delay, and in any event within 72 hours of becoming aware, of a Security Incident affecting personal data processed under this DPA. The notification will include, to the extent available at the time:</P>
            <UL items={[
              'A description of the nature of the Security Incident including, where possible, the categories and approximate numbers of data subjects and records concerned.',
              'The contact details of AegisWire\'s data protection point of contact.',
              'A description of the likely consequences of the Security Incident.',
              'A description of the measures taken or proposed to address the Security Incident, including measures to mitigate its possible adverse effects.',
            ]} />
            <P>AegisWire&rsquo;s notification obligation does not imply acceptance of fault or liability. The Controller remains responsible for assessing whether the incident requires notification to supervisory authorities or data subjects.</P>
          </Sec>

          <Sec title="7. Sub-Processing">
            <Sub>7.1 General Authorisation</Sub>
            <P>The Controller grants AegisWire general authorisation to engage Sub-Processors for the purposes of providing the platform services. AegisWire will maintain a current list of Sub-Processors and will provide notice of additions or replacements, giving the Controller a reasonable opportunity to object before the new Sub-Processor commences processing.</P>
            <Sub>7.2 Current Sub-Processors</Sub>
            <P>AegisWire currently uses the following categories of Sub-Processor:</P>
            <SubTable rows={[
              ['Amazon Web Services, Inc. (AWS)', 'United States', 'Cloud infrastructure hosting (us-west-2), content delivery, email delivery'],
            ]} />
            <Sub>7.3 Sub-Processor Requirements</Sub>
            <P>AegisWire will impose data protection obligations on each Sub-Processor that are no less protective than those in this DPA. AegisWire remains liable to the Controller for the acts and omissions of its Sub-Processors to the same extent as AegisWire&rsquo;s own acts and omissions under this DPA.</P>
          </Sec>

          <Sec title="8. International Data Transfers">
            <P>Where personal data subject to GDPR or UK GDPR is transferred to a third country (including to AWS infrastructure in the United States), AegisWire will ensure that such transfers are made subject to appropriate safeguards under applicable law. These safeguards include:</P>
            <UL items={[
              'Standard Contractual Clauses (SCCs) as approved by the European Commission (in the context of GDPR).',
              'The UK International Data Transfer Addendum issued by the ICO (in the context of UK GDPR).',
              'Any other transfer mechanism recognised as adequate by the applicable supervisory authority.',
            ]} />
            <P>Copies of the relevant transfer mechanisms are available upon request from <a href="mailto:legal@aegiswire.com" className="text-blue-400 hover:underline">legal@aegiswire.com</a>.</P>
          </Sec>

          <Sec title="9. Data Subject Rights">
            <P>AegisWire will, to the extent technically feasible and within the scope of the platform, assist the Controller in responding to data subject requests (including access, rectification, erasure, portability, restriction, and objection rights). Where AegisWire receives a data subject request directly, it will promptly forward such request to the Controller and will not respond to data subjects directly except on the Controller&rsquo;s instruction or as required by law.</P>
          </Sec>

          <Sec title="10. Return and Deletion of Data">
            <P>Upon termination or expiry of the applicable agreement, AegisWire will, at the Controller&rsquo;s choice:</P>
            <UL items={[
              'Return all personal data to the Controller in a commonly used machine-readable format where technically feasible; or',
              'Delete all personal data processed under this DPA.',
            ]} />
            <P>AegisWire will confirm in writing when deletion is complete. AegisWire may retain personal data beyond this period only where required by applicable law, and will notify the Controller of such retention obligations where permitted by law.</P>
          </Sec>

          <Sec title="11. Audit Rights">
            <P>The Controller may, with at least 30 days&rsquo; written notice and no more than once per year (unless a credible Security Incident warrants more frequent review), request an audit of AegisWire&rsquo;s data processing activities under this DPA. Such audits may be conducted by the Controller or a qualified independent auditor bound by confidentiality obligations. The cost of audits is borne by the Controller unless significant non-compliance is identified. AegisWire may meet this obligation by providing current third-party audit reports or certifications in lieu of direct site audits, where these adequately cover the scope of the Controller&rsquo;s enquiry.</P>
          </Sec>

          <Sec title="12. Updates and Governing Terms">
            <P>This DPA is governed by the same law as the underlying Terms of Service. AegisWire may update this DPA to reflect changes in applicable law or sub-processor arrangements, with notice to Customers. Where updates are required by mandatory law, they take effect on the effective date specified in the notice.</P>
            <P>To request a countersigned DPA for enterprise contract purposes, contact <a href="mailto:legal@aegiswire.com" className="text-blue-400 hover:underline">legal@aegiswire.com</a>.</P>
          </Sec>

          <div className="p-5 rounded-xl border border-yellow-500/20 bg-yellow-500/5 text-sm text-yellow-200/80 leading-relaxed">
            <strong>Note for legal counsel:</strong> This DPA provides a standard GDPR Article 28 framework. Enterprise customers with specific regulatory requirements (including but not limited to HIPAA BAA obligations, NIS2 requirements, FCA/PRA rules, DORA compliance, or sector-specific data sovereignty requirements) should request a negotiated DPA by contacting legal@aegiswire.com. The standard SCCs and UK IDTA should be confirmed to be in the most current approved form before execution.
          </div>

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
              <td className="px-4 py-3 text-white font-medium align-top w-40 shrink-0">{term}</td>
              <td className="px-4 py-3 text-gray-400 leading-relaxed">{def}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
function InfoTable({ rows }: { rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-white/10 my-4">
      <table className="w-full text-sm">
        <tbody>
          {rows.map(([key, val], i) => (
            <tr key={i} className="border-b border-white/5 last:border-0">
              <td className="px-4 py-3 text-white/70 font-medium align-top w-52 shrink-0">{key}</td>
              <td className="px-4 py-3 text-gray-400 leading-relaxed">{val}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
function SubTable({ rows }: { rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-white/10 my-4">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/10 bg-white/5">
            {['Sub-Processor', 'Location', 'Processing Activities'].map((h, i) => (
              <th key={i} className="text-left px-4 py-3 text-white font-medium">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="border-b border-white/5 last:border-0">
              {row.map((cell, ci) => (
                <td key={ci} className="px-4 py-3 text-gray-400 align-top">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
