'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from './ThemeProvider'

const links = [
  { label: 'About',        href: '#about' },
  { label: 'Programs',     href: '#services' },
  { label: 'Results',      href: '#proof' },
  { label: 'How It Works', href: '#process' },
]

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  )
}

function ThemeToggle({ isLight }: { isLight: boolean }) {
  const { theme, toggle } = useTheme()
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200 ${
        isLight
          ? 'text-navy-dark/55 hover:text-navy-dark hover:bg-navy-darkest/6 dark:text-white/65 dark:hover:text-white dark:hover:bg-white/10'
          : 'text-white/55 hover:text-white hover:bg-white/10'
      }`}
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}

function Logo({ isLight, isHome }: { isLight: boolean; isHome: boolean }) {
  return (
    <a href={isHome ? '#hero' : '/'} className="flex items-center">
      {/* Blue (dark navy) logo — light sections in light mode only */}
      <img
        src="/Logo%20Mark/SVG/Comb%20Blue.svg"
        alt="Averis Academy"
        className={`h-[30px] w-auto ${isLight ? 'block dark:hidden' : 'hidden'}`}
        draggable={false}
      />
      {/* White logo — dark sections or dark mode */}
      <img
        src="/Logo%20Mark/SVG/Comb%20White.svg"
        alt="Averis Academy"
        className={`h-[30px] w-auto ${isLight ? 'hidden dark:block' : 'block'}`}
        draggable={false}
      />
    </a>
  )
}

const LIGHT_SECTIONS = new Set(['about', 'services', 'process', 'contact'])

export default function Navbar() {
  const pathname = usePathname()
  const isHome   = pathname === '/'

  const [scrolled,  setScrolled]  = useState(false)
  const [active,    setActive]    = useState('')
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 55)
      if (!isHome) return
      const sections = ['hero', 'about', 'services', 'proof', 'process', 'contact']
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

  const { theme } = useTheme()
  const isLight = isHome && LIGHT_SECTIONS.has(active) && theme === 'light'

  const smoothScroll = (href: string) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const resolveHref = (href: string) => isHome ? href : `/${href}`

  const handleClick = (e: React.MouseEvent, href: string) => {
    if (!isHome) return
    e.preventDefault()
    smoothScroll(href)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[800] transition-all duration-300 ${
          scrolled
            ? isLight
              ? 'py-3 bg-white/95 dark:bg-navy-darkest/92 backdrop-blur-2xl shadow-[0_1px_0_rgba(0,0,0,0.07),0_8px_32px_rgba(0,0,0,0.10)] dark:shadow-[0_1px_0_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.35)]'
              : 'py-3 bg-navy-darkest/92 backdrop-blur-2xl shadow-[0_1px_0_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.35)]'
            : isLight
              ? 'py-6 bg-white/80 dark:bg-transparent backdrop-blur-xl'
              : 'py-6'
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-8 flex items-center justify-between">
          <Logo isLight={isLight} isHome={isHome} />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <a
                key={l.href}
                href={resolveHref(l.href)}
                onClick={e => handleClick(e, l.href)}
                className={`px-4 py-2 text-[14px] font-medium rounded-lg transition-colors duration-200 ${
                  isHome && active === l.href.replace('#', '')
                    ? 'text-teal'
                    : isLight
                      ? 'text-navy-dark/65 hover:text-navy-dark hover:bg-navy-darkest/6 dark:text-white/65 dark:hover:text-white dark:hover:bg-white/7'
                      : 'text-white/65 hover:text-white hover:bg-white/7'
                }`}
              >
                {l.label}
              </a>
            ))}

            <ThemeToggle isLight={isLight} />

            <a
              href={resolveHref('#contact')}
              onClick={e => handleClick(e, '#contact')}
              className="ml-2 px-6 py-[10px] bg-teal text-white text-[14px] font-bold rounded-lg hover:bg-teal-light transition-all duration-300 hover:shadow-[0_8px_22px_rgba(49,184,69,0.4)] hover:-translate-y-px"
            >
              Get Started →
            </a>
          </nav>

          {/* Mobile: theme toggle + hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle isLight={isLight} />
            <button
              onClick={() => setMenuOpen(v => !v)}
              className="flex flex-col gap-[5px] p-1"
              aria-label="Toggle menu"
            >
              <span className={`block w-[22px] h-[1.5px] rounded-sm transition-all duration-300 ${isLight ? 'bg-navy-dark dark:bg-white' : 'bg-white'} ${menuOpen ? 'translate-y-[6.5px] rotate-45' : ''}`} />
              <span className={`block w-[22px] h-[1.5px] rounded-sm transition-all duration-300 ${isLight ? 'bg-navy-dark dark:bg-white' : 'bg-white'} ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-[22px] h-[1.5px] rounded-sm transition-all duration-300 ${isLight ? 'bg-navy-dark dark:bg-white' : 'bg-white'} ${menuOpen ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
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
