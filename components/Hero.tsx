'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ParticleCanvas from './ParticleCanvas'
import ScrambleText from './ScrambleText'

const fadeUp = {
  hidden: { opacity: 0, y: 52 },
  show:   (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

function MiniChart() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const bars = el.querySelectorAll('.bar')
    bars.forEach((bar, i) => {
      setTimeout(() => bar.classList.add('grown'), 1600 + i * 110)
    })
  }, [])

  const heights = ['22%', '37%', '52%', '64%', '79%', '91%', '100%']

  return (
    <div ref={containerRef} className="flex items-end gap-[5px] h-[54px]">
      {heights.map((h, i) => (
        <div
          key={i}
          className="bar flex-1 rounded-t-[3px] bg-gradient-to-t from-teal-dark to-teal-bright"
          style={{ height: h }}
        />
      ))}
    </div>
  )
}

function IncomeCard() {
  return (
    <div className="w-[296px] bg-white/[0.04] border border-white/[0.09] backdrop-blur-2xl rounded-2xl p-7 absolute top-1/2 left-1/2 animate-[cardBob1_7s_ease-in-out_infinite] z-[3]">
      <div className="flex justify-between items-start mb-[18px]">
        <span className="text-[11px] font-semibold text-white/45 uppercase tracking-[0.09em]">Monthly Earnings</span>
        <span className="text-[11px] font-bold px-[10px] py-[3px] rounded-full bg-teal/20 border border-teal/35 text-teal-bright">↑ Active</span>
      </div>
      <div className="text-[42px] font-black text-white tracking-[-0.04em] leading-none mb-[5px]">₦847K</div>
      <div className="text-[12px] text-white/38 mb-[22px]">Month 4 · Adaeze O.</div>
      <MiniChart />
    </div>
  )
}

function NotifCard({ className, icon, iconBg, title, sub }: {
  className: string; icon: string; iconBg: string; title: string; sub: string
}) {
  return (
    <div className={`notif absolute bg-white rounded-2xl p-[13px_16px] flex items-center gap-3 shadow-[0_24px_60px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.07)] min-w-[196px] z-[4] ${className}`}>
      <div className={`w-[38px] h-[38px] rounded-[9px] flex items-center justify-center text-[19px] flex-shrink-0 ${iconBg}`}>{icon}</div>
      <div>
        <div className="text-[13px] font-bold text-slate-900">{title}</div>
        <div className="text-[11px] text-slate-500 leading-[1.4]">{sub}</div>
      </div>
    </div>
  )
}

export default function Hero() {
  const { scrollY } = useScroll()
  const gridY = useTransform(scrollY, [0, 600], [0, 80])

  return (
    <section
      id="hero"
      className="min-h-screen bg-navy-darkest relative overflow-hidden flex items-center pt-[130px] pb-20"
    >
      {/* Canvas particles */}
      <ParticleCanvas />

      {/* Gradient overlays */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 65% 65% at 68% 48%, rgba(45,127,143,0.13) 0%, transparent 60%), radial-gradient(ellipse 45% 60% at 8% 88%, rgba(26,58,82,0.55) 0%, transparent 52%)',
      }} />
      <div className="absolute inset-0 noise opacity-[0.03] pointer-events-none" />

      {/* Grid background with parallax */}
      <motion.div
        className="absolute inset-0 grid-bg pointer-events-none"
        style={{ y: gridY }}
      />

      <div className="max-w-[1240px] mx-auto px-8 relative z-[2] w-full grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-[72px] items-center">

        {/* ── Left ── */}
        <div>
          {/* Pill */}
          <motion.div
            variants={fadeUp} custom={0}
            initial="hidden" animate="show"
            className="mb-7"
          >
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.12em] uppercase px-4 py-[7px] rounded-full bg-teal/12 border border-teal/30 text-teal-bright">
              <span className="w-[5px] h-[5px] rounded-full bg-teal-bright animate-[pillDot_2s_ease-in-out_infinite]" />
              Nigeria&apos;s Premier Wealth-Building Platform
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-[clamp(44px,5.8vw,84px)] font-black leading-[1.0] tracking-[-0.045em] text-white mb-7">
            <motion.span variants={fadeUp} custom={0.1} initial="hidden" animate="show" className="block text-white/88">
              Stop Trading Time
            </motion.span>
            <motion.span variants={fadeUp} custom={0.2} initial="hidden" animate="show" className="block">
              For Money.
            </motion.span>
            <motion.span variants={fadeUp} custom={0.32} initial="hidden" animate="show" className="block">
              <span
                className="font-serif italic font-extrabold"
                style={{
                  background: 'linear-gradient(95deg, #2d7f8f 20%, #4dbdd4 80%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                <ScrambleText text="Build Wealth." delay={1100} />
              </span>
            </motion.span>
          </h1>

          {/* Sub */}
          <motion.p
            variants={fadeUp} custom={0.42} initial="hidden" animate="show"
            className="text-[clamp(15px,1.5vw,18px)] text-white/58 leading-[1.82] max-w-[510px] mb-11"
          >
            We teach Nigerians to earn{' '}
            <strong className="text-white/90 font-semibold">₦500K–₦1M/month</strong> through digital
            marketing, then invest it into{' '}
            <strong className="text-white/90 font-semibold">₦10M–₦50M+ portfolios.</strong> Not just a
            course. A complete wealth system.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp} custom={0.52} initial="hidden" animate="show"
            className="flex gap-4 flex-wrap mb-16"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-[10px] px-8 py-4 bg-teal text-white text-[15px] font-bold rounded-lg hover:bg-teal-light hover:-translate-y-[2px] hover:shadow-[0_18px_44px_rgba(45,127,143,0.4)] transition-all duration-300 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.12] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
              Book a Free Call
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M2.5 7.5H12.5M7.5 2.5L12.5 7.5L7.5 12.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-[10px] px-8 py-4 bg-transparent text-white text-[15px] font-bold rounded-lg border border-white/28 hover:border-white/65 hover:bg-white/8 hover:-translate-y-[2px] transition-all duration-300"
            >
              See How It Works
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M7.5 2.5V12.5M2.5 7.5L7.5 12.5L12.5 7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp} custom={0.62} initial="hidden" animate="show"
            className="flex border-t border-white/8 pt-9"
          >
            {[
              { val: '70+',    label: 'Active Members',   teal: true },
              { val: '₦2.4M', label: 'Week 1 Revenue',   teal: false },
              { val: '₦5M',   label: 'Founder / Month',  teal: false },
            ].map((s, i, arr) => (
              <div
                key={s.label}
                className={`flex-1 ${i !== 0 ? 'pl-7' : ''} ${i !== arr.length - 1 ? 'pr-7 border-r border-white/8' : ''}`}
              >
                <div className="text-[clamp(20px,2.4vw,30px)] font-black text-white tracking-[-0.04em] leading-none mb-[5px]">
                  <span className="text-teal-bright">{s.val}</span>
                </div>
                <div className="text-[11px] text-white/38 font-medium uppercase tracking-[0.09em]">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right (hidden on mobile) ── */}
        <motion.div
          initial={{ opacity: 0, x: 48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="hidden lg:flex relative items-center justify-center h-[520px]"
        >
          <IncomeCard />
          <NotifCard
            className="top-10 -right-6 animate-[cardBob2_6.5s_ease-in-out_infinite] [animation-delay:1s]"
            icon="🎉" iconBg="bg-emerald-50"
            title="New Sale!" sub={"+₦45,000 commission\njust now"}
          />
          <NotifCard
            className="bottom-[68px] -left-6 animate-[cardBob3_8s_ease-in-out_infinite] [animation-delay:2.5s]"
            icon="🚀" iconBg="bg-blue-50"
            title="Adaeze hit ₦1M/month!" sub="Day 45 in the Academy"
          />
        </motion.div>

      </div>
    </section>
  )
}
