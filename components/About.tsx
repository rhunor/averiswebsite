'use client'

import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 48 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay } },
})

const checks = [
  {
    title: 'Nigerian-specific',
    text: 'Paystack, Flutterwave, local market tactics that actually work here — not generic international advice.',
  },
  {
    title: 'Accountability-forced',
    text: 'No "watch at your own pace" excuses. Locked modules, weekly calls, and peer accountability trios.',
  },
  {
    title: 'Two-phase system',
    text: 'We teach you to earn it, then grow it into generational wealth. Nobody else in Nigeria does both.',
  },
  {
    title: 'Proven founder',
    text: '₦0 to ₦5M/month in 12 months. Nigerian. Recent. Provable. Still actively doing it today.',
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="py-[120px] bg-[#f5f8fa] relative overflow-hidden"
    >
      {/* top line decoration */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(45,127,143,0.35), transparent)' }}
      />

      <div className="max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* ── Left ── */}
          <div>
            <motion.div
              variants={fadeUp(0)} initial="hidden"
              whileInView="show" viewport={{ once: true, margin: '-60px' }}
              className="mb-5"
            >
              <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.12em] uppercase px-4 py-[7px] rounded-full bg-teal/12 border border-teal/30 text-teal-bright">
                <span className="w-[5px] h-[5px] rounded-full bg-teal-bright animate-[pillDot_2s_ease-in-out_infinite]" />
                Who We Are
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp(0.1)} initial="hidden"
              whileInView="show" viewport={{ once: true, margin: '-60px' }}
              className="text-[clamp(30px,3.6vw,50px)] font-black tracking-[-0.04em] leading-[1.09] text-navy-dark mb-6"
            >
              You&apos;re working hard.<br />
              But you&apos;re still{' '}
              <em className="font-serif font-extrabold not-italic text-teal italic">broke.</em>
              <br />Here&apos;s why.
            </motion.h2>

            <motion.p
              variants={fadeUp(0.2)} initial="hidden"
              whileInView="show" viewport={{ once: true, margin: '-60px' }}
              className="text-[16px] text-slate-600 leading-[1.8] mb-4"
            >
              You trade time for money — and time has a ceiling. Your salary can&apos;t scale. Your
              hours can&apos;t grow. And inflation keeps eating what little you save. That&apos;s the trap
              90% of Nigerians are stuck in.
            </motion.p>

            <motion.p
              variants={fadeUp(0.28)} initial="hidden"
              whileInView="show" viewport={{ once: true, margin: '-60px' }}
              className="text-[16px] text-slate-600 leading-[1.8] mb-8"
            >
              Averis Academy breaks that cycle. We teach you a skill that pays you whether you&apos;re
              awake or asleep. Then we help you invest those earnings so your money works harder than
              you ever could.
            </motion.p>

            <div className="flex flex-col gap-[13px]">
              {checks.map((c, i) => (
                <motion.div
                  key={c.title}
                  variants={fadeUp(0.3 + i * 0.08)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-60px' }}
                  className="flex items-start gap-[13px]"
                >
                  <div className="w-[23px] h-[23px] rounded-full bg-teal flex items-center justify-center text-white text-[12px] font-bold flex-shrink-0 mt-[2px]">
                    ✓
                  </div>
                  <p className="text-[15px] text-slate-800 leading-[1.6]">
                    <strong className="font-bold">{c.title}</strong> — {c.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Right: Founder card ── */}
          <motion.div
            initial={{ opacity: 0, x: 52 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            viewport={{ once: true, margin: '-60px' }}
            className="relative"
          >
            <div className="bg-navy-dark rounded-[32px] overflow-hidden">
              {/* Photo area */}
              <div
                className="h-[290px] flex items-center justify-center relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #1a3a52 0%, #1f5f6e 100%)' }}
              >
                <div className="absolute inset-0" style={{
                  background: 'radial-gradient(circle at 32% 68%, rgba(45,127,143,0.4) 0%, transparent 52%), radial-gradient(circle at 70% 22%, rgba(26,58,82,0.65) 0%, transparent 48%)',
                }} />
                <div className="absolute bottom-0 left-0 right-0 h-[1px]"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(45,127,143,0.5), transparent)' }}
                />
                <div className="w-24 h-24 rounded-full bg-white/10 border-2 border-white/18 flex items-center justify-center text-[32px] font-black text-white relative z-10">
                  CI
                </div>
              </div>

              {/* Body */}
              <div className="p-7 pb-8">
                <div className="text-[19px] font-black text-white tracking-tight mb-[3px]">Caleb Iwanneka</div>
                <div className="text-[12px] font-bold text-teal-bright uppercase tracking-[0.09em] mb-5">Founder, Averis Academy</div>
                <blockquote className="text-[15px] text-white/62 leading-[1.72] font-serif italic border-l-2 border-teal pl-4 mb-6">
                  &ldquo;I was broke 12 months ago. I understand the frustration. I built the system I wish
                  existed when I was starting — now I&apos;m handing it to you.&rdquo;
                </blockquote>
                <div className="flex gap-[18px] pt-5 border-t border-white/8">
                  {[
                    { val: '₦5M', unit: '', label: 'Per Month' },
                    { val: '12',  unit: '',  label: 'Months to get there' },
                    { val: '70',  unit: '+', label: 'Month 1 Students' },
                  ].map(s => (
                    <div key={s.label}>
                      <div className="text-[22px] font-black text-white tracking-tight">
                        {s.val}<span className="text-teal-bright">{s.unit}</span>
                      </div>
                      <div className="text-[11px] text-white/38 uppercase tracking-[0.08em]">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -top-4 -right-4 bg-white rounded-2xl p-[13px_16px] flex items-center gap-[10px] shadow-[0_16px_48px_rgba(0,0,0,0.16)] z-10"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="text-[22px]">🏆</span>
              <div>
                <div className="text-[15px] font-black text-navy-dark tracking-tight">₦0 → ₦5M</div>
                <div className="text-[11px] text-slate-500">In 12 months</div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
