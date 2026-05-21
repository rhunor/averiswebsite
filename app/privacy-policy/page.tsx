import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy — Averis Academy',
  description: 'How Averis Academy collects, uses, and protects your personal information.',
}

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section>
    <h2 className="text-[20px] font-black text-white tracking-tight mb-3">{title}</h2>
    <div className="flex flex-col gap-3 text-slate-300">{children}</div>
  </section>
)

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3 text-slate-300">
    <span className="mt-[7px] w-[6px] h-[6px] rounded-full bg-teal flex-shrink-0" />
    {children}
  </li>
)

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />

      <main className="bg-navy-darkest min-h-screen pt-[110px] pb-24">
        <div className="max-w-[760px] mx-auto px-8">

          {/* Header */}
          <div className="mb-12">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] uppercase px-4 py-[7px] rounded-full bg-teal/12 border border-teal/30 text-teal-bright mb-6">
              <span className="w-[5px] h-[5px] rounded-full bg-teal-bright" />
              Averis Academy
            </span>
            <h1 className="text-[clamp(32px,5vw,52px)] font-black tracking-[-0.04em] text-white leading-[1.06]">
              Privacy Policy
            </h1>
            <p className="text-slate-400 text-[14px] mt-3">Last updated: May 2026</p>
          </div>

          <div
            className="h-[1px] mb-10"
            style={{ background: 'linear-gradient(90deg, rgba(45,127,143,0.5), transparent)' }}
          />

          <div className="flex flex-col gap-10 text-[16px] leading-[1.8]">

            <p className="text-slate-300">
              Averis Academy, operated by <strong className="text-white">Averis Global Limited</strong>,
              is committed to protecting your personal information. This Privacy Policy explains what
              data we collect, how we use it, and your rights regarding it.
            </p>

            <Section title="Information We Collect">
              <p>When you enroll in our programs or contact us, we may collect:</p>
              <ul className="flex flex-col gap-3 mt-1">
                <Bullet>Full name and email address</Bullet>
                <Bullet>Phone number and WhatsApp contact</Bullet>
                <Bullet>Payment information (processed securely through Paystack or Flutterwave — we do not store card details)</Bullet>
                <Bullet>Location (city/state) for program localisation purposes</Bullet>
                <Bullet>Usage data such as pages visited and time spent on our website</Bullet>
              </ul>
            </Section>

            <Section title="How We Use Your Information">
              <p>We use the information we collect to:</p>
              <ul className="flex flex-col gap-3 mt-1">
                <Bullet>Process your enrollment and payments</Bullet>
                <Bullet>Deliver program content, coaching sessions, and community access</Bullet>
                <Bullet>Send important updates about your enrollment or our programs</Bullet>
                <Bullet>Respond to your enquiries via email, phone, or WhatsApp</Bullet>
                <Bullet>Improve our website and program content</Bullet>
                <Bullet>Comply with applicable Nigerian laws and regulations</Bullet>
              </ul>
            </Section>

            <Section title="Sharing Your Information">
              <p>
                We do not sell, rent, or trade your personal information to third parties. We may
                share data only with:
              </p>
              <ul className="flex flex-col gap-3 mt-1">
                <Bullet>Payment processors (Paystack, Flutterwave) solely to complete transactions</Bullet>
                <Bullet>Service providers who assist in delivering our programs, under strict confidentiality agreements</Bullet>
                <Bullet>Law enforcement or regulatory bodies where required by Nigerian law</Bullet>
              </ul>
            </Section>

            <Section title="Data Retention">
              <p>
                We retain your personal data for as long as your account is active or as needed to
                deliver our services. You may request deletion of your data at any time by contacting
                us, subject to any legal retention obligations.
              </p>
            </Section>

            <Section title="Cookies">
              <p>
                Our website may use cookies and similar technologies to improve your browsing
                experience and analyse site traffic. You can control cookie settings through your
                browser. Disabling cookies may affect certain features of our website.
              </p>
            </Section>

            <Section title="Your Rights">
              <p>You have the right to:</p>
              <ul className="flex flex-col gap-3 mt-1">
                <Bullet>Access the personal data we hold about you</Bullet>
                <Bullet>Request correction of inaccurate data</Bullet>
                <Bullet>Request deletion of your data</Bullet>
                <Bullet>Opt out of marketing communications at any time</Bullet>
              </ul>
            </Section>

            {/* Contact card */}
            <section>
              <h2 className="text-[20px] font-black text-white tracking-tight mb-4">
                Contact Us
              </h2>
              <div className="bg-white/[0.04] border border-white/8 rounded-2xl p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-lg bg-teal/15 border border-teal/25 flex items-center justify-center flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4dbdd4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </span>
                  <a href="mailto:hello@averisacademy.com" className="text-[15px] text-white hover:text-teal-bright transition-colors">
                    hello@averisacademy.com
                  </a>
                </div>
                <div className="h-[1px] bg-white/6" />
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-lg bg-teal/15 border border-teal/25 flex items-center justify-center flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4dbdd4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.74a16 16 0 0 0 6 6l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <a href="tel:+2348148818354" className="text-[15px] text-white hover:text-teal-bright transition-colors">
                    +234 814 881 8354
                  </a>
                </div>
              </div>
            </section>

            <p className="text-slate-500 text-[14px] border-t border-white/6 pt-8">
              Averis Global Limited reserves the right to update this Privacy Policy at any time.
              Changes will be posted on this page with an updated date. Continued use of our services
              constitutes acceptance of the revised policy.
            </p>

          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
