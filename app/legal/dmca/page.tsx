import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'DMCA & Intellectual Property Notice — AegisWire',
  description: 'AegisWire DMCA policy, IP complaint procedure, trademark notice, and copyright information.',
}

export default function DmcaPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-10 pb-8 md:pt-16 md:pb-10 border-b border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-6 uppercase tracking-widest">Legal</div>
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">DMCA &amp; Intellectual Property Notice</h1>
          <p className="text-gray-400">Last updated: March 2026 &nbsp;·&nbsp; <Link href="/legal" className="text-blue-400 hover:underline">All legal documents</Link></p>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="container mx-auto px-6 max-w-4xl space-y-10 text-gray-300 leading-relaxed">

          <div className="p-5 rounded-xl border border-blue-500/20 bg-blue-500/5 text-sm text-blue-200 leading-relaxed">
            This notice sets out AegisWire&rsquo;s intellectual property rights, trademark policy, and the procedure for submitting intellectual property complaints, including DMCA takedown notices. AegisWire is operated by ITLOX LTD (trading as AegisWire).
          </div>

          <Sec title="1. Ownership of Intellectual Property">
            <P>All intellectual property rights in and to the AegisWire platform, website, documentation, marketing materials, software, protocols, trade names, trademarks, service marks, logos, and design elements are owned by or licensed to ITLOX LTD. These include, without limitation:</P>
            <UL items={[
              'The AegisWire name, brand identity, and logo.',
              'The AegisWire platform software, including all source code, object code, algorithms, and underlying architecture.',
              'All documentation, white papers, technical specifications, and API references.',
              'All marketing and promotional content on the aegiswire.com website.',
              'All patents (granted and pending), design rights, database rights, and trade secrets relating to the platform.',
            ]} />
            <P>Nothing on this website or within the platform constitutes a transfer or licence of any intellectual property rights except as expressly stated in the applicable <Link href="/legal/terms" className="text-blue-400 hover:underline">Terms of Service</Link>.</P>
          </Sec>

          <Sec title="2. Trademark Notice">
            <P>The following are trademarks or registered trademarks of ITLOX LTD:</P>
            <UL items={[
              'AegisWire™',
              'The AegisWire shield logo and associated design marks.',
            ]} />
            <P>Use of AegisWire trademarks without prior written authorisation from ITLOX LTD is strictly prohibited. Specifically, you may not:</P>
            <UL items={[
              'Use any AegisWire trademark in a company name, trading name, domain name, or product name.',
              'Use any AegisWire trademark in a manner that implies endorsement, partnership, or affiliation with AegisWire where none exists.',
              'Use a confusingly similar name, logo, or mark that could mislead consumers or create a likelihood of confusion with AegisWire.',
              'Incorporate any AegisWire trademark into your own branding, marketing, or promotional materials without written authorisation.',
            ]} />
            <P>Nominative fair use of the AegisWire name (for example, to accurately identify AegisWire as a service you use) is permitted, provided it does not imply endorsement and complies with applicable law. For trademark licencing enquiries, contact <a href="mailto:legal@aegiswire.com" className="text-blue-400 hover:underline">legal@aegiswire.com</a>.</P>
          </Sec>

          <Sec title="3. Copyright Notice">
            <P>© 2024–2026 ITLOX LTD. All rights reserved.</P>
            <P>All content on the AegisWire website, including but not limited to text, graphics, images, icons, code, and the selection and arrangement thereof, is protected by copyright law. Reproduction, distribution, public display, creation of derivative works, or any other use of copyrighted content without prior written permission from ITLOX LTD is prohibited, except where expressly permitted by applicable law (for example, fair use or fair dealing).</P>
            <P>Permitted use: You may view and print single copies of pages from this website for your personal, non-commercial use, provided you retain all copyright and proprietary notices.</P>
          </Sec>

          <Sec title="4. DMCA Takedown Procedure">
            <P>AegisWire respects the intellectual property rights of others. If you believe that material on the AegisWire website or accessible through the platform infringes your copyright, you may submit a written notice to our designated agent in accordance with the Digital Millennium Copyright Act (17 U.S.C. § 512) or equivalent applicable law. Your notice must include:</P>
            <UL items={[
              'A physical or electronic signature of a person authorised to act on behalf of the copyright owner.',
              'Identification of the copyrighted work claimed to have been infringed, or a representative list of works if multiple works are at issue.',
              'Identification of the allegedly infringing material and information sufficient to locate it (e.g., URL).',
              'Your contact information, including your name, address, telephone number, and email address.',
              'A statement that you have a good faith belief that the use of the material in the manner complained of is not authorised by the copyright owner, its agent, or the law.',
              'A statement, made under penalty of perjury, that the information in your notice is accurate and that you are authorised to act on behalf of the copyright owner.',
            ]} />
            <P>Send takedown notices to:</P>
            <div className="p-4 rounded-lg border border-white/10 bg-white/2 font-mono text-sm text-gray-300">
              DMCA Agent: ITLOX LTD (trading as AegisWire)<br />
              Email: <a href="mailto:legal@aegiswire.com" className="text-blue-400 hover:underline">legal@aegiswire.com</a><br />
              Subject line: DMCA Takedown Notice
            </div>
            <P>We will review properly submitted notices and act expeditiously where infringement is confirmed.</P>
            <P className="text-yellow-400/80 text-sm">⚠ Warning: Submitting a false or misleading DMCA notice may expose you to civil liability under 17 U.S.C. § 512(f), including costs and legal fees.</P>
          </Sec>

          <Sec title="5. Counter-Notice Procedure">
            <P>If material you posted or submitted has been removed in response to a DMCA notice and you believe the removal was made in error (for example, because the material was your own work or you had permission to use it), you may submit a counter-notice. Your counter-notice must include:</P>
            <UL items={[
              'Your physical or electronic signature.',
              'Identification of the material removed and its location before removal.',
              'A statement under penalty of perjury that you have a good faith belief that the material was removed as a result of mistake or misidentification.',
              'Your name, address, telephone number, and email address.',
              'A statement consenting to jurisdiction of the Federal District Court for the judicial district in which you are located (or, if outside the US, the courts of England and Wales).',
            ]} />
            <P>Send counter-notices to the same address as takedown notices. Following receipt of a valid counter-notice, we may restore the removed material after forwarding the counter-notice to the original complainant and allowing 10 business days for that party to seek a court order.</P>
          </Sec>

          <Sec title="6. Repeat Infringer Policy">
            <P>AegisWire maintains a policy of terminating, in appropriate circumstances, the accounts of users and customers who are found to be repeat infringers of intellectual property rights. This determination is made at AegisWire&rsquo;s sole discretion, taking into account the nature and frequency of infringement and applicable law.</P>
          </Sec>

          <Sec title="7. Other IP Complaints">
            <P>For intellectual property complaints other than copyright claims (for example, trademark infringement, patent infringement, or trade secret misappropriation), contact <a href="mailto:legal@aegiswire.com" className="text-blue-400 hover:underline">legal@aegiswire.com</a>. Please include a detailed description of your concern, the intellectual property right you believe has been infringed, and the material at issue.</P>
          </Sec>

          <Sec title="8. Open Source Acknowledgement">
            <P>The AegisWire platform may incorporate open source software components. Where such components are used, they are used in compliance with the applicable open source licences. AegisWire does not claim ownership of any open source software incorporated into the platform. For enquiries about open source licence compliance, contact <a href="mailto:legal@aegiswire.com" className="text-blue-400 hover:underline">legal@aegiswire.com</a>.</P>
          </Sec>

          <Sec title="9. Contact">
            <P>
              <strong className="text-white">ITLOX LTD (trading as AegisWire)</strong><br />
              Legal &amp; IP: <a href="mailto:legal@aegiswire.com" className="text-blue-400 hover:underline">legal@aegiswire.com</a>
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
