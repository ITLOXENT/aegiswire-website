import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy — AegisWire',
  description: 'AegisWire enterprise refund policy, cancellation terms, billing disputes, and chargeback policy.',
}

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-10 pb-8 md:pt-16 md:pb-10 border-b border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-6 uppercase tracking-widest">Legal</div>
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">Refund &amp; Cancellation Policy</h1>
          <p className="text-gray-400">Last updated: March 2026 &nbsp;·&nbsp; <Link href="/legal" className="text-blue-400 hover:underline">All legal documents</Link></p>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="container mx-auto px-6 max-w-4xl space-y-10 text-gray-300 leading-relaxed">

          <div className="p-5 rounded-xl border border-blue-500/20 bg-blue-500/5 text-sm text-blue-200 leading-relaxed">
            This Refund &amp; Cancellation Policy applies to all subscriptions, licences, professional services, and other purchases made from ITLOX LTD (trading as AegisWire). AegisWire is a business-to-business (&ldquo;B2B&rdquo;) platform. This policy does not apply to consumers and no statutory consumer cancellation rights (such as the UK Consumer Contracts Regulations 2013 or EU Directive 2011/83/EU) apply to business customers. Please read this policy carefully before placing an order.
          </div>

          <Sec title="1. General Principle — Non-Refundable Fees">
            <P>As a general rule, <strong className="text-white">all fees paid to AegisWire are non-refundable</strong>, including but not limited to:</P>
            <UL items={[
              'Subscription fees for any billing period that has commenced, whether or not the full period has been used.',
              'Set-up, onboarding, deployment, and implementation fees, once work has commenced.',
              'Professional services fees for consulting, integration, and support engagements, once the service has been delivered or commenced.',
              'Licence fees for self-hosted or dedicated deployments.',
              'Fees for add-on features, additional capacity, or supplementary services.',
              'Fees for any trial or proof-of-concept engagement that has converted to a paid subscription.',
              'Annual or multi-year prepaid subscription fees, except as expressly stated in Section 3.',
            ]} />
            <P>This policy reflects the B2B enterprise nature of the AegisWire platform and the significant provisioning, engineering, and security costs incurred by AegisWire upon the commencement of any service.</P>
          </Sec>

          <Sec title="2. Cancellation by the Customer">
            <Sub>2.1 How to Cancel</Sub>
            <P>To cancel a subscription or managed service, the Customer must provide written notice to <a href="mailto:intl@aegiswire.com" className="text-blue-400 hover:underline">intl@aegiswire.com</a> in accordance with the notice period specified in the applicable order form or contract. In the absence of a specific notice period, the following standard notice periods apply:</P>
            <NoticeTable rows={[
              ['Monthly subscription', '30 days\' written notice before the next renewal date'],
              ['Annual subscription', '60 days\' written notice before the annual renewal date'],
              ['Multi-year subscription', '90 days\' written notice before the next annual renewal date'],
              ['Managed service / dedicated deployment', 'As specified in the order form; minimum 60 days'],
            ]} />
            <Sub>2.2 Effect of Cancellation</Sub>
            <P>Upon cancellation taking effect:</P>
            <UL items={[
              'Access to the platform will continue until the end of the current paid period.',
              'No further renewal fees will be charged after the cancellation takes effect.',
              'No refund will be issued for any prepaid fees for the remaining portion of the current billing period, except as provided in Section 3.',
              'AegisWire will provide reasonable assistance with data export and offboarding for a period of 30 days following the end of the paid period.',
            ]} />
          </Sec>

          <Sec title="3. Circumstances Where Refunds May Be Considered">
            <P>Notwithstanding the general non-refundable policy, AegisWire may, at its sole discretion, consider a refund or credit in the following limited circumstances:</P>

            <Sub>3.1 AegisWire-Initiated Termination Without Cause</Sub>
            <P>If AegisWire terminates a Customer&rsquo;s subscription without cause (i.e., other than for breach, non-payment, or legal requirement), AegisWire will issue a pro-rata refund of prepaid subscription fees for the unused period from the termination date.</P>

            <Sub>3.2 Material Service Failure</Sub>
            <P>If AegisWire fails to deliver a material element of the contracted service and this failure is not remedied within a reasonable time following written notice from the Customer, AegisWire may, at its discretion, issue a partial credit or refund proportionate to the service element affected. This is not a guarantee of refund and is subject to AegisWire&rsquo;s reasonable assessment of the nature and impact of the failure.</P>

            <Sub>3.3 Duplicate Payment</Sub>
            <P>If a duplicate payment is made as a result of an administrative error, AegisWire will refund the duplicate amount promptly upon verification.</P>

            <Sub>3.4 Statutory Rights</Sub>
            <P>Nothing in this policy excludes any right to a refund that is expressly required by applicable mandatory law. AegisWire will honour such rights where legally required.</P>

            <P>Refund requests must be submitted in writing to <a href="mailto:intl@aegiswire.com" className="text-blue-400 hover:underline">intl@aegiswire.com</a> with full details of the request and supporting documentation. AegisWire will respond within 10 business days.</P>
          </Sec>

          <Sec title="4. Enterprise Contract Customers">
            <P>Customers who have executed a separate enterprise agreement or order form with AegisWire may have specific cancellation and refund terms set out in that agreement. Where those terms conflict with this policy, the terms of the enterprise agreement take precedence.</P>
          </Sec>

          <Sec title="5. Free Trials and Proof-of-Concept Engagements">
            <P>Free trials and proof-of-concept engagements are provided at AegisWire&rsquo;s discretion and are subject to separate trial terms agreed at the time. There are no fees during a free trial period and therefore no refund entitlement. Upon conversion from a free trial to a paid subscription, the standard non-refundable fee policy applies from the first day of the paid term.</P>
          </Sec>

          <Sec title="6. Billing Disputes">
            <P>If a Customer believes an invoice is incorrect, the Customer must:</P>
            <UL items={[
              'Notify AegisWire in writing within 14 days of the invoice date, specifying the disputed amount and the reason for the dispute.',
              'Pay all undisputed amounts by the invoice due date.',
              'Engage in good faith to resolve the dispute within 30 days of notification.',
            ]} />
            <P>AegisWire will investigate all billing disputes raised in good faith and provide a written response within 10 business days. Where a billing error is confirmed, AegisWire will issue a credit note or corrected invoice promptly.</P>
          </Sec>

          <Sec title="7. Chargeback Policy">
            <P>Initiating a chargeback or payment dispute with a bank or payment provider without first raising a billing dispute with AegisWire under Section 6 constitutes a material breach of the <Link href="/legal/terms" className="text-blue-400 hover:underline">Terms of Service</Link>. AegisWire reserves the right to:</P>
            <UL items={[
              'Immediately suspend access to the platform upon receipt of an unnotified chargeback.',
              'Pursue recovery of the full disputed amount plus any chargeback fees, administrative costs, and legal expenses incurred.',
              'Terminate the Customer&rsquo;s account and refer the matter to debt collection or legal proceedings.',
              'Report repeated or bad-faith chargeback activity to credit reference agencies or relevant authorities where permitted by law.',
            ]} />
            <P>AegisWire takes chargeback abuse seriously. Customers who have a genuine billing dispute are strongly encouraged to use the dispute resolution process in Section 6 rather than initiating chargebacks.</P>
          </Sec>

          <Sec title="8. Refund Method">
            <P>Where a refund is approved, it will be issued via the original payment method within 15 business days of approval. Where the original payment method is no longer available, AegisWire will arrange an alternative payment method with the Customer. Refunds are issued in the currency of the original payment.</P>
          </Sec>

          <Sec title="9. Changes to This Policy">
            <P>AegisWire may update this Refund &amp; Cancellation Policy from time to time. The updated policy will apply to orders placed after the effective date of the update. For existing subscriptions, AegisWire will provide at least 30 days&rsquo; notice of any material change to the refund policy before it takes effect.</P>
          </Sec>

          <Sec title="10. Contact">
            <P>For refund requests, cancellation notices, or billing dispute enquiries:</P>
            <P>
              <strong className="text-white">ITLOX LTD (trading as AegisWire)</strong><br />
              Email: <a href="mailto:intl@aegiswire.com" className="text-blue-400 hover:underline">intl@aegiswire.com</a><br />
              Legal: <a href="mailto:legal@aegiswire.com" className="text-blue-400 hover:underline">legal@aegiswire.com</a>
            </P>
          </Sec>

          <div className="p-5 rounded-xl border border-yellow-500/20 bg-yellow-500/5 text-sm text-yellow-200/80 leading-relaxed">
            <strong>Note for legal counsel:</strong> This policy should be reviewed in the context of the jurisdictions in which AegisWire&rsquo;s enterprise customers are located, particularly with respect to any mandatory statutory rights that cannot be excluded for business customers under applicable local law.
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
function NoticeTable({ rows }: { rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-white/10 my-4">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/10 bg-white/5">
            {['Subscription Type', 'Notice Period Required'].map((h, i) => (
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
