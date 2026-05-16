function Logo() {
  return (
    <a href="#hero" className="flex items-center gap-3">
      <div className="w-[37px] h-[37px] rounded-[9px] bg-gradient-to-br from-teal to-teal-light flex items-center justify-center relative overflow-hidden flex-shrink-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="relative z-10">
          <path d="M10 2L2 18H6.6L10 11L13.4 18H18L10 2Z" fill="white" fillOpacity="0.94" />
          <path d="M7.6 14.6H12.4L10 10L7.6 14.6Z"        fill="white" fillOpacity="0.32" />
        </svg>
      </div>
      <span className="text-[17px] font-black text-white tracking-tight">
        Averis<span className="text-teal-bright">Academy</span>
      </span>
    </a>
  )
}

const socials = [
  { label: 'Instagram', icon: '📸', href: '#' },
  { label: 'Twitter/X', icon: '🐦', href: '#' },
  { label: 'Facebook',  icon: '👥', href: '#' },
  { label: 'YouTube',   icon: '▶️', href: '#' },
  { label: 'WhatsApp',  icon: '💬', href: 'https://wa.me/2349166257582' },
]

const footerCols = [
  {
    title: 'Programs',
    links: [
      { label: 'Averis Academy', href: '#services' },
      { label: 'Wealth Club',    href: '#services' },
      { label: '8-Figure Club',  href: '#services' },
      { label: 'Marketplace',    href: '#services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us',     href: '#about' },
      { label: 'Results',      href: '#proof' },
      { label: 'How It Works', href: '#process' },
      { label: 'Contact',      href: '#contact' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'hello@averisacademy.com', href: 'mailto:hello@averisacademy.com' },
      { label: '+234 808 530 0040',       href: 'tel:+2348085300040' },
      { label: 'WhatsApp: +234 916 625 7582', href: 'https://wa.me/2349166257582' },
      { label: 'Lagos, Nigeria',          href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-navy-darkest pt-[72px] pb-8">
      <div className="max-w-[1240px] mx-auto px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-14">
          {/* Brand */}
          <div>
            <Logo />
            <p className="text-[14px] text-white/42 leading-[1.77] max-w-[272px] mt-4 mb-6">
              Nigeria&apos;s premier wealth-building platform. We teach you to make money, then help
              you grow it into generational wealth.
            </p>
            <div className="flex gap-[9px]">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-[37px] h-[37px] rounded-[9px] bg-white/5 border border-white/8 flex items-center justify-center text-[14px] text-white/55 hover:bg-teal hover:border-teal hover:text-white hover:-translate-y-[2px] transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          {footerCols.map(col => (
            <div key={col.title}>
              <h5 className="text-[12px] font-bold text-white/88 uppercase tracking-[0.1em] mb-[18px]">
                {col.title}
              </h5>
              <ul className="flex flex-col gap-[10px]">
                {col.links.map(l => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={l.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-[14px] text-white/42 hover:text-teal-bright transition-colors duration-200"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/6 pt-7 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-white/28">
            © 2026{' '}
            <a href="#" className="text-teal-bright hover:underline">Averis Global Limited</a>.
            {' '}All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Disclaimer'].map(l => (
              <a key={l} href="#" className="text-[13px] text-white/28 hover:text-teal-bright transition-colors duration-200">
                {l}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
