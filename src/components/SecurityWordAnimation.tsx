import { useEffect, useRef, useState } from 'react'

const LETTERS = ['S', 'E', 'G', 'U', 'R', 'A', 'N', 'Ç', 'A']

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value))
}

function lerp(start: number, end: number, t: number) {
  return start + (end - start) * t
}

function letterMorph(globalProgress: number, index: number) {
  const total = LETTERS.length
  const spread = 1 / total
  const start = index * spread * 0.7
  const end = start + spread * 1.1
  return clamp((globalProgress - start) / (end - start), 0, 1)
}

function SecurityLetter({ letter, morph }: { letter: string; morph: number }) {
  const size = lerp(40, 30, morph)
  const width = lerp(36, 30, morph)
  const radius = lerp(8, 999, morph)
  const letterOpacity = 1 - clamp(morph / 0.45, 0, 1)
  const letterScale = lerp(1, 0.2, morph)
  const background =
    morph < 0.05
      ? 'rgba(255,255,255,0.06)'
      : `rgba(74, 222, 128, ${lerp(0.35, 1, morph)})`
  const borderAlpha = lerp(1, 0, clamp((morph - 0.3) / 0.7, 0, 1))
  const glow =
    morph > 0.6
      ? `0 0 ${lerp(0, 14, (morph - 0.6) / 0.4)}px rgba(74,222,128,0.45)`
      : 'none'

  return (
    <span
      className="security-letters__letter"
      style={{
        width,
        height: size,
        borderRadius: radius,
        background,
        border: `${borderAlpha}px solid rgba(255,255,255,0.12)`,
        boxShadow: glow,
      }}
    >
      <span
        className="security-letters__char"
        style={{
          opacity: letterOpacity,
          transform: `scale(${letterScale})`,
        }}
      >
        {letter}
      </span>
    </span>
  )
}

export function SecurityWordAnimation() {
  const blockRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = 0

    const update = () => {
      const el = blockRef.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const center = rect.top + rect.height / 2
      const start = vh * 0.95
      const end = vh * 0.25
      const next = clamp((start - center) / (start - end), 0, 1)

      setProgress(next)
    }

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div ref={blockRef} className="security-letters">
      <div className="security-letters__row">
        {LETTERS.map((letter, i) => (
          <SecurityLetter
            key={`${letter}-${i}`}
            letter={letter}
            morph={letterMorph(progress, i)}
          />
        ))}
      </div>
    </div>
  )
}
