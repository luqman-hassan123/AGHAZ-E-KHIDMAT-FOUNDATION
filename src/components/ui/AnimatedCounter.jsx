import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function AnimatedCounter({ value, className = '', duration = 1600 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.6 })
  const [display, setDisplay] = useState(0)
  const isNumeric = typeof value === 'number' || (typeof value === 'string' && /^\d+$/.test(value))

  useEffect(() => {
    if (!isInView || !isNumeric) return undefined

    const target = Number(value)
    const animDuration = target > 100 ? Math.max(duration, 2200) : duration
    const startTime = performance.now()
    let frameId

    const tick = (now) => {
      const progress = Math.min((now - startTime) / animDuration, 1)
      const eased = 1 - (1 - progress) ** 3
      setDisplay(Math.round(target * eased))
      if (progress < 1) frameId = requestAnimationFrame(tick)
    }

    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [isInView, value, isNumeric, duration])

  if (!isNumeric) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    )
  }

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
