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
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: 'https://x.com/averisacademy?s=21',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@calebekenenwanneka1829?si=dFirxJzQtriHSFO6',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/2349166257582',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
      </svg>
    ),
  },
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
            <p className="text-[14px] text-white/78 leading-[1.77] max-w-[272px] mt-4 mb-6">
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
                      className="text-[14px] text-white/78 hover:text-teal-bright transition-colors duration-200"
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
          <p className="text-[13px] text-white/65">
            © 2026{' '}
            <a href="#" className="text-teal-bright hover:underline">Averis Global Limited</a>.
            {' '}All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Disclaimer'].map(l => (
              <a key={l} href="#" className="text-[13px] text-white/65 hover:text-teal-bright transition-colors duration-200">
                {l}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
