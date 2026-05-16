'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number; y: number
  r: number
  vx: number; vy: number
  a: number
  col: string
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let W = 0, H = 0
    const particles: Particle[] = []
    const COUNT = 55

    const resize = () => {
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const mkParticle = (): Particle => ({
      x:   Math.random() * W,
      y:   Math.random() * H,
      r:   Math.random() * 1.8 + 0.4,
      vx:  (Math.random() - 0.5) * 0.38,
      vy:  (Math.random() - 0.5) * 0.38,
      a:   Math.random() * 0.38 + 0.08,
      col: Math.random() > 0.5 ? '45,127,143' : '58,157,176',
    })

    for (let i = 0; i < COUNT; i++) particles.push(mkParticle())

    let raf: number

    const draw = () => {
      ctx.clearRect(0, 0, W, H)

      for (const p of particles) {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > W || p.y < 0 || p.y > H) {
          Object.assign(p, mkParticle())
        }
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.col},${p.a})`
        ctx.fill()
      }

      // connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const d  = Math.sqrt(dx * dx + dy * dy)
          if (d < 115) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(45,127,143,${(1 - d / 115) * 0.1})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      raf = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  )
}
