const items = [
  'Affiliate Marketing', 'Digital Products', 'Facebook Ads Mastery',
  'Organic Traffic', 'Wealth Building', 'Stock Market',
  'Crypto Portfolios', 'Financial Freedom', 'TikTok Ads', '₦500K Monthly',
]

function MarqueeRow({ items }: { items: string[] }) {
  return (
    <div className="flex flex-shrink-0" aria-hidden>
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-4 px-8 text-[12px] font-bold uppercase tracking-[0.11em] text-white/30 whitespace-nowrap">
          {item}
          <span className="w-1 h-1 rounded-full bg-teal opacity-70" />
        </div>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="bg-navy-dark border-t border-white/[0.04] border-b border-b-white/[0.04] py-[17px] overflow-hidden">
      <div className="flex animate-marquee">
        <MarqueeRow items={items} />
        <MarqueeRow items={items} />
      </div>
    </div>
  )
}
