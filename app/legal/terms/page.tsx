import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service — AegisWire',
  description: 'AegisWire Terms of Service governing access to and use of the AegisWire secure transport and enterprise VPN platform.',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-10 pb-8 md:pt-16 md:pb-10 border-b border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-6 uppercase tracking-widest">
            Legal
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">Terms of Service</h1>
          <p className="text-gray-400">Last updated: March 2026 &nbsp;·&nbsp; <Link href="/legal" className="text-blue-400 hover:underline">All legal documents</Link></p>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose-legal">

            <div className="mb-8 p-5 rounded-xl border border-blue-500/20 bg-blue-500/5 text-sm text-blue-200 leading-relaxed">
              <strong>Important:</strong> These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between ITLOX LTD (company number registered in England and Wales, trading as AegisWire, &ldquo;AegisWire&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) and the organisation or individual accessing or using the AegisWire platform (&ldquo;Customer&rdquo;, &ldquo;you&rdquo;, &ldquo;your&rdquo;). By accessing or using any part of the AegisWire platform, you confirm that you have read, understood, and agreed to these Terms on behalf of your organisation. If you do not agree, you must not use the platform.
            </div>

            <Legal.Section number="1" title="Eligibility and Authorised Use">
              <Legal.P>The AegisWire platform is a business-to-business (&ldquo;B2B&rdquo;) service. Access is restricted to legal entities and individuals acting in a professional or commercial capacity on behalf of a registered organisation. The platform is not directed at consumers. By accessing the platform, you represent and warrant that:</Legal.P>
              <Legal.List items={[
                'You have full authority to bind your organisation to these Terms.',
                'Your organisation is a legally constituted entity in good standing.',
                'You are at least 18 years of age and have legal capacity to enter contracts.',
                'Your use of the platform does not violate any applicable law, regulation, or third-party obligation.',
              ]} />
              <Legal.P>AegisWire reserves the right to reject or terminate access for any user or organisation that fails to satisfy these eligibility requirements or that provides false or misleading information during registration or onboarding.</Legal.P>
            </Legal.Section>

            <Legal.Section number="2" title="Platform Access and Accounts">
              <Legal.P>Access to the AegisWire platform may be granted via a managed SaaS subscription, a dedicated deployment, a self-hosted licence, or a regional gateway arrangement as described in our deployment documentation. The specific features, capacity, and service levels available to you depend on the deployment model and subscription tier agreed in your order or contract.</Legal.P>
              <Legal.P>You are responsible for:</Legal.P>
              <Legal.List items={[
                'Maintaining the confidentiality and security of all credentials used to access the platform.',
                'All activity that occurs under your account or within your deployment, whether or not authorised by you.',
                'Promptly notifying AegisWire at intl@aegiswire.com upon becoming aware of any unauthorised access or credential compromise.',
                'Ensuring all users within your organisation who access the platform are aware of and comply with these Terms and the Acceptable Use Policy.',
              ]} />
              <Legal.P>AegisWire is not liable for losses arising from your failure to maintain credential security.</Legal.P>
            </Legal.Section>

            <Legal.Section number="3" title="Subscriptions, Fees, and Billing">
              <Legal.P>Where you access the platform through a managed or commercial subscription, the following terms apply:</Legal.P>
              <Legal.Subheading>3.1 Fees</Legal.Subheading>
              <Legal.P>Fees are as stated in your order documentation, proposal, or as published on the AegisWire website for standard tiers. All fees are exclusive of applicable taxes (including VAT, GST, or sales tax), which are your responsibility unless otherwise agreed in writing.</Legal.P>
              <Legal.Subheading>3.2 Billing and Payment</Legal.Subheading>
              <Legal.P>Invoices are issued in accordance with the billing cycle agreed at the time of subscription. Payment is due within 30 days of the invoice date unless otherwise agreed. AegisWire reserves the right to charge statutory interest on overdue amounts at the applicable rate under governing law.</Legal.P>
              <Legal.Subheading>3.3 Renewals</Legal.Subheading>
              <Legal.P>Subscriptions renew automatically for successive periods equal to the initial term unless either party gives written notice of non-renewal at least 30 days before the end of the then-current period. AegisWire will endeavour to notify you in advance of an upcoming renewal.</Legal.P>
              <Legal.Subheading>3.4 Price Changes</Legal.Subheading>
              <Legal.P>AegisWire reserves the right to adjust pricing at any renewal. We will provide at least 60 days&rsquo; written notice of any price increase. Your continued use of the platform after the effective date of a price change constitutes acceptance.</Legal.P>
              <Legal.Subheading>3.5 Refunds and Non-Refundable Fees</Legal.Subheading>
              <Legal.P>Except as required by applicable law or as expressly agreed in writing, all fees paid to AegisWire are non-refundable. This includes:</Legal.P>
              <Legal.List items={[
                'Fees for any subscription period that has already begun.',
                'Fees for professional services, onboarding, or implementation work, once commenced.',
                'Set-up fees, deployment fees, and licensing fees for self-hosted or dedicated environments.',
              ]} />
              <Legal.P>If AegisWire terminates your subscription without cause, we will refund a pro-rata portion of prepaid fees for the unused period. No refund is due where termination is caused by your breach of these Terms.</Legal.P>
              <Legal.Subheading>3.6 Disputed Invoices</Legal.Subheading>
              <Legal.P>If you dispute any invoice in good faith, you must notify AegisWire in writing within 14 days of the invoice date, setting out the nature and amount of the dispute. Undisputed amounts remain payable. Initiating a chargeback without first raising a dispute with AegisWire constitutes a material breach of these Terms.</Legal.P>
            </Legal.Section>

            <Legal.Section number="4" title="Acceptable Use">
              <Legal.P>Your use of the AegisWire platform is subject to our <Link href="/legal/acceptable-use" className="text-blue-400 hover:underline">Acceptable Use Policy</Link>, which is incorporated into these Terms by reference. Key prohibitions include, but are not limited to:</Legal.P>
              <Legal.List items={[
                'Using the platform to attack, probe, or penetrate systems or networks without authorisation.',
                'Transmitting malware, ransomware, or other malicious payloads.',
                'Using the platform to bypass lawful geo-restrictions on content or services in violation of the terms of the underlying service.',
                'Reselling or sub-licensing access to the platform without prior written authorisation from AegisWire.',
                'Reverse-engineering, decompiling, or attempting to extract source code from any part of the AegisWire platform.',
                'Circumventing, disabling, or interfering with platform security controls, audit logging, or policy enforcement mechanisms.',
              ]} />
              <Legal.P>Violation of the Acceptable Use Policy may result in immediate suspension or termination of access without refund.</Legal.P>
            </Legal.Section>

            <Legal.Section number="5" title="Intellectual Property">
              <Legal.Subheading>5.1 AegisWire Intellectual Property</Legal.Subheading>
              <Legal.P>All intellectual property rights in the AegisWire platform, including but not limited to software, protocols, documentation, trademarks, trade names, service marks, and design elements, are owned exclusively by AegisWire or its licensors. These Terms do not grant you any rights in AegisWire intellectual property other than the limited right to access and use the platform as expressly set out herein.</Legal.P>
              <Legal.Subheading>5.2 Customer Data</Legal.Subheading>
              <Legal.P>You retain all rights, title, and interest in data you transmit through or store within the AegisWire platform (&ldquo;Customer Data&rdquo;). You grant AegisWire a limited, non-exclusive, non-transferable licence to process Customer Data solely to the extent necessary to provide the platform services to you. AegisWire does not claim ownership of Customer Data.</Legal.P>
              <Legal.Subheading>5.3 Feedback</Legal.Subheading>
              <Legal.P>If you provide feedback, suggestions, or ideas regarding the platform, you grant AegisWire a perpetual, royalty-free, irrevocable licence to use such feedback for any purpose without obligation to you.</Legal.P>
            </Legal.Section>

            <Legal.Section number="6" title="Confidentiality">
              <Legal.P>Each party (&ldquo;Receiving Party&rdquo;) agrees to keep confidential all non-public information disclosed by the other party (&ldquo;Disclosing Party&rdquo;) that is marked as confidential or that a reasonable person would understand to be confidential given the nature of the information and the circumstances of disclosure (&ldquo;Confidential Information&rdquo;). Confidential Information does not include information that:</Legal.P>
              <Legal.List items={[
                'Is or becomes publicly known through no breach of this obligation by the Receiving Party.',
                'Was rightfully known by the Receiving Party before disclosure without restriction.',
                'Is independently developed by the Receiving Party without use of Confidential Information.',
                'Is required to be disclosed by law or court order, provided the Receiving Party gives the Disclosing Party prior written notice where legally permissible.',
              ]} />
              <Legal.P>Each party will use Confidential Information only for the purposes of performing or receiving services under these Terms and will protect it with at least the same degree of care used for its own confidential information, but not less than reasonable care.</Legal.P>
            </Legal.Section>

            <Legal.Section number="7" title="Security and Data Protection">
              <Legal.P>AegisWire implements and maintains appropriate technical and organisational security measures to protect the platform and data processed through it. Details of our security practices are set out in our <Link href="/security-trust" className="text-blue-400 hover:underline">Security &amp; Trust Centre</Link>.</Legal.P>
              <Legal.P>For Customers who act as data controllers and use AegisWire as a data processor in connection with personal data subject to GDPR, UK GDPR, or other applicable data protection legislation, our <Link href="/legal/dpa" className="text-blue-400 hover:underline">Data Processing Addendum</Link> applies and is incorporated into these Terms.</Legal.P>
              <Legal.P>You remain responsible for your own security practices, including the security of systems, credentials, and networks that interact with the AegisWire platform but are outside of AegisWire&rsquo;s direct control.</Legal.P>
            </Legal.Section>

            <Legal.Section number="8" title="Service Availability and Changes">
              <Legal.Subheading>8.1 No Guaranteed Uptime</Legal.Subheading>
              <Legal.P>Unless a specific Service Level Agreement (&ldquo;SLA&rdquo;) is agreed in writing as part of a commercial contract, AegisWire does not guarantee any specific level of availability, uptime, or performance. The platform is provided on a commercially reasonable efforts basis.</Legal.P>
              <Legal.Subheading>8.2 Scheduled and Emergency Maintenance</Legal.Subheading>
              <Legal.P>AegisWire may take the platform or elements of it offline for scheduled maintenance, updates, or emergency security patching. We will endeavour to provide advance notice of scheduled maintenance, but no notice may be possible in emergency circumstances.</Legal.P>
              <Legal.Subheading>8.3 Feature Changes</Legal.Subheading>
              <Legal.P>AegisWire reserves the right to modify, add, or discontinue features of the platform at any time. We will provide reasonable notice of material feature removals that affect your existing use. No specific feature or integration is guaranteed to remain available for any period.</Legal.P>
            </Legal.Section>

            <Legal.Section number="9" title="Third-Party Services">
              <Legal.P>The AegisWire platform may rely on or integrate with third-party services and infrastructure providers, including cloud infrastructure, identity providers, and monitoring services. AegisWire is not responsible for the availability, performance, or terms of those third-party services. You are responsible for any third-party services you independently connect to the platform.</Legal.P>
            </Legal.Section>

            <Legal.Section number="10" title="Disclaimer of Warranties">
              <Legal.P>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE AEGISWIRE PLATFORM IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo;. AEGISWIRE EXPRESSLY DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, AND ANY WARRANTIES ARISING FROM COURSE OF DEALING OR USAGE OF TRADE.</Legal.P>
              <Legal.P>AEGISWIRE DOES NOT WARRANT THAT: (A) THE PLATFORM WILL MEET YOUR SPECIFIC REQUIREMENTS; (B) THE PLATFORM WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE FROM VULNERABILITIES; (C) ANY DEFECTS WILL BE CORRECTED; OR (D) THE PLATFORM WILL BE FREE FROM THIRD-PARTY SECURITY INCIDENTS.</Legal.P>
            </Legal.Section>

            <Legal.Section number="11" title="Limitation of Liability">
              <Legal.P>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:</Legal.P>
              <Legal.Subheading>11.1 Exclusion of Consequential Loss</Legal.Subheading>
              <Legal.P>IN NO EVENT WILL AEGISWIRE OR ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, LICENSORS, OR SERVICE PROVIDERS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATING TO YOUR USE OF OR INABILITY TO USE THE PLATFORM, INCLUDING LOST PROFITS, LOSS OF REVENUE, LOSS OF DATA, LOSS OF BUSINESS OPPORTUNITY, OR REPUTATIONAL DAMAGE, EVEN IF AEGISWIRE HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</Legal.P>
              <Legal.Subheading>11.2 Cap on Liability</Legal.Subheading>
              <Legal.P>AEGISWIRE&rsquo;S TOTAL AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR YOUR USE OF THE PLATFORM, WHETHER IN CONTRACT, TORT (INCLUDING NEGLIGENCE), STATUTE, OR OTHERWISE, SHALL NOT EXCEED THE GREATER OF: (A) THE TOTAL FEES PAID BY YOU TO AEGISWIRE IN THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM; OR (B) ONE HUNDRED POUNDS STERLING (£100).</Legal.P>
              <Legal.Subheading>11.3 Exceptions</Legal.Subheading>
              <Legal.P>Nothing in these Terms excludes or limits liability for: (a) death or personal injury caused by negligence; (b) fraud or fraudulent misrepresentation; or (c) any other liability that cannot be excluded or limited by applicable law.</Legal.P>
            </Legal.Section>

            <Legal.Section number="12" title="Indemnification">
              <Legal.P>You agree to defend, indemnify, and hold harmless AegisWire and its officers, directors, employees, agents, and licensors from and against any claims, liabilities, damages, losses, costs, and expenses (including reasonable legal fees) arising out of or relating to:</Legal.P>
              <Legal.List items={[
                'Your breach of these Terms or the Acceptable Use Policy.',
                'Your use of the platform in violation of applicable law.',
                'Customer Data that infringes the intellectual property or privacy rights of any third party.',
                'Any claim by a third party arising from your deployment or use of the AegisWire platform.',
              ]} />
            </Legal.Section>

            <Legal.Section number="13" title="Suspension and Termination">
              <Legal.Subheading>13.1 Termination by You</Legal.Subheading>
              <Legal.P>You may terminate your subscription or access at any time by providing written notice to intl@aegiswire.com. Termination takes effect at the end of the then-current billing period. No refund is due for any unused portion of a prepaid subscription period unless required by law.</Legal.P>
              <Legal.Subheading>13.2 Termination or Suspension by AegisWire</Legal.Subheading>
              <Legal.P>AegisWire may suspend or terminate your access immediately and without notice if:</Legal.P>
              <Legal.List items={[
                'You breach these Terms, the Acceptable Use Policy, or any other applicable agreement.',
                'You fail to pay any undisputed invoice within the payment terms.',
                'AegisWire is required to do so by law, court order, or regulatory authority.',
                'AegisWire reasonably determines that your use poses a security risk to the platform or to other customers.',
                'AegisWire discontinues the relevant service with at least 30 days&rsquo; prior written notice.',
              ]} />
              <Legal.Subheading>13.3 Effect of Termination</Legal.Subheading>
              <Legal.P>Upon termination: (a) all licences granted under these Terms cease immediately; (b) you must cease all use of the platform; (c) AegisWire will provide a reasonable opportunity for you to export Customer Data where technically feasible, subject to any legal holds or regulatory obligations; and (d) provisions that by their nature should survive termination (including Sections 5, 6, 10, 11, 12, and 14) shall survive.</Legal.P>
            </Legal.Section>

            <Legal.Section number="14" title="Force Majeure">
              <Legal.P>Neither party shall be liable for any failure or delay in performance caused by circumstances beyond its reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, civil unrest, government actions, pandemics, widespread internet outages, or failures of third-party infrastructure providers. The affected party must notify the other party promptly and take reasonable steps to mitigate the impact.</Legal.P>
            </Legal.Section>

            <Legal.Section number="15" title="Governing Law and Dispute Resolution">
              <Legal.P>These Terms and any dispute or claim arising out of or in connection with them (including non-contractual disputes or claims) shall be governed by and construed in accordance with the laws of England and Wales.</Legal.P>
              <Legal.P>The parties agree to attempt to resolve any dispute informally by written notice to the other party describing the dispute in reasonable detail. If the dispute is not resolved within 30 days, either party may refer the matter to the courts of England and Wales, to whose exclusive jurisdiction both parties irrevocably submit.</Legal.P>
              <Legal.P className="text-yellow-400/80 text-sm">⚠ Legal counsel note: Governing law and jurisdiction should be confirmed by qualified legal advisers, particularly for contracts with customers in jurisdictions with mandatory local law protections (e.g., EU member states, US federal/state consumer laws where applicable, and other regulated markets).</Legal.P>
            </Legal.Section>

            <Legal.Section number="16" title="General Provisions">
              <Legal.Subheading>16.1 Entire Agreement</Legal.Subheading>
              <Legal.P>These Terms, together with any order documentation, the Acceptable Use Policy, the Privacy Policy, and (where applicable) the Data Processing Addendum, constitute the entire agreement between the parties regarding the subject matter and supersede all prior discussions, representations, or agreements.</Legal.P>
              <Legal.Subheading>16.2 Amendments</Legal.Subheading>
              <Legal.P>AegisWire may update these Terms from time to time. Material changes will be notified by email or prominent notice on the website at least 30 days before taking effect. Your continued use of the platform after the effective date constitutes acceptance. If you do not accept an amendment, your sole remedy is to terminate your subscription before the effective date.</Legal.P>
              <Legal.Subheading>16.3 Severability</Legal.Subheading>
              <Legal.P>If any provision of these Terms is found to be unenforceable, that provision will be modified to the minimum extent necessary to make it enforceable, and the remaining provisions will continue in full force and effect.</Legal.P>
              <Legal.Subheading>16.4 Waiver</Legal.Subheading>
              <Legal.P>Failure to enforce any provision of these Terms does not constitute a waiver of the right to enforce it in the future.</Legal.P>
              <Legal.Subheading>16.5 Assignment</Legal.Subheading>
              <Legal.P>You may not assign or transfer any of your rights or obligations under these Terms without AegisWire&rsquo;s prior written consent. AegisWire may assign these Terms in connection with a merger, acquisition, or sale of all or substantially all of its assets, with notice to you.</Legal.P>
              <Legal.Subheading>16.6 No Third-Party Beneficiaries</Legal.Subheading>
              <Legal.P>These Terms do not create any rights enforceable by any third party.</Legal.P>
            </Legal.Section>

            <Legal.Section number="17" title="Contact">
              <Legal.P>For legal notices, billing queries, or formal correspondence:</Legal.P>
              <Legal.P>
                <strong className="text-white">ITLOX LTD (trading as AegisWire)</strong><br />
                Email: <a href="mailto:legal@aegiswire.com" className="text-blue-400 hover:underline">legal@aegiswire.com</a><br />
                General: <a href="mailto:intl@aegiswire.com" className="text-blue-400 hover:underline">intl@aegiswire.com</a>
              </Legal.P>
            </Legal.Section>

            <div className="mt-10 p-5 rounded-xl border border-yellow-500/20 bg-yellow-500/5 text-sm text-yellow-200/80 leading-relaxed">
              <strong>Note for legal counsel:</strong> This document provides a commercially reasonable baseline. It should be reviewed by a qualified solicitor or attorney before being relied upon in any commercial dispute, particularly regarding: jurisdiction, liability caps, GDPR processor/controller classification, and any jurisdiction-specific consumer or data protection requirements applicable to your markets.
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}

function Section({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-white/10">
        <span className="text-blue-400 font-mono text-base mr-2">{number}.</span>{title}
      </h2>
      <div className="space-y-4 text-gray-300 leading-relaxed">{children}</div>
    </div>
  )
}

function P({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-gray-300 leading-relaxed ${className ?? ''}`}>{children}</p>
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc list-outside ml-5 space-y-1.5">
      {items.map((item, i) => (
        <li key={i} className="text-gray-300 leading-relaxed">{item}</li>
      ))}
    </ul>
  )
}

function Subheading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-base font-semibold text-white/90 mt-6 mb-2">{children}</h3>
}

const Legal = { Section, P, List, Subheading }
