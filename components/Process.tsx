'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    icon: '🎓',
    num: 'Step 01',
    title: 'Learn',
    body: 'Join Averis Academy for ₦35,000. Four comprehensive modules, weekly live coaching, and an accountability trio that checks in on you every single day.',
  },
  {
    icon: '💸',
    num: 'Step 02',
    title: 'Earn',
    body: 'Run ads, build audiences, sell digital products. Most students make their first ₦100,000 within 30 days. By Month 6: ₦500K–₦1M/month.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-[120px] bg-white">
      <div className="max-w-[1240px] mx-auto px-8">

        {/* Header */}
        <div className="text-center max-w-[540px] mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-60px' }}
            className="mb-5"
          >
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.12em] uppercase px-4 py-[7px] rounded-full bg-teal/12 border border-teal/30 text-teal-bright">
              <span className="w-[5px] h-[5px] rounded-full bg-teal-bright animate-[pillDot_2s_ease-in-out_infinite]" />
              How It Works
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            viewport={{ once: true, margin: '-60px' }}
            className="text-[clamp(32px,4.2vw,56px)] font-black tracking-[-0.04em] leading-[1.06] text-navy-dark mb-5"
          >
            Two steps to{' '}
            <em className="font-serif italic font-extrabold text-teal">earning online.</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            viewport={{ once: true, margin: '-60px' }}
            className="text-[17px] text-slate-600 leading-[1.78]"
          >
            No confusion. No fluff. Learn the skill, then use it to earn real money online.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0">
          {/* Connector line — desktop only */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            viewport={{ once: true, margin: '-60px' }}
            className="absolute top-[43px] hidden md:block"
            style={{
              left: 'calc(25% + 43px)',
              right: 'calc(25% + 43px)',
              height: '2px',
              background: 'linear-gradient(90deg, #31b845 0%, #24963b 50%, #122f38 100%)',
              transformOrigin: 'left',
            }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 52 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: i * 0.15 }}
              viewport={{ once: true, margin: '-60px' }}
              className="text-center px-6 relative z-10 group"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="w-[86px] h-[86px] rounded-full border-2 border-[#eef2f6] bg-white flex items-center justify-center mx-auto mb-7 text-[30px] cursor-default group-hover:border-teal group-hover:shadow-[0_18px_44px_rgba(26,58,82,0.28)] transition-all duration-400"
                style={{ boxShadow: 'none' }}
              >
                {step.icon}
              </motion.div>
              <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-teal mb-[9px]">
                {step.num}
              </div>
              <h3 className="text-[26px] font-black text-navy-dark tracking-tight mb-3">
                {step.title}
              </h3>
              <p className="text-[14px] text-slate-600 leading-[1.78]">{step.body}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
