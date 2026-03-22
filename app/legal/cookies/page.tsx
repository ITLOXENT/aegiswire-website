import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cookie Policy — AegisWire',
  description: 'Information about cookies and tracking technologies used on the AegisWire website.',
}

export default function CookiesPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-10 pb-8 md:pt-16 md:pb-10 border-b border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-6 uppercase tracking-widest">Legal</div>
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">Cookie Policy</h1>
          <p className="text-gray-400">Last updated: March 2026 &nbsp;·&nbsp; <Link href="/legal" className="text-blue-400 hover:underline">All legal documents</Link></p>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="container mx-auto px-6 max-w-4xl space-y-10 text-gray-300 leading-relaxed">

          <div className="p-5 rounded-xl border border-blue-500/20 bg-blue-500/5 text-sm text-blue-200 leading-relaxed">
            This Cookie Policy explains how ITLOX LTD (trading as AegisWire) uses cookies and similar technologies on the AegisWire website (aegiswire.com). It should be read alongside our <Link href="/legal/privacy" className="text-blue-400 hover:underline">Privacy Policy</Link>.
          </div>

          <Sec title="1. What Are Cookies?">
            <P>Cookies are small text files placed on your device by a website when you visit it. They are widely used to make websites function properly, improve user experience, and provide information to website operators. Similar technologies — such as web beacons, local storage, and session tokens — serve analogous purposes.</P>
          </Sec>

          <Sec title="2. Cookies We Use">
            <P>The AegisWire website uses a minimal set of cookies, categorised as follows:</P>

            <Sub>2.1 Strictly Necessary Cookies</Sub>
            <P>These cookies are essential for the website to function and cannot be disabled. They do not store any personally identifiable information and do not require consent.</P>
            <CookieTable rows={[
              ['__aegis_session', 'Session', 'Maintains your session state for form submissions and security validation', 'AegisWire'],
              ['__Host-next-auth.*', 'Session', 'Required for Next.js platform operation and secure routing', 'AegisWire'],
            ]} />

            <Sub>2.2 Performance and Analytics Cookies</Sub>
            <P>These cookies help us understand how visitors use our website so we can improve it. Where used, they collect anonymised or aggregated data. These cookies require your consent where required by applicable law.</P>
            <P>At present, AegisWire does not deploy third-party analytics cookies. If this changes, we will update this policy and obtain appropriate consent before setting such cookies.</P>

            <Sub>2.3 Functional Cookies</Sub>
            <P>Functional cookies remember your preferences and settings to improve your experience. For example, language preferences or form field retention. AegisWire may use these within the authenticated platform portal.</P>

            <Sub>2.4 Marketing and Tracking Cookies</Sub>
            <P>AegisWire does not currently use third-party advertising or retargeting cookies on the public website. We do not sell or share browsing data with advertising networks.</P>
          </Sec>

          <Sec title="3. How Long Are Cookies Stored?">
            <P>Cookies vary in how long they remain on your device:</P>
            <UL items={[
              'Session cookies: deleted automatically when you close your browser.',
              'Persistent cookies: remain until their expiry date or until you delete them manually.',
            ]} />
            <P>The specific expiry of each cookie is shown in the table above.</P>
          </Sec>

          <Sec title="4. Third-Party Cookies">
            <P>Our website may include content or links from third-party services (such as embedded content, external links, or cloud-delivered assets). These third parties may set their own cookies, which are subject to their own privacy and cookie policies. AegisWire does not control third-party cookies.</P>
            <P>Third-party services that may be present on our website include:</P>
            <UL items={[
              'Amazon Web Services (CloudFront, Amplify) — for content delivery and hosting infrastructure.',
            ]} />
          </Sec>

          <Sec title="5. Managing Your Cookie Preferences">
            <P>You can control and manage cookies in several ways:</P>
            <Sub>5.1 Browser Settings</Sub>
            <P>All major browsers allow you to view, block, and delete cookies through their settings. Please refer to your browser&rsquo;s help documentation:</P>
            <UL items={[
              'Google Chrome: Settings → Privacy and Security → Cookies and other site data',
              'Mozilla Firefox: Settings → Privacy & Security → Cookies and Site Data',
              'Apple Safari: Preferences → Privacy → Manage Website Data',
              'Microsoft Edge: Settings → Cookies and site permissions',
            ]} />
            <P>Note that blocking strictly necessary cookies may cause parts of the website to malfunction.</P>
            <Sub>5.2 Opt-Out Tools</Sub>
            <P>If AegisWire deploys analytics services in the future, we will provide opt-out mechanisms at that time. In the meantime, you may use browser-level Do Not Track signals or privacy extensions.</P>
          </Sec>

          <Sec title="6. Cookie Consent">
            <P>Where required by law (including the ePrivacy Directive and UK PECR), AegisWire obtains consent before placing non-essential cookies. Strictly necessary cookies do not require consent.</P>
            <P>Where we have a consent mechanism in place, you can withdraw your consent at any time with the same ease as giving it. Withdrawal of consent does not affect the lawfulness of processing that took place before withdrawal.</P>
          </Sec>

          <Sec title="7. Updates to This Policy">
            <P>We may update this Cookie Policy from time to time as our use of cookies changes. We will notify you of material changes by posting a notice on our website. The &ldquo;Last updated&rdquo; date at the top of this page reflects the most recent revision.</P>
          </Sec>

          <Sec title="8. Contact">
            <P>For questions about this Cookie Policy or our use of cookies, contact:</P>
            <P>
              <strong className="text-white">ITLOX LTD (trading as AegisWire)</strong><br />
              Email: <a href="mailto:legal@aegiswire.com" className="text-blue-400 hover:underline">legal@aegiswire.com</a>
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
function CookieTable({ rows }: { rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-white/10 my-4">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/10 bg-white/5">
            {['Name', 'Duration', 'Purpose', 'Set by'].map((h, i) => (
              <th key={i} className="text-left px-4 py-3 text-white font-medium">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="border-b border-white/5 last:border-0">
              {row.map((cell, ci) => (
                <td key={ci} className="px-4 py-3 text-gray-400 align-top font-mono text-xs">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
