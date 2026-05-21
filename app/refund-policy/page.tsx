import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Refund Policy — Averis Academy',
  description: 'Averis Academy refund policy. Learn about our 7-day refund window, eligibility criteria, and how to request a refund.',
}

export default function RefundPolicy() {
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
              Refund Policy
            </h1>
            <p className="text-slate-400 text-[14px] mt-3">Last updated: May 2026</p>
          </div>

          <div
            className="h-[1px] mb-10"
            style={{ background: 'linear-gradient(90deg, rgba(45,127,143,0.5), transparent)' }}
          />

          {/* Body */}
          <div className="flex flex-col gap-10 text-[16px] leading-[1.8]">

            {/* Intro */}
            <p className="text-slate-300">
              We offer a <strong className="text-white font-bold">7-day refund policy</strong> on all
              eligible Averis Academy purchases. If you genuinely engage with the program and are not
              satisfied, you may request a refund within <strong className="text-white font-bold">7 days</strong>{' '}
              of your enrollment date. Refund requests made after 7 days will not be honoured.
            </p>

            {/* Eligibility */}
            <section>
              <h2 className="text-[20px] font-black text-white tracking-tight mb-3">
                Eligibility for a Refund
              </h2>
              <p className="text-slate-300 mb-4">To be eligible for a refund:</p>
              <ul className="flex flex-col gap-3">
                {[
                  'The request must be made within 7 days of your enrollment date.',
                  'You must not have completed more than 20% of the program modules.',
                  'Proof of purchase must be provided.',
                  'A brief written reason for the refund request must be included.',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-slate-300">
                    <span className="mt-[7px] w-[6px] h-[6px] rounded-full bg-teal flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Non-refundable */}
            <section>
              <h2 className="text-[20px] font-black text-white tracking-tight mb-3">
                Non-Refundable Items
              </h2>
              <ul className="flex flex-col gap-3">
                {[
                  'Live coaching sessions that have already taken place.',
                  'Digital materials or downloads that have been accessed.',
                  'Enrollments where more than 20% of the modules have been completed.',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-slate-300">
                    <span className="mt-[7px] w-[6px] h-[6px] rounded-full bg-teal/40 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* How to request */}
            <section>
              <h2 className="text-[20px] font-black text-white tracking-tight mb-3">
                How to Request a Refund
              </h2>
              <p className="text-slate-300 mb-6">
                To request a refund, contact us by email with your order details and reason for the
                request. We aim to respond to all refund requests within 2 business days.
              </p>

              <div className="bg-white/[0.04] border border-white/8 rounded-2xl p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-lg bg-teal/15 border border-teal/25 flex items-center justify-center flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4dbdd4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[12px] text-slate-500 uppercase tracking-[0.1em] font-bold">Email</p>
                    <a href="mailto:hello@averisacademy.com" className="text-[15px] text-white hover:text-teal-bright transition-colors">
                      hello@averisacademy.com
                    </a>
                  </div>
                </div>

                <div className="h-[1px] bg-white/6" />

                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-lg bg-teal/15 border border-teal/25 flex items-center justify-center flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4dbdd4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.74a16 16 0 0 0 6 6l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[12px] text-slate-500 uppercase tracking-[0.1em] font-bold">Phone</p>
                    <a href="tel:+2348148818354" className="text-[15px] text-white hover:text-teal-bright transition-colors">
                      +234 814 881 8354
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Processing time */}
            <section className="bg-teal/8 border border-teal/20 rounded-2xl p-6">
              <h2 className="text-[17px] font-black text-white tracking-tight mb-2">
                Processing Time
              </h2>
              <p className="text-slate-300">
                Once your refund is approved, it will be processed back to your original payment
                method within <strong className="text-white font-bold">5–10 business days</strong>,
                depending on your payment provider.
              </p>
            </section>

            {/* Footer note */}
            <p className="text-slate-500 text-[14px] border-t border-white/6 pt-8">
              By enrolling in Averis Academy, you confirm that you have read and agreed to this
              Refund Policy. Averis Global Limited reserves the right to update this policy at any
              time. Continued use of our services constitutes acceptance of the revised terms.
            </p>

          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
