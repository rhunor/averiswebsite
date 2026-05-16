'use client'

import { useEffect, useRef } from 'react'

export default function Cursor() {
  const ringRef  = useRef<HTMLDivElement>(null)
  const dotRef   = useRef<HTMLDivElement>(null)
  const glowRef  = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only run on pointer-fine devices
    if (!window.matchMedia('(pointer: fine)').matches) return
    document.body.classList.add('custom-cursor')

    let mx = 0, my = 0
    let rx = 0, ry = 0
    let gx = 0, gy = 0
    let raf: number

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = mx + 'px'
        dotRef.current.style.top  = my + 'px'
      }
    }
    document.addEventListener('mousemove', onMove)

    const animate = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      gx += (mx - gx) * 0.05
      gy += (my - gy) * 0.05
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px'
        ringRef.current.style.top  = ry + 'px'
      }
      if (glowRef.current) {
        glowRef.current.style.left = gx + 'px'
        glowRef.current.style.top  = gy + 'px'
      }
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    const addHover    = () => document.body.classList.add('cursor-hover')
    const removeHover = () => document.body.classList.remove('cursor-hover')
    const targets = document.querySelectorAll('a, button, [data-cursor-hover]')
    targets.forEach(el => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', removeHover)
    })

    return () => {
      document.body.classList.remove('custom-cursor')
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      targets.forEach(el => {
        el.removeEventListener('mouseenter', addHover)
        el.removeEventListener('mouseleave', removeHover)
      })
    }
  }, [])

  return (
    <>
      {/* Glow */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-80 h-80 rounded-full pointer-events-none z-[9997]"
        style={{
          transform: 'translate(-50%,-50%)',
          background: 'radial-gradient(circle, rgba(45,127,143,0.07) 0%, transparent 68%)',
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-teal-light pointer-events-none z-[9999] transition-[width,height,background] duration-300"
        style={{ transform: 'translate(-50%,-50%)', mixBlendMode: 'screen' }}
      />
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-[5px] h-[5px] rounded-full bg-teal-bright pointer-events-none z-[10000]"
        style={{ transform: 'translate(-50%,-50%)' }}
      />
    </>
  )
}
