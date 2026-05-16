'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 1700
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.floor(eased * target))
      if (p < 1) requestAnimationFrame(tick)
      else setCount(target)
    }
    requestAnimationFrame(tick)
  }, [inView, target])

  return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
  { display: <><Counter target={70} />+</>,           label: 'Members Enrolled' },
  { display: <>₦2.4<span className="text-teal-bright">M</span></>, label: 'Week 1 Revenue' },
  { display: <><Counter target={6} /><span className="text-teal-bright"> Mo.</span></>, label: 'To ₦500K–₦1M/Month' },
  { display: <><Counter target={12} /><span className="text-teal-bright"> Mo.</span></>, label: 'Founder: ₦0 → ₦5M' },
]

const testimonials = [
  {
    initials: 'AO',
    name: 'Adaeze Okonkwo',
    detail: 'Lagos, Nigeria · Academy Member',
    quote: '"I was skeptical at first — I\'ve tried other courses and got nothing. But Averis is different. They force you to take action. I made my first ₦45,000 in 11 days. My first online money ever."',
    badge: '🔥 ₦45,000 in 11 days',
  },
  {
    initials: 'KA',
    name: 'Kunle Adeyemi',
    detail: 'Ibadan, Nigeria · Former Banker',
    quote: '"I had a 9-5 paying ₦80K/month. Within 3 months on Averis I was making more from the Academy than my job. I quit last week. Best decision of my life."',
    badge: '🚀 Quit 9-5 after Month 3',
  },
  {
    initials: 'NC',
    name: 'Ngozi Chukwu',
    detail: 'Enugu, Nigeria · Stay-at-Home Mum',
    quote: '"As a stay-at-home mum I needed flexibility. The accountability trios kept me on track even when the kids were overwhelming. I made ₦280,000 last month from my phone."',
    badge: '💪 ₦280,000 last month',
  },
]

export default function Proof() {
  return (
    <section id="proof" className="py-[120px] bg-navy-darkest relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] h-[760px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(45,127,143,0.08) 0%, transparent 65%)' }} />

      <div className="max-w-[1240px] mx-auto px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-[560px] mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-60px' }}
            className="mb-5"
          >
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.12em] uppercase px-4 py-[7px] rounded-full bg-white/8 border border-white/18 text-white/80">
              <span className="w-[5px] h-[5px] rounded-full bg-teal-bright animate-[pillDot_2s_ease-in-out_infinite]" />
              Real Results
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            viewport={{ once: true, margin: '-60px' }}
            className="text-[clamp(32px,4.2vw,56px)] font-black tracking-[-0.04em] leading-[1.06] text-white mb-5"
          >
            Numbers don&apos;t{' '}
            <em className="font-serif italic font-extrabold text-teal-bright">lie.</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            viewport={{ once: true, margin: '-60px' }}
            className="text-[17px] text-white/70 leading-[1.78]"
          >
            Week 1 alone: 70 members, ₦2.45M in revenue. These aren&apos;t projections — they&apos;re
            what happened before we even finished this website.
          </motion.p>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/6 border border-white/6 rounded-2xl overflow-hidden mb-[60px]"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-white/[0.025] px-6 py-8 text-center hover:bg-teal/10 transition-colors duration-300"
            >
              <div className="text-[clamp(26px,3vw,40px)] font-black text-white tracking-[-0.04em] leading-none mb-[9px]">
                {s.display}
              </div>
              <div className="text-[11px] text-white/60 uppercase tracking-[0.09em] font-semibold">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 48 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="bg-white/[0.04] border border-white/7 rounded-2xl p-8 relative hover:bg-white/7 hover:border-teal/30 transition-colors duration-300 cursor-default"
            >
              {/* Decorative quote */}
              <span className="absolute top-3 right-6 font-serif text-[88px] text-teal/13 leading-none italic select-none">
                &ldquo;
              </span>

              <div className="flex gap-1 mb-[17px]">
                {Array(5).fill(0).map((_, i) => (
                  <span key={i} className="text-amber-400 text-[13px]">★</span>
                ))}
              </div>

              <p className="text-[15px] text-white/73 leading-[1.78] mb-6 font-serif italic">
                {t.quote}
              </p>

              <div className="flex items-center gap-[13px]">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-navy-light to-teal-dark flex items-center justify-center text-[14px] font-black text-white flex-shrink-0 border-[1.5px] border-teal/35">
                  {t.initials}
                </div>
                <div>
                  <div className="text-[14px] font-bold text-white">{t.name}</div>
                  <div className="text-[12px] text-white/60">{t.detail}</div>
                  <div className="inline-flex items-center gap-[5px] mt-[9px] text-[12px] font-bold px-3 py-1 rounded-full bg-teal/15 border border-teal/25 text-teal-bright">
                    {t.badge}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
