'use client'

import { useEffect, useRef, useState } from 'react'

const CHARS = '!<>-_\\/[]{}—=+*^?#ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

interface ScrambleTextProps {
  text: string
  className?: string
  delay?: number   // ms before starting
  speed?: number   // lower = faster (default 40ms per frame)
}

export default function ScrambleText({ text, className, delay = 0, speed = 40 }: ScrambleTextProps) {
  const [display, setDisplay] = useState(text)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      type QueueItem = { from: string; to: string; start: number; end: number; char: string }
      const queue: QueueItem[] = Array.from({ length: text.length }, (_, i) => ({
        from:  CHARS[Math.floor(Math.random() * CHARS.length)],
        to:    text[i],
        start: Math.floor(Math.random() * 14),
        end:   Math.floor(Math.random() * 14) + Math.floor(Math.random() * 12) + 8,
        char:  '',
      }))

      let frame = 0

      const tick = () => {
        let output = ''
        let complete = 0
        for (const q of queue) {
          if (frame >= q.end) {
            output += q.to
            complete++
          } else if (frame >= q.start) {
            if (!q.char || Math.random() < 0.28)
              q.char = CHARS[Math.floor(Math.random() * CHARS.length)]
            output += q.char
          } else {
            output += q.from
          }
        }
        setDisplay(output)
        if (complete < queue.length) {
          frame++
          rafRef.current = window.setTimeout(tick, speed)
        }
      }
      tick()
    }, delay)

    return () => {
      clearTimeout(timeout)
      clearTimeout(rafRef.current)
    }
  }, [text, delay, speed])

  return <span className={className}>{display}</span>
}
