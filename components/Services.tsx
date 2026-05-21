'use client'

import { motion } from 'framer-motion'

interface CardData {
  phase: string
  icon: string
  title: string
  price: string
  desc: string
  features: string[]
}

const cards: CardData[] = [
  {
    phase: 'Foundation',
    icon: '💰',
    title: 'Averis Academy',
    price: '₦35,000 / 6 Months',
    desc: 'Learn digital marketing to earn ₦500K–₦1M/month. Four structured modules, weekly coaching, and forced accountability that gets results.',
    features: [
      'Affiliate Marketing Foundations',
      'Digital Product Creation',
      'Facebook & TikTok Ads Mastery',
      'Organic Traffic Blueprint',
      'Weekly Live Coaching Calls',
    ],
  },
  {
    phase: 'Community',
    icon: '🎯',
    title: 'Coaching & Accountability',
    price: 'Included with Academy',
    desc: 'You are never alone. Weekly live sessions, peer accountability trios, and a private student community keep you on track every single day.',
    features: [
      'Weekly Live Group Coaching',
      'Peer Accountability Trios',
      'Daily Check-in System',
      'Private Student Community',
      'Direct Mentor Access',
    ],
  },
  {
    phase: 'Advanced',
    icon: '🚀',
    title: 'Income Acceleration',
    price: 'Included with Academy',
    desc: 'Once you are earning, we show you how to scale. Advanced ad strategies, automation systems, and the freelance/agency model to 10× your income.',
    features: [
      'Advanced Paid Ads Scaling',
      'Income Automation Systems',
      'Freelance & Agency Model',
      'High-Ticket Offer Strategies',
      'Lifetime Access & Updates',
    ],
  },
]

function ServiceCard({ card, index }: { card: CardData; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 52 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: index * 0.12 }}
      viewport={{ once: true, margin: '-60px' }}
      className="relative overflow-hidden rounded-2xl border border-[#eef2f6] bg-[#f5f8fa] p-[34px_26px] cursor-pointer group hover:-translate-y-[7px] hover:border-transparent hover:shadow-[0_30px_60px_rgba(26,58,82,0.22)] transition-all duration-500"
    >
      {/* Sliding dark overlay */}
      <div className="svc-overlay" />

      {/* Content — all z-10 to sit above overlay */}
      <div className="relative z-10">
        <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-teal group-hover:text-teal-bright mb-[18px] transition-colors duration-300">
          {card.phase}
        </div>

        <div className="w-[52px] h-[52px] rounded-[13px] bg-teal/10 border border-teal/20 flex items-center justify-center text-[23px] mb-[22px] group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
          {card.icon}
        </div>

        <h3 className="text-[21px] font-black text-navy-dark tracking-tight mb-[9px] leading-[1.2] group-hover:text-white transition-colors duration-300">
          {card.title}
        </h3>

        <div className="inline-block text-[12px] font-bold px-3 py-1 rounded-full bg-teal/10 text-teal mb-[14px] group-hover:bg-white/12 group-hover:text-white/88 transition-all duration-300">
          {card.price}
        </div>

        <p className="text-[14px] text-slate-600 leading-[1.72] mb-[22px] group-hover:text-white/62 transition-colors duration-300">
          {card.desc}
        </p>

        <ul className="flex flex-col gap-[8px]">
          {card.features.map(f => (
            <li
              key={f}
              className="text-[13px] text-slate-600 flex items-center gap-[9px] group-hover:text-white/68 transition-colors duration-300"
            >
              <span className="w-[5px] h-[5px] rounded-full bg-teal group-hover:bg-teal-bright flex-shrink-0 transition-colors duration-300" />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-[120px] bg-white">
      <div className="max-w-[1240px] mx-auto px-8">

        {/* Header */}
        <div className="text-center max-w-[620px] mx-auto mb-[72px]">
          <motion.div
            initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-60px' }}
            className="mb-5"
          >
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.12em] uppercase px-4 py-[7px] rounded-full bg-teal/12 border border-teal/30 text-teal-bright">
              <span className="w-[5px] h-[5px] rounded-full bg-teal-bright animate-[pillDot_2s_ease-in-out_infinite]" />
              What We Offer
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            viewport={{ once: true, margin: '-60px' }}
            className="text-[clamp(32px,4.2vw,56px)] font-black tracking-[-0.04em] leading-[1.06] text-navy-dark mb-5"
          >
            Everything you need<br />
            to earn <em className="font-serif italic font-extrabold text-teal">online.</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            viewport={{ once: true, margin: '-60px' }}
            className="text-[17px] text-slate-600 leading-[1.78]"
          >
            One structured program. Live coaching. A community that holds you accountable.
            Everything built to get you earning real money online — in Nigeria.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px]">
          {cards.map((card, i) => (
            <ServiceCard key={card.title} card={card} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
