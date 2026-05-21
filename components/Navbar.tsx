'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'About',       href: '#about' },
  { label: 'Programs',    href: '#services' },
  { label: 'Results',     href: '#proof' },
  { label: 'How It Works',href: '#process' },
]

function Logo({ isLight, isHome }: { isLight: boolean; isHome: boolean }) {
  return (
    <a href={isHome ? '#hero' : '/'} className="flex items-center gap-3">
      <div className="w-[38px] h-[38px] rounded-[10px] bg-gradient-to-br from-teal to-teal-light flex items-center justify-center relative overflow-hidden flex-shrink-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="relative z-10">
          <path d="M10 2L2 18H6.6L10 11L13.4 18H18L10 2Z" fill="white" fillOpacity="0.94" />
          <path d="M7.6 14.6H12.4L10 10L7.6 14.6Z"        fill="white" fillOpacity="0.32" />
        </svg>
      </div>
      <span className={`text-[17px] font-black tracking-tight transition-colors duration-300 ${isLight ? 'text-navy-dark' : 'text-white'}`}>
        Averis<span className="text-teal">Academy</span>
      </span>
    </a>
  )
}

const LIGHT_SECTIONS = new Set(['about', 'services', 'process', 'contact'])

export default function Navbar() {
  const pathname  = usePathname()
  const isHome    = pathname === '/'

  const [scrolled, setScrolled] = useState(false)
  const [active,   setActive]   = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 55)
      if (!isHome) return

      const sections = ['hero','about','services','proof','process','contact']
      let cur = ''
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) cur = id
      }
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  const isLight = isHome && LIGHT_SECTIONS.has(active)

  const smoothScroll = (href: string) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  // On sub-pages, links point back to home with the hash
  const resolveHref = (href: string) => isHome ? href : `/${href}`

  const handleClick = (e: React.MouseEvent, href: string) => {
    if (!isHome) return           // let normal navigation happen
    e.preventDefault()
    smoothScroll(href)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[800] transition-all duration-300 ${
          scrolled
            ? isLight
              ? 'py-3 bg-white/95 backdrop-blur-2xl shadow-[0_1px_0_rgba(0,0,0,0.07),0_8px_32px_rgba(0,0,0,0.10)]'
              : 'py-3 bg-navy-darkest/92 backdrop-blur-2xl shadow-[0_1px_0_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.35)]'
            : isLight
              ? 'py-6 bg-white/80 backdrop-blur-xl'
              : 'py-6'
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-8 flex items-center justify-between">
          <Logo isLight={isLight} isHome={isHome} />

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <a
                key={l.href}
                href={resolveHref(l.href)}
                onClick={e => handleClick(e, l.href)}
                className={`px-4 py-2 text-[14px] font-medium rounded-lg transition-colors duration-200 ${
                  isHome && active === l.href.replace('#','')
                    ? 'text-teal'
                    : isLight
                      ? 'text-navy-dark/65 hover:text-navy-dark hover:bg-navy-darkest/6'
                      : 'text-white/65 hover:text-white hover:bg-white/7'
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href={resolveHref('#contact')}
              onClick={e => handleClick(e, '#contact')}
              className="ml-2 px-6 py-[10px] bg-teal text-white text-[14px] font-bold rounded-lg hover:bg-teal-light transition-all duration-300 hover:shadow-[0_8px_22px_rgba(45,127,143,0.4)] hover:-translate-y-px"
            >
              Get Started →
            </a>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            className="md:hidden flex flex-col gap-[5px] p-1"
            aria-label="Toggle menu"
          >
            <span className={`block w-[22px] h-[1.5px] rounded-sm transition-all duration-300 ${isLight ? 'bg-navy-dark' : 'bg-white'} ${menuOpen ? 'translate-y-[6.5px] rotate-45' : ''}`} />
            <span className={`block w-[22px] h-[1.5px] rounded-sm transition-all duration-300 ${isLight ? 'bg-navy-dark' : 'bg-white'} ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-[22px] h-[1.5px] rounded-sm transition-all duration-300 ${isLight ? 'bg-navy-dark' : 'bg-white'} ${menuOpen ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[790] bg-navy-darkest/97 backdrop-blur-2xl flex flex-col items-center justify-center gap-10"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-8 text-[30px] text-white leading-none"
              aria-label="Close"
            >
              ×
            </button>
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={resolveHref(l.href)}
                onClick={e => handleClick(e, l.href)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="text-[28px] font-black text-white tracking-tight hover:text-teal-bright transition-colors"
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href={resolveHref('#contact')}
              onClick={e => handleClick(e, '#contact')}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.07 }}
              className="text-[28px] font-black text-teal-bright tracking-tight"
            >
              Get Started →
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
