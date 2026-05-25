'use client'

import { motion } from 'framer-motion'
import { TrianglePattern, RocketIcon } from './BrandIcons'

export default function CTA() {
  return (
    <section id="contact" className="py-[100px] bg-[#f5f8fa]">
      <div className="max-w-[1240px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: '-60px' }}
          className="relative overflow-hidden rounded-[32px] px-16 py-[90px] text-center"
          style={{ background: 'linear-gradient(138deg, #0e2028 0%, #122f38 48%, #24963b 100%)' }}
        >
          {/* Rotating conic gradient */}
          <div
            className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] animate-[ctaSpin_22s_linear_infinite] pointer-events-none"
            style={{
              background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(49,184,69,0.15) 60deg, transparent 120deg, rgba(49,184,69,0.08) 180deg, transparent 240deg, rgba(49,184,69,0.12) 300deg, transparent 360deg)',
            }}
          />
          {/* Noise overlay */}
          <div className="absolute inset-0 noise opacity-[0.025] pointer-events-none" />

          {/* Brand decorations */}
          <TrianglePattern className="absolute -left-12 -bottom-16 w-[320px] h-auto text-teal-light opacity-[0.10] pointer-events-none hidden lg:block" />
          <RocketIcon className="absolute right-[6%] top-[12%] w-[160px] h-auto text-teal-light opacity-[0.08] pointer-events-none hidden lg:block" />

          {/* Content */}
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              viewport={{ once: true, margin: '-60px' }}
              className="text-[clamp(30px,4.2vw,58px)] font-black text-white tracking-[-0.04em] leading-[1.06] mb-5"
            >
              Ready to stop being broke?<br />
              <em
                className="font-serif italic font-extrabold"
                style={{
                  background: 'linear-gradient(90deg, #5ae872, #86efac)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Let&apos;s talk.
              </em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
              viewport={{ once: true, margin: '-60px' }}
              className="text-[18px] text-white/75 max-w-[470px] mx-auto leading-[1.72] mb-11"
            >
              Join 70+ Nigerians already building wealth with the Averis system. Your first
              ₦100,000 could be 30 days away.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
              viewport={{ once: true, margin: '-60px' }}
              className="flex gap-4 justify-center flex-wrap"
            >
              <a
                href="https://wa.me/2348148818354"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-[10px] px-9 py-[18px] bg-white text-navy-dark text-[15px] font-black rounded-lg hover:-translate-y-[2px] hover:shadow-[0_18px_44px_rgba(0,0,0,0.22)] transition-all duration-300 relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                📱 WhatsApp Us Now
              </a>
              <a
                href="mailto:hello@averisacademy.com"
                className="inline-flex items-center gap-[10px] px-9 py-[18px] bg-transparent text-white text-[15px] font-black rounded-lg border border-white/28 hover:border-white/65 hover:bg-white/8 hover:-translate-y-[2px] transition-all duration-300"
              >
                ✉️ Send an Email
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
