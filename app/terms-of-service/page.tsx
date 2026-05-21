import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service — Averis Academy',
  description: 'Terms and conditions governing use of Averis Academy programs and services.',
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

export default function TermsOfService() {
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
              Terms of Service
            </h1>
            <p className="text-slate-400 text-[14px] mt-3">Last updated: May 2026</p>
          </div>

          <div
            className="h-[1px] mb-10"
            style={{ background: 'linear-gradient(90deg, rgba(45,127,143,0.5), transparent)' }}
          />

          <div className="flex flex-col gap-10 text-[16px] leading-[1.8]">

            <p className="text-slate-300">
              By enrolling in or accessing any Averis Academy program or service, you agree to be
              bound by these Terms of Service. Please read them carefully. These terms are governed
              by the laws of the Federal Republic of Nigeria.
            </p>

            <Section title="1. Acceptance of Terms">
              <p>
                These Terms of Service constitute a legally binding agreement between you and
                <strong className="text-white"> Averis Global Limited</strong> ("Averis Academy",
                "we", "us"). By completing enrollment and making payment, you confirm that you have
                read, understood, and agreed to these terms.
              </p>
            </Section>

            <Section title="2. Our Services">
              <p>Averis Academy provides digital education services including:</p>
              <ul className="flex flex-col gap-3 mt-1">
                <Bullet>Online digital marketing training modules</Bullet>
                <Bullet>Weekly live group coaching sessions</Bullet>
                <Bullet>Peer accountability support and community access</Bullet>
                <Bullet>Digital resources, templates, and training materials</Bullet>
              </ul>
              <p className="mt-3">
                All program content is for educational purposes only. We do not guarantee specific
                income outcomes — results depend on your individual effort, consistency, and
                application of the skills taught.
              </p>
            </Section>

            <Section title="3. Enrollment and Payment">
              <ul className="flex flex-col gap-3">
                <Bullet>Enrollment is confirmed upon receipt of full payment via our authorised payment processors (Paystack or Flutterwave).</Bullet>
                <Bullet>Prices are displayed in Nigerian Naira (₦) and are subject to change without prior notice for new enrollments.</Bullet>
                <Bullet>Your enrollment fee grants you access to the program content for the duration specified at the time of purchase.</Bullet>
              </ul>
            </Section>

            <Section title="4. Refund Policy">
              <p>
                We offer a <strong className="text-white">7-day refund policy</strong> on eligible
                purchases. Please refer to our full{' '}
                <a href="/refund-policy" className="text-teal-bright hover:underline">
                  Refund Policy
                </a>{' '}
                for complete eligibility criteria and instructions on how to request a refund.
              </p>
            </Section>

            <Section title="5. Intellectual Property">
              <p>
                All content provided through Averis Academy — including videos, written materials,
                templates, and coaching recordings — is the sole property of Averis Global Limited.
                You may not reproduce, distribute, sell, or share any program content without our
                express written permission.
              </p>
            </Section>

            <Section title="6. Code of Conduct">
              <p>As a member of Averis Academy, you agree to:</p>
              <ul className="flex flex-col gap-3 mt-1">
                <Bullet>Treat fellow students, coaches, and staff with respect at all times.</Bullet>
                <Bullet>Not share your login credentials or program access with any third party.</Bullet>
                <Bullet>Not use the program content, community, or resources for fraudulent or illegal purposes.</Bullet>
                <Bullet>Engage honestly and constructively in all coaching and community interactions.</Bullet>
              </ul>
              <p className="mt-3">
                Violation of this code may result in immediate removal from the program without
                a refund.
              </p>
            </Section>

            <Section title="7. Disclaimer of Warranties">
              <p>
                Averis Academy programs are provided "as is". We make no guarantees regarding
                specific financial outcomes, income levels, or business results. Testimonials and
                case studies shared on our website represent individual results and are not typical.
                Your results will depend entirely on your own effort and circumstances.
              </p>
            </Section>

            <Section title="8. Limitation of Liability">
              <p>
                To the fullest extent permitted by Nigerian law, Averis Global Limited shall not
                be liable for any indirect, incidental, or consequential damages arising from your
                use of our programs or services. Our total liability shall not exceed the amount
                you paid for your enrollment.
              </p>
            </Section>

            <Section title="9. Changes to These Terms">
              <p>
                We reserve the right to update these Terms of Service at any time. Updated terms
                will be posted on this page. Your continued use of our services after any changes
                constitutes acceptance of the revised terms.
              </p>
            </Section>

            {/* Contact card */}
            <section>
              <h2 className="text-[20px] font-black text-white tracking-tight mb-4">
                10. Contact Us
              </h2>
              <p className="text-slate-300 mb-5">
                If you have any questions about these Terms, please contact us:
              </p>
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
                <div className="h-[1px] bg-white/6" />
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-lg bg-teal/15 border border-teal/25 flex items-center justify-center flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4dbdd4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <span className="text-[15px] text-white">
                    8 Tulip Heaven Estate, Chevron Alternative, Lekki, Lagos
                  </span>
                </div>
              </div>
            </section>

            <p className="text-slate-500 text-[14px] border-t border-white/6 pt-8">
              These Terms of Service were last revised in May 2026 and are effective immediately
              for all new enrollments.
            </p>

          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
