'use client'

import { motion } from 'framer-motion'
import ScrambleText from './ScrambleText'

const MONTHS = [
  { label: 'Month 1', amount: '₦295K', pct: 26 },
  { label: 'Month 2', amount: '₦490K', pct: 43 },
  { label: 'Month 3', amount: '₦612K', pct: 55 },
  { label: 'Month 4', amount: '₦847K', pct: 74 },
  { label: 'Month 5', amount: '₦930K', pct: 83 },
  { label: 'Month 6', amount: '₦1.1M',  pct: 97 },
]

function GrowthChart() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-8">
        <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/45">
          Typical Member Trajectory
        </span>
        <div className="flex items-center gap-[7px]">
          <span className="relative flex h-[7px] w-[7px]">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-[7px] w-[7px] bg-emerald-400" />
          </span>
          <span className="text-[11px] text-white/35">Live</span>
        </div>
      </div>

      <div className="flex flex-col gap-[18px]">
        {MONTHS.map((m, i) => (
          <div key={m.label}>
            <div className="flex items-center justify-between mb-[7px]">
              <span className="text-[11px] font-medium text-white/38">{m.label}</span>
              <span className="text-[13px] font-black text-white tracking-tight">{m.amount}</span>
            </div>
            <div className="h-[5px] rounded-full bg-white/[0.06] overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.1, delay: 0.65 + i * 0.14, ease: [0.34, 1.56, 0.64, 1] }}
                style={{
                  width: `${m.pct}%`,
                  transformOrigin: 'left',
                  background: 'linear-gradient(90deg, #2d7f8f, #4dbdd4)',
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-9 pt-7 border-t border-white/[0.07]">
        <div>
          <div className="text-[22px] font-black text-teal-bright tracking-tight">₦1.1M+</div>
          <div className="text-[11px] text-white/35 uppercase tracking-[0.09em] mt-[3px]">Month 6 avg.</div>
        </div>
        <div className="text-right">
          <div className="text-[22px] font-black text-white tracking-tight">70+</div>
          <div className="text-[11px] text-white/35 uppercase tracking-[0.09em] mt-[3px]">Members inside</div>
        </div>
      </div>

      <p className="mt-6 text-[11px] text-white/22 italic text-center leading-relaxed">
        Every bar above was once ₦0.
      </p>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-navy-darkest relative overflow-hidden flex items-center pt-[130px] pb-24"
    >
      {/* Large ₦ watermark */}
      <div
        className="absolute right-[-6%] top-[2%] font-black text-white select-none pointer-events-none z-0 leading-none"
        style={{ fontSize: '44vw', opacity: 0.022 }}
        aria-hidden="true"
      >
        ₦
      </div>

      {/* Radial atmosphere */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 70% at 78% 38%, rgba(45,127,143,0.10) 0%, transparent 65%), radial-gradient(ellipse 40% 55% at 8% 92%, rgba(26,58,82,0.55) 0%, transparent 52%)',
        }}
      />

      {/* Noise */}
      <div className="absolute inset-0 noise opacity-[0.028] pointer-events-none" />

      {/* Faint horizontal rule behind left col */}
      <div
        className="absolute left-0 w-[44%] h-[1px] pointer-events-none"
        style={{
          top: '54%',
          background:
            'linear-gradient(90deg, rgba(45,127,143,0.0), rgba(45,127,143,0.16), rgba(45,127,143,0.0))',
        }}
      />

      <div className="max-w-[1240px] mx-auto px-8 relative z-[2] w-full grid grid-cols-1 lg:grid-cols-[1.05fr_0.82fr] gap-20 items-center">

        {/* ── Left ── */}
        <div>
          {/* Editorial label */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="h-[1px] w-10 bg-teal/55" />
            <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-teal-bright/70">
              The Averis System
            </span>
          </motion.div>

          {/* Headline — clip-reveal animation */}
          <h1 className="mb-9">
            <div className="overflow-hidden">
              <motion.span
                className="block text-[clamp(44px,5.8vw,86px)] font-black leading-[1.02] tracking-[-0.045em] text-white/55"
                initial={{ y: '112%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              >
                Your Income
              </motion.span>
            </div>

            <div className="overflow-hidden">
              <motion.span
                className="block text-[clamp(44px,5.8vw,86px)] font-black leading-[1.02] tracking-[-0.045em] text-white"
                initial={{ y: '112%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
              >
                Has A Ceiling.
              </motion.span>
            </div>

            {/* Teal accent rule */}
            <motion.div
              className="my-6 h-[2px] w-14 rounded-full bg-teal"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.44 }}
              style={{ transformOrigin: 'left' }}
            />

            {/* "We Don't." — teal serif italic + scramble */}
            <div className="overflow-hidden">
              <motion.span
                className="block font-serif italic font-extrabold text-[clamp(50px,6.4vw,94px)] leading-[1.0] tracking-[-0.04em]"
                style={{
                  background: 'linear-gradient(95deg, #2d7f8f 20%, #4dbdd4 80%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
                initial={{ y: '112%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.31 }}
              >
                <ScrambleText text="We Don't." delay={900} />
              </motion.span>
            </div>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
            className="text-[clamp(15px,1.4vw,17px)] text-white/50 leading-[1.88] max-w-[490px] mb-11"
          >
            Phase 1 — earn{' '}
            <span className="text-white/82 font-semibold">₦500K–₦1M/month</span> through digital
            marketing in 90 days. Phase 2 — grow it into a{' '}
            <span className="text-white/82 font-semibold">₦10M–₦50M+ investment portfolio.</span>{' '}
            One system. Two phases. No guesswork.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
            className="flex flex-col items-start gap-[14px] mb-14"
          >
            <a
              href="mailto:hello@averisacademy.com"
              className="inline-flex items-center gap-[10px] px-8 py-[15px] bg-teal text-white text-[15px] font-bold rounded-lg hover:bg-teal-light hover:-translate-y-[2px] hover:shadow-[0_20px_48px_rgba(45,127,143,0.42)] transition-all duration-300 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.12] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
              Book a Free Strategy Call
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M2.5 7.5H12.5M7.5 2.5L12.5 7.5L7.5 12.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#services"
              className="flex items-center gap-[7px] text-[13px] text-white/38 hover:text-white/65 transition-colors duration-200"
            >
              See how the system works
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 2v8M2 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>

          {/* Inline stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.86 }}
            className="flex items-center flex-wrap gap-x-5 gap-y-2 text-[13px] text-white/72 border-t border-white/[0.12] pt-7"
          >
            <span>
              <strong className="text-white/78 font-bold">70+</strong> members enrolled
            </span>
            <span className="w-[3px] h-[3px] rounded-full bg-white/20 flex-shrink-0" />
            <span>
              <strong className="text-white/78 font-bold">₦2.4M</strong> earned in week 1
            </span>
            <span className="w-[3px] h-[3px] rounded-full bg-white/20 flex-shrink-0" />
            <span>
              Launched <strong className="text-white/78 font-bold">May 2025</strong>
            </span>
          </motion.div>
        </div>

        {/* ── Right: Growth chart ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
          className="hidden lg:block bg-white/[0.034] border border-white/[0.07] rounded-[28px] p-8 backdrop-blur-sm"
        >
          <GrowthChart />
        </motion.div>

      </div>
    </section>
  )
}
